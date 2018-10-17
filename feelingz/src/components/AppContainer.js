import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Navbar from './Navbar'
import WebcamCapture from './WebcamCapture.js';
import HomePage from './HomePage'
import MyMoods from './MyMoods'
import { toggleWebcam, uploadWidget, createEmotion } from '../actions'

var cloudinary = require('cloudinary')


class AppContainer extends Component {


  uploadWidget = (imageSrc) => {
    // console.log('img', imageSrc)
    cloudinary.config({
      cloud_name: process.env.REACT_APP_CLOUD_NAME,
      api_key: process.env.REACT_APP_API_KEY,
      api_secret: process.env.REACT_APP_SECRET_KEY
    });
    cloudinary.uploader.upload(imageSrc, (result) => {
      this.props.uploadWidget(result)
      this.analizeImg()
    })

  }

  analizeImg = () => {
    // console.log(this.props.selfie.secure_url);
    const request = require('request');

    // Replace <Subscription Key> with your valid subscription key.
    const subscriptionKey = process.env.REACT_APP_KEY_1;

    // You must use the same location in your REST call as you used to get your
    // subscription keys. For example, if you got your subscription keys from
    // westus, replace "westcentralus" in the URL below with "westus".
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect';

    const imageUrl = this.props.selfie.secure_url;

    // Request parameters.
    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'smile,emotion,age,gender'
        // 'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
            // 'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: `{"url": '${imageUrl}'}`,
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      let emotionResponse = JSON.parse(jsonResponse)[0].faceAttributes.emotion
      let allPhotoParams = JSON.parse(jsonResponse)[0]
      this.props.createEmotion(emotionResponse)
      console.log('Emotion', emotionResponse)
      console.log('All Params', allPhotoParams)
    });
  }

  showWebcam = e => {
    this.props.toggleWebcam()
  }



  render() {
    // console.log('state', this.state)
    return (
      <div >
        <Navbar backgroundColor='9EADC8'/>
          <Switch >
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/index' render={()=> <WebcamCapture webcamStatus={this.props.showWebcam} showWebcam={this.showWebcam} uploadWidget={this.uploadWidget} image={this.capture} selfie={this.props.selfie}/>}/>
            <Route exact path='/my_moods' component={MyMoods}/>
          </Switch>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    showWebcam: state.showWebcam,
    selfie: state.selfie,
    emotion: state.emotion,
    mood: state.mood
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleWebcam: () => dispatch(toggleWebcam())
//   }
// }

export default withRouter(connect(mapsStateToProps, {toggleWebcam, uploadWidget, createEmotion}) (AppContainer));

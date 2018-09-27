import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './Navbar'
import CreateMyMood from './CreateMyMood'
import WebcamCapture from './WebcamCapture.js';

import HomePage from './HomePage'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

var cloudinary = require('cloudinary')


class AppContainer extends Component {

  state = {
    showWebcam: false,
    selfie: null,
    emotion: null
  }

  uploadWidget = (imageSrc) => {
    // console.log('img', imageSrc)
    cloudinary.config({
      cloud_name: process.env.REACT_APP_CLOUD_NAME,
      api_key: process.env.REACT_APP_API_KEY,
      api_secret: process.env.REACT_APP_SECRET_KEY
    });
    cloudinary.uploader.upload(imageSrc, (result) => {
      this.setState({
        selfie: result
      }, this.analizeImg);
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

      const imageUrl = this.state.selfie.secure_url;

      // Request parameters.
      const params = {
          'returnFaceId': 'true',
          'returnFaceLandmarks': 'false',
          'returnFaceAttributes': 'age,gender,smile,' +
          // 'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
              'emotion'
              // 'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
      };

      const options = {
          uri: uriBase,
          qs: params,
          // body: '{"url": ' + '"' + imageUrl + '"}',
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
        console.log('JSON Response', jsonResponse);
        let emotionResponse = JSON.parse(jsonResponse)[0]

        this.setState = {
          emotion: {...emotionResponse }
        }
      });
  }

  showWebcam = e => {
    this.setState(prevState => {
      return {showWebcam: !prevState.showWebcam}
    })
  }



  render() {
    // console.log(process.env.REACT_APP_CLOUD_NAME)
    return (
      <div>
        <Navbar />
        <Segment >
          <WebcamCapture webcamStatus={this.state.showWebcam} showWebcam={this.showWebcam} uploadWidget={this.uploadWidget} image={this.capture} selfie={this.state.selfie}/>
        </Segment>
        <Segment >
          <CreateMyMood/>
        </Segment>
          <Switch >
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={LoginModal}/>
            <Route exact path='/signup' component={SignUpModal}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(AppContainer);

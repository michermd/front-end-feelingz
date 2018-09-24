import React, { Component } from 'react';
import Webcam from "react-webcam";
// import { cloudinary, CLOUD_NAME, UPLOAD_PRESET } from '../../api_keys'


class WebcamCapture extends Component {
  state = {
      currentPicture: ''
    }

    analizeImg = () => {
        console.log(this.props.selfie.secure_url);
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
            'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
                'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
        };

        const options = {
            uri: uriBase,
            qs: params,
            body: '{"url": ' + '"' + imageUrl + '"}',
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
        });
    }

    displayWebcam = () => {
      if (this.props.webcamStatus) {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      return (
        <div>
          <Webcam
            audio={false}
            height={720}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            className="btn-outline-secondary rounded"
          />

          <button className="cam-btn btn-outline-secondary rounded btn-lg" onClick={this.capture}>Capture photo</button>
          <div>
            <img id="selfie" src={this.state.currentPicture} alt="Selfie" height="720" aria-hidden="true" />
            <button className="cam-btn btn-outline-secondary rounded btn-lg" onClick={() => this.props.uploadWidget(this.state.currentPicture)}>Send photo</button>
            <button className="cam-btn btn-outline-secondary rounded btn-lg" onClick={() => this.analizeImg(this.props.selfie)}>Analize Emotion</button>
          </div>
        </div>
      );
    }
    }



    setRef = webcam => {
      this.webcam = webcam;
    };

    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      this.setState({
        currentPicture: imageSrc
      });
      // console.log(imageSrc);
    };

    render() {
      console.log(this.props.selfie);

      return(
        <div>
          <center>
          <button  className="genres-btn btn btn-rounded btn-mdb-color btn-lg" onClick={this.props.showWebcam} href="#">Open Webcam</button>
          {this.displayWebcam()}
          </center>
        </div>
    )
    }
  }

export default WebcamCapture;

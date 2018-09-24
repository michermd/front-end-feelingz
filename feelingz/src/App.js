import React, { Component } from 'react';
import './App.css';

import WebcamCapture from './components/WebcamCapture.js';

var cloudinary = require('cloudinary')


class App extends Component {

  state = {
    showWebcam: false,
    selfie: null
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
      });
    })

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
        <h1>This is the Feelingz App from Mich!</h1>
        <div className="App-components">
          <WebcamCapture webcamStatus={this.state.showWebcam} showWebcam={this.showWebcam} uploadWidget={this.uploadWidget} image={this.capture} selfie={this.state.selfie}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import CreateMyMood from './CreateMyMood'
import WebcamCapture from './WebcamCapture.js';


class HomePage extends Component {

  render() {
    return (
      <div>
        <Segment >
          <WebcamCapture webcamStatus={this.state.showWebcam} showWebcam={this.showWebcam} uploadWidget={this.uploadWidget} image={this.capture} selfie={this.state.selfie}/>
        </Segment>
        <Segment >
          <CreateMyMood/>
        </Segment>
      </div>
    );
  }

}

export default HomePage;

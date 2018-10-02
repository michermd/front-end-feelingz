import React, { Component } from 'react';
import Webcam from "react-webcam";
import { Segment, Button } from 'semantic-ui-react'
import CreateMyMood from './CreateMyMood'

// import { cloudinary, CLOUD_NAME, UPLOAD_PRESET } from '../../api_keys'


class WebcamCapture extends Component {
  state = {
      currentPicture: ''
    }


    displayWebcam = () => {
      if (this.props.webcamStatus) {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      // console.log('current pciture', this.state.currentPicture);
      if (!this.state.currentPicture ) {
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
            <Segment>
              <Button basic color='blue' onClick={this.capture}>Capture Selfie</Button>
              <Button basic color='purple' onClick={() => this.props.uploadWidget(this.state.currentPicture)}>Analize Emotion</Button>
            </Segment>
          </div>
        )
      } else {
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
            <img id="selfie" src={this.state.currentPicture} alt="Selfie" height="720" />
            <Segment>
              <Button basic color='blue' onClick={this.capture}>Capture Selfie</Button>
              <Button basic color='purple' onClick={() => this.props.uploadWidget(this.state.currentPicture)}>Analize Emotion</Button>
            </Segment>
            <CreateMyMood />
          </div>
        );
      }
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
      console.log(imageSrc);
    };

    render() {
      // console.log(this.props.selfie);

      return(
        <div>
          <center>
          <Button  basic color='purple' onClick={this.props.showWebcam} >Open Webcam</Button>
          {this.displayWebcam()}
          </center>
        </div>
    )
    }
  }

export default WebcamCapture;

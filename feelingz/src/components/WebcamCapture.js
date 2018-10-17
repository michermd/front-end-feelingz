import React, { Component } from 'react';
import Webcam from "react-webcam";
import { Segment, Button, Container } from 'semantic-ui-react'
import CreateMyMood from './CreateMyMood'

// import { cloudinary, CLOUD_NAME, UPLOAD_PRESET } from '../../api_keys'


class WebcamCapture extends Component {
  state = {
      currentPicture: '',
      analizing: false
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
          <Container>
            <center>
              <Webcam
                audio={false}
                // height={700}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                className="btn-outline-secondary rounded"
              />
            </center>
            <Segment>
              <Button basic color='blue' onClick={this.capture}>Capture Selfie</Button>
              <Button basic color='purple' onClick={() => this.props.uploadWidget(this.state.currentPicture)}>Analize Emotion</Button>
            </Segment>
          </Container>
        )
      } else {
        return (
          <Container>
            <Segment>
              <Webcam
                audio={false}
                // height={400}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                className="btn-outline-secondary rounded"
              />
            </Segment>
            <Segment>
              <img id="selfie" src={this.state.currentPicture} alt="Selfie" width="1000" />
            </Segment>
            <Segment>
              <Button basic color='blue' onClick={this.capture}>Capture Selfie</Button>
              <Button basic color='purple' onClick={() => {
                this.setState({
                  analizing: true
                })
                this.props.uploadWidget(this.state.currentPicture)
              }
              }>Analize Emotion</Button>
            </Segment>
            { this.state.analizing && <CreateMyMood />}
          </Container>
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
        <Container>
          <Segment>
            <center>
              <Button  basic color='purple' onClick={this.props.showWebcam} >Open Webcam</Button>
              {this.displayWebcam()}
            </center>
          </Segment>
        </Container>
    )
    }
  }

export default WebcamCapture;

import React, { Component } from 'react';
import Webcam from "react-webcam";
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

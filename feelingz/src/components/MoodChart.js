import React, { Component } from 'react';
import Polar from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14,
      13,
      6,
      14
    ],
    backgroundColor: [
      '#8D6A9F',
      '#C5CBD3',
      '#8CBCB9',
      '#DDA448',
      '#BB342F',
      '#726DA8',
      '#70AE6E',
      '#F4743B'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Anger',
    'Contempt',
    'Disgust',
    'Fear',
    'Hapinness',
    'Neutral',
    'Sadness',
    'Surprise'
  ]
};


// export default React.createClass({
//   displayName: 'BarExample',

class MoodChart extends Component {


  render() {
    return (
      <div>
        <div>
          <h2>My Moods</h2>
          <Polar data={data} />
        </div>
      </div>
    );
  }
};


export default MoodChart;

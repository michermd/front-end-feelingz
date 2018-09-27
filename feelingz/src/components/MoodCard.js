import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

class MoodCard extends Component {

  render() {
    return (
      <Card>
        <Image src='selfie' />
        <Card.Content>
          <Card.Header>My Emtion</Card.Header>
          <Card.Meta>
            <span className='date'>Date of the Entry</span>
          </Card.Meta>
          <Card.Description>My Mood</Card.Description>
          <Card.Description>My Journal Entry</Card.Description>
        </Card.Content>
      </Card>
    );
  }

}

export default MoodCard;

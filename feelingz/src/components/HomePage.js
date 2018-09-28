import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { Card, Image } from 'semantic-ui-react'
import profileImg from '../images/matthew.png'


class HomePage extends Component {

  render() {
    return (
      <Segment>
        <Card.Group itemsPerRow={2}>
          <Card>
            <Image src={profileImg} />
            <Card.Content>
              <Card.Header>Happyness</Card.Header>
              <Card.Meta>
                <span className='date'>September 20, 2018</span>
              </Card.Meta>
              <Card.Description>Joyful</Card.Description>
              <Card.Description>Just finished my MVP.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={profileImg} />
            <Card.Content>
              <Card.Header>Sad</Card.Header>
              <Card.Meta>
                <span className='date'>September 20, 2018</span>
              </Card.Meta>
              <Card.Description>Tense</Card.Description>
              <Card.Description>Had some bad news.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    );
  }

}

export default HomePage;

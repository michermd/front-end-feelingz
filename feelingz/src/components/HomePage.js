import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'


class HomePage extends Component {

  render() {
    return (
      <div>
        <Segment >
          <Card>
            <Image src='../images/matthew.png' />
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
            <Image src='../images/matthew.png' />
            <Card.Content>
              <Card.Header>Sad</Card.Header>
              <Card.Meta>
                <span className='date'>September 20, 2018</span>
              </Card.Meta>
              <Card.Description>Tense</Card.Description>
              <Card.Description>Had some bad news.</Card.Description>
            </Card.Content>
          </Card>
        </Segment>
      </div>
    );
  }

}

export default HomePage;

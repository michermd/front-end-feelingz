import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { createMoodCard } from '../actions'
import { connect } from 'react-redux'


class MoodCard extends Component {

  render() {
    return (
      <Card>
        <Image src={this.props.mood.attributes['img-url']} />
        <Card.Content>
          <Card.Header>{this.props.mood.attributes.emotion}</Card.Header>
          <Card.Meta>
            <span className='date'>Created: {this.props.mood.attributes['created-at']}</span>
          </Card.Meta>
          <Card.Description>My Mood: {this.props.mood.attributes.mood}</Card.Description>
          <Card.Description>Activity Level: {this.props.mood.attributes.activity}</Card.Description>
          <Card.Description>Journal: {this.props.mood.attributes.journal}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}


export default connect(null, { createMoodCard }) (MoodCard);

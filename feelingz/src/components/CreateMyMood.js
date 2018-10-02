import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'
import { connect } from 'react-redux'
import { createMood } from '../actions'
import { Route } from 'react-router-dom';




const user = {
  user_id: '1',
  first_name: 'Daniel',
  last_name: 'Micher',
  user_name: 'michermd',
  password: 'asdfasdf'
}

class CreateMyMood extends Component {
  state = {
    open: false
  }

  onValidSubmit = (formData) => {
    this.props.createMood(formData);
  }

  componentDidUpdate = () => {
    // console.log('Component Updated', this.props);
    if (this.props.mood !== null) {
      const emotionsArray = this.props.emotion
      const keys = Object.keys(emotionsArray);
      const emotions = keys.sort(function(a, b) {
        return emotionsArray[a] - emotionsArray[b]
      });
      const emotion = emotions[emotions.length-1];


      const body = {
        user_id: user.user_id,
        img_url: this.props.selfie.url,
        emotion: emotion,
        mood: this.props.mood.mood,
        activity: this.props.mood.activity,
        journal: this.props.mood.journal
      }

      const JSONbody = JSON.stringify(body)
      // console.log('Body', JSONbody)

      fetch(`http://localhost:3001/api/v1/mood_posts/`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSONbody
      })
      .then(function(response) {
        console.log(response)
      })
    }
  }




  render() {
    const moods = [
      { key: '1', text: 'Excited', value: 'excited' },
      { key: '2', text: 'Cheerful', value: 'cheerful' },
      { key: '3', text: 'Relaxed', value: 'relaxed' },
      { key: '4', text: 'Calm', value: 'calm' },
      { key: '5', text: 'Tense', value: 'tense' },
      { key: '6', text: 'Irritated', value: 'irritated' },
      { key: '7', text: 'Bored', value: 'bored' },
      { key: '8', text: 'Sad', value: 'sad' },
    ]
    const activity = [
      { key: '0', text: '0', value: '0' },
      { key: '1', text: '1', value: '1' },
      { key: '2', text: '2', value: '2' },
      { key: '3', text: '3', value: '3' },
      { key: '4', text: '4', value: '4' },
      { key: '5', text: '5', value: '5' },
      { key: '6', text: '6', value: '6' },
      { key: '7', text: '7', value: '7' },
      { key: '8', text: '8', value: '8' },
      { key: '9', text: '9', value: '9' },
      { key: '10', text: '10', value: '10' },
    ]

    return (
      <Container >
        <h1>Tell me your Feelingz</h1>
        <Form ref={ ref => this.form = ref } onValidSubmit={ this.onValidSubmit }>
           <Form.Group widths='equal'>
             <Form.Select label='Your Mood' options={moods} name='mood' placeholder='Choose what mood you are on...' error />
             <Form.Select label='Activity Level' options={activity} name='activity' placeholder='Choose your activity level from 0 to 10' error />
           </Form.Group>
             <Form.TextArea label='Your Journal' name='journal' placeholder='Tell us more about your Feelingz' />
          <Form.Group>
            <Form.Button content="Submit" color="green" open={this.state.open} onClick={() => console.log('/my_moods')}/>
            <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapsStateToProps = (state) => {
  // console.log('This STATE', state)
  // console.log('This Mood', state.mood.mood)
  // console.log('This Activity', state.mood.activity)
  // console.log('This Journal', state.mood.journal)
  return {
    selfie: state.selfie,
    mood: state.mood,
    emotion: state.emotion
  }
}

export default connect(mapsStateToProps, { createMood }) (CreateMyMood);

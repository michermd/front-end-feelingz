import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'



class CreateMyMood extends Component {
  state = {
    open: false
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
             <Form.Select label='Your Mood' options={moods} name='Mood' placeholder='Choose what mood you are on...' error />
             <Form.Select label='Activity Level' options={activity} name='Activity Level' placeholder='Choose your activity level from 0 to 10' error />
           </Form.Group>
             <Form.TextArea label='Your Journal' name='journal' placeholder='Tell us more about your Feelingz' />
          <Form.Group>
            <Form.Button content="Submit" color="green" open={this.state.open} onClick={this.close}/>
            <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default CreateMyMood;

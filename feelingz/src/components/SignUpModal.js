import React, { Component } from 'react';
import { Button, Menu, Label, Container, Segment, Modal } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'


class SignUpModal extends Component {
  state = {
    open: false
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  // onValidSubmit = (formData) => {console.log(JSON.stringify(formData))
  onValidSubmit = (formData) => {
    const newUser = JSON.stringify(formData)
    this.setState({
      ...formData
    })
    console.log(newUser)
    fetch("http://localhost:3001/api/v1/users/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: newUser
    })
  }

  render() {
    const errorLabel = <Label color="red" pointing="left"/>;
    const styles = {
      root: {
        marginTop: 18,
        // padding: '0 24px 24px 24px',
      },
      customErrorLabel: {
        color: '#f00',
        textAlign: 'center',
      }
    }

    return (
      <Menu.Item>
        <Modal trigger={<Button basic color='blue'>Sign Up</Button>}>
            <Modal.Header>Please enter all the required fields</Modal.Header>
            <Segment>
              <Modal.Description>
                <Segment>
                  <Container style={ styles.root }>
                    <Form
                      ref={ ref => this.form = ref }
                      onValidSubmit={ this.onValidSubmit }
                      >
                        <Form.Group widths="equal">
                          <Form.Input
                            required
                            name="first_name"
                            label="First Name"
                            placeholder="First Name"
                            validations="isWords"
                            errorLabel={ errorLabel }
                            validationErrors={{
                              isWords: 'No numbers or special characters allowed',
                              isDefaultRequiredValue: 'First Name is Required',
                            }}
                          />
                          <Form.Input
                            name="last_name"
                            label="Last Name"
                            placeholder="Last Name"
                            required
                            validations="isWords"
                            errorLabel={ errorLabel }
                            validationErrors={{
                              isWords: 'No numbers or special characters allowed',
                              isDefaultRequiredValue: 'Last Name is Required',
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Input
                            name="user_name"
                            label="Username"
                            placeholder="Username"
                            required
                            // eslint-disable-next-line
                            validations={"isWords", {minLength:6}}
                            errorLabel={ errorLabel }
                            validationErrors={{
                              minLength: 'Minimum 6 characters',
                              isWords: 'No numbers or special characters allowed',
                              isDefaultRequiredValue: 'Username is Required'
                            }}
                          />
                          <Form.Input
                            name="password"
                            label="Password"
                            placeholder="Enter Password"
                            required
                            type="password"
                            // eslint-disable-next-line
                            validations={{minLength: 8}}
                            errorLabel={ errorLabel }
                            validationErrors={{
                              minLength: 'The password must be at least 8 characters long',
                              isDefaultRequiredValue: 'Password is Required',
                            }}
                          />
                          <Form.Input
                            name="RepeatedPassword"
                            label="Re-Enter Password"
                            placeholder="Confirm your Password"
                            required
                            type="password"
                            // eslint-disable-next-line
                            validations={{equalsField: "password"}}
                            errorLabel={ <div style={ styles.customErrorLabel }/> }
                            validationErrors={{
                              equalsField: 'Passwords are not the same',
                              isDefaultRequiredValue: 'Password is Required',
                            }}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Button content="Submit" color="green" open={this.state.open} onClick={this.close}/>
                          <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
                        </Form.Group>
                      </Form>
                    </Container>
                </Segment>
              </Modal.Description>
            </Segment>
          </Modal>
      </Menu.Item>
    );
  }

}

export default SignUpModal;

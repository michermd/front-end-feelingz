import React, { Component } from 'react';
import { Button, Menu, Label, Segment, Modal } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'


class LoginModal extends Component {
  state = {
    open: false
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const errorLabel = <Label color="red" pointing="left"/>;

    return (
      <Menu.Item>
        <Modal trigger={<Button basic color='green'>Login</Button>}>
            <Modal.Header>Please enter your login and password</Modal.Header>
            <Segment>
              <Modal.Description>
                <Form
                  ref={ ref => this.form = ref }
                  onValidSubmit={ this.onValidSubmit }
                  >
                    <Form.Group widths="equal">
                      <Form.Input
                        name="username"
                        label="Username"
                        placeholder="Username"
                        required
                        errorLabel={ errorLabel }
                        validationErrors={{
                          isDefaultRequiredValue: 'Username is Required',
                        }}
                      />
                      <Form.Input
                        name="Password"
                        label="Password"
                        placeholder="Enter Password"
                        required
                        errorLabel={ errorLabel }
                        validationErrors={{
                          isDefaultRequiredValue: 'Password is Required',
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Button content="Submit" color="green" open={this.state.open} onClick={this.close}/>
                      <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
                    </Form.Group>
                  </Form>
                </Modal.Description>
            </Segment>
          </Modal>
      </Menu.Item>
    );
  }
}

export default LoginModal;

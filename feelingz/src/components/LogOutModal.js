import React, { Component } from 'react';
import { Button, Menu, Confirm } from 'semantic-ui-react'


class LogOutModal extends Component {
  state = {
    open: false
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {

    return (
      <Menu.Item>
        <Button basic color='red' floated='right' onClick={this.open} >Log-Out</Button>
        <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.close} />
      </Menu.Item>
    );
  }
}

export default LogOutModal;

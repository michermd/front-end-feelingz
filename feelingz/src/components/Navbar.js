import React, { Component } from 'react';
import { Menu, Header, Icon } from 'semantic-ui-react'
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'
import LogOutModal from './LogOutModal'

class Navbar extends Component {
  state = {
    open: false
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  onValidSubmit = (formData) => {
    const newArtist = JSON.stringify(formData)
    this.setState({
      ...formData
    })
    fetch('http://localhost:3001/artists/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newArtist
    })
  }


  render() {
    // console.log("State", this.state);

    return (
      <div>
        <Menu>
          <Menu.Item>
            <Header as='h1'>
              <Icon name='camera retro' size='huge' />
              <Header.Content>
                Feelingz
                <Header.Subheader>Analize your emotions</Header.Subheader>
              </Header.Content>
            </Header>
          </Menu.Item>
          <Menu.Item position='right'>
            <SignUpModal />
            <LoginModal />
            <LogOutModal />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;

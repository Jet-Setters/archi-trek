import React from 'react';
import './Navbar.css';
import LoginButton from '../LoginButton.js';
import LogoutButton from '../LogoutButton.js';
import { withAuth0 } from '@auth0/auth0-react';


class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  
  render () {
    return (
      <nav className = "NavbarItems">
        <h1 className = "navbar-logo">Archi-Trek <i className ="fas fa-mountain"></i>
        </h1>

      

        <div className = "menu-icon" onClick={this.handleClick}>
          <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        </ul>

        <div id = "loginButton">
        <LoginButton> Login </LoginButton>
        <LogoutButton> Logout </LogoutButton>
        </div>
        
        
        {this.props.auth0.isAuthenticated && 
        <span title = {this.props.auth0.user.name}>
          <img id = "loginPic" src={this.props.auth0.user.picture} alt = "">
          </img>
        </span>
        }
         
      </nav>
    )
  }
}

export default withAuth0(Navbar);
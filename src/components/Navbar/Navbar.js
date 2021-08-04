import React from 'react';
import MenuItems from './MenuItems.js';
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
    console.log(this.props.auth0);
    return (
      <nav className = "NavbarItems">
        <h1 className = "navbar-logo" >Archi-Trek<i className = "fab fa-react"></i></h1>
        <div className = "menu-icon" onClick={this.handleClick}>
          <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key = {index}>
                <a id = "links" className = {item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}

        </ul>

        <LoginButton> Login </LoginButton>
        <LogoutButton> Logout </LogoutButton>
        {this.props.auth0.isAuthenticated && <img src={this.props.auth0.user.picture} alt = ""></img>}
      </nav>
    )
  }
}

export default withAuth0(Navbar);
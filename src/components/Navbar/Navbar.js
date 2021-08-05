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
    return (
      <nav className = "NavbarItems">
        <h1 className = "navbar-logo" >Archi-Trek <i className ="fas fa-mountain"></i></h1>
        {/* <h1 className = "navbar-logo" >Archi-Trek <img id = "mountain" src = "white-mountain.png" alt=""></img></h1> */}
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

        <div id = "loginButton">
        <LoginButton> Login </LoginButton>
        <LogoutButton> Logout </LogoutButton>
        </div>
        
        {this.props.auth0.isAuthenticated && 
        <img id = "loginPic" src={this.props.auth0.user.picture} alt = "">
        </img>

        }
      </nav>
    )
  }
}

export default withAuth0(Navbar);
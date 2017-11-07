import React, { Component } from 'react';
import router from '../router';
import { NavLink } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink exact activeClassName='selected-link' to='/'>Home</NavLink>
          <NavLink activeClassName='selected-link' to='/contact'>Contact Us</NavLink>
          <NavLink activeClassName='selected-link' to='/about'>About Us</NavLink>
          <NavLink activeClassName='selected-link' to='/people'>People</NavLink>
        </nav>
        { router }
      </div >
    );
  }
}

export default App;

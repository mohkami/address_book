import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          This is the Nav Bar
        </div>
        <ul>
          <li> <Link to="/1">Contact 1</Link> </li>
          <li> <Link to="/2">Contact 2</Link> </li>
        </ul>
      </div>
    );
  }
}

export default NavBar

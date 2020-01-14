import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
    )
  }
}

export default Nav;
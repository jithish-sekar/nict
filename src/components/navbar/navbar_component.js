import React, { Component } from 'react';
import './navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navContainer">
                    <img src='nict_favicon.png' alt="logo" />
                    <div className="navHeader">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>contact us</li>  
                            <div className="navRightAction">
                                <li>Programs  <i style={{fontSize:'16px'}}class="fas fa-angle-down"></i>  </li>
                                <button>Log in</button>
                                <button>Sign Up</button>
                            </div>
                        </ul>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

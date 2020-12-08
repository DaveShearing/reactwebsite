import React, { Component } from 'react'
import NavButton from './NavButton'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul class="navbar">
                    <li><NavButton btntxt="About" changePage={this.props.changePage} ></NavButton></li>
                    <li><NavButton btntxt="Skills" changePage={this.props.changePage}></NavButton></li>
                    <li><NavButton btntxt="Education" changePage={this.props.changePage}></NavButton></li>
                    <li><NavButton btntxt="Career" changePage={this.props.changePage}></NavButton></li>
                    <li><NavButton btntxt="Portfolio" changePage={this.props.changePage}></NavButton></li>
                    <li><NavButton btntxt="Contact" changePage={this.props.changePage}></NavButton></li>
                </ul>               
            </div>
        )
    }
}

export default NavBar

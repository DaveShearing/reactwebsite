import React, { Component } from 'react'
import './NavButton.css';
import App from '../App'

class NavButton extends Component {
    
    buttonclick = () => {

        var page = this.props.btntxt;

        this.props.changePage(page);

    }

    render() {
        return (
            <div>
                
                <button onClick={this.buttonclick}>{this.props.btntxt}</button>
            </div>
        )
    }
}

export default NavButton

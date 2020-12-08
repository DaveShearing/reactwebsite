import React, { Component } from 'react'
import './ContentComp.css';

class ContentComp extends Component {
    
    render() {
        return (
            <div class="content">
                <p>{this.props.currentPage}</p>
            </div>
        )
    }
}

export default ContentComp

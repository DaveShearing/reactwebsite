import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import './PortfolioContent.css'

class PortfolioContent extends Component {
    render() {
        return (
            <div>
                
                <ul class="portfolio">
                    <li><h1><u>Portfolio</u></h1></li>
                    <li><ReactPlayer url="https://youtu.be/oOH_CXDhIEc" class="react-player"></ReactPlayer></li>
                    <li><ReactPlayer url="https://vimeo.com/266644829/27751cc634" class="react-player"></ReactPlayer></li>
                    <li><ReactPlayer url="https://vimeo.com/127171373" class="react-player"></ReactPlayer></li>
                </ul>
                

            </div>
        )
    }
}

export default PortfolioContent

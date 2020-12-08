
import './App.css';
import TitleComponent from "./Components/TitleComp"
import NavBar from "./Components/NavBar"
import ContentComp from "./Components/ContentComp"
import React, { Component } from 'react'

import AboutContent from './Components/AboutContent'
import SkillsContent from './Components/SkillsContent'
import EducationContent from './Components/EducationContent'
import CareerContent from './Components/CareerContent'
import PortfolioContent from './Components/PortfolioContent'
import ContactContent from './Components/ContactContent'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentcontentpage: "About",
      currentContent: <AboutContent/>
    }
  }

  changeContent(page) {
    
    this.setState({
      currentcontentpage: page
    })

    if (page === "About"){
      this.setState({
        currentContent: <AboutContent/>
      })
    }

    if (page === "Skills"){
      this.setState({
        currentContent: <SkillsContent/>
      })
    }

    if (page === "Education"){
      this.setState({
        currentContent: <EducationContent/>
      })
    }

    if (page === "Career"){
      this.setState({
        currentContent: <CareerContent/>
      })
    }

    if (page === "Portfolio"){
      this.setState({
        currentContent: <PortfolioContent/>
      })
    }

    if (page === "Contact"){
      this.setState({
        currentContent: <ContactContent/>
      })
    }

  }

  render() {
    return (
      <div>
        <ul class="grid">
      <li><TitleComponent></TitleComponent></li>
      <li><NavBar changePage={this.changeContent.bind(this)}></NavBar></li>
      <li><ContentComp currentPage={this.state.currentContent}></ContentComp></li>
      </ul>
      </div>
    )
  }


}

export default App;

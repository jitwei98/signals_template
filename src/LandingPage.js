import React, { Component } from 'react';
import Chapter from './Chapter';
import './Chapter.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Chapter 
            cardHeader={"Signals and Classification"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"/TH/Chapter1/lecture"}
            />
          <Chapter 
            cardHeader={"Fourier series"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"/TH/Chapter2/lecture"}
          />
          <Chapter 
            cardHeader={"Fourier transform"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"/TH/Chapter3/Geogebra/addition"}
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"To be Continued"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
      </div>
      );
  }

}

export default LandingPage;

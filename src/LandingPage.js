import React, { Component } from 'react';
import Chapter from './Chapter';
import './Chapter.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Chapter 
            cardHeader={"Euler Formula"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"Basic Signals"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"Fourier Series"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"Even Periodic Function"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"Odd Periodic Function"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"Fourier Transform"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"Linearity"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"Scaling"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"Duality"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"Time Shifting"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
            />
          <Chapter 
            cardHeader={"Frequency Shifting"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
          <Chapter 
            cardHeader={"Differentiation"}
            textContent={"Describe the subtopics here."} 
            pathToTopic={"#"}
          />
        </div>
      </div>
      );
  }

}

export default LandingPage;

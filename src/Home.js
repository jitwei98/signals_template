import React, { Component } from 'react';
import Chapter from './Chapter';
import './Chapter.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Chapter 
            cardHeader={"Card Header"}
            textContent={"Describe the subtopics here."} 
            />
          <Chapter 
            cardHeader={"Header 2"}
            textContent={"Describe the subtopics here."} 
          />
          <Chapter 
            cardHeader={"Header 3"}
            textContent={"Describe the subtopics here."} 
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"Card Header"}
            textContent={"Describe the subtopics here."} 
            />
          <Chapter 
            cardHeader={"Header 2"}
            textContent={"Describe the subtopics here."} 
          />
          <Chapter 
            cardHeader={"Header 3"}
            textContent={"Describe the subtopics here."} 
          />
        </div>
        <div className="row">
          <Chapter 
            cardHeader={"Card Header"}
            textContent={"Describe the subtopics here."} 
            />
          <Chapter 
            cardHeader={"Header 2"}
            textContent={"Describe the subtopics here."} 
          />
          <Chapter 
            cardHeader={"Header 3"}
            textContent={"Describe the subtopics here."} 
          />
        </div>
      </div>
      );
  }

}

export default Home;

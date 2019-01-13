import React, { Component } from 'react';

class Chapter extends Component {
  render() {
    return (
      <div className="col-sm-4">  
        <div 
          className="card" 
          style={{
              width: 18 + 'rem',
              height: 150 + 'px'
            }}>
          <h5 className="card-header">
            {this.props.cardHeader}
          </h5>
          <div className="card-body">
            {this.props.textContent}
          </div>
        </div>
      </div>  
      );
  }

}

export default Chapter;

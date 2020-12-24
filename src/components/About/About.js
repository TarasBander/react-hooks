import React from 'react';
import './About.css';
import {
  Link
} from "react-router-dom";

class About extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  
  render() {
    console.log("About Render()");
    return (
      <div className="App">
          <header className="App-header">
              <div>
                  <h1>About!</h1>
              </div>
              <Link className='SectionNavigation-Item Section' to='/main'>
                  <span className='Section-Title'>main</span>
                </Link>
          </header>
      </div>
    );
  }
}

export default About;

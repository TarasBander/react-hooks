import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";

import {createBrowserHistory} from 'history'

import About from './components/About/About';
import Main from './components/Main/Main';

const history = createBrowserHistory()


class App extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  
  render() {
    console.log("App render()");
    return (
      <div className="App">
        <Switch>

              <Route history={history} path='/about' component={About} />
              <Route history={history} path='/main' component={Main} />
              </Switch>
              <Link className='SectionNavigation-Item Section' to='/main'>
                  <span className='Section-Title'>main</span>
                </Link>
      </div>
    );
  }
}

export default withRouter(App);

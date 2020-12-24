import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Router } from "react-router-dom";

import {createBrowserHistory} from 'history';


import './App.css';

const history = createBrowserHistory();
    // ReactDOM.render(
    // //   <App favcol="yellow"/>,
    //   <App />,
    //   document.getElementById('root')
    // );
    ReactDOM.render((
        <Router history={history}>
          <App/>
        </Router>
      ), document.getElementById('root')
     );

export default App;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

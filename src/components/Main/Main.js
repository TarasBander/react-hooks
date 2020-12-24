import React from 'react';
import './Main.css';
import {
  Link
} from "react-router-dom";

class MyError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, info) {
    console.log('4234234234234234234');
    this.setState({ error, info });
    return null;
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            Error.toString(): {this.state.error.toString()}
          </h1>
          
          {/* <label>error.info.componentStack</label>
          {this.state.info &&
            this.state.info.componentStack.split("\n").map(i => {
              return (
                <div style={{textAlign: "left", maxWidth: "400px", margin: "0 auto"}} key={i}>
                  {i}
                </div>
              );
            })} */}
        </div>
      );
    }
    return this.props.children;
  }
}

class Broken extends React.Component {
  constructor(props) {
    super(props);
    this.state = { throw: false, count: 0 };
  }

  // componentDidMount() {
  //   throw new Error('error did mount');
  // }

  render() {
    if (this.state.throw) {
      throw new Error("Test error");
    }

    return (
      <div>
        <button
          onClick={e => {
            this.setState({ throw: true });
          }}
        >
          button will render error.
        </button>
        
        <button onClick={e => {
          this.setState(({ count }) => ({
            count: count + 1
          }));
        }}>button will not throw</button>

        <div>
          {"Counter: "}{this.state.count}
        </div>
      </div>
    );
  }
}


class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {date: new Date(), label: "stop", favoritecolor: "red", name: 'Petro', counter: 0, error: null, errorInfo: null};
      this.timerID = null;

      this.press = this.press.bind(this);
      // this.throwError = this.throwError.bind(this);

      console.log("constructor");
  }

  // getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps()", state); 
  //   return null;
  // }

  UNSAFE_componentWillMount(){
      console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()"); 
    this.timerID = setInterval( () => { // constructor
        this.tick()
      },
      1000
    );
    this.setState({name: 'Taras'});
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate()", nextState); //read pure components
    return true;
  }
  UNSAFE_componentWillUpdate(prevProps, prevState){ //depricated
    this.updatedColor = prevState.favoritecolor;
    console.log("componentWillUpdate()");
  }
  componentDidUpdate(prevProps, prevState){
    this.prevColor = prevState.favoritecolor;
      console.log("componentDidUpdate()");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps()", nextProps);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.timerID); // did unmount because deprecated
  }

  UNSAFE_getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()", prevProps); 
    return null;
  }

  static getDerivedStateFromError(error) {
    console.log('error111', error);
    return { hasError: true };
  }

  // componentDidCatch(error, info){
  //   console.log('error', error);
  //   console.log('info', info);
  //   this.setState({
  //     error: error,
  //     errorInfo: info
  //   });
  // }
  
  render() {
    console.log("main render()", this.state);
    // if (this.state.counter === 1) {
    //   // Simulate a JS error
    //   throw new Error('I crashed!');
    // }
    return (
      <div className="App">
          <header className="App-header">
              <div>
                  <h1>Clock!</h1>
                  <h2>Now {this.state.date.toLocaleTimeString()}.</h2>
              </div>
              <button onClick={this.press}>{this.state.label}</button>
              <h1 style={{color: this.state.favoritecolor}}>Color is {this.state.favoritecolor}</h1>
              <div>Before the update, color was {this.prevColor}</div>
              <div>The updated color is {this.updatedColor}</div>
              <button onClick={this.throwError}>throw error</button>
              <Link className='SectionNavigation-Item Section' to='/about'>
                  <span className='Section-Title'>about</span>
                </Link>
                <MyError>     <Broken />     </MyError>
          </header>
      </div>
    );
  }

  press(){
    if(this.state.label==="stop") {
      this.setState({label: "continue", favoritecolor: "green"});
      clearInterval(this.timerID);
    } else {
      this.setState({label: "stop", favoritecolor: "red"});
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  }

  // throwError(){
  //   this.setState(({counter}) => ({
  //     counter: counter + 1
  //   }));
  //   // throw this.exeption('error');
  // }


  tick() {
    this.setState({
      date: new Date()
    });
  }

}

export default Main;

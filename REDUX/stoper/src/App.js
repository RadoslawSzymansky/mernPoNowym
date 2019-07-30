import React from 'react';
import './App.css';
import store from './store';
import { incValue, decValue, setSession } from './actions';
import render from './index';
store.subscribe(render)
class App extends React.Component {
  handleClick = (e) => {
    const newSession = e.target.dataset.type;
    store.dispatch(setSession(newSession))
  }
  incAction = () => {
    const actSession = store.getState().activeSession;
    store.dispatch(incValue(actSession))
  }
  decAction = () => {
    const actSession = store.getState().activeSession;
    store.dispatch(decValue(actSession))
  }
  render() {
    const { days, hours, minutes, seconds, activeSession } = store.getState();
    return (
      <div className="App" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <p style={{ textAlign: "right" }}>Active session: {activeSession}</p>
        <span onClick={this.handleClick} data-type="days">{days}</span>:
        <span onClick={this.handleClick} data-type="hours">{hours}</span>:
        <span onClick={this.handleClick} data-type="minutes">{minutes}</span>:
        <span onClick={this.handleClick} data-type="seconds">{seconds}</span>
        <br></br>
        <button onClick={this.incAction}>Increase</button><button onClick={this.decAction}>Decrease</button>
      </div>
    );
  }

}

export default App;

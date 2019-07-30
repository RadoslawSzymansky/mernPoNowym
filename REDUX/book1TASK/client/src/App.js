import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store/";
import ReactDOM from 'react-dom'
class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;
const render = () => ReactDOM.render(<App />, document.getElementById("root"));
// to bd renderowac aplikacje bo kazdym updacie state
store.subscribe(render)
render()
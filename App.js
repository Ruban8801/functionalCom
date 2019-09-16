React, { Component } from "react";
import Greet from "./components/Greet";
import Message from "./components/Message";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Greet />
        <Message/>
      </div>
    );
  }
}

export default App;
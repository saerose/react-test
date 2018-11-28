import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { GlobalStyle } from "./styles";

export default class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyle/>
          <Dashboard />
        </div>
    );
  }
}

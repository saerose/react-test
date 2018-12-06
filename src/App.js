import React, { Component } from "react";
import Dashboard from "./containers/Dashboard";
import { GlobalStyle } from "./styles";
import { getBlackCards, getWhiteCards } from "./store/actions/cards.actions";
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.getBlackCards();
    this.props.getWhiteCards();
  }

  render() {
    return (
        <div>
          <GlobalStyle/>
          <Dashboard />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBlackCards: () => dispatch(getBlackCards),
  getWhiteCards: () => dispatch(getWhiteCards)
});

export default connect(null, mapDispatchToProps)(App)
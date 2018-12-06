import React, { Component } from "react";
import { ActionWrapper, BigButton } from "./styles";
import { filterBy } from "../../store/actions/cards.actions";
import { connect } from 'react-redux';

class CardDeckButtons extends Component {
  render() {
    return (
      <ActionWrapper>
          <BigButton onClick={() => this.props.filter('black')}>Black Deck 👩🏿</BigButton>
          <BigButton onClick={() => this.props.filter('white')}>White Deck 👩🏼</BigButton>
      </ActionWrapper>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  filter: (color) => dispatch(filterBy(color))
});

export default connect(null, mapDispatchToProps)(CardDeckButtons);
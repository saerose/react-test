import React, { Component } from "react";
import { ActionWrapper, BigButton } from "./styles";
import {getBlackCards, getWhiteCards} from "../../store/actions/cards.actions";
import connect from "react-redux/es/connect/connect";


class CardDeckButtons extends Component {
    render() {
        return (
            <ActionWrapper>
                <BigButton onClick={this.props.getBlackCards}>Black Deck 👩🏿</BigButton>
                <BigButton onClick={this.props.getWhiteCards}>White Deck 👩🏼</BigButton>
            </ActionWrapper>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
  getBlackCards: () => dispatch(getBlackCards),
  getWhiteCards: () => dispatch(getWhiteCards)
});

export default connect(null, mapDispatchToProps)(CardDeckButtons);
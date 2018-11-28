import React, { Component } from "react";
import { ActionWrapper, BigButton } from "./styles";


export default class CardDeckButtons extends Component {
    render() {
        return (
            <ActionWrapper>
                <BigButton>Black Deck 👩🏿</BigButton>
                <BigButton>White Deck 👩🏼</BigButton>
            </ActionWrapper>
        )
    }
};
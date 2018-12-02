import React, { Component } from "react";
import { PopUpWrapper, PopUpBox, ClosePop, Input, Title, ColorWrapper, Color } from './styles';

export default class AddCard extends Component {
  render() {
    return (
      <PopUpWrapper>
        <PopUpBox>
          <ClosePop onClick={this.props.close}>X</ClosePop>
          <Title>Add a new card! ✨</Title>
          <Input type='text' placeholder='Card text' required/>
          <ColorWrapper>
            <Color>B</Color>
            <Color>W</Color>
          </ColorWrapper>
          <div>ADD</div>
        </PopUpBox>
      </PopUpWrapper>
    )
  }
};


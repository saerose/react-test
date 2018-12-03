import React, { Component } from 'react';
import {addCard} from '../../store/actions/cards.actions';
import connect from 'react-redux/es/connect/connect';
import {
  PopUpWrapper,
  PopUpBox,
  ClosePop,
  Input,
  Title,
  ColorWrapper,
  White,
  Black,
  AddButton
} from './styles';

class AddCard extends Component {
  render() {
    return (
      <PopUpWrapper>
        <PopUpBox>
          <ClosePop onClick={ this.props.close}>X</ClosePop>
          <Title>Add a new card! ✨</Title>
          <Input type='text' placeholder='Card text' required/>
          <ColorWrapper> whichColor ?
            <Black></Black> :
            <White></White>
          </ColorWrapper>
          <AddButton onClick={this.props.addCard}>ADD</AddButton>
        </PopUpBox>
      </PopUpWrapper>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addCard: () => dispatch(addCard),
});

export default connect(null, mapDispatchToProps)(AddCard);


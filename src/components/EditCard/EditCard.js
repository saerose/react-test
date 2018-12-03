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
          <Title>Edit the card! ✏️</Title>
          <Input type='text' placeholder='Card text' required/>
          <ColorWrapper> whichColor ?
            <Black></Black> :
            <White></White>
          </ColorWrapper>
          <AddButton onClick={this.props.editCard}>DONE</AddButton>
        </PopUpBox>
      </PopUpWrapper>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  editCard: () => dispatch(addCard),
});

export default connect(null, mapDispatchToProps)(AddCard);
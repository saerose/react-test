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

class EditCard extends Component {

  componentDidMount() {
    console.log('ello?');
    console.log('cards props', this.props.text) // Pass card text to placeholder.
  }

  render() {
    return (
      <PopUpWrapper>
        <PopUpBox>
          <ClosePop onClick={ this.props.close}>X</ClosePop>
          <Title>Edit the card! ✏️</Title>
          <Input type='text' placeholder={this.props.text} required/> // This is wrong, need to change it later
          <ColorWrapper> whichColor ?
            <Black></Black> :
            <White></White>
          </ColorWrapper>
          <AddButton onClick={this.props.editCard}>DONE</AddButton>
        </PopUpBox>
      </PopUpWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCard: () => dispatch(addCard),
});

export default connect(null, mapDispatchToProps)(EditCard);
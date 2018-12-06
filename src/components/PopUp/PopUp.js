import React, { Component } from 'react';
import {addCard, filterBy, editCard} from '../../store/actions/cards.actions';
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

class PopUp extends Component {
  state = {
    color: this.props.color || 'white',
    text: this.props.text || ''
  };

  toggleColor = (color) => {
    if (color !== this.state.color) {
      this.setState({ color: color });
    }
  };

  handleText = (e) => {
    this.setState({ text: e.target.value })
  }

  handleAdd = () => {
    if (!this.props.id) {
      this.props.addCard(this.state)
      // TODO: add sequentility to this
    } else {
      this.props.editCard({
        id: this.props.id,
        ...this.state
      })
    }
    this.props.restore()
    this.props.close()
  }

  render() {
    return (
      <PopUpWrapper>
        <PopUpBox>
          <ClosePop onClick={this.props.close}>X</ClosePop>
          <Title>{this.props.title}</Title>
          <Input color={this.state.color} value={this.state.text} onChange={this.handleText} type='text' placeholder='Card text' required/>
          <ColorWrapper> whichColor ?
            <Black onClick={() => this.toggleColor('black')} >
              { this.state.color === 'black' ? '✔︎️' : null }
            </Black> :
            <White
              onClick={() => this.toggleColor('white')}>
              { this.state.color === 'white' ? '✔︎️' : null }
            </White>
          </ColorWrapper>
          <AddButton onClick={this.handleAdd}>{ this.props.button || 'ADD' }</AddButton>
        </PopUpBox>
      </PopUpWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
  restore: () => dispatch(filterBy()),
  editCard: (id) => dispatch(editCard(id))
});

export default connect(null, mapDispatchToProps)(PopUp);


import React, { Component } from 'react';
import AddCard from "../PopUp/PopUp";
import {deleteCard} from "../../store/actions/cards.actions";
import { connect } from 'react-redux'
import { Card, DeleteWrapper, DeleteIcon } from './styles';


class SingleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      isMouseInside: false
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  mouseEnter = () => {
    this.setState({
      isMouseInside: true
    })
  };

  mouseOut = () => {
    this.setState({
      isMouseInside: false
    })
  };

  render() {
    return (
      <div id='single__card'
           onMouseEnter={this.mouseEnter}
           onMouseLeave={this.mouseOut}>
        {this.state.isMouseInside
        ?
        <DeleteWrapper id='single__card__delete'
                       onClick={() => this.props.deleteCard({ id: this.props.id, color: this.props.color })}>
          <DeleteIcon>✖</DeleteIcon>︎
        </DeleteWrapper>
        :
        ''}
        {this.state.showPopup
          ?
          <AddCard close={this.togglePopup}
                   button='EDIT'
                   title='Edit a card! ✏️'
                   color={this.props.color}
                   text={this.props.text}
                   id={this.props.id} />
          :
          ''}
        <Card
          color={this.props.color}
          onClick={this.togglePopup}>
          {this.props.text}
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (card) => dispatch(deleteCard(card)),
});

export default connect(null, mapDispatchToProps)(SingleCard);

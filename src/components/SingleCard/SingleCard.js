import React, { Component } from 'react';
import EditCard from "../EditCard/EditCard";
import {deleteCard} from "../../store/actions/cards.actions";
import connect from "react-redux/es/connect/connect";
import { Card, DeleteWrapper, DeleteIcon } from './styles';


class SingleCard extends Component {
  constructor(props) {
    super(props);
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
      <div onMouseEnter={this.mouseEnter}
           onMouseLeave={this.mouseOut}>
        {this.state.showPopup ? <EditCard close={this.togglePopup} /> : ''}
        {this.state.isMouseInside
          ?
          <DeleteWrapper>
            <DeleteIcon onClick={this.deleteCard}>✖</DeleteIcon>︎
          </DeleteWrapper>
          :
          null}
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
  deleteCard: () => dispatch(deleteCard),
});

export default connect(null, mapDispatchToProps)(SingleCard);

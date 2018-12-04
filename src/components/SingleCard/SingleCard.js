import React, { Component } from 'react';
import { Card } from './styles';
import EditCard from "../EditCard/EditCard";
import {addCard} from "../../store/actions/cards.actions";
import connect from "react-redux/es/connect/connect";

export default class SingleCard extends Component {
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
      <div>
        {this.state.showPopup ? <EditCard close={this.togglePopup} /> : ''}
        <Card
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseOut}
          color={this.props.color}
          onClick={this.togglePopup}>
          {this.state.isMouseInside ? <div>✖︎</div> : null}
          {this.props.text}
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteCard: () => dispatch(deleteCard),
});

export default connect(null, mapDispatchToProps)(EditCard);

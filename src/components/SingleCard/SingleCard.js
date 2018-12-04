import React, { Component } from 'react';
import EditCard from "../EditCard/EditCard";
import {deleteCard} from "../../store/actions/cards.actions";
import connect from "react-redux/es/connect/connect";
import { Card, DeleteWrapper } from './styles';


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
      <div>
        {this.state.showPopup ? <EditCard close={this.togglePopup} /> : ''}
        <Card
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseOut}
          color={this.props.color}
          onClick={this.togglePopup}>
            {this.state.isMouseInside
            ?
            <DeleteWrapper>
              <div>✖</div>︎
            </DeleteWrapper>
            :
            null}
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

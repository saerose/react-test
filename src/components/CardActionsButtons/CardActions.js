import React, { Component } from "react";
import { ActionWrapper, Button} from "./styles";
import AddCard from "../PopUp/PopUp"

export default class CardActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <ActionWrapper>
          { this.state.showPopup ? <AddCard close={this.togglePopup} title='Add a new card! ✨'/> : '' }
          <Button onClick={this.togglePopup}>New card ✨</Button>
      </ActionWrapper>
    )
  }
};
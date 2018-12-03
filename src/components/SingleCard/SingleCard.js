import React, { Component } from 'react';
import { Card } from './styles';
import EditCard from "../EditCard/EditCard";

export default class SingleCard extends Component {
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
      <div>
      {this.state.showPopup ? <EditCard close={this.togglePopup} /> : ''}
      <Card color={this.props.color} onClick={this.togglePopup}>
        {this.props.text}
      </Card>
      </div>
    )
  }
}



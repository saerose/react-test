import React, { Component } from 'react';
import { Card } from './styles';

export default class SingleCard extends Component {

  render() {
    return (
      <Card color={this.props.color}>
        {this.props.text}
      </Card>
    )
  }
}

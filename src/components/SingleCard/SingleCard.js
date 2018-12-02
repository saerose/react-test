import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Card } from './styles';

export default class SingleCard extends Component {

  render() {
    return (
      <Card>
        {this.props.color}
        {this.props.text}
      </Card>
    )
  }
}

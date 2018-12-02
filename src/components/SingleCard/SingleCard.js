import React, { Component } from 'react';
import { Card } from './styles';
import connect from "react-redux/es/connect/connect";
import {editCard} from "../../store/actions/cards.actions";

class SingleCard extends Component {

  render() {
    return (
      <Card color={this.props.color}>
        {this.props.text}
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCard: () => dispatch(editCard),
});

export default connect(null, mapDispatchToProps)(SingleCard);


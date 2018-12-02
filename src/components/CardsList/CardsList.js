import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import SingleCard from '../SingleCard/SingleCard';
import { List } from './styles'

class CardList extends Component {
  render() {

    return this.props.loading
      ? <div>
          Loadiiiiiiiiiiing!
        </div>
      : (
        <List>
          {this.props.cards.map((el, i) => typeof el === "object"
          ?
            <SingleCard key={i} text={el.text} color='black'/>
          :
            <SingleCard key={i} text={el} color='white'/>)}
        </List>
      )
  }
}

const mapStateToProps= (state) => ({
  cards: state.apiReducer.cards,
  loading: state.apiReducer.fetching
});

export default connect(mapStateToProps)(CardList);

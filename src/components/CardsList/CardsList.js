import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleCard from '../SingleCard/SingleCard';
import { Loading, List } from './styles'

class CardList extends Component {

  render() {

    return this.props.loading
      ? <Loading>
          Mechahitler loading...
        </Loading>
      : (
        <List>
          { this.props.cards.map((el, i) => <SingleCard key={i} id={el.id} text={el.text} color={el.color}/>) }
        </List>
      )
  }
}

const mapStateToProps= (state) => ({
  cards: state.apiReducer.cards,
  loading: state.apiReducer.fetching
});

export default connect(mapStateToProps)(CardList);

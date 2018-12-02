import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import SingleCard from '../SingleCard/SingleCard';

class CardList extends Component {
  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('next', nextProps)
  // }

  // componentDidMount() {
    // this.props.getBlackCards();
    // this.props.getWhiteCards();
  // }

  render() {

    return this.props.loading
      ? <div>
          Loadiiiiiiiiiiing!
        </div>
      : (
          this.props.cards.map((el, i) => typeof el === "object" ? <SingleCard key={i} text={el.text} color='black'/> : <SingleCard key={i} text={el} color='white'/>)
      )
  }
}

const mapStateToProps= (state) => ({
  cards: state.apiReducer.cards,
  loading: state.apiReducer.fetching
});

export default connect(mapStateToProps)(CardList);

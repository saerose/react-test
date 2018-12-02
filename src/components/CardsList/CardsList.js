import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';

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
          <div>
            {this.props.cards.map(el => typeof el === "object" ? el.text : el)}
          </div>
      )
  }
}

const mapStateToProps= (state) => ({
  cards: state.apiReducer.cards,
  loading: state.apiReducer.fetching
});

export default connect(mapStateToProps)(CardList);

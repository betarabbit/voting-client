// jscs:disable validateQuoteMarks
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

const propTypes = {
  pair: PropTypes.array,
  winner: PropTypes.string,
};

class Voting extends Component {
  render() {
    return (
      <div>
        { this.props.winner ?
          <Winner ref="winner" winner={ this.props.winner } /> :
          <Vote { ...this.props } />
        }
      </div>
    );
  }
}

function select(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
  };
}

Voting.propTypes = propTypes;

export default connect(select)(Voting);

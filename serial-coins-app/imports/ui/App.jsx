import React, { Component } from 'react';
import PropTypes from 'prop-types';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './p5/sketch.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Coins } from '../api/coins.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coin: {value: 0},
    };
 
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>coin-app</h1>
        </header>
        {/*pass the p5 sktech file into the React wrapper
        also pass the coin prop which will updated based on withTracker below*/}
        <P5Wrapper sketch={sketch} coin={this.props.coin} />
      </div>
    );
  }
}

App.defaultProps = {
  coins: {text:"."},
};

App.propTypes = {
  coins: PropTypes.object.isRequired,
};

export default withTracker(props => {
  Meteor.subscribe('coins');
  return {
    coin: Coins.find({}, { sort: { updatedAt: -1 } }).fetch()[0],
  };
})(App);
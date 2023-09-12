import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.styl';
import * as actions from '../../actions';
import Counter from '../../components/Counter'
import { decrementAsync, incrementAsync } from '../../sagas';

class App extends Component {
	constructor(props) {
	  super(props)
	}

	render() {
		const { count, increment, decrement, incrementAsync, decrementAsync, fetchData } = this.props;
		return(
			<div>
				<Counter 
					count={count} 
					increment={increment}
					decrement={decrement}
					incrementAsync={incrementAsync}
					decrementAsync={decrementAsync}
					fetchData={fetchData}
				/>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		count: state.default.count,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  // dispatching actions returned by action creators
	  increment: () => dispatch(actions.increment()),
	  decrement: () => dispatch(actions.decrement()),
	  incrementAsync: () => dispatch(actions.incrementAsync()),
	  decrementAsync: () => dispatch(actions.decrementAsync()),
	  fetchData: () => dispatch(actions.fetchData()),
	}
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
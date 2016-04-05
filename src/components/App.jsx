import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: 'bradtraversy',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	render(){
		return(
			<div>
				{this.props.clientId}
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps ={
	clientId: 'aa5d4acff1f7e803e232',
	clientSecret: 'f71e7464794bb3434032cdd2a24a1284fea8eb9c'
}

export default App


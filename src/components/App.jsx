import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: 'arizona2014',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	// GET user details
	getUserData(){
		$.ajax ({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username:null});
				alert(err);
			}.bind(this)
		});
	}
	
	componentDidMount(){
		this.getUserData();
	}
	
	render(){
		return(
			<div>
				<Profile userData = {this.state.userData} />
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps ={
	clientId: '26b8dfa33c8ca5b4d741',
	clientSecret: '6e0c5fdb721aa38b446c4b1e153d39848e6ddab1'
}

export default App


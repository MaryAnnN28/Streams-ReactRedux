import React from 'react';

console.log(process.env); 

const KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;

class GoogleAuth extends React.Component {
	componentDidMount () {
		window.gapi.load('client: auth2', () => {
			window.gapi.client.init({
				clientId: KEY,
				scope: 'email'
			});
		}); 
	}


	render () {
		return <div>Google Auth</div>; 
	}
}

export default GoogleAuth; 
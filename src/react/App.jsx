import React, { Component } from 'react';
import '@/react/App.scss';

import img from '@/img/react-logo.jpeg';

class App extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<p className="section__message section__message_green">React components</p>
					<img className="section__img" src={img} />
				</div>
			</section>
		);
	}
}
export default App;

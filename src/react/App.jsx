import React, { Component } from 'react';
import Block from '@/react/components/Block/Block.jsx';

import image from '@/img/react-logo.jpeg';

import '@/react/App.scss';

class App extends Component {
	render() {
		return (
			<section className="section">
				<Block image={image}/>
			</section>
		);
	}
}

export default App;

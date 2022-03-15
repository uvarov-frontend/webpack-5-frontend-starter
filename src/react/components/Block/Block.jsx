import React, { Component } from 'react';
import style from '@/react/components/Block/Block.module.scss';

class App extends Component {
	render() {
		return (
			<div className="container">
				<p className={style.text}>React components</p>
				<img className={style.img} src={this.props.image} alt="React"/>
			</div>
		);
	}
}

export default App;

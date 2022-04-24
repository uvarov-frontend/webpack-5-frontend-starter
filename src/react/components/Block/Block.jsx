import React from 'react';
import style from '@/react/components/Block/Block.module.scss';

const App = (props) => (
	<div className="container">
		<p className={style.text}>{props.text}</p>
		<img className={style.img} src={props.image} alt={props.text} />
	</div>
);

export default App;

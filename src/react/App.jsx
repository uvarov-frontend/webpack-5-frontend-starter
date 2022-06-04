import React from 'react';
import Block from '@/react/components/Block/Block.jsx';
import '@/react/App.scss';

import image from '@/img/react-logo.jpeg';

const App = () => {
	const text = 'React components';

	return (
		<section className="section-react">
			<Block text={text} image={image}/>
		</section>
	);
};

export default App;

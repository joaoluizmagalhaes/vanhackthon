import React from 'react';

/*
 * Header component
 */

const Header = (props) => (
	<div className='header'>
		<div className='container'>
			<h1 className='header__title'>{props.title}</h1>
		</div>
	</div>
);

Header.defaultProps = {
	title: 'Github Stars'
}

export default Header;
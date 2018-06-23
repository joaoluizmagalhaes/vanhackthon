import React from 'react';
import Search from './Search';
import Header from './Header';
import GithubProfile from './GithubProfile';

/*
 * Main App profile
 */

export default class VanhackthonApp extends React.Component {

	state = {
		search: ''
	};

	handleSearch = (search) => {

		this.setState(() => ({ search: search }));
			
	};

	render() {
		return (
			<div>
				<Header />
				<div className='container'>
					<div className='widget'>
						<Search handleSearch={this.handleSearch}/>
						{ this.state.search !== '' && <GithubProfile search={this.state.search} /> }
					</div>
				</div>
			</div>
		);	
	}
}
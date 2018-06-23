import React from 'react';

export default class Search extends React.Component {

/*
 * Component that use a form the get the data
 */

	handleSearch = (e) => {

		e.preventDefault();

		const search = e.target.elements.search.value.trim();
		const error = this.props.handleSearch(search);

		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.search.value = '';
		}
	}

	render() {
		return (
	
			<div className="search">
				<p className="search-text" >Search the Starred Repositories by User ID</p>
				<form className="search-form" onSubmit={this.handleSearch} >
					<input type="text" name="search"/>
				</form>
			</div>
		);
	}
}

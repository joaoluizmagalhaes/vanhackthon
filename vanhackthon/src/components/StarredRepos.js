import React from 'react';

/*
 * Component that show the starred repositories
 */

const StarredRepos = (props) => (
	<div className="starred">
		<a href={props.repository.node.url} className="starred-name" target="_blank">{props.repository.node.nameWithOwner}</a>
		<p className="starred-description">{props.repository.node.description}</p>
		<p className="starred-stars">Stars {props.repository.node.stargazers.totalCount}</p>
	</div>
);

export default StarredRepos;
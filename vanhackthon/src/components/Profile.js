import React from 'react';
import StarredRepos from './StarredRepos';

/*
 * Component that shows the Github user data profile
 */

const Profile = (props) => (
	<div className="profile">
		<img className="profile-avatar" src={props.profile.avatarUrl} />
		<p className="profile-text">{props.profile.name}</p>
		<p className="profile-text">{props.profile.login}</p>
		<p className="profile-text">{props.profile.email}</p>
		<p className="profile-text">{props.profile.bio}</p>
		<p className="profile-text">{props.profile.url}</p>
		<p className="profile-text">{props.profile.location}</p>

		{props.profile.starredRepositories.totalCount > 0 && props.profile.starredRepositories.edges.map((repository, index) => (
			<StarredRepos
				key={index}
				repository={repository}
				count={index + 1}
			/>
		))}

	</div>
);

export default Profile;
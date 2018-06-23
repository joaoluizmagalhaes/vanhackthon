import React from 'react';
import Profile from './Profile';
import ErrorMsg from './ErrorMsg';
import gql from "graphql-tag";
import { Query } from "react-apollo";

/*
 * Component that get the Github profile data
 */


const GithubProfile = (props) => (

	<Query 
		query={gql`
			{	
				user(login: ${props.search}) {
					login
					name
					email
					location
					bio
					avatarUrl
					url

					starredRepositories(last:5) {
						totalCount
						edges {
							cursor
							node {
								id
					         	nameWithOwner
					          	description
					          	url
					          	stargazers(first: 1) {
					            	totalCount

					          	}
					        }
						}
					}
				}
			}

		`}>
		{({ loading, error, data }) => {
			if (loading) return <p className="loading">Loading...</p>;
			if (error) return (
				<ErrorMsg />
			);

			return (
				<Profile profile={data.user} />
			);
		}}
	</Query>
);

export default GithubProfile;
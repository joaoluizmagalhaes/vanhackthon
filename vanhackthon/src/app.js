import React from 'react';
import ReactDOM from 'react-dom';
import VanhackthonApp from './components/VanhackthonApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	request: operation => {
		const token = "2b183cb60532ba214ffbf8727311509d3e4df70d";
		if (token) {
			operation.setContext({
				headers: {
					authorization: `Bearer ${token}`
				}
			});
		}
	}
});

ReactDOM.render(<ApolloProvider client={client}><VanhackthonApp /></ApolloProvider>, document.getElementById('app'));
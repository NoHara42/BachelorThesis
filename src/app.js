import '../styles/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import GraphiQL from 'graphiql';
// import fetch from 'whatwg-fetch';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

let url = "http://localhost:3000/api/graphql";

const fetcher = createGraphiQLFetcher({url: url});


export function App() {
    return <ApolloProvider client={client}>
        <GraphiQL fetcher={fetcher}
            editorTheme={'dracula'} />
        </ApolloProvider>;
    }
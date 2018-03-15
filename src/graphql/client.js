import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const defaultOptions = {
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

export const graphQLClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/pluto0004/web3-project",
  cache: new InMemoryCache(),
});

export default client;
import { ApolloClient, InMemoryCache } from "@apollo/client";

//server url
const url = "https://dex-server.herokuapp.com/";

// Initializing apollo client
export const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

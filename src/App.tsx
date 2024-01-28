/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { Screen } from "./Screen";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});
export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Screen />
    </ApolloProvider>
  );
};

import { render, screen } from "@testing-library/react";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "services/apolloClients";

test("renders react app", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const linkElement = screen.getByText("Loading...");
  expect(linkElement).toBeInTheDocument();
});

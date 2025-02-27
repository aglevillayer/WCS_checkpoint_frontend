import Header from "@/components/Header";
import "@/styles/globals.css";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });

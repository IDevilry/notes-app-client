import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = import.meta.env.VITE_API_URL;

const cache = new InMemoryCache();

export const client = new ApolloClient({
    uri: API_URL,
    cache: cache,
    connectToDevTools: true,
})

import { createGraphiQLFetcher } from '@graphiql/toolkit';

const url = "https://localhost:3000/api/graphql";
const fetcher = createGraphiQLFetcher({ url: url });

export default fetcher; 
import { GraphQLClient } from 'graphql-request';

const isProduction = (process.env.NODE_ENV = 'production');
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ''
  : 'https://';

const client = new GraphQLClient('apiURl');

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    // Client.request...
  } catch (error) {
    throw error;
  }
};

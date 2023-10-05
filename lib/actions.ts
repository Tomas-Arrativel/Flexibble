import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('apiURl');

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    // Client.request...
  } catch (error) {
    throw error;
  }
};

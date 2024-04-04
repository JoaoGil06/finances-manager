import { graphql } from "msw";
import { GET_PAYMENTS } from "./handlers/payments/index";

export const handlers = [
  GET_PAYMENTS,
  graphql.mutation("CreatePost", ({ query, variables }) => {
    console.log(
      'Intercepted a "CreatePost" GraphQL mutation:',
      query,
      variables
    );
  }),
  graphql.mutation("DeletePost", ({ query, variables }) => {
    console.log(
      'Intercepted a "DeletePost" GraphQL mutation',
      query,
      variables
    );
  }),
];

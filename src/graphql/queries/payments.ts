import { gql } from "@apollo/client";

const PAYMENT_FIELDS = gql`
  fragment PaymentFields on Payment {
    id
    description
    createdAt
    paymentType
    entity {
      type
      name
    }
    total
  }
`;
const GET_PAYMENTS = gql`
  query Payments {
    payments {
      ...PaymentFields
    }
  }
  ${PAYMENT_FIELDS}
`;

export { GET_PAYMENTS };

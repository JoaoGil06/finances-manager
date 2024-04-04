import { HttpResponse, graphql } from "msw";
import payments from "../payments";

const GET_BOARDS = graphql.query("Payments", () => {
  return HttpResponse.json({
    data: payments,
  });
});

export default GET_BOARDS;

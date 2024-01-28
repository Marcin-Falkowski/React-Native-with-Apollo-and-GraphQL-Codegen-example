import { gql } from "@apollo/client";

export const Example = gql`
  query Example {
    company {
      ceo
      coo
      cto
      founder
    }
    roadster {
      name
      launch_date_utc
      earth_distance_km
    }
  }
`;

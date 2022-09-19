import { gql, useQuery } from '@apollo/client';

const GET_DATA = gql`
  query {
    launchLatest {
      id
      details
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

export function Home() {
  const { data } = useQuery(GET_DATA);

  console.log(data);

  return (
    <div>
      <span>Home</span>
    </div>
  );
}

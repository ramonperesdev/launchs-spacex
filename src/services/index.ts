import { gql } from '@apollo/client';

export function getSpacexData() {
  const GET_DATA = gql`
    query {
      launchLatest {
        id
        mission_name
        launch_date_utc
        launch_site {
          site_name
        }
        is_tentative
        details
        rocket {
          rocket_name
          rocket_type
          rocket {
            company
            country
            description
          }
        }
        launch_success
        links {
          video_link
          wikipedia
        }
      }

      launchNext {
        id
        mission_name
        launch_date_utc
        launch_site {
          site_name
        }
        is_tentative
        details
        rocket {
          rocket_name
          rocket_type
          rocket {
            company
            country
            description
          }
        }
        launch_success
        links {
          video_link
          wikipedia
        }
      }
    }
  `;

  return { GET_DATA };
}

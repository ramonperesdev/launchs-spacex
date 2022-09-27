import * as Apollo from '@apollo/client';
import { QueryResult } from '@apollo/client';
import { render } from '../tests/test-utils';
import { Home } from './Home';

const data = {
  launchLatest: {
    id: '109',
    mission_name: 'Starlink-15 (v1.0)',
    launch_date_utc: '2020-10-24T15:31:00.000Z',
    launch_site: {
      site_name: 'CCAFS SLC 40',
    },
    is_tentative: false,
    details: null,
    rocket: {
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: {
        company: 'SpaceX',
        country: 'United States',
        description:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      },
    },
    launch_success: true,
    links: {
      video_link: 'https://youtu.be/J442-ti-Dhg',
      wikipedia: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  launchNext: {
    id: '110',
    mission_name: 'CRS-21',
    launch_date_utc: '2020-12-06T16:17:00.000Z',
    launch_site: {
      site_name: 'KSC LC 39A',
    },
    is_tentative: false,
    details:
      "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    rocket: {
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: {
        company: 'SpaceX',
        country: 'United States',
        description:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      },
    },
    launch_success: null,
    links: {
      video_link: null,
      wikipedia: null,
    },
  },
};

jest.mock('react-blurhash');
jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
  gql: jest.fn(),
}));

const mockLaunchsData = jest
  .spyOn(Apollo, 'useQuery')
  .mockReturnValue({ data: undefined, loading: true } as QueryResult<
    unknown,
    unknown
  >);

describe('Home Component', () => {
  it('should render the home component', () => {
    mockLaunchsData.mockReturnValueOnce({ data, loading: false } as QueryResult<
      unknown,
      unknown
    >);
    const { container } = render(<Home />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.getElementsByClassName('prev').length).toBe(1);
    expect(container.getElementsByClassName('next').length).toBe(1);
  });
});

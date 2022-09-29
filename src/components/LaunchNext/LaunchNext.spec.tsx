import { LaunchNext } from '.';
import { render, screen } from '../../tests/test-utils';

const launchNext = {
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
};

const formatDate = new Date(launchNext.launch_date_utc).toLocaleDateString(
  'en-US',
  { year: 'numeric', month: 'numeric', day: 'numeric' }
);

describe('Home Component', () => {
  it('should render the home component', () => {
    const { container } = render(<LaunchNext launchData={launchNext} />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByText('Launch Next')).toBeInTheDocument();
    expect(screen.getByText('Mission:')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
    expect(screen.getByText('Launch Site:')).toBeInTheDocument();
    expect(screen.getByText('Is tentative:')).toBeInTheDocument();
    expect(screen.getByText('Details:')).toBeInTheDocument();
    expect(screen.getByText('Rocket Name:')).toBeInTheDocument();
    expect(screen.getByText('Rocket Type:')).toBeInTheDocument();
    expect(screen.getByText('Rocket Country:')).toBeInTheDocument();
    expect(screen.getByText('Rocket Company:')).toBeInTheDocument();
    expect(screen.getByText('Rocket Description:')).toBeInTheDocument();
    expect(
      screen.getByText(
        `${
          launchNext?.launch_success ? 'Mission Accomplished' : 'Not Released'
        }`
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Video:')).toBeInTheDocument();
    expect(screen.getByText('Wikipedia:')).toBeInTheDocument();

    expect(screen.getByText(`${launchNext?.mission_name}`)).toBeInTheDocument();
    expect(screen.getByText(`${formatDate}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.launch_site?.site_name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.is_tentative ? 'Yes' : 'No'}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${
          launchNext?.details
            ? launchNext?.details
            : 'SpaceX’s Starlink V1.0 L15 (also known as Starlink 16) mission will launch 60 Starlink satellites atop its Falcon 9 rocket. The Falcon 9 will lift off from Space Launch Complex 40 (SLC-40), from Cape Canaveral Airforce Station, in Florida. Starlink 15 will mark the 15th operational Starlink mission, boosting the total number of Starlink satellites launched to 953.'
        }`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.rocket?.rocket_name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.rocket?.rocket_type}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.rocket?.rocket?.country}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.rocket?.rocket?.company}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchNext?.rocket?.rocket?.description}`)
    ).toBeInTheDocument();
  });
});

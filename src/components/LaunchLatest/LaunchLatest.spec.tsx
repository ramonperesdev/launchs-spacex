import { LaunchLatest } from '.';
import { render, screen } from '../../tests/test-utils';

const launchLatest = {
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
};

const formatDate = new Date(launchLatest.launch_date_utc).toLocaleDateString(
  'en-US',
  { year: 'numeric', month: 'numeric', day: 'numeric' }
);

describe('Home Component', () => {
  it('should render the home component', () => {
    const { container } = render(<LaunchLatest launchData={launchLatest} />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByText('Launch Latest')).toBeInTheDocument();
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
          launchLatest?.launch_success ? 'Mission Accomplished' : 'Not Released'
        }`
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Video:')).toBeInTheDocument();
    expect(screen.getByText('Wikipedia:')).toBeInTheDocument();

    expect(
      screen.getByText(`${launchLatest?.mission_name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${formatDate}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.launch_site?.site_name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.is_tentative ? 'Yes' : 'No'}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${
          launchLatest?.details
            ? launchLatest?.details
            : 'SpaceX’s Starlink V1.0 L15 (also known as Starlink 16) mission will launch 60 Starlink satellites atop its Falcon 9 rocket. The Falcon 9 will lift off from Space Launch Complex 40 (SLC-40), from Cape Canaveral Airforce Station, in Florida. Starlink 15 will mark the 15th operational Starlink mission, boosting the total number of Starlink satellites launched to 953.'
        }`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.rocket?.rocket_name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.rocket?.rocket_type}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.rocket?.rocket?.country}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.rocket?.rocket?.company}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${launchLatest?.rocket?.rocket?.description}`)
    ).toBeInTheDocument();
  });
});

import { ILaunchData } from '../../@types/types';
import { ContentSlider, ContentRow, TextTitle, Text } from './styles';

interface ILaunchLatestProps {
  launchData: ILaunchData;
}

export function LaunchLatest({ launchData }: ILaunchLatestProps) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const formatDate = new Date(launchData.launch_date_utc).toLocaleDateString(
    'en-US',
    options
  );

  return (
    <ContentSlider>
      <TextTitle>Launch Latest</TextTitle>

      <ContentRow>
        <Text>
          <strong>Mission:</strong> {launchData?.mission_name}
        </Text>
        <Text>
          <strong>Date:</strong> {formatDate}
        </Text>
      </ContentRow>

      <ContentRow>
        <Text>
          <strong>Launch Site:</strong> {launchData?.launch_site?.site_name}
        </Text>
        <Text>
          <strong>Is tentative:</strong>{' '}
          {launchData?.is_tentative ? 'Yes' : 'No'}
        </Text>
      </ContentRow>

      <Text>
        <strong>Details:</strong>{' '}
        {launchData?.details
          ? launchData?.details
          : 'SpaceX’s Starlink V1.0 L15 (also known as Starlink 16) mission will launch 60 Starlink satellites atop its Falcon 9 rocket. The Falcon 9 will lift off from Space Launch Complex 40 (SLC-40), from Cape Canaveral Airforce Station, in Florida. Starlink 15 will mark the 15th operational Starlink mission, boosting the total number of Starlink satellites launched to 953.'}
      </Text>

      <ContentRow>
        <Text>
          <strong>Rocket Name:</strong> {launchData?.rocket?.rocket_name}
        </Text>
        <Text>
          <strong>Rocket Type:</strong> {launchData?.rocket?.rocket_type}
        </Text>
      </ContentRow>

      <ContentRow>
        <Text>
          <strong>Rocket Country:</strong> {launchData?.rocket?.rocket?.country}
        </Text>
        <Text>
          <strong>Rocket Company:</strong> {launchData?.rocket?.rocket?.company}
        </Text>
      </ContentRow>

      <Text>
        <strong>Rocket Description:</strong>{' '}
        {launchData?.rocket?.rocket?.description}
      </Text>

      <Text>
        <strong>
          {launchData?.launch_success
            ? 'Mission Accomplished'
            : 'Mission Fails'}
        </strong>
      </Text>

      <Text>
        <strong>Video:</strong>{' '}
        {launchData?.links?.video_link
          ? launchData?.links?.video_link
          : 'Uninformed'}
      </Text>

      <Text>
        <strong>Wikipedia:</strong>{' '}
        {launchData?.links?.wikipedia
          ? launchData?.links?.wikipedia
          : 'Uninformed'}
      </Text>
    </ContentSlider>
  );
}

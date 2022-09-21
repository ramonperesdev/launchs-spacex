import { useCallback, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  Container,
  BoxCenter,
  TextTitle,
  ContentRow,
  Text,
  ContentSlider,
  Btn,
  SatelliteAnimation,
} from './styles';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { Blurhash } from 'react-blurhash';
import Slider from 'react-slick';
import satelliteIcon from '../assets/satellite.png';

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
  const svgAnimation = Array.from(Array(20).keys());
  const { data, loading } = useQuery(GET_DATA);
  const slider = useRef<Slider>(null);

  console.log({ loading, data }); //eslint-disable-line
  console.log(svgAnimation); //eslint-disable-line
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
  };

  //* Interaction with Slider
  const handleNext = useCallback(() => {
    slider?.current?.slickNext();
  }, []);

  const handlePrev = useCallback(() => {
    slider?.current?.slickPrev();
  }, []);

  return (
    <Container>
      <SatelliteAnimation>
        {svgAnimation.map((p) => (
          <img key={`${p}`} src={satelliteIcon} alt="satellite" />
        ))}
      </SatelliteAnimation>

      <BoxCenter>
        <Blurhash className="blurHash" hash="L43ls]*08w8wVqV?kCkX8wMc%#.9" />

        <Btn type="button" className="prev" onClick={handlePrev}>
          <MdOutlineArrowBackIosNew />
        </Btn>

        <Slider {...settings} ref={slider} focusOnSelect={false}>
          <ContentSlider>
            <TextTitle>Launch Latest</TextTitle>

            <ContentRow>
              <Text>Mission: Starlink-15 (v1.0)</Text>
              <Text>Date: 2020-10-24</Text>
            </ContentRow>

            <ContentRow>
              <Text>Launch Site: CCAFS SLC 40</Text>
              <Text>Is tentative: Yes</Text>
            </ContentRow>

            <Text>
              Details: SpaceX 21st ISS resupply mission on behalf of NASA and
              the first under the CRS-2 contract, this mission brings essential
              supplies to the International Space Station using the cargo
              variant of SpaceX Dragon 2 spacecraft. The external payload for
              this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon
              launch from LC-39A, Kennedy Space Center and the booster is
              expected to land on an ASDS. The mission will be complete with
              return and recovery of the Dragon capsule and down cargo.
            </Text>

            <ContentRow>
              <Text>Rocket Name: Falcon 9</Text>
              <Text>Rocket Type: FT</Text>
            </ContentRow>

            <ContentRow>
              <Text>Rocket Country: USA</Text>
              <Text>Rocket Company: SpaceX</Text>
            </ContentRow>

            <Text>
              Rocket Description: Falcon 9 is a two-stage rocket designed and
              manufactured by SpaceX for the reliable and safe transport of
              satellites and the Dragon spacecraft into orbit.
            </Text>

            <Text>Mission Accomplished</Text>

            <Text>Video: https://www.youtube.com/watch?v=8riKQXChPGg</Text>

            <Text>Wikipedia: https://en.wikipedia.org/wiki/Starlink</Text>
          </ContentSlider>

          <ContentSlider>
            <TextTitle>Launch test</TextTitle>

            <ContentRow>
              <Text>Mission: Starlink-15 (v1.0)</Text>
              <Text>Date: 2020-10-24</Text>
            </ContentRow>

            <ContentRow>
              <Text>Launch Site: CCAFS SLC 40</Text>
              <Text>Is tentative: Yes</Text>
            </ContentRow>

            <Text>
              Details: SpaceX 21st ISS resupply mission on behalf of NASA and
              the first under the CRS-2 contract, this mission brings essential
              supplies to the International Space Station using the cargo
              variant of SpaceX Dragon 2 spacecraft. The external payload for
              this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon
              launch from LC-39A, Kennedy Space Center and the booster is
              expected to land on an ASDS. The mission will be complete with
              return and recovery of the Dragon capsule and down cargo.
            </Text>

            <ContentRow>
              <Text>Rocket Name: Falcon 9</Text>
              <Text>Rocket Type: FT</Text>
            </ContentRow>

            <ContentRow>
              <Text>Rocket Country: USA</Text>
              <Text>Rocket Company: SpaceX</Text>
            </ContentRow>

            <Text>
              Rocket Description: Falcon 9 is a two-stage rocket designed and
              manufactured by SpaceX for the reliable and safe transport of
              satellites and the Dragon spacecraft into orbit.
            </Text>

            <Text>Mission Accomplished</Text>

            <Text>Video: https://www.youtube.com/watch?v=8riKQXChPGg</Text>

            <Text>Wikipedia: https://en.wikipedia.org/wiki/Starlink</Text>
          </ContentSlider>
        </Slider>

        <Btn type="button" className="next" onClick={handleNext}>
          <MdOutlineArrowForwardIos />
        </Btn>
      </BoxCenter>
    </Container>
  );
}

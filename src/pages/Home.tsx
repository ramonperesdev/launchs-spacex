import { useCallback, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { Container, BoxCenter, Btn, SatelliteAnimation } from './styles';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { Blurhash } from 'react-blurhash';
import Slider from 'react-slick';
import satelliteIcon from '../assets/satellite.png';
import { LaunchLatest } from '../components/LaunchLatest';
import { LaunchNext } from '../components/LaunchNext';
import { getSpacexData } from '../services';

export function Home() {
  const { GET_DATA } = getSpacexData();
  const { data, loading } = useQuery(GET_DATA);
  const svgAnimation = Array.from(Array(20).keys());
  const slider = useRef<Slider>(null);

  const settings = {
    infinite: true,
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
        <Blurhash
          className="blurHash"
          hash="L43ls]*08w8wVqV?kCkX8wMc%#.9"
          punch={loading ? 3 : 1}
        />

        {!loading && (
          <>
            <Btn type="button" className="prev" onClick={handlePrev}>
              <MdOutlineArrowBackIosNew />
            </Btn>

            <Slider {...settings} ref={slider} focusOnSelect={false}>
              <LaunchLatest launchData={data?.launchLatest} />

              <LaunchNext launchData={data?.launchNext} />
            </Slider>

            <Btn type="button" className="next" onClick={handleNext}>
              <MdOutlineArrowForwardIos />
            </Btn>
          </>
        )}
      </BoxCenter>
    </Container>
  );
}

import styled, { keyframes } from 'styled-components';
import background from '../assets/background-image.jpg';

const satellite = keyframes`
  0% {
    left: -100%;
  } 
  100% {
    left: 100%;
  }
`;

const image = keyframes`
  0% {
    transform: rotate(0deg);
  } 
  100% {
    transform: rotate(10deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  background-image: url(${background});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export const BoxCenter = styled.div`
  z-index: 100;
  width: 100%;
  max-width: 1150px;
  position: absolute;
  height: 100%;
  max-height: 700px;
  padding: 3.125rem;
  border-radius: 15px;
  overflow: hidden;

  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.3);
  background: ${(props) => props.theme.black};

  .blurHash {
    height: 100% !important;
    width: 100% !important;
    position: absolute !important;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 15px;
    opacity: 0.4;
  }

  .slick-slide {
    height: 100%;

    > div {
      height: 100%;
    }
  }

  .slick-slider,
  .slick-list {
    height: 100%;
    overflow: hidden;
  }

  .slick-list {
    padding: 5px 0 !important;
  }

  .slick-track {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
  }
`;
export const TextTitle = styled.span`
  color: ${(props) => props.theme.white};
  margin-bottom: 1.25rem;
  align-self: center;
  font-size: 2.5rem;
  font-weight: 600;
  z-index: 200;
`;
export const ContentRow = styled.div`
  display: flex;
  z-index: 200;

  span {
    min-width: 25rem;
  }
`;
export const Text = styled.span`
  z-index: 200;
  color: ${(props) => props.theme.white};
`;
export const ContentSlider = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 1.875rem;
`;

export const Btn = styled.button`
  position: absolute;
  top: 60%;
  z-index: 2;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  background: #fff;
  transition: background-color 0.2s ease-in-out;

  > svg {
    color: red;
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    background: #f1f1f1;

    > svg {
      color: yellow;
    }
  }

  &.next {
    right: 0.5rem;
  }
  &.prev {
    left: 0.5rem;
  }
`;

export const SatelliteAnimation = styled.div`
  display: flex;
  position: absolute;
  bottom: 25%;
  width: 60%;
  height: 4%;
  gap: 20px;

  animation: ${satellite} 20s infinite;

  > img {
    animation: ${image} 3s infinite;
    max-height: 100%;
    max-width: 100%;
    transform: perspective(75em) rotateX(18deg);
    box-shadow: rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
      rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
  }
`;

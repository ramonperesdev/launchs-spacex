import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  background-image: url('../assets/background-image.jpg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
  }
`;

export const BoxCenter = styled.div`
  z-index: 100;
  max-width: 1150px;
  max-height: 800px;
  padding: 3.125rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.3);
  background: ${(props) => props.theme.black};
`;
export const TextTitle = styled.span`
  color: ${(props) => props.theme.white};
  margin-bottom: 1.25rem;
  align-self: center;
  font-size: 2.5rem;
  font-weight: 600;
`;
export const ContentRow = styled.div`
  display: flex;

  span {
    min-width: 25rem;
  }
`;
export const Text = styled.span`
  color: ${(props) => props.theme.white};
`;

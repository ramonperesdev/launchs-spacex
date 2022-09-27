import styled from 'styled-components';

export const ContentSlider = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 1.875rem;
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

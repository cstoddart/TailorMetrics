import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  transform-style: preserve-3d;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

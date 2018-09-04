import PropTypes from 'prop-types';

import styled from 'styled-components';

export const Column = styled.div`
  width: ${props => `${props.width}%`};
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

Column.propTypes = {
  width: PropTypes.number.isRequired,
};

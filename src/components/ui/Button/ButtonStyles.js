import styled from 'styled-components';
import { Link } from 'gatsby';

import { BLUE, GREEN, LIGHT_GREEN } from '../../../constants';

export const StyledButton = styled.div`
  letter-spacing: 1px;
  padding: 12px 30px;
  border-radius: 50px;
  color: white;
  display: inline-block;
  background: ${props => `
    linear-gradient(
      to ${props.direction},
      ${(props.color === 'blue' && BLUE) ||
        (props.color === 'green' && GREEN)},
      ${(props.color === 'blue' && `${BLUE}88`) ||
        (props.color === 'green' && LIGHT_GREEN)}
    )
  `};
  box-shadow: ${props => `
    2px 2px 5px 0 ${(props.color === 'blue' && `${BLUE}88`) ||
    (props.color === 'green' && LIGHT_GREEN)}
  `};
  text-shadow: ${props => `
    1px 1px 0 ${(props.color === 'blue' && BLUE) ||
    (props.color === 'green' && GREEN)}
  `};
  position: relative;
  cursor: pointer;
  background-size: 150% 150%;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  transition: background-position 1s ease;
  user-select: none;

  &:hover {
    background-position: 100% 50%;
    top: 1px;
    left: 1px;
    box-shadow: ${props => `
      1px 1px 3px 0 ${(props.color === 'blue' && `${BLUE}88`) ||
      (props.color === 'green' && LIGHT_GREEN)}
    `};
  }
`;

export const StyledLink = styled(Link)`
  color: white;
`;

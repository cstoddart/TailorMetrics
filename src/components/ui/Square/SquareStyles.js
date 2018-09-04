import styled from 'styled-components';

import { PERSPECTIVE, BLUE, GREEN } from '../../../constants';

export const StyledSquare = styled.div`
  transform: rotate(45deg);
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  background: ${props => `
    linear-gradient(
      to ${props.direction},
      ${(props.color === 'blue' && BLUE) ||
      (props.color === 'green' && GREEN)},
      ${(props.color === 'blue' && `${BLUE}00`) ||
      (props.color === 'green' && `${GREEN}00`)}
    )
  `};
  border-radius: ${props => `${(props.size / 8) + 15}px`};
  overflow: hidden;
  display: inline-block;
  box-shadow: ${props => `
    5px 5px 75px 0 ${(props.color === 'blue' && `${BLUE}77`) ||
    (props.color === 'green' && `${GREEN}55`)}
    `};
  opacity: 1;
  transition: 1s ease;
  transform: ${props => `
    translateZ(${
      props.depth
    }px) translateX(${
      (props.depth / PERSPECTIVE) * props.offset
    }px) scale(${
      -1 * props.depth / PERSPECTIVE + 1
    }) rotate(45deg)`};

  &:hover {
    opacity: 0.9;
  }

  @media (max-width:980px) {
    width: ${props => `${props.size / 2}px`};
    height: ${props => `${props.size / 2}px`};
    border-radius: ${props => `${(props.size / 16) + 15}px`};
  }
`;

export const MaskedImage = styled.div`
  transform: rotate(-45deg);
  background-image: ${props => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  position: relative;
  top: ${props => `${props.size / 9}px`};
  left: ${props => `${props.size / 9}px`};

  @media (max-width:980px) {
    width: ${props => `${props.size / 2}px`};
    height: ${props => `${props.size / 2}px`};
    top: ${props => `${props.size / 18}px`};
    left: ${props => `${props.size / 18}px`};
  }
`;

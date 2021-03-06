import styled from 'styled-components';

import { PERSPECTIVE, BLUE, GREEN } from '../../../constants';

export const SquareContainer = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${(props.size / 8) + 15}px`};
  transform: rotate(45deg);
  transform: ${props => `
    translateZ(${props.depth}px)
    translateX(${-1 * (props.depth / PERSPECTIVE) * props.offset}px)
    scale(${-1 * props.depth / PERSPECTIVE + 1})
    rotate(45deg)
    `};

  @media (max-width:980px) {
    width: ${props => `${props.size / 2}px`};
    height: ${props => `${props.size / 2}px`};
    border-radius: ${props => `${(props.size / 16) + 10}px`};
  }
`;

export const StyledSquare = styled.div`
  display: inline-block;
  transition: 1s ease;
  overflow: hidden;
  opacity: ${props => props.depth > 0 ? 1 : 0.1};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${(props.size / 8) + 15}px`};
  z-index: ${props => props.depth < 1 && '-500'};
  box-shadow: ${props => `
    5px 5px 75px 0 ${(props.color === 'blue' && `${BLUE}77`) ||
    (props.color === 'green' && `${GREEN}55`)}
  `};
  background: ${props => `
    linear-gradient(
      to ${props.direction},
      ${(props.color === 'blue' && BLUE) ||
      (props.color === 'green' && GREEN)},
      ${(props.color === 'blue' && `${BLUE}00`) ||
      (props.color === 'green' && `${GREEN}00`)}
    )
  `};

  @media (max-width:980px) {
    width: ${props => `${props.size / 2}px`};
    height: ${props => `${props.size / 2}px`};
    border-radius: ${props => `${(props.size / 16) + 10}px`};
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

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  z-index: 500;
  
  &:hover ~ .square { 
    transform: ${props => `
      rotateX(${200 / props.size}deg)
      rotateY(-${200 / props.size}deg);
    `}
  }
`;

export const Left = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  z-index: 500;
  
  &:hover ~ .square { 
    transform: ${props => `
      rotateX(-${200 / props.size}deg)
      rotateY(-${200 / props.size}deg);
    `}
  }
`;

export const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  z-index: 500;
  
  &:hover ~ .square { 
    transform: ${props => `
      rotateX(${200 / props.size}deg)
      rotateY(${200 / props.size}deg);
    `}
  }
`;

export const Bottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  z-index: 500;
  
  &:hover ~ .square { 
    transform: ${props => `
      rotateX(-${200 / props.size}deg)
      rotateY(${200 / props.size}deg);
    `}
  }
`;

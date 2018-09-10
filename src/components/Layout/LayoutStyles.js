import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

import { PERSPECTIVE } from '../../constants';
import OpenSans from '../../assets/fonts/OpenSans-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: 'open sans';
    src: url(${OpenSans}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    transform-style: preserve-3d;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: 'open sans', sans-serif;
    color: #541b8a;
    font-size: 17px;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 15px;
    letter-spacing: 3px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: #541b8a;
  }

  p {
    margin-top: 0;
  }

  ul {
    margin: 0;
  }

  @media (max-width:980px) {
    body {
      font-size: 15px;
    }
  }
`;

export const StyledLayout = styled.div`
  height: 100vh;
  perspective: ${PERSPECTIVE}px; /* 1 + -Z/300 = scale */
  overflow-x: hidden;
  overflow-y: auto;
`;

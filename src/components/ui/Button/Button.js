import React from 'react';

import { StyledButton, StyledLink } from './ButtonStyles';

const scroll = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

export const Button = (props) => (
  <StyledButton {...props} onClick={() => scroll(props.targetId) || null}>
    {props.to &&
      <StyledLink {...props} />
    }
    {props.targetId && props.children}
  </StyledButton>
);

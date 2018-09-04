import React from 'react';
import { Link } from 'gatsby';

import { AnchorLink } from '../AnchorLink/AnchorLink';
import { StyledHeader, Logo, HeaderLinks, HeaderLink } from './HeaderStyles';

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Logo><Link to="/">{siteTitle}</Link></Logo>
    <HeaderLinks>
      <HeaderLink>
        <AnchorLink targetId="how-it-works">How It Works</AnchorLink>
      </HeaderLink>
      <HeaderLink>
        <AnchorLink targetId="our-mission">Mission</AnchorLink>
      </HeaderLink>
      <HeaderLink>
        <AnchorLink targetId="get-started">Get Started</AnchorLink>
      </HeaderLink>
    </HeaderLinks>
  </StyledHeader>
);

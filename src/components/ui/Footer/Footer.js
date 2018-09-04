import React from 'react';

import { AnchorLink } from '../AnchorLink/AnchorLink';
import { FooterRow, FooterLinks, FooterLink } from './FooterStyles';

export const Footer = () => (
  <FooterRow>
    <div>© {new Date().getFullYear()} TailorMetrics</div>
    <FooterLinks>
      <FooterLink>
        <AnchorLink targetId="how-it-works">How It Works</AnchorLink>
      </FooterLink>
      <FooterLink>
        <AnchorLink targetId="our-mission">Mission</AnchorLink>
      </FooterLink>
      <FooterLink>
        <AnchorLink targetId="get-started">Get Started</AnchorLink>
      </FooterLink>
    </FooterLinks>
  </FooterRow>
);

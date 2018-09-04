import React from 'react';

import {
  HowItWorksRowContainer,
  HowItWorksRow,
  HowItWorksRowTitle,
  HowItWorksColumn,
  HighlightContent,
  HighlightTitle,
  HowItWorksButton,
} from './HowItWorksStyles';
import { Row } from '../../../ui';

export const HowItWorks = () => (
  <HowItWorksRowContainer id="how-it-works">
    <HowItWorksRowTitle>- How It Works</HowItWorksRowTitle>
    <HowItWorksRow>
      <HowItWorksColumn width={100 / 3}>
        <HighlightContent>
          <HighlightTitle>Submit Your Clothing</HighlightTitle>
          <p>Send us any item you would like sized. We'll return it when we're done.</p>
        </HighlightContent>
      </HowItWorksColumn>
      <HowItWorksColumn width={100 / 3}>
        <HighlightContent>
          <HighlightTitle>Receive Guaranteed Size</HighlightTitle>
          <p>Our team hand-measures each item at critical fit-points to determine the most accurate fit.</p>
        </HighlightContent>
      </HowItWorksColumn>
      <HowItWorksColumn width={100 / 3}>
        <HighlightContent>
          <HighlightTitle>Show Your Customers</HighlightTitle>
          <p>Put our badge on your tags and listings to show your customers they can trust your sizes.</p>
        </HighlightContent>
      </HowItWorksColumn>
    </HowItWorksRow>
    <Row>
      <HowItWorksButton targetId="our-mission" direction="right" color="green" text="Our Mission">Our Mission</HowItWorksButton>
    </Row>
  </HowItWorksRowContainer>
);
import React from 'react';

import {
  GetStartedRow,
  GetStartedColumn,
  GetStartedContent,
  GetStartedTitle,
  GetStartedDetails,
  GetStartedButton,
} from './GetStartedStyles';

export const GetStarted = () => (
  <GetStartedRow id="get-started">
    <GetStartedColumn width={100}>
      <GetStartedContent>
        <GetStartedTitle>Ready To Get Started?</GetStartedTitle>
        <GetStartedDetails>Sign up today to partner with TailorMetrics and offer consistent clothing sizes to your cutomers.</GetStartedDetails>
        <GetStartedButton targetId="how-it-works" direction="right" color="green" text="Learn More">Learn More</GetStartedButton>
      </GetStartedContent>
    </GetStartedColumn>
  </GetStartedRow>
)

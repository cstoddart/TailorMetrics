import React from 'react';

import {
  WelcomeRow,
  WelcomeColumn1,
  WelcomeColumn2,
  WelcomeContent,
  WelcomeTitle,
  WelcomeDetails,
  WelcomeButton,
  WelcomeSquare1,
  WelcomeSquare2,
  WelcomeBackgroundSquare,
} from './WelcomeStyles';
import { Square } from '../../../ui';
import mannequin from '../../../../assets/images/mannequin.png';

export const Welcome = () => (
  <WelcomeRow>
    <WelcomeColumn1 width={50}>
      <WelcomeBackgroundSquare>
        <Square
          size={1000}
          direction="top"
          color="blue"
          />
      </WelcomeBackgroundSquare>
      <WelcomeContent>
        <WelcomeTitle>The Right Size Every Time</WelcomeTitle>
        <WelcomeDetails>TailorMetrics offers professional clothing sizing services for retailers & manufacturers. With consistent sizing across multiple brands, your customers will pick the perfect size every time.</WelcomeDetails>
        <WelcomeButton targetId="how-it-works" direction="right" color="green" text="How It Works">How It Works</WelcomeButton>
      </WelcomeContent>
    </WelcomeColumn1>
    <WelcomeColumn2 width={50}>
      <WelcomeSquare1>
        <Square
          size={450}
          direction="right"
          color="blue"
          image={mannequin}
          depth={60}
        />
      </WelcomeSquare1>
      <WelcomeSquare2>
        <Square
          size={200}
          direction="top"
          color="green"
        />
      </WelcomeSquare2>
    </WelcomeColumn2>
  </WelcomeRow>
);

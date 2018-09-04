import React from 'react';

import {
  MissionRow,
  MissionRowTitle,
  MissionColumn1,
  MissionColumn2,
  MissionContent,
  MissionTitle,
  MissionDetails,
  MissionButton,
  MissionSquare1,
  MissionSquare2,
  MissionBackgroundSquare,
} from './MissionStyles';
import { Square } from '../../../ui';
import mannequins from '../../../../assets/images/mannequins.png';

export const Mission = () => (
  <MissionRow id="our-mission">
    <MissionColumn1 width={50}>
      <MissionSquare1>
        <Square
          size={450}
          direction="bottom"
          color="green"
          image={mannequins}
          />
      </MissionSquare1>
      <MissionSquare2>
        <Square
          size={150}
          direction="left"
          color="blue"
          />
      </MissionSquare2>
    </MissionColumn1>
    <MissionColumn2 width={50}>
      <MissionBackgroundSquare>
        <Square
          size={600}
          direction="top"
          color="blue"
          />
      </MissionBackgroundSquare>
      <MissionContent>
        <MissionRowTitle>- Our Mission</MissionRowTitle>
        <MissionTitle>Consistent Sizing, Consistent Fit</MissionTitle>
        <MissionDetails>Over 40% of clothing purchased online is returned due to sizing issues. TailorMetrics is committed to bringing consistent sizing to the clothing industry.</MissionDetails>
        <MissionButton targetId="get-started" direction="right" color="green" text="Get Started">Get Started</MissionButton>
      </MissionContent>
    </MissionColumn2>
  </MissionRow>
);
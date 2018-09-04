import styled from 'styled-components';

import { Row } from '../Row/Row';

export const FooterRow = Row.extend`
  padding-bottom: 25px;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLinks = styled.ul`
  padding: 0;
  display: flex;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const FooterLink = styled.div`
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;

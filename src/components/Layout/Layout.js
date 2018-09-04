import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Footer } from '../ui';
import { StyledLayout } from './layoutStyles';
import './layoutStyles';

export const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledLayout>
        {/* <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Footer />
      </StyledLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

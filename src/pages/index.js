import React from 'react';

import { Welcome, HowItWorks, Mission, GetStarted } from '../components/pages/home';
import { Layout } from '../components';

const IndexPage = () => (
  <Layout>
    <Welcome />
    <HowItWorks />
    <Mission />
    <GetStarted />
  </Layout>
);

export default IndexPage;

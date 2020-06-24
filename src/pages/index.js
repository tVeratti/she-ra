import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/she-ra">She Ra</Link> <br />
  </Layout>
);

export default IndexPage;

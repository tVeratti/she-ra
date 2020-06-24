import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Character = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section>
        <Helmet titleTemplate="%s | Character">
          <title>{post.frontmatter.name}</title>
          {/* <meta name="description" content={post.frontmatter.description} /> */}
        </Helmet>

        <h1>{post.frontmatter.name}</h1>
        {/* <Img fixed={post.frontmatter.image.fixed} /> */}
      </section>
    </Layout>
  );
};

export default Character;

export const pageQuery = graphql`
  query CharacterByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
      }
    }
  }
`;

// image {
//   childImageSharp {
//     fixed(width: 545, height: 640) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }

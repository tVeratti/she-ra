import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Character = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log(post);
  return (
    <Layout>
      <section>
        <Helmet titleTemplate="%s | Character">
          <title>{post.frontmatter.name}</title>
          {/* <meta name="description" content={post.frontmatter.description} /> */}
        </Helmet>

        <h1>{post.frontmatter.name}</h1>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

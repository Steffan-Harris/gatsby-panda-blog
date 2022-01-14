import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      Welcome to the blog page
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={node.slug}><h2>{node.frontmatter.title}</h2></Link>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        body
        slug
        frontmatter {
          date(formatString: "ddd MMM Do YYYY")
          title
        }
      }
    }
  }
`;

export default Blog;

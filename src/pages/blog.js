import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      Welcome to the blog page
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        id
      }
    }
  }
`;

export default Blog;

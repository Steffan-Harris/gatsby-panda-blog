import React from 'react'
import Layout from '../../components/layout'
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPostPage = ({data}) => {
  console.log("Data", data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted on {data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id:String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "ddd MMM Do YYYY")
        title
      }
      body
    }
  }
`

export default BlogPostPage
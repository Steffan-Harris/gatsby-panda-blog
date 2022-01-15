import React from 'react'
import Layout from '../../components/layout'
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPostPage = ({data}) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted on {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={heroImage} alt={data.mdx.frontmatter.hero_image_alt_text}/>
      <a href={data.mdx.frontmatter.hero_image_url}>
        <p>Credit: {data.mdx.frontmatter.hero_image_photographer}</p>
      </a>
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
        hero_image {
          id
          childImageSharp {
            gatsbyImageData(transformOptions: {cropFocus: CENTER})
          }
        }
        hero_image_alt_text
        hero_image_photographer
        hero_image_url
      }
      body
    }
  }
`

export default BlogPostPage
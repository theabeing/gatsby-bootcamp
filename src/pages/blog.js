import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
        allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <h2>Blog</h2>
            <ol className={blogStyles.posts}>
            { allContentfulBlogPost.edges.map(({node}, index) => (
                <li className={blogStyles.post} key={index}>
                    <Link to={`/blog/${node.slug}`}>
                        <h2>{node.title}</h2>
                        <p>{node.publishedDate}</p>
                    </Link>
                </li>     
            ))}
            </ol>
        </Layout>
    )
}

export default BlogPage
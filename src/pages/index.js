import React from 'react'
import Link from 'gatsby-link'

export default ({data}) => (
    <div>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>

        <div>
            <h1>Richard Hamming on Luck</h1>
            <div>
                <p>
                    From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                        You and Your Research
                    </a>”.
                </p>
                <blockquote>
                    <p>
                        There is indeed an element of luck, and no, there isn’t.
                        The prepared mind sooner or later finds something
                        important and does it. So yes, it is luck.{' '}
                        <em>
                            The particular thing you do is luck, but that you do
                            something is not.
                        </em>
                    </p>
                </blockquote>
            </div>
            <p>Posted April 09, 2011</p>
        </div>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <h4>Total posts: {data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <h3>{node.frontmatter.title}</h3>
                <span>{node.frontmatter.date}</span>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </div>
)

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`

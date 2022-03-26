import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as React from "react"

// styles
const pageStyles = {
   color: "#232129",
   padding: 96,
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
   marginTop: 0,
   marginBottom: 64,
   maxWidth: 320,
}
const headingAccentStyles = {
   color: "#663399",
}
const listStyles = {
   marginBottom: 96,
   paddingLeft: 0,
}
const linkStyle = {
   color: "#8954A8",
   fontWeight: "bold",
   fontSize: 16,
   verticalAlign: "5%",
}

const docLinkStyle = {
   ...linkStyle,
   listStyleType: "none",
   marginBottom: 24,
}

const docLink = {
   text: "Documentation",
   url: "https://www.gatsbyjs.com/docs/",
   color: "#8954A8",
}

// markup
const IndexPage = (props) => {
   return (
      <main style={pageStyles}>
         <title>Home Page</title>
         <h1 style={headingStyles}>
            Congratulations
            <br />
            <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
            <span role="img" aria-label="Party popper emojis">
               🎉🎉🎉
            </span>
         </h1>
         <ul style={listStyles}>
            <li style={docLinkStyle}>
               <a
                  style={linkStyle}
                  href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
               >
                  {docLink.text}
               </a>
            </li>
         </ul>

         <Link to="/photos">To photos</Link>

         <div>{props.data.allContentfulGeneral.nodes[0].person}</div>
         <br />
         <div>{renderRichText(props.data.allContentfulGeneral.nodes[0].description)}</div>
      </main>
   )
}

export const pageQuery = graphql`
   query MyQuery {
      allContentfulGeneral {
         nodes {
            description {
               raw
            }
            person
         }
      }
   }
`

export default IndexPage

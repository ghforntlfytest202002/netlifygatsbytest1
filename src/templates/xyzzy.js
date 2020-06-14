import React from "react"

import BasicDiv from '../components/basicDiv.js';

export default function Xyzzy({ pageContext }) {
  return (
    <Layout {pageContext.frontmatter.message} />
  )
}
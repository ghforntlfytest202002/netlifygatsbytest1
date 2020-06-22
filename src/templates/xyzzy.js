import React from "react"

export default function Xyzzy({ pageContext }) {
  return (
    <div>
	  {pageContext.frontmatter.message}
    </div>
  )
}
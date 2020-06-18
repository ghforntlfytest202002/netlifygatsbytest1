import React from "react"

import LayoutHello from '../components/layoutHello.js';
import BasicDiv from '../components/basicDiv.js';

export default function Xyzzy({ pageContext }) {
  return (
    <LayoutHello>
      <BasicDiv messageToDisplay={pageContext.frontmatter.message} />
	</LayoutHello>
  )
}
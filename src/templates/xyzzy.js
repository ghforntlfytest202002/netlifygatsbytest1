import React from "react"

import LayoutHello from '../components/layoutHello.js';
import sectionComponentTypeList from '../components/indexSectionComponents.js';

export default function Xyzzy({ pageContext }) {
  const sections = pageContext.frontmatter.sections;
  const SectionComponents = sections.map((section) =>
	let rawComponent = sectionComponentTypeList[section.type];
	return (
	  <Component section={section} />
	)
  );
  return (
    <LayoutHello>
	  <div className='xyzzy'>
	    {SectionComponents}
	  </div>
	</LayoutHello>
  )
}
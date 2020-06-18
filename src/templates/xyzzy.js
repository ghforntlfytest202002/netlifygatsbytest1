import React from "react"

import LayoutHello from '../components/layoutHello.js';
import sectionComponentTypeList from '../components/indexSectionComponents.js';

export default function Xyzzy({ pageContext }) {
  const sections = pageContext.frontmatter.sections;
  const rawSectionComponents = sections.map((section) =>
	sectionComponentTypeList[section.type]
  );
  const SectionComponents = rawSectionComponents.map((Component) =>
	  <Component section={section} />
  );
  return (
    <LayoutHello>
	  <div className='xyzzy'>
	    {SectionComponents}
	  </div>
	</LayoutHello>
  )
}
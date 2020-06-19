import React from "react"
import _ from 'lodash';

import LayoutHello from '../components/layoutHello.js';
import sectionComponentTypeList from '../components/indexSectionComponents.js';

export default function Xyzzy({ pageContext }) {
  const sections = pageContext.frontmatter.sections;
  const SectionComponents = sections.map((section) => {
    let sectionType = _.upperFirst(_.camelCase(_.get(section, 'type')));
    //let sectionType = section.type;
	let Component = sectionComponentTypeList[sectionType];
	return (
	  <Component section={section} />
	)
  });
  return (
    <LayoutHello>
	  <div className='xyzzy'>
	    {SectionComponents}
	  </div>
	</LayoutHello>
  )
}
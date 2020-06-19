import React from "react"
import _ from 'lodash';
import { remarkForm } from "gatsby-tinacms-remark";

import LayoutHello from '../components/layoutHello.js';
import sectionComponentTypeList from '../components/indexSectionComponents.js';

function Xyzzy({ pageContext }) {
  const sections = pageContext.frontmatter.sections;
  const SectionComponents = sections.map((section) => {
    let sectionType = _.upperFirst(_.camelCase(_.get(section, 'type')));
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
	  <div className='xyzzy-two'>
	    {markdownRemark.frontmatter.miscfield}
	  </div>
	</LayoutHello>
  )
}

export const pageQuery = graphql`
  query XyzzyById($id: String!) {
    markdownRemark(fields: { id: { eq: $id } }) {
      id
      frontmatter {
        miscfield
      }
      ...TinaRemark
    }
  }
`

//export {Xyzzy as default};
export default remarkForm(Xyzzy);
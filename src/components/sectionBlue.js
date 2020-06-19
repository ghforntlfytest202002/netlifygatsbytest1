import React from "react"
import { liveRemarkForm } from 'gatsby-tinacms-remark';
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';

export default function SectionBlue(props) {
  return (
    <div className="blue-div">
	  <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
	    <article onClick={() => props.setIsEditing(true)}>
	      {props.section.mention}
	    </article>
	  </TinaField>
    </div>
  )
}
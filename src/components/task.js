import React from "react"

export default function Task(props) {
  return (
    <div className="task">
	  {props.taskDetail.how}
    </div>
  )
}
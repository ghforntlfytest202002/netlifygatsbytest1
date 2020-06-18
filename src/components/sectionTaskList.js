import React from "react"

import Task from './task.js';

export default function SectionTaskList(props) {
  const tasks = props.section.accomplishments;
  const taskItems = tasks.map((taskToDo) =>
	<Task taskDetail={taskToDo} />
  );
  return (
    <div className="task-list">    
	  {taskItems}
	</div>
  )
}
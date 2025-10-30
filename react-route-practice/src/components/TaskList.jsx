import React from 'react'
import {Link} from 'react-router'
import {tasks} from './tasks'

const TaskList = () => {
  return (
    <div>
      <h2>TaskList</h2>
      <ul>

            {tasks.map((task => (
                  <li key={task.id} className="list-item">
                        <Link to={`/task/${task.id}`}>
                        {task.title}
                        </Link>
                  </li>
            )))}
      </ul>
      </div>
  )
}

export default TaskList
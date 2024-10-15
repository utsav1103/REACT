import { useState } from "react";
import React from "react";

const Tasks = () => {
    const [tasks, setTasks ] = useState([
        {id: 1, name: "Talk to laxman", completed: false},
        {id: 2, name: "Talk to mikasa", completed: true},
        {id: 3, name: "Roast Homies", completed: false},
        {id: 4, name: "Overthink", completed: true },
    ]);
   console.log(tasks);
   
  return (
        <div>
            <h2>Task List</h2>
            <ul>{
                tasks.map((task)=>{
                    return(
                        <li key={task.id}>
                            {task.name} - {task.completed ? 'Completed' : 'Pending'}
                        </li>
                    );
                })}
                </ul>
        </div>
    )
  
};

export default Tasks

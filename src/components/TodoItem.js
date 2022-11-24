import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { duplicateTask } from "../redux/taskSlice";

const TodoItem = ({ id, title, checked }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

  const duplicate=()=>{
    dispatch(
      duplicateTask({
        title: title,
        checked: checked
      })
    )
  }

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
        <input type="checkbox" checked={checked}></input>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>

        <button className="duplicate-task-button" onClick={()=>{
          duplicate();
        }}>Duplicate</button>

			</div>
		</li>
	);
};

export default TodoItem;
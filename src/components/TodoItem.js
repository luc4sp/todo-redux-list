import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TodoItem = ({ id, title, checked }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
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
			</div>
		</li>
	);
};

export default TodoItem;
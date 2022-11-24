import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task,
                checked: true
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        duplicateTask: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.title,
                checked: action.payload.checked
            }
            state.push(newTask);
        }
    }
});

export const {addTask, deleteTask, duplicateTask} = tasksSlice.actions;

export default tasksSlice.reducer;
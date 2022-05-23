import { createReducer, on } from '@ngrx/store';
import {Task} from "../../task";
import {addTask, loadTasks, loadTasksFailure, loadTasksSuccess, removeTask} from "./task.action";


export interface TaskState {
  tasks: Task[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TaskState = {
  tasks: [],
  error: null,
  status: 'pending',
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { description, isImportant }) => ({
    ...state,
    tasks: [...state.tasks, { id: Date.now().toString(), description: description, isImportant: isImportant }],
  })),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(loadTasks, (state) => ({ ...state, status: 'loading' })),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks: tasks,
    error: null,
    status: 'success',
  })),
  on(loadTasksFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);

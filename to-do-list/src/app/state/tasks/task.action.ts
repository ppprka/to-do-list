import { createAction, props } from '@ngrx/store';
import {Task} from "../../task";

export const addTask = createAction(
  '[Task Page] Add Task',
  props<{ id: string,
          description: string,
          isImportant: boolean}>()
);

export const removeTask = createAction(
  '[Task Page] Remove Task',
  props<{ id: string }>()
);

export const loadTasks = createAction('[Task Page] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Task API] Tasks Load Success',
  props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[Task API] Tasks Load Failure',
  props<{ error: string }>()
);

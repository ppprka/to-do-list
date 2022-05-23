import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTask,
  removeTask,
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
} from './task.action';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {AppState} from "../app.state";
import {StorageService} from "../../storage.service";
import {selectAllTasks} from "./task.selectors";

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private todoService: StorageService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        from(this.todoService.getTasks()).pipe(
          map((tasks) => loadTasksSuccess({ tasks: tasks })),
          catchError((error) => of(loadTasksFailure({ error })))
        )
      )
    )
  );

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTask, removeTask),
        withLatestFrom(this.store.select(selectAllTasks)),
        switchMap(([action, tasks]) => from(this.todoService.saveTasks(tasks)))
      ),
    { dispatch: false }
  );
}

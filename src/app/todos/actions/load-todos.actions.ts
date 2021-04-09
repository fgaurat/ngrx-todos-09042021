import { createAction, props } from '@ngrx/store';
import { Todo } from '../shared/todo.model';

export const loadLoadTodoss = createAction(
  '[LoadTodos] Load LoadTodoss'
);

export const loadLoadTodoSuccess = createAction(
  '[LoadTodos] Load LoadTodoss Success'
);

export const deleteTodo = createAction(
  '[LoadTodos] Delete LoadTodoss',props<{todo:Todo}>()
);







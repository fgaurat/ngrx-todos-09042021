import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Todo } from '../todos/shared/todo.model';
import { loadLoadTodoss,loadLoadTodoSuccess } from '../todos/actions/load-todos.actions';


export interface State {
  allTodos: TodoState;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
}

const todoReducer = createReducer(initialState,
  on(loadLoadTodoss, state => ({ ...state })),
  on(loadLoadTodoSuccess, (state,action) => ({ ...state, todos:action.payload}))

);


export const reducers: ActionReducerMap<State> = {
  allTodos: todoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

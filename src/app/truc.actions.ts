import { createAction, props } from '@ngrx/store';

export const loadTrucs = createAction(
  '[Truc] Load Trucs'
);

export const loadTrucsSuccess = createAction(
  '[Truc] Load Trucs Success',
  props<{ data: any }>()
);

export const loadTrucsFailure = createAction(
  '[Truc] Load Trucs Failure',
  props<{ error: any }>()
);

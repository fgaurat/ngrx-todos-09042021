import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../shared/todo.service';
import {switchMap, map, mergeMap} from 'rxjs/operators'
import { deleteTodo, loadLoadTodoss } from '../actions/load-todos.actions';


@Injectable()
export class TodoEffects {


    //LoadTodo
    todoList$ = createEffect( () => {
      return this.actions$.pipe(
        ofType(loadLoadTodoss),
        switchMap( () => this.todoService.findAll()),
        map( (todos ) => ({type:'[LoadTodos] Load LoadTodoss Success',payload:todos}))
      );
  
    });
    
    //DeleteTodo
    deleteTodo$ = createEffect( () => {
      return this.actions$.pipe(
        ofType(deleteTodo),
        switchMap( (action) => this.todoService.delete(action.todo)),
        map( () => (loadLoadTodoss()))
      );
  
    });

  constructor(private actions$: Actions,private todoService:TodoService) {

  }

}

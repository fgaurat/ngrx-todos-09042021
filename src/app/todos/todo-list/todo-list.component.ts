import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState, State } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { Todo } from '../shared/todo.model';
import { loadLoadTodoss, deleteTodo } from '../actions/load-todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$:Observable<Todo[]>

  constructor(private store:Store<State>) { 
    this.todos$ = store.select(state => state.allTodos.todos);
  }

  ngOnInit(): void {

    this.store.dispatch(loadLoadTodoss())
  }

  onDelete(todo: Todo): void {
    this.store.dispatch(deleteTodo({todo}))

  }

}

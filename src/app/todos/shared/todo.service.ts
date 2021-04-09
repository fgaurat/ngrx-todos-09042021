import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.url_todos)
  }

  delete(todo:Todo):Observable<void> {
    const url = `${environment.url_todos}/${todo.id}`
    return this.http.delete<void>(url)
  }

  save(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(environment.url_todos,todo)
  }


}

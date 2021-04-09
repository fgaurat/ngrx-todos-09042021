import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [TodoFormComponent, TodoListComponent, TodoPageComponent],
  imports: [
    CommonModule
  ],
  exports:[TodoPageComponent]
})
export class TodosModule { }

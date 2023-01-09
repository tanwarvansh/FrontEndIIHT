import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, loadTodos, removeTodo } from 'src/app/state/todos/todo.actions';
import { selectAllTodos, todosDataState } from 'src/app/state/todos/todo.selectors';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: 'todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  constructor(private store:Store){}

  public allTodos$:Observable<Todo[]>=this.store.select(selectAllTodos);

  fn(){
  this.store.select(selectAllTodos).subscribe((data)=>{
    console.log(data);
    
  });
}
  public todo='';

  onSubmit(todoForm:NgForm){
    console.log(todoForm.value);
    const todo = todoForm.form.value.todo;

    console.log('in submit',todo);
      this.store.dispatch(addTodo({ content: todo }));
      this.todo = '';
    
    
  }

  ngOnInit(): void {
    console.log("hello");
    this.store.dispatch(loadTodos());
    this.fn();
      
  }
  removeTodo(todo:Todo){
    console.log(todo);
    const to=todo.id;
    this.store.dispatch(removeTodo({ id: to }));

  }

}

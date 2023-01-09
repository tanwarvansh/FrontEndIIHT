import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoPageRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from 'src/app/state/todos/todo.reducers';
import { TodoEffects } from 'src/app/state/todos/todo.effects';
import { EffectsModule } from '@ngrx/effects';




@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoPageRoutingModule,
    StoreModule.forFeature('todos',todoReducer),
    // EffectsModule.forRoot([]),
    EffectsModule.forFeature(TodoEffects)
    // EffectsModule.forFeature(TodoEffects)
  ]
})
export class TodoModule { }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ToDoService } from 'src/todo/todo.service';
import {addTodo,removeTodo,loadTodos,LoadToDoSuccess,LoadToDoFailure}  from './todo.actions';


@Injectable()
export class TodoEffects{
    constructor(private actions$:Actions, private todoService:ToDoService){}

    loadTodos$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadTodos),
            mergeMap(()=>this.todoService.getTodos()
            .pipe(map(todos=>LoadToDoSuccess({todos})),
            catchError(error=>of(LoadToDoFailure({ error })))
            )
        )
        )
    })


}
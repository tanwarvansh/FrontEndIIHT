import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/todo/todo.model';
import {addTodo,removeTodo,loadTodos,LoadToDoSuccess,LoadToDoFailure}  from './todo.actions';
import { intialState } from './todo.state';




export const todoReducer= createReducer(
    intialState,
    on(addTodo,(state,{content})=>({
        ...state,
        todos:[...state.todos,{id:Date.now().toString(),content:content}],
    })),

    on(removeTodo,(state,{id})=>({
        ...state,
        todos:state.todos.filter((todo)=>todo.id!==id),
    })),

    on(loadTodos,(state)=>({
        ...state,
        status:'loading'
    })),

    on(LoadToDoSuccess,(state,{todos})=>({
        ...state,
        todos,
        error:'null',
        status:'success'
    })),

    on(LoadToDoFailure,(state, {error})=>({
        ...state,
        error:error,
        status:'error'
    }))

);


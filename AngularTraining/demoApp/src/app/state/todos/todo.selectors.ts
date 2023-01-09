import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.state";



export const todosDataState= createFeatureSelector<TodoState>('todos');

export const selectAllTodos:any= createSelector(
    todosDataState,
    (state)=>state.todos
)
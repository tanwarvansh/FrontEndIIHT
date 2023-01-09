import { createAction, props } from "@ngrx/store";
import { Todo } from "src/todo/todo.model";


export const addTodo = createAction(
    `[Todo Page] Add Todo`,
    props<{content:string}>()

);

export const removeTodo=createAction(
    `[Todo Page] Remove Todo`,
    props<{id:string}>()
);


export const loadTodos= createAction(
    `[Todo Page] Load Todos`
);


export const LoadToDoSuccess= createAction(`[Todo API] Todo Load Success`,props<{todos:Todo[]}>());
export const LoadToDoFailure= createAction(`[Todo API] Todo Load Failure`,props<{error:any}>());
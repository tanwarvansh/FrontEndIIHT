import { Todo } from "src/todo/todo.model";
import * as AppState from "../app.state";

export interface State extends AppState.State{
    todos:TodoState;
}
export interface TodoState{
    todos:Todo[];
    error:string;
    status:'pending' | 'loading' |'error'|'success';
}

export const intialState: TodoState={

    todos:[],
    error:'null',
    status:'pending'

}
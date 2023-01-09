import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TodoPageComponent } from "./todo-page.component";


const routes:Route[]=[
    {path:'',component:TodoPageComponent}

]


@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TodoPageRoutingModule{

}
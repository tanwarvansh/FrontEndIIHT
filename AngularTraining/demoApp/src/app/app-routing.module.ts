import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployeeDetailsComponentComponent } from './employee/employee-details-component.component';
import { EmployeeLeaveComponent } from './employee/employee-leave.component';
import { EmployeeSuggestionsComponent } from './employee/employee-suggestions.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpoyeeListComponent } from './employee/empoyee-list.component';
import { HomeComponent } from './home-component/home-component.component';
import { ShellComponent } from './home-component/shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductAddComponent } from './Product/product-add.component';
import { ProductComponent } from './Product/product.component';
import { ProductsShellComponent } from './products/products-shell.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { AuthGuard } from './user/auth.guard.service';
import { LoginComponent } from './user/login.component';
import { AnimalListComponent } from './Animals/animal-list.component'
import { TrusteeListComponent } from './Trustee/trustee-list.component';
import { TrusteeComponent } from './Trustee/trustee/trustee.component';
import { CardListComponent } from './card-list/card-list.component';

// const routes: Routes = [
//   {path:'',component:HomeComponent,pathMatch:'full'},
//   {path:'home',component:HomeComponent},
//   {path:'about-us',component:AboutUsComponent},
//   {path:'dashboard',component:DashBoardComponent},
//   {path:'student',component:ReactiveFormExampleComponent},
//   {path:'products',component:ProductComponent,children:[
//     {path:"shell",component:ProductsShellComponent,
//   canActivate:[AuthGuard],
//   children:[{path:'addProduct',component:ProductAddComponent}]
//   }
//   ]},
//   {path:'login',component:LoginComponent},
//   {path:'emps',component:EmpoyeeListComponent,
//   children:[
//     {path:'detail/:id',component:EmployeeDetailsComponentComponent},
//     {path:'leave',component:EmployeeLeaveComponent},
//     {path:'suggestions',component:EmployeeSuggestionsComponent}
//   ]
// },
//   {path:'**',component:PageNotFoundComponent}
// ];

const routes:Routes=[
  {path:'',component:ShellComponent,children:[
    {path:'home',component:HomeComponent},

    {path:'products',component:ProductComponent,
  children:[{path:'addProduct',component:ProductAddComponent
  // ,canActivate:[AuthGuard]

}]
},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'todo',loadChildren:()=>import('../todo/todo.module').then((m)=>m.TodoModule)},
{path:'emps',component:EmpoyeeListComponent},
{path:'animal',component:AnimalListComponent},
{path:'cards',component:CardListComponent },
{path:'trustees',component:TrusteeListComponent,children:[
  {path:'addTrustee',component:TrusteeComponent}
]},
{path:'**',component:PageNotFoundComponent}

  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}

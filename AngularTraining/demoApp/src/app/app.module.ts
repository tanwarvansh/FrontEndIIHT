import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent2 } from './pent-house/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlagListComponent } from './flats/flag-list.component';
import { AnimalListComponent } from './Animals/animal-list.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './Product/product.component';
import { StarComponent } from './star/star.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventBootComponent } from './event-bootcamp/event-boot.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBServie } from './shared/dataBaseService';
import { ProductAddComponent } from './Product/product-add.component';
import { RepeatDataPipe } from './pipe/repeat.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { GetValidatorDirective } from './employee/get-validator.directive';
import { TrusteeComponent } from './Trustee/trustee/trustee.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { DatePipe } from '@angular/common';
import { EmployeeReactiveComponent } from './employee-reactive/employee-reactive.component';
import { HomeComponent } from './home-component/home-component.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpoyeeListComponent } from './employee/empoyee-list.component';
import { EmployeeDetailsComponentComponent } from './employee/employee-details-component.component';
import { EmployeeLeaveComponent } from './employee/employee-leave.component';
import { EmployeeSuggestionsComponent } from './employee/employee-suggestions.component';
import { ProductsShellComponent } from './products/products-shell.component';
import { LoginComponent } from './user/login.component';
import { MenuComponent } from './home-component/menu.component';
import { ShellComponent } from './home-component/shell.component';
import { TrusteeListComponent } from './Trustee/trustee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { CardListComponent } from './card-list/card-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { productReducer } from './state/products/product.reducer';
import { ProductEffects } from './state/products/product.effects';



@NgModule({
  declarations:[
    AppComponent,
    PentHouseComponent2,
    WelcomeComponent,
    FlagListComponent,
   AnimalListComponent,
   ProductComponent,
   StarComponent,
   ShoppingCartComponent,
      NavbarComponent,
    EventBootComponent,
    ProductAddComponent,
    RepeatDataPipe,
    EmployeeComponent,
    GetValidatorDirective,
    TrusteeComponent,
    ReactiveFormExampleComponent,
    EmployeeReactiveComponent,
    HomeComponent,
    DashBoardComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    EmpoyeeListComponent,
    EmployeeDetailsComponentComponent,
    EmployeeLeaveComponent,
    EmployeeSuggestionsComponent,
    ProductsShellComponent,
    LoginComponent,
    MenuComponent,
    ShellComponent,
    TrusteeListComponent,
    CardListComponent
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DBServie),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MaterialExampleModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(ProductEffects),
    StoreDevtoolsModule.instrument()
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

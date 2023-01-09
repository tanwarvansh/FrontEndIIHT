import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { ProductService } from 'src/app/shared/product.service';



@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }


  loadProducts$= createEffect(()=>{
    return this.actions$.pipe(
        ofType(ProductActions.loadProducts),
        mergeMap(()=>this.productService.getProduct()
        .pipe(map(products=>ProductActions.loadProductsSuccess({ products })),
        catchError(error=>of(ProductActions.loadProductsFailure({ error })))
        )
    )
    );
});




  updateProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.updateProduct),
        concatMap(action =>
          this.productService.updateProduct(action.product)
            .pipe(
              map(product => ProductActions.updateProductSuccess({ product })),
              catchError(error => of(ProductActions.updateProductFailure({ error })))
            )
        )
      );
  });




  createProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.createProduct),
        concatMap(action =>
          this.productService.createProduct(action.product)
            .pipe(
              map(product => ProductActions.createProductSuccess({ product })),
              catchError(error => of(ProductActions.createProductFailure({ error })))
            )
        )
      );
  });


  

  deleteProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap(action =>
          this.productService.deleteProduct(action.productId).pipe(
            map(() => ProductActions.deleteProductSuccess({ productId: action.productId })),
            catchError(error => of(ProductActions.deleteProductFailure({ error })))
          )
        )
      );
  });
}
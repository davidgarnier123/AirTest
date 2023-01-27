import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/shared/models/category';
import { Product } from 'src/shared/models/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent implements OnInit, OnDestroy {

  public categories: Array<Category> = [];
  public products: Array<Product> = [];

  public selectedCategory: number | null = null;

  private productsObservable: Subscription | undefined = undefined;
  private categoriesObservable: Subscription | undefined = undefined;

  constructor( private _productsService: ProductsService ) {

  }

  ngOnInit(): void {
    this.productsObservable = this._productsService.subjectProducts$.subscribe( (products: any) => {
      this.products = products;
    });
    this.categoriesObservable = this._productsService.subjectCategories$.subscribe( (categories: any) => {
      this.categories = categories;
    })

    this._productsService.getAllProducts();
    this._productsService.getAllCategories();
  }

  ngOnDestroy(): void {
    this.productsObservable?.unsubscribe();
    this.categoriesObservable?.unsubscribe();
  }

  public filterBy = (category: Category | null) => {
    this.products = this._productsService.allProducts;
    category ? this.products = this.products.filter( (product) => product.category_id === category.id) : null;
  }
}

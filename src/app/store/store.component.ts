import { trigger, style, animate, transition, state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Category } from 'src/shared/models/category';
import { Product } from 'src/shared/models/product';
import { ProductsService } from '../../shared/services/products.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less'],
  animations: [
    trigger('listState', [
      state('hidden', style({
        opacity: '0'
      })),
      state('shown', style({
        opacity: '1'
      })),
      transition('hidden => shown', animate('200ms ease-in')),
      transition('shown => hidden', animate('200ms ease-out'))
    ])
  ]
})
export class StoreComponent implements OnInit, OnDestroy {

  public categories: Array<Category> = [];
  public products: Array<Product> = [];

  public selectedCategory: Category | null = null;

  private productsObservable: Subscription | undefined = undefined;
  private categoriesObservable: Subscription | undefined = undefined;

  public filterState: 'hidden' | 'shown' = 'hidden';

  constructor(private _productsService: ProductsService, private _cartService: CartService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    // subscribe to observable, waiting to received products + categories from request API in service
    this.productsObservable = this._productsService.subjectProducts$.subscribe((products: any) => {
      this.products = products;
      setTimeout(() => {
        this.toggleFilter()
      }, 200);
    });
    this.categoriesObservable = this._productsService.subjectCategories$.subscribe((categories: any) => {
      this.categories = categories;
    })

    // initial calls to get products + categories
    this._productsService.getAllProducts();
    this._productsService.getAllCategories();
  }

  ngOnDestroy(): void {
    this.productsObservable?.unsubscribe();
    this.categoriesObservable?.unsubscribe();
  }

  /**
   * @name toggleFilter
   * @description set filterState value to trigger animation
   * @returns void
   */
  private toggleFilter = (): void =>  {
    this.filterState = this.filterState === 'shown' ? 'hidden' : 'shown';
  }

  /**
   * @function filterBy
   * @description filter products by category when user change filter
   * @param category Category | null
   * @returns void
   */
  public filterBy = (category: Category | null): void => {
    this.toggleFilter();
    this.products = this._productsService.allProducts;
    category ? (this.products = this.products.filter((product) => product.category_id === category.index.toString()), this.selectedCategory = category) : this.selectedCategory = null;
    setTimeout(() => {
      this.toggleFilter();      
    }, 200);

  }

  /**
   * @function addCart
   * @description add product to cart, open modal success
   * @param product Product
   * @returns void
   */
  public addCart = (product: Product): void => {
    this._cartService.addProduct(product);
    this._snackBar.open('Ajouté au panier', '', {
      duration: 3000,
      panelClass: ['customSnackBar', 'success']
    });
  }
}

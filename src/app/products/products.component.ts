import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  categories: any= [];
  selectedCategory: string | null = null;
  filteredProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.http
      .get('https://fakestoreapi.com/products/categories')
      .subscribe((data: any) => {
        this.categories = data;
      });
  }

  filterByCategory(event : any): void {
    const category = event.target?.value;
    this.selectedCategory = category;
    if (category) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}

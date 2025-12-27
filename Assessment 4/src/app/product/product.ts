import { Component } from '@angular/core';
import { Apiservices } from '../apiservices';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product: any[] = [];

  constructor(private apiservices: Apiservices) {}               //to call apiservies in constructor
  ngOnInit() {
    this.apiservices.getproduct().subscribe((data: any) => {        //this is for insitialising
      this.product = data;

    });
  
}
}

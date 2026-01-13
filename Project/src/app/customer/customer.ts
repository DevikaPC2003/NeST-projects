import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apiservices } from '../apiservices';


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customer: any[] = [];

  constructor(private apiservices: Apiservices) {}               //to call apiservies in constructor
  ngOnInit() {
    this.apiservices.getlist().subscribe((data: any) => {        //this is for insitialising
      this.customer = data;

    });
  
}
}

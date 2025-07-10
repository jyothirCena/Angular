import { Component } from '@angular/core';
import { CustomerResponse } from '../model/customer-response';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
deleteCustomer() {
throw new Error('Method not implemented.');
}
editCustomer() {
throw new Error('Method not implemented.');
}

  constructor(private service: CustomerService){ }

  customer: CustomerResponse = new CustomerResponse();

  ngOnInit(): void {
    const customerId = Number(localStorage.getItem('customerId'));
    this.getCustomer(customerId);
  }
  
  getCustomer(customerId: number){
    this.service.getCustomerById(customerId).subscribe(data => {
      this.customer = data;

    });
  }

}

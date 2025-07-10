import { Component } from '@angular/core';
import { CustomerRequest } from '../model/customer-request';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { CustomerResponse } from '../model/customer-response';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent{

  customerRequest: CustomerRequest = new CustomerRequest();
  customerResponse: CustomerResponse = new CustomerResponse();
  isEdit = false;
  customerId: number;
  
  constructor(private service: CustomerService, private route: ActivatedRoute, private fb: FormBuilder){
    this.customerId = Number(localStorage.getItem('customerId'));
    if (this.customerId) {
      this.isEdit = true;
      this.customerId
      this.service.getCustomerById(this.customerId).subscribe( customer => {
        console.log(customer);
      });
    }
  }

  onSubmit() {
    if (this.isEdit) {
      console.log(this.customerRequest);
      this.updateCustomer()
    }else{
      this.saveCustomer();
    }
  }

  saveCustomer() {
    this.service.createCustomer(this.customerRequest).subscribe(data => {
      this.customerResponse = data; 
    });
  }

  updateCustomer() {
    this.service.updateCustomer(this.customerId,this.customerRequest).subscribe( customer => {
      console.log(customer);
    });
  }
}

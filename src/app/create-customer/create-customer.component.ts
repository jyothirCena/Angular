import { Component } from '@angular/core';
import { CustomerRequest } from '../customer-request';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { CustomerResponse } from '../customer-response';

@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent{

  customerRequest: CustomerRequest = new CustomerRequest();
  customerResponse: CustomerResponse = new CustomerResponse();
  
  constructor(private service: CustomerService){ }

  onSubmit() {
    console.log(this.customerRequest);
    this.saveCustomer();
  }

  saveCustomer() {
    this.service.createCustomer(this.customerRequest).subscribe(data => {
      this.customerResponse = data; 
    
    }, error => console.error(Error));
  }
}

import { Component } from '@angular/core';
import { Login } from '../login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerResponse } from '../customer-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData: Login = new Login();
  customerResponse: CustomerResponse = new CustomerResponse();
  
  constructor(private router: Router, private service: CustomerService){ }
  
  redirect() {
    this.router.navigate(['/register'])
  }

  validate() {
    this.service.validateLogin(this.loginData).subscribe(data => {
      this.customerResponse = data; 
      console.log(this.customerResponse);
      if (data!=null) {
        this.router.navigate(['/home'])
      }
    }, (error: any) => console.error(error));
  }

}

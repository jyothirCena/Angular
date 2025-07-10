import { Component, OnInit } from '@angular/core';
import { ServiceList } from '../model/service-list';
import { BookingService } from '../service/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  email: string = "jyothir@gmail.com"

  services: ServiceList[] = [];

  constructor(private service: BookingService){ }
  ngOnInit(): void {
    const customerId = Number(localStorage.getItem('customerId'));
    this.getServices(customerId);
  }

  getServices(customerId: number){
    return this.service.getServicesByCustomer(customerId).subscribe(data => {
        this.services = data;
    })
  }

}

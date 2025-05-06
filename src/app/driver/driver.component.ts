import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../service/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  driver = {
    fullName: '',
    licenseNumber: '',
    licenseCategory: '',
    contactPhone: '',
    incidentHistory: ''
  };
   constructor(private apiService: ApiService,private http:HttpClient,private router:Router) {}

  onSubmit() {
    this.apiService.addDriver(this.driver).subscribe({
      next: (response) => {
        alert('Kierowca został pomyślnie dodany!');
        this.router.navigate(['/drivers']); // Przekierowanie na stronę z listą kierowców
      },
      error: (err) => {
        alert('Wystąpił błąd podczas dodawania kierowcy!');
      }
    });
  }
}

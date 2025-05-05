import { HttpClient } from '@angular/common/http';
import { ApiService } from './../service/api-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';
  message = '';
  error = '';
  constructor(private apiService: ApiService,private http:HttpClient) {}

  onSubmit() {
    // this.apiServiceService.login(this.username, this.password).subscribe({
    //   next: () => this.message = 'Zalogowano pomyślnie!',
    //   error: (err) => this.message = 'Błąd logowania: ' + err.status,
    // });

    this.apiService.login(this.username, this.password).subscribe({
      next: (res:any) => {
        this.message = res.message;
        this.apiService.saveToken(res.token);
        //this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = 'Nieprawidłowy login lub hasło';
      },
    });
  }

  driver(){
     this.apiService.drivers().subscribe( data => {console.log(data)})
  }

}

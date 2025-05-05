import { Component } from '@angular/core';
import { ApiService } from '../service/api-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username = '';
  password = '';
  message = '';

  constructor(private api: ApiService) {}

  onSubmit() {
    this.api.login(this.username, this.password).subscribe({
      next: () => this.message = 'Zalogowano pomyślnie!',
      error: (err) => this.message = 'Błąd logowania: ' + err.status,
    });
  }
}

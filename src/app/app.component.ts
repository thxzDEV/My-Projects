import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  userName = 'Thales';
  
  userData = {
    email: 'thalesmarconsini188@gmail.com',
    role: 'admin',
  }

  title = 'projeto-angular';
}

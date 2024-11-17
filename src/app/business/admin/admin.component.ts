import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavAdminComponent} from './shared/nav-admin/nav-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NavAdminComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}

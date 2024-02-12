import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-new-clients',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './new-clients.component.html',
  styleUrl: './new-clients.component.css'
})
export class NewClientsComponent {

}

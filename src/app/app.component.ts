import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NzIconModule, NzLayoutModule, NzMenuModule, NzTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  tabName = '';
  currentPath: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.currentPath = window.location.href.split('/');
    // this.currentPath = this.currentPath.at(-1)
    // console.log(this.currentPath);

    // if (this.currentPath === 'clients') {
    //   this.tabName = 'Clients';
    // } else {
    //   this.tabName = 'Dashboard';
    // }
  }
}

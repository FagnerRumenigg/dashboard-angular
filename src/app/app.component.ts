import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NzIconModule, NzLayoutModule, NzMenuModule, NzTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  activePath = '';
  activeRoute = '';
  tabNameOne = '';
  tabNameTwo = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let route = this.activatedRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      route.url.subscribe(segments => {
        let string = segments.join('/').split('/')
        this.activePath = string.at(-1) || '';
        
        if (this.activePath === 'clients') {
          this.tabNameOne = 'Clientes'
          this.activeRoute = 'Clientes'
        } else if (this.activePath === 'new') {
          this.tabNameTwo = 'Novo cliente'
          this.activeRoute = 'Novo cliente'
        } else {
          this.tabNameOne = 'Dashboard'
          this.activeRoute = 'Dashboard'
        }
      });
    });

  }

  navigateTo(route: String, activeRoute: String) {
    let fullRoute = route;
    
    if (activeRoute === 'Clientes') {
      fullRoute += '/clients';
    } else if (activeRoute === 'Novo cliente') {
      fullRoute += '/new';
    }
    
    this.router.navigate([fullRoute]);
  }

  closeTabAndNavigateTo(tab: String, routeName: String, activeRoute: String) {
    if (tab === '2') {
      this.tabNameTwo = ''
      
      return this.navigateTo(routeName, activeRoute)
    }


    this.tabNameOne = ''
      
    return this.navigateTo(routeName, activeRoute)
  }
}

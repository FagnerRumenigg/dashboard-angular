import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/#', title: 'Tickets', icon: "confirmation_number", class: ''},
    { path: '/clientes', title: 'Clientes', icon: "group", class: ''},
    { path: '/#', title: 'Recursos',  icon:'devices', class: '' },
    { path: '/#', title: 'Contratos',  icon:'article', class: '' },
    { path: '/#', title: 'Relatórios',  icon:'analytics', class: '' },
    { path: '/#', title: 'Agenda',  icon:'event_note', class: '' },
    { path: '/#', title: 'Conhecimentos',  icon:'library_books', class: '' },
    { path: '/#', title: 'Cofre de senhas',  icon:'lock', class: '' },
    { path: '/#', title: 'Configurações',  icon:'settings', class: '' },
    { path: '/clienteNovo', title: 'Cliente Novo', icon:'person', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

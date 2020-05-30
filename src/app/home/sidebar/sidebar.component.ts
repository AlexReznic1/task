import {Component, OnInit} from '@angular/core';
import {RouteModel} from "../../core/models/route.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes: RouteModel[];

  constructor() {
    this.routes = [
      {title: 'Campaigns', icon: 'fas fa-tachometer-alt', route: '/campaigns'},
      {title: 'Tariffs', icon: 'fas fa-tag', route: '/tariffs'},
      {
        title: 'Admin Users',
        icon: 'fas fa-portrait',
        route: '/admin',
        dataToggle: 'collapse',
        id: 'collapseExample1',
        ariaControls: 'collapseExample1',
        icon2: 'fas fa-angle-down',
        ariaExpended: false
      },
      {
        title: 'Suppliers',
        icon: 'fas fa-user',
        route: '/suppliers',
        dataToggle: 'collapse',
        id: 'collapseExample2',
        ariaControls: 'collapseExample2',
        icon2: 'fas fa-angle-down',
        ariaExpended: false
      },
      {
        title: 'Data hub',
        icon: 'fas fa-chart-line',
        route: '/data',
        dataToggle: 'collapse',
        id: 'collapseExample3',
        ariaControls: 'collapseExample3',
        icon2: 'fas fa-angle-down',
        ariaExpended: false

      },
      {
        title: 'Costs & Taxes',
        icon: 'fas fa-book',
        route: '/costs',
        dataToggle: 'collapse',
        id: 'collapseExample4',
        ariaControls: 'collapseExample4',
        icon2: 'fas fa-angle-down',
        ariaExpended: false

      },
      {title: 'Reports', icon: 'far fa-chart-bar', route: '/reports'},
      {title: 'Settings', icon: 'fas fa-cog', route: '/settings'}
    ];
  }

  ngOnInit() {
  }


}

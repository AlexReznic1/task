import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TableModel} from "../../core/models/table.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public table: TableModel[];

  constructor(private router: Router) {
    this.onParseTitle();
    this.table = [
      {
        branch: 'Electrable',
        type: 'Gas',
        status: true,
        name: 'Summer deal Elec',
        start: '14/02/2020',
        end: '21/05/2020',
        target: 2000,
        result: 0,
        budget: 300000,
        spend: 0,
        unit: '--',
        checked: false
      },
      {
        branch: 'Electrable',
        type: 'Electricity',
        status: false,
        name: 'Summer deal Elec',
        start: '14/02/2020',
        end: '21/05/2020',
        target: 2000,
        result: 0,
        budget: 300000,
        spend: 50,
        unit: '--',
        checked: true
      },
      {
        branch: 'Electrable',
        type: 'Electricity',
        status: true,
        name: 'Summer deal Elec',
        start: '14/02/2020',
        end: '21/05/2020',
        target: 2000,
        result: 60,
        budget: 300000,
        spend: 100,
        unit: '--',
        checked: false
      }, {
        branch: 'Electrable',
        type: 'Electricity',
        status: false,
        name: 'Summer deal Elec',
        start: '14/02/2020',
        end: '21/05/2020',
        target: 2000,
        result: 35,
        budget: 300000,
        spend: 20,
        unit: '80',
        checked: false
      }, {
        branch: 'Electrable',
        type: 'Electricity',
        status: true,
        name: 'Summer deal Elec',
        start: '14/02/2020',
        end: '21/05/2020',
        target: 2000,
        result: 75,
        budget: 300000,
        spend: 100,
        unit: '--',
        checked: false
      }, {
        branch: 'Electrable',
        type: 'Electricity',
        status: false,
        name: 'Summer deal Elec',
        start: '14/02/2020',
        end: '21/05/2020',
        target: 2000,
        result: 25,
        budget: 300000,
        spend: 50,
        unit: '--',
        checked: false
      }
    ];
  }

  ngOnInit() {
  }

  public onParseTitle(): string {
    let title = this.router.url.substr(1);
    switch (title) {
      case 'admin':
        title = 'admin users';
        break;
      case 'data':
        title = 'data Hub';
        break;
      case 'costs':
        title = 'costs & taxes';
        break;
    }
    return title;
  }

  public onParsePlaceholder(): string {
    let title = this.onParseTitle();
    switch (title) {
      case 'data Hub':
        title = 'data hubs';
        break;
    }
    return title.substr(0, title.length - 1);
  }

}

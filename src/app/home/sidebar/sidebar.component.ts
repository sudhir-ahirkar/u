import { Component, Output, EventEmitter } from '@angular/core';
import { SessionsService } from 'src/app/features/sessions/sessions.service';


interface IMenuItem {
  featureId: number;
  name?: string;
  state?: string;
  icon?: string;
  submenu?: IMenuItem[];
}

const primaryDefaultMenu: IMenuItem[] = [
  {
    name: 'Worker Information',
    featureId: 1,
    icon: 'insert_chart_outlined',
    state: 'worker-information'
  },
  {
    name: 'Stt Information',
    featureId: 2,
    icon: 'insert_chart_outlined',
    state: 'stt-information'
  }
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  primaryMenu: IMenuItem[] = [];
  constructor(
    private readonly sessionsService: SessionsService
  ) { 
    this.filterMenus(primaryDefaultMenu, this.primaryMenu);
  }

  private filterMenus(source, filtered) {

    source.forEach(element => {
      const arg = [];
      arg.push(element.featureId);
        filtered.push(element);
    });

  }
}


import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { JoursFService } from '../../../@core/mock/jours-f.service';
import { SmarttabledatepickerComponent, SmartTableDatepickerRenderComponent } from '../smarttabledatepicker/smarttabledatepicker.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@Component({
  selector: 'ngx-jours-f',
  templateUrl: './jours-f.component.html',
  styleUrls: ['./jours-f.component.scss']
})
export class JoursFComponent implements OnInit {

  
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      Date: {
        title: 'Date',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmarttabledatepickerComponent,
        }
        },
      Description: {
        title: 'Description',
        type: 'string',
        
      },
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JoursFService) {
    const data = this.service.getDataJF();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Voulez-vous vraiment supprimer ?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
  }

}

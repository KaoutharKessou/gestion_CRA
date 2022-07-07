import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { JoursFComponent } from './jours-f/jours-f.component';
import { SmarttabledatepickerComponent} from './smarttabledatepicker/smarttabledatepicker.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {  MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [
        NbCardModule,
        NbTreeGridModule,
        NbIconModule,
        NbInputModule,
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatButtonModule,
        MatMenuModule ,
    ],
    declarations: [
        ...routedComponents,
        FsIconComponent,
        JoursFComponent,
    ]
})
export class TablesModule { }

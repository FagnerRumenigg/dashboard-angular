import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ClientesComponent } from 'app/components/clientes/clientes.component';
import { TicketsComponent } from 'app/components/tickets/tickets.component';
import { RecursosComponent } from 'app/components/recursos/recursos.component';
import { ContratosComponent } from 'app/components/contratos/contratos.component';
import { AgendaComponent } from 'app/components/agenda/agenda.component';
import { ConhecimentoComponent } from 'app/components/conhecimento/conhecimento.component';
import { ConfiguracaoComponent } from '../../components/configuracao/configuracao.component';
import { CofreComponent } from 'app/components/cofre/cofre.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClientesComponent,
    TicketsComponent,
    RecursosComponent,
    ContratosComponent,
    AgendaComponent,
    ConhecimentoComponent,
    CofreComponent,
    ConfiguracaoComponent
  ]
})

export class AdminLayoutModule {}

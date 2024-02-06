import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientesComponent } from 'app/components/clientes/clientes.component';
import { TicketsComponent } from 'app/components/tickets/tickets.component';
import { RecursosComponent } from 'app/components/recursos/recursos.component';
import { ContratosComponent } from 'app/components/contratos/contratos.component';
import { RelatoriosComponent } from 'app/components/relatorios/relatorios.component';
import { AgendaComponent } from 'app/components/agenda/agenda.component';
import { ConhecimentoComponent } from 'app/components/conhecimento/conhecimento.component';
import { CofreComponent } from 'app/components/cofre/cofre.component';
import { ConfiguracaoComponent } from 'app/components/configuracao/configuracao.component';
import { ClienteNovoComponent } from 'app/components/clientes/clienteNovo/clienteNovo.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'clientes',       component: ClientesComponent },
    { path: 'tickets',        component: TicketsComponent },
    { path: 'recursos',       component: RecursosComponent },
    { path: 'contratos',      component: ContratosComponent },
    { path: 'relatorios',     component: RelatoriosComponent },
    { path: 'agenda',         component: AgendaComponent },
    { path: 'conhecimentos',  component: ConhecimentoComponent },
    { path: 'cofre',          component: CofreComponent },
    { path: 'configuracoes',  component: ConfiguracaoComponent },
    { path: 'clienteNovo',    component:ClienteNovoComponent }

];

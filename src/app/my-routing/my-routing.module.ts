import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServerComponent} from '../servers/server/server.component';
import {EditServerComponent} from '../servers/edit-server/edit-server.component';
import {ServersComponent} from '../servers/servers.component';
import {PageNotFoundComponent} from '../error/page-not-found/page-not-found.component';
import {UserComponent} from '../users/user/user.component';
import {UsersComponent} from '../users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AuthGuardService} from '../auth-guard.service';
import {CanDeactiveGuardService} from '../servers/edit-server/can-deactive-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  {
    path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactiveGuardService]}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MyRoutingModule {
}

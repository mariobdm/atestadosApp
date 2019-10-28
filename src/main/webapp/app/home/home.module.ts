import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AtestadosAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AtestadosAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class AtestadosAppHomeModule {}

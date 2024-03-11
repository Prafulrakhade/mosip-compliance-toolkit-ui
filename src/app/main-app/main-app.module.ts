import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MainAppComponent } from './main-app.component';
import { MainAppRoutingModule } from './main-app-routing.module';

@NgModule({
  declarations: [MainAppComponent],
  imports: [
    MainAppRoutingModule,
    CoreModule,
  ],
  bootstrap: [MainAppComponent],
})
export class MainAppModule { }

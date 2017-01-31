import { NgModule } from '@angular/core';


import { SharedModule } from './shared/shared.module';

import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DankserviceService } from './dankservice.service';
import { NewCmpOneComponent } from './new-cmp-one/new-cmp-one.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './dank-custom-pipe';


@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpOneComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'new-cmp',
        component: NewCmpOneComponent
      }
    ])
  ],
  providers: [DankserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

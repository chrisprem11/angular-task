import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule} from '@angular/forms';

import { StompConfig, StompService } from '@stomp/ng2-stompjs';
import { stompConfig } from './my-rx-stomp.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, FormsModule
  ],
  providers: [
     StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

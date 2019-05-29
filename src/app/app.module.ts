import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DialogflowService } from './services/dialogflow.service';

import { MessageFormComponent } from './message-form/message-form.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageListComponent } from './message-list/message-list.component';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, MessageFormComponent, MessageItemComponent, MessageListComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

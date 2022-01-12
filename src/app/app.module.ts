import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';
import { MsgComponent } from './components/msg/msg.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatRoomComponent,
    ChatFeedComponent,
    MsgComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

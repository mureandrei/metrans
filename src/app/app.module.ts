import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostsViewModule } from './posts-view/posts-view.module';
import { SharedModule } from './shared/shared.module';
import { UsersViewModule } from './users-view/users-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UsersViewModule,
    PostsViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './ui/layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent
	
	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	PagesModule,
	
	
	
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

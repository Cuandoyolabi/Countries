import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


//Componentes
import { AppComponent } from './app.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

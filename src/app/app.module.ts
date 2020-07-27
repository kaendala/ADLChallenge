import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Sections/home/home.component';
import { ProductosModule } from './Sections/productos/productos.module';
import { ProductosService } from './Sections/productos/productos.service';
import { LoginBarComponent } from './Sections/login-bar/login-bar.component';
import { NavBarComponent } from './Sections/nav-bar/nav-bar.component';
import { FooterComponent } from './Sections/footer/footer.component';
import { CarrouselComponent } from './shared/carrousel/carrousel.component';
import { ButtonToggleComponent } from './shared/button-toggle/button-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginBarComponent,
    NavBarComponent,
    FooterComponent,
    CarrouselComponent,
    ButtonToggleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ProductosModule,
    app_routing
  ],
  providers: [
    HttpClient,
    ProductosService,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

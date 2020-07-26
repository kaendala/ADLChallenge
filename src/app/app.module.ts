import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {ProductosService} from './productos/productos.service';
import {ProductosModule} from './productos/productos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ProductosModule
  ],
  providers: [
    HttpClient,
    ProductosService,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

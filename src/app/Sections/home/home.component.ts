import { Component, OnInit, NgModule } from '@angular/core';
import { ProductosModule } from '../productos/productos.module';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: ProductosModule;
  showAll: boolean=false;
  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.getJSON().then((res:ProductosModule)=>{
    console.log("init")
    this.productos=res.product;
    })
  }
}

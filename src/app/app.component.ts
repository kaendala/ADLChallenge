import { Component } from '@angular/core';
import { ProductosModule } from './productos/productos.module';
import { ProductosService } from './productos/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeTransaccional';
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

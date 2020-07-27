import { Component, OnInit, NgModule } from '@angular/core';
import { ProductosModule } from '../productos/productos.module';
import { ProductosService } from '../productos/productos.service';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: Array<ProductosModule>;
  cuentasAHO: Array<ProductosModule>=[];
  cuentasCTE: Array<ProductosModule>=[];
  CDT: Array<ProductosModule>=[];
  Credit: Array<ProductosModule>=[];
  Tc: Array<ProductosModule>=[];
  showAll: boolean= false;
  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.getJSON().then((res:any)=>{
    this.productos=res.product;
    this.separar();
    })
  }
  separar(){
    this.productos.forEach(function(element){
      switch(element.accountInformation.productType){
        case 'DEPOSIT_ACCOUNT':
        this.cuentasAHO.push(element);
        break
        case 'CURRENT_ACCOUNT':
          this.cuentasCTE.push(element);
        break
        case 'CERTIFIED_DEPOSIT_TERM':
          this.CDT.push(element);
        break
        case 'CREDIT':
          this.Credit.push(element);
        break
        case 'CREDIT_CARD':
          this.Tc.push(element);
        break
      }
    },this)
  }

  procesaPropagar(e){
    this.showAll= !this.showAll;
  }
}

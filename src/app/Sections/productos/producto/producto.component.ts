import { Component, OnInit, Input } from '@angular/core';
import { ProductosModule } from '../productos.module';
import { Constants as Cons } from '../../../util/constants';
import { Entry } from '../../../models/entry';
import { element } from 'protractor';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})

export class ProductoComponent implements OnInit {
  selItems: any;
  @Input() producto: ProductosModule;
  @Input() mostrar: boolean;
  @Input() isTc: boolean;
  titleSaldo: string;
  saldo: number;
  pagar: boolean;
  abrirpopup: boolean;
  constructor() {
   }

  ngOnInit(): void {
    this.getValores();
    this.initTc();
    
  }
  private getElement(){
    var element=Cons.PRODUCT_LIST.find(element => 
      element.key == this.producto.accountInformation.productType)
    return element
  }
  public getLabel(){
    return this.getElement().label;
  }
  public geticon(){
    return this.getElement().icon;
  }
  private getValores(){
    if(this.producto.productAccountBalances ){
      if(this.producto.productAccountBalances.saldo_disponible){
      this.titleSaldo= 'Saldo disponible';
      this.saldo=this.producto.productAccountBalances.saldo_disponible.amount;
     }else if(this.producto.productAccountBalances.valor_constitucion){
      this.titleSaldo= 'Valor invertido';
      this.saldo=this.producto.productAccountBalances.valor_constitucion.amount;
      }
      else if(this.producto.productAccountBalances.cupo_total){
        this.titleSaldo= 'Cupo Disponible';
        this.saldo=this.producto.productAccountBalances.cupo_total.amount;
        }
    }
  }
  private initTc(){
    if(this.isTc){
      if(this.producto.dueDate){
        this.pagar=true;
      }else{
        this.pagar=false;
      }

    }

  }
  abrirPopup(){
    this.abrirpopup=true;
  }
  cerrarPopup(){
    this.abrirpopup=false;
  }
}

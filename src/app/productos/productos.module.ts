import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    CardComponent,
    ProductoComponent,
  ],
  exports: [
    CardComponent,
    ProductoComponent
  ]
})
export class ProductosModule { 
  accountInformation: AccountInformation;
  locked: string;
  id: string;
  typeAccount: string;
  openedDate: string;
  closedDate: string;
  dueDate: string;
  lastTransactionDate: string;
  term:Terms;
  periodicityOfPayment: Terms;
  productAccountBalances: ProductAccountBalances;
}
export class AccountInformation { 
  accountIdentifier: string;
  productType: string;
  bank: string;
}
export class Terms { 
  count: number;
  units: string;
}
export class ProductAccountBalances { 
  saldo_pendiente_pago: Balances;
  tasa_nominal: Balances;
  interes_pagado: Balances;
  valor_constitucion: Balances;
  intereses_causados: Balances;
  retefuente: Balances;

}
export class Balances { 
  amount: number;
  rate: number;
}

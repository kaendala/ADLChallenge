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
  icono: string;
  icono2: string;
  nombreCuenta: string;
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
  saldo_canje: Balances;
  saldo_disponible: Balances;
  saldo_canje_48_horas: Balances;
  saldo_canje_72_horas: Balances;
  saldo_canje_24_horas: Balances;
  saldo_ayer: Balances;
  saldo_actual: Balances;
  pago_total_pesos: Balances;
  cupo_disponible_avances_pesos: Balances;
  cupo_disponible_compras_pesos: Balances;
  saldo_mora_pesos: Balances;
  valor_pago_minimo: Balances;
  cupo_total: Balances;
  term: Balances;


}
export class Balances { 
  amount: number;
  rate: number;
}

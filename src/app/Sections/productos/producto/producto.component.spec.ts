import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { ProductosService } from '../productos.service';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosModule, AccountInformation, ProductAccountBalances, Balances } from '../productos.module';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let component1: ProductoComponent;
  let component2: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;
  let fixture1: ComponentFixture<ProductoComponent>;
  let fixture2: ComponentFixture<ProductoComponent>;
  let producto: ProductosModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoComponent ],
      providers:[ ProductosService,HttpClient],
      imports: [
        HttpClientModule
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    fixture1 = TestBed.createComponent(ProductoComponent);
    fixture2 = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    component1 = fixture1.componentInstance;
    component2 = fixture2.componentInstance;
    component.producto= new ProductosModule;
    component1.producto= new ProductosModule;
    component2.producto= new ProductosModule;
    component.producto.productAccountBalances= new ProductAccountBalances;
    component1.producto.productAccountBalances= new ProductAccountBalances;
    component2.producto.productAccountBalances= new ProductAccountBalances;
    component.producto.accountInformation= new AccountInformation;
    component1.producto.accountInformation= new AccountInformation;
    component2.producto.accountInformation= new AccountInformation;
    component.producto.productAccountBalances.saldo_disponible= new Balances;
    component1.producto.productAccountBalances.valor_constitucion= new Balances;
    component2.producto.productAccountBalances.cupo_total= new Balances;
    component2.isTc=true;
    component1.isTc=true;
    component.producto.accountInformation.productType='CREDIT'
    component2.producto.dueDate="dasdsdsd"
    component1.producto.dueDate=null
    fixture.detectChanges();
    fixture1.detectChanges();
    fixture2.detectChanges();
  });

  it('should create', () => { 
        expect(component).toBeTruthy();
  });
  it('should saldo', () => {
    component.producto.productAccountBalances.saldo_disponible.amount=10000 
    expect(component).toBeTruthy();
});
it('should calor cons', () => {
  component1.producto.productAccountBalances.valor_constitucion.amount=10000 
  expect(component1).toBeTruthy();
});
it('should calor cupo', () => {
  component2.producto.productAccountBalances.cupo_total.amount=10000 
  expect(component2).toBeTruthy();
});
it('should calor tc', () => {
  component2.producto.productAccountBalances.cupo_total.amount=10000 
  expect(component2).toBeTruthy();
});
it('should calor tc2', () => {
  component2.producto.dueDate="10000" 
  expect(component2).toBeTruthy();
});
it('should create', () => {
  component.producto.productAccountBalances.saldo_disponible=null;
  component.producto.productAccountBalances.valor_constitucion=null;
  component.producto.productAccountBalances.cupo_total.amount=10000 
  expect(component).toBeTruthy();
});
  it('should getLabel', () => {
    component.getLabel()
        expect(component.getLabel()).toBeTruthy();
  });
  it('should getIcon', () => {
    component.geticon()
        expect(component.geticon()).toBeTruthy();
  });
  it('should abrir popup', () => {
    component.abrirPopup()
    component.isTc=true;
    component.producto.dueDate="1222112"
        expect(component.abrirPopup()).toBeUndefined();
  });
  it('should abrir cerrarPopup', () => {
    component.cerrarPopup()
        expect(component.cerrarPopup()).toBeUndefined();
  })
  
});

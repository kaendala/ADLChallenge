import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getIcon visa', () => {
    component.numero="4413123123123"
    component.getIcon();
    expect(component.icon2).toEqual('icon-visa')
  });
  it('getIcon master', () => {
    component.numero="5413123123123"
    component.getIcon();
    expect(component.icon2).toEqual('icon-master')
  });
  it('initialTc', () => {
    component.isTc=true;
    component.numero="513123123123"
    component.initialTc();
    expect(component.numero).toEqual('**** **** 3123 ')
  });
});

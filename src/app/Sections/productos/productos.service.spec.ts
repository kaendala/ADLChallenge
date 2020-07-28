import { TestBed, async, inject } from '@angular/core/testing';

import { ProductosService } from './productos.service';
import { HttpClient } from '@angular/common/http';
import { ProductosModule } from './productos.module';
import { app_routing } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

describe('ProductosService', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
         ProductosService,
         ProductosModule,
         { provide: [ProductosService] },
         
        ],         
      imports: [
        HttpClient,
      ]
    })
    .compileComponents();
  }));

  it('should be created', inject([ProductosService], (service: ProductosService) => {
    expect(service).toBeTruthy();
  }));
});


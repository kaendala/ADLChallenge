import { Component, OnInit, Input } from '@angular/core';
import { ProductosModule } from '../productos.module';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() producto: ProductosModule [];
  @Input() mostrar: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}

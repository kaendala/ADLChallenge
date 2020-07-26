import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() tipo: string;
  @Input() saldo: string;
  @Input() numero: string;
  @Input() pagar: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

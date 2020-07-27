import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() tipo: string;
  @Input() saldo: string;
  @Input() titleSaldo: string;
  @Input() numero: string;
  @Input() pagar: boolean;
  @Input() icon: string;
  @Input() isTc: boolean;
  icon2: string;
  constructor() { }

  ngOnInit(): void {
    this.initialTc()
  }
  getIcon(){
    if(this.numero.startsWith("4")){
      this.icon2= 'icon-visa'
    }else if(this.numero.startsWith("5")){
      this.icon2= 'icon-master'
    }
  }
  initialTc(){
    if(this.isTc){
    this.getIcon();
    this.numero=this.numero.replace(/(.{4})/g, '$1 ').replace(/\d{4}(?= \d{4})/g, "****");
    }
  }
}

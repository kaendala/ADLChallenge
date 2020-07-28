import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserverService } from '../app/services/breakpoint-observer.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeTransaccional';
  public size$: Observable<string>;

  constructor(private _breakpointObserverService: BreakpointObserverService) {
    this.size$ = this._breakpointObserverService.size$;
  }
}

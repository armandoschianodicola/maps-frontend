import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  send(): void {
    console.log('send')
  }

  onSelectEvent(e: any): void {
    console.log('onSelectEvent', e)
  }

}

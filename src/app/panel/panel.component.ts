import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  isVisible =false;

  @HostListener('window:scroll', ['$event'])
  scroll(event:Event){
    this.isVisible=(event.target as Document).documentElement.scrollTop > 0;
  }
}


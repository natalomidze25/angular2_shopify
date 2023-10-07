import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() color:string="";
  @ViewChild('div') divElement: ElementRef ;

  ngOnInit(): void {
    if(this.color=="white"){
      this.divElement?.nativeElement.classList.add("color");
    }
    else{
      this.divElement?.nativeElement.classList.remove("color");
    }
  }

}


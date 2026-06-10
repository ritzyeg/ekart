import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  @Input() data:any
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {
  @Input() image: string = '';
  @Input() testimonial: string = '';
  @Input() username: string = '';
  @Input() accountName: string = '';
  @Input() date: string = '';
  @Input() verified: boolean = false;
}

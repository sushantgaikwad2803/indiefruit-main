import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-one-value',
  standalone: true,
  imports: [],
  templateUrl: './one-value.component.html',
  styleUrl: './one-value.component.scss'
})
export class OneValueComponent {
  @Input('title') title!: string;
  @Input('content') content!: string;

  readMoreLessText = 'Read More...';

  constructor(private el: ElementRef){}

  toggleEllipse(): void {
    let content = this.el.nativeElement.querySelector('.content');
    if (content.offsetHeight < content.scrollHeight ||
      content.offsetWidth < content.scrollWidth) {
      content.classList.remove('read-more');
      this.readMoreLessText = 'Read Less...';
    } else {
      content.classList.add('read-more');
      this.readMoreLessText = 'Read Less...';
    }
  }
}

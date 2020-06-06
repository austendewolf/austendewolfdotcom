import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title;
  @Input() url;
  @Input() description;
  @Input() onClick;

  constructor() { }

  ngOnInit() {
  }

  public handleClickCard(e: any, route: string): Promise<boolean> {
    return this.onClick(e);
  }
}

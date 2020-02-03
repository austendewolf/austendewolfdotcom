import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalContext} from '../modal-context';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {

  @Input() context: ModalContext;
  @Input() icon: string;
  @Input() iconColor = 'success';
  @Input() title: string;
  @Output() dismissButtonClick = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
  }

  public handleClick(event: MouseEvent): void {
    if (this.context) {
      this.context.dismiss();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {ModalContext} from '../modal/modal-context';

@Component({
  selector: 'app-navigation-modal',
  templateUrl: './navigation-modal.component.html',
  styleUrls: ['./navigation-modal.component.scss']
})
export class NavigationModalComponent implements OnInit {

  public context: ModalContext;

  constructor() { }

  ngOnInit() {
  }

  public handleClickNavigationItem() {
    this.context.dismiss();
  }
}

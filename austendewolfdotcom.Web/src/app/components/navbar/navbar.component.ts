import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal/modal.service';
import {ModalContext} from '../modal/modal-context';
import {NavigationModalComponent} from '../navigation-modal/navigation-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  public openNavigationModal() {
    this.modalService.create<ModalContext>(
        NavigationModalComponent,
        {
          params: {
            id: null,
            modal: 'create'
          },
          componentClasses: 'slideInRight modal-lg right',
          updateRouteOnDismiss: false,
        },
      );
  }
}

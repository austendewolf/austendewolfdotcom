import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal/modal.service';
import {ModalContext} from '../modal/modal-context';
import {NavigationModalComponent} from '../navigation-modal/navigation-modal.component';
import {OutreachModalComponent} from '../outreach/outreach-modal.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: ModalService,
              private router: Router) { }

  ngOnInit() {
  }

  public handleClickLogo(e: any): Promise<boolean> {
      return this.router.navigate(['']);
  }

    public openOutreachModal() {
        this.modalService.create<ModalContext>(
            OutreachModalComponent,
            {
                params: {
                    id: null,
                    modal: 'create'
                },
                componentClasses: 'modal-lg center',
                updateRouteOnDismiss: false,
            },
        );
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

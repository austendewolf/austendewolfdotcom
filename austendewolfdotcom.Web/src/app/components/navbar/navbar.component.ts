import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal/modal.service';
import {ModalContext} from '../modal/modal-context';
import {NavigationModalComponent} from '../navigation-modal/navigation-modal.component';
import {OutreachModalComponent} from '../outreach/outreach-modal.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public displayBrandDropdown: boolean;

  constructor(private modalService: ModalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.subscribeToQueryParams();
  }

    public handleClickLogo(e: any): void {
      this.displayBrandDropdown = !this.displayBrandDropdown;
    }

    public handleClickOutsideDropdown(e: any): void {
        if (this.displayBrandDropdown) {
            this.displayBrandDropdown = false;
        }
    }

  public handleClickNavItem(e: any, route: string): Promise<boolean> {
      this.displayBrandDropdown = false;
      return this.router.navigate([route]);
  }

    public openOutreachModal() {
        return this.router.navigate([this.router.url], {queryParams: { modal: 'contact'}});
    }

  public openNavigationModal() {

  }

    public subscribeToQueryParams(): void {
        this.route.queryParams.subscribe(params => {
            switch (params.modal) {
                case 'contact':
                    this.modalService.create<ModalContext>(
                        OutreachModalComponent,
                        {
                            params: {
                                id: null,
                                modal: 'create'
                            },
                            componentClasses: 'slideInRight modal-med right',
                            updateRouteOnDismiss: false,
                        },
                    );
                    break;
                case 'menu':
                    this.modalService.create<ModalContext>(
                        NavigationModalComponent,
                        {
                            params: {
                                id: null,
                                modal: 'create'
                            },
                            componentClasses: 'slideInRight modal-med right',
                            updateRouteOnDismiss: false,
                        },
                    );
                    break;
            }
        });
    }
}

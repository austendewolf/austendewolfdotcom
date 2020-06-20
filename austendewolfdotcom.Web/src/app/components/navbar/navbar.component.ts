import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal/modal.service';
import {ModalContext} from '../modal/modal-context';
import {ActivatedRoute, Router} from '@angular/router';
import {OutreachModalComponent} from '../outreach/outreach-modal.component';

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
            }
        });
    }
}

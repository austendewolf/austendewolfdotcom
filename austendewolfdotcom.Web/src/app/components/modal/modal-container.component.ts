import {ChangeDetectorRef, Component, HostListener, Injector, OnInit, ViewChild} from '@angular/core';
import {ModalContainerDirective} from './modal-container.directive';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
})
export class ModalContainerComponent implements OnInit {

  @ViewChild(ModalContainerDirective, {static: true}) modalContainer: ModalContainerDirective;

  constructor(
    private modalService: ModalService,
    private injector: Injector,
    private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.modalService.registerViewContainerRef(this.modalContainer.viewContainerRef);
    this.modalService.registerInjector(this.injector);
    this.modalService.registerChangeDetectorRed(this.changeDetectorRef);
  }
}

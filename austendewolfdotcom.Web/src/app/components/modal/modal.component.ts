import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalDirective} from './modal.directive';
import {Modal} from './modal.interface';
import {Router} from '@angular/router';
import {ModalContext} from './modal-context';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent<T> implements OnInit, AfterViewInit {

  public backdropClass = 'fadeIn';
  public dialogClass = 'fadeIn';
  public containerRef: ViewContainerRef;
  public childComponent: Modal<T>;
  public context?: ModalContext;
  @ViewChild(ModalDirective, {static: false}) modal: ModalDirective;
  @HostListener('window:keyup', ['$event']) onScroll(event) {
    if (event.key === 'Escape') {
      return this.dismiss();
    }
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
    private router: Router) {

    this.dismiss = this.dismiss.bind(this);
    this.modalService.event.emit(true);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.childComponent as any);
    const modalContentComponent = this.modal.viewContainerRef.createComponent<Modal<T>>(componentFactory);
    this.context.containerRef = this.containerRef;
    this.context.dismiss = this.dismiss;
    modalContentComponent.instance.context = (this.context as any);
  }

  public dismiss(): Promise<boolean> {
    this.backdropClass = 'fadeOut';
    this.dialogClass = this.context.componentClasses.indexOf('slideInRight') !== -1 ? ' slideOutRight fadeOut' : 'fadeOut';
    this.modalService.event.emit(false);
    setTimeout(() => {
      this.containerRef.detach();
      }, 800);
    const index = this.router.url.indexOf('modal=');
    if (index !== -1) {
      const newRoute = this.router.url.substring(0, index - 1);
      return this.router.navigate([newRoute]);
      // this.location.replaceState(newRoute);
    }
  }
}

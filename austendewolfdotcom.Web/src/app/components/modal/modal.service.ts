import {ChangeDetectorRef, ComponentFactoryResolver, EventEmitter, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {ModalComponent} from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalContainer: ViewContainerRef;
  private injector: Injector;
  private changeDetectorRef: ChangeDetectorRef;
  public event = new EventEmitter<any>();

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver) {

  }

  public registerViewContainerRef = (vcRef: ViewContainerRef): void => {
    this.modalContainer = vcRef;
  }

  public registerInjector = (injector: Injector): void => {
    this.injector = injector;
  }

  public registerChangeDetectorRed = (changeDetectorRef: ChangeDetectorRef): void => {
    this.changeDetectorRef = changeDetectorRef;
  }

  public create<T>(component: any, context?: T): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const modalComponent = this.modalContainer.createComponent(componentFactory);
    modalComponent.instance.containerRef = this.modalContainer;
    modalComponent.instance.context = context as any;
    modalComponent.instance.childComponent = component;
    this.changeDetectorRef.detectChanges();
  }
}

import {ViewContainerRef} from '@angular/core';

export class ModalContext {
    public params?: any;
    public dismiss?: () => {};
    public containerRef?: ViewContainerRef;
    public componentClasses: string;
    public updateRouteOnDismiss = true;
}

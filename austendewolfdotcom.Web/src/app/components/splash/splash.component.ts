import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {timer} from 'rxjs';
import {FlatForm, FlatFormControl, FlatFormControlGroup, FlatFormControlType} from 'ng-flat-form';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {MenuComponent} from '../menu-component/menu.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  private timer: any;
  private timerSubscription: any;
  public currentWord = 0;
  public activeTab = 'smartsheet';

  constructor(private contactService: ContactService,
              private router: Router,
              private modalService: ModalService) { }

  ngOnInit() {
    this.startWordCarousel();
  }

  protected startWordCarousel(): void {
    this.timer = timer(0, 3000);
    this.timerSubscription = this.timer.subscribe(t => {
      if (this.currentWord < 4) {
        this.currentWord++;
      } else {
        this.currentWord = 1;
      }
    });
  }

  public handleClickCard(e: any, route: string): Promise<boolean> {
    return this.router.navigate([`/${route}`]);
  }

  public handleClickContact(e: any): void {
    this.modalService.create<MenuComponent>(MenuComponent, {} as any);
  }
}

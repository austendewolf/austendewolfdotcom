import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {timer} from 'rxjs';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';

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

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute,
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
}

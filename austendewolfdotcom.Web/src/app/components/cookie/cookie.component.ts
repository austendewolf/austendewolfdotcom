import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  @HostBinding('class.cookie-notification') baseClasses = false;
  @HostBinding('class.animated')
  @HostBinding('class.d-block')
  @HostBinding('class.fadeInUp') showCookieNotification = false;
  @HostBinding('class.fadeOutDown') hideCookieNotification = false;

  constructor() { }

  ngOnInit() {
    this.baseClasses = true; // set class `someClass` on `<body>`
    this.showCookieNotification = !Boolean(localStorage.getItem('cookieConsent'));
  }

  public accept(): void {
    localStorage.setItem('cookieConsent', 'true');
    this.hideCookieNotification = true;
  }
}

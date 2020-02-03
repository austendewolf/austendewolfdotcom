import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {timer} from 'rxjs';
import {FlatForm, FlatFormControl, FlatFormControlGroup, FlatFormControlType} from 'ng-flat-form';
import {ContactService} from '../../services/contact.service';

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
  public form: FlatForm;
  public activeTab = 'smartsheet';
  public contactLoading = false;
  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const docElement = document.documentElement;
    const footerElement = document.getElementById('footer');
    const lefVerticalElement = document.getElementById('left-vertical');
    const rightVerticalElement = document.getElementById('right-vertical');
    const pixelsFromBottom = (docElement.scrollHeight - docElement.clientHeight) - docElement.scrollTop;

    if (pixelsFromBottom <= footerElement.clientHeight) {
      const verticalPixelsFromBottom = `${footerElement.clientHeight - pixelsFromBottom}px`;
      lefVerticalElement.style.bottom = verticalPixelsFromBottom;
      rightVerticalElement.style.bottom = verticalPixelsFromBottom;
    } else {
      lefVerticalElement.style.bottom = '0';
      rightVerticalElement.style.bottom = '0';
    }
  }

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.startWordCarousel();
    this.initializeForm();
    this.subscribeToFormEvents();
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

  public handleClickTab(e: any, tab: string): void {
    this.activeTab = tab;
  }

  private subscribeToFormEvents(): void {
    this.form.statusChanges.subscribe((event: any) => {});
  }

  private initializeForm(): void {
    const controlGroups = [
      new FlatFormControlGroup({
        title: '',
        description: '',
        controls: [
          new FlatFormControl({
            class: 'border-bottom',
            key: 'email',
            placeholder: 'Email',
            value: '',
            type: FlatFormControlType.INPUT_EMAIL,
            required: true,
            showValidation: true,
          }),
          new FlatFormControl({
            class: 'border-bottom half border-right',
            key: 'firstName',
            placeholder: 'First Name',
            value: '',
            type: FlatFormControlType.INPUT_TEXT,
            required: true,
            showValidation: true,
            showLength: true,
            maxLength: 20,
          }),
          new FlatFormControl({
            class: 'border-bottom half',
            key: 'lastName',
            placeholder: 'Last Name',
            value: '',
            type: FlatFormControlType.INPUT_TEXT,
            required: true,
            showValidation: true,
            showLength: true,
            maxLength: 20,
          }),
          new FlatFormControl({
            class: '',
            key: 'content',
            placeholder: 'What\'s going on?',
            value: '',
            type: FlatFormControlType.TEXTAREA,
            rows: 10,
            required: true,
            showValidation: true,
            showLength: true,
            maxLength: 400,
          })
        ]
      })
    ];
    this.form = new FlatForm(controlGroups);
  }

  public async submitContactForm(): Promise<void> {
    const contact = this.form.value;
    this.contactLoading = true;
    try {
      await this.contactService.saveContact(contact);
      this.contactLoading = false;
    } catch {
      this.contactLoading = false;
    }
  }
}

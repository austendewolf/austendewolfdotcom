import {Component, OnInit} from '@angular/core';
import {FlatFormControlGroup} from '../form/classes/flat-form-control-group';
import {FlatFormControl} from '../form/classes/flat-form-control';
import {FlatForm} from '../form/classes/flat-form';
import {FlatFormControlType} from '../form/enums/FlatFormControlType';
import {timer} from 'rxjs';
import {ContactService} from '../../contact.service';

@Component({
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
    await this.contactService.saveContact(contact);
    this.contactLoading = false;
  }
}

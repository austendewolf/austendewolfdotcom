import { Component, OnInit } from '@angular/core';
import {ModalContext} from '../modal/modal-context';
import {FlatForm, FlatFormControl, FlatFormControlGroup, FlatFormControlType} from 'ng-flat-form';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach-modal.component.html',
  styleUrls: ['./outreach-modal.component.scss']
})
export class OutreachModalComponent implements OnInit {

  public context: ModalContext;
  public form: FlatForm;
  public contactLoading = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.initializeForm();
    this.subscribeToFormEvents();
  }

  public handleClickNavigationItem() {
    this.context.dismiss();
  }

  private subscribeToFormEvents(): void {
    this.form.statusChanges.subscribe((event: any) => {});
  }

  private initializeForm(): void {
    const controlGroups = [
      new FlatFormControlGroup({
        title: 'Contact Information',
        description: 'Let\'s get to know each other a bit. What should I call you?',
        controls: [
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
            class: 'border-bottom',
            key: 'email',
            placeholder: 'Email',
            value: '',
            type: FlatFormControlType.INPUT_EMAIL,
            required: true,
            showValidation: true,
          }),
        ]
      }),
      new FlatFormControlGroup({
        title: 'Message',
        description: 'Let\'s talk. What\'s on your mind?',
        controls: [
          new FlatFormControl({
            class: '',
            key: 'message',
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

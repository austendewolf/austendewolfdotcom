import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent implements OnInit {

  @Input() primaryButtonText = 'Save';
  @Input() secondaryButtonText = 'Cancel';
  @Input() tertiaryButtonText = 'Delete';
  @Input() hidePrimaryButton;
  @Input() hideSecondaryButton;
  @Input() hideTertiaryButton;
  @Input() disablePrimaryButton;
  @Input() disableSecondaryButton;
  @Input() disableTertiaryButton;
  @Output() primaryButtonClick = new EventEmitter<any>();
  @Output() secondaryButtonClick = new EventEmitter<any>();
  @Output() tertiaryButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public handleOnClickPrimaryButton = (event: MouseEvent): void => {
    this.primaryButtonClick.emit(event);
  }

  public handleOnClickSecondaryButton = (event: MouseEvent): void => {
    this.secondaryButtonClick.emit(event);
  }

  public handleOnClickTertiaryButton = (event: MouseEvent): void => {
    this.tertiaryButtonClick.emit(event);
  }
}

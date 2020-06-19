import {Component, OnInit} from '@angular/core';
import {ModalService} from './components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'adewolf';
  public modalOpen: boolean;

  constructor(
      private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.subscribeToModalEvents();
  }

  public subscribeToModalEvents(): void {
    this.modalService.event.subscribe(event => {
      this.modalOpen = event;
    });
  }
}

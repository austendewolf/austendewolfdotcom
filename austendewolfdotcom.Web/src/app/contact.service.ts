import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpService: HttpClient) { }

  public saveContact(contact: any): Promise<any> {
    return this.httpService.post('/api/contacts', contact).toPromise();
  }
}

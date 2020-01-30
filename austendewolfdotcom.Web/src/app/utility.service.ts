import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // tslint:disable-next-line:ban-types
  public getNested(theObject: Object, path: string, separator: string): any {
    try {
      separator = separator || '.';
      return path.
      replace('[', separator).replace(']', '').
      split(separator).
      reduce(
          // tslint:disable-next-line:only-arrow-functions
          function(obj: any, property: string): any {
            return obj[property];
          }, theObject
      );

    } catch (err) {
      return undefined;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  public urlGlobal: string;
  public cidadeGlobal: string;

  constructor(public http: HttpClient) {

  }

  public getCidadeGlobal(): string {
    return this.cidadeGlobal;
  }

  public setCidadeGlobal(cidade: string) {
    this.cidadeGlobal = cidade;
  }

  public getUrlGlobal(): string {
    return this.urlGlobal;
  }

  public setURLBase(urlbase: string) {
    this.urlGlobal = urlbase;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { CredencialDTO } from '../../dto/crendencial.dto';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }


  getCredenciais(creds : CredencialDTO) {
    return this.http.get(`${API_CONFIG.baseUrl}/credencial/${creds.documentoFiscal}/${creds.senha}`);
  }

  setCredenciais(creds : CredencialDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/credencial/${creds.documentoFiscal}/${creds.senha}`,creds);
    //return this.http.get(`${API_CONFIG.baseUrl}/credencial/${creds.documentoFiscal}/${creds.senha}`);
  }
}

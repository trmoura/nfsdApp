import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { CredencialDTO } from '../../dto/crendencial.dto';
import { GlobalProvider } from '../global/global';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient, public globalProvider: GlobalProvider) {

  }


  getCredenciais(creds: CredencialDTO, cidade: any) {

    this.globalProvider.setCidadeGlobal(cidade);

    if (cidade === 'Benevides') {
      console.log('entrou no if');
      this.globalProvider.setURLBase(API_CONFIG.apiUrlBenevides);
    } else if (cidade === 'Paragominas') {
      this.globalProvider.setURLBase(API_CONFIG.apiUrlParagominas);
    }

    return this.http.get(`${this.globalProvider.urlGlobal}/credencial/${creds.documentoFiscal}/${creds.senha}`);
  }

  // setCredenciais(creds : CredencialDTO) {
  //   return this.http.post(`${API_CONFIG.baseUrl}/credencial/${creds.documentoFiscal}/${creds.senha}`,creds);
  //   //return this.http.get(`${API_CONFIG.baseUrl}/credencial/${creds.documentoFiscal}/${creds.senha}`);
  // }
}

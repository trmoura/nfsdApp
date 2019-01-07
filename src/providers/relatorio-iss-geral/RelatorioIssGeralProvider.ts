import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
/*
  Generated class for the RelatorioIssGeralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RelatorioIssGeralProvider {
 
  constructor(public http: HttpClient) {
    
  }
  getRegistros() {
    return this.http.get(`${API_CONFIG.baseUrl}/previsaoiss`);
  }
}

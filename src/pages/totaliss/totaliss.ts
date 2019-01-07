import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelatorioIssGeralProvider } from '../../providers/relatorio-iss-geral/RelatorioIssGeralProvider';

/**
 * Generated class for the TotalissPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-totaliss',
  templateUrl: 'totaliss.html',
})
export class TotalissPage {

  public registro: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private relatorioIssGeralProvider: RelatorioIssGeralProvider) {
  }

  ionViewDidEnter() {

  }

  carregarRegistros() {
    this.relatorioIssGeralProvider.getRegistros().subscribe(data => {
      const response = (data as any);
      this.registro = response;
      console.log(this.registro);
    }, error => {
      console.log(error);
    });
  }

  teste() {
    this.relatorioIssGeralProvider
      .getRegistros()
      .subscribe((data: any) => this.registro = data,
        error => () => {          
          console.log(error);
        },
        () => {
          console.log(this.registro);
        });
  }

}

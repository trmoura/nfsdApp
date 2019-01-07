import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CredencialDTO } from '../../dto/crendencial.dto';
import { LoginProvider } from '../../providers/login/login.provider';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  cpf = '';
  DECIMAL_SEPARATOR = ".";
  GROUP_SEPARATOR = ",";
  pureResult: any;
  maskedId: any;


  creds: CredencialDTO = {
    documentoFiscal: "",
    senha: ""
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    this.cpf = this.cpf.replace(".", "");
    this.cpf = this.cpf.replace("-", "");
    this.cpf = this.cpf.replace(".", "");
    this.creds.documentoFiscal = this.cpf;
    console.log(this.creds);
    this.loginProvider.getCredenciais(this.creds).subscribe(
      response => {
        console.log('NÃO DEU ERRO');
        console.log(response);

        this.navCtrl.push(TabsPage);

      }, error => {
        console.log('DEU ERRO');
        this.showAlert('Usuário ou senha inválidos.');
        console.log(error);
      });
  }

  format(valString) {
    if (!valString) {
      return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    this.maskedId = this.cpf_mask(parts[0]);
    return this.maskedId;

  };

  unFormat(val) {
    if (!val) {
      return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
      return val.replace(/,/g, '');
    } else {
      return val.replace(/\./g, '');
    }
  };

  cpf_mask(v) {
    v = v.replace(/\D/g, ''); //Remove all that is not digits
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit again
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Insert an dash between the third and quarter digit
    return v;
  }

  showAlert(msg: string) {
    const alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}



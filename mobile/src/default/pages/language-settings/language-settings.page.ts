import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'language-settings',
  templateUrl: './language-settings.page.html',
  styleUrls: ['./language-settings.page.scss']
})
export class LanguageSettingsPage implements OnInit {
  public selectedLanguage: any;
  constructor(
    public translateService: TranslateService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    if (localStorage.getItem('selectedLanguage')) {
      this.selectedLanguage = localStorage.getItem('selectedLanguage');
    } else {
      this.selectedLanguage = 'en';
    }
  }
  submit() {
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
    this.navCtrl.back();
  }
}

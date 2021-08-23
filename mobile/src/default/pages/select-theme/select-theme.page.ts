import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/default/services/theme-switcher-service';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.page.html',
  styleUrls: ['./select-theme.page.scss']
})
export class SelectThemePage implements OnInit {
  selectedTheme = '';
  constructor(public themeSwitcher: ThemeSwitcherService) {}

  ngOnInit() {
    this.selectedTheme = localStorage.getItem('selected_theme')
      ? localStorage.getItem('selected_theme')
      : 'blue';
  }
  changeTheme(value) {
    localStorage.setItem('selected_theme', value);
    this.themeSwitcher.setTheme(value);
  }
}

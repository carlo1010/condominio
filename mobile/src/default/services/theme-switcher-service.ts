import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  private themes: Theme[] = [];
  private currentTheme = 0;

  constructor(
    private domCtrl: DomController,
    @Inject(DOCUMENT) private document,
    private platform: Platform,
    private statusBar: StatusBar
  ) {
    this.themes = [
      {
        name: 'blue',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#1f45a4' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-rgb', value: '31,69,164' },
          { themeVariable: '--ion-color-primary-shade', value: '#1b3d90' },
          { themeVariable: '--ion-color-secondary', value: '#5ec7b6' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' }
        ]
      },
      {
        name: 'red',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#960000' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-rgb', value: '150,0,0' },
          { themeVariable: '--ion-color-primary-shade', value: '#bb3838' },
          { themeVariable: '--ion-color-secondary', value: '#ff0000' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' }
        ]
      },
      {
        name: 'green',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#032f02' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-rgb', value: '3, 47, 2' },
          { themeVariable: '--ion-color-primary-shade', value: '#0b540a' },
          { themeVariable: '--ion-color-secondary', value: '#04841a' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' }
        ]
      },
      {
        name: 'purple',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#5e1f90' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-rgb', value: '94, 31, 144' },
          { themeVariable: '--ion-color-primary-shade', value: '#8240b7' },
          { themeVariable: '--ion-color-secondary', value: '#8e00ff' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' }
        ]
      },
      {
        name: 'pink',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#bd1a5e' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-rgb', value: '189,26,94' },
          { themeVariable: '--ion-color-primary-shade', value: '#ea5996' },
          { themeVariable: '--ion-color-secondary', value: '#ef3884' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' }
        ]
      },
      {
        name: 'fadedGreen',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#278474' },
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
          { themeVariable: '--ion-color-primary-rgb', value: '39,132,116' },
          { themeVariable: '--ion-color-primary-shade', value: '#54968b' },
          { themeVariable: '--ion-color-secondary', value: '#94cec4' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' }
        ]
      },

      {
        name: 'black',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#000' },
          { themeVariable: '--ion-color-primary-contrast', value: '#fff' },
          { themeVariable: '--ion-color-primary-rgb', value: '0,0,0' },
          { themeVariable: '--ion-color-primary-shade', value: '#2d2d28' },
          { themeVariable: '--ion-color-secondary', value: '#303035' },
          { themeVariable: '--ion-color-secondary-contrast', value: '#fff' }
        ]
      }
    ];
  }

  setTheme(name): void {
    const theme = this.themes.find(data => data.name === name);
    const statusBarColor = theme.styles.find(
      data => data.themeVariable === '--ion-color-primary-shade'
    );
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString(statusBarColor.value);
    });
    this.domCtrl.write(() => {
      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(
          style.themeVariable,
          style.value
        );
      });
    });
  }
}

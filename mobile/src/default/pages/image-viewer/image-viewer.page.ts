import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonSlides,
  ModalController,
  NavController,
  NavParams
} from '@ionic/angular';

@Component({
  selector: 'pop-up-image-viewer',
  templateUrl: './image-viewer.page.html',
  styleUrls: ['./image-viewer.page.scss']
})
export class ImageViewerComponent implements OnInit {
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    pager: false,
    zoom: true
  };
  currentSlide = 0;
  images = [];
  @ViewChild(IonSlides, { static: false }) ionSlide: IonSlides;
  constructor(
    private modalCtrl: ModalController,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.images = this.navParams.get('value');
  }
  slideChanged(e) {
    this.ionSlide.getActiveIndex().then(val => {
      this.currentSlide = val;
      const element = document.getElementById('id' + val);
      element.scrollIntoView({ inline: 'center', block: 'center' });
    });
  }
  scrollToSlide(count) {
    this.ionSlide.slideTo(count, 400);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}

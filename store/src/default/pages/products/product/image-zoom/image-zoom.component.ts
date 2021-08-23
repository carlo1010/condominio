import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Subscription } from 'rxjs';
import { ListsSandbox } from '../../../../../core/lists/lists.sandbox';
import { ConfigService } from '../../../../../core/service/config.service';
@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('data') imageName;
  @Input() id: any;
  @Input() imageId: any;
  // @Input() image: any;
  public isActive = [];
  // public image: any;
  image: any;
  public imagePath: string;
  public config: SwiperConfigInterface = {};
  private subscriptions: Array<Subscription> = [];
  public zoomImage: any;
  public zoomPopupImage: any;
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  productImageId: any;
  sub: Subscription;
  productId: string;
  isLoading: boolean;

  public index = 0;
  // public productImageId: number;
  constructor(
    public productDetail: ListsSandbox, public configService: ConfigService, private changeDetectRef: ChangeDetectorRef, public dialogRef: MatDialogRef<ImageZoomComponent>, public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.imagePath = this.configService.getImageUrl();
    this.hideLoader();
  }
  public hideLoader() {
    this.isLoading = false;
  }
  public loading() {
    this.isLoading = true;
  }
  getProductdetail() {
    const params: any = {};
    params.id = this.id;
    this.productDetail.getProductDetails(params);
    this.subscriptions.push(
      this.productDetail.productDetails$.subscribe(detail => {
        if (detail) {
          this.productId = detail.productId;
        }
        if (detail && detail.productImage.length > 0) {
          const imageLength = detail.productImage.length;
          this.isActive = [];
          this.isActive[detail.productImage[0].productId] = true;
          for (let i = 0; i < imageLength; i++) {
            if (detail.productImage[i].defaultImage === 1) {
              this.productImageId = detail.productImage[i].productId;
              this.image =
                this.imagePath + '?path=' +
                detail.productImage[i].containerName + '&name=' +
                detail.productImage[i].image +
                '&width=390&height=390';
              this.zoomPopupImage = this.image;
              this.zoomImage =
                '"' + this.imagePath + '?path=' +
                detail.productImage[i].containerName + '&name=' +
                detail.productImage[i].image +
                '&width=1290&height=2370' + '"';
              setTimeout(() => {
                this.config.observer = true;
                this.changeDetectRef.detectChanges();
              }, 500);
            }
          }
        }
      })
    );
  }

  ngAfterViewInit() {
    this.config = {
      slidesPerView: 'auto',
      // pagination: this.pagination,
      // autoplay: true,
      observer: true,
      navigation: true,
      grabCursor: true,
      lazy: {
        loadPrevNext: true
      },
      speed: 700,
      effect: 'slide'
    };
  }


  public selectImage(image, i) {
    console.log('select image index', i);
    this.index = i;
    this.id = image.productId;
    this.isActive = [];
    this.isActive[image.productId] = true;
    this.image =
      this.imagePath + '?path=' +
      image.containerName + '&name=' +
      image.image +
      '&width=390&height=390';
    this.changeDetectRef.detectChanges();
    this.zoomPopupImage = this.image;
    this.zoomImage =
      '"' + this.imagePath + '?path=' +
      image.containerName + '&name=' +
      image.image +
      '&width=660&height=660' + '"';
  }
  public close() {
    this.dialogRef.close('');
  }

  // unsubscribe subscribed events while destroy the page
  ngOnDestroy() {
    // this.optionValueArray = [];
    // this.sub.unsubscribe();
    this.subscriptions.forEach(each => {
      each.unsubscribe();
    });
  }

}

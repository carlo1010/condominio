export class ProductListResponseModel {
  public image: any;
  public productId: string;
  public productSlug: string;
  public name: string;
  public price: string;
  public pricerefer: string;
  public originalPrice: string;
  public discount: number;
  public taxType: number;
  public taxValue: number;

  constructor(response: any) {
    this.image = response.Images || '';
    this.productId = response.productId || '';
    this.productSlug = response.productSlug || '';
    this.name = response.name || '';
    if (!response.pricerefer && !response.flag) {
      this.price = response.price || '';
      this.originalPrice = response.price || '';
      this.pricerefer = '';
    } else if (response.pricerefer && response.flag == 1) {
      this.price = response.pricerefer || '';
      this.originalPrice = response.pricerefer || '';
      this.pricerefer = response.price || '';
    } else if (response.pricerefer && response.flag == 0) {
      this.price = response.pricerefer || '';
      this.originalPrice = response.pricerefer || '';
      this.pricerefer = '';
    }
    if (this.pricerefer) {
      this.discount = Math.round(((Number(this.price) - Number(this.pricerefer)) / Number(this.price)) * 100);
    } else {
      this.discount = 0;
    }
    this.price = response.price || '';
    this.pricerefer = response.pricerefer || '';
    this.taxType = response.taxType;
    this.taxValue = response.taxValue;
  }
}

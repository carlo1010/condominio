export class AppSettingsModel {
  currencyCode: string;
  currencySymbolLeft: string;
  currencySymbolRight: string;
  invoicePrefix: string;
  constructor(details: any) {
    this.currencyCode = details.data[0].currencyCode || '';
    this.currencySymbolLeft = details.data[0].symbolLeft || '';
    this.currencySymbolRight = details.data[0].symbolRight || '';
    this.invoicePrefix = details.data[0].invoicePrefix || '';
  }
}

/*
 * spurtcommerce
 * version 4.5
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { environment } from '../environments/environment';
import * as fromAuth from './admin/auth/reducer/auth.reducer';
import * as fromCommon from './admin/logout/reducer/common.reducer';
import * as fromProduct from './admin/catalog/product/product-reducer/product.reducer';
import * as fromorder from './admin/settings/localizations/orderstatus/orderstatus-reducer/orderstatus.reducer';
import * as fromCustomers from './admin/Customers/customers/customer-reducer/customer.reducer';
import * as fromCustomersGroup from './admin/Customers/customers-group/customers-group-reducer/customers-group.reducer';
import * as fromCountry from './admin/settings/localizations/country/country-reducer/country.reducer';
import * as fromZone from './admin/settings/localizations/zone/zone-reducer/zone.reducer';
import * as fromLocation from './admin/settings/localizations/location/location-reducer/location.reducer';
import * as fromRole from './admin/settings/role/role-reducer/role.reducer';
import * as fromPermission from './admin/settings/permission/permission-reducer/permission.reducer';
import * as fromPages from './admin/cms/pages/pages-reducer/pages.reducer';
import * as fromUser from './admin/settings/user/user-reducer/user.reducer';
import * as fromBanner from './admin/cms/banners/banner-reducer/banner.reducer';
import * as fromLanguage from './admin/settings/localizations/languages/languages-reducer/languages.reducer';
import * as fromEmailtemp from './admin/settings/localizations/emailtemplate/emailtemp-reducer/emailtemp.reducer';
import * as fromStockstatus from './admin/settings/localizations/stockStatus/stock-reducer/stock.reducer';
import * as fromSalesorder from './admin/sales/orders/orders-reducer/orders.reducer';
import * as fromEditprofile from './admin/profile/editprofile/reducer/editprofile.reducer';
import * as fromCurrency from './admin/settings/localizations/currency/currency-reducer/currency.reducer';
import * as fromTax from './admin/settings/localizations/tax/tax-reducer/tax.reducer';
import * as fromChangepassword from './admin/profile/changepassword/changepassword-reducer/changepassword.reducer';
import * as fromCategories from './admin/catalog/category/reducer/categories.reducer';
import * as fromBrand from './admin/catalog/brand/reducer/brand.reducer';
import * as fromCoupon from './admin/catalog/coupon/reducer/coupon.reducer';
import * as fromMedia from './admin/catalog/media/reducer/media.reducer';
import * as fromDashboard from './admin/dashboard/reducer/dashboard.reducer';
import * as fromGeneralSetting from './admin/settings/generalsetting/generalsetting-reducer/generalsetting.reducer';
import * as fromSocial from './admin/settings/siteSettings/social/social-reducer/social.reducer';
import * as fromseoSetting from './admin/settings/siteSettings/seo/seo-reducer/seo-reducer';
import * as fromLayoutCatalog from './admin/catalog/layout/reducer/layout.reducer';
import * as fromLayoutCustomer from './admin/Customers/layout/reducer/layout.reducer';
import * as fromLayoutSales from './admin/sales/layout/reducer/layout.reducer';
import * as fromPersonalizeProduct from './admin/settings/personalize/product/product-reducer/product-reducer';
import * as fromPersonalizeOrder from './admin/settings/personalize/order/order-reducer/order-reducer';
import * as fromRatingReview from './admin/catalog/ratingReview/ratingReview-reducer/ratingReview.reducer';
import * as fromLayout from './admin/layout/reducer/layout.reducer';
import * as fromServiceCategory from './admin/services/serivcesCategory/reducer/serviceCategory.reducer';
import * as fromServices from './admin/services/service/reducer/service.reducer';
import * as fromEnquiry from './admin/services/service-enquiry/reducer/service-enquiry.reducer';
import * as fromServiceLeads from './admin/services/service-leads/reducer/service-leads.reducer';
import * as fromBlog from './admin/cms/blogs/blogs-reducer/blog.reducer';
import * as fromSeller from './admin/vendor/pages/seller/seller-reducer/seller.reducer';
import * as fromSetting from './admin/vendor/pages/vendor-setting/vendor-setting-reducer/vendor-setting.reducer';
import * as fromProducts from './admin/vendor/pages/vendor-product/vendor-product-reducer/vendor-product.reducer';
import * as fromOrders from './admin/vendor/vendor-sales/orders/orders-reducer/orders.reducer';
import * as fromPayment from './admin/vendor/pages/payment/payment-reducer/payment.reducer';
import * as fromDocument from './admin/vendor/pages/documents/document-reducer/document.reducer';
import * as fromSalesPayment from './admin/sales/payments/payments-reducer/payments.reducer';
import * as fromImport from './admin/catalog/import/reducer/import.reducer';
import * as fromSalesCancelOrder from './admin/sales/cancel-orders/reducer/cancel-order.reducer';
import * as fromInventoryProduct from './admin/sales/inventory-products/reducer/inventory-products.reducer';
import * as fromArchivePayment from './admin/sales/archive-payments/reducer/archive-payments.reducer';
import * as fromQuotationRequest from './admin/sales/quotation-request/reducer/quotation-request.reducer';
import * as fromBackorderListRequest from './admin/sales/backorder-list/reducer/backorder-list.reducer';
import * as fromsalesFailedOrder from './admin/sales/failed-order/failed-order-reducer/failed-order.reducer';
import * as fromWidgets from './admin/cms/widgets/widgets-reducer/widgets.reducer';
import * as fromFilter from './admin/settings/siteSettings/filter/filter-reducer/filter.reducer';
import * as fromSizeChart from './admin/settings/siteSettings/sizechart/sizechart-reducer/sizechart.reducer';
import * as fromAttributes from './admin/settings/siteSettings/attributes/attributes-reducer/attributes.reducer';
import * as fromAttributeGroup from './admin/settings/siteSettings/attributes-group/attributes-group-reducer/attributes-group.reducer';
import * as fromVariants from './admin/settings/siteSettings/variants/variants-reducer/variants.reducer';
import * as fromSettlementHistory from './admin/vendor/vendor-settlements/settlement-history/settlement-history-reducer/settlement-history.reducer';
import * as fromSettlementOrder from './admin/vendor/vendor-settlements/settlement-order/settlement-order-reducer/settlement-order.reducer';
import * as fromReports from './admin/vendor/reports/reports-reducer/reports.reducer';
import * as fromPageGroup from './admin/cms/page-group/page-group-reducer/page-group.reducer';
import * as fromAuditLog from './admin/audit-log/reducer/audit-log.reducer';
import * as fromPiano from './admin/condominio/piano/reducer/piano.reducer'
import * as fromFornitore from './admin/condominio/fornitore/reducer/fornitore.reducer'
import * as fromTipoSpesa from './admin/condominio/tipo-spesa/reducer/tipo-spesa.reducer'
import * as fromGenerale from './admin/condominio/generale/reducer/generale.reducer'



/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppState as State } from './app.state.interface';
import { reduce } from 'rxjs/operators';
/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

export const reducers: ActionReducerMap<State> = {
  generale: fromGenerale.reducer,
  TipoSpesa: fromTipoSpesa.reducer,
  fornitore: fromFornitore.reducer,
  piano: fromPiano.reducer,
  auth: fromAuth.reducer,
  auditLog: fromAuditLog.reducer,
  common: fromCommon.reducer,
  media: fromMedia.reducer,
  categories: fromCategories.reducer,
  coupon: fromCoupon.reducer,
  brand: fromBrand.reducer,
  product: fromProduct.reducer,
  changepassword: fromChangepassword.reducer,
  customer: fromCustomers.reducer,
  customersGroup: fromCustomersGroup.reducer,
  orderStatus: fromorder.reducer,
  country: fromCountry.reducer,
  zone: fromZone.reducer,
  location: fromLocation.reducer,
  role: fromRole.reducer,
  permission: fromPermission.reducer,
  pages: fromPages.reducer,
  user: fromUser.reducer,
  banner: fromBanner.reducer,
  language: fromLanguage.reducer,
  emailtemp: fromEmailtemp.reducer,
  stockstatus: fromStockstatus.reducer,
  salesorder: fromSalesorder.reducer,
  editprofile: fromEditprofile.reducer,
  currency: fromCurrency.reducer,
  tax: fromTax.reducer,
  dashboard: fromDashboard.reducer,
  generalsetting: fromGeneralSetting.reducer,
  social: fromSocial.reducer,
  seosetting: fromseoSetting.reducer,
  catalogLayout: fromLayoutCatalog.reducer,
  customerLayout: fromLayoutCustomer.reducer,
  salesLayout: fromLayoutSales.reducer,
  personalizeProduct: fromPersonalizeProduct.reducer,
  personalizeOrder: fromPersonalizeOrder.reducer,
  ratingReview: fromRatingReview.reducer,
  layout: fromLayout.reducer,
  serviceCategory: fromServiceCategory.reducer,
  services: fromServices.reducer,
  serviceEnquiry: fromEnquiry.reducer,
  serviceLeads: fromServiceLeads.reducer,
  blog: fromBlog.reducer,
  seller: fromSeller.reducer,
  setting: fromSetting.reducer,
  products: fromProducts.reducer,
  orders: fromOrders.reducer,
  payment: fromPayment.reducer,
  document: fromDocument.reducer,
  salesPayment: fromSalesPayment.reducer,
  import: fromImport.reducer,
  salesCancelOrder: fromSalesCancelOrder.reducer,
  inventoryProduct: fromInventoryProduct.reducer,
  archivePayment: fromArchivePayment.reducer,
  quotationRequest: fromQuotationRequest.reducer,
  backorderList: fromBackorderListRequest.reducer,
  salesFailedOrder: fromsalesFailedOrder.reducer,
  attribute: fromAttributes.reducer,
  attributeGroup: fromAttributeGroup.reducer,
  widgets: fromWidgets.reducer,
  variants: fromVariants.reducer,
  filter: fromFilter.reducer,
  sizechart: fromSizeChart.reducer,
  settlementOrder: fromSettlementOrder.reducer,
  reports: fromReports.reducer,
  settlementHistory: fromSettlementHistory.reducer,
  pageGroup: fromPageGroup.reducer,

  // AuditLog: fromAuditLog.reducer



};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function(state: State, action: any): State {
    if (action.type === '[Common] Do Clear') {
      state = undefined;
    }
    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To filter more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

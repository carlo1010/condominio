/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { Post, JsonController, Res, Req, Authorized, Delete, Param, Get, QueryParam } from 'routing-controllers';
import { CustomerWishlist } from '../../models/CustomerWishlist';
import { ProductService } from '../../services/ProductService';
import { CustomerWishlistService } from '../../services/CustomerWishlistService';
import { ProductImageService } from '../../services/ProductImageService';
import { ProductSpecialService } from '../../services/ProductSpecialService';
import { ProductDiscountService } from '../../services/ProductDiscountService';
import { SkuService } from '../../services/SkuService';
import { ProductVarientOptionService } from '../../services/ProductVarientOptionService';
import { TaxService } from '../../services/TaxService';
import { ProductRatingService } from '../../services/RatingService';
@JsonController('/customer')
export class CustomerController {
    constructor(private customerWishlistService: CustomerWishlistService, private taxService: TaxService, private skuService: SkuService, private productVarientOptionService: ProductVarientOptionService,
                private productImageService: ProductImageService, private productService: ProductService, private productDiscountService: ProductDiscountService,
                private productSpecialService: ProductSpecialService,  private productRatingService: ProductRatingService) {
    }

    // Add Product To Wishlist API
    /**
     * @api {post} /api/customer/add-product-to-wishlist Add Product To Wishlist
     * @apiGroup Store wishlist
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} productId Product Id
     * @apiParam (Request body) {String} productOptionValueId Product Option Value Id
     * @apiParamExample {json} Input
     * {
     *      "productId" : "",
     *      "ProductOptionValueId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Thank you product added to the wishlist successfully.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/add-product-to-wishlist
     * @apiErrorExample {json} Add Product To Wishlist error
     * HTTP/1.1 500 Internal Server Error
     */
    // Add Product To Wishlist Function
    @Post('/add-product-to-wishlist')
    @Authorized('customer')
    public async addProductToWishlist(@Req() request: any, @Res() response: any): Promise<any> {
        return new Promise(async () => {
            const data = await this.customerWishlistService.findOne({
                where: {
                    productId: request.body.productId,
                    customerId: request.user.id,
                },
            });
            if (data) {
                const errorResponse: any = {
                    status: 1,
                    message: 'Already added this product to wishlist.',
                };
                return response.status(400).send(errorResponse);
            }
            const newProduct = new CustomerWishlist();
            newProduct.customerId = request.user.id;
            newProduct.productId = request.body.productId;
            newProduct.isActive = 1;
            const resultData = await this.customerWishlistService.create(newProduct);
            const id = resultData.wishlistProductId;
            const product = await this.productService.findOne({ where: { productId: resultData.productId } });
            const image = await this.productImageService.findOne({
                where: {
                    productId: resultData.productId,
                    defaultImage: 1,
                },
            });
            const successResponse: any = {
                status: 1,
                message: 'Thank you product added to the wishlist successfully.',
                data: {
                    wishlistProductId: id,
                    product,
                    productImage: image,
                },
            };
            return response.status(200).send(successResponse);
        });
    }

    // Wish List Product Delete API
    /**
     * @api {delete} /api/customer/wishlist-product-delete/:id  Delete Product From Wishlist
     * @apiGroup Store wishlist
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "wishlistProductId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Thank you deleted the product from wishlist successfully.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/wishlist-product-delete/:id
     * @apiErrorExample {json} Wishlist Product Delete error
     * HTTP/1.1 500 Internal Server Error
     */
    // Add Product Wishlist Function
    @Delete('/wishlist-product-delete/:id')
    @Authorized('customer')
    public async wishlistProductDelete(@Param('id') wishlistId: number, @Req() request: any, @Res() response: any): Promise<any> {
        const customerwishlistId = await this.customerWishlistService.findOne({ where: { productId: wishlistId, customerId: request.user.id } });
        if (!customerwishlistId) {
            const errResponse: any = {
                status: 1,
                message: 'Invalid Product',
            };
            return response.status(200).send(errResponse);
        }
        await this.customerWishlistService.delete(customerwishlistId.wishlistProductId);
        const successResponse: any = {
            status: 1,
            message: 'Thank you, deleted the product from wishlist successfully.',
        };
        return response.status(200).send(successResponse);
    }

    // Wish List Product List API
    /**
     * @api {get} /api/customer/wishlist-product-list WishList Product List
     * @apiGroup Store wishlist
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully show the wishlist Product List",
     *      "status": "1",
     *      "data": "{}"
     * }
     * @apiSampleRequest /api/customer/wishlist-product-list
     * @apiErrorExample {json} Wishlist Product List error
     * HTTP/1.1 500 Internal Server Error
     */
    // View Product Wishlist Function
    @Get('/wishlist-product-list')
    @Authorized('customer')
    public async wishlistProductlist(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('count') count: number | boolean, @Req() request: any, @Res() response: any): Promise<CustomerWishlist> {
        const select = ['wishlistProductId', 'productId', 'productOptionValueId'];
        const whereConditions = [
            {
                customerId: request.user.id,
            },
        ];
        const wishlistData = await this.customerWishlistService.list(limit, offset, select, whereConditions, count);
        if (count) {
            const Response: any = {
                status: 1,
                message: 'Successfully get count',
                data: wishlistData,
            };
            return response.status(200).send(Response);
        }
        const promises = wishlistData.map(async (results: any) => {
            const productData = await this.productService.findOne({ where: { productId: results.productId } });
            const Image = await this.productImageService.findOne({ where: { productId: results.productId, defaultImage: 1 } });
            if (productData.taxType === 2) {
                const tax = await this.taxService.findOne({ taxId: productData.taxValue });
                if (tax) {
                    productData.taxValue = tax.taxPercentage;
                } else {
                    productData.taxValue = '';
                }
            }
            const where = [{
                name: 'productId',
                op: 'where',
                value: results.productId,
            }];
            const rating = await this.productRatingService.list(0, 0, 0, 0, where, true);
            const whereCondition = [
                {
                    name: 'ProductRating.productId',
                    op: 'where',
                    value: results.productId,
                },
                    {
                        name: 'ProductRating.review',
                        op: 'NOT',
                    },
            ];
            const review = await this.productRatingService.listByQueryBuilder(0, 0, 0, whereCondition, 0, 0, 0, 0, true);
            const temp: any = productData;
            temp.ratingCount = rating ? rating : 0;
            temp.reviewCount = review ? review : 'null';
            temp.skuName = '';
            let skuValue = undefined;
            let skuId = undefined;
            if (productData.isSimplified === 1) {
                skuValue = await this.skuService.findOne({ id: productData.skuId });
                if (skuValue) {
                    temp.price = skuValue.price;
                    temp.skuName = skuValue.skuName;
                    skuId = skuValue.id;
                }
            } else {
                skuValue = await this.productVarientOptionService.findOne({ productId: productData.productId, isActive: 1 });
                if (skuValue) {
                    const productVarientSku = await this.skuService.findOne({ id: skuValue.skuId });
                    if (productVarientSku) {
                    temp.price = productVarientSku.price;
                    temp.skuName = productVarientSku.skuName;
                    skuId = productVarientSku.id;
                    }
                } else {
                    const sku = await this.skuService.findOne({ id: productData.skuId });
                    if (sku) {
                        temp.price = sku.price;
                        temp.skuName = sku.skuName;
                        skuId = sku.id;
                    }
                }
            }
            if (skuId) {
                const nowDate = new Date();
                const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                const productSpecial = await this.productSpecialService.findSpecialPriceWithSku(productData.productId, skuId, todaydate);
                const productDiscount = await this.productDiscountService.findDiscountPricewithSku(productData.productId, skuId, todaydate);
                if (productSpecial !== undefined) {
                    temp.pricerefer = productSpecial.price;
                    temp.flag = 1;
                } else if (productDiscount !== undefined) {
                    temp.pricerefer = productDiscount.price;
                    temp.flag = 0;
                } else {
                    temp.pricerefer = '';
                    temp.flag = '';
                }
            } else {
                temp.pricerefer = '';
                temp.flag = '';
            }
            results.product = temp;
            results.productImage = Image;
            return results;
        });
        const result = await Promise.all(promises);
        const successResponse: any = {
            status: 1,
            message: 'Successfully show the wishlist Product List',
            data: result,
        };
        return response.status(200).send(successResponse);
    }
}

/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {
    Post, Body, JsonController, Res, Authorized, Req, Put, Param, BodyParam, Delete, Get, QueryParam,
} from 'routing-controllers';
import { CreateQuestion } from './requests/CreateQuestionRequest';
import { ProductQuestionService } from '../../../services/ProductQuestionService';
import { ProductService } from '../../../services/ProductService';
import { ProductAnswerService } from '../../../services/ProductAnswerService';
import { CustomerService } from '../../../services/CustomerService';
// import { UserService } from '../../../services/UserService';
import { ProductQuestion } from '../../../models/ProductQuestion';
import { ProductAnswer } from '../../../models/ProductAnswer';
import { VendorService } from '../../../services/VendorService';
@JsonController('/vendor-product-question')
export class ProductQuestionController {

    constructor(
        private productQuestionService: ProductQuestionService,
        private customerService: CustomerService,
        // private userService: UserService,
        private productAnswerService: ProductAnswerService,
        private productService: ProductService,
        private vendorService: VendorService
    ) {
    }

    // Create Question API
    /**
     * @api {post} /api/vendor-product-question/vendor-question Vendor Question API
     * @apiGroup Vendor Product Question
     * @apiParam (Request body) {String} question
     * @apiParam (Request body) {Number} productId
     * @apiParam (Request body) {String} answer
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "question" : "",
     *      "productId" : "",
     *      "answer" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Question created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-question/add-question
     * @apiErrorExample {json} Question error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-question')
    @Authorized('vendor')
    public async createQuestion(@Body({ validate: true }) questionParam: CreateQuestion, @Req() request: any, @Res() response: any): Promise<any> {

        const question = new ProductQuestion();
        question.question = questionParam.question;
        question.productId = questionParam.productId;
        question.type = 1;
        question.referenceId = request.user.vendorId;
        question.isActive = 1;
        const questionSaved = await this.productQuestionService.create(question);
        if (questionParam.answer) {
            const answer = new ProductAnswer();
            answer.answer = questionParam.answer;
            answer.questionId = +questionSaved.questionId;
            answer.type = 1;
            answer.referenceId = request.user.vendorId;
            answer.defaultAnswer = 1;
            answer.isActive = 1;
            await this.productAnswerService.create(answer);
        }
        if (questionSaved !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Question Posted Successfully',
                data: questionSaved,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to create',
            };
            return response.status(400).send(errorResponse);
        }
    }
    // Update Question status API
    /**
     * @api {put} /api/vendor-product-question/update-question-status/:questionId Update Question status API
     * @apiGroup Vendor Product Question
     * @apiParam (Request body) {Number} status status should be 0 | 1
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": " status updated successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-question/update-question-status/:questionId
     * @apiErrorExample {json} updateQuestion error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-question-status/:questionId')
    @Authorized('vendor')
    public async updateQuestionStatus(@Param('questionId') questionId: number, @BodyParam('status') status: number, @Res() response: any): Promise<any> {
        const question = await this.productQuestionService.findOne({
            where: {
                questionId,
            },
        });
        if (!question) {
            const errorResponse: any = {
                status: 0,
                message: 'invalid QuestionId',
            };
            return response.status(400).send(errorResponse);
        }
        question.isActive = status;
        const questionSave = await this.productQuestionService.create(question);
        if (questionSave) {
            const successResponse: any = {
                status: 1,
                message: 'Updated Your Question Status',
                data: questionSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to update your question status',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // delete Question API
    /**
     * @api {delete} /api/vendor-product-question/delete-question/:questionId Delete Question API
     * @apiGroup Vendor Product Question
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Question.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-question/delete-question/:questionId
     * @apiErrorExample {json} Question error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-question/:questionId')
    @Authorized('vendor')
    public async deleteQuestion(@Param('questionId') questionId: number, @Res() response: any, @Req() request: any): Promise<any> {

        const question = await this.productQuestionService.findOne({
            where: {
                questionId,
            },
        });
        if (!question) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid questionId',
            };
            return response.status(400).send(errorResponse);
        }

        const deleteQuestion = await this.productQuestionService.delete(question);
        if (deleteQuestion) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully deleted Question',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to delete Question',
            };
            return response.status(400).send(errorResponse);
        }
    }
    // Question List API
    /**
     * @api {get} /api/vendor-product-question/question-list Question List API
     * @apiGroup Vendor Product Question
     * @apiParam (Request body) {Number} productId productId
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count in number or boolean
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *    "message": "Successfully get question list",
     *    "data":"{}"
     *    "status": "1"
     *  }
     * @apiSampleRequest /api/vendor-product-question/question-list
     * @apiErrorExample {json} question error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/question-list')
    @Authorized('vendor')
    public async questionList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('productId') productId: number, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const productDetail = await this.productService.findOne({
            where: { productId },
        });
        if (!productDetail) {
            const errorResponse: any = {
                status: 1,
                message: 'Invalid ProductId',
            };
            return response.status(400).send(errorResponse);
        }
        const select = ['questionId', 'productId', 'question', 'referenceId', 'type', 'isActive'];
        const whereConditions = [];
        const search: any = [
            {
                name: 'productId',
                op: 'where',
                value: productId,
            },
            {
                name: 'question',
                op: 'like',
                value: keyword,
            },
        ];

        const questionList = await this.productQuestionService.list(limit, offset, select, search, whereConditions, count);
        if (count) {
            return response.status(200).send({
                status: 1,
                message: 'Successfully get count',
                data: questionList,
            });
        }
        const promise = questionList.map(async (result: any) => {
            const type = result.type;
            const temp: any = result;
            if (type && type === 1) {
                const vendor = await this.vendorService.findOne({
                    select: ['customerId'],
                    where: { vendorId: result.referenceId },
                });
                const customer = await this.customerService.findOne({
                    select: ['id', 'firstName', 'avatar', 'avatarPath', 'city'],
                    where: { id: vendor.customerId },
                });
                if (customer !== undefined) {
                    temp.postedBy = customer;
                }
            } else if (type && type === 2) {
                const customer = await this.customerService.findOne({
                    select: ['id', 'firstName', 'avatar', 'avatarPath', 'city'],
                    where: { id: result.referenceId },
                });
                if (customer !== undefined) {
                    temp.postedBy = customer;
                }
            }
            const searchQuestion: any = [
                {
                    name: 'questionId',
                    op: 'where',
                    value: result.questionId,
                },
            ];
            const ansCount = await this.productAnswerService.list(0, 0, [], searchQuestion, [], 1);
            temp.answerCount = ansCount;
            return temp;
        });
        const value = await Promise.all(promise);
        const successResponse: any = {
            status: 1,
            message: 'Successfully get all question List',
            data: {
                productDetail,
                questionList: value,
            },
        };
        return response.status(200).send(successResponse);
    }
}

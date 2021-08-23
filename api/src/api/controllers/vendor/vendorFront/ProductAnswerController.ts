/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {
    Post, Body, JsonController, Res, Authorized, Put, Param, Delete, Req, Get, QueryParam, BodyParam
} from 'routing-controllers';
import { CreateAnswer } from './requests/CreateAnswerRequest';
import { ProductQuestionService } from '../../../services/ProductQuestionService';
import { ProductAnswerService } from '../../../services/ProductAnswerService';
import { CustomerService } from '../../../services/CustomerService';
import { ProductAnswer } from '../../../models/ProductAnswer';
import { VendorService } from '../../../services/VendorService';
@JsonController('/vendor-product-answer')
export class ProductAnswerController {

    constructor(
        private productQuestionService: ProductQuestionService,
        private productAnswerService: ProductAnswerService,
        private customerService: CustomerService,
        private vendorService: VendorService
    ) {
    }

    // Create Answer API
    /**
     * @api {post} /api/vendor-product-answer/add-answer Add Answer API
     * @apiGroup Vendor Product Answer
     * @apiParam (Request body) {String} answer
     * @apiParam (Request body) {Number} questionId
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "answer" : "",
     *      "questionId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Answer created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-answer/add-answer
     * @apiErrorExample {json} Answer error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-answer')
    @Authorized('vendor')
    public async createAnswer(@Body({ validate: true }) answerParam: CreateAnswer, @Req() request: any, @Res() response: any): Promise<any> {
        const answer = new ProductAnswer();
        answer.answer = answerParam.answer;
        answer.questionId = +answerParam.questionId;
        answer.type = 1;
        answer.referenceId = request.user.vendorId;
        answer.isActive = 1;
        const answerSaved = await this.productAnswerService.create(answer);
        if (answerSaved !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Answer Posted Successfully',
                data: answerSaved,
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
    // Update Answer Status API
    /**
     * @api {put} /api/vendor-product-answer/update-answer-status/:answerId Update Answer status API
     * @apiGroup Vendor Product Answer
     * @apiParam (Request body) {Number} status status should be 0 | 1
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Status Updated Successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-answer/update-answer-status/:answerId
     * @apiErrorExample {json} answer  error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-answer-status/:answerId')
    @Authorized('vendor')
    public async updateAnswerStatus(@Param('answerId') answerId: number, @BodyParam('status') status: number, @Res() response: any): Promise<any> {
        const answer = await this.productAnswerService.findOne({
            where: {
                answerId,
            },
        });
        if (!answer) {
            const errorResponse: any = {
                status: 0,
                message: 'invalid AnswerId',
            };
            return response.status(400).send(errorResponse);
        }
        answer.isActive = status;
        const answerSave = await this.productAnswerService.create(answer);
        if (answerSave) {
            const successResponse: any = {
                status: 1,
                message: 'Updated Your Status',
                data: answerSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to update your answer status',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // delete Answer API
    /**
     * @api {delete} /api/vendor-product-answer/delete-answer/:answerId Delete Answer API
     * @apiGroup Vendor Product Answer
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Question.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-answer/delete-answer/:answerId
     * @apiErrorExample {json} Answer error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-answer/:answerId')
    @Authorized('vendor')
    public async deleteAnswer(@Param('answerId') answerId: number, @Res() response: any, @Req() request: any): Promise<any> {

        const answer = await this.productAnswerService.findOne({
            where: {
                answerId,
            },
        });
        if (!answer) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid answerId',
            };
            return response.status(400).send(errorResponse);
        }

        const deleteAnswer = await this.productAnswerService.delete(answer);
        if (deleteAnswer) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully deleted Answer',
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
    // Answer List API
    /**
     * @api {get} /api/vendor-product-answer/answer-list Answer List API
     * @apiGroup Vendor Product Answer
     * @apiParam (Request body) {Number} questionId questionId
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count in number or boolean
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *    "message": "Successfully get answer list",
     *    "data":"{}"
     *    "status": "1"
     *  }
     * @apiSampleRequest /api/vendor-product-answer/answer-list
     * @apiErrorExample {json} answer error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/answer-list')
    @Authorized('vendor')
    public async questionList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('questionId') questionId: number, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const question = await this.productQuestionService.findOne({
            where: { questionId },
        });
        if (!question) {
            const errorResponse: any = {
                status: 1,
                message: 'Invalid QuestionId',
            };
            return response.status(400).send(errorResponse);
        }
        const select = ['questionId', 'answerId', 'answer', 'referenceId', 'defaultAnswer', 'createdDate', 'type', 'isActive'];
        const whereConditions = [];
        const search: any = [
            {
                name: 'questionId',
                op: 'where',
                value: questionId,
            },
            {
                name: 'answer',
                op: 'like',
                value: keyword,
            },
        ];

        const answerList = await this.productAnswerService.list(limit, offset, select, search, whereConditions, count);
        if (count) {
            return response.status(200).send({
                status: 1,
                message: 'Successfully get count',
                data: answerList,
            });
        }
        const promise = answerList.map(async (result: any) => {
            const type = result.type;
            const temp: any = result;
            if (type && type === 2) {
                const customer = await this.customerService.findOne({
                    select: ['id', 'firstName', 'avatar', 'avatarPath', 'city'],
                    where: { id: result.referenceId },
                });
                if (customer !== undefined) {
                    temp.postedBy = customer;
                }
            } else if (type && type === 1) {
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
            }
            return temp;
        });
        const value = await Promise.all(promise);
        const successResponse: any = {
            status: 1,
            message: 'Successfully get all question List',
            data: {
                question,
                answerList: value,
            },
        };
        return response.status(200).send(successResponse);

    }
    // Make Default Answer API
    /**
     * @api {put} /api/vendor-product-answer/make-default-answer/:answerId Make Default Answer API
     * @apiGroup Vendor Product Answer
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Updated Successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/vendor-product-answer/make-default-answer/:answerId
     * @apiErrorExample {json} answer  error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/make-default-answer/:answerId')
    @Authorized('vendor')
    public async updateDefaultAnswer(@Param('answerId') answerId: number, @Res() response: any): Promise<any> {
        const answers = await this.productAnswerService.findOne({
            where: {
                answerId,
            },
        });
        if (!answers) {
            const errorResponse: any = {
                status: 0,
                message: 'invalid AnswerId',
            };
            return response.status(400).send(errorResponse);
        }
        const findAnswer = await this.productAnswerService.findAll({ where: { questionId: answers.questionId } });
        if (findAnswer) {
            for (const answer of findAnswer) {
                const ans = await this.productAnswerService.findOne({
                    where: {
                        answerId: answer.answerId,
                    },
                });
                ans.defaultAnswer = 0;
                await this.productAnswerService.create(ans);
            }
        }
        answers.defaultAnswer = 1;
        const answerSave = await this.productAnswerService.create(answers);
        if (answerSave) {
            const successResponse: any = {
                status: 1,
                message: 'Marked as default Answer',
                data: answerSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to update',
            };
            return response.status(400).send(errorResponse);
        }
    }
}

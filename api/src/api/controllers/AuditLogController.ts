/*
 * spurtcommerce API
 * version 4.5
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import moment from 'moment';
import 'reflect-metadata';
import {
    Authorized,
    Get,
    JsonController,
    QueryParam,
    Res,
} from 'routing-controllers';
import { AuditLogService } from '../services/AuditLogService';

@JsonController('/auditlog')
export class AttributeGroupController {
    constructor(private auditLogService: AuditLogService) {
    }
    /**
     * @api {get} /api/auditlog/auditLog-list Audit Log list API
     * @apiGroup Audit Log
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} module module
     * @apiParam (Request body) {String} actionBy actionBy
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get Attribute Group list API",
     * }
     * @apiSampleRequest /api/auditlog/auditLog-list
     * @apiErrorExample {json} Attribute Group error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/auditLog-list')
    @Authorized()
    public async auditLogList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('module') module: string, @QueryParam('actionBy') actionBy: number, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = [];
        const search = [];
        const whereCondition = [];
        const sort = [{
            name: 'created_date',
            order: 'DESC',
        }];
        if (keyword) {
            const data: any = keyword.split(' ');
            const today = new Date();
            if (data[1] === 'days') {
                today.setDate(today.getDate() - data[0]);
                const date = moment(today).format('YYYY-MM-DD');
                whereCondition.push({
                    name: 'created_date',
                    op: 'moreThan',
                    value: date,
                });
            }
            if (data[1] === 'month') {
                today.setMonth(today.getMonth() - data[0]);
                const month =  moment(today).format('YYYY-MM-DD');
                whereCondition.push({
                    name: 'created_date',
                    op: 'moreThan',
                    value: month,
                });
            }
        }
        if (module) {
            whereCondition.push({
                name: 'AuditLog.module',
                op: 'LIKE',
                value: module,
            });
        }
        if (actionBy) {
            whereCondition.push ({
                name: 'AuditLog.userId',
                op: 'where',
                value: actionBy,
            });
        }
        const auditLog: any = await this.auditLogService.listByQueryBuilder(limit, offset, select, whereCondition, search, [], 0, sort, count);
        // const aa = JSON.parse(auditLog[0].browserInfo);
        if (count) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully got a audit log count.',
                data: auditLog,
            };
            return response.status(200).send(successResponse);
        } else {
            const log = await auditLog.map(async (value: any) => {
                value.browserInfo = JSON.parse(value.browserInfo);
                const temp = value;
                return temp;
            });
            const result = await Promise.all(log);
            const successResponse: any = {
                status: 1,
                message: 'Successfully got a audit log list.',
                data: result,
            };
            return response.status(200).send(successResponse);
        }
    }
    /**
     * @api {get} /api/auditlog/module-list Module Log list API
     * @apiGroup Audit Log
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get Attribute Group list API",
     * }
     * @apiSampleRequest /api/auditlog/module-list
     * @apiErrorExample {json} Attribute Group error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/module-list')
    @Authorized()
    public async moduleList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['AuditLog.module'];
        const search = [];
        const whereCondition = [];
        const sort = [{
            name: 'created_date',
            order: 'DESC',
        }];
        const groupBy = [
            {
                name: 'AuditLog.module',
            },
        ];
        const moduleLog = await this.auditLogService.listByQueryBuilder(limit, offset, select, whereCondition, search, [], groupBy, sort, count);
        if (count) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully got a module log count.',
                data: moduleLog,
            };
            return response.status(200).send(successResponse);
        } else {
            const successResponse: any = {
                status: 1,
                message: 'Successfully got a module log list.',
                data: moduleLog,
            };
            return response.status(200).send(successResponse);
        }
    }
}

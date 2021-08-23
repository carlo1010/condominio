import 'reflect-metadata';
import {
    Get, Put, Post, Delete, Body, JsonController, Authorized, Res, Req, QueryParam,Param
} from 'routing-controllers';
import { Piano } from '../models/Piano';
import { PianoService } from '../services/PianoService';
import { CreatePiano } from './requests/CreatePianoRequest';
import { UpdatePiano } from './requests/UpdatePianoRequest';

@JsonController('condominio')
export class RighiController {
    constructor(private pianoService: PianoService) {
    }

    // Create Piano API
    /**
     * @api {post} /api/condominio/add-piano Create Piano API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} numPiano Piano numPiano
     * @apiParam (Request body) {String} ordinamento Piano ordinamento
     * @apiParam (Request body) {number} stato Piano stato
     * @apiParamExample {json} Input
     * {
     *      "numPiano": "",
     *      "ordinamento" : "",
     *      "stato" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Piano creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-piano
     * @apiErrorExample {json} Piano error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-piano')
    @Authorized()
    public async addCountry(@Body({ validate: true }) pianoParam: CreatePiano, @Res() response: any): Promise<any> {
        const existCountry = await this.pianoService.findOne({
            where: {
                numPiano: pianoParam.numPiano,
                ordinamento: pianoParam.ordinamento,
                stato: pianoParam.stato,
            },
        });
        if (existCountry) {
            const errorResponse: any = {
                status: 0,
                message: 'you already added this country.',
            };
            return response.status(200).send(errorResponse);
        }
        const rigPiano = new Piano();
        rigPiano.numPiano = pianoParam.numPiano;
        rigPiano.ordinamento = pianoParam.ordinamento;
        rigPiano.stato = pianoParam.stato;
        const rigPianoSave = await this.pianoService.create(rigPiano);
        if (rigPianoSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully added new country.',
                data: rigPianoSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Unable to add the country. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Country API    
    /**
     * @api {put} /api/condominio/update-piano:id Update Piano API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} pianoId Piano pianoId
     * @apiParam (Request body) {String} numPiano Piano numPiano
     * @apiParam (Request body) {Number} ordinamento Piano ordinamento
     * @apiParam (Request body) {Number} stato Piano stato
     * @apiParamExample {json} Input
     * {
     *      "pianoId" : "",
     *      "numPiano" : "",
     *      "ordinamento" : "",
     *      "stato" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Piano.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-country/:id
     * @apiErrorExample {json} Piano error
     * HTTP/1.1 500 Internal Server Error
     */
     @Put('/update-piano/:id')
     @Authorized()
     public async updateCountry(@Body({ validate: true }) pianoParam: UpdatePiano, @Res() response: any): Promise<any> {
         const piano = await this.pianoService.findOne({
             where: {
                 pianoId: pianoParam.pianoId,
             },
         });
         if (!piano) {
             const errorResponse: any = {
                 status: 0,
                 message: 'Invalid pianoId',
             };
             return response.status(400).send(errorResponse);
         }
         piano.numPiano = pianoParam.numPiano;
         piano.ordinamento = pianoParam.ordinamento;
         piano.stato = pianoParam.stato;
         const pianoSave = await this.pianoService.create(piano);
         if (pianoSave !== undefined) {
             const successResponse: any = {
                 status: 1,
                 message: 'Successfully updated piano',
                 data: pianoSave,
             };
             return response.status(200).send(successResponse);
         } else {
             const errorResponse: any = {
                 status: 0,
                 message: 'unable to update piano',
             };
             return response.status(400).send(errorResponse);
         }
     }
 
     // Country List API
     /**
      * @api {get} /api/condominio/pianolist Piano List API
      * @apiGroup Piano
      * @apiHeader {String} Authorization
      * @apiParam (Request body) {Number} limit limit
      * @apiParam (Request body) {Number} offset offset
      * @apiParam (Request body) {String} keyword keyword
      * @apiParam (Request body) {String} status status
      * @apiParam (Request body) {Number} count count should be number or boolean
      * @apiSuccessExample {json} Success
      * HTTP/1.1 200 OK
      * {
      *      "message": "Successfully got country list",
      *      "data":{
      *      "pianoId"
      *      "numPiano"
      *      "ordinamento"
      *      "stato"
      *      }
      *      "status": "1"
      * }
      * @apiSampleRequest /api/condominio/pianolist 
      * @apiErrorExample {json} Piano error
      * HTTP/1.1 500 Internal Server Error
      */
     @Get('/pianolist')
     @Authorized()
     public async countryList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
         const select = ['pianoId', 'numPiano', 'ordinamento', 'stato'];
         const search = [
             {
                 name: 'numPiano',
                 op: 'like',
                 value: keyword,
             }, {
                 name: 'stato',
                 op: 'like',
                 value: status,
             },
 
         ];
         const WhereConditions = [];
         const pianoList = await this.pianoService.list(limit, offset, select, search, WhereConditions, count);
         if (pianoList) {
             const successResponse: any = {
                 status: 1,
                 message: 'Successfully get piano List',
                 data: pianoList,
             };
             return response.status(200).send(successResponse);
         } else {
             const errorResponse: any = {
                 status: 0,
                 message: 'unable to get pianoList',
             };
             return response.status(400).send(errorResponse);
         }
     }
 
     // Delete Country API
     /**
      * @api {delete} /api/condominio/delete-paino/:id Delete Country API
      * @apiGroup Piano
      * @apiHeader {String} Authorization
      * @apiParamExample {json} Input
      * {
      *      "pianoId" : "",
      * }
      * @apiSuccessExample {json} Success
      * HTTP/1.1 200 OK
      * {
      *      "message": "Successfully deleted Piano.",
      *      "status": "1"
      * }
      * @apiSampleRequest /api/condominio/delete-paino/:id 
      * @apiErrorExample {json} Piano error
      * HTTP/1.1 500 Internal Server Error
      */
     @Delete('/delete-piano/:id')
     @Authorized()
     public async deleteCountry(@Param('id') id: number, @Res() response: any, @Req() request: any): Promise<any> {
 
         const piano = await this.pianoService.findOne({
             where: {
                 pianoId: id,
             },
         });
         if (!piano) {
             const errorResponse: any = {
                 status: 0,
                 message: 'Invalid pianoId',
             };
             return response.status(400).send(errorResponse);
         }
         const deletePiano = await this.pianoService.delete(piano);
         if (deletePiano) {
             const successResponse: any = {
                 status: 1,
                 message: 'Successfully deleted piano.',
             };
             return response.status(200).send(successResponse);
         } else {
             const errorResponse: any = {
                 status: 0,
                 message: 'unable to delete piano',
             };
             return response.status(400).send(errorResponse);
         }
     }





}
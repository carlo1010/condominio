import 'reflect-metadata';
import {
    Get, Put, Post, Delete, Body, JsonController, Authorized, Res, Req, QueryParam, Param
} from 'routing-controllers';
import { Piano } from '../models/Piano';
import { PianoService } from '../services/PianoService';
import { CreatePiano } from './requests/CreatePianoRequest';
import { UpdatePiano } from './requests/UpdatePianoRequest';
import { DeletePiano } from './requests/DeletePianoRequest';
import { Fornitore } from '../models/Fornitore';
import { FornitoreService } from '../services/FornitoreService';
import { CreateFornitore } from './requests/CreateFornitoreRequest';
import { UpdateFornitore } from './requests/UpdateFornitoreRequest';
import { DeleteFornitore } from './requests/DeleteFornitoreRequest';
import { TipoSpesa } from '../models/TipoSpesa';
import { TipoSpesaService } from '../services/TipoSpesaService';
import { CreateTipoSpesa } from './requests/CreateTipoSpesaRequest';
import { UpdateTipoSpesa } from './requests/UpdateTipoSpesaRequest';
import { DeleteTipoSpesa } from './requests/DeleteTipoSpesaRequest';
import { Generale } from '../models/Generale';
import { GeneraleService } from '../services/GeneraleService';
import { CreateGenerale } from './requests/CreateGeneraleRequest';
import { UpdateGenerale } from './requests/UpdateGeneraleRequest';
import { DeleteGenerale } from './requests/DeleteGeneraleRequest';
import { FotovoltaicoService } from '../services/FotovoltaicoService';
import { ParkPubService } from '../services/ParkPubService';
import { Park122Service } from '../services/Park122Service';
import { CreateFotovoltaico } from './requests/CreateFotovoltaicoRequest';
import { Fotovoltaico } from '../models/Fotovoltaico';
import { UpdateFotovoltaico } from './requests/UpdateFotovoltaicoRequest';
import { CreatePark122 } from './requests/CreatePark122Request';
import { Park122 } from '../models/Park122';
import { UpdatePark122 } from './requests/UpdatePark122Request';
import { ParkPub } from '../models/ParkPub';
import { CreateParkPub } from './requests/CreateParkPubRequest';
import { UpdateParkPub } from './requests/UpdateParkPubRequest';
import { ContoCorrente } from '../models/ContoCorrente';
import { ContoCorrenteService } from '../services/ContoCorrenteService';
import { CreateContoCorrente } from './requests/CreateContoCorrenteRequest';
import { DeleteContoCorrente } from './requests/DeleteContoCorrenteRequest';
import { UpdateContoCorrente } from './requests/UpdateContoCorrenteRequest';

@JsonController('/condominio')
export class CondominioController {
    constructor(
        private generaleService: GeneraleService,
        private pianoService: PianoService,
        private fornitoreService: FornitoreService,
        private tipoSpesaService: TipoSpesaService,
        private fotovoltaicoService: FotovoltaicoService,
        private park122Service: Park122Service,
        private parkPubService: ParkPubService,
        private contoCorrenteService: ContoCorrenteService,
    ) {
    }

    // Create Sub API
    /**
     * @api {post} /api/condominio/add-sub Create Generale API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} generaleId Generale generaleId
     * @apiParam (Request body) {number} pianoId Generale piano
     * @apiParam (Request body) {String} mqCatastali Generale mqCatastali
     * @apiParam (Request body) {number} millesimi Generale millesimi
     * @apiParamExample {json} Input
     * {
     *      "generaleId": "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Sub creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-sub
     * @apiErrorExample {json} Generale error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-sub')
    @Authorized()
    public async addSub(@Body({ validate: true }) generaleParam: CreateGenerale, @Res() response: any): Promise<any> {
        const existSub = await this.generaleService.findOne({
            where: {
                generaleId: generaleParam.generaleId,
            },
        });
        if (existSub) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo sub.',
            };
            return response.status(200).send(errorResponse);
        }
        const newGenerale: any = new Generale();
        newGenerale.generaleId = generaleParam.generaleId;
        newGenerale.pianoId = generaleParam.pianoId ? generaleParam.pianoId : 0;
        newGenerale.mqCatastali = generaleParam.mqCatastali;
        newGenerale.millesimi = generaleParam.millesimi;
        const generaleSave = await this.pianoService.create(newGenerale);
        if (generaleSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo sub.',
                data: generaleSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere sub. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Sub API
    /**
     * @api {put} /api/condominio/update-sub:id Update Generale API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} generaleId Piano generaleId
     * @apiParam (Request body) {String} piano Piano piano
     * @apiParam (Request body) {Number} mqCatastali Piano mqCatastali
     * @apiParam (Request body) {Number} millesimi Piano millesimi
     * @apiParamExample {json} Input
     * {
     *      "piano" : "",
     *      "numPiano" : "",
     *      "ordinamento" : "",
     *      "stato" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo sub.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-sub/:id
     * @apiErrorExample {json} Generale error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-sub/:id')
    @Authorized()
    public async updateSub(@Body({ validate: true }) subParam: UpdateGenerale, @Res() response: any): Promise<any> {
        const updateSub = await this.generaleService.findOne({
            where: {
                generaleId: subParam.generaleId,
            },
        });
        if (!updateSub) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido pianoId',
            };
            return response.status(400).send(errorResponse);
        }
        updateSub.generaleId = subParam.generaleId;
        updateSub.pianoId = subParam.pianoId ? subParam.pianoId : updateSub.pianoId;
        updateSub.mqCatastali = subParam.mqCatastali;
        updateSub.millesimi = subParam.millesimi;
        const subSave = await this.pianoService.create(updateSub);
        if (subSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiornato con successo piano',
                data: subSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiornare piano',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Generale List API
    /**
     * @api {get} /api/condominio/sublist Piano List API
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
     *      "message": "Successfully got sub list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/sublist
     * @apiErrorExample {json} Generake error
     * HTTP/1.1 500 Internal Server Error
     */
    //    SELECT condominio_piano.num_piano,condominio_sub.mq_catastali,condominio_sub.millesimi FROM condominio_sub INNER JOIN condominio_piano ON condominio_piano.id_piano = condominio_sub.piano
    @Get('/sublist')
    @Authorized()
    public async subList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['generaleId', 'pianoId', 'mqCatastali', 'millesimi'];
        const search = [
            {
                name: 'generaleId',
                op: 'like',
                value: keyword,
            },
        ];
        const WhereConditions = [

        ];
        const subList = await this.generaleService.list(limit, offset, select, search, WhereConditions, count);
        if (subList) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo sub List',
                data: subList,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere sub list',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Sub API
    /**
     * @api {delete} /api/condominio/delete-sub/:id Delete Generale API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pianoId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo sub.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-paino/:id
     * @apiErrorExample {json} Generale error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-sub/:id')
    @Authorized()
    public async deleteSub(@Body({ validate: true }) delSub: DeleteGenerale, @Res() response: any, @Req() request: any): Promise<Piano> {
        const generaleId = await this.generaleService.findOne({
            where: {
                generaleId: delSub.generaleId,
            },
        });
        if (!generaleId) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido generaleId',
            };
            return response.status(400).send(errorResponse);
        }

        const deleteSub = await this.pianoService.delete(generaleId);
        if (!deleteSub) {
            const successResponse: any = {
                status: 1,
                message: 'Eliminato con successo sub.',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile eliminare sub. ',
            };
            return response.status(400).send(errorResponse);
        }
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
    public async addPiano(@Body({ validate: true }) pianoParam: CreatePiano, @Res() response: any): Promise<any> {
        const existPiano = await this.pianoService.findOne({
            where: {
                numPiano: pianoParam.numPiano,
                ordinamento: pianoParam.ordinamento,
                stato: pianoParam.stato,
            },
        });
        if (existPiano) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo piano.',
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
                message: 'Aggiunto con successo un nuovo piano.',
                data: rigPianoSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere piano. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Piano API
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
     * HTTP/1.1 200 OK      id: number, @Res() response: any, @Req() request: any): Promise<Piano> {

     * {
     *      "message": "Aggiornato con successo Piano.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-piano/:id
     * @apiErrorExample {json} Piano error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-piano/:id')
    @Authorized()
    public async updatePiano(@Body({ validate: true }) pianoParam: UpdatePiano, @Res() response: any, @Req() request: any): Promise<Piano> {
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
                message: 'Successfully updated the piano.',
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

    // piano List API
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
     *      "message": "Successfully got piano list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/pianolist
     * @apiErrorExample {json} Piano error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/pianolist')
    @Authorized()
    public async pianoList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
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
        const pianoList: any = await this.pianoService.list(limit, offset, select, search, WhereConditions, count);
        const successResponse: any = {
            status: 1,
            message: 'Hai ottenuto con successo elenco completo dei piani.',
            data: pianoList,
        };
        return response.status(200).send(successResponse);
    }

    // Delete piano API
    /**
     * @api {delete} /api/condominio/delete-paino/:id Delete piano API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pianoId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo Piano.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-paino/:id
     * @apiErrorExample {json} Piano error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-piano/:id')
    @Authorized()
    public async deletePiano(@Param('id') id: number, @Res() response: any, @Req() request: any): Promise<Piano> {
        const PianoData = await this.pianoService.findOne({
            where: {
                pianoId: id,
            },
        });
        if (!PianoData) {
            const errorResponse: any = {
                status: 0,
                message: 'codice non valido',
            };
            return response.status(400).send(errorResponse);
        }
        const deletePiano: any = await this.pianoService.delete(PianoData.pianoId);
        if (!deletePiano) {
            const successResponse: any = {
                status: 1,
                message: 'Riga eliminata con successo',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'impossibile eliminare riga',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Multiple Piano API
    /**
     * @api {post} /api/condominio/delete-piano Delete Multiple piano API
     * @apiGroup Righi
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} pianoId  pianoId
     * @apiParamExample {json} Input
     * {
     * "pianoId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     * "message": "Successfully deleted piano.",
     * "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-piano
     * @apiErrorExample {json} PianoDelete error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/delete-piano')
    @Authorized()
    public async deleteMultiplePiano(@Body({ validate: true }) deletePiano: DeletePiano, @Res() response: any, @Req() request: any): Promise<any> {
        const codiceNo = deletePiano.pianoId.toString();
        const codice = codiceNo.split(',');
        for (const id of codice) {
            const dataId = await this.pianoService.findOne(id);
            if (dataId === undefined) {
                const errorResponse: any = {
                    status: 0,
                    message: 'PianoId non valido',
                };
                return response.status(400).send(errorResponse);
            } else {
                const deletePianoId = parseInt(id, 10);
                await this.pianoService.delete(deletePianoId);
            }
        }
        const successResponse: any = {
            status: 1,
            message: 'Piani eliminate con successo',
        };
        return response.status(200).send(successResponse);
    }

    // Create Fornitore API
    /**
     * @api {post} /api/condominio/add-fornitore Create Fornitore API
     * @apiGroup Fornitore
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} nomeCompagnia Fornitore nomeCompagnia
     * @apiParam (Request body) {String} email Fornitore email
     * @apiParam (Request body) {number} infoBanca Fornitore infoBanca
     * @apiParamExample {json} Input
     * {
     *      "nomeCompagnia": "",
     *      "email" : "",
     *      "infoBanca" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Piano creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-fornitore
     * @apiErrorExample {json} Piano error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-fornitore')
    @Authorized()
    public async addFornitore(@Body({ validate: true }) fornitoreParam: CreateFornitore, @Res() response: any): Promise<any> {
        const existFornitore = await this.fornitoreService.findOne({
            where: {
                nomeCompagnia: fornitoreParam.nomeCompagnia,
                email: fornitoreParam.email,
                infoBanca: fornitoreParam.infoBanca,
            },
        });
        if (existFornitore) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo fornitore.',
            };
            return response.status(200).send(errorResponse);
        }
        const fornitore = new Fornitore();
        fornitore.nomeCompagnia = fornitoreParam.nomeCompagnia;
        fornitore.email = fornitoreParam.email;
        fornitore.infoBanca = fornitoreParam.infoBanca;
        const fortitoreSave = await this.fornitoreService.create(fornitore);
        if (fortitoreSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo fornitore.',
                data: fortitoreSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere fornitore. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Fornitore API
    /**
     * @api {put} /api/condominio/update-fornitore:id Update Fornitore API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} fornitoreId Fornitore fornitoreId
     * @apiParam (Request body) {String} nomeCompagnia Fornitore nomeCompagnia
     * @apiParam (Request body) {Number} email Fornitore email
     * @apiParam (Request body) {Number} infoBanca Piano infoBanca
     * @apiParamExample {json} Input
     * {
     *      "fornitoreId" : "",
     *      "nomeCompagnia" : "",
     *      "email" : "",
     *      "infoBanca" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo Fornitore.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-fornitore/:id
     * @apiErrorExample {json} Fornitore error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-fornitore/:id')
    @Authorized()
    public async updateFornitore(@Body({ validate: true }) fornitoreParam: UpdateFornitore, @Res() response: any): Promise<any> {
        const fornitoreId = await this.fornitoreService.findOne({
            where: {
                fornitoreId: fornitoreParam.fornitoreId,
            },
        });
        if (!fornitoreId) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido fornitoreId',
            };
            return response.status(400).send(errorResponse);
        }
        fornitoreId.nomeCompagnia = fornitoreParam.nomeCompagnia;
        fornitoreId.email = fornitoreParam.email;
        fornitoreId.infoBanca = fornitoreParam.infoBanca;
        const fornitoreSave = await this.fornitoreService.create(fornitoreId);
        if (fornitoreSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiornato con successo fornitore',
                data: fornitoreSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiornare fornitore',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Fornitore List API
    /**
     * @api {get} /api/condominio/pianolist Fornitore List API
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
     *      "message": "Successfully got fornitore list",
     *      "data":{
     *      "fornitoreId"
     *      "nomeCompagnia"
     *      "email"
     *      "infoBanca"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/pianolist
     * @apiErrorExample {json} Fornitore error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/fornitorelist')
    @Authorized()
    public async fornitoreList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['fornitoreId', 'nomeCompagnia', 'email', 'infoBanca'];
        const search = [
            {
                name: 'nomeCompagnia',
                op: 'like',
                value: keyword,
            },
        ];
        const WhereConditions = [];
        const fornitoreList = await this.fornitoreService.list(limit, offset, select, search, WhereConditions, count);
        if (fornitoreList) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo fornitoreList',
                data: fornitoreList,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere fornitoreList',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Fornitore API
    /**
     * @api {delete} /api/condominio/delete-fornitore/:id Delete Fornitore API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "fornitoreId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo Fornitore.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-fornitore/:id
     * @apiErrorExample {json} Fornitore error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-fornitore/:id')
    @Authorized()
    public async deleteFornitore(@Param('id') id: number, @Res() response: any, @Req() request: any): Promise<Piano> {
        const FornitoreData = await this.fornitoreService.findOne({
            where: {
                fornitoreId: id,
            },
        });
        if (!FornitoreData) {
            const errorResponse: any = {
                status: 0,
                message: 'codice non valido',
            };
            return response.status(400).send(errorResponse);
        }
        const deleteFornitore: any = await this.fornitoreService.delete(FornitoreData.fornitoreId);
        if (!deleteFornitore) {
            const successResponse: any = {
                status: 1,
                message: 'Fornitore eliminata con successo',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'impossibile eliminare Fornitore',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete  multi Fornitore API
    /**
     * @api {delete} /api/condominio/delete-fornitore/:id Delete Fornitore API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "fornitoreId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo Fornitore.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-fornitore/:id
     * @apiErrorExample {json} Fornitore error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-piano')
    @Authorized()
    public async deleteMultipleFornitore(@Body({ validate: true }) fornitore: DeleteFornitore, @Res() response: any, @Req() request: any): Promise<Fornitore> {
        const fornitoreId = await this.fornitoreService.findOne({
            where: {
                fornitoreId: fornitore.fornitoreId,
            },
        });
        if (!fornitoreId) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido fornitoreId',
            };
            return response.status(400).send(errorResponse);
        }

        const deleteFornitore = await this.pianoService.delete(fornitoreId);
        if (!deleteFornitore) {
            const successResponse: any = {
                status: 1,
                message: 'Eliminato con successo fornitore.',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile eliminare fornitore. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Create Tipo Spesa API
    /**
     * @api {post} /api/condominio/add-tipo-spesa Create Tipo Spesa API
     * @apiGroup Fornitore
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} tipoSpesa TipoSpesa tipoSpesa
     * @apiParam (Request body) {String} causale TipoSpesa causale
     * @apiParamExample {json} Input
     * {
     *      "tipoSpesa": "",
     *      "causale" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Tipo Spesa creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-tipo-spesa
     * @apiErrorExample {json} Tipo Spesa error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-tipo-spesa')
    @Authorized()
    public async addTipoSpesa(@Body({ validate: true }) tipoSpesaParam: CreateTipoSpesa, @Res() response: any): Promise<any> {
        const existTipoSpesa = await this.tipoSpesaService.findOne({
            where: {
                tipoSpesa: tipoSpesaParam.tipoSpesa,
                causale: tipoSpesaParam.causale,
            },
        });
        if (existTipoSpesa) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo tipoSpesa.',
            };
            return response.status(200).send(errorResponse);
        }
        const tipoSpesa = new TipoSpesa();
        tipoSpesa.tipoSpesa = tipoSpesaParam.tipoSpesa;
        tipoSpesa.causale = tipoSpesaParam.causale;
        const tipoSpesaSave = await this.tipoSpesaService.create(tipoSpesa);
        if (tipoSpesaSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo tipoSpesa.',
                data: tipoSpesaSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere tipoSpesa. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Tipo Spesa API
    /**
     * @api {put} /api/condominio/update-tipo-spesa:id Update Tipo Spesa API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} tipoSpesaId Fornitore tipoSpesaId
     * @apiParam (Request body) {String} tipoSpesa Fornitore tipoSpesa
     * @apiParam (Request body) {Number} causale Fornitore causale
     * @apiParamExample {json} Input
     * {
     *      "tipoSpesaId" : "",
     *      "tipoSpesa" : "",
     *      "causale" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo tipo spesa.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-tipo-spesa/:id
     * @apiErrorExample {json} Tipo spesa error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-tipo-spesa/:id')
    @Authorized()
    public async updateTipoSpesa(@Body({ validate: true }) tipoSpesaParam: UpdateTipoSpesa, @Res() response: any): Promise<any> {
        const tipoSpesaId = await this.tipoSpesaService.findOne({
            where: {
                tipoSpesaId: tipoSpesaParam.tipoSpesaId,
            },
        });
        if (!tipoSpesaId) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido fornitoreId',
            };
            return response.status(400).send(errorResponse);
        }
        tipoSpesaId.tipoSpesa = tipoSpesaParam.tipoSpesa;
        tipoSpesaId.causale = tipoSpesaParam.causale;
        const tipoSpesaSave = await this.tipoSpesaService.create(tipoSpesaId);
        if (tipoSpesaSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiornato con successo tipo spesa',
                data: tipoSpesaSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiornare tipo spesa',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Tipo Spesa List API
    /**
     * @api {get} /api/condominio/tipo-spesa-list Tipo Spesa List API
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
     *      "message": "Successfully got tipo spesa list",
     *      "data":{
     *      "tipoSpesaId"
     *      "tipoSpesa"
     *      "causale"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/tipo-spesa-list
     * @apiErrorExample {json} Tipo spesa error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/tipo-spesa-list')
    @Authorized()
    public async tipoSpesaList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['tipoSpesaId', 'tipoSpesa', 'causale'];
        const search = [
            {
                name: 'tipoSpesa',
                op: 'like',
                value: keyword,
            },
        ];
        const WhereConditions = [];
        const tipoSpesaList = await this.tipoSpesaService.list(limit, offset, select, search, WhereConditions, count);
        if (tipoSpesaList) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo tipo spesa list',
                data: tipoSpesaList,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere tipo spesa list',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Tipo Spesa API
    /**
     * @api {delete} /api/condominio/delete-tipo-spesa/:id Delete Tipo Spesa API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "tipoSpesaId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo Tipo Spesa.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-tipo-spesa/:id
     * @apiErrorExample {json} Tipo Spesa error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-tipo-spesa/:id')
    @Authorized()
    public async deleteTipoSpesa(@Body({ validate: true }) tipoSpesa: DeleteTipoSpesa, @Res() response: any, @Req() request: any): Promise<TipoSpesa> {

        const tipoSpesaId = await this.tipoSpesaService.findOne({
            where: {
                tipoSpesaId: tipoSpesa.tipoSpesaId,
            },
        });
        if (!tipoSpesaId) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido tipoSpesaId',
            };
            return response.status(400).send(errorResponse);
        }

        const deleteTipoSpesa = await this.tipoSpesaService.delete(tipoSpesaId);
        if (!deleteTipoSpesa) {
            const successResponse: any = {
                status: 1,
                message: 'Eliminato con successo tipo spesa.',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile eliminare tipo spesa. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Create Sub Fotovoltaico API
    /**
     * @api {post} /api/condominio/add-sub-fotovoltaico Create Sub Fotovoltaico API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} fotovoltaicoId Fotovoltaico fotovoltaicoId
     * @apiParam (Request body) {number} pianoId Fotovoltaico piano
     * @apiParam (Request body) {String} mqCatastali Fotovoltaico mqCatastali
     * @apiParam (Request body) {number} millesimi Fotovoltaico millesimi
     * @apiParamExample {json} Input
     * {
     *      "fotovoltaicoId": "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Sub creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-sub-fotovoltaico
     * @apiErrorExample {json} Sub Fotovoltaico error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-sub-fotovoltaico')
    @Authorized()
    public async addSubFotovoltaico(@Body({ validate: true }) fotovoltaicoParam: CreateFotovoltaico, @Res() response: any): Promise<any> {
        const existSubFotovoltico = await this.fotovoltaicoService.findOne({
            where: {
                fotovoltaicoId: fotovoltaicoParam.fotovoltaicoId,
            },
        });
        if (existSubFotovoltico) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo sub.',
            };
            return response.status(200).send(errorResponse);
        }
        const newFotovoltaico: any = new Fotovoltaico();
        newFotovoltaico.fotovoltaicoId = fotovoltaicoParam.fotovoltaicoId;
        newFotovoltaico.pianoId = fotovoltaicoParam.pianoId ? fotovoltaicoParam.pianoId : 0;
        newFotovoltaico.mqCatastali = fotovoltaicoParam.mqCatastali;
        newFotovoltaico.millesimi = fotovoltaicoParam.millesimi;
        const fotovoltaicoSave = await this.fotovoltaicoService.create(newFotovoltaico);
        if (fotovoltaicoSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo sub.',
                data: fotovoltaicoSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere sub. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Sub Fotovoltaico API
    /**
     * @api {put} /api/condominio/update-sub-fotovoltaico:id Update Sub Fotovoltaico API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} fotovoltaicoId Fotovoltaico fotovoltaicoId
     * @apiParam (Request body) {String} pianoId Fotovoltaico pianoId
     * @apiParam (Request body) {Number} mqCatastali Fotovoltaico mqCatastali
     * @apiParam (Request body) {Number} millesimi Fotovoltaico millesimi
     * @apiParamExample {json} Input
     * {
     *      "fotovoltaicoId" : "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo sub fotovoltaico.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-sub-fotovoltaico/:id
     * @apiErrorExample {json} Sub Fotovoltaico error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-sub-fotovoltaico/:id')
    @Authorized()
    public async updateSubFotovoltaico(@Body({ validate: true }) fotovoltaicoParam: UpdateFotovoltaico, @Res() response: any): Promise<any> {
        const updateFotovoltaico = await this.fotovoltaicoService.findOne({
            where: {
                fotovoltaicoId: fotovoltaicoParam.fotovoltaicoId,
            },
        });
        if (!updateFotovoltaico) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido pianoId',
            };
            return response.status(400).send(errorResponse);
        }
        updateFotovoltaico.fotovoltaicoId = fotovoltaicoParam.fotovoltaicoId;
        updateFotovoltaico.piano = fotovoltaicoParam.pianoId ? fotovoltaicoParam.pianoId : updateFotovoltaico.piano;
        updateFotovoltaico.mqCatastali = fotovoltaicoParam.mqCatastali;
        updateFotovoltaico.millesimi = fotovoltaicoParam.millesimi;
        const fotovoltaicoSave = await this.fotovoltaicoService.create(updateFotovoltaico);
        if (fotovoltaicoSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiornato con successo piano',
                data: fotovoltaicoSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiornare piano',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Fotovoltaico List API
    /**
     * @api {get} /api/condominio/sub-fotovoltaicolist Sub Fotovoltaico List API
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
     *      "message": "Successfully got sub fotovoltaico list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/sub-fotovoltaicolist
     * @apiErrorExample {json} Generake error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/sub-fotovoltaicolist')
    @Authorized()
    public async subListFotovoltaico(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['fotovoltaicoId', 'pianoId', 'mqCatastali', 'millesimi'];
        const search = [
            {
                name: 'fotovoltaicoId',
                op: 'like',
                value: keyword,
            },
        ];
        const WhereConditions = [];
        const subListFotovoltaico = await this.fotovoltaicoService.list(limit, offset, select, search, WhereConditions, count);
        if (subListFotovoltaico) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo sub Fotovoltaico List',
                data: subListFotovoltaico,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere sub Fotovoltaico list',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Sub Fotovoltaico API
    /**
     * @api {delete} /api/condominio/delete-sub-fotovoltaico/:id Delete sub fotovoltaico API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pianoId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo sub fotovoltaico.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-sub-fotovoltaico/:id
     * @apiErrorExample {json} Fotovoltaico error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-sub-fotovoltaico/:id')
    @Authorized()
    public async deleteSubFotovoltaico(@Param('id') id: number, @Res() response: any, @Req() request: any): Promise<Fotovoltaico> {
        const FotovoltaicoData = await this.fotovoltaicoService.findOne({
            where: {
                fotovoltaicoId: id,
            },
        });
        if (!FotovoltaicoData) {
            const errorResponse: any = {
                status: 0,
                message: 'fotovoltaicoId non valido',
            };
            return response.status(400).send(errorResponse);
        }
        const deleteFotovoltaico: any = await this.fotovoltaicoService.delete(FotovoltaicoData.fotovoltaicoId);
        if (!deleteFotovoltaico) {
            const successResponse: any = {
                status: 1,
                message: 'Riga eliminata con successo',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'impossibile eliminare riga',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Create Park122 API
    /**
     * @api {post} /api/condominio/add-sub-park122 Create Sub Park122 API
     * @apiGroup Park122
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} park122Id Park122 park122Id
     * @apiParam (Request body) {number} pianoId Park122 pianoId
     * @apiParam (Request body) {String} mqCatastali Park122 mqCatastali
     * @apiParam (Request body) {number} millesimi Park122 millesimi
     * @apiParamExample {json} Input
     * {
     *      "park122Id": "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Sub Parcheggio legge 122 creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-sub-park122
     * @apiErrorExample {json} Sub Park122 error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-sub-park122')
    @Authorized()
    public async addSubPark122(@Body({ validate: true }) park122Param: CreatePark122, @Res() response: any): Promise<any> {
        const existSubPark122 = await this.park122Service.findOne({
            where: {
                park122Id: park122Param.park122Id,
            },
        });
        if (existSubPark122) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo sub.',
            };
            return response.status(200).send(errorResponse);
        }
        const newPark122: any = new Park122();
        newPark122.park122Id = park122Param.park122Id;
        newPark122.pianoId = park122Param.pianoId ? park122Param.pianoId : 0;
        newPark122.mqCatastali = park122Param.mqCatastali;
        newPark122.millesimi = park122Param.millesimi;
        const Park122Save = await this.park122Service.create(newPark122);
        if (Park122Save !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo sub.',
                data: Park122Save,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere sub. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Sub Park122 API
    /**
     * @api {put} /api/condominio/update-sub-park122:id Update Sub Park122 API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} park122Id Park122 park122Id
     * @apiParam (Request body) {String} pianoId Park122 pianoId
     * @apiParam (Request body) {Number} mqCatastali Park122 mqCatastali
     * @apiParam (Request body) {Number} millesimi Park122 millesimi
     * @apiParamExample {json} Input
     * {
     *      "park122Id" : "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo sub park122.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-sub-park122/:id
     * @apiErrorExample {json} Sub Park122 error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-sub-park122/:id')
    @Authorized()
    public async updateSubPark122(@Body({ validate: true }) park122Param: UpdatePark122, @Res() response: any): Promise<any> {
        const updatePark122 = await this.park122Service.findOne({
            where: {
                park122Id: park122Param.park122Id,
            },
        });
        if (!updatePark122) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido park122Id',
            };
            return response.status(400).send(errorResponse);
        }
        updatePark122.park122Id = park122Param.park122Id;
        updatePark122.piano = park122Param.pianoId ? park122Param.pianoId : updatePark122.piano;
        updatePark122.mqCatastali = park122Param.mqCatastali;
        updatePark122.millesimi = park122Param.millesimi;
        const park122Save = await this.park122Service.create(updatePark122);
        if (park122Save !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiornato con successo piano',
                data: park122Save,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiornare piano',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Park122 List API
    /**
     * @api {get} /api/condominio/sub-park122list Sub Park122 List API
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
     *      "message": "Successfully got sub park122 list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/sub-park122list
     * @apiErrorExample {json} Generake error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/sub-park122list')
    @Authorized()
    public async subListPark122(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['park122Id', 'pianoId', 'mqCatastali', 'millesimi'];
        const search = [
            {
                name: 'park122Id',
                op: 'like',
                value: keyword,
            },
        ];
        const WhereConditions = [];
        const subListPark122 = await this.park122Service.list(limit, offset, select, search, WhereConditions, count);
        if (subListPark122) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo sub Park122 List',
                data: subListPark122,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere sub Park122 list',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Sub Park122 API
    /**
     * @api {delete} /api/condominio/delete-sub-park122/:id Delete sub park122 API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pianoId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo sub park122.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-sub-park122/:id
     * @apiErrorExample {json} Park122 error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-sub-park122/:id')
    @Authorized()
    public async deleteSubPark122(@Param('id') id: number, @Res() response: any, @Req() request: any): Promise<Park122> {
        const Park122Data = await this.park122Service.findOne({
            where: {
                park122Id: id,
            },
        });
        if (!Park122Data) {
            const errorResponse: any = {
                status: 0,
                message: 'park122Id non valido',
            };
            return response.status(400).send(errorResponse);
        }
        const deletePark122: any = await this.park122Service.delete(Park122Data.park122Id);
        if (!deletePark122) {
            const successResponse: any = {
                status: 1,
                message: 'Riga eliminata con successo',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'impossibile eliminare riga',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Create ParkPub API
    /**
     * @api {post} /api/condominio/add-sub-parkPub Create Sub ParkPub API
     * @apiGroup ParkPub
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} parkPubId ParkPub parkPubId
     * @apiParam (Request body) {number} pianoId ParkPub pianoId
     * @apiParam (Request body) {String} mqCatastali ParkPub mqCatastali
     * @apiParam (Request body) {number} millesimi ParkPub millesimi
     * @apiParamExample {json} Input
     * {
     *      "parkPubId": "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Sub Parcheggio legge 122 creato con successo",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/add-sub-parkPub
     * @apiErrorExample {json} Sub ParkPub error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-sub-parkPub')
    @Authorized()
    public async addSubParkPub(@Body({ validate: true }) parkPubParam: CreateParkPub, @Res() response: any): Promise<any> {
        const existSubParkPub = await this.parkPubService.findOne({
            where: {
                parkPubId: parkPubParam.parkPubId,
            },
        });
        if (existSubParkPub) {
            const errorResponse: any = {
                status: 0,
                message: 'Hai già aggiunto questo sub.',
            };
            return response.status(200).send(errorResponse);
        }
        const newParkPub: any = new Fotovoltaico();
        newParkPub.parkPubId = parkPubParam.parkPubId;
        newParkPub.pianoId = parkPubParam.pianoId ? parkPubParam.pianoId : 0;
        newParkPub.mqCatastali = parkPubParam.mqCatastali;
        newParkPub.millesimi = parkPubParam.millesimi;
        const ParkPubSave = await this.fotovoltaicoService.create(newParkPub);
        if (ParkPubSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo sub.',
                data: ParkPubSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere sub. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Sub ParkPub API
    /**
     * @api {put} /api/condominio/update-sub-parkPub:id Update Sub ParkPub API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} parkPubId ParkPub parkPubId
     * @apiParam (Request body) {String} pianoId ParkPub pianoId
     * @apiParam (Request body) {Number} mqCatastali ParkPub mqCatastali
     * @apiParam (Request body) {Number} millesimi ParkPub millesimi
     * @apiParamExample {json} Input
     * {
     *      "parkPubId" : "",
     *      "pianoId" : "",
     *      "mqCatastali" : "",
     *      "millesimi" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo sub parkPub.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-sub-parkPub/:id
     * @apiErrorExample {json} Sub ParkPub error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-sub-parkPub/:id')
    @Authorized()
    public async updateSubParkPub(@Body({ validate: true }) parkPubParam: UpdateParkPub, @Res() response: any): Promise<any> {
        const updateParkPub = await this.parkPubService.findOne({
            where: {
                parkPubId: parkPubParam.parkPubId,
            },
        });
        if (!updateParkPub) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalido parkPubId',
            };
            return response.status(400).send(errorResponse);
        }
        updateParkPub.parkPubId = parkPubParam.parkPubId;
        updateParkPub.piano = parkPubParam.pianoId ? parkPubParam.pianoId : updateParkPub.piano;
        updateParkPub.mqCatastali = parkPubParam.mqCatastali;
        updateParkPub.millesimi = parkPubParam.millesimi;
        const parkPubSave = await this.parkPubService.create(updateParkPub);
        if (parkPubSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiornato con successo piano',
                data: parkPubSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiornare piano',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // ParkPub List API
    /**
     * @api {get} /api/condominio/sub-parkPublist Sub ParkPub List API
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
     *      "message": "Successfully got sub parkPub list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/sub-parkPublist
     * @apiErrorExample {json} Generake error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/sub-parkPublist')
    @Authorized()
    public async subListParkPub(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['parkPubId', 'pianoId', 'mqCatastali', 'millesimi'];
        const search = [
            {
                name: 'parkPubId',
                op: 'like',
                value: keyword,
            },
        ];
        const WhereConditions = [];
        const subListParkPub = await this.parkPubService.list(limit, offset, select, search, WhereConditions, count);
        if (subListParkPub) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo sub ParkPub List',
                data: subListParkPub,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere sub ParkPub list',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Sub ParkPub API
    /**
     * @api {delete} /api/condominio/delete-sub-parkPub/:id Delete sub parkPub API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pianoId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo sub parkPub.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-sub-parkPub/:id
     * @apiErrorExample {json} ParkPub error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-sub-parkPub/:id')
    @Authorized()
    public async deleteSubParkPub(@Param('id') id: number, @Res() response: any, @Req() request: any): Promise<ParkPub> {
        const ParkPubData = await this.parkPubService.findOne({
            where: {
                parkPubId: id,
            },
        });
        if (!ParkPubData) {
            const errorResponse: any = {
                status: 0,
                message: 'parkPubId non valido',
            };
            return response.status(400).send(errorResponse);
        }
        const deleteParkPub: any = await this.parkPubService.delete(ParkPubData.parkPubId);
        if (!deleteParkPub) {
            const successResponse: any = {
                status: 1,
                message: 'Riga eliminata con successo',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'impossibile eliminare riga',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Create ContoCorrente API
    /**
    * @api {post} /api/condominio/add-spesa-contoCorrente Create Sub ContoCorrente API
    * @apiGroup Condominio Conto Corrente
    * @apiHeader {String} Authorization
    * @apiParam (Request body) {number} contoCorrenteId ContoCorrente contoCorrenteId
    * @apiParam (Request body) {number} fornitoreId ContoCorrente fornitoreId
    * @apiParam (Request body) {String} tipoSpesaId ContoCorrente tipoSpesaId
    * @apiParam (Request body) {String} pdf ContoCorrente pdf
    * @apiParam (Request body) {String} numFattura ContoCorrente numFattura
    * @apiParam (Request body) {String} dataFattura ContoCorrente dataFattura
    * @apiParam (Request body) {String} dataMov ContoCorrente dataMov
    * @apiParam (Request body) {String} annoComp ContoCorrente annoComp
    * @apiParam (Request body) {String} uscite ContoCorrente uscite
    * @apiParam (Request body) {String} entrate ContoCorrente entrate
    * @apiParam (Request body) {String} stato ContoCorrente stato
    * @apiParamExample {json} Input
    * {
    *      "contoCorrenteId": "",
    *      "fornitoreId" : "",
    *      "tipoSpesaId" : "",
    *      "pdf" : "",
    *      "numFattura" : "",
    *      "dataFattura" : "",
    *      "dataMov" : "",
    *      "annoComp" : "",
    *      "uscite" : "",
    *      "entrate" : "",
    *      "stato" : "",
    * }
    * @apiSuccessExample {json} Success
    * HTTP/1.1 200 OK
    * {
    *      "message": "Sub Parcheggio legge 122 creato con successo",
    *      "status": "1"
    * }
    * @apiSampleRequest /api/condominio/add-spesa-contoCorrente
    * @apiErrorExample {json} Spesa ContoCorrente error
    * HTTP/1.1 500 Internal Server Error
    */
    @Post('/add-spesa-contoCorrente')
    @Authorized()
    public async addSpesaContoCorrente(@Body({ validate: true }) contoCorrenteParam: CreateContoCorrente, @Res() response: any): Promise<any> {
        //  const existSpesaContoCorrente = await this.contoCorrenteService.findOne({
        //      where: {
        //          contoCorrenteId: contoCorrenteParam.contoCorrenteId,
        //      },
        //  });
        //  if (existSpesaContoCorrente) {
        //      const errorResponse: any = {
        //          status: 0,
        //          message: 'Hai già aggiunto questa spesa.',
        //      };
        //      return response.status(200).send(errorResponse);
        //  }
        const newContoCorrente: any = new ContoCorrente();
        newContoCorrente.fornitoreId = contoCorrenteParam.fornitoreId ? contoCorrenteParam.fornitoreId : 0;
        newContoCorrente.clienteId = contoCorrenteParam.clienteId ? contoCorrenteParam.clienteId : 0;
        newContoCorrente.tipoSpesaId = contoCorrenteParam.tipoSpesaId ? contoCorrenteParam.tipoSpesaId : 0;
        newContoCorrente.pdf = contoCorrenteParam.pdf;
        newContoCorrente.numFattura = contoCorrenteParam.numFattura;
        newContoCorrente.dataFattura = contoCorrenteParam.dataFattura;
        newContoCorrente.dataMov = contoCorrenteParam.dataMov;
        newContoCorrente.annoComp = contoCorrenteParam.annoComp;
        newContoCorrente.uscite = contoCorrenteParam.uscite;
        newContoCorrente.entrate = contoCorrenteParam.entrate;
        newContoCorrente.stato = contoCorrenteParam.stato;
        const ContoCorrenteSave = await this.contoCorrenteService.create(newContoCorrente);
        if (ContoCorrenteSave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Aggiunto con successo un nuovo spesa.',
                data: ContoCorrenteSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile aggiungere spesa. ',
            };
            return response.status(400).send(errorResponse);
        }
    }


    // ContoCorrente List API
    /**
     * @api {get} /api/condominio/spese-contoCorrentelist Sub ContoCorrente List API
     * @apiGroup Condominio Conto Corrente
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} status status
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got sub contoCorrente list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/sub-contoCorrentelist
     * @apiErrorExample {json} Generake error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/spese-contoCorrentelist')
    @Authorized()
    public async subListContoCorrente(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('status') status: string, @QueryParam('count') count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['contoCorrenteId', 'fornitoreId', 'clienteId', 'tipoSpesaId', 'pdf', 'numFattura', 'dataFattura', 'dataMov', 'annoComp', 'uscite', 'entrate', 'stato'];
        const search = [
            {
                name: 'contoCorrenteId',
                op: 'like',
                value: keyword,
            },
            // {
            //     name: 'fornitoreId',
            //     op: 'like',
            //     value: keyword,
            // },
            // {
            //     name: 'dataFattura',
            //     op: 'like',
            //     value: keyword,
            // },
            // {
            //     name: 'dataMov',
            //     op: 'like',
            //     value: keyword,
            // },
            // {
            //     name: 'annoComp',
            //     op: 'like',
            //     value: keyword,
            // },
            // {
            //     name: 'stato',
            //     op: 'like',
            //     value: keyword,
            // },
        ];
        const WhereConditions = [

        ];
        const subListContoCorrente = await this.contoCorrenteService.list(limit, offset, select, search, WhereConditions, count);
        if (subListContoCorrente) {
            const successResponse: any = {
                status: 1,
                message: 'Ottenuta con successo lista  Conto Corrente ',
                data: subListContoCorrente,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Impossibile ottenere ContoCorrente list',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update ContoCorrente API
    /**
     * @api {put} /api/condominio/update-conto-corrente:id Update Fornitore API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} fornitoreId Fornitore fornitoreId
     * @apiParam (Request body) {String} nomeCompagnia Fornitore nomeCompagnia
     * @apiParam (Request body) {Number} email Fornitore email
     * @apiParam (Request body) {Number} infoBanca Piano infoBanca
     * @apiParamExample {json} Input
     * {
     *      "fornitoreId" : "",
     *      "nomeCompagnia" : "",
     *      "email" : "",
     *      "infoBanca" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Aggiornato con successo Fornitore.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/update-conto-corrente/:id
     * @apiErrorExample {json} Fornitore error
     * HTTP/1.1 500 Internal Server Error
     */
     @Put('/update-conto-corrente:id')
     @Authorized()
     public async updateContoCorrente(@Body({ validate: true }) contoCorrenteParam: UpdateContoCorrente, @Res() response: any): Promise<any> {
         const contoCorrenteId = await this.contoCorrenteService.findOne({
             where: {
                 contoCorrenteId: contoCorrenteParam.contoCorrenteId,
             },
         });
         if (!contoCorrenteId) {
             const errorResponse: any = {
                 status: 0,
                 message: 'Invalido contoCorrenteId',
             };
             return response.status(400).send(errorResponse);
         }
         contoCorrenteId.fornitoreId = contoCorrenteParam.fornitoreId;
         contoCorrenteId.clienteId = contoCorrenteParam.clienteId;
         contoCorrenteId.tipoSpesaId = contoCorrenteParam.tipoSpesaId;
         contoCorrenteId.pdf = contoCorrenteParam.pdf;
         contoCorrenteId.numFattura = contoCorrenteParam.numFattura;
         contoCorrenteId.dataFattura = contoCorrenteParam.dataFattura;
         contoCorrenteId.dataMov = contoCorrenteParam.dataMov;
         contoCorrenteId.annoComp = contoCorrenteParam.annoComp;
         contoCorrenteId.uscite = contoCorrenteParam.uscite;
         contoCorrenteId.entrate = contoCorrenteParam.entrate;
         contoCorrenteId.stato = contoCorrenteParam.stato;
         const contoCorrenteSave = await this.contoCorrenteService.create(contoCorrenteId);
         if (contoCorrenteSave !== undefined) {
             const successResponse: any = {
                 status: 1,
                 message: 'Aggiornato con successo fornitore',
                 data: contoCorrenteSave,
             };
             return response.status(200).send(successResponse);
         } else {
             const errorResponse: any = {
                 status: 0,
                 message: 'Impossibile aggiornare fornitore',
             };
             return response.status(400).send(errorResponse);
         }
     }

    // Condominio delete conto corrente API
    /**
     * @api {delete} /api/condominio/delete-spesa-conto/:id Delete Tipo Spesa API
     * @apiGroup Piano
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "contoCorrenteId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Eliminato con successo contoCorrenteId.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/condominio/delete-spesa-conto/:id
     * @apiErrorExample {json} Conto corrente API error
     * HTTP/1.1 500 Internal Server Error
     */
     @Delete('/delete-tipo-spesa/:id')
     @Authorized()
     public async deleteContoCorrente(@Body({ validate: true }) contoCorrente: DeleteContoCorrente, @Res() response: any): Promise<TipoSpesa> {
 
         const contoCorrenteId = await this.contoCorrenteService.findOne({
             where: {
                contoCorrenteId: contoCorrente.contoCorrenteId,
             },
         });
         if (!contoCorrenteId) {
             const errorResponse: any = {
                 status: 0,
                 message: 'Invalido contoCorrenteId',
             };
             return response.status(400).send(errorResponse);
         }
 
         const deleteContoCorrente = await this.contoCorrenteService.delete(contoCorrenteId);
         if (!deleteContoCorrente) {
             const successResponse: any = {
                 status: 1,
                 message: 'Eliminato con successo spesa.',
             };
             return response.status(200).send(successResponse);
         } else {
             const errorResponse: any = {
                 status: 0,
                 message: 'Impossibile eliminare spesa. ',
             };
             return response.status(400).send(errorResponse);
         }
     }

}

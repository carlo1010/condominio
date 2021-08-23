import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateProductDiscountTable1546580179314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'product_discount',
            columns: [
                {
                    name: 'product_discount_id',
                    type: 'integer',
                    length: '11',
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isNullable: false,
                }, {
                    name: 'product_id',
                    type: 'integer',
                    length: '11',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'quantity',
                    type: 'integer',
                    length: '4',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'priority',
                    type: 'integer',
                    length: '5',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'price',
                    type: 'DECIMAL(15,4)',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'date_start',
                    type: 'DATE',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'date_end',
                    type: 'DATE',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'is_active',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'created_by',
                    type: 'integer',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'modified_by',
                    type: 'integer',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'created_date',
                    type: 'DATETIME',
                    isPrimary: false,
                    isNullable: true,
                    default:  'CURRENT_TIMESTAMP',
                }, {
                    name: 'modified_date',
                    type: 'DATETIME',
                    isPrimary: false,
                    isNullable: true,
                    default:  'CURRENT_TIMESTAMP',
                },
            ],
        });
        const ifExsist = await queryRunner.hasTable('product_discount');
        if (!ifExsist) {
            await queryRunner.createTable(table);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('product_discount', true);
    }
}

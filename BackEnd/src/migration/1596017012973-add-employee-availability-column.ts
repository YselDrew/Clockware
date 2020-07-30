import {MigrationInterface, QueryRunner} from "typeorm";

export class addEmployeeAvailabilityColumn1596017012973 implements MigrationInterface {
    name = 'addEmployeeAvailabilityColumn1596017012973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" ADD "availableFrom" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "availableFrom"`);
    }

}

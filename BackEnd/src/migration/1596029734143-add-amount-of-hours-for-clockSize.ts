import {MigrationInterface, QueryRunner} from "typeorm";

export class addAmountOfHoursForClockSize1596029734143 implements MigrationInterface {
    name = 'addAmountOfHoursForClockSize1596029734143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clockSizes" ADD "amountOfHours" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clockSizes" DROP COLUMN "amountOfHours"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class updateReservation1595934399808 implements MigrationInterface {
    name = 'updateReservation1595934399808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" ADD "date" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_e31637a1b37f007468858cd3855"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_17cb0e5bd2413f4ba83fe8aeb4b"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_7aeb749fb1cede72566669938d4"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_4a29e86910973f6069ad56f4e55"`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "clientId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "employeeId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "cityId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "clockSizeId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_8402edad0a7aa05bc2b5a6d578f"`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "cityId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_e31637a1b37f007468858cd3855" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_17cb0e5bd2413f4ba83fe8aeb4b" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_7aeb749fb1cede72566669938d4" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_4a29e86910973f6069ad56f4e55" FOREIGN KEY ("clockSizeId") REFERENCES "clockSizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_8402edad0a7aa05bc2b5a6d578f" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_8402edad0a7aa05bc2b5a6d578f"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_4a29e86910973f6069ad56f4e55"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_7aeb749fb1cede72566669938d4"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_17cb0e5bd2413f4ba83fe8aeb4b"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_e31637a1b37f007468858cd3855"`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "cityId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_8402edad0a7aa05bc2b5a6d578f" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "clockSizeId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "cityId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "employeeId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "clientId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_4a29e86910973f6069ad56f4e55" FOREIGN KEY ("clockSizeId") REFERENCES "clockSizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_7aeb749fb1cede72566669938d4" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_17cb0e5bd2413f4ba83fe8aeb4b" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_e31637a1b37f007468858cd3855" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "date"`);
    }

}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createClientsTable1595344634363 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '25',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            length: '25',
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("clients");
  }
}
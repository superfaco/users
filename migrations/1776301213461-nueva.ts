import { MigrationInterface, QueryRunner } from "typeorm";

export class Nueva1776301213461 implements MigrationInterface {
    name: string = 'Nueva1776301213461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`date_of_birth\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`picture\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`id\` int NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`picture\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`date_of_birth\``);
    }

}

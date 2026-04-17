import { MigrationInterface, QueryRunner } from "typeorm";

export class Nueva1776387802615 implements MigrationInterface {
    name = 'Nueva1776387802615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`user_id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD PRIMARY KEY (\`user_id\`)`);
    }

}

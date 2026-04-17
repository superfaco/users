import { MigrationInterface, QueryRunner } from "typeorm";

export class Nueva1776385766661 implements MigrationInterface {
    name: string = 'Nueva1776385766661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`id\` \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`user_id\` int NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD PRIMARY KEY (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`user_id\` \`id\` int NOT NULL`);
    }

}

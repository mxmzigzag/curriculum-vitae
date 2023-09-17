import { DataSource } from "typeorm";

export const DB = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  logging: true,
  synchronize: true,
});

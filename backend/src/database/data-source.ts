import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import MainSeeder from './main.seed';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE,
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT, 10)
    : 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  dropSchema: false,
  keepConnectionAlive: true,
  logging: process.env.NODE_ENV !== 'production',
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../migrations/**/*.ts'],
  seeds: [MainSeeder],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
} as DataSourceOptions);

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AllConfigType } from 'src/utils/config/config.type';
import MainSeeder from './main.seed';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<AllConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<string>('database.type', { infer: true }),
      url: this.configService.get<string>('database.url', { infer: true }),
      host: this.configService.get<string>('database.host', { infer: true }),
      port: this.configService.get<number>('database.port', { infer: true }),
      username: this.configService.get<string>('database.username', {
        infer: true,
      }),
      password: this.configService.get<string>('database.password', {
        infer: true,
      }),
      database: this.configService.get<string>('database.name', {
        infer: true,
      }),
      synchronize: this.configService.get<boolean>('database.synchronize', {
        infer: true,
      }),
      dropSchema: false,
      keepConnectionAlive: true,
      logging:
        this.configService.get<string>('app.nodeEnv', { infer: true }) !==
        'production',
      migrations: [__dirname + '/../migrations/**/*.ts'],
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      seeds: [MainSeeder],
    } as TypeOrmModuleOptions;
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './Infrastructure/config/typeorm.config';


import { ConfigModule } from '@nestjs/config';
import { JuzgadosModule } from './modules/juzgados/juzgados.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JuzgadosModule
  ],
})
export class AppModule {}

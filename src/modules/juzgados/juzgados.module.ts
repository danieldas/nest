import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JuzgadoController} from "./controllers/juzgado.controller";
import {JuzgadoEntity} from "./entities/juzgado.entity";
import {JuzgadoService} from "./services/juzgado.service";
import {SorteoController} from "./controllers/sorteo.controller";
import {SorteoService} from "./services/sorteo.service";
import {AsignacionEntity} from "./entities/asignacion.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([JuzgadoEntity]),
    TypeOrmModule.forFeature([AsignacionEntity]),
  ],
  providers: [JuzgadoService, SorteoService],
  controllers: [JuzgadoController, SorteoController]
})
export class JuzgadosModule {}

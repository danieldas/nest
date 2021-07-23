import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignacionEntity } from '../entities/asignacion.entity';

@Injectable()
export class SorteoService {

    constructor(
        @InjectRepository(AsignacionEntity)
        private asignacionRepo: Repository<AsignacionEntity>,
    ) {}

    async getAll() {

        const juzgados= await this.asignacionRepo.find(
            {
                select : ["juzgado_id"],
                where: {delito_id: 1}
            }
        );
        return juzgados[Math.floor(Math.random() * juzgados.length)];
    }

}

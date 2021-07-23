import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {getConnection, InsertQueryBuilder, Repository} from 'typeorm';
import {JuzgadoEntity} from '../entities/juzgado.entity';


@Injectable()
export class JuzgadoService {


    constructor(
        @InjectRepository(JuzgadoEntity) private juzgadoRepo: Repository<JuzgadoEntity>,
    ) {
    }


    findAll() {
        return this.juzgadoRepo.find({
            where: {registro_activo: true}
        });
        ;
    }

    async findOne(id: number) {
        const juzgado= await this.juzgadoRepo.findOne(id);
        return juzgado;
    }


    create(body: any) {
        const juzgado = this.juzgadoRepo.create(body);
        return this.juzgadoRepo.save(juzgado);

    }

    async update(id: number, body: any) {
        const juzgado = await this.juzgadoRepo.findOne(id);
        this.juzgadoRepo.merge(juzgado, body);
        return this.juzgadoRepo.save(juzgado);
    }

    async delete(id: number) {
        const juzgado = await this.juzgadoRepo.delete(id);
        return juzgado;
    }


    //Para la paginacion del usuario
    async paginate(page = 1): Promise<any> {
        const take = 5;

        const [solauds, total] = await this.juzgadoRepo.findAndCount({
            take,
            skip: (page - 1) * take
        });

        return {
            data: solauds,
            meta: {
                total,
                page,
                last_page: Math.ceil(total / take)
            }
        }

    }


}

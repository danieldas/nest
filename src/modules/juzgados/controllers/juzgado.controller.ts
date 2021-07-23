import { Controller, Get, Param, Post, Body, Put, Delete, Res, HttpStatus, Query } from '@nestjs/common';
import { JuzgadoService } from '../services/juzgado.service';
import {CreateJuzgadoDto} from "../dto/create-juzgado.dto";


@Controller('juzgados')
export class JuzgadoController {

    constructor(
        private juzgadoService: JuzgadoService
    ){}
    @Get()
    getAll( @Res() response){
        return this.juzgadoService.findAll()
            .then((result) => {
                response.status(HttpStatus.OK).json({
                    result,
                    status: true,
                    message: 'exitoso'
                });
            })
            .catch(e => {
                response
                    .status(HttpStatus.FORBIDDEN)
                    .json({
                        message: 'Error',
                        status: false
                    })
            });

    }


    @Get('/:id')
    getOne(@Param('id') id:number,@Res() response){
        return this.juzgadoService.findOne(id)
            .then((result) => {
                response.status(HttpStatus.OK).json({
                    result,
                    status: true
                });
            })
            .catch(e => {
                response
                    .status(HttpStatus.FORBIDDEN)
                    .json({
                        message: 'Error',
                        status: false
                    })
            });
    }


    @Post()
    create(@Body() body: CreateJuzgadoDto,@Res() response){
        return this.juzgadoService.create(body)
            .then((result: any) => {
                response.status(HttpStatus.OK).json({
                    message: 'El juzgado fue creado correctamente.',
                    result,
                    status: true
                });
            })
            .catch(e => {
                response
                    .status(HttpStatus.FORBIDDEN)
                    .json({
                        message: 'Error',
                        status: false
                    })
            });
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any ,@Res() response){
        return this.juzgadoService.update(id, body)
            .then((result) => {
                response.status(HttpStatus.OK).json({
                    message: 'El juzgado fue actualizado correctamente.',
                    result,
                    status: true
                });
            })
            .catch(e => {
                response
                    .status(HttpStatus.FORBIDDEN)
                    .json({
                        message: 'Erroó',
                        status: false
                    })
            });
    }

    @Delete(':id')
    delete(@Param('id') id: number,@Res() response){
        return this.juzgadoService.delete(id)
            .then((result) => {
                response.status(HttpStatus.OK).json({
                    message: 'El juzgado fue eliminado correctamente.',
                    result,
                    status: true
                });
            })
            .catch(e => {
                response
                    .status(HttpStatus.FORBIDDEN)
                    .json({
                        message: 'Error',
                        status: false
                    })
            });
    }

}




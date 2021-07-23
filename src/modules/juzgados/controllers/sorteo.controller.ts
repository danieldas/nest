import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { SorteoService } from '../services/sorteo.service';


@Controller('sorteo')
export class SorteoController {

    constructor(private sorteoServices: SorteoService) {}

    @Get()
    getAll() {
        return this.sorteoServices.getAll();
    }

}

import { IsNotEmpty } from 'class-validator';


export class CreateJuzgadoDto{

    @IsNotEmpty()
    descripcion: string;

}


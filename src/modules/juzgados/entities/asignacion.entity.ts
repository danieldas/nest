import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('asignacion')
export class AsignacionEntity {

    @PrimaryGeneratedColumn()
    asignacion_id: number;

    @Column()
    juzgado_id: number;

    @Column()
    delito_id: number;

}
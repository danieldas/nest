import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('juzgado')
export class JuzgadoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column ({ nullable: true })
    descripcion: string;

    @Column({default: true})
    registro_activo: boolean;

    @CreateDateColumn({name: 'fecha_creacion'})
    created_at: Date;

    @UpdateDateColumn({name: 'fecha_modificacion'})
    updated_at: Date;


}
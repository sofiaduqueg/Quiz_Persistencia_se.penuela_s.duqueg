import { Video } from "./video";
import { Estadisticas } from "./estadisticas";
import { Suscriptor } from "./suscriptor";
import { Publicador } from "./publicador";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToOne,
    OneToMany
} from "typeorm"

@Entity()
export class Canal {
    @PrimaryGeneratedColumn
    id: number;

    @Column()
    nombre: string;

    @Column({ type: 'date'})
    fechaCreacion: string;

    @Column()
    descripcion: string;

    @OneToMany(() => Video, {cascade: true}, video => video.canal)
    videos: Video[];

    @OneToOne(() => Estadisticas, {cascade: true})
    @JoinColumn()
    estadisticas: Estadisticas;

    @ManyToMany(() => Suscriptor)
    @JoinTable()
    suscriptores: Suscriptor[];
    
    @ManyToMany(() => Publicador)
    @JoinTable()
    publicadores: Publicador[];
    
}
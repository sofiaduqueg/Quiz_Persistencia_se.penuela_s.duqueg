import { Publicador } from "./publicador";
import { Canal } from "./canal";
import { Estadisticas } from "./estadisticas";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    ManyToOne
} from "typeorm"

@Entity()
export class Video {
    @PrimaryGeneratedColumn
    id: number;

    @Column()
    nombre: string;

    @Column({ type: 'date'})
    fechaPublicacion: string;

    @Column()
    descripcion: string;

    @Column()
    url: string;

    @ManyToOne(() => Video, video => video.publicador)
    video: Video;

    @ManyToOne(() => Video, video => video.canal)
    video: Video;

    @OneToOne(() => Estadisticas, {cascade: true})
    @JoinColumn()
    estadisticas: Estadisticas;
    
}

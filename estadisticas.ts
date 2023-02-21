import { Video } from "./video";
import { Canal } from "./canal";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
} from "typeorm"

@Entity()
export class Estadisticas {
    @PrimaryGeneratedColumn
    id: number;

    @Column()
    rating: number;

    @Column()
    visualizaciones: number;

    @OneToOne(() => Video)
    @JoinColumn()
    video: Video;

    @OneToOne(() => Canal)
    @JoinColumn()
    canal: Canal;
    
}

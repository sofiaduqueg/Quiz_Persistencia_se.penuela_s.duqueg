import { Video } from "./video";
import { Canal } from "./canal";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
    JoinTable,
} from "typeorm"

@Entity()
export class Publicador {
    @PrimaryGeneratedColumn
    id: number;

    @Column()
    nombre: string;

    @Column()
    username: string;

    @OneToMany(() => Video, video => video.publicador)
    videos: Video[];

    @ManyToMany(() => Canal)
    @JoinTable()
    canales: Canal[];
    
}
import { Canal } from "./canal";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"

@Entity()
export class Suscriptor {
    @PrimaryGeneratedColumn
    id: number;

    @Column()
    nombre: string;

    @Column()
    username: string;

    @ManyToMany(() => Canal)
    @JoinTable()
    canales: Canal[];

}
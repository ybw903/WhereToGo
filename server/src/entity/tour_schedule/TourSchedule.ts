import { Column, Entity } from "typeorm";
import { BaseTimeEntity } from "../BaseTimeEntity";

@Entity()
export class TourSchedule extends BaseTimeEntity {

    @Column()
    place: string;

    @Column({type:"timestamp"})
    startTime: Date

    @Column({type:"timestamp"})
    endTime: Date

    @Column()
    memo: string;

    constructor() {
        super();
    }
}
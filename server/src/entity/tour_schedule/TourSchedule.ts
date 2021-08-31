import { Column } from "typeorm";
import { BaseTimeEntity } from "../BaseTimeEntity";

export class TourSchedule extends BaseTimeEntity {

    @Column()
    place: string;

    @Column({type:"timestamptz"})
    startTime: Date

    @Column({type:"timestamptz"})
    endTime: Date

    @Column()
    memo: string;

    constructor() {
        super();
    }
}
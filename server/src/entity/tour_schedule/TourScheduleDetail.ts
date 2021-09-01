import { Column, Entity, ManyToOne } from "typeorm";
import { BaseTimeEntity } from "../BaseTimeEntity";
import { TourSchedule } from "./TourSchedule";

@Entity()
export class TourScheduleDetail extends BaseTimeEntity {

    @Column()
    place: string;

    @Column({type:"timestamp"})
    startTime: Date

    @Column({type:"timestamp"})
    endTime: Date

    @Column()
    estimatedExpenses: number

    @Column()
    memo: string;

    @ManyToOne(type => TourSchedule, tourSchedule => tourSchedule.tourScheduleDetails, {onDelete:'CASCADE', createForeignKeyConstraints: false})
    tourSchedule: TourSchedule;

    constructor() {
        super();
    }
}
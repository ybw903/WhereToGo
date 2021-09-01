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
    tourSchedule: TourSchedule | null;

    constructor() {
        super();
    }

    static create(place: string, startTime: Date, endTime: Date, estimatedExpenses:number, memo: string) {
        const tourScheduleDetail = new TourScheduleDetail();
        tourScheduleDetail.place = place;
        tourScheduleDetail.startTime = startTime;
        tourScheduleDetail.endTime = endTime;
        tourScheduleDetail.estimatedExpenses = estimatedExpenses;
        tourScheduleDetail.memo = memo;
        return tourScheduleDetail;
    }
}
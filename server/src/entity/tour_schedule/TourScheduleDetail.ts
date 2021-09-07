import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseTimeEntity } from "../BaseTimeEntity";
import { Place } from "../place/Place";
import { TourSchedule } from "./TourSchedule";

@Entity()
export class TourScheduleDetail extends BaseTimeEntity {

    @ManyToOne(type => Place, place => place.id ,{createForeignKeyConstraints: false})
    place: Place;

    @Column({type:"timestamp"})
    startTime: Date

    @Column({type:"timestamp"})
    endTime: Date

    @Column()
    expense: number

    @Column()
    memo: string;

    @ManyToOne(type => TourSchedule, tourSchedule => tourSchedule.tourScheduleDetails, {onDelete:'CASCADE', createForeignKeyConstraints: false})
    tourSchedule: TourSchedule | null;

    constructor() {
        super();
    }

    static create(place: Place, startTime: Date, endTime: Date, expense:number, memo: string) {
        const tourScheduleDetail = new TourScheduleDetail();
        tourScheduleDetail.place = place;
        tourScheduleDetail.startTime = startTime;
        tourScheduleDetail.endTime = endTime;
        tourScheduleDetail.expense = expense;
        tourScheduleDetail.memo = memo;
        return tourScheduleDetail;
    }
}
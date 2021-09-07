import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseTimeEntity } from "../BaseTimeEntity";
import { Place } from "../place/Place";
import { TourSchedule } from "./TourSchedule";

@Entity()
export class TourScheduleDetail extends BaseTimeEntity {

    @OneToOne(type => Place, place => place.id)
    @JoinColumn()
    place: Place;

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

    static create(place: Place, startTime: Date, endTime: Date, estimatedExpenses:number, memo: string) {
        const tourScheduleDetail = new TourScheduleDetail();
        tourScheduleDetail.place = place;
        tourScheduleDetail.startTime = startTime;
        tourScheduleDetail.endTime = endTime;
        tourScheduleDetail.estimatedExpenses = estimatedExpenses;
        tourScheduleDetail.memo = memo;
        return tourScheduleDetail;
    }
}
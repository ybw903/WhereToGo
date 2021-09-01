import { Column, Entity, OneToMany } from "typeorm";
import { BaseTimeEntity } from "../BaseTimeEntity";
import { TourScheduleDetail } from "./TourScheduleDetail";

@Entity()
export class TourSchedule extends BaseTimeEntity {

    @Column()
    name: string;

    @OneToMany(type=> TourScheduleDetail, tourScheduleDetail => tourScheduleDetail.tourSchedule, {lazy: true, cascade: true})
    tourScheduleDetails: TourScheduleDetail[];

    constructor() {
        super();
    }

    static create(name: string, tourScheduleDetails: TourScheduleDetail[]) {
        const tourSchedule = new TourSchedule();
        tourSchedule.name = name;
        tourSchedule.tourScheduleDetails = tourScheduleDetails;
        return tourSchedule;
    }
}
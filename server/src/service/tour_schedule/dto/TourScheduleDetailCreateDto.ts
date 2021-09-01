import { TourSchedule } from "../../../entity/tour_schedule/TourSchedule";
import { TourScheduleDetail } from "../../../entity/tour_schedule/TourScheduleDetail";

export class TourScheduleDetailCreateDto {
    place: string;
    startTime: Date;
    endTime: Date;
    estimatedExpenses: number;
    memo: string;

    constructor() {
    }

    static create(place: string, startTime: Date, endTime:Date, estimatedExpenses: number, memo: string ) {
        let dto = new TourScheduleDetailCreateDto();
        dto.place = place;
        dto.startTime = startTime;
        dto.endTime = endTime;
        dto.estimatedExpenses = estimatedExpenses;
        dto.memo = memo;
        return dto;
    }

    public toEntity():TourScheduleDetail {
        return TourScheduleDetail.create(
            this.place,
            this.startTime,
            this.endTime,
            this.estimatedExpenses,
            this.memo,
        )
    }
}
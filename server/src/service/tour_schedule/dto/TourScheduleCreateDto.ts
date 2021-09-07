import { TourSchedule } from "../../../entity/tour_schedule/TourSchedule";
import { TourScheduleDetailCreateDto } from "./TourScheduleDetailCreateDto";

export class TourScheduleCreateDto {
    name: string;
    tourScheduleDetails: TourScheduleDetailCreateDto[];

    constructor() {
    }

    static create(title: string, tourScheduleDetails: TourScheduleDetailCreateDto[] ) {
        let dto = new TourScheduleCreateDto();
        dto.name = title;
        dto.tourScheduleDetails = tourScheduleDetails;
        return dto;
    }

    public toEntity():TourSchedule {

        return TourSchedule.create(
            this.name,
            this.tourScheduleDetails.map(tourScheduleDetail => TourScheduleDetailCreateDto.create(tourScheduleDetail.place,tourScheduleDetail.startTime,
                 tourScheduleDetail.endTime, tourScheduleDetail.expense, tourScheduleDetail.memo)).map(tourScheduleDetailDto => tourScheduleDetailDto.toEntity())
        )
    }
}
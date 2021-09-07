import { Place } from "../../../entity/place/Place";
import { TourSchedule } from "../../../entity/tour_schedule/TourSchedule";
import { TourScheduleDetail } from "../../../entity/tour_schedule/TourScheduleDetail";
import { PlaceCreateDto } from "./PlaceCreateDto";

export class TourScheduleDetailCreateDto {
    place: PlaceCreateDto;
    startTime: Date;
    endTime: Date;
    expense: number;
    memo: string;

    constructor() {
    }

    static create(place: PlaceCreateDto, startTime: Date, endTime:Date, expense: number, memo: string ) {
        let dto = new TourScheduleDetailCreateDto();
        dto.place = place;
        dto.startTime = startTime;
        dto.endTime = endTime;
        dto.expense = expense;
        dto.memo = memo;
        return dto;
    }

    public toEntity():TourScheduleDetail {
        console.log(this.place);
        return TourScheduleDetail.create(
            PlaceCreateDto.create(
                this.place.id, this.place.address_name, this.place.category_group_code, this.place.category_group_name,
                 this.place.category_name, this.place.phone, this.place.place_name, this.place.place_url,
                  this.place.road_address_name, this.place.x, this.place.y).toEntity(),
            this.startTime,
            this.endTime,
            this.expense,
            this.memo,
        )
    }
}
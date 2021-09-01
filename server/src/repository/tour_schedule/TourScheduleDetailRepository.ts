import { createQueryBuilder, EntityRepository } from "typeorm";
import { TourScheduleDetail } from "../../entity/tour_schedule/TourScheduleDetail";

@EntityRepository(TourScheduleDetail)
export class TourScheduleDetailRepository {
    findAll() {
        return createQueryBuilder()
            .select("tour_schedule_detail")
            .from(TourScheduleDetail, "tour_schedule_detail")
            .getMany();
    }

    findOneById(id: number) {
        return createQueryBuilder()
            .select("tour_schedule_detail")
            .from(TourScheduleDetail, "tour_schedule_detail")
            .where("tour_schedule_detail.id = :id", { id: id })
            .getOne();
    }

    createScheduleDetail() {
        
    }
}
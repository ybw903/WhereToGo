import { createQueryBuilder, EntityRepository, getRepository } from "typeorm";
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


    findManyByTourScheduleId(tourScheduleId: number) {
        return getRepository("tour_schedule_detail").createQueryBuilder("tour_schedule_detail")
            .innerJoinAndSelect("tour_schedule_detail.tourSchedule","tourSchedule" )
            .where("tourSchedule.id = :id", {id: tourScheduleId})
            .getMany();
    }
}
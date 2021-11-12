import { createQueryBuilder, EntityRepository } from "typeorm";
import { TourSchedule } from "../../entity/tour_schedule/TourSchedule";

@EntityRepository(TourSchedule)
export class TourScheduleQueryRepository {
    findAll() {
        return createQueryBuilder()
            .select("tour_schedule")
            .from(TourSchedule, "tour_schedule")
            .getMany();
    }

    findAllWithDetail() {
        return createQueryBuilder("tour_schedule")
            .leftJoinAndSelect("tour_schedule.tourScheduleDetail","tour_schedule_detail")
            .getMany();
    }


    findOneById(id: number) {
        return createQueryBuilder()
            .select("tour_schedule")
            .from(TourSchedule, "tour_schedule")
            .where("tour_schedule.id = :id", { id: id })
            .getOne();
    }

}
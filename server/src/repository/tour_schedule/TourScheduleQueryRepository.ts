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

    findOneById(id: number) {
        return createQueryBuilder()
            .select("tour_schedule")
            .from(TourSchedule, "tour_schedule")
            .where("tour_schedule.id = :id", { id: id })
            .getOne();
    }

}
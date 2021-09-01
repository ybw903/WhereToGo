import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { TourSchedule } from "../../entity/tour_schedule/TourSchedule";
import { TourScheduleQueryRepository } from "../../repository/tour_schedule/TourScheduleQueryRepository";

@Service()
export class TourScheduleService {
    constructor(
        @InjectRepository() private tourScheduleQueryRepository: TourScheduleQueryRepository
    ){}

    async findAll(): Promise<TourSchedule[]> {
        return await this.tourScheduleQueryRepository.findAll();
    }

    
}
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { TourScheduleDetail } from "../../entity/tour_schedule/TourScheduleDetail";
import { TourScheduleDetailRepository } from "../../repository/tour_schedule/TourScheduleDetailRepository";

@Service()
export class TourScheduleDetailService {
    constructor(
        @InjectRepository() private tourScheduleDetailRepository: TourScheduleDetailRepository,
    ){}

    async findAll(): Promise<TourScheduleDetail[]> {
        return await this.tourScheduleDetailRepository.findAll();
    }

    async findById(id: number): Promise<TourScheduleDetail|undefined> {
        return await this.tourScheduleDetailRepository.findOneById(id);
    }

    async findByTourScheduleId(tourScheduleId: number): Promise<any> {
        return await this.tourScheduleDetailRepository.findManyByTourScheduleId(tourScheduleId);
    }
}
import { Service } from "typedi";
import { EntityManager, Transaction, TransactionManager } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { TourSchedule } from "../../entity/tour_schedule/TourSchedule";
import { TourScheduleQueryRepository } from "../../repository/tour_schedule/TourScheduleQueryRepository";
import { TourScheduleCreateDto } from "./dto/TourScheduleCreateDto";

@Service()
export class TourScheduleService {
    constructor(
        @InjectRepository() private tourScheduleQueryRepository: TourScheduleQueryRepository
    ){}

    async findAll(): Promise<TourSchedule[]> {
        return await this.tourScheduleQueryRepository.findAll();
    }

    @Transaction()
    async create(
        tourScheduleCreateDto: TourScheduleCreateDto,
        @TransactionManager() manager?: EntityManager
    ): Promise<Number> {
        const tourSchedule = await manager?.save(tourScheduleCreateDto.toEntity());
        return Number(tourSchedule?.id);
    }
}
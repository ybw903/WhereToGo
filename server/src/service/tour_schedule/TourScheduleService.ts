import { Service } from "typedi";
import { EntityManager, Transaction, TransactionManager } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { TourSchedule } from "../../entity/tour_schedule/TourSchedule";
import { PlaceRepository } from "../../repository/place/PlaceRepository";
import { TourScheduleQueryRepository } from "../../repository/tour_schedule/TourScheduleQueryRepository";
import { TourScheduleCreateDto } from "./dto/TourScheduleCreateDto";

@Service()
export class TourScheduleService {
    constructor(
        @InjectRepository() private tourScheduleQueryRepository: TourScheduleQueryRepository,
        @InjectRepository() private placeRepository: PlaceRepository
    ){}

    async findAll(): Promise<TourSchedule[]> {
        return await this.tourScheduleQueryRepository.findAll();
    }

    @Transaction()
    async create(
        tourScheduleCreateDto: TourScheduleCreateDto,
        @TransactionManager() manager?: EntityManager
    ): Promise<Number> {
        const tourSchedule = tourScheduleCreateDto.toEntity();
        tourSchedule.tourScheduleDetails.forEach(async(tourSchedule) => {
            const place = tourSchedule.place;
            const plaecGetByRepository = await this.placeRepository.findOneById(place.id);
            console.log(plaecGetByRepository);
            if(plaecGetByRepository === undefined) {
                this.placeRepository.save(place);
            }
        });
        
        const savedTourSchedule = await manager?.save(tourSchedule);
                                    
        return Number(savedTourSchedule?.id);
    }
}
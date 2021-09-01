import { Get, HttpCode, JsonController, Res } from "routing-controllers";
import { Response } from "express";
import { TourScheduleService } from "../service/tour_schedule/TourScheduleService";

@JsonController("/tour_schedule")
export class TourScheduleController {

    constructor(private tourScheduleService: TourScheduleService) {
    }

    @HttpCode(200)
    @Get("/")
    public async get(@Res() res: Response) {
        try {
            return await this.tourScheduleService.findAll();
        } catch(error) {
            console.log(error);
        }
    }
}
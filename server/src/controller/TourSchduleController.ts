import { Get, HttpCode, JsonController, Res } from "routing-controllers";
import { Response } from "express";

@JsonController("/tour_schedule")
export class TourScheduleController {

    @HttpCode(200)
    @Get("/")
    public async get(@Res() res: Response) {
        return {"omg" : "omg"};
    }
}
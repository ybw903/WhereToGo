import { Body, Get, HttpCode, JsonController, Param, Patch, Post, Res } from "routing-controllers";
import { Response } from "express";
import { TourScheduleService } from "../service/tour_schedule/TourScheduleService";
import { TourScheduleCreateDto } from "../service/tour_schedule/dto/TourScheduleCreateDto";
import { TourScheduleDetailService } from "../service/tour_schedule/TourScheduleDetailService";

@JsonController("/tour_schedule")
export class TourScheduleController {

    constructor(private tourScheduleService: TourScheduleService, private tourScheduleDetailService: TourScheduleDetailService) {
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

    @HttpCode(200)
    @Get("/details/:id")
    public async getDetail(
        @Param("id") id : number,
        @Res() res: Response
    ) {
        try {
            return await this.tourScheduleDetailService.findByTourScheduleId(id);
        } catch(error) {
            console.log(error);
        }
    }

    @HttpCode(200)
    @Get("/test")
    public getTime() {
        return {"thisTime" : new Date()};
    }

    @HttpCode(200)
    @Post("/")
    public async create(
        @Body() createDto: TourScheduleCreateDto,
        @Res() res: Response
    ) {
        try {
            return await this.tourScheduleService.create(createDto, undefined);
        } catch(e) {
            console.log(e);

        }
    }

    @HttpCode(200)
    @Patch("/:id/update")
    public async update(
        @Param("id") id : number,
        @Res() res: Response
    ) {
        try {

        } catch(e) {
            console.log(e);

        }
    }
}
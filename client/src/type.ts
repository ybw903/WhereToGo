export type TourData = {
    title: string
    content: string
}

export type ImageInfo = {
    imgUrl: string
    title: string
}

export type ScheduleInfo = {
    id : number
    startTime: string
    endTime: string
    place: any
    expense: number
    memo: string
}

export type TourSchedule = {
    name: string
    tourScheduleDetails: TourScheduleDetail[];
}

export type TourScheduleDetail  = {
    place: Place
    startTime: Date
    endTime: Date
    expense: number
    memo: string
}

export type Place = {
    id: number
    address_name: string
    category_group_code: string
    category_group_name: string
    category_name: string
    phone: string
    place_name: string;
    place_url: string;
    road_address_name: string;
    x: number
    y: number
}
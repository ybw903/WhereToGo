import { Place } from "../../../entity/place/place";

export class PlaceCreateDto {

    id: number
    address_name: string;
    category_group_code: string;
    category_group_name: string;
    category_name: string;
    phone: string;
    place_name: string;
    place_url: string;
    road_address_name: string;
    x: number
    y: number

    public toEntity():Place {
        return Place.create(
            this.id, this.address_name, this.category_group_code, this.category_group_name,
            this.phone, this.place_name, this.place_url, this.road_address_name,
            this.x, this.y
        );
    }
}
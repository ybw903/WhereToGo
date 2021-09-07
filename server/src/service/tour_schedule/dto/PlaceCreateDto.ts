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

    static create(
        id: number, address_name: string, category_group_code: string, category_group_name: string,
        category_name:string, phone: string, place_name: string, place_url: string,
        road_address_name: string, x: number, y:number ) {
        let dto = new PlaceCreateDto();
        dto.id = id;
        dto.address_name = address_name;
        dto.category_group_code = category_group_code;
        dto.category_group_name = category_group_name;
        dto.category_name = category_name;
        dto.phone = phone;
        dto.place_name = place_name;
        dto.place_url = place_url;
        dto.road_address_name = road_address_name;
        dto.x = x;
        dto.y = y;
        return dto;
    }

    public toEntity():Place {
        return Place.create(
            this.id, this.address_name, this.category_group_code, this.category_group_name,
            this.category_name, this.phone, this.place_name, this.place_url,
            this.road_address_name,this.x, this.y
        );
    }
}
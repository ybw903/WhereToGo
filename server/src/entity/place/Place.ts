import { Column, Entity,  PrimaryColumn } from "typeorm";

@Entity()
export class Place {

    @PrimaryColumn()
    id: number

    @Column()
    address_name: string;

    @Column()
    category_group_code: string;

    @Column()
    category_group_name: string;

    @Column()
    category_name: string;

    @Column()
    phone: string;

    @Column()
    place_name: string;

    @Column()
    place_url: string;

    @Column()
    road_address_name: string;

    @Column()
    x: number

    @Column()
    y: number


    static create(
        id: number, address_name:string, category_group_code: string, category_group_name:string,
        phone: string, place_name: string, place_url: string, road_address_name: string,
        x: number, y: number) {
        const place = new Place();
        place.id = id;
        place.address_name = address_name;
        place.category_group_code = category_group_code;
        place.category_group_name = category_group_name;
        place.phone = phone;
        place.place_name = place_name;
        place.place_url = place_url;
        place.road_address_name = road_address_name;
        place.x = x;
        place.y = y;
        return place;
    }
}
import { createQueryBuilder, EntityRepository } from "typeorm";
import { Place } from "../../entity/place/Place";

@EntityRepository(Place)
export class PlaceRepository {

    findOneById(id: number) {
        return createQueryBuilder()
            .select("place")
            .from(Place, "place")
            .where("place.id = :id", { id: id })
            .getOne();
    }

    save(place: Place) {
        return createQueryBuilder()
                .insert()
                .into(Place)
                .values(place)
                .execute();
    }

}
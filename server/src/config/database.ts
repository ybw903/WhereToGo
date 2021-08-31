import Container from "typedi";
import { ConnectionOptions, createConnection, getConnectionManager, useContainer } from "typeorm";
import {env} from './env';
export async function createDatabaseConnection(): Promise<void> {
    const connectionOption: ConnectionOptions = {
        type: "mysql",
        host: env.database.host,
        port: env.database.port,
        username: env.database.username,
        password: env.database.password,
        database: env.database.database,
        synchronize: env.database.synchronize,
        logging: env.database.logging,
        dropSchema: env.database.dropSchema,
        entities: [
            "src/entity/**/*.ts",
        ],
        migrations: [
            "migration/**/*.ts",
        ],
        subscribers: [
            "src/subscriber/**/*.ts",
        ],
        cli: {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber",
        },
    };

    useContainer(Container);
    if(!getConnectionManager().has("default")) {
        await createConnection(connectionOption);
    }
}
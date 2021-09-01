import express from 'express';
import { useContainer as routingUseContainer, useExpressServer } from 'routing-controllers';
import Container from 'typedi';
import { createDatabaseConnection } from './config/database';
import { TourScheduleController } from './controller/TourSchduleController';

export class App {
  public app;
  constructor() {
    this.app = express();
    this.setExpress();
    this.setDatabase();
    this.setMiddlewares();
  }

  private setExpress():void {
    try {
      routingUseContainer(Container);
      useExpressServer(this.app, {
        routePrefix: "/api",
        controllers: [TourScheduleController],
      });
    } catch(error) {
      console.log(error);
    }
  }

  public async setDatabase(): Promise<void> {
    try {
      await createDatabaseConnection();
    } catch(error) {
      console.log(error);
      throw error;
    }
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
  }
}
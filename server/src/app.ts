import express from 'express';
import { createDatabaseConnection } from './config/database';

export class App {
  public app;
  constructor() {
    this.app = express();
    this.setDatabase();
  }

  public async setDatabase(): Promise<void> {
    try {
      await createDatabaseConnection();
    } catch(error) {
      console.log(error);
      throw error;
    }
  }
}
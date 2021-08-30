import express from 'express';

export class App {
  public app;
  constructor() {
    this.app = express();
  }
}
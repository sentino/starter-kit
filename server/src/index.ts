import * as express from 'express';


class Server {
  app: express.Application;
  port: number = 3001;


  constructor () {
    this.app = express();
    this.onInit();
  }


  onInit (): void {
    this.app.listen(this.port, () => {
      // Success callback
      console.log(`Listening at http://localhost:${this.port}/`);
    });
  }
}

const server = new Server();

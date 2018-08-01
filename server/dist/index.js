"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.port = 3001;
        this.app = express();
        this.onInit();
    }
    onInit() {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}/`);
        });
    }
}
const server = new Server();
//# sourceMappingURL=index.js.map
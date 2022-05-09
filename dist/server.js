"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path_1 = require("path");
const commands_1 = require("./commands");
const app = express();
console.log(__dirname);
app.use(express.static((0, path_1.join)(__dirname, '../public')));
app.get('/', (_, res) => {
    res.send('<h1>My application</h1>');
});
app.get('/execmd', (req, res) => {
    console.log(req.query);
    if (!req.query.command) {
        res.send({
            error: 'A title has to be provided',
        });
    }
    else {
        (0, commands_1.execmdSpawn)(req.query.command, req.query.param, (err, data) => {
            if (err) {
                res.send('<h1>ERROR</h1>');
            }
            else {
                res.send(data?.resolve);
            }
        });
    }
});
app.get('*', (_, res) => {
    res.send('<h1>404</h1>');
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
//# sourceMappingURL=server.js.map
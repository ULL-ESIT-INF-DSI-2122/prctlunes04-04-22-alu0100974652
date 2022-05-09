"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execmdSpawn = void 0;
const child_process_1 = require("child_process");
const execmdSpawn = (cmd, args, cb) => {
    const commanData = (0, child_process_1.spawn)(cmd, [args]);
    let result = '';
    commanData.on('error', (err) => {
        cb(err.message, undefined);
    });
    commanData.on('data', (data) => {
        result = data.toString();
    });
    const response = {
        resolve: result,
    };
    cb(undefined, response);
};
exports.execmdSpawn = execmdSpawn;
//# sourceMappingURL=commands.js.map
const server = require("./server");

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { setGlobalOptions } = require("firebase-functions/v2");
setGlobalOptions({ maxInstances: 10 });

exports.api = onRequest((req, res) => {
  server.emit("request", req, res);
});

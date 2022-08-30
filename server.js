const http = require("http");
const app = require('./src/app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server is runing on http://localhost:${PORT}`)
});


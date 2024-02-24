
            // another lesson
const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://boburmirzosherboev:GDHoOdhY3a3YOgIw@cluster0.cs4cbzo.mongodb.net/Reja";

mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log('Error on connection MONGO DB', err);
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
    const server = http.createServer(app);
    let PORT = process.envPORT || 8005;
    server.listen(PORT, function () {
      console.log(`the server is running successfully on port: ${PORT},
     http://localhost:${PORT}`
    );
    });
    }
}
);
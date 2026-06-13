import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    const res = await client.user.create({
        data: {
            username: Math.random().toString(36).substring(2, 10),
            password: Math.random().toString(36).substring(2, 10)
        }
    })
    console.log(res);

    socket.send("Hi there you are connected to the server");
})

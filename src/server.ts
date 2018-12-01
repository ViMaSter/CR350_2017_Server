import { SessionServer } from "sessionserver"

const server : Promise<SessionServer> = SessionServer.Create(parseInt(process.env.PORT || "") || 7000);

import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";

const routes = Router();

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.post("/room/:id/create", new RoomController().createVideo);
routes.post("/room/:id/subject", new RoomController().roomSubject);

export default routes;

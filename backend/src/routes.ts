import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
import { ApiError } from "./helpers/api-error";

const routes = Router();

routes.get("/", (req, res) => {
  throw new ApiError("Erro lançado do ApiError", 400);

  return res.json("ok");
});

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.get("/room", new RoomController().list);
routes.post("/room/:id/create", new RoomController().createVideo);
routes.post("/room/:id/subject", new RoomController().roomSubject);

export default routes;

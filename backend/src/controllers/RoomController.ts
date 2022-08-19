import { Request, Response } from "express";
export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: " Internal Server Error" });
    }
  }
}

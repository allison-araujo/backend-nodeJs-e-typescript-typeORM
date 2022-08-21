import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepositories";
import { videoRepository } from "./../repositories/videoRepository";
export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      const newRoom = roomRepository.create({ name, description });
      await roomRepository.save(newRoom);

      return res.status(201).json(newRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: " Internal Server Error" });
    }
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { id } = req.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(id) });
      if (!room) {
        return res.status(404).json({ message: "Not exists" });
      }

      const newVideo = videoRepository.create({
        title,
        url,
        room,
      });
      await videoRepository.save(newVideo);
      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async roomSubject(req: Request, res: Response) {
    const { subject_id } = req.body;
    const { id } = req.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(id) });
      if (!room) {
        return res.status(404).json({ message: "Not Found" });
      }

      const subject = await subjectRepository.findOneBy({
        id: Number(subject_id),
      });
      if (!subject) {
        return res.status(404).json({ message: "Not Found Exists subject" });
      }

      const roomUpdate = {
        ...room,
        subjects: [subject],
      };
      await roomRepository.save(roomUpdate);

      return res.status(200).json(room);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

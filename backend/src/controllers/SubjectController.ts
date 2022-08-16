import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepositories";
export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ mensagem: "nome obrigatorio" });
    }

    try {
      const newSubject = subjectRepository.create({ name });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ mensagem: "error interno" });
    }
  }
}

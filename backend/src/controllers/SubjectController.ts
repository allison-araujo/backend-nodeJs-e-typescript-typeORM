import { Request, Response } from "express";
export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ mensagem: "nome obrigatorio" });
    }

    try {
    } catch (error) {
      console.log(error);

      return res.status(500).json({ mensagem: "error interno" });
    }
  }
}

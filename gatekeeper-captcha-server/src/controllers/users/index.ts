import { Request, Response } from "express";
import { User } from "../../database/schemas/User";
import { getUserService } from "../../services/users";

export async function getUserController(req: Request, res: Response) {
  const userEntry = req.user as User;
  try {
    const { data: user } = await getUserService(userEntry.id);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

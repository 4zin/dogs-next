import { Router, Request, Response } from "express";

const router = Router();

router.get("/dogs", (req: Request, res: Response) => {
  res.send({ data: "Perritos" });
});

export { router };

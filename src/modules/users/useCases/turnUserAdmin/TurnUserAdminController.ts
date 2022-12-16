import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {
    console.log("");
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = String(request.headers.user_id);
    return response.json(this.turnUserAdminUseCase.execute({ user_id }));
  }
}

export { TurnUserAdminController };

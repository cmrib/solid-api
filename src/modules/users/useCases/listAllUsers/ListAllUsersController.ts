import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {
    console.log("");
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = String(request.headers.user_id);

    try {
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };

import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {
    console.log("");
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    try {
      return response
        .status(201)
        .json(this.createUserUseCase.execute({ name, email }));
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateUserController };

import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {
    console.log("");
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;
    return response
      .status(201)
      .json(this.createUserUseCase.execute({ name, email }));
  }
}

export { CreateUserController };

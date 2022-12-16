import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  // eslint-disable-next-line prettier/prettier
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui

    const user_id = String(request.params.user_id);

    try {
      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };

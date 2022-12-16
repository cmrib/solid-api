import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {
    console.log("");
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui

    const user_id = String(request.headers.user_id);
    return response.json(this.showUserProfileUseCase.execute({ user_id }));
  }
}

export { ShowUserProfileController };

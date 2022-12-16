import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {
    console.log("");
  }

  execute({ user_id }: IRequest): User {
    // Complete aquiconst user = this.usersRepository.findById(user_id);
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };

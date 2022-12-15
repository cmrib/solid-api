import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {
    console.log("");
  }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };

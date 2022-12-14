import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
	async handle(request: Request, response: Response) {
		const { email, password } = request.body;

		const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

		const authenticateUserInfo = await authenticateUserUseCase.execute({ email, password });
		response.status(200).send(authenticateUserInfo);
	}
}

export { AuthenticateUserController };

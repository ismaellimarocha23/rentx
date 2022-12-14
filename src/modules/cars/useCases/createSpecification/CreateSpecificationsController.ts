import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateSpecificationsController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description } = request.body;

		const createSpecificationUseCase = container.resolve(CreateSpecificationsUseCase);

		await createSpecificationUseCase.execute({ name, description });

		return response.status(201).send({ message: "specification created" });
	}
}

export { CreateSpecificationsController };

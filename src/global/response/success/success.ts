import * as Interfaces from "@interfaces";

class CustomSuccess<T = string>
	implements Interfaces.JSONResponse.JSONResponse<T>
{
	public success: boolean;
	public status: number;
	public message: T;

	constructor(message: T, status?: number) {
		this.message = message;
		this.status = status ?? 200;
		this.success = true;
	}
}

export { CustomSuccess };

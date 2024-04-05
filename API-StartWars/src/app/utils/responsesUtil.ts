export default class {
	static sendResults(
		statusCode: number,
		message: string | string[] | { [s: string]: any } | { [s: string]: any }[],
		callback: (error: any, value: { [s: string]: string | number }) => void
	): void {
		callback(null, {
			statusCode,
			body: JSON.stringify(message),
		});
	}
}

export default class {
	static log(message: string | string[] | { [s: string]: string }): void {
		if (process.env.NODE_ENV !== 'test') {
			if (Array.isArray(message)) {
				console.log('SLS RIMAC', ...message);
			} else if (typeof message === 'string') {
				console.log('SLS RIMAC', message);
			} else {
				console.log('SLS RIMAC', JSON.stringify(message));
			}
		}
	}
}

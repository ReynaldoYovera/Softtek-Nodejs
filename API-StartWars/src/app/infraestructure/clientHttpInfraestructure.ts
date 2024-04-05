import axios from 'axios';

export default class {
	static async getRequest(url: string): Promise<any> {
		const response = await axios.get(url);
		return response;
	}
}

import axios from 'axios';

class HttpService {
	public static getHeader(): any {
		return {
			Authorization: window.localStorage.getItem('auth_token'),
		};
	}

	public static request() {
		const baseURL = process.env.REACT_APP_BASE_URL;

		if (HttpService.getHeader()) {
			return axios.create({ baseURL, headers: { Authorization: HttpService.getHeader() } });
		} else {
			return axios.create({ baseURL });
		}
	}
}

export default HttpService;

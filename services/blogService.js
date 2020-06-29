import axios from 'axios'
const api = axios.create({
	baseURL: 'https://dev.to/api/',
	timeout: 9000,
	headers: {
		'Content-Type': 'application/json',
	}
})
export default {
	async fetchArticles() {
		try {
			return await api.get(`articles?username=simplytammy`)
		} catch (e) {
			return e.response
		}
	},
	async fetchArticleById(id) {
		try {
			return await api.get(`articles/${id}`)
		} catch (e) {
			return e.response
		}
	},
}

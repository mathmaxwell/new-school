import api from '../axios'
export const API_CONFIG = {
	serviceName: 'test',
	clientId: 'test-client',
	userId: '123',
	requestId: 'test-request',
}
export const logIn = (data: { login: string; password: string }) => {
	const encodedCredentials = btoa(`${data.login}:${data.password}`)
	return api.post('/auth/login', {
		API_CONFIG,
		data: {
			username: data.login,
			password: data.password,
			credentials: encodedCredentials,
		},
	})
}

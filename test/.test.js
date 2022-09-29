const supertest = require('supertest');

const { app } = require('../index');

const api = supertest(app);

describe('USERS', () => {
	test('POST Register', async () => {

		const newUser = {
      name: 'Hugo',
			email: 'hugo@gmail.com',
			password: 'hugo1234567',
		};

		api
		.post('/api/users')
		.send(newUser)
		.expect(200)
		.expect('Content-Type', /application\/json/);
	});

	test('POST SignIn', async () => {
		const signIn = {
			email: 'adrian@gmail.com',
			password: 'omg123456789',
		};

		const response = api
			.post('/auth/local/login')
			.send(signIn)
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});
});

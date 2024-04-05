import AWS from 'aws-sdk';
// import ClientHttp from '../../src/infraestructure/client-http.infraestructure';
import ClientHttp from '../../app/infraestructure/clientHttpInfraestructure';
import peopleMock from '../mock/people.json';

import peopleStarWarsMock from '../mock/peopleApiStarwars.json';
import peopleInserted from '../mock/peopleInsert.json';
import { PeopleRepository } from '../../app/repositories';

jest.mock('aws-sdk');
jest.mock('../../app/infraestructure/clientHttpInfraestructure');

describe('people.repository', () => {
	it('getList', async () => {
		(AWS.DynamoDB.DocumentClient as jest.Mock) = jest.fn().mockReturnValue({
			scan: () => {
				return {
					promise: jest.fn().mockResolvedValue({
						Items: peopleMock,
					}),
				};
			},
		});

		const mockGetRequest = jest.fn().mockResolvedValue(peopleStarWarsMock);

		ClientHttp.getRequest = mockGetRequest;

		const peopleRepository = new PeopleRepository();
		const items = await peopleRepository.getList();
		expect(items.length).toBe(4);
	});

	it('insert', async () => {
		(AWS.DynamoDB.DocumentClient as jest.Mock) = jest.fn().mockReturnValue({
			put: (params: { [s: string]: any }) => {
				peopleMock.push(params.Item);
				return {
					promise: jest.fn().mockResolvedValue({
						Items: peopleMock,
					}),
				};
			},
		});

		const peopleRepository = new PeopleRepository();
		const personaId = await peopleRepository.insert(peopleInserted);

		expect(
			peopleMock.findIndex(el => el.personaId === personaId)
		).toBeGreaterThanOrEqual(0);
		expect(peopleMock.length).toBe(3);
	});
});

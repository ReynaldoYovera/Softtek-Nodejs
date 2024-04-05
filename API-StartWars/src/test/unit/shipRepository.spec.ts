import AWS from 'aws-sdk';
import ClientHttp from '../../app/infraestructure/clientHttpInfraestructure';

import shipsMock from '../mock/ships.json';
import shipsStarWarsMock from '../mock/shipApiStarwars.json';
import shipInserted from '../mock/shipInsert.json';
import { ShipsRepository } from '../../app/repositories';

jest.mock('aws-sdk');
jest.mock('../../app/infraestructure/clientHttpInfraestructure');

describe('ship.repository', () => {
	it('getList', async () => {
		(AWS.DynamoDB.DocumentClient as jest.Mock) = jest.fn().mockReturnValue({
			scan: () => {
				return {
					promise: jest.fn().mockResolvedValue({
						Items: shipsMock,
					}),
				};
			},
		});

		const mockGetRequest = jest.fn().mockResolvedValue(shipsStarWarsMock);

		ClientHttp.getRequest = mockGetRequest;

		const shipsRepository = new ShipsRepository();
		const items = await shipsRepository.getList();
		expect(items.length).toBe(4);
	});

	it('insert', async () => {
		(AWS.DynamoDB.DocumentClient as jest.Mock) = jest.fn().mockReturnValue({
			put: (params: { [s: string]: any }) => {
				shipsMock.push(params.Item);
				return {
					promise: jest.fn().mockResolvedValue({
						Items: shipsMock,
					}),
				};
			},
		});

		const shipsRepository = new ShipsRepository();
		const naveId = await shipsRepository.insert(shipInserted);

		expect(
			shipsMock.findIndex(el => el.naveId === naveId)
		).toBeGreaterThanOrEqual(0);
		expect(shipsMock.length).toBe(3);
	});
});

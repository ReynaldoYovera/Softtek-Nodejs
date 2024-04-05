import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { mappingShip } from '../dtos';

import { EntityShip } from '../entities';
import { ClientHttp } from '../infraestructure';
import { IRepository, IStarWars } from '../interfaces';

export default class implements IRepository<EntityShip> {
	async getList(): Promise<EntityShip[]> {
		const dynamo = new AWS.DynamoDB.DocumentClient();

		const response = await ClientHttp.getRequest(
			process.env.ENDPOINT_STARSHIPS
		);

		const responseShips: IStarWars = response.data;
		responseShips.results = mappingShip(responseShips.results);

		const params = {
			TableName: process.env.SHIPS_STARWARS_TABLE,
			Select: 'ALL_ATTRIBUTES',
		};

		const list: any = await dynamo.scan(params).promise();

		return [...list.Items, ...responseShips.results];
	}

	async insert(record: EntityShip): Promise<any> {
		record.naveId = uuidv4();

		const dynamo = new AWS.DynamoDB.DocumentClient();

		const params = {
			TableName: process.env.SHIPS_STARWARS_TABLE,
			Item: record,
		};

		await dynamo.put(params).promise();
		return record.naveId;
	}
}

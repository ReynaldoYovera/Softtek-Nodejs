import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { mappingPeople } from '../dtos';

import { EntityPeople } from '../entities';
import { ClientHttp } from '../infraestructure';
import { IRepository, IStarWars } from '../interfaces';

export default class implements IRepository<EntityPeople> {
	async getList(): Promise<EntityPeople[]> {
		const dynamo = new AWS.DynamoDB.DocumentClient();

		const response = await ClientHttp.getRequest(process.env.ENDPOINT_PEOPLE);

		const responsePeople: IStarWars = response.data;
		responsePeople.results = mappingPeople(responsePeople.results);

		const params = {
			TableName: process.env.PEOPLE_STARWARS_TABLE,
			Select: 'ALL_ATTRIBUTES',
		};

		const list: any = await dynamo.scan(params).promise();

		return [...list.Items, ...responsePeople.results];
	}

	async insert(record: EntityPeople): Promise<any> {
		record.personaId = uuidv4();

		const dynamo = new AWS.DynamoDB.DocumentClient();

		const params = {
			TableName: process.env.PEOPLE_STARWARS_TABLE,
			Item: record,
		};

		await dynamo.put(params).promise();
		return record.personaId;
	}
}

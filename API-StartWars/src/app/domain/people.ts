import { mappingPeopleInsert } from '../dtos';
import { EntityPeople } from '../entities';
import { PeopleRepository } from '../repositories';
import { MessageUtil, ResponsesUtil } from '../utils';


const getPeople = async (
    event: { [s: string]: any },
	context: { [s: string]: any },
	callback: (error: any, value: { [s: string]: string | number }) => void
): Promise<any> => {
	MessageUtil.log('call getPeople');
	const peopleRepository: PeopleRepository = new PeopleRepository();
	const peopleStarWars: EntityPeople[] = await peopleRepository.getList();

	ResponsesUtil.sendResults(200, peopleStarWars, callback);
};
const setPeople = async (
	event: { [s: string]: any },
	context: { [s: string]: any },
	callback: (error: any, value: { [s: string]: string | number }) => void
): Promise<any> => {
	MessageUtil.log('call setPeople');
	MessageUtil.log(`with ${event.body}`);

	const body = JSON.parse(event.body);
	const people: any = mappingPeopleInsert(body);

	const peopleRepository: PeopleRepository = new PeopleRepository();
	const response = await peopleRepository.insert(people);

	ResponsesUtil.sendResults(200, response, callback);
};

export { getPeople, setPeople };
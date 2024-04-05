import { mappingShipInsert } from '../dtos';
import { EntityShip } from '../entities';
import { ShipsRepository } from '../repositories';
import { MessageUtil, ResponsesUtil } from '../utils';

const getShips = async (
	event: { [s: string]: any },
	context: { [s: string]: any },
	callback: (error: any, value: { [s: string]: string | number }) => void
): Promise<any> => {
	MessageUtil.log('call getShips');
	const shipsRepository: ShipsRepository = new ShipsRepository();
	const shipsStarWars: EntityShip[] = await shipsRepository.getList();

	ResponsesUtil.sendResults(200, shipsStarWars, callback);
};

const setShip = async (
	event: { [s: string]: any },
	context: { [s: string]: any },
	callback: (error: any, value: { [s: string]: string | number }) => void
): Promise<any> => {
	MessageUtil.log('call setShips');
	MessageUtil.log(`with ${event.body}`);

	const body = JSON.parse(event.body);
	const ship: any = mappingShipInsert(body);

	const shipsRepository: ShipsRepository = new ShipsRepository();
	const response = await shipsRepository.insert(ship);

	ResponsesUtil.sendResults(200, response, callback);
};

export { getShips, setShip };

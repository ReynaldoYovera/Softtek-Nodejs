import { EntityShip } from '../entities';

const byDefault = (element: any | any[]): EntityShip | EntityShip[] => {
	if (!element) {
		return [];
	}

	let valueReturn: EntityShip | EntityShip[];

	if (Array.isArray(element)) {
		valueReturn = element.map(it => {
			return {
				naveId: it.naveId ? it.naveId : '',
				nombre: it.name ? it.name : '',
				modelo: it.model ? it.model : '',
				fabricante: it.manufacturer ? it.manufacturer : '',
				costo_en_creditos: it.cost_in_credit ? it.cost_in_credit : '',
				longitud: it.length ? it.length : '',
				max_velocidad: it.max_atmosphering_speed
					? it.max_atmosphering_speed
					: '',
				tripulacion: it.crew ? it.crew : '',
				pasajeros: it.passengers ? it.passengers : '',
				capacidad_carga: it.cargo_capacity ? it.cargo_capacity : '',
				consumibles: it.consumables ? it.consumables : '',
				ranking: it.hyperdrive_rating ? it.hyperdrive_rating : '',
				MGLT: it.MGLT ? it.MGLT : '',
				clase: it.starship_class ? it.starship_class : '',
				pilotos: it.pilots ? it.pilots : [],
				peliculas: it.films ? it.films : [],
				creado: it.created ? it.created : '',
				editado: it.edited ? it.edited : '',
				url: it.url ? it.url : '',
			};
		});
	} else {
		valueReturn = {
			naveId: element.naveId ? element.naveId : '',
			nombre: element.name ? element.name : '',
			modelo: element.model ? element.model : '',
			fabricante: element.manufacturer ? element.manufacturer : '',
			costo_en_creditos: element.cost_in_credits ? element.cost_in_credits : '',
			longitud: element.length ? element.length : '',
			max_velocidad: element.max_atmosphering_speed
				? element.max_atmosphering_speed
				: '',
			tripulacion: element.crew ? element.crew : '',
			pasajeros: element.passengers ? element.passengers : '',
			capacidad_carga: element.cargo_capacity ? element.cargo_capacity : '',
			consumibles: element.consumables ? element.consumables : '',
			ranking: element.hyperdrive_rating ? element.hyperdrive_rating : '',
			MGLT: element.MGLT ? element.MGLT : '',
			clase: element.starship_class ? element.starship_class : '',
			pilotos: element.pilots ? element.pilots : [],
			peliculas: element.films ? element.films : [],
			creado: element.created ? element.created : '',
			editado: element.edited ? element.edited : '',
			url: element.url ? element.url : '',
		};
	}
	return valueReturn;
};

export default byDefault;

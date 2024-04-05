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
				nombre: it.nombre ? it.nombre : '',
				modelo: it.modelo ? it.modelo : '',
				fabricante: it.fabricante ? it.fabricante : '',
				costo_en_creditos: it.costo_en_creditos ? it.costo_en_creditos : '',
				longitud: it.longitud ? it.longitud : '',
				max_velocidad: it.max_velocidad ? it.max_velocidad : '',
				tripulacion: it.tripulacion ? it.tripulacion : '',
				pasajeros: it.pasajeros ? it.pasajeros : '',
				capacidad_carga: it.capacidad_carga ? it.capacidad_carga : '',
				consumibles: it.consumibles ? it.consumibles : '',
				ranking: it.ranking ? it.ranking : '',
				MGLT: it.MGLT ? it.MGLT : '',
				clase: it.clase ? it.clase : '',
				pilotos: it.pilotos ? it.pilotos : [],
				peliculas: it.peliculas ? it.peliculas : [],
				creado: it.creado ? it.creado : '',
				editado: it.editado ? it.editado : '',
				url: it.url ? it.url : '',
			};
		});
	} else {
		valueReturn = {
			naveId: element.naveId ? element.naveId : '',
			nombre: element.nombre ? element.nombre : '',
			modelo: element.modelo ? element.modelo : '',
			fabricante: element.fabricante ? element.fabricante : '',
			costo_en_creditos: element.costo_en_creditos
				? element.costo_en_creditos
				: '',
			longitud: element.longitud ? element.longitud : '',
			max_velocidad: element.max_velocidad ? element.max_velocidad : '',
			tripulacion: element.tripulacion ? element.tripulacion : '',
			pasajeros: element.pasajeros ? element.pasajeros : '',
			capacidad_carga: element.capacidad_carga ? element.capacidad_carga : '',
			consumibles: element.consumibles ? element.consumibles : '',
			ranking: element.ranking ? element.ranking : '',
			MGLT: element.MGLT ? element.MGLT : '',
			clase: element.clase ? element.clase : '',
			pilotos: element.pilotos ? element.pilotos : [],
			peliculas: element.peliculas ? element.peliculas : [],
			creado: element.creado ? element.creado : '',
			editado: element.editado ? element.editado : '',
			url: element.url ? element.url : '',
		};
	}
	return valueReturn;
};

export default byDefault;

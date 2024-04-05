import { EntityPeople } from '../entities';

const byDefault = (element: any | any[]): EntityPeople | EntityPeople[] => {
	if (!element) {
		return [];
	}

	let valueReturn: EntityPeople | EntityPeople[];

	if (Array.isArray(element)) {
		valueReturn = element.map(it => {
			return {
				personaId: it.peopleId ? it.peopleId : '',
				nombre: it.nombre ? it.nombre : '',
				altura: it.height ? it.height : '',
				peso: it.peso ? it.peso : '',
				color_pelo: it.color_pelo ? it.color_pelo : '',
				color_piel: it.color_piel ? it.color_piel : '',
				color_ojo: it.color_ojo ? it.color_ojo : '',
				anio_nacimiento: it.anio_nacimiento ? it.anio_nacimiento : '',
				genero: it.genero ? it.genero : '',
				hogar: it.hogar ? it.hogar : '',
				peliculas: it.peliculas ? it.peliculas : [],
				especies: it.especies ? it.especies : [],
				vehiculos: it.vehiculos ? it.vehiculos : [],
				naves: it.naves ? it.naves : [],
				creado: it.creado ? it.creado : '',
				editado: it.editado ? it.editado : '',
				url: it.url ? it.url : '',
			};
		});
	} else {
		valueReturn = {
			personaId: element.personaId ? element.personaId : '',
			nombre: element.nombre ? element.nombre : '',
			altura: element.altura ? element.altura : '',
			peso: element.peso ? element.peso : '',
			color_pelo: element.color_pelo ? element.color_pelo : '',
			color_piel: element.color_piel ? element.color_piel : '',
			color_ojo: element.color_ojo ? element.color_ojo : '',
			anio_nacimiento: element.anio_nacimiento ? element.anio_nacimiento : '',
			genero: element.genero ? element.genero : '',
			hogar: element.hogar ? element.hogar : '',
			peliculas: element.peliculas ? element.peliculas : [],
			especies: element.especies ? element.especies : [],
			vehiculos: element.vehiculos ? element.vehiculos : [],
			naves: element.naves ? element.naves : [],
			creado: element.creado ? element.creado : '',
			editado: element.editado ? element.editado : '',
			url: element.url ? element.url : '',
		};
	}
	return valueReturn;
};

export default byDefault;

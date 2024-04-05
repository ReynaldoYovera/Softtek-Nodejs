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
				nombre: it.name ? it.name : '',
				altura: it.height ? it.height : '',
				peso: it.mass ? it.mass : '',
				color_pelo: it.hair_color ? it.hair_color : '',
				color_piel: it.skin_color ? it.skin_color : '',
				color_ojo: it.eye_color ? it.eye_color : '',
				anio_nacimiento: it.birth_year ? it.birth_year : '',
				genero: it.gender ? it.gender : '',
				hogar: it.homeworld ? it.homeworld : '',
				peliculas: it.films ? it.films : [],
				especies: it.species ? it.species : [],
				vehiculos: it.vehicles ? it.vehicles : [],
				naves: it.starships ? it.starships : [],
				creado: it.created ? it.created : '',
				editado: it.edited ? it.edited : '',
				url: it.url ? it.url : '',
			};
		});
	} else {
		valueReturn = {
			personaId: element.peopleId ? element.peopleId : '',
			nombre: element.name ? element.name : '',
			altura: element.height ? element.height : '',
			peso: element.mass ? element.mass : '',
			color_pelo: element.hair_color ? element.hair_color : '',
			color_piel: element.skin_color ? element.skin_color : '',
			color_ojo: element.eye_color ? element.eye_color : '',
			anio_nacimiento: element.birth_year ? element.birth_year : '',
			genero: element.gender ? element.gender : '',
			hogar: element.homeworld ? element.homeworld : '',
			peliculas: element.films ? element.films : [],
			especies: element.species ? element.species : [],
			vehiculos: element.vehicles ? element.vehicles : [],
			naves: element.starships ? element.starships : [],
			creado: element.created ? element.created : '',
			editado: element.edited ? element.edited : '',
			url: element.url ? element.url : '',
		};
	}
	return valueReturn;
};

export default byDefault;
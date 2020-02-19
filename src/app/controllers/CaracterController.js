/* eslint-disable consistent-return */
import axios from 'axios';
import { next } from 'sucrase/dist/parser/tokenizer';

import Caracter from '../models/Caracter';
import treatUrlTobsolutePath from '../../utils/treatUrlToAbsolutePath';
import parseStringInArray from '../../utils/parseStringInArray';

class CaracterController {
  async index(req, res) {
    const caracters = await Caracter.findAll();

    return caracters
      ? res.json(caracters)
      : res.status(404).json({
          error:
            'This database is empty, please run the store method to fill it.',
        });
  }

  async store(req, res) {
    const swapiResponse = await axios.get('https://swapi.co/api/people/');

    await swapiResponse.data.results.map(async result => {
      const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        homeworld,
        films,
        species,
        vehicles,
        starships,
      } = result;

      const hairArray = parseStringInArray(hair_color);
      const skinArray = parseStringInArray(skin_color);
      const treatedHomeworld = treatUrlTobsolutePath(homeworld);
      const treatedFilms = films.map(film => treatUrlTobsolutePath(film));
      const treatedSpecies = species.map(specie => {
        return treatUrlTobsolutePath(specie);
      });
      const treatedVehicles = vehicles.map(vehicle => {
        return treatUrlTobsolutePath(vehicle);
      });
      const treatedStarships = starships.map(starship => {
        return treatUrlTobsolutePath(starship);
      });

      const caracter = {
        name,
        height,
        mass,
        hair_color: hairArray,
        skin_color: skinArray,
        eye_color,
        birth_year,
        gender,
        homeworld: treatedHomeworld,
        films: treatedFilms,
        species: treatedSpecies,
        vehicles: treatedVehicles,
        starships: treatedStarships,
      };

      try {
        const caracters = await Caracter.create(caracter);
        return res.json(caracters);
      } catch (e) {
        next(e);
      }
    });
  }

  async show(req, res) {
    const caracter = await Caracter.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (caracter) {
      return res.json(caracter);
    }
    return res.status(404).json({
      error:
        'This caracter could not be found, please be free to create this on the database.',
    });
  }
}

export default new CaracterController();

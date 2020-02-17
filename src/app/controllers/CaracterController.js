import Caracter from '../models/Caracter';
import axios from 'axios';
import { next } from 'sucrase/dist/parser/tokenizer';

class CaracterController {
    async index(req, res) {
        const caracters = await Caracter.findAll();

        return caracters ? res.json(caracters) : res.status(404).json({ error: 'This database is empty, please run the store method to fill it.' });
    }

    async store(req, res) {
            const swapiResponse = await axios.get('https://swapi.co/api/people/');

            await swapiResponse.data.results.map(async (result) => {
                const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = result;
                const _caracter = {
                    name,
                    height, 
                    mass, 
                    hair_color, 
                    skin_color, 
                    eye_color, 
                    birth_year, 
                    gender, 
                    homeworld
                };

                try {
                    const caracter = await Caracter.create(_caracter);
                    return res.json(caracter);

                } catch (e) {
                    console.log(_caracter);
                    console.log(e);
                    next(e);

                }
            });
    }

    async show(req, res) {
        const caracter = await Caracter.findOne({
            where: {
                id: req.params.id
            }
        });

        if(caracter) {
            return res.json(caracter);
        } else {
            return res.status(404).json({ error: 'This caracter could not be found, please be free to create this on the database.' })
        }
    }
}

export default new CaracterController();
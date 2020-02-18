import Sequelize, { Model } from 'sequelize';

class Caracter extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        height: Sequelize.INTEGER,
        mass: Sequelize.INTEGER,
        hair_color: Sequelize.ARRAY(Sequelize.STRING),
        skin_color: Sequelize.ARRAY(Sequelize.STRING),
        eye_color: Sequelize.STRING,
        birth_year: Sequelize.STRING,
        gender: Sequelize.STRING,
        homeworld: Sequelize.STRING,
        films: Sequelize.ARRAY(Sequelize.STRING),
        species: Sequelize.ARRAY(Sequelize.STRING),
        vehicles: Sequelize.ARRAY(Sequelize.STRING),
        starships: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
      }
    );
  }
}

export default Caracter;

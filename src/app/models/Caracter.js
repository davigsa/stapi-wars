import Sequelize, { Model } from 'sequelize';

class Caracter extends Model {
    static init(sequelize) {
        super.init({
          name: Sequelize.STRING,
          height: Sequelize.INTEGER,
          mass: Sequelize.INTEGER,
          hair_color: Sequelize.STRING,
          skin_color: Sequelize.STRING,
          eye_color: Sequelize.STRING,
          birth_year: Sequelize.STRING,
          gender: Sequelize.STRING,
          homeworld: Sequelize.STRING,
    }, {
        sequelize
    }
    );
}
}

export default Caracter;
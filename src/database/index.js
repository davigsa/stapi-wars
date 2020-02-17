import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Caracter from '../app/models/Caracter';

const models = [Caracter];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
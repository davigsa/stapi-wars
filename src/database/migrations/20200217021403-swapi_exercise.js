module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('caracters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mass: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hair_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      skin_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eye_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_year: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeworld: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: queryInterface => queryInterface.dropTable('caracters'),
};

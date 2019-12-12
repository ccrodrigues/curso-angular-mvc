module.exports = (sequelize, DataTypes) => {

    const Professor = sequelize.define('professor', {

        idprofessor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,

    });

    return Professor;
}
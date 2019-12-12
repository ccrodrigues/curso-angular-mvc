const Sequelize = require('sequelize')
const ProfessorModel = require('./models/professor')


const sequelize = new Sequelize('grandeporte', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: { 
      freezeTableName: true, 
      timestamps: false 
    },
  
})



const Professor = ProfessorModel(sequelize, Sequelize)

module.exports = {
    Professor
}
/*const Sequelize = require('sequelize'); //old content from when I was using SQL and sequelize


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  //host: 'localhost',
  dialect: 'postgres',
  //protocol: 'postgres', //new
  logging: false,
  dialectOptions: {
      ssl: { sslmode: "require", rejectUnauthorized: false}
    }
  // SQLite only
  //storage: 'database.sqlite',
});

const Profiles = sequelize.import('models/Profiles');
const npcProfiles = sequelize.import('models/npcProfiles');
const monstProfiles = sequelize.import('models/monstProfiles');
const npcSkills = sequelize.import('models/npcSkills');

const Buildings = sequelize.import('models/Buildings');

const Points = sequelize.import('models/Points');

const Xhiapets = sequelize.import('models/Xhiapets');


module.exports = { Profiles, npcProfiles, monstProfiles, Buildings, Points, Xhiapets, npcSkills };*/
/*const Sequelize = require('sequelize');  //once again this is old content from when I was using SQL and sequelize

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

const force = process.argv.includes('--force') || process.argv.includes('-f');

//const Profiles = sequelize.import('models/Profiles');

sequelize.import('models/Profiles');

sequelize.import('models/npcProfiles');

sequelize.import('models/monstProfiles');

sequelize.import('models/Buildings');

sequelize.import('models/Points');

sequelize.import('models/Xhiapets');

sequelize.import('models/npcSkills');

//sequelize.sync({ force });

/*sequelize.sync({ force }).then(async () => {

	const card = [

	Profiles.upsert({ name: 'Eamon', magical: 'blank', physical: 'blank', extra: 'blank', }),


  ];
  await Promise.all(card);
  console.log('Database synced');
  sequelize.close();

	}).catch(console.error);*/
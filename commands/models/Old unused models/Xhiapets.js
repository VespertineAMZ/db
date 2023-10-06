module.exports = (sequelize, DataTypes) => {
return sequelize.define('xhiapet', {
	username: {
		type: DataTypes.STRING,
		unique: true,
	},
	image: DataTypes.STRING,
	name: DataTypes.STRING,
	experience: DataTypes.INTEGER,
	personality: DataTypes.STRING,
	hp: DataTypes.INTEGER,
	magic: DataTypes.INTEGER,
	emoji: DataTypes.STRING,

});

};
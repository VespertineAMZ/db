module.exports = (sequelize, DataTypes) => {
return sequelize.define('profile', {
	name: {
		type: DataTypes.STRING,
		unique: true,
	},
	description: DataTypes.TEXT,
	username: DataTypes.STRING,
	image: DataTypes.STRING,
	magic: DataTypes.STRING,
	vitality: DataTypes.STRING,
	physical: DataTypes.STRING,
	arcane: DataTypes.STRING,
	academics: DataTypes.STRING,
	attunement: DataTypes.STRING,
	blessings: DataTypes.STRING,
	skills: DataTypes.TEXT,
	reputation: DataTypes.INTEGER,
	experience: DataTypes.INTEGER,
	magical: {
		type: DataTypes.TEXT,
		defaultValue: 'blank',
		allowNull: true,
	},
	extra: {
		type: DataTypes.TEXT,
		defaultValue: 'blank',
		allowNull: true,
	},

});

};
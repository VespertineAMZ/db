module.exports = (sequelize, DataTypes) => {
return sequelize.define('npcskills', {
	name: DataTypes.STRING,
	magical: DataTypes.TEXT,
	weapons: DataTypes.TEXT,
	extra: DataTypes.TEXT,
	extra1: DataTypes.TEXT,

});

};
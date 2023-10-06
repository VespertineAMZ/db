module.exports = (sequelize, DataTypes) => {
return sequelize.define('buildings', {
	name: {
		type: DataTypes.STRING,
		unique: true,
	},
	progress: DataTypes.INTEGER,
	research: DataTypes.INTEGER,

});

};
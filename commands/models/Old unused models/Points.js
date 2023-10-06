module.exports = (sequelize, DataTypes) => {
return sequelize.define('points', {
	/*user_id: {
		type: DataTypes.STRING,
		unique: true,
	},*/
	name: DataTypes.STRING,
	rank: DataTypes.INTEGER,

});

};
const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');

module.exports = {
	name: 'charstats',
	description: 'edit a character profile stats.',
	aliases: ['editcharstats', 'editprofilestats', 'charastats'],
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const charDescription = splitArgs.join(' ');

		const profileData = await Profile.findOneAndUpdate(
				{
					name: charName,
				}, 
				{
					$set: {

						vitality: args[1],
						physical: args[2],
						arcane: args[3],
						academics: args[4],
						lore: args[5],
						blessings: args[6],
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}

return message.reply(`Could not find a profile with name ${charName}.`);



	},
};
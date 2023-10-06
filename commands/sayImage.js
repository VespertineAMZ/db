const Discord = require("discord.js");
const Profile = require('./models/SaySchema');

module.exports = {
	name: 'sayimage',
	description: 'edit the image on the custom say command.',
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const charDescription = splitArgs.join(' ');

		const profileData = await Profile.findOneAndUpdate(
				{
					title: charName,
				}, 
				{
					$set: {

						image: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find a say with command ${charName}.`);


	},
};
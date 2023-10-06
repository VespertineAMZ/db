const Discord = require("discord.js");
const Profile = require('./models/CustomItemsSchema');

module.exports = {
	name: 'itememoji',
	description: 'Allow a user to set a custom emoji for their item.',
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

						emoji: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find an item with name ${charName}.`);


	},
};
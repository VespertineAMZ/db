const Discord = require("discord.js");
const Profile = require('./models/CustomItemsSchema');

module.exports = {
	name: 'itemimage',
	description: 'Allow a user to set a custom image for their item when it\'s inspected.',
	async execute(message, args) {


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

						image: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find an item with name ${charName}.`);


	},
};
const Discord = require("discord.js");
const Profile = require('./models/CustomItemsSchema');

module.exports = {
	name: 'itemlocation',
	description: 'Attach a custom item to a custom location so that the item can be harvested there.',
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

						location: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find an item with name ${charName}.`);


	},
};
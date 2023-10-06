const Discord = require("discord.js");
const Profile = require('./models/CustomItemsSchema');

module.exports = {
	name: 'itemdescription',
	description: 'Allow a user to set a custom description for their item when their item is inspected.',
	async execute(message, args) {


		const commandArgs = args.join(' '); //combine the command together.

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift(); //remove the item name from the other command contents.
		const charDescription = splitArgs.join(' ');

		const profileData = await Profile.findOneAndUpdate( //update the item's profile.
				{
					name: charName,
				}, 
				{
					$set: {

						description: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find an item with name ${charName}.`);


	},
};
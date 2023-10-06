const Discord = require("discord.js");
const Profile = require('./models/CustomItemsSchema');

module.exports = {
	name: 'itemtype',
	description: 'Give a custom item a type so it can be filtered when a user looks at their bag.',
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

						type: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find an item with name ${charName}.`);


	},
};
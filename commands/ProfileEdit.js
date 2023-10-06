const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');

module.exports = {
	name: 'editprofile',
	description: 'edit the character profile description.',
	aliases: ['editchar', 'editcharcard', 'editchara'],
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const charDescription = splitArgs.join(' ').toString();

const profileData = await Profile.findOneAndUpdate(
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
return message.reply(`Could not find a profile with name ${charName}.`);



	},
};
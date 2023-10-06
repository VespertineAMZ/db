const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');

module.exports = {
	name: 'charimage',
	description: 'edit the character profile image.',
	aliases: ['editcharimage', 'editprofileimage', 'charaimage'],
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

						image: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}
		return message.reply(`Could not find a profile with name ${charName}.`);


	},
};
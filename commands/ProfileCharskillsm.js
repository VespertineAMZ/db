const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');


module.exports = {
	name: 'charskillsm',
	description: 'Allow user to write custom content for their character about skills.',
	aliases: ['charskillsmagic'],
	async execute(message, args) {

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const charDescription = splitArgs.join(' ');


if (!charDescription) {
	return message.channel.send(`I cannot put nothing in magical skills.`);

}

else if (!charDescription.length >= 2049) {

	return message.channel.send("That's too many words");
}

else {

		const profileData = await Profile.findOneAndUpdate(
				{
					name: charName,
				}, 
				{
					$set: {

						magical: charDescription,
					},
				}
				).collation( { locale: 'en', strength: 2 } );

		if (profileData) {
			return message.reply(`${charName} has successfully been updated.`);
		}

		return message.reply(`Could not find a profile with name ${charName}.`);
	}



	},
};
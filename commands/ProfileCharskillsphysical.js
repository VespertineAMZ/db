const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');


module.exports = {
	name: 'charskillsp',
	description: 'Allow users to write custom content about their character skills.',
	aliases: ['charskillsphysical'],
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const charDescription = splitArgs.join(' ');

// equivalent to: UPDATE tags (descrption) values (?) WHERE name='?';

if (!charDescription) {
	return message.channel.send(`I cannot put nothing in physical skills.`);

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

						physskills: charDescription,
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
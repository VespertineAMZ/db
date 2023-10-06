const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');

module.exports = {
	name: 'deletechar',
	description: 'delete a character profile',
	aliases: ['removechar', 'deleteprofile', 'removechara'],
	adminOnly: true,
	guildOnly: true, 
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const charName = commandArgs;

		const profileData = await Profile.deleteOne({ name: charName });

		if (!profileData) return message.reply('That character does not exist.');

		return message.reply('Profile deleted.');



	},
};
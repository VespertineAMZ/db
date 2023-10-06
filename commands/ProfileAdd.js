const Discord = require("discord.js");
const Profile = require('./models/ProfilesSchema');



module.exports = {
	name: 'addchar',
	description: 'create a new character profile',
	aliases: ['addchara', 'addprofile'],
	async execute(message, args) {


		const commandArgs = args.join(' ');


		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const charDescription = splitArgs.join(' ');

		try {
		let newProfile = await Profile.create({ //set default values.
				name: charName.toString(),
				description: charDescription.toString(),
				image: 'https://i.imgur.com/FeCG204.png',
				magic: 'null',
				vitality: '3',
				physical: '3',
				arcane: '3',
				academics: '3', 
				lore: '3', 
				blessings: '3', 
				skills: 'none',
				reputation: 0,
				experience: 0,
				magical: 'none',
				physskills: 'none',
				extra: 'none',
			});

			newProfile.save();
	return message.reply(`Character ${newProfile.name} added.`);
	}
	catch (e) {
	if (e.name === 'mongoose-unique-validator') {
		return message.reply('That character already exists.');
	}
	return message.reply('Something went wrong with adding a character.');
	}




	},
};
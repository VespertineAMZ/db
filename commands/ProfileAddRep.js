const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');

module.exports = {
	name: 'charaddrep',
	description: 'add character reputation',
	aliases: ['addcharrep', 'addrep', 'giverep', 'givecharrep'],
	adminOnly: true,
	guildOnly: true,
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		const giveAmount = args[1];

		const profile = await Profiles.findOne({ name: charName }).collation( { locale: 'en', strength: 2 } );
		if (profile) {

			const currentAmount = profile.reputation;

			if (!giveAmount || isNaN(giveAmount)) return message.channel.send(`Sorry ${message.author}, that is an invalid amount.`);

			let Amount = Number(currentAmount) + Number(giveAmount);

			if (Amount >= 100) {
				Amount = 100;
			}
			else if (Amount <= -100) {
				Amount = -100;
			}

			const profileData = await Profiles.findOneAndUpdate(
				{
					name: charName,
				}, 
				{
					$set: {

						reputation: Amount,
					},
				}
				).collation( { locale: 'en', strength: 2 } );
			if (profileData) {
				return message.reply(`${charName} now has ${Amount} reputation.`);
			}
			}

	return message.reply(`Could not find a profile with name ${charName}.`);


	},
};
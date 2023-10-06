const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');

module.exports = {
	name: 'chartakexp',
	description: 'take character xp',
	aliases: ['takecharxp', 'takexp', 'takeexp'],
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

			const currentAmount = profile.experience;

			if (!giveAmount || isNaN(giveAmount)) return message.channel.send(`Sorry ${message.author}, that is an invalid amount.`);

			let Amount = Number(currentAmount) - Number(giveAmount);
			let level = 1;

			if (Amount <= 0) {
				Amount = 0;
			}

			//////LEVEL UP IF STATEMENTS

			if (Amount < 10) {
				 level = 1;
				}//end if 1

			else if (Amount >= 10 && Amount < 20) {
				level = 2;
				}//end if 2

			else if (Amount >= 20 && Amount < 40) {
				level = 3;
				}//end if 3

			else if (Amount >= 40 && Amount < 80) {
				level = 4;
				}//end if 4	

			else if (Amount >= 80 && Amount < 160) {
				level = 5;
				}//end if 5	

			else if (Amount >= 160 && Amount < 320) {
				level = 6;
				}//end if 6

			else if (Amount >= 320 && Amount < 640) {
				level = 7;
				}//end if 7

			else if (Amount >= 640 && Amount < 1280) {
				level = 8;
				}//end if 8		

			else if (Amount >= 1280 && Amount < 2560) {
				level = 9;
				}//end if 9

			else if (Amount >= 2560 && Amount < 4020) {
				level = 10;
				}//end if 10

			else if (Amount >= 4020 && Amount < 6030) {
				level = 11;
				}//end if 11	

			else if (Amount >= 6030 && Amount < 9045) {
				level = 12;
				}//end if 12

			else if (Amount >= 9045 && Amount < 13550) {
				level = 13;
				}//end if 13

			else if (Amount >= 13550 && Amount < 20325) {
				level = 14;
				}//end if 14	

			else if (Amount >= 20325 && Amount < 30500) {
				level = 15;
				}//end if 15

			else if (Amount >= 30500 && Amount < 45750) {
				level = 16;
				}//end if 16	

			else if (Amount >= 45750 && Amount < 68625) {
				level = 17;
				}//end if 17

			else if (Amount >= 68625 && Amount < 103000) {
				level = 18;
				}//end if 18

			else if (Amount >= 103000 && Amount < 154500) {
				level = 19;
				}//end if 19

			else if (Amount >= 154500) {
				level = 20;
				}//end if 20

			else {
				level = 0;
			}//end else

				//////END LEVEL UP IF STATEMENTS


			const profileData = await Profiles.findOneAndUpdate(
				{
					name: charName,
				}, 
				{
					$set: {

						experience: Amount,
					},
				}
				).collation( { locale: 'en', strength: 2 } );
			if (profileData) {
				return message.reply(`${charName} now has ${Amount} experience and is level ${level}.`);
			}

		}

	return message.reply(`Could not find a profile with name ${charName}.`);


	},
};
const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');

module.exports = {
	name: 'setactive',
	description: 'set if a character is active or not.',
	aliases: ['setact'],
	adminOnly: true,
	guildOnly: true,
	async execute(message, args) {


		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		let giveAmount = args[1];
       

		const profile = await Profiles.findOne({ name: charName }).collation( { locale: 'en', strength: 2 } );
		if (profile) {

            if (!giveAmount) return message.channel.send(`Activity must be set to 'yes' or 'no'.`);

            giveAmount = giveAmount.toLowerCase();

			if (giveAmount === 'yes' || giveAmount === 'no') {

                const profileData = await Profiles.findOneAndUpdate(
                    {
                        name: charName,
                    }, 
                    {
                        $set: {
    
                            extra: giveAmount,
                        },
                    }
                    ).collation( { locale: 'en', strength: 2 } );
                if (profileData) {
                    return message.reply(`${charName} activity is set to ${giveAmount}.`);
                }


            } 
            
            else
            {
                return message.channel.send(`Activity must be set to 'yes' or 'no'.`);

            }


			

		}

	return message.reply(`Could not find a profile with name ${charName}.`);


	},
};
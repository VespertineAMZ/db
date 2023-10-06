const Discord = require("discord.js");
const Buildings = require('./models/LocationsSchema');


//Buildings.sync({ force: true });

module.exports = {
	name: 'addlocation',
	description: 'Add a custom location that users can gather item ingredients in.',
	aliases: ['newlocation'],
	guildOnly: true,
	async execute(message, args) {


		const commandArgs = args.join(' ');


		const splitArgs = commandArgs.split(' ');
		const buildName = splitArgs.shift();

		try {
            let newLocation = await Buildings.create({
                name: buildName,
                description: "none",
                extra: "none"

			});

            newLocation.save();
            return message.reply(`Location successfully created..`);
            }
            catch (e) {
            if (e.name === 'mongoose-unique-validator') {
                return message.reply('That location already exists.');
            }
            return message.reply('Something went wrong with creating a location.');
            }
    




	},
};
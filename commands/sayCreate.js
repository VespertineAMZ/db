const Say = require('./models/SaySchema');

module.exports = {
	name: 'createsay',
	description: 'create a custom character to be used with the Say command.',
	async execute(message, args) {

		const commandArgs = args.join(' ');
		const itemName = commandArgs;

        if (itemName === "none") {
          return message.channel.send("That's an invalid name.");
        }



        try {
            let newProfile = await Say.create({
                title: itemName,
                name: "Name",
                image: "https://i.imgur.com/FeCG204.png",
                color: "#000000",

			});
    
                newProfile.save();
        return message.reply(`Say successfully created..`);
        }
        catch (e) {
        if (e.name === 'mongoose-unique-validator') {
            return message.reply('That say command already exists.');
        }
        return message.reply('Something went wrong with creating an say command.');
        }

			
			
			

	},
};
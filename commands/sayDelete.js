const CustomSay = require('./models/SaySchema');

module.exports = {
	name: 'saydelete',
	description: 'delete a custom character in the say command.',
	async execute(message, args) {

		const commandArgs = args.join(' ');
		const characterName = commandArgs;

			const profileData = await CustomSay.findOne({ title: characterName });

            if (profileData) {
				await CustomSay.deleteOne({ title: characterName });
                message.channel.send("Say command successfully deleted.");
				
            }

            else {
                message.channel.send("I couldn't find that character.");
            }

			

	},
};
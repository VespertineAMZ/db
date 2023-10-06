const CustomItem = require('./models/CustomItemsSchema');

module.exports = {
	name: 'deletecustomitem',
	description: 'Allow the user to delete their custom item.',
	async execute(message, args) {

		const commandArgs = args.join(' ');
		const itemName = commandArgs;

			const profileData = await CustomItem.findOne({ name: itemName });

            if (profileData) {
				await CustomItem.deleteOne({ name: itemName });
                message.channel.send("Item successfully deleted.");
            }

            else {
                message.channel.send("I couldn't find that item.");
            }

			

	},
};
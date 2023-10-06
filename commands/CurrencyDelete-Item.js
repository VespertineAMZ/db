const Discord = require("discord.js");
const User = require('./models/UsersSchema');
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');
const coins = require("./coins.json");

module.exports = {
	name: 'delete-item',
  guildOnly: true,
  adminOnly: true,
	description: 'deletes all items in a category.',
   aliases: ['takeall', 'takeitems'],
	async execute(message, args) {
      const commandArgs = args.join(' ');
      
      const username = message.mentions.users.first();

      if (!username) return message.channel.send(`That user does not exist.`);


      const giveItem = commandArgs.split(/ +/g).filter(arg => !/<@!?\d+>/g.test(arg)); //discord user ids are formatted like this regex right here. This removes the username from the command so the item name can be identified. 
      const giveItemName = giveItem.join(' '); //combine the name into one string.
			const item = await ShopItems.findOne({ name: giveItemName }).collation( { locale: 'en', strength: 2 } );

			if (!item) return message.channel.send(`That item does not exist.`);

      const deleteItem = await UserItems.deleteOne({ user_id: message.mentions.users.first().id, item_id: item.item_id });

			message.channel.send(`Successfully deleted ${item.name}`);

	},
};
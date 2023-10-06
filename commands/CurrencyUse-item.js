const Discord = require("discord.js");
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');

async function takeItem(target, itemName) { //takes an item from user inventory in increments of one.
     let user;
     const item = await ShopItems.findOne({ name: itemName });

      try{
          const user = await UserItems.findOneAndUpdate(
            {
              user_id: target.id,
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: -1,

            },
          }
          );

          if (user.amount < 2) {
            const delete_user = await UserItems.deleteOne({ user_id: target.id, item_id: item.item_id });
          }

         } catch (err) {
          console.log(err);
        }

}//end function



module.exports = {
	name: 'useitem',
	description: 'remove a single item from inventory.',
  aliases: ['use', 'use-item'],
	async execute(message, args) {
      const commandArgs = args.join(' ');

      const username = message.author;

      if (!username) return message.channel.send(`That user does not exist.`);

      const item = await ShopItems.findOne({ name: commandArgs }).collation( { locale: 'en', strength: 2 } );

			if (!item) return message.channel.send(`That item does not exist.`);

      await takeItem(username, item.name);


			message.channel.send(`Used ${item.name}`);

	},
};
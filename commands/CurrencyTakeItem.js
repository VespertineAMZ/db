const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');


module.exports = {
  name: 'takeitem',
  description: 'take an item',
  adminOnly: true,
  guildOnly: true,
  async execute(message, args) {
    
      const commandArgs = args.join(' ');
      
      const username = message.mentions.users.first();

      if (!username) return message.channel.send(`That user does not exist.`);

      const giveItem = commandArgs.split(/ +/g).filter(arg => !/<@!?\d+>/g.test(arg));
      const giveItemName = giveItem.join(' ');
      const item = await ShopItems.findOne({ name: giveItemName }).collation( { locale: 'en', strength: 2 } );
      if (!item) return message.channel.send(`That item does not exist.`);

      let user;

      try{
          const user = await UserItems.findOneAndUpdate(
            {
              user_id: username.id,
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: -1,

            },
          }
          );

         if (user.amount < 2) {
            const delete_user = await UserItems.deleteOne({ user_id: username.id, item_id: item.item_id });
          }

          return message.channel.send(`Successfully took ${giveItemName} from ${username}.`);


        } catch (err) {
          console.log(err);
          return message.channel.send("There was an issue with taking the item.");
        }

  },
};




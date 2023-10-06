//This is the same as 'CurrencyGive-Item.js', but for custom user made items.
const UserItems = require('./models/CustomUserItemsSchema');
const ShopItems = require('./models/CustomItemsSchema');


module.exports = {
	name: 'givecustomitem',
	description: 'Allow users to give away custom items',
    aliases: ['gci'],
    guildOnly: true,
	async execute(message, args) {
    
      const commandArgs = args.join(' ');
      const splitArgs = commandArgs.split(' ');
      
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

              amount: 1,

            },
          }
          );


          if(!user){
            let profile = await UserItems.create({
              user_id: username.id,
              item_id: item.item_id,
              name: item.name,
              amount: 1,
              emoji: item.emoji,
            });
            profile.save();
          }

          return message.channel.send(`Successfully gave ${giveItemName} to ${username}.`);


        } catch (err) {
          console.log(err);
          return message.channel.send("There was an issue with adding the item.");
        }

	},
};




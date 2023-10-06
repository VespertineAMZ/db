const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');

module.exports = {
  name: 'takeitems',
  description: 'take multiple items',
  adminOnly: true,
  guildOnly: true,
  async execute(message, args) {
    
      const commandArgs = args.join(' ');
      
      const username = message.mentions.users.first();
      if (!username) return message.channel.send(`That user does not exist.`);
      const giveItem = commandArgs.split(/ +/g).filter(arg => !/<@!?\d+>/g.test(arg));
      const reg2 = /\s+\d+\s+/;
      const reg3 = /["|'|\u201C|\u201D](.*?)["|'|\u201C|\u201D]/;


      if (!reg3) return message.channel.send("You didn't put an item name in quotes");
      if (!reg2) return message.channel.send("You didn't give an amount of items to take.");


      const numberFind = reg2.exec(commandArgs); 
      if (!numberFind) return message.channel.send("You didn't give an amount of items to take.");
      const giveItemName = reg3.exec(commandArgs).pop();
      if (!giveItemName) return message.channel.send("You didn't put an item name in quotes");
      const item = await ShopItems.findOne({ name: giveItemName }).collation( { locale: 'en', strength: 2 } );

      if (!item) return message.channel.send(`That item does not exist. ${giveItemName}`);

      if(!numberFind) return message.channel.send(`That is not a valid amount`);

      let number = parseInt(numberFind);
      const hasItem = await UserItems.findOne({ user_id: username.id, item_id: item.item_id});
      if(!hasItem) return message.channel.send(`I can't find that item.`);
      const alreadyHas = hasItem.amount;

      if (number >= alreadyHas) {
        const delete_user = await UserItems.deleteOne({ user_id: username.id, item_id: item.item_id });
        return message.channel.send(`Successfully took ${number} ${item.name} from ${username}.`);
      }

      number = number * -1; 
    

      try{
          const user = await UserItems.findOneAndUpdate(
            {
              user_id: username.id,
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: number,            },
          }
          );

\

          number = number * -1;

          return message.channel.send(`Successfully took ${number} ${item.name} from ${username}.`);


        } catch (err) {
          console.log(err);
          return message.channel.send("There was an issue with adding the item.");
        }


      return message.channel.send(`Successfully gave ${number} ${item.name} to ${username}.`);


  },
};




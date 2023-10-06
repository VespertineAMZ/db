const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');

module.exports = {
	name: 'giveitems',
	description: 'give a user multiple items.',
  adminOnly: true,
  guildOnly: true,
	async execute(message, args) {
    
      const commandArgs = args.join(' ');
      
      const username = message.mentions.users.first(); //finds the user 
      if (!username) return message.channel.send(`That user does not exist.`);
      const giveItem = commandArgs.split(/ +/g).filter(arg => !/<@!?\d+>/g.test(arg)); //separates out user ID.
      const reg2 = /\s+\d+\s+/; //regex used to find a number.
      const reg3 = /["|'|\u201C|\u201D](.*?)["|'|\u201C|\u201D]/; //The command has the item name in quotes so if the item name has a number in it, it's not mixed up with the number that represents the amount of items given.
	  //the above regex allows the user to use different types of quotes, since different keyboards act differently.


      if (!reg3) return message.channel.send("You didn't put an item name in quotes"); //checks if the stuff filtered out in the command exists.
      if (!reg2) return message.channel.send("You didn't give an amount of items to take.");

      const numberFind = reg2.exec(commandArgs); //put data in variables
      const giveItemName = reg3.exec(commandArgs).pop();
      if (!giveItemName) return message.channel.send("You didn't put an item name in quotes");
			const item = await ShopItems.findOne({ name: giveItemName }).collation( { locale: 'en', strength: 2 } );

			if (!item) return message.channel.send(`That item does not exist. ${giveItemName}`);

      if(!numberFind) return message.channel.send(`That is not a valid amount`);

      const number = parseInt(numberFind);

		  let user;

      try{ //add items to user inventory.
          const user = await UserItems.findOneAndUpdate( 
            {
              user_id: username.id,
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: number,

            },
          }
          );

          if(!user){
            let profile = await UserItems.create({
              user_id: username.id,
              item_id: item.item_id,
              name: item.name,
              amount: number,
              emoji: item.emoji,
            });
            profile.save();
          }

          return message.channel.send(`Successfully gave ${number} ${item.name} to ${username}.`);


        } catch (err) {
          console.log(err);
          return message.channel.send("There was an issue with adding the item.");
        }


			return message.channel.send(`Successfully gave ${number} ${item.name} to ${username}.`);


	},
};




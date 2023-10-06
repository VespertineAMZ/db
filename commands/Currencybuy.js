const Discord = require("discord.js");
const User = require('./models/UsersSchema');
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');
const coins = require("./coins.json");

async function addCurrency(target, amount) { //this function finds a user profile and updates the amoount. It also creates a new profile as needed.
    let profileData;
    try{
      profileData = await User.findOneAndUpdate(
        { 
          user_id: target,
        },
        {
           $inc: {

              balance: amount,

            },
        }
        ).collation( { locale: 'en', strength: 2 } );


      if(!profileData){ 
        let profile = await User.create({
          user_id: target,
          balance: amount,
        });
        profile.save();
      }


    } catch (err) {
      console.log(err);
    }

}  //end function


async function addItem(target, itemName) { //This function will add the bought item to the user's inventory, adding to a preexisting item, or starting at 1 if it's new.
     let user;
     const item = await ShopItems.findOne({ name: itemName });

      try{
          const user = await UserItems.findOneAndUpdate(
            {
              user_id: target,
              //user_id: username, //id version
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: 1,

            },
          }
          );


          if(!user){ //create a new profile as needed.
            let profile = await UserItems.create({
              user_id: target,
              //user_id: username, //id version
              item_id: item.item_id,
              name: item.name,
              amount: 1,
              emoji: item.emoji,
            });
            profile.save();
          }

        } catch (err) {
          console.log(err);
        }

}//end function


module.exports = {
	name: 'buy',
	description: 'buy from shop',
	async execute(message, args) {

      const commandArgs = args.join(' '); //commands are typed in, so this joins the arguments together into one string. 
      const item = await ShopItems.findOne({ name: commandArgs }).collation( { locale: 'en', strength: 2 } ); //find if the item is one that exists among what was made.
      if (!item) return message.channel.send("That item doesn't exist.");
      
      const user = await User.findOne( { user_id: message.author.id } );


      if (item.cost > user.balance) {
      return message.channel.send(`You currently have ${user.balance}, but the ${item.name} costs ${item.cost}!`);
      }

      await addCurrency(message.author.id, -item.cost); //function used here. The negative cost is 'added' to the user balance.
      await addItem(message.author.id, item.name);

      message.channel.send(`You've bought: ${item.name}.`)

	},
};







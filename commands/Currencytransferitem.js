const Discord = require("discord.js");
const User = require('./models/UsersSchema');
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');

const coins = require("./coins.json");




module.exports = {
	name: 'transferitem',
	description: 'transfers an item from one user to another.',
	async execute(message, args) {

    async function addItem(target, itemName) { //function that adds an item to user inventory, and creates a new user profile as needed.
      let user;
      const item = await ShopItems.findOne({ name: itemName }).collation( { locale: 'en', strength: 2 } );
      if (!item) return message.channel.send(`That item does not exist.`);
  
       try{
           const user = await UserItems.findOneAndUpdate(
             {
               user_id: target.id,
               //user_id: username, //id version
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
               user_id: target.id,
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
  
  async function takeItem(target, itemName) { //function that removes an item from user inventory.
      let user;
      const item = await ShopItems.findOne({ name: itemName }).collation( { locale: 'en', strength: 2 } );
      if (!item) return message.channel.send(`That item does not exist.`);
  
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
  

const commandArgs = args.join(' ');
const transferItem = commandArgs.split(/ +/g).filter(arg => !/<@!?\d+>/g.test(arg));
const transferItemName =  transferItem.join(' ');
const transferTarget = message.mentions.users.first();

if (!transferItem) return message.channel.send(`Sorry ${message.author}, that's an invalid item.`);


takeItem(message.author, transferItemName);
addItem(transferTarget, transferItemName);

return message.channel.send(`Successfully gave ${transferItemName} to ${transferTarget.tag}.`);

	},
};
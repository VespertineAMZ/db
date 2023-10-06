const Discord = require("discord.js");
const Locations = require('./models/LocationsSchema');
const Items = require('./models/CustomItemsSchema');
const UserItems = require('./models/CustomUserItemsSchema');

let count = 0;
const used = new Set();

function number20(amount) { //generate a random number from 1 to the number put into the 'amount' argument.
    random = Math.floor((Math.random() * amount) + 1);

    count += Number(random);

  return random;
}  

async function addItem(target, itemName) { //add an item to a user's bag.
    let user;
    const item = await Items.findOne({ name: itemName });

     try{
         const user = await UserItems.findOneAndUpdate(
           {
             user_id: target.id,
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
	name: 'harvest',
	description: 'harvest custom ingredients from a user made custom location.',
	async execute(message, args) {

            const commandArgs = args.join(' ');


            const splitArgs = commandArgs.split(' ');
            const buildName = splitArgs.shift();

            if(used.has(message.author.id)) { //add a cooldown to each individual user.
        		return message.reply("You cannot use this command until tomorrow.");
    		} //end if


            LocationName = await Locations.find({name: buildName}).collation( { locale: 'en', strength: 2 } ); //check if the location exists.

            if (!LocationName) {
                return message.channel.send("That location does not exist.");
            }

            const harvestables = await Items.find({location: buildName}).collation( { locale: 'en', strength: 2 } ).sort([ ['name', 'ascending']]); //check what harvestables the user has added.

            
            if (!harvestables) {
                return message.channel.send("There's nothing to harvest in this location"); //if none then end the command.
            }

            const harvestedItem = harvestables[Math.floor(Math.random()*harvestables.length)]; //roll a random harvestable from the amount the user made.


            if (number20(5) == 1) { //1 in 5 chance to find nothing.
                message.channel.send("Nothing was found...");
            }

            else {
                addItem(message.author, harvestedItem.name); //if an item was found, add it to user's bag.
                message.channel.send(`You found ${harvestedItem.name}!`);

            }

            used.add(message.author.id);
            setTimeout(() => {
                 used.delete(message.author.id)
         }, 21600000); //This adds a cooldown to the command so the user can't spam it.







	},
};
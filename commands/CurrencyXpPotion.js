//this command lets a specific item alter character profiles in ways that other items cannot.
const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');

async function takeItem(target, itemName, number, owned) { //take away an item. The arguments find the user, the name of the item, the amount of the item to be removed, and checks how much of the item the user owns.
    const item = await ShopItems.findOne({ name: itemName });

     try{

		if (owned <= number) {
			const delete_user = await UserItems.deleteOne({ user_id: target.id, item_id: item.item_id });
		  }

		else {
		  
         const user = await UserItems.findOneAndUpdate(
           {
             user_id: target.id,
             item_id: item.item_id,
           }, 
           {
             $inc: {

             amount: number * -1,

           },
         }
         );
		}



        } catch (err) {
         console.log(err);
		 return
       }
	   

	   

}//end function


module.exports = {
	name: 'xppotion',
	description: 'drink xp potion',
	aliases: ['exppotion'],
	guildOnly: true,
	async execute(message, args) {

		//Profiles.sync();

		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(' ');
		const charName = splitArgs.shift();
		let giveAmount = 10;
        let potionAmount = args[1];
        const potion = await ShopItems.findOne({ name: 'XP Potion' });
        const haspotion = await UserItems.findOne({ user_id: message.author.id, item_id: potion.item_id});

		const profile = await Profiles.findOne({ name: charName }).collation( { locale: 'en', strength: 2 } ); //find a specific character.
		if (profile) {

			const currentAmount = profile.experience;
            let alreadyHas = 1;

            if (haspotion) {
                alreadyHas = haspotion.amount;
            }
			else {
				return message.reply(`You don't have enough potions.`);
			}
           
           if (!potionAmount || potionAmount > alreadyHas || potionAmount < 1 || isNaN(potionAmount)) return message.channel.send(`Sorry ${message.author}, that is an invalid amount.`);
           

            giveAmount = giveAmount * potionAmount;

			let Amount = Number(currentAmount) + Number(giveAmount);
			let level = 1;

			if (Amount <= 0) {
				Amount = 0;
			}

			//////LEVEL UP IF STATEMENTS

			if (Amount < 10) { //different amounts of xp grant different levels.
				 level = 1;
				}//end if 1

			else if (Amount >= 10 && Amount < 20) {
				level = 2;
				}//end if 2

			else if (Amount >= 20 && Amount < 40) {
				level = 3;
				}//end if 3

			else if (Amount >= 40 && Amount < 80) {
				level = 4;
				}//end if 4	

			else if (Amount >= 80 && Amount < 160) {
				level = 5;
				}//end if 5	

			else if (Amount >= 160 && Amount < 320) {
				level = 6;
				}//end if 6

			else if (Amount >= 320 && Amount < 640) {
				level = 7;
				}//end if 7

			else if (Amount >= 640 && Amount < 1280) {
				level = 8;
				}//end if 8		

			else if (Amount >= 1280 && Amount < 2560) {
				level = 9;
				}//end if 9

			else if (Amount >= 2560 && Amount < 4020) {
				level = 10;
				}//end if 10

			else if (Amount >= 4020 && Amount < 6030) {
				level = 11;
				}//end if 11	

			else if (Amount >= 6030 && Amount < 9045) {
				level = 12;
				}//end if 12

			else if (Amount >= 9045 && Amount < 13550) {
				level = 13;
				}//end if 13

			else if (Amount >= 13550 && Amount < 20325) {
				level = 14;
				}//end if 14	

			else if (Amount >= 20325 && Amount < 30500) {
				level = 15;
				}//end if 15

			else if (Amount >= 30500 && Amount < 45750) {
				level = 16;
				}//end if 16	

			else if (Amount >= 45750 && Amount < 68625) {
				level = 17;
				}//end if 17

			else if (Amount >= 68625 && Amount < 103000) {
				level = 18;
				}//end if 18

			else if (Amount >= 103000 && Amount < 154500) {
				level = 19;
				}//end if 19

			else if (Amount >= 154500) {
				level = 20;
				}//end if 20

			else {
				level = 0;
			}//end else

				//////END LEVEL UP IF STATEMENTS

                takeItem(message.author, "XP Potion", potionAmount, alreadyHas)


			const profileData = await Profiles.findOneAndUpdate( //update the character profile.
				{
					name: charName,
				}, 
				{
					$set: {

						experience: Amount,
					},
				}
				).collation( { locale: 'en', strength: 2 } );
			if (profileData) {
				return message.reply(`${charName} now has ${Amount} experience and is level ${level}.`);
			}

       

		}

	return message.reply(`Could not find a profile with name ${charName}.`);


	},
};
const Discord = require("discord.js");
const Profile = require('./models/CustomItemsSchema');

module.exports = {
	name: 'itemingredient',
	description: 'Allow a user to set ingredients for their custom item if it\'s something craftable.',
	async execute(message, args) {


		const commandArgs = args.join(' ');

		const splitArgs = commandArgs.split(/\s?\|\s?/); //splits up each section of the command with |
		const ingredientNumber = parseInt(splitArgs[0]); //There can be up to 5 different ingredients. Checks if this is ingredient 1 or 5. 
        const charName = splitArgs[1]; //find the custom item name for which the ingredient is used to make.
        const ingredientName = splitArgs[2]; //find the ingredient name.
        const ingredientAmount = parseInt(splitArgs[3]); //eg !itemingredient 1 | stupiternity | leaf | 3 ---- so first ingredient of stupiternity is 3 leaves

        const item = await Profile.findOne({ name: ingredientName }).collation( { locale: 'en', strength: 2 } ); //see if the ingredient exists as a separate item.
			if (!item) return message.channel.send(`That item does not exist.`);

        if (isNaN(ingredientAmount)) { //check if the amount is a number.
            return message.channel.send("That is not a valid amount of ingredients.");
        }

        switch(ingredientNumber) {

            case 1: //ingredient 1 data.

                const profileData = await Profile.findOneAndUpdate(
                    {
                        name: charName,
                    }, 
                    {
                        $set: {
    
                            ingredient1: item.name,
                            ingredient1amount: ingredientAmount
                        },
                    }
                    ).collation( { locale: 'en', strength: 2 } );
    
                if (profileData) {
                    return message.reply(`${charName} has successfully been updated.`);
                }
                return message.reply(`Could not find an item with name ${charName}.`);


            break;

            case 2: //ingredient 2 data.

                const profileData2 = await Profile.findOneAndUpdate(
                    {
                        name: charName,
                    }, 
                    {
                        $set: {
    
                            ingredient2: item.name,
                            ingredient2amount: ingredientAmount
                        },
                    }
                    ).collation( { locale: 'en', strength: 2 } );
    
                if (profileData2) {
                    return message.reply(`${charName} has successfully been updated.`);
                }
                return message.reply(`Could not find an item with name ${charName}.`);

            break;

            case 3: //ingredient 3 data.

                const profileData3 = await Profile.findOneAndUpdate(
                    {
                        name: charName,
                    }, 
                    {
                        $set: {
    
                            ingredient3: item.name,
                            ingredient3amount: ingredientAmount
                        },
                    }
                    ).collation( { locale: 'en', strength: 2 } );
    
                if (profileData3) {
                    return message.reply(`${charName} has successfully been updated.`);
                }
                return message.reply(`Could not find an item with name ${charName}.`);
            
                

            break;

            case 4: //ingredient 4 data.

                const profileData4 = await Profile.findOneAndUpdate(
                    {
                        name: charName,
                    }, 
                    {
                        $set: {
    
                            ingredient4: item.name,
                            ingredient4amount: ingredientAmount
                        },
                    }
                    ).collation( { locale: 'en', strength: 2 } );
    
                if (profileData4) {
                    return message.reply(`${charName} has successfully been updated.`);
                }
                return message.reply(`Could not find an item with name ${charName}.`);

            break;

            case 5: //ingredient 5 data.

                const profileData5 = await Profile.findOneAndUpdate(
                    {
                        name: charName,
                    }, 
                    {
                        $set: {
    
                            ingredient5: item.name,
                            ingredient5amount: ingredientAmount
                        },
                    }
                    ).collation( { locale: 'en', strength: 2 } );
    
                if (profileData5) {
                    return message.reply(`${charName} has successfully been updated.`);
                }
                return message.reply(`Could not find an item with name ${charName}.`);

            break;


            default:

                message.channel.send("Something went wrong with adding an ingredient.");

            break;


        }


	},
};
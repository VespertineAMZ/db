const CustomItems = require('./models/CustomItemsSchema');
const Counter = require('./models/CounterSchema'); 

module.exports = {
	name: 'createitem',
	description: 'make a custom user item',
	async execute(message, args) {

		const commandArgs = args.join(' ');
		const itemName = commandArgs;

        let id;

        if (itemName === "none") {
          return message.channel.send("That's an invalid name.");
        }

        try{
            const counter = await Counter.findOneAndUpdate(
              {
                name: "Counter1" //this makes a number increment by 1 each time a custom item is made. This allows each item to have a different ID.
              }, 
              {
                $inc: {
  
                number: 1,
  
              },
            }
            );

            id = counter.number;
  
  
          } catch (err) {
            console.log(err);
            return message.channel.send("There was an issue with adding the item.");
          }


        try {
            let newProfile = await CustomItems.create({ //add the default values of the custom item.
                name: itemName,
                image: "https://i.imgur.com/FeCG204.png",
                emoji: "<:material:1016811268973277205>",
                description: "none",
                location: "none",
                extra: "none",
                type: "material",
                item_id: id,
                ingredient1: "none",
                ingredient1amount: 0,
                ingredient2: "none",
                ingredient2amount: 0,
                ingredient3: "none",
                ingredient3amount: 0,
                ingredient4: "none",
                ingredient4amount: 0,
                ingredient5: "none",
                ingredient5amount: 0,

			});
    
                newProfile.save();
        return message.reply(`Item successfully created..`);
        }
        catch (e) {
        if (e.name === 'mongoose-unique-validator') {
            return message.reply('That item already exists.');
        }
        return message.reply('Something went wrong with creating an item.');
        }

			
			
			

	},
};
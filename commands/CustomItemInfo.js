const Discord = require("discord.js");
const ShopItems = require('./models/CustomItemsSchema');

module.exports = {
	name: 'iteminfo',
	description: 'Displays more in depth information about specific user made custom items.',
	async execute(message, args) {


		const commandArgs = args.join(" ");
		const charName = commandArgs;

		
		const profile = await ShopItems.findOne({ name: charName }).collation( { locale: 'en', strength: 2 } );
		if (profile) {
			

       	let embed = new Discord.EmbedBuilder()
            .setColor('#374df0')
            .setTitle("⋄⟢ "  + profile.name + " ⟣⋄") //shows the item name
            .setThumbnail(profile.image) //shows the item image
            .setDescription(profile.description) //shows the item description.
            //.addBlankField()
            .addFields( //if the item is harvestable or craftable, this will display the necessary information for that.
            	{ name: '\u200B', value: '\u200B' },
				{ name: '⟢ Location ⟣\n', value: `${profile.location}`, inline:false},
                { name: '⟢ Type ⟣\n', value: `${profile.type}\n`, inline:false },
				{ name: '⟢ Ingredient 1 ⟣', value:`${profile.ingredient1} ${profile.ingredient1amount}`, inline:false },
				{ name: '⟢ Ingredient 2 ⟣', value: `${profile.ingredient2} ${profile.ingredient2amount}`, inline:false },
                { name: '⟢ Ingredient 3 ⟣', value: `${profile.ingredient3} ${profile.ingredient3amount}`, inline:false },
				{ name: '⟢ Ingredient 4 ⟣', value: `${profile.ingredient4} ${profile.ingredient4amount}`, inline:false},
				{ name: '⟢ Ingredient 5 ⟣', value: `${profile.ingredient5} ${profile.ingredient5amount}`, inline:false },
				{ name: '\u200B', value: '\u200B' },

            )
        


           	return message.channel.send({ embeds: [embed] });
		}//end if


		return message.reply(`Could not find character: ${charName}`);




	},
};
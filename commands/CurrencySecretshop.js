const Discord = require("discord.js");
const ShopItems = require('./models/ShopItemsSchema');


const coins = require("./coins.json");




module.exports = {
	name: 'secretshop',
	description: 'shows specific items in a shop.',
	async execute(message, args) {
      
      const item0 = await ShopItems.findOne({ name: "Satchels Satchel" });
      const item1 = await ShopItems.findOne({ name: "Peach Wine" });
      const item3 = await ShopItems.findOne({ name: "XP Potion" });
	   const item1 = await ShopItems.findOne({ name: "Pink Potion" });
      const item4 = await ShopItems.findOne({ name: "Miku Guqin" });
      const item5 = await ShopItems.findOne({ name: "Rusty Sword" });
      const item6 = await ShopItems.findOne({ name: "Old Wand" });



      message.channel.send(`${item0.emoji} ${item0.name}: ${item0.cost} ${coins.coin} \n${item1.emoji} ${item1.name}: ${item1.cost} ${coins.coin} \n${item2.emoji} ${item2.name}: ${item2.cost} ${coins.coin} \n${item3.emoji} ${item3.name}: ${item3.cost} ${coins.coin}\n${item4.emoji} ${item4.name}: ${item4.cost} ${coins.coin} \n${item5.emoji} ${item5.name}: ${item5.cost} ${coins.coin} \n${item6.emoji} ${item6.name}: ${item6.cost} ${coins.coin}`);
      

	},
};
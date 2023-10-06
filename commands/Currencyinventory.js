//This is the user inventory that allows all the items they've collected to be displayed.
const Discord = require("discord.js");
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');

module.exports = {
	name: 'inventory',
	description: 'shows user inventory',
 	aliases: ['inv'],
	async execute(message, args) {
			const target = message.mentions.users.first() || message.author;
			let items = await UserItems.find({user_id: target.id});
			let itemtype;
			let itemarray = [];
			let commandArgs = args.join(' ');
			commandArgs = commandArgs.toString();
			commandArgs = commandArgs.toLowerCase();

			var pageLimit = 20;
			var pageOffset = 0;

			const count = items.length;

			var pages = [];
			let page = 1;

			const count2 = count/20;

			

			if (commandArgs.match(/<@!?\d+>/)) { //search for if a user ID was included in the command.
				commandArgs = 'name';
			}

			if (!commandArgs)  { //create an array with 20 user items in each array item.
				for(i = 0; i < count2; i ++) {

					const charList = await UserItems.find({user_id: target.id}).skip(pageOffset).limit(pageLimit);
					const charString = charList.map(t => `✥ ${t.amount} **${t.name}** ${t.emoji}`).join('\n  ') || 'No characters set.';
		
					pages.push(charString.toString());
					pageOffset += 20;
					
		
				}//end for



				const embed = new Discord.EmbedBuilder() //embed for appearance sake.
					.setTitle(`${target.tag} Inventory:`)
					.setColor('#ffffff')
					.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`})
					.setDescription(pages[page-1].toString())

				

					return message.channel.send({ embeds: [embed] }).then(msg => {

						msg.react('◀️').then(r => { //react pagination
							msg.react('▶️')
			
							// Filters
							const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
							const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;
			
							//{ filter: collectorFilter, time: 15000 }
							const backwards = msg.createReactionCollector({filter: backwardsFilter,  time: 60000});
			
							const forwards = msg.createReactionCollector({filter: forwardsFilter, time: 60000});
			
							backwards.on('collect', r => {
								if (page === 1) return;
								page--;
								embed.setDescription(pages[page-1]);
								embed.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`});
								msg.edit({ embeds: [embed] })
							})
			
							forwards.on('collect', r => {
								if (page === pages.length) return;
								page++;
								embed.setDescription(pages[page-1]);
								embed.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`});
								msg.edit({ embeds: [embed] })
			
							})
			
						})
					}) //end send pagination embed */

				
			}

			else {
				switch(commandArgs) { //The switch helps filter the inventory, so only specific types of items can be looked at if desired.
					case "weapons": 
						itemtype = await ShopItems.find({description: "weapon"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no weapons!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "weaps": 
						itemtype = await ShopItems.find({description: "weapon"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no weapons!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "magic": 
						itemtype = await ShopItems.find({description: "magic"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no magical items!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "misc": 
						itemtype = await ShopItems.find({description: "misc"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no miscellaneous items!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "accessories": 
						itemtype = await ShopItems.find({description: "accessory"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no accessories!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "accs": 
						itemtype = await ShopItems.find({description: "accessory"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no accessories!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "potions": 
						itemtype = await ShopItems.find({description: "potion"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no potions!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "stones": 
						itemtype = await ShopItems.find({description: "stone"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no stones!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "name": //if a user id was found, then look at the inventory belonging to the user id instead.

						for(i = 0; i < count2; i ++) {

							const charList = await UserItems.find({user_id: target.id}).skip(pageOffset).limit(pageLimit);
							const charString = charList.map(t => `✥ ${t.amount} **${t.name}** ${t.emoji}`).join('\n  ') || 'No characters set.';
				
							pages.push(charString.toString());
							pageOffset += 20;
							
				
						}//end for
		
						const embed = new Discord.EmbedBuilder()
							.setTitle(`${target.tag} Inventory:`)
							.setColor('#ffffff')
							.setFooter({text:`Page ${page.toString()} of ${pages.length.toString()}`})
							.setDescription(pages[page-1].toString())
		
							return message.channel.send({ embeds: [embed] }).then(msg => {
		
								msg.react('◀️').then(r => {
									msg.react('▶️')
					
									// Filters
									const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
									const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;
			
					
									const backwards = msg.createReactionCollector({filter: backwardsFilter,  time: 60000});
					
									const forwards = msg.createReactionCollector({filter: forwardsFilter, time: 60000});
					
									backwards.on('collect', r => {
										if (page === 1) return;
										page--;
										embed.setDescription(pages[page-1].toString());
										embed.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`});
										console.log('collected');
										msg.edit({ embeds: [embed] })
									})
					
									forwards.on('collect', r => {
										if (page === pages.length) return;
										page++;
										embed.setDescription(pages[page-1].toString());
										embed.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`});
										msg.edit({ embeds: [embed] })
										console.log('collected');
					
									})
					
								})
							}) //end send pagination embed */

					break;

					default: //make sure a used tag is used for filtering.
						message.channel.send("I'm not sure what that category is. My categories are: weapons, accessories, potions, stones, magic, misc");
					break;
				}
			}

			

	},
};
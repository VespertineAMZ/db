const Discord = require("discord.js");
const ShopItems = require('./models/CustomItemsSchema');
const UserItems = require('./models/CustomUserItemsSchema');

module.exports = {
	name: 'bag',
	description: 'shows user secondary inventory', //I decided to let users create their own items. This bag would hold the items as opposed to in Currencyinventory.js.
  aliases: ['itembag'],
	async execute(message, args) {
			const target = message.mentions.users.first() || message.author;
			let items = await UserItems.find({user_id: target.id});
			let itemtype;
			let itemarray = [];
			let commandArgs = args.join(' ');
			commandArgs = commandArgs.toLowerCase();

			var pageLimit = 20;
			var pageOffset = 0;

			const count = items.length;

			var pages = [];
			let page = 1;

			const count2 = count/20;

			if (commandArgs.match(/<@!?\d+>/)) {
				commandArgs = 'name';
			}

			if (!commandArgs)  {
				for(i = 0; i < count2; i ++) {

					const charList = await UserItems.find({user_id: target.id}).skip(pageOffset).limit(pageLimit);
					const charString = charList.map(t => `✥ ${t.amount} **${t.name}** ${t.emoji}`).join('\n  ') || 'No characters set.';
		
					pages.push(charString);
					pageOffset += 20;
					
		
				}//end for

				const embed = new Discord.EmbedBuilder()
					.setTitle(`${target.tag} Item Bag:`)
					.setColor('#ffffff')
					.setFooter(`Page ${page} of ${pages.length}`)
					.setDescription(pages[page-1])

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
								embed.setDescription(pages[page-1]);
								embed.setFooter(`Page ${page} of ${pages.length}`);
								msg.edit(embed)
							})
			
							forwards.on('collect', r => {
								if (page === pages.length) return;
								page++;
								embed.setDescription(pages[page-1]);
								embed.setFooter(`Page ${page} of ${pages.length}`);
								msg.edit(embed)
			
							})
			
						})
					}) //end send pagination embed */

				//if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
				//return message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);
			}

			else {
				switch(commandArgs) {
					case "weapons": 
						itemtype = await ShopItems.find({type: "weapon"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no weapons!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "weaps": 
						itemtype = await ShopItems.find({type: "weapon"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no weapons!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "magic": 
						itemtype = await ShopItems.find({type: "magic"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no magical items!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "misc": 
						itemtype = await ShopItems.find({type: "misc"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no miscellaneous items!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "accessories": 
						itemtype = await ShopItems.find({type: "accessory"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no accessories!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "accs": 
						itemtype = await ShopItems.find({type: "accessory"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no accessories!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "potions": 
						itemtype = await ShopItems.find({type: "potion"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no potions!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "stones": 
						itemtype = await ShopItems.find({type: "stone"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no stones!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

                    case "materials": 
						itemtype = await ShopItems.find({type: "material"});
						itemarray = itemtype.map(it => it.name);
						items = await UserItems.find({name: {$in: itemarray} , user_id: target.id});
						if (!items.length) return message.channel.send(`${target.tag} has no stones!`);
						message.channel.send(`${target.tag} currently has: \n✥ ${items.map(i => `${i.amount} **${i.name}** ${i.emoji}`).join('\n✥ ')}`);

					break;

					case "name":

						for(i = 0; i < count2; i ++) {

							const charList = await UserItems.find({user_id: target.id}).skip(pageOffset).limit(pageLimit);
							const charString = charList.map(t => `✥ ${t.amount} **${t.name}** ${t.emoji}`).join('\n  ') || 'No characters set.';
				
							pages.push(charString);
							pageOffset += 20;
							
				
						}//end for
		
						const embed = new Discord.EmbedBuilder()
							.setTitle(`${target.tag} Item Bag:`)
							.setColor('#ffffff')
							.setFooter(`Page ${page} of ${pages.length}`)
							.setDescription(pages[page-1])
		
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
										embed.setDescription(pages[page-1]);
										embed.setFooter(`Page ${page} of ${pages.length}`);
										msg.edit(embed)
									})
					
									forwards.on('collect', r => {
										if (page === pages.length) return;
										page++;
										embed.setDescription(pages[page-1]);
										embed.setFooter(`Page ${page} of ${pages.length}`);
										msg.edit(embed)
					
									})
					
								})
							}) //end send pagination embed */

					break;

					default:
						message.channel.send("I'm not sure what that category is. My categories are: materials, weapons, accessories, potions, stones, magic, misc");
					break;
				}
			}

			

	},
};
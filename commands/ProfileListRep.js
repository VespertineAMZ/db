const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');

module.exports = {
	name: 'reputations',
	description: 'list all of the characters and their reputations, and organize by reputation.',
	aliases: ['charreps', 'reps'],
	async execute(message, args) {

		const commandArgs = args.join(' ');

		var pageLimit = 20;
		var pageOffset = 0;

		const count = await Profiles.count();

		var pages = [];
		let page = 1;

		const count2 = count/20;


		for(i = 0; i < count2; i ++) {

			const charList = await Profiles.find({}).skip(pageOffset).limit(pageLimit).sort([ ['reputation', 'descending'] ]);
			const charString = charList.map(t => `⟢ ${t.name} ➺ ${t.reputation}`).join('\n ') || 'No characters set.';

			pages.push(charString);
			pageOffset += 20;

		}//end for

		if (!commandArgs || isNaN(commandArgs) || commandArgs < 1 || commandArgs > pages.length) {
			page = 1;
			}

		else {
			page = commandArgs;
		}

		const embed = new Discord.EmbedBuilder()
			.setTitle("List of characters:")
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
					embed.setFooter({text:`Page ${page.toString()} of ${pages.length.toString()}`});
					msg.edit({ embeds: [embed] })
				})

				forwards.on('collect', r => {
					if (page === pages.length) return;
					page++;
					embed.setDescription(pages[page-1].toString());
					embed.setFooter({text:`Page ${page.toString()} of ${pages.length.toString()}`});
					msg.edit({ embeds: [embed] })

				})

			})
		}) //end send pagination embed */






	},
};
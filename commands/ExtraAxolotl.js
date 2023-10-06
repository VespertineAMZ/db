const Discord = require("discord.js");
const fetch = require('node-fetch');
module.exports = {
	name: 'axolotl',
	description: 'generates a random axolotl image',
	cooldown: 5, //a cooldown so the command can't be spammed.
	execute(message, args) {
		fetch ('https://api.animality.xyz/img/axolotl') //fetches info from an api
		.then(res => res.json()).then(body => {
			if(!body) return message.reply("whoops, I broke, try again!")

			let embed = new Discord.EmbedBuilder() //formats the image, and displays it for user enjoyment.
			.setColor(0x954D23)
			.setImage(body.link)
			message.channel.send({ embeds: [embed] })
		})
	},
};
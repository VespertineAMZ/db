const fetch = require('node-fetch');
module.exports = {
	name: 'numberfact',
	description: 'generates a random number trivia',
	cooldown: 2,
	async execute(message, args) {



				fetch('http://numbersapi.com/random/math') //pings the api
    				.then(res => res.text())
    				.then(body => {
    			if(!body) return message.reply("whoops, I broke, try again!") 


			message.channel.send(body); //display the data.
		})
	},
};
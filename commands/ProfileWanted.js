const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');

module.exports = {
	name: 'wanted',
	description: 'generates an active character. Filters using the active section.',
	async execute(message, args) {

        function moneyType() {
            let money = ['Therins', 'Birds']
            return money[Math.floor(Math.random()*money.length)];
        }

        function moneyAmount () {
            let Type = moneyType();
            let coins = '<:therin:723342531718414427>';
            let bounty = ['5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000']
            
            if (Type === 'Birds') {
                coins = `<:sparrow:724134812209643521>`;
                bounty = ['2', '3', '4', '5', '6'];
            }

            bountyAmount = bounty[Math.floor(Math.random()*bounty.length)];

            let reward = `${bountyAmount} ${coins}`;
            return reward;

        }

        

        const charList = await Profiles.find({ extra: 'yes' }).sort([ ['name', 'ascending'] ]);

        

		const name = charList[Math.floor(Math.random()*charList.length)];



        return message.channel.send(`Wanted: ${name.name} \n\n Reward: ${moneyAmount()}`);


	},
};
const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');


module.exports = {
	name: 'actives',
	description: 'Shows characters still actively used', //This is connected to character profiles stored in a database. Characters are generated in profileAdd.js 
	aliases: ['activelist'],
	async execute(message, args) {
            itemtype = await Profiles.find({extra: "yes"}).sort([ ['name', 'ascending'] ]);; //find and sort those set as active
			message.channel.send(`${itemtype.map(it => it.name).join(', ')}`); //put commas between the contents

	},
};
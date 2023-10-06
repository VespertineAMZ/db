const User = require('./models/UsersSchema');
const coins = require("./coins.json");

//A user can look at how many 'coins' they've earned by using this command.

module.exports = {
	name: 'balance', 
    aliases: ['bal'], //alternate command names so the user isn't stuck with just one
	description: 'shows user balance',
	async execute(message, args) {     
			const target = message.mentions.users.first() || message.author; //in discord you can 'mention' someone, so in this case the command can reference the one mentioned, or the one that sent the command.

      let profileData;
      try {
        profileData = await User.findOne({ user_id: target.id }); //users on discord have a unique id. This id is used to identify separate users.
        if(!profileData){ //if a user doesn't have a profile, then make a new one.
          let profile = await User.create({
            user_id: target.id, //this sets the user id as the discord custom id.
            balance: 0, //this sets the default starting balance.

          });
          profile.save(); //The new profile is saved into the database.

          return message.channel.send(`${target.tag} has ${profileData.balance} ${coins.coin}`); //message for the user.
        }

        return message.channel.send(`${target.tag} has ${profileData.balance} ${coins.coin}`); //Displays the actual balance.

      } catch (err) { //error catching.
        console.log(err);
      }


	},
};
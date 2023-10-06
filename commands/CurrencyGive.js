const User = require('./models/UsersSchema');

const coins = require("./coins.json"); //This json lets me represent the type of coins with a small image. If I want to change the image, I can just change the json instead of every command that references it.


module.exports = {
	name: 'give',
	description: 'gives money',
  guildOnly: true,
  adminOnly: true,
	async execute(message, args) {
const commandArgs = args.join(' ');
const splitArgs = commandArgs.split(' ');
const giveAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg)); //separate user id from the rest.
const giveTarget = message.mentions.users.first();


if (!giveAmount || isNaN(giveAmount)) return message.channel.send(`Sorry ${message.author}, that is an invalid amount.`); //checking if the amount of money to give is valid.
if (giveAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

let profileData;
try{
  profileData = await User.findOneAndUpdate( //update the user profile with the new balance, or create a new user profile as needed.
    { 
      user_id: giveTarget.id,
    },
    {
       $inc: {

          balance: giveAmount,

        },
    }
    ).collation( { locale: 'en', strength: 2 } );


  if(!profileData){
    let profile = await User.create({
      user_id: giveTarget.id,
      balance: giveAmount,
    });
    profile.save();
  }


} catch (err) {
  console.log(err);
}



message.channel.send(`Successfully gave ${giveAmount} ${coins.coin} to ${giveTarget.tag}.`);



	},
};
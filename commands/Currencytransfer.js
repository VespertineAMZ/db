const Discord = require("discord.js");
const User = require('./models/UsersSchema');

const coins = require("./coins.json");


async function addCurrency(target, amount) {
    let profileData;
    try{
      profileData = await User.findOneAndUpdate(
        { 
          user_id: target,
        },
        {
           $inc: {

              balance: amount,

            },
        }
        ).collation( { locale: 'en', strength: 2 } );


      if(!profileData){
        let profile = await User.create({
          user_id: target,
          balance: amount,
        });
        profile.save();
      }


    } catch (err) {
      console.log(err);
    }

}  //end function


module.exports = {
	name: 'transfer',
	description: 'transfers money from one user to another.',
	async execute(message, args) {

const commandArgs = args.join(' ');
const user = await User.findOne( { user_id: message.author.id } );
const currentAmount = user.balance;
const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
const transferTarget = message.mentions.users.first();

if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`); //checking for valid input
if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

addCurrency(message.author.id, -transferAmount); //take money from the user that used the command.
addCurrency(transferTarget.id, transferAmount); //give money to the user mentioned in the command.

return message.channel.send(`Successfully transferred ${transferAmount} ${coins.coin} to ${transferTarget.tag}. Your current balance is ${currentAmount - transferAmount} ${coins.coin}`);

	},
};
//same as CurrencyGive.js but subtracts from the balance.
const User = require('./models/UsersSchema');

const coins = require("./coins.json");


module.exports = {
  name: 'take',
  description: 'takes money',
  guildOnly: true,
  adminOnly: true,
  async execute(message, args) {
const commandArgs = args.join(' ');
const splitArgs = commandArgs.split(' ');
let giveAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
const giveTarget = message.mentions.users.first();



if (!giveAmount || isNaN(giveAmount)) return message.channel.send(`Sorry ${message.author}, that is an invalid amount.`);
if (giveAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

giveAmount = giveAmount * -1;

let profileData;
try{
  profileData = await User.findOneAndUpdate(
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

if (profileData.balance < 0) {
  profileData = await User.findOneAndUpdate(
    {
      user_id: giveTarget,
    },
    {
      balance: 0,
    }

    ).collation( { locale: 'en', strength: 2 } );
}

giveAmount = giveAmount * -1;

message.channel.send(`Successfully took ${giveAmount} ${coins.coin} from ${giveTarget.tag}.`);



  },
};
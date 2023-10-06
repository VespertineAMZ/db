const Discord = require("discord.js");
const User = require('./models/UsersSchema');

module.exports = {
  name: 'balances',
  aliases: ['lb'],
  description: 'display all balances of all the users.',
  async execute(message, args) {
  
    const commandArgs = args.join(' ');

   

    
    
      User.find({}).sort([ ['balance', 'descending'] ]).exec((err, res) => {

        if(err)  console.log(err);

        var page = Math.ceil(res.length / 10);

        const embed = new Discord.EmbedBuilder()
          .setTitle("BALANCES")
          .setThumbnail("https://i.imgur.com/7pT9Ja4.png");

        let pg = parseInt(args[0]); //non reaction pagination. Instead a page number is included in the command.
        if (pg != Math.floor(pg)) pg = 1;
        if(!pg) pg = 1; 
        let end = pg * 10;
        let start = (pg*10) - 10;

        if(res.length === 0){
          embed.setDescription("error", "no pages found!");
        } else if (res.length <= end) {
          embed.setFooter({text:`page ${pg.toString()} of ${page.toString()}`});
          for(i = start; i < res.length; i++) {
           embed.addFields({name:`${i+1}.`, value:`${(message.client.users.cache.get(res[i].user_id))}: ${res[i].balance}`});
          }
        } else {
          embed.setFooter({text:`page ${pg.toString()} of ${page.toString()}`});
          for(i = start; i < end; i++){
            embed.addFields({name:`${i+1}.`, value:`${(message.client.users.cache.get(res[i].user_id))}: ${res[i].balance}`});
          }
        }

        message.channel.send({ embeds: [embed] }); 

      }); 

  },
};
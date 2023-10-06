const fs = require('node:fs');
const path = require('node:path')
const config = require('./config.json');

const Discord = require('discord.js');
// Importing this allows access to the environment variables of the running node process
require('dotenv').config();

const { Client, Events, GatewayIntentBits} = require('discord.js');

  
  //set gatewayintentbits to give the bot certain permissions.

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessageReactions ]});
client.commands = new Discord.Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const DISCORD_TOKEN = process.env.DISCORD_TOKEN; //sensitive variable stored in an env file.
const MONGODB_SRV = process.env.MONGODB_URI; //sensitive variable stored in an env file.

const mongoose = require('mongoose');

const cooldowns = new Discord.Collection();

for (const file of commandFiles) {

  const filePath = path.join(commandsPath, file);
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("messageCreate", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // command name and arguments are separated here.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
  
  || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;



  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('I can\'t execute that command inside DMs!');
    }

  //admin only stuff here
  if (command.adminOnly && !message.member.roles.cache.some(r => r.name === "administrator")) {
  return message.reply('You are not allowed to use that command.');
  }
  //end admin only

  //checks if commands have the proper args.
  if (command.args && !args.length) {
    let reply = `You did not provide any arguments, ${message.author}!`;
    if (command.usage) {
     reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
 }

if (!cooldowns.has(command.name)) { //if there's a cooldown, then check the cooldown amount and implement it.
  cooldowns.set(command.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 1) * 1000;

if (timestamps.has(message.author.id)) {
  const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

  if (now < expirationTime) {
    const timeLeft = (expirationTime - now) / 1000;
    return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
  }
}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

try {
  command.execute(message, args);
} 
catch (error) {
  console.error(error);
  message.reply('there was an error trying to execute that command!');
}


//DATABASE STUFF
mongoose.connect(MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(()=>{
  console.log("Connected to the database");
})
.catch((err) => {
  console.log(err);
});
  

});






//the bot logs in here.
client.login(DISCORD_TOKEN); 
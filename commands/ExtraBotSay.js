module.exports = {
	name: 'botsay',
	description: 'bot says something you command it to',
	execute(message, args) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); //delete the user command before it's seen by others
    return message.channel.send(sayMessage);
	},
};
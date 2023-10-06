
module.exports = {
	name: 'choose',
	description: 'choose between options',
	execute(message, args) {

		const commandArgs = args.join(' ');

		function number20(amount) {
    		random = Math.floor((Math.random() * amount));

  		return random;
		}  


		const giveAmount = commandArgs.split(/\s?\|\s?/); //splits the items in the command in between |

		if (!commandArgs || giveAmount.length < 2){

			return message.channel.send("If you want the bot to choose for you, type a message divided with < | > \n e.g. <!choose one | two | three>");

		}

		else {
			
		const randomChoice = number20(giveAmount.length);

		return message.channel.send(giveAmount[randomChoice]);
		}

	},
};
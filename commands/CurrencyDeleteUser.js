const User = require('./models/UsersSchema');


module.exports = {
	name: 'deleteuser',
	description: 'deletes a user.',
	async execute(message, args) {

     const commandArgs = args.join(' ');
     const user = message.mentions.users.first();
      
     const profileData = await User.deleteOne({ user_id: user }); //find the user with the id
     if (!profileData) return message.reply('That user does not exist.');

     return message.channel.send("User successfully deleted."); //delete the user.


	},
};
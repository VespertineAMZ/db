
    let random;

    function randomNumber(amount) { //function that generates a random number.
       random = Math.floor((Math.random() * amount) + 1);

       return random;
   } 






module.exports = {
   name: 'shellgame',
   description: 'play a shell game',
   async execute(message, args) {

           const commandArgs = args.join(' ');

           let cup = randomNumber(3); //find which cup is the correct one.

           let Player = message.author.id; //let only the user who used this command be able to play the game.

           let choice = false;
           

          

               await message.channel.send("The ball is put beneath the shell, then the shells are moved so quickly that they almost become a blur.");

               await message.channel.send("Choose:").then(async msg => {
               
                   await msg.react('1️⃣') //use react collecters to get user input. 
                   await msg.react('2️⃣')
                   await msg.react('3️⃣')

                   // Filters
                   const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === Player;
                   const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === Player;
                   const threeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === Player;

                   const oneCheck = msg.createReactionCollector({filter: oneFilter,  time: 60000});
                   const twoCheck = msg.createReactionCollector({filter: twoFilter,  time: 60000});
                   const threeCheck = msg.createReactionCollector({filter: threeFilter,  time: 60000});

                   oneCheck.on('collect', r => { //if one was reacted to, then the first cup is chosen.
                        message.reply('You choose the first shell.');
                        oneCheck.stop('user');
                        twoCheck.stop('user');
                        threeCheck.stop('user');

                        if(cup == 1){ //compare to see if the random number generated is 1.
                            message.channel.send("You chose the correct shell!");
                        }
                        else {
                            message.channel.send("You chose the wrong shell.");
                        }

                       
                      
                   })

                   twoCheck.on('collect', r => { //if two was reacted to, then the second cup is chosen.
                        message.reply('You choose the second shell.');
                        oneCheck.stop('user');
                        twoCheck.stop('user');
                        threeCheck.stop('user');

                        if(cup == 2){
                            message.channel.send("You chose the correct shell!");
                        }
                        else {
                            message.channel.send("You chose the wrong shell.");
                        }

                   })

                   threeCheck.on('collect', r => { //if three was reacted to, then the third cup is chosen.
                        message.reply('You choose the third shell.');
                        oneCheck.stop('user');
                        twoCheck.stop('user');
                        threeCheck.stop('user');

                        if(cup == 3){
                            message.channel.send("You chose the correct shell!");
                        }
                        else {
                            message.channel.send("You chose the wrong shell.");
                        }

                    })


                   }).catch(error => console.error(error));

                   //end return phase
                   

   },
};
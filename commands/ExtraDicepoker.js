
    let random;

     function randomNumber(amount) {
        random = Math.floor((Math.random() * amount) + 1);

        return random;
    } 






module.exports = {
	name: 'dicepoker',
	description: 'play a game of dice poker',
	async execute(message, args) {

			const commandArgs = args.join(' ');

			let dice1 = randomNumber(6);
			let dice2 = randomNumber(6);
			let dice3 = randomNumber(6);
			let dice4 = randomNumber(6);
			let dice5 = randomNumber(6);

			let dieimg1;
			let dieimg2; 
			let dieimg3;
			let dieimg4;
			let dieimg5;

			let allDice;

			let Player1 = message.author.id;
			
			function diceimage(dieNum){ //function that displays different die images depending on what number was rolled.
			function diceimage(dieNum){ //function that displays different die images depending on what number was rolled.
				let dieImg; 
				switch(dieNum){
					case 1: 
						dieImg='<:die1:849364711518633985>';
					break;

					case 2: 
						dieImg='<:die2:849364737065222216>';
					break;

					case 3: 
						dieImg='<:die3:849364765653336134>';
					break;

					case 4: 
						dieImg='<:die4:849364790241132545>';
					break;

					case 5: 
						dieImg='<:die5:849364816170582062>';
					break;

					case 6: 
						dieImg='<:die6:849364840895610931>';
					break;
				}

				return dieImg;

			}//end function

			function calculateDice(allDice){ //this function checks for patterns in the dice, and calculates points.
				
				let diceVals = [0, 0, 0, 0, 0, 0];

				let i;
				let j;
				
				let Pairs = 0;
				let Threes = 0;
				let Fours = 0;
				let Fives = 0;
				let Straight = 0;
				let Points = 0;
					

				for (i = 1; i <= 6; i++){
					for(j = 0; j <= 4; j++){
						if (allDice[j] == i){
							diceVals[i-1]++;
						}//end if
					}//end inner for
				}//end outside for

				for (i = 0; i <= 5; i++){
					switch(diceVals[i]){

						case 2:
							Pairs++;
						break;

						case 3:
							Threes++;
						break;

						case 4:
							Fours++;
						break;

						case 5:
							Fives++;
						break;

					}//end switch

				}//end for

				if (Pairs == 1 && Threes != 1){
					message.channel.send("You have one pair!");
					message.channel.send("Your Point total is " + Points);

				}//end if

				if (Pairs == 2){
					Points += 1;
					message.channel.send("You have two pairs!\nYour Point total is " + Points);
					
				}//end if

				if (Threes == 1){
					if(Pairs ==1) {
						Points += 5; 
						message.channel.send("You have a full house!\nYour Point total is " + Points);
						
					} else{
						Points += 2; 
						message.channel.send("You have three of a kind!\nYour Point total is " + Points);
						
					}//end pair if
				}//end threes if

				if (Fours == 1) {
					Points += 6; 
					message.channel.send("You have four of a kind!\nYour Point total is " + Points);
					
				}//end if

				if (Fives == 1){
					Points += 7;
					message.channel.send("You have five of a kind!\nYour Point total is " + Points);

				}//end if 

				if (diceVals[0] == 1 && diceVals[1] == 1 && diceVals[2] == 1 && diceVals[3] ==1 && diceVals[4] == 1){
					Straight++;
					Points += 3; 
					message.channel.send("You have a five high straight!\nYour Point total is " + Points);
					

				}//end if

				if (diceVals[1] == 1 && diceVals[2] == 1 && diceVals[3] == 1 && diceVals[4] ==1 && diceVals[5] == 1){
					Straight++;
					Points += 4; 
					message.channel.send("You have a six high straight!\nYour Point total is " + Points);
					

				}//end if
				
				if (Straight == 0 && Pairs == 0 && Threes == 0 && Fours == 0 && Fives == 0){
					Points += 0; 
					message.channel.send("You have no hands.\nYour Point total is " + Points);
				}//end if


			}//end function

			async function returnDice(dieimg1, dieimg2, dieimg3, dieimg4, dieimg5, dice1, dice2, dice3, dice4, dice5, Player){ //this function lets dice be returned and rerolls them for the user.

				dieimg1 = diceimage(dice1);
				dieimg2 = diceimage(dice2);
				dieimg3 = diceimage(dice3);
				dieimg4 = diceimage(dice4);
				dieimg5 = diceimage(dice5);

				//`1️⃣ ${dice1} \n2⃣ ${dice2} \n3⃣ ${dice3} \n4⃣ ${dice4} \n5⃣ ${dice5}`
				await message.channel.send("Roll:");
				await message.channel.send(`${dieimg1} ${dieimg2} ${dieimg3} ${dieimg4} ${dieimg5}`);

				await message.channel.send("Return:").then(async msg => { //numbers can be reacted to, each corresponding to a specific die.
				
					await msg.react('1️⃣')
					await msg.react('2️⃣')
					await msg.react('3️⃣')
					await msg.react('4️⃣')
					await msg.react('5️⃣')
					await msg.react('✅')

					// Filters
                    const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === Player;
                    const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === Player;
                    const threeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === Player;
                    const fourFilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === Player;
                    const fiveFilter = (reaction, user) => reaction.emoji.name === '5️⃣' && user.id === Player;
                    const checkFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === Player;

                    const oneCheck = msg.createReactionCollector({filter: oneFilter,  time: 60000});
                    const twoCheck = msg.createReactionCollector({filter: twoFilter,  time: 60000});
                    const threeCheck = msg.createReactionCollector({filter: threeFilter,  time: 60000});
                    const fourCheck = msg.createReactionCollector({filter: fourFilter,  time: 60000});
                    const fiveCheck = msg.createReactionCollector({filter: fiveFilter,  time: 60000});
                    const checkCheck = msg.createReactionCollector({filter: checkFilter, time: 60000});

                    oneCheck.on('collect', r => {
                        dice1 = randomNumber(6);
                        dieimg1 = diceimage(dice1);
                        message.reply('You return the first die.');
                        oneCheck.stop('user');
                    })

                    twoCheck.on('collect', r => {
                        dice2 = randomNumber(6);
                        dieimg2 = diceimage(dice2);
                        message.reply('You return the second die.');
                        twoCheck.stop('user');
                    })

                    threeCheck.on('collect', r => {
                        dice3 = randomNumber(6);
                        dieimg3 = diceimage(dice3);
                        message.reply('You return the third die.');
                        threeCheck.stop('user');
                    })

                    fourCheck.on('collect', r => {
                        dice4 = randomNumber(6);
                        dieimg4 = diceimage(dice4);
                        message.reply('You return the fourth die.');
                        fourCheck.stop('user');
                    })

                    fiveCheck.on('collect', r => {
                        dice5 = randomNumber(6);
                        dieimg5 = diceimage(dice5);
                        message.reply('You return the fifth die.');
                        fiveCheck.stop('user');
                    })

                    checkCheck.on('collect', async r => { //when the check is selected, that means the user is done returning dice.
                    	await message.channel.send("Roll:");
                        await message.channel.send(`${dieimg1} ${dieimg2} ${dieimg3} ${dieimg4} ${dieimg5}`);
                        checkCheck.stop('user');
						oneCheck.stop('user');
						twoCheck.stop('user');
						threeCheck.stop('user');
						fourCheck.stop('user');
						fiveCheck.stop('user');

                        let allDice = [dice1, dice2, dice3, dice4, dice5];

                        calculateDice(allDice);


                    })//end check check


					}).catch(error => console.error(error));

					//end return phase

			}//end function

			



			if (commandArgs == 'help'){
				message.channel.send('-Each player uses a set of five dice.\n-The goal of the game is to roll the strongest hand in two out of three hands.\nFirst: roll the dice.\nSecond: choose any dice you want to return.\n\nRanking of Hands from Lowest to Highest:\n-Pair — two dice showing the same value.\n-Two Pairs — two pairs of dice, each showing the same value.\n-Three-of-a-Kind — three dice showing the same value. \n-Five High Straight — dice showing values from 1 through 5, inclusive.\n-Six High Straight — dice showing values from 2 through 6, inclusive.\n-Full House — Pair of one value and Three-of-a-Kind of another.\n-Four-of-a-Kind — four dice showing the same value.\n-Five-of-a-Kind — all five dice showing the same value.');

			}//end if


			else {

				await returnDice(dieimg1, dieimg2, dieimg3, dieimg4, dieimg5, dice1, dice2, dice3, dice4, dice5, Player1);


			}//end else
			


			

			
			


		
			

					


					

	},
};
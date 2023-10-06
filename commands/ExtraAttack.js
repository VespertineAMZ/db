module.exports = {
	name: 'atk',
	description: 'rolls various numbers of d6\'s for a tabletop game attack.',
    aliases: ['attack'],
	execute(message, args) {
     let count = 0; 
     let count2 = 0;
     let i;
     let roll = ''; 
     let roll2 = '';
     let random;
     let random2;
     let attack; 

    function number6() {
    let number6 = ['1','2','3','4','5','6']; //I understand this array is not the ideal way to do this. Later I start to use Math.floor((Math.random() * amount) + 1);. 
    random = number6[Math.floor(Math.random()*number6.length)];
       if (random == 5 || random == 6) { //5's and 6's count as a 'successful attack' and will add to the value.
          count ++;
         }
    return random;
  }

    function blessing6() {
    let blessing6 = ['1','2','3','4','5','6'];
    random2 = blessing6[Math.floor(Math.random()*blessing6.length)]; //only 6's count as a success here, but they are multipled with the attack number.
       if (random2 == 6) {
          count2 ++;
         }
    return random2;
  }
    


	const amount = parseInt(args[0])
  let amount2 = parseInt(args[1])
   if (isNaN(amount)) {
   return message.reply('that doesn\'t seem to be a valid skill number.');}
 
  else if (amount < 1 || amount > 100) {
  return message.reply('you need to input a number between 1 and 100.');}

  if (!amount2 || isNaN(amount2)) {
    amount2 = 0;
   }
  
     for (i = 0; i < args[0]; i++) {
          roll += number6() + " "; //this will print out the entire attack roll so the user can see.
       }
     
     for (i = 0; i < args[1]; i++) {
          roll2 += blessing6() + " "; //this will print out the entire critical roll for the user's sake.
       }

       attack = Number(count) * (Number(count2) + 1); //this calculates the full damage

       message.channel.send(` ${roll} \n **${count}** attack successes \n ${roll2} \n **${count2}** blessing successes`)
        .then(msg => {
                return message.channel.send(`${message.author} did **${attack}** damage`)
            });
      

       count = 0;
       count2 = 0;


	},
};
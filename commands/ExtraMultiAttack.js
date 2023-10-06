module.exports = {
	name: 'multiatk',
	description: 'allows the attack command to be used many times for convenience.',
  aliases: ['multiattack'],
  //args: true, 
  //usage: '<skill number>',
	execute(message, args) {
     let count = 0; 
     let count2 = 0;
     let i;
     let roll = ''; 
     let roll2 = '';
     let random;
     let random2;

     let attacks = '';

    function number6() {
    let number6 = ['1','2','3','4','5','6'];
    random = number6[Math.floor(Math.random()*number6.length)];
       if (random == 5 || random == 6) {
          count ++;
         }
    return random;
  }

    function blessing6() {
    let blessing6 = ['1','2','3','4','5','6'];
    random2 = blessing6[Math.floor(Math.random()*blessing6.length)];
       if (random2 == 6) {
          count2 ++;
         }
    return random2;
  }
    
  function atkdamage(number1, number2){
    let i = 0;
    let attack; 
    for (i = 0; i < number1; i++) {
        roll += number6() + " ";
     }
   
   for (i = 0; i < number2; i++) {
        roll2 += blessing6() + " ";
     }
     attack = Number(count) * (Number(count2) + 1);
    count = 0;
     count2 = 0;

     return attack;


  }


  const amount = parseInt(args[0]);
  let amount2 = parseInt(args[1]);
  let attackamount = parseInt(args[2]);
   if (isNaN(amount)) {
   return message.reply('that doesn\'t seem to be a valid skill number.');}
 
  else if (amount < 1 || amount > 100) {
  return message.reply('you need to input a number between 1 and 100.');}

  if (!amount2 || isNaN(amount2)) {
    amount2 = 0;
   }

   if (!attackamount || isNaN(attackamount)) {
    attackamount = 1;
   }

   else if (attackamount < 1 || attackamount > 50) {
    return message.reply('There can only be 1-50 attacks.');}
   
    for (i = 0; i < args[2]; i++) {


         attacks += atkdamage(amount, amount2) + " ";

    }

    return message.channel.send(`**${attacks.toString()}**`);

    
  
  


	},
};
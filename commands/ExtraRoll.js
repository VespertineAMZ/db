module.exports = {
  name: 'roll',
  description: 'rolls a die',
  args: true,
  execute(message, args) {
      const commandArgs = args.join();
      const splitArgs = commandArgs.split('');

      let count = 0; 
      let i;
      let roll = ''; 
      let random;
    
function number20(amount) {
    random = Math.floor((Math.random() * amount) + 1);

    count += Number(random);

  return random;
}  

if (commandArgs.match(/\d+d\d+/)) { //use regex to look for a format using a number, the letter d, and another number.


      const command = commandArgs.match(/\d+/g);
      const numberDie = command[1]; //find how many sides the die has.
      const amountDie = command[0]; //find how many dice

     if ((amountDie < 500 && amountDie > 0) && (numberDie < 2001 && numberDie >0)) {

        for (i = 0; i < amountDie; i++) {
            roll += number20(numberDie) + " · ";
             }
        message.channel.send(':game_die: [ · ' + roll.toString() + '] = **' +  count.toString() + '**'); //display the results.
        count = 0;
      }//end if 

      else {
        message.channel.send('That\'s an invalid amount of dice.');
      }//end else

    }//end if d20

else {
    message.channel.send('Rolling a dice requires syntax like 1d6 or 2d8');
  }//end else

  },
};
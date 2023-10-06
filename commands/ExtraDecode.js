const used = new Set();


module.exports = {
	name: 'decode',
	description: 'A little code decoder game that shows different letters for a different cipher.',
	execute(message, args) {

        let roll = ''; 
        let count = 0; 
        const amount = parseInt(args[0]);

        function number6() { //find a number between 1-6, and record how many 5's and 6's are rolled.
            let number6 = ['1','2','3','4','5','6'];
            let random = number6[Math.floor(Math.random()*number6.length)];
               if (random == 5 || random == 6) {
                  count ++;
                 }
            return random;
          }

          function atkdamage(number){ //add the count from the above function together.
            let i = 0;
            let attack; 
            for (i = 0; i < number; i++) {
              roll += number6() + " ";
             }
           

             attack = Number(count) 
             count = 0;
        
             return attack;
        
        
          }

          if(used.has(message.author.id)) {
        		return message.reply("You cannot use this command until tomorrow.");
    		} //end if


          function alphabet(){
            let targilian = ['https://i.imgur.com/AWpHDWL.png', 'https://i.imgur.com/NJ0E1NT.png', 'https://i.imgur.com/PlnqH5c.png', 'https://i.imgur.com/QVXPbXw.png', 'https://i.imgur.com/5kMB4o1.png',
        'https://i.imgur.com/i3DcJU5.png', 'https://i.imgur.com/TW5TdaP.png', 'https://i.imgur.com/DtamtEj.png', 'https://i.imgur.com/Bi1NPPs.png', 'https://i.imgur.com/aIpuM17.png', 'https://i.imgur.com/4cUeIdF.png',
        'https://i.imgur.com/ayw7lif.png', 'https://i.imgur.com/beEjkc3.png', 'https://i.imgur.com/VaCPmV3.png', 'https://i.imgur.com/4eUMYJ8.png', 'https://i.imgur.com/bhoDy7k.png', 'https://i.imgur.com/BbAa3uk.png',
        'https://i.imgur.com/lNDBxSD.png', 'https://i.imgur.com/xp7mKS5.png', 'https://i.imgur.com/ymYTGHX.png', 'https://i.imgur.com/eH0PKNs.png', 'https://i.imgur.com/yNqMGFS.png', 'https://i.imgur.com/vZOo7Sr.png',
        'https://i.imgur.com/Tj0RcUX.png', 'https://i.imgur.com/vbwvJKP.png', 'https://i.imgur.com/5CCKFaO.png'];
            return targilian[Math.floor(Math.random()*targilian.length)];
          }

          if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid skill number.');}
          
          else if (amount < 1 || amount > 100) {
           return message.reply('you need to input a number between 1 and 100.');}


           let academics = atkdamage(amount);

           message.channel.send(`You have rolled **${academics}** successes`);

           if (academics > 1){
            message.channel.send(`${alphabet()}`);

            used.add(message.author.id);
                    setTimeout(() => {
                         used.delete(message.author.id)
                 }, 43200000);
           }


           else {
            message.channel.send("You cannot decode any of the letters.");

            used.add(message.author.id);
                    setTimeout(() => {
                         used.delete(message.author.id)
                 }, 43200000);
           }

        


	},
};
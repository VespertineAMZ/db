const Discord = require("discord.js");
const User = require('./models/UsersSchema');
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');
const coins = require("./coins.json");


const used = new Set();

let count = 0; 




function number20(amount) { //generates a random number.
    random = Math.floor((Math.random() * amount) + 1);

    count += Number(random);

  return random;
}  


async function addCurrency(target, amount) {//add money to a user's balance.
    let profileData;
    try{
      profileData = await User.findOneAndUpdate(
        { 
          user_id: target,
        },
        {
           $inc: {

              balance: amount,

            },
        }
        ).collation( { locale: 'en', strength: 2 } );


      if(!profileData){
        let profile = await User.create({
          user_id: target,
          balance: amount,
        });
        profile.save();
      }


    } catch (err) {
      console.log(err);
    }

}  //end function


async function addItem(target, itemName) { //gives a user an item.
     let user;
     const item = await ShopItems.findOne({ name: itemName });

      try{
          const user = await UserItems.findOneAndUpdate(
            {
              user_id: target.id,
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: 1,

            },
          }
          );


          if(!user){
            let profile = await UserItems.create({
              user_id: target.id,
              item_id: item.item_id,
              name: item.name,
              amount: 1,
              emoji: item.emoji,
            });
            profile.save();
          }


        } catch (err) {
          console.log(err);
        }

}//end function

async function takeItem(target, itemName) { //takes an item from a user.
     let user;
     const item = await ShopItems.findOne({ name: itemName });

      try{
          const user = await UserItems.findOneAndUpdate(
            {
              user_id: target.id,
              item_id: item.item_id,
            }, 
            {
              $inc: {

              amount: -1,

            },
          }
          );

          if (user.amount < 2) {
            const delete_user = await UserItems.deleteOne({ user_id: target.id, item_id: item.item_id });
          }

         } catch (err) {
          console.log(err);
        }

}//end function


//COMMAND BEGINS HERE

module.exports = {
	name: 'explore',
	description: 'A text game for users.',
	aliases: ['exp', 'expl'],
	async execute(message, args) {

			let randNumber = number20(43);
            let wepNumber = number20(9);
            let godNumber = number20(6);
            let infectedspore = number20(5);
			      const commandArgs = args.join(' ');
    		    const command = commandArgs.toLowerCase();
    		    const giveTarget = message.author;
            const id = message.author.id;
            



            //explore begins

			if(used.has(message.author.id)) {
        		return message.reply("You cannot use this command until tomorrow."); //cooldown so the command can't be spammed.
    		} //end if

    		else if (command === "help") {
    			message.channel.send("Two mausoleums sit in the cemetery, one with its metal doors decorated with a relief of Sindariel's tranquilly weeping face, the other with its metal doors decorated with the many armed image of Streiya.\n\nSomething has caused the doors to now open, but when stepping inside, one finds not a room filled with corpses, but instead a winding cave of pale stone in Sindariel's Mausoleum, the Mausoleum of Death, and a carefully carved labyrinth of dark polished brick in Streiya's Mausoleum, the Mausoleum of Fate. They shall have to be explored, but carefully.\n\n\`\`\`Once per day, you may explore a mausoleum of your choice. For Sindariel\'s the command is <!explore death>, and for Streiya\'s the command is <!explore fate>. Remember what you find within, for it may be connected. Also, you may occasionally find notable things in the caverns that you want a closer look at. For this, use this <!search 'objectname'> command to take a closer look. For example, <!search rock>\`\`\`");
    		}


    		else if (command === "death") {


                //SWITCH startS HERE
    			switch (randNumber){

    				case 1:

    					message.channel.send("\`\`\`Path 1 - P1\`\`\`\n\nThe light shines behind you as you just enter Death's pale caves. The stone is smooth, rounded from nature, and the path beckons you forward until something catches your attention. It looks to be a gray stone with an odd symbol carved on it, as well as an R. Perhaps this Symbol Stone R will be of use.");

    				break;


    				case 2:

    					message.channel.send("\`\`\`Cavern 2 of Water and Shadow - C2WS\`\`\`\n\nThe tunnel from the entrance extends into a larger, round cavern, filled with stones. There are two paths to choose from now, one leading to the west, and one to the north. To the north is a wide path from which you can hear the sound of rushing water, and to the west is a thin path, the stones within in odd formation that cast ghoulish dancing shadows when exposed to the light of flame. Searching this place, you manage to find some crystalline birds.");

    					addCurrency(giveTarget.id, 3);

                		message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 3:

    					message.channel.send("\`\`\`Cavern 3 of Water - C3W\`\`\`\n\nFrom the cavern previous, you decided to follow the sound of rushing water and now find yourself in another large cavern. At the far end of it, a glassy pool takes up much of the space, its surface rippling softly from the waterfall pouring into it from the back. Suddenly, the surface starts to break and roil, and you see the top of a human head peek out, its pale opalescent eyes staring at you. It needs only a glance before a long limbed creature starts to crawl out of the depths, its jaw unhinging to show sharpened teeth. (Shamblers are crawling out of the pool. You may choose to take 10xp now, or if you wish to moderate a fight you may bring three others with you. Use the <!monst shambler> command to see the Shambler's stats..)");

    				break;

    				case 4:

    					message.channel.send("\`\`\`Cavern 3 of Water - C3W\`\`\`\n\nFrom the cavern previous, you decided to follow the sound of rushing water and now find yourself in another large cavern. At the far end of it, a glassy pool takes up much of the space, its surface rippling softly from the waterfall pouring into it from the back. A nearby stone scrapes your leg, but as water drips onto it you notice the wound close. It couldn't hurt to take some of this.");

                        

                       addItem(giveTarget, "Healing Potion");
    				break;

    				case 5:

    					message.channel.send("\`\`\`Cavern 3 of Water - C3W\`\`\`\n\nA pool rests before you, glowing with a pale light, and rippling from the waterfall splashing into it. You move to take a closer look, but slip on a wet stone, and plunge into the water. Beneath you, you see the bottom pool is covered in skeletons-- white, and glimmering beneath the water. A voice murmurs in your ear _\"Get out!\"_ and you struggle to the surface. When you finally make it, you find an odd ring in your hand.");

                        

                        addItem(giveTarget, "Gem of Knowledge");



    				break;

    				case 6:

    					message.channel.send("\`\`\`Path 3 of Shadow - P3S\`\`\`\n\n The path is thin and twisting, and odd rock formations make any lights held cast twisted, ghoulish shadows. Sometimes the shadows seem to move... or perhaps, they really are. Small shadowy weasel like creatures bound out from behind some stones, hissing and revealing needle like teeth. You manage to fight them off. (@wisp for 10 xp of a character of your choice. If you wish to rp fighting, their stats are: VIT: 3, PHYS: 5. Dark magic will do 1/2 damage, while Light magic will do 2X damage. It is recommended to run 4 at minimum and 9 at maximum.)");
                        message.channel.send('https://cdn.discordapp.com/attachments/664345057054425098/723309182031233074/Skivverling.png');

    				break;

    				case 7:

    					message.channel.send("\`\`\`Shadow Cavern 4 of Moon and Star - SC4MS\`\`\`\n\nThis small cavern has two paths to the west of it. Someone has engraved a star in the floor of the stone on the path to the right, while a crescent moon has been engraved on the floor of the stone on the path to the left. Searching further, you find a glimmering crystal bird on the ground.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 8:

    					message.channel.send("\`\`\`Path 5 of Star - P5S\`\`\`\n\nYou follow a path that had a star engraved on the floor. Otherwise, the path is short and there is little of note. Except... you find a gray stone with a symbol carved on it, as well as K1. Perhaps this Symbol Stone K1 will be of use.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 9:

    					message.channel.send("\`\`\`Star Cavern 6 of Mushroom, Crystal, and Moon - SC6MCM\`\`\`\n\nAfter following a path that had a star engraved on the floor, you arrive at a cavern that has a large altar at the center of it, with a suit of armor standing before it. You followed the path from the east of the cavern, and notice there are two to the north, and one to the south. The path to the south has a crescent moon engraved in the floor, while the left path to the north seems to be covered in glowing mushrooms, and the right path to the north looks to be covered in pale crystals.");

    				break;

    				case 10:

    					message.channel.send("\`\`\`Path 6 of Moon - P6M\`\`\`\n\nYou follow a path that had a moon engraved on the floor. Otherwise, the path is short and there is little of note. Except... is that a crystal bird?");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 20:

    					message.channel.send("\`\`\`Path 6.5 of Moon - P6.5M\`\`\`\n\nThis is the southmost path of a small cavern that had 4 paths leading from it in different directions. There is a moon engraved on the floor. Otherwise the path is short and insignificant. There is a glimmer behind that stone though. A crystal bird?");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 12:

    					message.channel.send("\`\`\`Cavern 7 of Moon - C7M\`\`\`\n\nFollowing a path from the north with a moon engraved on it, you arrive in a large cavern, so large that you can't see the other end of it in the darkness. You can, however, tell that there is a path directly to the east. Giving this place a quick lookover, you discover a handful of crystal birds.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 13:

    					message.channel.send("\`\`\`Path 7.5 of Moon - P7.5M\`\`\`\n\nThis was a path that was directly east from the large cavern previous. It is straight, and narrow, and seems not to be horribly long. In a alcove there's a statue of Sindariel, and in her mouth is a crystal bird. When you touch it, faint images of a man holding a helmet drift past you, and a soft voice whispers: _\"Draw the moth symbol on the right arm.\"_ The voice fades, and the moth symbol appears in your mind for just a moment before disappearing.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

    				break;

    				case 14:

    					message.channel.send("\`\`\`Cavern 7.5 of Moon - C7.5M\`\`\`\n\nFollowing the short path that led from a large cavern previous, you arrive in a smaller cavern. What catches your attention first is a large statue of bones, a green glimmer shines from one of its eyes. Inspecting the glimmer more closely, you find a small earring.");

                        

                        addItem(giveTarget, "Earring of Disguise");

    				break;

    				case 15:

    					message.channel.send("\`\`\`Cavern 8 of Moon - C8M\`\`\`\n\nFollowing a path from the north with a moon engraved on it, you arrived in a large cavern, and are now exploring the bottom half. You notice a path to the south. There is a crescent pool in the ground, and its surface is glassy still. You notice the ceiling above has thousands of colorful points of light, like stars, and that the pool reflects it perfectly. Something about this water is oddly refreshing, and you take some with you.");

                        

                        addItem(giveTarget, "Healing Potion");
    				break;

    				case 16:

    					message.channel.send("\`\`\`Path 9 of Moon - P9M\`\`\`\n\nThis path is very long, and curves like a crescent. You don't find much on it except a stone marked with a symbol and a w4. Perhaps this Symbol Stone W4 will be of use.");

    				break;

    				case 17:

    					message.channel.send("\`\`\`Moon Cavern 10 of Tree - MC10T\`\`\`\n\n Either following the moon path from the south, or the tree path from the east, you find yourself in a large cavern with one more unexplored path to the north. Searching around, you find a handful of crystal birds.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;

    				case 18:

    					message.channel.send("\`\`\`Path 7 of Mushroom - P7M\`\`\`\n\nThis path was one of the paths that led away from the small cavern with the altar. Many glowing mushrooms line it, and it's long and twisty until it eventually hits a fork. The forward path is marked with an engraving of a tree, while the left path continues to grow thick with mushrooms. Among the mushrooms you find a couple of crystal birds.");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);
                        

    				break;

    				case 19:

    					message.channel.send("\`\`\`Path 8 of Mushroom - P8M\`\`\`\n\nAfter following a path filled with mushrooms, you decide to continue to follow the mushroom path that had curved to the left. The path seems to fork at the end revealing two more mushroom laden paths-- one to the left, and one to the right. Among the mushrooms you find a stone marked with a symbol and an a1. Perhaps this Symbol Stone A1 will be of use.");

    				break;

    				case 20:

    					message.channel.send("\`\`\`Path 8 of Tree - P8T\`\`\`\n\nAfter following a path filled with mushrooms, you decide to continue to follow the path forward that was marked with an engraving of a tree. It's short, and seems to lead to a large cavern ahead. There's little of note on the path except for a couple of birds you manage to find along the way.");
                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

    				break;

                   

                    case 21:

    					message.channel.send("\`\`\`Path 9 of Mushroom Left - P9ML\`\`\`\n\nYou've followed the Mushroom path for a while, and when you hit a fork, you opted for the one on the left. Here, the mushrooms part, and in the center of them sits a glowing red flower, then there are more flowers, and more. A sickly smell of rot clouds the air, and you realize the flowers are growing on corpses.");
                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;
                     
                    

                   case 22:

                        message.channel.send("\`\`\`Cavern 10 of Mushroom Left - C10ML\`\`\`\n\n There was some sort of creature in the path before with the red flower, and as you pass it you find a small cavern filled with glowing red flowers. Below them, you notice the ground is littered with corpses from which they feed.");

                    break; 

                    case 23:

                        message.channel.send("\`\`\`Cavern 9 of Mushroom Right - C9MR \`\`\`\n\nYou've followed the Mushroom path for a while, and when you hit a fork, you opted for the one on the left. This one immediately opens into a large cavern, and at the center sits a massive glowing mushroom. Occasionally it releases sparkling spores that seem to vibrate with magic energy. It couldn't hurt to take some of those.");

                        

                        addItem(giveTarget, "Healing Potion");


                    break;

                    case 24:

                        message.channel.send("\`\`\`Path 11 of Tree - P11T\`\`\`\n\nFrom the large cavern before you decided to follow the path to the north. This path is short and straight, but you can tell it opens up into a massive cavern ahead. You notice ferns line the path here, giving it a sense of life. Among them you find two crystal birds.");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                    break;

                    case 25:

                        message.channel.send("\`\`\`Cavern 12 of Tree - C12T\`\`\`\n\nThis cavern is humongous-- so large that it will take days to explore. Even more breathtaking though, is the forest of glowing blue-white trees that fills it, and the carpet of glowing blue moss below. An entire forest is in a cave, filled with flowers, streams, ponds, and the like. Furred animals seem to live here as well. There's a calm to this place, though sometimes when walking through you feel as if you're being watched. To the southwest there's a tiny cavern. By one of the trees you find a stone marked with a symbol, and with a9. Perhaps this Symbol Stone A9 will be of use.");

                    break;

                    case 26:

                        message.channel.send("\`\`\`Cavern 13 of Tree - C13T\`\`\`\n\nThis is a tiny cavern that has been hollowed out on the southwest wall of the massive forest cavern. It looks to have been used as a little room once. A decayed bed sits in one wall, and in another alcove above it sits another decayed bed. The remains of a stove and some pots is here as well. There's also a rusted sword, and the tattered remains of a toy bear.");

                    break;

                    case 27:

                        message.channel.send("\`\`\`Path 7 of Crystal - P7C\`\`\`\n\nThis path was the right path to the north that led from that odd cavern with the altar and the armor. Pale crystals line the walls, floor and ceiling, giving the entire area a jagged, glimmering look. The path soon forks to the left and right. Both paths look the same. They both sparkle with crystals. On the ground you find a couple of crystal birds.");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                    break;

                    case 28:

                        message.channel.send("\`\`\`Path 8 of Crystal Left - P8CL\`\`\`\n\nFollowing the crystalline path you decided to take the leftmost path. It's straight, and wide, and lets you admire the crystalline structures in their full glory, your light if you're holding one making little rainbows reflect against the walls. Among them you find 2 crystal birds.");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);


                    break;

                    case 29:

                        message.channel.send("\`\`\`Path 8 of Crystal Right - P8CR\`\`\`\n\nFollowing the crystalline path you decided to take the leftmost path when you hit a fork. The path is long and curving, but the crystals near the center seem more lustrous. Standing near them makes you feel... stronger, in a way. (@wisp to gain xp +10 for a character of your choice)");

                    break;

                    case 30:

                        message.channel.send("\`\`\`Crystal Cavern 9 of Eye, Blood, and Bone - CC9EBB\`\`\`\n\nThere was a fork in the crystal path, but it didn't seem to matter as both paths lead to the south side of this massive cavern. Pale crystals grow over the floor, walls, and ceiling, some so large you can't see the top as it disappears into the depths of the huge cavern, some so tiny they are smaller than the nail of your thumb. This cavern is so large it would take days to explore its entirety, but you are able to find the exits. Other than the two paths you arrived from, there appears to be a tiny cavern hollowed out on the west side, red and stained with old blood. To the north there are three paths. The one on the left has its entryway decorated with an archway of bones. The one in the middle has an engraving of an eye on the ground, as does the one to the right. As you explore, you manage to find a stone with a symbol marked on it, as well as t6. Perhaps this Symbol Stone T6 will be of use.");

                    break;

                    case 31:

                        message.channel.send("\`\`\`Cavern 10 of Blood - C10B\`\`\`\n\n This cavern was embedded in the wall to the west of the large cavern the crystal path led to. It's quite small, only about as large as a bedroom, but what's notable about it is that its pale stone walls are slathered in dried blood. The walls, the ceiling. Sometimes the blood seems to form odd symbols, other times it looks to be smeared handprints. You find a red crusted crystal bird among the red. When you touch it, faint images of a man holding a sword high drift past you, and a soft voice whispers: _\"Draw the centipede symbol on the right leg.\"_ The voice fades, and the centipede symbol appears in your mind for just a moment before disappearing.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    case 32:

                        message.channel.send("\`\`\`Path 10 of Bone - P10B\`\`\`\n\nYou follow the path that was decorated with an archway of bones. Its long, and has sharp curves in an S shape. More bone artworks decorate the path, and among them you find a handful of crystal birds.");

                        addCurrency(message.author.id, 4);

                        message.channel.send(`${giveTarget.tag} found 4 ${coins.coin}.`);

                    break;

                    case 33:

                        message.channel.send("\`\`\`Cavern 11 of Bone - C11B\`\`\`\n\nAfter following the path that was decorated with an archway of bones, you find that it ends in a medium sized cavern. The cavern is mostly empty, except for a large black door. There is also a small stone on the ground with a symbol marked on it, along with Y8. Perhaps this Symbol Stone Y8 will be of use.");

                    break;

                    case 34:

                        message.channel.send("\`\`\`Path 10 of Eye Middle - P10EM\`\`\`\n\nYou follow the middle path that was decorated with an engraving of an eye. A tiny cavern is hollowed out on the wall path directly to the left, while the end of the path eventually opens up to a larger cavern. Searching the path, you find a couple of crystal birds.");

                        addCurrency(message.author.id, 4);

                        message.channel.send(`${giveTarget.tag} found 4 ${coins.coin}.`);

                    break;

                    case 35:

                        message.channel.send("\`\`\`Cavern 10.5 of Eye Middle - C10.5EM\`\`\`\n\nAfter following the middle path that was decorated with an engraving of an eye, you decide to look within the small cavern that was hollowed out in the left wall. The cavern is small, and smooth walled, and in the center of it is a large black box with a keyhole in the lid.");
     
                        const key = await ShopItems.findOne({ name: 'Key' });
                        const hasKey = await UserItems.findOne({ user_id: giveTarget.id, item_id: key.item_id});
                       

                        if (hasKey) {
                            message.channel.send("\nSuddenly, you hear a whimsical voice in your head. \"I see you've found one of my keys,\" it says. \"How wonderful. I'll be taking that.\" The old key you've held onto for all this time suddenly flies out of where you've been keeping it, then flashes into a sphere of gold light that swirls into the keyhole before disappearing. With that, the box clicks open, revealing the treasure inside for you to take. Once taken, the box will click shut to be locked again.");

                            takeItem(giveTarget, "Key");

                            switch(wepNumber){

                                case 1:

                                    addItem(giveTarget, "Bow of Nature");
                                    await message.channel.send("https://i.imgur.com/keDGhrh.png");
                                    message.channel.send(`${message.author} now has the Bow of Nature.`);
                                      


                                break;

                                case 2:

                                    addItem(giveTarget, "Harp of Crystal");
                                    await message.channel.send("https://i.imgur.com/RfGHSxz.png");
                                    message.channel.send(`${message.author} now has the Harp of Crystal.`);
                                    

                                break;

                                case 3:     

                                    addItem(giveTarget, "Staff of Light");
                                    await message.channel.send("https://i.imgur.com/RbcEYwU.png");
                                    message.channel.send(`${message.author} now has the Staff of Light.`);
                                    

                                break;

                                case 4:


                                    addItem(giveTarget, "Shield of Ice");
                                    await message.channel.send("https://i.imgur.com/DMQYF44.png");
                                    message.channel.send(`${message.author} now has the Shield of Ice.`);
                                    

                                break;

                                case 5:

                                    addItem(giveTarget, "Sword of Flame");
                                    await message.channel.send("https://i.imgur.com/B2vhYle.png");
                                    message.channel.send(`${message.author} now has the Sword of Flame.`);
                                    

                                break;

                                case 6:

                                    addItem(giveTarget, "Nakaclocker");
                                    await message.channel.send("https://i.imgur.com/HYpLuQh.png");
                                    message.channel.send(`${message.author} now has the Nakaclocker.`);  

                                break;

                                case 7:

                                    addItem(giveTarget, "Daggers of Shadow");
                                    await message.channel.send("https://i.imgur.com/smJ49WG.png");
                                    message.channel.send(`${message.author} now has the Daggers of Shadow.`);  

                                break;

                                case 8:

                                    addItem(giveTarget, "Spear of the Storm");
                                    await message.channel.send("https://i.imgur.com/nhkxQnb.png");
                                    message.channel.send(`${message.author} now has the Spear of the Storm.`);  

                                break;

                                case 9:

                                    addItem(giveTarget, "Zephyr Fan");
                                    await message.channel.send("https://i.imgur.com/z7iyS6w.png");
                                    message.channel.send(`${message.author} now has the Zephyr Fan.`);  

                                break;



                            }//end switch
                        }//end if

                        else {
                            message.channel.send("\nSuddenly, you hear a disappointed voice in your head. \"You haven't found one of my keys. I'm afraid I'll have to stay shut then. Shut for years and years when I have so many gifts to give.\" No matter what you do, the box won't open, nor does it speak to you again.");
                        }//end else

                    break;

                    case 36:

                        message.channel.send("\`\`\`Eye Cavern 11 of Feather - EC11F\`\`\`\n\nFollowing either one of the paths engraved with an eye takes you to the south side of a fairly large cavern. There are two more paths that lead from it to the north. The left path has a feather engraved on the floor, while the right path has another eye engraved on the floor. You find an odd stone with a symbol on it, as well as w9 on it. Perhaps this Symbol Stone W9 will be of use. You also find a crystal bird.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    case 37:

                        message.channel.send("\`\`\`Path 12 of Feather - P12F\`\`\`\n\nYou follow the path engraved with a feather. It's short, and wide, and opens into another large cavern at the end. Exploring the path, you manage to find a handful of crystal birds.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

                    break;

                    case 38:

                        message.channel.send("\`\`\`Cavern 13 of Feather - C13F\`\`\`\n\nAfter following the path engraved with a feather, you find yourself at the south side of a large cavern. Some of the stones have been stacked up to make a sort of workbench, and you can see the broken remains of what was once a magic laboratory on these makeshift workbenches. Within the cavern you find a handful of crystal birds.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

                    break;

                    case 39:

                        message.channel.send("\`\`\`Path 12 of Eye - P12E\`\`\`\n\nYou follow the path engraved with an eye symbol. This path is wide, and long, and the walls are smooth as if someone had hollowed them out. On the path you find a crystal bird, and an odd stone marked with a symbol and g2. Perhaps this Symbol Stone G2 will be of use.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    case 40:

                        message.channel.send("\`\`\`Cavern 13 of Eye - C13E\`\`\`\n\nAfter following the path engraved with an eye symbol, you find yourself at the west side of a huge, round cavern. At the center of it is a massive crystalline pillar that stretches from the floor to the ceiling, and in the center of the crystalline pillar is a small, turqouise sphere, only about the size of a walnut. You find little else in this room except for a stone marked with a symbol and a k8. Perahps this Symbol Stone K8 will be of use.");

                    break;

    				default: 

    					message.channel.send("The odd caves of Sindariel's Mausoleum twist and turn, the stone pale and smooth against your fingertips. You get lost in the darkness, and soon find yourself back at the entrance after having found nothing except a crystal bird on the path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);
    			}//end switch

                if(infectedspore < 2){
                    addItem(giveTarget, "Infected Spore");
                    message.channel.send(`${giveTarget.tag} recieved 1 <a:infectedspore:1117599346645549136>.`);
                }

                used.add(message.author.id);
                    setTimeout(() => {
                         used.delete(message.author.id)
                 }, 43200000);


    		}//end elif


            //############################################################################################
            /////FATE PATH//////////
            //############################################################################################


    		else if (command === "fate") {

    			switch (randNumber){


                    //no dupe 1
    				case 1:

                        message.channel.send("\`\`\`Corridor 1 - C1\`\`\`\n\nYou dare to take a step into the darkness of Fate's Labyrinth. The corridor around you is made of black, polished stone bricks, and the walls are smooth and straight. You can immediately tell this appears to be something manmade, rather than anything natural. Sometimes it seems if the bricks seem to shift and change in pattern, but that might be a trick of the eyes. The path stretches ahead, and you can tell there's a room on the north side. A handful of birds are scattered on the polished black floor.");

                        addCurrency(message.author.id, 3);

                        message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);

    				break;


    				case 2:

                        message.channel.send("\`\`\`Room 2 - R2\`\`\`\n\nAfter following the first corridor from the entrance, you find yourself in the south side of a large square room, made completely of black polished stone bricks. A statue of Adora stands in the center.  You can see another path with a circle engraved on the floor on the north wall, and another path with a triangle engraved on the floor on the west wall. A vermilion spider, deep and red as blood, slowly descends from the ceiling, the barest hint of light reflecting from the thread of silk trailing behind its abdomen. Perhaps you even feel its small legs brush against your face. This vermilion spider might be of note.");

    				break;

                    case 3:

                        message.channel.send("\`\`\`Room 2 - R2\`\`\`\n\nAfter following the first corridor from the entrance, you find yourself in the south side of a large square room, made completely of black polished stone bricks. A statue of Adora stands in the center. You can see another path with a circle engraved on the floor on the north wall, and another path with a triangle engraved on the floor on the west wall. Is there something glimmering at the base of the statue?");

                        switch (godNumber){
                            case 1:
                                addCurrency(message.author.id, 3);

                                message.channel.send(`${giveTarget.tag} found 3 ${coins.coin}.`);
                            break;

                            case 2:
                                addItem(giveTarget, "Adora Bathwater");
                                message.channel.send("This appears to be a love potion.");
                            break;

                            case 3:
                                addItem(giveTarget, "Puffru");
                                message.channel.send("Hopefully this plant will be useful. <:puffru:1142316443334098955>");

                            break;

                            default:
                                message.channel.send("There was nothing there. Perhaps a trick of the light.");
                        }

                        

                    break;

                    case 4:

                        message.channel.send("\`\`\`Corridor 3 of Triangle - C3T\`\`\`\n\nFrom the large square room previous, you decide to follow the path that had a triangle engraved on the floor. Almost immediately you hit a wall in front of you, and must choose whether to go left, or right. A statue of Mido sits in front of the wall, and a bottle with a shimmering liquid sits at her feet.");

                        addItem(giveTarget, "XP Potion");

                    break;

                    case 5:

                        message.channel.send("\`\`\`Corridor 3 of Triangle - C3T\`\`\`\n\nFrom the large square room previous, you decide to follow the path that had a triangle engraved on the floor. Almost immediately you hit a wall in front of you, and must choose whether to go left, or right. You start to feel nauseous from the strange bricks.");

                    break;

                    case 6:

                        message.channel.send("\`\`\`Corridor 4 of Triangle Left - C4TL\`\`\`\n\nAfter choosing to follow the triangle path, you decided to immediately turn to follow the left corridor. Your light reflects against the dark polished brick, and you think you've hit a dead end when you notice the path bends at a right angle once again to the left. You keep walking, only to hit another dead end. On the wall is a carving of a shield.");

                    break;

                    case 7:

                        message.channel.send("\`\`\`Corridor 4 of Triangle Right - C4TR\`\`\`\n\nAfter choosing to follow the triangle path, you decided to immediately turn to follow the corridor to the right. There's soon another choice to make-- go through what looks like a doorway to your right, or continue following the path to the left. A crystal bird glimmers on the path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    case 8:

                        message.channel.send("\`\`\`Corridor 4 of Triangle Right - C4TR\`\`\`\n\nAfter choosing to follow the triangle path, you decided to immediately turn to follow the corridor to the right. There's soon another choice to make-- go through what looks like a doorway to your right, or continue following the path to the left. A crystal bird glimmers on the ground.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    case 9:

                        message.channel.send("\`\`\`Room 5 of Triangle Right - R5TR\`\`\`\n\nAfter choosing to follow the triangle path, you decided to immediately turn to follow the corridor to the right, then to go right again to enter what looks to be a triangular shaped room. There are no other exits. In the center of the room sits a statue of Fakian, and something glimmers in his extended hand. What is that?");

                        switch(godNumer){
                            case 1:
                                message.channel.send("Perhaps that was a trick of the light, as you find nothing.");

                            break;

                            case 2:
                                addItem(giveTarget, "Estreyr");
                                message.channel.send("Hopefully this plant will be useful. <:estreyr:1142316438087024670>");

                            break;

                            case 3:

                            message.channel.send("It was a spider that shone like a gem, and it bites you before skittering off. Roll VIT, if one success was rolled, you shrug off the venom. If 0 successes were rolled, pain sears from the bite, and it will be difficult to use that hand for the next few days without treatment.");

                            break;

                            case 4:
                                addItem(giveTarget, "Gem of Imagination");
                                message.channel.send("It appears to be an odd purple gem.");

                            break;

                            case 5:
                                message.channel.send("A rustworm was curled around his hand. More join it from crevices and shadows. Begin combat.(@wisp for 10 xp of a character of your choice. If you wish to rp fighting, their stats are: VIT: 6, PHYS: 4. It is recommended to run 4 at minimum and 9 at maximum.)");
                                message.channel.send('https://i.imgur.com/myhfOOv.png');

                            break;

                            case 6:
                                addItem(giveTarget, "Potion of Fickle Fortune");
                                message.channel.send("It appears to be a potion of sorts <:ficklefortune:1116872804252524645>.");
                            break;

                            default:
                                message.channel.send("Perhaps that was a trick of the light, as you find nothing.");
                        }

                    break;

                    case 10:

                        message.channel.send("\`\`\`Corridor 5 of Triangle Right- C5TR\`\`\`\n\nAfter choosing to follow the triangle path, you decided to immediately turn to follow the corridor to the right, then to take a sharp left. The path seems to immediately turn left again until you're faced with another choice-- continue going forward, or take the corridor to the right. A crystal bird glimmers on the path.");
                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    case 11:

                        message.channel.send("\`\`\`Corridor 6 of Triangle Forward - C6TF\`\`\`\n\nYou've been following the triangle path for a while now, and have had to choose between two forks. In the last fork in the path, you opted to continue to go forward instead of right, and the forward path soon makes a sharp bend to the left. Following a while longer, you find yourself at a dead end. ||At the dead end sits a basin of blood, and inside it is a severed right leg. Blood from a hole in the ceiling drips into the basin with a plop, plop sound, though for some reason, the basin never seems to overflow.|| A statue of Saiphina watches the gory scene, and a crystal bird rests at her feet.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    //can possibly add something in 12 and 13
                    case 12:

                        message.channel.send("\`\`\`Corridor 6 of Triangle Right - C6TR\`\`\`\n\nYou've been following the triangle path for a while now, and have had to choose between two forks. In the last fork in the path, you opted to go right rather than continuing forward, and the path soon makes a sharp bend to the left, then another to the right. Following the path for what seems like a long while, you eventually find yourself at a dead end. A crystal bird was found on the path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    case 13:

                        message.channel.send("\`\`\`Corridor 6 of Triangle Right - C6TR\`\`\`\n\nYou've been following the triangle path for a while now, and have had to choose between two forks. In the last fork in the path, you opted to go right rather than continuing forward, and the path soon makes a sharp bend to the left, then another to the right. Following the path for what seems like a long while, you find yourself at a dead end. A crystal bird was found on the path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    //things can be added in 14 and 15
                    case 14:

                        message.channel.send("\`\`\`Corridor 3 of Circle - C3C\`\`\`\n\nFrom the large square room previous, you decide to follow the path that had a circle engraved on the floor. The path is long and straight, until you hit a wall, and a doorway that appears to be the entryway to a large room to your left. A crystal bird is found on the path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    case 15:

                        message.channel.send("\`\`\`Corridor 3 of Circle - C3C\`\`\`\n\nFrom the large square room previous, you decide to follow the path that had a circle engraved on the floor. The path is long and straight, until you hit a wall, and a doorway that appears to be the entryway to a large room to your left. A crystal bird is found on the path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    //no dupe 2
                    case 16:

                        message.channel.send("\`\`\`Room 4 of Circle - R4C\`\`\`\n\nYou decided to follow the path that had a circle engraved on the floor, and soon find yourself entering a large circular room room from the northeast side. On the southwest side, there's yet another path that leads to somewhere. Large pillars which once decorated this room are now reduced to rubble. Cracks mar the walls and the floor, and though the dried blood is difficult to see against the dark stone, it's crusted everywhere. A skeleton is in the center room, its rich mage's robes decayed with age. A large shard of crystal pierces straight through the skeleton's ribcage, and the skeleton's mouth hangs open in surprise. You also find a gray stone on the ground, marked with a symbol as well as an L9. Perhaps this Symbol Stone L9 will be of use.");

                    break;

                    case 17:

                        message.channel.send("\`\`\`Corridor 5 of Circle - C5C\`\`\`\n\nYou chose to follow the circle path and after having found a large circular room along the way, you are now leaving the room from the path on the southwest side. The path is short and wide, and you can see it opens up to another large room at the end of it. On the ground is a strange stone marked with a symbol, as well as a G3. Perhaps this Symbol Stone G3 will be of use. A crystal bird glimmers on the ground as well.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    //can add stuff
                    case 18:

                        message.channel.send("\`\`\`Corridor 5 of Circle - C5C\`\`\`\n\nYou chose to follow the circle path and after having found a large circular room along the way, you are now leaving the room from the path on the southwest side. The path is short and wide, and you can see it opens up to another large room at the end of it. A crystal bird is found along the way.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    //no dupe 3
                    case 19:

                        message.channel.send("\`\`\`Circle Room of Square Diamond and Trapezoid - CRSDT\`\`\`\n\nAfter following the circle path, and all of its twist and turns, you soon find yourself in a huge elliptical room, so large your voice echoes whenever you speak. The ceiling is white, and it brightens the entire room with a sort of false daylight. It contains a sandpit and training dummies. A large hearth. A long table with benches on either end near a kitchen, and an overgrown garden. You entered from the west side, but you can see there are three more exits from this room-- one on each cardinal direction. The path to the north has a square engraved in the floor, the path to the west has a diamond engraved on the floor, and the path th the south has a trapezoid engraved on the floor. On the ground is a gray stone with an odd symbol carved on it, as well as an T1. Perhaps this Symbol Stone T1 will be of use.");

                        


                    break;

                    case 20:

                        message.channel.send("\`\`\`Corridor 7 of Trapezoid - C7T\`\`\`\n\nAfter finding the huge elliptical room with a path in every cardinal direction, you opted to take the path marked with a trapezoid on the south wall. After following it south for a little while, you are soon faced with a choice-- continue to go forward to the south, where there's a path marked with a parallelogram, or make a sharp turn to the right where the path is marked with another trapezoid. Along the corridor sits a statue of Bao-Rha. Something glimmers near the base. A spider that's blue and glimmering like tanzanite sits on its web. You feel the sticky threads against your forehead. Perhaps this Tanzanite Spider is something of note.");

                        switch(godNumber){
                            case 1:
                                addCurrency(message.author.id, 2);

                                 message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                            break;

                            case 2:
                                addItem(giveTarget, "Myltyl");
                                message.channel.send("This plant looks like something useful. <:myltyl:1142316442163888169>");
                                
                            break;

                            case 3:
                                const sword = await ShopItems.findOne({ name: 'Fine Sword' });
                                const hasSword = await UserItems.findOne({ user_id: giveTarget.id, item_id: sword.item_id});

                                if (hasSword){
                                    await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1116988642532020254/blade_of_the_lion.png")
                                    message.channel.send("The statue of Bao Rha suddenly glows with a vibrant light and in turn the sword you have with you glows in response. It changes shape with his blessing. You've received the blade of the lion.")

                                    takeItem(giveTarget, "Fine Sword");
                                    addItem(giveTarget, "Blade of the Lion");
                                }

                                else {
                                    message.channel.send("The statue of Bao Rah suddenly seems to glow for a moment, before the light fizzles out into nothing. \"You have no blade I find worthy,\" a deep voice rumbles in your head, before it goes completely silent.")
                                }

                            break;

                            case 4:
                                addItem(giveTarget, "XP Potion");
                                message.channel.send("How lucky! You appear to have found a shimmering potion.");

                            break;

                            default:
                                message.channel.send("Whatever was glimmering appears to have actually been nothing at all.")
                        }

                    break;

                    case 21:

                        message.channel.send("\`\`\`Corridor 7 of Trapezoid - C7T\`\`\`\n\nAfter finding the huge circular room with a path in every cardinal direction, you opted to take the path marked with a trapezoid on the south wall. After following it south for a little while, you are soon faced with a choice-- continue to go forward to the south, where there's a path marked with a parallelogram, or make a sharp turn to the right where the path is marked with another trapezoid. Along the corridor sits a statue of Bao-Rha. Something glimmers near the base. A spider that's mauve like the sea at dusk sits on its web. You feel the sticky threads against your forehead. Perhaps this Mauve Spider is something of note.");

                        switch(godNumber){
                            case 1:
                                addCurrency(message.author.id, 2);

                                 message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                            break;

                            case 2:
                                addItem(giveTarget, "Myltyl");
                                message.channel.send("This plant you found looks like something useful. <:myltyl:1142316442163888169>");
                                
                            break;

                            case 3:
                                addItem(giveTarget, "XP Potion");
                                message.channel.send("How lucky! You appear to have found a shimmering potion.");

                            break;

                            case 4:
                                addItem(giveTarget, "XP Potion");
                                message.channel.send("How lucky! You appear to have found a shimmering potion.");

                            break;

                            case 5:
                                addItem(giveTarget, "Grevo");
                                message.channel.send("This plant appears to be useful.");

                            break;

                            default:
                                message.channel.send("Whatever was glimmering appears to have actually been nothing at all.")
                        }
                        

                    break;

                    //no dupe, can add stuff
                    case 22:

                        message.channel.send("\`\`\`Corridor 8 of Trapezoid - C8T\`\`\`\n\nFollowing the trapezoid path, you opted to continue to follow the trapezoid path by taking a right when the opportunity presented itself. The path goes straight for a while, until ending. To the right yet again, however, there looks to be an entrance to another room. A crystal bird is found along the way.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                  
                    case 23:

                        message.channel.send("\`\`\`Room 9 of Trapezoid - R9T\`\`\`\n\nFollowing the trapezoid path to its end, you find yourself entering the south side of a large trapezoidal shaped room. It appears there are no other exits. ||In the center is a basin of blood, and inside it rests a humanoid right arm severed from its body. The end that should be attached to the torso is ragged, and blood from a hole in the ceiling drips onto it, the sound hollow and monotonous.|| The ground here seems to be of a pale marble, and old bloodstains splattered on it have turned brown with age. A small gray stone sits on the ground with a strange symbol carved into it along with a KP. Perhaps this symbol stone KP will be of use.");

                    break;

                    
                    case 24:

                        message.channel.send("\`\`\`Corridor 9 of Parallelogram - C9P\`\`\`\n\nChoosing to continue to go south from one of the trapezoid paths, you end up in a corridor marked with a parallelogram that can only go left or right.");

                    break;

                    //can add stuff
                    case 25:

                        message.channel.send("\`\`\`Corridor 10 of Parallelogram Left - C10PL\`\`\`\n\nDeciding to go left in the corridor marked with a parallelogram, there is soon a sharp turn to the left. Not much of the path remains after this, as it leads into what appears to be another room. A crystal bird is found on the way.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    //can add stuff
                    case 26:

                        message.channel.send("\`\`\`Corridor 10 of Parallelogram Left - C10PL\`\`\`\n\nDeciding to go left in the corridor marked with a parallelogram, there is soon a sharp turn to the left. Not much of the path remains after this, as it leads into what appears to be another room. A crystal bird is found on the way.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    
                    case 27:

                        message.channel.send("\`\`\`Room 11 of Parallelogram - R11P\`\`\`\n\nThis small room has a slanted floor as well as ceiling. It's difficult to keep your footing on the polished black stone. ||At the center sits a basin filled with blood, and inside it is someone's severed left arm. Blood drips into the basement from a hole in the ceiling, and the sound of the droplets echoes against the walls.|| A statue of the tiger Nahite watches over it, a crystal bird in its jaws, and gold coins are scattered around its feet. (OOC: Give yourself 5000 therins)");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                    break;

                    case 28:

                        message.channel.send("\`\`\`Corridor 10 of Parallelogram Right - C10PR\`\`\`\n\nDeciding to go right on the path marked with a parallelogram leads to a sharp turn to another right, and then a dead end. There's an odd gray stone on the ground, marked with a strange symbol as well as a P0. Perhaps this Symbol Stone P0 will be of use. There are two crystal birds on the ground as well.");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                    break;

                    case 29:

                        message.channel.send("\`\`\`Corridor 10 of Parallelogram Right - C10PR\`\`\`\n\nDeciding to go right on the path marked with a parallelogram leads to a sharp turn to another right, and then a dead end. One crystal bird glimmers on the ground.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    //can add stuff here
                    case 30:

                        message.channel.send("\`\`\`Corridor 7 of Diamond - C7D\`\`\`\n\nLeaving behind the large circular room, you take the path engraved with a diamond. It immediately turns right, then right again, then left before an entrance to the next room is revealed. A crystal bird is found in the corridor.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);


                    break;

                    case 31:

                        message.channel.send("\`\`\`Room 8 of Diamond - R8D\`\`\`\n\nYou arrive in a large diamond shaped room from an entrance to the northeast. You see an exit to the southwest. The ceiling above glimmers like the night sky, and mechanical stars, a mechanical sun, and a mechanical moon shift around moved by some unseen force. Sometimes the sky will shift to a more dawnlike color, or auroras will shimmer across its surface. A statue of Luwaria stands in the center along with a statue of Solq. A potion bottle is on the ground between them. A skeleton sits against the wall staring up at the scene, a brown leather bag clutched close. Its arm is broken, and a gray stone marked with a symbol as well as a B4 rests in its fingertips. Perhaps this Symbol Stone B4 will be of use.");

                        addItem(giveTarget, "Syvex");
                                message.channel.send("This plant you found looks like something useful. <:syvex:1142316446156869724>");
                                

                    break;

                    case 32:

                        message.channel.send("\`\`\`Corridor 9 of Diamond - C9D\`\`\`\n\nLeaving from the southwest exit of the diamond shaped room leads you down a corridor that goes south... into a dead end. ||At the very end sits a basin full of blood, however, in inside it lies somebody's left leg. Blood drips from the ceiling onto the leg with a steady plopping sound, but for some reason the basin doesn't overflow.|| A statue of Alorel watches grimly, a bottle of shimmering liquid near her feet, and a spider that is the deep green of a viridian forest slowly descends from the ceiling. Perhaps this viridian spider is of note.");

                        addItem(giveTarget, "XP Potion");

                    break;

                    case 33:

                        message.channel.send("\`\`\`Corridor 7 of Square - C7S\`\`\`\n\nThe path with the square engraving that leads out of the large circular room is long. It gets difficult, doing the long trek northward in the hallway of polished black bricks, and then the path forks, showing a path to the left engraved with a spiral, or a path that sharply curves to the south marked with a square. Continuing to follow the winding square path leads south for another long journey, before curving again in another harrowing U. It goes north, and north again, then south again before finally leading to a path that forks, either going further to the south, or going to the east. Something on the ground catches your attention. It looks to be a gray stone with an odd symbol carved on it, as well as an N7. Perhaps this Symbol Stone N7 will be of use. A crystal bird was found on the way.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`)

                    break;

                    case 34:

                        message.channel.send("\`\`\`Corridor 8 of Spiral - C8SP\`\`\`\n\nThe path marked with a spiral is a long spiral itself. It curves, and curves and curves, the space growing tighter, and more claustrophobic until the end is reached. At the end sits a tall pillar of crystal, with some sort of staff within. On the ground sits a small gray stone with an odd symbol carved into it, as well as U0. Perhaps this Symbol Stone U0 will be of use.");

                    break;

                    case 35:

                        message.channel.send("\`\`\`Corridor 8 of Square Left - C8SL\`\`\`\n\nThankfully this corridor isn't very long. Entrances to two similar rooms can be seen side by side. A crystal bird lies on the ground, but as you bend down to pick it up, you notice a spider as yellow as saffron descending from the ceiling. Perhaps this saffron spider is something of note.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`)

                    break;

                    case 36:

                        message.channel.send("\`\`\`Corridor 8 of Square Forward - C8SF\`\`\`\n\nFollowing the square path forward, you soon realizes it leads to a dead end. On the ground something catches your attention. It looks to be a gray stone with an odd symbol carved on it, as well as an MM. Perhaps this Symbol Stone MM will be of use.");

                    break;

                    case 37:

                        message.channel.send("\`\`\`Room 9 of Square Left - R9SL\`\`\`\n\nThis room is small, and square, and an exit lies at the south side that leads to a long corridor. Ancient remains of a campfire sit at the center, and two decayed bedrolls are on the ground beside it. A stack of books sits next to one bedroll, and some unused lanterns sit next to the other. A couple of crystal birds sit on the ground.");

                        addCurrency(message.author.id, 2);

                        message.channel.send(`${giveTarget.tag} found 2 ${coins.coin}.`);

                    break;

                    case 38:

                        message.channel.send("\`\`\`Room 9 of Square Right - R9SR\`\`\`\n\nAt the right side of this square room sits a large entrance into the pale caves of Sindariel, while to the south lies an exit to a long corridor. In the center stands a statue of Torn. He seems to be pointing down to a crystal bird. When the crystal bird is touched, a voice whispers in your mind: _Draw the symbol of the wasp on the left leg._ The symbol appears in your mind for a moment before fading.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

                    case 39:

                        message.channel.send("\`\`\`Room 9 of Square Left - R9SL\`\`\`\n\nThis room is small, and square, and an exit lies at the south side that leads to a long corridor. Ancient remains of a campfire sit at the center, and two decayed bedrolls are on the ground beside it. A stack of books sits next to one bedroll, and some unused lanterns sit next to the other. On the ground lies a gray stone marked with a symbol as well as a J7. Perhaps this Symbol Stone J7 will be of use.");

                    break;

                    //door to caves here
                    case 40:

                        message.channel.send("\`\`\`Room 9 of Square Right - R9SR\`\`\`\n\nAt the right side of this square room sits a large entrance into the pale caves of Sindariel, while to the south lies an exit to a long corridor. In the center stands a statue of Torn. At the right side of this room sits a large entrance into the pale caves of Sindariel. In the center stands a statue of Torn. He seems to be pointing down to a crystal bird. A spider that is the varying orange hues of sunset slowly descends from the ceiling, perhaps its thin legs brush against your cheek. Is this Sunset Spider something to note?");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);

                    break;

    				default: 

    					message.channel.send("Streiya's Mausoleum is labyrinthine, carved by the hand of people long past. The smooth black bricks are sometimes decorated with ruins, letters, or stars. It's easy to get lost here, and after a while exploring you find yourself back at the entrance after having found nothing but a crystal bird on your path.");

                        addCurrency(message.author.id, 1);

                        message.channel.send(`${giveTarget.tag} found 1 ${coins.coin}.`);
    			}//end switch
               

    		}//end elif 


    		else {

    			message.channel.send("That is not a valid area to explore.");
    		}



	},
};
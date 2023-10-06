//this command references stuff from the Currency section as well as from the Custom section. 

const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');
const UserItems = require('./models/UserItemsSchema');
const ShopItems = require('./models/ShopItemsSchema');
const UserItems1 = require('./models/CustomUserItemsSchema');
const ShopItems1 = require('./models/CustomItemsSchema');


async function addItem(target, itemName) { //function that adds items to the user inventory. This is for 'Currency' section.
    let user;
    const item = await ShopItems.findOne({ name: itemName });

     try{
         const user = await UserItems.findOneAndUpdate(
           {
             user_id: target.id,
             //user_id: username, //id version
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
             //user_id: username, //id version
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


async function takeItem(target, itemName, number) { //function that removes an item from the user inventory. This is for 'Currency' section.
    const item = await ShopItems.findOne({ name: itemName });

     try{
         const user = await UserItems.findOneAndUpdate(
           {
             user_id: target.id,
             item_id: item.item_id,
           }, 
           {
             $inc: {

             amount: number * -1,

           },
         }
         );

         if (user.amount <= number) {
           const delete_user = await UserItems.deleteOne({ user_id: target.id, item_id: item.item_id });
         }

        } catch (err) {
         console.log(err);
       }

}//end function

async function addItem2(target, itemName) { //add an item to user bag. This is for 'Custom' section.
    let user;
    const item = await ShopItems1.findOne({ name: itemName });

     try{
         const user = await UserItems1.findOneAndUpdate(
           {
             user_id: target.id,
             //user_id: username, //id version
             item_id: item.item_id,
           }, 
           {
             $inc: {

             amount: 1,

           },
         }
         );


         if(!user){
           let profile = await UserItems1.create({
             user_id: target.id,
             //user_id: username, //id version
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


async function takeItem2(target, itemName, number) { //Take an item from user bag. This is for 'Custom' section.
    let user;
    const item = await ShopItems1.findOne({ name: itemName });

     try{
         const user = await UserItems1.findOneAndUpdate(
           {
             user_id: target.id,
             item_id: item.item_id,
           }, 
           {
             $inc: {

             amount: number * -1,

           },
         }
         );

         if (user.amount <= number) {
           const delete_user = await UserItems1.deleteOne({ user_id: target.id, item_id: item.item_id });
         }

        } catch (err) {
         console.log(err);
       }

}//end function


function ingredientCheck(craftableName) { //This is for custom user craftable items. They are allowed to set up to 5 ingredients for their item to be crafted. It also returns how many ingredients are used.
    let ingredientAmount = 0;

    if (craftableName) {

        
        if (craftableName.ingredient5 !== "none") {
            ingredientAmount = 5;
        }

        else if (craftableName.ingredient4 !== "none") {
            ingredientAmount = 4;
        }

        else if (craftableName.ingredient3 !== "none") {
            ingredientAmount = 3;
        }

        else if (craftableName.ingredient2 !== "none") {
            ingredientAmount = 2;
        }

        else if (craftableName.ingredient1 !== "none") {
            ingredientAmount = 1;

        }


    }

    return ingredientAmount;

}



module.exports = {
	name: 'craft',
	description: 'Crafts an object out of other user held objects.',
	async execute(message, args) {

			const commandArgs = args.join(' ');
    		const command = commandArgs.toLowerCase();

			//vars for different types of items.
            let item;
            let item1;
            let item2;
            let item3;
            let item4;

			//vars for checking if the item exists in the user inventory.
            let hasitem;
            let hasitem1;
            let hasitem2;
            let hasitem3;
            let hasitem4;


			//a simple array that shows what's craftable.
            let recipehelp = ['Fine Sword', 'Fine Dagger', 'Fine Spear', 'Fine Axe', 'Fine Wand', 'Burnished Handbell', 'Old Rebec', 'Fine Staff', 'Barbed Whip', 'Chakram', 'Fine Bow', 'Crystal Focus', 'Tome of Flames', 'Fine Halberd', 'Ice Rapier', 'Kusarigama', 'Scythe'];
            
            

    		

		switch (command){ //switch to help separate the functions of the command. 

        case 'recipes': //This first command shows what items are actually craftable. <craft recipes> or <craft help>
        case 'help':

          recipehelp.sort();

          var pages = []; //simple pagination so that if there are a lot of recipes, they don't take up the entire page.
          let page = 1;
          let pageOffset = 0;
  
          const count = recipehelp.length/20;
  
          
          for(i = 0; i < count; i ++) {
  
              const charString = recipehelp.slice(pageOffset, pageOffset+20);
  
              pages.push(charString.join('\r\n'));
              pageOffset += 20;

          }

          let embedList = new Discord.EmbedBuilder() //Embeds are something specific to discordJS. It just looks a little nicer.
            .setColor('#000000')
            .setTitle('Craftable Weapons')
            .setFooter({text:`Page ${page.toString()} of ${pages.length.toString()}`})
            .setDescription(pages[page-1].toString())

          return message.channel.send({ embeds: [embedList] }).then(msg => {

            msg.react('◀️').then(r => {
                msg.react('▶️')

                // Filters
                const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id; //if emoji is reacted with, go back
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id; //if emoji is reacted with, go forward

                const backwards = msg.createReactionCollector({filter: backwardsFilter,  time: 60000}); //time out so it isn't waiting forever.
					
				const forwards = msg.createReactionCollector({filter: forwardsFilter, time: 60000});

                backwards.on('collect', r => { //if reaction was collected, then change the 'page'
                    if (page === 1) return;
                    page--;
                    embedList.setDescription(pages[page-1].toString());
                    embedList.setFooter({text:`Page ${page.toString()} of ${pages.length.toString()}`});
                    msg.edit({embeds: [embedList]})
                })

                forwards.on('collect', r => {
                    if (page === pages.length) return;
                    page++;
                    embedList.setDescription(pages[page-1].toString());
                    embedList.setFooter({text:`Page ${page.toString()} of ${pages.length.toString()}`});
                    msg.edit({embeds: [embedList]})

                })

            })
        }) //end send pagination embed */
  

        break;

				case 'fine sword': //this is the first craftable item. <craft fine sword>

                    item = await ShopItems.findOne({ name: 'Rusty Sword' }); //check if this item exists, and get the ID.
                    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id}); //check if the user has this specific item.

					if (!hasitem|| hasitem.amount < 5) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`); //check if the user has enough of the item, and end the command if not.

                    else {
                        takeItem(message.author, "Rusty Sword", 5 ); //take away the needed ingredients.
                        addItem(message.author, "Fine Sword"); //add the newly made item to the user inventory.

                        message.channel.send(`${message.author} has successfully created a fine sword.`) //confirmation message.
                    }

				break;

                case 'barbed whip':

                    item = await ShopItems.findOne({ name: 'Rusty Sword' });
                    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

                    item1 = await ShopItems.findOne({ name: 'Satchels Satchel' }); //this one needs two separate items to craft it. It uses a different variable to check the second item.
                    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id}); 

					if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 3) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                    else {
                        takeItem(message.author, "Rusty Sword", 3 );
                        takeItem(message.author, "Satchels Satchel", 3 );
                        addItem(message.author, "Barbed Whip");

                        message.channel.send(`${message.author} has successfully created a barbed whip.`)
                    }

				break;

        case 'fine dagger':

          item = await ShopItems.findOne({ name: 'Rusty Sword' });
          hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


          if (!hasitem || hasitem.amount < 4) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

          else {
              takeItem(message.author, "Rusty Sword", 4 );
              addItem(message.author, "Fine Dagger");

              message.channel.send(`${message.author} has successfully created a fine dagger.`)
          }

          break;

          case 'fine spear':

                    item = await ShopItems.findOne({ name: 'Rusty Sword' });
                    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

                    item1 = await ShopItems.findOne({ name: 'Old Wand' });
                    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});


                    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 2) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                    else {
                        takeItem(message.author, "Rusty Sword", 3 );
                        takeItem(message.author, "Old Wand", 2 );
                        addItem(message.author, "Fine Spear");

                        message.channel.send(`${message.author} has successfully created a fine spear.`)
                    }

          break;

          case 'fine axe':

                    item = await ShopItems.findOne({ name: 'Rusty Sword' });
                    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

                    item1 = await ShopItems.findOne({ name: 'Old Wand' });
                    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});


                    if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                    else {
                        takeItem(message.author, "Rusty Sword", 4 );
                        takeItem(message.author, "Old Wand", 1 );
                        addItem(message.author, "Fine Axe");

                        message.channel.send(`${message.author} has successfully created a fine axe.`)
                    }

          break;

          case 'fine wand':

                    item = await ShopItems.findOne({ name: 'Old Wand' });
                    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

                    item1 = await ShopItems.findOne({ name: 'Adora Bathwater' });
                    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});

                    item2 = await ShopItems.findOne({ name: 'Stone 3' });
                    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});


                    if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                    else {
                        takeItem(message.author, "Old Wand", 4 );
                        takeItem(message.author, "Adora Bathwater", 1 );
                        takeItem(message.author, "Stone 3", 1 );
                        addItem(message.author, "Fine Wand");

                        message.channel.send(`${message.author} has successfully created a fine wand.`)
                    }

          break;

          case 'burnished handbell':

                    item = await ShopItems.findOne({ name: 'Rusty Sword' });
                    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

                    item1 = await ShopItems.findOne({ name: 'Old Wand' });
                    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});


                    if (!hasitem || hasitem.amount < 1 || !hasitem1 || hasitem1.amount < 3) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                    else {
                        takeItem(message.author, "Rusty Sword", 1 );
                        takeItem(message.author, "Old Wand", 3 );
                        addItem(message.author, "Burnished Handbell");

                        message.channel.send(`${message.author} has successfully created a burnished handbell.`)
                    }

          break;

          case 'old rebec':

            item = await ShopItems.findOne({ name: 'Miku Guqin' });
            hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

            item1 = await ShopItems.findOne({ name: 'Healing Potion' });
            hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});


            if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 2) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

            else {
                takeItem(message.author, "Miku Guqin", 4 );
                takeItem(message.author, "Healing Potion", 2 );
                addItem(message.author, "Old Rebec");

                message.channel.send(`${message.author} has successfully created an old rebec.`)
            }

  break;

  case 'fine staff':

            item = await ShopItems.findOne({ name: 'Old Wand' });
            hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

            item1 = await ShopItems.findOne({ name: 'Gem of Knowledge' });
            hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item1.item_id});


            if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

            else {
                takeItem(message.author, "Old Wand", 4 );
                takeItem(message.author, "Gem of Knowledge", 1 );
                addItem(message.author, "Fine Staff");

                message.channel.send(`${message.author} has successfully created a fine staff.`)
            }

  break;

  case 'chakram':

        item = await ShopItems.findOne({ name: 'Rusty Sword' });
        hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

        item1 = await ShopItems.findOne({ name: 'Earring of Disguise' });
        hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


        if (!hasitem || hasitem.amount < 5 || !hasitem1 || hasitem1.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

        else {
            takeItem(message.author, "Rusty Sword", 5 );
            takeItem(message.author, "Earring of Disguise", 1 );
            addItem(message.author, "Chakram");

            message.channel.send(`${message.author} has successfully created a chakram.`)
        }

  break;

  case 'fine bow':

    item = await ShopItems.findOne({ name: 'Old Wand' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 3) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Old Wand", 4 );
        takeItem(message.author, "Healing Potion", 3 );
        addItem(message.author, "Fine Bow");

        message.channel.send(`${message.author} has successfully created a fine bow.`)
    }

break;

case 'crystal focus':

    item = await ShopItems.findOne({ name: 'Stone 3' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Gem of Knowledge' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 2 || !hasitem1 || hasitem1.amount < 2) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Stone 3", 2 );
        takeItem(message.author, "Gem of Knowledge", 2 );
        addItem(message.author, "Crystal Focus");

        message.channel.send(`${message.author} has successfully created a crystal focus.`)
    }

break;

case 'tome of flames':

    item = await ShopItems.findOne({ name: 'Musical Score' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Stone 2' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 2 || !hasitem1 || hasitem1.amount < 2) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Musical Score", 2 );
        takeItem(message.author, "Stone 2", 2 );
        addItem(message.author, "Tome of Flames");

        message.channel.send(`${message.author} has successfully created a tome of flames.`)
    }

break;

case 'fine halberd':

    item = await ShopItems.findOne({ name: 'Rusty Sword' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Old Wand' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Stone 1' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 2 || !hasitem1 || hasitem1.amount < 2 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Rusty Sword", 2 );
        takeItem(message.author, "Old Wand", 2 );
        takeItem(message.author, "Stone 1", 1 );
        addItem(message.author, "Fine Halberd");

        message.channel.send(`${message.author} has successfully created a fine halberd.`)
    }

break;

case 'ice rapier':

    item = await ShopItems.findOne({ name: 'Rusty Sword' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Stone 4' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 2) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Rusty Sword", 4 );
        takeItem(message.author, "Stone 4", 2 );
        addItem(message.author, "Ice Rapier");

        message.channel.send(`${message.author} has successfully created an ice rapier.`)
    }

break;

case 'kusarigama':

    item = await ShopItems.findOne({ name: 'Rusty Sword' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'XP Potion' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 4 || !hasitem1 || hasitem1.amount < 2) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Rusty Sword", 4 );
        takeItem(message.author, "XP Potion", 2 );
        addItem(message.author, "Kusarigama");

        message.channel.send(`${message.author} has successfully created a kusarigama.`)
    }

break;

case 'scythe':

    item = await ShopItems.findOne({ name: 'Rusty Sword' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Gem of Knowledge' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Rusty Sword", 3 );
        takeItem(message.author, "Gem of Knowledge", 1 );
        addItem(message.author, "Scythe");

        message.channel.send(`${message.author} has successfully created a scythe.`)
    }

break;

case 'clockwork trinket':

    item = await ShopItems.findOne({name: 'Musical Score'})
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    if (!hasitem || hasitem.amount < 1 || !hasitem1 || hasitem1.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Musical Score", 1 );
        takeItem(message.author, "Healing Potion", 1 );
        addItem(message.author, "Clockwork Trinket");

        message.channel.send(`${message.author} has successfully created a Clockwork Trinket.`)
    }

break;

case 'lore potion':

    item = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Grevo' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Syvex' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Healing Potion", 3 );
        takeItem(message.author, "Grevo", 1 );
        takeItem(message.author, "Syvex", 1 );
        addItem(message.author, "Lore Potion");

        message.channel.send(`${message.author} has successfully created a lore potion.`)
    }

break;

case 'academics potion':

    item = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Estreyr' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Syvex' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Healing Potion", 3 );
        takeItem(message.author, "Estreyr", 1 );
        takeItem(message.author, "Syvex", 1 );
        addItem(message.author, "Academics Potion");

        message.channel.send(`${message.author} has successfully created an academics potion.`)
    }

break;

case 'sorcery potion':

    item = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Estreyr' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Grevo' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Healing Potion", 3 );
        takeItem(message.author, "Estreyr", 1 );
        takeItem(message.author, "Grevo", 1 );
        addItem(message.author, "Sorcery Potion");

        message.channel.send(`${message.author} has successfully created a sorcery potion.`)
    }

break;

case 'vitality potion':

    item = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Myltyl' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Puffru' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Healing Potion", 3 );
        takeItem(message.author, "Myltyl", 1 );
        takeItem(message.author, "Puffru", 1 );
        addItem(message.author, "Vitality Potion");

        message.channel.send(`${message.author} has successfully created a vitality potion.`)
    }

break;

case 'physical potion':

    item = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Myltyl' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Frakus' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Healing Potion", 3 );
        takeItem(message.author, "Myltyl", 1 );
        takeItem(message.author, "Frakus", 1 );
        addItem(message.author, "Physical Potion");

        message.channel.send(`${message.author} has successfully created a physical potion.`)
    }

break;

case 'blessings potion':

    item = await ShopItems.findOne({ name: 'Healing Potion' });
    hasitem = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item1 = await ShopItems.findOne({ name: 'Estreyr' });
    hasitem1 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Puffru' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});

    item2 = await ShopItems.findOne({ name: 'Bottle of Something' });
    hasitem2 = await UserItems.findOne({ user_id: message.author.id, item_id: item.item_id});


    if (!hasitem || hasitem.amount < 3 || !hasitem1 || hasitem1.amount < 1 || !hasitem2 || hasitem2.amount < 1 || hasitem3 || hasitem3.amount < 1) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

    else {
        takeItem(message.author, "Healing Potion", 3 );
        takeItem(message.author, "Estreyr", 1 );
        takeItem(message.author, "Puffru", 1 );
        takeItem(message.author, "Bottle of Something", 1 );
        addItem(message.author, "Blessings Potion");

        message.channel.send(`${message.author} has successfully created a blessings potion.`)
    }

break;




				default: //in the default of the switch, user added custom items can be crafted. This takes more advantage of a database.

                    const craftableItem = await ShopItems1.findOne({ name: commandArgs }).collation( { locale: 'en', strength: 2 } ); //check if the item that the user wrote exists at all.

                    if(craftableItem) {
                        let isCraftable = ingredientCheck(craftableItem); //check if they have the ingredients, and how much.

                        switch(isCraftable){ //if no ingredients, then it's not craftable.
                            case 0:
                                message.channel.send("It seems that that item is not craftable.");
                            break;

                            case 1: //1 type of ingredient.
                                item = await ShopItems1.findOne({ name: craftableItem.ingredient1});
                                hasitem = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                if (!hasitem || hasitem.amount < craftableItem.ingredient1amount) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                                else {
                                    takeItem2(message.author, craftableItem.ingredient1, craftableItem.ingredient1amount);
                                    addItem2(message.author, craftableItem.name);

                                    message.channel.send(`${message.author} has successfully created a ${craftableItem.name}.`)
                                }

                            break;

                            case 2: //2 types of ingredients
                                item = await ShopItems1.findOne({ name: craftableItem.ingredient1});
                                hasitem = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item1 = await ShopItems1.findOne({ name: craftableItem.ingredient2});
                                hasitem1 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                if (!hasitem || hasitem.amount < craftableItem.ingredient1amount || !hasitem1 || hasitem1.amount < craftableItem.ingredient2amount) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                                else {
                                    takeItem2(message.author, craftableItem.ingredient1, craftableItem.ingredient1amount);
                                    takeItem2(message.author, craftableItem.ingredient2, craftableItem.ingredient2amount)
                                    addItem2(message.author, craftableItem.name);

                                    message.channel.send(`${message.author} has successfully created a ${craftableItem.name}.`)
                                }

                            break;

                            case 3: //3 types of ingredients.
                                item = await ShopItems1.findOne({ name: craftableItem.ingredient1});
                                hasitem = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item1 = await ShopItems1.findOne({ name: craftableItem.ingredient2});
                                hasitem1 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item2 = await ShopItems1.findOne({ name: craftableItem.ingredient3});
                                hasitem2 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                if (!hasitem || hasitem.amount < craftableItem.ingredient1amount || !hasitem1 || hasitem1.amount < craftableItem.ingredient2amount || !hasitem2 || hasitem2.amount < craftableItem.ingredient3amount) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                                else {
                                    takeItem2(message.author, craftableItem.ingredient1, craftableItem.ingredient1amount);
                                    takeItem2(message.author, craftableItem.ingredient2, craftableItem.ingredient2amount);
                                    takeItem2(message.author, craftableItem.ingredient3, craftableItem.ingredient3amount);
                                    addItem2(message.author, craftableItem.name);

                                    message.channel.send(`${message.author} has successfully created a ${craftableItem.name}.`)
                                }

                            break;

                            case 4: //4 types of ingrediens.
                                item = await ShopItems1.findOne({ name: craftableItem.ingredient1});
                                hasitem = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item1 = await ShopItems1.findOne({ name: craftableItem.ingredient2});
                                hasitem1 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item2 = await ShopItems1.findOne({ name: craftableItem.ingredient3});
                                hasitem2 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item3 = await ShopItems1.findOne({ name: craftableItem.ingredient4});
                                hasitem3 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                if (!hasitem || hasitem.amount < craftableItem.ingredient1amount || !hasitem1 || hasitem1.amount < craftableItem.ingredient2amount || !hasitem2 || hasitem2.amount < craftableItem.ingredient3amount || !hasitem3 || hasitem3.amount < craftableItem.ingredient4amount) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                                else {
                                    takeItem2(message.author, craftableItem.ingredient1, craftableItem.ingredient1amount);
                                    takeItem2(message.author, craftableItem.ingredient2, craftableItem.ingredient2amount);
                                    takeItem2(message.author, craftableItem.ingredient3, craftableItem.ingredient3amount);
                                    takeItem2(message.author, craftableItem.ingredient4, craftableItem.ingredient4amount);
                                    addItem2(message.author, craftableItem.name);

                                    message.channel.send(`${message.author} has successfully created a ${craftableItem.name}.`)
                                }

                            break;

                            case 5: //5 types of ingredients.
                                item = await ShopItems1.findOne({ name: craftableItem.ingredient1});
                                hasitem = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item1 = await ShopItems1.findOne({ name: craftableItem.ingredient2});
                                hasitem1 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item2 = await ShopItems1.findOne({ name: craftableItem.ingredient3});
                                hasitem2 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item3 = await ShopItems1.findOne({ name: craftableItem.ingredient4});
                                hasitem3 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                item4 = await ShopItems1.findOne({ name: craftableItem.ingredient5});
                                hasitem4 = await UserItems1.findOne({ user_id: message.author.id, item_id: item.item_id});

                                if (!hasitem || hasitem.amount < craftableItem.ingredient1amount || !hasitem1 || hasitem1.amount < craftableItem.ingredient2amount || !hasitem2 || hasitem2.amount < craftableItem.ingredient3amount || !hasitem3 || hasitem3.amount < craftableItem.ingredient4amount || !hasitem4 || hasitem4.amount < craftableItem.ingredient5amount) return message.channel.send(`Sorry ${message.author}, you don't have enough to craft this item.`);

                                else {
                                    takeItem2(message.author, craftableItem.ingredient1, craftableItem.ingredient1amount);
                                    takeItem2(message.author, craftableItem.ingredient2, craftableItem.ingredient2amount);
                                    takeItem2(message.author, craftableItem.ingredient3, craftableItem.ingredient3amount);
                                    takeItem2(message.author, craftableItem.ingredient4, craftableItem.ingredient4amount);
                                    takeItem2(message.author, craftableItem.ingredient5, craftableItem.ingredient5amount);
                                    addItem2(message.author, craftableItem.name);

                                    message.channel.send(`${message.author} has successfully created a ${craftableItem.name}.`)
                                }

                            break;

                            default:
                                return message.channel.send("It seems that that item is not craftable.");
    
                        }

                    }

                   
                    

                   else {
                    message.channel.send("It seems that that item is not craftable.");
                   }

					

			}//end switch

	},
};
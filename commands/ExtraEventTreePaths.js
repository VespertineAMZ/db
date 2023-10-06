const Discord = require("discord.js")


module.exports = {
	name: 'tp',
	description: 'A simple text game for users.',
	guildOnly: true,
	async execute(message, args) {

		const commandArgs = args.join(' ');
		const command = commandArgs.toLowerCase();


		let embedT = new Discord.EmbedBuilder()
            .setColor('#134227')
            .setTitle('Trinn')
            .setThumbnail('https://i.imgur.com/0w9ZcjO.png')
            .setDescription("Just who I wanted to see. Listen, I saved you back with the tree monster, right? Time to return the favour.");

		switch(command) {

			case "begin":

				await message.channel.send('https://i.imgur.com/cvL0G9f.png');
				message.channel.send("~==============oOo==============~ \nA huge network of massive tree branches that have fused together over the years, and have flattened tops due to nature magic and years of travel over them. You climb up to stand on one, and the height is a bit dizzying. You see the wide main path, the left path, and the right path.\n~==============oOo==============~" );

			break;


			case "network":

				message.channel.send("These curling branches seem to be the preferred way of travel through Vieru, particularly if you're not a guide. They're safer than the ground, and seem to connect to other villages.");

			break;

			case "branches":

				message.channel.send("These curling branches seem to be the preferred way of travel through Vieru, particularly if you're not a guide. They're safer than the ground, and seem to connect to other villages.");

			break;

			case "villages":

				message.channel.send("Some places have found enough safety for small settlments to grow.");

			break;

			case "other villages":

				message.channel.send("Some places have found enough safety for small settlments to grow.");

			break;

			case "ground":

				message.channel.send("It's covered in mud, swampwater, dangerous plants, and monsters.");

			break;

			case "swampwater":

				message.channel.send("It can grow quite deep, and if you aren't careful you could sink into it.");

			break;

			case "dangerous plants":

				message.channel.send("Many are poisonous, and have carnivorous tendencies.");

			break;

			case "monsters":

				message.channel.send("They're everywhere in Vieru. Most fauna here seems ready to eat anything and anyone.");

			break;

			case "tree branches":

				message.channel.send("They're massive-- the largest one looks to be 36 feet wide-- and flattened on the top for easy travel.");

			break;

			case "main path":

				message.channel.send("This wide branch disappears into the distance-- it's hard to know how long one can travel upon it. An austere elf stops you before you travel much further.");

			break;

			case "wide main path":

				message.channel.send("This wide branch disappears into the distance-- it's hard to know how long one can travel upon it. An austere elf stops you before you travel much further.");

			break;

			case "path":

				message.channel.send("Which path?");

			break;

			case "austere elf":

				message.channel.send("She gives you a nod, then starts to speak. \"You have to work for us while you stay, don't you? Well I have a little favor to ask of you. There are many ladders that lead up to the tree paths so that those on the ground can get to safety, but they often get damaged. Find and report any broken ladders to me, or if you dare, just go ahead and fix them if you're able.\" \n\n***QUEST DISCOVERED:*** _Ladder Maintenence:_ The ladders that lead up to the Tree Paths are often damaged by the creatures of the swamp, or by nature itself. It seems this elf desires your help in making certain that they're fixed in a timely manner. \n\t✥ Use aca to search for any broken ladders, and on a success report them to this elf. Alternatively use phys if you dare to fix any ladders yourself. With phys, on a success the ladder is fixed, but if no success is gotten, roll 4 die to see how much damage you receive from a fall. \n\t✥ Gain x1 Stone Sun");

			break;


			case "left path":

				message.channel.send("This path twists off the main one, and as you walk along it you see red mushrooms, and strange flames floating above the water below. Patterns decorate the bark of some of the trees nearby in beautiful spirals.");

			break;

			case "red mushrooms":

				message.channel.send("The glow with a soft, warm light, and help light the path. Its quite helpful, as little sunlight breaks throught the foliage of the massive trees.");

			break;

			case "flames":

				message.channel.send("These little flames slowly drift over the surface of the swampwater down below, almost like a wisp. Their orange light is brightly reflected by the rippling water.");

			break;

			case "strange flames":

				message.channel.send("These little flames slowly drift over the surface of the swampwater down below, almost like a wisp. Their orange light is brightly reflected by the rippling water.");

			break;

			case "patterns":

				message.channel.send("Giving the patterns on the bark a closer look, you realize that they've been formed by fat green worms chewing the surface of the wood. To make matters worse, a massive lizard the size of a large dog climbs down to snap up one of the worms, venom dripping from its fangs. \n\n***QUEST DISCOVERED:*** _Pest Control:_ Neither the lizard or the worms look particularly safe. It might be a good idea to either fight the lizard off, or get rid of its food source. \n\t✥ Fight off the lizard if you dare. If you wish to use the system to do this, its stats are: VIT: 10, PHYS: 8, BLESS: 3 \n\t✥ Alternatively come up with a way to get rid of the worms (this can be anything that you feel makes sense). \n\t✥ When you return to the village and inform them of what you've done, they'll reward you with x1 Stone Sun");

			break;

			case "spirals":

				message.channel.send("Giving the patterns on the bark a closer look, you realize that they've been formed by fat green worms chewing the surface of the wood. To make matters worse, a massive lizard the size of a large dog climbs down to snap up one of the worms, venom dripping from its fangs. \n\n***QUEST DISCOVERED:*** _Pest Control:_ Neither the lizard or the worms look particularly safe. It might be a good idea to either fight the lizard off, or get rid of its food source. \n\t✥ Fight off the lizard if you dare. If you wish to use the system to do this, its stats are: VIT: 10, PHYS: 8, BLESS: 3 \n\t✥ Alternatively come up with a way to get rid of the worms (this can be anything that you feel makes sense). \n\t✥ When you return to the village and inform them of what you've done, they'll reward you with x1 Stone Sun");

			break;

			case "beautiful spirals":

				message.channel.send("Giving the patterns on the bark a closer look, you realize that they've been formed by fat green worms chewing the surface of the wood. To make matters worse, a massive lizard the size of a large dog climbs down to snap up one of the worms, venom dripping from its fangs. \n\n***QUEST DISCOVERED:*** _Pest Control:_ Neither the lizard or the worms look particularly safe. It might be a good idea to either fight the lizard off, or get rid of its food source. \n\t✥ Fight off the lizard if you dare. If you wish to use the system to do this, its stats are: VIT: 10, PHYS: 8, BLESS: 3 \n\t✥ Alternatively come up with a way to get rid of the worms (this can be anything that you feel makes sense). \n\t✥ When you return to the village and inform them of what you've done, they'll reward you with x1 Stone Sun");

			break;

			case "worms":

				message.channel.send("They're green and their soft segmented bodies are as big as a sausage. They chew at the bark with large mandibles.");
			break;

			case "green worms":

				message.channel.send("They're green and their soft segmented bodies are as big as a sausage. They chew at the bark with large mandibles.");
			break;

			case "lizard":

				message.channel.send("It's ignoring you right now, but who knows if it will ignore every traveler. Its stats are: VIT: 10, PHYS: 8, BLESS: 3");

			break;

			case "massive lizard":

				message.channel.send("It's ignoring you right now, but who knows if it will ignore every traveler. Its stats are: VIT: 10, PHYS: 8, BLESS: 3");

			break;


			case "right path":

				message.channel.send("This path twists off the main one, and as you walk along it you notice a twisting path that disappears into some leaves, bundles of twigs in the branches, and a couple of large wooden buckets with lids tightly affixed to them.");

			break;

			case "leaves":

				message.channel.send("They're wide and broad, big enough to be used as an umbrella, or even the sail of a ship");

			break;

			case "bundles of twigs":

				message.channel.send("Looking closer you see that they're... nests! Massive birds of various kinds stand guard over them.");

			break;


			case "twigs":

				message.channel.send("Looking closer you see that they're... nests! Massive birds of various kinds stand guard over them.");

			break;

			case "birds":

				message.channel.send("There seem to be three types, mainly identifiable by their different colors. There's a red bird, a green bird, and a black bird");

			break;

			case "red bird":

				message.channel.send("This colorful bird's beak is large and blunt, and its eyes round and set at the side of its head. It seems to regard you quietly, then taste the air with a wormy black tongue.");


			break;

			case "green bird":

				message.channel.send("This bird looks to be the largest of the three, and its dark green feathers have an iridescent sheen. Its large beak is sharp and curved, and it silently watches you with yellow eyes, keeping very still.");

			break;

			case "black bird":

				message.channel.send("This bird is a bit smaller than the others, has 4 purple eyes, and a tapered beak. When one opens its mouth you notice rows upon rows of sharp, needle like teeth. One of them utters a haunting call that echoes through the woods.");

			break;

			case "buckets":

				message.channel.send("There's a sign nearby that reads: 'feed the birds and they'll leave any travelers alone'. Working the lids off the buckets, you realize that there's pieces of raw meat in one, and some sort of orange fruit in the other. Looking up in the leaves, you realize there _are_ birds-- massive ones that look as if they could easily swallow a person, and they watch you intently. \n\n***QUEST DISCOVERED:*** _Birdfeeder:_ Judging from the sign, and the buckets, feeding these birds will prevent them from harassing travelers. There look to be three different types though, and its hard to tell which like fruit, and which like meat. \n\t✥ Feed each species of bird! to do this, type the command like this: <!tp 'color' bird 'food'>, so for example, if I wanted to feed the blue bird meat I'd type <!tp blue bird meat> \n\t✥ Once all birds have been given their food of choice, passing travelers will reward you with x1 Stone Sun");

			break;

			case "bucket":

				message.channel.send("There's a sign nearby that reads: 'feed the birds and they'll leave any travelers alone'. Working the lids off the buckets, you realize that there's pieces of raw meat in one, and some sort of orange fruit in the other. Looking up in the leaves, you realize there _are_ birds-- massive ones that look as if they could easily swallow a person, and they watch you intently. \n\n***QUEST DISCOVERED:*** _Birdfeeder:_ Judging from the sign, and the buckets, feeding these birds will prevent them from harassing travelers. There look to be three different types though, and its hard to tell which like fruit, and which like meat. \n\t✥ Feed each species of bird! to do this, type the command like this: <!tp 'color' bird 'food'>, so for example, if I wanted to feed the blue bird meat I'd type <!tp blue bird meat> \n\t✥ Once all birds have been given their food of choice, passing travelers will reward you with x1 Stone Sun");

			break;

			case "wooden buckets":

				message.channel.send("There's a sign nearby that reads: 'feed the birds and they'll leave any travelers alone'. Working the lids off the buckets, you realize that there's pieces of raw meat in one, and some sort of orange fruit in the other. Looking up in the leaves, you realize there _are_ birds-- massive ones that look as if they could easily swallow a person, and they watch you intently. \n\n***QUEST DISCOVERED:*** _Birdfeeder:_ Judging from the sign, and the buckets, feeding these birds will prevent them from harassing travelers. There look to be three different types though, and its hard to tell which like fruit, and which like meat. \n\t✥ Feed each species of bird! to do this, type the command like this: <!tp 'color' bird 'food'>, so for example, if I wanted to feed the blue bird meat I'd type <!tp blue bird meat> \n\t✥ Once all birds have been given their food of choice, passing travelers will reward you with x1 Stone Sun");

			break;

			case "large wooden buckets":

				message.channel.send("There's a sign nearby that reads: 'feed the birds and they'll leave any travelers alone'. Working the lids off the buckets, you realize that there's pieces of raw meat in one, and some sort of orange fruit in the other. Looking up in the leaves, you realize there _are_ birds-- massive ones that look as if they could easily swallow a person, and they watch you intently. \n\n***QUEST DISCOVERED:*** _Birdfeeder:_ Judging from the sign, and the buckets, feeding these birds will prevent them from harassing travelers. There look to be three different types though, and its hard to tell which like fruit, and which like meat. \n\t✥ Feed each species of bird! to do this, type the command like this: <!tp 'color' bird 'food'>, so for example, if I wanted to feed the blue bird meat I'd type <!tp blue bird meat> \n\t✥ Once all birds have been given their food of choice, passing travelers will reward you with x1 Stone Sun");

			break;

			case "lids":

				message.channel.send("Working the lids off the buckets, you realize that there's pieces of raw meat in one, and some sort of orange fruit in the other.");

			break;

			case "raw meat":

				message.channel.send("They don't seem to be prime cuts, and offal is mixed in.");

			break;

			case "fruit":

				message.channel.send("The rind of the orange fruit is tough, and its smell is sickly sweet. Its about as large as a human head.");

			break;


			case "orange fruit":

				message.channel.send("The rind of the orange fruit is tough, and its smell is sickly sweet.");

			break;

			case "eat fruit":

				message.channel.send("The taste coats your tongue in an unpleasant fuzzy sweetness, but it seems to be edible.");

			break;

			case "red bird fruit":

				message.channel.send("The bird uses it's large beak to crush the fruit in satisfaction. It twitters in delight. This bird is satisfied.");

			break;

			case "red bird meat":

				message.channel.send("The bird regards your offering, tasting the air before suddenly diving at you. Its massive beak looks as if it could easily crush bones. \n\n\t✥ Dodge this attack <!atk 8 3>, or alternatively, get a lore success of at least 1 to calm it.");

			break;

			case "green bird fruit":

				message.channel.send("The bird studies the offering of the fruit, then suddenly decides you would make a better snack. it flutters massive wings silently, then dives towards you, talons sharp and wicked looking. \n\n\t✥ Dodge this attack <!atk 11 4>, or alternatively, get a lore success of at least 1 to calm it.");

			break;

			case "green bird meat":

				message.channel.send("The bird snatches the meat effortlessly, tilting its head back to swallow it. It returns to its silent vigil, but no longer seems as interested in you. This bird is satisfied.");

			break;

			case "black bird fruit":

				message.channel.send("The bird avoids the fruit, then utters a screech that sounds like a human scream. It snaps at you with rows of razor sharp teeth. \n\n\t✥ Dodge this attack <!atk 7 8>, or alternatively, get a lore success of at least 2 to calm it.");

			break;

			case "black bird meat":

				message.channel.send("The meat is snapped up in an instance. This bird continues to watch you with its 4 purple eyes, but doesn't seem as if it will move from its spot. This bird is satisfied.");

			break;

			case "nests":

				message.channel.send("It seems that some of these nests of massive birds also contain massive eggs.");

			break;

			case "eggs":

				message.channel.send("Probably best to leave these alone. The parents of them look dangerous.");


			break;

			case "take egg":

				message.channel.send("You will definitely die so better not.");

			break;

			case "massive trees":

				message.channel.send("They're genuinely huge. Most would need at least 10 men to be able to wrap their arms around the trunk.");

			break;

			case "rippling water":
				message.channel.send("You look a little closer and you see... a frog! It darts way quickly.");

			break;

			case "foliage":
				message.channel.send("It blocks out the light of the sun.");

			break;

			case "twisting path":

				message.channel.send("You follow the twisting path, turning this way and that, and ducking beneath vines and brambles. When your legs start to tire, you finally reach the end and find a large wooden gate framed by bushes.");

			break;

			case "vines":
				message.channel.send("They're fibrous and ropy.");

			break;

			case "brambles":
				message.channel.send("Thorns poke wickedly from them, so it seems to be best to avoid touching them.");

			break;

			case "thorns":
				message.channel.send("Sharp and wicked.");

			break;

			case "gate":
				message.channel.send("Two guards regard you from beyond the gate, and shake their heads. \"You can only pass if you know and meet the conditions,\" one says.");

			break;

			case "wooden gate":
				message.channel.send("Two guards regard you from beyond the gate, and shake their heads. \"You can only pass if you know and meet the conditions,\" one says.");

			break;

			case "large wooden gate":
				message.channel.send("Two guards regard you from beyond the gate, and shake their heads. \"You can only pass if you know and meet the conditions,\" one says.");

			break;

			case "guards":
				message.channel.send("They look bored.");

			break;


			case "conditions":
				message.channel.send("You ask about the conditions but aren't enlightened as to what they might be.");

			break;

			case "bushes":

				message.channel.send("You look behind the bushes, and to your surprise Trinn is ducked behind there, watching the gate with intensity. She gives you a wide smile when she sees you, and pats a place behind the bush beside her.");
				await message.channel.send({ embeds: [embedT] });
				message.channel.startTyping(1);
                await new Promise(resolve => setTimeout(resolve, 1500));
                await embedT.setDescription("You know my sleep flower, right?");
				await message.channel.send({ embeds: [embedT] });
				message.channel.stopTyping(true);
				message.channel.send("`She motions to the white flower tied to her waist in a corked jar.`");
				message.channel.startTyping(1);
                await new Promise(resolve => setTimeout(resolve, 1500));
                await embedT.setDescription("Well, I was hoping to get a few more, in case. The Elanei's a big day and I'd like to be prepared, but the problem is you can only get them in the garden past that gate, and the only way you can get into that garden is if you're a lover with your other lover. It's dumb.");
				await message.channel.send({ embeds: [embedT] });
				message.channel.stopTyping(true);
				message.channel.startTyping(1);
                await new Promise(resolve => setTimeout(resolve, 1500));
                await embedT.setDescription("They already know that I'll try to sneak in by being dishonest, but they don't know you! Pretend to be lovers for me will you, and fetch a flower, roots and all for me? I'll give you a jar to do so. Just remember to hold your breath if you get too close to the flower.");
				await message.channel.send({ embeds: [embedT] });
				message.channel.stopTyping(true);
				message.channel.send("***QUEST DISCOVERED:*** _Lover's Garden:_ Trinn wants a few more sleep flowers just in case, but they can only be found in the Lover's Garden. She can't go, but perhaps if you pretend to be a pair of lovers you can get some flower for her? \n\t✥ Write your characters acting in love, and going into the garden. \n\t✥ Feel free to describe the garden how you wish, and describe/write the guards how you wish. \n\t✥ Fetch a flower, and put it in a jar. When this is done, Trinn will reward you with x1 Stone Sun.");


			break;

			case "white flower":
				message.channel.send("It faintly glows, and emits a white pollen. You recall that this flower can even put the beasts of the swamp to sleep with its potent pollen.");

			break;

			case "sleep flowers":
				message.channel.send("It faintly glows, and emits a white pollen. You recall that this flower can even put the beasts of the swamp to sleep with its potent pollen.");

			break;

			case "jar":
				message.channel.send("It's round and glass.");

			break;

			case "lover's garden":
				message.channel.send("Feel free to describe this area how you wish.");

			break;

			case "elanei":

				await embedT.setDescription("It's a sort of... religious holiday in these parts. You have those, right?");
				message.channel.send({ embeds: [embedT] });

			break;



			default: 
					message.channel.send("I don't recognize that.");
			break;

		}//end switch


	},
};
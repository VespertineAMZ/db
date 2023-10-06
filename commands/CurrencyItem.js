//This allows user to see information about items more in depth. This is hardcoded in, but item descriptions using a database can be seen in "CustomItemInfo.js"
const Items = require('./models/CustomItemsSchema');

module.exports = {
	name: 'item',
	description: 'gives item descriptions',
	async execute(message, args) {

		let commandArgs = args.join(' ');

		commandArgs = commandArgs.toLowerCase();

		switch(commandArgs) {

			case "key":
				await message.channel.send("<:oldkey:724827901975068754>");
				message.channel.send("An old brass key of unknown origin.");
			break;

			case "bottle of something":
				await message.channel.send("<:purplepotion:727729175397400577>");
				message.channel.send("A strange bottle of... something. There's a label on it that says 'for the tree'");
			break;

			case "stone 1":
				await message.channel.send("<:stone1:728798037622784061>");
				message.channel.send("A strange stone. It has a windy symbol on it.");
			break;

			case "stone 2":
				await message.channel.send("<:stone2:728798088096907265>");
				message.channel.send("A strange stone. It has a fiery symbol on it.");
			break;

			case "stone 3":
				await message.channel.send("<:stone3:728798139108163585>");
				message.channel.send("A strange stone. It has a leafy symbol on it.");
			break;

			case "stone 4":
				await message.channel.send("<:stone4:728798171559624828>");
				message.channel.send("A strange stone. It has a watery symbol on it.");
			break;

			case "runtiri flower":
				await message.channel.send("<:healingflower:730535644396257290>");
				message.channel.send("A small, blooming flower encased in a glass ball. If you're at peace, and you ask it for aid, once per day it can heal you somewhat. \n\nOOC: Once per day while out of combat, you may heal 1 vit of your OC or another nearby OC.");
			break;

			case "musical score":
				await message.channel.send("<:musicalscore:730647689695592509>");
				message.channel.send("A mysterious musical score. You've never heard it before. It seems to be written for the organ.");
			break;

			case "blessed pendant":
				await message.channel.send("<:blessedpendant:737550245671731201>");
				message.channel.send("This pendant of your favored god gives you +1 blessings. This pendant is only blessed for the character it was initially given to. If given to any other character, it is simply a normal pendant.");
			break;

			case "satchels satchel":
				await message.channel.send("<:satchelsatchel:726629563244740840>");
				message.channel.send("A well crafted satchel. It seems to make objects placed in it a little lighter.");
			break;

			case "peach wine":
				await message.channel.send("<:peachwine:724162630268223538>");
				message.channel.send("A delicious peach wine.");
			break;

			case "pink potion":
				await message.channel.send("<:Lovepotion:724162724543725629>");
				message.channel.send("A light pink liquid in a glass bottle.");
			break;

			case "xp potion":
				await message.channel.send("<a:xppotion:726977441138212954>");
				message.channel.send("An potion that, when drunk, lets you experience memories of a battle. \n\nOOC: A potion that gives you 10 xp. You can use this with the !xppotion <character name> <amount of potions> command.");
			break;

			case "miku guqin":
				await message.channel.send("<:mikuguqin:726616441213681686>");
				message.channel.send("A teal guqin with a beautiful sound. \n\nOOC: When using a creation magic ability, gain +1d6 (works for healing and magic buffs). this item classifies as a weapon.");
			break;

			case "rusty sword":
				await message.channel.send("<:rustysword:726633849043288184>");
				message.channel.send("Though this sword is rusted, it seems well balanced. \n\nOOC: Gain +1d6 to physical attacks. This item classifies as a weapon.");
			break;

			case "rusty dagger":
				await message.channel.send("<:rustydagger:750597038651211837>");
				message.channel.send("Though this dagger is rusted, it seems well balanced. \n\nOOC: Gain +1d6 to physical attacks. This item classifies as a weapon.");
			break;

			case "old wand":
				await message.channel.send("<:oldwand:726641875724796015>");
				message.channel.send("An old wand topped with a blue crystal that shimmers with magical energy. \n\nOOC: Gain +1d6 to magical attacks. This item classifies as a weapon.");
			break;

			case "casino outfit":
				await message.channel.send("<:casinooutfit:738329276058828841>");
				message.channel.send("The official uniform of Nahite's Palace employees! It's said if you've never worked there before, obtaining one of these outfits requires an exorbitant amount of money.");
			break;

			case "acorn":
				await message.channel.send("<:acorn:740499858338873394>");
				message.channel.send("A normal looking acorn. It's a gift from Satchel!")
			break;

			case "small encounter":
				await message.channel.send("<:Smallbeasticon:744099756753682513>");
				message.channel.send("A small beast encounter! You can have up to two encounters!");
			break;

			case "large encounter":
				await message.channel.send("<:Largebeasticon:744099785161572423>");
				message.channel.send("A large beast encounter! You can have up to two encounters!");
			break;

			case "tear":
				await message.channel.send("<:Tear:751941309513596939>");
				message.channel.send("A strange gemlike object that seems to exude a strange aura.");
			break;

			case "dew of the frostmaiden":
				await message.channel.send("<:dewofthefrostmaiden:753804369975050260>");
				message.channel.send("A mysterious fruit that shines with many colors. It never rots or wilts.\n\nOOC: Any tameable creature in Tiranthe can be tamed with this item.");
			break;

			case "stone sun":
				await message.channel.send("<:stonesun:756363708145336330>");
				message.channel.send("Vieru event currency.");
			break;

			case "souvenir":
				await message.channel.send("<:souvenir:757716925106356339>");
				message.channel.send("A stone from a pile of rubble found in Arasne's home.");
			break;

			case "cursed ring":
				await message.channel.send("<:cursedring:763236725551267862>");
				message.channel.send("A ring that makes you weaker. \n\nOOC: This ring lowers your physical skill to 1, and cuts your vit skillpoints in half, rounded down.");
			break;

			case "mount whistle":
				await message.channel.send("<:Mountwhistle:784553116237299772>");
				message.channel.send("A whistle that summons your mount.");
			break;

			case "healing potion":
				await message.channel.send("<:healingpotion:819424286468603915>");
				message.channel.send("A potion that heals 1 vitality. This can be used even if your character is at 0 vitality. Once used the potion disappears.");
			break;

			case "magic potion":
				await message.channel.send("<:bluepotion:862097941812609027>");
				message.channel.send("A potion that automatically gives +2 SUCCESSES (not rolls) to any single magic roll of your choosing. Once used the potion disappears.");
			break;

			case "gem of imagination":
				await message.channel.send("<:gemofimagination:1116879534550175856>");
				message.channel.send("This odd purple gem is warm when you touch it, and sometimes you hear whispers you can't quite make out. It seems to make the world around you more fanciful.\n\nOOC: This item gives LORE +1 for lore skill rolls. This cannot be equipped at the same time as the gem of knowledge, and can only be switched out once per day.");
			break;

			case "gem of knowledge":
				await message.channel.send("<:gemofknowledge:861710881851047956>");
				message.channel.send("This odd red gem is warm when you touch it, and sometimes you hear whispers you can't quite make out. It seems to give the world around you greater clarity.\n\nOOC: This item gives ACA +1 for academics skill rolls. This cnanot be equipped at the same time as the gem of imagination, and can only be switched out once per day.");
			break;

			case "earring of disguise":
				await message.channel.send("<:EarringofDisguise:862079939460464642>");
				message.channel.send("When wearing this earring, for 8 hours per day you may change your hair color, hair style, and eye color. It also seems to contain the power to hide mer, feroxi, elemental, and draconic features such as wings, horns, tails, or scales. You can even choose to look more masculine, or more feminine. Those with moderate or greater light magic sensing abilities will be able to see through the disguise. Those with minor light magic sensing abilities will be able to tell a magical item is at work.");
			break;

			case "bow of nature":
				await message.channel.send("https://i.imgur.com/keDGhrh.png");
				message.channel.send("This bow smells like a forest, and gives you a sense of peace.\n\nOOC: When using a creation magic ability, or when doing a physical attack, gain +1d6 (works for healing and magic buffs, and for physical attacks). When using healing magic, or when doing a physical attack, always do 1 success of nature healing, or do 1 success of nature damage ON TOP of what you have already rolled. This item classifies as a weapon.");

			break;

			case "harp of crystal":
				await message.channel.send("https://i.imgur.com/RfGHSxz.png");
				message.channel.send("This harps strings have a sound as pure as crystal.\n\nOOC: When using a creation magic ability, or when doing a magical attack, gain +1d6 (works for healing and magic buffs, and for magical attacks). When using healing magic, or when doing a magical attack, always have 1 success healing from the element you're healing with, or do 1 success of mineral damage ON TOP of what you have already rolled. This item classifies as a weapon.");

			break;

			case "staff of light":

				await message.channel.send("https://i.imgur.com/RbcEYwU.png");
				message.channel.send("This staff seems to shimmer with light, and thrums with magic power.\n\nOOC: When using a creation magic ability, or when doing a magical attack, gain +1d6 (works for healing and magic buffs, and for magical attacks). When using healing magic, or when doing a magical attack, always have 1 success of light healing, or do 1 success of light damage ON TOP of what you have already rolled. This item classifies as a weapon.");

			break;

			case "shield of ice":
				await message.channel.send("https://i.imgur.com/DMQYF44.png");
				message.channel.send("This shield is cool to the touch, and little seems to be able to damage it.\n\nOOC: When rolling for a physical or magical defense, gain +1d6. After rolling defense, add to that number +1 success of a magical ice defense. This item classifies as a weapon.");

			break;

			case "sword of flame":
				await message.channel.send("https://i.imgur.com/B2vhYle.png");
				message.channel.send("This sword is warm to the touch, and when swung the whoosh of flame can be heard.\n\nOOC: When doing a physical or magical attack, gain +1d6. When attacking, always have 1 success of fire damage ON TOP of what you have already rolled. This item is a weapon.");

			break;

			case "nakaclocker":
				await message.channel.send("https://i.imgur.com/HYpLuQh.png");
				message.channel.send("This hammer looks like a toy. When you hit someone with it, it honks like a clown and makes your opponent laugh.\n\nOOC: The opponent you attack with this weapon must roll -2 dice on their next defense. This item is a weapon.");

			break;

			case "daggers of shadow":
				await message.channel.send("https://i.imgur.com/smJ49WG.png");
				message.channel.send("These daggers come in a set. Your steps seem quieter when you hold them. \n\nOOC: When doing a physical attack gain +1d6. When rolling initiative, gain +1d6. When attacking, always have 1 success of dark damage ON TOP of what you have already rolled. This item is a weapon.");
			break;

			case "bone lyre":
				await message.channel.send("https://i.imgur.com/ZuyYweO.png");
				message.channel.send("A fine musical instrument for a dead man. This lyre is made of high-quality bone from the now-extinct bisoxen that used to be native to Selpharas. When you pull at the strings, its sound is a little melancholy, as if in mourning.\n\nOOC: Gain +3d6 to magical attacks. This item is a weapon.");

			break;

			case "spear of the storm":
				await message.channel.send("https://i.imgur.com/nhkxQnb.png");
				message.channel.send("A spear that crackles with energy, and smells like rain. \n\nOOC: When doing a physical attack gain +1d6. When doing a physical defense gain +1d6. When doing a physical attack, always have 1 success of lightning damage ON TOP of what you have already rolled. This item is a weapon.");

			break;

			case "zephyr fan":
				await message.channel.send("https://i.imgur.com/z7iyS6w.png");
				message.channel.send("A fan that can call forth a pleasant breeze, or a raging wind. \n\nOOC: When doing a magical attack gain +1d6. When rolling initiative, gain +1d6. When attacking, always have 1 success of wind damage ON TOP of what you have already rolled. This item is a weapon.");

			break;

			case "seal plush":
				await message.channel.send("<:sealplush:997321141901328406>");
				message.channel.send("A perfectly normal seal plush. Perhaps.");

			break;

			case "fine sword":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001624626415272016/fine_sword.png");
				message.channel.send("A well balanced blade. \n\nOOC: Gain +2d6 to physical attacks.\n\nRecipe: Rusty Sword x5");

			break;

			case "barbed whip":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001655697198559252/barbed_whip.png");
				message.channel.send("A leather whip with bits of metal in it. \n\nOOC: Add 1 success of phys damage ON TOP of what you have already rolled.\n\nRecipe: Rusty Sword x3, Satchels Satchel x3");

			break;

			case "fine dagger":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001630227706941450/fine_dagger.png");
				message.channel.send("A well balanced blade. \n\nOOC: Gain +2d6 init, and gain +1d6 to physical attacks.\n\nRecipe: Rusty Sword x4");

			break;

			case "fine spear":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001635956375433226/fine_spear.png");
				message.channel.send("The haft is of strong oak, and the blade is of polished steel.\n\nOOC: Gain +1d6 to physical attacks. When physically defending, add 1 success of a physical defense ON TOP of what you have already rolled.\n\nRecipe: Old Wand x2, Rusty Sword x3");

			break;

			case "fine axe":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001638186604302366/fine_axe.png");
				message.channel.send("It's a little heavy. The blade is of polished steel.\n\nOOC: Lose -1d6 to defense, and lose -2d6 to init. Gain +3d6 to physical attacks.\n\nRecipe: Old Wand x1, Rusty Sword x4");

			break;

			case "fine wand":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001642090360483942/fine_wand.png");
				message.channel.send("This wand looks almost like a flower about to bloom.\n\nOOC: Gain +2d6 to magical attacks.\n\nRecipe: Old Wand x4, Adora Bathwater x1, Stone 3 x1");

			break;

			case "burnished handbell":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001647500920361112/burnished_handbell.png");
				message.channel.send("This golden bell rings with a clear, sweet sound.\n\nOOC: Gain +2d6 to init. Gain +1d6 to magical attacks.\n\nRecipe: Rusty Sword x1, Old Wand x3");

			break;

			case "old rebec":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001650401797480528/old_rebec.png");
				message.channel.send("A lovely stringed instrument. \n\nOOC: Gain +2d6 to healing. \n\nRecipe: Miku Guqin x4, Healing Potion x2");

			break;

			case "fine staff":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001653733085691994/fine_staff.png");
				message.channel.send("You can feel the tingle of magic when touching this weapon. It's topped with a red gem.\n\nOOC: Lose -1d6 to defense. Lose -2d6 to init. Gain +3d6 to magical attacks.. \n\nRecipe: Old Wand x4, Gem of Knowledge x1");

			break;

			case "lemon scented dagger":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001632885629014158/lemon_scented_dagger.png");
				message.channel.send("A well-balanced blade that smells like lemons.\n\nOOC: Gain +2d6 to init. Gain +2d6 to physical attacks.");

			break;

			case "semi used fantablack":
				await message.channel.send("https://cdn.discordapp.com/attachments/756056292833099899/1002485126984372335/blackcrayon.png");
				message.channel.send("This wax crayon absorbs 99.995% of incoming light. It's good for 1 more use.");

			break;

			case "lore potion":
				await message.channel.send("<:purplepotion:727729175397400577>");
				message.channel.send("This potion tastes like a warm drink given to you by a loved one when you can't sleep. Memories of old tales flood your mind, and you feel your imagination soar.\n\nOOC: Gain +1 LORE for one skill roll.\n\nRecipe: Healing Potion x3, Grevo x1, Syvex x1.");

			break;

			case "academics potion":
				await message.channel.send("<a:cyanpotion:1116858315612369006>");
				message.channel.send("This potion has a bright, refreshing taste, and after it's drunk the world seems to grow more clear... perhaps even too clear, it could make one's head hurt. Suddenly things like the flow of magic, and the quadratic function become clear to you.\n\nOOC: Gain +1 ACA for one skill roll.\n\nRecipe: Healing Potion x3, Estreyr x1, Syvex x1.");

			break;

			case "sorcery potion":
				await message.channel.send("<a:bluepotion:1116857400583004222>");
				message.channel.send("This potion is sour, and you feel a tingling throughout your body when you drink it. It seems you have a little extra magical energy that you can make use of.\n\nOOC: Gain +1 SORC for one skill roll, or for your next SORC related roll in battle.\n\nRecipe: Healing Potion x3, Estreyr x1, Grevo x1.");

			break;

			case "vitality potion":
				await message.channel.send("<a:greenpotion:1116856889649680455>");
				message.channel.send("This potion is a little bitter, but it's packed with nutrients! Some nobles drink one of these potions every day.\n\nOOC: Gain +1 VIT for one skill roll, or gain +1 temporary VIT during a battle. Once this temporary VIT is lost from being attacked, it can't be regained without drinking another potion.\n\nRecipe: Healing Potion x3, Estreyr x1, Puffru x1.");

			break;

			case "initiative potion":
				await message.channel.send("<:potionsilver:1003487982000541767>");
				message.channel.send("A silver potion, flowing freely like the wind that whips through the skies.\nWhen you drink it, you feel as though your body is lighter, and you are more nimble.\n\nOOC: Gain + 1 INIT for one initiative roll.");

			break;

			case "physical potion":
				await message.channel.send("<a:goldpotion:1116857852548632596>");
				message.channel.send("This potion is cold against your tongue. After it's drunk, you feel a burst of energy, and a surge of strength. Your body has never felt so light and graceful. \n\nOOC: Gain +1 PHYS for one skill roll, or one PHYS related roll in battle.\n\nRecipe: Healing Potion x3, Myltyl x1, Frakus x1");

			break;

			case "blessings potion":
				await message.channel.send("<a:brightpotion:1116859251609043017>");
				message.channel.send("This rare potion is said to be made with a unicorn's tears. Alchemists say it will grant you a little extra luck, but is that really true? It doesn't taste like much, and you don't feel all that different after drinking it.\n\nOOC: Gain +1 BLS for one skill roll, or for one BLS related roll in battle.\n\nRecipe: tba");

			break;

			case "red rose bookmark":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005393776346419211/red_rose_bookmark.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A small pressed flower situated onto a piece of parchment and hand stitched together to make a delicate looking bookmark. Song and Rue made these by hand for days.");

			break;

			case "blue rose bookmark":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005393811050074152/blue_rose_bookmark.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A small pressed flower situated onto a piece of parchment and hand stitched together to make a delicate looking bookmark. Song and Rue made these by hand for days.");

			break;

			case "yellow rose bookmark":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005393834508816394/yellow_rose_bookmark.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A small pressed flower situated onto a piece of parchment and hand stitched together to make a delicate looking bookmark. Song and Rue made these by hand for days.");

			break;

			case "red wildflower bookmark":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005393901902897172/red_wildflower_bookmark.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A small pressed flower situated onto a piece of parchment and hand stitched together to make a delicate looking bookmark. Song and Rue made these by hand for days.");

			break;

			case "blue wildflower bookmark":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005393950816878633/blue_wildflower_bookmark.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A small pressed flower situated onto a piece of parchment and hand stitched together to make a delicate looking bookmark. Song and Rue made these by hand for days.");

			break;

			case "yellow wildflower bookmark":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005393982873927680/yellow_wildflower_bookmark.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A small pressed flower situated onto a piece of parchment and hand stitched together to make a delicate looking bookmark. Song and Rue made these by hand for days.");

			break;

			case "floral perfume":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005394058354642984/floral_perfume.png");
				message.channel.send("Song's Specialty. A pleasant floral perfume with notes of citrus to add that perfect refreshing touch to anyone's day. It almost glitters inside the bottle.");

			break;

			case "daycare voucher":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005936191910182942/Daycare_Voucher.png");
				message.channel.send("This item is a reward from the Guess that Critter stand during the Summer of Adoration Festival. A handmade voucher that is good for 1 Full day of pet daycare duties by Rue or Song.");

			break;

			case "grand prize voucher":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1005936222830600342/Grand_Prize_Voucher.png");
				message.channel.send("This item will grant you access to the Grand Prize Battle Royale of Guess that Critter! Better keep it handy! Would be a shame if you lost it before participating!");

			break;

			case "richters sword":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1005698767774814308/richters_sword.png");
				message.channel.send("A simple, but powerful sword. It's a little heavy, and its blade shines a dark blue. \n\nOOC: Lose -2d6 when rolling init. Gain +3d6 when rolling physical attacks.");

			break;

			case "almond cookie":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1006398937780981791/unknown.png");
				message.channel.send("Specially made by Fifi’s brother. Fifi says it is her favorite thing in the world, but you doubt her brother’s baking skills. \n\nOOC: One time use. If you feed this to a monster or friend in battle, -1 VIT cap to the consumer for the entirety of the battle. If your VIT is 1, - 1 SORC cap for the entirety of battle.");

			break;

			case "crispy chicken":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1007425818324123648/sadtendy.png");
				message.channel.send("A special side dish made for you by Pythius. It has an evil aura.\n\nOOC: One time use. Throw this along with your attack. Gain +1 damage to that attack. If your character eats it, then their vit drains to 0.");

			break;

			case "silver bell of devotion":
				await message.channel.send("https://cdn.discordapp.com/attachments/517902681356894208/1007549698854363176/bell.png");
				message.channel.send("A small, metal, bell charm attached to a red thread. This magical charm uniquely attunes to one person in the entire world, changing its pitch to match them. They are used as a gesture of devotion when exchanged between lovers. Tying the bell to your partner's wrist in the exchange will pair the two charms. When one bell is shaken, the other will chime in response anywhere in the world. This charm emits an A note.");

			break;

			case "gold bell of devotion":
				await message.channel.send("https://cdn.discordapp.com/attachments/517902681356894208/1007550585698005104/bellgold.png");
				message.channel.send("A small, metal, bell charm attached to a red thread. This magical charm uniquely attunes to one person in the entire world, changing its pitch to match them. They are used as a gesture of devotion when exchanged between lovers. Tying the bell to your partner's wrist in the exchange will pair the two charms. When one bell is shaken, the other will chime in response anywhere in the world. This charm emits an B note.");

			break;

			case "pink bell of devotion":
				await message.channel.send("https://cdn.discordapp.com/attachments/517902681356894208/1007550777407053875/bellpink.png");
				message.channel.send("A small, metal, bell charm attached to a red thread. This magical charm uniquely attunes to one person in the entire world, changing its pitch to match them. They are used as a gesture of devotion when exchanged between lovers. Tying the bell to your partner's wrist in the exchange will pair the two charms. When one bell is shaken, the other will chime in response anywhere in the world. This charm emits an E note.");

			break;

			case "stamp of the meadows":
				await message.channel.send("<:stamp:1007577508687908864>");
				message.channel.send("Can't send a letter without a stamp, right? Given to you by Fifi, the stamp depicts a place called The Meadows, an estate where the Valentines reside in Rinnea where the trees are golden, all year round. A reminder to you by Fifi to write more to family, wherever they are.");

			break;

			case "chakram":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008620885416083498/chakram.png");
				message.channel.send("This circular blade can be thrown at an enemy, or be hoeld to use in close combat. \n\nOOC: Gain +1d6 when normally physically attacking. Gain +2d6 to attacks, and +1d6 to bless when physically attacking while throwing the weapon, but if doing a throwing attack, your character loses their action on their next turn.\n\nRecipe: Rusty Sword x5, Earring of Disguise x1");

			break;

			case "fine bow":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008622302923063306/fine_bow.png");
				message.channel.send("The wood is polished, and the string is taut. \n\nOOC: Gain +1d6 when physically attacking. Gain +1d6 when using healing magic. When an attack from this weapon is blocked by a lightning defense, resist paralysis.\n\nRecipe: Old Wand x4, Healing Potion x3");

			break;

			case "crystal focus":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008625086862991440/crystal_focus.png");
				message.channel.send("It shines with an inner light. \n\nOOC: Add +2 when casting a mineral creation buff. \n\nRecipe: Stone 3 x2, Gem of Knowledge x2");

			break;

			case "tome of flames":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008638922059960400/tome_of_flames.png");
				message.channel.send("When its pages turn, it almost sounds like the crackling of flames. \n\nOOC: Gain +1d6 when attacking with sorcery. When defending with sorcery, add +1 of a success of a fire defense ON TOP of what you have already rolled.  \n\nRecipe: Musical Score x2, Stone 2 x2");

			break;

			case "fine halberd":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008641496381145178/halberd.png");
				message.channel.send("This weapon is heavy, but powerful. It slices as quickly as the wind.\n\nOOC: Lose -1d6 when physically defending. Lose -1d6 when rolling initiative. When physically attacking, add +2d6 to your attacks. When attacking, add +1 wind damage ON TOP of what you have already rolled.  \n\nRecipe: Rusty Sword x2, Old Wand x2, Stone 1 x1");

			break;

			case "ice rapier":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008643246647414824/ice_rapier.png");
				message.channel.send("A thin, light sword that's cool to the touch, and glows with magic.\n\nOOC: Gain +1d6 when rolling init. Gain +1d6 when attacking. When attacking, add +1 water damage ON TOP of what you have already rolled.  \n\nRecipe: Rusty Sword x4, Stone 4 x2");

			break;

			case "ice rapier":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008643246647414824/ice_rapier.png");
				message.channel.send("A thin, light sword that's cool to the touch, and glows with magic.\n\nOOC: Gain +1d6 when rolling init. Gain +1d6 when attacking. When attacking, add +1 water damage ON TOP of what you have already rolled.  \n\nRecipe: Rusty Sword x4, Stone 4 x2");

			break;

			case "kusarigama":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008644565114302524/kusarigama.png");
				message.channel.send("This kama is attached to a metal chain. It can be thrown at enemies at a distance. \n\nOOC: Gain +2d6 when rolling init. Gain +3d6 when physically attacking. After attacking with this weapon, it is lost for one turn.  \n\nRecipe: Rusty Sword x4, XP Potion x2");

			break;

			case "scythe":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1008645877956612188/scythe.png");
				message.channel.send("This weapon has gained new strength when infused with the power of the gem. \n\nOOC: Gain +1d6 when magically attacking. When defending with magic, add +1 of a physical defense ON TOP of what you have already rolled. \n\nRecipe: Rusty Sword x3, XGem of Knowledge x1");

			break;

			case "glamour charm":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1009239121111298128/maskingamulet.png");
				message.channel.send("When worn, this amulet makes people around you significantly less inclined to perceive your presence, causing them to generally disregard you. Those who do lay their eyes on you will be inclined to look away, or not see you as anyone in particular, as if there is a blind spot in their mind. \n\nThe charm DOES NOT make the wearer invisible. You will still be seen by various visual sensors/alarms. The illusion can be broken if the wearer is exposed to mirrors/reflections, certain magical spells/enchantments, or if watchers are particularly focused on you. Those who are able to see through the illusion or witness the illusion breaking will be immune to the effects of the Glamour Charm for 2 days.");

			break;

			case "flower lapel":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1009678684648644608/lapel.png");
				message.channel.send("Rain or Shine... Win or Lose. Regardless of the outcome: Keep this as a memento upon your clothes that to another, you are always blooming and thriving as wonderfully as a flower.");

			break;

			case "strange lily":
				await message.channel.send("https://cdn.discordapp.com/attachments/462772928195592192/1012144880748867634/lily.png");
				message.channel.send("There's something odd about this flower. You can't tell if it's real or fake. Can be attached to clothing or jewellery.");

			break;

			case "cosmic soda":
				await message.channel.send("<:cosmicsoda:1016767054285643807>");
				message.channel.send("Six's favorite soda brand. You've never seen this brand before but Six says his older sibling always brings this back for him from every trip! Whenever Six drinks this, he feels as though all of his dreams will come true.\n\nOOC: A drink that brings about delusions. If consumed, you will lose 1 BLS during the entire battle, but +2 SORC. Does not work with atheists. When consumed by the godless, -1 VIT.");

			break;

			case "stamp of old day rinnea":
				await message.channel.send("<:Valentine_stamp:1016767035600019606>");
				message.channel.send("A stamp from many.. Many years ago. You're not quite sure how accurate it is of a representation of Rinnea today but you know from Six that it is an old momento of their mother's. A reminder from Six to cherish the things you already have.");

			break;

			case "millenial puzzle":
				await message.channel.send("https://cdn.discordapp.com/attachments/635916878623146017/1025302966326022184/millenial_puzzle.png");
				message.channel.send("An ancient puzzle composed of golden pieces. It seems to be particularly difficult to solve... but a 2 ACA success trick might do the trick. \n\n***[Hidden Quest]*** _Friend Like Me:_ __(Prerequisite quest: A diamond in the rough and Open Sesame must be completed successfully)__ You can try to solve this using ACA. If you roll 2 successes or higher, the spirit of the puzzle appears before you. - they look just like you, but older for some reason… They thank you for solving the puzzle and awakening them from their slumber. As a result, they will grant you one wish [within their power].\n\nChoose:\nA) You make your wish. Gain 5000 therins, 5 birds, and 5xp. @ a mod to gain your rewards. \nB) You wish for the spirit’s freedom from the puzzle. The spirit is surprised by the generosity of your spirit. Moved to tears, the spirit thanks you and gives you an item to remember them by. @ a mod to get your reward.\n\nIf you don't succeed the ACA roll, you can't solve the puzzle.\n\t✥ Gain x1 Glazed Bead upon success https://cdn.discordapp.com/attachments/756056292833099899/1047099560037711892/bead_eye_2.png");
			break;

			case "obsidian slate":
				await message.channel.send("https://cdn.discordapp.com/attachments/635916878623146017/1025306354275057734/obsidian_plate.png");
				message.channel.send("A mysterious dark slate with what appears to be an ancient language written on it. A small symbol that looks familiar to you seems to be etched over the words.");
			break;

			case "memories of severance":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1029991649553698889/mosscissors.png");
				message.channel.send("Scissors that have been used to sever one life to save another. It has been through a lot, but you acknowledge that it is still good. Maybe if you look past the blood on its body, you will be able to find wisdom and bravery that defy even the gods’ will.\n\nOOC: One time use, battle exclusive. When used, it will -1 BLS stat but gift you with +2 LORE. When used by the godless, +1 LORE but -1 of your VIT cap for the entire battle.");
			break;

			case "stamp of the grand ballroom":
				await message.channel.send("https://cdn.discordapp.com/attachments/1003486206522294275/1029991715882418176/stampofthegrandballroom.png");
				message.channel.send("Nothing makes one feel more single or more at bliss than a ball. Given to you by Victoria, she still remembers the dance she and Wilheim had on the night they got engaged. A reminder of for you by Victoria to live every moment as if it is your last.");
			break;

			case "clown doll":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1036061124266831902/clowndoll.png");
				message.channel.send("A cheery clown doll. Maybe it's Nakallas?");
			break;

			case "closing key":
				await message.channel.send("<:closingKey:1040186480213102652>");
				message.channel.send("A magic key that will lock any non magical door once. Use this item when done with it.");
			break;

			case "opening key":
				await message.channel.send("<:openingKey:1040186513503297557>");
				message.channel.send("A magic key that will unlock any non magical lock once. Use this item when done with it.");
			break;

			case "green egg":
				await message.channel.send("<a:greenegg:722729179581382657>");
				message.channel.send("An egg that will hatch into any small monster of your choice to keep as a pet. Alternatively, you can design a non combative pet that is based off a turtle and can be no larger than a husky.");
			break;

			case "shamshir":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1059661041627303986/shamshir.png");
				message.channel.send("A thin, curved blade from Triem Sha that slashes quickly, and feels almost light in one's hand. The gem in the blade's hilt is a simliar color to the oasis, and it's said that if a merchant from Triem Sha sees that you are in posession of this sword, they will be more willing to grant you a favor. \n\nOOC: Gain +1d6 when rolling init. Gain +1d6 when doing a physical attack. Gain +1d6 when doing a physical defense.");
			break;

			case "serpentine staff":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1059661059843170354/serpentine_staff.png");
				message.channel.send("An silver staff with a green gem from Triem Sha. A serpent decorating it seems to covet the gem, its fangs glimmering in its wide stretched mouth that's poised to consume it. The gem will turn a blood red when brought close to a vessel or food containing poison, thus this staff is popular among the wealthy. \n\nOOC: Gain +2d6 to sorc attacks. Gain +2d6 to sorc heals.");
			break;

			case "mask of rage":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1105241141944791080/mask_of_rage.png");
				message.channel.send("A red mask decorated with golden spiders. When placed on your face, it fills you with an unspeakable rage towards someone, and can't be removed until the chosen victim dies, or the blood of the chosen victim falls upon it. It will try to run away when it has completed its task. \n\nOOC: Gain +4 to SORC and PHYS. You can't attack anyone except someone randomly chosen in the general vicinity.");
			break;

			case "box of greed 33":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1105241418517200927/boxofgreed.png");
				message.channel.send("A small box that demands a price in return for power. It will start asking for therins, then it will ask for blood, then for small animals, then for a sentient being's heart, then for a heart of one you love, then for your own heart. \n\nOOC: A character in possession of this box knows major light manipulation, creation, and sense for a span of time as long as they give it what it desires.");
			break;

			case "pale dagger":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1001627813109051482/sinddagger.png");
				message.channel.send("If you attack somebody with this dagger using magic or physical attacks, and manage to do more than 4 damage, they will disappear. The dagger beckons for you to stab yourself. \n\nOOC: While wielded against another, this dagger lowers PHYS and SORC to 2, but raises BLS to 8. If you do more than 4 damage, flip a coin. If heads, the enemy disappears, if tails, you stab yourself and disappear.");
			break;

			case "moon charm":
				await message.channel.send("https://cdn.discordapp.com/attachments/660996491435048991/1112017417216987226/Illustration57_18.png");
				message.channel.send("Is it a moon? Is it a donut? Kind of looks like a shrimp? Can’t tell what it really is but the iron used to make this bracelet charm is old and aged from exposure to water.. When you hold this charm close, you can almost hear the sound of your loved one nagging at you. A collectible from the Siren's Song Quest Series.");
			break;

			case "sweet dreams":
				await message.channel.send("https://cdn.discordapp.com/attachments/660996491435048991/1112017610679263364/Illustration57_19.png");
				message.channel.send("One of Fei's specialty dishes. It is an ice cream, cupped in frozen glazed sugar on top of more edible white sugar balls. Made carefully with care and detail.. Eating it will give you a sugar rush that makes it hard to sleep, so you won't have to see your nightmares so soon. \n\nOOC: Eating this grants you with +1 PHYS for the period of 1 battle.");
			break;

			case "map of remira flin":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1113707479616991263/cave_sind_labyrinth_labeled.png");
				message.channel.send("Remira Flin's map of Sindariel's Caves. Hopefully it's useful to any aspiring cartographers. This is a reward for being the first to map out the caves.");
			break;

			case "potion of fickle fortune":
				await message.channel.send("<:ficklefortune:1116872804252524645>");
				message.channel.send("This potion either tastes like your very favorite drink, or the worst thing you've ever tasted. There are tales of this strange concoction being found in times of need, and then either giving very good luck, or very bad luck. \n\nOOC: Flip a coin when drinking this potion. On heads, gain 3 successes in whatever skill roll you desire, on tails lose 3 successes.");
			break;

			case "map of remira flin 2":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1116981845922418698/streiyas_labyrinth.png");
				message.channel.send("Remira Flin's map of Streiya's Labyrinth. Hopefully it's useful to any aspiring cartographers. This is a reward for being the first to map out the labyrinth");
			break;

			case "blade of the lion":
				await message.channel.send("https://cdn.discordapp.com/attachments/653899059978960916/1116988642532020254/blade_of_the_lion.png");
				message.channel.send("A blade blessed with new strength from Bao Rha. \n\nOOC: Gain +2d6 to physical and sorcery attacks. Gain +1 VIT as long as this weapon is equipped.");
			break;

			case "infected spore":
				await message.channel.send("https://cdn.discordapp.com/attachments/635918253511933953/1117599245474734131/infected_spore.gif");
				message.channel.send("Your character has inhaled some strange spores, though they're likely unaware of this fact. They will start to occasionally experience vivid hallucinations, and are unwilling to leave Raehn though they aren't sure why. Some hallucinations are able to be seen by multiple people as long as the other people are also infected (it's up to you whether the particular halluciation is one of these multiple people ones.). Your character will remain infected until stated otherwise.");
			break;

			case "honorable potato":
				await message.channel.send("https://images.unsplash.com/photo-1617130094141-532436117aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80");
				message.channel.send("This potato has a dignified air to it.");
			break;

			case "clockwork trinket":
				await message.channel.send("<a:clockworktrinket:1117635328065425408>");
				message.channel.send("An object that moves around from the clockwork workshop, made after giving a musical score to the organ, and pouring a healing potion on the object of choice.\n\nRecipe: Musical Score x1, Healing Potion x1");
			break;

			case "quill of emergence":
				await message.channel.send("https://cdn.discordapp.com/attachments/1117967203044691968/1119531809298985110/Quill_of_Emergence.png");
				message.channel.send("In the beginning, there were wings. Wings that are with the one and only Alorel, and Wings that are Alorel's. The irony that this feather may have come from a bird is not lost on you. Regardless, it's a hefty quill, durable, and it will continue to write until the end of your journey.");
			break;

			case "golden ink":
				await message.channel.send("https://cdn.discordapp.com/attachments/1117967203044691968/1119531851040694303/Golden_Ink.png");
				message.channel.send("It's rather fancy! Good for titles and headers but it surprisingly writes clear and well despite its golden consistency, and you needn't use much in order to write.\n\nOOC: Gain +1 LORE for one skill roll.");
			break;

			case "red ink":
				await message.channel.send("https://cdn.discordapp.com/attachments/1117967203044691968/1119531958465220628/Red_Ink.png");
				message.channel.send("Ink like bright & beautiful ichor. Though it is definitely not blood, its consistency seems to be similar to the vital fluid. Nevertheless, it makes your writing look a little fancy.\n\nOOC: Gain +1 BLESS for one battle.");
			break;

			case "black ink":
				await message.channel.send("https://cdn.discordapp.com/attachments/1117967203044691968/1119532048730832937/Black_Ink.png");
				message.channel.send("Rich, black ink that is a bit more vibrant than common ink. You can write endless notes and letters with this ink and it'll still remain full for the longest time!\n\nOOC: Gain +1 ACA for one skill roll.");
			break;
			
			case "beautiful cloud":
				await message.channel.send("https://cdn.discordapp.com/attachments/660996491435048991/1119721985128272042/earring.png");
				message.channel.send("```Earring: Beautiful Cloud```\n\nHalf of pair. This earring represents the bond between a Master and their Vassal. \nThe blood of the covenant is thicker than the water of the womb.");
			break;

			case "old coin":
				await message.channel.send("<:oldcoin:1127612572439412836>");
				message.channel.send("An old shining coin from many years ago. Many collectors desire it. \n\nOOC: Trade this in for 50,000 therins, keep it as a memento, or trade it IC for something expensive.");
			break;

			case "ninevia":
				await message.channel.send("<:PixelShip:1127612634448011384>");
				message.channel.send("A boat that can carry up to 8 people and fly. There's weaponry on it that can repel rocs.");
			break;

			case "oceans glory":
				await message.channel.send("<:oceansglory:1127612701741428898>");
				message.channel.send("A ring with a blue gem that looks like a piece of the ocean. This treasure is famed in Nirios, and was stolen long ago from a Niriosian hero. It's rumored that the one who returns with it will end up being another hero of Nirios. \n\nOOC: Current effects unknown.");
			break;

			case "crystal flute":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1128916819105820702/crystalflute.png");
				message.channel.send("A flute carved from a crystal shard and fashioned on the end of a string.  Despite its smaller size still manages to be playable. Though something about it, perhaps its gentle glow, makes you believe that’s not its true intent.\n\nOOC: Choose one effect:\n\n1. When your character falls to 0 VIT, you can choose to use this as a reaction to heal them for 3 VIT. \n\n2. Resist a magical effect once. The magical effect can range from a curse, a teleportation, a status debuff to an illusion.\n\nOnce one of these effects happen, the flute loses its power never to be used again.");
			break;

			case "syvex":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1142318695234949231/cavpl_syvex.png");
				message.channel.send("Those with lore of 4 or higher can idenitify this plant. The syvex has a red roots that look akin to veins. When squeezed, a red clear liquid beads on the stem. It can enhance mental focus. \n\nThis plant can be used in crafting.");
			break;

			case "puffru":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1142318694987477032/cavpl_puffru.png");
				message.channel.send("\n\nThose with lore of 4 or higher can identify this plant. The puffru has soft puffs on it that release a pollen that's sweet to the taste.This plant can be used in crafting.");
			break;

			case "myltyl":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1142318694719033505/cavpl_myltyl.png");
				message.channel.send("Those with lore of 4 or higher can identify this plant. This plant grows from a bulb that tastes good in cooking, and is said to give you energy.\n\nThis plant can be used in crafting.");
			break;

			case "estreyr":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1142318693934715041/cavpl_estreyr.png");
				message.channel.send("Those with lore of 4 or higher can identify this plant. Estreyr can only grow in places with a lot of ambient magic. \n\nThis plant can be used in crafting.");
			break;

			case "grevo":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1142318694509334639/cavpl_grevo.png");
				message.channel.send("Those with lore of 4 or higher can identify this mushroom. Grevo only grows where it's darkest, but there are those that insist it helps when trying to make a connection to your magical potential. \n\nThis plant can be used in crafting.");
			break;

			case "frakus":
				await message.channel.send("https://cdn.discordapp.com/attachments/1005698682382975048/1142318694186364988/cavpl_frakus.png");
				message.channel.send("Those with lore of 4 or higher can identify this mushroom. Frakus is edible and good and cooking, and when distilled, is said to help promote muscle growth. \n\nThis plant can be used in crafting.");
			break;
			
			
			
			
			
			
			

			default:
				const itemName = await Items.findOne({ name: commandArgs }).collation( { locale: 'en', strength: 2 } );

				if (itemName) {
					await message.channel.send(itemName.image);
					message.channel.send(itemName.description);
				}

				else {
					return message.channel.send("I don't recognize that item.");
				}

				


		}

	},
};
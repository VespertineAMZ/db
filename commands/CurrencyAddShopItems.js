//this command is called 'addshopitem', but in truth it is all items that users will run into, and they could be added to a shop as desired. 

const ShopItem = require('./models/ShopItemsSchema');

module.exports = {
	name: 'addshopitem',
	description: 'This will manually add or update new items to the mongodb database, and set its default values.',
	async execute(message, args) {

		try {	

		const shop = [	
			
		/*
			ShopItem.updateOne(
			    {name: "Test1"},
			    { 
			    	$set: {item_id: 1,  emoji: ":one:" , cost: 1, description: "misc"} //name is displayed name, item id is a unique identifier, emoji is for visual purposes, cost is if I wish to sell it in a coded shop, description lets me categorize it so users can filter by the description tag 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Test2"},
			    { 
			    	$set: {item_id: 2,  emoji: ":two:" , cost: 2, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Test3"},
			    { 
			    	$set: {item_id: 3,  emoji: ":three:" , cost: 5, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Key"},
			    { 
			    	$set: {item_id: 4,  emoji: "<:oldkey:724827901975068754>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Bottle of Something"},
			    { 
			    	$set: {item_id: 5,  emoji: "<:purplepotion:727729175397400577>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stone 1"},
			    { 
			    	$set: {item_id: 6,  emoji: "<:stone1:728798037622784061>" , cost: 9999999, description: "stone"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stone 2"},
			    { 
			    	$set: {item_id: 7,  emoji: "<:stone2:728798088096907265>" , cost: 9999999, description: "stone"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stone 3"},
			    { 
			    	$set: {item_id: 8,  emoji: "<:stone3:728798139108163585>" , cost: 9999999, description: "stone"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stone 4"},
			    { 
			    	$set: {item_id: 9,  emoji: "<:stone4:728798171559624828>" , cost: 9999999, description: "stone"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Runtiri Flower"},
			    { 
			    	$set: {item_id: 10,  emoji: "<:healingflower:730535644396257290>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Musical Score"},
			    { 
			    	$set: {item_id: 11,  emoji: "<:musicalscore:730647689695592509>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Blessed Pendant"},
			    { 
			    	$set: {item_id: 12,  emoji: "<:blessedpendant:737550245671731201>" , cost: 9999999, description: "accessory"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Bowtie"},
			    { 
			    	$set: {item_id: 13,  emoji: "<:ribbon:>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Acorn"},
			    { 
			    	$set: {item_id: 14,  emoji: "<:acorn:740499858338873394>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Small Encounter"},
			    { 
			    	$set: {item_id: 15,  emoji: "<:Smallbeasticon:744099756753682513>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Large Encounter"},
			    { 
			    	$set: {item_id: 16,  emoji: "<:Largebeasticon:744099785161572423>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Rusty Dagger"},
			    { 
			    	$set: {item_id: 17,  emoji: "<:rustydagger:750597038651211837>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Tear"},
			    { 
			    	$set: {item_id: 18,  emoji: "<:Tear:751941309513596939>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

		/*	ShopItem.updateOne(
			    {name: "Dew of the Frostmaiden"},
			    { 
			    	$set: {item_id: 19,  emoji: "<:dewofthefrostmaiden:753804369975050260>" , cost: 9999999, description: "none"} 
			    },
			    {upsert: true}
			), */

			/*

			ShopItem.updateOne(
			    {name: "Dew of the Frostmaiden"},
			    { 
			    	$set: {item_id: 20,  emoji: "<:dewofthefrostmaiden:753804369975050260>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			), 

			ShopItem.updateOne(
			    {name: "Stone Sun"},
			    { 
			    	$set: {item_id: 21,  emoji: "<:stonesun:756363708145336330>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Souvenir"},
			    { 
			    	$set: {item_id: 22,  emoji: "<:souvenir:757716925106356339>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Cursed Ring"},
			    { 
			    	$set: {item_id: 23,  emoji: "<:cursedring:763236725551267862>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Mount Whistle"},
			    { 
			    	$set: {item_id: 24,  emoji: "<:Mountwhistle:784553116237299772>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Healing Potion"},
			    { 
			    	$set: {item_id: 25,  emoji: "<:healingpotion:819424286468603915>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Magic Potion"},
			    { 
			    	$set: {item_id: 26,  emoji: "<:bluepotion:862097941812609027>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Gem of Knowledge"},
			    { 
			    	$set: {item_id: 27,  emoji: "<:gemofknowledge:861710881851047956>" , cost: 9999999, description: "accessory"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Earring of Disguise"},
			    { 
			    	$set: {item_id: 28,  emoji: "<:EarringofDisguise:862079939460464642>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			

			/////SHOP ITEMS START HERE//////

			ShopItem.updateOne(
			    {name: "Satchels Satchel"},
			    { 
			    	$set: {item_id: 29,  emoji: "<:satchelsatchel:726629563244740840>" , cost: 1, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Peach Wine"},
			    { 
			    	$set: {item_id: 30,  emoji: "<:peachwine:724162630268223538>" , cost: 1, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Pink Potion"},
			    { 
			    	$set: {item_id: 31,  emoji: "<:Pinkpotion:724162724543725629>" , cost: 5, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "XP Potion"},
			    { 
			    	$set: {item_id: 32,  emoji: "<a:xppotion:726977441138212954>" , cost: 5, description: "potion"} 
			    },
			    {upsert: true}
			),


			///WEAPONS HERE//////////

			ShopItem.updateOne(
			    {name: "Miku Guqin"},
			    { 
			    	$set: {item_id: 33,  emoji: "<:mikuguqin:726616441213681686>" , cost: 10, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Rusty Sword"},
			    { 
			    	$set: {item_id: 34,  emoji: "<:rustysword:726633849043288184>" , cost: 10, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Old Wand"},
			    { 
			    	$set: {item_id: 35,  emoji: "<:oldwand:726641875724796015>" , cost: 10, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Bow of Nature"},
			    { 
			    	$set: {item_id: 36,  emoji: "<:bowofnature:862442062833123328>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Harp of Crystal"},
			    { 
			    	$set: {item_id: 37,  emoji: "<:harpofcrystal:862444237890650140>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Staff of Light"},
			    { 
			    	$set: {item_id: 38,  emoji: "<:staffoflight:862442188616892456>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Shield of Ice"},
			    { 
			    	$set: {item_id: 39,  emoji: "<:shieldofice:862442269205200927>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Sword of Flame"},
			    { 
			    	$set: {item_id: 40,  emoji: "<:swordofflame:862442315934728252>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Nakaclocker"},
			    { 
			    	$set: {item_id: 41,  emoji: "<:nakaclocker:862874596045750282>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Daggers of Shadow"},
			    { 
			    	$set: {item_id: 42,  emoji: "<:twindaggersofshadow:991911046124158976>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Bone Lyre"},
			    { 
			    	$set: {item_id: 43,  emoji: "<:bonelyre:991908513334968340>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Spear of the Storm"},
			    { 
			    	$set: {item_id: 44,  emoji: "<:spearofthestorm:994079636394872912>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Zephyr Fan"},
			    { 
			    	$set: {item_id: 45,  emoji: "<:zephyrfan:994084402890014810>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),



			ShopItem.updateOne(
			    {name: "Seal Plush"},
			    { 
			    	$set: {item_id: 46,  emoji: "<:sealplush:997321141901328406>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Sword"},
			    { 
			    	$set: {item_id: 47,  emoji: "<:finesword:1001624699257765898>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Barbed Whip"},
			    { 
			    	$set: {item_id: 48,  emoji: "<:barbedwhip:1001655857240616980>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Dagger"},
			    { 
			    	$set: {item_id: 49,  emoji: "<:finedagger:1001639028254322779>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Spear"},
			    { 
			    	$set: {item_id: 50,  emoji: "<:finespear:1001639066405720185>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Axe"},
			    { 
			    	$set: {item_id: 51,  emoji: "<:fineaxe:1001639196928258200>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Wand"},
			    { 
			    	$set: {item_id: 52,  emoji: "<:finewand:1001642143611359244>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Burnished Handbell"},
			    { 
			    	$set: {item_id: 53,  emoji: "<:burnishedhandbell:1001650477424984064>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Old Rebec"},
			    { 
			    	$set: {item_id: 54,  emoji: "<:oldrebec:1001650535662899312>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Staff"},
			    { 
			    	$set: {item_id: 55,  emoji: "<:finestaff:1001655835430223882>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Lemon Scented Dagger"},
			    { 
			    	$set: {item_id: 56,  emoji: "<:lemonscenteddagger:1001639094268473465>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Semi Used Fantablack"},
			    { 
			    	$set: {item_id: 57,  emoji: "<:blackcrayon:1002485037289181214>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Lore Potion"},
			    { 
			    	$set: {item_id: 58,  emoji: "<:purplepotion:727729175397400577>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Academics Potion"},
			    { 
			    	$set: {item_id: 59,  emoji: "<a:cyanpotion:1116858315612369006>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Sorcery Potion"},
			    { 
			    	$set: {item_id: 60,  emoji: "<a:bluepotion:1116857400583004222>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Vitality Potion"},
			    { 
			    	$set: {item_id: 61,  emoji: "<a:greenpotion:1116856889649680455>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Initiative Potion"},
			    { 
			    	$set: {item_id: 62,  emoji: "<:potionsilver:1003487982000541767>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Physical Potion"},
			    { 
			    	$set: {item_id: 63,  emoji: "<a:goldpotion:1116857852548632596>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Red Rose Bookmark"},
			    { 
			    	$set: {item_id: 64,  emoji: "<:redrosebookmark:1005390672997650492>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Blue Rose Bookmark"},
			    { 
			    	$set: {item_id: 65,  emoji: "<:bluerosebookmark:1005390828161740942>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Yellow Rose Bookmark"},
			    { 
			    	$set: {item_id: 66,  emoji: "<:yellowrosebookmark:1005390772796932116>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Red Wildflower Bookmark"},
			    { 
			    	$set: {item_id: 67,  emoji: "<:redwildflowerbookmark:1005390909749329920>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Blue Wildflower Bookmark"},
			    { 
			    	$set: {item_id: 68,  emoji: "<:bluewildflowerbookmark:1005390973842505789>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Yellow Wildflower Bookmark"},
			    { 
			    	$set: {item_id: 69,  emoji: "<:yellowwildflowerbookmark:1005390944251686942>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Floral Perfume"},
			    { 
			    	$set: {item_id: 70,  emoji: "<:floralperfume:1005391026925621308>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Daycare Voucher"},
			    { 
			    	$set: {item_id: 71,  emoji: "<:DaycareVoucher:1005936295710826610>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Grand Prize Voucher"},
			    { 
			    	$set: {item_id: 72,  emoji: "<:GrandPrizeVoucher:1005936444348584069>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Richters Sword"},
			    { 
			    	$set: {item_id: 73,  emoji: "<:richterssword:1005698926244007986>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Almond Cookie"},
			    { 
			    	$set: {item_id: 74,  emoji: "<:almondcookie:1006398880037994616>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Crispy Chicken"},
			    { 
			    	$set: {item_id: 75,  emoji: "<:sadtendy:1007425864880885893>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Silver Bell of Devotion"},
			    { 
			    	$set: {item_id: 76,  emoji: "<:silverbellofdevotion:1007550222500634644>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Gold Bell of Devotion"},
			    { 
			    	$set: {item_id: 77,  emoji: "<:bellgold:1007550915731009568>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Pink Bell of Devotion"},
			    { 
			    	$set: {item_id: 78,  emoji: "<:bellpink:1007550931153473566>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stamp of the Meadows"},
			    { 
			    	$set: {item_id: 79,  emoji: "<:stamp:1007577508687908864>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Chakram"},
			    { 
			    	$set: {item_id: 80,  emoji: "<:chakram:1009219676104032286>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Bow"},
			    { 
			    	$set: {item_id: 81,  emoji: "<:finebow:1009219713433337937>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Crystal Focus"},
			    { 
			    	$set: {item_id: 82,  emoji: "<:crystalfocus:1009219771880976414>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Tome of Flames"},
			    { 
			    	$set: {item_id: 83,  emoji: "<:tomeofflames:1009219857541255289>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Fine Halberd"},
			    { 
			    	$set: {item_id: 84,  emoji: "<:halberd:1009219939850268742>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Ice Rapier"},
			    { 
			    	$set: {item_id: 85,  emoji: "<:icerapier:1009219978865684610>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Kusarigama"},
			    { 
			    	$set: {item_id: 86,  emoji: "<:kusarigama:1009220054182789210>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Scythe"},
			    { 
			    	$set: {item_id: 87,  emoji: "<:scythe:1009220077431816363>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Glamour Charm"},
			    { 
			    	$set: {item_id: 88,  emoji: "<:maskingamulet:1009239088018231387>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Flower Lapel"},
			    { 
			    	$set: {item_id: 89,  emoji: "<:lapel:1009678739526918144>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Strange Lily"},
			    { 
			    	$set: {item_id: 90,  emoji: "<:lily:1012145943535165510>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Cosmic Soda"},
			    { 
			    	$set: {item_id: 91,  emoji: "<:cosmicsoda:1016767054285643807>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stamp of Old Day Rinnea"},
			    { 
			    	$set: {item_id: 92,  emoji: "<:Valentine_stamp:1016767035600019606>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Millenial Puzzle"},
			    { 
			    	$set: {item_id: 93,  emoji: "<:millenialpuzzle:1027450976396902421>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Obsidian Slate"},
			    { 
			    	$set: {item_id: 94,  emoji: "<:obsidianplate:1027450995774603355>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Memories of Severance"},
			    { 
			    	$set: {item_id: 95,  emoji: "<:mosscissors:1029990690517696593>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Stamp of the Grand Ballroom"},
			    { 
			    	$set: {item_id: 96,  emoji: "<:stampofthegrandballroom:1029991506913787925>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Clown Doll"},
			    { 
			    	$set: {item_id: 97,  emoji: "<:clowndoll:1036061244240691342>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Closing Key"},
			    { 
			    	$set: {item_id: 98,  emoji: "<:closingKey:1040186480213102652>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Opening Key"},
			    { 
			    	$set: {item_id: 99,  emoji: "<:openingKey:1040186513503297557>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Green Egg"},
			    { 
			    	$set: {item_id: 100,  emoji: "<a:greenegg:722729179581382657>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Shamshir"},
			    { 
			    	$set: {item_id: 101,  emoji: "<:shamshir:1059660782280921118>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Serpentine Staff"},
			    { 
			    	$set: {item_id: 102,  emoji: "<:serpentinestaff:1059660837868032050>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Box of Greed 33"},
			    { 
			    	$set: {item_id: 103,  emoji: "<:boxofgreed:1105243431544033289>" , cost: 9999999, description: "accessory"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Mask of Rage"},
			    { 
			    	$set: {item_id: 104,  emoji: "<:maskofrage:1105243394592231544>" , cost: 9999999, description: "accessory"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Pale Dagger"},
			    { 
			    	$set: {item_id: 105,  emoji: "<:paledagger:1105243509486784553>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Moon Charm"},
			    { 
			    	$set: {item_id: 106,  emoji: "<:mooncharm:1112021211409563698>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			
			ShopItem.updateOne(
			    {name: "Sweet Dreams"},
			    { 
			    	$set: {item_id: 107,  emoji: "<:sweetdreams:1112021262760415263>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Map of Remira Flin"},
			    { 
			    	$set: {item_id: 108,  emoji: ":map:" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Blessings Potion"},
			    { 
			    	$set: {item_id: 109,  emoji: "<a:brightpotion:1116859251609043017>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Potion of Fickle Fortune"},
			    { 
			    	$set: {item_id: 110,  emoji: "<:ficklefortune:1116872804252524645>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Gem of Imagination"},
			    { 
			    	$set: {item_id: 111,  emoji: "<:gemofimagination:1116879534550175856>" , cost: 9999999, description: "accessory"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Map of Remira Flin 2"},
			    { 
			    	$set: {item_id: 112,  emoji: ":map:" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Blade of the Lion"},
			    { 
			    	$set: {item_id: 113,  emoji: "<:bladeofthelion:1116988746861133824>" , cost: 9999999, description: "weapon"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Honorable Potato"},
			    { 
			    	$set: {item_id: 114,  emoji: ":potato:" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Infected Spore"},
			    { 
			    	$set: {item_id: 115,  emoji: "<a:infectedspore:1117599346645549136>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Clockwork Trinket"},
			    { 
			    	$set: {item_id: 116,  emoji: "<a:clockworktrinket:1117635328065425408>" , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			), 

			ShopItem.updateOne(
			    {name: "Quill of Emergence"},
			    { 
			    	$set: {item_id: 117,  emoji: "<:Quill_of_Emergence:1119537395545677906>" , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Golden Ink"},
			    { 
			    	$set: {item_id: 118,  emoji: "<:Golden_Ink:1119537379754123346>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Red Ink"},
			    { 
			    	$set: {item_id: 119,  emoji: "<:Red_Ink:1119537341531439184>" , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Black Ink"},
			    { 
			    	$set: {item_id: 120,  emoji: "<:Black_Ink:1119537362196770878> " , cost: 9999999, description: "potion"} 
			    },
			    {upsert: true}
			), 
			ShopItem.updateOne(
			    {name: "Beautiful Cloud"},
			    { 
			    	$set: {item_id: 121,  emoji: "<:earring:1119723127539249272> " , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Old Coin"},
			    { 
			    	$set: {item_id: 122,  emoji: "<:oldcoin:1127612572439412836> " , cost: 9999999, description: "misc"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Ninevia"},
			    { 
			    	$set: {item_id: 123,  emoji: "<:PixelShip:1127612634448011384> " , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Oceans Glory"},
			    { 
			    	$set: {item_id: 124,  emoji: "<:oceansglory:1127612701741428898> " , cost: 9999999, description: "accessory"} 
			    },
			    {upsert: true}
			), 


			ShopItem.updateOne(
			    {name: "Crystal Flute"},
			    { 
			    	$set: {item_id: 125,  emoji: "<:crystalflute:1128916097807163432> " , cost: 9999999, description: "magic"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Syvex"},
			    { 
			    	$set: {item_id: 126,  emoji: "<:syvex:1142316446156869724> " , cost: 9999999, description: "plant"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Puffru"},
			    { 
			    	$set: {item_id: 127,  emoji: "<:puffru:1142316443334098955> " , cost: 9999999, description: "plant"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Myltyl"},
			    { 
			    	$set: {item_id: 128,  emoji: "<:myltyl:1142316442163888169>" , cost: 9999999, description: "plant"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Estreyr"},
			    { 
			    	$set: {item_id: 129,  emoji: "<:estreyr:1142316438087024670>" , cost: 9999999, description: "plant"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Grevo"},
			    { 
			    	$set: {item_id: 130,  emoji: "<:grevo:1142316441157259355>" , cost: 9999999, description: "plant"} 
			    },
			    {upsert: true}
			),

			ShopItem.updateOne(
			    {name: "Frakus"},
			    { 
			    	$set: {item_id: 131,  emoji: "<:frakus:1142316440033181706>" , cost: 9999999, description: "plant"} 
			    },
			    {upsert: true}
			),*/





			]; //UPSERTS END

			await Promise.all(shop);
			message.channel.send("Items successfully updated.");

			}//end try
		catch (err) {
		return message.reply('Something went wrong with adding an item.');
		console.log(err)
		}
			

	},
};
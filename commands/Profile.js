const Discord = require("discord.js");
const Profiles = require('./models/ProfilesSchema');

module.exports = {
	name: 'profile',
	description: 'Display a character profile',
	aliases: ['char', 'charcard', 'chara'],
	async execute(message, args) {


		const commandArgs = args.join(" ");
		const charName = commandArgs;

		let page = 1;

		let emoji = '☀️'

		let level = 1;

		let xpMax;

		const progressBar = (value, maxValue, size) => { //make a progress bar for xp.
		  const percentage = value / maxValue; 
		  const progress = Math.round((size * percentage)); 
		  const emptyProgress = size - progress; 
 
	
		  const progressText = '✧'.repeat(progress);
		  const emptyProgressText = '—'.repeat(emptyProgress); 
		  

		  const bar = '`[' + progressText + emptyProgressText + ']' + value + '/' + maxValue + '`'; // Creating the bar
		  return bar;
		};


		
		const profile = await Profiles.findOne({ name: charName }).collation( { locale: 'en', strength: 2 } );
		if (profile) {

			////EMOJI REP SYMBOLS
			if (profile.reputation > 10) {
				emoji = '🔱'
			}
			else if (profile.reputation < -10) {
				emoji = '⚜️'
			}
			else {
				emoji = '⚖️'
			}//end emoji else

			//////LEVEL UP IF STATEMENTS

			if (profile.experience < 10) {
				 level = 1;
				 xpMax = 10;
				}//end if 1

			else if (profile.experience >= 10 && profile.experience < 20) {
				level = 2;
				xpMax = 20;
				}//end if 2

			else if (profile.experience >= 20 && profile.experience < 40) {
				level = 3;
				xpMax = 40;
				}//end if 3

			else if (profile.experience >= 40 && profile.experience < 80) {
				level = 4;
				xpMax = 80;
				}//end if 4	

			else if (profile.experience >= 80 && profile.experience < 160) {
				level = 5;
				xpMax = 160;
				}//end if 5	

			else if (profile.experience >= 160 && profile.experience < 320) {
				level = 6;
				xpMax = 320;
				}//end if 6

			else if (profile.experience >= 320 && profile.experience < 640) {
				level = 7;
				xpMax = 640;
				}//end if 7

			else if (profile.experience >= 640 && profile.experience < 1280) {
				level = 8;
				xpMax = 1280;
				}//end if 8		

			else if (profile.experience >= 1280 && profile.experience < 2560) {
				level = 9;
				xpMax = 2560;
				}//end if 9

			else if (profile.experience >= 2560 && profile.experience < 4020) {
				level = 10;
				xpMax = 4020;
				}//end if 10

			else if (profile.experience >= 4020 && profile.experience < 6030) {
				level = 11;
				xpMax = 6030;
				}//end if 11	

			else if (profile.experience >= 6030 && profile.experience < 9045) {
				level = 12;
				xpMax = 9045;
				}//end if 12

			else if (profile.experience >= 9045 && profile.experience < 13550) {
				level = 13;
				xpMax = 13550;
				}//end if 13

			else if (profile.experience >= 13550 && profile.experience < 20325) {
				level = 14;
				xpMax = 20325;
				}//end if 14	

			else if (profile.experience >= 20325 && profile.experience < 30500) {
				level = 15;
				xpMax = 30500;
				}//end if 15

			else if (profile.experience >= 30500 && profile.experience < 45750) {
				level = 16;
				xpMax = 45750;
				}//end if 16	

			else if (profile.experience >= 45750 && profile.experience < 68625) {
				level = 17;
				xpMax = 68625;
				}//end if 17

			else if (profile.experience >= 68625 && profile.experience < 103000) {
				level = 18;
				xpMax = 103000;
				}//end if 18

			else if (profile.experience >= 103000 && profile.experience < 154500) {
				level = 19;
				xpMax = 154500;
				}//end if 19

			else if (profile.experience >= 154500) {
				level = 20;
				xpMax = 154500;
				}//end if 20

			else {
				level = 0;
				xpMax = 10;
			}//end else

				//////END LEVEL UP IF STATEMENTS							

       	let embed = new Discord.EmbedBuilder()
            .setColor('#374df0')
            .setTitle("⋄⟢ "  + profile.name + " ⟣⋄")
            .setThumbnail(profile.image)

            //.addBlankField()
            .addFields(
            	{ name: '\u200B', value: '\u200B' },
				{ name: '⟢ Stats ⟣\n', value: `⋄Vitality: ${profile.vitality}  \n⋄Physical:  ${profile.physical}  \n⋄Sorcery:  ${profile.arcane} \n⋄Academics:  ${profile.academics}  \n⋄Lore: ${profile.lore} \n⋄Blessings:  ${profile.blessings}`, inline:true },
				{ name: '⟢ Magic ⟣', value: profile.magic, inline: true },
				{ name: '⟢ Reputation ⟣', value: `${emoji}  ${profile.reputation} ${emoji}` },
				{ name: '⟢ Exp ⋄ Level ⟣', value: `⋄ **XP:**  ${profile.experience}  ⋄ **LV:** ${level} ⋄\n${progressBar(profile.experience, xpMax, 17)}\n`, inline: true },
				{ name: '⟢ Skills ⟣', value: profile.skills },
				{ name: '\u200B', value: '\u200B' },

            )
            .setFooter({text:`Page ${page.toString()} of 3`});

			if(profile.description){
				embed.setDescription(profile.description);
			}

            let embed2 = new Discord.EmbedBuilder()
            .setColor('#374df0')
            .setTitle("⋄⟢ " + profile.name +" Magical Skills ⟣⋄")
            .setThumbnail(profile.image)
            .setDescription('\n' + profile.magical)
            .setFooter({text: `Page 2 of 3`});

            let embed3 = new Discord.EmbedBuilder()
            .setColor('#374df0')
            .setTitle("⋄⟢ " + profile.name +" Physical Skills ⟣⋄")
            .setThumbnail(profile.image)
            .setDescription('\n' + profile.physskills)
            .setFooter({text: `Page 3 of 3`});


           	return message.channel.send({ embeds: [embed] }).then(msg => {

			msg.react('◀️').then(r => {
				msg.react('▶️')

				// Filters
				const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
				const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

				const backwards = msg.createReactionCollector({filter: backwardsFilter,  time: 60000});
					
				const forwards = msg.createReactionCollector({filter: forwardsFilter, time: 60000});

				backwards.on('collect', r => {
					if (page === 1) {

						page === 3; 
						msg.edit({ embeds: [embed3] })

					}
					
					else if (page === 2) {
					page--;
					msg.edit({ embeds: [embed] });
					}

					else if (page === 3) {
					page--;
					msg.edit({ embeds: [embed2] });
					}
				})

				forwards.on('collect', r => {
					if (page === 3) {

						page === 1;
						msg.edit({ embeds: [embed] })

					}

					else if (page === 1) {
					page++;
					msg.edit({ embeds: [embed2] })
					}

					else if (page === 2) {
					page++;
					msg.edit({ embeds: [embed3] })
					}

				})

			})
		}) //end send pagination embed */

		//return message.channel.send({ embeds: [embed] });
		}//end if


		return message.reply(`Could not find character: ${charName}`);




	},
};
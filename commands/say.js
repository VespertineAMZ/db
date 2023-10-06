const Discord = require("discord.js")
const Say = require('./models/SaySchema');

module.exports = {
	name: 'say',
	description: 'bot says something you command it to with character images.',
    guildOnly: true,
    adminOnly: true,
	async execute(message, args) {


        const commandArgs = args.join(' ');
        const splitArgs = commandArgs.split(' ');
        var charName = splitArgs.shift();
        const charDialogue = splitArgs.join(' ');

        var nameHelp = ['eamon', 'vale', 'dg', 'ogasuka', 'choco', 'witchcat', 'ogizel', 'iwao', 'inanna', 'kimiko', 'kilaem', 'kizhumie', 'maddie', 'maurice', '?', 'bran', 'cleo', 'eliot', 'damien', 'liss', 'nakallas', 'nakjudge', 'nakrevenge', 'pen', 'russ', 'sylvain', 'velan', 'eval', 'phil', 'phelph', 'phileas', 'quasi', 'ethaine', 'sneerethaine', 'angryethaine', 'smileethaine', 'surpriseethaine', 'eli', 'ruith', 'trinn', 'ogfinni', 'enrok', 'ogferrum', 'oggael', 'spglade', 'lady', 'rosalia', 'rosaliap', 'rosalias', 'lynnia', 'lynnias', 'lynniap', 'matthias', 'gaelan', 'diora', 'dioras', 'cynthia', 'cynthias', 'crab', 'seren', 'stonehawk', 'camellia', 'mking', 'stranger', 'ireth', 'sevasha', 'zafir', 'aitress', 'weaver', 'say', 'ahmuhia', 'bejun', 'narseh', "waterheart", "pahmuhia", "turtle", "charlumin", "rogeesin", "kysheira", "cyraenan", "olnesia", "ivokas", "belkath", "evander", "rogeesine", "ocean", "fakian", "doll", "ilyara" ];
        
        nameHelp.sort();

        charName = charName.toLowerCase(); //hardcoded characters listed

        customSays = await Say.find({}, {title:1, _id:0}).sort([ ['title', 'ascending'] ]); //custom characters listed here.

        nameHelp.push("----Custom----", customSays.map(t => t.title).join('\n '));

        
        var pages = [];
        let page = 1;
        let pageOffset = 0;

        const count = nameHelp.length/20;

        
        for(i = 0; i < count; i ++) {

            const charString = nameHelp.slice(pageOffset, pageOffset+20);

            pages.push(charString.join('\r\n'));
            pageOffset += 20;

        }//end for




       

        let embed = new Discord.EmbedBuilder()
            .setColor('#000000')
            .setTitle('Narrator')
            .setThumbnail('https://i.imgur.com/FeCG204.png')
            //.addBlankField(true)

        if (charDialogue) {
            embed.setDescription(charDialogue.toString());
        }

        let embedList = new Discord.EmbedBuilder()
            .setColor('#000000')
            .setTitle('Say Commands')
            .setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`})
            .setDescription(pages[page-1].toString())



        switch(charName) {

            case 'quasi':
            
            message.delete().catch(O_o=>{}); 
            
            message.channel.send(charDialogue);

             break;


            case 'eamon':

            embed 
                .setColor('#7a0909')
                .setTitle('Eamon')
                .setThumbnail('https://i.imgur.com/S0MzNJ8.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'vale':

            embed 
                .setColor('#8b8686')
                .setTitle('Valerius')
                .setThumbnail('https://i.imgur.com/9e8OdSu.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'dg':

            embed 
                .setColor('#c36161')
                .setTitle('Daggerhound')
                .setThumbnail('https://i.imgur.com/TbRXJZw.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;


            case 'ogasuka':

            embed 
                .setColor('#000000')
                .setTitle('Asuka')
                .setThumbnail('https://i.imgur.com/q7eApae.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'choco':

            embed 
                .setColor('#000000')
                .setTitle('Caspien Horatio-Orwell Chevier Ozio')
                .setThumbnail('https://i.imgur.com/0vnsaQO.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;


            case 'witchcat':

            embed 
                .setColor('#000000')
                .setTitle('Caspien Horatio-Orwell Chevier Ozio')
                .setThumbnail('https://i.imgur.com/Wp8poXc.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'ogizel':

            embed 
                .setColor('#96a1f2')
                .setTitle('Izel')
                .setThumbnail('https://i.imgur.com/pckMpUH.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;


            case 'iwao':

            embed 
                .setColor('#5f44b8')
                .setTitle('Iwao')
                .setThumbnail('https://i.imgur.com/RIFgnTT.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;

            case 'ina':

            embed 
                .setColor('#1e0303')
                .setTitle('Inanna')
                .setThumbnail('https://cdn.discordapp.com/attachments/713833476570218597/1002085769332142183/MM_-_Inanna_Head.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;


            case 'inanna':

            embed 
                .setColor('#1e0303')
                .setTitle('Inanna')
                .setThumbnail('https://i.imgur.com/CATbgiw.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;




            case 'kimiko':

            embed 
                .setColor('#f91d1d')
                .setTitle('Kimiko Watanabe')
                .setThumbnail('https://i.imgur.com/VhT1dZ4.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'maddie':

            embed 
                .setColor('#6a658b')
                .setTitle('Maddie')
                .setThumbnail('https://i.imgur.com/deXyG7j.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'maurice':

            embed 
                .setColor('#6a658b')
                .setTitle('Maurice')
                .setThumbnail('https://i.imgur.com/xPVviJg.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case '?':

            embed 
                .setColor('#9e8ccc')
                .setTitle('???')
                .setThumbnail('https://i.imgur.com/KC9P2I0.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;




            case 'bran':

            embed 
                .setColor('#cc022a')
                .setTitle('Brandeis')
                .setThumbnail('https://i.imgur.com/tUBMSDs.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'eliot':

            embed 
                .setColor('#ae1515')
                .setTitle('Eliot')
                .setThumbnail('https://i.imgur.com/uVhnmEu.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'cleo':

            embed 
                .setColor('#f6aac9')
                .setTitle('Cleo')
                .setThumbnail('https://i.imgur.com/WqtHMZV.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'damien':

            embed 
                .setColor('#9a112c')
                .setTitle('Damien')
                .setThumbnail('https://i.imgur.com/JCeVuct.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'liss':

            embed 
                .setColor('#ffffff')
                .setTitle('Lissandra')
                .setThumbnail('https://i.imgur.com/AYTENt9.png')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'pen':

            embed 
                .setColor('#5b3165')
                .setTitle('Pendragon')
                .setThumbnail('https://i.imgur.com/2xJyryd.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'russ':

            embed 
                .setColor('#7a281a')
                .setTitle('Russell Spruce')
                .setThumbnail('https://i.imgur.com/h7AmCDP.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;


            case 'sylvain':

            embed 
                .setColor('#93b8f6')
                .setTitle('Sylvain')
                .setThumbnail('https://i.imgur.com/NAeHYPF.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'velan':

            embed 
                .setColor('#236f38')
                .setTitle('Velan')
                .setThumbnail('https://i.imgur.com/cBz7YZD.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'eval':

            embed 
                .setColor('#e14e1c')
                .setTitle('Eval')
                .setThumbnail('https://i.imgur.com/yyG6eeT.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;



            case 'phileas':

            embed 
                .setColor('#0064a1')
                .setTitle('Phileas')
                .setThumbnail('https://i.imgur.com/iqB3fp7.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

            break;



            case 'phil':

            embed 
                .setColor('#0064a1')
                .setTitle('Phileas')
                .setThumbnail('https://i.imgur.com/iqB3fp7.gif')

             message.delete().catch(O_o=>{}); 

             message.channel.send({ embeds: [embed] });

             break;
             

             case 'ttt':
             embed
                .setColor('#000000')
                .setTitle('Tony the Tiger')
                .setThumbnail('https://i.imgur.com/a0zQSuv.jpg')
            message.delete().catch(O_o=>{}); 

            message.channel.send({ embeds: [embed] });

            break;

            case 'ethaine':
             embed
                .setColor('#9F7287')
                .setTitle('Ethaine')
                .setThumbnail('https://i.imgur.com/z7yJXaY.png')
            message.delete().catch(O_o=>{}); 

            message.channel.send({ embeds: [embed] });

            break;

            case 'sneerethaine':
             embed
                .setColor('#9F7287')
                .setTitle('Ethaine')
                .setThumbnail('https://i.imgur.com/eZdMk3L.png')
            message.delete().catch(O_o=>{}); 

            message.channel.send({ embeds: [embed] });

            break;  

            case 'madethaine':
             embed
                .setColor('#9F7287')
                .setTitle('Ethaine')
                .setThumbnail('https://i.imgur.com/rmA0UHu.png')
            message.delete().catch(O_o=>{}); 

            message.channel.send({ embeds: [embed] });

            break;   

            case 'smileethaine':
             embed
                .setColor('#9F7287')
                .setTitle('Ethaine')
                .setThumbnail('https://i.imgur.com/V8xVnPB.png')
            message.delete().catch(O_o=>{}); 

            message.channel.send({ embeds: [embed] });

            break;   

            case 'shockethaine':
             embed
                .setColor('#9F7287')
                .setTitle('Ethaine')
                .setThumbnail('https://i.imgur.com/f9rW7kk.png')
            message.delete().catch(O_o=>{}); 

            message.channel.send({ embeds: [embed] });

            break; 

            case 'helpethaine':    
                message.channel.send("ethaine, sneerethaine, madethaine, smileethaine, shockethaine");

            break; 

            case 'satchel':

            embed
              
                .setTitle('Satchel')
                .setThumbnail('https://i.imgur.com/DZepvc4.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'edgar':

            embed
                .setColor('#7a0505')
                .setTitle('Edgar')
                .setThumbnail('https://i.imgur.com/WO7Fmwi.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'cygnus':

            embed
                .setColor('#FFDB55')
                .setTitle('Cygnus')
                .setThumbnail('https://i.imgur.com/hvXRYRx.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'shikra':

            embed
                .setColor('#0ac185')
                .setTitle('Shikra')
                .setThumbnail('https://i.imgur.com/FPu7y7j.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 


            case 'kael':

            embed
                .setColor('#5da7fb')
                .setTitle('Kael')
                .setThumbnail('https://i.imgur.com/u63TxYD.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'guard':

            embed
                .setColor('#ffffff')
                .setTitle('Generic Guard')
                .setThumbnail('https://i.imgur.com/XaWTfzF.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 


            case 'gr':

            embed
                .setColor('#ffffff')
                .setTitle('Guarden Ramsay')
                .setThumbnail('https://i.imgur.com/X6K0Lo4.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'glade':

            embed
                .setColor('#367a4f')
                .setTitle('Glade')
                .setThumbnail('https://i.imgur.com/BdM6387.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'spglade':

            embed
                .setColor('#367a4f')
                .setTitle('Glade')
                .setThumbnail('https://cdn.discordapp.com/attachments/713833476570218597/824824653037830204/Glade_spring.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 


            case 'mikula':

            embed
                .setColor('#ad74ce')
                .setTitle('???')
                .setThumbnail('https://i.imgur.com/bhGHpma.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'nyahite':

            embed
                .setColor('#f2bb0e')
                .setTitle('Nyahite')
                .setThumbnail('https://i.imgur.com/9QyVSgu.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 


            case 'rat':

            embed
                .setColor('#636466')
                .setTitle('Rat')
                .setThumbnail('https://i.imgur.com/03Obkiq.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'tom':

            embed
                .setColor('#636466')
                .setTitle('Tom')
                .setThumbnail('https://i.imgur.com/SQJduYA.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 


            case 'jerry':

            embed
                .setColor('#636466')
                .setTitle('Jerry')
                .setThumbnail('https://i.imgur.com/3qqVOce.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'remy':

            embed
                .setColor('#636466')
                .setTitle('Remy')
                .setThumbnail('https://i.imgur.com/Z9TZZEf.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'bert':

            embed
                .setColor('#636466')
                .setTitle('Bert')
                .setThumbnail('https://i.imgur.com/bGIEdKD.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'mert':

            embed
                .setColor('#636466')
                .setTitle('Mert')
                .setThumbnail('https://i.imgur.com/kJPkV8Y.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'luke':

            embed
                .setColor('#636466')
                .setTitle('Luke')
                .setThumbnail('https://i.imgur.com/a4K3nEK.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'mickey':

            embed
                .setColor('#636466')
                .setTitle('Mickey')
                .setThumbnail('https://i.imgur.com/BvghMse.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'chuck':

            embed
                .setColor('#636466')
                .setTitle('Mickey (?)')
                .setThumbnail('https://i.imgur.com/Ry9QvyL.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'bodyguard':

            embed
                .setColor('#77228d')
                .setTitle('Casino Bodyguard')
                .setThumbnail('https://i.imgur.com/Kl59jj9.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'steve':

            embed
                .setColor('#000000')
                .setTitle('Steve')
                .setThumbnail('https://i.imgur.com/xtQy6F8.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'kizhumie':

            embed
                .setColor('#e76822')
                .setTitle('Kizhumie Zhndyk')
                .setThumbnail('https://i.imgur.com/QKezrzS.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'eli':

            embed
                .setColor('#a93434')
                .setTitle('✧☆ Elizabht Czvrtnik ☆✧')
                .setThumbnail('https://i.imgur.com/fhzbs6b.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'ruith':

            embed
                .setColor('#d5e4fd')
                .setTitle('Ruith')
                .setThumbnail('https://i.imgur.com/CEs8emI.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'trinn':

            embed
                .setColor('#134227')
                .setTitle('Trinn')
                .setThumbnail('https://i.imgur.com/0w9ZcjO.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'phelph':

            embed
                .setColor('#83263d')
                .setTitle('Phileas')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847007852782419998/phileas_head.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'ogfinni':

            embed
                .setColor('#37a1b0')
                .setTitle('Finni')
                .setThumbnail('https://i.imgur.com/G7CBVGn.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'sacredone':

            embed
                .setColor('#889669')
                .setTitle('The Sacred One')
                .setThumbnail('https://i.imgur.com/1bCDwaV.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 


            case 'nakjudge':

            embed
                .setColor('#000000')
                .setTitle('Judgement')
                .setThumbnail('https://i.imgur.com/5AnnU85.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'nakrevenge':

            embed
                .setColor('#ca2318')
                .setTitle('Nakallas\' Revenge')
                .setThumbnail('https://i.imgur.com/OvT0uAT.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'nakallas':

            embed
                .setColor('#57c89f')
                .setTitle('Nakallas')
                .setThumbnail('https://i.imgur.com/224NMNZ.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'enrok':

            embed
                .setColor('#661b81')
                .setTitle('Enroke\'ah')
                .setThumbnail('https://i.imgur.com/UbtIThz.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'ogferrum':

            embed
                .setColor('#f4b6d2')
                .setTitle('Ferrum')
                .setThumbnail('https://cdn.discordapp.com/attachments/725849723034140732/998046048054431844/unknown.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'oggael':

            embed
                .setColor('#272c69')
                .setTitle('Ferrum\'s Associate')
                .setThumbnail('https://cdn.discordapp.com/attachments/663593914199965700/817267293801152512/gaelic.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break; 

            case 'sindariel':

            embed 
                .setColor('#fffff4')
                .setTitle('Guardian of Heart')
                .setThumbnail('https://cdn.discordapp.com/attachments/653899059978960916/817533075474743326/StatuesSindariel.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'sind2':

            embed 
                .setColor('#fffff4')
                .setTitle('Statue')
                .setThumbnail('https://i.imgur.com/4ZDoaxM.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'soul':

            embed 
                .setColor('#f2cb27')
                .setTitle('Guardian of Soul')
                .setThumbnail('https://cdn.discordapp.com/attachments/653899059978960916/817533077106327592/StatuesSolq.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;


            case 'luwaria':
            embed 
                .setColor('#1618ba')
                .setTitle('Guardian of Mind')
                .setThumbnail('https://cdn.discordapp.com/attachments/653899059978960916/817533074307809300/StatuesLuwaria.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'solq':
            embed 
                .setColor('#f2cb27')
                .setTitle('Golden Feroxi')
                .setThumbnail('https://i.imgur.com/6xuMrko.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'lady':
            embed 
                .setColor('#6998d8')
                .setTitle('Lady of the Pool')
                .setThumbnail('https://i.imgur.com/6N1phq7.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'rosalia':
            embed 
                .setColor('#331bcc')
                .setTitle('Rosalia Miefleur')
                .setThumbnail('https://i.imgur.com/j70AvKQ.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'rosaliap':
            embed 
                .setColor('#331bcc')
                .setTitle('Rosalia Miefleur')
                .setThumbnail('https://i.imgur.com/zxZQ9hz.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

             case 'rosalias':
            embed 
                .setColor('#331bcc')
                .setTitle('Rosalia Miefleur')
                .setThumbnail('https://i.imgur.com/OVThEbE.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'lynnia':
            embed 
                .setColor('#331bcc')
                .setTitle('Lynnia Belfour')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847292396047564820/lynnia.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'lynnias':
            embed 
                .setColor('#331bcc')
                .setTitle('Lynnia Belfour')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847295561031745577/lynnia_s.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'lynniap':
            embed 
                .setColor('#331bcc')
                .setTitle('Lynnia Belfour')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847295601536139334/lynnia_p.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'matthias':
            embed 
                .setColor('#331bcc')
                .setTitle('Matthias Reed')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847297245098410014/matthias.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'gaelan':
            embed 
                .setColor('#331bcc')
                .setTitle('Gaelan Belfour')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847301299342016552/gaelan.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'diora':
            embed 
                .setColor('#331bcc')
                .setTitle('Diora Paley')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847603909002657812/diora.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'dioras':
            embed 
                .setColor('#331bcc')
                .setTitle('Diora Paley')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847604524587286558/diora_s.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;


            case 'cynthia':
            embed 
                .setColor('#331bcc')
                .setTitle('Cynthia Jorcastle')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847622472589508628/Cynthia.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'cynthias':
            embed 
                .setColor('#331bcc')
                .setTitle('Cynthia Jorcastle')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847623102669651988/Cynthia_s.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'lig':
            embed 
                .setColor('#331bcc')
                .setTitle('The Lady in Grey')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847626578100092998/lady_in_gray.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'ghost':
            embed 
                .setColor('#331bcc')
                .setTitle('Cruel Ghost')
                .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/847630163248021534/ghost.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;


            case 'crab':
                embed 
                    .setColor('#cc0000')
                    .setTitle('Crab')
                    .setThumbnail('https://cdn.discordapp.com/attachments/663593914199965700/992896258631020654/crab.PNG')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'seren':
                embed 
                    .setColor('#7e181e')
                    .setTitle('Seren')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/996979531258789989/seren.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'stonehawk':
                embed 
                    .setColor('#89bceb')
                    .setTitle('Stonehawk')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/997000710778531840/stonehawk.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'camellia':
                embed 
                    .setColor('#93c47d')
                    .setTitle('Camellia')
                    .setThumbnail('https://cdn.discordapp.com/attachments/653899059978960916/867847542371647528/CamelliaHeadshot.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'mking':
                embed 
                    .setColor('#000000')
                    .setTitle('King')
                    .setThumbnail('https://i.imgur.com/FeCG204.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'stranger':
                embed 
                    .setColor('#000000')
                    .setTitle('Stranger')
                    .setThumbnail('https://i.imgur.com/FeCG204.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;
    
            case 'richter':
                embed 
                    .setColor('#999999')
                    .setTitle('Richter')
                    .setThumbnail('https://cdn.discordapp.com/attachments/756056292833099899/997769894126964766/Richter.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            
            case 'ireth':
            embed 
                .setColor('#6998d8')
                .setTitle('Ireth')
                .setThumbnail('https://i.imgur.com/6N1phq7.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            
            case 'sevasha':
            embed 
                .setColor('#dbdfee')
                .setTitle('Sevasha')
                .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1000977158702907452/sevasha.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'zafir':
            embed 
                .setColor('#d97711')
                .setTitle('Zafir')
                .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1000977206442467398/zafir.png')

                message.delete().catch(O_o=>{}); 
                
                message.channel.send({ embeds: [embed] });
            break;

            case 'aitress':
                embed 
                    .setColor('#a884eb')
                    .setTitle('Aitress Saiaf')
                    .setThumbnail('https://cdn.discordapp.com/attachments/517902681356894208/1001019421399187516/lilly.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
                break;

            case 'weaver':
                embed 
                    .setColor('#a9c2f1')
                    .setTitle('Weaver')
                    .setThumbnail('https://cdn.discordapp.com/attachments/462772928195592192/1012144542071410758/weaver.png')
    
                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;
        
    
            case 'arrash':
                embed
                    .setColor('#5b732f')
                    .setTitle('Arrash')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1011832162443612210/arrash.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'ahmuhia':
                embed
                    .setColor('#5b732f')
                    .setTitle('Ahmuhia')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1040114838862581841/ahmuhia.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'bejun':
                embed
                    .setColor('#5b732f')
                    .setTitle('Bejun')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1041625045769932810/bejun.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'narseh':
                embed
                    .setColor('#5b732f')
                    .setTitle('Narseh')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1041908582167347250/narseh.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'waterheart':
                embed
                    .setColor('#4ee6fb')
                    .setTitle('Water Elemental')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1047815456528023632/WaterHeart.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'ocean':
                embed
                    .setColor('#4ee6fb')
                    .setTitle('Sound of an Ocean Wave')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1105664737368350741/ocean.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'pahmuhia':
            case 'possessedahmuhia':
                embed
                    .setColor('#4ee6fb')
                    .setTitle('Ahmuhia?')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1047816387344736306/pahmuhia.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;


            case 'turtle':
                embed
                    .setColor('#4ee6fb')
                    .setTitle('Mother of the Turtles')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1048645315194007633/turtle.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'charlumin':
                embed
                    .setColor('#5b732f')
                    .setTitle('Charlumin')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169436157788181/charlumin.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'rogeesin':
                embed
                    .setColor('#5b732f')
                    .setTitle('Lady Rogeesin')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169474816675850/rogeesin.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'rogeesine':
                embed
                    .setColor('#5b732f')
                    .setTitle('Lady Rogeesin')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104540083811516556/erogeesin.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'olnesia':
                embed
                    .setColor('#5b732f')
                    .setTitle('Olnesia')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169608635961344/olnesia.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'kysheira':
                embed
                    .setColor('#5b732f')
                    .setTitle('Kysheira')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169618547081256/kysheira.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'cyraenan':
                embed
                    .setColor('#5b732f')
                    .setTitle('Cyraenan')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169647424872478/cyraenan.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'ivokas':
                embed
                    .setColor('#5b732f')
                    .setTitle('Ivokas')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169666148241408/Ivokas.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'belkath':
                embed
                    .setColor('#5b732f')
                    .setTitle('Belkath')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1074169685823737916/belkath.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'evander':
                embed
                    .setColor('#7e1818')
                    .setTitle('Evander')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1099212976201928785/evander.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'rosedriah':
                embed
                    .setColor('#5b732f')
                    .setTitle('Rosedriah')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104551535251308624/rosedriah.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'lilly':
                embed
                    .setColor('#5b732f')
                    .setTitle('Lilly')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104545949130428426/image.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'laris':
                embed
                    .setColor('#5b732f')
                    .setTitle('Laris')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104554381870911579/laris.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'osmium':
                embed
                    .setColor('#5b732f')
                    .setTitle('Osmium')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104545440575270972/image.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'damek':
                embed
                    .setColor('#5b732f')
                    .setTitle('Damek')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104545005944717342/image.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'nia':
                embed
                    .setColor('#5b732f')
                    .setTitle('Nia')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104545751117336656/image.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'ria':
                embed
                    .setColor('#5b732f')
                    .setTitle('Ria')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1104545815265034310/image.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'fakian':
                embed
                    .setColor('#533093')
                    .setTitle('Fakian')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1113891278564888707/ilikepeoplelikeyou.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'doll':
                embed
                    .setColor('#9fc5e8')
                    .setTitle('Doll')
                    .setThumbnail('https://cdn.discordapp.com/attachments/1005698682382975048/1118334174579916881/doll.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'ilyara':
                embed
                    .setColor('#f1f1f1')
                    .setTitle('Ilyara')
                    .setThumbnail('https://cdn.discordapp.com/attachments/721602678563536966/1128540710874919043/Ilyara.png')

                    message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
            break;

            case 'help': //the help command shows all the different characters that can be used with this command.

             //message.channel.send(nameHelp);

                return message.channel.send({ embeds: [embedList] }).then(msg => {

                msg.react('◀️').then(r => {
                    msg.react('▶️')

                    // Filters
                    const backwardsFilter = (reaction, user) => {
                        return reaction.emoji.name === '◀️' && user.id === message.author.id;
                    };
                    const forwardsFilter = (reaction, user) => {
                        return reaction.emoji.name === '▶️' && user.id === message.author.id;
                    };

                    const backwards = msg.createReactionCollector({filter: backwardsFilter,  time: 60000});

                    const forwards = msg.createReactionCollector({filter: forwardsFilter, time: 60000});

                    backwards.on('collect', r => {
              
                        if (page === 1) return;
                        page--;
                        embedList.setDescription(pages[page-1].toString());
                        embedList.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`});
                        msg.edit({embeds: [embedList]}) 
                    })

                    forwards.on('collect', r=> { 
                        if (page === pages.length) return;
                        page++;
                        embedList.setDescription(pages[page-1].toString());
                        embedList.setFooter({text: `Page ${page.toString()} of ${pages.length.toString()}`});
                        msg.edit({embeds: [embedList]}) 

                    })

                })
            }) //end send pagination embed */


            /* for(i = 0; i < nameHelp.length; i++) {
                message.channel.send(nameHelp[i] + ", ");
            }*/
            break;

            default: //in the default custom characters stored in the database are searched for. 
                const sayName = await Say.findOne({ title: charName }).collation( { locale: 'en', strength: 2 } );

                if (sayName) {
                    embed 
                        .setColor(sayName.color)
                        .setTitle(sayName.name)
                        .setThumbnail(sayName.image)
        
                        message.delete().catch(O_o=>{}); 
                    
                    message.channel.send({ embeds: [embed] });
				}

				else {
					message.channel.send(`can't find character ${charName}`);

				}
    

        }
	},
};
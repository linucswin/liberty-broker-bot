const Discord = require('discord.js');

module.exports = {
	name: 'ajutor',
	description: "ajutor",
	execute(message, args, Discord) {
		const fireEmbed = new Discord.MessageEmbed()
		.setColor('#00FF00')
		.setTitle('📗◃ Ajutor ▹📗').setAuthor('Liberty Illuminati Private Clan', 'https://i.imgur.com/xdHtiUV.png')
		.setThumbnail('https://i.imgur.com/xdHtiUV.png')
		.setDescription('Cum sa folosesti bot-ul')
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Comanda', value: '`!calc` `nume_biz` `profit`', inline: false },
			{ name: 'Numele business-urilor sunt scurtate', value: 'Folositi comanda `.bizuri` pentru mai multe detalii.', inline: true },
			)
			.setTimestamp()
			.setFooter('created by linux for liberty illuminati private clan', 'https://i.imgur.com/LmNHbDx.png');

		message.channel.send(fireEmbed);
	}
}

// { name: '', value: '', inline: false },
// 
//
//
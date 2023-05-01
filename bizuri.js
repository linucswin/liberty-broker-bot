const Discord = require('discord.js');

module.exports = {
	name: 'bizuri',
	description: "bizuri",
	execute(message, args, Discord) {
		const fireEmbed = new Discord.MessageEmbed()
		.setColor('#00FF00')
		.setTitle('Informatii despre Business-uri')
		.setAuthor('Liberty Illuminati Private Clan', 'https://i.imgur.com/xdHtiUV.png')
		.setThumbnail('https://i.imgur.com/xdHtiUV.png')
		.setDescription('Denumirea business-urilor este prescurtata pentru a fi simplifica comanda.')
		.addFields(
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Los Santos Customs', value: '`lsc`', inline: true },
			{ name: 'Clothing Store', value: '`cs`', inline: true },
			{ name: '24/7 Stores', value: '`store`', inline: true },
			{ name: 'Weapon Stores', value: '`ws`', inline: true },
			{ name: 'Gas Station', value: '`gs`', inline: true },
			{ name: 'News Agency', value: '`na`', inline: true },
			{ name: 'Booking Agency', value: '`ba`', inline: true },
			{ name: '\u200B', value: '\u200B' },
		)
		.addField('Exemplu de comanda:', '`.calc` `lsc` `198956`', true)
		.addFields({ name: '\u200B', value: '\u200B' })
		.setTimestamp()
		.setFooter('created by linux for liberty illuminati private clan', 'https://i.imgur.com/LmNHbDx.png');

		message.channel.send(fireEmbed);
	}
}

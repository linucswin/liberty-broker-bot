const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Ping - Pong command.",
	execute(message, args, Discord) {
		var ping = Date.now() - message.createdTimestamp + " ms";
		const BlackMarketEmbed = new Discord.MessageEmbed()
		.setColor('#000')
		.setTitle('pong!')
		.addField('Ping-ul este:', "`" + `${Date.now() - message.createdTimestamp}` + " ms`!", true)
		.setImage('https://i.imgur.com/wjRxnMZ.jpg')
		.setTimestamp()
		.setFooter('Liberty Broker BOT by linux for Liberty Illuminati Clan');

		message.channel.send(BlackMarketEmbed);
	}
}
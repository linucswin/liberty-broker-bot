const Discord = require("discord.js")
const client = new Discord.Client()

const fs = require('fs');
const { token } = require('./config.json')
const { prefix } = require('./config.json')

client.commands = new Discord.Collection();

require('events').EventEmitter.defaultMaxListeners = 0

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
  console.log(`General Commands Loaded | 1`)
	client.commands.set(command.name, command);
}

client.on("ready", () => {
console.log(``)
  console.log(` ${client.user.tag} online`)
  setInterval(() => {
        const statuses = [
            ".bizuri",
            ".ajutor"
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // poate fi WATCHING, STREAMING, LISTENING
    }, 10000)
})

client.on("message", msg => {
  if (msg.content === "reply") {
    msg.channel.send("> `replyed`");
  }})


client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

 	 const args = message.content.slice(prefix.length).trim().split(/ +/g);
  	 const command = args.shift().toLowerCase();
	
	
	if(command === 'ping') {
		client.commands.get('ping').execute(message, args, Discord);
		console.log(">>> " + message.author.tag + " a folosit comanda [ ping ]");
	} else 
	if(command === 'ajutor') {
		client.commands.get('ajutor').execute(message, args, Discord);
		console.log(">>> " + message.author.tag + " a folosit comanda [ ajutor ]");
	} else
  if(command === 'bizuri') {
 client.commands.get('bizuri').execute(message, args, Discord);
 console.log(">>> " + message.author.tag + " a folosit comanda [ info ]");
  } else
  if(command === 'calc') {
 client.commands.get('calc').execute(message, args, Discord);
 console.log(">>> " + message.author.tag + " a folosit comanda [ info ]");
  }
});

client.login(token);
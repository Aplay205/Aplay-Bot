const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Привет всем! Этот бот находится в разработке!!!');
  	}

});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

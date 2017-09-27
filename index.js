const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzYyNzE3ODU1NzA5NjU5MTM4.DK2yHA.hxmkncLbVskj9D-ZYqCOeKBmEmc');

bot.on('message', message => {
    if (message.content.startsWith(';vote')){
        message.channel.send('@everyone Isso so foi um teste de vote                                                                                                                                                                                                                Este vote tera a duração de 1 hora! Este vote se auto destruira em 1 hora!:fire:                                                                                                                                                                                                                                                       Desenvolvido por Lucas|Mga:fire:');
    }


});
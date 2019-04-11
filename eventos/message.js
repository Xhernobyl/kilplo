const Discord = require('discord.js')
const firebase = require('firebase')
const database = firebase.database()

module.exports = async (bot, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    database.ref(`Membros/${message.author.id}/banbot/banbot`)
    .once("value").then(async b => {
      
      
    let prefix = ")"
    if (message.content.startsWith("<@561980818906677259>") || message.content.startsWith("<@!561980818906677259>")){
      message.channel.send(`COLE VIADO, \`)\` eh o meu prefixo`)
    }

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let comando = args.shift().toLowerCase();
    
    let commandfile = bot.commands.get(comando) || bot.commands.get(bot.alias.get(comando));
    if(commandfile){
      if(b.val()) return message.channel.send("Vc esta banido do bot")
      commandfile.run(bot, message, args, prefix, database);
    }

    })
  })
  })
}

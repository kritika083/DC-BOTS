const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1]
        return message.reply("Content Generatring Short Id For " + url)
    }
    console.log(message.content);
    message.reply({
        content: "Hi From Bot"
    })
})

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    if(interaction.commandName == "create"){
        interaction.reply("Created")
    }
    if(interaction.commandName === "happy"){
        interaction.reply("Happy Happy Happy")
    }
})

client.login('MTEwNDc0NzAxNTYxNjg3NjU0NQ.G_Z5MI.K6xdJwcb9uhQwqz84XQuWvFrwY1-RZYQc4FU28')
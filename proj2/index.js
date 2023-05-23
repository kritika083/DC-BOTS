const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
// const { joinVoiceChannel } = require('@discordjs/voice');
const { DisTube } = require('distube');


client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
  })

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1]
        return message.reply("Content Generatring Short Id For " + url)
    }
    console.log(message.content);
    
    if(message.content === "joinvc"){
       
        // const connection = joinVoiceChannel({
        //     channelId: message.member.voice.channel.id,
        //     guildId: message.guild.id,
        //     adapterCreator: message.guild.voiceAdapterCreator,
        //   });

        client.distube.play(message.member.voice.channel, "Die Hard" , {
            member: message.member,
            textChannel: message.channel,
            message
        })

    }else{
        message.reply({
            content: "Hi From Bot"
        })
    }
})


client.distube.on("playSong", (queue, song) => {
    queue.textChannel.send("NOW PLAYING : " + song.name)
    console.log(queue.volume)
})

client.on('interactionCreate', async(interaction) => {
    console.log(interaction);
    if(interaction.commandName == "create"){
        interaction.reply("Created")
    }
    if(interaction.commandName === "happy"){
        interaction.reply("Happy Happy Happy")
    }
})

client.login('MTEwOTczNDAxODY0NTIyOTY1OQ.GySgZi.Lenm52sQRn-UvepYa13M1msXq4qpy_InO_3CAg')
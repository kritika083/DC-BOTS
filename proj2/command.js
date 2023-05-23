const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'Creates a short URL',
  },
  {
    name: 'happy',
    description: 'Get Happy',
  },
  {
    name: 'joinvc',
    description: 'Join a channel',
  }
];

const rest = new REST({ version: '10' }).setToken("MTEwOTczNDAxODY0NTIyOTY1OQ.GySgZi.Lenm52sQRn-UvepYa13M1msXq4qpy_InO_3CAg");



(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1109734018645229659'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();

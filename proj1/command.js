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
];

const rest = new REST({ version: '10' }).setToken("MTEwNDc0NzAxNTYxNjg3NjU0NQ.G_Z5MI.K6xdJwcb9uhQwqz84XQuWvFrwY1-RZYQc4FU28");



(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1104747015616876545'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();

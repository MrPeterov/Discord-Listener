const { Client } = require('discord.js-selfbot-v13');
const config = require('./config.json');

const client = new Client({
    checkUpdate: false
});

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
});

client.on('messageCreate', async (message) => {

    if (message.author.id === client.user.id) return;


    if (message.channel.id !== config.sourceChannelId) return;

    try {
        const targetChannel = await client.channels.fetch(config.targetChannelId);
        if (!targetChannel) {
            console.error('Target channel not found!');
            return;
        }

        let content = `**From:** ${message.author.tag} \n${message.content}`;


        if (message.attachments.size > 0) {
            content += '\n\n**Attachments:**';
            message.attachments.forEach(attachment => {
                content += `\n${attachment.url}`;
            });
        }


        await targetChannel.send(content);
        console.log(`Message forwarded from ${message.author.tag}: ${message.content.substring(0, 20)}...`);

    } catch (error) {
        console.error('Error forwarding message:', error);
    }
});

client.login(config.token);

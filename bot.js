require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const REPLY_PROBABILITY = parseFloat(process.env.REPLY_PROBABILITY) || 0.3;

// Create a new client
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// When the bot is ready
client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});

// When a message is sent
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return; // ignore bot messages

    if (message.content.toLowerCase().includes("quoi") && Math.random() < REPLY_PROBABILITY) {
        await message.reply("Feur :clown::nerd::clown:");
        console.log(`${new Date().toISOString()} - feur in "${message.channel.name}"`);
        return;
    }
    if (message.content.toLowerCase().includes("oui") && Math.random() < REPLY_PROBABILITY) {
        await message.reply("stiti :sunglasses:");
        console.log(`${new Date().toISOString()} - oui in "${message.channel.name}"`);
        return;
    }
    if (message.content.toLowerCase().includes("ouais") && Math.random() < REPLY_PROBABILITY) {
        await message.reply("stern :sunglasses:");
        console.log(`${new Date().toISOString()} - ouais in "${message.channel.name}"`);
        return;
    }
    if (message.content.toLowerCase().includes("hein") && Math.random() < REPLY_PROBABILITY) {
        await message.reply('Deux <:pepeStyle:704408286073454662><:pepeStyle:704408286073454662><:pepeStyle:704408286073454662>');
        console.log(`${new Date().toISOString()} - hein in "${message.channel.name}"`);
        return;
    }
    if (message.content.toLowerCase().includes("stylé") && Math.random() < REPLY_PROBABILITY) {
        await message.reply('Ouais je sais chuis plutôt stylé ouais <:shyChad:824721892043653152>');
        console.log(`${new Date().toISOString()} - stylé in "${message.channel.name}"`);
        return;
    }
    if ((message.content.toLowerCase().includes("nul") && Math.random() < REPLY_PROBABILITY) || Math.floor(Math.random() * 50) === 0) {
        await message.reply(`:nerd: *${message.content}* :nerd:`);
        console.log(`${new Date().toISOString()} - nul in "${message.channel.name}"`);
        return;
    }
    if (message.content.toLowerCase().includes("boss") && Math.random() < REPLY_PROBABILITY) {
        await message.reply(`:sunglasses: Ça dit quoi le sang, on s'pète à quelle heure ? (à quelle heure ?) :sunglasses:\n:sunglasses: Bosse comme un boss, bosse comme un boss (yah) :sunglasses:`);
        console.log(`${new Date().toISOString()} - boss in "${message.channel.name}"`);
        return;
    }
    if (message.content.toLowerCase().includes("manuellement") && Math.random() < REPLY_PROBABILITY) {
        await message.reply(`:sunglasses: automatiquement, Bosse comme un boss, bosse comme un boss :sunglasses:`);
        console.log(`${new Date().toISOString()} - manuellement in "${message.channel.name}"`);
        return;
    }
});

// Login using your bot token
client.login(process.env.TOKEN);

const { 
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
    ActivityType,
} = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const config = require('./config.json');

//const client = new Client({
//    intents: [Object.keys(GatewayIntentBits)],
//    partials: [Object.keys(Partials)],
//});

const client = new Client({
    intents: 3276799,
    partials: [User, Message, GuildMember, ThreadMember]
});


client.login(config.tokenBot).then(() => {
    console.log("| ✅ | ChavinStudios bot has started");

    const time = 5000; 

    let status = [
        {
            name: "Discord Bot",
            type: ActivityType.Playing,
        },
        {
            name: ".gg/ChavinStudios",
            type: ActivityType.Watching,
        },
        {
            name: "ChavinStudios",
            type: ActivityType.Competing,
        },
    ];

    client.user.setPresence({
        activities: [status[0]], // Para ponerlo como inicial p
        status: "dnd",
    });

    setInterval(() => {
        let randomStatus = status[Math.floor(Math.random() * status.length)];
        client.user.setPresence({
            activities: [randomStatus],
            status: "dnd",
        });
    }, time);
}).catch((err) => {
    console.log('| ❌ | Something bad happen, fix this error :', err);
});
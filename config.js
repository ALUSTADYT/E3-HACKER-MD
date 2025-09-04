const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pFd1g2UGZiOVBjRGoyMTVuUU00WlFDc2VodkR0QzV2eUtIR0tjeGtVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjUxTHA0bitsL3F0YVh4aWUzc3hYaWhvNmVnS3plSUFDZzhuOHdRMFpEWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TWJzNDBLbzdYL282YXJRRkVDbWw1UWlxT3R5SDB5R3hGaHJZQUJpYUhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJaWhWbkF2ZUE0S3MvV0ZVTHpRYVVlci9XcjRYN3phak1OUWVMSWQweWtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBVnprNExYMzArd0lVbEtBSVI4Y1M4aTh3dlFyM0Z3TklzV2s1Z2Rzazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE0eW1leG5OdFVPb0RqNjJoSmZBQ1YrdUtXNzB6ZC9BeHVhMDhxVllSV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkY1SGVia0F5Z0daYk5yeDRsSnA5TXZoYlRaU2RKdlh1N2kxU2syaVZWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVRFQ2g1QU90Rml5RTNyZnhPRXk1ZXY4eDlFQkhFUlFiQ1h1bVBNakExQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVxYlArRE9DcVEwNE80UDRUTUVQQVkvQUdxbFp1aVF6RHpQNklLMDJNbkpaNEc3UHhtQmZVZmJIeXF1eEhqQ1p2SGl1ZjFDSVB0cG9WaEM1ZkF0akJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJjQy9FWnVlYWVidEp5bEtVdDlkeHRWbzczZ1BCaGtadU9xMUViY3lTd1RRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJMNUM2RFlKMSIsIm1lIjp7ImlkIjoiOTQ3NDI4Mzc3MTI6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiybTqq53JtFxu4bSEXG7KnFxu6qudXG7JtFxu4bScXG5cblxuyoBcblxuXG7htI1cblxuXG7htIRcblxuXG7htKFcbuG0i1xuyp8iLCJsaWQiOiIyNDE3MzQyNDgzNTM5ODE6MjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaVN5Wk1ERUovWDQ4VUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxbWgwSFdIZnVpd1hFbTZXNjJlcnJhNit4OUFLN3laa0RVYU9UYW9JMG1FPSIsImFjY291bnRTaWduYXR1cmUiOiJJeDJhcGJhYlo0NTg0L01aN0VYL3VEdEFIU1Z0ZWtKcklEYlNUb01wUFZ6dUxqOHBKT21aR0ZrRTJ6QURvSXNTR0pvak5BbmxqaWlvQmNnRk94M2RCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ3ViQk9Ea0sza3lUS3YrbEExYkVGcUdzb3g5bm1WODJlR2k2U2tDQmJoVmtyeUpjKyt6Wnk4UW51L2ljYm41K1IrOXZiK2ZueDFjV3VaVC9sNFBmQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MjgzNzcxMjoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhcG9kQjFoMzdvc0Z4SnVsdXRucTYydXZzZlFDdThtWkExR2prMnFDTkpoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5NDk0MTEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2g5In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "/",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E44_CHANU_X-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍,-𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝙲𝚈𝙱𝙴𝚁 CHANU X-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> අනේ මගේ පැටියට මාව මතක් වෙලානේ🥺🎀",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94705330441",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

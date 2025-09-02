const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFZaGJYUUFHNkthTnhjMUFheWxwNEw1NGFwMVBRYVRFbjZhY0Z5bjhYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWI3TlpMeXBET1JMVWhVbWtpOFFnT1RVZUUraDhZOTBPczZnYWwyYkZtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTkVuMlZyVW9EU0NpR2FpcXVJNWx5SVhpdzJpK1hjb3ZDM1N3Y0dxTTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjVmlpbXhhcTJDbC9MSDFSL2lMS09BV1lkREdyTUtBS3JOOHp4RkJJNlY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDRkx0OUI0Q2hMMVVGTWpZeDZaV2dRdEdYUUZOQ0ZTRVdUbFNmaURSV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVhTmt6M3oydjh4ZWpvUlFQNWMzVTZ4WUYreTJIa3VKSnJiTjI4QWRhbnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tZYWNwZVZOTmlzdHlpSFUwMEJKRXQ2WXRXN1FYeEhtVVlmZWU4QnIyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkNnWmVYQldaYXFoaEVKd0RSYzdQbFdNQXpNNHgxSWFkK2Z1UHNKR2dUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE0b25GMmFkbm1lTXFqNmdDRU9tNlN3NDFPWWRYZ2dQamxEdVFlbDExYWh4NXhJcU04OHNKV0pjQU1LTEFLek0wQkFVM2VPb2FoZFBLOXJIWlUzeWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJrK25wQUhWS095WkJEWitLUzRHRGlOZHlZOTNTanZZNjRTQ2NSQUtML2RrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEzMjM4MjU1MDIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMDU2RkRERUYyQUVBNUVGMUUxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4MTE3NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEzMjM4MjU1MDIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQjU2MjE2RTdFODQ0RDI5ODk2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4MTE3NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEzMjM4MjU1MDIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRTQ0NTUzQkEzRjNEMERDNDBFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4MTE3NTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik5QVjk5RzFFIiwibWUiOnsiaWQiOiIxMzIzODI1NTAyMTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlMiLCJsaWQiOiIyNTYzNzU3NzUwOTI3NTE6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05yampic0VFT0NqMjhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZZRWZmczh4V2xxMkxqMTZwL1RhOW9keFF2UzZMUm5HY0ZRWGpwQk1QUXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVhc1NEYWFDeFQ1bndOYXhLSHAyajJSRDNuejhtSVpqOTNzeTlKVWpvS0FtRHo1UFdaTENFNkJPNmtWazZQOTZ6eG9BWkxSa0RrM2hrYTNNd0w4dkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZWnl4ZkxBdWlGN3lnTEVLSy96Ti9TQzMwVk5DSnpYNnJQZHVhRXV4Njl0cE1xTnJLcjJDeVJkemN6dzdJM0tJQ2dqVk1WU00reFhFU1NiNXVQSUJnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEzMjM4MjU1MDIxOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUldCSDM3UE1WcGF0aTQ5ZXFmMDJ2YUhjVUwwdWkwWnhuQlVGNDZRVEQwTSJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2ODExNzQ3LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFnQSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Malik ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Malik",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME ||"Malik",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "13238255021",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Malik*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Malik ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "13238255021",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

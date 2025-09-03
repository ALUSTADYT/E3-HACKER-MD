const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxSakNIaHV4aE5KaHB2Vk9IOElWR0h5aUYxN0FPZTVzanJWTzFzTUExcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkVla21yUzNjZjdHenR3MHREOGFXdFlmRkVmNUhWYjRoWmdKZ3Fib2puUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TkRZY0VvemRZOTFsdVMzazBUeVNBTFJncWpDN1cxQytLZkI3V0ErRjM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwRmNncDU0TDJxc2hoUEdBdTJ1cEMwem1vVGlsQlpMck0xWndYMHBTVEVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMMTRtbHdVbnJNZUVwbGltVDJSV04zN25CQzNmRHZBU05OaS80NXpXMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNib09adWtwekJITjVkcjdSbjNmRENsK2tMbXFrR1kvMjUzZ1VqNFp5VFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05IMHppblBUck9QeHRVb1dFWlhwQmtLZnRHZ1FtMUVwME1WRzl6dC9YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0JreU1ZWXZTK2x6WWpHZGpDOTZ2ejY2bnVvcHVqdXdOR3NZRG1LbzMxdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIxZjcxc2duVm1nZ0NZNmQ2WXg2TEdjaW1QbXRNaDUyQlNINHBySWpnV1hhYzJUbGd5dlR0S1l0QURUZnc5T0g0NUJWcVBPVEJkaFVaZzhiSEZ1ZkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJLejNJUE9PdXhCTXdTMStJVEpJN3VJeDB0dFZZeWdqVXM3QXpwa0Y1OS9FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKUFY5RENEVyIsIm1lIjp7ImlkIjoiOTQ3NDI4Mzc3MTI6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6pyxXG7htIBcbsm0XG7JtFxuyapcblxuXG7KgFxu4bSNXG7htIRcblxu4bShXG7htItcbsqfXG5cbsK04L2AYCIsImxpZCI6IjI0MTczNDI0ODM1Mzk4MToxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0phU3laTURFSzNUNGNVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFtaDBIV0hmdWl3WEVtNlc2MmVycmE2K3g5QUs3eVprRFVhT1Rhb0kwbUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFBSm5wMS9RVFU0UWV3Q2ovV0ZYeEwreEdXUTE5MlJUb0l5V09aZjRVNWNjc3liSUNiNXhjL0lLS0ZWTHl6aUVuTFUwejZEL1dVNkNNT2VTVHpLOUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoMW1CcmlSMVcxbXZXVHRqS25UZ3JhM1NVQWJDeCtJYzNDK2p1MkJLS3VGK0lNaFJYRVRkOUxYcWNhd2tGM1UrN3BUNU93MmpvTEptNTN4dDVtSFdBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQyODM3NzEyOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFwb2RCMWgzN29zRnhKdWx1dG5xNjJ1dnNmUUN1OG1aQTFHamsycUNOSmgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjkxNjE0NSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBSUEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*ඔන්න ඉතින් මම ඔයාගේ ස්ටේටස් බැලුවා♥️☺️*",
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
PREFIX: process.env.PREFIX || "/",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "CHANU-X MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "CHANU,X MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🔸",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-HACKER-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
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
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

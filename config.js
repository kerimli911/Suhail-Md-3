const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994508202214";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_19_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWVpvR1NaSXMzM1lYQmxBaldYdlIrMXRwUHJ2dVlqUWV5cDVkYWdxdDVPST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ3NzMwNTU2ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM3RkZBQjU2MDQ2RThGMkM3RDU2RDZEREMyOTgxMjc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NzQ4MDc4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDc3MzA1NTY4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEM3RjgwMzY1NERFMjQ1RkIzMzY0OEVDMUQyRDAwOEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ3NDgwNzgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NzczMDU1Njg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGOEYxQTlCREQ5ODkyRkIxNEZBNTRCRTQ5RTBEODJDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDc0ODA3ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUUJ5b3ZSX1lUYXFINTVuVXlld09lUVwiLFxuICBcInBob25lSWRcIjogXCJmYzc5NmI5ZS05MjA1LTQyMWItYmMwNi0zMjVlODM2OWQ5MjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTgwLFxuICAgICAgOTksXG4gICAgICAyMzksXG4gICAgICAxNjMsXG4gICAgICAxMDcsXG4gICAgICAxMjQsXG4gICAgICA4NyxcbiAgICAgIDE5MCxcbiAgICAgIDE4OCxcbiAgICAgIDI0OSxcbiAgICAgIDY0LFxuICAgICAgMTQ3LFxuICAgICAgMTE3LFxuICAgICAgMTcxLFxuICAgICAgMjU0LFxuICAgICAgNzYsXG4gICAgICA1MixcbiAgICAgIDEwLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxNixcbiAgICAgIDk2LFxuICAgICAgMjMyLFxuICAgICAgMzUsXG4gICAgICAxNjcsXG4gICAgICAyMjcsXG4gICAgICA1MyxcbiAgICAgIDEzNyxcbiAgICAgIDUwLFxuICAgICAgMjE2LFxuICAgICAgMjA2LFxuICAgICAgNjAsXG4gICAgICA5MCxcbiAgICAgIDE5MyxcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDEyOSxcbiAgICAgIDczLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pGbW9JR0VNYmhvY0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrNFU0WnBrOVNXM05ISFgwYmdQb2tmNXhaYTYxOHNDaEhRNjJYeTYxY1M4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInN2dVN0K3l3TStzUHdFWFVEbUpYMTk2QjkybGk3b1Nwc1lKNFVPRmVsYVpiRzFkSFNmTUlIeTA5MXZDam13MXFSYUNYZ0o3dG5WUDJwSm9LQTFyQkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInV1R1l4Z2FWQ3pZSDI5ZnBKYyt4bmhmbTJzb1ZseGg4RTUwVjdReUhwY2dRWkVsZHMzS0dmVkdOSm9XdnRkRlRXdkxpdDlMTEZUdzJ5dGtIcTNQekJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NzczMDU1Njg2OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc1MDI3MDI0MzA2NDo0MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ3NzMwNTU2ODY6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3NDgwNzc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWtTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4eVlucHBteHM5YlpuNEU4dGJnWWdHd1o2UFd2OWVQV3JKU29jcFdXdkV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTUyNDE5NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVrTy5qc29uIjogIntcImtleURhdGFcIjpcIjlUTDNXVkFjc3R1dWZXYysxSjFhRFJoanFyUWpuS3B2enFsc0NkRXlvajg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYxNTI0MTk1OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWtQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXBQRnNJL29TUTR5Q0lGT21kd0owNVVIaTQ2eHFuVEU0Wk9Dc2c4YUV6ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjE1MjQxOTU4LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzRUJNeWdQREtoYzZEaWNFMHRCQ1RKcGNxY1FIWHJsTDhuWVFkMmt1c3prPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTUyNDE5NTgsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc0NzU0NTY1NTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsZFlBY29QZUdTMnE2ZHhjclhWUXR5UWNZZEU1Ymd5cSswRnJLVTBGZ0lvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTUyNDE5NTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc0NzcwNTg3MzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQSTh5aVVJVk9GelM1QmV2eGtMTmhBa1FRV3YrNHVUSWlLQXBoZXdvYjJnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTUyNDE5NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQ4MDc4MDU4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : " 2348139598985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_11_08_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkU4cTFFRlUrZWNnalZOazFQcFZzQXlZd1JFZUpPN3hIRHNXK3VyYTV6Mzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEzOTU5ODk4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzdCRTJERTA3NDEzNzc2QzFEQ0NEMEVDOUREOUI0RjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0ODExMDY4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIks0X0lpcEpyUk5xTGl0RTRiVHNFR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTFmNTFlY2MtZjk0OC00ZTkyLTg3Y2ItYTA3ZjQ5NjliNWZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE4LFxuICAgICAgMTY0LFxuICAgICAgMjMxLFxuICAgICAgMTk5LFxuICAgICAgMjI5LFxuICAgICAgMTE4LFxuICAgICAgMTY1LFxuICAgICAgMjM5LFxuICAgICAgMTg2LFxuICAgICAgNjUsXG4gICAgICA5NixcbiAgICAgIDE1MCxcbiAgICAgIDM5LFxuICAgICAgMTM0LFxuICAgICAgMzksXG4gICAgICA5NCxcbiAgICAgIDkzLFxuICAgICAgNzUsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjEsXG4gICAgICA3MixcbiAgICAgIDEzLFxuICAgICAgMTY5LFxuICAgICAgMjAzLFxuICAgICAgOTEsXG4gICAgICA4MyxcbiAgICAgIDk3LFxuICAgICAgMjEwLFxuICAgICAgMTU1LFxuICAgICAgNDIsXG4gICAgICA0MCxcbiAgICAgIDE3OSxcbiAgICAgIDEyLFxuICAgICAgNDksXG4gICAgICAyMDYsXG4gICAgICAxODMsXG4gICAgICAyMjgsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1NFOVNXUFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK3MxRDRRc282NnRnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVXOUxzbXlGTE1mMlhBSTZOd0l1TEpraXBldTIwdFhYMWQ0dVNmVktKU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRUZmbEhhRHRJTmg0Q3VDWTJEeWJza3EwWlFMSUJLK0s1dklrRVJQaXFva3FRR09XN0J4Y2E3RkEwUUZmQVFwTExwOW9Yb1UyLzFzV0l1SFl4NVRUQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ09TT3BLcm13R1dKcExDa2hkMll5Z04zTktxZlYrRHFEaVRGaE1PeThtV0I4cThjcnZSQmhnMHhwVGtRYVdYVlJDYlZmZTM2K3RnWmtZL01FZGd2Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzOTU5ODk4NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDgxMTA2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlxU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXFTLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHkwUGNCeGMwdEgzQ2xyT29VOU9RUm9BdVhpejkrV2dYazFGQVdUVUhmND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE0MDU0MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQ4MDgwNjg3MzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Cr7 supreme",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "2348139598985" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348139598985" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : " 2348139598985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || " true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_35_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicm0xd1Vhdyt2aGhpWjJpSzJaRGtXR3U3OXdvaVFzTzNaSk10S1BFNUZDbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVlRfZDBFS2hTOHFKUm1SRGctOXRnZ1wiLFxuICBcInBob25lSWRcIjogXCIxMTYxY2ExMi03MmMzLTQ1OTEtODU0YS1kMmQzMWM4OGY4NTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMCxcbiAgICAgIDEzMixcbiAgICAgIDE5OSxcbiAgICAgIDIyOSxcbiAgICAgIDE4OCxcbiAgICAgIDQwLFxuICAgICAgMTQ4LFxuICAgICAgMTgsXG4gICAgICAyNyxcbiAgICAgIDE5NCxcbiAgICAgIDg0LFxuICAgICAgMTg4LFxuICAgICAgNjEsXG4gICAgICAyNDksXG4gICAgICAxNTYsXG4gICAgICA0LFxuICAgICAgODYsXG4gICAgICAxNDAsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDExOSxcbiAgICAgIDIxNyxcbiAgICAgIDIzMSxcbiAgICAgIDk4LFxuICAgICAgMjMwLFxuICAgICAgMTk1LFxuICAgICAgMzQsXG4gICAgICAxNDcsXG4gICAgICA1NyxcbiAgICAgIDEzNCxcbiAgICAgIDE2LFxuICAgICAgMTA0LFxuICAgICAgODIsXG4gICAgICAyMTcsXG4gICAgICAxMDQsXG4gICAgICAxMzQsXG4gICAgICAzOCxcbiAgICAgIDYwLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJTNDQ0NDJRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5NTk4OTg1OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzI2NjY0NjI0OTU1ODoyM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5iI77yj772SNyAg8J+FovCfhaTwn4Wf8J+FofCfhZTwn4Wc8J+FlCDwn5iIXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVN0MUQ0UXc3RGJ0Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlVzlMc215RkxNZjJYQUk2TndJdUxKa2lwZXUyMHRYWDFkNHVTZlZLSlNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJCSzY5Q2IxSitLSFpFYkVkcmpKZnVnLzF3S3lKRlh3RzJwWE1CMHhwWU0zbXVReTNNWGFJSk9IL05aOEQrSXhpRm1ab3pVM2VyM3hvWTYwUDZEOEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJxM3lWdENuSU1YRDh4WXF6TzBSODROMnk5N0llNDBPbWdoR3V6QlRtdW9mMmVvT0E5Zi95ZDFsMm9UWmltQm5FVk4vc2FuaU42NDBnTktnNXhxdWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk1OTg5ODU6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MzU2MTAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXFLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrcEFjOXN0Z3pwRGxsaSt0clBVRFhVTVhhN1BiNGZlM25kT1FEdDZSODVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTQwNTQ0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1MzU2MTA1NzUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Cr7 supreme",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Cr7 supreme",


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

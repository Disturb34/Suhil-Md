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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_22_08_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwVDRIOTlidjc1LzNVanRnUDF4VXJ6Y3FTOGJsWlJ2RFQvdENLazdnVWVjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzk1OTg5ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBEOEREOTI4MEFDQTEzNjc1NjJERjM1RkU2M0YyNkUyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDgxMTc1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKQXNuOWlyd1FLYVp6S2ZiRzdNWnhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwNmY1Zjk1LTE0NzktNGU2NC1iMGNlLTVkYmQwYWMzNDAyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMTQsXG4gICAgICAxNixcbiAgICAgIDIzNyxcbiAgICAgIDYzLFxuICAgICAgMTg0LFxuICAgICAgMjUzLFxuICAgICAgMTI4LFxuICAgICAgMjQxLFxuICAgICAgMTEsXG4gICAgICAyMCxcbiAgICAgIDksXG4gICAgICA2NixcbiAgICAgIDE3OSxcbiAgICAgIDIyMSxcbiAgICAgIDQ3LFxuICAgICAgMTA4LFxuICAgICAgMTAsXG4gICAgICA2NSxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxNDEsXG4gICAgICAxMTQsXG4gICAgICA2NSxcbiAgICAgIDg3LFxuICAgICAgNDAsXG4gICAgICAxMjIsXG4gICAgICAxOTksXG4gICAgICA5MyxcbiAgICAgIDQ2LFxuICAgICAgMTkzLFxuICAgICAgMTQ4LFxuICAgICAgMTk1LFxuICAgICAgNDQsXG4gICAgICAyMDAsXG4gICAgICAyNDUsXG4gICAgICAxNjQsXG4gICAgICAxNjgsXG4gICAgICAyNDQsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjlORE0zTTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDUjcgU3VwcmVtZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDczFENFEzSk82dGdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVc5THNteUZMTWYyWEFJNk53SXVMSmtpcGV1MjB0WFgxZDR1U2ZWS0pTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkZ2hQdWVnclZPa25tSDRJd3hqTDdOeFdSaVFLMlBmdjl2K0s0WHlDYXFWQU05V1NVbExtM1dWN3JaNVlWZjQ2RjZhZC9nUGx6SHlBMXNhUzFWR3RBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJod0xKUzNESGhjeHZvRGZzZXFXVUlsQndiaUFnR2pmMGJpVW5BNnE1WXl2TzdONFFhK1NEUVUyQnRsckQ0cmp4TUdOM3E3Z3I1UHdLR0w4Nzk2NDBEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTk4OTg1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0ODExNzQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXFTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJseTBQY0J4YzB0SDNDbHJPb1U5T1FSb0F1WGl6OStXZ1hrMUZBV1RVSGY0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTQwNTQyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDgwODA2ODczNVwifSIKfQ=="  // PUT your SESSION_ID 


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

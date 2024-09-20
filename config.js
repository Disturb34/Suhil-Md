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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_16_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZU8weS80cXZ4MzFERlQvWnowZVdTbmxFZnR6QU1tOGo4VDBOWEhHOTF6OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVmhCMVE5d1pTYUtNUG8ybURsbjUtQVwiLFxuICBcInBob25lSWRcIjogXCJmZjJhYWRhNi04NDgwLTQ0MTEtOTBkYi1mZjhmMmI3ZGQzZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMjA3LFxuICAgICAgMjA1LFxuICAgICAgMTQzLFxuICAgICAgMjM4LFxuICAgICAgMjAzLFxuICAgICAgMjAxLFxuICAgICAgMzMsXG4gICAgICA5MSxcbiAgICAgIDExMSxcbiAgICAgIDEzMCxcbiAgICAgIDEzLFxuICAgICAgNjMsXG4gICAgICAyMzAsXG4gICAgICAxNjksXG4gICAgICAxNzMsXG4gICAgICAxMixcbiAgICAgIDIxNSxcbiAgICAgIDIwNyxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDE4NSxcbiAgICAgIDY0LFxuICAgICAgMTEsXG4gICAgICAxMTgsXG4gICAgICAyOSxcbiAgICAgIDIzOSxcbiAgICAgIDQzLFxuICAgICAgNjEsXG4gICAgICAyMjcsXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgMjEyLFxuICAgICAgNDEsXG4gICAgICAxNDQsXG4gICAgICAyNDUsXG4gICAgICAyMTEsXG4gICAgICAxOTAsXG4gICAgICAyMjUsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkZHR0I0TTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3MjY2NjQ2MjQ5NTU4OjUxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxdDFENFE5cG16dHdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVc5THNteUZMTWYyWEFJNk53SXVMSmtpcGV1MjB0WFgxZDR1U2ZWS0pTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJWnhLRDJUZWdZUWVmK3RkcjdJZ0pWUVgrM1haRHg3MWsvSGtacjVNV3V2UjNaSFVuSVdOMWVkSzIydVMwelZTcVh2TW9ubXA4anhYSzF3dTYzNHlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2cHk4VzlRQ2ZRUlA3L2g0ZGVjRVp4djJNQUtUSk92SVBuUjRXODcrekFuUnRKL3ZiU1F2MytLS0pKNXJwb2Y4Q2VNbkE4VklyRXV4bHpWTjdKNVlEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTk4OTg1OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjc5NTAwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlxaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXFpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2pGa3cvelpMdVlCNldqd2J2ekNOSzhZVzRYRWc3dnlNNEZDV0RDcjRrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE0MDU0NTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU0NTE4NjA4NjFcIn0iCn0="  // PUT your SESSION_ID 


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

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RqRXd4ZTNQVDRKRXcwUStDcXQ2S2l1RlRLR0Q0UUVyZW5NRVBBYkpHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHhsem1OY3RJMzZQeHk4UHN4R1BFQVFJZEd2bXNVTlNEeUYvbFdYY1hFQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQ00rYmVYcHlHZTBlbGNWekgzQWV3THRLaTlGSUo1N3lUV1FGQnduZVgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZnJHTFh1UDEwUW5qTUJjeURhdEF6ZjFneHhSblU1YlFvVFhkcCt3VEJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIckJaRE9QbWN2S1d0REZ3dTJ6dU44bm9RdTd1VTlsOWZiQis0dkI4Mms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB2dkJRZFpPMWdvbDFNZ0RQYnpjYmJuSTE1dmpraExJL3dFa1RYck9jeGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1qWWV5MStzc1c1NmlScmFkbndXcXRsR3YvMmcvYVRvRzllclZOYTFGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXYvOENsZnRmNnduVlljZmozVzRtdHBKTXJYL21aeTUyc05PNWliZUtsND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBheEFZZ1Z2K3EyZkJhQ2h4MzQrZzByTjJiN2g5dmtRWXc5dk1qQm10K3ZBRnBTcW1rR2VFMnBBY2s3VmhhRUVUZ0lwQjg2NDlhUGxUczY1RTVHUmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImEyLzNWZFRXUlIrNmRjRVlMV3lwc2U4eWpKTEFVeVdNZFNveC91bGxyUTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktFYVo3cUJqUXpXUXV0N1E5NFpDcXciLCJwaG9uZUlkIjoiY2IxYmYxYTUtZWI4MS00NDAxLWJiZmQtN2M3MjA2ZDgzZWQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYrMFdkT2diQ1U0eE9mZDN4a1B4L2swTEJyWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiQjN4TjEwdFNxc20vSGJIN001ZlZpVVhYZ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzROVlBCRFoiLCJtZSI6eyJpZCI6IjkyMzA3MjM4MDM4MDoxM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWZmM1lrQ0VJcmE0N1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidktHTEF2U01PVm5Rb1pGOGtyT2xteTRuYkhnZW1WNHVDK1VLaEp2ZE1Gdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWJRdzAzLzVlcHgxcm95NkJXRG1WRmt3c3lsdUxneENSMk9BOHNVQ1RaQ0IvSVNmb2l4VVlEUzlJUGMyTGExd1hnSWNqSzhwL1dZT29HQzh5SnNvQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Im4ydVVOelVucTNkYnJyNDRmTGJhbVhvR2lSTHd6cDhBRG5UcXVmbzBSNXo4ZGs5WmpWMkZWMStRenBYRVFTaTVVMEQxZTVZUjJHc1JXaldtMzBMU2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDcyMzgwMzgwOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ5aGl3TDBqRGxaMEtHUmZKS3pwWnN1SjJ4NEhwbGVMZ3ZsQ29TYjNUQmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU0OTI1MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnVzIn0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '923072380380' : process.env.OWNER_NUMBER,   
OWNER_NAME: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? false : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? false : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? 'POWERED BY HAMZA': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,    
WELCOME: process.env.WELCOME || false  ,    
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,         
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || true ,
BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
ANTI_DELETE : process.env.ANTI_DELETE || false,
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO  

};

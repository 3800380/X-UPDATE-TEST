(function (_0x410a16, _0x1241ae) {
    const _0x28bc49 = _0x410a16();
    while (true) {
      try {
        const _0x2fcdb6 = parseInt(_0x65d3(987, 'VO^!')) / 1 + parseInt(_0x65d3(1537, '8[x7')) / 2 * (parseInt(_0x65d3(1532, 'mq1C')) / 3) + parseInt(_0x65d3(2270, 'kCiQ')) / 4 + -parseInt(_0x65d3(1288, 'o%1l')) / 5 * (-parseInt(_0x65d3(1377, ')b[f')) / 6) + -parseInt(_0x65d3(2059, 'OiR9')) / 7 * (-parseInt(_0x65d3(2202, 'wwHy')) / 8) + parseInt(_0x65d3(1783, 'kCiQ')) / 9 + -parseInt(_0x65d3(1698, 'p6K[')) / 10;
        if (_0x2fcdb6 === _0x1241ae) {
          break;
        } else {
          _0x28bc49.push(_0x28bc49.shift());
        }
      } catch (_0x2455e5) {
        _0x28bc49.push(_0x28bc49.shift());
      }
    }
  })(_0x2810, 912647);
  const config = require("../settings");
  const os = require('os');
  const {
    cmd,
    commands
  } = require("../lib/command");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    Func,
    fetchJson
  } = require("../lib/functions");
  const si = require("systeminformation");
  function _0x14fe69(_0x3a6621, _0x1b14ee, _0x2f4f48, _0x43ae53, _0x3b8960) {
    return _0x65d3(_0x3b8960 - 0xa8, _0x2f4f48);
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x360318 = {
      pattern: "pay",
      react: '📖',
      desc: "Get bot's command list.",
      category: "other",
      use: ".menu",
      filename: __filename
    };
    cmd(_0x360318, async (_0x4c9824, _0x75581b, _0x48041a, {
      from: _0x169071,
      prefix: _0x4ec9dd,
      pushname: _0x53bd07,
      reply: _0x13619a
    }) => {
      try {
        const _0x5625cb = "\nකක්කා බරයි".trim();
        const _0x496cb1 = {
          showAdAttribution: true
        };
        const _0x4d4020 = {
          externalAdReply: _0x496cb1
        };
        const _0x3c5e43 = {
          text: _0x5625cb,
          contextInfo: _0x4d4020
        };
        const _0x37ef8a = {
          extendedTextMessage: _0x3c5e43
        };
        await _0x4c9824.relayMessage(_0x48041a.chat, {
          'requestPaymentMessage': {
            'currencyCodeIso4217': "Rupee",
            'amount1000': 0x2710,
            'requestFrom': _0x48041a.sender,
            'noteMessage': _0x37ef8a
          }
        }, {});
      } catch (_0x3397d3) {
        console.error(_0x3397d3);
        await _0x13619a("An error occurred while fetching repository information.");
      }
    });
    const _0x2272e9 = {
      pattern: "menu",
      react: '📖',
      alias: ["panel", "list", "commands", "cmd"],
      desc: "Get bot's command list.",
      category: "main",
      use: ".menu",
      filename: __filename
    };
    cmd(_0x2272e9, async (_0x224d5f, _0x210678, _0x185276, {
      from: _0x2382a8,
      prefix: _0x5786cc,
      pushname: _0x5c0de4,
      reply: _0x38ac51
    }) => {
      try {
        if (os.hostname().length == 12) {
          hostname = "replit";
        } else {
          if (os.hostname().length == 36) {
            hostname = "heroku";
          } else {
            if (os.hostname().length == 8) {
              hostname = "koyeb";
            } else {
              hostname = os.hostname();
            }
          }
        }
        const _0x467f9b = "❖👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻❖\n\t    \n```👋 Hello " + _0x5c0de4 + "```" + "\n\n╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖\n│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* " + require("../package.json").version + "\n│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* " + runtime(process.uptime()) + "\n│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* " + hostname + "\n╰━━━━━━━━━━━━━━━┈⊷";
        const _0x59d966 = [];
        const _0x5f4765 = new Map();
        for (let _0x2a2185 = 0; _0x2a2185 < commands.length; _0x2a2185++) {
          const _0x115ff8 = commands[_0x2a2185];
          if (!_0x115ff8.dontAddCommandList && _0x115ff8.pattern !== undefined) {
            const _0x3f458e = _0x115ff8.category.toUpperCase();
            if (!_0x5f4765.has(_0x3f458e)) {
              _0x59d966.push(_0x3f458e);
              _0x5f4765.set(_0x3f458e, []);
            }
            _0x5f4765.get(_0x3f458e).push(_0x115ff8.pattern);
          }
        }
        const _0x5a26c9 = [];
        for (const _0x2f3f80 of _0x59d966) {
          const _0x34f630 = {
            header: '',
            title: _0x2f3f80 + " MENU",
            description: '',
            id: _0x5786cc + "category " + _0x2f3f80
          };
          _0x5a26c9.push(_0x34f630);
        }
        const _0x11be64 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x26ca2d = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x11be64)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select a SubMenu",
            'sections': [{
              'title': "Please select a SubMenu",
              'highlight_label': "ᴠᴀᴊɪʀᴀ-ᴍᴅ",
              'rows': _0x5a26c9
            }]
          })
        }];
        const _0x20a24c = {
          image: config.LOGO,
          header: '',
          footer: "👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻",
          body: _0x467f9b
        };
        return await _0x224d5f.sendButtonMessage(_0x2382a8, _0x26ca2d, _0x185276, _0x20a24c);
      } catch (_0x557fa9) {
        _0x38ac51("*Error !!*");
        console.log(_0x557fa9);
      }
    });
    const _0x1fa9d7 = {
      pattern: "menu2",
      react: '📂',
      alias: ["help"],
      desc: "Get bot's command list.",
      category: "main",
      use: ".menu",
      filename: __filename
    };
    cmd(_0x1fa9d7, async (_0x46bafe, _0x47b4d6, _0x127bb1, {
      from: _0x4929e5,
      prefix: _0x4778a5,
      l: _0x2d938c,
      quoted: _0x32e58c,
      body: _0x4a785d,
      isCmd: _0x4d2487,
      command: _0x25f537,
      args: _0x580b1c,
      q: _0x9caa23,
      isGroup: _0x5c6635,
      sender: _0x296d77,
      senderNumber: _0x1d62a7,
      botNumber2: _0x4cf259,
      botNumber: _0x38c3e2,
      pushname: _0x2a6e1b,
      isMe: _0x184eea,
      isOwner: _0x2ed602,
      groupMetadata: _0x1ffa4,
      groupName: _0x33c100,
      participants: _0x2a6e9f,
      groupAdmins: _0x36f2ec,
      isBotAdmins: _0x26484c,
      isAdmins: _0xc5da63,
      reply: _0x25d077
    }) => {
      try {
        let _0x250f4e = '';
        for (let _0x4c74f6 = 0; _0x4c74f6 < commands.length; _0x4c74f6++) {
          if (commands[_0x4c74f6].category === "download") {
            if (!commands[_0x4c74f6].dontAddCommandList) {
              _0x250f4e += "*◉ :* " + commands[_0x4c74f6].pattern + "\n";
            }
          }
        }
        ;
        let _0x203ea2 = '';
        for (let _0x4c6ec5 = 0; _0x4c6ec5 < commands.length; _0x4c6ec5++) {
          if (commands[_0x4c6ec5].category === "search") {
            if (!commands[_0x4c6ec5].dontAddCommandList) {
              _0x203ea2 += "*◉ :* " + commands[_0x4c6ec5].pattern + "\n";
            }
          }
        }
        ;
        let _0x1bf356 = '';
        for (let _0x583f6d = 0; _0x583f6d < commands.length; _0x583f6d++) {
          if (commands[_0x583f6d].category === "convert") {
            if (!commands[_0x583f6d].dontAddCommandList) {
              _0x1bf356 += "*◉ :* " + commands[_0x583f6d].pattern + "\n";
            }
          }
        }
        ;
        let _0x14686e = '';
        for (let _0x5155bc = 0; _0x5155bc < commands.length; _0x5155bc++) {
          if (commands[_0x5155bc].category === "logo") {
            if (!commands[_0x5155bc].dontAddCommandList) {
              _0x14686e += "*◉ :* " + commands[_0x5155bc].pattern + "\n";
            }
          }
        }
        ;
        let _0x52e1a7 = '';
        for (let _0x241bfb = 0; _0x241bfb < commands.length; _0x241bfb++) {
          if (commands[_0x241bfb].category === "main") {
            if (!commands[_0x241bfb].dontAddCommandList) {
              _0x52e1a7 += "*◉ :* " + commands[_0x241bfb].pattern + "\n";
            }
          }
        }
        ;
        let _0x1ab21c = '';
        for (let _0xbef5b6 = 0; _0xbef5b6 < commands.length; _0xbef5b6++) {
          if (commands[_0xbef5b6].category === "group") {
            if (!commands[_0xbef5b6].dontAddCommandList) {
              _0x1ab21c += "*◉ :* " + commands[_0xbef5b6].pattern + "\n";
            }
          }
        }
        ;
        let _0x5e016c = '';
        for (let _0x3a399f = 0; _0x3a399f < commands.length; _0x3a399f++) {
          if (commands[_0x3a399f].category === "bug") {
            if (!commands[_0x3a399f].dontAddCommandList) {
              _0x5e016c += "*◉ :* " + commands[_0x3a399f].pattern + "\n";
            }
          }
        }
        ;
        let _0x5b9980 = '';
        for (let _0x25b6ff = 0; _0x25b6ff < commands.length; _0x25b6ff++) {
          if (commands[_0x25b6ff].category === "movie") {
            if (!commands[_0x25b6ff].dontAddCommandList) {
              _0x5b9980 += "*◉ :* " + commands[_0x25b6ff].pattern + "\n";
            }
          }
        }
        ;
        let _0x1e3d00 = '';
        for (let _0x52c22e = 0; _0x52c22e < commands.length; _0x52c22e++) {
          if (commands[_0x52c22e].category === "other") {
            if (!commands[_0x52c22e].dontAddCommandList) {
              _0x1e3d00 += "*◉ :* " + commands[_0x52c22e].pattern + "\n";
            }
          }
        }
        ;
        let _0x149727 = "*Hellow👸* " + _0x2a6e1b + "\n\n*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*\n*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* " + runtime(process.uptime()) + " \n*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*╰──────────●●►*\n*👸 𝘝𝘈𝘑𝘐𝘙𝘈 𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*\n> *╭──────────●●►*\n> *│🧙‍♂️ DOWNLOAD COMMANDS*\n> *│   ───────*\n\n" + _0x250f4e + "*╰───────────●●►*\n> *╭──────────●●►*\n> *│🧙‍♂️ SEARCH COMMANDS*\n> *│   ───────*\n\n" + _0x203ea2 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ CONVERT COMMANDS*\n> *│   ───────*\n\n" + _0x1bf356 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ LOGO COMMANDS*\n> *│   ───────*\n\n" + _0x14686e + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ MAIN COMMANDS*\n> *│   ───────*\n\n" + _0x52e1a7 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ GROUP COMMANDS*\n> *│   ───────*\n\n" + _0x1ab21c + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ BUG COMMANDS*\n> *│   ───────*\n\n" + _0x5e016c + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ MOVIE COMMANDS*\n> *│   ───────*\n\n" + _0x5b9980 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│🧙‍♂️ OTHER COMMANDS*\n> *│   ───────*\n\n" + _0x1e3d00 + "*╰───────────●●►*\t\n\n👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ 👨‍💻";
        const _0x38dc42 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x18464c = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x38dc42)
        }];
        const _0x5e3ac0 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x149727
        };
        return await _0x46bafe.sendButtonMessage(_0x4929e5, _0x18464c, _0x127bb1, _0x5e3ac0);
      } catch (_0x23c774) {
        _0x25d077("*ERROR !!*");
        console.log(_0x23c774);
      }
    });
    const _0x759198 = {
      pattern: "category",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x759198, async (_0x319adf, _0x595613, _0x40319f, {
      from: _0x5d4ee1,
      q: _0x2b0243,
      reply: _0x2c4d85
    }) => {
      try {
        const _0x110ba7 = _0x2b0243.trim().toUpperCase();
        let _0x499a20 = "*◈╾──────" + _0x110ba7 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy X-BYTE whatsapp bot 👨‍💻\n\n";
        for (let _0x385395 = 0; _0x385395 < commands.length; _0x385395++) {
          const _0x2d51b7 = commands[_0x385395];
          if (_0x2d51b7.category.toUpperCase() === _0x110ba7) {
            _0x499a20 += "╭────────●●►\n│ • *" + _0x2d51b7.pattern + "* \n╰────────────────────●●►\n";
          }
        }
        _0x499a20 += "\n⭓ *Total Commands List " + _0x110ba7 + "*: " + commands.filter(_0x5758a2 => _0x5758a2.category.toUpperCase() === _0x110ba7).length + "\n\n" + "*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*";
        const _0x24a191 = {
          newsletterJid: "120363290448968237@newsletter",
          serverMessageId: 0x7f
        };
        const _0x9e8fa6 = {
          title: "👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻",
          body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
          mediaType: 0x1,
          sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          thumbnailUrl: config.LOGO,
          renderLargerThumbnail: true,
          showAdAttribution: false
        };
        const _0x3b73cc = {
          mentionedJid: [''],
          groupMentions: [],
          forwardingScore: 0x457,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x24a191,
          externalAdReply: _0x9e8fa6
        };
        const _0x4fc4eb = {
          text: _0x499a20,
          contextInfo: _0x3b73cc
        };
        const _0x573ce6 = {
          quoted: _0x595613
        };
        await _0x319adf.sendMessage(_0x5d4ee1, _0x4fc4eb, _0x573ce6);
      } catch (_0x39f35f) {
        _0x2c4d85("*Error !!*");
        console.log(_0x39f35f);
      }
    });
    const _0x258102 = {
      pattern: "alive",
      react: '🍬',
      desc: "Check bot online or no.",
      category: "main",
      use: ".alive",
      filename: __filename
    };
    cmd(_0x258102, async (_0x2ab133, _0x278f51, _0x5795b9, {
      from: _0x296db0,
      prefix: _0x28ce95,
      l: _0x1bf97e,
      quoted: _0x3e60de,
      body: _0x2bac96,
      isCmd: _0x2aa363,
      command: _0x2dd264,
      args: _0x5953fa,
      q: _0x597566,
      isGroup: _0x399459,
      sender: _0x11c7c9,
      senderNumber: _0xcc7c43,
      botNumber2: _0x556a26,
      botNumber: _0x5971e4,
      pushname: _0x163ace,
      isMe: _0x467031,
      isOwner: _0xe096b5,
      groupMetadata: _0x68a1e4,
      groupName: _0x32e529,
      participants: _0x3872ad,
      groupAdmins: _0x5d03ea,
      isBotAdmins: _0x258f5b,
      isAdmins: _0x45e1e2,
      reply: _0x19f52e
    }) => {
      try {
        if (os.hostname().length == 12) {
          hostname = "replit";
        } else {
          if (os.hostname().length == 36) {
            hostname = "heroku";
          } else {
            if (os.hostname().length == 8) {
              hostname = "koyeb";
            } else {
              hostname = os.hostname();
            }
          }
        }
        const _0x1b867b = "```👋 Hello " + _0x163ace + " I'm alive now" + "```" + "\n\n*👾 Im VAJIRRA-MD whatsapp bot*\n    \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n                    \t    \n*🍭 Have A Nice Day 🍭*";
        const _0x13e421 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x5dd909 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x13e421)
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Get Menu",
            'id': _0x28ce95 + "menu"
          })
        }];
        const _0x5e281e = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x1b867b
        };
        return await _0x2ab133.sendButtonMessage(_0x296db0, _0x5dd909, _0x5795b9, _0x5e281e);
      } catch (_0x557b1b) {
        _0x19f52e("*Error !!*");
        console.log(_0x557b1b);
      }
    });
    const _0x5344f3 = {
      pattern: 'sc',
      react: "🗃️",
      alias: ["repo", "script", "status"],
      desc: "Get bot's command list.",
      category: "main",
      use: ".sc",
      filename: __filename
    };
    cmd(_0x5344f3, async (_0x4dc243, _0x3843a0, _0x507e03, {
      from: _0x2da825,
      prefix: _0x57fe8c,
      l: _0x455d23,
      quoted: _0x724e55,
      body: _0x16ebc6,
      isCmd: _0x507241,
      command: _0x4d206c,
      args: _0x3e86d9,
      q: _0x101766,
      isGroup: _0x51af73,
      sender: _0x830df1,
      senderNumber: _0x2317b2,
      botNumber2: _0x110fbe,
      botNumber: _0x2e8777,
      pushname: _0x1cfcf0,
      isMe: _0x25d597,
      isOwner: _0x21705d,
      groupMetadata: _0x5f1317,
      groupName: _0x2e8766,
      participants: _0x185203,
      groupAdmins: _0xba3b2,
      isBotAdmins: _0x6b08a,
      isAdmins: _0x224337,
      reply: _0x2f8479
    }) => {
      try {
        if (os.hostname().length == 12) {
          hostname = "replit";
        } else {
          if (os.hostname().length == 36) {
            hostname = "heroku";
          } else {
            if (os.hostname().length == 8) {
              hostname = "koyeb";
            } else {
              hostname = os.hostname();
            }
          }
        }
        const _0x5171dc = "```👋 Hello " + _0x1cfcf0 + "```" + "\n\n*👾 X-BYTE commands menu...*\n  \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\n  *X-BYTE WHATSAPP USER BOT* 💫\n\n                     *OUR MISSION*\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n\n\n🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier\n\n";
        let _0x1ea9af = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "YT CHANNEL",
            'url': "https://youtube.com/@gamingewingyt6216?si=4Ds50i6gx8_IrZol",
            'merchant_url': "https://youtube.com/@gamingewingyt6216?si=4Ds50i6gx8_IrZol"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "FB PAGE",
            'url': "https://www.facebook.com/WMRTECH",
            'merchant_url': "https://www.facebook.com/WMRTECH"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "MY WA NUMBER",
            'url': "https://wa.me/94719199757",
            'merchant_url': "https://wa.me/94719199757"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "MY WA CHANNEL",
            'url': "https://whatsapp.com/channel/0029VadExMQHwXb9GtsC1A24",
            'merchant_url': "https://whatsapp.com/channel/0029VadExMQHwXb9GtsC1A24"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "MY BOT REPO",
            'url': "https://github.com/VajiraTech/X-BYTE",
            'merchant_url': "https://github.com/VajiraTech/X-BYTE"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Get Menu",
            'id': _0x57fe8c + "menu"
          })
        }];
        const _0x1e2e84 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x5171dc
        };
        return await _0x4dc243.sendButtonMessage(_0x2da825, _0x1ea9af, _0x507e03, _0x1e2e84);
      } catch (_0x11736f) {
        _0x2f8479("*Error !!*");
        console.log(_0x11736f);
      }
    });
  }
  function _0x3737b7(_0xd2ce7c, _0x52051d, _0x1740cc, _0x314577, _0xe58d97) {
    return _0x65d3(_0xd2ce7c - 0x138, _0xe58d97);
  }
  const _0x4a4569 = {
    pattern: "system",
    react: "🖥️",
    alias: ["s_info"],
    desc: "To Check bot's System information",
    category: "main",
    use: ".system",
    filename: __filename
  };
  cmd(_0x4a4569, async (_0x54a2ff, _0x37ebff, _0x4343bb, {
    from: _0x44c65e,
    l: _0x421775,
    quoted: _0x5e43ec,
    body: _0x5ab314,
    isCmd: _0x1f2d59,
    command: _0x3b7eab,
    args: _0x292074,
    q: _0x28e604,
    isGroup: _0x308220,
    sender: _0x4d655a,
    senderNumber: _0x1829ce,
    botNumber2: _0x20cb81,
    botNumber: _0x1f6cf9,
    pushname: _0x166a07,
    isMe: _0x51b9c3,
    isOwner: _0x25ccdb,
    groupMetadata: _0x337743,
    groupName: _0x993a8c,
    participants: _0x56059d,
    groupAdmins: _0x1c6172,
    isBotAdmins: _0x5ba66d,
    isAdmins: _0x24824b,
    reply: _0x35fe8d
  }) => {
    try {
      const _0x52c300 = await si.cpu();
      const _0x3c874c = await si.version();
      let _0x3501c0 = await si.time();
      const _0x2a93b6 = os.hostname();
      let _0x51df02 = await fetchJson("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/packageForXbyte.json");
      if (_0x2a93b6.length > 15) {
        const _0x2886ef = "🖥️  *X-BYTE SYSTEM INFORMATIONS*  🖥️\n\n🤖  *_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB_\n3.  _Bot Version -: " + _0x51df02.version + " Stable_\n\n📶  *_Server System informations_*\n\n1.  _Platform : Heroku_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x52c300.manufacturer + "_\n4.  _CPU Brand -: " + _0x52c300.brand + "_\n5.  _CPU Speed -: " + _0x52c300.speed + "_\n\n⚙️  *_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x3c874c + "_\n\n💻  *_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x3501c0.timezone + "_\n2. _Time Zone Name -: " + _0x3501c0.timezoneName + '_';
        const _0x175ed4 = {
          text: _0x2886ef
        };
        const _0x5befef = {
          quoted: _0x37ebff
        };
        return await _0x54a2ff.sendMessage(_0x44c65e, _0x175ed4, _0x5befef);
      }
      const _0x17a80b = "🖥️  *X-BYTE SYSTEM INFORMATIONS*  🖥️\n\n🤖  *_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB_\n3.  _Bot Version -: " + _0x51df02.version + " Stable_\n\n📶  *_Server System informations_*\n\n1.  _Platform : " + _0x2a93b6 + "_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x52c300.manufacturer + "_\n4.  _CPU Brand -: " + _0x52c300.brand + "_\n5.  _CPU Speed -: " + _0x52c300.speed + "_\n\n⚙️  *_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x3c874c + "_\n\n💻  *_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x3501c0.timezone + "_\n2. _Time Zone Name -: " + _0x3501c0.timezoneName + '_';
      const _0x3cf3ca = {
        text: _0x17a80b
      };
      const _0x28a500 = {
        quoted: _0x37ebff
      };
      await _0x54a2ff.sendMessage(_0x44c65e, _0x3cf3ca, _0x28a500);
    } catch (_0x4969af) {
      _0x35fe8d("*Error !!*");
      _0x421775(_0x4969af);
    }
  });
  const _0x337cae = {};
  function _0x4ccd35(_0x119662, _0x492ece, _0x4d8db2, _0x2ea049, _0x45def6) {
    return _0x65d3(_0x2ea049 - 0x137, _0x492ece);
  }
  function _0x65d3(_0x4272a9, _0x31ac88) {
    const _0x2728a2 = _0x2810();
    _0x65d3 = function (_0x4f39be, _0x43a395) {
      _0x4f39be = _0x4f39be - 389;
      let _0x26bf88 = _0x2728a2[_0x4f39be];
      if (_0x65d3.EajhCq === undefined) {
        var _0x3a0944 = function (_0x3bcea8) {
          let _0x4af8c4 = '';
          let _0x1b1a05 = '';
          let _0x375ff2 = 0;
          let _0x1bbe0a;
          let _0x5ec3bc;
          for (let _0xaaaebd = 0; _0x5ec3bc = _0x3bcea8.charAt(_0xaaaebd++); ~_0x5ec3bc && (_0x1bbe0a = _0x375ff2 % 4 ? _0x1bbe0a * 64 + _0x5ec3bc : _0x5ec3bc, _0x375ff2++ % 4) ? _0x4af8c4 += String.fromCharCode(255 & _0x1bbe0a >> (-2 * _0x375ff2 & 6)) : 0) {
            _0x5ec3bc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x5ec3bc);
          }
          let _0x700312 = 0;
          for (let _0xe74fd8 = _0x4af8c4.length; _0x700312 < _0xe74fd8; _0x700312++) {
            _0x1b1a05 += '%' + ('00' + _0x4af8c4.charCodeAt(_0x700312).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x1b1a05);
        };
        const _0x2cc668 = function (_0x4665f8, _0x52cbe5) {
          let _0x11e778 = [];
          let _0x39e5ed = 0;
          let _0x1b85a8;
          let _0x32ab0f = '';
          _0x4665f8 = _0x3a0944(_0x4665f8);
          let _0x1ced09;
          for (_0x1ced09 = 0; _0x1ced09 < 256; _0x1ced09++) {
            _0x11e778[_0x1ced09] = _0x1ced09;
          }
          for (_0x1ced09 = 0; _0x1ced09 < 256; _0x1ced09++) {
            _0x39e5ed = (_0x39e5ed + _0x11e778[_0x1ced09] + _0x52cbe5.charCodeAt(_0x1ced09 % _0x52cbe5.length)) % 256;
            _0x1b85a8 = _0x11e778[_0x1ced09];
            _0x11e778[_0x1ced09] = _0x11e778[_0x39e5ed];
            _0x11e778[_0x39e5ed] = _0x1b85a8;
          }
          _0x1ced09 = 0;
          _0x39e5ed = 0;
          for (let _0x36d4a9 = 0; _0x36d4a9 < _0x4665f8.length; _0x36d4a9++) {
            _0x1ced09 = (_0x1ced09 + 1) % 256;
            _0x39e5ed = (_0x39e5ed + _0x11e778[_0x1ced09]) % 256;
            _0x1b85a8 = _0x11e778[_0x1ced09];
            _0x11e778[_0x1ced09] = _0x11e778[_0x39e5ed];
            _0x11e778[_0x39e5ed] = _0x1b85a8;
            _0x32ab0f += String.fromCharCode(_0x4665f8.charCodeAt(_0x36d4a9) ^ _0x11e778[(_0x11e778[_0x1ced09] + _0x11e778[_0x39e5ed]) % 256]);
          }
          return _0x32ab0f;
        };
        _0x65d3.kbtbfA = _0x2cc668;
        _0x4272a9 = arguments;
        _0x65d3.EajhCq = true;
      }
      const _0x4deb50 = _0x2728a2[0];
      const _0x3c2c2d = _0x4f39be + _0x4deb50;
      const _0x15c769 = _0x4272a9[_0x3c2c2d];
      if (!_0x15c769) {
        if (_0x65d3.vtRguU === undefined) {
          _0x65d3.vtRguU = true;
        }
        _0x26bf88 = _0x65d3.kbtbfA(_0x26bf88, _0x43a395);
        _0x4272a9[_0x3c2c2d] = _0x26bf88;
      } else {
        _0x26bf88 = _0x15c769;
      }
      return _0x26bf88;
    };
    return _0x65d3(_0x4272a9, _0x31ac88);
  }
  _0x337cae.pattern = "antispam";
  _0x337cae.alias = ['as', "spamoff"];
  _0x337cae.react = '📚';
  _0x337cae.desc = "if anyone send a spam, use this imediatly.";
  _0x337cae.category = "main";
  function _0x4254ef(_0x5c1e53, _0x959fad, _0x4f20da, _0xc3c105, _0x5e8f59) {
    return _0x65d3(_0x5c1e53 - 0x23f, _0x959fad);
  }
  _0x337cae.use = ".antispam";
  _0x337cae.filename = __filename;
  function _0x1ef509(_0x5df872, _0x2f0c89, _0x210800, _0xf98b7f, _0x2e4fbe) {
    return _0x65d3(_0x2e4fbe + 0x31, _0xf98b7f);
  }
  cmd(_0x337cae, async (_0x3598fc, _0x2d4b1c, _0x3cfc12, {
    from: _0x1605bf,
    l: _0x2c4bf6,
    quoted: _0xbeefd0,
    body: _0x5d73f5,
    isCmd: _0x2f5899,
    command: _0x54776d,
    args: _0x51acbe,
    q: _0x209365,
    isGroup: _0x2f05b2,
    sender: _0x21fd9b,
    senderNumber: _0x1b318b,
    botNumber2: _0x1c1d10,
    botNumber: _0x5646c7,
    pushname: _0xb9ac2f,
    isMe: _0x306b5d,
    isOwner: _0x1338c8,
    groupMetadata: _0x3e58b2,
    groupName: _0x13fcc7,
    participants: _0x5be5a0,
    groupAdmins: _0x4b69cc,
    isBotAdmins: _0x2120f5,
    isAdmins: _0x1fbc24,
    reply: _0x583c4d
  }) => {
    try {
      _0x583c4d("\n🚮clear chat\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 🚮clear chat\n");
    } catch (_0xb207e4) {
      _0x2c4bf6(_0xb207e4);
    }
  });
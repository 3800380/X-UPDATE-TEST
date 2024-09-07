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
      const _0x5625cb = "\nX-BYTE want money from youuuuu".trim();
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
    pattern: "menu2",
    react: '2️⃣',
    alias: ["panel", "buttons", "commands", "cmd"],
    desc: "Get bot's buttoned version commands list.",
    category: "main",
    use: ".menu2",
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
      const _0x467f9b = "```👋 Hello " + _0x5c0de4 + "```" + "\n\n╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───\n│ *𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* " + require("../package.json").version + "\n│ *𝙈𝙀𝙈𝙊𝙍𝙔:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n│ *𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* " + runtime(process.uptime()) + "\n│ *𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* " + hostname + "\n╰━━━━━━━━━━━━━━━┈⊷";
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
          'title': "tap here",
          'sections': [{
            'title': "Please tap here",
            'highlight_label': "X-BYTE",
            'rows': _0x5a26c9
          }]
        })
      }];
      const _0x20a24c = {
        image: config.LOGO,
        header: '',
        footer: "POWERED BY TALKDROVE",
        body: _0x467f9b
      };
      return await _0x224d5f.sendButtonMessage(_0x2382a8, _0x26ca2d, _0x185276, _0x20a24c);
    } catch (_0x557fa9) {
      _0x38ac51("*Error !!*");
      console.log(_0x557fa9);
    }
  });
  const _0x1fa9d7 = {
    pattern: "menu",
    react: '✅',
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
            _0x250f4e += "*O:* " + commands[_0x4c74f6].pattern + "\n";
          }
        }
      }
      ;
      let _0x203ea2 = '';
      for (let _0x4c6ec5 = 0; _0x4c6ec5 < commands.length; _0x4c6ec5++) {
        if (commands[_0x4c6ec5].category === "search") {
          if (!commands[_0x4c6ec5].dontAddCommandList) {
            _0x203ea2 += "*O:* " + commands[_0x4c6ec5].pattern + "\n";
          }
        }
      }
      ;
      let _0x1bf356 = '';
      for (let _0x583f6d = 0; _0x583f6d < commands.length; _0x583f6d++) {
        if (commands[_0x583f6d].category === "convert") {
          if (!commands[_0x583f6d].dontAddCommandList) {
            _0x1bf356 += "*O:* " + commands[_0x583f6d].pattern + "\n";
          }
        }
      }
      ;
      let _0x14686e = '';
      for (let _0x5155bc = 0; _0x5155bc < commands.length; _0x5155bc++) {
        if (commands[_0x5155bc].category === "logo") {
          if (!commands[_0x5155bc].dontAddCommandList) {
            _0x14686e += "*O:* " + commands[_0x5155bc].pattern + "\n";
          }
        }
      }
      ;
      let _0x52e1a7 = '';
      for (let _0x241bfb = 0; _0x241bfb < commands.length; _0x241bfb++) {
        if (commands[_0x241bfb].category === "main") {
          if (!commands[_0x241bfb].dontAddCommandList) {
            _0x52e1a7 += "*O:* " + commands[_0x241bfb].pattern + "\n";
          }
        }
      }
      ;
      let _0x1ab21c = '';
      for (let _0xbef5b6 = 0; _0xbef5b6 < commands.length; _0xbef5b6++) {
        if (commands[_0xbef5b6].category === "group") {
          if (!commands[_0xbef5b6].dontAddCommandList) {
            _0x1ab21c += "*O:* " + commands[_0xbef5b6].pattern + "\n";
          }
        }
      }
      ;
      let _0x5e016c = '';
      for (let _0x3a399f = 0; _0x3a399f < commands.length; _0x3a399f++) {
        if (commands[_0x3a399f].category === "bug") {
          if (!commands[_0x3a399f].dontAddCommandList) {
            _0x5e016c += "*O:* " + commands[_0x3a399f].pattern + "\n";
          }
        }
      }
      ;
      let _0x5b9980 = '';
      for (let _0x25b6ff = 0; _0x25b6ff < commands.length; _0x25b6ff++) {
        if (commands[_0x25b6ff].category === "movie") {
          if (!commands[_0x25b6ff].dontAddCommandList) {
            _0x5b9980 += "*O:* " + commands[_0x25b6ff].pattern + "\n";
          }
        }
      }
      ;
      let _0x1e3d00 = '';
      for (let _0x52c22e = 0; _0x52c22e < commands.length; _0x52c22e++) {
        if (commands[_0x52c22e].category === "other") {
          if (!commands[_0x52c22e].dontAddCommandList) {
            _0x1e3d00 += "*O:* " + commands[_0x52c22e].pattern + "\n";
          }
        }
      }
      ;
      let _0x149727 = "*╭─  *X-BYTE MENU* \n*│RUN TIME -* " + runtime(process.uptime()) + " \n*│RAM USEAGE -* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*╰──────────►*\n*𝘊𝘰𝘮𝘮𝘢𝘮𝘥s:*\n> *╭──────────►*\n> *│DOWNLOAD COMMANDS*\n> *│   ───────*\n\n" + _0x250f4e + "**\n> *╭──────────►*\n> *│SEARCH COMMANDS*\n> *│   ───────*\n\n" + _0x203ea2 + "**\n\n> *╭──────────►*\n> *│CONVERT COMMANDS*\n> *│   ───────*\n\n" + _0x1bf356 + "**\n\n> *╭──────────►*\n> *│LOGO COMMANDS*\n> *│   ───────*\n\n" + _0x14686e + "**\n\n> *╭──────────►*\n> *│MAIN COMMANDS*\n> *│   ───────*\n\n" + _0x52e1a7 + "**\n\n> *╭──────────►*\n> *│GROUP COMMANDS*\n> *│   ───────*\n\n" + _0x1ab21c + "**\n\n> *╭──────────►*\n> *│BUG COMMANDS*\n> *│   ───────*\n\n" + _0x5e016c + "**\n\n> *╭──────────►*\n> *│MOVIE COMMANDS*\n> *│   ───────*\n\n" + _0x5b9980 + "**\n\n> *╭──────────►*\n> *│OTHER COMMANDS*\n> *│   ───────*\n\n" + _0x1e3d00 + "**\t\n\nX-BYTE BY TALKDROVE";
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
      let _0x499a20 = "*◈╾──────" + _0x110ba7 + "SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy X-BYTE whatsapp bot\n\n";
      for (let _0x385395 = 0; _0x385395 < commands.length; _0x385395++) {
        const _0x2d51b7 = commands[_0x385395];
        if (_0x2d51b7.category.toUpperCase() === _0x110ba7) {
          _0x499a20 += "╭────────►\n│ • *" + _0x2d51b7.pattern + "* \n╰────────────────────►\n";
        }
      }
      _0x499a20 += "\n*Total Commands List " + _0x110ba7 + "*: " + commands.filter(_0x5758a2 => _0x5758a2.category.toUpperCase() === _0x110ba7).length + "\n\n" + "*X-BYTE*\n*By TalkDrove*";
      const _0x24a191 = {
        newsletterJid: "120363252060326102@newsletter",
        serverMessageId: 0x7f
      };
      const _0x9e8fa6 = {
        title: "POWERED BY TALKDROVE",
        body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
        mediaType: 0x1,
        sourceUrl: "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l",
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
  const HamzaUptime = {
    pattern: "runtime",
    react: '🐼',
    alias: ["uptime", "runntime"],
    desc: "check bot runtime/Uptime.",
    category: "main",
    use: ".alive",
    filename: __filename
  };  cmd(HamzaUptime, async (_0x2ab133, _0x278f51, _0x5795b9, {
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
      const _0x1b867b = "*_X-BYTE, running for_*" + " "+ runtime(process.uptime()); +" 🐼"
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
      const _0x1b867b = "```👋 Hello " + _0x163ace + " I'm alive now" + "```" + "\n\n*👾 Im X-BYTE whatsapp bot*\n    \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\n*Have A Nice Day*";
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
      const _0x5171dc = "```👋 Hello " + _0x1cfcf0 + "```" + "\n\n*I'm Here X-BYTE..*\n  \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\nYou can get X-BYTE for free, follow TalkDrove for more updates ";
      let _0x1ea9af = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "YT CHANNEL",
          'url': "https://youtube.com/@talkdrove",
          'merchant_url': "https://youtube.com/@talkdrove"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FB PAGE",
          'url': "https://www.facebook.com/talkdrove",
          'merchant_url': "https://www.facebook.com/talkdrove"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "WA NUMBER",
          'url': "https://wa.me/923072380380",
          'merchant_url': "https://wa.me/923072380380"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "WA CHANNEL",
          'url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l",
          'merchant_url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "BOT REPO",
          'url': "https://github.com/HyHamza/X-BYTE",
          'merchant_url': "https://github.com/HyHamza/X-BYTE"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Go Menu",
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
      const _0x2886ef = "*X-BYTE SYSTEM INFORMATIONS*\n\n*_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB_\n3.  _Bot Version -: " + _0x51df02.version + " Stable_\n\n*_Server System informations_*\n\n1.  _Platform : Heroku_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x52c300.manufacturer + "_\n4.  _CPU Brand -: " + _0x52c300.brand + "_\n5.  _CPU Speed -: " + _0x52c300.speed + "_\n\n*_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x3c874c + "_\n\n*_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x3501c0.timezone + "_\n2. _Time Zone Name -: " + _0x3501c0.timezoneName + '_';
      const _0x175ed4 = {
        text: _0x2886ef
      };
      const _0x5befef = {
        quoted: _0x37ebff
      };
      return await _0x54a2ff.sendMessage(_0x44c65e, _0x175ed4, _0x5befef);
    }
    const _0x17a80b = "*X-BYTE SYSTEM INFORMATIONS*\n\n*_Bot's System informations_*\n\n1.  _Runtime -: " + runtime(process.uptime()) + "_\n2.  _Ram Usage -: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB_\n3.  _Bot Version -: " + _0x51df02.version + " Stable_\n\n*_Server System informations_*\n\n1.  _Platform : " + _0x2a93b6 + "_\n2.  _Running OS : " + os.platform() + "_\n3.  _CPU Manufacture  -: " + _0x52c300.manufacturer + "_\n4.  _CPU Brand -: " + _0x52c300.brand + "_\n5.  _CPU Speed -: " + _0x52c300.speed + "_\n\n*_System Data Collector Engine_*\n\n1. _Engine Version -: " + _0x3c874c + "_\n\n*_Running Server's information_*\n\n1. _Server Time Zone -: " + _0x3501c0.timezone + "_\n2. _Time Zone Name -: " + _0x3501c0.timezoneName + '_';
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

function _0x2810() {
  const _0x5a2787 = ['4PsB4PsA4PEUW51B', 'ncZdSCkoWO4', 'W6zqofLH', '4BE54BECF8MYYyu', 'fIfJfNq', 'WPNdLG7dJmof', 'WPhcOfbBW5i', 'nCovmhed', '4PsY4PArW4lILQvn', 'W6m8W7jjCa', 'fgJdHSkg', 'AUc1QEc3H+c2Ioc2TG', 'WPCGWQ3cMwS', '4PEliSkYW73dTa', '8lkRJVc/IA7WU6QLWQvG', 'WOddGvC', 'WPr0WQqSbW', 'WQ5sWRVdKWG', 'h0W5W6DZ', 'ggpdKCoFWO4', 'W4uwWRq', '4PsK4PwW4PAL4PwG4PEE', 'W4e1W4jUwG', 'W7fPqSkplW', 'e0W8W5pdOa', 'W47cGSkAWPNdNa', 'WQCUpKJdOq', 'd8kbja', 'W6vFW73dTI4', '4PsQ4Pwd4PwY4PAk4PwT', 'WQ3cNWdcTmkv', 'hM3dR0VcVq', 'W4fRe1fT', 'cviLpNG', '4PAs4PEb4PAK4Pss4PEi', 'WPdILPFIL7FILRNILRu', 'fCkDF8kSW4q', 'WQFdHhBdGmkt', 'bduhWO/dNa', 'W4/cUq7cQmkk', 'oWRcMmoUlG', 'WOrrWR5kW7e', '8jUPKVggURFWQyUY8yoOLVgmQBu', 'Bg3cMbfh', '8jwkT/cWI4tXGAQFlSo4', 'tr7dG8oayW', 'vKtdQSk+WOW', 'W6vfymkbfW', 'et4WWOBdIW', 'tqtdISolCa', 'W6NdHMZcPrW', 'uvzwW4FcSW', 'WP3dNfVdJmoo', 'uqpdGa', 'vUkvKUkvMEkwNEkwGq', 'rCkhW7ZdUCku', 'WR8Pf1JdPa', 'FupcTSoJW4u', 'o0/dHSk3Fa', 'oKBcQcPG', 'WOrvWR1bW48', 'vNFcMYe/', 'WPGevWSM', 'wSoIF8ooWOu', 'ae/cVIP0', 'efFdIxZcOG', '4PAtwhbslq', 'oXddJSo9Cq', 'h8oLF8ocW7W', 'hxhdLg7cOW', 'eguKW5hcPa', 'dmoTDa', 'CxqMW4hcGq', 'rCkyxZja', 'FwpcL8ocW6e', 'deJdTmo7cG', '8jw3PU+5Vq', 'qSklW6xdVCkf', 'WOSyk37dNW', 'W4nfW4VdUJm', 'W7v9W5tdSI8', 'qYNdOSoQwa', 'DHHIza', 'egu1W7tcNW', 'W4xcNNCr', 'w30IW7H5', 'hMlcGSkOWQO', 'DCkcW68eWR4', 'cCknmCkGW6G', 'CmoExdr+', 'WPSuWObCW7a', 'W7TxkqS', 'l2hcIrzD', 'WQmkFqTZ', 'D0dcGCk6jW', 'W6tcPYBcHmka', '4PsH4PAD4PA14PsL4Ps8', 'WQ7dJK0RWQ4', 'WPRcQCkwW5tdKa', 'W5NcHSkdW5ZdKG', 'WPiPomoDWPy', 'uCkZW5CvWOe', 'WR7cILGNWOa', 'xXzwW5dcOG', 'tcZcUCobW7a', 'aCkFndrj', 'fwxcNZTM', 'Dg7dICkeCq', 'iCobESoNW78', 'WRFcOrtcMCkN', 'g8kqmJqB', 'WP/cTMfo', 'qrO2nNu', 'WReOmxVdHq', 'etRdJSoxCq', 'C1xdM8o5W4u', 'wJXfvhy', '4PwX4Ps44PAF4Pwf4PAS', 'c+kvLmkvW5ddMq', 'W7FXHlAl77MnW5BdI/cCP6K', 'WPVcJLiYWQC', 'W40aW4P7ta', 'W5VcK8o9', 'W6VdQghdH8o9', 'DMRcMdGI', 'F3xcGmkdea', 'hMddO8kuWPy', 'WORILlZILP3ILjRILl8', 'WRiWfeZdUa', 'DWvLyKu', 'W7Pmexfu', 'vMCRW6/dRG', 'rh0/W5BcKa', 'hMldKmkqWQK', 'fSoSEZqi', 'WPZcK0jQW5K', 'FxRcR0DU', '4PwO4PsN4PAd4PAv4PwM', 'nbyMgLO', 'uvaFW5BcQW', 'aY8lWPpdGG', 'WP7cO8oav8ka', 'W6ddQMldKSos', '8lgYRmoxW7hdKmky', 'WRm6f1ZdSG', 'YlhlUog1G3tHTly', 'WRGdeSo3WRW', 'WRNcRxrrW6C', 'WOZdNeRdH8kk', 'et4NWO/dJq', 'W6ddMmk9Dmk7', 'FHH/yem', 'W77cM38tCa', 'WPJcQNu', 'W5DlvSkxW5S', 'vcOwWOBdJa', 'WPWrmgZdHq', '4PAs4PsK4PwD4PEK4PEJ', 'ssWCW7Wi', 'ASotv2iM', 'WP3dG2iyuGtdRwC', 'DZxdVt8H', 'W5fAW6xdVqe', '8kwrJ+kcJVc6G53cU+g1P+g0Vog2QG', 'i0FdRSkNW54', 'W4npW7xdPW', 'ufFdLSkpqG', '4PAs4PsK4PwD4PsR4PsS', 'WO3dNeRdMW', 'BSkxWQ98WRC', 'W5RcPCo6nSo+', 'u2JcNSkAiG', 'W50HW6JcRu0', 'bhxcKZ50', 'hgNdLCktWRi', '4PE04PEz4PwF4PER4Psf', 'dSkHW7RdVSkj', 'ifpdNuVcOW', 'zCooW6ZcICkE', 'WOdcIqJdSxm', 'wIewW4JcGq', 'WOpILlGWrby', 'WO7cHWJdOvO', 'BSk9W5qKWQ8', 'ft8AWOldIG', 'W5L+fur+', 'WPVcMKXwW7q', 'CCkBywBdPq', 'pNyxW4JdKW', 'W4CfWQpdHmob', 'qmklW6BdUmkN', 'bHK/WRhdRW', 'yK3cUdfN', 'l2hcKXT+', 'W5tcGSkBWPBcHq', 'ld/dQdCg', 'WP7cTCkUmSoc', 'a+kwU1PwjW', 'W7qepLLj', 'aZOFage', 'y8oAAcddOq', 'tCkxW7W', 'cCkGpmkCWRK', 'omozvZWn', 'ybHWzem', 'p8kEf3H4', '4PAG4Pwm4PAD4PsA4Ps/', 'b1xdUG', 'cCk3nSkQW4m', 'dgBdT8oHfa', 'tCodFSolW7q', 'rrCuc3K', 'nb3dRIOR', 'WPZdH1ZdI8oe', 'fvWtW6v7', 'W54lWPJdKmo9', 'o0NcM8kvha', 'hKfvhMW', 'gCo2yXuj', 'W7X1wa', 'W4BcG2K', 'lf7cMW', 'ybHHA14', 'DmoEtq', 'WR7cGeOJWRS', 'sX0Efq', 'lmkWf8kHW6K', 'twNcJW', 'WORcLri', 'WQiMhCkAW7u', 'g1tdNtX6', 'WPqolq', 'pxBdLCoKlW', '4Bsc6PY04BESY4XS', 'hM3cLCokWQq', 'huJdTuxcVW', '4PwBuKLE', 'WOFcVdhcJ8kh', 'W6VcNWFcTSkb', 'WRNcIq4WWRK', 'WO9DWR9aW60', 'xZeE', 'W4RcHSkdW43dKa', 'WOxcIrtdSNC', 'WQ3dTe7IL4dXGPAA77Q04Okx4PUy77MJ', 'DSk3FHja', 'z1dcMc0R', 'WO3cIapdTZy', 'srxdIa', 'ACkbW6y', '4BsRY7FiTEg3QSot', 'hmo+EXua', 'WR0EW7pWLOcOW6G', 'W7fLW4ldHW4', 'W45ICCkOW54', 'vMtcKWyN', '4PA/4PEs4PAj4PwA4PAB', 'nxRcMIFdRa', 'WRFcJGpcPxS', 'aCkEoa', 'eKm1W5ZdPq', 'WPipia', 'WRJdKftdOSkN', 'YilHTkpHTOpiIKy', 'uSkdqvddOq', 'weZdKMhcVW', 'qfScW5dcRW', 'W7zahKrb', 'WRjPpevz', 'dCo6BHmt', 'uMNcLCojW7a', 'xrP1D1G', '8jE5MVcHURZWPOM0CFc8U5i', 'BSosW5aLWR0', 'CxFcKMW', 'ub/dO8ogAq', 'WPHzWQ3dGqi', 'W5jSWRW7fq', 'dSoHzCodW74', 'WRHOWQNdRYq', 'WPdcVrZcHmkN', 'EmkAq3FdSW', 'WRWeFxr+', 'i1jWtaC', 'mIjdzLO', 'W7ZcO0i2Aa', 'ookwTde9hq', 'dmo0C8ojW60', 'sGpdQmocxG', 'WRtcJ1ONWRS', 'lvOqW4NdKW', 'W79bmerE', 'WOBdUr3cHmk+', 'ofBdL8kpWRG', 'ehqJW6NcIa', 'WPRdUuNdPCoN', 'W7ClW4lcH2C', 'W5tdK3/dOCoQ', 'fXBdPXKH', 'W47cLCkEW5q', 'beWKW6v4', 'BSkFWRL2W64', 'E8kBW6uL', 'tqJcGZNdUCk0WQtdNmk9nuvM', 'dNRcM8kpoW', 'pXC0oLC', 'buGhW7Lo', 'WPdcTJhcN8kl', 'srhdJmob', 'ECk7FxpdPW', 'B8kgWQ07WQC', 'pGSWnvW', 'W6lcKbC', 'WO4yn2NdKW', 'cHJcMYNdPG', 'qZag', 'i23cMa', 'W55ZW4/dLt8', '8jQ5IVghQiJWRPQb8kg4SmkD', 'WRxdSSkdESkr', 'pKxdTSk2WRa', 'W6RdSMddTSom', 'at5tWOxdLW', 'FhZcSCoQW6a', 'W4/cKYtcNmkk', '4OcluLa', '4PA64PEN4Ps44Pw24Psp', 'cSoobdlcIG', 'YAliLYRHTjBcNa', 'WOxcPWxcK8k2', 'YlBiKmQN4BAK4BAn', 'aXHXWQS8', 'D8kTCrvh', 'W6xcKrFcTSkA', 'WOtcGWddRLS', 'xwFcMSojW6e', 'tSoZW4BcTCoz', 'qUkxRSkJWQ9m', 'kUkwNUkuJUkuKUkwGa', 'WPdcS8oD', 'jx7dO8k1ta', 'bmoZzq', 'v27cJSoAW60', 'cmoJzq', 'WQFcVdpcJSkP', 'Y53kQUg2JCkZ4Bwg', 'cLhdNwdcUa', 'W5lcS8oNpG', 'BJJdLCoixW', 'rXxcHCoBFG', 'vdJdHSoyFa', 'kIRdNSoxeG', 'W73ILP7ILk7ILylIL5W', 'W60bWRNcGmoV', 'WOCmn2pdKW', 'WRvkWR7dGK0', 'W4BcHtCnha', 'vG3cGSo1W6i', 'EYJcSCoxW7q', 'eMhdTSknBa', 'WRumdmoXtG', '4PsqxteN4Ps3', 'WOanW7n+hW', '4Bs14BEF4BsAYjhkOW', 'qSoJECohW7C', 'DCktW6aKWOS', 'dSoVFmolW7G', 'z8kmW63dR8kn', 'WRuSC8kPgW', 'q0OtW4hcRG', 'd3OAW5pdLa', 'gxPaWRjyB2hdJSkyWPWNESor', 'f8oinSkQW4m', 'uvCt', 'kKddJCoIkW', 'WQ3dTetdImou', 'EMJdJSkuoq', '4PEJW4XSWO8', 'cGeaW6Sd', 'W67cNXdcP8kt', 'bCklksDc', 'CqdcV8o0lG', '4PAt4PsL4Pwv4OQC', 'W5tcJtBcHSkV', 'hNRdKmoxWPS', 'xrzwW5hcUq', 'nM/cIr5E', 'huZdJK3cUW', 'a2FdJSkzWPO', 'rCo4W4BcIq', 'WO3cPmouFSkH', 'WRZdRftcQZy', 'WPFcGN1gW50', 'pxxdKCoDmG', 'rSk6yG1g', 'A3xcNYuH', 'W4HoFCk0W78', 'WOBcMZFcU8kS', 'fY0hWOldNW', 'W510WPRdKGm', 'zHjeD0C', '4PAp4PAh4Psp4Pw84PwZ', 'WPhcHNxdOCoa', '4Bw4Yj/QNl5A', 'WQtcLL4dWOy', 'zCk+za9g', '4Psr4PAW4Ps44Psu4Psr', 'WRBcGfORWQ8', 'WQ/cP+kuJ+kwS+kwVa', 'ghVdJW', 'zWvBDg0', 'h8oimmk2WOu', 'W7NcImkBW5xdKa', '4BER4BA84BsJ4BAV4BAQ', 'hwFcKaldHG', 'W7D9wSkyW64', 'WRxcJK0YWRi', 'vqitWPBcRG', 'dvtdSmo0aq', 'WPBcSCo8u8kM', 'W7xdOCkUmSoc', 's8oWW5lcVmkq', 'ggpcGSktWQS', 'pIxIL6VILyZILyW', 'h2JdJa', 'lLdcR8kpgW', 'W5/dOEkwPokuKUkxIa', 'gL7dP8k4WRm', 'WPxcTZZcJSk5', 'W4NdHs/dO8o9', 'gghdGmkLvW', 'WQ/dIM7dNCoj', 'W7FdPa5iW7W', 'mCoQv3P0', 'e8kllqn2', 'yCk2Fr4d', 'cmksktfn', 'h2RdHmoHhG', 'ufddNmoaza', 'FcFcQmoFW4G', 'WPfeW6G', 'WRVcQdRcVCkP', 'k0xdGCk1yG', 'FFcJMkeUiH4', 'bmojWRlcRa', 'sX7dGmolwW', 'W4K/W6K', 'WO3cPCobDSkg', 'W5BcOCo9', 'Af83kc0', 'AmkAEMldSW', 'gwRdV8kqWRC', 'BmkcWQm+WQe', 'W51JeGTV', 'W6lcJGhdOSkB', 'W5mCn3NdNW', 'W63cN8oidSos', 'fcZdSEkxNUkwHa', 'W4ldHs/cNmkC', 'rIyCW60z', 'wMjCWPFdMq', 'WR5eWQxdIGW', 'WOhcTM8YWRe', '4BE4xCUaYOlcLG', 'WPFcHN5nW6m', 'DSkllNZdRW', '4PsL4PwX4PAK4PAU4Psq', 'WOWinNNdKW', 'qSoYW5VcNSkw', 'WP3dLK/dGCoE', 'W4NILk9gWR88', 'ECo9yNvI', 'CgRdHq', 'WPlcSdpcJSkK', 'WPeyn2RdGG', 'pSorqtuR', 'W6BdNb5XW6O', 'W7DPymkmcG', 'ge03W6NdGa', 'h8oig8kLW5W', 't0FcJIul', 'WRXjoevz', 'WOZdKLRdH8on', 'W7LJqSkCgG', 'lSoeWOlcRmoS', 'x37dM8onW6W', 'rX/dImocCa', 'W6lcJb0', 'Emk+Eru', 'zqxcMSkJzG', 'sWa5W5i8', 'W7NcUComi8oA', 'y8k6yGHk', 'WQxWVQQp8lgRRFc5I7JWM7UC', 'W7v+W4pdHHK', 'WQtdGa4wWRq', 'WPpcSdNcKG', 'ASkGW5VcPSoS', 'WOZcHWi', 'ffNdJM7cOW', 'e3tdKCkEWQu', 'sWRcGZJdUa', 'W4GPW7XQAG', 'qSoeW5tcUmkN', 'WP7cH1bnW7W', 'hSoYAG', 'yL/cVI9N', 'ACkhxhZdHG', 'fKO/W79M', 'W4uTW7bPhW', 'W5RIL6pILjpILklILPe', 'v3/cJW', 'wMpcLCoAW4u', 'lv3dJCkDyG', 'BCoCW5/cKSkP', 'sWtdJCokyW', 'WQhdRxZdNmos', 'bZqdWQBdOG', 'nokvTEkxQ+kvJokvJa', 'qmkGksno', 'WRNcMX4KW7u', 'k8k/td8Q', 'WQHDW7nMW6S', 'u23cLCokW4G', 'W5FdMtm', 'krNdUYeR', 'ENFcIW', 'WPqFlhNdNW', 'mWW3jeG', 'EmkDW60OWO8', 'WORcGMDwW7q', 'f2RdHW', 'WOBcLehdTJy', 'mbxdOIi8', 'aCkxWPxdOmot', 'nNZdImk0W48', 'WRRcGf4', 'WPjfWQ0', 'WPXzW6JdHau', 'W7JcGmo+imoQ', 'v3y8W7lcMq', 'ymkSDq', 'lGW3o1u', 'BmkpW77dV8kR', 'WQDUWRddGs8', '4Bw/4BAsl/cJKi/IGRdWQAcT', 'WONcONumsG', 'WP3WLBo1WRpWR6U58yIRLW', 'AokxICoDrrG', 'WRNcJ0CUWOK', 'qq/dMwjS', 'WO7dGq7dGCoc', 'WPPNW4NcSZW', '8kQjNVc+QApWRRMz8j64VpcZI4u', 'W4NcGSkwW4VdLG', 'W5/cLConF8kT', 'WRlHTjlkRUg3USk8', '4PEV4PAZ4PsU4PAI4PAQ', '4P+BW7rTW6ldLa', 'pXCTihO', 'WPLvWQDrW6y', 'nUg3KUg2G+g1LSQK', 'W6HOrSkjW7K', 'mCk6gb4X', 'FXrLj1G', 'WQqOdmkKpq', 'WP8m8jstHZRdLW', 'W6XMrSkCW7a', 'tCo4W6RdOmo5', 'bc4xW6qy', 'W4pcVaNdQ3m', 'xokxJSkcW4xdQa', 'tJ4BogK', 'WPpcK2DlW74', 's8kwW7e', 'WR7cQs/cK8oJ', 'WPdcTmkeESkP', 'ubJdGmkpCW', 'W6hcNNSgDG', 'WPlILiSsW5FIJOC', 'e3FdRCkYWRe', 'WPZcUcW', '4Bsf4BsbW4VHTzFHTyS', 'CCk7uXro', 'fImxWP4', 'W5dcOmoW', 'W7rYtSkugG', 'W6BdQ2RcK8oA', 'jZlcSpcDKBFcPG', 'muZdMSkMyW', 'tayocx8', 'h3tdLG', 'b2jtWRpdKa', 'W6dcMWRcTSkD', 'WRJIL619eqy', 'WOpdLKddHCoE', 'WObSWR06hW', 'WP/cPSoOmCo+', 'uvHjDde', 'bxpdKmkwWQW', 'emksktzj', '8ycdNCoOWODhFa', 'ifxdS8o4fq', 'WPhdVmkMnSoY', 'W4mJW7b3xG', 'pKJdKCkrrG', 'jwZdGmomba', 'h8o0zSoCW6G', 'aJS3fva', 'EWlcSFgcO4lcHG', 'D8oWCXro', 'W4rSWRaGhW', 'WOXAWQy', 'W7DtlKDj', '4PAP4PEX4Psq4Pw+4Ps8', 'W6VcK8odhmop', '4PsaW43dVCkhWPu', 'qmkaW4VdO8kl', 'W5ldSSoGnmo9', 'AmkDW4u1WRy', 'pbeLlq', 'egxdNG', 'DmkxW6i4WQS', 'avKKW75Z', 'zYrRuw0', 'WOBcLrxdPhe', 'WO3cJgfjWRe', 'rSoiW5/cRmk0', 'kq87hvC', 'WPVcRSokzSkj', 'f0NcL8kxjmkqW6DDWPbrW5xdUCkw', '4PYl8kotP+kbGpcSS4aU4BsY4BA5', 'efhdVNZcVq', 'WRVdU2VdSmkk', 'vmkfW7ZdUmkd', 'Ecr4sf4', 'W4NcOZtdL1K', 'r8ofy8ouW7y', '4PsP4PwY4Pw64PwSjW', 'umklW47dPCkE', 'WPlcPmoj', 'WPpcHXldSxm', '4PwF4PsQ4PA14PsB4PEb', 'W7vOxmkzW5a', 'o8k6bJq7', 'vmkBjSk3W5e', 'WRlcGfCJWPq', '4BwK4BAy4BslY6ZiKW', 'lMxcKXHg', 'msddJG', 'W4e4W7r1uq', 'WQdcIKSKWRW', 'kXK3if4', 'bNldKCkx', 'WRVcJLa5', 'W7dIRRaZcmof', 'oZRdJSoxCq', 'WQpdKrPEnG', '4Bw9gmIJYOFdRa', 'W4ncW7JdVIK', 'huRdUwNcVW', 'k0/dJCkG', 'AcddT+kuJ+kuSG', 'WOFcOcZcN8kV', 'WR/ILiqmW5To', 'W5TpW6pdTd8', 'W7BdPrLDW7u', 'e8kwoq', 'W5mPW7K', 'EHvDxu8', 'laxdPI4L', 'WOJdPctIM5VVU5pdOq', 'aokwILlcSeC', 'FZSwW5al', 'h009W7JcOq', 'cMnsWQPn', 'k8k9WR/dISo5', '4Pw44Ps44PA64PEh4Psd', 'W5avW75QBG', 'a3VdKSkyWPa', 'WR7cONq0WPS', 'W7/dPNVdH8oz', '4Ok6krG', 'bZGbWO7dLG', '4PsC4PEY4PAd4PwC4Psb', 'WPpcVrKvWPO', 'g3ddHCkSEa', 'vMtdISkEWQW', 'WORILOxcVsav', 'yI3dH18', 'qIyEW7O', 'W5rcvmkkna', 'WOFdNM7dOSo+', 'W7H8y8kzfW', 'gfC+WQO7', 'BZRdOSoOFa', 'bwFdVCkEWOy', 'nUkxSpc/LOxIG4pIMk3VU7JcRq8', 'osRdTsKV', 'rCk9W5NcHCku', 'mXCWifu', 'WORcHK3cLSkF', 'WObgWR0qhW', 'C8oFxg0', 'W5VcISks', 'xvmyW4lcPq', 'eg/cLmodWQS', 'WRdcGWRdOhu', 'FXX/y3S', 'W6T9ha', 'WODqW7naW60', 'WO7cJezsW6e', '4PAI4Ps6gW', 'W7FcO8kaW5tdTW', 'WP56WODPW5S', 'WOWseftdHW', 'YRJHT6tHTPpQNR3HT6y', '8jI2Oo+7Pezg8y21Pfa', 'W6b1sq', 'y8otAh9c', 'bmooW5FdNSkt', 'WOGqo2pdLW', '4OoFc8oI', 'WR0kWOFcS0e', '4lsyW47GTPJGT7NGTAy', 'le/dGq', '8ykjKhmhWOJdRq', 'e8kwmYzU', 'W74bWQ7dImkI', 'v2pcLCkuWQ4', 'v1dcHw1e', 'yGFcICk1Ba', 'WOzaW7nZW6y', 'WPpcIePjW6K', 'sdetW6qj', 'v8khW7RdPCkw', 'jSoUwmoaW7u', 'AexdHmo9wW', 'W7noch9Q', 'yGRdNxus', 'WP1gWRPi', 'WPRcS8oNC8k7', 'WRtcUfqbWQq', 'qXNdG8ow', 'g8oWyqqM', 'aFc4IjVcICkFW5W', 'A3VcMSkdna', '4Pss4Pw94Psr4Pshhq', 'WPzyWQVdVIa', '4BAj4BsJ4BwD4BsMda', 'gYeEWOBdLG', 'dSkaoSoKW4C', 'fVgdUk0/WQik', 'W71Ox8koWRW', 'W6vQtCkpca', 'WO5tWRJdPJC', 'WPpcPmokDCk8', 'W6ldPMhdL8oW', 'r8oTW6tcOSk7', 'CqTBCf8', 'lM/cMG', 'FbP0Cf4', 'WQdcTv4MWOe', 'oJbC8lAsTmov', 'WPdcTmowmSk8', 'le/dKq', 'FZa7aeq', 'ee0+', 'pg7dI8o8ma', 'cKCRW67dQa', 'ecGWWOJdLq', 'mmkhcmkuW6W', 'W4BcH8o6o8o8', 'x8omFXuc', 'mmohsJGc', 'g8kCvq', 'WOBcUrxdOhO', 'hJ/dGGap', 'W7BdJXL3W7u', 'DHX5WRFdJa', 'W6ldOMhdHG', 'mH9+CXC', 'WRxcRs8', 'wSk7oSk2W5m', 'W6XGx8kyW6y', 'DbjJCfy', 'WOldKKddHSoM', 'WQtcNK8V', 'WPXgW7nhW6W', 'W50l4PEi4PAN4PwT', 'wwNcJW', 'WQpdUZRWOlgcsG', 'sa3IL67ILPxILAy', 'fveT', 'hIZdM8koWQq', 'vmoxW5lcRCk+', 'ymouW7VdISkW', 'W7ddGXKcWPS', 'gZ4E', 'WPFcO3mZWQe', '4Bsj4Bw5mEg0Nog0Sa', 'ACkLW4BdImk1', 'WPLeWQBdKYW', 'DmooE3ZdPa', 'xMmDW6Xn', 'W7ZdONS', 'WPiPeSoDWRW', 'WPBcJtldIx4', 'W5VdOuldMSoK', 'd8ohzSoHW4e', 'wqNcO8oknq', 'Bw3cHdSn', 'gKJcQHH7', 'nv0bW4X6', 'WPxcOhqAWPq', 'WOaAW7HOta', 'vUkuOpcPTytIGOZIMOlVUPvDWOy', 'WRFcLHlcPSkl', 'ow08W7xdJa', 'W59pFSkPlW', 'ECk6FHXx', 'h8o/gLSP', 'nM3dJ8oxWRm', 'nvpdLCkzWPq', 'lgtdNrnB', 'DHLsAfO', 'W4hdOCko4PsqW6G', 'f0ldJmkLWPa', '8kEvLU+5KMimbGi', 'yCortgb0', 'ruHwW5dcRW', 'W4K+W7mVWQm', 'WQiHW7RcIu0', 'WQ5OWRJdRGu', 'W5hcOSolF8oN', 'f8kjnmkHWOu', 'B8kTWQLwW4q', 'vhBcSSogW5m', 'geBdT8oHaW', 'k2VdNSk/WRC', 'f8kjmCkGW6K', 'uZLPDM0', 'lxlcHa', 'CrXLyLa', '4Psa4P64bokuKmkG', 'WQPSWPC6nq', 'W5/dNINcI8kN', 'WQxcM1GJWQa', 'dfFdJMNcOa', 'W7ZcIxqKwG', 'W7FcOSkBW7tdHa', 'WPVcJNy', 'qSklW6FdUmkd', 'ookvV/cBT57IGlRIMPxVU4jBta', 'vuGeW4VcUa', 'vEkxR+kuJ+kvSokvPW', 'WOJcJNjwW7G', 'W4j0Fx5/', 'dmk/zH0c', 'W5BdR8k9hSoO', 'W5OfWRNdLmoO', 'WP/dSSkJbCoz', 'sWxdL8kpzq', 'W6lcJaNcO8ka', 'qb/dI8oBua', 'gvaAW7ZdSG', 'sb8F', 'W4muW5NILzxILOm', 'n0/dLmkWAW', 'h0mTW7JdPG', '4PsB4PsA4PEU4Ps44PAE', 'WOJcLqxdNfS', 'WOdILABXJlw54Oka4PM377UjaJC', 'jNucW55t', 'gCkykG', 'xh/cMSoxmW', 'WODqW7njW6O', 'W4CLW7TJ', 'W6CMW63cJ8kT', 'W5pcISkwW57dKa', 'WQfgWQniW7a', 'zJL4vge', '4Pwc4Psa4PE94Pw/4PsY', 'WRW3ef/dTW', 'y8kErWfh', 'W48+W6q', 'tbxdHmolDa', 'WQq5n37dOa', 'vmo4W57cNSkb', 'WPzeWRhdGG8', 'WQFcM10Q', 'WR7cR8keD8k6', 'kSk9cYnR', 'aM7dJ8kAWRG', 'fXtcMNZcPa', 'bokvSokwPEkwR+kuKq', 'f8kjnSkQ', 'ASo5BgWm', '4Pwa8j+KPokbSUkzSo+4SHrSfG', 'h14/W7H7', 'yCkaEK3dTq', '4Pw24Psh4PAI4PsW4Psn', 'WPLcWRVdLWe', 'W4ybWQpdH8o5', 'W5/cSSoP', 'W7P0qCkAgG', 'fSosWOL8W4q', 'c0BdT8oWaq', 'WONcNNzEsa', 'pmoyW5WpWRC', '4BAW4BsQ4BAaWRpWRAkm4OoA8yIGTq', 'wuRcUmowW64', 'W6PQySkwW48', 'WOfrWRjbW6y', 'oSkCmq', 'rYiCW64H', 'a2RdGmkrWQm', '4BwyumIwY4jU', 'rIWv', 'cCkCCq', 'W7tcJrdcP8kz', 'WOZdM0/dLG', 'gsKE', 'rXpdKmoDyW', 'jNONW7Hh', 'DGjtWR3cIW', 'WO0nEw/dMq', 'W5RdQtmOWRe', 'eSkCkcXi', 'zSkpBwBdTq', 'krNdOIG', 'g0iMW6Hd', 'W5LicLf0', 'qL4FW4RcRq', 'dxBcPdTI', 'xXHWW5vu', 'jSkDmcvy', 'W7bSqmksW7C', 'FHiX', 'zHZdKmozFG', 'vHNdGSohzq', 'rbmucee', 'tsOuW7m', 'W6ddTxy', 'i23dI8kBWOC', 'ocT0Duq', '4PAtwhbMmW', 'WR91WPLSW5e', 'd0O2W6RdGa', 'WONcHxGBha', 'WPuyogNdKW', 'W43dK0hdPSoU', 'eNNcMYXJ', 'W5xcLCkoWPK', 'tSoVW4W', '4BsKWR3iRmMLW5m', 'W4pdReBcJZy', 'hHe4WQxdPq', 'W6BdPMZdI8o5', 'WPLbWQbn', 'WRfIWRbCW4u', 'W5/cNSo2C8kL', 'WRxcLW/cJSkb', '8lMxIU+4Vq', 'WRpdNK7IL4ddLa', 'W4pcSXxdPhe', 'W6Pev8koW68', '4PsB4PsA4PEU4PE34Pwr', 'cL3cMIJdOq', 'efrWW6LV', 'hSoLF8ocW5q', 'baGeW4lcPmkBWRfd', 'W7LNwmkDaq', 'W5HUu8kqW7u', 'uqlcM8o9W54', 'W5tcMY3cISkK', 'WR/IL48mW4fe', 'ySovsMj0', 'E8oUWRVcOSog', 'cmoIFSojW7i', 'W73IL6ZWLiAB4Oor4PQd77IdW5/dKG', 'je3dMCozpa', 'WRJdJG3dTmkt', 'WRitEuldGW', 'W5tdJtXsW7a', 'W5dcPFc9GklcSCkJ', 'a0RcTc1Z', 'tr0ugeW', 'qmkLW7ZdUmku', 'Fq9O', 'CmoivCoKWQ8', 'a8oUEmoiW74', '4BA/W7/HTOtHTz8', 'WQ7cU10JWRS', 'W5PlW6pdTWC', 'jwxdNmkFvq', 'W7CH8y2sMZLl', 'uN7cN8o+W40', 'tbhdKCoCCa', 'WOtcUcVcN8kV', 'yLBcMa1b', 'W5/dOCkemSoO', 'CmoEw3fI', '4Pw44Ps44PA64Psi4PEm', 'hw3dLCkqWOO', 'guWKW7PL', '4PER4PwEWOi', 'zmokW5WvWRW', 'obK3mvW', 'AYy0', 'AmkBW7CWWQS', '4PE94PsT4PY3lCkC', 'WO1qWPbkW64', 'uxuvW4rd', 'WQbeW4FcGmkh', 'rSoVW5RcN8kd', 'dvBdLghcOG', 'WOBdNKVcMmka', 'W4KfWRNdHCoQ', 'egtdKSkwWO0', 'W5zEW77dSJS', 'W4/cVSknW6/dRW', '4PEmlCkOW4hdOG', 'urZdOmozqq', 'WPTmWOxdHqO', 'W53dJIrIW5y', 'fXJdIZGE', 'guZdK2FcOG', 'WPZcOmoqD8kV', 'W4RcQSodkCob', 'ySovxa', 'x8orBH0c', 'rbCugt8', '4Bs1gSUVYkVdQG', 'WPdcKHtdRhG', 'ef3dM3JcMq', 'bMBdLSklWQC', 'rtDvW7Ln', 'W4/dKKddHSkk', 'zJWPrI0', 'WPWqpa', 'sWtdHmodmq', 'nCkAmmk2W7y', 'WQxIL7FILi/ILRpILRW', 'W4uqWR7cGmo/', 'DEkxOUkxI+kxLokuJG', 'WQ3cOsFcKSkH', 'CSkDW7uWWQi', 'WPVcV0GpWP8', 'oh/dN8kssq', 'WR/cGv02WRi', 'hSkhmCkWW6q', '6P+mc/gnK4/IGAdWL6kI', 'WOddUsRcHCkU', 'ns7cMX5r', '4Ps+4Psm4PE74PAUWQ4', 'fwlcGSklWQ0', 'imoKlHJcOa', 'eMxdL8k2WPm', 'ja00WRBdUW', '8jUPLpggURpWQyUW8yoOLCo9', 'W4mTW6L/wa', 'ouW+W7tdRW', '4PE/4PEb4PAK4Pss', 'ncBIL7NWTlEX77M94Ock4PMe77UxWPK', 'W5RcQJrpWRe', 'W5dcOmoWESoY', 'WRNcNwyGWRy', 'bmkqW6ddQCog', 'aq5hWP3dS8onW7mkW4y5WPVdILZdGq', 'WO7cGWVdQMq', 'W5FILRr5n8kC', 'CKlcGSkuhG', 'W4LUWRXlW6y', 'cCoKuSojW7q', 'gKJdSCk1cq', 'WONdUZb0ha', 'W7L5WQFcS2S', 'dSocvCoKWOu', 'WRtdI1hdSSomW5BdR8oEW7e4WPpdPW', 'ESkDW6WOWQS', 'W59mFmkrfG', 'vqRcV8o0ba', 'cmk+ecfI', 'rCoYW5VcNSkY', 'WRvKq8kptG', 'F8o5CvDI', 'WRjNmKzb', 'WQDWWOapWOK', 'AglcNSk2cW', 'W4ruASkAna', 'mwbtWRFIL7e', '8kodVSkBW5FdLmo5', 'tCkkmCkSWRK', 'W57cVSoGo8oO', 'WQ0Vce/dNq', 'beGKW6n7', 'W4Cdb8otWRW', 'W47cQXhcGmke', 'W5RdOMZdQSoS', 'W6VcMsNcOmkt', 'fZKEWPtdJa', 'W6DJtCkygG', 'wuKc', 'WPBcSSoq', 'WP/XI6+KCa', 'W75nlL8', 'WOZcSL5jW4u', 'ytWiguy', 'ddypg3O', 'aqXdW4ldSW', 'W69OqmkzW7K', '8yksKN/cO8kVWPS', 'vf7dHSoaFa', 'W4fAzSk4W5e', 'WOLeWP3dLX0', 'jCk8nSkPW4a', 'W47cVaZcHSk4', '4PwG4PEZ4PwD4PAn4PEJ', 'WOBdHKVcVZy', 'aCkDkr1z', 'WOxdIwddSmog', 'WOBcHrlcPxC', 'YlNHTypHTOyWnq', '4PwthSozl8k9', 'W7blCmkzW4G', 'WQBdJ1GNWQu', 'q8kaW53dR8kG', 'pMpcNIaG', 'vuGtW4lcPq', 'zHHPCW', 'WP5FWQNdUbG', 'W4RcKgqBwW', 'WQxcILCZWPC', 'WPVcQLuAWQq', 'W4yLW7f/uq', 'WOJdPuVdTSos', '4PsE4Psf4PER4Pwm4Pwm', 'mHX/yXC', 'k8kFf2nM', '4Bsr4BA9gpcAKBNIGRlWORcC', 'WO3cJCofymkV', 'vmoeW4/cVmkP', 'patcHq', 'qmo5FuGm', 'mLFILBZILiFILlC', 'W5aTW6LUwG', 'W5NcHgmw', 'gJW7jwe', 'WOrrWR4', 'WPLpWOVdIaa', 'lgGuW4VdLW', '4Pw/4PAF4Psp4PwW4PwN', 'bXGja2m', 'W4BcNCooamoT', 'eSo6Frmp', 'WPVcPmoxCq', 'a2SaW4fo', 'WRZcSColqCkh', 'dCkEo8kjW6O', 'cfC+W682', 'gNflW5Wm', 'gCoLACos', 'W7TOsCkjtG', 'gNxdHSkVWOS', 'imk7FxpdPW', 'kfi+Cfy', 'lNNdSehcNG', 'WRpcNq4dWRi', 'W4xcLh4zsa', 'WOX4WOpdSrK', 'FMX5W4FcSG', 'xCkTybzq', 'W4LRWPb1W5y', '4PwG4PEZ4PwD4Pwc4PsS', 'W6yRWORdRW', '6P2a4Bs44Bwi4BAsnG', 'kXGAWORdNq', 'hCoHzCosW7W', 'z8k+mCkmW48', 'W5iPW612vG', 'Fbr/ybC', 'WO/dK04', 'WRiUFsem', 'xaaw', 'WPOXofNdKG', 'DNVcH8kz', 'WR/cNe0', 'WPXhWQhdKqG', 'dmkwmYvy', 'phPAWRq2', 'W5lcK8kdW4NdHG', 'WPdcOmoa', 'dUkuRCkOWRBdJa', 'h0O3W7tdOG', 'CLZcRGS9', 'WPhcNgeMWOS', 'ECk6rhddJq', 'hsbFWOxdMq', 'vftcUmkYaW', 'bmkkW6FdUW', 'zSkEx1RdIa', 'q8ovshHO', 'WRhcIK0', 'W7jeW6RdUIu', 'WPZcIN9hW78', 'gs0AWOK', 'cCkCoSkPWOu', 'h2ddUw3cNa', 'paFdKCoqnG', 'WRlcQXdcJ8kD', 'qbtdPSoaFa', '4Pw+4PAE4Pso4PwX4PwM', 'W59MaIeF', 'xL5wW4JcOW', 'W5n/tCk+hG', 'W43dTNZdP8o9', 'WROEW5KBWQm', 'Y6ZHTiZQNipdNEg2Ha', 'W7zPqCouoa', 'kr0In08', 'ign4WQPN', 'W6dcNWRcPSk4', 'W4ddLwFdOCoT', 'W5pcLmkd', 'WRxcM8oxzmkF', 'W7RcPEkuKokvVUkuVa', 'W5lcGSkfW4RcLq', 'fvNdLgZcGa', 'WRhcPYxILRhcNa', 'WOzaW7rwWQm', 'F8ktW7C5WQK', '4PAq4PEL4PspW74e', 'W6nJxSkibW', 'WRGKcmoD', 'W4ZcNh8mrq', 'qwpcVCkXnq', 'CmkBFxO', 'W7FcO2PIW7W', '4PsOdLCvda', 'W48WWONdISoo', 'pKhdU1NcGW', 'oaldJcW9', 'fuldKKRcHG', 'ddS1WP7dTq', 'nmkDf8kTW4O', 'W6auWORdQ8oG', '4Ps+4Psm4PE74PAU4PAe', 'm2WEW59e', 'W7bMqCkjW7i', 'W4qOW551uG', 'vf41W4VcPW', 'qIWbW74d', 'g1NdJM3cQW', 'yVcDM6tWOQIq8jkiMGG', 'Dmk4Dtjh', 'EHjIC1K', 'Emk6Fq', 'AYBdRmoQmq', 'F37cRCkypa', 'tCotzCohW7S', 'cCkakq', 'CmoExgCX', 'qYSti2q', 'qpgbQyRWRBIo8jAzU/cMMOO', 'gvVdJN3cVG', 'W47dH8kwWPNdPG', '4PEw4PEV4Ps54PAy4PsA', 'aMNdTuxcQW', 'q8o4W4FcMCot', 'tConvCkgW44', 'W55WC8kSW5m', 'WOVcGXtdQN0', 'xUkuOEkvS+kxP+kwUa', 'vSk2t2ldRq', 'W7PbpfT5', 'hJyfWOxdRq', 'WP/dKLRdLSop', 'WOxIL7FILi7ILRlILR0', 'wSkYmmkQW4a', 'cKLsWObn', 'W7KDWR7dLmoO', 'W5/dQ8o7qCkX', 'W5lcS8oNl8o9', 'W5lcT8oNlW', 'luFcJ8o+lG', 'aSoUDa', 'CuuIm1m', 'BM7cM8kvna', 'W4/cIqRcQmk9', 'EsaDW7Gi', 'ssigW68k', 'W7WPh8ohWRW', 'W7fVx8klaG', 'lSoDAHKG', 'tx3cJ8oQW7W', 'bCo0zCowW6O', '4Psa4PEU4Psoomkk', 'i3ZdLSkAWOW', 'WQtcRGJdLN8', 'WQtcTt7cN8kS', 'W5NcLmoOdmoH', 'mX0Imf4', 'C2NcImoDW6u', 'ie4Mr1K', 'W5/cTSofFmk8', 'dCo6Faul', 'gmk/qcnh', 'W67dQMO', 'lmk8gG0', 'WP5EWQxdLbK', 'W5Xrfujd', 'WPRcISktWPNdGG', 'FsyqW445', 'AhpcMqu9', 'WPFcQCoCvCk4', 'E1lILk7ILztILlS', 'D28yW5tcQa', 'WP7cTCoxu8k4', 'YBhkMUg3RSox4BwC', 'hqiQW63dOa', 'W6xcKYtcGSkG', 'zYxdKmoTyq', 'W615rSkuW7e', 'vWtcIW', 'W5TcC8kVnW', 'jrGXWPddVq', 'eg7dJSklWQC', '4PEJ4PEM4PwM4PAf4PEz', 'Fs/dJb0B', 'W5aTW7n/uW', 'l1/dHSk8', 'W5FcGSkzW4W', 'WQBcMKO/', 'FwnwW7pcIW', 'W6ZcKWe', 'Fxe1W73cQa', 'zSkRyHjn', 'kwpdU8oKpa', 'W4rsnvfj', 'gCkdogjn', 'Emk6yHHl', 'WPxcKwO', 'sc3cO8kFrG', 'W5HJx8kidW', 'e8oWAa', 'WO3cUuZcJXW', 'cMNILj/ILORILA0', 'd2VdOSobaG', 'pehdLmkZAW', '4Pss4PAF4Psp4PwW4PwN', 'WPjzWRe', 'WOdILQ3dRCkAWQC', 'ySktW4/dU8kk', 'o+kvUrGUoW', 'tcOEW68d', 'kUkuPY4OWQO', 'W5ZdJKddVCkw', 'W7/dQhZdMSoi', 'W5HDW6pdOgS', 'WP3dNK/dLSod', 'W7ZILkyzBCo/', 'WQiHW73cIu0', 'hCorWR3cVmoEdHhdQSoiW40Njq', 'mf7cKSkNlG', 'EXHAWQOC', 'tcJcJCkgWQ0', 'WRddH8o9WPNcVW', 'WPtcJuOTWPi', 'WOhcKWe', 'oam0WQG', 'WO8kiutdMG', 'WOZcTCowE8kM', 'lHhdQcG', 'WPpcVqriW6i', 'dMC0W7xdMW', '4PE94Pw94Pwz4Psn4Pw5', 'dtRdGHSy', 'WOZdNKO', 'wsOCW60b', 'rxXcW5dcJSkjrmoKWQFdHdhcQmo4', 'WP7cJh1wW5a', 'WOFcGIxdQNS', 'jZVdNr0H', 'W5HyW7q', 'gubdoMW', 'W5BcGSkzW57dGq', 'w1jBtsC', 'WQFcJ1O2WRK', 'zrbsWRbn', 'WO1kWRZdKWG', 'nUkwGUkwG+kvNokxJG', 'W4H+ASkuW6K', 'DCk/bvbT', 'W6dcNW3cRa', 'WRJcIK4KWRK', 'wWlcHCoxW5q', 'WRNcVhW1WOa', 'gXldPSkroW', 'W73cNXdcTSkr', 'l2xcJXXA', 'WQ/cQJxcKW', 'W7OiWQJdGCo+', 'sb/dGG', 'wgntWQTh', 'z8kWzrvh', 'xWKvW40G', 'FCkRzaTq', 'h1FcKCo9W7q', 'AbC8', 'y8kbW7ZcRmke', 'sSkaW7S', 'CSkwW7b8WQm', '4Bw7YjdkLUg1T8UN', 'W5RcOmoko8oO', '8kAkLpczIOpcUFgeUihXI5Uz', 'fcJcLSonW54', 'rCo5W7BcHCkE', 'x8oKoJZcOa', 'EMRcHtGn', '8jUWLEkaNpcEOOZdT+g3REg1U+g0Gq', 'WPuCkG', 'fwBdLSkAWQu', 'W4xILRhWLiw74OkN4PQA77MGgSoN', 'WPFcItpdTwy', 'vLFcR8k5fq', 'FmkSza', 'n1y9W61I', '4PEceSkWaSoY', 'W6jiEmk3nG', 'W5D+pK55', 'WQhcSIG', 'W4ldONZdGmoD', 'eum3W7NdJq', 'gf5WW6T4', '4BAX4BwGW63HTRVHTOO', 'vCorthuX', 'W4tcKh4ACa', 'WRVcJLCZWPK', 'bhjXEHS', 'a27dTCk4WPO', 'rGad', '4Pw04Pwm4PwZ4PsO4Pw3', 'WPVcOMvGW4a', 'txJcICohW6O', 'WRpcQ1ypWO0', 'E3jJxHS', '4PEw4PEV4Ps54Pwx4PEv', '4PAv4Psg4PsS4PE74PwU', 'W7rYrCkvcq', 'lKO1W7P6', 'WQlcTcxdJty', 'jCoADXyL', 'D+kwUCkVD2q', 'e2xdSSkB', '4PEt4PwiWOK', 'W71Nr8otWRi', 'W5vbkqTH', 'oX/dOdKR', 'WPRcRa5TW7W', 'h3ddGLlcPa', 'tmo8W5VcJSk/', 'WPNcKsZdVea', 'qCkQqGTi', 'FYZcTCohW6C', 'txCB4PQE77I4W7C', 'W5C4k3/dMq', 'WO9oWRVdKGe', 'g0nmu34', 'CZJcKbPktKDa', 'WOPBWR5iW6i', 'W5i4W6PGtG', 'W7zYrCkuaa', 'CmoCuxvI', 'pmkrW6WXWQm', 'D8knDMBdUG', 'W73dOM7dKmoi', 'WO1YWQVdLZW', 'mLFILjmNfW', 'WOddSuFdImoH', 'aSoYAa', 'W5ZdJZn3W58', 'WP8MjSoBza', 'oHqQnuG', 'W47cJ8kcW5VcMW', 'oHyNjXS', 'W64iW44Wnq', 'x8kvl3Ph', 'xhu0W4lcUG', 'FCkWyW9n', '4BA34BsNWQ3WU6cJ4OoP8yQHPa', 'WRHMWPveW5K', 'bhRcHCkLmq', 'luxdGmk6AG', '8yEIJUkbQ/c+GQ3cG+g0VUg2N+g0SG', 'W4SqW4FcGmkh', 'W6eMq8kDtG', 'aokuRUkvSUkwIUkvRq', '4Pw/4PAF4Psp4PA/4PAO', '8jwlL/cWIQFXGAUXnmo/', 'WRFcQfb7W7m', 'W5viFmk5W48', 'W7vno1i', 'W71NxSkFtG', 'A8kBurJcSG', 'mgmYW5ZdPW', 'WQxcIW5IW7e', 'W5VdKtfFfG', 'WP/dHL3dIG', 'ewlcGSkEWQW', 'hKO9WQOS', 'DCkgW6W4WQ8', 'e8kBkW', 'wbJcSa', 'Emk6Dbjc', 'WONcK3jpW74', '4Pwc4Psa4PE94PAW4PE9', 'ESkTAq', '8jQAUFc9QjVXJRMt8ycRGVcTUBG', 'W5BcImox', 'umklW53dVmkw', 'W4VcT8oOn8k7', 'v3/cJ8oQW6S', 'bmkcW63dRCks', 'YyplSUg1UKZHTia', 'W77dUvxdI8oa', 'W6ZdSuxdHmou', 'p1/dQtGG', 'et4aWO7dLW', 'WOhcUXlcJSkK', 'W40bWRK', 'WOhcOrxcMmkq', 'u8o4W4xcHq', 'WQBcJLq', 'WPJcPmkeC8kM', 'vKVdMq', 'W6muW5KfWOK', 'sSoYW4ZcJ8kr', 'y8ovfdrO', '8yIQUHrOW7W', 'W50lWR/dI8kT', 'W5aWhs3cHa', 'W57cV8oS', 'W7fNvmksW64', 'WOpdNeNdJq', 'a8o0CmobW7W', 'g17dSmoHaW', '4PAQ4PwK4PEn4PAG4PAn', 'bmkwlIe', 'W53cJmk8W5xdRa', 'FmkWFLSo', 'WRVcGuK', 'uKJcOIiT', 'awNdJ8kdWPS', 'wCkqvZq', 'h8kgnSkPW6a', 'WPRcS8kdyCoO', 'kSkepSkWW4m', 'W4/cUG7cGSkk', 'vN/cNCkema', 'gf0BjZ0', 'W5tcGmkoW43cGW', 'WPddUtpcHmkT', 'EvDwW7lcIW', 'lrhdUZKR', 'smkxW6a0W6e', 'W5zEWOFcS0e', 'W7FHT4/kSUg1GUg3HW', 'x1qAW43cPa', 'pSk7eSkfW5q', 'rbCx', 'zCoQW5BcM8ky', 'gtFdVb82', 'dK7dR8oWca', 'AmkgW6OYWQK', 'q04eW43cPa', 'W6VdO0ZdNmor', 'W4CfWRNdICoI', 'W4mxW63dLmoI', '4Pw84PsI4Pwz4PAD4PAb', 'WP0GWRpcS2e', 'W4RdUxxIL6NdQG', 'CSo4W4FcNmkw', 'kLqXW6FdPa', 'WPnyWPJdTbG', 'uKNcJ8o5W6G', 'rmoWW5RcMmkk', 'WPlcO8okC8kH', 'WO/cOmoD', 'vmokW6VdO8kl', 'imoe4PwJ4Pss4PAa', 'W55zW7K', 'ff3dPqldHG', '4BEI4BA0YzRHTR7cIG', 'W77XIyUXWOJcPSks', 'uwCtW5Pd', 'W5/HT5RHTQaY4BEt', 'u8kPW4/dUmkE', '4PEs4PEs4PAj4PwA4PAB', 'feSDW6NdSa', 'qmoz4PwFyGW', 'E8oSsG', 'W6ddPxFdPSoK', 'FMlcMSksiW', 'mNCXdrC', 'WR/dQMNdQCo/', 'vmoTW4hcG8kE', 'W513EqFcLG', 'WPKlWRVdKG8', 'B8kCDW', 'WOdcHXldOhe', 'ECkWDW', 'yHXLC1i', 'lCoCWQmdWOS', 'mwxcIq', 'WO/dL8ooWOJcGmogr2RcT1Xpkq', '4BsrY4tHTl/kIZS', 'W6xcLCksW4NdMq', 'l0VdGCkGAW', 'WP1DWR5aW7K', 'eMFdLSkAWP8', 'W5FILB/WQBEu4Ok74PQp77MjWQhdIW', 'WRRcNqZdGCoa', 'hg3dLSkyWOW', 'W4Soo17dRSkzpG', 'WRVcI0aLWQG', 'naOUDae', 'nSkGW7yYWRO', 'f8odzmoGW5e', 'rdFcM8omW7ddMsLuWOddRSo0bG', 'qmoWW5a', 'hKOP', 'ACkDsh3dSG', 'WPbkWQBdGYe', 'WRb5WP5qW5S', '4PAp4PAh4Psp4PAZ4PwZ', 'wmkfAvhdRW', '4PAqAxJcGfm', 'W79gWQ80hW', 'W55+mKDl', 'rrTUWQJcTG', 'zCo2E3bw', 'W6ydW5joEG', 'w8oZC8o1W4hcSNm', 'aeldOSoLmW', 'hfFdLhZcJq', 'WOZcRSorymkR', 'wXCwdxq', 'AtVdPSo2CW', 'gmo0zCojW7C', 'huvlvtW', 'hGBdM8kKWQq', 'W44aWO7dJ8oG', 'pKO/W7Hf', 'meGdW5hdMW', 'fSouWRhcV8ouaZFdNSooW7CShq', 'cwG+W5RdJa', 'W5VcVCoNlSoA', 'AtRdJ8owEW', '8kczNFcHQ7FWS5QL8kcATmo/', 'W5i7W6vtuW', 'W6xcJq7cImo6', 'WP3cQN/cGSk5', '4PAA8j23Q+kdSokBNU+4M3bBWRi', '4PEfWRuftKC', 'WO1rWObMW6e', 'WQBcJK0JWRa', 'W43cLgmDtG', 'D8k6yGGd', 'wdaBW6ud', 'YkxdH+g3S8I2YkW', 'D8kDW7O5WQW', 'W79lk0jj', 'WQ/dLh/dLSoz', 'oXddHpgcVlZcMG', 'W5KbWQK', 'WPXeWQDmW64', 'kCk9pWfT', 'mMhcIqTx', 'WRa/uZpcLG', 'oSobixxdQq', 'WQBdUx7dISoG', 'yHhdT8oOwW', 'WQpdKeVcSSkv', 'WPpcKgC', 'WPKsn3NdTW', 'WQ/cJs/cUCkC', 'zsOmfvO', 'lSkbg8kRW6m', '4BwG4BsGWPRkKEg3GW', 'edbwWQ7dQG', 'DmkYDq', 'xvSyW4dcHG', 'W4BcHwnEtG', 'Bc7dKGXx', 'WP4wogRdKW', 'dUkwUCkfWPu7', '4PwaW4KzkmkV', '4PE04PEz4PwF4PERW6a', 'FYdcLCoElG', 'W6ZcIG3cRCkA', 'WORcHWxdVvm', 'WOZcSCobD8kS', 'zSkPrZr2', 'duVdNW', 'mau7WRpdUq', 'WPnhCY0', 'e2VdTmkRWO8', 'WPhcQ3/cISkK', 'W4zxWRTeW60', 'W5rlW7NdTIW', 'vSklW73dOSkc', 'EMhcQcmH', 'xcH5WPFcOq', 'zqdcLq', 'mGldOG', 'ECo2W5lcQCkC', 'W7rOwmkKgW', 'W5NcJ8k9W4pdSG', 'W60PW65PxG', 'W5/dI8kegmoO', 'muJcM8kzjq', 'BMpcHHSA', 'W5XtqSkfW6O', 'Amk2W6OpWPG', 't3NcKSonW68', 'W4WuWPZdQmof', 'W4ddJdXvW7K', 'y8kbyZ3dLG', 'WR7cI8oTqmkj', 'W5RcHxutha', 'v8ojvh1D', 'oq554PELWPG', 'zSkhyNFdRG', 'W4XCsmkwW7K', 'WRWeFxrU', 'fcxdOwXg', 'W44TW7fBwW', 'W5NcKgqkwq', 'aCoLF8obW60', 'fhRdUmkwWO0', 't8kEza9v', 'W67dRMhcK8ou', 'W7ZcI8kvW5FdKq', 'W6qTW6L7hW', 'WONdNcPE', 'F8oEuxP2', 'a8khmJam', 'g3SFW68vkcldRG', 'hxddGSothW', 'qsldPmoQCa', 'W7DDuY3cVa', '4Bss4BwWmFcEOz/IG5RXJioa', 'W5hcGfu7ra', '4PER4PwEWOlILO7dHG', 'gCoVrmowW6K', 'WQbU4PAG4PAG4PAn', 'WOToWRRdLaq', 'F2NdJSk2pW', 'W5tcMdhcJ8oQ', 'cvxcO8o2dG', 'tCkdW6ddUmkv', 'yG5RAfi', 'WOxcPCoOEmky', 'W4rqfKnE', 'hvxcO8oHaW', 'rCkqW7VdRCkw', 'ghJdJ8kEWPe', 'WRlcQCoGumk9', '8jIXJSolbcNcPq', 'wdlcMGldRa', 'F2VcJ2W4', 'WP/dUmowgmo0', 'yJRcJCkEiW', 'naO6', 'CmkDW6q', 'f2iuW6jM', 'W7n5WQFcMxu', 'etRdPmoxwW', 'z8kGg8kgWPm', 'W4VdINBdQSoz', 'WQhcNN/cQmkf', 'DCk/l1OX', '4PsC4PEY4PAd4PsG4Psg', 'W7dcJSkt', 'CetcOt0d', 'pfK7W69K', 'xr0odwe', 'W50un2VdMq', 'k8o5umo3W5y', 'WQy+hmopx8koWR7cKmozw8ogWOtdNga', 'WPBcSCoisSk4', 'W7ZdRhFdHmoL', '8kMNNE+5JhqBoMi', 'vHhdOmogCG', 'pG/dI0zS', 'eYCIWQxdVW', 'h000W7ddOa', 'pmo4WQnwW64', 'wZjAWRq2', 'W6TSu8kpW78', 'AxZcOmk4nq', 'E1v5Da', 'oHP8WOtdGa', 'WONcOKu8ha', 'jMxcJHW', 'mSkkiSkiWRK', 'WPRdOCoxD8kK', '4Bsa4BsEW47HT6ZHTzy', '4Bw/WR/QNl7iMUg1QG', 'W5rEW6ZdJd4', 'W4JcNhu', 'tSksmsTA', 'g2ldSSoEnq', 'WOtcSWZdG1e', 'vmoUW5a', 'kaWXpvu', 'm0/dM8kZEG', 'atq5WPtdOG', 't3hcU8kpba', 'W4WlWQldLmoO', 'WQDiWQ3dRYq', 'lXC3nvC', 'kwRcNazJ', 'pXeIifC', 'DCoFvMbq', 'WOxcUs/cMCoS', 'WRxdMmkJ4Ps34PAB', 'WPdcVdVcV8kV', 'E/cDMjxcLmksW4m', 'uJC7W6ql', 'r8klEJldOG', 'lmkYjq', 'emoTDG', 'wSoc4PsY4PEe4PAL', 'WPFcJHpdPZG', 'lmkahbjw', 'n3dcIrzF', 'tbertg8', 'gCoVv8opW6e', 'W4qbWQhcJ8k9', 'W6r+W4JdNMS', 'WRxcM1O2WRm', 'fCkAjG', 'WP/dMmkPumk7', 'WQ/cMMCSWRO', 'WRXVWRddLJC', 'W68IWR1vsG', '4PABWRFcV8ouW5m', 'W7Dwk05E', 'W500f0VdUq', 'WOVcHXu', 'W5KzW657wa', 'W5ddQrKtWR8', 'F+kDHEkxPEkxLokuJG', 'A3hcNYmI', 'WPVcPCoNFCkL', 'at4F', 'WRBcJ8oIxCkA', 'CEkwSwnUeq', 'W5noW47dVcy', 'hf3dGGK', 'bmoUWQJcHSog', 'WPHFWQVdJWq', 'wSkhW60DWOG', '4Pw04Pwm4PwZ4PEN4PA4', 'E8k4Ervg', 'oCkKlmktW5C', 'cxHAzI0', 'z8khAgS', 'gvldK3RcRq', 'YzRkUUg1TSke4BEh', '4PAv4PsgbSoXza', 'W6tcKWxcPCkr', 'Yi/HTOCV4BA+4BA5', 'g3DdWRnuy2xcTSkEWQ0BrmoAW4K', 'hcmaWPpdLG', 'CSorthf2', 'pmkrW6S9WQa', 'WPrhW6tdHqW', 'WONcHN1gW5m', 'DHj/C3y', 'mGm8WRpdVq', 'AM/cGCkdna', 'W4OmjVgbO5xcNW', 'zHH8j14', 'WQK5aSoDW58', 'BmktW7COWQS', 'WQ/WVQQHW5ddKmo0', 'CMRcJa', 'WOPUW63cQSkT', 'lwlcJq54', 'tCkGo8oPW4W', 'W57cUmoGkmo6', '4PAkehZcMSoQ', 'uUkxSCkAmSoM', 'avpdSmk1eq', 'W5rEW6ldOwS', 'ew7dHmkg', 'WPpcHhTwW6i', 'tbWp', 'WQlcJwujWR4', 'WQP7WP5OW4i', 'W7xIL4pcHdJXJzgt', 'u8oEvhvx', 'nNxdUwpcJG', 'WO54WPLZW5a', 'efKEW4xcPa', 'WOvBWRq', 'W58bWQBdLmo/', 'tCklygBdQq', '4PwZghdcQUkuLG', 'W44bWR7dGW', 'W6dcNWRcT8ks', 'W5a+W451Eq', 'bmoZmCopW6O', 't2pcNSks', 'W7D+xmkoWRW', 'W5dcImkoWPNdGW', 'hfZdUwFcOq', 'WPVcRrL4W7u', '4PEsdCkjWP9y', 'W6jasmkXW5i', 'dmoUDCkgW7y', 'ixtcNcbh', 'WPRdRCoxWRpcLq', 'hghdJ8oxWPe', 'w+kxSxdcSdW', 'oLJdG8kXFa', 'CHJcScJdHG', 'WOVdML3dKSog', 'sUkuUN14bG', 'ufOw', 'ntldPrS+', 'DCoYWPxcQCkB', 'ggFdLCkeWQe', 'bmoeWQJcRmog', 'd13dRCk9EW', 'veztW63cMa', 'scddT184', 'FN5wW6JcGW', 'FbP4Avi', 'n0pdMSkoWPG', 'arrwW7VcJW', 'bSk1pbrw', 'WRpcIXKGWR0', 'gKPkwdZcVJRcMZHNwdtdJJ4', 'umkqW63dVG', 'd8kIomkdW6G', '4PwfW6VcRIZdQa', 'v07cR2Cd', 'WOxcSZpdHMC', 'W53cMh0BrG', 'W71JxSkitG', 'awpdS8kdWQ8', 'W77dH8k0W7BdUa', 'WPWebNNdKW', '4Psa4PEU4Pso4Pss4Pwp', 'WOOSWQJdKSoI', '4PsC4PEY4PAd4PAt4Psb', 'WOFcVdhcJ8ki', 'AIxXHAcK4Ogb8y2dIxRcRq', 'DSoxW4dcVSkI', 'C8kaW4GvWOi', 'gVcrTktWTjQh8yckL/ctU5G', 'W5dILkOZgmk7', 'mdxdIX8v', 'nHG9WRldQG', 'W4lcICkBW7FdLW', 'c8oyW4FcMmkC', 'i3/dHSkLWQq', 'W40nWQVdMq', 'W7XcmLLb', 'W7D9eSkRW7K', 'utjWWOa2', 'E3FdIY0I', 'WO1hWQNdKWS', 'WO5oWQBdG00', 'CMNcMG', '4OgpWQdHTiRHTQhHTP0', 'WPFcUcVcJSkT', '4PE/4PAaFokwPSoQ', 'wYZcJ8ogW60', 'dIKvjxi', 'B8k2FHD3', 'nwxdMSkZWQK', 'WR7cTZ7cHmkkWQtcIeldQCoga2u5', 'WONcHNC', 'W4mjWQJcMSkN', '4Bw4YAZHTzPI4Bsn', 'vCo4W5tcH8ot'];
  _0x2810 = function () {
    return _0x5a2787;
  };
  return _0x2810();
}
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

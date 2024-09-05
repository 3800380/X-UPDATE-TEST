(function (_0x3008e0, _0x54f693) {
    const _0x1e19eb = _0x3008e0();
    while (true) {
      try {
        const _0x288102 = -parseInt(_0x3230(1716, '6wml')) / 1 + parseInt(_0x3230(1409, 'q36L')) / 2 + -parseInt(_0x3230(1746, 'm#jD')) / 3 * (-parseInt(_0x3230(2476, 'viu&')) / 4) + -parseInt(_0x3230(1385, 'kLC4')) / 5 * (-parseInt(_0x3230(3014, '8EG1')) / 6) + -parseInt(_0x3230(286, 'Enzm')) / 7 * (parseInt(_0x3230(560, 'q36L')) / 8) + parseInt(_0x3230(589, 't7Jj')) / 9 * (-parseInt(_0x3230(2404, 'axnn')) / 10) + parseInt(_0x3230(3199, 'ckEZ')) / 11;
        if (_0x288102 === _0x54f693) {
          break;
        } else {
          _0x1e19eb.push(_0x1e19eb.shift());
        }
      } catch (_0x1db2ab) {
        _0x1e19eb.push(_0x1e19eb.shift());
      }
    }
  })(_0x48af, 979233);
  const {
    cmd,
    commands
  } = require("../lib/command");
  const config = require("../settings");
  var {
    get_set,
    input_set
  } = require("../lib/set_db");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat
  } = require("../lib/functions");
  function _0x3230(_0x1d85c9, _0x2ef42d) {
    const _0x10ac09 = _0x48af();
    _0x3230 = function (_0x323edc, _0xd09026) {
      _0x323edc = _0x323edc - 121;
      let _0x1528e8 = _0x10ac09[_0x323edc];
      if (_0x3230.Eedbvv === undefined) {
        var _0x14887d = function (_0x1c89cd) {
          let _0x41b0f7 = '';
          let _0x57bcb3 = '';
          let _0x1511a3 = 0;
          let _0xa0b304;
          let _0x43dfde;
          for (let _0x2a38d0 = 0; _0x43dfde = _0x1c89cd.charAt(_0x2a38d0++); ~_0x43dfde && (_0xa0b304 = _0x1511a3 % 4 ? _0xa0b304 * 64 + _0x43dfde : _0x43dfde, _0x1511a3++ % 4) ? _0x41b0f7 += String.fromCharCode(255 & _0xa0b304 >> (-2 * _0x1511a3 & 6)) : 0) {
            _0x43dfde = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x43dfde);
          }
          let _0xfdd3a4 = 0;
          for (let _0xf3c8e7 = _0x41b0f7.length; _0xfdd3a4 < _0xf3c8e7; _0xfdd3a4++) {
            _0x57bcb3 += '%' + ('00' + _0x41b0f7.charCodeAt(_0xfdd3a4).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x57bcb3);
        };
        const _0x523cb0 = function (_0x4d1095, _0x5e996b) {
          let _0x34dcd8 = [];
          let _0x3f3050 = 0;
          let _0x3083f0;
          let _0x2abf48 = '';
          _0x4d1095 = _0x14887d(_0x4d1095);
          let _0x224cbe;
          for (_0x224cbe = 0; _0x224cbe < 256; _0x224cbe++) {
            _0x34dcd8[_0x224cbe] = _0x224cbe;
          }
          for (_0x224cbe = 0; _0x224cbe < 256; _0x224cbe++) {
            _0x3f3050 = (_0x3f3050 + _0x34dcd8[_0x224cbe] + _0x5e996b.charCodeAt(_0x224cbe % _0x5e996b.length)) % 256;
            _0x3083f0 = _0x34dcd8[_0x224cbe];
            _0x34dcd8[_0x224cbe] = _0x34dcd8[_0x3f3050];
            _0x34dcd8[_0x3f3050] = _0x3083f0;
          }
          _0x224cbe = 0;
          _0x3f3050 = 0;
          for (let _0x108787 = 0; _0x108787 < _0x4d1095.length; _0x108787++) {
            _0x224cbe = (_0x224cbe + 1) % 256;
            _0x3f3050 = (_0x3f3050 + _0x34dcd8[_0x224cbe]) % 256;
            _0x3083f0 = _0x34dcd8[_0x224cbe];
            _0x34dcd8[_0x224cbe] = _0x34dcd8[_0x3f3050];
            _0x34dcd8[_0x3f3050] = _0x3083f0;
            _0x2abf48 += String.fromCharCode(_0x4d1095.charCodeAt(_0x108787) ^ _0x34dcd8[(_0x34dcd8[_0x224cbe] + _0x34dcd8[_0x3f3050]) % 256]);
          }
          return _0x2abf48;
        };
        _0x3230.ztcRIo = _0x523cb0;
        _0x1d85c9 = arguments;
        _0x3230.Eedbvv = true;
      }
      const _0x3c144b = _0x10ac09[0];
      const _0x3d597f = _0x323edc + _0x3c144b;
      const _0x3f6e67 = _0x1d85c9[_0x3d597f];
      if (!_0x3f6e67) {
        if (_0x3230.pIYGuh === undefined) {
          _0x3230.pIYGuh = true;
        }
        _0x1528e8 = _0x3230.ztcRIo(_0x1528e8, _0xd09026);
        _0x1d85c9[_0x3d597f] = _0x1528e8;
      } else {
        _0x1528e8 = _0x3f6e67;
      }
      return _0x1528e8;
    };
    return _0x3230(_0x1d85c9, _0x2ef42d);
  }
  var BOTOW = '';
  if (config.LANG === 'URDU') {
    BOTOW = "*Tum bot ke Owner ya moderator nahi hooo !*";
  } else {
    BOTOW = "*You are not bot's owner or moderator !*";
  }
  var N_FOUND = '';
  if (config.LANG === 'URDU') {
    N_FOUND = "*Mujhe kuch nahi mila.. :(*";
  } else {
    N_FOUND = "*I couldn't find anything :(*";
  }
  var alredy = '';
  if (config.LANG === 'URDU') {
    alredy = "*Setting pehle say he updated hai !*";
  } else {
    alredy = "*This setting alredy updated !*";
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x520dba = {
      pattern: "settings",
      react: "🗃️",
      category: "main",
      desc: "To take Bot Settings",
      use: ".settings .",
      filename: __filename
    };
    cmd(_0x520dba, async (_0x5328a7, _0x5d8064, _0x251dc9, {
      from: _0x3478c6,
      l: _0x2dca59,
      prefix: _0x14ca7d,
      quoted: _0x502a05,
      body: _0x3c1c7c,
      isCmd: _0x1aa4e4,
      command: _0x4befe7,
      args: _0x29c0ed,
      q: _0x379848,
      isGroup: _0x5e793f,
      sender: _0x5a7b48,
      senderNumber: _0x1147b7,
      botNumber2: _0x2e75e9,
      botNumber: _0x57475e,
      pushname: _0x4d2554,
      isMe: _0xc9b079,
      isOwner: _0xd451d2,
      groupMetadata: _0x15a2ef,
      groupName: _0x9e6e78,
      participants: _0x1a3720,
      groupAdmins: _0x3bb19d,
      isBotAdmins: _0x11be39,
      isAdmins: _0x4dc0fe,
      reply: _0x2f085c
    }) => {
      try {
        if (!_0xc9b079) {
          return await _0x2f085c(BOTOW);
        }
        let _0x61b33c = "SETTINGS INFO \n\n";
        _0x61b33c += "⭔ " + config.AUTO_BLOCK + "\n";
        _0x61b33c += "⭔ " + config.ALWAYS_ONLINE + "\n";
        _0x61b33c += "⭔ " + config.AUTO_REACT + "\n────────────────────────\n\n";
        const _0x4592c5 = "[X - B Y T E]\n\t    \n      ⭔ Auto Block : " + config.AUTO_BLOCK + "\n      ⭔ Always Online : " + config.ALWAYS_ONLINE + "\n      ⭔ Auto React : " + config.AUTO_REACT + "\n      ⭔ Auto ReadMsg : " + config.AUTO_READ + "\n      ⭔ Auto CmdReadMsg : " + config.READ_CMD_ONLY + "\n      ⭔ Auto Recording : " + config.AUTO_RECORDING + "\n      ⭔ Auto Typing : " + config.AUTO_TYPING + "\n      ⭔ Auto Read Status : " + config.AUTO_STATUS_READ + "\n      ⭔ Auto Bio : " + config.AUTO_BIO + "\n      ⭔ Auto Sticker : " + config.AUTO_STICKER + "\n      ⭔ Auto Voice : " + config.AUTO_VOICE + "\n      ⭔ Anti Delete : " + config.ANTI_DELETE + "\n      ⭔ Anti Call : " + config.ANTI_CALL + "\n      ⭔ Anti Bad : " + config.ANTI_BAD + "\n      ⭔ Anti Link : " + config.ANTI_LINK + "\n      ⭔ Anti Bot : " + config.ANTI_BOT + "\n      ⭔ Ai Image : " + config.AI_IMAGE + "\n      ⭔ Ai Maths : " + config.MATHS_AI + "\n      ⭔ Ai Chat Bot : " + config.AI_CHATBOT + "\n      ⭔ Prefix : " + config.PREFIX + "\n      ⭔ Welcome Message : " + config.WELCOME + "\n      ⭔ Owner React : " + config.OWNER_REACT + "\t\n      ⭔ Only Group : " + config.ONLY_GROUP + "\n      ⭔ Only Me : " + config.ONLY_ME + "\t\n \n  *X-BYTE SETTINGS*";
        const _0x3cb89c = [];
        const _0x33a6ba = {
          header: "ONLY_GROUP",
          title: "To Enable/disable Only Group",
          description: "Only Group settings",
          id: _0x14ca7d + "onlygroup1"
        };
        const _0x409723 = {
          header: "ONLY_ME",
          title: "To Enable/disable Work Type",
          description: "Work type settings",
          id: _0x14ca7d + "onlyme1"
        };
        const _0x5ad0ab = {
          header: "OWNER_REACT",
          title: "To Enable/disable Owner React",
          description: "Owner React settings",
          id: _0x14ca7d + "oreact1"
        };
        const _0x4c5bce = {
          header: "WELCOME",
          title: "To Enable/disable Welcome",
          description: "Welcome settings",
          id: _0x14ca7d + "welcome1"
        };
        const _0x2f1876 = {
          header: "MATHS_AI",
          title: "To Enable/disable Ai Maths",
          description: "Ai Maths settings",
          id: _0x14ca7d + "mathsai1"
        };
        const _0x5609a4 = {
          header: "AI_CHATBOT",
          title: "To Enable/disable Ai Chatbot",
          description: "Ai Chatbot settings",
          id: _0x14ca7d + "aichatbot1"
        };
        const _0x243c71 = {
          header: "AI_IMAGE",
          title: "To Enable/disable Ai Image",
          description: "Ai Image settings",
          id: _0x14ca7d + "aiimage1"
        };
        const _0xc692d5 = {
          header: "DISABLE_PM",
          title: "To Enable/disable Only Group",
          description: "Disablr Pm settings",
          id: _0x14ca7d + "disablepm1"
        };
        const _0x5dba79 = {
          header: "AUTO_VOICE",
          title: "To Enable/disable Auto Voice",
          description: "Voice Settings",
          id: _0x14ca7d + "autovoice1"
        };
        const _0x3b8faf = {
          header: "AUTO_STICKER",
          title: "To Enable/disable Auto Voice",
          description: "Sticker Settings",
          id: _0x14ca7d + "autosticker1"
        };
        const _0x3d9aba = {
          header: "AUTO_BIO",
          title: "To Enable/disable Auto Bio",
          description: "Bio Settings",
          id: _0x14ca7d + "autobio1"
        };
        const _0x48d766 = {
          header: "AUTO_STATUS_VIEW",
          title: "To Enable/disable Auto Status View",
          description: "Auto Status Settings",
          id: _0x14ca7d + "autosview1"
        };
        const _0x4852be = {
          header: "AUTO_TYPING",
          title: "To Enable/disable Auto Typing",
          description: "Auto Typing Settings",
          id: _0x14ca7d + "autotype1"
        };
        const _0x1087c8 = {
          header: "AUTO_RECORDING",
          title: "To Enable/disable Auto Recording",
          description: " Auto Recording Settings",
          id: _0x14ca7d + "autorecord1"
        };
        const _0x481b36 = {
          header: "AUTO_READ",
          title: "To Enable/disable Auto Read",
          description: "Auto Read Settings",
          id: _0x14ca7d + "autoread1"
        };
        const _0x460ac3 = {
          header: "READ_CMD_ONLY",
          title: "To Enable/disable Cmd Read",
          description: "Cmd Read Settings",
          id: _0x14ca7d + "cmdread1"
        };
        const _0xf47f57 = {
          header: "AUTO_REACT",
          title: "To Enable/disable Auto React",
          description: "Auto React Settings",
          id: _0x14ca7d + "autoreact1"
        };
        const _0x5a017c = {
          header: "ALWAYS_ONLINE",
          title: "To Enable/disable Always Online",
          description: "Always Onlind Settings",
          id: _0x14ca7d + "alwaysonline1"
        };
        const _0x24002e = {
          header: "AUTO_BLOCK",
          title: "To Enable/disable Auto No",
          description: "Auto No Block Settings",
          id: _0x14ca7d + "autoblock1"
        };
        const _0x20542f = {
          header: "AUTO_WELCOME",
          title: "To Enable/disable Auto Welcome",
          description: "Welcome Settings",
          id: _0x14ca7d + "autowelcome1"
        };
        const _0x1f4ed2 = {
          header: "ANTI_BOT",
          title: "To Enable/disable AntiBot",
          description: "AntiBot Settings",
          id: _0x14ca7d + "antibot1"
        };
        const _0x58b425 = {
          header: "ANTI_LINK",
          title: "To Enable/disable AntiLink",
          description: "AntiLink Settings",
          id: _0x14ca7d + "antilink1"
        };
        const _0x261db0 = {
          header: "ANTI_BAD",
          title: "To Enable/disable AntiBad",
          description: "AntiBaad Settings",
          id: _0x14ca7d + "antibad1"
        };
        const _0x2bcebd = {
          header: "ANTI_DELETE",
          title: "To Enable/disable AntiDelete",
          description: "AntiDelete Settings",
          id: _0x14ca7d + "antidelete1"
        };
        const _0x4c1a73 = {
          header: "ANTI_CALL",
          title: "To Enable/disable AntiCALL",
          description: "AntiCall Settings",
          id: _0x14ca7d + "anticall1"
        };
        _0x3cb89c.push(_0x33a6ba);
        _0x3cb89c.push(_0x409723);
        _0x3cb89c.push(_0x5ad0ab);
        _0x3cb89c.push(_0x4c5bce);
        _0x3cb89c.push(_0x2f1876);
        _0x3cb89c.push(_0x5609a4);
        _0x3cb89c.push(_0x243c71);
        _0x3cb89c.push(_0xc692d5);
        _0x3cb89c.push(_0x5dba79);
        _0x3cb89c.push(_0x3b8faf);
        _0x3cb89c.push(_0x3d9aba);
        _0x3cb89c.push(_0x48d766);
        _0x3cb89c.push(_0x4852be);
        _0x3cb89c.push(_0x1087c8);
        _0x3cb89c.push(_0x481b36);
        _0x3cb89c.push(_0x460ac3);
        _0x3cb89c.push(_0xf47f57);
        _0x3cb89c.push(_0x5a017c);
        _0x3cb89c.push(_0x24002e);
        _0x3cb89c.push(_0x20542f);
        _0x3cb89c.push(_0x1f4ed2);
        _0x3cb89c.push(_0x58b425);
        _0x3cb89c.push(_0x261db0);
        _0x3cb89c.push(_0x2bcebd);
        _0x3cb89c.push(_0x4c1a73);
        const _0x4a7fd1 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x1ad50e = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x4a7fd1)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select a Category :)",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X - B Y T E",
              'rows': _0x3cb89c
            }]
          })
        }];
        const _0x22ecd2 = {
          image: "https://telegra.ph/file/f028608d9a98e04c32aab.jpg",
          header: '',
          footer: config.FOOTER,
          body: _0x4592c5
        };
        const _0x4da9cc = {
          quoted: _0x5d8064
        };
        return await _0x5328a7.sendButtonMessage(_0x3478c6, _0x1ad50e, _0x251dc9, _0x22ecd2, _0x4da9cc);
      } catch (_0xba0a4f) {
        _0x2f085c("*Error !!*");
        console.log(_0xba0a4f);
      }
    });
    const _0x39e6a2 = {
      pattern: "oreact1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x39e6a2, async (_0x117676, _0x2b73ca, _0x93fbcf, {
      from: _0x13cd2c,
      l: _0x53f662,
      prefix: _0x488bf9,
      quoted: _0x270631,
      body: _0x1d03dd,
      isCmd: _0x1b36b9,
      command: _0x53db15,
      args: _0x4b0e75,
      q: _0x563aaf,
      isGroup: _0x123e52,
      sender: _0x14097e,
      senderNumber: _0x16e5ed,
      botNumber2: _0x5c143b,
      botNumber: _0x18ccd1,
      pushname: _0xee9318,
      isMe: _0x465167,
      isOwner: _0x1caad5,
      groupMetadata: _0x2d7139,
      groupName: _0x2703e4,
      participants: _0x468925,
      groupAdmins: _0x398f32,
      isBotAdmins: _0xf3d21a,
      isAdmins: _0x3dd7a3,
      reply: _0x2db1d4
    }) => {
      try {
        if (!_0x465167) {
          return await _0x2db1d4(BOTOW);
        }
        var _0x218e72 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Owner React",
                'id': _0x488bf9 + "oreact on"
              }, {
                'title': "Disable",
                'description': "To Enable Owner React",
                'id': _0x488bf9 + "oreact off"
              }]
            }]
          })
        }];
        const _0x33210a = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *OWNER REACT SETTINGS*\n  Only Works For TC Team members"
        };
        const _0x1170ae = {
          quoted: _0x2b73ca
        };
        return await _0x117676.sendButtonMessage(_0x13cd2c, _0x218e72, _0x93fbcf, _0x33210a, _0x1170ae);
      } catch (_0x4a7ab0) {
        _0x2db1d4("*Error !!*");
        console.log(_0x4a7ab0);
      }
    });
    const _0x5e34ed = {
      pattern: "onlygroup1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x5e34ed, async (_0x3e4f15, _0x35618d, _0x6104fd, {
      from: _0x51e7aa,
      l: _0x582706,
      prefix: _0x30be84,
      quoted: _0x267a9d,
      body: _0x3beac7,
      isCmd: _0x2f4bc6,
      command: _0x3369e5,
      args: _0x23f25c,
      q: _0x2cb36b,
      isGroup: _0x48541d,
      sender: _0x1c991a,
      senderNumber: _0x413ba5,
      botNumber2: _0x525a66,
      botNumber: _0x3e6e8b,
      pushname: _0x962ebc,
      isMe: _0x252811,
      isOwner: _0x29b496,
      groupMetadata: _0x1d276f,
      groupName: _0x4472ee,
      participants: _0x276976,
      groupAdmins: _0x1a6b30,
      isBotAdmins: _0x43ab13,
      isAdmins: _0x4d28f9,
      reply: _0x33bd22
    }) => {
      try {
        if (!_0x252811) {
          return await _0x33bd22(BOTOW);
        }
        var _0x7076bd = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Only Group",
                'id': _0x30be84 + "onlygroup on"
              }, {
                'title': "Disable",
                'description': "To Enable Only Group",
                'id': _0x30be84 + "onlygroup off"
              }]
            }]
          })
        }];
        const _0x58ca06 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ONLY GROUP SETTINGS*\n  Only Works For TC Team members"
        };
        const _0x3c988b = {
          quoted: _0x35618d
        };
        return await _0x3e4f15.sendButtonMessage(_0x51e7aa, _0x7076bd, _0x6104fd, _0x58ca06, _0x3c988b);
      } catch (_0x38c027) {
        _0x33bd22("*Error !!*");
        console.log(_0x38c027);
      }
    });
    const _0x910a7a = {
      pattern: "onlyme1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x910a7a, async (_0xf57c82, _0xfa47fa, _0x31fd38, {
      from: _0x510692,
      l: _0x40b70e,
      prefix: _0x48deb9,
      quoted: _0x4cc97d,
      body: _0x34b35b,
      isCmd: _0x1cc97a,
      command: _0x5e13ad,
      args: _0x35dc54,
      q: _0x4d69d6,
      isGroup: _0x525d01,
      sender: _0x5f4c98,
      senderNumber: _0x13d26c,
      botNumber2: _0xfbeb5,
      botNumber: _0x3e577a,
      pushname: _0x288ca5,
      isMe: _0x61a2c9,
      isOwner: _0x26956f,
      groupMetadata: _0x93cec3,
      groupName: _0x3bf65a,
      participants: _0xf8dde0,
      groupAdmins: _0x15e661,
      isBotAdmins: _0x18441c,
      isAdmins: _0x4b7862,
      reply: _0x34ad35
    }) => {
      try {
        if (!_0x61a2c9) {
          return await _0x34ad35(BOTOW);
        }
        var _0x5d5e5e = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Work Type",
                'id': _0x48deb9 + "onlyme on"
              }, {
                'title': "Disable",
                'description': "To Enable Work Type",
                'id': _0x48deb9 + "onlyme off"
              }]
            }]
          })
        }];
        const _0x21c964 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ONLY ME SETTINGS*\n  Only Works For TC Team members"
        };
        const _0x2f350d = {
          quoted: _0xfa47fa
        };
        return await _0xf57c82.sendButtonMessage(_0x510692, _0x5d5e5e, _0x31fd38, _0x21c964, _0x2f350d);
      } catch (_0xa486c4) {
        _0x34ad35("*Error !!*");
        console.log(_0xa486c4);
      }
    });
    const _0x13138c = {
      pattern: "worktype1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x13138c, async (_0x5d75c2, _0x2c3cbd, _0x1465b8, {
      from: _0x5a24cf,
      l: _0x572dfb,
      prefix: _0xc7180d,
      quoted: _0x2def6a,
      body: _0x543039,
      isCmd: _0x60fc89,
      command: _0x1c7959,
      args: _0x269632,
      q: _0x5bec3b,
      isGroup: _0x5d7f89,
      sender: _0x179a40,
      senderNumber: _0x3b65e4,
      botNumber2: _0x47a196,
      botNumber: _0x284b12,
      pushname: _0x5cab8a,
      isMe: _0x12a807,
      isOwner: _0xf95283,
      groupMetadata: _0x3ba580,
      groupName: _0x3e05f8,
      participants: _0x4a8615,
      groupAdmins: _0x349cc4,
      isBotAdmins: _0x21f0b6,
      isAdmins: _0x4fdd57,
      reply: _0x566e39
    }) => {
      try {
        if (!_0x12a807) {
          return await _0x566e39(BOTOW);
        }
        var _0x10ecaa = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Private",
                'id': _0xc7180d + "worktype on"
              }, {
                'title': "Disable",
                'description': "To Enable Public",
                'id': _0xc7180d + "worktype off"
              }]
            }]
          })
        }];
        const _0x1056c0 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ONLY GROUP SETTINGS*"
        };
        const _0xc64b9e = {
          quoted: _0x2c3cbd
        };
        return await _0x5d75c2.sendButtonMessage(_0x5a24cf, _0x10ecaa, _0x1465b8, _0x1056c0, _0xc64b9e);
      } catch (_0x43e2ca) {
        _0x566e39("*Error !!*");
        console.log(_0x43e2ca);
      }
    });
    const _0x890c7e = {
      pattern: "welcome1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x890c7e, async (_0x25d220, _0x4cb35d, _0x3eeb93, {
      from: _0x491d2a,
      l: _0x36f700,
      prefix: _0x2cdba2,
      quoted: _0x2b96a5,
      body: _0x4730ec,
      isCmd: _0x1de843,
      command: _0x2e67f6,
      args: _0x5baf7e,
      q: _0x28e75,
      isGroup: _0x34023f,
      sender: _0x262fcf,
      senderNumber: _0x50d1bb,
      botNumber2: _0x266a55,
      botNumber: _0x33a744,
      pushname: _0x2de8a4,
      isMe: _0x6485b7,
      isOwner: _0x2b0b37,
      groupMetadata: _0x1e4e6b,
      groupName: _0x4bdd18,
      participants: _0x4d7842,
      groupAdmins: _0x4c5668,
      isBotAdmins: _0x51724b,
      isAdmins: _0x5133a0,
      reply: _0xca126f
    }) => {
      try {
        if (!_0x6485b7) {
          return await _0xca126f(BOTOW);
        }
        var _0x426cf9 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Welcome",
                'id': _0x2cdba2 + "welcome on"
              }, {
                'title': "Disable",
                'description': "To disable Welcome",
                'id': _0x2cdba2 + "welcome off"
              }]
            }]
          })
        }];
        const _0x1c9c70 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *WELCOME SETTINGS*"
        };
        const _0x4df854 = {
          quoted: _0x4cb35d
        };
        return await _0x25d220.sendButtonMessage(_0x491d2a, _0x426cf9, _0x3eeb93, _0x1c9c70, _0x4df854);
      } catch (_0x244a08) {
        _0xca126f("*Error !!*");
        console.log(_0x244a08);
      }
    });
    const _0x2b751f = {
      pattern: "mathsai1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x2b751f, async (_0x5bd588, _0x4964c0, _0x45202e, {
      from: _0x4fd412,
      l: _0x382159,
      prefix: _0x637869,
      quoted: _0x39af11,
      body: _0x2c29d7,
      isCmd: _0x10c11c,
      command: _0x581c9f,
      args: _0x323105,
      q: _0x2ddad4,
      isGroup: _0x1394f0,
      sender: _0x41ebe4,
      senderNumber: _0x4a7ae7,
      botNumber2: _0x5c5062,
      botNumber: _0x479822,
      pushname: _0x535ad3,
      isMe: _0x403449,
      isOwner: _0x4bc524,
      groupMetadata: _0x34d5d5,
      groupName: _0x3f2c07,
      participants: _0x66b11e,
      groupAdmins: _0x303b55,
      isBotAdmins: _0x2a55cd,
      isAdmins: _0x4ad5d7,
      reply: _0x4402f4
    }) => {
      try {
        if (!_0x403449) {
          return await _0x4402f4(BOTOW);
        }
        var _0x379d32 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Ai Maths",
                'id': _0x637869 + "mathsai on"
              }, {
                'title': "Disable",
                'description': "To disable Ai Maths",
                'id': _0x637869 + "mathsai off"
              }]
            }]
          })
        }];
        const _0x39d102 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AI MATHS SETTINGS*"
        };
        const _0x9868fc = {
          quoted: _0x4964c0
        };
        return await _0x5bd588.sendButtonMessage(_0x4fd412, _0x379d32, _0x45202e, _0x39d102, _0x9868fc);
      } catch (_0x3b70a3) {
        _0x4402f4("*Error !!*");
        console.log(_0x3b70a3);
      }
    });
    const _0x37660d = {
      pattern: "aichatbot1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x37660d, async (_0x8ac056, _0x229494, _0x536579, {
      from: _0x59f577,
      l: _0x51a307,
      prefix: _0x3ba59d,
      quoted: _0x3ede98,
      body: _0x2ab9ea,
      isCmd: _0x3343c8,
      command: _0x8ed740,
      args: _0x191c09,
      q: _0x73c6d0,
      isGroup: _0xbe4ec9,
      sender: _0xf247d3,
      senderNumber: _0x546020,
      botNumber2: _0x1ef391,
      botNumber: _0x2cb6e8,
      pushname: _0x5f26ec,
      isMe: _0x1ebae6,
      isOwner: _0x4f7050,
      groupMetadata: _0x1342ab,
      groupName: _0x42568f,
      participants: _0xc6aec6,
      groupAdmins: _0x55fb29,
      isBotAdmins: _0x3dde99,
      isAdmins: _0x32d972,
      reply: _0x1bc9d1
    }) => {
      try {
        if (!_0x1ebae6) {
          return await _0x1bc9d1(BOTOW);
        }
        var _0x299a89 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Ai Chatbot",
                'id': _0x3ba59d + "aichatbot on"
              }, {
                'title': "Disable",
                'description': "To desable Ai Chatbot",
                'id': _0x3ba59d + "aichatbot off"
              }]
            }]
          })
        }];
        const _0x46d3df = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AI CHATBOT SETTINGS*"
        };
        const _0x28e6d6 = {
          quoted: _0x229494
        };
        return await _0x8ac056.sendButtonMessage(_0x59f577, _0x299a89, _0x536579, _0x46d3df, _0x28e6d6);
      } catch (_0x1223eb) {
        _0x1bc9d1("*Error !!*");
        console.log(_0x1223eb);
      }
    });
    const _0x4187f4 = {
      pattern: "aiimage1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x4187f4, async (_0x358d61, _0x526c2d, _0x1e4c5d, {
      from: _0x171b0b,
      l: _0x2a9991,
      prefix: _0x2c5065,
      quoted: _0x1e5688,
      body: _0x138c01,
      isCmd: _0x2b12e7,
      command: _0x1848b5,
      args: _0x582140,
      q: _0x56917a,
      isGroup: _0x59ba87,
      sender: _0x524a8c,
      senderNumber: _0x38c6f4,
      botNumber2: _0x29acb2,
      botNumber: _0x275b62,
      pushname: _0x4a296d,
      isMe: _0x49ea0f,
      isOwner: _0x1fd918,
      groupMetadata: _0x3c111b,
      groupName: _0x598864,
      participants: _0x23192c,
      groupAdmins: _0xeb8684,
      isBotAdmins: _0x32798f,
      isAdmins: _0x4ba884,
      reply: _0x4e1932
    }) => {
      try {
        if (!_0x49ea0f) {
          return await _0x4e1932(BOTOW);
        }
        var _0xa65ada = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Ai Image",
                'id': _0x2c5065 + "aiimage on"
              }, {
                'title': "Disable",
                'description': "To disable Ai Image",
                'id': _0x2c5065 + "aiimage off"
              }]
            }]
          })
        }];
        const _0x1b1b1c = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AI INAGE SETTINGS*"
        };
        const _0xceffd5 = {
          quoted: _0x526c2d
        };
        return await _0x358d61.sendButtonMessage(_0x171b0b, _0xa65ada, _0x1e4c5d, _0x1b1b1c, _0xceffd5);
      } catch (_0x28dbc0) {
        _0x4e1932("*Error !!*");
        console.log(_0x28dbc0);
      }
    });
    const _0x48be4a = {
      pattern: "disablepm1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x48be4a, async (_0x4e2740, _0x279c52, _0x4206d9, {
      from: _0x14b6dd,
      l: _0x5c6ec3,
      prefix: _0x6d31c,
      quoted: _0x42b295,
      body: _0x14fcbc,
      isCmd: _0x3ca16f,
      command: _0x587b32,
      args: _0x136e22,
      q: _0x3e7191,
      isGroup: _0x118ed8,
      sender: _0x55da1b,
      senderNumber: _0x12182a,
      botNumber2: _0x43c953,
      botNumber: _0x357fed,
      pushname: _0x461cd9,
      isMe: _0x16a64e,
      isOwner: _0x571cc2,
      groupMetadata: _0x210814,
      groupName: _0x13a068,
      participants: _0x15cec6,
      groupAdmins: _0xfea0e8,
      isBotAdmins: _0x76ae4a,
      isAdmins: _0x3bc6c4,
      reply: _0x4b4dc9
    }) => {
      try {
        if (!_0x16a64e) {
          return await _0x4b4dc9(BOTOW);
        }
        var _0x1546e6 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Bot Shutdown",
                'id': _0x6d31c + "disablepm on"
              }, {
                'title': "Disable",
                'description': "To Enable Public",
                'id': _0x6d31c + "disablepm off"
              }]
            }]
          })
        }];
        const _0x128da0 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *WORK TYPE SETTINGS*"
        };
        const _0x3f5472 = {
          quoted: _0x279c52
        };
        return await _0x4e2740.sendButtonMessage(_0x14b6dd, _0x1546e6, _0x4206d9, _0x128da0, _0x3f5472);
      } catch (_0x1a6e00) {
        _0x4b4dc9("*Error !!*");
        console.log(_0x1a6e00);
      }
    });
    const _0x2ee228 = {
      pattern: "autovoice1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x2ee228, async (_0x45036c, _0x595e38, _0xdb2907, {
      from: _0x52dec5,
      l: _0x423601,
      prefix: _0x4bdea8,
      quoted: _0x521491,
      body: _0x332bf1,
      isCmd: _0x1da501,
      command: _0x383933,
      args: _0x5e10f3,
      q: _0x3aaab3,
      isGroup: _0x2bbb31,
      sender: _0x20ea01,
      senderNumber: _0x13fb7c,
      botNumber2: _0x1ea124,
      botNumber: _0x30e09a,
      pushname: _0x4b0be5,
      isMe: _0x156203,
      isOwner: _0x2db82b,
      groupMetadata: _0x20b814,
      groupName: _0x19d03f,
      participants: _0x11eaa9,
      groupAdmins: _0x445e3d,
      isBotAdmins: _0x593b7e,
      isAdmins: _0x459308,
      reply: _0x498e63
    }) => {
      try {
        if (!_0x156203) {
          return await _0x498e63(BOTOW);
        }
        var _0x1282ee = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Voice",
                'id': _0x4bdea8 + "autovoice on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Voice",
                'id': _0x4bdea8 + "autovoice off"
              }]
            }]
          })
        }];
        const _0x273ead = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO VOICE SETTINGS*"
        };
        const _0x5cddaf = {
          quoted: _0x595e38
        };
        return await _0x45036c.sendButtonMessage(_0x52dec5, _0x1282ee, _0xdb2907, _0x273ead, _0x5cddaf);
      } catch (_0x3a97fb) {
        _0x498e63("*Error !!*");
        console.log(_0x3a97fb);
      }
    });
    const _0x1d2196 = {
      pattern: "autosticker1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x1d2196, async (_0x231712, _0x15f83b, _0x461a60, {
      from: _0x42951d,
      l: _0x49b709,
      prefix: _0x2fff01,
      quoted: _0x333a82,
      body: _0x194566,
      isCmd: _0x4b70fd,
      command: _0x1dfbb4,
      args: _0x294f59,
      q: _0x209b6c,
      isGroup: _0x4cc17c,
      sender: _0x5b1a3e,
      senderNumber: _0x1f6f2c,
      botNumber2: _0x333610,
      botNumber: _0x141a04,
      pushname: _0x716237,
      isMe: _0x3bb0b6,
      isOwner: _0x587b5e,
      groupMetadata: _0x208e23,
      groupName: _0x3ebed3,
      participants: _0x1374bf,
      groupAdmins: _0x2b0129,
      isBotAdmins: _0x4459e9,
      isAdmins: _0x1e07b5,
      reply: _0x9b31f7
    }) => {
      try {
        if (!_0x3bb0b6) {
          return await _0x9b31f7(BOTOW);
        }
        var _0x28ba65 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Sticker",
                'id': _0x2fff01 + "autosticker on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Sticker",
                'id': _0x2fff01 + "autosticker off"
              }]
            }]
          })
        }];
        const _0x5e43c7 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO STICKER SETTINGS*"
        };
        const _0x37a576 = {
          quoted: _0x15f83b
        };
        return await _0x231712.sendButtonMessage(_0x42951d, _0x28ba65, _0x461a60, _0x5e43c7, _0x37a576);
      } catch (_0x3f9581) {
        _0x9b31f7("*Error !!*");
        console.log(_0x3f9581);
      }
    });
    const _0x182003 = {
      pattern: "autobio1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x182003, async (_0x5753fe, _0x2ad211, _0x33e4cb, {
      from: _0x703233,
      l: _0x3a02d0,
      prefix: _0x5339a9,
      quoted: _0x532654,
      body: _0x2a1fbd,
      isCmd: _0x287f41,
      command: _0x59611a,
      args: _0x1e135b,
      q: _0x2ee0d7,
      isGroup: _0x39ed43,
      sender: _0x406337,
      senderNumber: _0xd3ea10,
      botNumber2: _0xe01785,
      botNumber: _0x4b3505,
      pushname: _0x51200c,
      isMe: _0x58cde6,
      isOwner: _0x2227a1,
      groupMetadata: _0x5943e8,
      groupName: _0x1362c1,
      participants: _0xacba6d,
      groupAdmins: _0x57197b,
      isBotAdmins: _0x92cc02,
      isAdmins: _0x15c939,
      reply: _0x2003aa
    }) => {
      try {
        if (!_0x58cde6) {
          return await _0x2003aa(BOTOW);
        }
        var _0x3973f0 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Bio",
                'id': _0x5339a9 + "autobio on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Bio",
                'id': _0x5339a9 + "autobio off"
              }]
            }]
          })
        }];
        const _0x4e69ac = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO BIO SETTINGS*"
        };
        const _0x5ba541 = {
          quoted: _0x2ad211
        };
        return await _0x5753fe.sendButtonMessage(_0x703233, _0x3973f0, _0x33e4cb, _0x4e69ac, _0x5ba541);
      } catch (_0x5a07f9) {
        _0x2003aa("*Error !!*");
        console.log(_0x5a07f9);
      }
    });
    const _0x2d2109 = {
      pattern: "autosview1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x2d2109, async (_0x28edee, _0x70fcac, _0x1ad2c8, {
      from: _0x18f51e,
      l: _0x494ff9,
      prefix: _0x1f5abe,
      quoted: _0x211b85,
      body: _0x3a7ad0,
      isCmd: _0x5613c2,
      command: _0x1235ff,
      args: _0x5ab697,
      q: _0x2a01f7,
      isGroup: _0x1d3820,
      sender: _0x400c09,
      senderNumber: _0x99e6aa,
      botNumber2: _0x4a4e80,
      botNumber: _0x1a72bf,
      pushname: _0x1d8122,
      isMe: _0x524765,
      isOwner: _0x109a69,
      groupMetadata: _0x103d7d,
      groupName: _0x57a4a8,
      participants: _0x578505,
      groupAdmins: _0x1b05d9,
      isBotAdmins: _0x4a3a80,
      isAdmins: _0x49f99f,
      reply: _0x2a3837
    }) => {
      try {
        if (!_0x524765) {
          return await _0x2a3837(BOTOW);
        }
        var _0x1e82a0 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Status View",
                'id': _0x1f5abe + "autostatus on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Status View",
                'id': _0x1f5abe + "autostatus off"
              }]
            }]
          })
        }];
        const _0x3bfc56 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO STATUS VIEW SETTINGS*"
        };
        const _0x16fbb4 = {
          quoted: _0x70fcac
        };
        return await _0x28edee.sendButtonMessage(_0x18f51e, _0x1e82a0, _0x1ad2c8, _0x3bfc56, _0x16fbb4);
      } catch (_0x3147a8) {
        _0x2a3837("*Error !!*");
        console.log(_0x3147a8);
      }
    });
    const _0x197e3e = {
      pattern: "autotype1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x197e3e, async (_0x15f43b, _0x1cabef, _0x4173cf, {
      from: _0x16f010,
      l: _0x3ebb1b,
      prefix: _0x2294ef,
      quoted: _0x3d70d9,
      body: _0x565819,
      isCmd: _0x275ded,
      command: _0x5516c9,
      args: _0x249cdf,
      q: _0x5be4a7,
      isGroup: _0x4d1d7b,
      sender: _0x744b0b,
      senderNumber: _0x206ed7,
      botNumber2: _0x253792,
      botNumber: _0x56068c,
      pushname: _0x3caeee,
      isMe: _0x1dd0d7,
      isOwner: _0x186fb7,
      groupMetadata: _0x4717ab,
      groupName: _0x9eac8a,
      participants: _0x454177,
      groupAdmins: _0x243aa1,
      isBotAdmins: _0x4c5f73,
      isAdmins: _0x1d53d3,
      reply: _0x141b7a
    }) => {
      try {
        if (!_0x1dd0d7) {
          return await _0x141b7a(BOTOW);
        }
        var _0x28ef67 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Typing",
                'id': _0x2294ef + "autotyping on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Typing",
                'id': _0x2294ef + "autotyping off"
              }]
            }]
          })
        }];
        const _0x15717a = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO TYPING SETTINGS*"
        };
        const _0x24c98f = {
          quoted: _0x1cabef
        };
        return await _0x15f43b.sendButtonMessage(_0x16f010, _0x28ef67, _0x4173cf, _0x15717a, _0x24c98f);
      } catch (_0x116968) {
        _0x141b7a("*Error !!*");
        console.log(_0x116968);
      }
    });
    const _0x96b26b = {
      pattern: "autorecord1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x96b26b, async (_0x3d384a, _0x4ab5d2, _0x3aca74, {
      from: _0x5568b9,
      l: _0x106840,
      prefix: _0x240a99,
      quoted: _0x5fb811,
      body: _0x3313df,
      isCmd: _0x5197f9,
      command: _0x492107,
      args: _0x17eba1,
      q: _0x5e7ecf,
      isGroup: _0x30a156,
      sender: _0x39a3e6,
      senderNumber: _0xa07d70,
      botNumber2: _0x5710a3,
      botNumber: _0x5882c7,
      pushname: _0x3d40b6,
      isMe: _0x5bfb8a,
      isOwner: _0x257781,
      groupMetadata: _0x2d1a09,
      groupName: _0x3de0ae,
      participants: _0x5ac4d1,
      groupAdmins: _0x11586c,
      isBotAdmins: _0x46fa0b,
      isAdmins: _0x4dc6d5,
      reply: _0x4bd544
    }) => {
      try {
        if (!_0x5bfb8a) {
          return await _0x4bd544(BOTOW);
        }
        var _0x3afb40 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Recording",
                'id': _0x240a99 + "autorecording on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Recording",
                'id': _0x240a99 + "autorecording off"
              }]
            }]
          })
        }];
        const _0x5e66cf = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO RECORDING SETTINGS*"
        };
        const _0x1cc2a2 = {
          quoted: _0x4ab5d2
        };
        return await _0x3d384a.sendButtonMessage(_0x5568b9, _0x3afb40, _0x3aca74, _0x5e66cf, _0x1cc2a2);
      } catch (_0x54cef8) {
        _0x4bd544("*Error !!*");
        console.log(_0x54cef8);
      }
    });
    const _0x4e0bf6 = {
      pattern: "autoread1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x4e0bf6, async (_0x4e55be, _0x5b81ff, _0x461387, {
      from: _0x292c0c,
      l: _0x1e5afb,
      prefix: _0xb11561,
      quoted: _0x3e1024,
      body: _0x3f63fd,
      isCmd: _0x3992e7,
      command: _0x4b9803,
      args: _0x4a9be7,
      q: _0x5af744,
      isGroup: _0xbd4d9e,
      sender: _0x2cd97b,
      senderNumber: _0x2c489b,
      botNumber2: _0x7a7c06,
      botNumber: _0x3fa0c9,
      pushname: _0x188275,
      isMe: _0x42a036,
      isOwner: _0x128743,
      groupMetadata: _0x21f572,
      groupName: _0x38aff6,
      participants: _0x5aaad0,
      groupAdmins: _0x4ab493,
      isBotAdmins: _0x3f676e,
      isAdmins: _0xfab6c7,
      reply: _0x32e854
    }) => {
      try {
        if (!_0x42a036) {
          return await _0x32e854(BOTOW);
        }
        var _0x54f599 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Read",
                'id': _0xb11561 + "autoread on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Read",
                'id': _0xb11561 + "autoread off"
              }]
            }]
          })
        }];
        const _0x20e458 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO READ SETTINGS*"
        };
        const _0x30dcf4 = {
          quoted: _0x5b81ff
        };
        return await _0x4e55be.sendButtonMessage(_0x292c0c, _0x54f599, _0x461387, _0x20e458, _0x30dcf4);
      } catch (_0x54fe02) {
        _0x32e854("*Error !!*");
        console.log(_0x54fe02);
      }
    });
    const _0x2a018a = {
      pattern: "cmdread1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x2a018a, async (_0x36c7d2, _0x355600, _0x572435, {
      from: _0x39d977,
      l: _0x4f0260,
      prefix: _0x2f8333,
      quoted: _0x550f5b,
      body: _0x1780a1,
      isCmd: _0x4065e3,
      command: _0x4be6c5,
      args: _0x12eec9,
      q: _0x50a9f9,
      isGroup: _0x20b2f7,
      sender: _0x2febd8,
      senderNumber: _0x3c379f,
      botNumber2: _0x360d44,
      botNumber: _0x33b591,
      pushname: _0x2fdf8f,
      isMe: _0x1d27b5,
      isOwner: _0x3f55a7,
      groupMetadata: _0x4205d2,
      groupName: _0x560d5b,
      participants: _0x2c09b4,
      groupAdmins: _0x2084fa,
      isBotAdmins: _0x20f48c,
      isAdmins: _0x1e8296,
      reply: _0x28568a
    }) => {
      try {
        if (!_0x1d27b5) {
          return await _0x28568a(BOTOW);
        }
        var _0x50daa6 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Cmd Read",
                'id': _0x2f8333 + "cmdread on"
              }, {
                'title': "Disable",
                'description': "To Disable Cmd Read",
                'id': _0x2f8333 + "cmdread off"
              }]
            }]
          })
        }];
        const _0x3e4dc4 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *CMD READ SETTINGS*"
        };
        const _0x5d4c5b = {
          quoted: _0x355600
        };
        return await _0x36c7d2.sendButtonMessage(_0x39d977, _0x50daa6, _0x572435, _0x3e4dc4, _0x5d4c5b);
      } catch (_0x4d57a6) {
        _0x28568a("*Error !!*");
        console.log(_0x4d57a6);
      }
    });
    const _0x3b909c = {
      pattern: "autoreact1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x3b909c, async (_0x393e4e, _0x184ee3, _0x288e1e, {
      from: _0x381d2c,
      l: _0x49dc07,
      prefix: _0x5e1a2b,
      quoted: _0x2750cf,
      body: _0x9934f9,
      isCmd: _0xcad9cf,
      command: _0x13b4ee,
      args: _0x41d20f,
      q: _0x461fdb,
      isGroup: _0x30bc7a,
      sender: _0x1080c4,
      senderNumber: _0x2d9675,
      botNumber2: _0x206999,
      botNumber: _0x3f9702,
      pushname: _0x9d2bb9,
      isMe: _0x5c35f3,
      isOwner: _0x46a2e4,
      groupMetadata: _0x2e2db3,
      groupName: _0x348dac,
      participants: _0x12b33a,
      groupAdmins: _0x4e8a56,
      isBotAdmins: _0x50deb0,
      isAdmins: _0x2ecb3d,
      reply: _0x47d51b
    }) => {
      try {
        if (!_0x5c35f3) {
          return await _0x47d51b(BOTOW);
        }
        var _0x48bb07 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto React",
                'id': _0x5e1a2b + "autoreact on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto React",
                'id': _0x5e1a2b + "autoreact off"
              }]
            }]
          })
        }];
        const _0x16218f = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO REACT SETTINGS*"
        };
        const _0x1ed73e = {
          quoted: _0x184ee3
        };
        return await _0x393e4e.sendButtonMessage(_0x381d2c, _0x48bb07, _0x288e1e, _0x16218f, _0x1ed73e);
      } catch (_0x3f3d6a) {
        _0x47d51b("*Error !!*");
        console.log(_0x3f3d6a);
      }
    });
    const _0x151581 = {
      pattern: "alwaysonline1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x151581, async (_0x4a2260, _0xf61e33, _0x4067e8, {
      from: _0x6cca2e,
      l: _0x8f4de7,
      prefix: _0x482fe3,
      quoted: _0x5af034,
      body: _0x33905c,
      isCmd: _0x41df26,
      command: _0x26e19f,
      args: _0x436145,
      q: _0x43afaf,
      isGroup: _0x4f2725,
      sender: _0x19b204,
      senderNumber: _0x3293cc,
      botNumber2: _0x48268f,
      botNumber: _0x2641be,
      pushname: _0x3393b6,
      isMe: _0x26bca8,
      isOwner: _0x2e1b4e,
      groupMetadata: _0x219215,
      groupName: _0x4aa372,
      participants: _0x207d7f,
      groupAdmins: _0x3bce63,
      isBotAdmins: _0x33628f,
      isAdmins: _0x22d696,
      reply: _0x527062
    }) => {
      try {
        if (!_0x26bca8) {
          return await _0x527062(BOTOW);
        }
        var _0x1815f = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Always Online",
                'id': _0x482fe3 + "alwaysonline on"
              }, {
                'title': "Disable",
                'description': "To Disable Always Online",
                'id': _0x482fe3 + "alwaysonline off"
              }]
            }]
          })
        }];
        const _0x22ae9b = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ALWAYS ONLINE SETTINGS*"
        };
        const _0x181c48 = {
          quoted: _0xf61e33
        };
        return await _0x4a2260.sendButtonMessage(_0x6cca2e, _0x1815f, _0x4067e8, _0x22ae9b, _0x181c48);
      } catch (_0x31ed08) {
        _0x527062("*Error !!*");
        console.log(_0x31ed08);
      }
    });
    const _0x2bd50d = {
      pattern: "autoblock1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x2bd50d, async (_0x5120db, _0x3729c5, _0x433cc9, {
      from: _0x14bb07,
      l: _0x43a41f,
      prefix: _0x22509e,
      quoted: _0x2dc0b0,
      body: _0x889cad,
      isCmd: _0x167e19,
      command: _0x453f81,
      args: _0x272965,
      q: _0x2855a3,
      isGroup: _0xe7dd5c,
      sender: _0x31c47e,
      senderNumber: _0x1e3e80,
      botNumber2: _0x55ad14,
      botNumber: _0x4c82a2,
      pushname: _0x52a0e5,
      isMe: _0x4082cb,
      isOwner: _0x3eaaef,
      groupMetadata: _0x28d34a,
      groupName: _0x2c330b,
      participants: _0x25e848,
      groupAdmins: _0x267e85,
      isBotAdmins: _0x187730,
      isAdmins: _0x59dee6,
      reply: _0x299004
    }) => {
      try {
        if (!_0x4082cb) {
          return await _0x299004(BOTOW);
        }
        var _0x3adea8 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Block",
                'id': _0x22509e + "autoblock on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Block",
                'id': _0x22509e + "autoblock off"
              }]
            }]
          })
        }];
        const _0x278dc6 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *212 BLOCK SETTINGS*"
        };
        const _0x409d0b = {
          quoted: _0x3729c5
        };
        return await _0x5120db.sendButtonMessage(_0x14bb07, _0x3adea8, _0x433cc9, _0x278dc6, _0x409d0b);
      } catch (_0x208e09) {
        _0x299004("*Error !!*");
        console.log(_0x208e09);
      }
    });
    const _0x92f2ba = {
      pattern: "autowelcome1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x92f2ba, async (_0x2cb9dc, _0x105576, _0x473e36, {
      from: _0x35723c,
      l: _0x52707a,
      prefix: _0x3aac5b,
      quoted: _0x23c2a8,
      body: _0x2555c4,
      isCmd: _0x3f5f5e,
      command: _0xff4b5a,
      args: _0x1e27ee,
      q: _0x37d3db,
      isGroup: _0xbfba00,
      sender: _0x503733,
      senderNumber: _0x138cfa,
      botNumber2: _0x5ac09f,
      botNumber: _0x5c352b,
      pushname: _0x1d8935,
      isMe: _0x2cc375,
      isOwner: _0x443519,
      groupMetadata: _0x530f4d,
      groupName: _0x5840fe,
      participants: _0x3bbd87,
      groupAdmins: _0x34c86c,
      isBotAdmins: _0x3807d3,
      isAdmins: _0xeaecc,
      reply: _0x4794b7
    }) => {
      try {
        if (!_0x2cc375) {
          return await _0x4794b7(BOTOW);
        }
        var _0x2e36bf = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Welcome",
                'id': _0x3aac5b + "autowelcome on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Welcome",
                'id': _0x3aac5b + "autowelcome off"
              }]
            }]
          })
        }];
        const _0x82c13c = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *AUTO WELCOME SETTINGS*"
        };
        const _0x4df202 = {
          quoted: _0x105576
        };
        return await _0x2cb9dc.sendButtonMessage(_0x35723c, _0x2e36bf, _0x473e36, _0x82c13c, _0x4df202);
      } catch (_0x357ef4) {
        _0x4794b7("*Error !!*");
        console.log(_0x357ef4);
      }
    });
    const _0x26bb0f = {
      pattern: "antibot1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x26bb0f, async (_0x34adce, _0x47e62d, _0x18db33, {
      from: _0x3f119c,
      l: _0x3f48a3,
      prefix: _0x3a5645,
      quoted: _0x1312be,
      body: _0xe11dd4,
      isCmd: _0x189fc6,
      command: _0x567a01,
      args: _0x4d9f82,
      q: _0xc96549,
      isGroup: _0xd8154f,
      sender: _0x4de876,
      senderNumber: _0x278855,
      botNumber2: _0x571bd9,
      botNumber: _0x455f17,
      pushname: _0x3e0045,
      isMe: _0x4db824,
      isOwner: _0xe2df76,
      groupMetadata: _0x578388,
      groupName: _0x507706,
      participants: _0x54ee72,
      groupAdmins: _0xb94957,
      isBotAdmins: _0x1dba1f,
      isAdmins: _0x38b3ee,
      reply: _0x226811
    }) => {
      try {
        if (!_0x4db824) {
          return await _0x226811(BOTOW);
        }
        var _0xeaf6a0 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Bot",
                'id': _0x3a5645 + "antibot on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Bot",
                'id': _0x3a5645 + "antibot off"
              }]
            }]
          })
        }];
        const _0x4be93f = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ANTI BOT SETTINGS*"
        };
        const _0x23b4b7 = {
          quoted: _0x47e62d
        };
        return await _0x34adce.sendButtonMessage(_0x3f119c, _0xeaf6a0, _0x18db33, _0x4be93f, _0x23b4b7);
      } catch (_0x491f5c) {
        _0x226811("*Error !!*");
        console.log(_0x491f5c);
      }
    });
    const _0x299635 = {
      pattern: "antilink1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x299635, async (_0x1bca38, _0x249213, _0x2737c3, {
      from: _0x21d9ff,
      l: _0x2260e4,
      prefix: _0x2bfa9b,
      quoted: _0x2fec57,
      body: _0x5d518e,
      isCmd: _0x26b709,
      command: _0x56cbc7,
      args: _0x26c2e3,
      q: _0xf8af2a,
      isGroup: _0xb2dd19,
      sender: _0x9e6a3c,
      senderNumber: _0x118032,
      botNumber2: _0x37c2c7,
      botNumber: _0x7e5a4f,
      pushname: _0x1eed98,
      isMe: _0x2d6f8c,
      isOwner: _0x598349,
      groupMetadata: _0x758024,
      groupName: _0x5008ef,
      participants: _0x28ab71,
      groupAdmins: _0x2d5f29,
      isBotAdmins: _0x4207aa,
      isAdmins: _0x728e3c,
      reply: _0x5c2207
    }) => {
      try {
        if (!_0x2d6f8c) {
          return await _0x5c2207(BOTOW);
        }
        var _0x2268da = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Link",
                'id': _0x2bfa9b + "antilink on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Link",
                'id': _0x2bfa9b + "antilink off"
              }]
            }]
          })
        }];
        const _0x4b3fbb = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ANTI LINK SETTINGS*"
        };
        const _0x586f1f = {
          quoted: _0x249213
        };
        return await _0x1bca38.sendButtonMessage(_0x21d9ff, _0x2268da, _0x2737c3, _0x4b3fbb, _0x586f1f);
      } catch (_0x110413) {
        _0x5c2207("*Error !!*");
        console.log(_0x110413);
      }
    });
    const _0x49debe = {
      pattern: "antibad1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x49debe, async (_0x2b36c6, _0x3a422c, _0x1d3731, {
      from: _0x5d5cb0,
      l: _0x46ba5b,
      prefix: _0x1c012f,
      quoted: _0x459c86,
      body: _0x41cab8,
      isCmd: _0x39c310,
      command: _0x1d48b2,
      args: _0x35d3ed,
      q: _0x46e67f,
      isGroup: _0x4e1818,
      sender: _0x11f809,
      senderNumber: _0x43b04b,
      botNumber2: _0x30bc09,
      botNumber: _0x3960a1,
      pushname: _0x195db8,
      isMe: _0x31169b,
      isOwner: _0x314dad,
      groupMetadata: _0x4f39a9,
      groupName: _0x4dc9b2,
      participants: _0x240956,
      groupAdmins: _0x61ac1d,
      isBotAdmins: _0x368ab6,
      isAdmins: _0x458c3f,
      reply: _0x483012
    }) => {
      try {
        if (!_0x31169b) {
          return await _0x483012(BOTOW);
        }
        var _0x3daa47 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Bad",
                'id': _0x1c012f + "antibad on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Bad",
                'id': _0x1c012f + "antibad off"
              }]
            }]
          })
        }];
        const _0x2a4120 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ANTI BAD SETTINGS*"
        };
        const _0x2a679e = {
          quoted: _0x3a422c
        };
        return await _0x2b36c6.sendButtonMessage(_0x5d5cb0, _0x3daa47, _0x1d3731, _0x2a4120, _0x2a679e);
      } catch (_0x32e198) {
        _0x483012("*Error !!*");
        console.log(_0x32e198);
      }
    });
    const _0x65499f = {
      pattern: "anticall1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x65499f, async (_0x62ee53, _0x5d7a3f, _0x55ce70, {
      from: _0x514ba8,
      l: _0x27e578,
      prefix: _0x388c7b,
      quoted: _0x4faa17,
      body: _0x1f0b32,
      isCmd: _0x1d6ff2,
      command: _0x7d7428,
      args: _0x11cf91,
      q: _0xdb5084,
      isGroup: _0x2df38d,
      sender: _0x528a4a,
      senderNumber: _0x1eb297,
      botNumber2: _0x34a8c3,
      botNumber: _0x5ea082,
      pushname: _0x13f14d,
      isMe: _0x15e62c,
      isOwner: _0x41d821,
      groupMetadata: _0x1ce60a,
      groupName: _0x3806c3,
      participants: _0x464716,
      groupAdmins: _0x585a5d,
      isBotAdmins: _0xbde69c,
      isAdmins: _0x38130b,
      reply: _0x9d5bd
    }) => {
      try {
        if (!_0x15e62c) {
          return await _0x9d5bd(BOTOW);
        }
        var _0x6fc00 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Call",
                'id': _0x388c7b + "anticall on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Call",
                'id': _0x388c7b + "anticall off"
              }]
            }]
          })
        }];
        const _0x5bb384 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ANTI CALL SETTINGS*"
        };
        const _0x18c5a9 = {
          quoted: _0x5d7a3f
        };
        return await _0x62ee53.sendButtonMessage(_0x514ba8, _0x6fc00, _0x55ce70, _0x5bb384, _0x18c5a9);
      } catch (_0x33daa8) {
        _0x9d5bd("*Error !!*");
        console.log(_0x33daa8);
      }
    });
    const _0x2840c2 = {
      pattern: "antidelete1",
      react: "🗃️",
      filename: __filename
    };
    cmd(_0x2840c2, async (_0x334c7c, _0x388bff, _0x4318e4, {
      from: _0x50c61b,
      l: _0x5cbd3a,
      prefix: _0x3474c7,
      quoted: _0x4166e7,
      body: _0x353776,
      isCmd: _0x539b4d,
      command: _0x5e63e1,
      args: _0x3dd275,
      q: _0x2cf26d,
      isGroup: _0x4a9390,
      sender: _0x4a8e0c,
      senderNumber: _0x4bc226,
      botNumber2: _0x2a9dcc,
      botNumber: _0x4aa0cf,
      pushname: _0x3ddb54,
      isMe: _0x8661c3,
      isOwner: _0x2e3aa6,
      groupMetadata: _0x241d33,
      groupName: _0x2df9ad,
      participants: _0x10634e,
      groupAdmins: _0x1097fe,
      isBotAdmins: _0x11ecad,
      isAdmins: _0x4a20ed,
      reply: _0x46fc0a
    }) => {
      try {
        if (!_0x8661c3) {
          return await _0x46fc0a(BOTOW);
        }
        var _0x4562f3 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Delete",
                'id': _0x3474c7 + "antidelete on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Delete",
                'id': _0x3474c7 + "antidelete off"
              }]
            }]
          })
        }];
        const _0x575e96 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "[POWERED BY TALKDROVE]\n\n  *ANTI DELETE SETTINGS*"
        };
        const _0x4607aa = {
          quoted: _0x388bff
        };
        return await _0x334c7c.sendButtonMessage(_0x50c61b, _0x4562f3, _0x4318e4, _0x575e96, _0x4607aa);
      } catch (_0x52075c) {
        _0x46fc0a("*Error !!*");
        console.log(_0x52075c);
      }
    });
  }
  const _0x34ba9d = {
    pattern: "setprefix",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: ".setprefix .",
    filename: __filename
  };
  cmd(_0x34ba9d, async (_0x360121, _0x245c12, _0x17c17e, {
    from: _0x334137,
    l: _0x60cf28,
    quoted: _0x5cf782,
    body: _0x30b00e,
    isCmd: _0x5b95fc,
    command: _0x500116,
    args: _0x1df529,
    q: _0x132227,
    isGroup: _0x525a30,
    sender: _0x26bdbd,
    senderNumber: _0x2d018e,
    botNumber2: _0x32e020,
    botNumber: _0x47d155,
    pushname: _0x51af29,
    isMe: _0x59e9be,
    isOwner: _0x153618,
    groupMetadata: _0x37d9d2,
    groupName: _0x3a8094,
    participants: _0x3a7395,
    groupAdmins: _0x4f210a,
    isBotAdmins: _0x12b158,
    isAdmins: _0x151540,
    reply: _0x44192f
  }) => {
    try {
      if (!_0x59e9be) {
        return await _0x44192f(BOTOW);
      }
      if (config.PREFIX == _0x132227) {
        return _0x44192f(alredy);
      }
      await input_set("PREFIX", _0x132227);
      await _0x44192f("*prefix updated: " + _0x132227 + '*');
    } catch (_0x25c73e) {
      _0x44192f("*Error !!*");
      _0x60cf28(_0x25c73e);
    }
  });
  const _0x5867df = {};
  function _0x48af() {
    const _0x1d3599 = ['mM8kW5jA', 'C10PW44', 'utBdKSkujW', 'zrpdGeLf', 'c3JdM8kBlW', 'W6dXJRcS4OkS8k2WQSkr4BAk4BA2', 'WPdcHcxcItO', 'wNlcTsa8', 'xmo9cX3cNG', 'W4hcLqtcRs0', 'vSkgW5ZdP2m', 'xxBcTZ0n', 'W5XybL1/', 'W6DTW6ZcU1C', 'W4vwW7/cHIe', 'WR3dQmkKxvm', 'v3SoWQat', 'W5BcIHrIWRu', 'W6/dTMddQMe', 'DeG8W6Gt', 'W4JHT7VHTiCT4BA+', 'W5WUW63dQG', 'xmoGra', 'W5npW6ZcPWm', 'nIBcKa', 'W7DbW7xdQ8os', 'y8okDZGK', 'W53cPcxcMr8', 'h2aGd14', 'W5VdSge2W4m', 'cSkVW5XzWQe', 'uqKLnLu', 'WQLnWRxcQJa', 'WPZcIqFdVG', 'W41NfNPV', 'wr9AaLO', 'W45NWRddSK4', 'zmoGaYKd', 'iIXLBmkp', 'BxawW6a7', 'rCo9tW', 'W4BcJ8keWRui', 'wx/dUSkMWPy', 'zKvlWOLk', 'v3rzWQDF', 'pZvxWRyK', 'kd8sWR1Q', 'kXZdR8kboa', 'uSo/W5PjWRu', 'WOW6wCklsa', 'W5fQW6ldNfi', 'rxaEWQOg', 'W6lcUa4', 'WROwA8k/EW', 'u8omWQrt', 'W4ldSvlcU8kR', 'W4JcTJVcJCoi', 'avqYaLS', 'C0WDW6aC', 'WRfaWR0', 'W6tdM1WbW6W', 'WR01F8kjWQ8', 'W6tdRCoeW7nT', 'oZvg', 'WPums8kRWOu', '4Bs/4Bsk4BAdW6NXH4o74Ogi8kcaRa', 'WQlcQJRdKSkm', 'iZddU8kX', 'r3BcTZOp', 'm2unpNe', 'Dubihq', 'vqf3pfi', 'pgSE', 'W5NWNjoN4Ooc8kkGHmoW4BAz4BAk', 'pJLEsSkp', 'bgTzp38', 'WRZcQSkfWQZcQG', 'W7pdT8k0kvy', 'p2iF', 'W67dI8orW7NdRW', 'CuqFWOap', 'BmooWQu3WRa', 'WObHWQFcICo7', 'lwC4Awe', 'nMKbpfG', 'FCoMrhJcOG', 'iIqtWQOJ', 'W7hdQSkr', 'W5pdJCk5i1a', 'W57cLqtcRW', 'kdqwWRO+', 'W4hcH0zKWR0', 'W4hcK2iM', 'W4hGTltGTz4VDW', 'gfadWOCV', 'W5ZdSwqPW7i', 'mhq+WOZcLG', 'xxJdP1Gl', 'yaiLhvO', 'a3qNA3y', 'm2Slp38', 'WOVcSWlcGYW', 'WP0xrmkVuG', 'lfKfmhS', 'oXiVWRCE', 'WPJcUJJcIbO', 'aNKHx00', 'ACo7sddcKq', 'ttDa', 'W7/dO8kC', 'p8oJWOWSfa', 'W4L6WQhdUKW', 'WRjiWRxdVM0', 'E0FdISkwWQ4', 'dCo7W5XdWR0', 'oCoHW5XfW7m', 'Fvv/WOzg', 'z/cyKyJIG4JWNlo9W7xHTQRHTQy', 'ngiPWRJcJq', 'W7D/WQ/cMr4', 'b0ugCxa', 'WQJcUIfRW4m', 'vMvqWQDw', 'W6ZcVSkbWQOT', 'cvuXAMS', 'WR9aWR7cPW', 'W559hebP', 'ia9/bI8', 'dthcJSowya', 'W6JcLG7cISoI', 'hqv4WRPw', 'WOKMxSkuuG', 'tCo5WP4pWPy', 'ge80WPyw', 'WOLaW7RcM28', 'W5RcGbq3W7m', 'WP0fWPJdPCku', 'W7BdVmo/wq', 'WQ7cR13cTL8', 'C2qaW44A', 'EwXXWPfc', 'gCoHW5XfWRe', 'W5tcNfT5WRy', 'u0WRW7Su', 'BeldRmkNWOS', 'jZtdSmk8aq', 'hg8DWOlcUq', 'da5exCkN', 'm0m3x2y', 'fqZcMSkApq', 'cf4/WRCH', 'DmofWQ4/WOq', 'W7rDWOxdIaO', 'W6tdHW8nW7G', 'd8oaWOONrW', 'BSoftY3cIG', 'W6hcNrRcOG4', 's37dVmkGWO8', 'WOqsWPJcQmkJ', 'WOOYz8k/yW', 'W5pcRrvpW6W', 'ca/dMCk2nW', 'FCoiydNcIa', 'W5BcLrNcQYm', 'W5ZdKSoVW4Hm', 'W5BcVCkcWR3cLq', 'fGddK8kwma', 'WO7cIw9OW4S', 'pvjRWPRcTa', 'WP7dPmkgw0m', 'xX9kkMC', 'cMaDWRGy', 'W47cRbpcLa', 'WQNcMbBdUSks', 'sqXvmdi', 'uWvPfua', 'WPJdHCkgA3C', 'W5BcOsZdHZa', 'pgO+WP0O', 'W5ZdJSk0zeu', 'W7PAW6JcMrO', 'ttauh1m', 'W5VdSgqUW7K', 'W4tcMSkAWOP1', 'WOVcLHBdQCkb', 'WPhdHslcNLy', 'WRqoW4NdVmku', 'W7pdNuKJW6K', 'W6nHW6O', 'W4LSWOddQ8ok', 'zYHrdxO', 'qvyPW40r', 'WPDSWPtcVu4', 'W5lHTzRHTOlcIog3IG', 'W77dVemkW5q', 'WRf8WRVcLe8', '4Bw24Bw14BA3W5xWQ6oo4Oc/8jkISq', 'W4hdOCkHl3G', '4BEV4Bwt4BsNW5VWLPcZ4OkQ8yMbTq', 'WQqeW5FdUSkF', 'WQNdKmkpFLy', 'wZddImkhpa', 'WR8QWQ4', 'AMTDsmkO', 'WPRdLCkNAge', 'nCoQW5TFWRi', 'W6hcU0JcH8o6', 'AIv/hK8', 'cIaWWPSq', 'BqXlgge', 'W5ldUSoBahy', 'Fd3cThv3', 'zK44WPSI', 'W7xcOqZdTX4', 'W73cICkCWR3dQG', 'WRHDWR/dVW', 'W4NcLYBcGq', 'W4tdOwyQWQy', 'W7JcUGVcMcG', 'WOLxWOZcHNe', 'W6ZcQXZcQCo9', 'WOxcSCkBWO49', 'WQ9lWQ7cIg8', 'sqvZbLW', 'hZhcLSoFAW', 'W4BdRNCkW70', 'W7TgW5FcQmor', 'tcVcTg5W', 'W45dW4JcGa', 'WOhdH8kGENa', 'oNqzWP0t', 'ErXmggq', 'cmowW6jVWQe', 'lXNcSmoZvW', 'zhJdUrWV', 'xxbsWQbV', 'fg0koNq', 'qL4yWO0L', 'nKG7cLG', 'odTmlZm', 'mweHw3W', 'WOBWLkkY4Oot8j+cUCkm4Bw64BEO', 'W7JdU8oYeq', 'wSoxAHZcRW', 'W4b4x0zT', 'W6TIW6JdRXG', 'ywVdTmkDWQy', 'WQiYWR7dI8k6', 'WOq8tq', 'WRlcRZnQW74', 'uX3cImoiAG', 'w8oJBsqF', 'bI9MbZG', 'CCodWPe2WPW', 'W7BcTNHiWOC', 'WQZdTCkRFhq', 'W7ZcRHdcVSkg', 'lZv/ymkm', '4Bwv4BsM4BwgW47XJ4ci4Ocg8l+GIG', 'vSonWP0oWRO', 'kqDkqmkW', 'rajFmwq', 'u3jmWRXP', 'uNNdLSkUWRe', 'W7RcQdddIgO', 'W4FdINKUW68', 'hI4Rtmkm', 'nwCn', 'eSkmWPNdVhe', 'WRPgWRZcPW', 'WP7cIIxcQmky', 'l8okW6rVWPW', 'WRXAWQ7cSxm', 'CCoHvWvn', 'WOhcJMG8', 'W5tcOci', 'nKyPWPSt', 'gmoyW40Tcq', 'oCoAW7XJWOW', 'xsBdUYfu', '4BAIY67kLUg1H8k3', 'DCoUWPyDWPi', 'WQvgWQtdJCkL', 'eK8O', 'aZNcT1Hd', 'WRHlW7RcSwC', 'W7FcNvvVWR8', 'q2GRWQu9', 'WQ5kWRtcUKm', 'kZr/zSka', 'WOvZr8kEsq', 'WQtdJSkezLS', 'WRJcH1BcSJ0', 'eK/dVmk7WO4', 'tthdU3nY', 'W5rnW4xcHIu', 'q8oUqqai', 'WQqaW4ZdOCkd', 'W4hdKfSlWR4', 'jsDT', 'WPNdJmoiiq', 'W47cISkZWRtcGW', 'W5JcUaZcJ8kP', 'W6BcQcZcVmoP', 'W5BcLKDUWQe', '8ywLG++7PW', 'W7JdJmk5jNO', 'm8ksW5pdPKa', 'W6pdMvCSW4G', 'c8oOWQu7na', 'pCoVWRKloa', '4lshi+c0KEc1SUc1Pa', 'WP3cMmo4', 'W73cG8kLWP3cIG', 'W4VdVCk0lfe', 'W7n2W7ZcPG8', 'W5b4ewbj', 'gJxcKSoJCW', 'WPhcIXFcQG', 'WQiAymkIWRS', 'tJTBbfG', 'E+g0MUg1QCos4Bw7', 'cW9Fqmk9', 'WP7cJtNcRmkj', 'W4rdW4dcMZi', 'fHNdS8kxna', 'W5NdMSk9c2m', 'nxCCWRW3', 'W5/cV2tdJIq', 'kmoqyHFdKa', 'gLq5WR0/', 'WQKMxSkuba', 'W73cNSkeWRFcPW', 'WPizBCkPWQG', 'c0C3WQm6', 'iLKbF3a', 'hSoMW4rjWR0', 'W7xcHCkB', 'W5RcPdDMWR0', 'WQBcOt/dR8kx', 'W6VdTSoVW6n/', 'W4JdUmk8iKy', 'WPldNokSVSoQaa', 'ttpdScf5', 'WQWcF8omWRa', 'W7/dSmouW6jL', 'he5LWOrn', 'W5X/WRddVKe', 'WOKlySkIta', 'WQRdRSk8rMO', 'WR1SW44', '4lA64lsZ4lwA4lAZW5C', 'f8kyW5W', 'W7/dSmouW5rY', 'W5vIc3TQ', 'W7FcMbJcMaC', 'W5tdKCkS', 'WOyGW7ldNCkI', 'W61gW4RcIam', 'W6ZcMSkpWP07', '4BAxYANiOog2RSke', 'WPlcSJFdO8k2', 'BKiRW5aN', 'WO/dQ1FdI8o4q8ovWQxcUJNcG2O', '8kggU++7Tq', 'W63dQSosW6jP', 'WOtcHsnmW5a', 'WOxcVtxdO8kj', 'bKLRWORcPa', 'zSooAsu/', 'W7NdU8o4dvy', 'WPhcGZBdKYu', 'W67cSWdcN8o5', 'jh5Vjci', 'WQ8pymkpWQW', 'WONcLgT+', 'WOJcKt/cGHG', 'W57cKW0', 'uNLeW6vH', 'WOK0t8oBua', 'WRKgFSkjWQi', 'EfD4WRTC', 'WP/cQNxcG1G', 'uajRlxi', 'W6BcKKqTWRS', 'W5j1WQq', 'W5ZdGmk0ity', '4Bw04BwDW5RiO8Qk', 'W5BcLs/cScS', '4BE14Bwb4BAlWOJXI4kz4Oot8k+IRq', 'A8oZWQ0qWRm', 'WONcMr7dVSoe', 'WQNcRZddLmkW', 'WQZdKmkhwLm', 'W4NcOYxdGJ4', 'WQRcGftcS18', 'usBdV8kHbW', 'WRXBWRJcSxu', 'WO/dHmkRyfG', 'W4hdQxCGW7i', 'WP7cKxPjW6y', 'WRmVWRG', 'xmoGqaDC', 'DKSSW7mv', 'WQCOW5ZdSSk4', 'B8o7tse', 'FSoDWPObWRe', 'jLq+WOS', 'W5inW4/dPSkA', 'W5tcRYFdHhS', 'pZiyWQSU', 'F1WAW5iu', 'W4hcKCkfWO44', 'xSoAWPKmWRG', 'W717WOpcJKG', 'W4PpW7JcQdW', 'ECoIWOqyWPu', 'ydPlm1S', 'WPhcHZPNW5a', 'W5GeW7tdMSk+', 'W5j6WQhdVGa', 'W4VdS8oKsfa', 'uKy/WO4L', 'WOxcGw1P', 'W57dK11+W7m', 'ccbbaLm', 'xNeYW40s', 'WOvGbSomW6m', 'sg5vWQa', 'p2OviNe', 'WRBcSSkFWQ3dPq', 'WRCela', 'WP04qmksyq', 'W6BcTSkHWPKo', 'BCkYwd3cNa', 'xmoOWPmyWOe', 'zL5QWP1g', 'W61YW6JdR8oW', 'jK0wzdi', '4ls44lEd4lwp4lwI4lA9', 'WQ3cLWxcP8oO', 'WROOWO7dP8kL', 'WR05WOa', 'WOlcUsFdNSks', 'WQWdB8knWQ8', 'W61bW7ddR8oo', 'W7XHW4ZdI8kl', 'WONdJ8kmDG', '8lIuQo+7VW', 'WRJcI13cSJ0', 'W4dcP8kfWOO2', 'tx7dUSkMWO8', 'oCo7W6r1WRe', 'jJddTSk2ha', 'W7HIW4pdMSke', 'WPVcJWddSSkk', 'W45OW4RdOmoO', 'W5XXWQ7dVGa', 'WQVdHrVdTJC', 'W7NcUhDaWOa', 'WR48q8kyqq', 'wJPrfb0', 'WRqfB8kh', 'fog1TUg0GxNHTkG', 'WPvSWRxcNfa', 'iMqXWOFcIG', '8lIuIo+7VW', 'hhno', 'DsnregW', 'gX8JWPav', 'sf3dM8k+WO8', 'WPZcKGBdT8kb', 'W4jwW4/dO8kNW44eWRxdNa', 'n0u/WOG6', 'W4hdT2i', 'WRldJgtcQ2O', 'wguaWQPO', 'WPCjW5pdO8kh', 'W6hdSNGuW7a', 'W67dGLqwW54', 'W5XTW5tdH8oM', 'FuL0WOPr', 'xx5mWQaU', 'm2a4kuq', 'hue5WOtcIq', 'rJLZg1S', 'oSogWPq1iW', 'pgGlWOS', 'W7pcVwbeWOW', 'm1m/WOhcSW', 'WRzky8kc', 'dJ5xWP0J', 'nwiKWP4K', 'WQ3cJe7cU3G', 'W4xdT2aAW7u', 'W5FcNCkxWOWU', 'W5f0W6RcGrW', 'qgeRkCoc', 'cfeSWQNcPq', 'WRJcTW9mW6O', 'pgfzfge', 'W5hdTeGnW7G', 'WQ7cJsLOWPu', 'fwOyoxO', 'f8kzW4VdTNy', 'W77dVSoJcue', 'W7JdJ8oqW6ve', 'WPzUWP3cN1m', 'WPrgWPJdRSkx', 'xgmYW607', 'WP88wmkqua', 'W5BdHmoOW7Pj', 'zGHKpq', 'oXtcTCo5tG', 'wgSuW4mP', 'WRJdV8kNqxK', 'osuwWOy/', 'uInNf1e', 'ha5csSkN', 'WRBcNaZcGXq', 'WQ5oWRJcSMq', 'W6vPW4lcRtS', 'j2evohK', 'WQyUWQBdRCk/', 'W7pcQM3cMvG', 'shdcTZuc', 'W7FcG8kjWRRcLa', 'W5L2fNO', 'WRVcLqldRCk0', 'BxBdUqWI', '4BA64Bst4BEpWRVWL5oL4Ocw8kYqIq', 'cb3cQmo0qG', 'cSoKWOH4WQO', 'W7bIW47dISoO', 'W5ZcRYldMa', 'woc0LEc0KWZGTzq', 'ELnVWPfl', 'WQKEECkCWRS', 'hCouWPKTfq', 'o8oRWR0oia', 'W4zBW5VcPZq', 'WOFdKSoix1G', 'WPaUW6ldKq', 'E0O/', 'pXFcTCoUqa', 'Cb9ypZK', 'maddJSkACW', 'WRWtlmkTWQ0', 'WRmuW5ldP8ko', '4BAkY5tkR+g1OSk+', 'W67cMW7cUCkG', '4BAk4BEE4BwLW6BWVkkU4Ok68kcYMa', 'WOaVW6pdJmoX', 'i3almNG', 'W7fSW4C', 'FCoMxZFcNG', 'gddcRG', 'WP0NW6a', 'BxddPbKb', 'W7FdSmohW7G', 'ivi5WOFcRW', 'ixewl3m', 'hJGeWRGO', 'W6zCgvjI', 'ueLdWRzh', 'W4ZcLCkxWOG/', 'WPJdHstcGW', 'W5NcLmoypaWYnCoHWPJcQNy', 'W5hdUfuOW7C', 'W4FcQqNcKSkR', 'WR0jEa', 'W7zLW43cOam', 'W5xcMLj0', 'W4FcSZJcGmoQ', 'WR/cIJ/dJsu', 'WOFcHMu', 'WP4+zmkytW', 'sCo7cXxcKq', 'W5FcTdxcRmku', 'WPZcKd4I', 'Ds9cWP4j', 'lYj/', 'kX3cU8o+wG', 'W417W6hcQGu', 'huWDWPm0', 'WR/dJ8oisLS', 'W7/dS8of', 'WPryexHH', 'dthcUCo7sq', 'W6BdN0mrW7S', 'eJJcV8o7W4e', 'vqbG', 'aXC9WQ4D', 'yuxdOCk+WPC', 'EXPRpee', 'W6RcTc3dSYi', 'W4DQW7xdMSop', 'kspdQmkpfq', 'jqrGE8k2', 'W5NcVXJdPSoN', 'W43cTG7cKmkL', 'W5ZdPwiYW6q', 'W5xcVbi', 'WOZdMX3dTq', 'u2GaW78U', 'gmofWQ4TcG', 'fsRVVQpVV63dGq', 'W6/cQwtdPcq', 'W653W5ldH8ok', 'EZNcTLLj', 'Egm5WPZcRG', 'W5FcLYFdPdi', 'ltNcISkABq', 'W77cQcxdGYy', 'DuOmW60t', 'e8kQW4RdTNS', 'W5fXfMW', 'qsldOgH5', 'W5BcIHrIWR0', 'ieq7WRtcKG', 'W5ddTCoTW7Lr', 'p8o4WOiwcG', 'W47dLSkQlxG', 'kc5/kCkl', 'FSoMWPmlWPi', 'sN3dP2rI', 'kNyWF3W', 'WPupWOtdQCkt', 'WOjgWP7dU8or', 'WPlcVqtcVIG', 'dSkCW47dM0y', 'WRJcKe7cUg8', 'W7NdI8kRjxq', 'W5tcJCkzWPS/', 'fmoGW4ThW7m', 'urDJngG', 'BJNcRvG', 'W47cSJddJIq', 'n20FiG', 'whHJWQPJ', 'W7JdM8oXlLi', 'pmokW6rPWOC', 'W5flW5NcMa0', 'wwBdUCkOWPG', 'htFcLmoora', 'W5ZdRwiRW7i', 'WQRcJCkLsW', 'WQNdJu5j', 'ehqAWRqo', 'W7ldM04bW6O', 'WR9gWPBcTNe', 'zXP4kwi', 'WRaHumkbCG', 'td1hev8', 'WPdcJZPKW5a', 'wM/dVmk6', 'W4JcIaJcSCkC', 'pZlcMSkMfG', 'u20VWPKJ', 'EZNdUby', '4lwI4lsD4lAW4lwM4lsE', 'k8oeWOeHca', 'wSozWRGSWQC', 'gSkAW54', 'pCoKWPK', 'W7RcSrRcRCo7', 'W4vtW4ZdM8or', 'xb1ojhe', 'vrHXnKe', 'W4lcHclcGZC', 'Cfaak38', 'nsPziJG', 'W6NdRtyeW78', 'WP4uWPldQCks', 'nCoYWPKinq', 'W5e3k2f6', 'WPxcKeRcUf4', 'W5NcHW/cS8om', 'BwdcTXCn', 'WONcKHVdTSkf', '4lsS4lAb4lAs4lsP4lA+', 'W43cSa7cM8kG', 'W7ZcVX3dKsq', 'W7fTW63cOXi', 'W5hHTB3HT7pcQog3QG', 'WO7dG8khFve', 'fbJdMmkqiq', 'W7GfyG', 'W6NcNcZcV8kd', 'u8o+WRqAWQC', 'n0OOWOhcRa', 'W5KZWQ3dVuy', 'W7JcRrdcQqW', 'v2eyWQyy', 'gCofW40Tcq', 'WQ0MtmkTAW', 'W6BcK0RcJY8', 'WPyRWQtdV8kq', 'WORdJmkAALq', 'WR/cJfBcSNm', 'nu8TWPC', 'WO48rCkpqq', 'WRGbWQhdKSkv', 'uCoTtWLn', 'W47dSNy', 'nNWjWRSt', 'W6ZcSbZcR8oR', 'W5tdGU+9RtBcLq', 'WPRcNHpdUmkq', 'WPGYxSkpqq', 'W5RcTG7cImkn', 'W73dVSo7c1m', 'qsDa', 'W5zPW4JcGGe', 'zcbGo0K', 'xxJdQ8oO', 'qd7dS2z0', 's2VdRmkLWOq', 'W5pcLvS', 'd8oiWOmLcW', 's8okWR0WWQu', 'WO9GWP/cJ3q', 'tIldUfzN', 'W5julfns', 'WRfzWPZcIwS', 'W6NXG6gC4Oca8yUJH8oD4Bwj4BA7', 'cSo+W417WRe', 'WRakW4tdVSkz', 'W4tdVtykW7i', '4Bs6Y6xkO+g1Re0', 'jXjJC8kU', 'W4RdL8oUW4Xu', 'W7ldKeOgWR4', 'W6vLW6NcTG', 'WQegW5ddV8kR', 'W65AnujN', 'W4pcHLT5WRy', 'gdtcImoFza', 'f8kBW43dUNS', 'cwaFn1q', 'W7NcQfVcO3u', 'W5ddH8o4n3m', 'qrLXnL0', 'ESkYcNNdMG', 'sh/dVCkH', 'WQmlWRldGmks', 'WOpdGqm6W6DiWPylW7NdTSoXW6G', 'W4/cRZddJs8', 'W5rWWOBdTgq', '4lEQWQ8crG', 'WQ/cOX5pW4C', 'yar5E8kn', 'WOZcMWnuW40', 'WP1sWRFdR08', 'mJqwWR0V', 'W6JdMSkwcui', 'W6RcTKdcUCkI', 'yaiLhf0', 'ChRdT8kHWQO', 'v8owDsmx', 'gSkqWPNdKNK', 'WRtdM8osW7LO', 'W7vIW5tdJmol', 'jrRcMSkWpq', 'WRJcNaxdICkN', 'x8oHBZBcVq', 'WPJcGmkNyvK', 'W4RcVCkAWPZcKG', 'wx9u', 'aZa5WPGy', 'hHpdNa', 'W7dcGmk4WQio', 'WOqHt8kFxq', 'p2OviNS', 'EKaR', 'gMaeqWrLDCoZrmoIzq', 'W4DJdx1M', 'W63dT8oYaua', 'WRiLWOtdOmkE', 'WPVcLqhdTr4', 'W7pcGaVdPIu', 'qe1Qp1u', 'W6RcObdcLCkI', 'emoQW4LiWRy', 'x8oHtXua', 'W53cMLDO', 'WPyKW7xdIW', 'W7VdVCo6hhK', 'W5/cV2tdRJ0', 'W5NcSaBcHq', 'W5BcLqtcRq', 'WPGyW4NdPmku', 'W5pcOYxdHs8', 'W7TIW4ZdNCob', 'W75+WQJdT20', 'W5NdM8o4jxG', 'fZRdU8k5ia', 'WRqUxSkwWPK', 'W6/dQ8opW79I', 'W4FdK8o/l3m', 'AqfGp2i', 'rWHRpxe', 'W5VdI8k0ixG', 'xxjuWQXI', 'utj2pf8', 'W4dcKxTbWR4', 'WPxcJtW', 'qdfvffG', 'bSkuW43dP3i', 'W7HCW5pdI8oi', 'WOBdIvpdUxBcNva+WPDncmkyW7W', 'W4xdPxGJW5S', 'CCoKWPa', '4BsDYy/lMog2MLy', 'xcRdOCkVWOC', 'wmoCW614WOC', 'wtXjWRyU', 'WRSYwSktAW', 'WQNcJNDKWOu', 'fXZdLSkqpq', 'baD9aHG', 'vCoJqama', 'aqddICkD', 'W67cJSkrWRVcSq', 'W6ZcKrhcQ8k6', 'WQFcIsFcLmoe', 'W6ZcSHRcO8oU', 'WPFdP8kQnNK', 'WR0OW47dRSk+', 'W4pcVxHSWRu', 'WRdcLgRcTx4', 'Bx3dLbCo', 'ASoLWPilW5C', 't8o+AaNcGq', 'W7nuWPhcSq', 'WO3cIZHOW5a', 'W7ZcTs7cJSo3', 'W5XnW7tdP8o7', 'WP0JWPRdSSkD', 'W55NWQVdTe4', 'fYxdU8kHkW', 'kNqcWOyf', 'W5hdMSkWd3m', 'W4JcSaNcPmoJ', 'WONcGK3cHv4', 'W5idW6/dHW', '8lAeU++7Uq', 'ge8zWOlcUW', 'oa3cRSo1wG', 'FNqrDha', 'W4JcQrFdUSka', 'DmoFWP4QWQm', 'qHPmgg8', 'W5NcSuJcG8oH', 'WRTjWOVcM2m', 'agq7WPJcTG', 'WROwA8k4Ca', 'puaT', 'BmoRcW/cLq', 'WR8zzCkiWRK', 'W6tcIJxcS8k5', 'WRKgE8knWRO', 'W4lcVGddQCkl', 'W5FdMSo4W5LS', 'jmkWW7RdNeu', 'WRCZW4xdKmka', 'n3K4WOVcRq', 'ptNdGmkpgW', 'W4ZdV2eL', 'WPakWOxdRCkq', 'WRVcRtBdQmkv', 'W4ZdLCoIW6vp', 'W5GZWRBdRLi', 'urLXmf0', 'omk5W6a', 'W6dcVWBcOSod', 'bGjotCkg', 'vhLbWQfR', 'DmoaWQC1WP0', 'WP0jWPa', 'fdiAWOeE', 'W7BdMumMW78', 'W4dcKG/cRMe', 'W7/dQ8ouW6r0', 'W5JdGCkS', 'WR7cVUc0Q+c0V+c2SW', 'W7ldVva1W7u', 'WRZcSb/cOIK', 'W67cIYxcUSkf', 'WONcLYHR', 'W4VcJ8k0WQy1', 'W7hcISkzWRy', 'irnfaJ0', 'uhnh', 'kmoaWP1IdW', 'W7iVFSkEWQW', 'ex8MAMy', 'BCkYzJ3cGW', 'sCoCFXhcRW', 'x8o/vIyp', 'W43cGZ3dUY0', 'EmoNWPinWPi', 'W5NdM8o4k3a', '4Bwn4Bwb4BsgkFghSztIGlBWNlk2', 'WQNdGCkm', 'WONcJg8TWP8', 'W4JcI8khWQKy', 'iWCdWR8N', 'Emo5WPjy', 'mcPDBSkN', 'baPKbre', 'W7ZcJs7cQCkE', 'W7xcHCkxW7JcSq', 'rSoDDcyi', 'W7aSWQ7dRL0', 'sh1lWOTM', 'WRdcHG/cNJG', 'hCoSW5WmWRi', 'WOdcJ2voW6G', 'W5FcKLaTWQC', 'W5VdRxGGW7S', 'WPqGW6RdM8k0', 'hSo0WP84lW', 'lX54Bmko', 'WPrId3bP', 'W7xcRIxcNXe', 'W4XuW6lcMs4', 'W4RdSwiZW7G', 'yxZdTHWg', 'W7dcTIhcSSkD', 'WPH1WOVcTg0', 'W7JdP8onguK', 'jsXdlJi', 'cmotWPGN', 'WP7cKa3cNCkR', 'WOSaW43dM8kw', 'WQWyECkj', 'uGjQlvy', 'WRZdLCkcDxW', 'wq/cN8owzG', 'W7BdQSouW7T0', 'jeLvF3W', 'o1u/', '4PEO4PEG4Psd4Psn4PAL', 'hmo2WOHdWR0', 'hSo7WRqvhG', 'WONcLxDIW5C', 'l3ueWPWh', 'ft3dMSo7Ba', 'eNu2mLu', 'W5dcPKz3WPS', 'DCoHqG4b', 'FdDHog4', 'WPKMrCkpqq', 'WO3cGwb5WPq', 'WOtcJ2q', 'WRZcGblcOd4', 'WQRdU10qW7e', 'W5r9WQxdQa', 'l8odW5fRWOS', 'WOFdJCk6w0C', 'vCoSvW', 'W4JHTyJHTk7dM+g0VW', 'WOZcLI9SW5S', 'W73cIqVdTq8', 'WOSXW6pcImk+', 'WRdcI1hdT2K', 'W7pdT8k0kve', 'W6VdOmoHdq', 'zCoZrtZcVa', 'htZcUCovAa', 'WOqsW4JdUSkc', 'W7JdG8k8e3G', 'f0SbkCoc', 'WPFcHZ8JW5O', 'W61VmNz+', 'W63cUCkVWOm+', 'bYr4ESkd', 'x8oPrq', 'BMT2WOjH', 'W4BcLWdcPCoN', 'fIJcJ8oWzW', 'stHgfvW', 'W73cNSkeWRFcSq', 'BtZdTwn6', 'W63cVHhdRaK', 'FSodqXxcOa', 'mwGvE3K', 'wCo/vWuc', 'WR7cLrfrW4C', 'zhZcTYSg', 'ESoUW5DdW5C', 'W5VcQWxdNq', 'WRrcWRVcUwq', 'WONcJGhdSCkb', 'hGT8q8kj', 'WP0+wmkLWO0', 'hf1jW6vd', 'xgpdVCkOWOm', 'tZ1scq', 'xwLuWQP8', 'W6/cGSkEWR/cQq', 'WPZdKKxcUsq', 'WQRcKt7dUmki', 'iIrQBCkh', 'WQNcQvXeW6G', 'D8o4WQ8EWQC', 'tqThfve', 'pJTajs8', 'CuW0W78y', 'WR1cW47dMSon', 'W5BdOCkGeu8', 'x8oOta', 'rWrRpL8', 'W6X3WPRdLeK', 'wYfenfu', 'cJhcLmoDAq', 'W4PzW5FcQJG', 'WORdRfhdJmo0t8o6WQxcQINcJfu', 'W5jUW4JdOmoI', 'WPWdu8k4qa', 'WRSpW4hdU8o7', 'WO3cHeRdT3u', 'rdFcTej7', 'W6ZcNchcUa', 'rwXfW7q', 'W4fLexfS', 'WPtcVSkaWQSN', 'W7RdRSoAW4Xv', 'ugadWRSc', 'W5evWPldVmkf', 'gYZdTCk5fG', '8lI1VE+6RW', 'W5tcMLHOWR0', 'W4BdOtyOW7K', 'W5v5c31R', 'FHpdNKHe', 'W5j2e2DT', 'xog2UUg3QwlHTBW', 'wmoOrHxcPW', 'iJTmkci', 's8oDzHxcSq', 'W47cLSkaWQCi', 'qarXnvy', 'stZdOgH6', 'WQLgWRNcTwq', 'W4hdQ3STW4e', 'W4ZcIIRcICoB', 'W5lcRCkNWOyB', 'W5NdVSoCb00', 'W67dKLzcW4K', 'W6ldT3CcW7W', 'W7ddLCk1a3S', 'bGWMvuy', 'zfeQW7my', 'zCo9vsyy', 'q0P4W54F', '4BE24BwM4BE6WQJXG4ox4Og68ygGKW', 'WQpcJhFcK1O', 'W6ZcISkeWQZcOa', 'W5pdTSkGk1K', 'xNneWRW', 'W5VcUaq', 'W75qWRhdS08', 'W4ZdUuhdNCoM', '8jkwRU+4IG', 'WRKkW4tdQSkM', 'W7ldR14GW4C', 'n2qTW64z', 'fcRdICkqpW', 'DSkbW41IrW', 'fKa5WROZ', 'WQJcRLtcPxO', '4BA14BE84BwNW6RWR4on4OgP8kkHJW', 'W4RcSbtcKmkP', 'hJ3dIW', 'tvpdTmkNWOS', 'CCkIBIG', 'W4iwwmkjsW', 'WQRGTiBGTOHc4lse', 'WQuhWOFcQmkz', 'WRO2s8kyua', 'WR4lBSkwya', 'sYvgW49N', 'pcCnbJm', 'W6ZdL8ochxm', 'W53cTcvcWR4', 'W6JcGSkeWRtcOa', 'WQWlEmkzWRa', 'WOWlFmomWQS', '8ycePU+5Ha', 'a1xcM8ouEq', 'W4dcLLvUWQC', 'WORcOMZcGgC', 'W5nyWO/dOLm', 'wKaRW6Kx', 'W5RdRwicW58', 'W6/dMmocgwi', 'WOudWPpcQmoq', 'W7TcW5NdOCoY', 'WORcPrXkW7G', 'WQjEW6RcRHq', 'W4VcRSk8WPVcIG', 'ngCl', 'WO3cIHRcKNm', 'hY1PrCkY', 'W4BcLrlcOWa', 'nWyIWP3dOq', 'ucfvf3u', 'W5/cUWZcMCoJ', 'FaHKWOlcQa', 'DmokBYK5', 'xszAfvK', 'B3ddUX0n', 'WR/dQmkkyv8', 'krlcNmoGva', 'WQFcMXRcTmoG', 'W77dP8oGb04', 'nt9op3y', 'W4/cKtW', 'W53cGd7dSGy', 'W6dcSvbRWQO', 'vMzPWPzy', 'W43dP2i', 'WP4wu8kHqW', 'W4/dSgm7W4e', 'qSoQqG8z', 'mxennge', 'WP/cNYJdL8k3', 'W7hcOhvGWQy', 'W7vzk11x', 'odjkldq', 'oCkIW6vO', 'WOyYCSkyAa', 'yKhdVZyv', 'W4/cKIFcHCoe', 'vSoKWP8Wca', '8lc0UU+5RW', 'WPRdM1pcUSoo', 'u1FdTryz', 'WO7cPZpcLr8', 'WPxcKI1kW7q', 'W57dNmoaiwC', 'W4VdLmoNW6PH', 'W598WQBdOG', 'WRlcIvz5W44', 'xSotyrhcOG', 'rCo6WO09WPO', 'BwdcTZKk', 'W4/dH8k5j2i', 'WO57WPpcNuO', 'W79WW6/dPSoi', 'sdtdMJW', 'iYqwnty', '4BwAYA7lUEg1MZy', 'DKf4WQbw', 'W4FdQNO+W7a', 'W5X+WQC', 'WP8KWQBdH8k/', 't3FdHtyz', 'W4NcVaZcN8kJ', 'W69TW6hcQZS', '4BE+4BEI4Bwwi/cYG5RIG5JWKjo8', 'WO/dJ8kgE3q', 'emoytb4g', 'W6bTW4lcIZa', 'W77dP8oGb0S', 'WORcJ2D0', 'W5TYWQ7dQeu', 'WQtcQu1g', 'WPJcQ1VcSM4', 'gMKmDeS', 'hCoUW4WmWOa', 'W4tcKCkFWOi7', 'W5/cOGFdJIC', 'W4VdOCkDE1O', 'd8kMW6/dVgi', 'W6VcVWtcTCoQ', 'gmoyW40nea', 'W4/cN8kzWRVcRG', 'W6JcSGVcQCoI', 'BSoZrYVcLq', 'oSk6W4hdT2y', 'WOJcVY/cIYy', 'WQ4VDCk2WQq', 'W4X9lhHD', 'Fd3cTer4', 'WOGwWPlcQmkE', 'W4FcIb7cPs8', 'WPZcKWNcVZS', '4Bsp4BAs4BsMEpgdK47IGPxXHOgp', 'W5XeW6u', 'k2uCWQRcLa', 'kfurWQtcMq', 'W4RcJmowWRW/', 'WRJcIdZdNCkI', 'eum8', 'l8o1WQqbla', 'W53cMGW', 'WPRcHg1cW7C', 'wN4oWQyu', 'WQaFsCkCsa', 'WO3cJWBdSSkk', 'WOJdTCkgy1a', 'W7fnlN5K', 'W5hdJCk/', 'W6RdNConW7TY', 'wZFdUMvu', 'BK1wWPvA', 'W4D2hxHT', 'W6tdHW8JW7C', 'W7XUW4u', 'WP3cKIfeW6C', 'W7BdOCk0b1y', 'WO41E8k+rG', 'W6NcUXVcPCo9', 'W5n+WQBdMhG', 'AxL5na', 'CxldOIWe', 'Fd3cTev/', 'see6', 'dsbgxCkq', '8jgxIE+6Gq', '4BAiYABiJ+g3J1C', 'WOCYW6m', 'WPVcMHddT8kb', 'oM0bW4m', 'WRlcOXXcW6C', 'CgSx', 'WQRcPcFcHXC', 'WQKPzSkzCq', 'W4vIegbT', 'z0VdHW', 'WQWdsmkjWQ8', 'WRTgWRBcU28', 'W77dVSoMdvK', 'f8o/W51MWRe', 'WOvQWPVcLMC', 'luLvzgC', 'gmotWO4uiq', 'W69MW4hdJCoq', 'WOlXHOgs4OoA8jIcGSkr4BAe4BEk', 'lIH4Amka', 'W47cRSkXWPVcKq', 'z1JdI8kiWQi', 'WRWot8kdWQ4', 'wguaWOrN', 'bahdJSkApq', 'ASoaxJRcPW', 'zbTNleO', 'FaBdNu9r', 'CSoTWPe', 'hveGgL0', 'W7VdQ8k0j1y', 'BNZcPG', 'W7RdPCoUjfW', 'EfvUWOi', 'pCoHW4LoWR8', 'WRVcRHraW74', 'W7hcOCkMWQyu', 'WPOKW6FdJmk0', 'hmk+W67dOe0', 'W6NcGqlcUCkC', 'nwrnWOyv', 'AM7dGmkBWQC', 'W7pdNNLj', 'WPqBz8k4WQK', 'W6JcGrVcO8oJ', 'WQddV0ewW7C', 'W5ZcH10TWP8', 'mCobW60', 'W6BdKCodlg0', 'rvnzWPbn', 'emonyIHn', 'WRXzWPNcIKm', 'i3CmWOeU', 'gfxdUCkDmG', 'W7VdOwiZW74', 'WRaVWQJdI8k5', 'W6/dP1W7W6C', 'sSo3FXdcLa', 'yabckCkH', 'W6b4x1fM', 'W68JWOhcJ8ko', 'WQNWR4oU4OkL8yUbISo+4BwJ4Bsw', 'WOeqACkRsG', 'W5vcW7tdRmoR', 'W57cPYdcGt4', '8jwwKE+6MW', 'W5hcKCowWQS/', 'W63dKZyuW5i', 'xvxdVCkSWO0', 'l3myWPC', 'gNaRaMe', 'WPWdF8knWQe', 'WOOVt8kJWPe', 'WR9aWQ7dVNe', 'W4NdISkRzgi', 'WPKJu8kVWOS', 'uSokW5PEWRW', 'WR/cSUkVGeH3', 'hog0H+g0PmoL4Bsv', 'WPDHW7ldNCkJ', 'WP7cHcNcNau', 'W7tdO8kmkxW', 'cd3dSMC', 'W7tcOCkaWR/cPW', 'ESogtXBcTG', 'zXZdMfHj', 'iK4zDti', 'W4pcLmkQWQSN', 'W6/dIG8aW7e', 'W6/dTmoUW6Le', 'W6xdN0Ww', 'ECohWQC3WRe', 'aGmGWPqB', 'W6X4W6BdRZu', 'BgxcRSkmWO8', 'W6HaW6ldJwK', 'gIDPms8', 'W78SW4BdM8ok', 'rfJdGZaW', '4BwaYkVkI+g0ICoc', 'WRlcTJJdNSk1', 'bYqRFCkx', 'aaddLCkbnG', 'W7pdV8ojW6u', 'zbVdMKO', 'WQ3cSq7cOa', 'W6hdKKncW6O', 'WQZcPGT3W5m', 'WP7cRf7cVhW', 'W5BcO2tdLt8', 'EmoktXdcTG', 'WRZcTePdW6i', 'W7RdVSo3b1u', 'oMmmrve', 'WPVcPLhcM0C', 'W5pdM0mhW70', 'CctIRk17rG', 'o0LRWOhcPW', 'W51KcW', 'tM1fWPjS', 'WPZcIc4', 'W5FcNbVcP8oD', 'sCoEFbNcQq', 'W7VcGSkwWQe', 'aKibEti', 'W43dM1WrW78', 'W6VdQSopWQTe', 'aZ/cGSoRuq', 'W5zTW7/dRX8', 'WPVcIItcMrm', 'qarRpKa', 'WQT/WO/cHfm', 'W5/cV2tdOcm', '8kogLU+6Tq', 'pCkXW5C', 'W5v5c31K', 'jhWWrvu', 'kYbVkCkX', 'C0TUWObC', 'ng0koNq', 'fmoeWOWMaG', 'W5X/WRxdULK', 'xMZdN8kmWOm', 'nmk6W60', 'W4JcKYhdLcu', 'WR1qW4xdMSoq', 'W7/cMrNcUsa', 'W4JcOKraWPS', 'WO7dG8kC', 'WOVcLaxdMCkl', 'W4dcISktW44', 'i2uBn3m', 'yhFdSa', 'a8kmW6hdHg8', 'F8oKWPma', 'xWfwah0', 'urP/fvC', 'WOyOW4RdGCk/', 'WR03W7BdUSkx', 'fCkuW43dTNa', 'W4RcJui', 'ACoNxZFcGW', 'W6NdJCo4ah8', 'W5VdTmoFj1e', 'mJ0qWR4O', 'zbTmfeW', '4BwyYyZlI+g3RSoH', 'oSkCW5FdUa', 'W43cNCkxWOS/', 't31cWQLR', 'ebldN8ovjW', 'WPq34QYRneK', 'pt4fWQa', 'WQCDzSkIEW', 'vrHXnKC', 'lNmdWPCe', 'EJ4rWR8', 'ndTEkcq', 'W4JdHSoKW6zd', 'WR1ky8kc', 'W7XTW5tdH8og', 'CeW+W6m', 'EKb4W64d', 'imk6W7ddKfi', 'peSklve', 'qKbSWOWV', 'W7VdU8oNcvO', 'gCoIW40', 'aLmPWOlcQa', 'WOC1ta', 'W7XLW5JdICoH', 'WPJcKxBcJN8', 'AgBdO8kXWOK', 'WQ3cJtRdUSkU', '8ywuO++4Ja', 'wdvabfG', 'uSonWRiiWO0', 'BCo+WOqr', 'WONcN1ldTmkc', 'W5FcKLaTWOa', 'nw43Ffu', 'W4NcNsFcR8ol', 'WPtcGZvNW7K', 'W6azW4JcUWa', 'W4NdJCo4eg8', 'x1VdOmkfWPG', 'qtPqug4', 'rdeumvq', 'wJfve0K', 'WOmdWPBdQ8kf', 'sCk/zHW', 'WPtdHqBcJai', 'hmoQW5TpWQe', 'W7tcS8kKWRxcNa', 'AhtdSG', 'W7hdL8oEcLS', 'm2qmWPyf', 'cIZcImotAW', 'pZtdVCkWCW', 'WQ3cMuz7W6e', 'WQ3cLrpdUCki', '77Yc772977Yg772rhq', 'W4VdQSoUd3O', 'W7hdLu4vW7S', 'WPdcKI9QW5O', 'uNLsW6vC', 'zuOIWOSf', 'WR0YW6ZdHSk5', 'WPxcGcRcIrm', 'WQX/W6RcUWm', 'WQtdP8kSEuW', 'WQ1AWQNcTG', 'AsfahX0', 'WRFcHHJcQHa', 'WQS/WPBdVSkx', 'bgTzh38', 'W4dcNvfPW7m', 'WRXnWRBcUYe', 'igunl3m', 'W6DeWPtdTMm', 'h8kBW5lcS3G', 'W4LIW5dcJSom', 'W6P4WQddT1m', 'E3uyWOao', 'W5pcQJdcHci', 'WP8lDCk+WOG', 'WOidWPNdRmkZ', 'rZLr', '8yogHE+7Ua', 'WReuwmkpDa', 'W7BdLmoJkuK', 'W5JdGCk+yHG', 'W4y3xJuI', 'W6VcTCoNsfC', 'W7ddJ2GJW68', 'W7pdL0efW7i', 'WO/dHCkBBeC', 'W4lcPxf/W4O', 'meKBDfa', 'WORdLCkCyeC', 'W57cLHrmWQy', '8yo2GU+6Iq', 'WRVcGtJcLX4', 'W6RdT8ouW6DI', 'W4hcLLPPWPe', 'm0qNWOVdOq', 'W4JcScFdLd8', 'WOeGzmkjrG', 'W5RcVspcK8kH', 'W4L5W5ZcMd8', 'WOC4sCkTWOa', 'W7H3W5tdH8ok', 'rdfehqW', 'WP3cLhDIW4S', 'BgVdSLK', 'W6tcRrW', 'WRefpq', 'W4hdShSRW4e', 'WPaBW57dQ8k5', 'W7tcSYxcNGq', 'FCoCxW/cLa', 'W4BcMLDMWRy', 'W5v7dxfP', 'EKS3f08', 'mWNcSSoZBq', 'WQNdQCkN', 'laDXwSkU', 'vSk0W4ZdP3G', 'W5/dJCk8pq', 'W6FdQNO+WRC', '8kk0TU+6TG', 'ArnX', 'WQhcUfTyW4q', 'FLuSW7mz', 'EcHAcx4', '8kM2KU+5Ua', 'W6BcNbriWR0', 'ht3cICoz', 'W5fyW4BcJdW', 'ztFdP3j3', 'AfRdRCk+WQS', 'oK8UkeW', 'W7VcNbZcICo/', 'nKKLWPRcGa', 'W7HEmveO', 'W7/dVKNdP8kL', 'WQDQWPZcJKW', 'sCoWCqVcMW', 'W7VdGCotW65R', 'WPlcNfjR', 'pZvxWRyS', 'WRVcOX8', 'W7bIW6RcQ1C', 'W4hcKs/cIq', 'W7ZdQZycW7K', 'W6BdTmoZW6Ds', '4Bs14BspWQ7jKmMU', 'W6JcVrW', 'WPryexHX', 'W498WRFdQXe', 'arHxat8', 'W7ldJmk0pty', 'W6dcSY/cMZq', 'nKiiWOhcRa', 'W5zJWQ/cIHK', 'm0SU', 'W7VdT8oNc0O', 'jKLRWQZcQa', 'cJNcMmowya', 'W5ZcLeC', 'W47dV0GoW6K', 'W5VcKqVcRsq', 'fSooW6b7WRS', 'W7tcVdRcR8o8', 'WRGYW6FdRCk6', 'grddM8krnG', 'W5tcMmkiWPtcVa', 'WOVcOhVcK0i', 'W7FcKGVcQc0', 'W6tcRHZcR8oG', 'xmofztlcMa', 'iKC/WPRcPa', 'ccRcGSoOra', 'W7fPW6hcQZu', 'W5VcNvmTWRW', 'bmkqW5/dUM8', 'brRcMSk7pa', 'oMOICL4', 's8kwW5r2v3GnW45NWPHgAqC', 'W4pcQmk3WRSI', 'W4ddK8oD', 'sCozxYZcQq', 'W4TcW6RdP8o2', 'iCk0W5xdUxy', 'eHRdJCk3pa', 'cmodWOi2', 'z1aRW7i', 'Ax5kWP9c', 'BMmBW44g', 'nCo8W5f5WRS', 'vL8uW7GJ', 'W6JdM04gW7S', 'W5JcLIhcSmk/', 'whnoWRfp', 'gYPijJ8', 'gcNcOmoEAW', 'dgi5su0', 'pK0LErm', 'umoNWPinWRG', 'W5hdLCohqG', 'W6DimfPe', 'W6NXGjcc4Ooh8k+aNKtVVyhVV5u', 'WOBdHGu9W6TeWRKlW6NdPSo+W5C', 'W5jBgMX5', 'WPmpWRVdOmkb', 'W5ldKSkTdNq', 'WRNcPNLhW4W', 'dCovW7fLWRK', 'WOBdGCkCz0y', 'W4pcQuX6WQm', 'W7RcKXddRHu', 'WONdOCk4qve', 'WQiS4Q+BW682', 'gmoiWP4Jbq', 'BSoUWPKDWRu', 'jdvIkCkH', 'W6hdK0O', 'W77dP8oGb0O', 'qYXtbu8', 'EYhIRlNdKI8', 'W7BdGSoNk1a', 'z3ZcT0jd', 'W6/cVZtdIcq', 'qmoZqJVcPa', 'WPSSW6FdJ8k0', 'W6/cKCkGWP4r', 'aKe4hW', 'W5tdImosW65x', 'WRtdUuddNmoS', 'WRiMCmkWFq', 'W4FdVSovh3q', 'W47dMmkvl3m', 'WQpcTthdQSks', 'W6ZcSSo9gXG', 'ht3cICozDW', 'WQVcPahcPcq', 'nxqeWPC4', 'W4pcKCkAWOO0', 'pNmiW5m', 'W6HlW7JdISos', 'W7D+W6hcQHm', 'W5/dI8o0W4ry', 'W6tcSWNcOCoQ', 'W6hcSq8', 'W4NdQMiUW7S', 'uGrPpf0', 'zJDzkgK', 'wSo3sJW', 'aXZdVCkrbG', 'W4BcNbrAWRy', 'pbddICkgmG', 'W4VdOCkgE1W', 'ArHJmwq', 'gca4WRaj', 'fLuSlvm', 'pJTjAZK', 'W77XGzkE4OoI8kMYPNRHT6VHTiS', 'xKioW4as', 'WPO+qSk5WPe', 'eGdcQCoxDq', 'iSkAWPNdL34', 'n8okWQiTWRG', 'rCoMWPyaWRK', 'stHdeuq', 'WPPKgMbK', 'W456WQZdVeW', 'WPxcHYTUWPu', 'WOO8xSoBsa', 'iCk8W5tdPxy', 'hConWP8NbG', 'wmoawIuA', 'DuO8W6m', 'stBdKfT+', 'WOpdHCkjA1a', 'k2azWOyf', 'W47dSSo6W4nM', 'Bbf4nwK', 'zMueWQqq', 'EXVdV3bJ', 'W5ZdJmkSlxO', 'W6NdKercW7e', 'WOW8rmkpzq', 'deizAti', 'wZfAfh8', 'wcFdP2K', 'W5XXWQ7dVG8', 'WRmpW5ldOCko', 'xvtdMZWb', 'u8oSWR8VWQm', 'i1JdGIWS', 'uq5X', 'WRLwW7RcN2G', 'ndDEkJq', 'itLSFmkq', 'W7TulLLk', 'gIWGWRy', 'WRqfAW', '8lwvH++4Mq', 'W4lcQa/dJau', 'WR/cPMNcKeC', 'WP7cL1xcOM0', 'WPBcJdD6W5G', '4Bs74BsC4BsTW6xWNlcU4Ooy8l2WNq', 'ksufWRaK', 'W6TfoLvl', 'FdpdPcf+', 'WRhcHgpcK2u', 'W7FdSSofWQrH', '4BEW4BEGA8M0Y7K', 'W5pcKbJcRYa', 'W47dJCkpcKq', 'W6/dOmkOmMe', 'jumAzhC', 'qxRdP8kNWOy', 'WOK+tW', 'i2exp1q', 'kGH+bGW', 'W5JcQ2b0WOO', 'W7vmW5NdP8ot', 'WRapBCkiWQy', 'gdhdMSovAW', 'umoNWO49WRa', '4BE64BEL4BwgW43WORcb4Ok+8lkXIa', 'hmoMW5TnWRe', 'W7RdP8kXa2y', 'nrbudWi', 'WQdcSuvPW78', 'jrRcMSkXoG', 'x8o3rZVcNW', 'iX7dSSkAkW', 'WPWqr8kluq', 'W5fidhfK', 'm8oVWQeBoa', 'WOqdW5ZdJCkL', 'WPVdGCkCE1a', 'p8otWPOSiG', '4BEV4BE74Bw/WRVXHPc+4Ooq8kQtPq', '8lgKHE+5IW', 'WQ/cOXfkW6C', 'dSofWOqSaa', 'm8oKWQarhW', 'yrPX', 'qeKGW74h', 'W7lcNG5dWRq', 'kw8iWPza', 'W5v5c31S', 'WOVcPKjeW7C', 'tdvafvK', 'WPVcJcFcIbG', 'W4VHTRVHT6WV4BsU', 'W7FcJWRdQG', 'iKHvF3W', 'W5xdH8k5ihm', 'ftldKmkToW', 'WQ/cTWhcUay', 'fIZdMSooCa', 'WPZcJYL6W6i', 'W5ZdKviVW5S', 'W7FdVCoYk3u', 'WP4KWQBdQCkK', 'W57cIINcKSoA', 'meKVWPC', 'CNaKWOFcOG', 'l8ovWOqHda', 'WR5IWQNcP0u', 'nJDblJG', 'WPxcNvNcH3e', 'nmoMW6jHWPy', 'WRtcKtvSW48', 'W7nxWP3dJ3K', 'jYbLBCkU', 'WQucWOpdOCk+', 'ELRdLr0k', 'WP5HWO3cQfu', 'yH50dLq', 'h8kAWPNdVhK', 'W63cHW7dQbG', 'W4RcISktWO45', 'c04SwfO', 'ft8BWQbQ', 'DeT5WPrD', 'W4r2c2bT', 'WRLwW7RcSw8', 'W6tcHW0', 'aXbCpqu', 'gCo1W4nBWRK', 'W6hcGmoilXu', 'CZ5Fm2u', 'owafuwm', 'axKeWQdcJq', 'W6xdMgmyW6y', '8lc0MU+5RW', 'hHG5WP4', 'ArFdRLnI', 'W43cN8k3WOhcNW', 'eNilaxm', 'CSoMta', 'WQFdT8kKxfS', 'f8kxW5xdTJC', 'W6VdPHFdPb4', 'prLPiIu', 'xxbmW6v6', 't2HsWQXG', 'cdpdUCkHiW', 'ebVdJSkCma', 'sMpdKXa3', 'WOKMxSkuvG', 'w3ldH2rI', 'W6xdP8kzdha', 'Cua4WQyV', 'W7TSW4/dMSob', 'rWHXlvO', 'uczPn30', 'uwtdPCoPW5S', 'DgW7W4Wx', 'wcXhbve', 'DNitW78x', 'hSkqW5JdT3i', 'yrZdKq', 'WO7cOrRdQSka', 'W4JdN8oQW4jv', 'imkEW7xdHxK', 'W7xdIKbcW4G', 'xqiLluy', 'W7tdJ8k3dLK', 'eaddJSkAiq', '8ywuMo+5Vq', 'kSoIW61KWRa', 'WPZcLgPJW4i', 'gmoeWP4Hfq', 'qmoUvXGi', 'xxff', 'W5ZcIqpcRXK', 'W53dLmkHF3K7fa', 'yN/dLmkcWRG', 'W6hdOv8fW7i', 'WPJcSNPzWPO', 'rmoGaZ4i', 'W73cH8kcWR3cPa', 'hX4fWOK4', 'nMadWPyS', 'ssfah0S', 'W7/dLCkpevK', 'W7NdQ8klbvq', 'EqrF', 'W6RdVSoWbH8', 'pZHl', 'W6NcP0JcICoH', 'AXPTfeS', 'FSodEG', 'W6RdLmk8iKC', 'WPSYsmkxqq', 'WRNcJdJcJbq', 'W6NcP0JcP8oH', 'W7RcGSkCWR3cQW', 'EbH1nNa', 'WORcOg7cG1q', 'FSoqAttcTW', 'WOpcMgr4W5C', 'mWGDWQON', '4Bwx4Bwuv8MaY4u', 'AwCpErm', 'W5/cTau', 'WOtdKSkr', '8lgIRUkbIFc3G7hdJmk7WQpcLG', 'W7zUW6dcU1C', 'W7hcSs7cLq4', 'WRW8cSk+sG', 'eCkCW5/dQG', 'W5lcTGC', 'FapdHhfc', 'WOOBW5FdP8ka', 'WRtdN8oPWQTo', 'W5hdMmkcWPOO', 'kgapWP4f', 'jNudWPJcTW', 'W4ddPMyLW7i', 'W7hdQK4DW6i', 'W4nYWRtcMCoIW4hdQxPZc8kpW4dcMCou', 'WQddV0mvW78', 'ow4jWOS', 'gJlcOmoWyq', 'kcasWO4O', 'WRlcJa93W50', 'p2CsE0u', 'Dv4+ub0', 'W5BcIHrAWRy', 'vGjHia', 'jSkzW5ZdSMq', 'gNCyhN0', 'W5hcPLPHWRy', 'WPJdICkgAfK', 'WOpdRSkNw0C', 'WO3dGCkeFfa', 'FwLuWQOU', 'pYXu', 'W43cRrlcLCkI', 'yv3dPmkLWOO', 'W4b+hh9T', 'WPhcRrddOSkW', 'WPhcIgjMW5m', 'W6TAnmkhWPxcMSo5DCk1', 'g8oUW5XjWRq', 'sMtdQ8kTW4e', 'W5BcHuRcPs8', 'W4NcUbNcJ8oS', 'W55vkLf+', 'gSokur4c', 'WONcGY93W5a', 'WPpdGmoaW5LPkqVcONpcHmoIDW', 'eH0fWQ0L', 'pdfk', 'uwOxW44Z', 'WRHZECk+Ca', 'pYmsW7G', 'nxyCEG', 'W6/cSqZcVW', 'WPNcJa7cLXW', 'W5BcOCkQWR3cJG', 'WOhcIfVcRLm', 'W7HHWOhdO3e', 'sKZdNSk6WOq', 'W6ZdT8o6dhO', 'DuTiWQzy', 'WR/dJ8ois1W', 'qIH8a1q', 'WQ5gWRtcUw0', 'W7hcL8owWQSZ', 'kSogWOWoiG', 'uxRdUSkGWO4', 'W5z4g20', 'ecJcJSotAG', 'W6VdRmooW65J', 'W5lcJmk4WO7cKq', 'WR/cILxcO3G', 'W5VdHCoaahS', 'W48ZW6pcUGO', 'mMWmWPuf', 'oMmbWPDa', 'WO5GWOtdUxRdMM4', 'WRpcRM3cPeC', 'WO3dJ8khE1a', 'W5RcVbpcN8k+', 'ngSxl1C', 'W5hcT0a', 'ttauh1S', 'wxGaWQPO', 'WPyKW7tdICkL', 'WOTGWPpcNuq', 'W5VcUmkIWO7cRG', 'WRmOWR/dJ8kb', 'WRZcJgVcPbS', 'b0msogm', 'hbVdT8kTjW', 'W7NcItdcR8oT', 'W57cLKbOW7m', 'iXq6WPiq', 'DxvPWQnp', 'ovuQWORcTa', 'WPCZW6pcIq', 'W5NdGUkSJYpdTa', 'W5ZdL8kSk2e', 'WOhcIay', 'W5NdI8kRjxq', 'aYpdL8k6ja', 'WOeOW6JdJ8k9', '8kMNOU+5OG', 'W5X3W7m', 'WRusWP/dJ8kE', 'dsRcJ8oF', 'WQFcJZNcQJ8', 'vSoGtbGi', 'WPKTW5xdSCkF', 'W7JdI8kFWRy', 'EmoQWPqn', '8jQ3Jo+5GW', 'WPVcPh4', 'W7BdKmoVW591', 'W5BcVahcMmkP', 'W69wWOhdLhi', 'W77dS8k2mvK', 'W6ZcNcpcS8kE', 'v3KaWODH', 'BCoQWOmnWPi', 'WQ/cOaRcRIi', 'W63dT8o1c0W', 'pgacWQmE', '4BsL4BwrfmUPYRi', 'W7tdLSorW5fu', 'W6/cQwtdPsm', 'WPJdJ8kgy1W', 'WPatWOpdP8kd', 'EuBdMCkiWRG', 'W5tcTgtdJcu', 'W5VcNvn+', 'hburWPW8', 'WOq2cSkSqq', 'W5/cTxn1WR4', 'W6VcSqFcSSoQ', 'emoeW40dcq', 'W4tcMSkAWOP6', '8jovJo+4Ra', 'CKKTWOG', 'WOBdGCkgA3K', 'WQyGW7BcImk5', 'WQ0sFCk5Fq', 'WRqiWPBdQSkD', 'WP/cIZDMW5S', 'W7ldU8kaW4PP', 'WO0myCkyWPq', 'eqT5baK', 'CfvUWO4', 'W5RcLLvPWRy', 'WPhcIIW', 'W7pcGNvjWPG', 'WPKKySkbFG', 'EUg1IUg1S8o54Bwr', 'ACo2cYZcHq', 'W43dOmkIlv0', 'jcq6', 'avWdm2a', '8kcvGU+7OG', 'AZLqug8', 'W77dV8oX', 'rCo3wcVcKq', '4BAW4BANW7JlNCQz', 'W5bMW5pdNCof', 'emkCW5xdTNK', 'W7GUsCkGWOy', 'WRGpWRxcUgC', 'W6tcMa7cH8o6', 'nLGbF3W', 'W5dcGCkBWOdcKq', 'W6VcTWtcO8oH', 'gdxcNW', 'WQXQWOJcKey', 'r8o3vcyp', 'W4hdTgiUW7G', 'W77cG016WOy', 'WPtcMc7cQmkf', 'nbVdM8kxpW', 'WOehWOpdVmku', 'W47dQ3KZW7i', 'iL4qmhW', 'W47cTcRdHc4', 'b0KzDwy', 'W6LCW6dcIY8', 'W5RdVmo1cLq', 'WPNcTIZcHIe', 'WRr1WP/cSw8', 'jg0Amhm', 'CCoADYmY', 'stZdOgHY', 't0KzW606', 'EwZdPba', 'WQSEFSkfWQ0', 'bgCbWQFcKW', 'qKJdJ8kRWOG', 'ACoIWPqsWPi', 'W5lcTJddIcu', 'kKiq', 'WPZcIgPJW4i', 'WQddKuKe', 'gqFdRmkHaa', 'E8o9rttcMq', 'W7tcJSkrWRZcOa', 'WOe8cSobba', 'mtjFlJC', 'CNORW78A', 'pH0NWPCm', 'nL8q', 'dxJcNmotAW', 'pJn+Ba', 'WReAEmkfWQW', 'WORcGcFcJHK', 'rdTt', 'ExJdOWWg', 'rmoMvWai', 'n24TWQlcRa', 'W4lcKKb5WRy', 'W7NdNmoxmLy', 'dKOMWPG0', 'WO7cGcxcItq', 'W7/dSSoeW6zE', 'kmobxZhcKW', 'j8kdW5xdN3G', 'W5pcNubKWRC', 'W6RcKcVcVq0', 'W5bYWRBdS1m', 'W6JdHSoiW7jw', 'nMu/WPCb', 'br3dIq', 'ASo9tYe', 'W5a3e8kAhq', 'dmoAW5PNWOy', 'WRH6WQRcLxG', 'W4NdOmk5hfu', 'c1eoWOuQ', 'iLm4WOy', 'd8kbWRSRaG', 'c8oRWQ8reG', 'nZazWR0g', 'BSoUWOmnWP4', 'tmo7wdNcKG', 'W61QW6K', 'kY15Bmkd', 'f8oPW44', 'wYbvjMq', 'W7ZdL8kSkZy', 'W4dcMCkvWPT6', 'WR0gvSkUWQK', 'W43dG8kSmhm', 'Eu9RWO5c', 'xmomWRi', 'W7GdF8omWQW', '4BAhYRtlQog3HSkV', 'xwBdQ8k9WOq', 'W5dcRJ3dGXS', 'W7JdLwaQW54', 'WRJcMgLgW6K', 'F0b9', 'canXph4', 'WO7cJ2X5W4a', 'WPNcGdJcJG', 'WQW6wCkArG', 'W5NdH8kRj2q', 'tY5+jxO', 'WPy4WQBdH8k3', 'Frv3jMS', 'W5JcSaZcMCkI', 'rtpdOgLL', 'W57dLJi9W4FcSM5xW40a', 'pI4Rx8kn', 'W7DQWQJcRg4', 'AWaui3G', 'W6BcPG/cS8o9', 'D8o3qtue', 'WRVcRq8', 'hX7cGmoPsq', 'WOngW43cQa', 'zqXliwu', 'kKOcWPm1', 'ag85WRFcSa', 'tsBdSq', 'qx3dOXqz', 'gKqIWQCu', 'nLunWONcRW', 'WPbkWQNcRwa', 'tJddOwH+', 'i35Rjcq', 'm0jRWPRcTa', 'lrZcKSoDFW', 'aHZdLmkspW', '4Bsr4BsV4BwbW4/WRQcE4OoB8kUaHG', 'z2KuF2z9WQFcTmoCW59ZF8k6', 'F0ODWQKw', 'WPtcNblcJSkJ', 'E0aOW7Dw', 'ugxdJ8kAWQK', 'WRJcPr4', 'WO82cSkuqG', 'WRBcHW7cUJq', 'WRCVW6FdISk9', 'W5T8WQ3dR0u', 'nMGBrgq', 'FNVdQCkIWO8', 'WRrTWRhcL3q', 'W7hcLYZcPCkt', 'iWtdLCkbaq', '4Bsq4BsL4BwvWRRWORgm4Ok58lgsOa', 'i8k7W4ddPwi', 'CNuFWQFcGG', 'emkAW5BdP3i', 'W4ZcKdZcJ8oq', 'WPJcJZ4', 'BhJdTaXd', 'xgCnWR80', 'A1xdGCkhWQ0', 'W63cQCkWWOSa', 'W5ZdHSo4k3G', 'WOldPmkTE3G', 'W7NcImke', 'WQ3cGJZcVZu', 'WPVcGZVcUXq', 'z8ozWQe+WQC', '8yMwQE+4GW', 'WO3cG3C', 'W7ddP8oXW4Pn', 'W6NdJuKoW5O', 'W6JdPCkrkh0', 'fc7cO8o3ta', 'W75HdvTr', 'WPtHTiZHTBS04Bst', 'W5NdNCoBph0', 'W6NdK04fW7S', 'tdb3h1a', 'j/c3GOxIGy/WPQo2gog2Q+g0Ja', 'ywaHW4ar', 'WPVdPUkSKmkbcW', 'WOytW6xdOSkh', 'W7tcLt/cS8ok', 'WQ3dR8kNw3a', 'C1X4W7uq', 'kmkY4Q2/EmkX', 'W5RdHSoaixy', 'FwRdVc0u', 'W7bSW6xdJ8ol', 'W7NdT8ogW7i', 'xmkMWRO9', 'WRpcIW1YW74', 'W5VcQxfIWR0', 'W5RcPcJdHgu', 'W7ZdP0mpW4q', 'W65QW47dICoi', 'jfe9m1O', '8yogPE+7Ua', 'FdPImxe', 'W5hcQXK', 'W65IW4ldGSob', 'E04IWOSl', 'bXRdSSkKfG', 'W5FcReDOWR8', 'aeO7oL8', 'W7pdVCoZ', 'W5BdT8kbm2C', 'tSoDzaZcTq', 'pdaBWQOV', '4Bw/4BAp4BALdpglO73IGOpXHkoQ', 'WPhcUcxdN8kX', 'WP/dLCkAyva', 'W6hcQcpcIqO', 'E0y3W7Ct', 'WQhcLeHEW4C', 'W5FcJIJcOIq', 'W7/cQCk1WQSO', 'W4RcSrpdNmk4', 'W7RcSCk1WRhcJa', 'WPKKwmkLWPW', 'WR96WQJcPeK', 'W5lcNSkZWRVcLq', 'W7HhWPBdKM4', 'oIzChHO', 'faFdN8ou', 'bYxdR8kVaq', 'W7ZdHmo5eh4', 'WRezlmkdWQu', 'WO3cKc5M', 'WRHyWQdcKMu', 'zfZdVt0N', 'mt9jdb4', 'W5HWWRy', 'umoFAa3cMq', '4BEIYPhlSUg2M8oe', 'WR4LumklqG', 'WRLaWRtcQKa', 'rwLJWQ1K', 'sCohFXFcRW', 'W5XwW7tdOCo7', 'W7HVW4xdMSob', 'W63cVHdcS8k+', 'WPmYvmk9WQ4', '4BA3Y4JjMog1Hdy', 'ebNdImkqmG', 'W5RcPta', 'W51Nc31N', 'W7ZdT8kmc0K', 'gaBdJG', 'WR1cW4NcJSoT', 'W5FcLI/cMYq', 'W7X9WRBdSMq', 'W4hGTjJGTlhGTRCv', 'W5/cKLPPWP8', 'tgLtWQ0', 'WOhcR1ZcGgG', 'hhngWQm', 'F2SxW44e', 'WRW8cSkyta', 'WPJcGxD5W4a', 'WO5cWO3cIMS', 'WQWEzCkcWQq', 'W7j5W7ZcPW', 'W6bFhxPI', '4BAO4BE9W5BjTSUv', 'hCouWPKTfa', 'W4JcISkaW7JcRq', 'xhrNfuK', 'kYy/WQmq', 'WQ7cTd3dJ8kH', 'W6LQW5tdGSob', '4Q+zW74PWRpdUW', 'ncmKWRGM', '4BEZYOJlM+g0G8kv', 'l0Lvr30', 'pvjRWOhcRW', '4lAybUc2Ioc0SUc1UW', 'WRZcN8kfWQRcQW', 'W4FcTdlcRJC', 'WOi0W7xdGa', 'W63dTCodbK4', '4BwF4BsJA8M3Yy4', 'W45lW4pcGqi', 'oCo6W5XdW7m', 'WRXnWO7cKvm', 'W6ZcNSkdWRa', 'WOupWOpdPmku', 'W6JcKKnhWPq', 'WRXdWQJcU2a', 'W6VdKeiDW5O', 'wIxdMenL', 'WRJcHfv+W68', 'artdJSkbnG', 'zeOTWOWZ', 'W57dH8oaj2C', 'rZ1xfr0', 'WP7dLmkCyfS', 'WPxcQJ1mW54', 'W77cVI3dJIC', 'pae+WR4a', '4BAz4BAE4BATWQVWNQci4Ocg8lktHG', 'lXFcSCoErG', 'ACo/tG', 'nsXiAG', 'WRpcOs5XW4y', 'iKaCive', 'W7BdV8o1d10', 'yCoIrtNcIq', 'EGnbdMi', 'WP7cGYtcJXa', 'W67dLCoIk38', 'Fmo+WOmwWOu', 'stpdK3rv', 'pIldTmkWaq', 'nSojW6CmW5K', 'W5jHWQBIR7ZdSq', 'WRZcMGlcU8km', 'AHnUASkn', 'ctNcJSooya', 'a+kuMEkwL+kvUokvOW', 'W4BdRee1W4y', 'W7foW7xcMqq', 'za9TW45T', 'W6JcMrBdPaS', 'igymruu', 'W6ZcQXZcQCo7', 'FXFdMejz', 'W7RdUfS2W5i', 'W7dcLwDPWR0', 'WO/cGcRcJGi', 'W47cTrFcQSk2', 'n8oNWOC1kG', 'W5VcGea', 'W7jzW7pdHmo8', 'W53cIqZdIsm', 'qbLSn1q', 'W4NcGmkEWQq/', 'kIqeWRe', 'B8o+WO4uWO0', 'iKSq', '4BA54BEz4BwTW5ZXJjcF4OkZ8y6HGW', 'W5JdKmk9zq', 'bKC7W47cQq', 'pMiz', 'W5HfbvjY', 'W5ZcKbpdQGW', '4BEL4BE+uSIcYAS', 'wtHvnNK', 'CazGawy', 'E0b4W5SA', 'lNeBWOm4', 'nSoLWOGjfG', 'cZ3cM8ozCq', 'kXVdV8kXhW', 'W7/dQSovW7GN', 'oCk4W7ZcS0q', 'A/c8OyVIGAhWPig+oog0Uog1Lq', 'WOJcLZr3W5a', 'W7v5WRhdMfm', 'W7pcTrNcUmkl', 'E3ZdSreB', 'WOpWPBgK4OoH8y+HKmkQ4BsB4BEb', 'WRVcV0XdW6K', 'WR5cWR7cRgq', 'WPqJW6NdRSkF', 'q8owwbpcNq', 'WQizuSkAtG', 'W750W5ldTmo2', 'ng4nWP3cIq', 'WRJcKe7cUgS', 'tSojWR81WQu', 'W6ZdRwuMW7u', 'W7FcTs7cGCoe', 'WOZcJ215W6q', 'pZHtxSkA', 'gbVdNCovjW', 'W4xdJmkCm1W', 'wmo7W51EWR0', 'n8okWRKTWR4', 'W6hcKXJcNGa', 'btBdL8kfjG', 'W63cNSkFWQZcOa', 'FdSunvm', 'W6T/W7S', 'W53cICksWQiG', 'W58gWOxdR1C', 'AwKhyN0', 'z8oHzWu4', 'lrhcTmo9vG', '4BsIYlJiLog0Gty', 'W7LQW5pdJ8og', 'exenndy', 'WPlHT6FHTA7dQUg1MG', 'n8kCWPNdMNO', 'WQVcGfVcTgK', 'WONcJNDKW4C', 'W5hcLSkaWOmc', 'WRVcIL7cRG', 'WONcJNDKW4y', 'm8oNWQGZhq', 'B8kRW5zyW50', 'wHLSExe', 'wx/dUSkMWPi', 'tGfapxK', 'fmoGW48', 'W5hdPMe1W5G', 'l8o1WQWwmG', 'iZddU8k2bW', 'W7BdU8obW69I', 'WOisWOxdOCkF', '4BEq4BsQW7RjH8Qo', 'wwFdQW', 'heqeWRuq', 'W4NcGSkRiwi', 'zYnAfu8', 'W61ug3PW', 'f8kCWPNdVhe', 'EM1cWQnT', 'WRLlWPNcSwW', 'l2GzWP4f', '4BA4YPBlQUg3IMe', 'W5RcJI3cHYC', 'W4pcUCk1WPNcHG', 'qKbSWQOP', 'ug/dR8kTWOq', 'W4NcMYtcG8oB', 'tIFdSvHZ', 'WPtcKedcN8kJ', 'WRtcHYHWW5q', '4BAwYOhjSog3MmoL', 'WPSruSkdtq', 'aw49WR8N', 'B2/dOSkQWO4', 'WRvgWQtdJCkL', 'WPjIWP/dVLi', 'WRJcLY9SWPu', 'DLaSW7uc', 'W7tdL0WjW7S', 'apcFGixIG7/WP5cPp+g0Qog1HG', 'm0CVWQNcIq', 'W7RcTGZcKWu', 'wqVcJSoBCq', 'W7NdS8o4g10', 'W4vCnKvK', 't30uWQCF', 'deeDxLq', 'ww7cVW', 'W5v1e3eO', 'W7iRqSk4WOO', 'W5xdG8oUc3u', 'wCoIqGSi', 'ebFdLSkqCW', 'WQHBWRxdVLu', 'cGqzWPmj', 'W5ZcSX3dKdS', 'bdldQmkIiq', 'W4ncW5VcHIG', 'kYWRzmkh', 'WRHWWQNcU20', 'obldRmkVnW', 'WQ3cJMjVW4K', 'bSk3W4pdULW', 'W5vIc3T6', 'AIH4kCkn', 'vwVdOmkTWQ0', 'dYXbW47dOq', 'c2iLWPFcTG', 'W6/cJSkfWRFcNW', 'puGNWPFcPG', 'fhKrCKu', 'aaXGocW', 'q17dPYSA', 'W5VcTqpcK8kH', 'FtVdJLT/', 'W73dRSo6W4jF', 'ECoYW5CwWPe', 'WPaeWPVdRCoE', 'ncCnjdG', 'uhfxW7LQ', 'W6FdICkmkK4', 'th1uWRfR', 'W7ZdTuiLW7u', 'raXXlvy', 'W4vEW4dcMIC', 'DuFdG8kdWQ4', 'fXRdLCkbnG', 'sCoKW5C8WPK', 'WOtcNLldMSkr', 'eCo8W5W', 'rCo7vWmd', 't8ooWRy9WQG', 'WPNdH8k/yum', 'uhJdMmkDWRi', 'oM8zWPSc', 'WR4XWRNdJCkJ', 'lIvizSkp', 'EcrleG', 'W4/cRa/cImkP', 'nxanmNG', 'WPXHWO7cL14', 'iCkqW5xdShG', 'caXYzCky', 'W57cTchcGa', 'E8oyFc/cVq', 'f8kxW5xdTJG', 'xmkWW4VdOxG', 'W4JdM+kSPSk7WQu', 'WQjEW4RcJdG', 'WQRcVsNcQcy', 'W7TuW7ldISor', 'ECobzd9h', 'p8o9W4DzWQm', 'WPRcHwjUW5e', 'vSk4W5JdP38', 'mxenngu', 'W6pdK2RdNmoS', 'jcZdKmk6fq', 'iN4mANW', 'W6VdU8oGbf0', 'W4xdKe4aW7i', '4BE4YkViHUg2QmoX', 'oIb/FCkh', 'hGvdxSkl', 'W7ddPSk0b14', 'W57cLIdcOGu', 'W65zhxPY', 'WOXZEmkErq', 'pKKS', 'dmoaWPK2aG', 'W5iYW6pdNmkL', '4lAJ4lA24lwO4ls14lEj', 'ne8NWOVcRW', 'e8ohWOS', 'xmkBW4vO', 'W5fJW73cMZy', 'cXuBWQWn', 'v8oDvtyB', 'bHRdImkEjW', 'WPWKWQBdH8k3', 'W5xcQmkrWQVcIW', 'DrHXnHm', 'gdGyW7Kz', 'WOFdJ8kp', 'st7dPMr3', 'WOVdGNOIWP8', 'utJdM8kboW', 'W7L6WOddGCok', 'W5ZcNmkUWPWk', 'EgZdUaWg', 'WO7cHcNcGrm', 'WO7cLb3dR8kb', 'mmk6W7BdH1i', 'h8kfW43dUNG', 'brZdJSkznG', 'W7RdQWNdPq', 'W6VdRCktifu', 'zmo9ta', 'hbFdN8khia', 'W53cLvi', 'ha9SW49N', 'uKtdTSkHWRm', 'WP0Z4Q6wWRTH', 'cmo5W7jyWPu', 'CbPijZm', 'W5JcOGJdRY0', 'WPZcHYFcIfy', 'puHR', 'mdVdRSk8da', 'p8kXW6pdKg8', 'W5/cVCkWWR8x', 'zb5xkKq', 'AX/dKf5z', 'W5XVW5FdJ8oD', 'jg0nn3m', 'W7PbWO3dJNa', 'WQCnWRddVCk+', 'aHFdPNn5', 'gZFcJG', 'mGaKWOaE', 'zbb6W57cOXHzW47dP34', 'W5tdUvGhW7u', 'W7NdJKPt', 'WO7cKtNcHbG', '8jgxQE+6Gq', 'WQpdSmkQFee', 'W5j+e3fM', 'cb/dKsff', 'W6NcP0JcQCoH', 'odVdVCkMEq', 'cNGZu3O', 'DKKQW78x', 'ncXohra', 'kH3cRSoUta', 'W7NcT3/cLLK', 'W4JcTXdcKCkk', 'W5FcHIFcO8o1', 'Ag3dTrCx', 'W4FdJ3aSW4u', 'iMeyogi', 'WP7cOY3cNG4', 'W7RdJCoNdvq', 'W5f8WQu', 'pdBcM8oyAq', 'bmkqW5JdSgm', 'm0uBDW', 'i1ZdPqOm', 'W7ldSCoh', 'W4tcMLf6W6i', 'W5HYWQhdRXe', 'CCoMaYem', 'WRpXGAcA4Okw8yAtRCo94Bw04BwE', 'W6lcI3zvWPS', 'mX8UWP85', 'W5tcLqBcRY8', 'WPxcSSk0sbG', 'wbPlhgK', 'W6NdJvS', 'nCk0W7xdNW', 'CNeUWOlcOG', 'WPCIW7i', 'W4tcLCkt', 'W4hcNYBcGq', 'WQVcI1/cSZ0', 'AH7dM0jD', 'W6HfWPBdQhK', 'W6NcISkuWOSY', 'WRNcJWJcUdW', 'WR3cGxNcUha', 'qLCUW5ad', 'W47cRCkVWPGR', 'pW4eWRWM', 'WPxcJW9cW5C', 'WPOLwa', 'n14aDq', 'xMuQWRyd', 'W7xcJHXNWRC', 'W6RcKrZdPtO', 'W7hdRmolW7GN', 'WP4UW6e', 'wwBdVmkSWOa', 'WR4/q8k5Aq', 'eIddLmkznG', 'W7FcLSkFWOK9', 'W5pdLmkPcKe', 'WPyKW7xdI8kJ', 'WRZdHqddTW', 'W47cJSkrWRVcSq', 'F184WOyO', 'W6VcTmkV', 'svjuWPjQ', 'W4NcNCkcWOP6', 'WOaIrIC/Fa08W5FdQv7dJ8ov', 'et3cM8oEya', 'WPNcJdJcJbq', 'W5PwWPddKui', 'WOuYtCkE', 'W7TQW4ZdI8ok', 'fuy+W5iP', 'WRxdQGKTWOu', 'qgafWQWc', 'W7/dT8kr', 'm0O5WOVcOa', 'FLyS', 'W6tcVsdcGXm', 'kYnNBmoc', 'wZpdTM1Z', 'WPdcUbZdICkk', 'WRJcJfNcV3W', 'wWTJ', 'DmoMWPyEWPi', 'WOy0wq', 'z0qSW64t', 'aZvEhr8', 'WPNcGmkhAvm', 'WOhcJwjQW4a', 'W4ZdL8k3mhm', 'msTzjcu', 'W67cVSkCWPGx', 'fKS2d1m', 'tFcuOktIG6lWRQonW7BHTBhHTR0', 'W4NdPMxcGga', 'B3JdUWSg', 'WR3cQXve', 'aWPShWm', 'W7ddVmo9bNC', 'WPZcQKJcH28', 'WQ3cGYSJW50', 'rCoCzY/cHa', 'WOZcKtPlW54', 'yXfMug4', 'aGeBWQW/', 'qr5G', 'W5/cIc/dJsq', 'W4JcKLLRWRG', 'hmoGW4zyWPi', 'WPJcSg7cMei', 'DmonWPe4WOi', 'W7bPW67cRam', 'W7VdQSouW6jP', 'WRipASkfWRy', 'W5SYWP/dOCkc', 'WQuFWOFdRq', 'W7JdT8omW65P', 'uCoTtWLc', 'W4BdSwa2W5S', 'WQujW5FdJCkF', 'b8k+W5FdOxa', 'W7hdI0awW7S', 'pMaaW5in', 'gXNdSCkCpG', 'W5ZdL8oV', 'aSkCW5RdUhi', 'WO/cMHjNW4q', 'h8ojW5bpWQK', 'h8kyW5JdThi', 'WRRcLYtcMay', 'W7D4W7VcObK', 'iuCPWOlcPa', 'W5/dSmouW6iN', 'W5r+WQpdVeu', 'eSkAW5FdP1y', 'WPtcGt7cVWW', 'W6NdSuqqW7C', 'WR7cOuLeW7C', 'Fg3dOXCn', 'WRS2WQtdQCkK', 'oamcWRSD', 'W498WRFdQWa', 'WRJcVr3dVCk3', 'CLC9WRS', 'W4VcJ0RcHs8', 'W4hdNaxcRcC', 'W5vZx2b9', 'hWlcV8otta', 'W5VdPxqRW7i', 'rGHKoKC', 'ESo3sJVcHa', 'W45cW4RdQCoq', 'W6ZdU8o6d1q', 'xMxdOCk9WOq', 'xmk0W7xdHfy', '4BAs4BAxWRtlSCQ3', 'kmoSWQegbq', '8jIfQo+7Ua', 'oCogW7DVWPS', 'W5ddMCoZWQe', 'WQeuW4pdHSkJ', 'W4hdSh4sW6S', 'WPVcLhfKW4S', 'tJ/dRhbX', 'qtDHp2m', 'WPRcLaFdQW', 'qLldLbqz', 'bCkyW5hdM3S', 'aSkCWPNdL3i', 'W5JdKCoVW59c', 'W5FcQHq', 'fgevpMi', 'r8oNCqhcQa', 'W5hdRLCfW6K', 'WRW0W4xdI8kb', 'C8o5WQqyWPS', 'WRdcOrBdK8kQ', 'pwS8oNK', 'y07dOcW2', 'W5/cNr7cOJi', 'WPVcHcFcNHm', 'gCoTW4rjW7m', '4BsA4BsGEmIdY7K', 'E09kWP9f', 'WPCKqmk1WPW', 'W6ZdPSoMavy', 'W5lcVedcVCk5', 'rwazW55w', 'WQxcHsn5W5a', 'W7pdQ8oNW41M', 'W7z9m3DK', 'w8oeWRGTWRi', 'nbLheZ4', 'rcVcTezK', 'W5SJWOxdUSkE', 'WRWgW5xcGG', 'WOJdQ3aH', 'W67dUCobW6Xf', 'W4fnW4pcGW', 'gJ9IdH0', 'uCo2FbGi', 'WOWflmkPWQ0', 'W5lcNCkAWOW1', 'WQGlEmkyWQy', 'WOLaW7RcMMG', 'lSk5WPyyWPu', 'W4tdL1WdW7W', 'WO4dACkB', 'g8oiWOS7', 'W5/cRZFdGcG', 'W4ldSMaHW5u', 'W6BdL0mhW7a', 'eWSgWQO', 'WQBXHOcJ4OoG8kkZKSkt4BAw4BEZ', 'WR7HTOxHTQtcQ+g0Na', 'W5HHWQFcUG', 'o2uiWR7cRW', 'WOzHW7ldNCkJ', 'BvPAWO9N', 'W4hcVmkCWR8G', 'p0n6', 'lmkyW7RdMw4', 'W5tcNqBcUsq', 'jNyYWQ3cPq', 'W5BdTmoviuG', 'Ae1WWRvA', 'EKq2W746', 'aGxdKu1v', 'wZVdUMz6', 'EmoyyXpcPW', '4lw94lsj4lE64ls/4lsy', 'mNGhWRuN', 'WQVcOu9b', 'W5ZdJSkQixC', 'xxvdWQ1V', 'WPWHx8kE', 'nwqFW5iY', 'wmoBWPBdV34', 'yh5yWQ0V', 'Fmo7xZtcLq', 'stLr', 'WPVcJ3BcThe', 'W5pcKvHOW7m', 'WRRcIf7cPxG', '4lADWQ8crG', '4BEM4BALW4JkLSQ6', '8yMePU+4Tq', 'dKykWRGA', '8lcfOE+7LW', 'WP0OB8kAWQC', 'xwVdQSo4', 'W5dcJmkcWOa0', 'B8kYEd3cHa', 'ltFcSSoGza', 'W5ldU24HW4O', 'E1xcMSovCW', 'WQ89B8k4Bq', 'qMycWQGu', 'WRZcRvZcM3a', 'WRVcQWjWW7a', 'hZ8wWRSM', 'euu0vuO', 'WQZcSfrlW7y', 'kw3dOGOn', 'WPypWPhdSq', 'fmonWOOLbq', 'grJdLmkqpG', 'ACoKW5CQWOm', 'WPPZc8oAdG', 'W7RdP8kaW6rH', 'WRSFWRpdSSki', 'ie0xywe', 'W7VdQ8k0b14', 'WRRcVcpdOSkC', 'W4lcSatcV8kV', 'W6rIhxHH', 'hIH3k1W', 'xmoGWPG2ca', 'htTEodC', 'WRdcRb4', '8j2vSE+4Pa', 'aHfgaLi', 'DaaVWOaQ', 'uCo6vWmz', 'e8kzW5ZdP3i', 'e1y0WQmZ', 'WPtcMdxcQmkd', 'vq9PpbW', 'W5JdSwuV', 'W4xdLSoEg2a', 'hxJcM8ouFa', 'osrLBCkG', 'WOqjW4tdVCk7', 'mNiz', 'dmonWQ4ubq', 'crjkzmkx', 'WQxcKtZcHaq', 'W79qWQ3dQge', 'WPu7W4ZdVCkw', 'W5eWWRJdGCkY', 'WQ9bWR/cUIe', 'AHnUAmkb', 'mZ8qWQO', 'W5bYdhD6', 'bCkbW4VdUNK', 'dtNcJSopDG', 'W5LQW6ldLe4', 'W4JcLJRcJSo1', 'oSodW6DVWPG', 'W6xdQ1KaW68', 'W5j6WQhdVHe', 'Fmo6uWmU', 'ENZdOXqm', '8jwwL++4UW', 'yr1sp2m', 'W5rnW6FdVCko', 'lWLpCmkN', 'W7ldMSo3W55R', 'W6hcOZJcJWa', '4BEL4BwwcSMIYQS', 'WOVcP0RcOwO', 'D0m+WOOM', 'W4ddOxCJW7i', 'W7ldS8o6dhq', 'WOJdL3mZW6m', 'bdendJG', 'DeaOWPy', 'W4b+pxvS', 'W5efWPBdVmku', 'CrPUf30', 'W5j2W4RdQCoJ', 'frddICkwiq', 'pcRcUCocva', 'o8k0W63dM0q', 'W7jLW4y', 'q8oGtqae', 'n8kCWPNdKh8', 'WQddMCkcDxm', 'W73cHSkv', 'W5JdVCkRixO', 'W5pcIr7cPty', 'iXVcOSo4xW', '4BE/4BweWQBiSCME', 'W5v/WQxdVei', 'WQ3cJftcSg4', 'nGmnWP8W', 'W7iRwCk4WOW', 'WR3cIYHIW5C', 'D1nuWR15', 's1JdKW', 'WOZcMHtdN8kD', 'ixyTu3O', 'WOGFqCkPWO0', 'WRZcL1/dTG', 'W7X9WRBdSMi', 'f8kCW5RdU3y', 'CYDvfxq', 'W4JdGcmhWOu', 'qmofDr03', 'hSoGW4DyWRy', 'jfldSmkAjq', 'tJWbW6qK', 'W5FcOudcICk8', 'W6rLW6pcQHK', 'W5pcKH7cOYu', 'bdendZ8', 'pHJdKSk7fq', 'W5FdM0mbW7e', 'W6/dUt4TW7m', 'W4DbW5RcIr8', 'WOZcMsncW4S', 'DtHrfMW', 'WRtcKInoW5i', 'WOVcINzuW4K', 'tNqaW4GA', 'W6H3W5tdGCok', 'rKujWPOZ', 'tKVdMc0Z', 'WP0Fz8k5rW', 'WPJcGdDMWPO', 'W6NdKuiiW4G', 'WRaWW4NdGCks', 'W6ZcSbZcR8oT', 'WQNcKeNcVW', 'mJfjmG', 'f0ifWOBcGa', 'WRdcJerkW58', 'WReDECk3AG', 'W73cHfPOWQe', 'W4RdSCkaW45P', 'gh7dU8k7WO8', 'nhvkWOfa', 'WQFcJM90WOu', 'W4ZcObBdOJO', 'WOxcVSkzWP16', 'lcHNBmkm', '4Bw74BEWWPNiISQy', 'W7jQW4pdI8ke', 'WOVcOhNcMe8', 'uhBdSWWq', 'wuHIWOLz', 'WOtdRmkPyLm', 'vw9u', 'WPZcItNcIbC', 'WOO/rCkytW', 'y2aCFNK', 'FhK9p8orcgPNDvpdJ04', 'W6X2W4/dMSob', 'W6nOWQ/cObe', 'WQVcNbRdRtq', 'pLC3WQiW', 'jJZdKSkXmq', 'WOVcJaddGCk2', 'WP7cIZ16', 'mCoeWP4XbG', 'WRW8cSk/tq', 'WOFdG8khyLa', 'WPZcGI7dJqu', 'W4JcOYRdHqG', 'bGTNW5ja', 'WQ/cGcRcJGi', 'oMGazxm', 'W4BcJH/cRW', 'W7pdM0egW5W', 'W7ldU8ohW7LM', 'jw8Mv0G', 'W7RcHmkFWQZcOa', 'W5tdVq82W7S', 'WORcQ0VcOu4', 'befzcfm', 'WQmdWPtdP8kd', 'bWTObdO', 'kITKbbW', 'W7pdGNSJWPu', 'gLuVWR00', 'WRSJB8k6WQi', 'WR0J4Q+0WO7dPq', 'pCkKW5JdL30', 'WRhcGfVcS3G', 'iXnQumkg', 'W7nMW5lcJSo2', 'sCocWRK+WQq', 'E2GEW5ip', 'C1VdVdCq', 'w3ldM296', 'o0CbdK8', '8lILSE+6MW', 'CKO/WOW1', 'ECoYW5C4WPK', 'pCoOWRiblW', 'n8ooWOulWPG', 'jxSNDgC', 'CKq8WQS', 'W7/cJdtcS8kt', 'aSkhW4ZdTG', 'jdDzjZm', 'WOKXrSkEcW', 'sM/dR8kQWPu', 'CgNdVHye', 'C/cQKzZIGB3WKikndog2G+g0RG', 'uqKLnL0', 'WRFcGf7dT3i', 'W4ZcI8kc', 'bIhdSxvM', 'WPJcLalcRcW', 'W7RdUSoJW6rQ', 'W7f0W4hdL8ox', 'WR7dSCoo', 'tthdOa', 'W4VcGbRcKSkM', 'lmoGWOHPWR0', 'WOrAWRhcUui', 'FXf4m3i', 'stzyfri', 'u8oIrX4i', '4BE04BENE8QAYlO', 'EgqbWPy0', 'hrRdNq', 'WPGwWOpdOCkE', 'W4RcRblcKSkP', 'yIjFhhO', 'wgXAWOjC', 'W7fLW6hcQbS', 'W6NdM8kOiq', 'thTbWQjm', 'c8kVW4DkWRu', 'a8khW5FdTNm', 'iZiGWRCW', 'bKuZeKq', 'WO0/sCkusq', 'wSoirWGi', 'W7GEECkEWQ0', 'pYTDAZ8', 'W4RcHvv+WP0', 'W6ZdMW8JW6S', 'W7pdIeWxW6S', 'W4VdMmoJiLm', 'w2KzWRuf', 'W6NdG8kOzh4', 'WOJdHwmZW7G', 'W4VcSZFdIq', 'w8ohBJBcGG', 'W5pcPYLXW5O', 'W4hdPCkAFvO', 'W6ZcSbZcR8oS', 'W4JdM+kSPSk7WRm', 'E3ZdTHSx', 'WOaKW6FdI8kL', 'Bmo3wdVcGG', 'W6/cHmkEWRtcRa', 'W4hdNaxcPge', 'd29MWQDueCkG', 'bCkqW5FdT1u', 'WRZcQrZcRc8', 'W5BcKCkyWOG2', 'WQ9kWRVcVxu', 'kYXU', 'W4z1kLDs', 'W7FdHwVdJvy', 'W69BWRpdJfy', 'WQJcHH1lW4q', 'BLZdHtib', 'W5f0egzS', 'nKS4f2u', 'ncCnjda', 'W7ddI1Wk', '4BEHY4RjQog0JXu', 'W7/dVmomW64N', 'WOWZxmkLWO0', 'W7ZcSSkDWOOo', 'isFdV8kZgG', 'mbDgB8k6', 'oSoVWRWBfq', 'x0/dNmkdWOm', 'W53cVSkKWPFcMG', 'kg4dWP4j', 'W5eLWP/dQCkf', '8k+NR++5UG', 'pwuxp1O', 'W4ZcIZZcICoq', 'cmoeWOL4rW', 'ogeyp3m', 'WOeau8kRxa', 'FKSZWROL', 'iumLWORcGW', 'W7zwW7pdU8oG', 'FNK0WRSb', 'ySo/CZyP', 'W516hNnT', 'W6ZdS8kXbxq', 'WOxcNbRdVCkE', 'BCo+tIZcLq', 'v1O4WObN', 'W5tcQW7cVZS', 'W73cVXZcSSoQ', 'yKy4WOmI', 'W7ZdPwzNW78', 'o8o+W4PaWP0', 'B0pdPSknWOm', 'lmkLW5hdMK0', 'l8oGW5PhW7m', 'jI5S', 'du4IWRmS', 'W5ZcTGtcHq', 'W5ZcJGFcTCoN', 'qcFdOgv5', 'W53cP8kNWPNcNa', 'W7RcQdddIcK', 'oHLMhbq', 'W7NdHEkTRSo3xa', 'W4RcNSkq', 'BmoRcXNcMq', 'dmoMW5XaWRy', 'WQNcP0dcVLy', 'WP7cMGhcKmkG', 'WPmxW5ZdPSkY', 'W73cNSkeWRFcTG', 'W6nGW73cQHy', 'm08IWOpcOa', 'iCoDW55dWQS', 'WOFcLdi', 'WQ1oWQ7cQMq', 'cgJcTa', 'WPS2rmkFzG', 'WORdGSkeAHu', 'oM0FWPCb', 'W7xdJeehW7O', 'ztfha1W', 'W4hcQuj4WOq', 'W7RcR2tdQcC', 'WPVcHw1PW6C', 'jNmpWOBcJq', '4BEV4BEG4BsolFc2GQlIGlhWMBcG', 'WRRcTG9zW7G', 'lCk5W49pW4C', 'W5FcTWFcJW', 'WQRdTmkQqge', 'ft0wWO89', 'xeC6WOed', 'DqnXmh8', 'WQRcVq1kW7a', 'WRWYwSoBta', 'ssfah08', 'W4VcKqlcNtOZW4S', 'wmomW4bnWQC', 'W6VcHCkvWQRdPq', 'tsBdVLnv', 'WR0yACon', 'WRaZWQpdH8kU', 'p1acWRZcJG', 'ncuEW7Ko', 'WONcJwy', 'WOBcOvfQW6m', 'WQXAWRxcQMq', 'W61IW6pcTHO', 'W5JcNZ7dQqC', 'khfwW7HG', 'W7FcTY/dTsa', 'WQSpySkiWOe', 'W4JcTXdcPbe', 'WPhcJNhcRLi', 'fc5efx8', 'D2ZdRmk6WOC', 'fCkgW4pdI2q', 'esK0hW', 'W57cIHrkWQe', 'FrLSe1i', 'W77dP8oGb1O', 'W6/dVLOZW5i', 'WRHmWQ4', 'f8kaW43dVge', 'uXNcR8oUsG', 'WORcSxVcG0G', '4Bwx4Bse4Bw0E/cASjlIG4hWUzk9', 'WPFcOIJcVWm', 'W4ZcVdlcLCoK', 'WO7dKSoixfa', 'WPJcUHnAW50', 'W6vjW53cHru', 'W5rnW4RcGWu', 'W6xcUWNcOSoQ', 'iK4zDt0', 'WOuYrmkFAa', 'ggWjW5iY', 'W6BcQYtcOcK', 'CcrzEZy', 'W67dV8ouW79I', 'W7NHT77HTl7dT+g0HG', 'WOJcPs1aW7i', 'kcvmu8kn', 'W7/dSSosW65M', 'A1/dI8kNWPm', 'FCoGrt3cLa', 'fsyzWRW4', 'wx9pWRDQ', 'W4ZcVahcN8k4', '4Pwq4PwE4PsT4Pwl4Pww', 'tHHrceW', 'uwFdR8kUWOq', 'WOdcL2ZcSfu', 'WR4symkYDG', 'WR7cVUkVTmkRrG', 'aaycWRmo', 'sIRcR8oOW4S', 'WQ5JWRZcLhu', 'W4NdPNOIWRG', 'hComWOG', 'dba9WPay', 'WOS+tCk4WPy', 'st/dSq', 'W4nyW4FcNfC', 'uh9pWQHR', 'W6ZdKmoSefe', 'WOjUWPm', 'cbLzzCkR', 'WPCTW6pdNmk0', '4lsM4lEr4lsu4lwH4lsz', 'nSoqWOqwnG', 'W7xdIKbcW4W', 'W63dQNCLW7S', '8kogTU+6Tq', 'W4DIW67cRrS', 'WORdJSkCzLC', 'WQFcT01iW7C', 'xmk0W7FdH14', 'W4NcQthdKwO', 'W7JdVSoNgh4', 'W5NdGmo9kN8', 'W5ZcQrRcSCkT', 'W7FdT8o1df0', 'dbGeWQaj', 'EqH2kLi', 'oYuvWRy+', 'wajI', 'WRpcOMpcLuu', 'W7JdLLmbW54', 'WPZcKsNcGGi', 'W4zLW7ZcRHu', 'W5XkW7/dP8oP', 'W5pdNSoviK0', 'WQSlBSkaWQy', 'W5iaW7pdNmk+', 'WQdcQMvuW6e', 'pw4cWOyf', 'WPjhWQ7cMea', 'ACoWrZ3dKa', 'fguDvha', 'W73cJZRcI8o2', 'WPmSW6m', 'W7/cUWNcPCo7', 'WRdcNrhcJHW', 'ww7cRSk9WPq', 'jg0xpgu', 'WO7cOhBcLfi', 'W6zJW6hcUZy', 'WQ7cR0XzW6a', 'gCo6W5XdWRe', 'WQGpEmkKWPm', 'W6NXGjcc4Ooh8k+aNKtHTzFHT7q', 'W4XMWQ3dR0u', 'bgTzhNG', 'W5ZdJ8k9', 'wqRdO091', 'ACoWrZ3dNW', 'W4RcTKdcRSkP', 'FLddNWeW', '4Bse4BsCWRFlOCUS', '8kU3HE+5Ha', 'W57cMZZcKSog', '4lsN4lEp4lAhW5VGTPu', 'W4VdSSk0hLu', 'jcqwnq', 'lh/cSmovCW', 'BwhdOCkpWPy', 'WRhdPMtcGwO', 'y34qCxe', 'WR8KW7xdM8kW', 'W5b+dhvQ', 'W5hdLCo+kN8', 'W6xdL8osohu', '8lkxTo+5Sa', 'W6tcTSkIWQyf', 'WQLdWQ/cRM0', 'yabExCkT', 'wLZdGYWQ', 'AXhdP2L5', 'WOiAESkbWPK', 'geVdU8k9WO4', 'W6v5W6BcRbq', 'tJpdUhjZ', 'h8kwW5W', 'W6hdKL0hW78', 'dmoAW55EWQm', 'W5bKmKDk', 'W7FcIYhdNmkb', 'WQlcKMPSW6O', 'W7G4ACknWQa', 'rd3dSW', 'WP7cIcpcTaa', 'lJGRzSke', 'W5ldHmk+', 'W65WWOddRgS', 'W7ddN1SwW7S', 'WRvkWRVcUMq', 'E25pWRb+', 'fqFdMCkJfq', 'W73dVCoWeq', 'W6ZdU8obW6HZ', 'W6/dS8oGhf0', 'amk8W5xdMMm', 'kspcTW', 'texdUmktWPy', 'W7dcP3O', 'W7PgWRJdNwu', 'csBdKSk/cW', 'W5ZcPhDNW5q', 'W4NdNCoDk30', 'sCo7cXVcMa', 'uCotWRK8WRG', 'FZ3dPMO2', 'xqbKpLy', 'vwWx', 'BCoXxW', '4lEQbUc3Poc0VUc1Sa', '8yMwIE+4GW', 'WR4dymkjWQ0', 'mu1RW5tdOq', 'pNeqpK4', 'WOpdJ1JdU3lcLvnoWPfrmmkWW6rY', 'EmoNwda', 'CLzSWOaP', 'WR/dGCkyl10', 'W4hcIbJcOY8', 'W4b1egaO', 'WRKgymoD', 'WPZcMxnOWOu', 'W63cGXxdSWq', 'xxFdGtKV', 'B1TfWPvl', 'W5pcLWu', 'CctIRk17vW', 'W7FdS8obW6XI', 'nKaI', 'vmoMua0p', 'WQxcHWhcTr4', 'kuVdSHKa', 'zSoGsG8i', 'j0G2F38', 'W5RcSZddJJW', 'd207vW', 'W7NcH8kvWQZcOa', 'W6JcItdcGrG', 'W4JHT6dHTBBcU+g3VW', 'W47dK3iYW60', 'vgxdQq', 'pMicWOae', 'dJ5xWPWK', 'kY9/ymka', 'W5XQWOddRCom', 'bx4NWO3cUW', 'W6xcLLHUWRW', 'WQlHTjFHTOVdR+g1Ra', 'W5FdMmoxW45W', 'WP4rW63dU8kg', 'ce8GWQON', 'W4tdT2eL', 'W7pcOeJcPxi', 'W4pcHu1cWRS', 'W4VdI8oeixy', 'W67cRGldHX0', 'WPRcJMzPWOu', 'WPJcLY9SW4i', 'WQL+z8k/', 'WR4aWPe', 'guGI', 'WO86tmkc', 'W5BcSrNcRwe', 'W47cUbtcImkP', 'W47cRSkXWPW', 'prGVWOK4', 'aSkDW6ddKva', 'WPZcIxDHW4a', 'Fxb4WO15', 'D0iP', 'WOTUWPdcL1m', 'wN8CWPWZ', 'W4pcTdRcPqC', 'W7JdHgeAW5a', 'W6ZcKCk/WOKB', 'WP4aWPe', 'uCobWPKAWRm', 'i1RdMJXd', 'mvyAWQy1', 'iNlcTce2', 'ogeQkmoi', 'W5NdRmopW753', 'W5vIc3T7', 'oZmBWRXL', 'WRuxW6xdO8k5', 'WQ/cIWBdQCkU', 'W7L6WRhdUKi', 'W4VcN0nKWQq', 'W5ZcSMjMWQK', 'xmohrsmg', 'W6BcUCk6WQm', 'WRBcI1BcRNa', 'neKNWQui', 'CSoGvW', 'mwOnmNq', 'W4hdSNGJW4C', 'WQOoEmk6WQ0', 'iIryEJW', 'WRtcHftcS1e', 'W5/cTrFcNCk1', 'wmoQqGGi', 'gCoJW5PjWRi', 'W6XPW6lcOq4', 'WPNcGmkCEKC', '4lwd4lsQ4lAh4lse4lAS', 'WPRdGciSWO8', 'WPVcHcVdLq', 'W5hdSSobW51W', 'WPVdH8kjAhC', 'cKOBnwW', 'eCoGWOHyWQy', 'Fmo/WPiEWPG', '4lwc4ls2E+c3H+c1Qa', 'FeBdPCkrWQO', 'FsddOKTJ', 'cqhcSmo5DW', 'WPeKs8k/W6K', 'z8o0tq', 'WP7cIWxcNCkV', 'jvxdQCkWbW', 'WPeyW7ZdOmkC', 's1BdGW', 'W5ZdJmk/ity', 'h8kBW57dOa', '8lIhGo+6RW', 'W7HDW7/cGJ8', 'jxannhG', 'WRJdLmkjE0a', 'WPBcLX9qW5m', 'WOqOW6pdN8oG', 'WRbkW7RcSwC', 'W4JcRYRdHIy', 'W6dcQmoszdy', 'W5hdH8o4bwm', 'WRusW6ZdSSkA', 'WP7cTHa', 'eZ9bjW', 'A8oMWRmYWPO', 'W7/cRbtcK8oS', 'h04IWQmW', 'WP0XWQldNSkb', 'krWeWOas', 'WRnSW4VdRa', 'yx0jW7Gt', '4PAa4PA+4PsV4PwI4PAE', 'vq9Ppbm', 'sw4f', 'W6RdPCkZj2m', 'p2uUWP0n', 'r8oUDr04', 'aKvvwx8', 'pIq2pxa', 'ouC3lK8', 'juuzDxW', 'CatdHNTq', 'nLO8WOSM', 'W4fbW4VcKdG', 'wg/dHbeN', 'WRaJWRJdNCkf', 'W6nUW6pcQLG', 'W6X1W5NdOCom', 'W77dO8kuca', 'W7LNW6pdGCoj', 'pwaQW6Gz', 'W4bLcNe', 'A2XIWQra', 'W7pdV8ooW69l', 'nveEWR4R', 'W43dQhuOW7O', 'WO7cTc1gW5S', 'WP0jWPtdO8or', 'W7ZdLemcW4u', 'W4ZcVSoYW45g', 'csHfqmkr', 'W6NcLYBcO8oM', 'EJfvfb0', 'WPJcSaxcRs4', 'W5lcTta', 'W7nefu5d', 'W5dcTSkdWQW9', 'WOxcNGddUmkm', 'W4NdI8k2i2u', 'WRq8WQBdOSkD', 'W5TXgq', 'W4tcVbhcTmoU', 'CGBIRj/dJSka', 'W4hcNmk1WOa3', 'W7LvW4tdVmo9', 'owOEE3C', 'WRtcV0/cShO', 'ntCr', 'seZdGZC8', 'ac1Cbae', 'W6RcO2rLWQO', 'jXDKcaq', 'W7RcISkCWQVcOa', 'W4G8ra', 'aCktW6RdPum', 'WPJcRgxcNLa', 'BeBdPb0p', 'WP1rWO3dJWa', 'ocrQASkw', 'W7fpW67cTHa', 'A37dR8k9WPq', 'WPlcIc4', 'W5/cS8oTW48', 'mSkCW4RdSNu', 'W73cVxHuWOW', 'fComWOWLaG', 'ymo3sJZcLq', 'WP4BW5/dUSkt', 'gCkCW5RdTJC', 'W43cVbtcJmk+', 'WO7cMH7dQmkb', 'iCoAW5j0WPW', 'WR3HTjJHTQtcJUg2VW', 'kX3cU8o+', 'WPJcJc9QW5C', 'cNuQWQS6', 'WPVdG8kJv3i', 'W6ZdUSojW6vG', 'W7BdHSo3W75t', 'W4VdQxi1W7i', 'swHpW6vC', 'rtvAfhe', 'WQZcKGhdUSkg', 'D1O4WOaZ', 'rCobvZSj', 'W7RcQSkZWQ4z', '4PwB4Psb4PwT4PEY4PwG', 'W5pcML1GWRi', 'W73HTltHT57dVUg0MG', 'CMPIWQH6', 'jI5OySot', 'f3i7WRK1', 'WP3cGUkUJgrx', 'WO7dJmkYtv8', 'W4NdISoqbxW', 'hqzGASkx', 'oxqnmNK', 'yLSLWOeG', 'CSoLWPSaWPa', 'WPRcJc3cLa', 'CLeSW7my', 'W5XMWQFdSM0', 'kd4cWQL7', 'W7NcTmkdWR3cQq', 'WOxcQ8kIWQ4o', 'WR/HTONHTPbi4BsJ', 'W6ldGcmTWOu', 'ge3dNmkgWRq', 'WPZcJcJcHrC', 'l8oKWRKwlG', '8yo2OU+6Iq', 'uEg1RUg2VSov4Bwi', 'hSk0W5ldP20', 'pqyjWOlcRG', 'y8ohCI/cGq', 'ltFdMSo/AW', 'vCo8WOaFWRi', 'ptGrWQa', 'W5VcSL5BWQK', 'o20BWQlcQW', 'W5tcVYBcH8oD', 'W5hGTQBGTkxGTlldKq', 'W5hdVKCcW7O', 'cSoRW4zJWOe', 'WO3cHd/cMrm', 'C/cRS7ZIGiZWMRcTzog0NUg1SW', 'wsZcJ8oiAW', 'W73cSZBcImkj', 'wx1e', 'CLTZW68', '4BsV4Bws4BAziFcAS77IGyNWKloi', 'h2OviJy', 'AhVdUX1m', 'W5hcIKfIWPO', 'W63dN0egW5i', 'W7NcVXZcS8o8', 'W5pcHKbIWRe', 'W4RcN8kzW48V', 'c2Xgtq', 'W4nIW7VcPJq', 'WO7dLmkCzLS', '4BwrYAVlREg3SKa', 'eqyFWOVcOa', 'WO3dMSkEBxm', 'WPatWOpdP8kt', 'oZWs', 'WRZdIaBcQq', 'WPRcKclcJHu', 'W5nIjMv5', 'zmoGaWGe', 'AqFdGe5j', 'WRZcUKNcSNe', 'WQW2rSkEua', 'tMVdRr01', 'usBdN8kbjW', 'dt4fWRi5', 'WPlcVr/cVI4', 'hXXIirS', 'W7DUW4xcJrm', 'WONcLWddVSkf', 'muKuC2y', 'W4NdSwiOW7u', 'ixiMWOue', 'n8oxWQWSpq', 'W4VdOSkjAW', 'WO7cJcxcIHO', 'W4JdICozW4jn', 'EKelkxK', 'W55gW4NdPmoV', 'WO7cKH7dVSkk', 'nMa4uNe', 'WRrCWQ4', 'W7XVW5ldI8of', 'yCo8tcVdKa', 'WPtcPbLPW50', 'W5FcKLbaWQa', 'WPJcGdDMWPu', 'W6dcUSkvWPK+', 'pMmk', 'W75+lxHY', 'WOZcHxbUW5C', 'W6dcHYZcQSoa', 'W6FcPhTIWOC', 'W4NdSwiOW6q', 'ACo+rW', 'W5rJWRBdSK8', 'WPCpWPVdRCkF', 'FmoMWPi', 'oNqzWP0x', 'WOGdW4FdISk4', 'WRmiW5NdOCkC', 'WQhcJJzNWRC', 'W7ZcQWFcSSoQ', 'W7ddQ8oxW55e', 'WRXAWQ7cSxC', 'WR0uWQtdQSkW', 'W4NcTXVcP8oT', 'W7jymebn', 'W6BdJe7cGwO', 'WPC9qSkPWPe', 'lcbNESkh', 'pmkgW5JdLNW', 'vCo9rK0', 'E0aeW5iJ', 'W6NcN8keWRFcQW', 'oCoHW5XfWRa', 'nKaQWOK', 'FdSuffq', 'W7BdOCoAgLO', '4Bw2Y4VjREg1GKC', 'tbTKkN0', 'wmoLWPyBWPS', 'fdLgEwC', 'WOtcHsnmW4S', 'W6JdMCooiMW', 'WOddSSk7Buq', 'j0KgC2a', 'nJBdMG', 'W6VdKCkPe3e', 'kwRdSGWx', 'bKLRWQVcRW', 'W6/cSrZdPSoM', 'WRaOWQpdGCkU', 'WPSXW7ldGCk+', 'wmonW4rdWRa', 'p3ej', 'W5HKW7JdICoJ', 'W4hcHKf5WOq', 'gpcuKj3IGj3WM7cCWOhHTQhHTkm', 'WQLDWQ/cUW', 'W6RdPSo7sgS', 'xxbmW6vH', 'WPtcIv/cO1i', 'wJZdSwu2', 'W49PW7ZcVby', 'W6xcPYRcJSoT', 'kdvJy8kG', 'nhmiWPmd', 'WRdcLNtcPx8', 'W7ZdT8oSW6n3', 'aHvHjhi', '4BAZ4BECqmMLYym', 'WOW6wCkArG', 'bgm3fhK', 'sSooWRS6WRG', 'W65JW6G', 'W5tcKWxcVIq', 'W5RdM1ykW5m', 'w0O/WPWM', 'dSkbW4XJtq', 'twBdO8kpWRK', 'WQNcKLldLSkf', 'W6dcLSkxWO02', 'WPJcLY9SW4y', 'BLuXW7qr', 'q1/dTIOk', 'W5X2W5tdGCke', 'WRddHxpcUNW', 'v05ZWQD/', 'g0uScua', 'W4zYhND8', 'eu8nl08', 'cCovWPKTcq', '4BAXYQZlHog2OwO', 'F8oHtXvn', 'W5FcPb7cUtK', 'WQ09s8kzsa', 'gM0AWPmz', 'WO5oWQJcP0O', 'uaLgnL4', 'ndfdpXC', 'W4xcMMbfWRu', 'jKHvF3W', 'WRFcGSo4zdy', 'pJ3dI8kXaG', 'WPVcKbxdQ8kP', 'W6tdS8kafNO', 'WOGKW5tdJ8kE', 'W7NcTXZcQSoQ', 'WQ3cVeNcH1G', 'WONcKq9ZW5q', 'gCocWPK', 'W5RcQYe', 'WRBcN3/cO0q', 'W57cPYFdLwO', 'W7zwoW', 'v3OyWQay', '4BwX4BAKW43lM8UO', 'lIKYWOmV', 'fGeNWQO+', 'WOxdGSow', 'mNezWPSp', 'WRZcKd/cGLy', 'gbhcM8ovta', 'k0KuDhC', 'WOKXrSkEba', 'WRCPWRJdNmk0', 'tdTAbhW', 'pmkbW6VdIMa', 'nGFdLCkaiW', 'W7tcKrhcK8om', 'WOZcKGhdUSkg', 'W6NcKZ7cImo5', 't3BdPvG3', 'w3vgWRW', 'WPJcHc/dJrK', 'CaDxdKC', 'WO3cGdr3WOq', 'W5xdPSogmu8', 'WOFcIWFdKCkg', 'qmo6uaq', 'WQxdLSkEzKi', 'rf4JWPWd', 'WOxcV8kKWQap', 'n8kGW63dNeG', 'eConW5j/WRG', 'W4pdJM82W4u', 'WPxcRdtdHG', 't8opWR43WRa', 'gCkbWRK3fq', 'WQ59WQNcUNu', 'W7XHW4ZdI8ke', 'WRVcKJv3W6u', 'WPFcH2O', 'lSoPWP0Mpq', 'WOeGxG', 'WRVcJJrGW54', 'W61ex1Tg', 'fmoDW5jQWQK', 'WQRcGKRcU14', 'fCorWPKRca', 'mwyvpJK', 'sCoNxZFdKa', 'W4FXHAky4Oov8y6bSSoe4BAX4BEq', 'W5RcOedcK8kI', 'n2rnWR0o', 'WQCPWRZdRmkY', 'rqbqauq', 'W5lcGmk9WQRcKW', 'W4NdK8oEiwO', 'W53cPCkKWPhcMG', 'WR7dNConW68N', 'WQu2WQldJCkJ', 'uCoMsGem', 'WOC1W7ldH8k/', 'WPlcLY7cJbu', 'sgVdUSk9WOq', 'vgvIWO1S', '8kM2SU+5Ua', 'jI3dLSkwkq', 'W6tdUmkBmhm'];
    _0x48af = function () {
      return _0x1d3599;
    };
    return _0x48af();
  }
  function _0xb10fbf(_0x943534, _0x14849a, _0x259b27, _0x3686b1, _0x51b822) {
    return _0x3230(_0x259b27 - 0x2a5, _0x14849a);
  }
  _0x5867df.pattern = "setlogo";
  _0x5867df.react = "🗣️";
  _0x5867df.desc = "To change bot logo";
  _0x5867df.category = "main";
  _0x5867df.use = ".setlogo logo url .";
  _0x5867df.filename = __filename;
  cmd(_0x5867df, async (_0x563596, _0x31b3fa, _0x1b59d0, {
    from: _0x441c73,
    l: _0x5d8e97,
    quoted: _0x180c5d,
    body: _0x33faa7,
    isCmd: _0xe42cbe,
    command: _0x23a97a,
    args: _0x3f6bbf,
    q: _0x15aa67,
    isGroup: _0x5ad69,
    sender: _0x25dd92,
    senderNumber: _0xaa1284,
    botNumber2: _0x385daa,
    botNumber: _0x3447f8,
    pushname: _0x2bcd6e,
    isMe: _0x3ece7b,
    isOwner: _0x51221d,
    groupMetadata: _0xafc37b,
    groupName: _0x1d93e5,
    participants: _0x509b50,
    groupAdmins: _0x3ba0f7,
    isBotAdmins: _0x24a167,
    isAdmins: _0x31633b,
    reply: _0x2f4bb3
  }) => {
    try {
      if (!_0x3ece7b) {
        return await _0x2f4bb3(BOTOW);
      }
      if (config.LOGO == _0x15aa67) {
        return _0x2f4bb3(alredy);
      }
      await input_set("LOGO", _0x15aa67);
      await _0x2f4bb3("*Logo updated: " + _0x15aa67 + '*');
    } catch (_0x1700b5) {
      _0x2f4bb3("*Error !!*");
      _0x5d8e97(_0x1700b5);
    }
  });
  const _0x5eaa0f = {
    pattern: "welcome",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x5eaa0f, async (_0x506743, _0x4257eb, _0x2416b5, {
    from: _0x222439,
    prefix: _0x3672f3,
    l: _0x258afa,
    quoted: _0x25c696,
    body: _0x25e263,
    isCmd: _0x20c16c,
    command: _0x15273a,
    args: _0x28013e,
    q: _0x172d61,
    isGroup: _0x1997e7,
    sender: _0x9e66cf,
    senderNumber: _0x594734,
    botNumber2: _0x1572df,
    botNumber: _0x342cdc,
    pushname: _0x3251d6,
    isMe: _0x4db92b,
    isOwner: _0x405e0,
    groupMetadata: _0x1ffd1d,
    groupName: _0x528f01,
    participants: _0x4d268c,
    groupAdmins: _0x4c3eec,
    isBotAdmins: _0x348ff0,
    isAdmins: _0x415187,
    reply: _0x551366,
    config: _0x519dd3
  }) => {
    try {
      if (!_0x4db92b) {
        return await _0x551366(BOTOW);
      }
      if (_0x172d61 == 'on') {
        if (_0x519dd3.WELCOME == "true") {
          return _0x551366("already Welcome is on ");
        }
        await input_set("WELCOME", "true");
        return _0x551366("Welcome turned on");
      }
      if (_0x172d61 == "off") {
        if (_0x519dd3.WELCOME !== "true") {
          return _0x551366("already Welcome is off");
        }
        await input_set("WELCOME", "false");
        return _0x551366("Welcome turned off");
      }
    } catch (_0x145d94) {
      _0x551366("*Error !!*");
      _0x258afa(_0x145d94);
    }
  });
  const _0x5b96c7 = {
    pattern: "onlygroup",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x5b96c7, async (_0x423fc4, _0x3d141a, _0x59e03f, {
    from: _0x3d7c6d,
    prefix: _0x4fb8d5,
    l: _0x30bf89,
    quoted: _0x2bff88,
    body: _0x1ec3ee,
    isCmd: _0x3541f9,
    command: _0x4240ab,
    args: _0x17aedd,
    q: _0x49d18e,
    isGroup: _0x248933,
    sender: _0x437bce,
    senderNumber: _0x40e331,
    botNumber2: _0x34da10,
    botNumber: _0x512681,
    pushname: _0x20b4b6,
    isMe: _0x3db15e,
    isOwner: _0x3a6014,
    groupMetadata: _0x2891a1,
    groupName: _0x14bc92,
    participants: _0x2e4456,
    groupAdmins: _0x4e2eff,
    isBotAdmins: _0x124253,
    isAdmins: _0x37eb76,
    reply: _0x25759f,
    config: _0x1bd2b1
  }) => {
    try {
      if (!_0x3db15e) {
        return await _0x25759f(BOTOW);
      }
      if (_0x49d18e == 'on') {
        if (_0x1bd2b1.ONLY_GROUP == "true") {
          return _0x25759f("already Only Group is on ");
        }
        await input_set("ONLY_GROUP", "true");
        return _0x25759f("Only Group turned on");
      }
      if (_0x49d18e == "off") {
        if (_0x1bd2b1.ONLY_GROUP !== "true") {
          return _0x25759f("already Only Group is off");
        }
        await input_set("ONLY_GROUP", "false");
        return _0x25759f("Only Group turned off");
      }
    } catch (_0x37668d) {
      _0x25759f("*Error !!*");
      _0x30bf89(_0x37668d);
    }
  });
  const _0x280159 = {
    pattern: "onlyme",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x280159, async (_0x57a5b7, _0x493746, _0x2c6c6e, {
    from: _0x9e4e5c,
    prefix: _0x1b8a63,
    l: _0x56b627,
    quoted: _0x2741fb,
    body: _0x17a296,
    isCmd: _0x8c1b0d,
    command: _0x1215c1,
    args: _0x47df9f,
    q: _0x238c6f,
    isGroup: _0x49811a,
    sender: _0x487a8c,
    senderNumber: _0x652fda,
    botNumber2: _0x1576eb,
    botNumber: _0x3a02a1,
    pushname: _0x159897,
    isMe: _0x1805ab,
    isOwner: _0x4000d2,
    groupMetadata: _0x37df22,
    groupName: _0x4f7fa1,
    participants: _0x200763,
    groupAdmins: _0x412fbf,
    isBotAdmins: _0xbbb0cd,
    isAdmins: _0x50f871,
    reply: _0x37b80e,
    config: _0x15da5a
  }) => {
    try {
      if (!_0x1805ab) {
        return await _0x37b80e(BOTOW);
      }
      if (_0x238c6f == 'on') {
        if (_0x15da5a.ONLY_ME == "true") {
          return _0x37b80e("already Only Me is on ");
        }
        await input_set("ONLY_ME", "true");
        return _0x37b80e("Only Me turned on");
      }
      if (_0x238c6f == "off") {
        if (_0x15da5a.ONLY_ME !== "true") {
          return _0x37b80e("already Only Me is off");
        }
        await input_set("ONLY_ME", "false");
        return _0x37b80e("Only Me turned off");
      }
    } catch (_0x38f28a) {
      _0x37b80e("*Error !!*");
      _0x56b627(_0x38f28a);
    }
  });
  const _0x2c6e10 = {
    pattern: "oreact",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x2c6e10, async (_0xf9f17c, _0x4b395c, _0x491fc4, {
    from: _0x1cbded,
    prefix: _0xefdc5e,
    l: _0xf90f37,
    quoted: _0x535ee6,
    body: _0x3763f8,
    isCmd: _0x4f578b,
    command: _0x1afc9e,
    args: _0x2e688c,
    q: _0x9c80ac,
    isGroup: _0x1f3a87,
    sender: _0x592cbe,
    senderNumber: _0xfadfd1,
    botNumber2: _0x1ae557,
    botNumber: _0x22f158,
    pushname: _0x35acb6,
    isMe: _0x256c23,
    isOwner: _0xd1da45,
    groupMetadata: _0x5ba222,
    groupName: _0xe1d001,
    participants: _0x4f2b1c,
    groupAdmins: _0x30ea7e,
    isBotAdmins: _0x3ef00d,
    isAdmins: _0x40a7c9,
    reply: _0x3ff0c2,
    config: _0x37e8c4
  }) => {
    try {
      if (!_0x256c23) {
        return await _0x3ff0c2(BOTOW);
      }
      if (_0x9c80ac == 'on') {
        if (_0x37e8c4.OWNER_REACT == "true") {
          return _0x3ff0c2("already Owner React is on ");
        }
        await input_set("OWNER_REACT", "true");
        return _0x3ff0c2("Owner React turned on");
      }
      if (_0x9c80ac == "off") {
        if (_0x37e8c4.OWNER_REACT !== "true") {
          return _0x3ff0c2("already Owner React is off");
        }
        await input_set("OWNER_REACT", "false");
        return _0x3ff0c2("Owner React turned off");
      }
    } catch (_0x3fa87d) {
      _0x3ff0c2("*Error !!*");
      _0xf90f37(_0x3fa87d);
    }
  });
  const _0x2e5666 = {
    pattern: "aichatbot",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x2e5666, async (_0x519468, _0x37556f, _0x17fede, {
    from: _0x42653a,
    prefix: _0x5c47a5,
    l: _0x11c00b,
    quoted: _0x1bc5e4,
    body: _0xe93e6c,
    isCmd: _0x270d84,
    command: _0x301735,
    args: _0xdffa07,
    q: _0x4db893,
    isGroup: _0xbfb4d7,
    sender: _0xbc4b0d,
    senderNumber: _0xf1a214,
    botNumber2: _0xd61a34,
    botNumber: _0x43b6ab,
    pushname: _0x540835,
    isMe: _0x47b900,
    isOwner: _0x43bfae,
    groupMetadata: _0x4b691f,
    groupName: _0x49cac1,
    participants: _0x54d8f5,
    groupAdmins: _0x5eaf83,
    isBotAdmins: _0x4e62eb,
    isAdmins: _0x195e68,
    reply: _0xa02788,
    config: _0x1792cf
  }) => {
    try {
      if (!_0x47b900) {
        return await _0xa02788(BOTOW);
      }
      if (_0x4db893 == 'on') {
        if (_0x1792cf.AI_CHATBOT == "true") {
          return _0xa02788("already Ai Chatbot is on ");
        }
        await input_set("AI_CHATBOT", "true");
        return _0xa02788("Ai Chatbot turned on");
      }
      if (_0x4db893 == "off") {
        if (_0x1792cf.AI_CHATBOT !== "true") {
          return _0xa02788("already Ai Chatbot is off");
        }
        await input_set("AI_CHATBOT", "false");
        return _0xa02788("Ai Chatbot turned off");
      }
    } catch (_0x3a78f8) {
      _0xa02788("*Error !!*");
      _0x11c00b(_0x3a78f8);
    }
  });
  const _0x251ed4 = {
    pattern: "mathsai"
  };
  function _0x39ac18(_0x3e2581, _0x2398e7, _0x17f5ae, _0x4ea76e, _0x594187) {
    return _0x3230(_0x17f5ae - 0x3b9, _0x3e2581);
  }
  _0x251ed4.react = "🗣️";
  _0x251ed4.dontAddCommandList = true;
  _0x251ed4.filename = __filename;
  cmd(_0x251ed4, async (_0x171a88, _0x37642f, _0x2e5fdc, {
    from: _0x7caddf,
    prefix: _0x45e1df,
    l: _0x27118d,
    quoted: _0x8bade8,
    body: _0x475733,
    isCmd: _0x1c51d1,
    command: _0xedc3a7,
    args: _0x5cedb5,
    q: _0x4779bd,
    isGroup: _0x4ac070,
    sender: _0x30c615,
    senderNumber: _0x3753cc,
    botNumber2: _0xbb8949,
    botNumber: _0x1453b9,
    pushname: _0x32652f,
    isMe: _0x41f5fc,
    isOwner: _0x5e5027,
    groupMetadata: _0x50b639,
    groupName: _0x4d4980,
    participants: _0x4be924,
    groupAdmins: _0x40ef9d,
    isBotAdmins: _0x88df1,
    isAdmins: _0x320eb4,
    reply: _0x449b94,
    config: _0x454e69
  }) => {
    try {
      if (!_0x41f5fc) {
        return await _0x449b94(BOTOW);
      }
      if (_0x4779bd == 'on') {
        if (_0x454e69.MATHS_AI == "true") {
          return _0x449b94("already Ai Maths is on ");
        }
        await input_set("MATHS_AI", "true");
        return _0x449b94("Ai Maths turned on");
      }
      if (_0x4779bd == "off") {
        if (_0x454e69.MATHS_AI !== "true") {
          return _0x449b94("already Ai Maths is off");
        }
        await input_set("MATHS_AI", "false");
        return _0x449b94("Ai Maths turned off");
      }
    } catch (_0xbeb78f) {
      _0x449b94("*Error !!*");
      _0x27118d(_0xbeb78f);
    }
  });
  const _0x3104b7 = {
    pattern: "aiimage",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x3104b7, async (_0x21b8c8, _0x478b8c, _0x36e60b, {
    from: _0x54da74,
    prefix: _0x5097c2,
    l: _0x5baf07,
    quoted: _0x436fff,
    body: _0x1898fd,
    isCmd: _0x3d6b7d,
    command: _0x2462da,
    args: _0x2d1e43,
    q: _0x38ded4,
    isGroup: _0x1de086,
    sender: _0x54c143,
    senderNumber: _0x51cb1b,
    botNumber2: _0x35cd24,
    botNumber: _0x43767c,
    pushname: _0x27c739,
    isMe: _0x1e4931,
    isOwner: _0x569317,
    groupMetadata: _0x50ea2a,
    groupName: _0x3edbc2,
    participants: _0x275fb5,
    groupAdmins: _0x393803,
    isBotAdmins: _0xecae70,
    isAdmins: _0x113ac0,
    reply: _0x38e9cf,
    config: _0x4a0a7
  }) => {
    try {
      if (!_0x1e4931) {
        return await _0x38e9cf(BOTOW);
      }
      if (_0x38ded4 == 'on') {
        if (_0x4a0a7.AI_IMAGE == "true") {
          return _0x38e9cf("already Ai Image is on ");
        }
        await input_set("AI_IMAGE", "true");
        return _0x38e9cf("Ai Image turned on");
      }
      if (_0x38ded4 == "off") {
        if (_0x4a0a7.AI_IMAGE !== "true") {
          return _0x38e9cf("already Ai Image is off");
        }
        await input_set("AI_IMAGE", "false");
        return _0x38e9cf("Ai Image turned off");
      }
    } catch (_0x28f22b) {
      _0x38e9cf("*Error !!*");
      _0x5baf07(_0x28f22b);
    }
  });
  const _0x5b1b89 = {
    pattern: "anticall",
    react: "🗣️"
  };
  function _0x50d9f0(_0x4b9190, _0x50c305, _0x54be7b, _0x21a55c, _0x28b17d) {
    return _0x3230(_0x54be7b - 0x189, _0x4b9190);
  }
  _0x5b1b89.dontAddCommandList = true;
  _0x5b1b89.filename = __filename;
  cmd(_0x5b1b89, async (_0x2dcdfa, _0x288089, _0x138744, {
    from: _0x2f9e8d,
    prefix: _0x44a444,
    l: _0x3f7e5f,
    quoted: _0x7efb72,
    body: _0x122bb9,
    isCmd: _0x1699ce,
    command: _0x35c3c1,
    args: _0x208b4f,
    q: _0x112122,
    isGroup: _0x507325,
    sender: _0x3d8270,
    senderNumber: _0x2d59d9,
    botNumber2: _0x32528c,
    botNumber: _0x50e951,
    pushname: _0x53f307,
    isMe: _0x56b3ce,
    isOwner: _0x2c15ad,
    groupMetadata: _0x19652f,
    groupName: _0x4876fb,
    participants: _0x37d7ee,
    groupAdmins: _0x4e6d6e,
    isBotAdmins: _0x18ab76,
    isAdmins: _0x299848,
    reply: _0x30a2ef,
    config: _0x2f512d
  }) => {
    try {
      if (!_0x56b3ce) {
        return await _0x30a2ef(BOTOW);
      }
      if (_0x112122 == 'on') {
        if (_0x2f512d.ANTI_CALL == "true") {
          return _0x30a2ef("already anticall is on ");
        }
        await input_set("ANTI_CALL", "true");
        return _0x30a2ef("Anticall turned on");
      }
      if (_0x112122 == "off") {
        if (_0x2f512d.ANTI_CALL !== "true") {
          return _0x30a2ef("already anticall is off");
        }
        await input_set("ANTI_CALL", "false");
        return _0x30a2ef("Anticall turned off");
      }
    } catch (_0x22d312) {
      _0x30a2ef("*Error !!*");
      _0x3f7e5f(_0x22d312);
    }
  });
  const _0x32de6c = {
    pattern: "antidelete",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x32de6c, async (_0x330cd9, _0x3c347e, _0x30edf7, {
    from: _0x155ec4,
    prefix: _0x4123fd,
    l: _0x3a0d97,
    quoted: _0x3a361a,
    body: _0x435633,
    isCmd: _0x40bb44,
    command: _0x3e9308,
    args: _0x45e602,
    q: _0x281b94,
    isGroup: _0x1a9566,
    sender: _0x2a074b,
    senderNumber: _0x3ee3c0,
    botNumber2: _0x1c2bcc,
    botNumber: _0x190e7a,
    pushname: _0x1a1780,
    isMe: _0x2d359d,
    isOwner: _0x2ee632,
    groupMetadata: _0x215517,
    groupName: _0xd8ee56,
    participants: _0x348bee,
    groupAdmins: _0x5e8238,
    isBotAdmins: _0x5e81a1,
    isAdmins: _0x727f5e,
    reply: _0x444cdf,
    config: _0xc3c22b
  }) => {
    try {
      if (!_0x2d359d) {
        return await _0x444cdf(BOTOW);
      }
      if (_0x281b94 == 'on') {
        if (_0xc3c22b.ANTI_DELETE == "true") {
          return _0x444cdf("already Anti Delete On ");
        }
        await input_set("ANTI_DELETE", "true");
        return _0x444cdf("Anti Delete Turn on");
      }
      if (_0x281b94 == "off") {
        if (_0xc3c22b.ANTI_DELETE !== "true") {
          return _0x444cdf("already Anti Delete Off");
        }
        await input_set("ANTI_DELETE", "false");
        return _0x444cdf("Anti Delete Turn Off");
      }
    } catch (_0x18d1c3) {
      _0x444cdf("*Error !!*");
      _0x3a0d97(_0x18d1c3);
    }
  });
  const _0x5977e5 = {
    pattern: "autovoice",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x5977e5, async (_0x2b97ea, _0x14267a, _0x784e96, {
    from: _0x563da7,
    prefix: _0x4d6762,
    l: _0x4b92b3,
    quoted: _0x317f0d,
    body: _0x215c32,
    isCmd: _0x3a6c77,
    command: _0x5df89e,
    args: _0x3ea6f8,
    q: _0x1dc3e1,
    isGroup: _0x56b28c,
    sender: _0x345c35,
    senderNumber: _0x55c23e,
    botNumber2: _0x157689,
    botNumber: _0x3efc2b,
    pushname: _0x48897b,
    isMe: _0x3d4e95,
    isOwner: _0x1b0956,
    groupMetadata: _0x1104ad,
    groupName: _0x50ca81,
    participants: _0x8d2876,
    groupAdmins: _0x3b104b,
    isBotAdmins: _0x1cc07b,
    isAdmins: _0x3bd793,
    reply: _0x14474b,
    config: _0x163b4a
  }) => {
    try {
      if (!_0x3d4e95) {
        return await _0x14474b(BOTOW);
      }
      if (_0x1dc3e1 == 'on') {
        if (_0x163b4a.AUTO_VOICE == "true") {
          return _0x14474b("already on ");
        }
        await input_set("AUTO_VOICE", "true");
        return _0x14474b("autovoice turned on");
      }
      if (_0x1dc3e1 == "off") {
        if (_0x163b4a.AUTO_VOICE !== "true") {
          return _0x14474b("already off");
        }
        await input_set("AUTO_VOICE", "false");
        return _0x14474b("autovoice turned off");
      }
    } catch (_0x2b26a6) {
      _0x14474b("*Error !!*");
      _0x4b92b3(_0x2b26a6);
    }
  });
  const _0x43e97e = {
    pattern: "autosticker",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x43e97e, async (_0x5892a9, _0x59d1c3, _0x5ebb07, {
    from: _0x45c2ed,
    prefix: _0x908b2,
    l: _0x5974fa,
    quoted: _0x1a9abb,
    body: _0x1c777c,
    isCmd: _0x3c2735,
    command: _0x4230e8,
    args: _0x1b6e6d,
    q: _0x47a68b,
    isGroup: _0x14cc80,
    sender: _0x5c51cc,
    senderNumber: _0x1a3cc0,
    botNumber2: _0x4572a1,
    botNumber: _0x47b18a,
    pushname: _0x1244d0,
    isMe: _0x3850f9,
    isOwner: _0x179761,
    groupMetadata: _0x37e05a,
    groupName: _0x213815,
    participants: _0x424486,
    groupAdmins: _0x5311eb,
    isBotAdmins: _0x858a2c,
    isAdmins: _0x25bb28,
    reply: _0x3c42f3,
    config: _0x25fa29
  }) => {
    try {
      if (!_0x3850f9) {
        return await _0x3c42f3(BOTOW);
      }
      if (_0x47a68b == 'on') {
        if (_0x25fa29.AUTO_STICKER == "true") {
          return _0x3c42f3("already on ");
        }
        await input_set("AUTO_STICKER", "true");
        return _0x3c42f3("autosticker turned on");
      }
      if (_0x47a68b == "off") {
        if (_0x25fa29.AUTO_STICKER !== "true") {
          return _0x3c42f3("already off");
        }
        await input_set("AUTO_STICKER", "false");
        return _0x3c42f3("autosticker turned off");
      }
    } catch (_0x5727f4) {
      _0x3c42f3("*Error !!*");
      _0x5974fa(_0x5727f4);
    }
  });
  const _0x17db9d = {
    pattern: "autobio",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x17db9d, async (_0x1bc633, _0x439e4d, _0x50d862, {
    from: _0x540ae0,
    prefix: _0x1b7336,
    l: _0x2939e3,
    quoted: _0x51842f,
    body: _0x84960b,
    isCmd: _0x506d8e,
    command: _0x100f6c,
    args: _0x587d45,
    q: _0x127e61,
    isGroup: _0x16a091,
    sender: _0x1e9b7a,
    senderNumber: _0x5cd1a6,
    botNumber2: _0x479711,
    botNumber: _0x167452,
    pushname: _0x150269,
    isMe: _0x5782d0,
    isOwner: _0x15cada,
    groupMetadata: _0x4a370b,
    groupName: _0x32d851,
    participants: _0x52c4ed,
    groupAdmins: _0x4c9bba,
    isBotAdmins: _0x3de21e,
    isAdmins: _0x54f9af,
    reply: _0x4edaa2,
    config: _0x175872
  }) => {
    try {
      if (!_0x5782d0) {
        return await _0x4edaa2(BOTOW);
      }
      if (_0x127e61 == 'on') {
        if (_0x175872.AUTO_BIO == "true") {
          return _0x4edaa2("already on ");
        }
        await input_set("AUTO_BIO", "true");
        return _0x4edaa2("autobio turned on");
      }
      if (_0x127e61 == "off") {
        if (_0x175872.AUTO_BIO !== "true") {
          return _0x4edaa2("already off");
        }
        await input_set("AUTO_BIO", "false");
        return _0x4edaa2("autobio turned off");
      }
    } catch (_0x56a898) {
      _0x4edaa2("*Error !!*");
      _0x2939e3(_0x56a898);
    }
  });
  function _0x269f95(_0x34dc29, _0x10564e, _0x39ec8b, _0x3c39a7, _0x4f0b67) {
    return _0x3230(_0x3c39a7 - 0x7a, _0x34dc29);
  }
  const _0x49eb55 = {
    pattern: "autowelcome",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x49eb55, async (_0x5430cf, _0x48d72f, _0x1c1f45, {
    from: _0x29826d,
    prefix: _0x42eda4,
    l: _0x4659f0,
    quoted: _0x35d231,
    body: _0x572d3b,
    isCmd: _0x53e296,
    command: _0x14df7c,
    args: _0x4ac72d,
    q: _0x24080e,
    isGroup: _0x2ec6f8,
    sender: _0x335c62,
    senderNumber: _0x248a24,
    botNumber2: _0x4bdb2b,
    botNumber: _0x4cd099,
    pushname: _0x2f617e,
    isMe: _0x248f70,
    isOwner: _0x3c3dde,
    groupMetadata: _0x1cead6,
    groupName: _0x5d1d19,
    participants: _0xe7d7cc,
    groupAdmins: _0x139729,
    isBotAdmins: _0x37bead,
    isAdmins: _0x1f5b04,
    reply: _0x302d50,
    config: _0x3270da
  }) => {
    try {
      if (!_0x248f70) {
        return await _0x302d50(BOTOW);
      }
      if (_0x24080e == 'on') {
        if (_0x3270da.WELCOME == "true") {
          return _0x302d50("already on ");
        }
        await input_set("WELCOME", "true");
        return _0x302d50("autowelcome turned on");
      }
      if (_0x24080e == "off") {
        if (_0x3270da.WELCOME !== "true") {
          return _0x302d50("already off");
        }
        await input_set("WELCOME", "false");
        return _0x302d50("autowelcome turned off");
      }
    } catch (_0x1acab9) {
      _0x302d50("*Error !!*");
      _0x4659f0(_0x1acab9);
    }
  });
  const _0x4dbaaa = {
    pattern: "antibot",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x4dbaaa, async (_0x24763c, _0x2d249b, _0x34be16, {
    from: _0x565146,
    prefix: _0x3207e9,
    l: _0x4c3921,
    quoted: _0x88233,
    body: _0x4782cd,
    isCmd: _0x8b4e67,
    command: _0x4fe062,
    args: _0x585bac,
    q: _0x1466f9,
    isGroup: _0x5ddd5d,
    sender: _0xff1d33,
    senderNumber: _0x1936dd,
    botNumber2: _0x3dcbc1,
    botNumber: _0x28bd0e,
    pushname: _0x571e43,
    isMe: _0x428a32,
    isOwner: _0x3b755b,
    groupMetadata: _0x1e6dcd,
    groupName: _0x8cd022,
    participants: _0x1b0128,
    groupAdmins: _0x3df411,
    isBotAdmins: _0xb39a52,
    isAdmins: _0x5bf8a8,
    reply: _0x343597,
    config: _0x5937c7
  }) => {
    try {
      if (!_0x428a32) {
        return await _0x343597(BOTOW);
      }
      if (_0x1466f9 == 'on') {
        if (_0x5937c7.ANTI_BOT == "true") {
          return _0x343597("already on ");
        }
        await input_set("ANTI_BOT", "true");
        return _0x343597("antibot turned on");
      }
      if (_0x1466f9 == "off") {
        if (_0x5937c7.ANTI_BOT !== "true") {
          return _0x343597("already off");
        }
        await input_set("ANTI_BOT", "false");
        return _0x343597("antibot turned off");
      }
    } catch (_0x5da2d7) {
      _0x343597("*Error !!*");
      _0x4c3921(_0x5da2d7);
    }
  });
  const _0x2e09bd = {
    pattern: "antilink",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x2e09bd, async (_0x5767e1, _0x2c6a5d, _0xbdc883, {
    from: _0x30730d,
    prefix: _0x1ab49d,
    l: _0x4034bc,
    quoted: _0x3a6860,
    body: _0x3503b1,
    isCmd: _0x174961,
    command: _0x4616c4,
    args: _0x3fea36,
    q: _0xd49243,
    isGroup: _0x3c6c4c,
    sender: _0x22a986,
    senderNumber: _0x2fbc8f,
    botNumber2: _0x1f2a33,
    botNumber: _0x5b40f7,
    pushname: _0x883455,
    isMe: _0xa63b7d,
    isOwner: _0x350ac9,
    groupMetadata: _0x9bcc72,
    groupName: _0x3250ff,
    participants: _0x24b7e8,
    groupAdmins: _0x44b660,
    isBotAdmins: _0x1842a7,
    isAdmins: _0x29b79a,
    reply: _0x3612b4,
    config: _0x3d4d33
  }) => {
    try {
      if (!_0xa63b7d) {
        return await _0x3612b4(BOTOW);
      }
      if (_0xd49243 == 'on') {
        if (_0x3d4d33.ANTI_LINK == "true") {
          return _0x3612b4("already on ");
        }
        await input_set("ANTI_LINK", "true");
        return _0x3612b4("antilink turned on");
      }
      if (_0xd49243 == "off") {
        if (_0x3d4d33.ANTI_LINK !== "true") {
          return _0x3612b4("already off");
        }
        await input_set("ANTI_LINK", "false");
        return _0x3612b4("antilink turned off");
      }
    } catch (_0x579f88) {
      _0x3612b4("*Error !!*");
      _0x4034bc(_0x579f88);
    }
  });
  const _0xe70b = {
    pattern: "antibad",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0xe70b, async (_0x11c06b, _0x2c0d61, _0x39fd6e, {
    from: _0x1fd6f9,
    prefix: _0x440d01,
    l: _0x1629a5,
    quoted: _0x3a995c,
    body: _0x4add9a,
    isCmd: _0x3b7751,
    command: _0x5e83bd,
    args: _0xbb0002,
    q: _0x257d22,
    isGroup: _0x3f5d23,
    sender: _0x526d9a,
    senderNumber: _0x374847,
    botNumber2: _0xe2a318,
    botNumber: _0x5217db,
    pushname: _0x5d2601,
    isMe: _0x40bedc,
    isOwner: _0x5b74d9,
    groupMetadata: _0x4a3235,
    groupName: _0x492323,
    participants: _0x46c9e7,
    groupAdmins: _0x2d4415,
    isBotAdmins: _0x5ee5d1,
    isAdmins: _0x176067,
    reply: _0x1dfc37,
    config: _0x3d6962
  }) => {
    try {
      if (!_0x40bedc) {
        return await _0x1dfc37(BOTOW);
      }
      if (_0x257d22 == 'on') {
        if (_0x3d6962.ANTI_BAD == "true") {
          return _0x1dfc37("already on ");
        }
        await input_set("ANTI_BAD", "true");
        return _0x1dfc37("antibad turned on");
      }
      if (_0x257d22 == "off") {
        if (_0x3d6962.ANTI_BAD !== "true") {
          return _0x1dfc37("already off");
        }
        await input_set("ANTI_BAD", "false");
        return _0x1dfc37("antibad turned off");
      }
    } catch (_0x2d25ef) {
      _0x1dfc37("*Error !!*");
      _0x1629a5(_0x2d25ef);
    }
  });
  const _0x1277c9 = {
    pattern: "autostatus",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x1277c9, async (_0x12ec81, _0x113399, _0x343ec8, {
    from: _0x58c565,
    prefix: _0x590f2a,
    l: _0x348df6,
    quoted: _0x586a38,
    body: _0x44d88f,
    isCmd: _0x459a9f,
    command: _0x11db90,
    args: _0x5ea86f,
    q: _0x3ac66e,
    isGroup: _0x1f57f3,
    sender: _0x12b6a0,
    senderNumber: _0x224ccc,
    botNumber2: _0x4d68c8,
    botNumber: _0x75f86f,
    pushname: _0x3c25d1,
    isMe: _0x3b7a94,
    isOwner: _0x358c24,
    groupMetadata: _0x1cd4eb,
    groupName: _0x563013,
    participants: _0xf2e6b1,
    groupAdmins: _0x45e1a1,
    isBotAdmins: _0x1fd5eb,
    isAdmins: _0x59f336,
    reply: _0x521ced,
    config: _0x9fedd1
  }) => {
    try {
      if (!_0x3b7a94) {
        return await _0x521ced(BOTOW);
      }
      if (_0x3ac66e == 'on') {
        if (_0x9fedd1.AUTO_STATUS_READ == "true") {
          return _0x521ced("already on ");
        }
        await input_set("AUTO_STATUS_READ", "true");
        return _0x521ced("autostatus turned on");
      }
      if (_0x3ac66e == "off") {
        if (_0x9fedd1.AUTO_STATUS_READ !== "true") {
          return _0x521ced("already off");
        }
        await input_set("AUTO_STATUS_READ", "false");
        return _0x521ced("autostatus turned off");
      }
    } catch (_0x56fc96) {
      _0x521ced("*Error !!*");
      _0x348df6(_0x56fc96);
    }
  });
  const _0x544ebe = {
    pattern: "autotyping",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x544ebe, async (_0x5b66b3, _0x3d9ff8, _0x45f7b5, {
    from: _0x2b5fc9,
    prefix: _0x1b02ef,
    l: _0x24db98,
    quoted: _0x3c12cf,
    body: _0x30ddd0,
    isCmd: _0x4baadb,
    command: _0xd43fd9,
    args: _0x30f85d,
    q: _0x1187f3,
    isGroup: _0x694bf5,
    sender: _0x448c7e,
    senderNumber: _0x62c651,
    botNumber2: _0x1a8a6b,
    botNumber: _0x3fe68b,
    pushname: _0x1e4da7,
    isMe: _0x1b9c68,
    isOwner: _0x346a3c,
    groupMetadata: _0x583a96,
    groupName: _0x5cd110,
    participants: _0x12265d,
    groupAdmins: _0x3a7af6,
    isBotAdmins: _0x2f45f5,
    isAdmins: _0x28f723,
    reply: _0x75f7ee,
    config: _0x2d7634
  }) => {
    try {
      if (!_0x1b9c68) {
        return await _0x75f7ee(BOTOW);
      }
      if (_0x1187f3 == 'on') {
        if (_0x2d7634.AUTO_TYPING == "true") {
          return _0x75f7ee("already on ");
        }
        await input_set("AUTO_TYPING", "true");
        return _0x75f7ee("autotyping turned on");
      }
      if (_0x1187f3 == "off") {
        if (_0x2d7634.AUTO_TYPING !== "true") {
          return _0x75f7ee("already off");
        }
        await input_set("AUTO_TYPING", "false");
        return _0x75f7ee("autotyping turned off");
      }
    } catch (_0x39caa5) {
      _0x75f7ee("*Error !!*");
      _0x24db98(_0x39caa5);
    }
  });
  const _0x3c9d25 = {
    pattern: "autorecording",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x3c9d25, async (_0x5835fe, _0x5b20c0, _0x310b50, {
    from: _0x626895,
    prefix: _0x1ff176,
    l: _0x4c7215,
    quoted: _0xadd183,
    body: _0x30891b,
    isCmd: _0x4ced3d,
    command: _0x35ac9d,
    args: _0x2247cb,
    q: _0x82bb48,
    isGroup: _0x39edd1,
    sender: _0x15fa71,
    senderNumber: _0x29dad2,
    botNumber2: _0x53ff2c,
    botNumber: _0x33042f,
    pushname: _0x350f16,
    isMe: _0x344450,
    isOwner: _0x552143,
    groupMetadata: _0x1d5390,
    groupName: _0x1dcbc3,
    participants: _0x358f68,
    groupAdmins: _0x1d1f84,
    isBotAdmins: _0x541c9b,
    isAdmins: _0x605e7b,
    reply: _0x5e90f0,
    config: _0x54b563
  }) => {
    try {
      if (!_0x344450) {
        return await _0x5e90f0(BOTOW);
      }
      if (_0x82bb48 == 'on') {
        if (_0x54b563.AUTO_RECORDING == "true") {
          return _0x5e90f0("already on ");
        }
        await input_set("AUTO_RECORDING", "true");
        return _0x5e90f0("autorecording turned on");
      }
      if (_0x82bb48 == "off") {
        if (_0x54b563.AUTO_RECORDING !== "true") {
          return _0x5e90f0("already off");
        }
        await input_set("AUTO_RECORDING", "false");
        return _0x5e90f0("autorecording turned off");
      }
    } catch (_0x5a959f) {
      _0x5e90f0("*Error !!*");
      _0x4c7215(_0x5a959f);
    }
  });
  const _0x4c2d2f = {
    pattern: "autoread",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x4c2d2f, async (_0x4770f0, _0x21b81c, _0x2cb1cb, {
    from: _0x266726,
    prefix: _0x5bbe17,
    l: _0x31cb86,
    quoted: _0x3476e7,
    body: _0x439ca6,
    isCmd: _0x524a74,
    command: _0x1a6971,
    args: _0x3e368c,
    q: _0x46170e,
    isGroup: _0x586026,
    sender: _0x25a258,
    senderNumber: _0x4386ee,
    botNumber2: _0x7d20c2,
    botNumber: _0x165fc1,
    pushname: _0x3f2887,
    isMe: _0x144bd5,
    isOwner: _0x2e1ad1,
    groupMetadata: _0x1def45,
    groupName: _0x174a32,
    participants: _0x5cc418,
    groupAdmins: _0x25443a,
    isBotAdmins: _0x36ac04,
    isAdmins: _0xc75103,
    reply: _0x1521ac,
    config: _0x1bb185
  }) => {
    try {
      if (!_0x144bd5) {
        return await _0x1521ac(BOTOW);
      }
      if (_0x46170e == 'on') {
        if (_0x1bb185.AUTO_READ == "true") {
          return _0x1521ac("already on ");
        }
        await input_set("AUTO_READ", "true");
        return _0x1521ac("autoread turned on");
      }
      if (_0x46170e == "off") {
        if (_0x1bb185.AUTO_READ !== "true") {
          return _0x1521ac("already off");
        }
        await input_set("AUTO_READ", "false");
        return _0x1521ac("autoread turned off");
      }
    } catch (_0x58ea68) {
      _0x1521ac("*Error !!*");
      _0x31cb86(_0x58ea68);
    }
  });
  const _0x583f9d = {
    pattern: "cmdread",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x583f9d, async (_0x4dd85e, _0xc9eeb2, _0x2e19f6, {
    from: _0x5135d6,
    prefix: _0x50fa90,
    l: _0x30dfa0,
    quoted: _0x3dc3e4,
    body: _0x2e547e,
    isCmd: _0x3a141b,
    command: _0x196bd5,
    args: _0x33121b,
    q: _0x36dd8e,
    isGroup: _0x4c9691,
    sender: _0x442499,
    senderNumber: _0x53990d,
    botNumber2: _0x1dfb25,
    botNumber: _0x176588,
    pushname: _0x2381e8,
    isMe: _0x36b7d6,
    isOwner: _0x5398ef,
    groupMetadata: _0xc1ef6b,
    groupName: _0x536791,
    participants: _0x4472b2,
    groupAdmins: _0x2fe03c,
    isBotAdmins: _0x6d4fb8,
    isAdmins: _0x5c68d0,
    reply: _0x109453,
    config: _0x45acb3
  }) => {
    try {
      if (!_0x36b7d6) {
        return await _0x109453(BOTOW);
      }
      if (_0x36dd8e == 'on') {
        if (_0x45acb3.READ_CMD_ONLY == "true") {
          return _0x109453("already on ");
        }
        await input_set("READ_CMD_ONLY", "true");
        return _0x109453("cmdread turned on");
      }
      if (_0x36dd8e == "off") {
        if (_0x45acb3.READ_CMD_ONLY !== "true") {
          return _0x109453("already off");
        }
        await input_set("READ_CMD_ONLY", "false");
        return _0x109453("cmdread turned off");
      }
    } catch (_0x562d63) {
      _0x109453("*Error !!*");
      _0x30dfa0(_0x562d63);
    }
  });
  const _0x24bf7f = {
    pattern: "autoreact",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x24bf7f, async (_0x174030, _0x36ce08, _0x14aa45, {
    from: _0x4ebc10,
    prefix: _0x59b0a0,
    l: _0x7ae3bf,
    quoted: _0x25ffba,
    body: _0xec7718,
    isCmd: _0x1e463d,
    command: _0x35845b,
    args: _0x2ad837,
    q: _0xd63aad,
    isGroup: _0xf6274,
    sender: _0x14be3e,
    senderNumber: _0x18bfc2,
    botNumber2: _0x4f412a,
    botNumber: _0x3d8371,
    pushname: _0x49d38e,
    isMe: _0x2dc251,
    isOwner: _0x3f8273,
    groupMetadata: _0x15eaf9,
    groupName: _0x4d90c7,
    participants: _0x46896d,
    groupAdmins: _0x479eb2,
    isBotAdmins: _0x15721d,
    isAdmins: _0x5ab9d0,
    reply: _0x3d4856,
    config: _0x2114d1
  }) => {
    try {
      if (!_0x2dc251) {
        return await _0x3d4856(BOTOW);
      }
      if (_0xd63aad == 'on') {
        if (_0x2114d1.AUTO_REACT == "true") {
          return _0x3d4856("already on ");
        }
        await input_set("AUTO_REACT", "true");
        return _0x3d4856("autoreact turned on");
      }
      if (_0xd63aad == "off") {
        if (_0x2114d1.AUTO_REACT !== "true") {
          return _0x3d4856("already off");
        }
        await input_set("AUTO_REACT", "false");
        return _0x3d4856("autoreact turned off");
      }
    } catch (_0x5458d3) {
      _0x3d4856("*Error !!*");
      _0x7ae3bf(_0x5458d3);
    }
  });
  const _0x451362 = {
    pattern: "alwaysonline",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x451362, async (_0x241074, _0x3843a4, _0x271a12, {
    from: _0x5681e4,
    prefix: _0x518a09,
    l: _0x3cae6e,
    quoted: _0x25ae5b,
    body: _0x487245,
    isCmd: _0x53a63a,
    command: _0x491bd3,
    args: _0x686b1b,
    q: _0x99c71,
    isGroup: _0x2ebae2,
    sender: _0x526003,
    senderNumber: _0x10b442,
    botNumber2: _0x4c4273,
    botNumber: _0x42ded2,
    pushname: _0x4b10dc,
    isMe: _0x15002f,
    isOwner: _0x396949,
    groupMetadata: _0x52c3da,
    groupName: _0x13c939,
    participants: _0x217445,
    groupAdmins: _0x6382af,
    isBotAdmins: _0x343cea,
    isAdmins: _0x6ed036,
    reply: _0x249eba,
    config: _0xf11e
  }) => {
    try {
      if (!_0x15002f) {
        return await _0x249eba(BOTOW);
      }
      if (_0x99c71 == 'on') {
        if (_0xf11e.ALWAYS_ONLINE == "true") {
          return _0x249eba("already on ");
        }
        await input_set("ALWAYS_ONLINE", "true");
        return _0x249eba("alwaysonline turned on");
      }
      if (_0x99c71 == "off") {
        if (_0xf11e.ALWAYS_ONLINE !== "true") {
          return _0x249eba("already off");
        }
        await input_set("ALWAYS_ONLINE", "false");
        return _0x249eba("alwaysonline turned off");
      }
    } catch (_0x172368) {
      _0x249eba("*Error !!*");
      _0x3cae6e(_0x172368);
    }
  });
  const _0x1e5b85 = {
    pattern: "autoblock",
    react: "🗣️"
  };
  function _0x3f4547(_0x32700c, _0x42ee9b, _0x1d0b66, _0x2a705a, _0x2d9499) {
    return _0x3230(_0x2a705a - 0x16c, _0x2d9499);
  }
  _0x1e5b85.dontAddCommandList = true;
  _0x1e5b85.filename = __filename;
  cmd(_0x1e5b85, async (_0x2f58f7, _0x3cfdce, _0x4ad932, {
    from: _0x92dd97,
    prefix: _0x3e565b,
    l: _0x512d7d,
    quoted: _0x80e61d,
    body: _0x69e0c5,
    isCmd: _0x1e2bb8,
    command: _0x597ddd,
    args: _0x2ce349,
    q: _0x3d398e,
    isGroup: _0x41d909,
    sender: _0x4992e9,
    senderNumber: _0x21164f,
    botNumber2: _0x8130ec,
    botNumber: _0x3b49f7,
    pushname: _0x4cdda8,
    isMe: _0x1e0f0a,
    isOwner: _0x43416e,
    groupMetadata: _0x281420,
    groupName: _0xe3aaa7,
    participants: _0x12dd62,
    groupAdmins: _0x447ea1,
    isBotAdmins: _0x20bfee,
    isAdmins: _0x22eb43,
    reply: _0x347a0b,
    config: _0x4d71cf
  }) => {
    try {
      if (!_0x1e0f0a) {
        return await _0x347a0b(BOTOW);
      }
      if (_0x3d398e == 'on') {
        if (_0x4d71cf.AUTO_BLOCK == "true") {
          return _0x347a0b("already on ");
        }
        await input_set("AUTO_BLOCK", "true");
        return _0x347a0b("Auto block turned on");
      }
      if (_0x3d398e == "off") {
        if (_0x4d71cf.AUTO_BLOCK !== "true") {
          return _0x347a0b("already off");
        }
        await input_set("AUTO_BLOCK", "false");
        return _0x347a0b("Auto block turned off");
      }
    } catch (_0x78b7ed) {
      _0x347a0b("*Error !!*");
      _0x512d7d(_0x78b7ed);
    }
  });
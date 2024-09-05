(function (_0x5336bc, _0x3d99d7) {
    const _0x32ba09 = _0x5336bc();
    while (true) {
      try {
        const _0xf36682 = parseInt(_0x41bd(305, 'vTAG')) / 1 * (-parseInt(_0x41bd(557, '#cyi')) / 2) + -parseInt(_0x41bd(398, '&zRI')) / 3 + -parseInt(_0x41bd(504, '$XUG')) / 4 + -parseInt(_0x41bd(518, 'dGAR')) / 5 + parseInt(_0x41bd(427, 'Crw2')) / 6 + -parseInt(_0x41bd(352, '4!xr')) / 7 + parseInt(_0x41bd(421, 'Wj#Z')) / 8 * (parseInt(_0x41bd(596, 'Wj#Z')) / 9);
        if (_0xf36682 === _0x3d99d7) {
          break;
        } else {
          _0x32ba09.push(_0x32ba09.shift());
        }
      } catch (_0x10c11d) {
        _0x32ba09.push(_0x32ba09.shift());
      }
    }
  })(_0x2b04, 565541);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const got = require("got");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
  } = require("../lib/functions");
  const {
    Sticker,
    createSticker,
    StickerTypes
  } = require("wa-sticker-formatter");
  const fs = require('fs');
  function _0x36c260(_0x108544, _0xe71d9c, _0x13de13, _0x5a226c, _0x291ba7) {
    return _0x41bd(_0x291ba7 + 0xff, _0xe71d9c);
  }
  const {
    promisify
  } = require("util");
  const FormData = require("form-data");
  const stream = require("stream");
  function _0x56036b(_0x411d09, _0x1d4774, _0x4f334f, _0xa68701, _0x560a10) {
    return _0x41bd(_0xa68701 - 0x17b, _0x1d4774);
  }
  const pipeline = promisify(stream.pipeline);
  const fileType = require("file-type");
  let wm = "X-BYTE v" + require("../package.json").version + " Powerfull whatsapp bot, \n Powered by Hamza";
  function _0x41bd(_0x3151a8, _0xd26ea3) {
    const _0xc19b9c = _0x2b04();
    _0x41bd = function (_0x56ddd8, _0x8488e) {
      _0x56ddd8 = _0x56ddd8 - 256;
      let _0xf4ba11 = _0xc19b9c[_0x56ddd8];
      if (_0x41bd.LYbHkZ === undefined) {
        var _0x176fe = function (_0x4f1810) {
          let _0x25b518 = '';
          let _0x1e3286 = '';
          let _0xe0df93 = 0;
          let _0x4c8bfb;
          let _0x59e7b8;
          for (let _0x2d58a1 = 0; _0x59e7b8 = _0x4f1810.charAt(_0x2d58a1++); ~_0x59e7b8 && (_0x4c8bfb = _0xe0df93 % 4 ? _0x4c8bfb * 64 + _0x59e7b8 : _0x59e7b8, _0xe0df93++ % 4) ? _0x25b518 += String.fromCharCode(255 & _0x4c8bfb >> (-2 * _0xe0df93 & 6)) : 0) {
            _0x59e7b8 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x59e7b8);
          }
          let _0x3d29ed = 0;
          for (let _0x541fe5 = _0x25b518.length; _0x3d29ed < _0x541fe5; _0x3d29ed++) {
            _0x1e3286 += '%' + ('00' + _0x25b518.charCodeAt(_0x3d29ed).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x1e3286);
        };
        const _0xf1f8a8 = function (_0x584a26, _0x252c97) {
          let _0x323f75 = [];
          let _0x3313d5 = 0;
          let _0x503885;
          let _0x38968d = '';
          _0x584a26 = _0x176fe(_0x584a26);
          let _0x562073;
          for (_0x562073 = 0; _0x562073 < 256; _0x562073++) {
            _0x323f75[_0x562073] = _0x562073;
          }
          for (_0x562073 = 0; _0x562073 < 256; _0x562073++) {
            _0x3313d5 = (_0x3313d5 + _0x323f75[_0x562073] + _0x252c97.charCodeAt(_0x562073 % _0x252c97.length)) % 256;
            _0x503885 = _0x323f75[_0x562073];
            _0x323f75[_0x562073] = _0x323f75[_0x3313d5];
            _0x323f75[_0x3313d5] = _0x503885;
          }
          _0x562073 = 0;
          _0x3313d5 = 0;
          for (let _0x3c0757 = 0; _0x3c0757 < _0x584a26.length; _0x3c0757++) {
            _0x562073 = (_0x562073 + 1) % 256;
            _0x3313d5 = (_0x3313d5 + _0x323f75[_0x562073]) % 256;
            _0x503885 = _0x323f75[_0x562073];
            _0x323f75[_0x562073] = _0x323f75[_0x3313d5];
            _0x323f75[_0x3313d5] = _0x503885;
            _0x38968d += String.fromCharCode(_0x584a26.charCodeAt(_0x3c0757) ^ _0x323f75[(_0x323f75[_0x562073] + _0x323f75[_0x3313d5]) % 256]);
          }
          return _0x38968d;
        };
        _0x41bd.XxQuKR = _0xf1f8a8;
        _0x3151a8 = arguments;
        _0x41bd.LYbHkZ = true;
      }
      const _0x499108 = _0xc19b9c[0];
      const _0x10e573 = _0x56ddd8 + _0x499108;
      const _0x463410 = _0x3151a8[_0x10e573];
      if (!_0x463410) {
        if (_0x41bd.RObUUy === undefined) {
          _0x41bd.RObUUy = true;
        }
        _0xf4ba11 = _0x41bd.XxQuKR(_0xf4ba11, _0x8488e);
        _0x3151a8[_0x10e573] = _0xf4ba11;
      } else {
        _0xf4ba11 = _0x463410;
      }
      return _0xf4ba11;
    };
    return _0x41bd(_0x3151a8, _0xd26ea3);
  }

  function _0x3b9da0(_0x5f4d68, _0x47fe34, _0x28c063, _0x4fb76b, _0xfd9369) {
    return _0x41bd(_0xfd9369 - 0x17b, _0x4fb76b);
  }
  function _0x3e5f0f(_0x457b9a, _0x3bda9e, _0x11714e, _0x448b74, _0x2f3983) {
    return _0x41bd(_0x448b74 + 0x3e0, _0x457b9a);
  }
  function _0x26ca27(_0x5b485e, _0x463f96, _0x4c6683, _0x6654ac, _0x5eb285) {
    return _0x41bd(_0x4c6683 + 0x101, _0x5eb285);
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x28044a = {
      pattern: "removebg",
      react: '🔮',
      alias: ["rmbg"],
      desc: "It remove background your replied photo.",
      category: "convert",
      use: ".removebg <Reply to image>",
      filename: __filename
    };
    cmd(_0x28044a, async (_0x16e8cc, _0x223962, _0x27c107, {
      from: _0x59d25f,
      l: _0x3669cf,
      quoted: _0x3a6408,
      prefix: _0x211fa7,
      body: _0x4f0b25,
      isCmd: _0x2eed5a,
      command: _0x31eac0,
      args: _0x58e30a,
      q: _0x38bad9,
      isGroup: _0x5d5943,
      sender: _0x240f91,
      senderNumber: _0x10477c,
      botNumber2: _0x28b6c9,
      botNumber: _0x13b8a7,
      pushname: _0x20e24f,
      isMe: _0x50c7ee,
      isOwner: _0x4ce4bc,
      groupMetadata: _0x3e3d45,
      groupName: _0x127910,
      participants: _0x4f378b,
      groupAdmins: _0xd2e072,
      isBotAdmins: _0x104264,
      isAdmins: _0x2284da,
      reply: _0x421b82
    }) => {
      try {
        const _0x572bbf = _0x27c107.quoted ? _0x27c107.quoted.type === "viewOnceMessage" : false;
        const _0x18b75b = _0x27c107.quoted ? _0x27c107.quoted.type === "imageMessage" || (_0x572bbf ? _0x27c107.quoted.msg.type === "imageMessage" : false) : false;
        if (_0x27c107.type === "imageMessage" || _0x18b75b) {
          var _0x17ff58 = getRandom('');
          var _0x4c73bd = getRandom('');
          let _0x28f745 = _0x18b75b ? await _0x27c107.quoted.download(_0x17ff58) : await _0x27c107.download(_0x17ff58);
          let _0x477f25 = await fileType.fromBuffer(_0x28f745);
          await fs.promises.writeFile('./' + _0x477f25.ext, _0x28f745);
          var _0x33820d = new FormData();
          _0x33820d.append("image_file", fs.createReadStream('./' + _0x477f25.ext));
          _0x33820d.append("size", "auto");
          var _0x27bcb9 = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
            'body': _0x33820d,
            'headers': {
              'X-Api-Key': "fLYByZwbPqdyqkdKK6zcBN9H"
            }
          });
          await pipeline(_0x27bcb9, fs.createWriteStream(_0x4c73bd + ".png"));
          let _0x2cf446 = [{
            'name': "cta_url",
            'buttonParamsJson': JSON.stringify({
              'display_text': "Join Our Channel",
              'url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l",
              'merchant_url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l"
            })
          }, {
            'name': "single_select",
            'buttonParamsJson': JSON.stringify({
              'title': "Tap Here!",
              'sections': [{
                'rows': [{
                  'title': "AS A IMAGE",
                  'id': _0x211fa7 + "rbgI " + _0x4c73bd + ".png"
                }, {
                  'title': "AS A DOCUMENT",
                  'id': _0x211fa7 + "rbgd " + _0x4c73bd + ".png"
                }, {
                  'title': "AS A STICKER",
                  'id': _0x211fa7 + "rebgs " + _0x4c73bd + ".png"
                }]
              }]
            })
          }];
          const _0x82cbb3 = {
            video: "https://api-brunosobrino-dcaf9040.koyeb.app/api/anime/lolivid",
            header: '',
            footer: config.FOOTER,
            body: "Powred by Hamza\n\n   *🌆 BACKGROUND REMOVER*\n\n"
          };
          const _0x993206 = {
            quoted: _0x223962
          };
          return await _0x16e8cc.sendButtonMessage(_0x59d25f, _0x2cf446, _0x27c107, _0x82cbb3, _0x993206);
        } else {
          return await _0x421b82("*Reply to a photo !*");
        }
      } catch (_0x24566f) {
        _0x421b82("I can't remove background on this image.");
        _0x3669cf(_0x24566f);
      }
    });
    const _0x371ad1 = {
      pattern: "rbgi",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x371ad1, async (_0x34261d, _0x17015e, _0x7f7e7b, {
      from: _0xe0e306,
      l: _0x6508c7,
      quoted: _0xa48e67,
      body: _0x390fae,
      isCmd: _0x2343be,
      command: _0x4c0ca4,
      args: _0x97a913,
      q: _0x49643a,
      isGroup: _0x55c6a8,
      sender: _0x20aa2d,
      senderNumber: _0x183716,
      botNumber2: _0x1b1419,
      botNumber: _0x4e5bdf,
      pushname: _0x400207,
      isMe: _0xa83b87,
      isOwner: _0x1bda35,
      groupMetadata: _0x2b4fd1,
      groupName: _0xa450d6,
      participants: _0x12078c,
      groupAdmins: _0x128690,
      isBotAdmins: _0x1d7a64,
      isAdmins: _0x10d0f3,
      reply: _0x3b025e
    }) => {
      try {
        const _0x2b585e = {
          text: '📥',
          key: _0x17015e.key
        };
        const _0x25bb2f = {
          react: _0x2b585e
        };
        await _0x34261d.sendMessage(_0xe0e306, _0x25bb2f);
        const _0x407421 = {
          quoted: _0x17015e
        };
        await _0x34261d.sendMessage(_0xe0e306, {
          'image': fs.readFileSync(_0x49643a),
          'caption': config.FOOTER
        }, _0x407421);
        const _0x4a972b = {
          text: '✔',
          key: _0x17015e.key
        };
        const _0x5380f7 = {
          react: _0x4a972b
        };
        await _0x34261d.sendMessage(_0xe0e306, _0x5380f7);
      } catch (_0xa1cd0e) {
        _0x3b025e("*ERROR !!*");
        _0x6508c7(_0xa1cd0e);
      }
    });
    const _0x5e48d0 = {
      pattern: "rebgs",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x5e48d0, async (_0x3655ec, _0x3fa55c, _0x593721, {
      from: _0xf2e99a,
      l: _0x21d315,
      quoted: _0x260999,
      body: _0x514a15,
      isCmd: _0x254053,
      command: _0x3e36c4,
      args: _0x5cbbb7,
      q: _0x5f2215,
      isGroup: _0x45f497,
      sender: _0x4c8c72,
      senderNumber: _0x3a1c88,
      botNumber2: _0x3fe3d7,
      botNumber: _0x3fad0b,
      pushname: _0x431047,
      isMe: _0x49ebc3,
      isOwner: _0x6a2a72,
      groupMetadata: _0x388c8e,
      groupName: _0xa9a26,
      participants: _0x300a5c,
      groupAdmins: _0x19d3cf,
      isBotAdmins: _0x220eb1,
      isAdmins: _0xfefbab,
      reply: _0x4240a5
    }) => {
      try {
        const _0x929170 = {
          text: '📥',
          key: _0x3fa55c.key
        };
        const _0x47b39a = {
          react: _0x929170
        };
        await _0x3655ec.sendMessage(_0xf2e99a, _0x47b39a);
        let _0x398560 = new Sticker(_0x5f2215, {
          'pack': _0x431047,
          'author': '',
          'type': _0x5f2215.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x5e4918 = await _0x398560.toBuffer();
        const _0x51a6ea = {
          sticker: _0x5e4918
        };
        const _0x42adae = {
          quoted: _0x3fa55c
        };
        await _0x3655ec.sendMessage(_0xf2e99a, _0x51a6ea, _0x42adae);
        const _0x4f9101 = {
          text: '✔',
          key: _0x3fa55c.key
        };
        const _0xaa2795 = {
          react: _0x4f9101
        };
        await _0x3655ec.sendMessage(_0xf2e99a, _0xaa2795);
      } catch (_0x4801a1) {
        _0x4240a5("*ERROR !!*");
        _0x21d315(_0x4801a1);
      }
    });
    const _0x39b347 = {
      pattern: "rbgd",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x39b347, async (_0x228e1a, _0x13a542, _0x5f1b0b, {
      from: _0x46ec4b,
      l: _0x1efb76,
      quoted: _0x519904,
      body: _0x23212f,
      isCmd: _0x232949,
      command: _0x53142c,
      args: _0x37a6d1,
      q: _0x5cba60,
      isGroup: _0x517016,
      sender: _0x47fe5f,
      senderNumber: _0x1c3031,
      botNumber2: _0x3c5b97,
      botNumber: _0x53c817,
      pushname: _0x1b2dd3,
      isMe: _0x2e3930,
      isOwner: _0x22b3b1,
      groupMetadata: _0x4a5dc6,
      groupName: _0x862a1c,
      participants: _0x5398f1,
      groupAdmins: _0x3957aa,
      isBotAdmins: _0x1daf8a,
      isAdmins: _0x3940d7,
      reply: _0x21d1a7
    }) => {
      try {
        const _0x44949f = {
          text: '📥',
          key: _0x13a542.key
        };
        const _0x1fe1f4 = {
          react: _0x44949f
        };
        await _0x228e1a.sendMessage(_0x46ec4b, _0x1fe1f4);
        const _0x3883f2 = {
          quoted: _0x13a542
        };
        await _0x228e1a.sendMessage(_0x46ec4b, {
          'document': fs.readFileSync(_0x5cba60),
          'mimetype': "image/x-png",
          'fileName': "Removebg.png",
          'caption': wm
        }, _0x3883f2);
        const _0x7beba3 = {
          text: '✔',
          key: _0x13a542.key
        };
        const _0x27ed27 = {
          react: _0x7beba3
        };
        await _0x228e1a.sendMessage(_0x46ec4b, _0x27ed27);
      } catch (_0xd38776) {
        _0x21d1a7("*ERROR !!*");
        _0x1efb76(_0xd38776);
      }
    });
  }
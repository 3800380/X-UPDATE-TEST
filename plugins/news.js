(function (_0x4a8bab, _0x29bae8) {
    const _0x4afb58 = _0x4a8bab();
    while (true) {
      try {
        const _0x2b32b6 = parseInt(_0x222d(743, 'rfGy')) / 1 * (-parseInt(_0x222d(305, 'MzEI')) / 2) + parseInt(_0x222d(919, 'XQVp')) / 3 + -parseInt(_0x222d(426, 'rJrS')) / 4 + parseInt(_0x222d(376, '9JrN')) / 5 * (-parseInt(_0x222d(1015, 'FnDv')) / 6) + parseInt(_0x222d(1212, 'pimj')) / 7 * (parseInt(_0x222d(450, '4*gF')) / 8) + -parseInt(_0x222d(658, 'pimj')) / 9 * (parseInt(_0x222d(766, 'rBBp')) / 10) + parseInt(_0x222d(235, 'XQVp')) / 11 * (parseInt(_0x222d(780, 'hBk!')) / 12);
        if (_0x2b32b6 === _0x29bae8) {
          break;
        } else {
          _0x4afb58.push(_0x4afb58.shift());
        }
      } catch (_0x254bc5) {
        _0x4afb58.push(_0x4afb58.shift());
      }
    }
  })(_0x31b1, 627195);
  function _0x222d(_0x4d6502, _0x4aa14b) {
    const _0x387ee0 = _0x31b1();
    _0x222d = function (_0x3292e5, _0x5390e4) {
      _0x3292e5 = _0x3292e5 - 158;
      let _0x2586be = _0x387ee0[_0x3292e5];
      if (_0x222d.GAeiqO === undefined) {
        var _0x7a5c12 = function (_0x1a9ba0) {
          let _0x25fd6c = '';
          let _0x4ee245 = '';
          let _0x371c5f = 0;
          let _0x4bf828;
          let _0xf4d997;
          for (let _0x5d0744 = 0; _0xf4d997 = _0x1a9ba0.charAt(_0x5d0744++); ~_0xf4d997 && (_0x4bf828 = _0x371c5f % 4 ? _0x4bf828 * 64 + _0xf4d997 : _0xf4d997, _0x371c5f++ % 4) ? _0x25fd6c += String.fromCharCode(255 & _0x4bf828 >> (-2 * _0x371c5f & 6)) : 0) {
            _0xf4d997 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0xf4d997);
          }
          let _0x495bb9 = 0;
          for (let _0x39f651 = _0x25fd6c.length; _0x495bb9 < _0x39f651; _0x495bb9++) {
            _0x4ee245 += '%' + ('00' + _0x25fd6c.charCodeAt(_0x495bb9).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x4ee245);
        };
        const _0xce491b = function (_0x1c6b2f, _0x4c1f98) {
          let _0x12d6b7 = [];
          let _0x5ea278 = 0;
          let _0x4736d4;
          let _0x4447de = '';
          _0x1c6b2f = _0x7a5c12(_0x1c6b2f);
          let _0x478b08;
          for (_0x478b08 = 0; _0x478b08 < 256; _0x478b08++) {
            _0x12d6b7[_0x478b08] = _0x478b08;
          }
          for (_0x478b08 = 0; _0x478b08 < 256; _0x478b08++) {
            _0x5ea278 = (_0x5ea278 + _0x12d6b7[_0x478b08] + _0x4c1f98.charCodeAt(_0x478b08 % _0x4c1f98.length)) % 256;
            _0x4736d4 = _0x12d6b7[_0x478b08];
            _0x12d6b7[_0x478b08] = _0x12d6b7[_0x5ea278];
            _0x12d6b7[_0x5ea278] = _0x4736d4;
          }
          _0x478b08 = 0;
          _0x5ea278 = 0;
          for (let _0x3fb068 = 0; _0x3fb068 < _0x1c6b2f.length; _0x3fb068++) {
            _0x478b08 = (_0x478b08 + 1) % 256;
            _0x5ea278 = (_0x5ea278 + _0x12d6b7[_0x478b08]) % 256;
            _0x4736d4 = _0x12d6b7[_0x478b08];
            _0x12d6b7[_0x478b08] = _0x12d6b7[_0x5ea278];
            _0x12d6b7[_0x5ea278] = _0x4736d4;
            _0x4447de += String.fromCharCode(_0x1c6b2f.charCodeAt(_0x3fb068) ^ _0x12d6b7[(_0x12d6b7[_0x478b08] + _0x12d6b7[_0x5ea278]) % 256]);
          }
          return _0x4447de;
        };
        _0x222d.DjACae = _0xce491b;
        _0x4d6502 = arguments;
        _0x222d.GAeiqO = true;
      }
      const _0x536c34 = _0x387ee0[0];
      const _0x83faf7 = _0x3292e5 + _0x536c34;
      const _0x5d358a = _0x4d6502[_0x83faf7];
      if (!_0x5d358a) {
        if (_0x222d.kfCxbC === undefined) {
          _0x222d.kfCxbC = true;
        }
        _0x2586be = _0x222d.DjACae(_0x2586be, _0x5390e4);
        _0x4d6502[_0x83faf7] = _0x2586be;
      } else {
        _0x2586be = _0x5d358a;
      }
      return _0x2586be;
    };
    return _0x222d(_0x4d6502, _0x4aa14b);
  }
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const l = console.log;
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
  const Esana = require("@sl-code-lords/esana-news");
  var api = new Esana();
  const sirasanews = require("sirasa-news");
  const derananews = require("@kaveesha-sithum/derana-news");
  var tmsg = '';
  if (config.LANG === 'URDU') {
    tmsg = "Iss command say ap tech news dhek sakty hain..";
  } else {
    tmsg = "It gives Tech news.";
  }
  var tmsg3 = '';
  function _0x3d8c5c(_0x391ae6, _0x2c33de, _0x96e4e3, _0x1ec2b7, _0x4a3762) {
    return _0x222d(_0x391ae6 - 0x296, _0x1ec2b7);
  }
  if (config.LANG === 'URDU') {
    tmsg3 = "Iss command say ap IOS ke bary mein news ley sakty hain (Iphone).";
  } else {
    tmsg3 = "It gives IOS news.";
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x54b59a = {
      pattern: "news",
      react: "🗃️",
      desc: "Get news",
      category: "search",
      use: ".news",
      filename: __filename
    };
    cmd(_0x54b59a, async (_0x58d459, _0x141a0e, _0x4e9346, {
      from: _0x3b7b4b,
      prefix: _0x33dad6,
      pushname: _0x578450,
      reply: _0x4696fd
    }) => {
      try {
        const _0x49450b = [];
        const _0x493f7c = new Map();
        for (let _0x1a34ba = 0; _0x1a34ba < 1; _0x1a34ba++) {
          const _0x2581fd = commands[_0x1a34ba];
          if (!_0x2581fd.dontAddCommandList && _0x2581fd.pattern !== undefined) {
            const _0x43f10c = _0x2581fd.category.toUpperCase();
            if (!_0x493f7c.has(_0x43f10c)) {
              _0x49450b.push(_0x43f10c);
              _0x493f7c.set(_0x43f10c, []);
            }
            _0x493f7c.get(_0x43f10c).push(_0x2581fd.pattern);
          }
        }
        const _0x26bab2 = [];
        for (const _0x2864a of _0x49450b) {
          const _0x440eeb = {
            header: "Select you want to see news",
            title: "Ios News",
            description: '',
            id: _0x33dad6 + "ios"
          };
          const _0xc8fe8f = {
            header: '',
            title: "wabeta News",
            description: '',
            id: _0x33dad6 + "wabeta"
          };
          const _0x258532 = {
            header: '',
            title: "Nasa News",
            description: '',
            id: _0x33dad6 + "nasanews"
          };
          const _0x258dff = {
            header: '',
            title: "Tech News",
            description: '',
            id: _0x33dad6 + "technews"
          };
          const _0x29fdf4 = {
            header: '',
            title: "Sirasa News",
            description: '',
            id: _0x33dad6 + "sirasanews"
          };
          const _0x1463dc = {
            header: '',
            title: "Esana News",
            description: '',
            id: _0x33dad6 + "esananews"
          };
          const _0x5c76d2 = {
            header: '',
            title: "Derana News",
            description: '',
            id: _0x33dad6 + "derananews"
          };
          const _0x106e69 = {
            header: '',
            title: "Hiru News",
            description: '',
            id: _0x33dad6 + "hirunews"
          };
          const _0x312be1 = {
            header: '',
            title: "Cricket News",
            description: '',
            id: _0x33dad6 + "cricketnews"
          };
          const _0x2f6e88 = {
            header: '',
            title: "Vehical News",
            description: '',
            id: _0x33dad6 + "vnews"
          };
          const _0x168197 = {
            header: '',
            title: "Mobile News",
            description: '',
            id: _0x33dad6 + "gmsnews"
          };
          _0x26bab2.push(_0x440eeb);
          _0x26bab2.push(_0xc8fe8f);
          _0x26bab2.push(_0x258532);
          _0x26bab2.push(_0x258dff);
          _0x26bab2.push(_0x29fdf4);
          _0x26bab2.push(_0x1463dc);
          _0x26bab2.push(_0x5c76d2);
          _0x26bab2.push(_0x106e69);
          _0x26bab2.push(_0x312be1);
          _0x26bab2.push(_0x2f6e88);
          _0x26bab2.push(_0x168197);
        }
        const _0x291e83 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x2b6456 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x291e83)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X - B Y T E",
              'rows': _0x26bab2
            }]
          })
        }];
        const _0x3e4766 = {
          image: "https://telegra.ph/file/a8caf4074bdc4e23e0895.jpg",
          header: '',
          footer: config.FOOTER,
          body: "`✦ 𝗡𝗘𝗪𝗦 𝗦𝗘𝗔𝗥𝗖𝗛 ✦`\n    "
        };
        const _0x27462e = {
          quoted: _0x141a0e
        };
        return await _0x58d459.sendButtonMessage(_0x3b7b4b, _0x2b6456, _0x4e9346, _0x3e4766, _0x27462e);
      } catch (_0x58063b) {
        _0x4696fd("*Error !!*");
        console.log(_0x58063b);
      }
    });
  }
  const _0x50a54b = {};

  _0x50a54b.pattern = "ios";
  _0x50a54b.react = '🍎';
  _0x50a54b.dontAddCommandList = true;
  _0x50a54b.filename = __filename;
  cmd(_0x50a54b, async (_0x3f7411, _0x309034, _0x354097, {
    from: _0xc8273,
    q: _0xff9324,
    reply: _0x173d8c
  }) => {
    function _0x59a117(_0x3e0a00, _0x10c920, _0x451525, _0x356334, _0x3484a5) {
      return _0x222d(_0x451525 + 0x16e - 0x296, _0x3484a5);
    }
    const _0x21a199 = {
      'GFNOK': function (_0x10922a, _0x31bb7b) {
        return _0x10922a !== _0x31bb7b;
      },
      'lByYG': function (_0x2700b8, _0xc4dea5) {
        return _0x2700b8 !== _0xc4dea5;
      },
      'EXFSN': "MuqIp",
      'XdKQr': "LxCsN",
      'HHvnf': function (_0x27cda1, _0x377ec7) {
        return _0x27cda1(_0x377ec7);
      },
      'AjPHW': function (_0x829ec0, _0x3f186f) {
        return _0x829ec0 === _0x3f186f;
      },
      'SKlTn': "jidbs",
      'xZRly': function (_0x569dca, _0x3b134e) {
        return _0x569dca(_0x3b134e);
      }
    };
    function _0x40a1a8(_0x386f29, _0x42c559, _0x518640, _0x3d626d, _0x488432) {
      return _0x222d(_0x386f29 - 0x303 + 0x2aa, _0x488432);
    }
    function _0x5cc3a5(_0x3ed56a, _0x114a6f, _0x502be5, _0x27b33e, _0x5ab55f) {
      return _0x222d(_0x27b33e + 0x261 + 0x16c, _0x5ab55f);
    }
    function _0x3ae494(_0x5e3739, _0xcfea2c, _0x5d9690, _0x427ce4, _0x157455) {
      return _0x222d(_0x427ce4 - 0x6b + 0x208, _0xcfea2c);
    }
    function _0x29e46e(_0x373a46, _0x3244a2, _0x38f0fe, _0x4320af, _0x4f5e7c) {
      return _0x222d(_0x4f5e7c + 0xb5 + 0x2aa, _0x4320af);
    }
    try {
      const _0x4d1c2e = await fetchJson("https://api.maher-zubair.tech/details/ios");
      let _0x2e8f03 = "X B Y T E  I O S  N E W S\n\n*🔖 Title:* " + _0x4d1c2e.result.title + "\n*⛓️ Link:* " + _0x4d1c2e.result.link + "\n*📚 Description:* " + _0x4d1c2e.result.desc;
      const _0x44eca3 = {
        url: _0x4d1c2e.result.images
      };
      const _0x11a974 = {
        image: _0x44eca3,
        caption: _0x2e8f03
      };
      const _0x17f6e8 = {
        quoted: _0x354097
      };
      return await _0x3f7411.sendMessage(_0xc8273, _0x11a974, _0x17f6e8);
      const _0x5e8253 = {
        text: '✅',
        key: _0x354097.key
      };
      const _0x392836 = {
        react: _0x5e8253
      };
      await _0x3f7411.sendMessage(_0xc8273, _0x392836);
    } catch (_0xbad4d5) {
      l(_0xbad4d5);
    }
  });
  const _0x380bd5 = {
    pattern: "wabeta",
    react: '✔️',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x380bd5, async (_0x397443, _0x75b4f8, _0x11fbdc, {
    from: _0x126bec,
    q: _0x54ae83,
    reply: _0x4b6ed0
  }) => {
    function _0x37a739(_0x22500c, _0x3060ad, _0x4a5d97, _0x20c2a9, _0x426553) {
      return _0x222d(_0x22500c - 0x37 - 0x296, _0x4a5d97);
    }
    function _0x645319(_0x126ea6, _0x3eaf8b, _0x2f9f4f, _0x31fe69, _0x29e053) {
      return _0x222d(_0x126ea6 - 0x11c - 0x296, _0x2f9f4f);
    }
    const _0x41a81a = {
      'qfPZr': function (_0x4ebf9e) {
        return _0x4ebf9e();
      },
      'RZCou': function (_0x1479b0, _0x23c282) {
        return _0x1479b0(_0x23c282);
      },
      'FcRbD': function (_0x3aba9c, _0x2ecf70) {
        return _0x3aba9c(_0x2ecf70);
      },
      'KLQbD': function (_0x84efeb, _0x19299b) {
        return _0x84efeb === _0x19299b;
      },
      'VHyNl': "Hxcpf",
      'yOxAd': function (_0x4c0900, _0x476afe) {
        return _0x4c0900 === _0x476afe;
      },
      'SMols': "QHKkI"
    };
    function _0x49a42b(_0x466d30, _0x72dcb8, _0x47df2c, _0x207044, _0x1722d6) {
      return _0x222d(_0x466d30 - 0x1e2 + 0x3e4, _0x72dcb8);
    }
    function _0x13a362(_0x34cace, _0x2fe7ff, _0x247710, _0x1c7af5, _0x3d53b1) {
      return _0x222d(_0x247710 + 0xbb + 0x2aa, _0x1c7af5);
    }
    function _0x29342d(_0xe1eb28, _0x337e96, _0x2bdd67, _0x1491c0, _0xf7fdf6) {
      return _0x222d(_0x337e96 - 0x29 + 0x3e4, _0xe1eb28);
    }
    try {
      const _0x19b29e = await fetchJson("https://api.maher-zubair.tech/details/wabetainfo");
      let _0x51c7d9 = "X - B Y T E - W A - B E T A - N E W S\n\n*🥏 Title :* " + _0x19b29e.result.title + "\n*📅 Date :* " + _0x19b29e.result.date + "\n*🖥️ Platform :* " + _0x19b29e.result.subtitle + "\n*🔗 URL :* " + _0x19b29e.result.link + "\n*🗞️ Short Desc :* " + _0x19b29e.result.desc;
      const _0x549bd1 = {
        url: _0x19b29e.result.image
      };
      const _0x165ef3 = {
        image: _0x549bd1,
        caption: _0x51c7d9
      };
      const _0x54d238 = {
        quoted: _0x11fbdc
      };
      return await _0x397443.sendMessage(_0x126bec, _0x165ef3, _0x54d238);
      const _0x30005a = {
        text: '✅',
        key: _0x11fbdc.key
      };
      const _0x398273 = {
        react: _0x30005a
      };
      await _0x397443.sendMessage(_0x126bec, _0x398273);
    } catch (_0x37db6d) {
      l(_0x37db6d);
    }
  });
  const _0x40cd72 = {};
  function _0x3ff1bb(_0x326a9f, _0x5f1a54, _0xcbb524, _0x5c50d6, _0x33fbe9) {
    return _0x222d(_0x5f1a54 + 0x3e4, _0x326a9f);
  }
  _0x40cd72.pattern = "nasanews";
  _0x40cd72.react = '📡';
  _0x40cd72.dontAddCommandList = true;
  _0x40cd72.filename = __filename;
  cmd(_0x40cd72, async (_0x355cf0, _0x2a25db, _0x417c41, {
    from: _0x4986be,
    q: _0x38b155,
    reply: _0x5682cd
  }) => {
    function _0x4407e2(_0x4e4f21, _0x5674b8, _0x32d059, _0x529c41, _0x260b9d) {
      return _0x222d(_0x529c41 - 0x356 + 0x208, _0x5674b8);
    }
    function _0x1ba70e(_0x5417d5, _0x2963e3, _0x2eb044, _0x5d1c1a, _0x5f5af6) {
      return _0x222d(_0x5417d5 + 0x1b0 - 0x296, _0x5f5af6);
    }
    function _0x1c3314(_0x2ba1ab, _0x40ec6f, _0x2c2f59, _0x32479f, _0x183c3a) {
      return _0x222d(_0x2ba1ab - 0x516 + 0x3e4, _0x40ec6f);
    }
    const _0x168504 = {
      'WQOpy': "1|3|2|4|0",
      'DpRis': function (_0x2de612, _0x37e9ff) {
        return _0x2de612(_0x37e9ff);
      },
      'DmrhG': function (_0x568282, _0x26caa2) {
        return _0x568282 !== _0x26caa2;
      },
      'jRFus': "dlTXn",
      'jprpe': "yVSGj",
      'KUSLJ': function (_0x209ae3, _0x40ed79) {
        return _0x209ae3(_0x40ed79);
      },
      'sDbpg': function (_0x540ae9, _0x34f746) {
        return _0x540ae9 === _0x34f746;
      },
      'epAjd': "cfHxn",
      'FxVuO': function (_0x220a32, _0x3957ab) {
        return _0x220a32(_0x3957ab);
      }
    };
    function _0x173ab3(_0x5dce89, _0x18c4e2, _0x1bec66, _0x55b766, _0x2a02a6) {
      return _0x222d(_0x2a02a6 - 0x2b1 + 0x3e4, _0x18c4e2);
    }
    function _0x933a67(_0x2dd4aa, _0x144064, _0x1ab4c3, _0x4407b2, _0x85208c) {
      return _0x222d(_0x1ab4c3 - 0x2bd + 0x16c, _0x144064);
    }
    try {
      const _0x15f0ce = await fetchJson("https://api.maher-zubair.tech/details/nasa");
      const _0x5f3746 = "X - B Y T E - N A S A - N E W S\n\n🪄 𝙏𝙄𝙏𝙇𝙀: " + _0x15f0ce.result.title + "\n📆𝘿𝘼𝙏𝙀: " + _0x15f0ce.result.date + "\n🚀 𝙑𝙀𝙍𝙎𝙄𝙊𝙉: " + _0x15f0ce.result.service_version + "\n🔖𝙐𝙍𝙇: " + _0x15f0ce.result.url + "\n📝 𝙀𝙓𝙋𝙇𝘼𝙉𝘼𝙏𝙄𝙊𝙉: " + _0x15f0ce.result.explanation;
      const _0x1b618d = {
        url: _0x15f0ce.result.hdurl
      };
      const _0x581780 = {
        image: _0x1b618d,
        caption: _0x5f3746
      };
      const _0x461c5d = {
        quoted: _0x417c41
      };
      return _0x355cf0.sendMessage(_0x4986be, _0x581780, _0x461c5d);
      const _0x1e391d = {
        text: '✅',
        key: _0x417c41.key
      };
      const _0x126d0b = {
        react: _0x1e391d
      };
      await _0x355cf0.sendMessage(_0x4986be, _0x126d0b);
    } catch (_0x383630) {
      l(_0x383630);
    }
  });
  const _0x8b831b = {
    pattern: "technews",
    react: '📡',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x8b831b, async (_0x4ac683, _0x17369e, _0x1b7f99, {
    from: _0x2a44df,
    q: _0x5781ac,
    reply: _0x1bd983
  }) => {
    function _0x30bc2a(_0x4f5171, _0x5583e9, _0x1d49bb, _0x55d26b, _0x271a2b) {
      return _0x222d(_0x1d49bb - 0x321 + 0x16c, _0x5583e9);
    }
    function _0x1146ae(_0x1a566d, _0x37c2ca, _0x3fd9b2, _0x1bf794, _0x3a6d9c) {
      return _0x222d(_0x1bf794 - 0x23e + 0x2aa, _0x37c2ca);
    }
    function _0x4105b6(_0x539445, _0x25cbc9, _0x588e3b, _0x19395f, _0x2a22e7) {
      return _0x222d(_0x539445 + 0xd8 - 0x296, _0x2a22e7);
    }
    function _0x48cc3a(_0x28acab, _0x10294d, _0x32f317, _0x545e7a, _0x459076) {
      return _0x222d(_0x545e7a - 0x57 - 0x296, _0x28acab);
    }
    function _0x3f1789(_0x449201, _0x1126ee, _0x4a0dc9, _0x2c0f58, _0x179de1) {
      return _0x222d(_0x449201 - 0x32b + 0x208, _0x179de1);
    }
    const _0x18851b = {
      'VRFMQ': "Select you want to see news",
      'GSVPB': function (_0x25a61a) {
        return _0x25a61a();
      },
      'KQIDQ': function (_0x3cad6d, _0x1589d6) {
        return _0x3cad6d(_0x1589d6);
      },
      'RpiSG': function (_0x33d6a8, _0x33a818) {
        return _0x33d6a8(_0x33a818);
      },
      'QPJNM': function (_0x173041, _0x55195c) {
        return _0x173041 === _0x55195c;
      },
      'WUxov': "mXjWR",
      'mkBHx': "tech-news-scraper",
      'NosDa': function (_0x105fe5, _0x217970) {
        return _0x105fe5 < _0x217970;
      },
      'CvTxq': function (_0x1da286, _0x2489ca) {
        return _0x1da286 !== _0x2489ca;
      },
      'JhxwI': "enMxc",
      'lQGYr': "2|4|0|1|3",
      'VIZDz': function (_0x36d98e, _0x5dcbbf) {
        return _0x36d98e(_0x5dcbbf);
      },
      'BPeLe': function (_0x41e03f, _0x4f259d) {
        return _0x41e03f !== _0x4f259d;
      },
      'blISw': "fhmCJ",
      'OybvE': "nPMqE",
      'pwNhG': function (_0x535bd8, _0x4bb8d7) {
        return _0x535bd8(_0x4bb8d7);
      }
    };
    try {
      const _0xe7ddac = require("tech-news-scraper");
      const _0x32f91c = await _0xe7ddac.allNews();
      let _0x66b63f = "👨‍💻 ＶＡＪＩＲＡ ＴＥＣＨ ＮＥＷＳ 👨‍💻\n\n";
      for (let _0x726ab0 = 0; _0x726ab0 < 16; _0x726ab0++) {
        _0x66b63f += "*⛓️ No:* " + _0x32f91c.result[_0x726ab0].no + "\n";
        _0x66b63f += "*📃 Title:* " + _0x32f91c.result[_0x726ab0].title + "\n";
        _0x66b63f += "*📚 CatName:* " + _0x32f91c.result[_0x726ab0].catname + "\n";
        _0x66b63f += "*🕒 Time:* " + _0x32f91c.result[_0x726ab0].date + "\n";
        _0x66b63f += "*📎 Link:* " + _0x32f91c.result[_0x726ab0].link + "\n\n--------------------------------------------\n\n\n";
      }
      return await _0x1bd983(_0x66b63f);
      const _0x3ffdf6 = {
        url: _0x32f91c.result[i].img
      };
      const _0xd11cc9 = {
        image: _0x3ffdf6,
        caption: _0x66b63f
      };
      const _0x204598 = {
        quoted: _0x1b7f99
      };
      return await _0x4ac683.sendMessage(_0x2a44df, _0xd11cc9, _0x204598);
      const _0xbcb038 = {
        text: '✅',
        key: _0x1b7f99.key
      };
      const _0x5bef43 = {
        react: _0xbcb038
      };
      await _0x4ac683.sendMessage(_0x2a44df, _0x5bef43);
    } catch (_0x10cb17) {
      _0x1bd983();
      l(_0x10cb17);
    }
  });
  const _0x926436 = {
    pattern: "sirasanews",
    react: "🎙️",
    dontAddCommandList: true
  };
  function _0x1ad359(_0x4281ad, _0x5ea0e9, _0x2b34f1, _0xe1617a, _0x4c8c2e) {
    return _0x222d(_0x4281ad + 0x2aa, _0x5ea0e9);
  }
  _0x926436.filename = __filename;
  cmd(_0x926436, async (_0x7b5551, _0x188a6d, _0x1a4d57, {
    from: _0x13af31,
    q: _0x2d7c42,
    reply: _0x9012f7
  }) => {
    const _0x12b9f7 = {
      'PmDAE': function (_0x114d4e) {
        return _0x114d4e();
      },
      'pLCzB': function (_0x265e84, _0x2acd11) {
        return _0x265e84 !== _0x2acd11;
      },
      'rcwuw': "vagoq",
      'lBQmC': "NfatT",
      'WUghI': function (_0x602be7, _0x10c767) {
        return _0x602be7(_0x10c767);
      }
    };
    const _0x3715ca = await sirasanews();
    function _0x1968f2(_0x301346, _0x4a5bdf, _0x3fd638, _0x147ced, _0x276345) {
      return _0x222d(_0x3fd638 + 0x240 + 0x16c, _0x301346);
    }
    function _0x241d88(_0x2f5814, _0x55f8ae, _0x15e479, _0x147d82, _0x956a30) {
      return _0x222d(_0x147d82 - 0x41e + 0x208, _0x956a30);
    }
    function _0x875794(_0x37fdc4, _0x4bf271, _0x1bbe3c, _0x49d762, _0x43c3ba) {
      return _0x222d(_0x49d762 - 0x4e + 0x3e4, _0x1bbe3c);
    }
    function _0xd900f0(_0x102d7c, _0x161bd4, _0xb0c31f, _0x4d25b8, _0x198e6a) {
      return _0x222d(_0xb0c31f + 0xe1 + 0x16c, _0x102d7c);
    }
    function _0x26597b(_0x580702, _0x2b6400, _0x168648, _0x597b59, _0x5382a1) {
      return _0x222d(_0x580702 - 0x2da + 0x16c, _0x2b6400);
    }
    try {
      const _0x31cecf = "⛶ X - B Y T E - S I R A S A  N E W S ⛶    \n🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* " + _0x3715ca.result.title + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔸𝕋𝔼 𝔸ℕ𝔻 𝕋𝕀𝕄𝔼* : " + _0x3715ca.result.dateandtime + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* " + _0x3715ca.result.description + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* " + _0x3715ca.result.link;
      const _0x11880c = {
        url: _0x3715ca.result.image
      };
      const _0x1acc21 = {
        image: _0x11880c,
        caption: _0x31cecf
      };
      const _0x2ca9b4 = {
        quoted: _0x1a4d57
      };
      await _0x7b5551.sendMessage(_0x13af31, _0x1acc21, _0x2ca9b4);
      const _0x450310 = {
        text: '✅',
        key: _0x1a4d57.key
      };
      const _0x3717ba = {
        react: _0x450310
      };
      await _0x7b5551.sendMessage(_0x13af31, _0x3717ba);
    } catch (_0x1ea765) {
      _0x9012f7();
      l(_0x1ea765);
    }
  });
  const _0xefb52c = {
    pattern: "esananews",
    react: "🎙️"
  };
  function _0x188e75(_0x4c5faf, _0x203345, _0xb6ba4, _0x4d42c7, _0xc8019d) {
    return _0x222d(_0xc8019d + 0x16c, _0x4d42c7);
  }
  _0xefb52c.dontAddCommandList = true;
  _0xefb52c.filename = __filename;
  cmd(_0xefb52c, async (_0xd80dde, _0x30e153, _0x4e7da9, {
    from: _0x2801b1,
    q: _0x34d868,
    reply: _0x18826d
  }) => {
    function _0x525103(_0x3f5186, _0x3501a3, _0x3e5167, _0x42cdcf, _0x4a3e33) {
      return _0x222d(_0x4a3e33 + 0x20d - 0x296, _0x42cdcf);
    }
    function _0x393d62(_0x56ad9a, _0x2e6b4f, _0x5e4edd, _0x42fd5d, _0x351c52) {
      return _0x222d(_0x2e6b4f - 0x10 + 0x16c, _0x56ad9a);
    }
    function _0x3a10f1(_0xe360c4, _0x245480, _0xf0f4df, _0x40c594, _0x5b898e) {
      return _0x222d(_0xf0f4df + 0x12a - 0x296, _0xe360c4);
    }
    const _0x36d479 = {
      'bhGXL': function (_0x462acd, _0x3d5283) {
        return _0x462acd || _0x3d5283;
      },
      'RMpAv': function (_0x3c87ee) {
        return _0x3c87ee();
      },
      'DdPNR': function (_0x28c84c, _0x1ce860) {
        return _0x28c84c(_0x1ce860);
      }
    };
    function _0x5ef2e1(_0x4c4e1e, _0x1d4f1b, _0x2e7dfd, _0x3f38b6, _0x473130) {
      return _0x222d(_0x2e7dfd - 0x45b + 0x16c, _0x1d4f1b);
    }
    function _0x239462(_0x15da7f, _0x2bb2d9, _0x575010, _0x2415d2, _0x495c11) {
      return _0x222d(_0x15da7f + 0x62e - 0x296, _0x2415d2);
    }
    try {
      const _0x75bb2 = await api.latest_id();
      const _0x4eb708 = _0x75bb2.results.news_id;
      let _0x1d38ce = _0x34d868 || _0x4eb708;
      const _0x401ba9 = await api.news(_0x1d38ce);
      const _0x55f68a = _0x401ba9.results;
      const _0x4d0e4d = {
        url: _0x55f68a.COVER
      };
      const _0x575cfe = {
        image: _0x4d0e4d,
        caption: "\n*┠─❲ 👩🏻‍🎨 X - B Y T E 🗞️❳* \n\n*┃◉* *⇨ ᴛɪᴛᴇʟ :*\n " + _0x55f68a.TITLE + "\n\n*┃◉* *⇨ ᴅᴀᴛᴇ :*\n " + _0x55f68a.PUBLISHED + "\n\n*┃◉* *⇨ ᴜʀʟ :*\n " + _0x55f68a.URL + "\n\n*┃◉* *⇨ Description :*\n " + _0x55f68a.DESCRIPTION + "\n\n*𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚅𝙰𝙹𝙸𝚁𝙰 𝚈𝚃 ®*\n\n"
      };
      const _0x28dac8 = {
        quoted: _0x4e7da9
      };
      const _0x47e7a9 = await _0xd80dde.sendMessage(_0x2801b1, _0x575cfe, _0x28dac8);
      const _0x54ef73 = {
        text: '✅',
        key: _0x4e7da9.key
      };
      const _0x3d2746 = {
        react: _0x54ef73
      };
      await _0xd80dde.sendMessage(_0x2801b1, _0x3d2746);
    } catch (_0x3d2c6f) {
      _0x18826d();
      l(_0x3d2c6f);
    }
  });
  const _0x2b63e2 = {
    pattern: "derananews",
    react: "🎙️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x2b63e2, async (_0x5a4a84, _0x2e82e1, _0x5b1bdf, {
    from: _0x956a7c,
    q: _0x9e4189,
    reply: _0x27797f
  }) => {
    function _0x7eaa31(_0x52df3e, _0x269e78, _0xf161a5, _0x26e9f4, _0x1accdd) {
      return _0x222d(_0x1accdd + 0xfd - 0x296, _0x269e78);
    }
    function _0x122ce1(_0x29d660, _0xe8f816, _0x27ad66, _0x2c5087, _0x173f54) {
      return _0x222d(_0xe8f816 + 0xe2 + 0x2aa, _0x173f54);
    }
    const _0x6116c5 = {
      'FXITY': function (_0x5412e6) {
        return _0x5412e6();
      },
      'XQqQO': function (_0x5c2d9a, _0x1af128) {
        return _0x5c2d9a(_0x1af128);
      }
    };
    const _0x181ef4 = await derananews();
    function _0x3e847f(_0x4f6781, _0x4eaba0, _0x574514, _0x18cb13, _0xf0f09b) {
      return _0x222d(_0x574514 - 0x14c + 0x16c, _0x18cb13);
    }
    function _0x43af9b(_0x1df03a, _0x35ae4d, _0x289c89, _0x378714, _0x4ef21f) {
      return _0x222d(_0x378714 + 0x122 - 0x296, _0x4ef21f);
    }
    function _0x5532da(_0x2663b3, _0x19c96d, _0x419517, _0x3fe736, _0x52ce26) {
      return _0x222d(_0x19c96d - 0x255 + 0x2aa, _0x52ce26);
    }
    try {
      const _0x2d7630 = " X - B Y T E - D E R A N  N E W S\n    \n🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* " + _0x181ef4.title + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* " + _0x181ef4.link + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* " + _0x181ef4.description;
      const _0x23e410 = {
        url: _0x181ef4.image
      };
      const _0x53767f = {
        image: _0x23e410,
        caption: _0x2d7630
      };
      const _0x2f581f = {
        quoted: _0x5b1bdf
      };
      await _0x5a4a84.sendMessage(_0x956a7c, _0x53767f, _0x2f581f);
      const _0x2b3185 = {
        text: '✅',
        key: _0x5b1bdf.key
      };
      const _0x2f9afe = {
        react: _0x2b3185
      };
      await _0x5a4a84.sendMessage(_0x956a7c, _0x2f9afe);
    } catch (_0x2472a5) {
      _0x27797f();
      l(_0x2472a5);
    }
  });
  const _0x28c113 = {
    pattern: "hirunews",
    react: '🔖',
    dontAddCommandList: true,
    filename: __filename
  };
  function _0x443b25(_0x440cc6, _0x453ae9, _0x5a7b99, _0x4535b0, _0x52d59b) {
    return _0x222d(_0x5a7b99 + 0x208, _0x453ae9);
  }
  cmd(_0x28c113, async (_0x1e570a, _0x2222b8, _0x42ce4, {
    from: _0x2fa092,
    q: _0x5f57b7,
    reply: _0x4cebc5
  }) => {
    function _0x523874(_0x5a7c50, _0x3df52a, _0x3b238d, _0x13a094, _0x411f56) {
      return _0x222d(_0x411f56 - 0x2b5 + 0x16c, _0x5a7c50);
    }
    function _0x1582ce(_0x2516b3, _0x1fd384, _0x422859, _0xd04467, _0x1f50b2) {
      return _0x222d(_0x1fd384 - 0x529 + 0x3e4, _0xd04467);
    }
    function _0x5b62bf(_0x2bac07, _0x30234b, _0x5f0e26, _0x2d6784, _0x5f1846) {
      return _0x222d(_0x5f0e26 + 0x8a + 0x16c, _0x30234b);
    }
    function _0x86fb1f(_0x403740, _0x45de4d, _0x5a2fb9, _0x52686c, _0x234327) {
      return _0x222d(_0x5a2fb9 - 0x2e9 + 0x3e4, _0x45de4d);
    }
    const _0x246132 = {
      'YiHHv': function (_0x550842, _0x1f4d54) {
        return _0x550842(_0x1f4d54);
      },
      'QyQTE': "hirunews-scrap",
      'hkFAD': function (_0x4f1048) {
        return _0x4f1048();
      }
    };
    function _0x59a498(_0x460fc0, _0x2d8b52, _0x46aae3, _0x3cfec2, _0x3ae8eb) {
      return _0x222d(_0x3cfec2 - 0x234 + 0x208, _0x460fc0);
    }
    try {
      const _0x38e13f = require("hirunews-scrap");
      var _0x5111b6 = new _0x38e13f();
      const _0x4a4cf5 = await _0x5111b6.MainNews();
      const _0x26419f = _0x4a4cf5.results;
      const _0x3d5f71 = _0x26419f.title;
      const _0x28fd70 = _0x26419f.news;
      const _0x38927e = _0x26419f.date;
      const _0x4550ba = _0x26419f.thumb;
      const _0x2d47b1 = {
        url: _0x4550ba
      };
      const _0x3f9e1d = {
        image: _0x2d47b1,
        caption: "\n X - B Y T E - H I R U N  N E W S\n\n📍➣*" + _0x3d5f71 + "* \n●━━━━━━━━━━━━━━━━━━━━━●  \n📃➣" + _0x28fd70 + " \n●━━━━━━━━━━━━━━━━━━━━━● \n📅➣" + _0x38927e + "\n●━━━━━━━━━━━━━━━━━━━━━●\n\n🗞️ *News From hirunews.lk*\n\n🔗 *Create By Hamza*\n\n📍 *SL News*\n\n\n●━━━━━━━━━━━━━━━━━━━━━●"
      };
      const _0x1aac60 = {
        quoted: _0x42ce4
      };
      const _0x42b7d7 = await _0x1e570a.sendMessage(_0x2fa092, _0x3f9e1d, _0x1aac60);
      const _0x5d3f72 = {
        text: '📰',
        key: _0x42b7d7.key
      };
      const _0x56f7f9 = {
        react: _0x5d3f72
      };
      await _0x1e570a.sendMessage(_0x2fa092, _0x56f7f9);
    } catch (_0x377837) {
      _0x4cebc5();
      l(_0x377837);
    }
  });
  const _0x4f56f7 = {
    pattern: "cricketnews",
    react: "🎙️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x4f56f7, async (_0x58b3e9, _0x5b5a2f, _0x3453a0, {
    from: _0x2e7ee0,
    q: _0x49485a,
    reply: _0x3e4163
  }) => {
    function _0x1c76c3(_0x2a0914, _0x12050b, _0x305bd7, _0x2c7e6d, _0x47fa07) {
      return _0x222d(_0x2c7e6d - 0x418 + 0x16c, _0x305bd7);
    }
    const _0x27e6b7 = {
      'wMyYs': function (_0x37fb3d, _0x2f0e40) {
        return _0x37fb3d(_0x2f0e40);
      },
      'DqXUI': "https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78",
      'zMrlr': function (_0x37835b, _0x5a7397) {
        return _0x37835b < _0x5a7397;
      },
      'nBrEJ': function (_0x385b9a, _0x4d3a6d) {
        return _0x385b9a + _0x4d3a6d;
      },
      'kuEgn': function (_0x572abb, _0x3e0c46) {
        return _0x572abb + _0x3e0c46;
      },
      'veWyt': "\n*Match Name  :* ",
      'GNuoe': "\n*Match Status  :* ",
      'WKNox': "\n*Match  Date   :* ",
      'dwvjX': function (_0x88eb99, _0x4e0aea) {
        return _0x88eb99 + _0x4e0aea;
      },
      'fjKTR': "\n*Match Started :* ",
      'hJugs': "\n*Match Ended:* ",
      'yDMIp': function (_0x2781aa, _0x3ad7b8) {
        return _0x2781aa(_0x3ad7b8);
      },
      'ICHVM': function (_0x572632) {
        return _0x572632();
      }
    };
    function _0x47797a(_0x2d16a3, _0x279386, _0x415c80, _0x432821, _0x1b8506) {
      return _0x222d(_0x415c80 - 0x127 - 0x296, _0x432821);
    }
    function _0x118f2b(_0x254f9b, _0x5a0626, _0x266d44, _0x5f5544, _0x57ad08) {
      return _0x222d(_0x57ad08 - 0x379 + 0x3e4, _0x266d44);
    }
    function _0x44e774(_0x3d5378, _0x1cd58d, _0x5e1c44, _0x5060c3, _0x354d11) {
      return _0x222d(_0x5e1c44 + 0x5b2 - 0x296, _0x3d5378);
    }
    function _0x5aec1b(_0x52e0f0, _0xce442a, _0x2f93bc, _0x80b60d, _0x22e93d) {
      return _0x222d(_0x80b60d - 0x5c8 + 0x3e4, _0x52e0f0);
    }
    try {
      _0x3e4163("*_Please Wait, Getting Cricket Info_*");
      const _0x468265 = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78");
      const _0x190e36 = await _0x468265.json();
      console.log(_0x190e36);
      for (let _0x377b05 = 0; _0x377b05 < _0x190e36.data.length; _0x377b05++) {
        let _0x2678d3 = _0x377b05 + 1;
        _0x49485a += "\n*--------------------- MATCH " + _0x377b05 + "-------------------*";
        _0x49485a += "\n*Match Name  :* " + _0x190e36.data[_0x377b05].name;
        _0x49485a += "\n*Match Status  :* " + _0x190e36.data[_0x377b05].status;
        _0x49485a += "\n*Match  Date   :* " + _0x190e36.data[_0x377b05].dateTimeGMT;
        _0x49485a += "\n*Match Started :* " + _0x190e36.data[_0x377b05].matchStarted;
        _0x49485a += "\n*Match Ended:* " + _0x190e36.data[_0x377b05].matchEnded;
      }
      return await _0x3e4163(_0x49485a);
      const _0x1dd040 = {
        text: '✅',
        key: _0x3453a0.key
      };
      const _0x4f2808 = {
        react: _0x1dd040
      };
      await _0x58b3e9.sendMessage(_0x2e7ee0, _0x4f2808);
    } catch (_0x244206) {
      _0x3e4163();
      l(_0x244206);
    }
  });
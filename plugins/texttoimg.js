(function (_0x5317b2, _0x543b10) {
    const _0x33fd16 = _0x5317b2();
    while (true) {
      try {
        const _0x576bb1 = -parseInt(_0x3f3b(314, '1FIB')) / 1 + parseInt(_0x3f3b(549, 'TiOu')) / 2 + -parseInt(_0x3f3b(567, 's4D@')) / 3 * (-parseInt(_0x3f3b(446, 'Ydye')) / 4) + -parseInt(_0x3f3b(682, '!U4C')) / 5 * (-parseInt(_0x3f3b(717, '4RGt')) / 6) + -parseInt(_0x3f3b(802, 'JP)o')) / 7 + parseInt(_0x3f3b(698, '5]wZ')) / 8 + -parseInt(_0x3f3b(622, 'mhd@')) / 9 * (parseInt(_0x3f3b(619, '91^$')) / 10);
        if (_0x576bb1 === _0x543b10) {
          break;
        } else {
          _0x33fd16.push(_0x33fd16.shift());
        }
      } catch (_0x3e9eaf) {
        _0x33fd16.push(_0x33fd16.shift());
      }
    }
  })(_0x2d29, 936230);
  const config = require("../settings");
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
    fetchJson
  } = require("../lib/functions");
  const _0x576a56 = {
    pattern: "texttoimgv1",
    react: '🤖'
  };
  function _0x4b4e4c(_0x15a4a1, _0x3f473a, _0x183412, _0x35508a, _0x50dcf1) {
    return _0x3f3b(_0x50dcf1 - 0x11f, _0x183412);
  }
  _0x576a56.alias = ["texttoimagev1", "toimagev1", "t2iv1"];
  _0x576a56.dontAddCommandList = true;
  _0x576a56.filename = __filename;
  cmd(_0x576a56, async (_0x298406, _0x1d92ad, _0x2778a5, {
    from: _0x1b7c50,
    l: _0x23e111,
    prefix: _0x41fcee,
    quoted: _0x1ee10a,
    body: _0x1ddd7a,
    isCmd: _0x8f9b42,
    command: _0x4ae15d,
    args: _0x1addb3,
    q: _0x3c5d4c,
    isGroup: _0x4128a4,
    sender: _0x46bd0b,
    senderNumber: _0x315c68,
    botNumber2: _0xe58fdb,
    botNumber: _0x47400d,
    pushname: _0x4ff0ca,
    isMe: _0xbe8acd,
    isOwner: _0x1f4063,
    groupMetadata: _0x2f3d9c,
    groupName: _0x2475f6,
    participants: _0x204396,
    groupAdmins: _0x2d9941,
    isBotAdmins: _0x52ecee,
    isAdmins: _0x9eb8e2,
    reply: _0x5a7b4b
  }) => {
    try {
      if (!_0x3c5d4c) {
        return _0x5a7b4b("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x2f14da = await fetchJson("https://hercai.onrender.com/v3/text2image?prompt=" + _0x3c5d4c);
      const _0x4c1be2 = {
        url: _0x2f14da.url
      };
      const _0x183c3a = {
        image: _0x4c1be2,
        caption: "Powered by TalkDrove"
      };
      const _0x373233 = {
        quoted: _0x1d92ad
      };
      _0x298406.sendMessage(_0x1b7c50, _0x183c3a, _0x373233);
    } catch (_0x299a12) {
      _0x5a7b4b("*Server is busy. Try again later.!*");
      _0x23e111(_0x299a12);
    }
  });
  const _0x257054 = {};
  _0x257054.pattern = "prodia";
  _0x257054.alias = ["texttoimage4", "toimage4", "t2i4"];
  _0x257054.react = '🤖';
  _0x257054.dontAddCommandList = true;
  _0x257054.filename = __filename;
  cmd(_0x257054, async (_0x5613bc, _0x163d6e, _0xdec551, {
    from: _0x2a1035,
    l: _0xd8ed1e,
    prefix: _0xc312a5,
    quoted: _0x522956,
    body: _0x326383,
    isCmd: _0x27e69b,
    command: _0x42e921,
    args: _0x4bb0e1,
    q: _0x55a683,
    isGroup: _0x28b382,
    sender: _0x3fabf9,
    senderNumber: _0x45e6f1,
    botNumber2: _0x52be16,
    botNumber: _0x2379d9,
    pushname: _0x21c4fb,
    isMe: _0x2d28bb,
    isOwner: _0x3d8d1a,
    groupMetadata: _0x293ed7,
    groupName: _0x2737b8,
    participants: _0x18f143,
    groupAdmins: _0x40bec5,
    isBotAdmins: _0x52c81b,
    isAdmins: _0x2f03c0,
    reply: _0xe8e8e
  }) => {
    try {
      if (!_0x55a683) {
        return _0xe8e8e("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x2cd5c7 = await fetchJson("https://hercai.onrender.com/prodia/text2image?prompt=" + _0x55a683);
      const _0x5d50db = {
        url: _0x2cd5c7.url
      };
      const _0xfdbb55 = {
        image: _0x5d50db,
        caption: "Powered by TalkDrove"
      };
      const _0x545466 = {
        quoted: _0x163d6e
      };
      _0x5613bc.sendMessage(_0x2a1035, _0xfdbb55, _0x545466);
    } catch (_0x2edbcc) {
      _0xe8e8e("*Server is busy. Try again later.!*");
      _0xd8ed1e(_0x2edbcc);
    }
  });
  const _0x44b87a = {};
  function _0x3f3b(_0x42a5b7, _0x394d26) {
    const _0x5c3966 = _0x2d29();
    _0x3f3b = function (_0x2210fc, _0x492bfe) {
      _0x2210fc = _0x2210fc - 186;
      let _0x2a155b = _0x5c3966[_0x2210fc];
      if (_0x3f3b.xvdRuA === undefined) {
        var _0x1ba596 = function (_0x4494e2) {
          let _0x1aeb2f = '';
          let _0x315764 = '';
          let _0x4c040d = 0;
          let _0x47e54d;
          let _0x3b6e3a;
          for (let _0x4f9b78 = 0; _0x3b6e3a = _0x4494e2.charAt(_0x4f9b78++); ~_0x3b6e3a && (_0x47e54d = _0x4c040d % 4 ? _0x47e54d * 64 + _0x3b6e3a : _0x3b6e3a, _0x4c040d++ % 4) ? _0x1aeb2f += String.fromCharCode(255 & _0x47e54d >> (-2 * _0x4c040d & 6)) : 0) {
            _0x3b6e3a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x3b6e3a);
          }
          let _0x58c1fe = 0;
          for (let _0x14ae1d = _0x1aeb2f.length; _0x58c1fe < _0x14ae1d; _0x58c1fe++) {
            _0x315764 += '%' + ('00' + _0x1aeb2f.charCodeAt(_0x58c1fe).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x315764);
        };
        const _0x3b6596 = function (_0x8b1f5, _0xed0077) {
          let _0x4b3793 = [];
          let _0x218db0 = 0;
          let _0xe969da;
          let _0x1312a7 = '';
          _0x8b1f5 = _0x1ba596(_0x8b1f5);
          let _0x14f9c4;
          for (_0x14f9c4 = 0; _0x14f9c4 < 256; _0x14f9c4++) {
            _0x4b3793[_0x14f9c4] = _0x14f9c4;
          }
          for (_0x14f9c4 = 0; _0x14f9c4 < 256; _0x14f9c4++) {
            _0x218db0 = (_0x218db0 + _0x4b3793[_0x14f9c4] + _0xed0077.charCodeAt(_0x14f9c4 % _0xed0077.length)) % 256;
            _0xe969da = _0x4b3793[_0x14f9c4];
            _0x4b3793[_0x14f9c4] = _0x4b3793[_0x218db0];
            _0x4b3793[_0x218db0] = _0xe969da;
          }
          _0x14f9c4 = 0;
          _0x218db0 = 0;
          for (let _0x3389df = 0; _0x3389df < _0x8b1f5.length; _0x3389df++) {
            _0x14f9c4 = (_0x14f9c4 + 1) % 256;
            _0x218db0 = (_0x218db0 + _0x4b3793[_0x14f9c4]) % 256;
            _0xe969da = _0x4b3793[_0x14f9c4];
            _0x4b3793[_0x14f9c4] = _0x4b3793[_0x218db0];
            _0x4b3793[_0x218db0] = _0xe969da;
            _0x1312a7 += String.fromCharCode(_0x8b1f5.charCodeAt(_0x3389df) ^ _0x4b3793[(_0x4b3793[_0x14f9c4] + _0x4b3793[_0x218db0]) % 256]);
          }
          return _0x1312a7;
        };
        _0x3f3b.KPCvDP = _0x3b6596;
        _0x42a5b7 = arguments;
        _0x3f3b.xvdRuA = true;
      }
      const _0x504ae1 = _0x5c3966[0];
      const _0x5050c2 = _0x2210fc + _0x504ae1;
      const _0x465974 = _0x42a5b7[_0x5050c2];
      if (!_0x465974) {
        if (_0x3f3b.LMdnbY === undefined) {
          _0x3f3b.LMdnbY = true;
        }
        _0x2a155b = _0x3f3b.KPCvDP(_0x2a155b, _0x492bfe);
        _0x42a5b7[_0x5050c2] = _0x2a155b;
      } else {
        _0x2a155b = _0x465974;
      }
      return _0x2a155b;
    };
    return _0x3f3b(_0x42a5b7, _0x394d26);
  }
  function _0x1d8650(_0x394ed1, _0x324e6b, _0x5f3f37, _0xb56e9, _0x8e0a93) {
    return _0x3f3b(_0x8e0a93 + 0x189, _0x5f3f37);
  }
  _0x44b87a.pattern = "texttoimg2";
  _0x44b87a.alias = ["texttoimage2", "toimage2", "t2i2"];
  _0x44b87a.react = '🤖';
  _0x44b87a.dontAddCommandList = true;
  _0x44b87a.filename = __filename;
  cmd(_0x44b87a, async (_0x2663d3, _0x20324b, _0x2658cd, {
    from: _0x1a0818,
    l: _0x133bd9,
    prefix: _0x1842ff,
    quoted: _0x53c14c,
    body: _0x47f910,
    isCmd: _0x377da3,
    command: _0x5357e9,
    args: _0x1c8333,
    q: _0x3975af,
    isGroup: _0x44b061,
    sender: _0x3f5900,
    senderNumber: _0x2a0861,
    botNumber2: _0x4a7f75,
    botNumber: _0x43d74c,
    pushname: _0x88c097,
    isMe: _0x22f352,
    isOwner: _0x21555c,
    groupMetadata: _0x456f6c,
    groupName: _0x22697c,
    participants: _0x388967,
    groupAdmins: _0x23f291,
    isBotAdmins: _0x4c0143,
    isAdmins: _0x10038e,
    reply: _0x6ff636
  }) => {
    try {
      if (!_0x3975af) {
        return _0x6ff636("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x267e3c = await fetchJson("https://hercai.onrender.com/v2/text2image?prompt=" + _0x3975af);
      const _0x2ead2b = {
        url: _0x267e3c.url
      };
      const _0x47a7d4 = {
        image: _0x2ead2b,
        caption: "Powered by TalkDrove"
      };
      const _0x5f5348 = {
        quoted: _0x20324b
      };
      _0x2663d3.sendMessage(_0x1a0818, _0x47a7d4, _0x5f5348);
    } catch (_0x1e28fa) {
      _0x6ff636("*Server is busy. Try again later.!*");
      _0x133bd9(_0x1e28fa);
    }
  });
  const _0x49c264 = {};
  function _0x54f24d(_0x115bd6, _0x2aa8d8, _0x469fb5, _0x2b2366, _0x32da17) {
    return _0x3f3b(_0x115bd6 - 0x9, _0x469fb5);
  }
  _0x49c264.pattern = "texttoimg3";
  _0x49c264.alias = ["texttoimage3", "toimage3", "t2i3"];
  _0x49c264.react = '🤖';
  _0x49c264.dontAddCommandList = true;
  _0x49c264.filename = __filename;
  cmd(_0x49c264, async (_0x153008, _0xfbbed9, _0x22386b, {
    from: _0x9bc858,
    l: _0x4b72e4,
    prefix: _0x429e99,
    quoted: _0x1eefee,
    body: _0x1ff49a,
    isCmd: _0x388703,
    command: _0x19e9fc,
    args: _0x3aa946,
    q: _0x54fef7,
    isGroup: _0x2ad513,
    sender: _0x4a9b96,
    senderNumber: _0x3d371d,
    botNumber2: _0x12c175,
    botNumber: _0x1e251f,
    pushname: _0x3996db,
    isMe: _0x5eb975,
    isOwner: _0x23fa5a,
    groupMetadata: _0x3be08e,
    groupName: _0x4e0df6,
    participants: _0x2a5d00,
    groupAdmins: _0x1e5f1d,
    isBotAdmins: _0x5d185e,
    isAdmins: _0x4bbef0,
    reply: _0xaf88dc
  }) => {
    try {
      if (!_0x54fef7) {
        return _0xaf88dc("*Example: .imagine woman,hair cut colour red, full body, bokeh*");
      }
      let _0x3a2e0e = await fetchJson("https://hercai.onrender.com/v1/text2image?prompt=" + _0x54fef7);
      const _0x5a1bff = {
        url: _0x3a2e0e.url
      };
      const _0x212892 = {
        image: _0x5a1bff,
        caption: "Powered by TalkDrove"
      };
      const _0x271eab = {
        quoted: _0xfbbed9
      };
      _0x153008.sendMessage(_0x9bc858, _0x212892, _0x271eab);
    } catch (_0x39ae4e) {
      _0xaf88dc("*Server is busy. Try again later.!*");
      _0x4b72e4(_0x39ae4e);
    }
  });
  const _0x17aa6a = {
    pattern: "aemtv1",
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x17aa6a, async (_0x1b3a64, _0x2155a6, _0x101d7d, {
    from: _0x1ee15e,
    l: _0x5526dc,
    quoted: _0x3935aa,
    prefix: _0x3efeb7,
    body: _0x43fe99,
    isCmd: _0x4d4ddd,
    command: _0x12178b,
    args: _0x1ec4c4,
    q: _0x320d62,
    isGroup: _0x398d0c,
    sender: _0x5df5e4,
    senderNumber: _0x55ab1b,
    botNumber2: _0x2a93b7,
    botNumber: _0x1a4189,
    pushname: _0x404d4f,
    isMe: _0x41b6b2,
    isOwner: _0x511b6,
    groupMetadata: _0x157eeb,
    groupName: _0xa2ddf4,
    participants: _0x336d9a,
    groupAdmins: _0x239da4,
    isBotAdmins: _0x559af0,
    isAdmins: _0x14df35,
    reply: _0x3f154e
  }) => {
    try {
      if (!_0x320d62) {
        return _0x3f154e("*Please give me a url !*");
      }
      const _0x126ad7 = {
        url: "https://aemt.me/v1/text2img?text=" + _0x320d62
      };
      const _0x2c784e = {
        image: _0x126ad7,
        caption: "Powered by TalkDrove"
      };
      const _0x91c179 = {
        quoted: _0x2155a6
      };
      await _0x1b3a64.sendMessage(_0x1ee15e, _0x2c784e, _0x91c179);
      const _0x5ee812 = {
        text: '✅',
        key: _0x2155a6.key
      };
      const _0x3b43d2 = {
        react: _0x5ee812
      };
      await _0x1b3a64.sendMessage(_0x1ee15e, _0x3b43d2);
    } catch (_0xe73000) {
      _0x3f154e("*I can't get a screenshot. Try again later.*");
      console.log(_0xe73000);
    }
  });
  const _0x261bce = {
    pattern: "aemtv2",
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x261bce, async (_0x2b9cd4, _0x5ab950, _0x4f3d6a, {
    from: _0x2efacd,
    l: _0x3ba0b8,
    quoted: _0x2720c5,
    prefix: _0x4913a2,
    body: _0x5dc677,
    isCmd: _0x752099,
    command: _0x2d9f5b,
    args: _0x307fdf,
    q: _0x3fdc6e,
    isGroup: _0x1bf0cc,
    sender: _0x761aa5,
    senderNumber: _0x51cc1c,
    botNumber2: _0x3100eb,
    botNumber: _0x228b6b,
    pushname: _0x108cac,
    isMe: _0x34f9d5,
    isOwner: _0x3afce1,
    groupMetadata: _0xab2f05,
    groupName: _0x205545,
    participants: _0x133b32,
    groupAdmins: _0x59dc40,
    isBotAdmins: _0x53dade,
    isAdmins: _0x452b48,
    reply: _0x2b02ae
  }) => {
    try {
      if (!_0x3fdc6e) {
        return _0x2b02ae("*Please give me a url !*");
      }
      const _0x3deceb = {
        url: "https://aemt.me/v2/text2img?text=" + _0x3fdc6e
      };
      const _0xe3ab1c = {
        image: _0x3deceb,
        caption: "Powered by TalkDrove"
      };
      const _0x41660f = {
        quoted: _0x5ab950
      };
      await _0x2b9cd4.sendMessage(_0x2efacd, _0xe3ab1c, _0x41660f);
      const _0x374528 = {
        text: '✅',
        key: _0x5ab950.key
      };
      const _0x4178fe = {
        react: _0x374528
      };
      await _0x2b9cd4.sendMessage(_0x2efacd, _0x4178fe);
    } catch (_0x799e8f) {
      _0x2b02ae("*I can't get a screenshot. Try again later.*");
      console.log(_0x799e8f);
    }
  });
  const _0x1c55ba = {
    pattern: "aemtv3",
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x1c55ba, async (_0x35609c, _0x155b5f, _0x4e49fb, {
    from: _0x926eff,
    l: _0x448c3d,
    quoted: _0x36577e,
    prefix: _0x174792,
    body: _0xa75b09,
    isCmd: _0x23e661,
    command: _0x218a0e,
    args: _0x1fe9bc,
    q: _0x405eb2,
    isGroup: _0x3c200f,
    sender: _0x307f80,
    senderNumber: _0x13aa6e,
    botNumber2: _0x519ade,
    botNumber: _0xe5d0fb,
    pushname: _0x5bef6f,
    isMe: _0x3c84d3,
    isOwner: _0xdb47bc,
    groupMetadata: _0x1e3aa1,
    groupName: _0x154e9d,
    participants: _0x1e3eb8,
    groupAdmins: _0x31fe62,
    isBotAdmins: _0x51c6e4,
    isAdmins: _0x1327ae,
    reply: _0x238e38
  }) => {
    try {
      if (!_0x405eb2) {
        return _0x238e38("*Please give me a url !*");
      }
      const _0x5cde07 = {
        url: "https://aemt.me/v3/text2img?text=" + _0x405eb2
      };
      const _0x467dc3 = {
        image: _0x5cde07,
        caption: "Powered by TalkDrove"
      };
      const _0x4a42a8 = {
        quoted: _0x155b5f
      };
      await _0x35609c.sendMessage(_0x926eff, _0x467dc3, _0x4a42a8);
      const _0x453e1f = {
        text: '✅',
        key: _0x155b5f.key
      };
      const _0x2ed2a3 = {
        react: _0x453e1f
      };
      await _0x35609c.sendMessage(_0x926eff, _0x2ed2a3);
    } catch (_0x490e8f) {
      _0x238e38("*I can't get a screenshot. Try again later.*");
      console.log(_0x490e8f);
    }
  });
  const _0x28443e = {
    pattern: "aemtv4",
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
  };
  function _0x578173(_0x26051c, _0x2a0164, _0xf4aee6, _0x3059df, _0x191bd6) {
    return _0x3f3b(_0x3059df - 0x18c, _0x191bd6);
  }
  cmd(_0x28443e, async (_0x5b1093, _0x15c861, _0x4075dd, {
    from: _0x40edef,
    l: _0x1e5098,
    quoted: _0x2e7e4f,
    prefix: _0x4934af,
    body: _0x23f84e,
    isCmd: _0x2ed269,
    command: _0x4fb48c,
    args: _0x2f2fe3,
    q: _0x525832,
    isGroup: _0x36c7e6,
    sender: _0x556d75,
    senderNumber: _0x266992,
    botNumber2: _0x67582b,
    botNumber: _0x4117f1,
    pushname: _0x12d9dd,
    isMe: _0x4ef8ea,
    isOwner: _0xda59b6,
    groupMetadata: _0x5ed0dd,
    groupName: _0x209c7a,
    participants: _0x334edd,
    groupAdmins: _0x587529,
    isBotAdmins: _0xbb8b28,
    isAdmins: _0x42bc20,
    reply: _0x26ae6f
  }) => {
    try {
      if (!_0x525832) {
        return _0x26ae6f("*Please give me a url !*");
      }
      const _0x234443 = {
        url: "https://aemt.me/v4/text2img?text=" + _0x525832
      };
      const _0x170f9e = {
        image: _0x234443,
        caption: "Powered by TalkDrove"
      };
      const _0xa403b7 = {
        quoted: _0x15c861
      };
      await _0x5b1093.sendMessage(_0x40edef, _0x170f9e, _0xa403b7);
      const _0x447142 = {
        text: '✅',
        key: _0x15c861.key
      };
      const _0x4c4fd3 = {
        react: _0x447142
      };
      await _0x5b1093.sendMessage(_0x40edef, _0x4c4fd3);
    } catch (_0x3c3b33) {
      _0x26ae6f("*I can't get a screenshot. Try again later.*");
      console.log(_0x3c3b33);
    }
  });
  const _0x5e2035 = {
    pattern: "aemtv5",
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x5e2035, async (_0x2dbd43, _0x3dae6a, _0x29e1d1, {
    from: _0x1cdf11,
    l: _0x26bdd9,
    quoted: _0x5cba04,
    prefix: _0x578fe5,
    body: _0x4bd653,
    isCmd: _0x2b09c5,
    command: _0x5ee1e0,
    args: _0x1249af,
    q: _0x52d4d5,
    isGroup: _0x25415d,
    sender: _0x50e206,
    senderNumber: _0x2c5a24,
    botNumber2: _0x3a1dd,
    botNumber: _0x1bf92b,
    pushname: _0x1077a8,
    isMe: _0x518212,
    isOwner: _0x426f56,
    groupMetadata: _0x18ea2f,
    groupName: _0x4ed9b8,
    participants: _0x4d6bf2,
    groupAdmins: _0x5c5f69,
    isBotAdmins: _0x138413,
    isAdmins: _0x20e8a5,
    reply: _0x404a59
  }) => {
    try {
      if (!_0x52d4d5) {
        return _0x404a59("*Please give me a url !*");
      }
      const _0x185481 = {
        url: "https://aemt.me/v5/text2img?text=" + _0x52d4d5
      };
      const _0x330cd8 = {
        image: _0x185481,
        caption: "Powered by TalkDrove"
      };
      const _0x45c48c = {
        quoted: _0x3dae6a
      };
      await _0x2dbd43.sendMessage(_0x1cdf11, _0x330cd8, _0x45c48c);
      const _0x34ce82 = {
        text: '✅',
        key: _0x3dae6a.key
      };
      const _0x197e00 = {
        react: _0x34ce82
      };
      await _0x2dbd43.sendMessage(_0x1cdf11, _0x197e00);
    } catch (_0x5914cc) {
      _0x404a59("*I can't get a screenshot. Try again later.*");
      console.log(_0x5914cc);
    }
  });
  const _0x4d3732 = {
    pattern: "aemtv6",
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
  };
  function _0x2d29() {
    const _0x47b48a = ['WQPAW6lcGCkI', 'WP4iWQRcU8kM', 'W592lafW', 'W6jPlCkxWP0', 'W4zUW6StW5VcLdxcKa', 'W6hdKSoxW4ldVW', 'x09l', 'W7tdKmo4cIi', 'CXBdPx52', 'W7j2W5RdHHu', 'vCkKFSo6WRddSCkSW4zWfSo6WQnv', 'C8o2W7yVW5q', 'mHZdOSoLqq', 'nb7cPa', 'lCo/zYmI', 'WR7cOSo+Emk3', '4BsVhCQ+YzrR', 'fcnD', 'xqtcS8o8WRC', 'oY4sr3K', 'W47dPwmRiG', 'qv/dImkcWOG', 'uWTujsS', 'dCkBvmo/zq', 'W6hdLCo0ztG', 'WOHfeva8', 'W4FdL8oJtIG', 'WQxcLCkDpt0', 'WQNcPCo5sJu', 'cSotW5dcQYG', 'tvFdLCkxWOy', 'W44+t8oUvW', 'WR7cPSoAymkL', 'DSoGchhcVq', 'l8oVW7JcOmob', 'tvFdJa', 'ySkLBSoLaG', 'uaOC', 'WQ7cQmoOEmoe', 'WQJdSSkMdG', 'W7/dHNO1da', 'kCoQeqC/', 'na8Er8oY', 'W7lcHCoAgwe', 'WQJcRSoRdG', 'WPijW6dcMCo/', 'eCkjbmo/zq', 'WPpcNCo6sCk7', 'WQZdG8kzmGq', 't8o2W6bkW5q', 'WO00DG', 'WRhcQmoP', 'eIWpCCoq', 'WPFcT8kTW5/dJq', 'WQmyW5W/W48', 'l1xcVSo+sq', 'gdOjjSox', 'lSovWRRcUCo8', 'B8kgjmkZfW', 'W5e2mHxdJG', 'W5S5W6y8W5S', 'WP12WOWZWPW', 'W7dcI0ZdQXa', 'WQdcVSo6amoY', 'bbizrmo7', 'jCo8nbSq', 'W67cR8okus4', 'h8kpvCkSDa', 'v8kqWPNdQ2W', 'W5rHW7tdTay', 'BmotW7lcUCkY', '8kwPNIpdGMNcTa', 'W7LLca', 'WQzAWRS', 'f1WvbZ4', 'hmolqcddQG', 'zmkwWOtdQW', 'qvVcISkvW5W', 'W6ldL8oG', 'vKlcMa', 'WRaes1tdMq', 'W7VdJZJdVe8', '8lQOJmkSabf9', 'W6xcQSobCY4', 'WOn2WOOHWP8', 'rqJcV8o2WPO', 'aeldGmkBWPS', 'kmkTCSoYqq', 'WQNcQ8o/Dmk3', 'brtdRCkGWQ0', 'WP7dGG3dRuK', '4BEkyCI7YyddLW', 'smkxEmoWiG', 'BXDvf2G', 'DmoJWR5kW4G', 'fWlcQColvdnmDdBdSmo6b8of', 'a8o6iCk5W4G', 'WP8RW4JcT8of', 'ChnosNC', 'q1FdTSkmdq', 'WPqPzq', 'W4Orwmk8sa', 'pSo+W7JcNmoa', 'W7bPgW', 'W7lcHCoAha', 'ehRcRSoSW6u', 'W6fLbSkiWP4', 'lCoYW7FdN8oy', 'awZcPCo5W7y', 'l8oOW4/cTmo9', 'WObfWP9fDq', 'uLFdOmkleq', 'sqvYetq', 'c8oJpZyr', 'eSoNiW', 'gGWgz0y', 'WP4mW6JcQSkK', 'rSobfmo8Aa', 'DmoojGKl', '8ykAICohgW7dUa', 'nW/cQCoHvW', '8yEAMeukbSoB', '4BsA4BAYW7lHT4pHTPu', 'W4jPhmkeWQW', 'oWqCFxm', 'hc8y', 'WQneWPiGWOC', 'WOCKW5dcRmkw', 'gmk9ESkTAG', 'pbxcPCoctq', 'hSoIh2tdVG', '8yYRQmkcW6xcVJS', 'sCk1g8k/W7a', 'ySkDBSoQ', 'sX1VWR45', 'W67cJmoiWO3dGq', 's8ovW5tdPxy', 'bhZcSSo5W6C', 'svXxWQ8I', 'pHFcTmoWvW', 'mr7cSCk+fa', 'ELpdNCkxWRS', 'WPnlhCoKBq', 'W458WRBcNg0', 'DHCn', 'vr3cQCkQWPi', 'WOJdSSkMdGm', 'nZuZFwa', 'W4OMz0ddRa', 'WP8XW4pcRSos', 'WQJcMmkwW5hdLq', 'WP1HWQJcNhO', 'EMLqsNC', 'W67cHSoEpcO', 'iCk4WR8lW7K', 'W6DZt8keWPG', 'h8kFWPFcOIm', 'B8kwWQBcVCoQ', 'W4BdS3O', 'W6PiW4OeW68', 'WRNcT8kitW', 'W4Guu8oita', 'WQKICv7dUq', 'W6hcLSkS', 'W7r+cSkxW5e', 'd1yk', 'WPKUWQaWW5a', 'Cmoum1ZcKG', 'j8k6smkWAW', 'WPrAW7xcV8o4', 'tvrrWR5R', 'W7HiW5yP', 'BHBdPwfR', 'W4GLW63dIdj2W4qsW6yEneW', 'W7tcRmo1yCkc', 'WOurmXfV', 'zmkrz8o5cG', 'AHFdVNPG', 'WRpdNSkZgZa', 'uCoqW6ODW44', 'omo0W7dcKSot', 'uCo/hdKC', 'W6xcSstdJJK', 'q35uWOmN', 'CSo0dW', 'YRdjJEg2KcZHT7S', 'WPbqW77dGLC', 'vvJdTCk4fa', 'k8kLWQK8W70', 's1HkWQ89', 'eCklg8oQia', 'WP/dGG3dRuK', 'WQaiW4/cRSkq', 'W5rJWO9qkq', 'cCootYhdVW', 'W7RdJmocrbu', 'WPu3W6S', 'CgvtwhG', 'smo/nH4O', 'W5RdRmoQrZG', 'W6vCaW', 'gmoStrpdRq', 'hmkowW', 'FHhdOM9I', 'smoQxbpcQa', 'W71+g8kvWOW', 'WPiZWRfvW68', 't8oQctvC', 'A8o2W6qEW7K', 'g8o5fW', 'cCoKv0FdPa', 'WODqWQu', 'W7ldSCoBsYO', 'rLja', 'YAViTUg3KSo44BAF', 'd8kyBCkCEa', 'hCobiW', 'fSk6w2jhWQ9vCdxdL8k3AHC', 'WQlcPSoJe8oO', 'WPfwWQ/cIL8', 'W4PPluhdSq', 'jYCSyNC', 'aSk1gCo8WQK', 'oSo+m3aS', 'W6NcGSocnt0', 'WOzycuuH', 'W4pcUaldNG0', 'WRBcOSo3', 'W6HhasON', 'WPCIBeNdLq', 'WOGNW6dcU8kf', 'W5jyW7ddKX8', 'tePVEMm', 'WQ7dSSk/gsm', 'W4ymgmoXqq', 'WPLdWRxcINO', 'W6tdGmoItGW', 'YRhjVEg3Umkv4BAA', 'AqyqaIm', 'iwlcM8oCW48', '4BAQWQdkL8UqDa', 'WPbfW7BcRSoL', 'W6ZcHsldGJ0', 'ASkKySo5nW', 'tCoqpCk/W6y', 'W65WlbXh', 'qCoZgwVcLq', 'Emo+fN/dRG', 'CSkrA8o6Bq', 'eGSqDCoz', 'WRLAWRRcKG', 'WOddNaZdLM4', 'tSoxf3VcSW', 'awZcPCo5', 'WOKrWRG', 'W4NcKCo6wdG', '8kIJRUkbIVcVS77dLog2Jog3QUg3TG', 'bbSnESoi', 'WQGFWPtdLmoN', 'W5LNWOiFWRS', 'rSkDzSo/la', 'v8kWwmoXoq', 'qSoHn0NcSq', 'pCkcsmo6zG', 'f8o0o8k5W6W', 't1HjWQGJ', 'WPWrWQVcOmoY', 'aW4d', '4BsU4Bs7WOxXH6kh4OgP8kAHKa', 'WPPJWPnA', 'eISqDCoz', 'W5rdW4KgW4i', 'dSkeCmkjxG', 'y8oYa2W', 'W6KtWPa', 'W7XaW553W74', 'WQRdRSo0qrO', 'tJJdS1HK', 'fc8CC8oB', 'vSoXdMdcRq', 'bmkQvxJcUW', 'WPO/W7W8W4e', 'h8ksE8kCtq', 'W7FcLIJdMH4', 'EapdOxPS', 'yWjEaqO', 'WRNdKCoPuJu', 'W7qQhmkgWO0', 'yxjQBxu', 'WQ/dSSkWhHO', 'WOHShSoUwW', 'pwZcR8oUW6m', 'emkbxa', 'WQOZWOZdRSoD', 'uSo5atqB', 'WP96WRxcI28', 'WP8ZW43cQ8kE', 'W6/cL0ZdQ1C', 'W5vOW6JdKXS', 'W4Gzwmk7ua', 'W4fsW6JdTba', 'WOrbWPnfiG', 'WP0zW70fW5K', 'zvtdSSoMta', 'WOOZua', 'W7bpW4i1W6q', 'uLFdOmkl', 'fCoSB8kSW64', 'v8ovW5NcQti', 'BSoFWR/cVW', 'WOfNvb8', 'f8o6xMGK', '8jEZO+kbO/cRK4NcVUg1H+g0Iog1HW', 'tCk1rSosiG', 'bvabfIq', 'wCkEBSkjxG', 'W7tdHmoIdtu', 'W77dKCofiq', 'lCkyB8kevG', 'c00zaZK', 'WOlcHrK', 'bbiEs28', 'WQiitxNdNq', 'W6tdG8oaCZ0', 'mH7dVCoWba', 'qSoiqqBdPq', 'W5f1dtTk', 'W6pdQ8oPxay', 'W5NcTI4', 'ASoUhder', 'c8orW53cPZi', 'wmoSfNxcSa', 'BSo/WR/cUCo1', 'ESoYW70EW6O', 'u0ddTa', 'xuldL8kkWOe', 'W6RcL8kCW7BdHa', 'WOmHWO5t', 'W7LsecXS', 'hrHeAea', 'DCkeWRVcRSkJ', 'kCk7W4/dJa', 'yw9urNC', 'rCoDWRhcVmo7', 'W7ToW54KW4S', 'kCoeW6RcMSoy', 'W6xdKXddOwK', 'bLWdaci', 'svXo', 'WQZcPSo9a8on', '4Bsa4BwMWRhHTjxHTii', 'eH7cRSoIrq', 'W6StW5K', 'DqFdVq', 'a8kdD8kysG', 'WPiZWRft', 'AaPCacG', 'W5LBW6JdOHi', 'W4ryW5ldMXy', 'W6xcMXRdR1C', 'AcvPbYC', 'q8kaxmozmG', 'qCoKa38q', 'AmofWQy', 'BCo7WQtcKSoi', 'W6xcISobCY4', 'tvGu', 'WQTwWQ7cG8kP', 'W7ddPSoeBG8', 'W6XafZLU', 'W7T9iCkTWRu', 'W5XbWR7cHx4', 'EmoJxgVdVa', 'WRNcOSo9i8ku', 'WRBdP8o2sIO', 'W5ZdK0JdTb0', 'hqifyaK', 'AmoBWRpcV8o3', 'uGLCr3SxCSkFWPBcHGy8dq', 'W6hdTcddVvi', 'CG/dTG', 'FchdMuPl', 'WQupW4/cGmkv', 'FSoKW6mlW7S', 'bZehxgq', 'mdlcSmoWqW', 'q0lcI8koWOO', 'WOSaW4tcHmkG', 'W5NdGHZdPu4', 'WR0XW4FcQCoK', 'WO7cI8k0W6tdUG', 'WRtcJ8kb', 'vWZcU8oH', 'c8oeW53cSJi', 'dCo+sGBdRW', 'WQ5HW5hcRmkf', 'WQXZWQBcJmkG', 'W7RcGSoyzIW', 'beLcWQm/', 'W6tdJmoIts0', 'WPJcJ8kUW7/dPG', 'iSo/WRNcK8oD', 'WPfLWQ/dGa', 'vtxcQSoFWQm', 'FazrbJi', 'W5mmcW', 'WPSPW40PW6C', 'WOCUW7W0W5S', 'WPnCWRBcNg0', 'WPT8WOa', 'd8oOdq', 'C8ohdNxcUq', 'kmo0W7FcI8o1', 'W58xx8oXqW', 'C8oRW6VcKmoz', 'W7NcHSocDGq', 'hCkcuSoQCW', 'WOVcMuFdOLu', 'W57cHSouzH0', 'B8k7z8oYja', 'WPP3WPJcQSkZ', 'W4hdKWhdR1m', 'WO52WRRcLcq', 'aSoOW6JcM8ot', 'W4yErmosAa', 'qcawFu4', 'W6fcdrrg', 'W4RdSMT+', 'g8oOvWpdHq', 'W5TyW7KNW74', 'EmoEfNNcUW', 'WQ/cV8o8', 'wrBcQq', 'kmklq8o/va', 'W5tdHrVdTfO', 'vahcNSo3WPy', 'WPrfW5pdUa', 'WOzMWOGtWQO', 'fmklwSoVzq', 'bCksB8ohcq', 'eZqyzSok', 'vqdcS8oRWPm', 'nbtcPcfX', 'haeluSoj', 'g8oKvWddPa', 'ixClfq4', 'WQuaW73cUCod', 'WQxcGmoeCYC', 'dapcUSodqW', 'EfFdSSktWO4', 'de1duX4', 'emkjWO/dUNq', 'oSoDjCo7jG', 'fcNcRSoUW7a', 'W55XnJPZ', 'iCojqaNdPW', 'WR9AWQpcHCkZ', 'DSo2W7CpWRi', 'mXtcUG', 'WR5ehSo8ra', 'irugsJi', 'WRbxWOn/W74', '8kYySSk5W5xdPmkM', 'WPu8W4KWW7a', 'cSkIwGJdPq', 'WR/cVSoJBCkr', 'WQPwWQtcNW', 'l1NcI8o+W7S', 'vmoGeutcJq', 'Asb4iqG', 'bmk+BSkjxG', 'WPjeWOrPpW', 'WRVdRCoyACke', 'WRjQWQ4YWO4', 'aSkQp8k/W6y', 'wqNcRSomWP4', 'W6PtW5XWWQS', 'xryyBmok', 'WPruhvq', 'k1dcQfHK', 'W6HAcNHL', 'tfrlWR4L', 'sSoeWPBdQHi', 'uYmyECok', 'vqFcJmoAWOK', 'W5BcSsxdSZy', 'WRrqfqah', 'W4nsW7xdKJO', 'WPieW7hcQmoW', 'F8oZW5mfW7e', 'W67dV8kGvmkKCSkjb8kf', 'fN3cVmosW7C', 'lmoJksyi', 'W6FdHmo4xIq', 'wConW6q8W7m', 'pHBcUa', 'WPP2W4CgW68', 'WR5tWRxcHeq', 'q8o8brGf', 'EmkgFSo8cG', 'vCkEW5VcPsS', 'mmoam8ofiG', 'W69Acd1N', 'nbtcOYfX', 'WPKIjSk0', 'W6bFfWXS', 'WODye0vV', 'qWzdfIC', 'W5PbWOjCmW', 'WPCIBeNdMG', 'W7uiW7FdKmkrWRXaDvjP', 'WPLgWOuiWQS', 'WR7cLmo+nmoX', '8jQkQr0bqmkj', 'b8o5f0FdNa', 'gW4Hsgi', 'WRaIELNdJa', 'c8oSua', 'W5mcfa', 'W7FdQSo/scW', 'gmknvSoHsq', 'FZJcTCoWsG', 'WPLMWQJcNg0', 'zadcPCoSWQ8', 'WOzfWOzsmW', 'W6pdKH/dQqu', 'DmoBWRdcTSoZ', 'WRZdQSoPqhG', 'cCoCAcddOq', 'WPf6W5HP', 'WRVdVmoKoSkA', 'FKldHZ0L', 'ESo7W7KlW68', 'pbRcS8k2ua', 'vGZcSCo9WPu', 'jCkgDmk8sq', 'WONdUCo1qte', 'WOerfKm9', 'z3JdTSkRhW', 'WPiwW6ddO8o0', 'bY/cISoLyW', 'W57dVWxdTfO', 'W7VcLSodzIW', '4BwV4BwSrpcDGy/IGy3WKOoH', 'B8o4W7KhW7S', 'efWdfWC', 'W4NdR2eRmq', 'gmkKqsCA', 'x8oXcxhcRG', 'WPrWWRRcMw8', 'eu4OpcS', 'W6pdISoLrYa', 'qhFdSmkjWOa', 'W49AoCkwWOy', 'W4FdThOVjW', 'WQlcKWVdQX4', 'h8kysSkfwa', 'kmo+W6RcNa', 'WP5+WOyaWQO', 'ASoGaMtcIG', 'aZ3dVq', 'W6DYW5y+W4e', 'WOvNCu7dQG', 'W5mqvmosDG', 'AaFdV2Pi', 'WPn8WOKtWO4', 'gYSrCCoq', 'sCoDcWu/', 'WQufW47cLCkN', 'WPyIy07dRa', 'W5rsW6NcMbq', 'WPvjWOKrkW', 'WQVdRSo7rIW', 'W7PfaSkeWPG', 'WOKMBeNdLa', 'W47dTgSTEG', 'WQhcOSoHwmku', 'WPSKW5RcU8kJ', 'WOSIp8oWEa', 'W6LbW5pdNtO', 'WOmaW6tcRSoJ', 'n8oNlJbL', 'gSoIW7RcPSoq', 'W6hcHSov', 's8kbwCoAeW', 'W5BcLXtdVIm', 'WOFcOSo/fmof', 'WOfzWOficq', 'WQ3dImoy', 'W5tdLXVdSb0', 'mSkfr8ksuW', 'w8kLlcy', 'pSkMnce3', 'mCkyBSoqea', 'WQ5EWRlcKSkU', '4BEp4BEkWQ3WOQom4OkA8lstVq', 'W4qXw8o9qW', '8yYkLSoIW4ZcJSoz', 'j3JcISoDW7C', 'W4bzW4RdMI0', 'WOaZWQGsWR0', 'WQiMWP3cU8ks', 'rSobfmoQzq', 'aZRdVq', 'W7zMcSkXWPC', 's8oMdZCx', 'w8oGfgpcTG', 'imo0W74', 'qx/dImkcWOG', 'iLe9cZK', 'W4K7r8k1oa', 'bWeKqCoS', 'WQ7cQmoOEmkc', 'w8k+dvxcV8oCaa3cUmoxWP5+pa', 'W7JdGKJdTLi', 'jmkKcG', 'WRpdMmkZgZa', 'hKVdSSoRWP4', 'W4P0f1iG', 'v8o2dG', 'WPamW6VdRCo7', 'W6r/amkrWPO', 'WPKrW7hcVCoK', 'fh3cRSoSW7i', 'WPLJa8oGkG', 'gIDp', 'WPjpWOHfiG', 'ghVcL8oOW7a', 'W5D0CW', 'W6b4a8ofW54', 'W5ddMGhdTe4', 'W4GWqmoDwmkYkCkJvG', 'v8oVkGaB', 'WPz2WOOtWRK', 'WPJdN8kAmYC', 'WQdcO8oKfSkl', 'WOfNvbW', 'i8o2WRBcICkg', 'ELpdPtHP', 'BrbvsYu', 'WQZdV8kW', 'WP17WQ3cNcq', 'WRVcQmoKgSod', 'cCkTCqldUG', 'W5OQxCoxDa', 'tSoPhYRdVG', 'FNtdRCklWOa', 'ACoYW7ejW6G', 'dCoObJeC', 'W5ldLXJdOvq', 'WP0ZbmkZzG', 'nrBdThzX', 'WRJdUmkWdHy', 'w2JcUmoGW7y', 'WOffdenI', 'n8oufc0p', 'WQPwWRtcG8oN', 'sCoHkSk1W70', 'W75VfG', 'nmoJpG', 'sWPddJ4', 'WP4rWQVdRCod', 'W6hcVHxdRG4', 'u3f/EhO', 'WP/cSJCjnq', 'W5LYWOikWRS', 'WQnAWRdcH8kZ', '4BwZ4BAjgEg1Vog2JW', 'haGkBKS', 'Amo5W5RcId8', 'W4ldUaBdHLC', 'W6xcJSonFgu', 'WR7cQmoIiSkv', 'W4apW6hcJSoe', 'k8oPlI8I', 'WRfrW4i/W64', 'sSo5W5xcQYe', 'Ew9FbcK', 'W7ObW6zL', 'jmo5amk+W7m', 'bmkdlCoiBq', 'wCoSdhxdVG', 'W4vlddPL', 'nCkgW6tdRCkQvtj/pXKFBG', 'xaRcUG', 'WR/dO8k/jsi', 'WOpcHvZdONRdR3FdQWy', 'C8oJW6qAW68', 'A8oCh2RcSq', 'WQ3cHGNdSGm', 'E8o4ha', 'W47dPmoJCYu', 'WPddG8k/lY4', 'WOyaW4yqBq', 'i8o1W6VcMSoA', 'yqRcLCoWWPq', 'WOPDWO/cHmkK', 'gCkpsmoUia', 'WOtdH1JcRwS', 'hCo/vuFcQq', 'BmkDAmk8EG', 'waxcHq', 'W58vW7FcOSoZ', 'WRjyWR8RWOy', 'lCo2W7W', 'WR0JW5VcImkt', 'W7DNW6NdNXG', 'W7xdKIpdVWu', 'WQZcTmoOwCoh', 'W71oW5qP', 'DmoEW70lW7S', 'DmoyW70lW7S', 'W7/cKCoamMG', '8l25ISkmoadcMq', 'raRcTmo1WPO', 'FqVdVwTR', 'WRVcUCo1FSoy', 'pSoegSk1W6S', 'WR/dTSkUdJ4', 'BffsWReC', 'ts5Yetu', '4Bsm4BAtw+g0G+g3MW', 'AvTkWPKy', 'W61xjZDK', 'gcej', 'waFcHq', 'hGtcUmo1WO8', 'xs3dNLPa', 'W5HsWPutWQy', 'W6xdGmoTstu', 'iajvcdi', 'jCkKt2/cM8oRW6tcT8oS', 'W7JdRmoHsYy', 'txFdOCkWWPy', 'WP15WRlcNhK', 'WR3cOSoSfmoq', 'w8kLlcq', 'WRldRSoJ', 'aZJdVq', 'WOZdMmkwcau', 'W5HNWOiFWRS', 'CCoYW7S+W48', 'cKOz', 'crqizqC', 'W6pcKmoy', 'sSo/gIab', 'tCoEcSk9nmoSxrjssMXhkq', 'WPrNWO4iWQe', 'hWaqFui', 's8kvDSkBqa', 'W6NcLXu', 'WQ/cKSkrW5JdSa', 'W4ldOwa7ga', 'W6XeW540W4C', 'WPbeWQrEkG', 'kLlcOdGXW54eW4yixehdKcq', 'bKSiuG', 'bSkhD8ov', 'bv5pWROL', 'W67cH8oVFsq', 'W4z0W7mfW7i', 'o8oIbc0O', 'sxnijSklWRjFW58elCkbFKO', 'Eg1oEwe', 'q8ozW5RcRru', 'W5LAW7RdKri', 'uvnXy2u', 'DSoGchpcVW', 't1/dUCkyaa', 'sCo0kSkGW70', 'WRtcLmkvW5tdSa', 'WRddJmkdCYW', 'W5OEsKeQ', 'qf3dT8klaa', 'tCoXchNcSa', 'W78gra', 'tWFdQxPr', 'WPyGW5yRW6i', 'W65uW58KW68', 'W7jtW7O1W7G', 'WRrEWQutWRW', 'aLhcUmowWPunW7NcMq', 'eSoMkG', 'WOeeW7hcUCoY', 'W6FdKJRcUvC', 'mSkfW6BdQSkLxgL8kX0SESov', 'BmoxWRZcVmoE', 'W59+W7BdLXa', 'WQlcLqNdVLC', 'WQnAWQ4', 'q8oIahaE', 'rWpdRmojcq', 'BSkxzSk8CW', 'aLCBeMq', 'W54kwG', 'W5RcOCoKEIy', 'W7BdKCo/sZe', 'WRe0W6yjW5i', 'WQn2WP8tWPS', 'wgPQWQWp', 'WQ7cS8o+fSou', 'WPvnWOi', 'WOzOzfJdTG', 'iruesJi', 'W7fVhColWPW', 'mmkMsCoEzq', 'W6rsW6pdGIm', 'WQvlWRBcLSk0', 'W6pdISofrYa', 'zmoijXmw', 'hgtcVmoQW6C', 'WQ5lW5qtW5K', 'xwvpsNm', 'W6VcL8oFCZK', 'FCoCp0NcLa', '8lodNUkbPFc6GOBcPUg0LEg2Mog1IG', 'r8o5tJKb', 'W5TsW6i', 'h8oxD8khgq', 'dmkpt8o/zq', 'qWdcS8o8WRy', 'WPa1W6aPW7q', 'WOWSe8oQzW', 'WQ7cJ8ku', 'W5ecW6ZcU8oY', 'ggiRjSkE', 'qSovWPJcRsm', 'FgHNquu', 'W4qeAKZdTG', 'WQLBWOhcICkQ', 'WR0KW4pcRmkd', 'fICe', 'W79bW5a', 'DmoVfMNcIG', 'W4ZdOx4Rpq', 'aCoGwaddRq', 'WRbDWQNcQg8', 'W49xiH17', 'WPTPWOPqia', 'WQ8LqmkeWPO', 'wLHtoru', 'W5HdW6/dHGq', 'D8oke1RcMW', 'pCosdY0Y', 'tmorWPG', 'WPK1WO3dJG', 'ddCsymoB', 'lG7cSSoLqq', 'tYLEmtW', 'qYPwcd8', 't1JdK8kcW4e', 'WPaFbK8I', 'WPOsW60nW5e', 'WPaIELNdRa', 'z8kXCNqtWRhdUCkfWO3dRq', 'mcK4ESo6', 'ACoUWRalW7S', 'dsWA', 'EhqtrNu', 'EXfC', 'thjaWOmS', 'p8knF8oyDq', 'zmofWQhcUCo1', 'umkRt3fy', 'FcBcQSo5WPK', 'W77dLSo4', 'W4uIW5zqW7BcKmo3W7btW4L/W6tdQG', 'WPf0WRxcMuy', 'WO7cQmoOEmkI', 'WOe0CuZdVW', 'yuHeCMK', 'W48xwmoOzq', 'cSkAzG', 'e8oHjSkJW64', '8lsOQs51hrK', 'W4ddGWFdOvG', 'WQaOW4/cQmkb', 'Dg1y', 'WPzpWOniAW', 'pmoVWQq', 'y8kDz8o+iG', 'WQNdPCo9', 'WRO1W5BcOmkz', 't1hdGmon', 'gmo+W6hcI8oG', 'WOfDW7/dTsq', 'W4ilqG', 'WRZcQ8omfW', 'emoIaZev', 'qmoVW4VcRYO', 'EgfttW', 'cGyQx8oZ', 'W7BdQe0xmG', 'jdbvfZa', 'aLaduYy', 'p2JcQmofW7a', 'sLNdI8kxWQ4', 'dSoiC8kAvG', 'p8ksE8kCBq', 'WP4SW6JcRmoW', 'cciStwK', 'W7/cKCoa', 'W408W4GuWRS', 'lGrvewy', 'WRRcPmkHW4BdGG', 'ASoUaIq5', 'wmoum3/cUa', 'WQ3dICoy', 't8oSusqx', 'WOOIBGlcQa', '4BAv4Bsht/ggGPFIGPxWMig3', 'W6nEWQFcI8kZ', 'WQRcHmojzMK', 'WPf0WRZcMcq', 'W5vpW6/cHb4', 'W6PCcxDR', 'W6pcJSonDsW', 'WRtcTmkvW5tdSa', 'l8oxWRFcTCoM', 'yd/cMSowWPa', 'WR3dJSkhcqi', 'WR/dGSk7dd0', 'W7/dH1WioW', 'yCkxz8oNnq', 'zCkxzmoGkW', 't1XuWR5R', 'uCoUadq/', 'E8oUWQlcMSoD', 'WPbuW7hdU8o7', 'ecNcI8k7', 'W47dTgC8Eq', 'eCkpvCoVta', 'WQRcV8o5rCon', 'e8oEdGCF', 'EGVcSwDO', '8js6N8kfW4NcPKq', 'WPGiW6tcQSoY', 'uGRcUCoH', 'dYCCD8ok', 'thGFbYm', 'dx3dOa', 'WQfqWQu', 'WPPXWRJcPxi', 'W6VdOwWLdq', 'dGWb', 'WQbfWP9feW', 'WROZW44', 'neWFeI4', 'dx3cQCoIW4S', 'WRLqWQVcI8kM', 'k8o+W6/dJG', 'W4azW7JdMrO', 'o2fyrMq', 'W6/dG8o6iW', 'vePtF2O', 'WOeOW6j9WPq', 'W7fYiZPg', 'zCkbECoYja', 'kCk7W4/dJq', 'cLCiuZ0', 'WOhcPCoKfCot', 'EmoFd3BcTq', 'tYBdSSoSW6C', 'WRm/W7P9W5C', 'pmoOqrpdNa', 'WPrEde0O', 'FaVdT3C', 'WPymW6pcTa', 'zvtdSSoIua', 'W7faW7ldGWa', 'W75vW5uIWQq', 'WRxcMmkkW5tdOW', 'AqFdSg1X', '8ycxLU+7La', 'WRpcRmkW', 'n1GDuWi', 'u8keWPG', 'ruKjW7SF', 'dCkeySkBFq', 'yWqpesm', 'W47dRwS', 'W5OZW6m8W5i', 'ACotWRpcVmo3', 'iCo6i8kHW6y', '8loANSk7WPWNW5m', 'FGpdOMSL', 'WQ/cVCk6', 'WObrbq', 'WPLWfCkK', 'W5ZdKvFdOvG', 'v0PvEwu', 'WR7cQCoty8kB', 'bsVcI8oIxq', 'W5nwW7xcKqm', 'W61wW7uFW6S', 'W7PNqmkvWO0', 'W77dS8oUqqi', 'WOiaW6VcQCoA', 'WQVdOmoqtcO', 'zW5raIm', 'W61cW5e5WQq', 'aK0eegC', 'WOq3W63cO8oJ', 'WQHRkmoUEa', 'W4LfW4ugW7m', 'W4xdKXddOuK', 'WQyYW5y', 'W5fdW77dHfK', 'W7ZdKCkm', 'c8oaW4RcPsi', 'WRBcICowW5JdSG', 'WQRdV8oOtdy', 'pSoYiJbR', 'FmoYaG', 'WPVcOSo1a8oW', 'WOjHWOS', 'W55Olv7dRa', 'W68ZW4FcQ8oB', 'W4ldKWBdSxa', 'bmkAbG', 'WPH9WPucWQe', 'xe/cHCkcWOG', 'CcbRgJa', 'nCoJW7usW6G', 'rmkbW4ZdVcO', 'lSo4p8kpW40', 'WP/dLW3dUeK', 'WRLAWRRcKSkZ', 'xCo9f2hcIa', 'WRVcQmo9Emka', 'uWtcRCoSWPi', 'fWSeqq', 'c8o6ka', 'W7CqW63cJSkI', 'WQNcUCoIzCky', '8ycrQUkbVFc+GRhdHUg1O+g3Tog0SG', 'W7BcNqxdPXa', 'oZBdThzX', 'YBhiL+g2KeRHTPe', 'W4DDdSkeWPy', 'zmoaW6m', 'wmoLW4yGW60', 'W6/cKWldRJS', 'WP12WOiOWRS', 'WQHmWRhcH8kG', 'WRldSSkY', 'WR9gW5uKWQO', '8yEAMeukh8kx', 'l20mjJm', 'WQXrWQv6hW', 'W7XaW4aKW6m', 'W7reW4K', 'W7z4W5tdOJi', 'umocW5tdQMC', 'oHNcJmotvG', '4BsRfSI8YAZdJW'];
    _0x2d29 = function () {
      return _0x47b48a;
    };
    return _0x2d29();
  }
  cmd(_0x4d3732, async (_0x21d161, _0x5cb72f, _0xe91a81, {
    from: _0x56010c,
    l: _0x1821ab,
    quoted: _0x409a23,
    prefix: _0x12b7dc,
    body: _0x3da708,
    isCmd: _0x2b691a,
    command: _0x114cb4,
    args: _0x384142,
    q: _0x377f5f,
    isGroup: _0xbf2f7e,
    sender: _0x26eda4,
    senderNumber: _0x10ced6,
    botNumber2: _0x1356e2,
    botNumber: _0x3c0432,
    pushname: _0x32fd9e,
    isMe: _0x33955e,
    isOwner: _0x20825d,
    groupMetadata: _0x44b4cc,
    groupName: _0x112090,
    participants: _0x520816,
    groupAdmins: _0xebed03,
    isBotAdmins: _0x1c9cdf,
    isAdmins: _0x18aa3f,
    reply: _0x302ae2
  }) => {
    try {
      if (!_0x377f5f) {
        return _0x302ae2("*Please give me a url !*");
      }
      const _0x909701 = {
        url: "https://aemt.me/v6/text2img?text=" + _0x377f5f
      };
      const _0x32dd08 = {
        image: _0x909701,
        caption: "Powered by TalkDrove"
      };
      const _0x1080c0 = {
        quoted: _0x5cb72f
      };
      await _0x21d161.sendMessage(_0x56010c, _0x32dd08, _0x1080c0);
      const _0x21e7d4 = {
        text: '✅',
        key: _0x5cb72f.key
      };
      const _0xdbdbb5 = {
        react: _0x21e7d4
      };
      await _0x21d161.sendMessage(_0x56010c, _0xdbdbb5);
    } catch (_0xb83e7c) {
      _0x302ae2("*I can't get a screenshot. Try again later.*");
      console.log(_0xb83e7c);
    }
  });
  const _0x1d4925 = {
    pattern: "texttoimage",
    react: "🗃️",
    alias: ["t2i", "texttoimg", "text2img"],
    desc: "Get bot's command list."
  };
  function _0x814adc(_0x5d15d4, _0x58d821, _0x6e2d7, _0x39c176, _0x9ddc8c) {
    return _0x3f3b(_0x39c176 - 0x344, _0x9ddc8c);
  }
  _0x1d4925.category = "convert";
  _0x1d4925.use = ".texttoimage";
  _0x1d4925.filename = __filename;
  cmd(_0x1d4925, async (_0x32e441, _0x4fbb38, _0x1b544e, {
    from: _0x42fce6,
    prefix: _0x32df3e,
    quoted: _0x16e363,
    body: _0x3f3602,
    isCmd: _0x427e2d,
    command: _0x2c1701,
    args: _0x8110c6,
    q: _0xe9eb9f,
    isGroup: _0x9abc9a,
    sender: _0x1c0b24,
    senderNumber: _0x3b05a5,
    botNumber2: _0x12e1a6,
    botNumber: _0x3aadce,
    pushname: _0x5b6b36,
    isMe: _0x17af4a,
    isOwner: _0x2f0f79,
    groupMetadata: _0x668cf3,
    groupName: _0xc2b1e0,
    participants: _0x167537,
    groupAdmins: _0x3650f5,
    isBotAdmins: _0x4145ea,
    isAdmins: _0x5e76e6,
    reply: _0x50d1e3
  }) => {
    try {
      let _0x1d96cd = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Follow Our Channel",
          'url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l",
          'merchant_url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Tap Here!",
          'sections': [{
            'rows': [{
              'title': "TextToImage V1",
              'id': ".aemtv1 " + _0xe9eb9f
            }, {
              'title': "TextToImage V2",
              'id': ".aemtv2 " + _0xe9eb9f
            }, {
              'title': "TextToImage V3",
              'id': ".aemtv3 " + _0xe9eb9f
            }, {
              'title': "TextToImage V4",
              'id': ".aemtv4 " + _0xe9eb9f
            }, {
              'title': "TextToImage V5",
              'id': ".aemtv5 " + _0xe9eb9f
            }, {
              'title': "TextToImage V6",
              'id': ".aemtv6 " + _0xe9eb9f
            }, {
              'title': "TextToImage V1 Hercai",
              'id': ".texttoimgv1" + _0xe9eb9f
            }, {
              'title': "TextToOmage V2 Heracai",
              'id': ".texttoimg2" + _0xe9eb9f
            }, {
              'title': "TextToImage V3 Hercai",
              'id': ".texttoimg3" + _0xe9eb9f
            }, {
              'title': "Prodia Hercai",
              'id': ".prodia " + _0xe9eb9f
            }]
          }]
        })
      }];
      const _0xec80c7 = {
        image: "https://static-cse.canva.com/blob/959702/ArticleThumbnailsTexttoImage.png",
        header: '.',
        footer: config.FOOTER,
        body: " TexttoImage generater"
      };
      return _0x32e441.sendButtonMessage(_0x42fce6, _0x1d96cd, _0x1b544e, _0xec80c7);
    } catch (_0x3695e5) {
      _0x50d1e3("*Error !!*");
      console.log(_0x3695e5);
    }
  });

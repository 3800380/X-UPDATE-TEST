(function (_0x5e8f41, _0x2e39f6) {
    const _0x495359 = _0x5e8f41();
    while (true) {
      try {
        const _0x4d201e = parseInt(_0x391d(688, 'eKWU')) / 1 * (parseInt(_0x391d(1110, 'EKb0')) / 2) + -parseInt(_0x391d(1078, 'vFN1')) / 3 * (-parseInt(_0x391d(967, 'g[Jx')) / 4) + parseInt(_0x391d(746, 'iKvA')) / 5 + parseInt(_0x391d(517, ')A9C')) / 6 + -parseInt(_0x391d(396, '[RpR')) / 7 + -parseInt(_0x391d(710, 'jKEd')) / 8 + parseInt(_0x391d(836, 'g[Jx')) / 9;
        if (_0x4d201e === _0x2e39f6) {
          break;
        } else {
          _0x495359.push(_0x495359.shift());
        }
      } catch (_0x1cdb2a) {
        _0x495359.push(_0x495359.shift());
      }
    }
  })(_0x201d, 618793);
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
  const axios = require("axios");
  async function logo(_0x402300) {
    try {
      const {
        data: _0x3fc6f3
      } = await axios.post("https://boredhumans.com/apis/boredagi_api.php", "prompt=" + _0x402300.replace(/\s+/g, "%2520") + "&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44", {
        'headers': {
          'User-Agent': "Googlebot-News",
          'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
        }
      });
      const _0x8f4324 = _0x3fc6f3.output.match(/src="([^"]+)"/)[1];
      return _0x8f4324;
    } catch (_0x3a9b10) {
      return _0x3a9b10;
    }
  }
  function _0x391d(_0x4a51a3, _0x319ab2) {
    const _0x5f10ed = _0x201d();
    _0x391d = function (_0x5008e5, _0x1e6c47) {
      _0x5008e5 = _0x5008e5 - 221;
      let _0x5aa865 = _0x5f10ed[_0x5008e5];
      if (_0x391d.FtnQcF === undefined) {
        var _0x4b313b = function (_0x1242a9) {
          let _0x57f559 = '';
          let _0x5c920e = '';
          let _0x56eb58 = 0;
          let _0x1e3847;
          let _0x57caa4;
          for (let _0x705917 = 0; _0x57caa4 = _0x1242a9.charAt(_0x705917++); ~_0x57caa4 && (_0x1e3847 = _0x56eb58 % 4 ? _0x1e3847 * 64 + _0x57caa4 : _0x57caa4, _0x56eb58++ % 4) ? _0x57f559 += String.fromCharCode(255 & _0x1e3847 >> (-2 * _0x56eb58 & 6)) : 0) {
            _0x57caa4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x57caa4);
          }
          let _0x5aabe4 = 0;
          for (let _0x281d67 = _0x57f559.length; _0x5aabe4 < _0x281d67; _0x5aabe4++) {
            _0x5c920e += '%' + ('00' + _0x57f559.charCodeAt(_0x5aabe4).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x5c920e);
        };
        const _0x1d28a6 = function (_0x15fc12, _0x48f334) {
          let _0x429eee = [];
          let _0x468412 = 0;
          let _0x37e518;
          let _0x2a0c82 = '';
          _0x15fc12 = _0x4b313b(_0x15fc12);
          let _0x121214;
          for (_0x121214 = 0; _0x121214 < 256; _0x121214++) {
            _0x429eee[_0x121214] = _0x121214;
          }
          for (_0x121214 = 0; _0x121214 < 256; _0x121214++) {
            _0x468412 = (_0x468412 + _0x429eee[_0x121214] + _0x48f334.charCodeAt(_0x121214 % _0x48f334.length)) % 256;
            _0x37e518 = _0x429eee[_0x121214];
            _0x429eee[_0x121214] = _0x429eee[_0x468412];
            _0x429eee[_0x468412] = _0x37e518;
          }
          _0x121214 = 0;
          _0x468412 = 0;
          for (let _0x3395af = 0; _0x3395af < _0x15fc12.length; _0x3395af++) {
            _0x121214 = (_0x121214 + 1) % 256;
            _0x468412 = (_0x468412 + _0x429eee[_0x121214]) % 256;
            _0x37e518 = _0x429eee[_0x121214];
            _0x429eee[_0x121214] = _0x429eee[_0x468412];
            _0x429eee[_0x468412] = _0x37e518;
            _0x2a0c82 += String.fromCharCode(_0x15fc12.charCodeAt(_0x3395af) ^ _0x429eee[(_0x429eee[_0x121214] + _0x429eee[_0x468412]) % 256]);
          }
          return _0x2a0c82;
        };
        _0x391d.mTAXmu = _0x1d28a6;
        _0x4a51a3 = arguments;
        _0x391d.FtnQcF = true;
      }
      const _0x1b9f9a = _0x5f10ed[0];
      const _0x3f63a7 = _0x5008e5 + _0x1b9f9a;
      const _0xbf19aa = _0x4a51a3[_0x3f63a7];
      if (!_0xbf19aa) {
        if (_0x391d.RFOWgm === undefined) {
          _0x391d.RFOWgm = true;
        }
        _0x5aa865 = _0x391d.mTAXmu(_0x5aa865, _0x1e6c47);
        _0x4a51a3[_0x3f63a7] = _0x5aa865;
      } else {
        _0x5aa865 = _0xbf19aa;
      }
      return _0x5aa865;
    };
    return _0x391d(_0x4a51a3, _0x319ab2);
  }
  const _0xcc8804 = {
    pattern: "bard",
    alias: ["bardai", "gbard", "googlebard", "googleai", "ai2"],
    react: '👾',
    desc: "It search on bard ai for what you provided.",
    category: "search",
    use: ".bard hi",
    filename: __filename
  };
  cmd(_0xcc8804, async (_0x1634a8, _0x2a529b, _0x3bd4bb, {
    from: _0x5222a6,
    l: _0x5e29fe,
    prefix: _0x4908e6,
    quoted: _0x162de0,
    body: _0x1f5205,
    isCmd: _0x3a92dc,
    command: _0x4936ce,
    args: _0x386b77,
    q: _0x3e5e62,
    isGroup: _0x46f457,
    sender: _0x112b5b,
    senderNumber: _0x4edf9c,
    botNumber2: _0x46364a,
    botNumber: _0x448fa5,
    pushname: _0x351538,
    isMe: _0x480e22,
    isOwner: _0x3ce4f0,
    groupMetadata: _0x36299c,
    groupName: _0x5e558e,
    participants: _0x3cf384,
    groupAdmins: _0x3e835a,
    isBotAdmins: _0x214a73,
    isAdmins: _0x3bfb5b,
    reply: _0x194175
  }) => {
    try {
      if (!_0x3e5e62) {
        return _0x194175("Please give me words to search on bard ai !");
      }
      let _0x1f1125 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
      let _0x2a7190 = _0x1f1125.users;
      let _0x3489c6 = _0x2a7190[Math.floor(Math.random() * _0x2a7190.length)];
      const _0x395ee8 = await fetchJson(_0x1f1125.xz + "api/bard?text=" + _0x3e5e62 + "&apikey=" + _0x3489c6);
      return await _0x194175(_0x395ee8.content);
    } catch (_0xfd0ac9) {
      try {
        const _0x1bcb4a = await fetchJson("https://api.akuari.my.id/ai/gbard?chat=" + _0x3e5e62);
        return await _0x194175(_0x1bcb4a.respon);
      } catch (_0x1b95d4) {
        _0x194175("Server is busy. Try again later.!");
        _0x5e29fe(_0x1b95d4);
      }
    }
  });
  const _0x49d246 = {
    pattern: "ailogo",
    alias: ["logoai", "ail", "gptlogo"],
    react: '🤖',
    desc: "It creates ai logos.",
    category: "other",
    use: ".ailogo  woman,hair cut collor red,full body,bokeh",
    filename: __filename
  };
  cmd(_0x49d246, async (_0x7927b4, _0x44df08, _0x47a4a2, {
    from: _0x429fcd,
    l: _0x137ad4,
    prefix: _0x4b24a5,
    quoted: _0x125545,
    body: _0x12a2a7,
    isCmd: _0x47c8fe,
    command: _0x216c98,
    args: _0x7089ea,
    q: _0x47d3e3,
    isGroup: _0x4bbeaf,
    sender: _0x5cb236,
    senderNumber: _0xb9ccfc,
    botNumber2: _0x40353b,
    botNumber: _0x50ad03,
    pushname: _0x221cec,
    isMe: _0x39330d,
    isOwner: _0x2e9718,
    groupMetadata: _0x2e0683,
    groupName: _0x4732ea,
    participants: _0x227af,
    groupAdmins: _0x4dd660,
    isBotAdmins: _0x183f6f,
    isAdmins: _0x4fc113,
    reply: _0xa5aa9b
  }) => {
    try {
      if (!_0x47d3e3) {
        return _0xa5aa9b("Please enter a query");
      }
      let _0x468f62 = await logo(_0x47d3e3);
      const _0x384ea3 = {
        url: _0x468f62
      };
      const _0x17bab2 = {
        image: _0x384ea3,
        caption: "Powered by TalkDrove"
      };
      const _0x152f05 = {
        quoted: _0x44df08
      };
      _0x7927b4.sendMessage(_0x429fcd, _0x17bab2, _0x152f05);
    } catch (_0x4c2d90) {
      _0xa5aa9b("I can't create that logo");
      _0x137ad4(_0x4c2d90);
    }
  });
  const _0x500bb8 = {
    pattern: "mathgpt",
    react: '👾',
    desc: "It search on chatgpt ai for what you provided.",
    category: "other"
  };
  function _0x32bfc0(_0x3e4299, _0x3776f8, _0x21f126, _0x33c888, _0x3bd0b9) {
    return _0x391d(_0x3776f8 + 0x113, _0x3bd0b9);
  }
  _0x500bb8.use = ".gptmaths 2-3";
  _0x500bb8.filename = __filename;
  cmd(_0x500bb8, async (_0x1a16e7, _0x44dc15, _0x57057e, {
    from: _0x8a6e97,
    l: _0x17d273,
    prefix: _0xaa0f88,
    quoted: _0x236f24,
    body: _0x4f40ea,
    isCmd: _0x540d08,
    command: _0x28173c,
    args: _0x392e66,
    q: _0x3f9433,
    isGroup: _0x481705,
    sender: _0x38dc06,
    senderNumber: _0x90f757,
    botNumber2: _0x9ddb49,
    botNumber: _0x3e5237,
    pushname: _0x20ff8f,
    isMe: _0x6f9c05,
    isOwner: _0x2b551e,
    groupMetadata: _0xbe2f7a,
    groupName: _0x3fcc79,
    participants: _0x429e66,
    groupAdmins: _0x508807,
    isBotAdmins: _0x5b6ea7,
    isAdmins: _0x5a8a21,
    reply: _0x5edf8f
  }) => {
    try {
      if (!_0x3f9433) {
        return _0x5edf8f("*Please give me words to search on chatgpt ai !*");
      }
    } catch (_0x4afddc) {
      _0x5edf8f("*Server is busy. Try again later.!*");
      _0x17d273(_0x4afddc);
    }
  });
  const _0x26e734 = {
    pattern: "chatgpt",
    alias: ['ai', "gpt", "openai", "chat"],
    react: '👾',
    desc: "It search on chatgpt ai for what you provided.",
    category: "other",
    use: ".chatgpt hi",
    filename: __filename
  };
  cmd(_0x26e734, async (_0x448d77, _0x5a6f86, _0x29b536, {
    from: _0xa06a91,
    l: _0xdebd7d,
    prefix: _0x5d1567,
    quoted: _0xaffa28,
    body: _0x2caa9e,
    isCmd: _0x482f9f,
    command: _0x504202,
    args: _0x5ec3d4,
    q: _0xaad204,
    isGroup: _0x2fa659,
    sender: _0x1e9d29,
    senderNumber: _0x208d57,
    botNumber2: _0x2cf57b,
    botNumber: _0x340f87,
    pushname: _0x19ea0b,
    isMe: _0x199f9c,
    isOwner: _0x1681e0,
    groupMetadata: _0x2f1089,
    groupName: _0x4d6a45,
    participants: _0x53b5b3,
    groupAdmins: _0x2976d7,
    isBotAdmins: _0x2d63ad,
    isAdmins: _0x23c647,
    reply: _0x5f39cf
  }) => {
    try {
      if (!_0xaad204) {
        return _0x5f39cf("*Please give me words to search on chatgpt ai !*");
      }
      let _0x5128c4 = await fetchJson("https://hercai.onrender.com/v3/hercai?question=" + _0xaad204);
      return await _0x5f39cf(_0x5128c4.reply);
    } catch (_0x37340c) {
      _0x5f39cf("*Server is busy. Try again later.!*");
      _0xdebd7d(_0x37340c);
    }
  });
  const _0x3456a4 = {
    pattern: "chatgpt2",
    alias: ["ai2", "gpt2", "openai2", "chat2"],
    react: '👾',
    desc: "It search on chatgpt ai for what you provided.",
    category: "other",
    use: ".ai2 hi",
    filename: __filename
  };
  cmd(_0x3456a4, async (_0x3c6d88, _0x57230c, _0x362590, {
    from: _0x4419c7,
    l: _0x2a9214,
    prefix: _0x2f3f38,
    quoted: _0x596c3a,
    body: _0x13c3e0,
    isCmd: _0x12b996,
    command: _0x2761c8,
    args: _0x5ecbe1,
    q: _0x23ba72,
    isGroup: _0x3bed63,
    sender: _0x3d0fe4,
    senderNumber: _0x4f9446,
    botNumber2: _0xe90dd9,
    botNumber: _0x1c824c,
    pushname: _0x3a4ffd,
    isMe: _0x1dd06f,
    isOwner: _0x54f550,
    groupMetadata: _0x4b9bbb,
    groupName: _0x4a6b31,
    participants: _0x1c1024,
    groupAdmins: _0x2dfb00,
    isBotAdmins: _0x53a23a,
    isAdmins: _0x366126,
    reply: _0x536766
  }) => {
    try {
      if (!_0x23ba72) {
        return _0x536766("*Please give me words to search on chatgpt ai !*");
      }
      let _0x28ce2a = await fetchJson("https://hercai.onrender.com/v3-32k/hercai?question=" + _0x23ba72);
      return await _0x536766(_0x28ce2a.reply);
    } catch (_0x1b7115) {
      _0x536766("*Server is busy. Try again later.!*");
      _0x2a9214(_0x1b7115);
    }
  });
  const _0x2274e0 = {
    pattern: "turbo",
    alias: ["ai3", "gpt3", "openai3", "chat3"],
    react: '👾',
    desc: "It search on chatgpt ai for what you provided.",
    category: "other",
    use: ".chatgpt hi",
    filename: __filename
  };
  cmd(_0x2274e0, async (_0x4888aa, _0x2b6fcd, _0x25f886, {
    from: _0x3f4b24,
    l: _0x1cc40c,
    prefix: _0x2f1885,
    quoted: _0x5bd8ea,
    body: _0x2b8fa2,
    isCmd: _0x2726a8,
    command: _0x33686b,
    args: _0x3041ec,
    q: _0x5c2ee3,
    isGroup: _0x1fba1e,
    sender: _0x4ccb14,
    senderNumber: _0x21654b,
    botNumber2: _0x1fbed0,
    botNumber: _0x4be510,
    pushname: _0x1bfddf,
    isMe: _0x3e493d,
    isOwner: _0x5d5529,
    groupMetadata: _0x2417ab,
    groupName: _0x4d24f2,
    participants: _0x54c308,
    groupAdmins: _0x3ada0d,
    isBotAdmins: _0x410b4a,
    isAdmins: _0x3090ee,
    reply: _0x3c6bac
  }) => {
    try {
      if (!_0x5c2ee3) {
        return _0x3c6bac("*Please give me words to search on chatgpt ai !*");
      }
      let _0x1c27e9 = await fetchJson("https://hercai.onrender.com/turbo/hercai?question=" + _0x5c2ee3);
      return await _0x3c6bac(_0x1c27e9.reply);
    } catch (_0x3c402f) {
      _0x3c6bac("*Server is busy. Try again later.!*");
      _0x1cc40c(_0x3c402f);
    }
  });
  const _0x20ce10 = {
    pattern: "turbo2",
    alias: ["ai4", "gpt4", "openai4", "chat4"],
    react: '👾',
    desc: "It search on chatgpt ai for what you provided."
  };
  function _0x2eafd5(_0x8648d5, _0x17a58, _0x1475da, _0x44d820, _0xc1c731) {
    return _0x391d(_0x1475da - 0x25a, _0x17a58);
  }
  _0x20ce10.category = "other";
  _0x20ce10.use = ".chatgpt hi";
  _0x20ce10.filename = __filename;
  cmd(_0x20ce10, async (_0x491bf4, _0x46a1d1, _0x1abae7, {
    from: _0x1fd784,
    l: _0x577c93,
    prefix: _0x2e63f2,
    quoted: _0x1ccc5e,
    body: _0x3f0e3e,
    isCmd: _0x5b5c6a,
    command: _0x177b4d,
    args: _0x7aa342,
    q: _0x90860c,
    isGroup: _0x23e501,
    sender: _0x11f370,
    senderNumber: _0xe03c65,
    botNumber2: _0x14184,
    botNumber: _0x791a3e,
    pushname: _0x605b0f,
    isMe: _0x470b15,
    isOwner: _0x4d2bb2,
    groupMetadata: _0x175a2c,
    groupName: _0x584c1b,
    participants: _0x3dc224,
    groupAdmins: _0x11a1a0,
    isBotAdmins: _0x353f1e,
    isAdmins: _0x5903f2,
    reply: _0x248cca
  }) => {
    try {
      if (!_0x90860c) {
        return _0x248cca("*Please give me words to search on chatgpt ai !*");
      }
      let _0x352f7c = await fetchJson("https://hercai.onrender.com/turbo-16k/hercai?question=" + _0x90860c);
      return await _0x248cca(_0x352f7c.reply);
    } catch (_0x260eae) {
      _0x248cca("*Server is busy. Try again later.!*");
      _0x577c93(_0x260eae);
    }
  });
  const _0x35736d = {
    pattern: "gemini",
    alias: ["ai5", "gpt5", "openai5", "chat5"],
    react: '👾',
    desc: "It search on chatgpt ai for what you provided.",
    category: "other",
    use: ".chatgpt hi",
    filename: __filename
  };
  cmd(_0x35736d, async (_0x2da154, _0x490ddb, _0xb0f0a8, {
    from: _0x1c3daf,
    l: _0x45daf9,
    prefix: _0x3fd674,
    quoted: _0x6f4922,
    body: _0x4c698b,
    isCmd: _0x2aecdb,
    command: _0x511052,
    args: _0x113562,
    q: _0x382fa6,
    isGroup: _0xf9e983,
    sender: _0x43bcc9,
    senderNumber: _0x5ebe78,
    botNumber2: _0x277e2e,
    botNumber: _0x43cb70,
    pushname: _0x5e4987,
    isMe: _0x2335ad,
    isOwner: _0x12ec01,
    groupMetadata: _0x1dd574,
    groupName: _0x51b327,
    participants: _0x2b1be0,
    groupAdmins: _0x234c78,
    isBotAdmins: _0x4cd23d,
    isAdmins: _0x4d8193,
    reply: _0x47daaf
  }) => {
    try {
      if (!_0x382fa6) {
        return _0x47daaf("*Please give me words to search on chatgpt ai !*");
      }
      let _0x5398a9 = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0x382fa6);
      return await _0x47daaf(_0x5398a9.reply);
    } catch (_0x9e6835) {
      _0x47daaf("*Server is busy. Try again later.!*");
      _0x45daf9(_0x9e6835);
    }
  });
  const _0xebe1f4 = {
    pattern: "aipic",
    react: '👾',
    desc: "It search on chatgpt ai for what you provided.",
    category: "other",
    use: ".aipic hi",
    filename: __filename
  };
  cmd(_0xebe1f4, async (_0x154dab, _0x82b77a, _0x237ed5, {
    from: _0x6ee68b,
    l: _0x15e136,
    prefix: _0x5353a9,
    quoted: _0x246cd9,
    body: _0x34af72,
    isCmd: _0x5b4e18,
    command: _0x4f28e1,
    args: _0x2ea580,
    q: _0x14788f,
    isGroup: _0x1acff1,
    sender: _0x1332b5,
    senderNumber: _0x2e33dc,
    botNumber2: _0x5dd13e,
    botNumber: _0x1fcb40,
    pushname: _0x188b83,
    isMe: _0x3f1c32,
    isOwner: _0x52eac4,
    groupMetadata: _0x1b2b15,
    groupName: _0x3492c0,
    participants: _0x4747a0,
    groupAdmins: _0x45de2e,
    isBotAdmins: _0x521d4b,
    isAdmins: _0x34eed6,
    reply: _0x2f2f41
  }) => {
    try {
      if (!_0x14788f) {
        return _0x2f2f41("*Please give me words to search on chatgpt ai !*");
      }
      let _0x5b1716 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x14788f);
      const _0x4e4b4d = {
        url: await _0x5b1716.result
      };
      const _0x5383d0 = {
        image: _0x4e4b4d,
        caption: "Powered by TalkDrove"
      };
      const _0x154134 = {
        quoted: _0x82b77a
      };
      await _0x154dab.sendMessage(_0x6ee68b, _0x5383d0, _0x154134);
    } catch (_0xbb6f89) {
      _0x2f2f41("*Server is busy. Try again later.!*");
      _0x15e136(_0xbb6f89);
    }
  });
  function _0x158ffa(_0x27628d, _0x27b1c4, _0x301729, _0x51e860, _0x51e0c9) {
    return _0x391d(_0x301729 + 0x1b, _0x27628d);
  }
  const _0x5a6730 = {
    'on': "body"
  };
  function _0x4245c0(_0x4016f5, _0x79df8b, _0x2a11e3, _0x58c42c, _0x164c02) {
    return _0x391d(_0x4016f5 - 0x9e, _0x2a11e3);
  }
  cmd(_0x5a6730, async (_0x64b9f0, _0x5c7ccd, _0x5b23d7, {
    from: _0x263b51,
    l: _0x29ed8b,
    prefix: _0x49779c,
    quoted: _0x3f6f2b,
    body: _0x13d010,
    isCmd: _0x333e1b,
    command: _0x12027d,
    args: _0x43ab3f,
    q: _0x2d9957,
    isGroup: _0x40c91a,
    sender: _0x5f139a,
    senderNumber: _0x34a86c,
    botNumber2: _0x2271d5,
    botNumber: _0x4f7bbc,
    pushname: _0x15e60a,
    isMe: _0xfd0709,
    isOwner: _0x157778,
    groupMetadata: _0x5a82c6,
    groupName: _0x4f74ac,
    participants: _0xd2bd1,
    groupAdmins: _0x251431,
    isBotAdmins: _0x58cec2,
    isAdmins: _0x25eac4,
    reply: _0x2e7644
  }) => {
    if (config.AI_CHATBOT === "true") {
      if (_0x5c7ccd.key.fromMe) {
        return;
      }
      let _0x27137b = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0x2d9957);
      return await _0x2e7644(_0x27137b.reply);
    }
  });
  const _0x2e197e = {};
  function _0x201d() {
    const _0x2d6ca9 = ['E8kMCsm0', 'bCkLxmkCW7m', 'W6mFW7FcNSof', 'WRpcNCkTW4Tr', 'W5G5vLOA', 'W4JdUrOQW6a', 'FWBcNHGY', 'W4nlW4a', 'W7RcT8k4WRf4', 'WPzqW4W', 'W4JdHSkVW5hdTa', 'jh3cT0ldGW', 'W5ZcUmofWQzq', 'rmk3zNtcLa', 'cSoIeMrh', 'W4O9WPFcVmkZ', 'WPOod3ddLW', 'ce5+W5xcGq', 'oSkSWQVcS8kE', '4lww4lwP4lsIWPJGTji', 'EmowW4m', 'CwCQ', 'WQRcKeyAzW', 'W6zPxqVdRW', 'W6SUaedcTa', 'emk2rCkbW6u', 'WRBcN0a6W4q', 'W7DqWQJdRL4', '4lE84lsR4lEB4lAA4lAv', 'WQ8/ham', 'W6dcQh1AWQS', 'WP98WQbitG', 'WPtcJ8kWW7jv', 'zSkJWRxcO17dPSkAW4FdMmkuC8oP', 'W404W4S7jG', 'wGFdLa', 'WO3cN8kWWQNcIa', 'rGxdLCo+wa', 'qbpdNG', 'kmoOWQVcV8o2', 'jvm4kq', 'W4RdIMe', 'A8oonZC+', 'dSoduN4h', 'n8opW5/dO8oM', 'wCkHzNpcQG', 'jc9Q', 'F8oMnq', 'WPlcRuX6WPi', 'xuddNW', 'EaBcGG0Z', 'xH/dSubf', 'c19MWO0', 'o8o9W7/cU8o4', 'z8oyExOJ', 'WPZcUhDsW44', 'W77dV8oBW6RdLG', 'W5LYWOaaW4m', '4lEi4lwMAbBGTRW', 'WPXRe389', 'W5tdPmk9tZu', 'x3C9cvC', 'WR/cGtRcQWC', 'WQq0hqxcRG', 'W6qgWQZcMmkf', 'WQqOfG', 'fmogkvTf', 'omomjWhcTa', 'mmo9n8kmDW', 'W78hW6fQaW', 'W5BdG8kgxGi', 'WOe5WPuevG', 'W5mPWP8Mma', 'h0xcTLzs', 'W7yuW6STaW', 'Foc1Roc1S+c1Hoc0NG', 'WRZcOuZcSSo6', 'WQ9CW4ldI3m', 'W4X9W4VcHCk1', 'W6C5tq4', 'W7eAW6L3ba', 'WODlWQHAFW', 'ywhcRCoOla', 'xmoTemofCG', 'WPKSWPuaqa', 'du9ZW4tdNq', 'ACogW4tcHSog', 'WQ/dP8okWR3cQW', 'CmkDW5FcUmoQ', 'WRxcJc/dQaa', 'W7efW6aKaW', 'oCodW43dGqG', 'EmoWmCodlq', 'WOFcNmkMWQBcJG', 'uaLlxSoG', 'Amo6nmoz', 'WOpcGSkW', 'WQGvW6BdRu4', 'WRlcMttcPaK', 'nCkZWQ7cG8kq', 'yui+kCke', 'AtRcGGKN', 'eSoVocu', 'leG1nH4', 'pCkFW7W', 'puuNk8kA', 'ubpdJ8oZEG', 'WQzzW6BdTf8', 'cCk6umksW6u', 'uCoZmSk5rW', 'W40TW4T2', 'avvR', '4lAmWRnzW4K8', 'ys3dRCoUEq', 'hGpdVfDu', 'WORcM8kHWRFcMG', 'mmknCtqI', 'm8kaCsD/', 'fCkubf9M', 'W6qjWRlcTaS', 'W7WtWQZcNmkt', 'E8k6FNpcTW', 'oINcLWzh', 'WO3cJmkrW5iL', 'WQqfrKeF', 'WOmCcrlcOq', '4lEu4lAYW7dGTRhGTja', 'jJLQWQJdLW', 'yCoAWRRcQmoN', 'jCoWoadcTa', 'W7JcTeKDmW', 'W73dJcycW5i', 'WOuUW4O4la', 'W70DW6q+uq', 'W5/GTiZGTQhGT6FGTi0', 'WPFcKCkzWP0X', 'D8oKW6RcNSoK', 'iSoKWR7cVCo0', 'WRFcKKGkpq', 'aCk+xq', 'pmo+W7lcVmo+', 'W5KwW5qpoW', 'W5DrWORcOCkU', 'WO1IhW', 'W6tdJ8oEWOBcGG', 'pSkvCdaJ', 'eCoCj0i', 'W74DWRtcJq', 'WPicWQGXCG', 'FCohW5tdO8oS', 'DsRcKbbD', 'WPVcV28sFW', 'W6RcM0HRWPa', 'rqhdJ8oUCa', 'BSkJq0lcLG', 'WQDsW6VdO1u', 's8oAW5hcQSoR', 'pLlcOG85', 'kSktWQBdLCkK', 'WPBcOdNcVWy', 'WPZcImkfW4jb', 'dmkUq8ktW5m', 'WPtcHCkAW5mR', 'WP8SWOqErW', 'y8kUWRdcRGhcM8kvW4JdJ8kW', 'WO4/lvFdRW', 'F8kVuG', 'fqBdLmoOnq', 'WPHXgtiQ', 'W5yAW54Bjq', 'WRhcQSkEW41F', 'xmowj0rS', 'cmoxux4c', '8k+GOUkaLpgnGiVcR+g0OEg2K+g1Ka', 'WQ3dJrfUW5m', 'n23cO1xdIq', 'W7G0B0yE', 'W6pdS8ooW7dcVG', 'W6SIhMy9', 'WOLVhZ4P', 'WPP4x8kHfa', 'WORcPx0CyG', 'bSkhxbmv', 'WOzsWR1nAq', 'WPnJW6pdVNy', 'W4RcV8ogWPn0', '4lsb4lEO4ls/4lsHgW', 'l8oSWQZcUq', 'Bd58WRhdHa', 'aLiqsCo6', 'B8o0iSodmq', 'WPhcJhWdW4q', 'DCohW4JcQSo7', '4lAX4lwG4lAgfUc2Uq', 'W7VcN11TWOm', 'W7JcSSoHWPH9', 'uSoBkbzQ', 'WOu4W5bRiq', 'lSoQnSkxqq', 'ASoBW5xcUCoQ', 'W4q4W5PRiq', 'W77cVmo2WQr+', 'imkuDYe0', 'WPhcGCkyW5bJ', 'a8knsWW4', 'W59XWPXnW6y', 'W6D4tLib', 'WOxdGdSkW5u', 'W68KrWWk', 'W587WO4Dha', 'lLa+Amkb', 'W6WnW5ephq', 'W5LMWRGNW4m', 'gCo4mG', 'xmkAAvPH', 'WOfUet4Z', 'W4RdGCovW4ldKa', 'oCo3jCkbgG', 'pcJcIXah', 'W6RcM1LKWP0', 'D8kVvLhcLG', 'oLmYnq', 'W68DWRBcNmkt', 'WOPdWRPE', 'WQ7cMtlcPWi', 'WOFcUmk0hZ8', 'CmoSnCo2ka', 'wSohuNSn', 'WP4DaW3cIa', 'W7eyWQO+fW', 'e8ohiXzV', 'wXP+ySoG', 'B0e+z8kp', 'kmo6n8kaqG', 'v0/dNCoVEW', 'WPtcHNpdK8oK', 'f8o+lMBcSG', 'W53dVCk0rdO', 'WPddPgmo', 'W6WwW6qJta', 'DXXjwSo3', 'WQpcLCkKWOtcKa', 'W5xdT3zFWOy', 'WRtcHmk7WOJcRq', 'e8oaiW', 'W5BdPSoCW6W', 'jmoNWQ3cV8o/', 'ke84imkp', 'W7/cJL07', 'WOCAWPGOyW', 'W6DPuKym', 'uGpdUffq', 'W7G/r1yn', 'pmo2kmkqqa', 'lcC2WQ7dLq', 'dCkhWPZcKSkL', 'gGDXW4lcIG', 'pgNcLqTz', 'W6ldOmoyWRZcRG', 'xmoVemogEW', 'g8oyc1X9', 'W4BcOYGaWP5tW4hcI8khlK7dJIu', 'W5DrWPy', 'WPfXw8oQbq', 'WRxcMs/cUb8', 'W4BdOSoXwd4', 'fmoBm1HS', 'ECosfCk6wG', 'm8k/iSkAxa', 'WQbwW6i', 'h8opltdcVW', 'W4mXWOWxha', 'W5VdL8obWOxcHG', 'W7fTWOq1W7a', 'WPlcQmktWOJcOW', 'dmkOt8oru3L4jNpcNq', 'B0CYkCkg', 'WRtcUYVcRay', '4lsQW7dcT8o3ma', 'W4ZdLSomW4mJ', 'm8oFmwbf', '4ls14ls24lARe+c0MW', 'WOT1W5FdN0K', 'h8ovmL57', 'WPG2leddOq', 'W4JdIZizW5i', 'WRXXW5hdSCk1', 'WPLTwq', 'W5uWWPWdW68', 'W6K4DKSL', 'mJFcKvy', 'WRJdPw9KW5e', 'W5DrWPRcOmkZ', 'aSoLjcRcPa', 'Fmo+nmkCzq', 'pSore8kbDW', '4ls84lAE4lEYe+c0Hq', 'lSoEcCkTzG', 'sCoVdmkn', 'aCk+hSkyW6e', 'ldHG', 'W6XnW7tcK8kH', 'kqS9jWq', 'WRDoqCokgW', 'wheW', 'WOvKfZy', 'AauHnq4', 'W6NcNu3dH8ocEdG', 'vgGApN4', 'gmkpqcWl', 'ymowWPy', 'vCo8emkAnG', 'rmohthay', 'qWtdTfvd', 'W6aDWR/cH8kx', 'W7pdM8oJ', 'WP3dOM5dW5u', 'W7WgW6KpmW', 'W5hGT6xGTzFGTR8t', 'WRZcVHW', 'B8k3uKxcHW', 'lmk1W6NdSKm', 'W6PFW6NdKCkq', 'iCoyeJ7cQa', 'WPZcNNBdM8oh', 'zCoNkq', 'eCovmLnV', 'F8kLuKxdKW', 'W74UxXFdTG', 'qqRdRvfs', 'b8kYvSkjzG', 'W5PSWQ1OuSkgW5q', 'aCkNDXWb', 'vwxcRmo+ka', 'W5NdHCoE', 'W7/dJtuGW5a', 'WPRcHCkeW5rS', 'lSktWQNcLSkG', 'EmkWW6FdQmkK', 'WPaTWOyxvG', 'vGhdJ8o/CG', 'WRNcNNVcVam', 'W5vmW4ZcVSkO', 'deHQWPdcJG', 'A8oOWRBdUSkW', 'WP3dS2HqW4C', 'vWLxs8oH', 'nmkcWRZcHCkN', 'WOLUeW', 'W7hdHSo9W5W', 'WOm9WOatrW', 'omkmEti0', 'avn6W5xcNq', 'fH5xt8oN', 'W7/cKqKOWPm', 'W6mFWRNcHSoA', 'YPVlMog3OvdHTl4', 'jCoVWRi', 'uGxdJ8ofyq', 'cCkyWQNcL8k4', 'W43dHSoMW7pdNW', 'pLZdMreP', 'jhZcT1xdKG', 'WPK9WPmtuG', 'WR/cGIm', 'nMhcV0VcHG', 'WQG7gWNcRW', 'WO9kWQbCAq', 'WPXSWPqgWQS', 'FCosm8oykq', 'W4KPW5eOoG', 'weBcJG', 'xbHnamoW', 'W51AW4RcQCoM', 'WOVcMCkWWQNdIq', '4lw14ls/4lEK4lA24lEx', 'bJz/qghdVq7cMWxdGq', 'W5uiW606aq', 'bsyadIq', 'tSo4cSkasq', 'nY96WQhcNW', 'W5RdUCkLwIG', 'veVdVeTd', 'EYdcLrDe', 'WOSgWR5sAa', 'DmodW5lcPCo8', 'WPtcLmkaWP4', 'W6NdJrnnkSopWRL2WPpdMSo4xa', 'WRr5dfSm', 'WRVcIdNcRf0', 'fGpcVbbV', 'WP18wCoQea', 't8o8f8kmEq', 'mc9RWQRdNW', 'peu5i8kU', 'WR3cLfmCya', 'WOm7WOazhq', 'oqRcIcfH', 'i8o+W67cTHW', 'oSkAWQFcMSkM', 'fCoRpYpcNa', 'jSo+W6hdPa8', 'ibmGnGq', 'WQ4kb1ldUG', 'vq7dQWTu', 'jSoOWRJcV8oI', 'Dq94jSkt', 'WOu/W5OQjW', 'iCodf2nI', '4lAe4lst4lwKW7RGTkK', 'WPWYjHpdOq', 'lrv04lEx4lET', 'rSoqz0ev', 'W6e4uvyh', 'emkzxJm2', 'WPqQW4WkrG', 'W47dGtWFWOW', 'W44AWRLpDq', 'W4/dH8oxW4hdGW', 'W5NdHIaEW40', 'W5ZcMCotWRjd', 'W5LSW5hGT7pGTj0', 'kYFcULBdIq', 'zHVcNHWU', 'cCo3uSkDW6e', 'WOTVqq', 'vW1AqmoY', 'W7VcLKH8WOm', 'W6S8abldOa', 'W5fzW5ZcPCo2', 'yHRdT8oODG', 'W7GxWRVcGmoz', 'lmo5WQVdQa', 'gSkREYuY', 'B1JcG8onda', 'iSkWArCy', 'WR3cHWOdzG', 'W7tcQSo/WRnO', 'aIbFWRddKG', 'WORcOCkHWPtcNG', 'W6D4wLih', 'W6SPaaZcTG', 'q8oNgSoHkG', 'k24am8k6', 'W5ZdOmoeWOJcGa', 'WP9tWQzjFW', 'W4TSW5mQiq', 'W6iJW5aSoq', 'nb/cVrrt', 'W5iSwt4Q', 'WPniW57dTvO', 'W5NcT3zlWQW', 'WQJcNJ7cUH8', 'n8kuDdLX', 'dmo0W7xcTG0', 'xHrts8o9', 'g8kAfYjEWPhcJIHIW43cVCku', 'sLhcJ8ohcq', 'ctmwcsm', 'omoSWRhcVSoC', 'W5T3WPCB', 'xehcJCkwqq', 'WOvBpJK4', 'WPZcPeGFEG', 'W4VcMSoMWRjp', '4lwH4lAdWP8Pna', 'CCkWtG', 'WRZcGtlcQr8', 'FXFcIqzi', 'WR4OaW', 'WOvQeJu', 'a8knEmk0W4e', 'W4yJiI0J', 'W7ebW60Vea', 'W71wWR00W7y', 'W4VcL8oIWRPk', 'W67dQCocWQ7cVa', 'WOZcHvJdTmo+', 'WOHkW6ddTxe', 'imkuFsCO', 'W7tdI8oGWPxcQa', 'r8omaNqe', 'oCo+mmkCqq', 'W7HRv1ldSalcRCkIW4ldG8ovW7Hf', 'ECoWpSoefa', 'd05rW5FcHa', 'W5ddRmkJtG', 'lSkvWQNcNmo6', 'W4O+W4y', 'wahdLCo+', 'jhJdR1tcMW', 'aSolbH7cSW', 'WOTXdCoIfG', 'WRNdG1v1W60', 'W6TOW6ldTe0', 'wHtdLmo2Ca', 'W7FcKfTTWOO', 'kmkoBxu1', 'W7pcU8oLWRv7', 'mCkxWRZcLSk8', 'WPfOwCo/aG', 'aCoal1LM', 'W6G5vL0n', 'W4BcPCoiWQ7cOq', 'WP5sW6LjDq', 'xqPWWOldLG', 'rwyOgLa', 'W4pdHNmmW4G', 'WOJcKCkBW5rG', 'WRTqfqur', 'mSoRW7tcTGq', 'w8o2W77cRmo7', 'WQbpW6lcPK8', 'W7SgW7yRbq', 'W6GxWQVcIW', 'WP/cMMfsWPDSg2FdPmk9d38', 'tCo8dCkCCW', 'WPddM8kfW5vG', 'cmkOh8orCG', 'bwCH', '4lwy4lsk4lwxW7BGTQS', 'WOxdPhvfW48', 'FrVcMbrV', 'WPfVva', 'prqX', 'BSoogSkYxq', 'd0P3', 'wXjrwSo2', 'W4jUW6NcHSkP', 'BSkqBtaI', 'iSkoy8kGW40', 'WQbxW67dP0G', 'W7xcICo7W5FcUq', 'tKz1W5hcHG', 'CCk2x1pcGq', 'f8o6oYRcKG', 'W7ZcM1PR', 'WP1lE8oDdW', 'WQuQF1ddVa', 'jgtcUutdLq', 'jMPTWQBcKa', '4lAV4lwTWOBGTAlGTzy', 'aCk6va', 'nmo3W7pdS0O', 'W5njWRmkW70', 'kNRcTuhdHW', 'rWpdMSoZoW', 'yqaokmkw', 'x1hcG8oneW', 'WONcHCkaW5rG', 'pGSWmse', 'WOCiWQrCCG', 'o0GYz8ke', '4lwN4lwH4lET4lwg4ls3', '4lE64lwbWQdGTzxGT58', 'WRDcpW', 'g1r3', 'ubJdSSoFuq', 'WOJcLCk3WQ3cIa', 'WPJcKmkrWObS', 'omoWl8kqrG', 'WQ/cIcVcPbu', 'W6lcHSoUW4JdSa', 'o8ogaSkSqW', 'md7dMa', 'saFdRf0', 'umo/iIldHG', 'n8kiDda/', 'WR7cNeSCFq', 'u2y6gG', 'pSomeSk7Aq', 'gCk4CYud', 'iw3cO0y', 'WQqBW7pdQrS', 'W6ldMGGrDG', 'vmoRhmoiEW', 'g8kvWPNcSmkn', 'W5FcPMHjWRi', 'W4xcGZ8kW5u', 'W6TvW7u4dq', 'sColea', 'WQ/cSLNdVSoZ', 'WRJcJLTNWOK', 'vSoZe8kAta', 'WPdcJmk0WQ7dLG', 'WP8QCvtdPW', 'W58KW6KMmW', 'nmktns8K', 'W6JcPCoQWOy', 'WOxdGt8kW4i', 'sH5Er8k9', 'AmoAfCkfxG', 'WPtdJtJcQqi', 'chDJW6lcLG', 'CCkqBtaI', 'WPZcJxaqzq', 'W67dTCkuWR7dSG', 'WPzzW4lcSmkV', 'a8ojnCkJsG', 'ErvNF8kormoQaCoQWPO', 'WPmVjWFcGq', 'kCoGWRhcVCo4', 'b8obmZxcOG', 'pqhcQtPW', 'm8kKzCkqASkWW5yKWPlcKCkSWPG', 'bCkKqSkuW6C', 'W6W4WP84ma', 'fSosiWq5', 'eSkYumkwW7q', 'kSoXWRBcTCoI', 'WRpcHmoUWOdcOa', 'ESoNp8onkq', 'CSk0uGNcGG', 'c8kOh8oEDW', 'WRZcVGBdV8oR', 'kJLyWRVdGG', 'lmoSWRhcV8oJ', 'W7RcSSoKWRK6', 'uGtdT1fs', 'C8kRwv/dNa', 'zSo0m8oloW', 'W4ddQmkHrIi', 'WPpcL8kBW44', 'tCoqddzg', 'xmo4o8oAia', 'tmomW4FcR8oJ', 'c8kusrC2', 'mI5AxmoL', 'jmoAespcIG', 'lr8DaZm', 'DmokW5pcLmol', 'WPruW4BdO1q', 'rmomAuy9', '4lw/W5vfgge', 'WQpdVxDbW4e', 'WRizlJJcHq', 'W5xdVCkL', 'oNJcPHeL', 'bCoJWO/cLCoF', 'oCoMWRlcQSoL', 'WOLpWPzCAG', 'W603u0Ca', 'tq5A', 'CCodW5ldRCoJ', '4ls14lwxWOxdR+c1UW', 'W6ZdPmoFWQRcQa', 'WPX0q8oOwG', 'iSkvAJW/', 'ESoxW5ldRCoS', 'W4XAW4RcPCk8', 'cKj2WP4', 'yw3cOCo7eW', 'BSoWiSkooG', 'WRtcGdRcRWK', 'W5zXCfldVG', 'W7KfW7fQcG', 'aLiqt8oJ', 'j0uwnSkx', 'wSohuNSv', 'k3hcV0JdNG', 'tCoqaNzm', 'nYBcJbeh', 'pa47kfK', 'xrZdTuad', 'jgxcTq', '4lwk4lAea+c3Soc2Sa', 'AColW5xdOSoT', 'FSo9i8kakG', 'eGSIkay', 'W4CJW5SY', 'WRe4abtcUG', 'WOFdJ8kHWQJdIq', 'a19yW6RcHW', 'WO3cGSo6WRhdMG', 'WOZcJmkBW6DF', 'WPj9WPKdW7m', 'W7WZueyf', 'gmkQjYFcJW', 'kmkdWRRcL8k7', '4lE64lwp4lsX4lwCta', 'W63dPmocWR3dOq', 'wCo8dCkj', 'sCoos3yF', 'FNZcMSozcq', 'W7T3WRqTW6a', 'WP4SWOKvqq', 'e8oTdSk0xq', 'W5jDW5FdV8kL', 'iNJcPaxdJG', 'tmoWW7hcNCoE', 'WQainZxcTW', 'hSoVAYhcKG', 'bSorjv4N', 'teBcGCogrW', 'W4JdPSo6WORcLG', 'WP1sWQbsDa', 'zSohr3nm', 'mSkjodO/', 'W6CCWRlcMSkS', 'BCkcW4xcV8oQ', 'WPXPWPKdW7m', 'WOb3aI8P', 'W6hdU8odW5ldQq', 'xa17xSoq', 'W4a+WPiXia', 'W6ZdSmoeWOpcGW', 'FCkNrN/cOq', 'fCoIkJlcNa', 'eIehiti', 'tCkcvN8j', 'rwy6deG', 'zSonaN4b', 'W5vOWPqmWQC', 'W6qDzwSX', 'W55VWOusuq', 'qb7dVfzd', 'WQbdWR5o', 'WQ40vKaq', 'WOtcHSk5WQlcHW', 'yum/jSkx', 'WO9fySo/pG', 'CSowWPZcH8kT', 'WROVabtcPq', 'eWZcRdPK', 'qmk2wmovW6y', 'WPRdHmkCW4K', 'nmoVW6xcTGu', 'ybpcGGKL', 'WO9ZaN8Y', 'mmktWQBcKSkG', 'xq8Fr8oG', 'W6tdR8o5W7RdRW', 'W7dcSL5DWOu', 'ESodW5lcQmoO', 'WP47o1VdUW', 'WOW/aqxcSG', 'W6STablcPa', 'W6maW7JcN8kE', 'WPhdHmkBW44L', 'WQNcGmk8WOZcRW', 'W7GaWQ3cJq', 'nCkeFg5X', 'W43dIJ8oW48', 'W7W1qLPh', 'lmkxWRZcGCkX', 'lSo7WRZcU8o4', 'W5nZW54wW7i', 'WO1hWRLjCW', 'WPuKd3ZdNW', '4BAP4BAjW7hHTlhHTzW', 'imowbeXh', 'iWiT', 'W6pdKCogW73dNq', 'oCoNdIZcSW', 'WP1dWQHpEq', 'kCkfWQ0', 'WOOSfta3', 'hEc0H+c3GUc1MEc3Na', 'DSomW5ldRCoN', 'f+c2MEc2HUc3GUc3RG', 'rqpdReDc', 'j8oAj1rK', 'smkBAvD4', 'W5LuW4NcVSk0', 'qW7dQLbB', 'C8kQqM/cTW', 'B0eWjSkk', 'WOfNs2K7', 'WOrPgbac', 'lSoRlCkBsq', 'W4ZdKYChW44', 'WPHSbsS', 'kMxdV0ldGW', 'WRZcOaBdS8o6', 'jMFcVLhdGW', 'gCkAfInvWPZcQGT3W4pcRSkR', 'BCkNf1hcMG', 'WO/cJSkYWQlcMG', 'WOLjWQzADG', 'xdJdJv9H', 'm8koFcX9', 'WOHuWQzqvW', 'e8oziW', 'W6FdHmoQ', 'W7ehW7W', 'W5pdVCkHrJi', 'W6BdO8k3ysO', 'xqqcwmo6', '4lws4lES4lAz4lEHrW', 'vgSOdre', 'CGpdQSoFta', 'WOP1xSo8ga', 'W6WqW7y/dG', 'WRGPWOydEq', 'bSk+xCkqW64', 'WQhdQmosW6hcPG', 'W6NdKCkWW4NdRa', 'W50tW7SoiSoKWQiGWQz4duJdVG', 'WOnMdW', 'Ewu2WQhdLq', '4Bwi4BwQDpcUSj/IGQRXJ4g5', 'eCkfWR3cOSkJ', 'W7OKvLy', 'W5hdPCk+qZG', 'pmk1W7NdTWi', 'bLnMW4dcNa', 'W7OqW7yP', 'kg3cK3xdJa', 'A8kXuG', 'W4jPW5Lca3ueimkEw8oNW5ZdMG', 'WRZcMxVcSqm', 'W4JdOr4nW4C', 'lK0Y', 'a8kcESkTW48', 'dubtW7ZcNa', 'WQK3d0RdJW', 'WPjkzCokaG', 'mJFcKvC', 'WPiYWQOiEG', 'kmoWkmkq', 'b8ohiW', 'WODqWO1Tva', 'W47dNmoHW7ZdLG', 'WPldS3rwW5q', 'qez7W4dcHG', 'WRnAW7pdOXS', 'W7fBW7tcLmkF', 'Ab47m1C', 'WOVcVmkVWR7cRG', 'uSoVaa', 'W70DW6aVea', 'iMPYWQZdIq', '4lwS4lsN4lEQW6Hn', 'gq3dKmkxuqzunaVcVHz4', 'wmoqtxOC', 'WRK+tYhcIq', 'WQHxW67dTru', 'W5pdUCk5wxS', 'd05IW5NcJa', 'WP1WeW', 'zEc2Soc1VqxGTAu', 'yHFdLHXG', 'wxeml10', 'W603v1yo', 'AY3dIKjY', 'WPPUwYOO', 'WQvwW4ldONK', 'l8oSiq', 'W5FcMNbUWQa', 'EmopW4m', 'WPHVqSoIoG', 'C8kJufpcGa', 'eqBdVavw', 'W6OZufa', 'WR5kWQXCAq', 'oCoRWRddTCo5', 'W6nwW4tcS8kQ', 'mmk6F8oipa', 'iIn1WQBdLW', 'WQhcPeOSCG', 'W57dKCojWQtcOG', 'WPlcUJtcQI8', 'WPO8W40Koa', 'WOPSeIy', 'jCkiDZTS', 'WPO9BmogvW', 'WR3cHWCqya', '4Bwqz8M8Y6Wj', 'W68tWQZcJCkr', 'WRK/dGpcTa', 'WPeVpIlcPW', 'WPZdHmkaW48L', 'WR7cJcVcVau', '4lwe4lAR4lEP4lwB4lEk', 'FL3cJLa3', 'WO3cImk6', 'h8ornuvP', 'wmoVv8oj', 'xmo6hmkBnG', 'WQ/cNJ/cSIC', 'x08+leu', 'vbldN8kLyq', 'AMNcUqRdHa', 'm8oZaW', 'WRJcPqFcSW', 'WRldTuT2W78', 'm8kcWQdcKmkM', 'vG7dT0bf', 'WQJdImoMW5tdTG', 'q8ohwW'];
    _0x201d = function () {
      return _0x2d6ca9;
    };
    return _0x201d();
  }
  _0x2e197e.on = "body";
  cmd(_0x2e197e, async (_0x2de81d, _0x218d7a, _0x47eec9, {
    from: _0x55f409,
    l: _0x4d9af7,
    prefix: _0x28e058,
    quoted: _0x128392,
    body: _0x4d4257,
    isCmd: _0x54de60,
    command: _0x515728,
    args: _0xbc9b9,
    q: _0x3cab79,
    isGroup: _0x139a9d,
    sender: _0xb71006,
    senderNumber: _0x58af1d,
    botNumber2: _0xa4e1b7,
    botNumber: _0x527db8,
    pushname: _0xd9814e,
    isMe: _0x102171,
    isOwner: _0x4db625,
    groupMetadata: _0x3e0f37,
    groupName: _0x30b72b,
    participants: _0x367201,
    groupAdmins: _0x265f3d,
    isBotAdmins: _0x26680b,
    isAdmins: _0x674911,
    reply: _0x33167a
  }) => {
    if (config.AI_IMAGE === "true") {
      if (_0x218d7a.key.fromMe) {
        return;
      }
      let _0xe835e7 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x3cab79);
      const _0x5b2278 = {
        url: await _0xe835e7.result
      };
      const _0x99bff5 = {
        image: _0x5b2278,
        caption: "Powered by TalkDrove"
      };
      const _0x117d5d = {
        quoted: _0x218d7a
      };
      await _0x2de81d.sendMessage(_0x55f409, _0x99bff5, _0x117d5d);
    }
  });
  const _0x3c6995 = {
    on: "body"
  };
  cmd(_0x3c6995, async (_0x227a13, _0x9fb37a, _0x30f965, {
    from: _0x423694,
    l: _0x54b5e8,
    prefix: _0x1c3cb4,
    quoted: _0x2c5d05,
    body: _0x31b703,
    isCmd: _0x50f97f,
    command: _0x3cbb3a,
    args: _0x174f93,
    q: _0x2e2c42,
    isGroup: _0x5b3109,
    sender: _0x4de4ac,
    senderNumber: _0x469ef2,
    botNumber2: _0x2554af,
    botNumber: _0x1b4b3e,
    pushname: _0x8d1bb1,
    isMe: _0x49e60a,
    isOwner: _0x3c8378,
    groupMetadata: _0x298b59,
    groupName: _0x3e5b89,
    participants: _0x5a18d6,
    groupAdmins: _0x5cb9f6,
    isBotAdmins: _0x1575ab,
    isAdmins: _0x2118e9,
    reply: _0x2f4fb6
  }) => {
    if (config.MATHS_AI === "true") {
      if (_0x9fb37a.key.fromMe) {
        return;
      }
      var _0x2bee06 = (await fetchJson("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x2e2c42)).data;
      return await _0x2f4fb6(_0x2bee06);
    }
  });
  const _0x2cd47c = {
    pattern: "blackbox",
    alias: ['bb'],
    react: '👾',
    desc: "Blackbox ai chat",
    category: "other",
    use: ".blackbox hi",
    filename: __filename
  };
  cmd(_0x2cd47c, async (_0x38774d, _0x25c629, _0x3f77d8, {
    from: _0x3fcfae,
    l: _0x2497d7,
    prefix: _0x13f407,
    quoted: _0x5c6c06,
    body: _0x22381b,
    isCmd: _0x4afbb8,
    command: _0x3e326,
    args: _0x534c96,
    q: _0x54ec41,
    isGroup: _0x27362f,
    sender: _0x20bf3a,
    senderNumber: _0x4beeba,
    botNumber2: _0x279033,
    botNumber: _0x36c129,
    pushname: _0x1b1839,
    isMe: _0x36d16c,
    isOwner: _0x2013af,
    groupMetadata: _0x15fcd7,
    groupName: _0x592422,
    participants: _0x5cd84f,
    groupAdmins: _0x4b783e,
    isBotAdmins: _0x483322,
    isAdmins: _0x1c7069,
    reply: _0x43fea8
  }) => {
    try {
      if (!_0x54ec41) {
        return _0x43fea8("Need a keyword");
      }
      var _0x411a35 = (await fetchJson("https://api.yanzbotz.my.id/api/ai/blackbox?query=" + _0x54ec41)).result;
      return await _0x43fea8(_0x411a35);
    } catch (_0x487c49) {
      _0x43fea8("Unable to generate");
      _0x2497d7(_0x487c49);
    }
  });
  const _0x14e10a = {
    pattern: "bingimgai",
    alias: ["midj"],
    react: '📷',
    desc: "Generate Images using Bing AI",
    category: "other",
    use: ".bingimgai <prompt>",
    filename: __filename
  };
  function _0x19547a(_0x3abdfd, _0x13452b, _0xd271ca, _0x5bc418, _0x52317d) {
    return _0x391d(_0x52317d + 0x16a, _0x5bc418);
  }
  cmd(_0x14e10a, async (_0x6b91bd, _0xf4ed5b, _0x35eb87, {
    from: _0x59d58d,
    l: _0x57d074,
    quoted: _0x14e80c,
    body: _0x438f99,
    isCmd: _0x121205,
    command: _0x281a73,
    args: _0x1b8bd3,
    q: _0x46173f,
    isGroup: _0x2b75e6,
    sender: _0x442571,
    senderNumber: _0x34f969,
    botNumber2: _0x4c1ece,
    botNumber: _0x456bdd,
    pushname: _0x5db1b6,
    isMe: _0x4cd7cc,
    isOwner: _0x1b23ee,
    groupMetadata: _0x38d6bc,
    groupName: _0x2bc44f,
    participants: _0x4df2da,
    groupAdmins: _0x160bfb,
    isBotAdmins: _0x538a75,
    isAdmins: _0x34cb8f,
    reply: _0x255bb5
  }) => {
    try {
      if (!_0x46173f) {
        return await _0x255bb5("*Give me a prompt to generate images*");
      }
      let _0x5961a3 = await fetchJson("https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=" + _0x46173f + "&apiKey=vihangayt0");
      if (_0x5961a3 && _0x5961a3.result && Array.isArray(_0x5961a3.result) && _0x5961a3.result.length > 0) {
        for (let _0x310f06 = 0; _0x310f06 < _0x5961a3.result.length; _0x310f06++) {
          const _0x2e2113 = {
            url: _0x5961a3.result[_0x310f06]
          };
          const _0x221c02 = {
            image: _0x2e2113,
            caption: config.FOOTER
          };
          const _0x18c349 = {
            quoted: _0xf4ed5b
          };
          await _0x6b91bd.sendMessage(_0x59d58d, _0x221c02, _0x18c349);
        }
      } else {
        _0x255bb5("No images found for the given prompt");
      }
    } catch (_0x3d4f47) {
      _0x255bb5("Unable to generate images to the given prompt");
      _0x57d074(_0x3d4f47);
    }
  });
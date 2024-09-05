(function (_0x12bdb9, _0x5a0834) {
    const _0x10fa4b = _0x12bdb9();
    while (true) {
      try {
        const _0x3852a8 = -parseInt(_0x4a60(783, '%jq0')) / 1 + parseInt(_0x4a60(473, 'UrmB')) / 2 * (-parseInt(_0x4a60(475, '[w]D')) / 3) + -parseInt(_0x4a60(940, 'E$JX')) / 4 * (-parseInt(_0x4a60(860, 'UrmB')) / 5) + parseInt(_0x4a60(450, 'oFkc')) / 6 * (-parseInt(_0x4a60(342, 'eEnU')) / 7) + parseInt(_0x4a60(753, 'DJ$i')) / 8 + parseInt(_0x4a60(1225, '3EDn')) / 9 * (-parseInt(_0x4a60(950, '%jq0')) / 10) + parseInt(_0x4a60(1056, 'VKZ%')) / 11 * (parseInt(_0x4a60(601, '3EDn')) / 12);
        if (_0x3852a8 === _0x5a0834) {
          break;
        } else {
          _0x10fa4b.push(_0x10fa4b.shift());
        }
      } catch (_0x5991e9) {
        _0x10fa4b.push(_0x10fa4b.shift());
      }
    }
  })(_0x5d6a, 640053);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const {
    sinhalaSub
  } = require("mrnima-moviedl");
  function _0xbc775(_0x5f2525, _0x33403b, _0x5b0ec3, _0x1bf24c, _0x5d74bb) {
    return _0x4a60(_0x5b0ec3 + 0x1f1, _0x5f2525);
  }
  var {
    subsearch,
    subdl
  } = require("@sl-code-lords/si-subdl");
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
  const _0x244fcd = {
    pattern: "movie",
    alias: ["sinhalasub"],
    use: ".sinhalasub <query>",
    react: '🍟',
    desc: "Search and DOWNLOAD movies.",
    category: "movie",
    filename: __filename
  };
  cmd(_0x244fcd, async (_0x3d2528, _0x86600b, _0x547fc1, {
    from: _0x2e042b,
    l: _0x4a36e1,
    quoted: _0x30287e,
    prefix: _0x2cea79,
    body: _0x55eab9,
    isCmd: _0x21c68b,
    command: _0x2558fe,
    args: _0x137a95,
    q: _0x187a42,
    isGroup: _0x4bdd9f,
    sender: _0xdb0c23,
    senderNumber: _0x358a19,
    botNumber2: _0x53f7cc,
    botNumber: _0x1a1d4b,
    pushname: _0x28b84a,
    isMe: _0x2b81ae,
    isOwner: _0x1cd693,
    groupMetadata: _0x5249a9,
    groupName: _0x16bcb1,
    participants: _0x51ca46,
    groupAdmins: _0x3c70f7,
    isBotAdmins: _0x48f327,
    isAdmins: _0x254ebd,
    reply: _0x459382
  }) => {
    try {
      const _0x1e95ad = await sinhalaSub();
      if (!_0x187a42) {
        return _0x459382("🚩 *Please give me words to search*");
      }
      var _0x4f2819 = await _0x1e95ad.search(_0x187a42);
      const _0x3ba8f0 = _0x4f2819.result;
      const _0x2c7f18 = {
        quoted: _0x86600b
      };
      if (_0x3ba8f0.length < 1) {
        return await _0x3d2528.sendMessage(_0x2e042b, {
          'text': "🚩 *I couldn't find anything :(*"
        }, _0x2c7f18);
      }
      var _0x194006 = [];
      _0x4f2819.result.map(_0x1dbc28 => {
        const _0x165642 = {
          title: '' + _0x1dbc28.title,
          description: "Type : " + _0x1dbc28.type,
          id: _0x2cea79 + "dlss " + _0x1dbc28.link
        };
        const _0x3846d3 = {
          rows: [_0x165642]
        };
        _0x194006.push(_0x3846d3);
      });
      const _0x375e6d = [{
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Tap Here!",
          'sections': _0x194006
        })
      }];
      const _0x166fce = {
        image: "https://sinhalasub.lk/wp-content/uploads/2023/08/icon.png",
        header: '',
        footer: "X-BYTE V4 \nBY TECHNICAL CYBERS ッ",
        body: "乂 SINHALASUB.LK - D O W N L O A D E R "
      };
      return _0x3d2528.sendButtonMessage(_0x2e042b, _0x375e6d, _0x547fc1, _0x166fce);
    } catch (_0x5907a4) {
      console.log(_0x5907a4);
      const _0x2ab20b = {
        text: "🚩 *Error !!*"
      };
      const _0x1580c1 = {
        quoted: _0x86600b
      };
      await _0x3d2528.sendMessage(_0x2e042b, _0x2ab20b, _0x1580c1);
    }
  });
  const _0x3054c2 = {
    pattern: "ssdl",
    alias: ["dlss", "sindubdl"],
    react: '🍟',
    dontAddCommandList: true,
    filename: __filename
  };
  function _0xb08c6a(_0x5da580, _0x1dc470, _0x315328, _0x2d8d03, _0x2b6128) {
    return _0x4a60(_0x5da580 - 0x42, _0x2d8d03);
  }
  cmd(_0x3054c2, async (_0x4ebe3a, _0x22e957, _0x553e3b, {
    from: _0x13aac6,
    q: _0x2016ba,
    reply: _0x226f17
  }) => {
    try {
      const _0x40c30f = await sinhalaSub();
      if (!_0x2016ba) {
        return await _0x226f17("*Please enter a query or a url!*");
      }
      var _0x2465a8 = await _0x40c30f.download(_0x2016ba);
      const _0x3e6fa0 = "乂 SINHALASUB.LK ＤＯＷＮＬＯＡＤＥR\n\n\n 🔖 TITLE :* " + _0x2465a8.result.title + "\n \n 📅 DATE :* " + _0x2465a8.result.date + "\n \n 🌍 COUNTRY :* " + _0x2465a8.result.country + "\n \n ⏳ DURATION :* " + _0x2465a8.result.duration + "\n \n 🛑 IMDB RATING :* " + _0x2465a8.result.IMDB + "\n \n ✨ GENRES :* " + _0x2465a8.result.genres + "\n \n    ";
      const _0x768e2a = {
        url: _0x2465a8.result.image
      };
      const _0x3ad1ad = {
        image: _0x768e2a,
        caption: _0x3e6fa0
      };
      const _0x174410 = {
        quoted: _0x553e3b
      };
      return await _0x4ebe3a.sendMessage(_0x13aac6, _0x3ad1ad, _0x174410);
      const _0x170da1 = {
        text: '✅',
        key: _0x553e3b.key
      };
      const _0x1f3e94 = {
        react: _0x170da1
      };
      await _0x4ebe3a.sendMessage(_0x13aac6, _0x1f3e94);
    } catch (_0x45a3a6) {
      l(_0x45a3a6);
    }
  });
  const _0x2cc321 = {};
  function _0x4a60(_0x24f57a, _0x187e5b) {
    const _0x18a4e0 = _0x5d6a();
    _0x4a60 = function (_0x4b5de9, _0x121b46) {
      _0x4b5de9 = _0x4b5de9 - 244;
      let _0x38c117 = _0x18a4e0[_0x4b5de9];
      if (_0x4a60.TknHFJ === undefined) {
        var _0x4f2be0 = function (_0x568902) {
          let _0x4db73c = '';
          let _0x3c48fb = '';
          let _0x2f5d58 = 0;
          let _0x3500e2;
          let _0x1376cd;
          for (let _0x2820c6 = 0; _0x1376cd = _0x568902.charAt(_0x2820c6++); ~_0x1376cd && (_0x3500e2 = _0x2f5d58 % 4 ? _0x3500e2 * 64 + _0x1376cd : _0x1376cd, _0x2f5d58++ % 4) ? _0x4db73c += String.fromCharCode(255 & _0x3500e2 >> (-2 * _0x2f5d58 & 6)) : 0) {
            _0x1376cd = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x1376cd);
          }
          let _0x4b067f = 0;
          for (let _0x4eb6c6 = _0x4db73c.length; _0x4b067f < _0x4eb6c6; _0x4b067f++) {
            _0x3c48fb += '%' + ('00' + _0x4db73c.charCodeAt(_0x4b067f).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x3c48fb);
        };
        const _0x4ab1b7 = function (_0xe17094, _0x33de71) {
          let _0x513cf3 = [];
          let _0x450abc = 0;
          let _0x1ee038;
          let _0x22f793 = '';
          _0xe17094 = _0x4f2be0(_0xe17094);
          let _0x50cad3;
          for (_0x50cad3 = 0; _0x50cad3 < 256; _0x50cad3++) {
            _0x513cf3[_0x50cad3] = _0x50cad3;
          }
          for (_0x50cad3 = 0; _0x50cad3 < 256; _0x50cad3++) {
            _0x450abc = (_0x450abc + _0x513cf3[_0x50cad3] + _0x33de71.charCodeAt(_0x50cad3 % _0x33de71.length)) % 256;
            _0x1ee038 = _0x513cf3[_0x50cad3];
            _0x513cf3[_0x50cad3] = _0x513cf3[_0x450abc];
            _0x513cf3[_0x450abc] = _0x1ee038;
          }
          _0x50cad3 = 0;
          _0x450abc = 0;
          for (let _0x509dc8 = 0; _0x509dc8 < _0xe17094.length; _0x509dc8++) {
            _0x50cad3 = (_0x50cad3 + 1) % 256;
            _0x450abc = (_0x450abc + _0x513cf3[_0x50cad3]) % 256;
            _0x1ee038 = _0x513cf3[_0x50cad3];
            _0x513cf3[_0x50cad3] = _0x513cf3[_0x450abc];
            _0x513cf3[_0x450abc] = _0x1ee038;
            _0x22f793 += String.fromCharCode(_0xe17094.charCodeAt(_0x509dc8) ^ _0x513cf3[(_0x513cf3[_0x50cad3] + _0x513cf3[_0x450abc]) % 256]);
          }
          return _0x22f793;
        };
        _0x4a60.Jqjesu = _0x4ab1b7;
        _0x24f57a = arguments;
        _0x4a60.TknHFJ = true;
      }
      const _0x2e2a39 = _0x18a4e0[0];
      const _0x3e4b78 = _0x4b5de9 + _0x2e2a39;
      const _0x15f74e = _0x24f57a[_0x3e4b78];
      if (!_0x15f74e) {
        if (_0x4a60.IePYZv === undefined) {
          _0x4a60.IePYZv = true;
        }
        _0x38c117 = _0x4a60.Jqjesu(_0x38c117, _0x121b46);
        _0x24f57a[_0x3e4b78] = _0x38c117;
      } else {
        _0x38c117 = _0x15f74e;
      }
      return _0x38c117;
    };
    return _0x4a60(_0x24f57a, _0x187e5b);
  }
  _0x2cc321.pattern = "uploadme";
  _0x2cc321.react = '✔️';
  _0x2cc321.alias = ["upme"];
  _0x2cc321.desc = "Movie Searcher";
  _0x2cc321.category = "movie";
  _0x2cc321.use = ".IDK";
  _0x2cc321.filename = __filename;
  cmd(_0x2cc321, async (_0x27e054, _0xa9872e, _0x3f1a78, {
    from: _0x685e35,
    l: _0x5a3251,
    quoted: _0x5bfc2c,
    body: _0x72252d,
    isCmd: _0x2fdd61,
    command: _0x3361c4,
    mentionByTag: _0x4f6b9b,
    db_pool: _0x3a69c0,
    args: _0x262129,
    q: _0x435482,
    isGroup: _0x195524,
    sender: _0x533c50,
    senderNumber: _0x3ba89e,
    botNumber2: _0x441fd0,
    botNumber: _0xf32761,
    pushname: _0x14ef3f,
    isMe: _0x5575bb,
    isOwner: _0x53bf15,
    groupMetadata: _0x43e9c5,
    groupName: _0x285050,
    participants: _0xd4f1b6,
    groupAdmins: _0x25c03f,
    isBotAdmins: _0x1c51b8,
    isCreator: _0x548712,
    isDev: _0x5d7287,
    isAdmins: _0x1c6967,
    reply: _0x1c4703
  }) => {
    try {
      if (!_0x3f1a78.quoted) {
        return _0x1c4703("*.upmv spider man*");
      }
      const _0x31239e = _0x435482.split(" | ")[0];
      const _0x288240 = _0x435482.split(" | ")[1];
      const _0x5287f4 = _0x435482.split(" ¥ ")[1];
      const _0x2a0672 = {
        url: _0x31239e
      };
      const _0x1f0ec5 = {
        document: _0x2a0672,
        caption: _0x31239e,
        mimetype: _0x288240,
        fileName: "DOWNLOADED." + _0x5287f4
      };
      await _0x27e054.sendMessage(_0x685e35, _0x1f0ec5);
    } catch (_0x52a9dc) {
      _0x1c4703("❗ Error" + _0x52a9dc);
      _0x5a3251(_0x52a9dc);
    }
  });
  const _0x26251f = {};
  function _0x5d6a() {
    const _0x1efa97 = ['q1DOWOK', 'cNFdKCkEWRi', 'W65gFCk/qa', 'ubzeW7PL', 'gYtdJmkAWQi', 'estdGc7cTq', 'nvLhWO8T', 'WOdcG2RcN8kB', 'WQqnW6pdLW', 'W7LlWO9RWQy', 'fSkcWRPlpq', 'W6FdL8kQW5qe', 'WQNdVMRcPCke', 'vCkdW7TqtG', 'C8o2WQ/dQSkO', '4P2pWQpdHCo4WOq', 'WRNdICk1WPOg', 'WQ0jW7hcRfK', 'yCo1W4/dJSoe', 'WP8KW6XgWPW', 'WOhcQSkY', 'DCoWW6C', 'kSkvnmo4W4W', 'WRzhWQddLSoH', 'W7fPW5xdRs0', 'W7ZcMSoyW4CV', 'eSk/W5NcN8kr', 'W70nWOe5', 'c8owW6y8W5O', 'WQunW6ddMCkj', 'lCobWQxdQ0O', 'WO02W57cNooaVG', 'W4hcOCoTWOyh', 'AKzTWPCa', 'W5mLWQbfWPG', 'mSk5pq', 'W6BdK8oIW6LD', 'tbldMvDj', 'DSoPW7ddOSoN', 'lSk7WPPfdG', 'dCkpW5FcP8k8', '8yMLK++6Qa', 'W6tcTe8jW7u', 'WRJdJWTSWPy', 'cWzrWQ1z', 'Fmo3W7y', 'WQ/cVMS4wa', 'W5fZmCoShG', 'ibNdHSowiq', 'jSkWWPxdR0xdVSozWRG', 'WRxdPqLuWRm', 'h8oWWRFdII8', 'WO7dL2HfWPS', 'omohW4hdNSkZ', 'W7xdVComW6K', 'WR/dUmowW6rb', '8jQaG0ddJSowyW', 'WPj2ESo/WPS', 'W4FcPY4', 'BmoMW7JdVG', 'bZ/cISoSma', 'WRxdMwPjWQe', 'WP7dVeJcUSkP', 'bSooWPW', 'nLFdOeS+', 'nmoxqItdKa', 'ASoZW6NdV8oN', 'xmk8W6/cJMm', 'WQVdUx7cNCkk', 'WOtdV8o4W5nG', 'utG+mWC', 'C8oHE8kDdq', 'WR3dUColW7RcSa', 'BGldM2L7', 'n8kNWO7cOSkz', 'oSkKq8o1WQm', 'lmoRW7OVW54', 'W6qZWPVcTKy', 'xt/dHSoVWRveWOmVWOy/p8kntq', 'jCk7WQu', 'WOBcMfPJWQK', 'WRVdL8oVW7L5', 'lsNcG8oIpq', 'mmo/W64gW5O', 'scmAnrW', 'xthdSW', 'DCoHWQBcSCkQ', '4PYhW5CHDSoQ', 'WR/cImoSW4zA', 'aLvi', 'mCkzefVdRq', 'wdhdO0Hw', 'WQNcU2u', 'WP5+WOxdImod', 'sKjWWOa', 'eIz/WP5e', 'mavLWPzz', 'WQ0xW77dNCkA', 'WO/cOmkNWR3cUG', 'F8odWQW8lG', 'W6v6W5tdVW0', 'EmomDCkRdW', 'W7euW63dSq', 'WRRdL8oGW75a', 'W5bSl8kLsW', 'WQVdMSoKW68', 'mSo5WQi', 'CteobJC', 'xKKEW7n+', 'WROuW7lcS0q', 'maRcTmkL8k6pKq', 'WQlcO04vtW', 'CmkZe8o7W7q', 'dSk1FmoxWQW', 'r8klW7a', 'WQfQWOVdNCoJ', 'W4RdMNJcHhC', 'W5RcR8o4WPWn', 'dMpcMW', 'WOafW6hdK8oD', 'FSoQW6ZdR8ky', 'dIpcK8k5W7m', 'pCoOWRpdILa', 'WRSbW6pdMmkW', 'bclcKmkLlG', 's8kAasldOq', 'W7qBWPu', 'WR7dK8o1W7HR', 'WQFdQtdcSSkK', 'WPlcR2S4gq', 'tvT7WQ4i', 'FmozWRm4jW', 'pef/WQ9Q', 'mmoAW7VcISkB', 't8klW7rtzG', 'gmkaW5hcO8k3', 'lSowWRtdIMm', 'WPldOKPGWR0', 'WQZdK8o1W7G', 'r8oMWRxdPSkb', 'WQTPWRNcNmoi', 'tmkwgYRdIq', 'srOyWPZdVa', 'g3qLW5fd', 'BZddRgDV', 'fq3dQYdcJa', 'zSo0WQVdLuG', 'dmoBWP8YrG', 'oCo7WQ3dKq', 'o3hdG8kUWPK', 'pCk2jW', 'ACoNW4lcPmkD', 'deDBWP5h', 'W4/dK2lcHG', 'c0So', 'WRiWW5dcLuq', 'WQZdLSocW7jz', 't8ksatRdOq', 'bSkvW6bwiW', 'W4tIHPuWW5JcNG', 'CgqxWPJcRa', 'm8kKamoSW7y', 'W6NIHOe+aSkl', 'ecRcLCoM', 'W6PImCoQsG', 'aUkfUSk/umoq', 'W6v2W5tdSYe', 'xZuZ', 'W5hdTCktWQaR', 'E8oCWRy8oG', 'W5bMpmoMhG', 'WOpdN8ouW5pcVq', 'W6/dUNVcP0S', 'WQddVGPKWRO', 'Emo6W5KrW70', 'BbldMNLt', 'dmo6W5SBWP8', 'BXBdGgL7', 'q8kRW6pcHCkK', 't8kwW6fDBa', 'xmksasVdOW', 'y3ecWRpcVa', 'vmoyWOBdPh8', 'lmkWWQi', 'fYFdNIS', 'sCkAW4u', 'AGFdMhj/', 'mCoCW7O', 'W5pcQSoOWQug', '4PYjvNxcJxi', 'yCkPfmo2W7y', 'dCkdW4VcUSkR', 'hwVcJCkJW6K', 'WOVcRmk5WQRcMa', 'tmk6W6ZcJgO', 'c2VcJCk1W7C', 'FrJdKgq', 'W5HFW7xdLIG', 'WQNcVMS+tq', 'wCkqW7BcJuC', 'jSk8WR14bG', 'omoqW6xdQ8ke', 'W4b7WOLNWRa', 'WRJdSfjiWQW', '8yI7Kmk9W69KnW', 'W7amW5j8W7y', 'ahhcR0ZcKq', 'caFdKcNdQW', 'cmkhW7zaAG', 'BSoPW5xcTmkx', 'awX8', 'FaxdKxXQ', 'BSoNW5tcVCku', 'omk5WQRcQG', 'W7j/W4NdPeW', 'zCo6WRldJs8', 'fSo0WRrVWPu', 'oGVcISoinq', 'xrRdOItcVr/cLa', 'WOtcTSkH', 'x8oaW5BcMmkZ', 'cgrVy0fnWQtdSdddN8oZ', 'nCoRW7BcVW', '4PYRW5RdVCkHWQS', 'WRHYW5NdOWu', 'smoSW4xdMSk7', 'BmoKW4JcSmkd', 'FmoPyCkt', 'W4hdImkqWOup', 'wYlcJCoZ', 'W7dcMSokW4RJGQe', 'hvKFW7nR', 'lmk7qCk0WRi', 'f1mkW5HN', 'mmotASkzga', 'yq8yWPldUG', 'vSktW6zC', '4P6jwCoyWRDF', 'W51VWQ1nWOe', 'vCksW6DDBq', 'oSkNsG', 'BSozWQSXla', 'uLfY', 'b8ogWOBdQY8', 'Dmo4W4q', 'lqfjWRbp', 'lHTgW59Q', 'oSozWPCAqq', '5lQzjmkCW7xdRa', 'vpcrKRhcTLHQ', 'imocW5uIW7y', 'WRhdNw1zWPi', 'WR7dVSot', 'WRddIhjfWOO', 'pCoDW6a', 'WRddNxbiWRm', 'W6vJW5BdVHG', 'uLDQWOSp', 'BIVdHHRdGW', 'mIBcOCoSjG', 'hwhdKCkkWRK', 'y8o0FCkrba', 'qLbTWOug', 'W4tdQwlcHmke', 'CSoOWPe/ea', 'nmkSWQf4', 'W6WyWP41WRC', '4PY4lSk7WQtdTW', 'FCoVW6RdRSoS', 'DSoAWRldS+kmQG', 'Bmk/WQZdVCog', 'WOHxWQtdRCok', 'WRrmWRRdMCoa', 'bmkPWPdcJ0e', 'nCkef2xdVW', 'WPniW7H68yQ6Rq', 'yuThWOah', 'vGPBWQq4', 'FSk8mSocW4G', 'vuDTW4qv', 'urldShTY', 'E8oDWRO', 'WO/cPcL4WP8', 'umonW4NdICk3', 'WRnHWQ7dMmoh', 'xSkFhc/dTW', 'mb7dIbFcNW', 'WPnNFmkWWPq', 'BmoQW7tdPSkt', 'dCotWOygsq', 'lWnFWOTL', 'seD7W4Kn', 'WQldLxS', '776o77YS7728776H772p', 'FCoWW7pdQ8kr', 'trGpWPldVa', 'W4f/WRbc', 'CmkxW7BcGfW', 'uSopWQxdNSkb', 'WRFcQYCGvG', 'BmkqWRu0lq', 'wSoUWRldIeG', 'FCkqnSoCW6i', 'WQNcKSo0W69y', 'A8oQW67dRCkA', 'W7tcR2qJua', 'cSouWOab', 'eJ3dNIlcQG', 'WPtdPhxcUmkg', 'WQ0fW77dMCoD', 'CmkEhSoJW68', 'AmoIzmkrgW', 'c8kDWQTuoq', 'rejUWPai', 'BSouW4ZdQCom', 'WRNdTGq', 'W6tcPI7dLSob', 'p8k+WPxdPmocW59qW7pdRWvWWPFcT8k8', 'iSoTW6FcIs8', 'rqqkWPRdVG', 'gwFcMSkZW6O', 'W5FcGCoxWOWm', 'WRL+W4RcOW', 'lItdR8k7W7u', 'A8o8WQGEbW', 'icnd', 'DSoPy8kDba', 'WRRdLwdcK8ol', 'W6GrWOeZWQq', 'C8oUWQFdLea', 'gNFdHW', 'WR7dJ8ouW7RcKG', 'WRuibmkAW5u', 'cmofWROhqq', 'gmkXsmowWRi', 'rCk6W63cI2m', 't0RcQ8keW4q', 'AmovWR4+pq', 'yI0HoXm', 'cmk6nSoWW5K', 'xmoDWO/dHCk1', 'cmkgW77cG3q', 'ACo1WOvlsa', 'sJqkWR/dNG', 'AJWYjs4', 'WOPTEmo5WPa', 'wCk/WOddLSkK', 'WRrNB8oIWPy', 'rH4vWP7dLW', 'i8k9WRrV', 'gCkwiL7dRq', 'W41Xja', 'W7ldImkLW4O', 'W7tcQNqIwW', 'v8ogwmkTiG', 'sSonWONdPmoPDCo6WROSt8kPkCo3', 'W5JcUSo3WOmp', 'xSkdbsldRq', 'pmojW70L', 'wZpdSXFdKq', 'WQRdPCoiW6VcMW', 'WO9nWPVdTCoU', 'zCoKWQxdGLK', 'A8oZW6ZdO8kc', 'WOiKWPVdUCoH', 'ESkYnLBdLW', 'WO7dIXT1WPi', '8ksJTmoEWOldGde', 'eshcKG', 'at3cIG', 'WQ7dM8oTW7HA', 'FmozWRm4bW', 'xaCAgIa', 'W4JdNNtcLW', 'EmoWWRxdPSkd', 'lr9EWPHS', 'F8oHW4tcOSoq', 'WOe2W4ZcKCkW', 'rrKn', 'qrOC', 'a09bWPW', 'mSk+W5tcNSkO', 'tK56WPCQ', 'WRjGW6/cMSkc', 'zmolWOJdIge', 'AGxdMa', 'lSojW6mmW5K', 'WPWBW6/cKKm', 'lCo5WRDt8jApKG', 'oWTb', 'W4nAW4NdNcK', 'h2xdLSklWRa', 'WR7dN8oJW5rZ', 'bmo18yUESui', 'BfyUWQtcNq', 'WRddRrfyWPi', 'W6r2W4NdOGa', 'WRVdRJ7cUSkG', 'WOxdIwK', 'DgaBWPG', 'iSksbxddVq', '8jEBNLNdKCoCnq', '4P+IW6JdNmkyea', 'kLZcRCo28l6FNG', 'vsy+nWC', 'WO3dG37cGSko', 'B8khW5nUDG', 'lbBcGCorda', 'p0GeW5H9', 'nmktoSo4W7G', 'pmkXqCo+WO8', 'W5VdL2xcKwe', 'tbixWPZdRq', 'W5bNWQy', 'rSkLdCoqW4q', 'gmkvW5BcP8ky', 'c8ozWPCbAa', 'W4JdGNJcIMO', 'wSkWW6JcL2O', 'WPZdIxhcLCkF', 'ggzNyea', 'cvCTWQ3cUq', 'W6ldSZhcOuS', 'y8oKWRZdLq', 'k8k4xmoPW6i', '8jMMKmkMW5/dI8kW', '4P65WOXvWOtcMq', 'WQVdVJdXGQ2o', 'aM3dJ8kAWQe', 'cgVcKmkKW6a', 'WR3cOxuU', 'W7RcNwi2sW', 'cSoGW6WHW7S', 'W7D+W58', 'W7Pmo8onja', 'rZBcKSonW6e', 'WQFdGrbsWP0', 'FSovWQW+', 'dCojWPCsua', 't8k8W73cMW', 'dtNdMYdcOa', 'WPVdO0Ot', 'd8ovWOKwAG', 'twOvWOxcRa', 'WRZcP2SYvW', 'lqzCWPz0', 'hhtdJSkwWQe', 'aMhcImk/W6a', 'WQldOmoc', 'h1z0W59f', 'fJH5WRXb', 'm8kWWR95jq', 'fCkEWPJdTCo5', 'm8k8iCocW4G', 'h8oDWPewEW', 'kSoKWQi', 'W4xcQCoTWP4h', 'befJWOrP', 'oWvdWP5N', 'ySo+W4tcOSk+', 'W7ldQSk7WRm8', 'qCk4W7W', 'W4FcRCo4WOKw', 'WQ8cWPmyWRWWFa', 'kHniWOS', 'WRBdUCokW7RcIG', 'lSkUW57cOSki', 'BSo1W6m', 'FmoSW6pdV8kB', 'WRJdRvRcV8k5', '4PYyW7rQW6JcSa', 'CaxdJq', 'W6BdK2lcLMu', 'kr3dLv90g1e', 'vCohW4FcMCk+', 'tmoiW4RdHmod', 'W5maWOiZWQm', 'B8kLW5r4iW', 'WOxdUSkTW4nc', 'W4FcGmkNWR3cMq', 'rSo6WRhdPSkd', 'rIawbG0', 'zSo6W6pdQSki', 'W49QmmoGhG', 'xmksbtRdRq', '8kAsRSkAe8kaoa', 'odDxW5xdUCkpWOFdNIhdK8ofWOS', '8jwnUCk7WRzdWPO', 'y8kjpmoIW4qZia', 'WROCW67cPG', 'FdCBjr8', 'y2qxWONcRG', 'WQKiW6lcNmov', '8jQ8RCoKW7DSW74', 'WOZcQmkW', 'yCoOWQddHei', 'ACoJW6FdQmo2', 'fMpWUl+sWOxdQq', 'z8oGWRddLuG', 'dbJdGbtcOa', 'W4pdR3/cV2a', 'WPzRWRNdLCoh', 'mCkBdwxdQW', 'WPTnbCoMeHRcOa', 'WQWCW67cSee', 'pCobW7f0', 'wSoxW44', 'WR9RWRJdKSoo', 'tmkdgsFdSa', 'W6FdU2JcQ1a', 'qCo+WRpcR8kU', 'qqCjWPFdSa', 'vHynWP7dHG', 'dEkeMJ7dIHq', 'W4pdK3dcGwe', 'CSolW6NdKmko', 'CmovW63dUSo0', '8ysDQCo1WOlcUCku', 'WOy2W7VcJwm', 'W6ldICk5', 'lgRdGmkjWOe', 'CCkNW5Hnvq', 'xH5l', 'CSoIWQBcRCkI', 'WPZdQmonWRXc', 'WRpcO2yWxa', 'W7dcGCo8WOSp', 'W4pcOCkMWRRcLa', 'W7RdICk7', 'lrnrWO1J', 'AmoMW5u', 'WRJcQWDuWQW', 'W73dGLNcR3W', 'W7VcHCokWOaG', 'C8oOASkk', 'nIBdJsBcJq', 'j8kWWQu9gW', 'bmotWPmAqq', 'W7P8W5VdSX8', 'Emo2WQD/', 'xCkMW74', 'WRVcVNC7ua', 'WReuW6G', '8kczK8kyW7NcIsa', 'ymodwSkvaq', 'rbGAWO7dTa', 'ySoLFmknbG', 'WRJdK8o1W6Lr', 'W57dHMVcJhq', 'WRZdUCobW6y', 'wmoWWRxdPSkd', 'ACoNxmkReG', 'FSkOW6tdOSoA', 'jr7dSXxcHa', 'WQpcVMi', '8kMmN8k0gmoWW7K', 'l2GiWPO', 'W4hcPmo8W4Py', 'c2hdKCkC', 'kSkphmoEW5C', 'WPZdP1NcOCkB', 'A8oZW7xdOW', 'fv0s', 'FCoVECkrdW', 'W7VdG8ocW77cJa', 'tezN', 'W4rpWPD5WQ0', 'kCkMWQu', 'W7RdOYCtgq', 'h2rVFr0', 'WO7cPmkLWRVcNW', 'W4LPpmoseG', 'uLnZWPim', 'jXTgWPnA', 'lrnEWPTn', 'xSkEea', 'eclcICoZlq', 'kCogW7SHW5O', 'mfLkWPzW', 'nCo5s27cRG', 'WR0wW6e', 'xh3dLSk3Ca', 'jCkhcgVdUq', 'qCkfi8osW50', 'WPpdLI4D8yIqVG', 'zmoKWQRdHwa', 'WPfEWPukWQy', 'WPVcQCo6WP4l', 'W70PWP8yWPK', 'tCkwbJVdQa', 'cCkiW5q', 'nCkNWR0', 'uqiwWO/dVa', 'eConWQqeBq', 'dKTk', 'g0SyW7DR', 'FSoDWRO', 'vmkdW7rxDW', 'hdVcKSo1nW', 'W4/dUhRcQ10', 'j8oMWQa', 'WQddGJ5jWOu', 'qmkpW7Lrtq', 'WQBdLMO', 'W5BdMCkxWQCC', 'ACoYW4JcOCkw', 'WRNcR3CJua', 'eLefW70I', 'zhywWO4', 'vwZcKq', 'gXFdSIRdGmoRW4K', 'od5sWRTf', 'WP9JWQddUCoA', 'kSoyWPuWuG', 'vMlcJNldT0/dSh55WRFcPSk9W6e4', 'hunoWPrC', 'n8ogWOhdR38', 'jSkweghdHW', 'WRldQX5iWRe', 'sKPZWOev', 'WRtcPefmWQK', 'FGFdHhf3', 'oSoYumkOWQa', 'W7ayW77cSuq', 'k8kArmouWPS', 'WR8vW7tcPf4', 'hmoxj13dMG', 'mXXiWRLt', 'WQFdGmo4', 'ECorWQ8Pia', 'W7SIW68', 'xtSHoXe', 'gwxdLSkAWOO', 'wCkGW7tcLMm', 'gvenW68', 'W4jVWQ1oWRC', 'i8kdfM3dTG', 'W7tdM8kOWPej', 'sSkXW7C', 'y8kNW5VcUmka', 'va4jWP4', 'WQKiW6ZdJ8ki', 'D8oXW6tdUCoz', 'WOC4W7usW4DCW7dcP8k5zSo5WRlcOW', 'q8kWW6i', 'DSkHemoUW7O', 'WRtcSmouW7RcNW', 'ct7dGGhcLG', 'wCoeW7FdRCkU', 'CXilWPldVa', 'E8o3WQldO8kh', 'v8osDCkRbq', 'lCoGWQVdIMe', 'eIf6WPDR', 'uSorWRmYAq', 'WQpdTHe', 'WQ50WQpdK8od', 'WQ1zW5JdTGC', 'A8ofWRaPla', 'WR1TWQpdMCoS', 'WQxdOrnzWP4', 'WQRcR3mJxa', 'cmoZWRS', 'WQhcNpcBGzKKW7C', 'z8oSWRlcGuC', 'W4DJWQDpWPO', 'omoSWQNdI0i', 'WPVdNgtcGmkg', 'h8kqfdRdOq', 'DmkTbq', 'mYDQWPnU', 'BwWoWONcVq', 'WQ50WQldMq', 'WOPbyCo6WRy', 'W4vQk8oGsG', 'dCozWPyq', 'W5rIkCoGnq', 'lCk6WQD0dq', 'yCooW6RdHmou', 'yCk0W69NBa', 'b2v8WRTz', 'WQ0wW74', 'v8ktW7PazG', 'WOHWDW', 'xspdUKHm', 'ESoOWQNdHfK', 'WRpIHzhdKNtcOW', 'W69Sk8oSdW', 'h2pdKmk7WPm', 'W5JdNSklWQyk', 'pmk4WPNdOSogW59qWPVdMrDpWRtcLq', 'CHBdMNLs', 'W7xdQSooW68', 'rCoPW43cVSoq', 'yCo1ymkmdW', 'W5zQkCoPdW', 'rb4kWOVdTq', 's0W+W4Xt', 'gCkjW4VcSSk+', 'WQxdTbfuWQG', 'WP7cOmk7WQVcUW', 'W74RWR0', 'WR7cQKq4va', 'W6L+WOPjWRS', 'zSkPtCoPW6y', 'DqCyWQNdGa', 'ya3dLJ3dPa', 'WOddHtD0WO4', 'WPz7FCo5WOC', 'zmo0zSkwdq', 'iCokWRtdQ0G', 'WOlcLKxcSYq', 'dmk/wCovWPm', 'l8k0WRu', 'h2/cISkIW6a', 'W67dPeldHFcEKBC', 'W7nGW4NdTGS', 'WRSPW7RcGN8', 'xLn7', 'bmkpcmkwWPS', 'cSoNW7iKW64', 'W4tcSCoQWOmq', 'mokgICo/CYq', 'D8oXW7K', 'vCotl8ocqa', 'wtb3Dfq', 'nCkMWRq', 'ehj3', 'W45CW5ZdNYi', 'u8kxW5pcPq', 'WO3dJwtcK8km', 'tsddQ17dHa', 'CCkVa8oVW74', 'WP/cHSo8WO8g', '4P6bWQq4t8kU', 'i8kTpCoFW5u', 'WQTnsCoF', 'zSkQm8oXW4S', 'DxupWOpcQa', '8kApUmkAeCkemq', 'W740W5NdPx4', 'bMRdNSoWWQu', 'nCkuea', 'zdStWRNdLG', 'sCoUWQqNBq', 'xCoyWOBdUSkv', 'WRFcVwa', 'WO/dVmowW5tcPW', 'fshdLtpcOa', 'emkUpCkBW4i', 'WRFdNwzy', 'fZhdLcpcIa', 'nCotF27WVO6N', 'vmkjW6jh', 'l8ohW7KeW5e', 'ASoMW6hdQCkc', 'f8oEWR4', 'W41sySo1WPq', 'he8oW69e', 'W6jkW7JdJmkq', 'W5JdHN3cJha', 'mCkAaq', 'jmkNW6G', 'ps7dN8o3WQ8', 'WPBdV8orW7BcMW', 'g2VcHSkI', 'eKzbW4lcQxhdJIbReXJdJwi', 'xCoHW7NdOSkN', 'dXeUW5zv', 'du0jWRHG', 'k8owW7OXW7i', 'W7hdNL3cL3a', 'vSklW6muAq', 'aCo8W7msW4G', 'sNRcLttcOa', 'gSkwaCowWOK', 'ks5KWPTu', 'CmoGe8o/W78', 'CmkAW73cQKG', 'hw3cLSo8', 'W6FdM8kOWOal', 'WRldOmotW7BcKq', 'WOJcQ8kH', 'fspcJ8oKnW', 'eIBcISoGkG', '8kUnM20oWPldNq', 'a23dJmku', 'mCkJW5tdNmow', 'zgaqWO/cUW', 'nSkuW6b1W5K', 'WOtdM8ofW4rD', 'WQtdU8omW41D', 'fY7cKSoGiW', 'tCkMW6JcG2e', 'wCoUW5VcVSk/', 'ACoWAG', 'W6VdVJ9Kd8kskfRcRdNcJr5C', 'uZuJnXm', 'WPZcSmk6WRVcKW', 'rSolWO7dKgS', 'W5nAdmoIiW', 'z8o6WRddUSkk', 'WQvvASoOWR0', 'W7NcISkQ', 'DvfPWOuP', 'r8k/W6lcRSom', 'W63dGNDC', 'W4tdN8kUWP0l', 'h8kBW4ZcTSk+', 'tcZdSqRdPa', 'nxarW59D', 'qrSqWPRdQG', 'qZxcVXtdJa', 'AmoJW6JdR8op', 'a8oOWQVdGc8', 'aLxdUmktWRS', 'd8oAW73dOmoZ', 'cdD6WRzs', 'lmk1w8oZWQ0', 'FYWBgq0', 'nCkmqmovWRm', 'fmk0WQL8cW', 'W5JcOCo0WO8w', 'W7lcSmoZW4NdNG', 'y8oPyCkChW', 'WROmW4NcGhu', 'WR7dVSoIW4ZcRa', 'yCoZW6u', 'ob9CWPPU', 'DqeOWQpdJa', 'W6S/WQOzWRG', 'lmobW704', 'FHRdKq', 'W4pdPKFcO3u', 'o8k/WPddPSoaW5jqWRxdGcXpWOZcKa', 'Amo7W5lcSmkx', 'wdBdRby', 'tbGE', 'rsCY', 'z8oGwSkWWRm', 'yCo2WRFdO8kd', 'W4r6WRDC', 'DH0Teqe', 'v8oFWQK0la', 'k8k/WPddMSkK', 'W5vMWRbz', 'WR3dGSoTW7jv', 'WRj0x8oiWQa', 'A8oHW43cTa', 'dmopWPysqW', 'WQJdRIz2eW', 'W5pcOCo1WO8m', 'penDWP5n', 'BgpWUl+sWQ8', 'EmoGW7e0W40', 'DmoIW7pdV8ku', 'WO7dIG1NWRS', 'cCksnSoXW5y', 'b8kOWQVdSCoq', 'd00eW6jP', 'WR7dO8ouW77cMq', 'WRNdVCoaW7hcVa', 'dLbkWPLp', 'bLZcS8krW70', 'W6DMW5xdOWK', 'imoXWQeX', 'eSkjh8oJW7m', 'W5pcMVgiJzHe', 'DSoEW78J', 'hvKFW79J', 'ywGg', 'sKXOWO0e', 'kCk7WRu9cq', 'odvBW53dVmo2WQBdUbpdKmoZ', 'W55DW7pdLc0', 'dokhN8k1gNy', 'W7joWQ0', 'oXve', 'W7dcI1ufDG', 'btBcLCoSnG', 'WQtcISoKWRSmWRhcHmkiW4K', 'WRZdM8o1W7fr', 'WPxcTmk5', 'CSkqWR4Zlq', 'W4b/WQXEWPa', 'pXPzWP5Z', 'ehW9W5HJ', 'quDmWOnb', 'hgVcKmkYW4G', 'bSoPCCk8W6m', 'W7SEWP01WQm', 'cSkZjKldQG', 'c0nCWPq', 'WQRdImogW6T6', 'W7vYW4RdOWu', 'lLddP8k8WP0', 'oCk9s8o/WQ0', 'hslcH8oIiq', 'cCkyW4ZcUSkT', 'CCkdW7j4CW', 'EYBdSXVdHG', 'bCkSoSoyW5u', 'kxyNW5Ln', 'WRtcILezvG', 'i8khcg3dRa', 'btJdKYBcTG', 'W47dVMVcQ0e', 'W6FdJ8oRW6/dNa', 'W7ZdN8kL', 'W4fIkCoGdq', 'CxamWPJcRa', 'wCoLW7BdOmoq', 'WQ0PW6VcH2W', 'WQ7dKxnjWOO', 'W5yPWRyFWPi', 'tColW6NcNCkXbSk9WQ0', 'vdGipH0', 'imk8jCocW4q', 'ceiCW49Q', 'gZ3cNW', 'u1yiWR3cOq', 'fw3cHmkYW6e', 'WPJcTCkVWQBcHG', 'quTeWOe', 'W57cRCoG', 'WRJdUmocW60', 'FhqucZy', 'oCoEW7e', 'p8kfhq', 'm8owW60', 'CmkKawxdQG', 'zSoTW5G', 'gCoTWRa', 'uSk5WQP1WPu', 'WPlcGe4uEa', 'WO02W57cNpgaGRy', 'W554WRO', 'g3BdI8ks', 'vmkJW4pdK8k0', 'W5ZdVCo+', 'W60IbmkW8ykbQa', 'Bxye', 'k8ktW5fMWPu', 'W6PPgCosgG', 'AXddM3f4', 'uJSZkW', 'B8ocWRm', 'pmo1WPy4yq', 'FSo5E8kqaW', 'oCkLWRq', 'xCkLW7BcLa', 'iSo5WOOgsG', 'uHikWO7dTq', 'jSkVW7VdGmkez8oIWOHl', 'E8oPW5xcTmkV', 'W7RdQcCFwa', 'F8oTW4dcSSke', '8lMFHmosdmkxnG', 'ASoPFW', 'qdKHCH4', 'WQlcV0yGCa', 'W4dcUSo1', 'WOaYW6G', 'W6ZdVdfVc8kulwJcTZxcMIba', 'A8kJW4xcUCoC', 'W63dLw4y', 'esFdNW', 'kSkNxmo7WQu', 'cN3cJCk3W6i', 'WPSbW7/dLCky', 'EUkhJKqQW60', 'WRxdQWHtWQG', 'W4beW5hdGtK', 'xmonWOlcOSkR', 'lSkGWQL+cW', 'wtBdSaRdGa', 'rmojW7nbBq', 'W7uQW6u', 'gSomWOKAua', 'tmkWW6JcGq', 'bIRcH8oMma', 'WPLNWR/dL8oW', 'tCkzW5xcPuK', 'WQdcQSkJWQBcKW', 'WQNdTCogW7ZcIG', 'WONcKCktWPJcRG', 'W5ePWR4BWOu', 'FIvvWP5Y', 'b8obqxFcTmkAWQOxWRqPW4tdHW', 'sE++Mo+/IU+9Ho+8IG', 'WRldVmoc', 'deDFWOnb', 'W5pdTCklWROI', 'W7hdK8kWWPea', 'ctxdLcpcIq', 'sSoCWRO8oG', 'WOaQW4tdV8k8', 'FmkLbmo2', 'W5hcSmkTWR/IN5y', 'WOJdG3/cGSko', 'fCkxWPvrsa', 'eCkvW47cUSk8', 'ACkqWQSKoq', 'k1fNWPfg', 'WR3dGmoT', 'uSkwbY3dRa', 'ACoaWRm0pq', 'hmopWOa', 'W6HcWQ0', 'WRNdH8oUW6Lr', 'W7v7W5/dPq', 'q3qsyv4', 'qSowymk2kq', 'zCoKWRFdLee', 'aSo3W4eDW60', 'WPCKWOZdPCoG', 'rK57', 'WR1RWQddImoh', '5lQCwCooWOXJ', 'pCkwfa'];
    _0x5d6a = function () {
      return _0x1efa97;
    };
    return _0x5d6a();
  }
  _0x26251f.pattern = "uploadmovie";
  _0x26251f.react = '✔️';
  _0x26251f.alias = ["upmv"];
  _0x26251f.desc = "Movie Searcher";
  _0x26251f.category = "movie";
  _0x26251f.use = ".IDK";
  _0x26251f.filename = __filename;
  cmd(_0x26251f, async (_0x1f86d8, _0x44ac2d, _0x4ec416, {
    from: _0xf7412b,
    l: _0x3001fd,
    quoted: _0x740b04,
    chat: _0x4a4181,
    body: _0x1e9b81,
    isCmd: _0x37250f,
    command: _0x5458a2,
    mentionByTag: _0x2b1836,
    db_pool: _0x4c5bb4,
    args: _0x2fabbf,
    q: _0x521a8c,
    isGroup: _0x455e1b,
    sender: _0x41da0b,
    senderNumber: _0x51b28d,
    botNumber2: _0x156939,
    botNumber: _0x3252d8,
    pushname: _0x22df65,
    isMe: _0x1e792d,
    isOwner: _0x5afe8f,
    groupMetadata: _0x3298e5,
    groupName: _0xcada6b,
    participants: _0x36a324,
    groupAdmins: _0xfe0ecf,
    isBotAdmins: _0x37c1e6,
    isCreator: _0x50d57d,
    isDev: _0x1203cf,
    isAdmins: _0x6a1c12,
    reply: _0x19340a
  }) => {
    try {
      if (!_0x4ec416.quoted) {
        return _0x19340a("*ℹ .upmv spider man*");
      }
      if (!_0x521a8c) {
        return;
      }
      const _0x267393 = _0x521a8c.split(" & ")[0];
      const _0x428566 = _0x521a8c.split(" & ")[1];
      const _0x3522c0 = {
        url: _0x4ec416.quoted.msg
      };
      const _0x11a95d = {
        document: _0x3522c0,
        caption: "\n" + _0x428566 + "\n\n> *🎬 X - B Y T E 🎬*",
        mimetype: "video/mp4",
        fileName: "🎬 MOVIE DOWNLOADER 🎬\n" + _0x428566 + ".mp4"
      };
      await _0x1f86d8.sendMessage(_0x267393, _0x11a95d);
    } catch (_0x229250) {
      _0x19340a("❗ Error" + _0x229250);
      _0x3001fd(_0x229250);
    }
  });
  const _0x50893f = {
    pattern: "moviekv",
    react: '✔️',
    alias: ["mkv"],
    desc: "Movie Searcher",
    category: "movie",
    use: ".IDK",
    filename: __filename
  };
  cmd(_0x50893f, async (_0x42614e, _0x1859f3, _0x487b02, {
    from: _0x4c2fa4,
    l: _0x36437d,
    quoted: _0x6d7cbf,
    chat: _0x1ae457,
    body: _0x4fb432,
    isCmd: _0x539392,
    command: _0x41eef4,
    mentionByTag: _0x5b6726,
    db_pool: _0x29ce5b,
    args: _0x28c5b9,
    q: _0x2a84ea,
    isGroup: _0x42eeed,
    sender: _0x421ebb,
    senderNumber: _0x4e9650,
    botNumber2: _0x40a498,
    botNumber: _0x105081,
    pushname: _0x247b4f,
    isMe: _0x4bf283,
    isOwner: _0x46c73b,
    groupMetadata: _0x17a345,
    groupName: _0x56cb40,
    participants: _0x4df8be,
    groupAdmins: _0x214c72,
    isBotAdmins: _0x4cb279,
    isCreator: _0x2cc0a9,
    isDev: _0x4e33a3,
    isAdmins: _0x4afdd9,
    reply: _0x326dda
  }) => {
    try {
      if (!_0x487b02.quoted) {
        return _0x326dda("*ℹ .mkv spider man*");
      }
      if (!_0x2a84ea) {
        return;
      }
      const _0x3a856d = _0x2a84ea.split(" & ")[0];
      const _0x25deda = _0x2a84ea.split(" & ")[1];
      const _0x3a4c7c = {
        url: _0x487b02.quoted.msg
      };
      const _0x39d531 = {
        document: _0x3a4c7c,
        caption: "\n" + _0x25deda + "\n\n> *🎬 X - B Y T E 🎬*",
        mimetype: "video/mkv",
        fileName: "🎬 MOVIE DOWNLOADER 🎬\n" + _0x25deda + ".mkv"
      };
      await _0x42614e.sendMessage(_0x3a856d, _0x39d531);
    } catch (_0x54f6d1) {
      _0x326dda("❗ Error" + _0x54f6d1);
      _0x36437d(_0x54f6d1);
    }
  });
  const _0x1f038e = {
    pattern: "uploadtv",
    react: '✔️'
  };
  function _0x411d3f(_0x1059c3, _0xbdaaca, _0x3b2e09, _0x38c29b, _0x227fdb) {
    return _0x4a60(_0x1059c3 - 0x2ea, _0x227fdb);
  }
  _0x1f038e.alias = ["uptv"];
  function _0x2de085(_0x4dcea4, _0x157207, _0x4c14aa, _0xef26cb, _0x204a51) {
    return _0x4a60(_0x204a51 + 0x1fe, _0x4c14aa);
  }
  _0x1f038e.desc = "Movie Searcher";
  _0x1f038e.category = "movie";
  _0x1f038e.use = ".IDK";
  _0x1f038e.filename = __filename;
  cmd(_0x1f038e, async (_0xe94aa, _0xe30c55, _0x352570, {
    from: _0x529d60,
    l: _0x5bb2df,
    quoted: _0x3239e6,
    body: _0x2e3927,
    isCmd: _0x2032e7,
    command: _0x1d1329,
    mentionByTag: _0x1b3a99,
    db_pool: _0x240f55,
    args: _0x206289,
    q: _0x161e8f,
    isGroup: _0x4faa3f,
    sender: _0x47e4a9,
    senderNumber: _0x18196f,
    botNumber2: _0x1e1762,
    botNumber: _0x34a83d,
    pushname: _0x19812a,
    isMe: _0xbc700a,
    isOwner: _0x4db4ad,
    groupMetadata: _0x407d66,
    groupName: _0x1f61e2,
    participants: _0x9e5804,
    groupAdmins: _0x2c2bdb,
    isBotAdmins: _0x42c07d,
    isCreator: _0x14575c,
    isDev: _0x1465a6,
    isAdmins: _0x1376b3,
    reply: _0x2ffe26
  }) => {
    try {
      if (!_0x352570.quoted) {
        return _0x2ffe26("*ℹ .upmv spider man*");
      }
      if (!_0x161e8f) {
        return;
      }
      const _0x2ed0d9 = _0x161e8f.split(" & ")[0];
      const _0x4ae634 = _0x161e8f.split(" & ")[1];
      const _0x2594a0 = {
        url: _0x352570.quoted.msg
      };
      const _0x362a79 = {
        document: _0x2594a0,
        caption: '*' + _0x4ae634 + '*',
        mimetype: "video/mp4",
        fileName: "Powered by TalkDrove\n" + _0x4ae634 + ".mp4"
      };
      await _0xe94aa.sendMessage(_0x2ed0d9, _0x362a79);
    } catch (_0x22126f) {
      _0x2ffe26("❗ Error" + _0x22126f);
      _0x5bb2df(_0x22126f);
    }
  });
  const _0x5f0618 = {
    pattern: "uploadtvm",
    react: '✔️',
    alias: ["uptvm"],
    desc: "Movie Searcher",
    category: "movie",
    use: ".IDK",
    filename: __filename
  };
  cmd(_0x5f0618, async (_0x4fc16c, _0x200df1, _0x5d9613, {
    from: _0x2b7e31,
    l: _0x12d778,
    quoted: _0x1aab3f,
    body: _0x4d357b,
    isCmd: _0x340f3c,
    command: _0x5644ef,
    mentionByTag: _0x5651ab,
    db_pool: _0x5a4351,
    args: _0x67823a,
    q: _0x5c77aa,
    isGroup: _0x53f504,
    sender: _0x4b30ae,
    senderNumber: _0x36e575,
    botNumber2: _0x4144d8,
    botNumber: _0x521d76,
    pushname: _0x3b9a11,
    isMe: _0x34b7bb,
    isOwner: _0xf5570d,
    groupMetadata: _0x1dc7b1,
    groupName: _0x2b427b,
    participants: _0x9199b0,
    groupAdmins: _0x3344a0,
    isBotAdmins: _0xed5107,
    isCreator: _0x3b76d2,
    isDev: _0x22c3f0,
    isAdmins: _0x68196b,
    reply: _0x5dbd05
  }) => {
    try {
      if (!_0x5d9613.quoted) {
        return _0x5dbd05("*ℹ .upmv spider man*");
      }
      if (!_0x5c77aa) {
        return;
      }
      const _0x134c79 = _0x5c77aa.split(" & ")[0];
      const _0x3bff5 = _0x5c77aa.split(" & ")[1];
      const _0x4e8c68 = {
        url: _0x5d9613.quoted.msg
      };
      const _0x27008b = {
        document: _0x4e8c68,
        caption: '*' + _0x3bff5 + '*',
        mimetype: "video/mkv",
        fileName: "Powered by TalkDrove\n" + _0x3bff5 + ".mkv"
      };
      await _0x4fc16c.sendMessage(_0x134c79, _0x27008b);
    } catch (_0x2c49d1) {
      _0x5dbd05("❗ Error" + _0x2c49d1);
      _0x12d778(_0x2c49d1);
    }
  });
  const _0x3064ee = {
    pattern: "uploadmoviem",
    react: '✔️',
    alias: ["upmvm"],
    desc: "Movie Searcher",
    category: "movie",
    use: ".IDK",
    filename: __filename
  };
  cmd(_0x3064ee, async (_0x28f187, _0x58dc8e, _0xfaf46f, {
    from: _0x817b9b,
    l: _0x3fc022,
    quoted: _0x55e063,
    body: _0x509bb1,
    isCmd: _0x5e4ca5,
    command: _0x2f3cfa,
    mentionByTag: _0x5c73e9,
    db_pool: _0x3ff290,
    args: _0x426923,
    q: _0x21d188,
    isGroup: _0x21fe9b,
    sender: _0x23c34a,
    senderNumber: _0x21b341,
    botNumber2: _0x1a71ee,
    botNumber: _0x340356,
    pushname: _0x2a63d9,
    isMe: _0x491dcd,
    isOwner: _0x10ff3b,
    groupMetadata: _0x2311fe,
    groupName: _0x41612c,
    participants: _0x1b14e0,
    groupAdmins: _0xc7cada,
    isBotAdmins: _0x652f1c,
    isCreator: _0xe58dee,
    isDev: _0x194bc2,
    isAdmins: _0x33d0b3,
    reply: _0x40583f
  }) => {
    try {
      if (!_0xfaf46f.quoted) {
        return _0x40583f("*ℹ .upmv spider man*");
      }
      if (!_0x21d188) {
        return;
      }
      const _0x450067 = _0x21d188.split(" & ")[0];
      const _0x4ef3ca = _0x21d188.split(" & ")[1];
      const _0x143c76 = {
        url: _0xfaf46f.quoted.msg
      };
      const _0x1187c7 = {
        document: _0x143c76,
        caption: "\n" + _0x4ef3ca + "\n\n> *TECHNICAL CYBERS*",
        mimetype: "video/mkv",
        fileName: "🎬 X - B Y T E 🎬\n" + _0x4ef3ca + ".mkv"
      };
      await _0x28f187.sendMessage(_0x450067, _0x1187c7);
    } catch (_0x5751a1) {
      _0x40583f("❗ Error" + _0x5751a1);
      _0x3fc022(_0x5751a1);
    }
  });
  const _0x2a2fff = {
    pattern: "uploadzip",
    react: '✔️',
    alias: ["upzip"],
    desc: "Movie Searcher",
    category: "movie"
  };
  function _0x48b02d(_0x18eaeb, _0x578ca9, _0x2ad9a3, _0x5959dd, _0x4895ce) {
    return _0x4a60(_0x18eaeb + 0x75, _0x2ad9a3);
  }
  _0x2a2fff.use = ".IDK";
  _0x2a2fff.filename = __filename;
  cmd(_0x2a2fff, async (_0x3c2aa2, _0x5090e8, _0x58e698, {
    from: _0x1f5f0d,
    l: _0x17ffa6,
    quoted: _0x4599fb,
    body: _0x17779a,
    isCmd: _0x12abf3,
    command: _0x1c5543,
    mentionByTag: _0x446de8,
    db_pool: _0x164d2f,
    args: _0x214ea3,
    q: _0x1448e5,
    isGroup: _0x22199d,
    sender: _0x29fdd8,
    senderNumber: _0x5753f5,
    botNumber2: _0x530eb5,
    botNumber: _0x4b3e13,
    pushname: _0x42ba48,
    isMe: _0x1f9098,
    isOwner: _0x422f75,
    groupMetadata: _0x4a29a3,
    groupName: _0x5b7081,
    participants: _0x782f31,
    groupAdmins: _0xf3dbfe,
    isBotAdmins: _0xb1b01a,
    isCreator: _0xbc97e3,
    isDev: _0x3efc30,
    isAdmins: _0x31d678,
    reply: _0x1272fe
  }) => {
    try {
      if (!_0x58e698.quoted) {
        return _0x1272fe("*ℹ .upmv spider man*");
      }
      if (!_0x1448e5) {
        return;
      }
      const _0x53b278 = _0x1448e5.split(" & ")[0];
      const _0x37d4e4 = _0x1448e5.split(" & ")[1];
      const _0x1c5d14 = {
        url: _0x58e698.quoted.msg
      };
      const _0x241843 = {
        document: _0x1c5d14,
        caption: "\n" + _0x37d4e4 + "\n\n> *VAJIRATECH*",
        mimetype: "application/zip",
        fileName: "🎬 TECHNICAL CYBERS 🎬\n" + _0x37d4e4 + ".zip"
      };
      await _0x3c2aa2.sendMessage(_0x53b278, _0x241843);
    } catch (_0x1f9daa) {
      _0x1272fe("❗ Error" + _0x1f9daa);
      _0x17ffa6(_0x1f9daa);
    }
  });
  const _0x2a52af = {
    pattern: "uploadzipn",
    react: '✔️',
    alias: ["upzipn"],
    desc: "Movie Searcher",
    category: "movie",
    use: ".IDK",
    filename: __filename
  };
  cmd(_0x2a52af, async (_0x421b70, _0x36eb61, _0xc43406, {
    from: _0x5a9a3d,
    l: _0x52483e,
    quoted: _0x2b5b1a,
    body: _0x193a87,
    isCmd: _0xecdd8b,
    command: _0x30a677,
    mentionByTag: _0x46e6ef,
    db_pool: _0x5c0e68,
    args: _0x579092,
    q: _0x49b376,
    isGroup: _0x4662f7,
    sender: _0x23e1b5,
    senderNumber: _0x51e223,
    botNumber2: _0x15ef2d,
    botNumber: _0x3b1ef6,
    pushname: _0xd1f2c4,
    isMe: _0x2d89da,
    isOwner: _0x485566,
    groupMetadata: _0x4d267d,
    groupName: _0x510a14,
    participants: _0x266238,
    groupAdmins: _0xe66dc2,
    isBotAdmins: _0x2d1e8,
    isCreator: _0x3c2e5d,
    isDev: _0x6bb6fc,
    isAdmins: _0x27f9c1,
    reply: _0x459108
  }) => {
    try {
      if (!_0xc43406.quoted) {
        return _0x459108("*ℹ .upmv spider man*");
      }
      if (!_0x49b376) {
        return;
      }
      const _0xa822df = _0x49b376.split(" & ")[0];
      const _0x21356f = _0x49b376.split(" & ")[1];
      const _0x6f4d9e = {
        url: _0xc43406.quoted.msg
      };
      const _0x46b447 = {
        document: _0x6f4d9e,
        caption: '*' + _0x21356f + '*',
        mimetype: "application/zip",
        fileName: "📃 TECHNICAL CYBERS 📃\n" + _0x21356f + ".zip"
      };
      await _0x421b70.sendMessage(_0xa822df, _0x46b447);
    } catch (_0x3af1a0) {
      _0x459108("❗ Error" + _0x3af1a0);
      _0x52483e(_0x3af1a0);
    }
  });
  const _0x4efcdc = {
    pattern: "uploadzipfile",
    react: '✔️',
    alias: ["upzipfile"],
    desc: "Movie Searcher",
    category: "movie",
    use: ".IDK",
    filename: __filename
  };
  cmd(_0x4efcdc, async (_0x5b6c55, _0x4579dc, _0x3a120d, {
    from: _0x31ed75,
    l: _0x5066e8,
    quoted: _0x1c52ff,
    body: _0x5ab117,
    isCmd: _0x1f5255,
    command: _0x3672de,
    mentionByTag: _0x460437,
    db_pool: _0x1a6c98,
    args: _0x4ee134,
    q: _0x57e944,
    isGroup: _0x48dd02,
    sender: _0x93ee2b,
    senderNumber: _0xb6992f,
    botNumber2: _0x5515a4,
    botNumber: _0x5db2da,
    pushname: _0x323ee4,
    isMe: _0x601831,
    isOwner: _0x576647,
    groupMetadata: _0x271005,
    groupName: _0x41d49f,
    participants: _0x4f1d12,
    groupAdmins: _0x548146,
    isBotAdmins: _0xa80cd0,
    isCreator: _0x5e7d2c,
    isDev: _0xe46aae,
    isAdmins: _0x321d95,
    reply: _0x1ec0a6
  }) => {
    try {
      if (!_0x3a120d.quoted) {
        return _0x1ec0a6("*ℹ .upmv spider man*");
      }
      if (!_0x57e944) {
        return;
      }
      const _0x2262d8 = _0x57e944.split(" & ")[0];
      const _0x29921d = _0x57e944.split(" & ")[1];
      const _0x354283 = {
        url: _0x3a120d.quoted.msg
      };
      const _0x6b1996 = {
        document: _0x354283,
        caption: '*' + _0x29921d + '*',
        mimetype: "application/zip",
        fileName: _0x29921d + ".zip"
      };
      await _0x5b6c55.sendMessage(_0x2262d8, _0x6b1996);
    } catch (_0x453010) {
      _0x1ec0a6("❗ Error" + _0x453010);
      _0x5066e8(_0x453010);
    }
  });
  const _0x2da13a = {
    pattern: "sub",
    react: "🗃️",
    desc: "get subtitles",
    category: "download",
    use: ".sub avengers",
    filename: __filename
  };
  cmd(_0x2da13a, async (_0x35628, _0x13c78e, _0x10bfb7, {
    from: _0xf2ec54,
    q: _0x27fd73,
    pushname: _0x1cd269,
    reply: _0xdc86bd
  }) => {
    try {
      const _0xb8ff8f = await subsearch(_0x27fd73);
      const _0x3fca7e = _0xb8ff8f.results;
      const _0x3c0984 = [];
      for (var _0x93c17c = 0; _0x93c17c < _0x3fca7e.length; _0x93c17c++) {
        _0x3c0984.push({
          'header': _0x93c17c + 1,
          'title': '' + _0x3fca7e[_0x93c17c].title,
          'description': '',
          'id': ".dsub " + _0x3fca7e[_0x93c17c].link
        });
      }
      const _0x3e13aa = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
      };
      let _0x1af86d = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x3e13aa)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Select news types",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': "X - B Y T E",
            'rows': _0x3c0984
          }]
        })
      }];
      const _0x5a9aa5 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "> 🎬 X-BYTE SUBDL 🎬\t\n\n\t> SUBTITILE DOWNLOADER 🎥"
      };
      const _0x1b6d26 = {
        quoted: _0x13c78e
      };
      return await _0x35628.sendButtonMessage(_0xf2ec54, _0x1af86d, _0x10bfb7, _0x5a9aa5, _0x1b6d26);
    } catch (_0x137735) {
      _0xdc86bd("*Error !!*");
      console.log(_0x137735);
    }
  });
  const _0x3e8424 = {
    pattern: "dsub",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x3e8424, async (_0x4f4c4e, _0x302101, _0x362146, {
    from: _0x311d70,
    l: _0x592948,
    quoted: _0x39ed1b,
    body: _0x1309fb,
    isCmd: _0x10a867,
    command: _0x55e385,
    args: _0x11d956,
    q: _0x1d5cfe,
    isGroup: _0x10559e,
    sender: _0x9c7b40,
    senderNumber: _0x31ed30,
    botNumber2: _0x215f8e,
    botNumber: _0x32c787,
    pushname: _0x53064f,
    isMe: _0x5e1b3f,
    isOwner: _0x4c9618,
    groupMetadata: _0x3aa11e,
    groupName: _0x40c1ab,
    participants: _0x23066d,
    groupAdmins: _0x5e0bb3,
    isBotAdmins: _0x22ccc8,
    isAdmins: _0x34b9d1,
    reply: _0x367649
  }) => {
    try {
      const _0x93e042 = {
        text: '📥',
        key: _0x302101.key
      };
      const _0x277c20 = {
        react: _0x93e042
      };
      await _0x4f4c4e.sendMessage(_0x311d70, _0x277c20);
      const _0x565cb8 = {
        text: "*Need sub link...*"
      };
      const _0x250d13 = {
        quoted: _0x302101
      };
      if (!_0x1d5cfe) {
        return await _0x4f4c4e.sendMessage(_0x311d70, _0x565cb8, _0x250d13);
      }
      const _0x37335f = await subdl(_0x1d5cfe);
      let _0x1caf12 = _0x37335f.results;
      let _0x129858 = "*📚 Title :* " + _0x1caf12.title.trim() + "\n*💼 Creater :* " + _0x1caf12.creater;
      const _0x19ddbc = {
        url: _0x1caf12.img
      };
      const _0x193426 = {
        image: _0x19ddbc,
        caption: _0x129858
      };
      const _0x420090 = {
        quoted: _0x302101
      };
      await _0x4f4c4e.sendMessage(_0x311d70, _0x193426, _0x420090);
      const _0x12c0ce = {
        url: _0x1caf12.dl_link
      };
      const _0x18f45c = {
        quoted: _0x302101
      };
      let _0x556280 = await _0x4f4c4e.sendMessage(_0x311d70, {
        'document': _0x12c0ce,
        'mimetype': "application/zip",
        'fileName': _0x1caf12.title.trim() + '.' + "zip",
        'caption': ''
      }, _0x18f45c);
      const _0x7dd0e = {
        text: '📁',
        key: _0x556280.key
      };
      const _0x971ddf = {
        react: _0x7dd0e
      };
      await _0x4f4c4e.sendMessage(_0x311d70, _0x971ddf);
      const _0x10a1f5 = {
        text: '✔',
        key: _0x302101.key
      };
      const _0x5b4988 = {
        react: _0x10a1f5
      };
      await _0x4f4c4e.sendMessage(_0x311d70, _0x5b4988);
    } catch (_0x107ec9) {
      _0x367649("*ERROR !!*");
      _0x592948(_0x107ec9);
    }
  });
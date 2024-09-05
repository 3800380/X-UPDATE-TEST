(function (_0x2c2e2c, _0x2bd9b3) {
    const _0x272c3f = _0x2c2e2c();
    while (true) {
      try {
        const _0x507b3c = parseInt(_0x18a7(2021, '4yFN')) / 1 + -parseInt(_0x18a7(1146, 'gii0')) / 2 + -parseInt(_0x18a7(3496, 'TY%u')) / 3 + -parseInt(_0x18a7(1611, 'PXnn')) / 4 * (parseInt(_0x18a7(374, 'TY%u')) / 5) + -parseInt(_0x18a7(561, '0g51')) / 6 * (-parseInt(_0x18a7(3176, 'ZiJU')) / 7) + -parseInt(_0x18a7(3323, 'ilv0')) / 8 * (parseInt(_0x18a7(1243, 'ubB2')) / 9) + parseInt(_0x18a7(3441, '(Q@M')) / 10;
        if (_0x507b3c === _0x2bd9b3) {
          break;
        } else {
          _0x272c3f.push(_0x272c3f.shift());
        }
      } catch (_0x2be461) {
        _0x272c3f.push(_0x272c3f.shift());
      }
    }
  })(_0x40f5, 232529);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const fs = require('fs');
  const axios = require("axios");
  const owner = config.OWNER_NUMBER;
  const moment = require("moment-timezone");
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
  const {
    default: makeWASocket,
    useMultiFileAuthState,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    proto,
    getDevice,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    jidDecode
  } = require("@whiskeysockets/baileys");
  const Heroku = require("heroku-client");
  const _0x5b7271 = {
    token: config.HEROKU_API_KEY
  };
  function _0x95d380(_0x1b7ec3, _0x20bbe0, _0x5cda0f, _0x1e8b06, _0x1b0d93) {
    return _0x18a7(_0x1b0d93 + 0x14a, _0x20bbe0);
  }
  const heroku = new Heroku(_0x5b7271);
  const _0x59c24c = {
    pattern: "updates",
    react: '🔖',
    desc: "To See bot updates",
    category: "main",
    use: ".updates",
    filename: __filename
  };
  cmd(_0x59c24c, async (_0x39a80d, _0x51a828, _0xa0ed2, {
    from: _0x4e3189,
    prefix: _0x5c2027,
    l: _0x14262c,
    quoted: _0x1dc73b,
    body: _0xea35f0,
    isCmd: _0x1889cf,
    command: _0x11fb22,
    args: _0x15d071,
    q: _0x1d0f99,
    isGroup: _0x22a33e,
    sender: _0x3ce361,
    senderNumber: _0x542a42,
    botNumber2: _0x1cbd76,
    botNumber: _0x4cedff,
    pushname: _0x8492aa,
    isMe: _0x15f79d,
    isOwner: _0x5e9b3a,
    groupMetadata: _0x32944c,
    groupName: _0x2f1d1c,
    participants: _0x1d66c9,
    groupAdmins: _0x426ca9,
    isBotAdmins: _0x236b27,
    isAdmins: _0x478523,
    reply: _0x20db59
  }) => {
    try {
      const _0xa4378c = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
      };
      let _0x2f4f6b = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0xa4378c)
      }];
      const _0x350bb8 = {
        image: "https://telegra.ph/file/daaa44e2849851736dd2e.png",
        header: '',
        footer: config.CAPTION,
        body: ''
      };
      return await _0x39a80d.sendButtonMessage(_0x4e3189, _0x2f4f6b, _0xa0ed2, _0x350bb8);
      const _0x33b50c = {
        quoted: _0x51a828
      };
      return await _0x39a80d.sendMessage(_0x4e3189, buttonMessaged, _0x33b50c);
      const _0x457392 = {
        text: '✅',
        key: _0x51a828.key
      };
      const _0x19c177 = {
        react: _0x457392
      };
      await _0x39a80d.sendMessage(_0x4e3189, _0x19c177);
    } catch (_0xd49ba4) {
      _0x20db59("*Error !!*");
      _0x14262c(_0xd49ba4);
    }
  });
  const _0x1651b1 = {
    pattern: "upbio",
    react: '🍟',
    alias: ["updatebio"],
    desc: "Change the Bot number Bio",
    category: "main",
    use: ".upbio",
    filename: __filename
  };
  cmd(_0x1651b1, async (_0xa838e8, _0x713ab, _0x29a0da, {
    from: _0xf6601f,
    l: _0x5b8054,
    quoted: _0x46de38,
    body: _0x300c2b,
    isCmd: _0x4e2b42,
    command: _0xc4070e,
    args: _0x27b743,
    q: _0x271123,
    isGroup: _0x18a8d8,
    isownbot: _0x32cbcc,
    sender: _0x18d1c0,
    senderNumber: _0x2fda47,
    botNumber2: _0x4e40b3,
    botNumber: _0x58f47c,
    pushname: _0x56fa20,
    isMe: _0x113834,
    isOwner: _0x5bd07e,
    groupMetadata: _0x52eda6,
    groupName: _0x4b89bf,
    participants: _0x5c9305,
    groupAdmins: _0x56d060,
    isBotAdmins: _0x43f9e5,
    isCreator: _0x186f01,
    isDev: _0x2c4988,
    isAdmins: _0x14ff7a,
    reply: _0x2d0c3f
  }) => {
    try {
      if (!_0x5bd07e) {
        return await _0x2d0c3f("*You must be a bots owner frist*");
      }
      if (!_0x271123) {
        return _0x2d0c3f("*Enter the New Bio*");
      }
      if (_0x271123.length > 139) {
        return _0x2d0c3f("*Sorry ! Characters limit Exceded*");
      }
      await _0xa838e8.updateProfileStatus(_0x271123);
      const _0x58db97 = {
        text: "*New Bio Added Successfully*"
      };
      const _0x5efb2e = {
        quoted: _0x713ab
      };
      await _0xa838e8.sendMessage(_0xf6601f, _0x58db97, _0x5efb2e);
    } catch (_0x27fc4d) {
      _0x2d0c3f("*Error Accurated !!*\n\n" + _0x27fc4d);
      _0x5b8054(_0x27fc4d);
    }
  });
  const _0x32f57c = {
    pattern: "getprivacy",
    react: '🍟',
    alias: ["getprivacysettings", "gpvc"],
    desc: "Get the bot Number Privacy Setting Updates",
    category: "main",
    use: ".getprivacy",
    filename: __filename
  };
  cmd(_0x32f57c, async (_0x2dcf32, _0x50fd75, _0x2b28a4, {
    from: _0x317a71,
    l: _0x182471,
    quoted: _0x38878f,
    body: _0xf7caca,
    isCmd: _0x1cfdb5,
    command: _0x1922b3,
    args: _0x451b35,
    q: _0x212e94,
    isGroup: _0x30f04d,
    isownbot: _0x12f5dc,
    sender: _0x3ff721,
    senderNumber: _0x3ae199,
    botNumber2: _0x395832,
    botNumber: _0x2fdd92,
    pushname: _0x240764,
    isMe: _0x2bf59c,
    isOwner: _0x4b9632,
    groupMetadata: _0xbf8fc6,
    groupName: _0x5d8750,
    participants: _0x1da433,
    groupAdmins: _0x4de301,
    isBotAdmins: _0x5b66d1,
    isCreator: _0x4e1e2f,
    isDev: _0x13f89d,
    isAdmins: _0x5ef74c,
    reply: _0x173735
  }) => {
    try {
      if (!_0x4b9632) {
        return await _0x173735("*You must be a bots owner frist*");
      }
      const _0x8506fe = await _0x2dcf32.fetchPrivacySettings(true);
      let _0x4d3ce8 = "Read Recipt - " + _0x8506fe.readreceipts + "\nProfile Picture - " + _0x8506fe.profile + "\nStatus  - " + _0x8506fe.status + "\nOnline - " + _0x8506fe.online + "\nLast Seen - " + _0x8506fe.last + "\nGroup Privacy - " + _0x8506fe.groupadd + "\nCall Privacy - " + _0x8506fe.calladd + "\n\n© *𝙿𝚒𝚗𝚔𝚅𝚎𝚗𝚘𝚖-𝙼𝙳*";
      const _0x3de2fb = {
        text: _0x4d3ce8
      };
      const _0x4ce335 = {
        quoted: _0x50fd75
      };
      await _0x2dcf32.sendMessage(_0x317a71, _0x3de2fb, _0x4ce335);
    } catch (_0x9340cc) {
      _0x173735("*Error Accurated !!*\n\n" + _0x9340cc);
      _0x182471(_0x9340cc);
    }
  });
  const _0x3d602d = {
    pattern: "removepp",
    react: '🍟',
    alias: ["rmpp"],
    desc: "Remove the botNumber PP",
    category: "main",
    use: ".removepp",
    filename: __filename
  };
  cmd(_0x3d602d, async (_0x451336, _0x57eb62, _0x5d99cb, {
    from: _0x1009b8,
    l: _0x265dec,
    quoted: _0x343436,
    body: _0x21b45a,
    isCmd: _0x177d61,
    command: _0x3ec798,
    args: _0xac63c2,
    q: _0x54fe9d,
    isGroup: _0x49fff5,
    sender: _0x39aa3a,
    senderNumber: _0x3ab85c,
    botNumber2: _0x1542d0,
    botNumber: _0x273171,
    pushname: _0x98d41c,
    isMe: _0x5b1ff3,
    isOwner: _0x2914b0,
    isownbot: _0x384d21,
    groupMetadata: _0x37b42c,
    groupName: _0xd772e2,
    participants: _0x5d58d8,
    groupAdmins: _0xd9dc7f,
    isBotAdmins: _0x9f52cb,
    isCreator: _0x52854a,
    isDev: _0x4d6ec2,
    isAdmins: _0x12a4f8,
    reply: _0x1a619d
  }) => {
    try {
      if (!_0x2914b0) {
        return await _0x1a619d("*You must be a bots owner frist*");
      }
      await _0x451336.removeProfilePicture(_0x1542d0);
      const _0xeac8f5 = {
        text: "*Profile Pic Successfully removed*"
      };
      const _0x323b25 = {
        quoted: _0x57eb62
      };
      await _0x451336.sendMessage(_0x1009b8, _0xeac8f5, _0x323b25);
    } catch (_0x47605a) {
      _0x1a619d("*Error Accurated !!*\n\n" + _0x47605a);
      _0x265dec(_0x47605a);
    }
  });
  const _0x3364dc = {
    pattern: "setpp"
  };
  function _0x5f25e9(_0x1f7c36, _0xbdfa4e, _0x8661f4, _0x19f610, _0x51ef9a) {
    return _0x18a7(_0x19f610 - 0x22f, _0x1f7c36);
  }
  function _0x18a7(_0x264024, _0x4658ab) {
    const _0x179768 = _0x40f5();
    _0x18a7 = function (_0x21de9a, _0x4863e4) {
      _0x21de9a = _0x21de9a - 318;
      let _0x194722 = _0x179768[_0x21de9a];
      if (_0x18a7.VaItjM === undefined) {
        var _0x2e0d70 = function (_0x67e83b) {
          let _0x905d8 = '';
          let _0x2f698c = '';
          let _0x22daf1 = 0;
          let _0x3057ed;
          let _0x44bd3c;
          for (let _0x34aa22 = 0; _0x44bd3c = _0x67e83b.charAt(_0x34aa22++); ~_0x44bd3c && (_0x3057ed = _0x22daf1 % 4 ? _0x3057ed * 64 + _0x44bd3c : _0x44bd3c, _0x22daf1++ % 4) ? _0x905d8 += String.fromCharCode(255 & _0x3057ed >> (-2 * _0x22daf1 & 6)) : 0) {
            _0x44bd3c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x44bd3c);
          }
          let _0x2269cb = 0;
          for (let _0x56587a = _0x905d8.length; _0x2269cb < _0x56587a; _0x2269cb++) {
            _0x2f698c += '%' + ('00' + _0x905d8.charCodeAt(_0x2269cb).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x2f698c);
        };
        const _0x102a84 = function (_0x4d5977, _0x103377) {
          let _0x366b1d = [];
          let _0xa6193b = 0;
          let _0x2abca1;
          let _0x20e167 = '';
          _0x4d5977 = _0x2e0d70(_0x4d5977);
          let _0x150b8c;
          for (_0x150b8c = 0; _0x150b8c < 256; _0x150b8c++) {
            _0x366b1d[_0x150b8c] = _0x150b8c;
          }
          for (_0x150b8c = 0; _0x150b8c < 256; _0x150b8c++) {
            _0xa6193b = (_0xa6193b + _0x366b1d[_0x150b8c] + _0x103377.charCodeAt(_0x150b8c % _0x103377.length)) % 256;
            _0x2abca1 = _0x366b1d[_0x150b8c];
            _0x366b1d[_0x150b8c] = _0x366b1d[_0xa6193b];
            _0x366b1d[_0xa6193b] = _0x2abca1;
          }
          _0x150b8c = 0;
          _0xa6193b = 0;
          for (let _0x595901 = 0; _0x595901 < _0x4d5977.length; _0x595901++) {
            _0x150b8c = (_0x150b8c + 1) % 256;
            _0xa6193b = (_0xa6193b + _0x366b1d[_0x150b8c]) % 256;
            _0x2abca1 = _0x366b1d[_0x150b8c];
            _0x366b1d[_0x150b8c] = _0x366b1d[_0xa6193b];
            _0x366b1d[_0xa6193b] = _0x2abca1;
            _0x20e167 += String.fromCharCode(_0x4d5977.charCodeAt(_0x595901) ^ _0x366b1d[(_0x366b1d[_0x150b8c] + _0x366b1d[_0xa6193b]) % 256]);
          }
          return _0x20e167;
        };
        _0x18a7.OBfMjM = _0x102a84;
        _0x264024 = arguments;
        _0x18a7.VaItjM = true;
      }
      const _0x4d5a00 = _0x179768[0];
      const _0x16e466 = _0x21de9a + _0x4d5a00;
      const _0xc94bd7 = _0x264024[_0x16e466];
      if (!_0xc94bd7) {
        if (_0x18a7.CNLANU === undefined) {
          _0x18a7.CNLANU = true;
        }
        _0x194722 = _0x18a7.OBfMjM(_0x194722, _0x4863e4);
        _0x264024[_0x16e466] = _0x194722;
      } else {
        _0x194722 = _0xc94bd7;
      }
      return _0x194722;
    };
    return _0x18a7(_0x264024, _0x4658ab);
  }
  _0x3364dc.react = '🍟';
  _0x3364dc.alias = ["setdp"];
  _0x3364dc.desc = "Update the botNumber PP";
  _0x3364dc.category = "main";
  _0x3364dc.use = ".setpp";
  _0x3364dc.filename = __filename;
  function _0x40f5() {
    const _0xbd4596 = ['W5NcLI/cSfu', 'W57dHIq', 'W7JdK8o8WPhdHa', 'W4RdVSo+uCoW', 'WOZcVSoif8kC', 'W5PJr8o1WOu', 'W5ldJmoU', 'nWVdG00B', 'fstcNSoIpW', 'WONcSCkd', 'FCo1wGNcLG', 'WPbdW5bWhG', 'wGm7', 'W7DqbwXw', 'WQpcQ8ocW6ddJW', 'W6hdOSkaW4dcKW', 'zZRdLSosW5G', 'WQtcKgKZjW', 'q8koW4POjW', 'W5eMqCk6W4y', 'xG4Ypq', 'WQipW5XQWRe', 'WQ8QWPmO', 'W6lcNY3cSmoF', 'WP3cV8oi', 'W6hcT8ktnx0', 'WOhJGRGU8lMiJVcWI5G', 'WRJcS8oEW4q', 'tdtdJmovW7G', 'EsBdOCkFW6S', 'W4nwW7tdPh8', 'lSoBz8o3', 'W5RdLSklW7NdLW', 'WQRcOmk7mxu', 'W5FcG8kZewm', 'W5zlWQDV', 'gCk0v8o6', 'WPLEWQ8V', 'EGK+WP8a', 'WRBcHSk5dfy', 'W5XhvSkxWQa', 'W5pcPdVcH8o3', 'et/cSSoOpq', 'W77dRCkrW4hdSG', 'WOhdSqnoW6S', 'WOjjW7D6ia', 'WRFcRHhdOSk4', 'WQBcUSo6k1G', 'w8oFEtpcOW', 'W7tdUSo4WRxdTq', 'hmkCEHBcVW', 'd8o9vW', 'mLnhWQtcRG', 'W53cLCklk1i', 'WRZcPHxdSmkx', 'W5jhcbaz', 'WRVcJSoVW4xcSq', 'WQeJW51Gpq', 'W7eTWPLmoG', 'W71LW7DglG', 'esddGhSn', 'b8kKkCoNsW', 'AmkSWOVcQW', 'WO3cOmot', 'sZFdJSkRW4O', 'WP7dIuWvda', 'd8ojaCkDzG', 'vmkHzmo3WOS', 'WOZcOSkfESoB', 'W73cRbXqW7W', 'WQBcT8ozW47dTW', 'W6PuW7zXha', 'W6v2pq', 'WPlcU8okqSoe', 'WRe/W69Oda', 'b8kDgSonDG', 'WRBcVSocW6BcMW', 'WOhcTCkkWO4Q', 'WRmSkNvD', 'zJxcGSojW7W', 'WP3dLM0', 'WQGUW6zDCa', 'yd/dL8onW7W', 'W4qCWO4TWPO', 'WRhcGmktWPiI', 'abxcN8oqha', 'a8kLWPHlWOO', 'W7nWC8kzWRu', 'WQldIfSPhG', 'A8kbW6P1mG', 'j3DGWONcIW', 'lSkjCmo3WOe', 'wSopo3JdPW', 'WQq6W6WydW', 'W5Ora8kZWOS', 'WQDkWOuqqG', 'W6VcUaxcImoZ', 'WQiAiezl', 'W4ifcCkPWQW', 'W5xdJmoJqmk4', 'WQiAkuPB', 'W5xdQIbaW4C', 'WQBcPmomW6FcMa', 'WQldJs8adG', 'W6/dJ8o5WQ7cQG', 'FsK4WQqU', 'W4GsW4FcVwm', 'W5WjW6rVpW', 'WPRcGmkBeNi', 'WR4FW4iUWP8', 'WQuacNf/', 'WQ7cUCouWOxcGa', 'W7TgWQxdQLG', 'W7fkzqmp', 'WQBdHbKJiq', 'W4riW6VdPK4', 'WQTqW7ldRvK', 'WOtcSSkZcw4', 'WRbpW6C8WO0', 'sXy0j8oD', 'W5XkngWg', 'hSkDdq', 'espcHmoMnG', 'W5/cL8kkhem', 'WPKUj0LS', 'WQH9W5y4cG', 'W4WsWRC4WPa', 'ysNdJSo4W7u', 'W5bWlbq9', 'emkSACo3WOK', 'W6vLW6a', 'W74GW65doa', 'WRf9W68RWPe', 'o8k5WOFdUxO', 'W50vWR4VW54', 'iHBdHSkmW44', 'WO5AWRS3', 'gSkQW4XlWOC', 'nWpcH8oXiW', '8k63Go+6QsvtWRW', 'W5ZcRdvRWRG', 'WOJcQ8oDsa', 'WQD7W7uNWO8', 'W6jmW7hcQq', 'WQddSSoAW5/dMW', 'oCocE8o8W4y', 'W7FdOSkrWPldHW', 'WRdcOSknW7ZcNa', 'say6mmom', 'qmkAW70oW5G', 'W75ahq', 'WPJcG8otW6ddHa', 'WOiIW6jwAG', 'W5/dGmo7qmo2', 'W6dcIbdcJ8oA', 'WQFdLZfCW7S', 'WQSQW79zlG', 'W6fxW5FcUYi', 'WPuQW6vClW', 'W5jUlbqM', 'W6pdLbScma', 'WRJdOK4tca', 'WPxcVmknrCox', 'W7xdHmo+WRVdPG', 'W6LuW6VdOhS', 'W4zdcX4B', 'gCoGvCo5W4i', '6PYB4BwVYlJHT67iGW', 'y8oIDIJcOG', 'W51LW61wiG', 'bJxcLSoKjq', 'WOpdSKyCnG', 'WRfpW6G7WRq', 'pCkjDCoGW44', 'W5zRW55AoW', 'lCobC8oMW5i', 'bCk8ySkJWPG', 'tZHdFSo/', 'W7HyaMu', 'dCkAyrRcVq', 'W7ZdV8oOBGtcMf3dVfXRW5ig', 'oSkOWOFdQhO', 'WPSZhe9P', 'WP0yvWSo', 'xmkkEtBcSG', 'pSkGwCkyWO4', 'd8ktsbBcRq', 'mgPtWRi', 'W7ZcImklmvi', 'W6LCd2Oc', 'tq/dRa', 'wXmRFCoB', 'mG3dG2u', 'xHxcHCo1pG', 'W5/cPZq5WRK', 'gSk7WPbOWOS', 'wIpcKSoZnq', 'WP3cVmozdCog', '8kM5UdldI8oonq', 'WO14cbOf', 'urq9kCoE', 'WQBcP8kQpLK', 'W67cS8kOeLi', 'WQSAW5BcOgC', 'WRVcGmkaW5a', 'vbC6mmom', 'WRlcMSoIW6RcIq', 'wY7dU8oWW4O', 'W4rNvSk+', 'WQJdRmkmWRldIW', 'W5OxWR53W7q', 'hmowlIxdTa', 'WOxcOCoUW6xcQq', 'W552jNm4', 'ndpdIeir', 'W485WRCYWP0', '8yA1USkREa', 'WQmfmfmp', 'WRjAWQ4fWPW', 'W4HfdfvH', 'WRBcT8k3eKe', 'WPRcQ8oFW5JdUa', 'gMzgWRJcQq', 'W7vsqa', 'W60BW4aMW7i', 's8oEBIVcOW', 'W6HPW7vhjq', 'W5GAkXXE', 'WRicjfC', 'WOjzWQGOWPe', 'W5/dM8ooWORdSa', 'vapcKSoIpW', 'fYtcLSoyja', 'WRagW4zbea', 'WOK9W7i', 'WQqbc3bN', 'FqL4WQ7cPq', 'B21qw8oA', 'n8kzztRcMa', 'WQdcOmk+F0q', 'W58ZoeWK', 'WRhcTWNdPSk7', 'nwT0WO/cPG', 'W6VcRCk2meq', 'lXldJgKN', 'WQ3cKbHGBG', 'gSovBrpcSq', 'W5O8mmkqWRu', 'ohDTWQFcHG', 'W7VcISohWRxdOq', 'WQP+W7DHia', 'ASo4W7KDW5O', 'Bt9lr8oh', 'WQtcR8ooW7BcMa', 'gCkIW5DrW4i', 'W6PxW5FcVgC', 'AIJdLSkt', 'W6HQW5ddLLi', 'aaHQDSkn', 'fSkLySk0WPy', 'g8oDcmk4WO0', 'rCkQW4HpWPe', 'WRvkmuWp', 'WPiBW65DgG', 'og4A', 'WOCojMvn', 'W70Bp8kPWPe', 'WR7cT8oo', 'W5FdJ8o5WQNdPa', 'WQ3cV8klmrK', 'W5/cLMZdTf8', 'WOtcOdfWW7q', 'W7xcISo+WRldOa', 'W63cVHtcM8oL', 'W4RdNCk9', 'W4dcICk2bmk4', 'WOaGW7KykW', 'vaqJemo/', 'W7KFWQtcOHy', 'W7fRkhW3', 'WROpWQa', 'xCkoW45HoG', 'erBcOSoLeG', 'wWzjwmou', 'W7JcQdnPW7y', 'W58FW6VcHLa', 'WOxcNCoLW77cIa', 'ftlcM8oICq', 't8oPW5CvW5G', 'W5Sgbe8x', 'W6pcTSkclxW', 'WQddObj5W7K', 'WOiJcM0v', 'W7jkgIm', 'WPPdW7HIpW', 'W61HW61hla', 'W5VcKx0d', 'AtldJmof', 'WPH5WPnXka', 'WQFcOHpdTCkZ', 'W6zEW6ZdRq', 'xHaEWOOS', 'hSkyW5r9WQG', 'kHLlxCoB', 'W4itemkSWRq', 'WRBcQmkVm1S', 'W6PqW4L0pG', 'W5pdMmoAWRNdHG', 'WQRdRaKmoW', '4PEM4PEc4PwL4Psv44gA', 'W5KqcWvq', 'nrhdJ2Gw', 'W6SxagWc', 'wbSTWP8a', 'W5GyWPqpWPq', 'WQnOW4nPma', 'WODVW6Xkjq', 'WQddMfWV', 'W7vooeW+', '8ks4PcWWWQ7dKq', 'W7WqfSkZWRK', 'W5pcJdr/W4e', 'W71XW61xaW', 'WPzfWQy7WPW', 'xKGRWPKg', 'sCkcW5jOdq', 'W6T9fgCB', 'W711W6K', 'WOO9n1fC', 'WPtcT8kBWOGN', 'W5Gzaa', 'WOlcP8oLW6BcPG', 'kSozoSkGWRi', 'W5/dUIfBW4y', 'r8oBW5OyW5m', '4PI2W7tdKmk/mq', 'WPtcVCkzWP8', 'W4XswbaC', 'ymosuHJcVa', 'W61qcMWz', 'ESopFYdcIq', 'bSkIW5nAW4i', 'WQtcUmk/F1y', 'WR7cP8oXW4tdPa', 'W7LEW6FdR1K', 'W63dHCoBWO3dSG', 'BKDjw8oz', 'W6xdQCklW5BdVG', 'W4JdOConWRhdRW', 'dmk7sSkoWPq', 'bCkqDq', 'W7tjIog1RUg2N8o2', 'ESoiDSo/W4G', 'gmkByXpcVW', 'WQLlW4PKdG', 'W7/cUSooW7u', 'jFcPQBpcGConWRG', 'WQvOW5CL', 'W6ldQCkDW4y', 'W600W7dcSeq', 'W65nW4BdOK8', 'WRtcV8os', 'aSovyrlcSq', 'tWK/WO5j', 'fZpcGSo1ma', 'gCo8eSkVWPC', 'W4SpWR4', 'WPHnW6LVW4PUoSoZeWaUFCkd', 'WRWoWRhdPGu', 'b8k6A8kIWPe', 'uXaVEq', 'WQWxW4K', 'wgxdNmkRW40', 'WO3dHH0ypq', 'W6rlW6ddPXW', 'WOFcQdxdKCkz', 'WQhdQuddJ8kN', 'WQe1WO8', 'WQRdOcbmW50', 'yavIESo2', 'WOZcS8ozwCox', 'b8k/EGFcPq', 'W7TTW7Thoq', 'mcldIKq1', 'aM/dSe4V', 'WQ7cKGNdHCky', 'iCkxAd7cIG', 'AmkIWPpdVY4', 'W5rbcI0H', 'W5bvb8kVWQW', '4Psx4PEL4PsX4Pwg4PAq', 'WOmHW68yjW', 'c1nTzSkiW4JcG8ojbrStWQNdTCo1', 'W6BcPZrWW7K', 'WOJcP8ovW5hcPW', 'W4jwcXPl', 'W6JcISkRW7VcRW', 'W6flW4VdQ3q', 'BdpdG8ov', 'W7NcLCkfmrC', 'W6HCag07', 'W7NdHCoUWR8', 'W5dcRZNcP8ox', 'e2Ke', 'WQqykq', 'WQHJW5a', 'WQmpjebB', 'pM9qW4hcJq', 'W4/dPSkBh8kkWQHttepcLCoSW7O', 'WQ7dOaef', 'W6ZcICkb', 'W5FcOmkIhgS', 'WP4MhCkJ', 'W4ixdbCo', 'dWJcHMus', 'W58ggG', 'WRqLW5Pzlq', 'W5tcLvKJ', 'W4/dK33dSG', 'wSopAZxcPW', 'AJxdHSkbW7q', 'WOOsWQH9WPa', 'YzhdOSknW4pjTa', 'W7hdRmknWRpdIW', 'pCoHe8kUWOy', 'WOv5W5eOWR8', 'W4j/BW', 'z8k9W41gnG', 'W5FdK8oKAmoQ', 'W4GTW4NcVeO', 'W73cSXpdNSo7', 'W40yWQWpWO8', 'WQuvW4ZcOeW', 'W6pcTCkSbf4', 'W6xcQCkOmei', 'c8kgFXBcUW', 'kqVdG283', 'W7DwcGSc', 'oLhdMJS', 'WQmTWPiKyW', 'WQTeWQy3WPW', 'WRfAW6O2WO0', 'AsflqCos', 'W71wheWx', 'kMWfeSo+', 'zYHkrSoE', 'WRyTW5jPjq', 'W4KIW7Sm', 'WQZdRW0pfa', 'lZRdJmkbW7y', 'W759hrGJ', 'W4NcQ8kcifO', 'v8ozW48vWPS', 'W7ZcSGdcKmo6', 'W6PsW6a', 'tGHVumoV', 'qsVcI8kIW5S', 'amkDgSojAq', 'WPBdTmkDWOGS', 'W6tcLr5CW4O', 'CItdJmkYW70', 'W77cICkfn0m', 'aJxcHCo0oa', 'WPJdNJPh', '4BEW4BELWQNHTBOM', 'WRlcPCoDW7lcHq', 'pmkOWPu', 'W4zAhq', 'FttdKmkbW7G', 'cSoNeSk0', 'uXD7fSoa', 'rmoypSkBWRu', 'yJ7dJmovW7a', 'xmkBW65UmG', 'WPmFkgH4', 'WQtdKu01kW', 'WOGBWRaYFa', 'WP3cQrFdQSkI', 'hmkIW4BdOwe', 'FvbAWRNcUG', 'W77dK8oNWRpdLq', 'd8kEWRhdVeG', 'WPBdS8kjW5OS', 'wJlcM8oOmG', 'WQeEW7uOWOy', 'b8kBlb/cUq', 'W5nsaaS', 'WRNcT8oqW5JdIq', 'AghcImkb', 'W74AxWrb', 'WQeal1jG', 'WPDEW6bvjq', 'srKQWReb', 'WQ/dTXLGW4m', 'h8oTyCobW7m', 'nSklrCk2WQ0', 'W7FdUmka', 'WRldUNWRlW', 'W41sWQr7rq', 'pmk4vI/cIW', 'rJBcGSopW7y', 'W7nygNO3', 'W6lcJ8ktjeu', 'WQ/cQ8kamfm', 'W4mWWP03WQG', 'zIJcGSoiW6O', 'WRahia', 'W7KoWRG+WPS', 'W63cRXldNSod', 'W4DCW5tdRu0', 'W5BcL8oFx8oD', 'W6ZcLYDuW7u', 'W73dUSoAWOldLq', 'W7VcVapcM8oX', 'WOaiWR4XWPS', 'WPNcISkT', 'W4uhbG', 'zt9D', 'WOxdHCo7xcW', 'W6zHW61rcG', 'W7NcLcDiW7a', 'nMLCWRNcQq', 'WRzpW6j/WOO', 'b8kOASkY', 'W4myhGXu', 'iSoMEIRcSG', 'WPddJcbiW44', 'WR54W4m', 'w8keW4X0Eq', 'W5zlj38Y', 'eCkGWPpdP10', 'W59Jta', 'WQiJWPKpyW', 'W6mEW4/cSwW', 'W5dcTZdcSCom', 'W59+W5tdILC', 'W4NdImoLvSo9', 'W4SwWR4', 'u8k5bConDW', 'fZVcKSoZiG', 'W6jtW6ddKeu', 'WObEWQu4yG', 'W7VcICoFW6hcHa', 'd8kyAq', 'd8o7eSkUWOi', 'WQb4W5XXla', 'W6HAW4bumW', 'WOPBW7TxW5q', 'W6qFW47cSLu', 'W47dL33dTf8', 'lSk4WR/dMKi', 'tKm6n8ov', 'Ca9HESoV', 'WRVcSHhcO8kI', 'WQyJW5ScWRG', 'WOhdKJ1yW48', 'kCk9qXtcSq', 'WQBdSHSkoq', 'W4yuWRW', 'BH8OWOCa', 'W4CEW6VcKNq', 'qHRdO8o0W6m', 'WOddJYngW5S', 'W4rwfL8y', 'pSogzCo8', 'W4JcTJfgW7S', 'WQ/dPaymkG', 'WR7cVSou', 'nZ/cMCoZma', 'sGiPj8or', 'W6NdHbOzmq', 'W4qyb8kLWQO', 'FWldJCofW5m', '4Pwz4PEI4PEn4PAR4PA9', '6P+Y4BsLYiz/YBy', 'WQHYWOy+EG', 'W57dJmoJ', 'W6D5W6RdI14', 'EsHkvSo6', 'W74FW6JdTK8', 'WRFcQ8o6FHy', 'qtS1WOuk', 'd8kDwXBcJW', 'WObbW5CCWPO', 'WRNcH8omB8oc', 'W7v0ndyF', 'A8k/W6XxeG', '4PAY4PER4PEt4PEB44kZ', 'WO/cHComz8ob', 'W6tdQCkiW53dHq', 'tCovW4a', 'WRpcRWyokG', 'W41yereo', 'WOSdW5HilG', 'WPZcGmkJ', 'WQBcOSoBW4pdNa', 'W43dN2ldTbe', 'fstcNSo1na', 'W4mqbmkJWQW', 'WOFdMNmiWOG', 'kCk5WOpcQ0K', 'W7/cMmkuku4', 'i8kTF8ktWOG', 'W6ldTxFdMJG', 'fSkEfmod', 'WRBdTSkhWRm', 'WQddLv1HBW', 'W6KzchSF', 'bJBdISk8W5S', 'W44qWOGvWO4', 'W4mTW7VcMwK', 'W71HW69hka', 'fSkkfmocFq', 'cCkhyWlcRa', 'WQhdUeGkFG', 'wHWLWOqh', 'W5tdRSkWWOZdHG', 'rIddMCoQW50', 'WOJcQ8k0k14', 'W6SqW67cSxe', 'bSoPlmo2W5C', 'W7HAW6VdP38', 'W4JcOYr8W78', 'WRdcP8k/j24', 'W7tdUfVdNd0', 'WQFcMCoiW57cVa', 'W4CufGu', 'o8kxoCoBsa', 'WOSeW4XopW', 'W5ZcVCoDsmoC', 'W4aacSk0WR0', 'WQBcQmk9cLq', 'W6ywW5FcT2O', 'W4ZcSd9SW6G', 'Asjkrmos', 'tJGEWOC6', 'sCkcW5jOlq', 'fJ/cG8kM', 'WQhcUSosW4q', 'W4myfCkW', 'WPlcImk4ghq', '8kk4IpcIIQFXHkM88lcjSWy', 'W4zueX4m', 'ngjbWQ7cRW', 'W5ddNCo/', 'cmkqFG', 'W4eqbG', 'WRvtaway', 'WRpcGSkFWPer', '77+n77+G77+t77+C7726', 'WPxcTSknESoA', 'W4lcTCkEWPCQ', 'p8klwSkgWO4', 'W6TZW6Pdla', 'WPlcTCkOeNy', 'W58fhqjE', 'lJ3cLmocca', 'WPNcGCkPuYW', 'W5rscGKo', 'qq01', 'WQldUJvzW5K', 'W4eueCk0WR0', 'WOBdRXWola', 'pCkHWORdSIq', 'WQXeW6KQWPC', 'kmomC8oXW5u', 'g8k0v8o6', 'c8o9ga', 'W61ChsKu', 'FbrwCmou', 'vrq1nSok', 'W7GFW6NdQLe', 'W4yxfrOg', 'D8o+C8k/W6m', 'g8ovyqlcRW', 'W4BcQZ5/W7C', 'WQFcSXpdQSk4', 'WPHpWO06AW', 'W6NdNCkqkHC', 'sK01nSom', 'WQ9pW7uSWPG', 'pCkAW6bDWOm', 'W54qg0Sq', 'WO3cMmkxhKe', 'WQhcQ8kP', 'WPpcOmou', 'kmogymkYW6a', 'WROkW5GSWOi', 'W4/cPZz4W60', 'W44qdaG', 'W4nVW71xjW', 'xCoyCadcOW', 'WPxcTWVdM8kd', 'W5NdR8obW7af', 'WP7cK8kXlMq', 'rsZdO8oIW6G', 'hH3dSNKE', 'W4KbxX9z', 'WQizjerk', 'W6xcR8o6oeu', 'aSkbsrxcJa', 'oSoTWOddUwC', '8y+PKeGSlmo7', 'W5JcMuZdSby', 'WPJcL8kThhq', 'W7fUvmkgWQG', 'emkUgSkOWOG', 'W6NcMb7cTCo+', 'W7LAW6tdOeG', 'FFcFL5ZcN8kXda', 'WO3INljyobK', 'xXSVC8om', 'tcFdGYSn', 'W4ZdHghdPa8', 'rSoUW6apW7m', 'W4mqcmkVWQW', 'b8kzWR/dQem', 'W4uvWQG4W5a', 'WQBcS8oqW48', 'WRSBW5GaWP4', 'W6afWOpcSNa', 'lImuW6RdQa', 'W6NcRSkfm1i', 'W40EWQ8jWPC', 'DmkgyCo3W5i', 'W4LdgrWF', 'WOH8W603WPy', 'WOddJt8', 'W6tdPCktW7VdHW', 'WQVcQCkpl1m', 'WRddTrOcma', 'sCoEAdJcTG', 'WQmpzqio', 'W4xcPYi5W7y', 'ACkLW7jAda', 'W64FW7hdQLe', 'WQneW6j/WPa', 'qwddKG', 'W7BdUmoQBWC', 'WRBdMrDRW6y', 'WRFdPbaF', 'W7msfd1c', 'WQFcSWddSCkI', 'W7NdH8oUWRZdRa', 'W5RdVqzUWOK', 'owXbWPtcQq', 'W67cKSkjkfy', 'W5q/dmkK', 'hCoRemk/WOK', 'W5TXw8kWWPq', 'WQxcQmotW4ZdKa', 'l8kTW4fwWRO', 'WQhdKhnlW4u', 'W5v+xmk6WPu', 'g8kNWOhdH3C', 'WRdcVSkRWPSK', 'W7f0W5XWoW', 'hmkIW4BdR2S', 'WR7cNSomt8ox', 'W7VdH8oV', 'WOtcGmk0guS', 'twxdHmk9W5a', 'tCogW799kG', 'WQBdRXXhFG', 'WQLdWQCzFW', 'WQ3dTqKikG', 'iYnZWRNcPW', 'WQWkW5XNWQe', 'WPBcGCohW5ZdMG', 'qCouW5O', 'FZ5b', 'W4HGW7HDoq', 'WOKvW7L1', 'WQBdPqeF', 'W55faHeL', '8kQQQHxdOCkreW', 'tSoulvFcLq', 'WOiHkfDC', 'BIX1FSo+', 'WQfbW5mfWPy', 'W4y8W79zoa', 'pSk+zmkUWOC', 'W4Paf200', 'W6z2W7TxlG', 'W5T0ta', 'Bc/dI8ooW7C', 'emkFcmoEEW', 'W4KAWQ84WPK', 'r8o4W6uqW4O', 'WPVcTCoFW6FdPq', 'W45yfL8n', 'kSoiymoMW4G', 'WQSFWQ/dIK8', 'W67cQYFcH8oW', 'bSkpga', 'WRuiW5PsaW', 'jWJdGW', 'W7RdG1G3kW', 'p8ketmkZWRu', 'WRbGW5y', '8lkBLXxcGCkoW5S', '8lEOTFcEU6BWOQUbFpcAM7m', 'WPXOW4b2ka', 'W67dG8oKWR3cPq', 'qCo5W5qdW7G', 'FJJdISoiW7C', 'W78FW6FdSvm', 'WR9PWQq0ua', 'W7NdGSoRWQ4', 'gSkAW60xW5i', 'uSo8FtRcJa', 'WRJcJsBdRCk+', 'DWW/jSou', 'WR3cSCoLW7JdIq', 'w0m5pmom', 'WQpcV8omW6FcGG', 'W7NcL8kRf2C', 'WOZdIHe5gq', 'WPH+WQyJzW', 'WQddLv1HlW', 'WQrwW7C1zq', 'lZ3dI8onW7W', 'j8kOb8o+BW', 'WROuW4K4W7i', 'W54mdW4m', 'WPJcK8oKW7NdQq', 'r8osW48p', 'W5Kqeq98', 'WRuGW7LkmW', 'W4RdHSoVWRVdTG', 'W4nKgqKo', 'dCoMeCk4WO8', 'e8khW6j0WO4', 'W4zVWQfXoq', 'WQ/cM8oIy8ki', 'AZHaw8oy', 'WQf9WPmTga', 'WRjKW4nKjW', 'bqdcHSoUbq', 'AIJdKCoaW74', 'W6/dVmomWPxdRa', 'xa80pmok', 'W57cLbNcPSo/', 'W77dJ8o5WRK', 'W7VdJSoU', 'WPNcKmobqSor', 'W6DSW7XYiG', 'WR56W51GoW', 'WQxcS8ofW57dGq', 'WPOMku5o', 'eSoVdSkU', 'WPuUW6XDoq', 'WOPSW74hWOK', 'W5rhfbyF', 'g0Lrwq', 'W4blFmkYWR8', 'FSoPwGVcGG', 'DYNVVjlVV7NVV6C', 'W7eAW5dcNMu', 'WQeidKDn', 'mNf4WQ7cUW', 'W5RdUCoBrmoX', 'W6evWOSRWO8', 'EIXwrSoE', 'WPBcQ8kUk14', 'WQhdG1W', 'W6JdJ8kG', 'W4T1p1SU', 'W47cSsn4W78', 'W41qlui5', 'W753z8kEWQ4', 'W7LAW7xdR10', 'g8kfFbJcRG', 'W6NdNSozxmom', 'zd7dM8osW7y', 'bJxdL8kMCa', 'WRNcV8kCeMW', 'W7NcSbi', 'vZCmbSo2', 'asddL8oKpG', 'gSovBrNdVa', 'W5JdHmoY', 'W5RdNCoK', 'W51RvmkYWOm', 'AreFWOad', 'd8kbBq', 'aIBcP8o+nW', 'W5jAW5ldSLC', 'WR3cGmoP', 'WQhcVCkxW7ZdIq', 'jSkhtJBcVG', 'W5ddN8kvW53dHq', 'W4pcMCk0bhm', 'WOhcV8oAWRKS', 'pCkUW5OFWRu', 'W7TrE8kqWRq', 'hJ/cNSoP', 'WQxcP8oeW4ldPG', 'cSkuWObr', 'sSkyW4THnW', 'WRJdMvCQpq', 'W6T6W7zmlG', 'd8kmW4XInG', 'fCkfFHlcUG', 'W5OucWHz', 'sSkyW41Sja', 'WOFcLmkqifO', 'FCoKwrRcTa', 'W6JcLItcKCo7', 'qmoQW7WxW6G', 'WQyAmuv/', 'WRtcJ8opW57cKW', 'WOddJZDiW50', 'W54lW7i', 'tmopW40sW5O', 'xCkoW45HiG', 'W7xcHSoyW4xdHa', 'W5iueCkLWR8', 'WOmtW7SZWP0', 'WRzdW6S6', 'emkSFSk0', 'aSo7iSkKWPG', 'iSoVu8oXW7a', 'WOJcUmovBmod', 'WOFdMJjkW50', 'WQxcGCoUW4VdGG', 'vmoBW5OpW54', '44glB8kS4PAZxq', 'W7xdMmoZ', 'qYjxeSoG', 'W4ZcSLFcVCo+', '8kA5U/cEM6dXIPIM8ksPN8kP', 'srm3oSom', 'tSkhW5DSma', 'bJBdG8k/W4O', 'WPhcS8oD', 'AZ9hwSki', 'W4tcRZ14W7y', 'lmkmW7nWWQG', 'Ac0aWRSt', 'W4HTW4RdK2W', 'WQFcT8owW4NdNa', 'WQBcR8kUoLa', 'W6aeW5dcTwu', 'AJxdHSosW44', 'WRCdkuzb', 'WQFdLvCLaW', 'WQhcQ8kPpa', 'W7VdG8oTACow', 'ztPkv8of', 'AaKkmSoF', 'WOxcISkVe2i', 'wCofoeldQ8kgh8k8W6/cJuJcRW', 'WQ4BW4aMWRm', 'W6xcHXlcRCkH', 'WQBcPSk7kW', 'rW0IWP8a', 'W5uqa8kPWRy', 'WOjjWQ4', 'lSkvWO7dUwq', 'W6jnWONdTa', 'W6ubcmkyWOi', 'FIHCrG', 'W47dPNZdVG8', 'iCorfmk3WPC', 'rCopDs3cRW', 'W57cImkhlrC', 'lmoQDmoMW4K', 'WOxdHMddTG', 'WQddKvO1Da', 'xaW0j8oD', 'WPZcQCojW7RcIG', 'WR8FW5WMWQS', 'W5OucX9u', 'vdhcMCkNpG', 'W6ChnH11', 'pahcJ8onpG', 'WR3cPcVdMSkJ', 'DmoBW5WpW5i', 'sCoFW4apW5i', 'WQhcOmoEW4C', 'D8oJW6etW4G', 'W6/XJlIlF2pdGa', 'WRW3WPKLpG', 'W4iEWRO5WPS', 'WO3cPSkd', 'W6/cRmoeWPpcKW', 'W6j2lWWo', 'WOZcN8o+r8oK', 'WPBdKd5eW4G', 'W6tdQCkeW5hdHW', 'WOuclfap', 'WPlcISklkNG', 'W5/dHgFdVa', 'zs0AhSo9', 'W5RcItNcQ8oe', 'vreI', 'WO5AWQm+Bq', 'jCk7rXdcQG', 'FZRdLSovW7W', 'W551iJic', 'W41IwCkuWRW', 'WRRdQaVdSmk5', 'WRFcT8kcWPuu', 'W47cKSkkmvy', 'WRxcNxSUoG', 'WPOBW4u+W7i', 'W7mXbSkjWO4', 'jCkEwmkDWRq', 'W79xW6tdTXW', 'W47dPCoZWOZdJa', 'srldJmkzW6W', 'aslcKCoGfG', 'aSkBqspcRW', 'W7vkWOK', 'WQnIW4eLka', 'WOtdIJXDW4W', 'W5KpWQK0WPa', 'WQCvW4uK', 'WROppa', 'BsHqzSoE', 'WO7dHCk5fwC', 'WPdcSCkBWPK3', 'cImLWOGc', 'W4xdKwVdTvu', 'W47cLNNdSaW', 'W7rAfYGe', 'W4rdgsai', 'qt/dPmoqW6a', 'W7NdOSkaW5BdUq', 'WPtcHmkUhM4', 'W4VdJmoKuCo5', '4Pwn4PwC4Pwi4PEn4PAL', 'WP1HoZ45', 'W4ldLutdIaO', 'WOK7WQXlAG', 'W7/cKcjUW48', 'WOfEWRK8FG', 'B38CbSko', 'ymkaW7TJea', 'bCkOW5nAWPy', 'W7TpWQ3dGeu', '4PsE4Pse4PwT4Ps64Ps7', 'W6RcRmk7nLS', 'W6JcVaxcISo/', 'WPtcUSkvWP4G', 'WRuRfu5L', 'W5ZcICo1sSoS', 'jdxdLxW0', 'oxGxbCoAWO3cPMBcUSkT', 'W5a3hmktWRW', 'W5RdMYPhW4y', 'aCkEW45PiG', 'D3baWQJcQW', '4BE6WP/HTyJkTEg2RG', 'WORcMCkugMu', 'kmoeDSoaW4q', 'WRuqW74DWRK', 'BJBdHSoOW40', 'WPu/W6DrpG', 'WODNka', 'f3aBWRZcOa', 'W4VdSmoLyCoD', 'WPNcMSohW7VcUa', 'WRtcOquomW', 'WPldHCkUfgS', 'WQtdHMafoq', 'mCkQlSogvG', 'W5GgeCoQ', 'WPdcSCklWO8M', 'WRFcRCoeWPG', 'W6rmrmkHWO8', 'pgzm', 'ESoRFCoMWOe', 'W5GqhGHf', 'AZZdRSk+W5m', 'rqW5WOCm', 'WQdcOCosW5G', 'aJ7cMmoJmG', 'W57cICoJtCo9', 'WOpdHCk4gcy', 'W6ZcTrlcKa', 'W4i9WRWLWQy', 'WQJcMSkncNK', 'W77cSHVcMSoZ', 'gCk7W5rwWPy', 'W5LTifWK', 'W5S6WPOPWRW', 'W4RdGmo4s8k3', 'WQdcOCkYexi', 'h8kayWpcUq', 'W7eeW7BcPgy', 'b8kzAvJcVG', 'WRlcOmoyW5/dMa', 'nmoDC8oXW5u', 'W7i8mc15', 'hSkUW4bl', 'kSUn4BsJqEg2RW', 'hmkFfSkmEW', 'gZ7cKSoJgW', 'W4WCeW5F', 'W4tcRhbTW7a', 'WRddPayppq', 'W4ZdMCk9', 'WQldRa0', 'W7JdUSohuSoA', 'WPdcVCoEsmow', 'W41oW7TmiG', 'WR0omLzF', 'xCoDW4SpW6S', 'WRZdN8kkW4ddGq', 'WOuxhGjD', 'WQRcVmkJ', 'W47cKd3cUCoE', 'pSomFSoHW4q', 'W7hdVSkkW4FdGW', 'WOmVbgb7', 'W54hha', '4BAE4Bs+4BwRkEg1Rq', 'W4RdM2S', 'zcjqBCow', 'fCoDcCk7WPm', 'W4/cI8kugW0', 'WR3cQmoAW6BcMW', 'W5lcJWHXW4a', 'WO3dSb1pW6O', 'W5LBfGqE', 'W6ldO8ofW5pcKW', 'xXGOWOOD', 'ahdcLSoJpa', 'W73cIqdcICox', 'WQFcVCocW5RcIa', 'vSoFW54xW4i', 'WQiBW4GlWRW', 'eCo8pSkIWP4', 'WP/cSCoyx8ot', 'p8kuW7LVWQS', 'irFdIx4n', 'W6rbW5bvlq', 'dCoRe8k+WQO', 'WP1EWRyPyW', 'vGW8', 'vmold8kOWOG', 'W6a3WO8PWQ0', 'W7RdQCkCW4hcNG', 'WQRdLW0QcW', 'W4uBda4F', 'wYddHCkUW7m', 'WPJdHCk7xxy', 'W7XOuSkAWPa', 'yI86j8oQ', 'imkIW6XWWPe', 'mW7dPuOq', 'qsBdN8k/W4W', 'W5fJw8kuWOS', 'WQPHW44CWRG', 'qSoht8kRja', 'WOFcP8kjWPSK', 'dSo1W54EW5u', 'WRRcRmk5WRi3', 'WPxdNL0Ziq', 'WR7cRHpdOSo2', 'rColCJC', 'W6PtW7HulG', 'WR8kW6SHWRq', 'nWvnw8kx', 'oZVcSSoPaG', 'W60QW4uPWQy', 'WPBdNIDmW44', 'd8kmuWpcUq', 'e8k5E8k0', 'W4BcPZ5TW7e', 'WOldNSo2tmo8', 'W5/cKtXBW5i', 'WRVcTrG', 'fWtdSfGx', 'WPBcHSkU', 'W7zCah0F', 'W4pdVmkbW5pdHW', 'WPpdUSo4v8oQ', 'g8o9dSk7WOa', 'gSkqlbBcUa', 'W67dLSkNW6ddHa', 'WQSfW4BcPxC', 'WRrOW50LlW', 'W5KMw8k6WPi', 'WPXoWRGVBW', 'WOnVW79qlW', 'BIHxuq', 'dCo+eCkZWPm', '44kGvEkxT+kxO+kwUq', 'f8kWxSkYWOK', 'WRhdPWZdPSkL', 'W4jZhqWi', 'WPpcGmk2ghi', 'c8kKWRpdGwa', 'ESkjomoBW5i', 'W7HAW7hdS0W', 'WPZcQCoEW6dcIG', 'W5JcLtLTW7a', 'WPpWTyMgbComia', 'WQNcGmknF8o3', 'W5bJrSk2', 'W4KDhH8', 'WPFcT8ou', 'iXxdLG', 'FxVcG8kaWRm', 'BcddLhKs', 'FdC4oCo/', 'W6WMW79DjW', 'WO47W79ioq', 'W6RdI8o4WQ7dRa', 'jSkSBSk+WO0', 'kCozFSo7W5u', 'bdhcG8oZna', 'WR5/W4O', 'WO3dPh4ykG', 'W7xcKcdcK8ox', 'WPhcSCkuWP4o', 'ic8+WOqC', 'WQ1eW6m7WRm', 'drtcVCo1mW', 'W4KXWQi1WPK', 'WQhdScP/W6a', 'ph0uaSkh', 'WQZcVCocWORdNW', 'caddK8kRW5m', 'WOhcUSkOmMu', 'nHxcGSoYhW', 'tCkkBZBdPG', 'W7VXJjM8WRpcVWu', 'WQlcLSk/xq', 'W61AWOydWQe', 'W5GgrCkPWQS', 'pSkSW4XoWO8', 'kCkoW7rZW5K', 'wYtdNCkV', 'WO7cRCoAWP4M', 'WOvVWQzHW5K', 'bHldJMio', 'W4rNr8kHWO8', 'r8oAFJFdPG', 'W4jecX4m', 'E8kdgmky', 'W7NcMmkazry', 'WQugW5jVma', 'wa86pCot', 'pSkhmSobW44', 'W7/dJSoJWQ4', 'rGJdVSkiW7S', 'kGddIgWj', 'WOmSW6ayka', 'WRpdHwmhfa', 'wSopEJRcSG', 'W6ikWQWwWOO', 'mgzb', 'WQvCW6JdP1O', 'jHxcVmoDfW', 'ttBdMmkRW5K', 'WRtcM8kZWRKg', 'WP7cICk/uMi', 'qCoDW74RW5m', 'WRhcQ8kIkW', 'gKj6C8oX', 'W6hdOCoUD8oj', 'WPxdOGL2W60', 'W5VcNcxcUG', 'uSootsRcHq', 'gCkGyW', 'W4dcUmkdjfG', 'W6nHW6K', 'WQquWOWIWRC', 'Ft7dG8ofW58', 'W5xdNCosr8oi', 'fCofu8okW7u', 'y8osubRcKq', 'WRFcLSo0cM4', 'WRhcRmon', 'W4euf8kLWRy', 'WRxcUSkzfKq', 'w8olW5XOyW', 'W6awW5FcVw0', 'WR3dKZHpW60', 'W5NcPYb1W7K', 'WQBcRHhdT8k/', 'eZRcHSojnW', 'WOVcLI7cSq', 'WRXOW4b2ka', 'W5FdVCoeWPddKW', 'j2jbWR/cRq', 'W5vIuCkNWOm', 'WOlcO8oFW6hcKG', 'sSomFwdcPq', 'W6OcW5hdNGG', 'WQKzW4Dxkq', 'xqyVn8oD', 'WRNdPt4yhq', 'WOBcGCo8W7xcQa', 'W6pdTqegoW', 'W71LW7Dgcq', 'WRZdN0WZ', 'W6OzW4BcSeG', 'W7tdHmoLWQ/dQW', 'WRakWQD+W5m', '4OAH77Usv8ouW4zI', 'xmkoW5bPdG', 'W4RcRJL4W6S', 'W5WAWRCOWPS', 'aspdG08n', 'W6BdVmkzWQBdNfxcImoXWPLwWO0U', 'WRilW6HCka', 'W4eMpmkHWRi', 'W4qgaa', 'W5nshf8y', 'rSokW5qJW64', 'EcHfuCod', 'ngPfWQRcPG', 'wteHWQGX', '4PQGCmoDW4iJ', 'W4yNW65klW', 'W7ysW43cSgC', 'W7xdVCovumow', 'WOddJdy', 'sHnZoSky', 'WPddGw/dUbS', 'W6zsW4BdRhq', 'yCkzW5H3bW', 'a8kBWP7dKx4', 'WPDeW6C9WPu', 'WOjvWQm6Aq', 'WOavW5jomG', 'xrvizCoZ', 'WOtcHmkQdwm', 'W75lW7hdRfi', 'W61xaw0v', 'mGddNN8', 'W4SpWQG8WO4', 'W4eqbmkYWRe', 'WOxdNh3dVHe', '8kczIVcEIQdXGOMTW7pXIiUh', 'W5tdImo+sW', 'WO9pW7uSWPG', 'EmoFDJxcGa', 'hmkjd8kmAq', 'W7/dMs7dSHC', 'W77cGHpdSCk5', 'WQevW58VWRy', 'ffDGWRZcGa', 'BIjtxmoB', 'W7dcQqpcJSoL', 'W4aSWOi7WQO', 'W74AxW9u', 'W5JdHw/dTHO', 'yHLVDSoA', 'bJxcLSoJfW', 'W6BdRCkrW4BdLG', '4PA+4PsX4PAW4PwH4PEx', 'WOBdMJ1nW4W', 'BINdLG', '8kA6IFcEMitdTG', 'h8oRW5bEWPq', 'WQnnW6m', 'q8opyG', 'l8onlSkSWO4', 'W7XHW5HjmG', 'AmkyWPxdOMa', 'WPaNawO', 'W6xcRmk1kXC', 'gmk1WORdHgW', 'WO8HWQTzAG', 'W6jCDrmF', 'W7tdJmo5uCoX', 'gSkqFWm', 'tColpW', 'W4BcKwmJW6C', 'yCkNW7baeW', 'p8kGstlcKG', 'DGW4mSom', 'W7FdUCkbW5VdNa', 'xX4+WOOW', 'z0/cRae', 'rmk7y1FcJG', 'WQldSWSdFG', 'W5X+WQJdLfK', 'rwddH8k3', 'W4P5na4V', 'hSkuEapcUq', 'AZBdI8opWPm', 'WP/cS8ozsmov', 'n8oiyG', 'wGK4WP8m', 'W6NcQbJcISoZ', 'W4Cqer9y', 'WRDKW59GjW', 'WRxdPWpdRmkI', 'lSkmsmkvWPa', 'W7VcN8ocW6hcMq', 'WP9bW5DCkG', 'WPrVWQOzya', 'tSodDZZcQa', 'W67dG8oNWR8', 'W7HUW7zgka', 'WQTrW6RdTXW', 'ixtdKCoeW6O', 'WQJcGmkwlNm', 'WPtdJhniW40', 'WOTsWRS+za', 'z21qwSoE', 'W5WJWOmxWPS', 'xmkFWPq', 'W4RdMCo7tmoS', 'W5JcLMhdPHe', '8lAQNfHvmSkH', 'WRBdSG0', 'W7ldJ8oRWR7dOa', '6P+H4BEdYk3cS+g3QW', 'tcddMmkP', 'W6NcHmogW6NcVHJcSq', 'WQpcVSouWRpdIG', 'W7PncW', 'WO/cSCkiWPSV', 'WOqggH9b', 'xtxcI8kNW4S', 'rCo5lCkKWPG', 'W5RcR8kGihy', 'f8kmWP5lWOS', 'W4ZcPYrQW70', 'W6myW4ZcOgC', 'qCoeoZBcQa', 'WPlcLSkPhge', 'qCoiWOrbWPS', 'WPhcM8kUWQ8f', 'vryPC8ol', 'W7eMle1e', 'l8kKxbxcRG', 'cmolDYVcOW', 'k8kOWPxdUgG', 'W6tcKmkb', 'W7tcJCkb', 'WR8nnG', 'W4tdHwVcSrG', '8lAQNLHvlSk8', 'W4JcRt5TW7K', 'gmoZqmk4WP8', 'WO4PgSkIWOC', 'bYtcLSo1jq', '8kw3VSkyFW', 'gSkLW5LsWOC', 'W6OfW5O', 'W5NdK2/dTq0', 'WPzfWQymWPW', 'W4SVWQW7WR0', 'WO7dSSkmdmky', 'hCoMhmkU', 'W6/dSmozWO/dTa', 'W5jVwCkWWOG', 'WOtcPSkvWPDJ', 'tG0/WOG', 'tmkFWOqNsq', 'z8o/W6i3WOa', 'W7hdJ8oZ', 'kbldSe41', 'W4SbdaPb', 'u8kDe8kmDq', 'WPXFW7jkiq', 'wXmRp8or', 'B0TEWRhcNqK1', '8yUlG2ujASoA', 'Fd7dJmofW5q', 's8olBZZcOq', 'gmkUW5LCWPy', 'W5FcRJ3cSCod', 'aSkQW4XmWQm', 'W6CEWQGUWP8', 'W6VcRCkOoLy', 'Be/dVCkpW6W', 'WRRdV8o5WRpdQW', 'W6xdVmkjW5VdHW', 'DtCPWPGK', 'W7fSW50LjG', 'WRVdHbKGBG', 'W6JcISoSWQJdRa', 'W6HjaMac', 'W6FcV8kMe20', 'rSkyWP5Kma', 'W65kc3S', 'W6/cRCkxmN4', 'W5/cPYHT', 'wtddHmk+W5S', 'WQRcV8kdkum', 'W6RcUaFcKSoV', 'W5ZdMSoKrmo/', 'WRddPaypoW', 'sqe8WOOh', 'wIBdSCkdW7i', 'W6mwW7SZWPe', 'qmolW58TnW', 'W6RcHaxcUSot', 'BIrwv8ou', 'WQnOW55QpW', 'WQpcT8kzWP8Z', 'W5ZdImoKqmk4', 'o8k+W4BdV2e', 'W7H8dhSx', 'W6GkW7i3WPW', 'fSkpdSonFq', 'E8kUW7i2nW', 'W57dK2VdVZO', 'W7S/WOS7WO0', 'WRCYW4yGWOO', 'sthdMmklW44', 'W5ZcOCoixSob', 'WPPMW6qwWPm', 'Bd7dJ8oeW7C', 'W7hcMCoEW7RcHq', 'W7JcN8otWOFdVW', 'W7X+B8kSWQe', 'W4WjWRqWW54', 'AsXqv8oq', 'W63dSXSAkW', 'WONcOCoi', 'WPzWW6aZWQ0', 'wYDgA8o9', 'f8kOECkYWPO', 'WPhcPmkwWPm3', 'WQuFW44SWOG', 'd8k5W4SFWOS', 'WR8FW40PWQy', 'W7xdOSkiW5ddMW', 'WR8gpano', 'W5mxhW0e', 'bCkyyYlcLa', 'W6C0l8kjWOO', 'sYRdHCk+W58', 'EIJdH8ot', 'WQBcOCowW43dJq', 'lmkTW6PBWPi', 'WORcS8oovmks', 'jXhdLwOn', 'FEkCHHxcJmk6', 'wezSWRSf', 'W4Wzeard', 'n8oaFmoNW5u', 'W5qrdmk0', 'WR7cUmkdWR3dHq', 'W7XlaxWg', 'W513iL45', 'amkze8oivW', 'WOmHW6PAjG', 'WQxcOSkFW7VdNq', 'W5yqeCkKWR0', 'WQxcSCkoW5O3', 'W5vswf5k', 'WRhdRHPlpW', 'xCkoW59UnW', 'WQddMfXHoG', 'WQ0kW7u+WO8', 'g0yyWQ4L', 'mCkWhmooFW', 'WQldRqeklq', '8jAPQVcYUBNWRAU78lQ6M/cyQOC', 'W7jvcYze', 'dCkuEblcUW', '8yUkPmktlXbw', 'd8kzzrBcRW', 'W53dJ3VdOcy', 'v8kAW4emW5u', 'W5bJu8k0WPm', 'W5xcN3LGW5O', 'W60wW5dcM3u', 'hmkqFbVcVq', 'WRJdPe8MaG', 'W6a7pmkkWRm', 'WR3cQComW6xcJG', 'W5/dVd9gW5O', '8kA6IVcEM6xXIPIP8ksPNFc8MzK', '8loiQpc4QzhWU5I38lABPpc+QQq', 'tXCVpmow', 'kmkpW7b+WPO', 'WR/dVt9/W4m', 'WRVdKv0', 'dmkJx8kaWPy', 'W5frifKs', 'f8kzgCkmBG', 'ge0pW7JdPG', 'W4bffWOB', 'W4tcGaDsW6W', 'WOxcL8kJxcC', 'tvjMW4S', 'WP5qWRiIEq', 'tXGKWO4e', 'WRupnKa', 'W6LXW7v6aW', 'WRmtW4FdPMC', 'ySotW4iEW6G', 'WPddTmoBW5TP', 'acrqv8oA', 'WOnfW48OWPO', 'xtxcGq', 'd8oLWPyrWR0', 'j8kSWOldIMa', 'W6ZcGbW', 'W7HpW6NdQKG', 'WOirW6KKWOe', 'W7HygMWr', 'WRddQu/cRq', 'W4zJrCk5WP8', 'W7nwgMzC', 'WQxcSG7dT8kZ', 'WRpcRWSemW', 'W6fcuSkGWRy', 'WQRcOmk/o30', 'WQNcMCkXWQSq', 'W6rnW7W', 'WPJcT8oEtG', 'W6uNofek', 'WOC7W7HzoG', 'WRFdVu0Vjq', 'm2HTWO7cGq', 'WQNcVmoeW6hcIG', 'WOBcVCkjWPSZ', 'gSkqDapdSW', 'W7RdMmkVW7pdIq', 'd8k4W4TEWOu', 'tSkgW5S', 'tXa+', 'WRJdLv4ZlW', 'WQqAiujB', 'WRVcHqG', 'jSkjbmouyW', 'WPXOW5DSka', 'WRJcQmknW5/cGG', 'WQpdRmoaW7BcMa', 'W5FdHCoWnhu', 'W5Oqha', 'swxdPSkLW5O', 'WRlcRG3dPSk4', 'zapdO8ooW5G', 'WPBdLZjD', 'jSkVmmozua', 'WOhcU8kuWP4', 'FGSTc8ou', 'W49BWRy4W54', 'xSoBdSkZWOK', 'WQpcU8otW4/dHW', 'dmofFCowW4C', 'c8kMW50', 'gCkvgCoOFW', 'WO9FW4CsWPe', 'WR9kFWm', 'WQtdGbeOBG', 'W4CMwSkIWOG', 'W75HW61wlG', 'WPS4lujm', 'W6tcQCkieum', 'WOzEWQ4', 'W5aBaSkLW7G', 'W6XdW6i', 'bhjbWR3cRW', 'WOhcOmoiW7lcMa', 'WOKyW6aTWQG', 'dSoVcCkUWOi', 'WPuQW6vCbW', 'o8kOWOJdR0m', 'WP9EWRy4FG', 'W6vBWQVcRri', 'WPlcTSkda8kC', 'W78xWPONWOC', 'bCkBrmksWRa', 'W7eTWPmLAq', 'W5lcUCoetSoz', 'xHSzWPSn', 'FYddICoQW6K', 'WQveW5Xtla', 'W74oWOimWQ0', 'zsnbvSo9', 'W55BWPSPWP8', 'WQVdObWyhW', 'sthdJG', 'WOxcQCkkcwW', 'lCoTWOhdUwe', 'j8k/WP8', 'iGZdG8kmW5S', 'W5zcfWSo', 'iSkoW6PWWQK', 'WRhcH8k0kv4', 'BsT+WO4Z', 'qCoeFhNcRa', 'W7vPFmkIWOu', 'pCoTWOVdVN0', 'lGtdKNG8', 'rCoSFb3cSa', 'sSkPW5DlW4i', 'WO/cI8ogA8oD', '8ykiLNmdW6Wh', 'W4DGqmk5WOO', '4PE44Pwz4PsQ4PAT44oP', 'pCovFmoZW4W', 'W492f18/', 'WR/dRWKgoW', 'WR4FW4iUWRC', 'o8oeDW', 'YzZiP8kfW6tcKa', 'WQPnWPexwq', '4PsV4Psz4Ps34Ps34PAi', 'WP3dVJbRW68', 'WQKtWOeDWRm', '4PAG4PEn4PsJ4Pwc4Ps2', 'WQNcHmk6W5ddGW', 'b8kzbCoy', 'W7CuW6ZcHMG', 'WRilmuzi', 'lmoRhmk+W4C', 'BW5gF8op', 'uwxcISoRWP4', 'bSkKW58', 'W69wW7FdPL8', 'W7RdLfWSiq', 'WPyhxq', 'oCkWAGFcRa', 'eYlcMmoYiq', 'jwzuWQJcVa', 'BWjZzSoX', 'WRxcO8oAW73cHW', 'WPNdSxGuna', 'WRFdKu0Kkq', 'eCoWymoyW5e', 'W5TGjKXc', 'wXCOmSoi', '44kHW6lIL5JILPhILja', 'W6xdR8oW', 'W7VdI8oRW67cSq', 'WQqkW4XXba', 'WOZcPmkx', 'W63cRrpcN8oI', 'iSk3WRBdVLW', 'WQpcRCoEW7VdIW', 'WPFcHCk6', 'W7NdNCojzq', 'dcdcNSo1ma', 'WRZdLvGLkW', 'WPlcQ8k4F2a', 'c8kIWPBdSI4', 'xG4YpCkY', 'WPVdPLOnnG', 'hmoRd8oGW4C', 'aSo5DcVcTa', 'W6eGW7GcjG', 'W6qAW4y', 'CdaaWOyk', 'l8k/WONdVN4', 'W4pdVSoWW7a', 'xSkSDCk2WPa', 'WRxcVmomW6VcJa', 'WPBcSCkcWO4', 'W5vsgrWF', 'wqS6jW', 'fCkKAa', 'WRNcTSoaW5/dMa', 'zCkCW79omG', 'cmodDxNcSG', 'W5SoWRqPWPS', 'W79hW4FdSKS', 'WPFcP8kF', 'WP5AWRa+kG', 'W5CzfHOF', 'W4JcJCkvWO9J', 'WQj9W59Spq', 'nCk6f8oAAW', 'W5DNqCk2WO4', 'WQqzife', 'WOJcH8odymou', 'WRpcI8oLW67dUa', 'tJLuCCot', 'W77cMmkkivi', 'pmoaFSo3W48', 'W6JcISojWRldOa', 'd8odkmkZWP8', 'kGhdKx4n', 'hmkGq8kIWRa', 'WR0iW4mNWR0', 'WPyet0LsW77cUCkMBdTsFW0', 'WQrdW6O6WPC', 'gCo5qmoCW4a', 'jNzAWR/cRq', 'W7PLW70cAG', 'W5lcTcpcSCoL', 'FYNdJCohW7a', 'mbBdJK8w', 'WRddLvqUoG', 'W5BdImoZzmo2', 'WQGxxGmW', 'W4Xsaq', 's8kaW6zicG', 'wSkJFSk4WPm', 'zcHw', 'hdhcG8o0ea', 'wmozixBdQq', 'W4zJfCo0W4C', 'W6pcRJT/W5W', 'xSkmF8kLWPi', '8kc5N13cJSkpyq', 'W7fxW4lcSg8', 'WRdcOrSopq', 'm2PgWQRcQG', 'ra0+W4Tt', 'WQCSW6HDoG', 'rrTOxCou', 'WOOcgHLu', 'WPDkW4bFpq', 'bmk5jCkgWOG', 'amksqrlcRW', 'v8okW4isW48', 'WRnFW6KRWPW', 'uGiEWRWc', 'W5ldMmoeWOpdHa', 'ysHD', 'WRFdN10K', 'WR1OW5r3ka', 'W7JcJCoejLG', 'WRJdRJDJW4u', 'W6jjW6KXWO0', 'WRBcL8oWW6xdJG', 'WPpdLJ9mW4C', 'W4ixdX4c', 'WPFdNdHIW6G', 'W6NdMCoJWRxdQW', 'WPJcGJJcO0FcJdrxW6LkBtK', 'tmkkW4POja', 'WQhdKhnoW4W', 'WP7dMIO', 'tXC/pmop', 'W5GqdWrd', 'WRpdVuVcOW', 'W7HgW7BdT1K', 'W5yqeCkJWRC', 'fqRdLhKe', 'WQBcOSoiW6hdIW', 'WOjOW4DXia', 'WQhdSSowW47dHq', 'WO7cT8omtSog', 'cCkIW4HEWOW', 'W7JcQ8kEd30', 'yJRdI8op', 'W7tdPuOOia', 'gmkUWPi', 'W7fkB2PC', 'rSk1pSkRW4W', 'W44CdbTD', 'bKG/WOOF', 'p0LTWPVcUq', 'AZOi', '8jg7INT5W73cJG', 'c8o+xCk1WPC', 'atRdS0uW', 'qIRdGSkK', 'FJ9rvW', 'pmoTWOtdRI4', 'x8kkW4P5jG', 'v8opW40yW54', 'WRxdUxaypG', 'fmkCFW3cUW', '8lkARXxdV8k2W4a', 'r8kat8oqlW', 'ASkziG', 'FaldO8kdW5i', 'WRdcOmkXF1e', 'WRdcOCoi', 'W5VdJZSgW48', 'd8krAaxcUq', 'W5iAcmkTWRK', 'WOZcOCkJWP4v', 'zI3dG8ocW6a', 'W6JdNSksWO43', 'WPZcJmk5fIy', 'W5zChxOx', 'edaZjSom', 'WQtcTq7dT8k5', 'rrO1', 'zYGk8joXKq', 'WOdcNqFdR8kc', 'W5JdKhVdVrm', 'WQFcQ8kOlbC', 'W6OCW7uOWO0', 'fJ/cK8o+', 'W7PNW67dT1S', 'wSkFW4PIlq', 'aa5fxSoB', 'WRXSW5PR', 'WRm/W69zpG', 'WRZcRCoeW70', 'WQxcOSk8WRyq', 'oZZcTSoFbq', 'FaSUWPmK', 'b8kufmoFea', 'WRjdW6G4', 'zCo3W70IW5i', 'WPm8W64', 'W6hdVvBdN8k2', 'WQnoW6i', 'WOxcQcb+', 'Yk3HTBuwW6djGq', 'W7/dImooWQ3dRq', 'qahdPColW68', 'WRhdPaKikG', '8lAQNLHvjCkR', 'WRBcS8odW4/dJW', 'WQNdRGef', 'W4zPr8o1WQC', '8lU4QCkQ8yU4H/crQBRXH5Qt', 'W7fQW4fQpa', 'W6amWPOEWO8', 'jmkVW75oWPS', 'tmoBW5OiW7O', 'wb8gWPim', 'W6zNxCkCWQC', 'WOpdKtXnW4O', 'DvdcLtWqW71mEmoUWO0', 'W6yEW5pcTwW', 'WRFdMH1DW58', 'WQJjJUg2RCMz4BA5', 'WRhcT8oeW4K', 'W4ldMc7dUrO', 'W6RcUbBcNCoI', 'tIZdH8kVW5a', 'kSoizSoMW4q', 'eSoHhSk7WPm', 'waFdHmkeW7i', 'aSkjeSoyFW', 'bmkPW55MWPC', '4PEI4Pwd4PsW4PA34PwQ', 'WQddKXadeq', 'WRhdPbGela', 'WPiMW6rw', 'zYawWQ0X', 'omogDSoR', 'F8omAtxcSq', 'W43dGCoYsW', 'W5XYqCkLWPu', 'WQ5pWQCkAa', 'aCkUW4e', 'lCkfDHtcKa', 'lWVcHN8s', 'ybtdK8kaW5e', 'W64qW6hdQK8', 'W6VcLmkiifK', 'W4RcSIb8W7K', 'W6fOvmk3WOO', 'emoVemk/', 'WRJcHmkIc34', 'W75TW7FdShy', 'wd7dGmkbW44', 'W5PLumk4WOm', 'xaO3nSow', 'bXxdSwaV', 'W5XpkeuL', 'WO3cOCo4W77dRq', 'W4Hfaq', 'oMzBWR/cOq', 'W7yeW7ZcUwC', 'W7/cMmkfjKm', 'WOBdMJ1nW6q', 'tSolW6T+jG', 'WO/dOJKflW', 'W59+WRKjECoeWQfEcXLXWQy', 'tSkxyWm', 'W7yFlmkZWP8', 'sHewkSo1', 'W57dLw3dTaW', 'z8oBW540W5y', 'x8oCbmodBW', 'omkSWPtdV2C', 'WQKrW78cWQi', 'W7zdCSkCWQG', 'WQ4sW40+', 'xCozFG', 'WRFcSXxdOSkX', 'W5KEWRu5WRm', 'W7r1g8kIWO4', 'xSkEW5f5jG', 'WPiQW7nm', 'W4PJW5TjaW', 'W7hcGCoEWRNdIW', '8j2YGo+4QXlcNCkYWOa', 'W5S5mebm', 'bJNcGCoMmG', 'W5NdK2/dSGS', 'W6jjW6KYWPq', 'WOxdKYOjW50', 'W5JdN8oTW7dcVW', 'qaeOWQ8m', 'erxcLCogiG', 'W5nderem', 'b0HDWQxcSa', 'WRNcVSokrCou', 'jWNdIG', 's0yHWO5g', 'W6j/W7u2WPC', 'W7VdVmkyW5NdJq', 'WQv5W598ja', 'uCoYFJdcRq', 'W5VcKZzJW7a', 'W5/dRdXBW5S', 'W75CacKq', 'W5rsfHSM', 'b8kzgCkmoW', 'W5JcSJXWW6W', 'W5FdV8kmW5pcNa', 'f8kxjCoPuW', 'W41VW7DwkG', 'W49sfrOz', 'WOpcIcJdICkr', 'WQFcOG/dP8kB', 'WRlcUCoFW6hcJG', 'tmkeW5b5iG', 'W6HXdv4u', '4BwHYOf/4BwWW7i', 'W5KueCkZWPK', 'rCoNvCo6WRW', 'e8oVfmk0', 'WPeramkTWRC', 'WOvAWQmOAW', 'W7GSWPWxWOC', 'W7JcK8kgkvG', 'WR7cImo6e2K', 'WOhcNZjnW4q', 'W6RdI8o+WQ7dOa', 'vq0+n8oY', 'lSobD8o8', 'pmoTWQJdVMm', 'WQrsWOm0BW', 'W4BdLCoQtq', 'xSoVgCk3WO4', 'WRaBW7W', 'raq1W4Si', 'WQBcRSovW5JcJW', 'wSkQW6XMeW', 'jSkWxJJcLW', 'bSkSBmk0WOK', 'WPFcI8oOW4tcJa', 'sXG8W4uk', 'WRZcHSk5lNG', 'WRvFWQ4VEq', 'WRJcVmk1dgW', 'WOVdVNbaW5C', 'hZxcJG', 'WO3cISk4nxq', 'WQlcQCozW6FcGG', 'WQhcQ8kSnLq', 'W4ddO8oUtSos', 'WOFcHmkOcw8', '4PsJ4Pwk4PEc4PAl44kt', 'W7eaW4NcKuW', 'ethcK8o+Cq', 'WOnkWP4RsW', 'xmkFW59/nW', 'WPlcL8kUba', 'cmkKW5Xg', 'zYXu', 'e8ocu8ogW7S', 'bSkfWPldVuy', 'zmojWOamW5m', 'p8kpWRddNM0', 'W7xcVXlcJa', 'WOHhW5zIaq', 'c8o/Cmo1W4G', 'W75rW6FdR1m', '8lwPPY7dLG3dMG', 'W5xdRWm', 'W7NdG8o6WRVdQW', 'W78Za2ay', 'WPdcTtfWW7W', 'W5mqWPaZWPC', 'rca2WOKk', 'WQxdHvy1kW', 'W7pdVSofW5tdGq', 'W5VdHgVcVbq', 'WRj0W5fGoW', 'WOrvnUg1Sbe', 'W6hcUJJcSSo5', 'aCk6Aa', 'qqeVWOai', 'FmofoY3cPW', 'WPy9W6rmjq', 'adJcTCogea', 'WQJdPbe', 'Ft7dG8ocW60', 'W6Hnb2OD', 'WQzJW5z3Aq', 'WPRcU8obsmoC', 'aCkblbxcSW', 'owXcW6VcPW', 'k1/dLxG', 'W7tdVSoQBW', 'oSkSWOtdP2S', 'o8ohrmoZW4u', '8yskKSo3Cu8P', 'WRBcQ8k0o1i', 'W5JdK2ddTti', 'mrtcOSomgG', 'tmkkW7nFdq', 'uGO/nSom', 'WRTShway', 'WPPSrCkY', 'WR4eieDL', 'W4esn8keWQW', 'WPtcT8o/W5NdKG', 'W4/dMSoUWRVdSq', 'DmogySo3W48', 'WPdcHmooW7FcKq', 'W4q8fCo/', 's8oHWRi1', 'W6pdKqeiFG', 'WPPftW', 'W67dGWCFDW', 'smkoWP5JiG', 'Fb3dRCkYW5m', 'h8ktgG', '8kkAGCoxW54+CG', 'm8oRdSkPWOy', 'W7BcJqxcKCoM', 'uW46nmoD', 'W7NdGCoVWQ7dTG', 'W4NcS8kuahK', 'WPhdLaTSW6a', 'm8k4W6T6WQC', 'W4lcKSkUb1q', 'E8oFEdRcOW', 'WPXiWOmWAW', 'WR4JW4e4WP0', 'W5ldONe4WRG', 'W7hcRCknW57cJG', '44ksW73IL7/ILBBILj4', 'c8o8eq', '4PwL4PAZ4PwF4PEt4PAy', 'WRPAW7Ozzq', 'WOxcO8knW6BcHq', 'WQhcQGpdPSkK', 'i8kOWP8', 'jMLeWQtcIq', 'WQdcVSod', 'xmkkEtZdPG', 'vSkAWO9AWPe', 'tGyJjW', 'mcBdT38K', 'adxcJ8oZ', 'AgbLqSoE', 'W5FcSCkYgcy', 'wGWTWP8m', 'WRTjhgyB', 'kCkGWOm', 'WRr+W4bSjG', 'W67dKMpdVs8', 'WRlcJHJcJmoK', 'WOtdIJjfW4a', 'fbmPpmov', '4Ps44PEP4Pwj4PEp44o1', 'WRhdRHPlhW', 'ntldJ38v', 'W67dUKFdGJ4', 'W7hcRCojW77cGG', 'W6v7W4pdTNq', 'DsOyfSkd', 'nXddIx8y', 'tsygWPmd', 'W6bAW7W', 'DfKa', 'W7DvWOmPWRO', 'W79AW73dTW', 'tmkaW5DJja', 'W6VdM8oyWO/dJq', 'W4HCgN0F', 'gCkUW5zBWQ8', 'eCoJemk7WOK', 'WQpcQComW7dcNW', 'xmkoW5bPjG', 'WOhcTCkuW5OW', 'W6rHuSk4WRm', 'ta04WOGb', 'WP3dMNnlW4W', 'WR8TW5TGoW', 'W4qvWPymWOG', 'WRddTqeinq', 'mXxcHMGs', 'W7HAW6VdP3e', 'WRZcISk2fMC', 'WPZdJYKMgW', 'sWKQpmo5', 'WQpcP8k2oLK', 'WQfjW4v2mq', 'W4G9WRK3WPG', 'omoueSkWWPi', 'WRT/t8kvWQS', 'W4Hccf8p', 'W7aeW4y', 'W43dR8oSWQRdTq', 'WQdcOCos', 'WRpdRq1rCa', 'WQNcQ8k0oem', '4PIwcSkSgSkl', 'W6behq5U', 'tdFdJCosW7W', 'kSkhWOxdRuy', 'W4yqeqXf', 'W5VdL3RdPrO', 'W4/dU2VdOGW', 'WQpdGe0NhG', 'w8koW4z5', 'W6ZdICooWRxdRW', 'WOHwWRu+Ea', 'W4a0W4xcGea', 'WPzlW7Pgoa', 'WOxdRsn8W6S', 'mtxcS8oVea', 'vqaW', 'W7SgjWzA', 'qYddKG', 'WQqAzu5A', 'W6j+W642WOO', 'W5ayaa', 'r8ovW4anW54', 'WOmNh3T4', 'omozAmokW7q', 'W7VcJJxcH8oz', 'W6HVW7qTWPy', 'WRjjW54rWR8', 'CJLTxmor', 'WOCIW64', 'c8k0WRxdOgq', '4BsT4BwVYlJdI+QDMq', 'W6bKWRCmzq', 'WPpcP8oFj8k4', 'W5/dGCowvmol', 'W6NdJ8oKWR7dOa', 'WPVcGmkJdIS', 'CW57pCox', 'iCk5WP8', 'tmkdW595', 'xvLXCW', 'w8opDt3cIW', 'cdldHmk4W5u', 'jmkOWOJdRhO', 'WOHyWRq9BG', 'WQxcPmoiWRpcQq', 'nMDAWOZcVG', 'u8oCxCkmoG', 'W59iy8kVWOi', 'WPNdI8o4uCk4', 'W6bfW55fgG', 'WRBcQ8k0o3O', 'lblcS8oojG', 'W47dGmkcW6hdPq', 'W6xdPmkqW4BdLW', 'BI/dHW', 'WRZdKu0YdW', 'EZHlrSos', 'W6TYW6Tnoq', 'W7VcTCosW57dIW', '8lUPH/cMUOJWOlQjWRZJG40', 'WQysW64jWRC', '776V776AWQRdUU++QW', 'W7PkW6RdT1K', 'W4zdhq', 'WQpcHCkwWOKl', 'WOhdS3ZdOXa', 'WOlcHSk5ghu', 'W4NdH8kGW6S', 'W7/cL8ofW5JdHW', 'W7fyW4bSjW', 'W5mapqbh', 'W7awed1B', 'xGyOma', 'ffbfWR3cUG', 'WO7cU8kD', 'WOPjWRGUEG', 'WQjAWQ8TCG', '4Pwv4Psw4PA84Ps14PwD', 'zd7dMW', 'W7ZdG8oMWR/dQW', 'oCoaySoZW48', 'C8oFW4XBW6W', 'gmkCAblcSW', 'WPNdImk3Amo9', 'FSoLuHRcGW', 'WOb6bCkPW5q', 'xSkev/glS6VWN5kX', 'W5WBea9s', 'W6SreGjF', 'W7ndeXKV', 'WOCJW6jzoq', 'W40jWRqOWO4', '4PwF4PEO4Ps+4PEy44oz', 'WR7cJSo7W6lcGa', 'FM1gv8kx', 'vmoOjW', 'WOFcSCkuWRSU', 'W4ytnqfq', 'BJpdTCoaW4O', 'eCo8ba', 'W6xdQCkgW53dNq', 'ySkiWPtdUwe', 'WQudk0qp', 'c8kUemkVWPq', 'lCoHd8kOWP4', 'W6f5qG', 'WQtcOSkZpKq', 'W6mpW7S6WPC', 'wJJcNSoJna', 'WRSkWQD+W5K', 'WPtdIYbiW5K', 'W690W7W', 'gsVdP0y4', 'yCkIW7P6aa', 'WQeTW5fsoq', 'gmoRW7PwWO0', 'sXLsD8ot', 'jCkjW6PiWOG', 'sCohFNNcTq', 'WOJcT8ovwq', 'WQBdRXW', 'WO8IW5dcSsi', 'WRxdHeWY', 'WOHvWRy5zG', 'WP8BWQu+EW', 'W7vYgL8m', 'W4xcM8kSlwa', 'r8oyoZtcQq', 'W7XxWOldTsi', 'WODoW7jxdq', 'WR/cH8obwSoJ', 'xtBcI8oQWPm', 'W54jWROZWO0', 'orhcPmouea', 'ESo8yCo7W48', 'WRrmW4ikWQ8', 'hJ/cNSoPiG', 'WOpdHCk7gwS', 'pSomyCoX', 'fYtcGSo1na', 'WQdcRWtdRq', '4OE677QoseeoW7G', 'WOmRW6jm', 'WPVcNYDbW4W', 'qsJdISkTW5S', 'pmoAm8kpWRu', 'W7VcSHNcISo3', 'W6mpWOmpWPa', 'WRvOW4bM', 'WOPFW44MWRu', 'W6NdJ8oKWR7dIa', 'mSoiyCkYW4m', 'W4bTidWi', 'W6rEW6e', 'WPhcOCo6k1y', 'emkuhmoyna', 'WPJcT8oaqSog', '8kM4GdlcUmo4lW', 'W4hdMwFdVW', 'EIXhwCow', 'u8oyW4i9', 'WRWhW4fXia', 'W44EWQG+', 'W4ddK3FdOHa', 'W7VdHSkQWR/dQW', 'W5DPw8kHWOC', 'uSowD8kM', 'f8kHBmkJ', 'W6XbW688WPi', 'dSkvBa', 'W6CyW5FdThe', 'W5yCc8kNW7G', 'W44BmYnY', 'uW08', 'WQqxW40TWRC', 'WQlcQCodW7FcPG', 'W6ujWPi1WPq', 'W6HzW6mZWPW', 'W43dGCoiWQpdGW', 'gdNcHmoMFa', 'W505cYDA', 'omkSBmkHWPG', 'zYKnWR4t', 'WOuUW7TmiW', 'WQBcHJFdH8ka', 'g8ozcmkTWQ0', 'CmoJvb/cJG', 'W4qFW7vZW5q', 'WRDbW6G7WPm', 'W6dcJmkief0', 'WOrLW4KlWRW', 'bMVcHmkMW5C', 'WQipk0DI', 'WQhcTaq', 'WRhcOSk+e3C', 'WPJcQGldP8k/', 'gCoPy8k4WOK', 'yhVdKCoaW68', 'WQVcISojy8o3', 'amoPBmkZWPa', 'WQ7cSINdGSkW', 'W67dN8ksW7NdPG', 'dmkLFWdcLq', 'W53cKZpdHmoa', 'WR3dUGfMW6i', 'WQCSW7ObWPG', 'WQZdOx8zoW', 'W7hcVmobW7lcKG', 'WRHHW5ypda', 'WPdcUCkBWO4Q', 'lmokC8oGW4u', 'WQlcUCowWOhcHq', 'WPy9W4zbbW', 'bCkssHxcJW', 'W6HAd2Dw', 'W7NdI8o+WR/dOG', 'td1Lq8oD', 'WQZcOqusFG', 'WPrhW54oWPi', 'WQDzW6uTWPa', 'oCkqBLFcIW', 'WR/dLua', 'WQOiW4m/WQi', 'nqddHwqt', 'W7VcVmohW4C', 'W75mW6ddSq', 'WQlcUmomW6hcNW', '44cIWORILPpIL5hILy4', 'v8oFW4aFW7y', 'WQFcKaJdT8k+', 'W4anuL8', 'W7pdV8kwW5pdLa', 'mmobb8klWP4', 'W7tdPZRcKCo0', 'W5VdHCo4rSoZ', 'b8kUW5zlWOS', 'WPpcGmkPhG', 'zJLHumoN', 'W5/dJ37dTa', 'eJNcM8oIpW', 'W5pdH8kQWRtdQG', 'W6HChh8t', 'WRNcRCozW6dcQG', 'WRWIew5j', 'p8oAyCoZW4y', 'W7yEW4ZcUI0', 'dCknr8kLWP8', 'W53dJmoKrG', 'WPpcMmoJW4BcUq', 'W7TzdG', 'WPVdSIC/gW', 'xcddK8k+', 'WQtcO8k/', 'b8k0WQtdKx0', 'WRjhW4PTlG', 'EqtdGmkFW7K', 'WOajxZL0', 'W7qzW4BcKMq', 'idJcNSo0Cq', 'W4NcIcfrW4W', 'rsZdHCk/W4O', 'FSoUuGRcQq', 'WRFcHSo5W57dOa', 'WOpcICkFcfa', 'tcddJCkJW5a', 'WOThWQyXWPy', 'W7VcSCoyW4tdNa', 'A21PxCot', 'WOVcISoGcxq', 'WQBcT8ofW5ZdJq', 'WPWkW7WzWRG', 'rmkMyWxcRG', 'W6lcJ8kD', 'W5ZdMSoKtmo3', 'WQjOW51Hba', 'W41vlq5b', 'h8oQemkZWOK', 'W6ZdMmo8WOVdGG', 'WQBdP0dcOSo8', '4PA54PAD4Ps84Pwm4PAA', 'W7/cMmoezby', 'nexcHYPx', 'FXRdHmoeW54', 'l8kHWQpdN34', 'amkmeCofBG', 'W71iW7hdTuK', 'WR3dKw0vnW', 'W6VcQbtcNCoZ', 'bvhcImoPW7a', 'AZLb', 'W47dTehdNbm', 'W7z3iNGY', 'et3cLSoUpq', 'qt3dLSkVW44', 'W53INQNcLbiM', 'W59tgg4S', 'rSopBtBcNG', 'WPyoW61Ddq', 'W5lcS8kXchu', 'W7RcN8kVeh8', 'WQBcT8ozW47dPq', '44gDi+kwVEkvMEkvMG', 'W4Cueq8r', 'WQjAW5PXiq', 'WRNdKvaV', 'xmopF3NdPW', 'eSo/x8otW5C', 'WRtcV8oEW7lcJa', 'vcFcKSo1na', 'emkDcCojFq', 'gSksxCoeFW', 'rHJdM8oQW54', 'WR59W5zRpq', 'wq0IWO8K', '4PYTzCkbWPpdKq', 'W7PPW7DfAW', 'W4RdKNFcSr0', 'W78Fk05A', 'WOxdPxWsgG', 'W79ChwO', 'W5JcPZ59W70', 'W5GEWRO+WOO', 'WPNdImo5bCo3', 'W5tdJmo5uCoX', 'WQBdHZ0jhq', 'W7JcHCoSWQ/dQW', '8l2RRSkLW4roW4K', 'WPOokwzi', 'W4ZdH8o7tmo2', 'WQvyW6KQWOK', 'WRhdPeHkFW', 'WQ7cUSorWOlcGW', 'W4rEcb4f', 'WQLpW78', 'W71qaMWy', 'WRGjW4K4', 'xsTwxSoa', 'WRlcVmkZk1i', 'WOJcQ8oDsmkp', 'oCknF8kdWPe', 'W5jzW7tdM28', 'W4VdJmoJv8oX', 'WRRcISkGWPpdTG', 'W7ldQCkwW5e', 'WQXnW5mVWP0', 'n8oiE8o8', 'W6iqc8kKW7G', 'fmkoeSozAG', 'W6ddPCkgW5FdMG', 'W5NcRXvZW4K', 'W4XnW6RdTKW', 'W7TWW71dpW', 'WQabkMrb', 'eCkzd8kmsG', 'WP01W5S+WQi', 'WRNdMvDHoG', 'hmkMWQ7dGxO', 'WQmgnLPN', 'rchdSSkOW6O', 'jqtdKM4A', 'WPxcICk7e20', 'WQBcQbpcO8k3', 'W4FdMxK', 'vCopW4epW54', 'WRlcRCodWRpcMa', 'DfpcLdLjWQi3vSoAWQnucL4', 'Dq8Ac8oS', 'WQpdOCogW7BcKG', 'kComFmo2W4q', 'xHlcGSoGCq', 'amkMlCkJWPu', 'WP4ZW6meW6G', 'wCksW4T8gG', 'W6ydWO3cOMe', 'iYnuWQ/cPq', 'WRxcKf4Ziq', 'WP1xWRjXaa', 'W54EWR99W58', 'W7ysW43cSe8', 'W7ldHCoVBmoo', 'W5RdHSo5uCo9', 'W6iSfSkUWOO', 'W49wtMOz', 'p8kJga', 'nhPsWQpcRa', 'W4a+WPK5WRK', 'vmkOlCk6WPG', 'WQddQG0Flq', 'WO9UWOiVCa', 'AmoTW4ZdGN0', 'cgxcGCkdW40', 'tmo6sW/cSW', 'WRiyieDC', 'BY5bw8oh', 'WP3cOmknc8ks', 'zXLZz8o5', 'WP5pWRyPFG', 'mNqramoaWPdcLLtcMmkV', 'Bw7dGCkzWQS', 'FHvWECoM', 'k8oCFCoMW4q', 'W4ZcKG7cQmoF', 'xaH2yCo+', 'ACoIFWRcLq', 'vSoFW48yW48', 'WOpdPIfRW4O', 'hmkDWOFdIgu', 'WQ0JW693da', 'W40IWROKWRC', 'W4/cRsD3W7q', 'WRekW6GWWO0', 'WOldKtzB', 'WRBcVSk2nKm', 'W5mxgHPl', 'WPBcI8k0eNm', 'W7PIumk4WRm', 'fSo5W4qo', 'W55jbuah', 'tmk+W4Peca', 'AJRdLSoeWRK', 'W6JdJ8oRWRNdSq', 'W53dGmoKvCo0', 'cmkCyblcSG', 'WOa+WQKVWPe', 'W7HmW6ZdRfi', 'W67dG8oNWR/cPq', 'W4mqfmk1WR0', 'pCkUWOxdRN0', 'W53dJmo6sSoS', 'WRfQaxSe', 'W7PucW', 'WR3cQCodW7tcNW', 'qYrWxCos', 'W7WFW4FdQLm', 'W4HCag1w', 'W5iAc8kK', 'wJZcKSoMjW', 'c8oCd8kPWQ0', 'ht3cLSoGna', 'jr7dKmotW7y', 'W4JdN37dSbe', 'pHhdQ24o', 'iMfWWRZcIG', 'Yy7iGxv9WPy', 'id/dL8o0ma', 'WOZcP8oErq', 'W5fhW7ldT0y', 'W4rvfW5d', 'WPtcHSo4W6xcUW', 'WP4MqCk9WOm', 'WRKsW4KK', 'WQHkzaip', 'W794W51Njq', 'cCk/WOivW6G', 'W6NdMSoMWRpdSq', 'WQrklujz', 'WQJcHuvWmG', 'WQtdUWnpW5O', 'WRJcVbVcJmoZ', '8jsPGmkEjXRdQW', 'W4VdHSoduSo3', 'WRqTW5jPoW', 'jmkBWORdGu0', '8lw7Nf9bAhq', 'cSoRbCkU', 'WQtdQa4s', 'W7bRdwe6', 'AtFdGmkVW7q', 'kSoHxCk5WPu', 'W57cStu', 'yr9hwSo7', 'W5BdH8oJrmo7', 'W6fYW6a', 'g8k+W5DlWOC', 'm29+WR3cIW', 'WQBdUbS', 'W71AWQxdPe4', 'WOldLdWKaq', 'e8oZj8o3', 'WQfMW7zqjG', 'W6CImsfN', 'pCk5WOpcGwy', 'W7/dPh3dNJW', 'hCkqyHpcUq', '8lwONY7cUZRdHW', 'W5VcKdbgW4C', '8jg7INT5W6RcMq', 'BmkkW5jHyW', 'B21fxSof', 'WR3cLmo8W47dOq', 'W6CqdbHq', 'WRtcVmozW4xdNq', 'W6NWV4Q5sWRdVa', 'lWVcHMmy', 'W6lcHq/cHmox', 'WP1lW7K1BW', 'WP5bxmkJWOm', 'cCkQW4XAWOu', 'WQtcTq7dRSk5', 'Cmo6FCoGW5m', 'adNcMSoI', 'W41zWRGVkG', 'WQ7dOaypza', 'WR5RW5PPla', 'WPRcGmkpeNu', 'WO4UW7H3pq', 'WONcImokqSor', 'smkoW4P9mq', 'W6pdH2hdOZW', 'q8koW4POyW', 'W75pWQxdReW', 'W64sW5O', 'krxdNW', 'qmkbW7jena', 'W7u1WO4qWRW', 'W57dM8o4umoO', 'ySk+W5bGjq', 'WPJcL8kJ', 'W4VcICoXv8o3', 'rSosW7C/W78', 'W5PYwCkSW4y', 'W5RdOSooW4PZ', '8l+QVmkL8l2QVVc0UyJWORQY', 'W5acW5FcKuW', 'WRfpW6G7WPO', 'W4dcPYK', 'dCkDBqm', 'WQlcH8kVgNq', 's8odAZJcQa', 'BIHiv8od', 'ESoDESo3WOe', 'neVcHLSr', 'W5JcPZ59W5u', 'qCojW50AW5W', 'j8kylbNcSW', 'WPqNfmo1WQ8', 'WOvIWPn2la', 'xSo6fmk3WOi', 'W4SFWQj9WPW', 'WQX2WRmmzG', 'WOBcOmo7W5NdJa', 'WR/cR8oiW77cJG', 'WPZdMCkwW5FcKW', 'WQaFW4i+WRS', 'WONcJY8B', 'WRDzW6m', 'W5RdGCo2uq', 'W710WQS', 'wq0IWO8m', 'W5rsfHSo', 'FHq/p8or', 'W7NdLYSQda', 'WRtcISk3egC', 'tSkhAqtcRa', 'WO/dMWSYdG', 'W4KqW7S8WPi', '8ykPJmo6v1/dSG', 'W43dJmoVuq', 'b8kUxmo7W4C', 'WPddMZPD', 'W6Tyhh0F', 'sqK4WO4o', 'WR/dIqnGW64', 'sSobDtRcGq', 'rmkoW4C', 'WPO7WOeDWRC', 'Fr13umot', 'W7i7n8kZWPO', 'WRKFW5q+', 'W7VcVapcNCo+', 'W65qo1KC', 'WQNcRCk2WOmI', '4BAD4BAY4BAfYzRHTP4', 'WRzpW519bG', 'k8kepSoKBG', 'WRlcRCozW7RcHa', 'W7/cRxb6W7a', 'WRhdG0OGkq', 'wmofpeFdRa', '4PAS4PsO4Ps84PEP4PsP', 'lmkOWPxdQa', '44khW53ILAZIL43ILR8', 'WOpcOGpcO8kb', 'W4HfdcWF', 'WQvlW6tdPf0', 'WOhcUSosWORdHq', 'wctdN8k+W5S', 'W45AgrGo', 'mrhcVSoLfW', 'W5f7aM4r', 'iSo/ECogW6C', 'hCkfyb7cQa', 'oSoKkCkIWPy', 'aCkaFfFcSG', 'lCkVW5hdQMG', 'W4nscXW', 'ft3cKG', 'W4D+WQuPzq', 'qSoREapcHa', 'jCkSWPy', 'WPZcSSon', 'WRlcT8odW5RdMG', 'WRdcRSobW7y', 'eCkkySkZWPG', 'W5yhcSk1WQG', 'WOVcPJvQW7S', 'WQ/cNCkznxi', 'WR9UW5zOla', 'W6fwW6hdH1K', 'WQtdTrPqW7O', 'W6/dMCoV', 'W70GW4hcHfy', 'W6dcLmkk', 'WRJdUCkvW5ddMG', 'WOhdMITD', 'jSkQW4y', 'WP0sW4mKWRC', 'EYRdV8kyW7e', 'W6XOW5xdThS', 'WOVdKauGdq', 'W5XLW6Lnoq', 'jqBdK3KC', 'WOaFW585WRm', 'zcNdVSkaW7y', 'W6ldPmkaW5W', 'FG4RWRO8', '8lUPIK7WN4U18j+7OSoI', 'WQ4BW5GPWRO', 'W6DJqCkHWO8', 'WRdcOmodW5m', 'W5ZcPSofsmks', 'W7RdOmkUW6ldIW', 'WOPUWO40Eq', 'umoBW4LBWOC', 'W6FdUCkkW4BdLG', 'cw/cOCoa', 'FIbxEmoq', 'yCoQW60xW5W', '8jwBRmklW6ddU3K', 'WPqGW75iCa', 'W6OFW6JdRfe', 'ucKOaCo5', 'WQlcNmk+W6RcTq', 'W4Tsb1a8', 'W4/dPmkDhCkc', 'rCk1rSoqWQe', 'W5OfvZfu', 'W4lcRJvjW7e', 'WQpcU8oNW6RcJG', 'n8oTASoiW5e', 'W70wW47cPg4', 'sCogFWNcRq', 'W4uAj8k1WR4', 'W6JcK8krkfi', 'WR7cOSoiW7FcOq', 'W51FdrGS', 'W65mW7BdOLS', 'W6vpW6JcO0W', 'tCkaoZ7cTa', 'qCoCCaRcPa', 'agiyWONcPW', 'W6WFWQ8nWRS', 'h8kUkmkPWOi', 'WR5AW4m9WRW', 'W7BdHSobWORdVq', 'ECo+DbdcVW', 'WP4mDSk6WOG', 'F8kEW5nHbq', 'W6mFc8kzWQW', 'W7qcW4ZcOgC', 'WRjlW7qRWPa', 'WOlcLSk/', 'W7GFetjf', 'gCoVk8k+WQa', 'WOOQW6vFpG', 'W48gdajE', 'iGRdKwur', 'W7aDfSkNWRq', 'W5JdK3RdTq8', 'g8kgAq', '8y+KPo+5P0vWWRO', 'W4uBgG97', 'W4VcNI3cImo4', 'kCk0WQJdQMm', 'W713W5tdQvO', 'W5mxgrSg', 'vXyVnG', 'W4VdPmoOWRhdTq', 'WOBcUCktWPrJ', 'W7jqW7dcO0S', 'hmkqBrpcUa', '8yAaQFgiOyNWN7gB8yArHVcuGyW', 'umkAW48FW5y', 'ySkVW4XzlW', 'hSkVWQddUfW', 'WRBdRCkbW5/dMG', 'W40BW7D7kG', 'WOOwhGur', 'W5yzW6ZcLuq', 'WOtcPCkkWQmv', 'W47cSdf1', 'W4ZcICo/rmoU', 'p2VcKG', 'b8kSy8kZWPG', 'W63dHSk3tSoX', 'rcNdKSoQW50', 'lCkoWOtdHNy', 'fCkveCojDa', 'W4y7W6jvlW', 'W4uqhCk0', 'W4TXW5HRoW', 'qCkeW4PsiG', 'W5ldImokW7/dVG', 'sYBdNSk4W58', 'WQ/cG8o+W7NdGG', 'b8kSy8kZWRa', 'WQelmvDk', 'W7LPhx4/', 'WOxcISkOxuC', 'W4NdKKddLb4', 'xXSP', 'WPjWW7m', 'W4BcKCkacNe', 'W6StWO3dUIW', 'r8oyyG', 'WR3cI8kFWOKo', 'WPdcL8k1chy', 'W6KVWOSiWQ8', 'WOKopfDC', 'W78AlqXj', 'wdddMmkI', 'WQlcVmobW7RcNW', 'W5rdgq0F', 'WPRdId1mW5S', 'WPRdMtPfW4W', 'WO/cT8odsCo/', 'gfvwWOFcSa', 'W4tcScK', 'WPrltanA', 'pmoxnSkRWOu', 'WRSCeCkLWRu', 'WRxcSSox', 'WQvcW4TOaG', 'W4ngW5/dI0W', 'xJPDyCoY', 'W4VcLdJcSmkS', 'xZO+WPGJ', 'dCo6fmk3WOi', 'v8ooW5WsW5u', 'gSovAWxcSW', 'Fd7dJmofW7W', 'hCk6lCk+WO4', 'W4pdN8kPW6BdIG', 'WQdcUCocW6FcJG', 'qmkxBrK', 'gvHP', 'WQaFkLDk', 'WQxcTCoDW7BdLG', '8y6jP8o6Dw7dHW', 'ngjbWQJcOa', 'tJpdUmkVW5C', 'aSo1sZdcQa', 'WOBcVmoEvmoE', 'W7/cLalcU8ov', 'WPu6W6LslW', 'EYJdT8orW70', 'WPWqW64mWRG', 'W6SKW5FcVfG', 'W6j1B8kzWOe', 'ybBdQSoeW7i', 'W5PHymkLWOi', 'WPtcJmkQhgG', 'WRXGW5jRlq', 'W69rc2C', 'WQfTW6ddSeG', 'W5ShWPLhpa', 'nCoBAW', 'W7ldNmk3W57dOa', 'W4ZdMSoYvW', 'vmkJtZBcJG', 'rZFdKG', 'WP1LW4bZoq', 'tZFdHmk/W44', 'gmkKW4XKkSoWW7S', 'W4umWRu', 'WOmnW710ka', 'WPNcOCoEtmov', 'W4tdHhC', 'WPNdMJ1oW50', 'WPBcQbxcO8kz', 'WRpdObWFoW', 'WQTfW5qOWP8', 'WP9EWQC3CW', 'aspcKG', 'W4vyhay', 'zCkBW7DBgW', 'W692W7WckG', 'W6atWPunWPO', 'WONcT8oiq8o3', 'W4xdMLVdGGu', 'W5JdGNZdUbe', 'WOaWdrLE', 'BSoJDqhcRW', 'W759c28x', 'oSkSWOJdR2e', 'lCk+WPxdQMK', 'WRSMeCkHWQW', 'WQBcOrSolq', 'qapdJmkYW6y', 'AZFdQCoxW5O', 'FSkBW65Ekq', 'W7K9hCkLWQO', 'WPe1eCkHWR8', 'W5makYn4', 'FXWfWOKU', 'WQS2W74DWPe', '4P6YW6ZdO8k2W6a', 'bmkOF8kJWPq', 'bZxcMCoJna', 'WOhcOmkoWPSK', 'WOiQW7HB', 'W67dJ8o4W7RdSq', 'sYRdJ8kV', 'W7RdL1W1pq', 'qCozB3m', 'fCoRba', 'W5tdMmkRW6FdOq', 'zqqnWRm9', 'CCokW4OAW48', 'WOdcHmkZcsy', 'b8k9F8k+WPm', 'W7ezifbC', 'WRFcPHhdT8k/', 'WQKFW58', 'rSoFW5XwW6m', 'WQpcMmkulvi', 'W4jfday', 'gG4+C8om', 'WQ7dOg44dq', 'WO/cP8opr8ox', 'tmopAdO', 'hCkNASo5W5m', 'WPLCWRq', 'Cpc1NzpdKCoolq', 'W4vKisWX', 'tSkFW5D/jG', 'o8kEW716WQW', 'zaiLWRWA', 'WO/cOSkXWQmt', 'W5hcSZtcLSo3', 'WOCxwf9l', 'xWi/kSky', 'WRVdGK4Gpa', 'W7VcTrBcIG', 'WPKvWOWMWRC', 'W50bW6xcNe0', 'W4JdHgVdTqW', 'W73cS1FcMCoK', 'W73dQCkC', 'tSkAFblcSG', 'W7nvD8kcWRW', 'h8kSDa', 'zmkdW5bhbq', 'W7bCfW', 'W6j0W5XagW', 'W6hdTgldHXu', 'W6BcMmkD', 'W4iqc8kKWPu', 'tmkiW4T/iG', 'iCkpW4jDWQ4', 'W57cGbpdRmkJ', 'mNbgWQRcRW', 'uCkksdZcSG', 'WOJdSYm7bW', 'WQLHWP8QAW', 'WPFcLbhdTCkK', 'W5Saeb9u', 'W43dJmoZbCk5', 'W6ZdUx3dMaW', 'qCo6gmkIWPm', 'W6/cJYb9W5W', 'sSkyW41RnG', 'W6dcNmku', 'W7FcRW4', 'AttdKmomW7G', 'W74HWR0XWQO', 'WQhcNfZdTa4', 'wIddISkPW4O', 'WRVdHuTHpq', 'wdFdHmkNW5e', 'WRBdMW8epq', 'WP3cPSoeqSoC', 'srXSWP8g', 'W5/cN+kCHa', 'W4tdMhRdSbW', 'WOdcNZ5CW5O', 'W5ddNmoVWPpdLG', 'tYZdJCkZ', 'v8oBW4KEW4G', 'WPBdSsLiW70', 'l8oIgCkdWOe', 'emkLWPxdRuW', 'W490W7bmhW', 'WOqUW6Htlq', 'W7xdRCkrW5FdLa', 'tCkhW59Jka', 'iCkJW4BdO2S', 'WPbCW4j3pq', 'WQdcQSo6pu4', 'xCkweSofDa', 'BcRdHmo7W7e', 'W4zJvmk2WPi', 'W7bCf3Oz', 'dSkIWPvOWOm', 'WQhcQq3dQSk4', 'WRxcQGq', 'ttZdMa', 'FIXhrSoe', 'o8oDDW', 'WR54W4mLkG', 'EcHxrSow', 'l8oyqtm', 'emkUfCk/WPu', 'u8kEbmkmEW', 'DYmvW6S', 'E8keWP5+kW', 'WRy9W6jokW', 'WRJcGCkQWRia', 'ArKOWPGb', 'WQBcL8o/ySoM', 'WOhcKmkIf8oVoSovW4ldRMG', 'W7xdHmkQefm', 'W4SygG', 'emkidG', 'wIRdMCoQW78', 'WQzSW5PXAq', 'BI7dHSoiW7y', 'WPxcVSoiFSog', 'WPbNW5WhWQ4', 'WRJdOCkaWP3cMa', 'qmkoW4PnWO0', 'W4nCWRiVEG', 'WR4kW4aJWQy', 'qcdcI8kOW5e', 'W5FcPSkYhhq', 'vJedbmov', 'W5iueCkJWRa', 'WPtdKZ8', 'dCkCFbBcSG', 'W7LAW6JdReO', 'WPaIW4jjdW', 'r8kat8oqkq', 'dSoinSkSWOq', 'WQBdS0Gnla', 'W5WAcmkLWRy', 'WRGiW4a', 'yc/cIW', 'aSoVAsVcQq', 'W7uXbSkdWO8', 'WQ46WRK', 'WOxdNIDDW4W', 'WOyEi3jn', 'gmkzba', 'W48lWRm4WPm', 'W41pvuS', 'WPlcTCkOeMa', 'r8ozW5SjW5O', '4PAy4PEF4PA24PAG44k8', 'W73cUr7cIG', 'cIKOWO8m', 'kSoTAmo8W4W', 'xd7dLSovW7a', 'sJFdHmoMW7C', 'W7/cLmkumv4', 'WPHiWRi', 'wY/dQCkHW4q', 'WO3cNSowW57dUG', 'WQtcPHxdT8kZ', 'WRivW61uhG', 'WQ3cOUkES2u', 'ESogzCo8W4q', 'WQ3cOCk8lNS', 'dSoPcSk3WPe', 'gSkqDam', 'qSk5W71Fbq', 'tXS/WOOo', 'WRjUW4z3ka', 'W5DNqCkWWOe', 'WO8HWQTqlW', 'weHTW4Pd', 'a8kDcCoyFW', 'W7FdOSkrW63dHG', 'W5FdGSk2', 'W7esW5VcOa', 'd3T7WRNcVW', 'BWVdO8kqW6W', 'W4Hdwbmc', 'WQhcVmkfW5dcKG', 'CZLYs8oW', 'umoFW50p', 'W5rpW6ZdRvS', 'W6RcKXhcUSo0', 'WRlcM8kal3y', 'b8kEzmkJWPu', 'W4LtvLff', 'WOqggH9F', 'h8kaBrNcQa', 'W4JcQJfT', 'WRddGKmkbW', 'm8ogFmkYW4C', 'W7uhWOpdVfm', 'AsvfrG', 'W5SIeGXC', 'W7WnWRi7WRS', 'wa0TWOGD', 'D25qWQBcQG', 'xa4iWR4/', 'W5n0wSkGWPy', 'WOD6bCkPW5i', 'aSkUnmoPvW', 'i8kLW45EWO4', 'WQdcVCkPpLa', 'zSo/W6KYW7u', 'imk5WPldU30', 'WQfrWPGyza', 'W6L4mJ4U', 'WPhcSCkuWP4M', 'W6HlW710hG', 'b8owlCkDWP4', 'W6fADq', 'W7FdQmkb', 'W4LHW41pdW', 'qWCI', 'W7tcJbfuW50', 'qJv+s8oW', 'W4jvc8kVWQO', 'W4lcGCkjWPmT', 'iXBdLwOA', 'i2jsW6VdTa', 'W7ecdCkPWQS', 'W4VdJmo2rSoS', 'W5/cUYb8', 'W6NcMmkxjG', 'WRtcQSoKBmoi', 'W5FcI8k7egm', 'm0bAWQ7cPa', 'WRm+W6bWlW', 'eSkfnc3cOW', 'WRrhWPxdOtj1WOVcPmkLW4pcVmoeWPldRG', 'WR/cOHG', 'WROgWRZcTaK', 'W71vawye', 'W5HJw8kYWPi', 'WPtcQmkpl1W', 'W5RcTZ9TW70', 'W7GyrCkUWRC', 'BdH9y8o7', 'W48hxW1d', 'jSknvG7cMW', 'smoFW4aCW48', 'WRqeiqnc', 'WQJcVCoytSoA', 'iGNdRx0+', 'W7XiaLe+', 'WOpdNJ9CW4W', 'gSoLW5zAWPy', 'W4hdQCkhWPldPa', 'W6pdOmkjW4VcKW', 'gmkuWOVdGKu', 'W5JcRLNcICo+', 'fmkvg8ov', 'W75SW7WcBW', 'WOVcLYnWW7y', 'xaKGWP4m', 'W77cRCoDW6pcMa', 'W48EWR9xWRK', 'WRT8W4Tuaa', 'Bt/dQSk8W5e', 'g3zcWO7cKq', 'WRtcTCkqWPmX', 'WPlcPSk4mh4', 'W71CnMiH', 'm2zgWQG', 'W4mvW7S1WPS', 'saCOWPi', 'W6NcMmkazum', 'WRfpW6G7WPW', 'WRbPW5XcpW', 'AINdG8ovW7y', 'iNbq', 'W7KGW5Tlja', 'WRZcI8kkc3C', 'W4RdJmo5qCov', 'W7hdMSoKWQNdTa', 'uSotW4OEW5q', 'tG0+WOOD', 'W77cMmkkixO', 'eSopwSo6W7y', 'W79lW6NdULe', 'zSkPWOpdVwC', 'W4NcLZ7cH8of', 'WR3dNLOToW', 'W51YW4/dHhq', 'W7tdVCoTAq7cMcFdSKfOW74qWPO', 'WRDKW59Xla', 'WQldTrSQlG', 'WQBcT8ozW47dJq', 'D2jBW6VcPW', 'WRr+W4bKlG', 'W6ldPCkkW5W', 'tG4OgCoF', 'WRBcR8k9oHC', 'xCopAc3dPG', 'cmoGeSk+WOq', 'WRddR8o4WQJdQG', 'W4ldN8ojWP7dRa', 'W4JcRJ9QW70', 'W5mwW4NcVxa', 'WQWoW4uLWRW', 'WPhdKcrhW4u', 'W6ZcICokmL8', '44ohwUkuPokxMokvGa', 'WQ8GW7Gyhq', 'aGddMCk4W5e', 'sCoyBZdcQa', 'W6DKWRL1iW', 'W7/cISoNWR/dTG', 'f8kzgCo4FW', 'W79wW6VdPe8', 'qmkFW5bwWPe', 'W6Pmax0t', 'oSoTW4FcQIq', 'W4JcH8kvWOGX', 'W4HAharC', 'WQWEW4mnWQq', 'aCkGW4BdPwe', 'WQddQHxdQSk7', 'W53dM1BdHcC', 'bCkSx8kGWO8', 'WR9AWO1RW7G', 'b8kAWQJdJLW', 'xCo/sY/cPq', 'dCk5W5DkWPi', 'xgxdISkUW5m', 'WQ9VWPKowa', 'tHORnSkf', 'W4JdL3RdTbG', 'lSomASoM', 'cY3dRx0y', 'wSk7AmkKWOK', '44ohwUkuPokxGUkvMG', 'gthcHW', 'W7dcVbNcMCoZ', 'WOToW4qZWPi', 'tZOTaCop', '4Pw/4PwT4Pws4PE14PAo', 'dCo6hmkOWPm', 'xmojW400W5a', 'W7JdPCkUW4JdVG', 'W5SqnmkOWR8', 'WR99W54', 'W6HGnJO5', 'oCoBD8oZW5u', 'BIHxuCof', 'W4RcOsr8W6O', 'WRJcT8ozW57dGq', 'yXhdPCopW7e', 'WQPkWPO1za', 'WQ3cRCkwlee', 'W6/cPYr8W7S', 'WQ8oW4OdWOy', 'W5bFlHy9', 'W75khwGr', 'WOddQqKfoq', 'WRP7W4rDiG', 'pSogCCoNW4W', 'amoCfmoFoG', 'W4xdMxK', 'WQddUWvkW7m', 'WQ7cGSkXk3u', 'W5ddNCop', 'xCkoW414lW', 'W5VdGSo5rSoF', 'Fd7dKmoxW7W', 'WQJdQaSa', 'W7zuySkYWPa', 'WRfpW6uWWPC', 'WPxcJCkQnwa', 'WRVcJCoGEmoM', 'WPNcOmomqCo3', 'W4DJw8kXWQS', '8kk7Vv3XI7MK8j+BI8os', 'WRJcOSokW57dMG', 'nmkThSo+FW', 'W5Kqeq9u', 'W7/dMCo5WRVdOG', 'W74uW7S6WPS', 'WPZdKtbfW5W', 'WRZdICkxW4ddNa', 'W7fVh0Oa', 'W4xcJmkln3q', 'WQtcRG/dPa', 'o8kOWOJdVY4', 'WQtcNLCKoG', 'b8omDcVcQW', 'g8khWQpdMfG', 'WRz/W5XWoq', 'WP/cS8oztSoA', 'WOHyWQm', 'WQhdGf0GoG', 'W7pdNmoRWRNdVa', 'WPXft1Sb', 'W5DUvmkH', 'BSkpW5OTiG', 'W7PLW6fw', 'jCk7W51rW4i', 'WOv6aCkPW5q', 'W4/dVuBdGZe', 'sCohFG', 'WQnhW6m', 'WOVdHxRdSa0', 'W4Lcfr0o', 'tXO4WPi', 'W5njfLW3', 'oCoSrSo2W6u', 'W4tcJ8khdvG', '44kAWQZcPSoaW5y', 'W7qAWRzVW4K', 'WOXlW6S6W5K', 'WP5lWRSYFG', '4Psi4Ps44Psy4Pwi4Psx', 'WRpcISopW7NcJq', 'W5NdKY7cSf4', 'WPtcGmk+ggi', 'fSkSF8o6WQu', 'eSkAW5T5WOC', 'W63dHSk3vSo9', 'WPxcSSk5jhi', 'q0n6CSky', 'WQ3cOc7dJ8k5', 'dCkhArBcQa', 'nrBdGh4r', 'W5vZuCk8WOK', 'zKxcJeio', 'W6ldRCkcW5pdLW', 'WRlcO8oaW77cIG', '4OET77Q/gwSDfq', 'WPOFW45QWOu', 'WPbJW5D3jG', 'sSkzW595la', 'WRfEW6CTWO0', 'W6JILAZdMSk1na', 'gSkuEbi', 'WQ9mWOqbwa', 'oCk+eColFq', 'W5TobMaf', 'W5KlWRC0WOO', 'eSo6omk4WRC', 'FCovW5TBW5O', 'W6VcVSkZmva', 'WRhcTai', 'mKxdJMOo', 'W7JdVmodASoh', 'AYbb', 'q0yIWPSe', 'W4ieW4ZcNue', 'BdtdJ8omW7G', 'oCoizSo3W4y', 'W5PRqSkLWOi', 'W7VcOmosW4FdHW', 'WOBcRZFdKSkc', 'W68Nfdn/', 'W7xdVrNcKCoI', 'gmoJemktWQi', 'BHa8WQKC', 'EGLExmoA', '4PAN4Psg4Pw14PE04PsP', 'i2znWR8', 'WPqUW6vCjq', 'W6X6W73dLNO', 'WRFdRSo7FH0', 'W5KSWRiPWPy', 'WQmrW5qlWOu', 'W6SIWPXXla', 'W7hcRZnCW4e', 'WRy3WPKL', 'WQScW4H2lW', 'tCkoW4X+yW', 'WRldTaCFoW', 'vSoFWO5AWPO', 'WO3cLSkkggm', 'WOZcM8o5W4ldIq', 'WPpcPSoi', 'WRTBax04', 'WRFcQ8o6mvG', 'qXG4WOig', 'W7/cMmkzhMu', 'WRr1W4DGjW', 'xsldRCoyW48', 'WPddJcPzW6O', 'WOxcGmk7hNi', '6P+t4BEtYO7HT7/iQq', 'W5LAW6JdReO', 'WPJdNIm', 'W6nsfbOF', 'W497W6BdGgS', 'WRdcOmk2nLK', 'W5BcKG3cR8oV', 'W5qgfSkHWR8', 'W6NdPCoHCmop', 'WRBcQ8k0o2m', 'W7tdNCofzbC', 'tSogW7XInW', 'WOBcKmk1cwm', 'W4PydHOp', 'W5RdISoIv8o5', 'WRVcTuhdRmkH', 'gLRdL8oPpG', 'vGOOmSkv', 'qSolW5bInW', 'W7Hwa2qx', 'W5ZdM8o2uCo3', 'j0xdHgqj', 'Bcriv8oz', 'WQqzia', 'WRKtW4iTW7i', 'kmoHo8kqWOO', '4PAh4PEt4PsW4PsZ44ks', 'WO4JW64pWOa', 'WORcSCkiWPuO', 'vSoSW4aYW5C', 'WOhcQ8okW77cVG', 'WP49c2z9', 'eCoNlmk3WOe', 'oCkaWRpdONy', 'otxcHmo0ma', 'raZdMmoLW5W', 'W7FdR8kCWPlcNG', 'WQ/dRG8', 'W65jqa', 'W5RdN8odASo/', 'WRDEW6nvWPe', 'WPhdIfGSpG', 'WPhcU8oasmog', 'l8owlmkEWRi', 'WRXOW51Xia', 'WOpcUCkF', 'ft7cKmoICq', 'W78bWO8LWPq', 'wsi1eSok', 'W7zWW7bqkG', 'W4ddGwJdQXK', 'yConAc/cIW', 'WRBcT8oeW5NdJG', 'eSoHgG', 'WOOwWR4WWPW', 'yXrXE8ob', 'W6PscWWk', 'sSovW5LBW5q', 'WPVdTdvbW6i', 'WPdcSCkkWPyI', 'm1buWR3cRq', 'amkDgSoj', 'WQVcOuBcGSkI', 'WOJcPSobvmoF', 'ycNdMW', 'D2fmW6VcQq', 'hmkUW4Hp', 'tSkAEXNcUq', 'W4PVW41xoa', 'WPpcVmobrmoC', 'WOvcW6LNcG', 'DNVcG8kaWRK', 'WQhdKhnkW4u', 'W7OGW7fdoa', 'jCkVWOpdUq', 'WOtcPHpdT8k/', 'W71LW7DgbG', 'W5vBcNGK', 'WPhHTBRHTytkTog3NW', 'AJ/dI8ov', 'WQS2W6ecWP4', 'Amo0W4mvW4m', 'iCk+W4BdON0', 'W6/cI8kOlvG', 'BdRdLSoeW74', 'jgzBWQ/cRq', 'WQv5W5iLWQG', 'WRhcUSkZmva', 'cmo9fCkEWOW', 'W5hdHSoytCoF', 'hmoehSk8WQ8', 'AtldJSoeW7C', 'WOKzvWWo', 'wWKwWOK8', 'cCk9WQxdIgm', 'WPhcJmk2ggG', 'W4D2wCk8WPi', 'oqhcK8onpq', 'qXJdLSopW5O', 'lSkKWORdRMa', '8y+6G8kMDCkQnq', 'WOFcHmkUcwm', '4BEAYzlHTPBHTQRiQa', 'WQmfnWnU', 'W5uWdmoIWOu', 'WPtcLmk8j24', 'W5/dHSo4uCo9', 'W7tdL0SUoW', 'WOhcVc7cSv8', 'W6eNW7hcUfe', 'fSoCcCoeFW', 'tmopAblcHq', 'W6/cI8kIpLO', 'WPtcHmkUgge', 'W5TLxSkWWPi', 'zJmfW7S', 'W71WW7vlpW', 'ASkEW5LbcW', 'W73dUgVdPJC', 'uCojW4S', 'W4ldTmoqWRmW', 'W4G8W65wlG', 'dmkIW5rAWOW', 'W59yhaDy', 'WQhdLJeZcG', 'k8kTfSoFyG', 'esldL8oHiW', 'FcbTq8oY', 'WOXUWPaREq', 'WQZcOSos', 'WPZcQCofW6FcMW', 'W55xW63dQLi', 'jJNcHmorga', 'WR5JW5zHaW', 'k8kSWPldRMK', 'wW4+', 'nM/cM8kzWQW', 'W6JcVapcISoZ', 'W4vZwSkHWOm', 'W4O5W7xcO3S', 'g8kNECk2WP4', 'WRpdGLy0pG', 'h8kecCocuW', 'qCo5W4W2W4m', 'WQFdPa4kkW', 'WQlcV8kmdM4', 'b8ktmCodBq', 'rmkVW51tWPe', 'qSkDWPtdPgG', 'WRFcOGZdPSk4', 'WP8BWPqZBW', 'WRZdMqC', 'rcLIq8oo', 'W60dW5FcPhe', 'mmkRxCkqWRy', 'WQKFW58P', 'j8kJWOpdR0q', 'dCopymo+W5y', 'W5NdKupdNIW', 'rmk7W5aqWOq', '4Bs14Bw/Y5TZYlG', '8lUQV/cMUBtWOlM+8lQzG8kT', 'oSkdrmkoWPe', 'W5xdVSkaW5pdHW', 'WPxcVSoixSkC', 'WPXDW5jQcW', 'hSkiBSknWR8', 'W4Pwff8g', 'W4ZcTCkEWP4', 'W67dMhRdTa0', 'W4SVfbjN', 'aCkuAdBcSG', 'W7zVdrO4', 'W5NcOZ59W7C', 'WOVdSaCzhq', 'u8kDxCobFW', 'WOhcKt9RW6O', 'W4ZcICo6umoR', 'W47dMhVdVbO', 'W60sWOpcMMC', 'W5qDW6hcKMG', 'WR4ekvOp', 'FGtcSSolAG', 'WRZcOCkxW4pdMW', 'W4NcRs3cQCo4', 'W6pdSMZdUZW', 'lSk+WQxdMeW', 'W73cPqm', 'W5P0WQuYyY/cIq', 'WPFdTmkxWO8W', 'cmoSDcZcQa', 'W70IW4tcPu4', 'W7HAW6VdP1K', 'W4WuWQL9WP8', 'WO3dIgSzcW', 'W5mLfSk3WPe', 'W5mqf8kZW7G', 'WQpcNSk9W6VcVa', 'eCk6eSo6Aa', 'WOHiWQq6Bq', 'tXm/mSom', 'W63dHmoVWQJcPq', 'W5ziW6bWgG', 'omoJWOJdRNO', 's8ocEI0', 'W5XpW7xdKf8', 'WOlcNZ5mW4q', 'kComCCo9W48', 'W6ddOSks', 'bCkLW4XEWOe', 'omofgmkVWRm', 'jcnCWRJdQa', 'WOFdMInfW4G', 'W60nWP0rWQ0', 'WRfpW7i7WPW', 'zw1qu8oq', 'bSksW6bxWQ4', 'W71MW6XojW', 'fxdcLCoOjq', 'W5mlWR5GWQG', 'WOVdM2VdVb0', 'W7m/gGX5', 'WRhdSGDCW7S', 'WQa0WRuXWPC', 'W4T4W5nqgG', 'W4FcMmkvcgm', 'sCkgW5nebG', 'WOhdHmkmgMu', 'W5JdK2ddTrO', 'WQtdPsWKjG', 'aCkzhmopBG', 'krddLISE', 'WPFdRYbEW6a', 'WRFcL8k8WP87', 'C8ocW6mSW7a', 'f8kuWP5XW7u', 'W6P6W5jSlq', 'W4G0mbL2', 'WPyUW79mlW', 'wqWRkSoN', 'W6fUWRq', 'WPvpW6r/WQ4', 'w8kdW5D+sq', 'W5uuha', 'WRdcT8ozWORdJG', 'W68xqcDC', 'gsVdS0y/', 'EZtdKmoyWQm', 'W7JdNSoSWPpdKq', 'WQflW7i6WP4', 'WQBdSWKhgW', 'WPqQW6PBpG', 'WOHVW6nDoa', 'WQfzW4b7eG', 'WPTlW6T4', 'WRlcRCozW7dcGW', 'm8oRe8kUWO4', 'W6bxW6JdT2y', 'sSkQW5XsWOS', 'W73cRGtcN8oX', 'tYJcJmowW7e', 'WOTeW4u3WPG', 'sJBdN8kIW44', 'w8opAcRcRW', 'kCoRh8o6WRa', 'EmkoW5WTfa', 'cSk+rcxcKG', 'WPi9m3b6', 'W6pdSW0ylG', 'W7rHi2Wg', 'WQHAW40UWR8', 'DtqvfSoQ', 'D1xcHNGy', 'bsxcMmoZna', 'WRddIJrLW6e', 'W5XfW5HHhW', 'W6Xyb21l', 'W6LtW6RdOfC', 'W6RcHqFcK8o+', 'W71PW7zm', 'DmonD8o+W4q', 'WQTgW6n/WQK', 'WQFcOG/dP8kZ', 'r8kjW5DlW4S', 'r8oBW5OEW5W', 'WQldSLJcN8oM', 'WRddKua', 'wrWTWPKD', 'W5HJd8o1', 'W77cJCkilem', 'W47dMgRcSqW', 'W4lcS8kiWPu2', 'yqldNmkpW7a', '4Ps54PE94PET4Pwi44ot', 'W6JcJSkxjfa', 'W4iScmkdWOa', '4BA64Bs5YitHTjjw', 'mdKFW6S', 'vgL7pCox', 'W6SGW6Pxka', 'ymkFW71ZW5K', 'lHhdKNSo', 'WODuWR41BW', 'W502pCkZWPO', 'WRdcOHldOa', 'WQFdP+kCTSoCW5W', 'sqy1n8o1', 'W7XLW7HbpW', 'wJFdKSoQWP8', 'W71RfCk7WOK', '8lw7NL9bAhq', 'WPddN04VBG', 'W5CUW4tcUxi', 'dSoPW4ejW4K', 'WQdcKfGLiW', 'u8kwcmocCq', 'w8kzW7vvoG', 'WO0jWOi9WRO', 'BZ5xu8oq', 'W7ZdH8oJqmoQ', 'WQnOW5jMpq', 'gSkUwmkNWPK', 'W5T+W73dUNy', 'W6STW511ja', 'v8oTW4CpW5m', 'WQiEjfDA', 'W7JdOSkkW4FdNq', 'W4KucW5w', 'jSkQWRpdU2O', 'WQBcOGddOmkI', 'hXpdVeWS', 'WPRcHJ7cTa', 'W6KOWQSRWOW', 'W7BcUfFdK8k2', 'W5ZdU8kmW4VdIq', 'xmoducRcNW', 'W6FdV8kmW4RdHW', 'bgdcR8ovzW', 'W49rW7S6WOW', 'bSoMfCkcWR8', 'sqK8WP8a', 'W4DhW49feG', 'W4qEbYPM', 'WRWpW4m+WRC', '4PU8WOOXhmk0', 'WPhcS8oeqW', 'a8kCyrlcQa', 'FGrkrmoE', 'W7vmWPH6W6i', 'wtyobSow', 'WOrwWRi', 'tGWWnSow', 'WO5pWRyeFW', 'W7RdISoQ', 'WQDoW5vXiq', 'tCoyEJxcGW', 'W4iIW5tcMw8', 'WQBdKrOeoa', 'W7JdJ8o4', 'W7JcJSkb', 'FYnjr8od', 'imkIWPpdUq', 'tCozAdJcOq', 'AYfnu8oe', 'WQBcQSocW7xcJq', 'W79UW7XKlq', 'W4Pwere', 'WR8FWOXRW7m', 'WRdcHSkcduS', 'W7/cRXJcI8oM', 'W5GEWRyYWOG', 'fSkldmo2EW', 'WPtcRCkpWOSA', 'WR4rW4KZWQe', 'tr7dPCoOW5C', 'WOCAwa', 'WPFcUmonW6BdPG', 'W4rMW6RdSLy', 'WRFcQ8k7pem', 'W6BdUCkwW5O', 'W4ddK3C', 'WQFdMvyVyq', 't0HHW4S', 'WOhcTCkoWP8K', 'lCkav8kbWPK', 'WOXwWRi', 'WOhcOCk8lKq', 'W7Psn08X', 'W6PCW7hdT10', 'WOFcTCoWW6BdJG', 'W6JdT17dHty', 'W7nEt8kcWQe', 'sCoBW4aF', 'wCkVeSoEAa', 'WPqMfCo1W4y', 'eSo3xCkOWOi', 'WQqwW4K', 'oCkvWOFdG1G', '8ys4UCkR8joBI/gaMPVWN5IL', 'W4RcSdu5W7y', 'AYmexCoa', 'WQhcOCoIW5RdJa', 'qCo9wqNcTW', 'uokuKtldKCot', 'rstdGSkK', 'WOG7W6uOWPq', 'eca3pmol', 'W4HHWQus', 'rmkJW5fBWOC', 'WRFcPCobW7BcHq', 'WRdcOmo6W4/dMW', 'nrxdIMij', 'pmkGW4LOWRC', 'W7/dNCofzb0', 'umojW7SlW58', 'W6BdLL1XEq', 'WQFdPbSi', 'WRRcQCou', 'W6GbWOeTWOW', 'yr5Dxmou', 'AcNdJCouW6K', 'a8kLWPHxWOC', 'W73dMmoLWQ/dTq', 'kComFmo2W6W', 'W5abfSkHWQG', 'WQ7cM8oev8o/', 'WO3cPSktWP8W', 's8kcW41SmW', 'p8kGqCk7WRW', 'jgzBWQ/cHq', 'mGZdIwu', 'WOruWOeYzq', 'W7xdRCklWPldGa', 'DSk/W5fgeq', 'W5ldUSoJrmoS', 'W4nOumkNW4y', 'WPlcLSkU', 'WQDzW7u+WP4', 'qCohCHBcJa', 'WPBcImk/', 'WRSfle1k', 'cghcI8k0lq', 'hCkqyHpcNG', 'j8kUW4TmWOm', '44kZWONILj/ILQ3ILja', 'Cd3dQmkcW4O', 'WRhdLbKJnW', 'WOVcUSoAWPiM', 'WOu4kurv'];
    _0x40f5 = function () {
      return _0xbd4596;
    };
    return _0x40f5();
  }
  function _0xa2d390(_0x672842, _0x32931b, _0x690102, _0x1cd6fd, _0x502111) {
    return _0x18a7(_0x672842 + 0x1a0, _0x32931b);
  }
  cmd(_0x3364dc, async (_0x5291d3, _0x5c4c0b, _0x349f61, {
    from: _0x47102f,
    l: _0x3f162c,
    quoted: _0xcc7326,
    body: _0x1b304a,
    isCmd: _0x3f75f6,
    command: _0x561e91,
    args: _0x2e9bf2,
    q: _0x26d9e6,
    isGroup: _0x35b2ba,
    isownbot: _0x27a201,
    sender: _0x326f95,
    senderNumber: _0x5a778a,
    botNumber2: _0xb164d6,
    botNumber: _0x24e912,
    pushname: _0x2a1eff,
    isMe: _0x20f709,
    isOwner: _0x4f177e,
    groupMetadata: _0x25e60f,
    groupName: _0x23dee5,
    participants: _0x1e8605,
    groupAdmins: _0x7d55b9,
    isBotAdmins: _0x2c6d55,
    isCreator: _0x40ee52,
    isDev: _0x345b56,
    isAdmins: _0x4e23db,
    reply: _0x5856d6
  }) => {
    if (!_0x4f177e) {
      return await _0x5856d6("*You must be a bots owner frist*");
    }
    if (!_0x5c4c0b.quoted.image) {
      return await _0x5856d6("*Reply to a photo*");
    }
    let _0x27048d = await _0x5c4c0b.quoted.download();
    await _0x5291d3.updateProfilePicture(_0xb164d6, _0x27048d);
    return await _0x5856d6("*Profile Picture Updated*");
  });
  const _0x4f26e3 = {
    pattern: "getsession",
    react: '🔖',
    desc: "To get bot session",
    category: "main",
    use: ".getsession",
    filename: __filename
  };
  cmd(_0x4f26e3, async (_0x2612a0, _0x4f6017, _0x33856a, {
    from: _0x2143cb,
    prefix: _0x41803a,
    l: _0x1b3a4a,
    quoted: _0x4128ab,
    body: _0x463a91,
    isCmd: _0x8b59b8,
    command: _0x1ea94f,
    args: _0x3c5c12,
    q: _0x3e67ac,
    isGroup: _0x4773bb,
    sender: _0x384b32,
    senderNumber: _0x3a7bb1,
    botNumber2: _0x34740a,
    botNumber: _0x164c34,
    pushname: _0x25bc1d,
    isMe: _0x462356,
    isOwner: _0x101b91,
    groupMetadata: _0x36b499,
    groupName: _0x44caef,
    participants: _0x15ccc8,
    groupAdmins: _0x35aeed,
    isBotAdmins: _0x777340,
    isAdmins: _0x114fa3,
    reply: _0x428399
  }) => {
    try {
      if (!_0x462356) {
        return await _0x428399("*You are not bot's owner or moderator !*");
      }
      _0x428399("Wait a moment, currently retrieving your session file");
      let _0x4716a3 = fs.readFileSync("./session/creds.json");
      const _0xce6e03 = {
        document: _0x4716a3,
        mimetype: "application/json",
        fileName: "creds.json"
      };
      _0x2612a0.sendMessage(_0x4f6017.chat, _0xce6e03, {
        'quoted': _0x4f6017
      });
      const _0x50413f = {
        text: '✅',
        key: _0x4f6017.key
      };
      const _0x400e69 = {
        react: _0x50413f
      };
      await _0x2612a0.sendMessage(_0x2143cb, _0x400e69);
    } catch (_0x1c2351) {
      _0x428399("*🛑 This is an owner command...*");
      _0x1b3a4a(_0x1c2351);
    }
  });
  const _0x193ba0 = {
    pattern: "delsession",
    react: '🔖',
    desc: "To delete bot session",
    category: "main",
    use: ".delsession",
    filename: __filename
  };
  cmd(_0x193ba0, async (_0x4c6501, _0x1815e5, _0x33211, {
    from: _0x4713da,
    prefix: _0xfb7df,
    l: _0x25da3b,
    quoted: _0x495c61,
    body: _0x3d3113,
    isCmd: _0x4325fd,
    command: _0x314017,
    args: _0x2ed861,
    q: _0x573c07,
    isGroup: _0x5be373,
    sender: _0x549909,
    senderNumber: _0x183a47,
    botNumber2: _0x33d5dd,
    botNumber: _0x29c92c,
    pushname: _0x33f8ed,
    isMe: _0x50cb65,
    isOwner: _0x274670,
    groupMetadata: _0x329843,
    groupName: _0x434356,
    participants: _0x4c1402,
    groupAdmins: _0x3e266e,
    isBotAdmins: _0x572ec6,
    isAdmins: _0x450765,
    reply: _0x1a82ef
  }) => {
    try {
      if (!_0x50cb65) {
        return await _0x1a82ef("*You are not bot's owner or moderator !*");
      }
      fs.readdir("./session", async function (_0x291fe8, _0x578c04) {
        if (_0x291fe8) {
          console.log("Unable to scan directory: " + _0x291fe8);
          return _0x1a82ef("Unable to scan directory: " + _0x291fe8);
        }
        let _0x5f4852 = await _0x578c04.filter(_0x22eb49 => _0x22eb49.startsWith("pre-key") || _0x22eb49.startsWith("sender-key") || _0x22eb49.startsWith("session-") || _0x22eb49.startsWith("app-state"));
        console.log(_0x5f4852.length);
        let _0x1c37cc = "Detected " + _0x5f4852.length + " junk files\n\n";
        if (_0x5f4852.length == 0) {
          return _0x1a82ef();
        }
        _0x5f4852.map(function (_0x5089dd, _0x426b10) {
          _0x1c37cc += _0x426b10 + 1 + (". " + _0x5089dd + "\n");
        });
        _0x1a82ef();
        await sleep(2000);
        _0x1a82ef("Deleting junk files...");
        await _0x5f4852.forEach(function (_0x323045) {
          fs.unlinkSync("./session/" + _0x323045);
        });
        await sleep(2000);
        _0x1a82ef("Successfully deleted all the trash in the session folder");
      });
      const _0x46f587 = {
        text: '✅',
        key: _0x1815e5.key
      };
      const _0x11f94b = {
        react: _0x46f587
      };
      await _0x4c6501.sendMessage(_0x4713da, _0x11f94b);
    } catch (_0x4fb6ca) {
      _0x1a82ef("*🛑 This is an owner command...*");
      _0x25da3b(_0x4fb6ca);
    }
  });
  const _0x13f3d1 = {
    pattern: "block",
    react: '🔖',
    desc: "To block a member",
    category: "main",
    use: ".block",
    filename: __filename
  };
  cmd(_0x13f3d1, async (_0x587845, _0x5c146c, _0x3d0208, {
    from: _0x5d71d1,
    prefix: _0x1d68f0,
    l: _0x56d61e,
    quoted: _0xf4f42b,
    body: _0x396432,
    isCmd: _0x40d896,
    command: _0x2d5e83,
    args: _0x31aaa5,
    q: _0x358fae,
    isGroup: _0x2b6c53,
    sender: _0x4eb832,
    senderNumber: _0x1372b6,
    botNumber2: _0x49f2a4,
    botNumber: _0x4480f4,
    pushname: _0x58b128,
    isMe: _0x150cab,
    isOwner: _0x5a8e33,
    groupMetadata: _0x5ec624,
    groupName: _0x11f080,
    participants: _0x13c03c,
    groupAdmins: _0x4ffcac,
    isBotAdmins: _0xd697b9,
    isAdmins: _0x27aa9f,
    reply: _0x253ea0
  }) => {
    try {
      if (!_0x150cab) {
        return await _0x253ea0("*You are not bot's owner or moderator !*");
      }
      let _0x10baaf = _0x5c146c.mentionedJid ? _0x5c146c.mentionedJid : _0x5c146c.quoted ? _0x5c146c.quoted.sender : _0x358fae.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x587845.updateBlockStatus(_0x10baaf, "block").then(_0x37ebf1 => _0x253ea0(jsonformat(_0x37ebf1)))["catch"](_0x5b34c4 => _0x253ea0(jsonformat(_0x5b34c4)));
      const _0xe65ad0 = {
        text: '✅',
        key: _0x5c146c.key
      };
      const _0x5bd778 = {
        react: _0xe65ad0
      };
      await _0x587845.sendMessage(_0x5d71d1, _0x5bd778);
    } catch (_0x455ea9) {
      _0x253ea0("*Error !!*");
      _0x56d61e(_0x455ea9);
    }
  });
  const _0x2cf4c5 = {
    pattern: "unblock",
    react: '🔖',
    desc: "To unblock a member",
    category: "main",
    use: ".unblock",
    filename: __filename
  };
  cmd(_0x2cf4c5, async (_0x5a337f, _0x496d95, _0x22ae3f, {
    from: _0x306ee2,
    prefix: _0x4a7aba,
    l: _0x4d605f,
    quoted: _0x8f45,
    body: _0x266e12,
    isCmd: _0x48ee56,
    command: _0x5f5095,
    args: _0x1d00c7,
    q: _0x5529df,
    isGroup: _0x45b91f,
    sender: _0x37f6aa,
    senderNumber: _0x5d0c84,
    botNumber2: _0x2cddc2,
    botNumber: _0x416af3,
    pushname: _0x2a4b73,
    isMe: _0x2978ba,
    isOwner: _0x1c42f7,
    groupMetadata: _0x184351,
    groupName: _0xdaa1c8,
    participants: _0x3ca926,
    groupAdmins: _0x382354,
    isBotAdmins: _0x451cec,
    isAdmins: _0x1b62df,
    reply: _0x4471d0
  }) => {
    try {
      if (!_0x2978ba) {
        return await _0x4471d0("*You are not bot's owner or moderator !*");
      }
      let _0x5b0d49 = _0x496d95.mentionedJid ? _0x496d95.mentionedJid : _0x496d95.quoted ? _0x496d95.quoted.sender : _0x5529df.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x5a337f.updateBlockStatus(_0x5b0d49, "unblock").then(_0x3f4785 => _0x4471d0(jsonformat(_0x3f4785)))["catch"](_0x5b416d => _0x4471d0(jsonformat(_0x5b416d)));
      const _0x3b611a = {
        text: '✅',
        key: _0x496d95.key
      };
      const _0x3b2ff4 = {
        react: _0x3b611a
      };
      await _0x5a337f.sendMessage(_0x306ee2, _0x3b2ff4);
    } catch (_0x55480b) {
      _0x4471d0("*🛑 This is an owner command...*");
      _0x4d605f(_0x55480b);
    }
  });
  const _0x16dcab = {
    pattern: "save",
    category: "download",
    react: '🎧',
    use: ".save",
    filename: __filename
  };
  cmd(_0x16dcab, async (_0x316bf7, _0x49ecc4, _0x2f5995, {
    from: _0x3c226b,
    q: _0x203167,
    reply: _0x3e41d2
  }) => {
    try {
      var _0x500b9c = _0x2f5995.key.remoteJid;
      const _0x34635d = _0x500b9c?.["endsWith"]("@g.us");
      var _0x1f3fd8 = _0x34635d ? ms.key.participant ? ms.key.participant : ms.participant : _0x500b9c;
      var _0xd6772b = _0x2f5995.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x1f3fd8 = _0x34635d ? _0x2f5995.key.participant ? _0x2f5995.key.participant : _0x2f5995.participant : _0x500b9c;
      if (_0xd6772b) {
        console.log(_0xd6772b);
        let _0x3e9219;
        if (_0xd6772b.imageMessage) {
          let _0x9ae93 = await _0x316bf7.downloadAndSaveMediaMessage(_0xd6772b.imageMessage);
          const _0x1fc73f = {
            url: _0x9ae93
          };
          const _0x2fadb9 = {
            image: _0x1fc73f,
            caption: _0xd6772b.imageMessage.caption
          };
          _0x3e9219 = _0x2fadb9;
        } else {
          if (_0xd6772b.videoMessage) {
            let _0x1366c9 = await _0x316bf7.downloadAndSaveMediaMessage(_0xd6772b.videoMessage);
            const _0x32d2b3 = {
              url: _0x1366c9
            };
            const _0x549d9a = {
              video: _0x32d2b3,
              caption: _0xd6772b.videoMessage.caption
            };
            _0x3e9219 = _0x549d9a;
          } else {
            if (_0xd6772b.audioMessage) {
              let _0x10928b = await _0x316bf7.downloadAndSaveMediaMessage(_0xd6772b.audioMessage);
              const _0xb4d595 = {
                url: _0x10928b
              };
              const _0x20955e = {
                audio: _0xb4d595,
                mimetype: "audio/mp4"
              };
              _0x3e9219 = _0x20955e;
            } else {
              if (_0xd6772b.stickerMessage) {
                let _0x1b9269 = await _0x316bf7.downloadAndSaveMediaMessage(_0xd6772b.stickerMessage);
                const _0x4dc39c = {
                  pack: "X-BYTE",
                  type: StickerTypes.CROPPED,
                  categories: ['🤩', '🎉'],
                  id: "12345",
                  quality: 0x46,
                  background: "transparent"
                };
                let _0xeba168 = new Sticker(_0x1b9269, _0x4dc39c);
                const _0x17e10e = await _0xeba168.toBuffer();
                const _0x2372b4 = {
                  sticker: _0x17e10e
                };
                _0x3e9219 = _0x2372b4;
              } else {
                const _0x2821a9 = {
                  q: _0xd6772b.conversation
                };
                _0x3e9219 = _0x2821a9;
              }
            }
          }
        }
        _0x316bf7.sendMessage(_0x1f3fd8, _0x3e9219);
      } else {
        _0x3e41d2("Mention the message that you want to save");
      }
    } catch (_0x1fca78) {
      console.log(_0x1fca78);
      _0x3e41d2("*Error !!*");
    }
  });
  const _0x410cb1 = {
    pattern: "ping",
    react: '📟',
    alias: ["speed", "cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: ".ping",
    filename: __filename
  };
  cmd(_0x410cb1, async (_0xd4bba3, _0x366731, _0x4a4266, {
    from: _0x27fbfc,
    l: _0x1b0911,
    quoted: _0x1632fb,
    body: _0x5994bd,
    isCmd: _0x3ad3c3,
    command: _0x13b164,
    args: _0x2516b7,
    q: _0x32926f,
    isGroup: _0x17d90b,
    sender: _0xa09b59,
    senderNumber: _0x314ad3,
    botNumber2: _0x4ac5d7,
    botNumber: _0x45b807,
    pushname: _0x5ceeef,
    isMe: _0x2b76a0,
    isOwner: _0x2b367f,
    groupMetadata: _0x44026c,
    groupName: _0x29546b,
    participants: _0x86600a,
    groupAdmins: _0x19276e,
    isBotAdmins: _0x121661,
    isAdmins: _0x1e315e,
    reply: _0x59773b
  }) => {
    try {
      var _0x54ab81 = new Date().getTime();
      const _0x5de572 = {
        text: "*_A moment..._* ❗"
      };
      let _0x11620f = await _0xd4bba3.sendMessage(_0x27fbfc, _0x5de572);
      var _0x1caaca = new Date().getTime();
      const _0x202528 = {
        text: "◍○○○○",
        edit: _0x11620f.key
      };
      await _0xd4bba3.sendMessage(_0x27fbfc, _0x202528);
      const _0x7c6dc3 = {
        text: "◍◍○○○",
        edit: _0x11620f.key
      };
      await _0xd4bba3.sendMessage(_0x27fbfc, _0x7c6dc3);
      const _0x323aa5 = {
        text: "◍◍◍○○",
        edit: _0x11620f.key
      };
      await _0xd4bba3.sendMessage(_0x27fbfc, _0x323aa5);
      const _0x5124c9 = {
        text: "◍◍◍◍○",
        edit: _0x11620f.key
      };
      await _0xd4bba3.sendMessage(_0x27fbfc, _0x5124c9);
      const _0x58817a = {
        text: "◍◍◍◍◍",
        edit: _0x11620f.key
      };
      await _0xd4bba3.sendMessage(_0x27fbfc, _0x58817a);
      return await _0xd4bba3.sendMessage(_0x27fbfc, {
        'text': "*X-BYTE ping is* " + (_0x1caaca - _0x54ab81) + " *MS* ",
        'edit': _0x11620f.key
      });
    } catch (_0x20044d) {
      _0x59773b("*Error !!*");
      _0x1b0911(_0x20044d);
    }
  });
  const _0x229942 = {
    pattern: "cmdfile",
    react: '🔖',
    desc: "To command file",
    category: "main",
    use: ".cmdfile",
    filename: __filename
  };
  cmd(_0x229942, async (_0x10e325, _0x1bdac6, _0x9490c8, {
    from: _0x3686fb,
    prefix: _0x5660dd,
    l: _0x4f615d,
    quoted: _0x21790d,
    body: _0x302846,
    isCmd: _0x59e831,
    command: _0x514b0e,
    args: _0x4cdfa3,
    q: _0x12d39e,
    isGroup: _0x431da5,
    sender: _0x1d3434,
    senderNumber: _0x1442ae,
    botNumber2: _0x8a43b4,
    botNumber: _0x5362c5,
    pushname: _0x6bb78d,
    isMe: _0x290e7c,
    isOwner: _0x362d98,
    groupMetadata: _0x500ae3,
    groupName: _0x4bebfa,
    participants: _0x1d6e12,
    groupAdmins: _0x190fdb,
    isBotAdmins: _0x238437,
    isAdmins: _0x9a3453,
    reply: _0x3fb298
  }) => {
    try {
      let _0x292cff = [];
      const _0x4580eb = commands.find(_0x38def9 => _0x38def9.pattern === _0x12d39e.split(" ")[0].toLowerCase());
      if (!_0x4580eb) {
        return await _0x3fb298("*❌No Such commands.*");
      } else {
        _0x292cff.push("*🍁Command:* " + _0x4580eb.pattern);
      }
      if (_0x4580eb.category) {
        _0x292cff.push("*🧩Type:* " + _0x4580eb.category);
      }
      if (_0x4580eb.filename) {
        _0x292cff.push("✨FileName: " + _0x4580eb.filename);
      }
      return _0x3fb298(_0x292cff.join("\n"));
      const _0x2bce4f = {
        text: '✅',
        key: _0x1bdac6.key
      };
      const _0x7d1725 = {
        react: _0x2bce4f
      };
      await _0x10e325.sendMessage(_0x3686fb, _0x7d1725);
    } catch (_0x12d099) {
      _0x3fb298("*Error !!*");
      _0x4f615d(_0x12d099);
    }
  });
  const Hamza_devvv = {
    pattern: "dev",
    react: '🔖',
    desc: "To get dev number",
    category: "main",
    use: ".dev",
    filename: __filename
  };
  cmd(Hamza_devvv, async (_0xe4c03f, _0x3f7937, _0x760574, {
    from: _0xc5c1e8,
    prefix: _0x2a1fc5,
    l: _0x340b8d,
    quoted: _0x3d262f,
    body: _0x564489,
    isCmd: _0x1b4753,
    command: _0x50369f,
    args: _0x3fb24c,
    q: _0x41c326,
    isGroup: _0x49984f,
    sender: _0x171c49,
    senderNumber: _0x1496b0,
    botNumber2: _0x3b50a2,
    botNumber: _0x16bf31,
    pushname: _0x5becaa,
    isMe: _0x21794e,
    isOwner: _0xe0e376,
    groupMetadata: _0x4fd1ea,
    groupName: _0x5494b0,
    participants: _0x10fc83,
    groupAdmins: _0x1abf9f,
    isBotAdmins: _0x3a9c9b,
    isAdmins: _0x2e2d68,
    reply: _0x4373e8
  }) => {
    try {
      const DevHamza = require("../settings");
      const _0x11ba4d = "BEGIN:VCARD\nVERSION:3.0\nFN:" + "Hamza" + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + owner[0] + ':+' + owner[0] + "\n" + "END:VCARD";
      const _0x31a38d = {
        vcard: _0x11ba4d
      };
      const _0x5dd78e = {
        displayName: "Hamza",
        contacts: [_0x31a38d]
      };
      let _0x1d4ce3 = {
        'contacts': _0x5dd78e,
        'contextInfo': {
          'externalAdReply': {
            'title': "Hamza",
            'body': "Touch here.",
            'renderLargerThumbnail': true,
            'thumbnailUrl': '',
            'thumbnail': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
            'mediaType': 0x2,
            'mediaUrl': '',
            'sourceUrl': "https://wa.me/+" + owner[0] + "?text=Hii Hamza, I'm " + _0x3f7937.pushName
          }
        }
      };
      let _0x175b42 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Bot Developer",
          'url': "",
          'merchant_url': "923072380380"
        })
      }, {
        'name': "address_message",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send address to bot developer",
          'url': DevHamza.BTNURL,
          'merchant_url': DevHamza.BTNURL
        })
      }, {
        'name': "cta_call",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Call to the developer",
          'url': "923072380380",
          'merchant_url': "923072380380"
        })
      }, {
        'name': "send_location",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send Location for developer",
          'url': DevHamza.BTNURL,
          'merchant_url': DevHamza.BTNURL
        })
      }];
      const _0xa5deca = {
        image: '',
        header: '',
        footer: DevHamza.FOOTER,
        body: "> You can contact the bot developer from this section"
      };
      return await _0xe4c03f.sendButtonMessage(_0xc5c1e8, _0x175b42, _0x760574, _0xa5deca);
      const _0x12bebf = {
        quoted: _0x3f7937
      };
      return await _0xe4c03f.sendMessage(_0xc5c1e8, _0x1d4ce3, _0x12bebf);
      const _0x2c4d1b = {
        text: '✅',
        key: _0x3f7937.key
      };
      const _0x7729cf = {
        react: _0x2c4d1b
      };
      await _0xe4c03f.sendMessage(_0xc5c1e8, _0x7729cf);
    } catch (_0x3096fe) {
      _0x4373e8("*Error !!*");
      _0x340b8d(_0x3096fe);
    }
  });
  const Hamza_Owner = {
    pattern: "owner",
    react: '🔖',
    desc: "To get owner number",
    category: "main",
    use: ".owner",
    filename: __filename
  };
  cmd(Hamza_Owner, async (_0xe4c03f, _0x3f7937, _0x760574, {
    from: _0xc5c1e8,
    prefix: _0x2a1fc5,
    l: _0x340b8d,
    quoted: _0x3d262f,
    body: _0x564489,
    isCmd: _0x1b4753,
    command: _0x50369f,
    args: _0x3fb24c,
    q: _0x41c326,
    isGroup: _0x49984f,
    sender: _0x171c49,
    senderNumber: _0x1496b0,
    botNumber2: _0x3b50a2,
    botNumber: _0x16bf31,
    pushname: _0x5becaa,
    isMe: _0x21794e,
    isOwner: _0xe0e376,
    groupMetadata: _0x4fd1ea,
    groupName: _0x5494b0,
    participants: _0x10fc83,
    groupAdmins: _0x1abf9f,
    isBotAdmins: _0x3a9c9b,
    isAdmins: _0x2e2d68,
    reply: _0x4373e8
  }) => {
    try {
      const _0x40fba4 = require("../settings");
      const _0x11ba4d = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x40fba4.OWNER_NAME + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + owner[0] + ':+' + owner[0] + "\n" + "END:VCARD";
      const _0x31a38d = {
        vcard: _0x11ba4d
      };
      const _0x5dd78e = {
        displayName: _0x40fba4.OWNER_NAME,
        contacts: [_0x31a38d]
      };
      let _0x1d4ce3 = {
        'contacts': _0x5dd78e,
        'contextInfo': {
          'externalAdReply': {
            'title': _0x40fba4.OWNER_NAME,
            'body': "Touch here.",
            'renderLargerThumbnail': true,
            'thumbnailUrl': '',
            'thumbnail': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
            'mediaType': 0x2,
            'mediaUrl': '',
            'sourceUrl': "https://wa.me/+" + owner[0] + "?text=Hii Hamza, I'm " + _0x3f7937.pushName
          }
        }
      };
      let _0x175b42 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Bot Owner",
          'url': _0x40fba4.OWNER_NUMBER,
          'merchant_url': _0x40fba4.OWNER_NUMBER
        })
      }, {
        'name': "address_message",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send address to bot owner",
          'url': _0x40fba4.BTNURL,
          'merchant_url': _0x40fba4.BTNURL
        })
      }, {
        'name': "cta_call",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Call to the owner",
          'url': _0x40fba4.OWNER_NUMBER,
          'merchant_url': _0x40fba4.OWNER_NUMBER
        })
      }, {
        'name': "send_location",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send Location for owner",
          'url': _0x40fba4.BTNURL,
          'merchant_url': _0x40fba4.BTNURL
        })
      }];
      const _0xa5deca = {
        image: '',
        header: '',
        footer: _0x40fba4.FOOTER,
        body: "> You can contact the bot owner from this section"
      };
      return await _0xe4c03f.sendButtonMessage(_0xc5c1e8, _0x175b42, _0x760574, _0xa5deca);
      const _0x12bebf = {
        quoted: _0x3f7937
      };
      return await _0xe4c03f.sendMessage(_0xc5c1e8, _0x1d4ce3, _0x12bebf);
      const _0x2c4d1b = {
        text: '✅',
        key: _0x3f7937.key
      };
      const _0x7729cf = {
        react: _0x2c4d1b
      };
      await _0xe4c03f.sendMessage(_0xc5c1e8, _0x7729cf);
    } catch (_0x3096fe) {
      _0x4373e8("*Error !!*");
      _0x340b8d(_0x3096fe);
    }
  });
  const _0x38bd97 = {
    pattern: "kickall",
    react: '🔖',
    desc: "To kick all members in one time",
    category: "group",
    use: ".kickall",
    filename: __filename
  };
  cmd(_0x38bd97, async (_0x70ee25, _0x16f690, _0x3aceab, {
    from: _0x4eac10,
    prefix: _0x2edc22,
    l: _0x38362e,
    quoted: _0x28b83c,
    body: _0x5d8d4c,
    isCmd: _0x2aeaf4,
    command: _0x4d59de,
    args: _0x13ac96,
    q: _0x29e2bd,
    isGroup: _0x53ab3f,
    sender: _0x4e2f0e,
    senderNumber: _0x123285,
    botNumber2: _0x23ea3a,
    botNumber: _0x63ceb9,
    pushname: _0x577e1f,
    isMe: _0x16c601,
    isOwner: _0x29bb2,
    groupMetadata: _0x6e2622,
    groupName: _0x131586,
    participants: _0x54dfcc,
    groupAdmins: _0x3bebbd,
    isBotAdmins: _0x3b9e02,
    isAdmins: _0x4ad492,
    reply: _0x4039f6
  }) => {
    try {
      if (!_0x53ab3f) {
        return _0x4039f6("*This is not a group !*");
      }
      if (!_0x4ad492) {
        return _0x4039f6("You are not an admin !");
      }
      for (let _0x3501f7 of _0x54dfcc) {
        await sleep(1000);
        if (_0x3501f7.id == _0x63ceb9 + "@s.whatsapp.net") {
          return;
        }
        if (_0x3501f7.id == owner + "@s.whatsapp.net") {
          return;
        }
        await _0x70ee25.groupParticipantsUpdate(_0x4eac10, [_0x3501f7.id], "remove");
        await _0x70ee25.sendText(_0x4eac10, '*' + _0x3501f7.id.split('@')[0] + " Kick out !!!*");
      }
      const _0x3ae46f = {
        text: '✅',
        key: _0x16f690.key
      };
      const _0x564690 = {
        react: _0x3ae46f
      };
      await _0x70ee25.sendMessage(_0x4eac10, _0x564690);
    } catch (_0x44c16a) {
      _0x4039f6("*Sorry !! Im not admin here*");
      _0x38362e(_0x44c16a);
    }
  });
  const _0x487cb5 = {
    pattern: "opentime",
    react: '🔖',
    desc: "To open group to a time",
    category: "group",
    use: ".opentime",
    filename: __filename
  };
  cmd(_0x487cb5, async (_0x3e1fdd, _0x1ae15c, _0x56b5c2, {
    from: _0x11b7eb,
    l: _0x516e37,
    quoted: _0x4c9a46,
    body: _0x49c978,
    isCmd: _0x4064a9,
    command: _0x252cc6,
    args: _0x288557,
    q: _0x2e4288,
    isGroup: _0x13c504,
    sender: _0x568d98,
    senderNumber: _0x111fe6,
    botNumber2: _0x2c02ba,
    botNumber: _0x2bd55d,
    pushname: _0xfa10ec,
    isMe: _0x54c21e,
    isOwner: _0x3567fd,
    groupMetadata: _0x5e973c,
    groupName: _0x1e6cab,
    participants: _0x569755,
    groupAdmins: _0x54af66,
    isBotAdmins: _0x1c610c,
    isAdmins: _0x4c0a27,
    reply: _0x33fe27
  }) => {
    try {
      if (!_0x13c504) {
        return _0x33fe27("*This is not a group !*");
      }
      if (!_0x4c0a27) {
        return _0x33fe27("You are not an admin !");
      }
      if (_0x288557[1] == "second") {
        var _0x1e645a = _0x288557[0] * "1000";
      } else {
        if (_0x288557[1] == "minute") {
          var _0x1e645a = _0x288557[0] * "60000";
        } else {
          if (_0x288557[1] == "hour") {
            var _0x1e645a = _0x288557[0] * "3600000";
          } else {
            if (_0x288557[1] == "day") {
              var _0x1e645a = _0x288557[0] * "86400000";
            } else {
              return _0x33fe27("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
            }
          }
        }
      }
      _0x33fe27("Open time " + _0x2e4288 + " starting from now");
      setTimeout(() => {
        _0x3e1fdd.groupSettingUpdate(_0x11b7eb, "not_announcement");
        _0x33fe27("*Open time* the group was opened by admin\n now members can send messages");
      }, _0x1e645a);
      const _0x42747c = {
        text: '✅',
        key: _0x1ae15c.key
      };
      const _0x453025 = {
        react: _0x42747c
      };
      await _0x3e1fdd.sendMessage(_0x11b7eb, _0x453025);
    } catch (_0x5c83de) {
      _0x33fe27("*Sorry !! Im not admin here !!*");
      _0x516e37(_0x5c83de);
    }
  });
  const _0xd3cd18 = {
    pattern: "closetime",
    react: '🔖',
    desc: "To close group to a time",
    category: "group",
    use: ".closstime",
    filename: __filename
  };
  cmd(_0xd3cd18, async (_0x3b4a03, _0xc49f7b, _0x385eed, {
    from: _0x1e78bf,
    l: _0x40938f,
    quoted: _0x4451ee,
    body: _0x388728,
    isCmd: _0x3b2445,
    command: _0x33d9f4,
    args: _0x7b5f1d,
    q: _0x4d9a01,
    isGroup: _0xac4008,
    sender: _0x52e1ff,
    senderNumber: _0x29ac00,
    botNumber2: _0x1e8cd1,
    botNumber: _0x5cd8a4,
    pushname: _0x73e5cb,
    isMe: _0x538c38,
    isOwner: _0x196a6c,
    groupMetadata: _0x1c066b,
    groupName: _0x13dfce,
    participants: _0x3dd65b,
    groupAdmins: _0x1255ea,
    isBotAdmins: _0x553b21,
    isAdmins: _0x2fb13a,
    reply: _0x207183
  }) => {
    try {
      if (!_0xac4008) {
        return _0x207183("*This is not a group !*");
      }
      if (!_0x2fb13a) {
        return _0x207183("You are not an admin !");
      }
      if (_0x7b5f1d[1] == "second") {
        var _0x1d60d3 = _0x7b5f1d[0] * "1000";
      } else {
        if (_0x7b5f1d[1] == "minute") {
          var _0x1d60d3 = _0x7b5f1d[0] * "60000";
        } else {
          if (_0x7b5f1d[1] == "hour") {
            var _0x1d60d3 = _0x7b5f1d[0] * "3600000";
          } else {
            if (_0x7b5f1d[1] == "day") {
              var _0x1d60d3 = _0x7b5f1d[0] * "86400000";
            } else {
              return _0x207183("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
            }
          }
        }
      }
      _0x207183("Close time " + _0x4d9a01 + " starting from now");
      setTimeout(() => {
        _0x3b4a03.groupSettingUpdate(_0x1e78bf, "announcement");
        _0x207183("*Close time* group closed by admin\nnow only admin can send messages");
      }, _0x1d60d3);
      const _0x4eef22 = {
        text: '✅',
        key: _0xc49f7b.key
      };
      const _0x5f50e0 = {
        react: _0x4eef22
      };
      await _0x3b4a03.sendMessage(_0x1e78bf, _0x5f50e0);
    } catch (_0x5db3f5) {
      _0x207183("*Sorry !! Im not admin here !!*");
      _0x40938f(_0x5db3f5);
    }
  });
  const _0x248fea = {
    pattern: "sendcontact",
    react: '🔖',
    desc: "To see group contacts",
    category: "group",
    use: ".sendcontact",
    filename: __filename
  };
  cmd(_0x248fea, async (_0x4be77d, _0x2d58b3, _0x85e56f, {
    from: _0x367b41,
    l: _0xd1cae2,
    quoted: _0x3f4306,
    body: _0x2b08eb,
    isCmd: _0x317f0b,
    command: _0x25b5af,
    args: _0x211ae1,
    q: _0x603d5f,
    isGroup: _0x2446db,
    sender: _0x4ef5fc,
    senderNumber: _0x3c5ae0,
    botNumber2: _0x3c2dac,
    botNumber: _0x119ba1,
    pushname: _0x49a3ab,
    isMe: _0x435158,
    isOwner: _0x169e8d,
    groupMetadata: _0x36c077,
    groupName: _0x2a2728,
    participants: _0x374791,
    groupAdmins: _0x748b0e,
    isBotAdmins: _0x472eb8,
    isAdmins: _0x28e8c3,
    reply: _0x308cf3
  }) => {
    try {
      if (!_0x2446db) {
        return _0x308cf3("*This is not a group !*");
      }
      if (!_0x28e8c3) {
        return _0x308cf3("You are not an admin !");
      }
      if (!_0x2d58b3.mentionedJid) {
        return _0x308cf3("\nUse like this\n Example:.sendcontact @tag|name");
      }
      let _0x195cc3 = _0x603d5f.split(" ")[1] ? _0x603d5f.split(" ")[1] : "Contact";
      let _0x11b0c1 = {
        'displayName': "Contact",
        'contacts': [{
          'displayName': _0x195cc3,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x195cc3 + ";;;\nFN:" + _0x195cc3 + "\nitem1.TEL;waid=" + _0x2d58b3.mentionedJid.split('@')[0] + ':' + _0x2d58b3.mentionedJid.split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        }]
      };
      const _0x34a75b = {
        contacts: _0x11b0c1
      };
      const _0x497d03 = {
        ephemeralExpiration: 0x15180
      };
      _0x4be77d.sendMessage(_0x2d58b3.chat, _0x34a75b, _0x497d03);
      const _0x370432 = {
        text: '✅',
        key: _0x2d58b3.key
      };
      const _0x5a1d69 = {
        react: _0x370432
      };
      await _0x4be77d.sendMessage(_0x367b41, _0x5a1d69);
    } catch (_0x26c3cc) {
      _0x308cf3("*Error !!*");
      _0xd1cae2(_0x26c3cc);
    }
  });
  const _0x31ec03 = {
    pattern: "savecontact",
    react: '🔖',
    desc: "To save group contacts",
    category: "group",
    use: ".savecontact",
    filename: __filename
  };
  cmd(_0x31ec03, async (_0x460dab, _0x78ecff, _0x1464c1, {
    from: _0x1e86e3,
    l: _0x4a934a,
    quoted: _0x2ef8f5,
    body: _0x59dd10,
    isCmd: _0x4597e0,
    command: _0x474fb2,
    args: _0x57b5a7,
    q: _0x5b99e9,
    isGroup: _0x179193,
    sender: _0x4d8de4,
    senderNumber: _0x504eff,
    botNumber2: _0x84b81,
    botNumber: _0x54c66c,
    pushname: _0xfa970f,
    isMe: _0x8a89a2,
    isOwner: _0xbe714a,
    groupMetadata: _0x56dab4,
    groupName: _0x395cc7,
    participants: _0x5d1262,
    groupAdmins: _0x52f817,
    isBotAdmins: _0x50527d,
    isAdmins: _0x56e1e3,
    reply: _0x1bb324
  }) => {
    try {
      if (!_0x179193) {
        return _0x1bb324("*This is not a group !*");
      }
      if (!_0x56e1e3) {
        return _0x1bb324("You are not an admin !");
      }
      let _0x57a240 = await _0x460dab.groupMetadata(_0x1464c1.chat);
      vcard = '';
      noPort = 0;
      for (let _0x2ed98c of _0x57a240.participants) {
        vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] +" + _0x2ed98c.id.split('@')[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x2ed98c.id.split('@')[0] + ':+' + _0x2ed98c.id.split('@')[0] + "\nEND:VCARD\n";
      }
      _0x1bb324("\nBe patient bro, saving... " + _0x57a240.participants.length + " contact");
      require('fs').writeFileSync("./contacts.vcf", vcard.trim());
      await sleep(2000);
      const _0x215294 = {
        ephemeralExpiration: 0x15180,
        quoted: _0x1464c1
      };
      _0x460dab.sendMessage(_0x78ecff.chat, {
        'document': require('fs').readFileSync("./contacts.vcf"),
        'mimetype': "text/vcard",
        'fileName': "Contact.vcf",
        'caption': "\nSucceed\nGroup: *" + _0x57a240.subject + "*\nContact: *" + _0x57a240.participants.length + '*'
      }, _0x215294);
      require('fs').unlinkSync("./contacts.vcf");
      const _0x5ae9d2 = {
        text: '✅',
        key: _0x78ecff.key
      };
      const _0x1ad84a = {
        react: _0x5ae9d2
      };
      await _0x460dab.sendMessage(_0x1e86e3, _0x1ad84a);
    } catch (_0x1330c3) {
      _0x1bb324("*Error !!*");
      _0x4a934a(_0x1330c3);
    }
  });
  const _0x298d1f = {
    pattern: "getcontact",
    react: '🔖',
    desc: "To get group contacts",
    category: "group",
    use: ".getcontact",
    filename: __filename
  };
  cmd(_0x298d1f, async (_0x264655, _0x3a5fd6, _0x476391, {
    from: _0x3d9005,
    l: _0x1732f7,
    quoted: _0x34d7ce,
    body: _0x290565,
    isCmd: _0x39f163,
    command: _0x1bb8c8,
    args: _0x5df1fe,
    q: _0xc3a628,
    isGroup: _0x1c0e04,
    sender: _0x1eb074,
    senderNumber: _0x56555b,
    botNumber2: _0x186359,
    botNumber: _0x499f92,
    pushname: _0x1418fc,
    isMe: _0x360bba,
    isOwner: _0x5d4f6c,
    groupMetadata: _0x4b3b5d,
    groupName: _0x3a958d,
    participants: _0x533944,
    groupAdmins: _0xdc2da7,
    isBotAdmins: _0x5a5789,
    isAdmins: _0x22fff9,
    reply: _0x9d4448
  }) => {
    try {
      if (!_0x1c0e04) {
        return _0x9d4448("*This is not a group !*");
      }
      if (!_0x22fff9) {
        return _0x9d4448("You are not an admin !");
      }
      if (!_0x3a5fd6.mentionedJid) {
        return _0x9d4448("\nUse like this\n Example:.contacttag @tag|name");
      }
      let _0x435b4a = _0xc3a628.split(" ")[1] ? _0xc3a628.split(" ")[1] : "Contact";
      let _0x58ef57 = {
        'displayName': "Contact",
        'contacts': [{
          'displayName': _0x435b4a,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x435b4a + ";;;\nFN:" + _0x435b4a + "\nitem1.TEL;waid=" + _0x476391.mentionedJid.split('@') + ':' + _0x3a5fd6.mentionedJid[0].split('@') + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        }]
      };
      const _0x3f01df = {
        ephemeralExpiration: 0x15180
      };
      _0x264655.sendMessage(_0x3a5fd6.chat, {
        'contacts': _0x58ef57,
        'mentions': _0x533944.map(_0x435d66 => _0x435d66.id)
      }, _0x3f01df);
      const _0x2339ff = {
        text: '✅',
        key: _0x3a5fd6.key
      };
      const _0x2b2409 = {
        react: _0x2339ff
      };
      await _0x264655.sendMessage(_0x3d9005, _0x2b2409);
    } catch (_0x43daf9) {
      _0x9d4448("*Error !!*");
      _0x1732f7(_0x43daf9);
    }
  });
  const _0x27c0e5 = {
    pattern: "contacttag",
    react: '🔖',
    desc: "To tag group contacts",
    category: "group",
    use: ".contacttag",
    filename: __filename
  };
  cmd(_0x27c0e5, async (_0xfc73ce, _0xef4852, _0x2ec07b, {
    from: _0x100118,
    l: _0x1cd21e,
    quoted: _0x48ba3d,
    body: _0x2669ac,
    isCmd: _0x50c67a,
    command: _0x3123a9,
    args: _0x1f7899,
    q: _0x47ed2a,
    isGroup: _0x213320,
    sender: _0x255103,
    senderNumber: _0x2131d5,
    botNumber2: _0x2cf835,
    botNumber: _0x34751f,
    pushname: _0x3abaea,
    isMe: _0x183a7f,
    isOwner: _0x736075,
    groupMetadata: _0x51fede,
    groupName: _0x3697b4,
    participants: _0x1d598e,
    groupAdmins: _0x3e8566,
    isBotAdmins: _0x2b8a5c,
    isAdmins: _0x571ebb,
    reply: _0x13a501
  }) => {
    try {
      if (!_0x213320) {
        return _0x13a501("*This is not a group !*");
      }
      if (!_0x571ebb) {
        return _0x13a501("You are not an admin !");
      }
      const _0x4259c6 = {
        text: "\nGroup: *" + _0x51fede.subject + "*\nMember: *" + _0x1d598e.length + '*'
      };
      izumibigpp = await _0xfc73ce.sendMessage(_0xef4852.chat, _0x4259c6, {
        'quoted': _0xef4852,
        'ephemeralExpiration': 0x15180
      });
      await sleep(1000);
      _0xfc73ce.sendContact(_0xef4852.chat, _0x1d598e.map(_0x318b95 => _0x318b95.id), izumibigpp);
      const _0xcc14b5 = {
        text: '✅',
        key: _0xef4852.key
      };
      const _0xa97d31 = {
        react: _0xcc14b5
      };
      await _0xfc73ce.sendMessage(_0x100118, _0xa97d31);
    } catch (_0x4c3434) {
      _0x13a501("*Error !!*");
      _0x1cd21e(_0x4c3434);
    }
  });
  const _0x327d11 = {
    pattern: "creatgc",
    react: '🔖',
    desc: "To create a group",
    category: "group",
    use: ".creatgc",
    filename: __filename
  };
  cmd(_0x327d11, async (_0x31da9e, _0x1589ce, _0x43416a, {
    from: _0x518a3c,
    prefix: _0x3e625e,
    l: _0x1279db,
    quoted: _0x2b4e95,
    body: _0x2554c1,
    isCmd: _0x4cfc6b,
    command: _0x3a0b45,
    args: _0xcaf7a4,
    q: _0x3881ed,
    isGroup: _0x3f5d1b,
    sender: _0x52dcf5,
    senderNumber: _0x146b77,
    botNumber2: _0x3b2cbc,
    botNumber: _0x140fd2,
    pushname: _0x4f815f,
    isMe: _0x235527,
    isOwner: _0x38c8ea,
    groupMetadata: _0x2e5836,
    groupName: _0x555b8d,
    participants: _0x578c57,
    groupAdmins: _0x51bad5,
    isBotAdmins: _0x2b458b,
    isAdmins: _0x16bb37,
    reply: _0x178a7e
  }) => {
    try {
      if (!_0x235527) {
        return await _0x178a7e("*You are not bot's owner or moderator !*");
      }
      if (!_0xcaf7a4.join(" ")) {
        return _0x178a7e("Use " + (_0x3e625e + _0x3a0b45) + " groupname");
      }
      let _0x541e7c = await _0x31da9e.groupCreate(_0xcaf7a4.join(" "), []);
      let _0x4ecdd5 = await _0x31da9e.groupInviteCode(_0x541e7c.id);
      const _0x261869 = "     「 Create Group 」\n\n▸ Name : " + _0x541e7c.subject + "\n▸ Owner : @" + _0x541e7c.owner.split('@')[0] + "\n▸ Creation : " + moment(_0x541e7c.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss") + "\n\nhttps://chat.whatsapp.com/" + _0x4ecdd5;
      const _0x22ecf1 = {
        quoted: _0x1589ce
      };
      _0x31da9e.sendMessage(_0x43416a.chat, {
        'text': _0x261869,
        'mentions': await _0x31da9e.parseMention(_0x261869)
      }, _0x22ecf1);
      const _0x4c7d21 = {
        text: '✅',
        key: _0x1589ce.key
      };
      const _0x4553ef = {
        react: _0x4c7d21
      };
      await _0x31da9e.sendMessage(_0x518a3c, _0x4553ef);
    } catch (_0x15f064) {
      _0x178a7e("*Error !!*");
      _0x1279db(_0x15f064);
    }
  });
  const _0x2d7c7c = {
    pattern: "hidetag",
    react: '🔖',
    desc: "It tag all members in group.",
    category: "group",
    use: ".hidetag <hi>",
    filename: __filename
  };
  cmd(_0x2d7c7c, async (_0x524dae, _0x240d5d, _0x4f4e79, {
    from: _0x33f101,
    l: _0x3fbd58,
    quoted: _0x345b0a,
    body: _0x273c0e,
    isCmd: _0x494140,
    command: _0x4e3e1e,
    args: _0x211894,
    q: _0xde57bc,
    isGroup: _0x42260c,
    sender: _0x2c3126,
    senderNumber: _0x192504,
    botNumber2: _0x1de071,
    botNumber: _0x5205af,
    pushname: _0xece0b4,
    isMe: _0x12372d,
    isOwner: _0x4bd837,
    groupMetadata: _0x15542d,
    groupName: _0x14024e,
    participants: _0x675f42,
    groupAdmins: _0x40d526,
    isBotAdmins: _0x16b3e7,
    isAdmins: _0x6ee277,
    reply: _0x353f90
  }) => {
    try {
      if (!_0x42260c) {
        return _0x353f90("*This is not a group !*");
      }
      if (!_0x6ee277) {
        return _0x353f90("You are not an admin !");
      }
      if (!_0xde57bc) {
        return await _0x353f90("*Give me text to tag !*");
      }
      _0x524dae.sendMessage(_0x33f101, {
        'text': _0xde57bc ? _0xde57bc : '',
        'mentions': _0x675f42.map(_0x2e9225 => _0x2e9225.id)
      });
      const _0x3f5916 = {
        text: '✅',
        key: _0x240d5d.key
      };
      const _0x193e69 = {
        react: _0x3f5916
      };
      await _0x524dae.sendMessage(_0x33f101, _0x193e69);
    } catch (_0x4262f8) {
      _0x353f90("*Sorry !! Im not admin here !!*");
      _0x3fbd58(_0x4262f8);
    }
  });
  const _0x3e64f1 = {
    pattern: "tagall",
    react: '🔖',
    desc: "It tag all members in group.",
    category: "group",
    use: ".hidetag <hi>",
    filename: __filename
  };
  cmd(_0x3e64f1, async (_0x30a640, _0x403582, _0x269561, {
    from: _0x178834,
    l: _0x54a9ca,
    quoted: _0x35397b,
    body: _0x11997b,
    isCmd: _0x36ea25,
    command: _0x178377,
    args: _0x5c2bb2,
    q: _0x4596be,
    isGroup: _0x315bd1,
    sender: _0x151c60,
    senderNumber: _0x2ad0b2,
    botNumber2: _0x578426,
    botNumber: _0x37436f,
    pushname: _0x958db,
    isMe: _0x42b133,
    isOwner: _0x2cc1b5,
    groupMetadata: _0x1e3a3e,
    groupName: _0xd549cd,
    participants: _0x57d7ed,
    groupAdmins: _0x54c3dc,
    isBotAdmins: _0x5bb6d8,
    isAdmins: _0x664a0,
    reply: _0x58e8b8
  }) => {
    try {
      if (!_0x315bd1) {
        return _0x58e8b8("*This is not a group !*");
      }
      if (!_0x5bb6d8) {
        return _0x58e8b8(botAdmin);
      }
      if (!_0x664a0) {
        return _0x58e8b8("You are not an admin !");
      }
      let _0x5c2572 = " *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : " + (_0x4596be ? _0x4596be : "blank") + "*\n\n";
      for (let _0x3834ec of _0x57d7ed) {
        _0x5c2572 += "🔵 @" + _0x3834ec.id.split('@')[0] + "\n";
      }
      _0x30a640.sendMessage(_0x269561.chat, {
        'text': _0x5c2572,
        'mentions': _0x57d7ed.map(_0x45a8ae => _0x45a8ae.id)
      });
      const _0x547b21 = {
        text: '✅',
        key: _0x403582.key
      };
      const _0x257937 = {
        react: _0x547b21
      };
      await _0x30a640.sendMessage(_0x178834, _0x257937);
    } catch (_0x28225f) {
      _0x58e8b8("Sorry !! Im not admin here");
      _0x54a9ca(_0x28225f);
    }
  });
  const _0x418bf1 = {
    pattern: "tagadmin",
    react: '🔖',
    desc: "It tag all members in group.",
    category: "group",
    use: ".tagadmin"
  };
  function _0xc443fa(_0x365aa6, _0x35fbcd, _0x3c0715, _0x1876bc, _0x51cb3f) {
    return _0x18a7(_0x365aa6 + 0x2d2, _0x1876bc);
  }
  _0x418bf1.filename = __filename;
  cmd(_0x418bf1, async (_0x2ccc2e, _0x38da29, _0x2b1bce, {
    from: _0x34864c,
    l: _0x304fa7,
    quoted: _0x3bc16f,
    body: _0x1de660,
    isCmd: _0x5c2d36,
    command: _0x1ad034,
    args: _0x16fd1d,
    q: _0x5e8c46,
    isGroup: _0x5cbf6e,
    sender: _0x32d045,
    senderNumber: _0x47c2e2,
    botNumber2: _0x23c6a8,
    botNumber: _0x27566d,
    pushname: _0x163215,
    isMe: _0x26de0d,
    isOwner: _0x1281e0,
    groupMetadata: _0x5b997b,
    groupName: _0x423fcc,
    participants: _0x4c5315,
    groupAdmins: _0x1d2542,
    isBotAdmins: _0x1dc808,
    isAdmins: _0x4fc24b,
    reply: _0x4ba7f2
  }) => {
    try {
      if (!_0x5cbf6e) {
        return _0x4ba7f2("*This is not a group !*");
      }
      let _0x46681b = " _❗ " + _0x423fcc + "Admins ❗_\n                  \n*MASSAGE :* " + (_0x5e8c46 ? _0x5e8c46 : "blank") + "\n\n";
      for (let _0x20ad3c of _0x1d2542) {
        _0x46681b += "    ";
      }
      _0x2ccc2e.sendMessage(_0x34864c, {
        'text': _0x46681b,
        'mentions': _0x1d2542.map(_0x3c6346 => _0x3c6346.id)
      });
      const _0x2c8f4a = {
        text: '✅',
        key: _0x38da29.key
      };
      const _0x13997b = {
        react: _0x2c8f4a
      };
      await _0x2ccc2e.sendMessage(_0x34864c, _0x13997b);
    } catch (_0x2d5e5a) {
      _0x4ba7f2("Sorry !! Im not admin here");
      _0x304fa7(_0x2d5e5a);
    }
  });
  const _0x382fed = {
    pattern: "mute",
    react: '🔖',
    desc: "close a group",
    category: "group",
    use: ".mute",
    filename: __filename
  };
  cmd(_0x382fed, async (_0x20a0d4, _0x332b85, _0x526e9b, {
    from: _0x29bea3,
    prefix: _0x3d4b1d,
    l: _0x3fe639,
    quoted: _0x4bc542,
    body: _0x4ba2bb,
    isCmd: _0x159832,
    command: _0x7f64cb,
    args: _0x2bfd9a,
    q: _0x161e5d,
    isGroup: _0x264374,
    sender: _0x2a198d,
    senderNumber: _0x55655b,
    botNumber2: _0x17d5b3,
    botNumber: _0x2b2fbb,
    pushname: _0x2bcb8d,
    isMe: _0x249faf,
    isOwner: _0x44c089,
    groupMetadata: _0x337244,
    groupName: _0x224a95,
    participants: _0x33ca4b,
    groupAdmins: _0x1d89b7,
    isBotAdmins: _0x3f2d44,
    isAdmins: _0x1b9143,
    reply: _0x3bb2ba
  }) => {
    const _0x527fe2 = {
      'vyuqY': function (_0x54fac0, _0x27be05) {
        return _0x54fac0(_0x27be05);
      },
      'gYayI': "announcement",
      'QXQDU': function (_0x3b1c9e, _0x53e86d) {
        return _0x3b1c9e(_0x53e86d);
      },
      'CTPUQ': "🛑 Group muted successfully",
      'PJqti': function (_0x1e94a6, _0x165907) {
        return _0x1e94a6(_0x165907);
      }
    };
    function _0xc90eff(_0x6f08d0, _0x535ceb, _0x1b6b26, _0x514bd8, _0x379cf3) {
      return _0x18a7(_0x535ceb + 0x155 + 0x14a, _0x6f08d0);
    }
    function _0x4e333b(_0x3ec6d1, _0x5e2984, _0x39d6a8, _0x5cd7dd, _0x24fe84) {
      return _0x18a7(_0x24fe84 - 0x2e6 + 0x14a, _0x3ec6d1);
    }
    function _0x5a27c0(_0x58ee5f, _0xb531f2, _0x3e5ef4, _0x445078, _0x4725f0) {
      return _0x18a7(_0x3e5ef4 - 0x39 + 0x1a0, _0x4725f0);
    }
    function _0x1189d1(_0x1be1e1, _0xc5e766, _0x3b5ec3, _0x1821d4, _0xc2c54a) {
      return _0x18a7(_0x1be1e1 - 0x509 + 0x1a0, _0x1821d4);
    }
    function _0x402508(_0x1da2a7, _0x15ab01, _0x44e21d, _0x396ff8, _0x2abf6e) {
      return _0x18a7(_0x2abf6e + 0x406 - 0x22f, _0x1da2a7);
    }
    try {
      if (!_0x264374) {
        return _0x3bb2ba("*This is not a group !*");
      }
      if (!_0x3f2d44) {
        return _0x3bb2ba(botAdmin);
      }
      if (!_0x1b9143) {
        return _0x3bb2ba("You are not an admin !");
      }
      await _0x20a0d4.groupSettingUpdate(_0x332b85.chat, "announcement");
      const _0x195cd5 = await _0x20a0d4.sendMessage(_0x332b85.chat.G_MUTE);
      const _0x48974b = {
        text: '✅',
        key: _0x332b85.key
      };
      const _0x5293fe = {
        react: _0x48974b
      };
      await _0x20a0d4.sendMessage(_0x29bea3, _0x5293fe);
    } catch (_0x32a73d) {
      _0x3bb2ba("🛑 Group muted successfully");
      _0x3fe639(_0x32a73d);
    }
  });
  const _0x3f7bff = {
    pattern: "unmute",
    react: '🔖',
    desc: "open a group",
    category: "group",
    use: ".unmute",
    filename: __filename
  };
  cmd(_0x3f7bff, async (_0x30156c, _0x4b7339, _0x3d020e, {
    from: _0x255690,
    prefix: _0x3a62d2,
    l: _0x3a6178,
    quoted: _0x534f2a,
    body: _0x2df67d,
    isCmd: _0x2dd64d,
    command: _0x26a5d4,
    args: _0x3f474e,
    q: _0x50373a,
    isGroup: _0x6abf76,
    sender: _0xa85707,
    senderNumber: _0x291f1a,
    botNumber2: _0x3e2512,
    botNumber: _0x2c2238,
    pushname: _0x19cc2f,
    isMe: _0x36c24b,
    isOwner: _0xb3c897,
    groupMetadata: _0x1b3e30,
    groupName: _0x95e627,
    participants: _0x1bc502,
    groupAdmins: _0x2bbf21,
    isBotAdmins: _0x34b740,
    isAdmins: _0x493815,
    reply: _0x5549a5
  }) => {
    function _0x5dee01(_0x826310, _0x2a6aa9, _0x245fb9, _0x52a6b2, _0x3f0f71) {
      return _0x18a7(_0x3f0f71 + 0x39e - 0x2b5, _0x245fb9);
    }
    function _0x2f1b71(_0x4a8e6e, _0x3d31bc, _0x1d99b2, _0x56d5bc, _0x4480dc) {
      return _0x18a7(_0x3d31bc + 0x5b - 0x22f, _0x1d99b2);
    }
    function _0x5b75ee(_0x578242, _0x361bbe, _0x3df9d1, _0x10eed3, _0x479b95) {
      return _0x18a7(_0x3df9d1 + 0x299 - 0x22f, _0x479b95);
    }
    function _0x493494(_0x3cd662, _0x4d7171, _0x44a184, _0x106b43, _0x4b1ccf) {
      return _0x18a7(_0x3cd662 - 0x52f + 0x1a0, _0x4b1ccf);
    }
    const _0x1087e9 = {
      'HDbjC': function (_0x142d44, _0x300007) {
        return _0x142d44(_0x300007);
      },
      'rmdRe': "not_announcement",
      'eFUbC': function (_0x205610, _0x22a187) {
        return _0x205610(_0x22a187);
      },
      'BEuuN': "🛑 Group opend successfully"
    };
    function _0x426047(_0x3b3e15, _0x3fee28, _0xe684c7, _0x18dea1, _0x3ce7c2) {
      return _0x18a7(_0x3b3e15 + 0x131 - 0x22f, _0x3fee28);
    }
    try {
      if (!_0x6abf76) {
        return _0x5549a5("*This is not a group !*");
      }
      if (!_0x34b740) {
        return _0x5549a5(botAdmin);
      }
      if (!_0x493815) {
        return _0x5549a5("You are not an admin !");
      }
      await _0x30156c.groupSettingUpdate(_0x4b7339.chat, "not_announcement");
      const _0x1693a4 = await _0x30156c.sendMessage(_0x4b7339.chat.G_UNMUTE);
      const _0x438eb7 = {
        text: '✅',
        key: _0x4b7339.key
      };
      const _0x15a456 = {
        react: _0x438eb7
      };
      await _0x30156c.sendMessage(_0x255690, _0x15a456);
    } catch (_0x31f7ac) {
      _0x5549a5("🛑 Group opend successfully");
      _0x3a6178(_0x31f7ac);
    }
  });
  const _0x58b6d7 = {
    pattern: "kick",
    react: '🔖',
    desc: "kick a member",
    category: "group",
    use: ".kick",
    filename: __filename
  };
  cmd(_0x58b6d7, async (_0x6f1bdd, _0x1e0058, _0x5b4da0, {
    from: _0x40f893,
    prefix: _0x45916f,
    l: _0xbb30bc,
    quoted: _0x15d323,
    body: _0x410a35,
    isCmd: _0x1578a1,
    command: _0x4f51e5,
    args: _0x49fe00,
    q: _0x2d054c,
    isGroup: _0x5cc41d,
    sender: _0x1cf928,
    senderNumber: _0x3e55ba,
    botNumber2: _0x501ec6,
    botNumber: _0x3bb334,
    pushname: _0x1d7a56,
    isMe: _0x5e272c,
    isOwner: _0x3a29f6,
    groupMetadata: _0x3c7daf,
    groupName: _0x1d8420,
    participants: _0x7b98e7,
    groupAdmins: _0x453242,
    isBotAdmins: _0x41badf,
    isAdmins: _0x104ac5,
    reply: _0x32415b
  }) => {
    function _0x453bd6(_0x38c7a9, _0x25a7a8, _0x2c00f9, _0x4e79ea, _0x2c92d9) {
      return _0x18a7(_0x25a7a8 + 0x50 + 0x14a, _0x2c92d9);
    }
    const _0x33ca08 = {
      'pAfeG': function (_0x39057d, _0x128554) {
        return _0x39057d(_0x128554);
      },
      'BRWgv': function (_0x2913c2, _0x516289) {
        return _0x2913c2(_0x516289);
      },
      'QCSvi': function (_0x6af622, _0x55eee9) {
        return _0x6af622(_0x55eee9);
      },
      'vUeMW': function (_0x356723, _0x3c97b8) {
        return _0x356723 + _0x3c97b8;
      },
      'Tgtqm': "@s.whatsapp.net",
      'QVekR': "remove",
      'GjIsG': "*Sorry !! Im not admin here !!*",
      'QVbgi': function (_0x12fe17, _0xeb98c2) {
        return _0x12fe17(_0xeb98c2);
      }
    };
    function _0x14cb1d(_0x484302, _0x41a02d, _0x3e0de3, _0x53d13e, _0x1c3f99) {
      return _0x18a7(_0x41a02d - 0x42 + 0x2d2, _0x484302);
    }
    function _0x382f3c(_0x33ecb2, _0x3be000, _0x56c341, _0x1347e4, _0x4a8223) {
      return _0x18a7(_0x33ecb2 + 0x596 - 0x22f, _0x1347e4);
    }
    function _0x41acb8(_0x40b45c, _0xe95a4f, _0x477044, _0x3aab95, _0x575085) {
      return _0x18a7(_0xe95a4f - 0x290 + 0x2d2, _0x3aab95);
    }
    function _0x5e6f92(_0x15cc24, _0x541178, _0x2d5a05, _0x40737f, _0x1b84d6) {
      return _0x18a7(_0x2d5a05 + 0x345 - 0x2b5, _0x541178);
    }
    try {
      if (!_0x5cc41d) {
        return _0x32415b("*This is not a group !*");
      }
      if (!_0x41badf) {
        return _0x32415b(botAdmin);
      }
      if (!_0x104ac5) {
        return _0x32415b("You are not an admin !");
      }
      let _0x4e786a = _0x1e0058.mentionedJid ? _0x1e0058.mentionedJid : _0x1e0058.quoted ? _0x1e0058.quoted.sender : _0x2d054c.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x6f1bdd.groupParticipantsUpdate(_0x1e0058.chat, [_0x4e786a], "remove").then(_0x3a6290 => _0x32415b(jsonformat(_0x3a6290)))["catch"](_0x15ffb4 => _0x32415b(jsonformat(_0x15ffb4)));
      const _0xc99a00 = {
        text: '✅',
        key: _0x1e0058.key
      };
      const _0x40b64c = {
        react: _0xc99a00
      };
      await _0x6f1bdd.sendMessage(_0x40f893, _0x40b64c);
    } catch (_0x5058d9) {
      _0x32415b("*Sorry !! Im not admin here !!*");
      _0xbb30bc(_0x5058d9);
    }
  });
  const _0x208d95 = {
    pattern: "add",
    react: '🔖',
    desc: "Add a member",
    category: "group",
    use: ".add",
    filename: __filename
  };
  cmd(_0x208d95, async (_0x1a1ef2, _0x453a9b, _0x4a52ad, {
    from: _0x5ade38,
    prefix: _0x4aed00,
    l: _0x1723e0,
    quoted: _0x2ed527,
    body: _0xcc1d0,
    isCmd: _0x143656,
    command: _0x6f882d,
    args: _0x5951e5,
    q: _0x431d99,
    isGroup: _0x3d5aad,
    sender: _0x54fa1c,
    senderNumber: _0x58bf43,
    botNumber2: _0x415da1,
    botNumber: _0x12126c,
    pushname: _0x30dd17,
    isMe: _0x145527,
    isOwner: _0x402668,
    groupMetadata: _0x1a9b96,
    groupName: _0x2a28b9,
    participants: _0x344cfb,
    groupAdmins: _0x5e24b1,
    isBotAdmins: _0xb44940,
    isAdmins: _0xa21a0c,
    reply: _0x5a0c20
  }) => {
    const _0x33bcb7 = {
      'ckUZo': function (_0x21f11a, _0x4e3e01) {
        return _0x21f11a(_0x4e3e01);
      },
      'GbZjs': function (_0x15aa5f, _0x444a86) {
        return _0x15aa5f + _0x444a86;
      },
      'lFoHb': "@s.whatsapp.net",
      'nDFuH': "add",
      'uZgoc': function (_0x2f0362, _0x650d52) {
        return _0x2f0362(_0x650d52);
      },
      'cvTOg': "*Sorry !! Im not admin here !!*"
    };
    function _0x44c543(_0x76fd1, _0x430c79, _0x386379, _0x361117, _0x30032e) {
      return _0x18a7(_0x386379 - 0x1ee + 0x14a, _0x361117);
    }
    function _0x2f77db(_0x56fd09, _0x4dba46, _0x4354a2, _0x2b4c0a, _0x5d1755) {
      return _0x18a7(_0x4dba46 - 0x358 + 0x1a0, _0x4354a2);
    }
    function _0x21c383(_0x113e67, _0x7741b0, _0x6542dd, _0x4b4a9e, _0x24462a) {
      return _0x18a7(_0x7741b0 - 0x8 - 0x22f, _0x24462a);
    }
    function _0x3b4e6a(_0x479553, _0x4b616d, _0x491847, _0x5dac2b, _0x2459b4) {
      return _0x18a7(_0x491847 - 0x11 + 0x14a, _0x5dac2b);
    }
    function _0x22f446(_0x2ca990, _0x3fa63f, _0x3bc15a, _0x3f7944, _0x34e714) {
      return _0x18a7(_0x34e714 - 0x1d + 0x14a, _0x3fa63f);
    }
    try {
      if (!_0xb44940) {
        return _0x5a0c20(botAdmin);
      }
      let _0x95d97c = _0x453a9b.quoted ? _0x453a9b.quoted.sender : _0x431d99.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x1a1ef2.groupParticipantsUpdate(_0x453a9b.chat, [_0x95d97c], "add").then(_0x62fb7b => _0x5a0c20(jsonformat(_0x62fb7b)))["catch"](_0x38afa1 => _0x5a0c20(jsonformat(_0x38afa1)));
      const _0x2b1783 = {
        text: '✅',
        key: _0x453a9b.key
      };
      const _0x43a1f7 = {
        react: _0x2b1783
      };
      await _0x1a1ef2.sendMessage(_0x5ade38, _0x43a1f7);
    } catch (_0x2e6212) {
      _0x5a0c20("*Sorry !! Im not admin here !!*");
      _0x1723e0(_0x2e6212);
    }
  });
  const _0x30cf20 = {
    pattern: "promote",
    react: '🔖',
    desc: "promote admin to a member",
    category: "group",
    use: ".promote",
    filename: __filename
  };
  cmd(_0x30cf20, async (_0x266111, _0x4a88a3, _0x286599, {
    from: _0x88e07f,
    prefix: _0x2a1cbb,
    l: _0x27c07d,
    quoted: _0x235062,
    body: _0x11078c,
    isCmd: _0x4d0980,
    command: _0x5e70f1,
    args: _0x479656,
    q: _0x49a29c,
    isGroup: _0x5589b5,
    sender: _0x1235b8,
    senderNumber: _0x10e7a3,
    botNumber2: _0x1f3b21,
    botNumber: _0x3fa8dd,
    pushname: _0x59a3e1,
    isMe: _0x40ce32,
    isOwner: _0x5d9aa1,
    groupMetadata: _0x163cd5,
    groupName: _0xd86840,
    participants: _0x4b977c,
    groupAdmins: _0x17804d,
    isBotAdmins: _0xd66dfc,
    isAdmins: _0x5e66fe,
    reply: _0x31aa0d
  }) => {
    const _0x5d59b9 = {
      'QaVSj': function (_0x31f8c5, _0x1864b3) {
        return _0x31f8c5(_0x1864b3);
      },
      'ZmcEY': function (_0x1822b6, _0x585cf0) {
        return _0x1822b6(_0x585cf0);
      },
      'Lmcdi': function (_0x281003, _0xc10d0b) {
        return _0x281003(_0xc10d0b);
      },
      'RhVQT': function (_0x3ee61e, _0x2bf24a) {
        return _0x3ee61e + _0x2bf24a;
      },
      'BzZpr': "@s.whatsapp.net",
      'iJvpy': "promote",
      'rivIt': function (_0x32b827, _0x1ada55) {
        return _0x32b827(_0x1ada55);
      },
      'HuHyL': "🛑 You were promoted as admin",
      'jVqCv': "*Sorry !! Im not admin here !!*",
      'zXxzA': function (_0x497d1b, _0x477458) {
        return _0x497d1b(_0x477458);
      }
    };
    function _0x437b11(_0x2d4f92, _0x1ab606, _0x4029c1, _0x9a5f39, _0x362ff5) {
      return _0x18a7(_0x9a5f39 - 0x8a - 0x2b5, _0x1ab606);
    }
    function _0x5364d4(_0x47f8ad, _0x40290e, _0x286d7f, _0x3a66fd, _0xfdb829) {
      return _0x18a7(_0x40290e + 0xce + 0x2d2, _0x286d7f);
    }
    function _0x37d321(_0xde1407, _0x110720, _0x1f3941, _0x3a9517, _0x2caaba) {
      return _0x18a7(_0x2caaba + 0x19d + 0x1a0, _0x3a9517);
    }
    function _0x670e41(_0x11d37f, _0x5d026a, _0x5c1586, _0x20eb8d, _0x9ca300) {
      return _0x18a7(_0x20eb8d - 0xe5 - 0x22f, _0x11d37f);
    }
    function _0x373607(_0x5b7871, _0x52240c, _0x316a54, _0x26b680, _0x344d91) {
      return _0x18a7(_0x5b7871 - 0x4af + 0x2d2, _0x316a54);
    }
    try {
      if (!_0x5589b5) {
        return _0x31aa0d("*This is not a group !*");
      }
      if (!_0xd66dfc) {
        return _0x31aa0d(botAdmin);
      }
      if (!_0x5e66fe) {
        return _0x31aa0d("You are not an admin !");
      }
      let _0x53630f = _0x4a88a3.mentionedJid ? _0x4a88a3.mentionedJid : _0x4a88a3.quoted ? _0x4a88a3.quoted.sender : _0x49a29c.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x266111.groupParticipantsUpdate(_0x4a88a3.chat, [_0x53630f], "promote").then(_0x3bebf3 => _0x31aa0d(jsonformat(_0x3bebf3)))["catch"](_0x525724 => _0x31aa0d(jsonformat(_0x525724)));
      _0x31aa0d("🛑 You were promoted as admin");
      const _0x2b9ece = {
        text: '✅',
        key: _0x4a88a3.key
      };
      const _0x2864b7 = {
        react: _0x2b9ece
      };
      await _0x266111.sendMessage(_0x88e07f, _0x2864b7);
    } catch (_0x4d2320) {
      _0x31aa0d("*Sorry !! Im not admin here !!*");
      _0x27c07d(_0x4d2320);
    }
  });
  const _0x32b204 = {
    pattern: "demote",
    react: '🔖',
    desc: "demote admin to a member",
    category: "group",
    use: ".demote",
    filename: __filename
  };
  cmd(_0x32b204, async (_0x248f95, _0x4c5bb5, _0x133f39, {
    from: _0x4e171e,
    prefix: _0x1f4bb7,
    l: _0x356fb3,
    quoted: _0x54726a,
    body: _0x1a3df0,
    isCmd: _0x237bd0,
    command: _0x2fa19c,
    args: _0x588678,
    q: _0x49fad5,
    isGroup: _0x2133d3,
    sender: _0x457fcd,
    senderNumber: _0x4b8f10,
    botNumber2: _0x1d854f,
    botNumber: _0xfe4880,
    pushname: _0x2dc368,
    isMe: _0xa4d322,
    isOwner: _0x2c0213,
    groupMetadata: _0x492010,
    groupName: _0x5e1030,
    participants: _0x442c99,
    groupAdmins: _0x5641cc,
    isBotAdmins: _0x20a5da,
    isAdmins: _0x170ae7,
    reply: _0x339766
  }) => {
    function _0x16ebc5(_0x1df152, _0xba8c6f, _0x3227a7, _0x40a342, _0x308d07) {
      return _0x18a7(_0x308d07 - 0x327 + 0x14a, _0x40a342);
    }
    const _0x577faa = {
      'yLZKl': function (_0x257395, _0x31aabb) {
        return _0x257395(_0x31aabb);
      },
      'RjQag': function (_0x390c4b, _0x2d832d) {
        return _0x390c4b(_0x2d832d);
      },
      'TWGzU': function (_0x2ce0f7, _0x3e1273) {
        return _0x2ce0f7 + _0x3e1273;
      },
      'GFeDp': "@s.whatsapp.net",
      'raAky': "demote",
      'ojLIw': "🛑 You were demoted as normal member",
      'EzAvo': function (_0x5555a6, _0x530d4d) {
        return _0x5555a6(_0x530d4d);
      },
      'qXaHV': "*Sorry !! Im not admin here !!*",
      'VmXQk': function (_0x1bcb9d, _0x1e7b6a) {
        return _0x1bcb9d(_0x1e7b6a);
      }
    };
    function _0x146eb4(_0x25bbf0, _0x2ce822, _0x2c14ad, _0x37c394, _0x15c40b) {
      return _0x18a7(_0x2ce822 - 0x337 + 0x14a, _0x25bbf0);
    }
    function _0x187f0a(_0x28e4ed, _0x14b898, _0xcad070, _0x4d3fb0, _0x102884) {
      return _0x18a7(_0x14b898 + 0x9 + 0x14a, _0x102884);
    }
    function _0x5ca089(_0x32dfef, _0x2877f0, _0x49b414, _0xaaa5ac, _0x489e08) {
      return _0x18a7(_0x32dfef + 0x2e8 - 0x22f, _0xaaa5ac);
    }
    function _0xf3e2cf(_0x2634b0, _0x399e33, _0x1ba346, _0x2774a0, _0x540dc9) {
      return _0x18a7(_0x1ba346 - 0x2 + 0x2d2, _0x399e33);
    }
    try {
      if (!_0x2133d3) {
        return _0x339766("*This is not a group !*");
      }
      if (!_0x20a5da) {
        return _0x339766(botAdmin);
      }
      if (!_0x170ae7) {
        return _0x339766("You are not an admin !");
      }
      let _0x48180e = _0x4c5bb5.mentionedJid ? _0x4c5bb5.mentionedJid : _0x4c5bb5.quoted ? _0x4c5bb5.quoted.sender : _0x49fad5.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x248f95.groupParticipantsUpdate(_0x4c5bb5.chat, [_0x48180e], "demote").then(_0x20398c => _0x339766(jsonformat(_0x20398c)))["catch"](_0x4945ce => _0x339766(jsonformat(_0x4945ce)));
      _0x339766("🛑 You were demoted as normal member");
      const _0x436350 = {
        text: '✅',
        key: _0x4c5bb5.key
      };
      const _0xc4d97e = {
        react: _0x436350
      };
      await _0x248f95.sendMessage(_0x4e171e, _0xc4d97e);
    } catch (_0x2b6921) {
      _0x339766("*Sorry !! Im not admin here !!*");
      _0x356fb3(_0x2b6921);
    }
  });
  const _0x221f3e = {
    pattern: "setname",
    react: '🔖',
    desc: "To change group name",
    category: "group",
    use: ".setname",
    filename: __filename
  };
  cmd(_0x221f3e, async (_0x57fc11, _0x5308d0, _0x38aa39, {
    from: _0x5dacd8,
    prefix: _0x4971bf,
    l: _0x552851,
    quoted: _0x476683,
    body: _0x253868,
    isCmd: _0x3bdb2b,
    command: _0x57fcc5,
    args: _0x377406,
    q: _0x31daac,
    isGroup: _0x35db24,
    sender: _0xbe29cf,
    senderNumber: _0x266a31,
    botNumber2: _0x244c1a,
    botNumber: _0x95e64b,
    pushname: _0x30e7e7,
    isMe: _0x5aa69c,
    isOwner: _0x54e78a,
    groupMetadata: _0x5be642,
    groupName: _0x881cee,
    participants: _0xd4220a,
    groupAdmins: _0x55b3be,
    isBotAdmins: _0x5dd318,
    isAdmins: _0x29f89a,
    reply: _0x45c4c9
  }) => {
    function _0xbe9bda(_0x54c2b2, _0x1fdd28, _0x25053e, _0x9d407f, _0x3dbe36) {
      return _0x18a7(_0x3dbe36 + 0x45a - 0x22f, _0x25053e);
    }
    function _0x4d23dd(_0x743415, _0x910dde, _0x42a5c3, _0x2bbcc0, _0xf14905) {
      return _0x18a7(_0xf14905 + 0x525 - 0x22f, _0x743415);
    }
    function _0x49ce15(_0x803520, _0x2b470f, _0xee4e4d, _0x497aa4, _0x24e069) {
      return _0x18a7(_0xee4e4d + 0x288 - 0x22f, _0x2b470f);
    }
    function _0x16ac35(_0x1d1ddb, _0x1ce030, _0x352f0f, _0x3474ea, _0x1a5b8d) {
      return _0x18a7(_0x3474ea + 0x667 - 0x2b5, _0x1ce030);
    }
    const _0xd3d243 = {
      'lRwRF': "4|2|5|1|0|3",
      'LZcYP': function (_0x5d1a7b, _0x50d646) {
        return _0x5d1a7b(_0x50d646);
      },
      'mKGvu': "*✅ Group name successfully changed*",
      'bJqHT': function (_0x5c3d21, _0x7c8a11) {
        return _0x5c3d21(_0x7c8a11);
      },
      'zhugG': function (_0x5a0500, _0x4f0acf) {
        return _0x5a0500(_0x4f0acf);
      },
      'QToIy': function (_0x5c37fc, _0x18c87b) {
        return _0x5c37fc(_0x18c87b);
      },
      'ZagxC': function (_0x116fb2, _0x26c919) {
        return _0x116fb2(_0x26c919);
      },
      'iKFjV': "*Sorry !! Im not admin here !!*",
      'iWBPq': function (_0x1a5d1c, _0xcfa2aa) {
        return _0x1a5d1c(_0xcfa2aa);
      }
    };
    function _0x569814(_0x31ecd9, _0x4c78e2, _0x279964, _0x529d8e, _0x5778b6) {
      return _0x18a7(_0x31ecd9 + 0x2d + 0x2d2, _0x4c78e2);
    }
    try {
      if (!_0x35db24) {
        return _0x45c4c9("*This is not a group !*");
      }
      if (!_0x5dd318) {
        return _0x45c4c9(botAdmin);
      }
      if (!_0x29f89a) {
        return _0x45c4c9("You are not an admin !");
      }
      await _0x57fc11.groupUpdateSubject(_0x5308d0.chat, _0x31daac).then(_0x163780 => _0x45c4c9(mess.success))["catch"](_0x1afc0e => _0x45c4c9(jsonformat(_0x1afc0e)));
      _0x45c4c9("*✅ Group name successfully changed*");
      const _0x92ccc2 = {
        text: '✅',
        key: _0x5308d0.key
      };
      const _0x3a508d = {
        react: _0x92ccc2
      };
      await _0x57fc11.sendMessage(_0x5dacd8, _0x3a508d);
    } catch (_0x4a1661) {
      _0x45c4c9("*Sorry !! Im not admin here !!*");
      _0x552851(_0x4a1661);
    }
  });
  const _0x5086b8 = {
    pattern: "setdesc",
    react: '🔖',
    desc: "To change group description",
    category: "group",
    use: ".setdesc",
    filename: __filename
  };
  cmd(_0x5086b8, async (_0x567013, _0x31e619, _0x43c925, {
    from: _0x2685a,
    prefix: _0x366bef,
    l: _0x186479,
    quoted: _0x5442fe,
    body: _0x138432,
    isCmd: _0x588c0a,
    command: _0x2eef2e,
    args: _0xbf1a,
    q: _0xe09cf0,
    isGroup: _0xd8ed74,
    sender: _0x6c76fb,
    senderNumber: _0x599402,
    botNumber2: _0x436e1f,
    botNumber: _0x4fdda5,
    pushname: _0x527a40,
    isMe: _0x3cfb68,
    isOwner: _0x261913,
    groupMetadata: _0xf87f35,
    groupName: _0x2efdb9,
    participants: _0x7d0362,
    groupAdmins: _0x4ded5a,
    isBotAdmins: _0x31a066,
    isAdmins: _0xda3ee6,
    reply: _0x2a0ad6
  }) => {
    function _0x3f0e8b(_0x23a3f, _0x33ddad, _0x229138, _0x29c36c, _0x24936d) {
      return _0x18a7(_0x24936d - 0xe6 + 0x1a0, _0x229138);
    }
    function _0x492f9a(_0x54cfa3, _0x409d4a, _0x226666, _0x5e2759, _0x4733a3) {
      return _0x18a7(_0x5e2759 + 0x21b - 0x2b5, _0x54cfa3);
    }
    const _0x33e700 = {
      'KxKCW': "4|0|2|5|1|3",
      'bTNtH': function (_0x2cd7e2, _0x2f520f) {
        return _0x2cd7e2(_0x2f520f);
      },
      'tmsJg': function (_0x18b250, _0x2f4245) {
        return _0x18b250(_0x2f4245);
      },
      'MMCNe': "*✅ Group description successfully changed",
      'egPPh': function (_0x214305, _0x2be76e) {
        return _0x214305(_0x2be76e);
      },
      'OyhrP': "*Sorry !! Im not admin here !!*"
    };
    function _0x34c82e(_0xbb1709, _0x1407e4, _0x5d0572, _0x5c8020, _0x3ee047) {
      return _0x18a7(_0x5c8020 + 0x1db + 0x14a, _0xbb1709);
    }
    function _0x59905c(_0x4fac66, _0x32539e, _0x4e6e99, _0x1f6c30, _0x2e2af3) {
      return _0x18a7(_0x4fac66 - 0x9 + 0x2d2, _0x4e6e99);
    }
    function _0x5ed2cb(_0xa7bb9d, _0xe38c7b, _0x30a6b4, _0x5c52c8, _0x433c8e) {
      return _0x18a7(_0xa7bb9d - 0x24e + 0x1a0, _0x5c52c8);
    }
    try {
      if (!_0xd8ed74) {
        return _0x2a0ad6("*This is not a group !*");
      }
      if (!_0x31a066) {
        return _0x2a0ad6(botAdmin);
      }
      if (!_0xda3ee6) {
        return _0x2a0ad6("You are not an admin !");
      }
      await _0x567013.groupUpdateDescription(_0x31e619.chat, _0xe09cf0).then(_0x4b8263 => _0x2a0ad6(mess.success))["catch"](_0x5eebad => _0x2a0ad6(jsonformat(_0x5eebad)));
      _0x2a0ad6("*✅ Group description successfully changed");
      const _0x41188b = {
        text: '✅',
        key: _0x31e619.key
      };
      const _0x1c9979 = {
        react: _0x41188b
      };
      await _0x567013.sendMessage(_0x2685a, _0x1c9979);
    } catch (_0x2b704c) {
      _0x2a0ad6("*Sorry !! Im not admin here !!*");
      _0x186479(_0x2b704c);
    }
  });
  function _0x6b374(_0x3246b0, _0xc32519, _0x524a57, _0x39a162, _0x2f5ae7) {
    return _0x18a7(_0x524a57 - 0x2b5, _0x39a162);
  }
  const _0x2a5a9c = {
    pattern: "ephemeral",
    react: '🔖',
    desc: "To desappear & appear messages",
    category: "group",
    use: ".ephemeral",
    filename: __filename
  };
  cmd(_0x2a5a9c, async (_0xde5ba1, _0x56d702, _0x138577, {
    from: _0x5f6619,
    prefix: _0x209784,
    l: _0x4be916,
    quoted: _0x463020,
    body: _0x46ee3e,
    isCmd: _0x542aa4,
    command: _0x361c19,
    args: _0x59fe0d,
    q: _0x3444f0,
    isGroup: _0x2565ec,
    sender: _0x1ea83a,
    senderNumber: _0x2a7114,
    botNumber2: _0x1a752b,
    botNumber: _0x5bf870,
    pushname: _0x57ab16,
    isMe: _0x45f5f0,
    isOwner: _0x285d0b,
    groupMetadata: _0x7927b0,
    groupName: _0x2211d0,
    participants: _0x283018,
    groupAdmins: _0x491971,
    isBotAdmins: _0x284704,
    isAdmins: _0x4b82aa,
    reply: _0x174ad0
  }) => {
    const _0x38e471 = {
      'rmEjQ': "4|5|2|1|3|0",
      'GvFLS': function (_0x161ca7, _0x4da8d1) {
        return _0x161ca7(_0x4da8d1);
      },
      'wPSbd': function (_0x38337b, _0x566490) {
        return _0x38337b === _0x566490;
      },
      'xhhXX': "enable",
      'desKC': function (_0x23b090, _0x49ffc6) {
        return _0x23b090 === _0x49ffc6;
      },
      'BVSjL': "disable",
      'ioVio': "*Error !!*",
      'NLdYc': function (_0x568280, _0x220b06) {
        return _0x568280(_0x220b06);
      }
    };
    function _0x1c170b(_0x381e40, _0x1c03dc, _0x2df034, _0x41ecf1, _0x54fcf3) {
      return _0x18a7(_0x41ecf1 - 0x429 + 0x2d2, _0x1c03dc);
    }
    function _0x555ea1(_0x11895e, _0x36158e, _0x478d75, _0x338df5, _0x118561) {
      return _0x18a7(_0x11895e - 0x14f + 0x1a0, _0x478d75);
    }
    function _0x3d9b90(_0x58dbf0, _0x41b563, _0x178131, _0x2ec476, _0x4945bc) {
      return _0x18a7(_0x58dbf0 - 0x22a + 0x2d2, _0x4945bc);
    }
    function _0x489d7d(_0x1e6f46, _0x539537, _0x27f948, _0x579681, _0x3498ae) {
      return _0x18a7(_0x1e6f46 - 0x560 + 0x2d2, _0x27f948);
    }
    function _0x324f7c(_0x394e03, _0x8642d7, _0xc61ec2, _0x130434, _0x593b5b) {
      return _0x18a7(_0x394e03 + 0x297 + 0x14a, _0x8642d7);
    }
    try {
      if (!_0x2565ec) {
        return _0x174ad0("*This is not a group !*");
      }
      if (!_0x284704) {
        return _0x174ad0(botAdmin);
      }
      if (!_0x4b82aa) {
        return _0x174ad0("You are not an admin !");
      }
      if (!_0x3444f0) {
        return await _0x174ad0(imgmsg);
      }
      if (_0x59fe0d[0] === "enable") {
        const _0x50237f = {
          disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
        };
        await _0xde5ba1.sendMessage(_0x56d702.chat, _0x50237f).then(_0x3712f3 => _0x174ad0(jsonformat(_0x3712f3)))["catch"](_0x43c95d => _0x174ad0(jsonformat(_0x43c95d)));
      } else {
        if (_0x59fe0d[0] === "disable") {
          const _0x788743 = {
            disappearingMessagesInChat: false
          };
          await _0xde5ba1.sendMessage(_0x56d702.chat, _0x788743).then(_0x17874a => _0x174ad0(jsonformat(_0x17874a)))["catch"](_0x5cd0f2 => _0x174ad0(jsonformat(_0x5cd0f2)));
        }
      }
      const _0x9b717d = {
        text: '✅',
        key: _0x56d702.key
      };
      const _0xfd544f = {
        react: _0x9b717d
      };
      await _0xde5ba1.sendMessage(_0x5f6619, _0xfd544f);
    } catch (_0x643a60) {
      _0x174ad0("*Error !!*");
      _0x4be916(_0x643a60);
    }
  });
  const _0x55f421 = {
    pattern: "delete",
    react: '🔖',
    desc: "To delete message",
    category: "main",
    use: ".delete",
    filename: __filename
  };
  cmd(_0x55f421, async (_0x3d402f, _0x5d5933, _0x959de2, {
    from: _0x21d9e7,
    prefix: _0x566bdb,
    l: _0x2f455a,
    quoted: _0xf304e8,
    body: _0x48980e,
    isCmd: _0x2fed9e,
    command: _0x3eddab,
    args: _0x3e99e3,
    q: _0x1ca72d,
    isGroup: _0x10c47d,
    sender: _0x4053f2,
    senderNumber: _0x32b5de,
    botNumber2: _0x39b5dd,
    botNumber: _0x4d52b3,
    pushname: _0x1dd4bb,
    isMe: _0x13b0d5,
    isOwner: _0x438a78,
    groupMetadata: _0x498afc,
    groupName: _0x4e7c72,
    participants: _0x303d76,
    groupAdmins: _0x224430,
    isBotAdmins: _0x48491c,
    isAdmins: _0x2866ff,
    reply: _0x31dcde
  }) => {
    function _0x5e601c(_0x5d9b51, _0x4d2174, _0x3ddc04, _0x2dda50, _0x28db6c) {
      return _0x18a7(_0x5d9b51 - 0x79 - 0x2b5, _0x3ddc04);
    }
    function _0x20a7b8(_0x2c3269, _0x12712e, _0x58fa31, _0x346c92, _0x570ebf) {
      return _0x18a7(_0x570ebf - 0x131 - 0x2b5, _0x2c3269);
    }
    function _0x30ede9(_0x442710, _0x3f3a5d, _0x18a9d0, _0x208375, _0x5b3e9a) {
      return _0x18a7(_0x5b3e9a - 0xed - 0x22f, _0x3f3a5d);
    }
    function _0x3bdc57(_0xbbd8fd, _0x961bb0, _0x4fc2d0, _0x24f624, _0x340618) {
      return _0x18a7(_0x340618 - 0x266 + 0x2d2, _0xbbd8fd);
    }
    function _0x5e22a3(_0x481d1f, _0x2cbf7c, _0x42bfdc, _0x57e922, _0x140e02) {
      return _0x18a7(_0x481d1f - 0x170 + 0x14a, _0x140e02);
    }
    const _0x851210 = {
      'TwySE': function (_0x1cb09e, _0x107b05) {
        return _0x1cb09e(_0x107b05);
      },
      'GBeZh': "*Error !!*"
    };
    try {
      if (!_0x959de2.quoted) {
        throw false;
      }
      let {
        chat: _0x47e19c,
        fromMe: _0x54fbce,
        id: _0x3e05d3,
        isBaileys: _0x533b4b
      } = _0x959de2.quoted;
      _0x3d402f.sendMessage(_0x959de2.chat, {
        'delete': {
          'remoteJid': _0x959de2.chat,
          'fromMe': true,
          'id': _0x959de2.quoted.id,
          'participant': _0x959de2.quoted.sender
        }
      });
      const _0x4e0c58 = {
        text: '✅',
        key: _0x5d5933.key
      };
      const _0xf30443 = {
        react: _0x4e0c58
      };
      await _0x3d402f.sendMessage(_0x21d9e7, _0xf30443);
    } catch (_0x2ecbb2) {
      _0x31dcde("*Error !!*");
      _0x2f455a(_0x2ecbb2);
    }
  });
  const _0x39b88d = {
    pattern: "join",
    react: '🔖',
    desc: "To join a group",
    category: "group",
    use: ".join",
    filename: __filename
  };
  cmd(_0x39b88d, async (_0x2870ef, _0x16124d, _0x1188f3, {
    from: _0x222f6b,
    prefix: _0x3c05ed,
    l: _0x5563ad,
    quoted: _0x49e01c,
    body: _0x3332e3,
    isCmd: _0x4bbe4d,
    command: _0x2cd806,
    args: _0x193059,
    q: _0x2295d8,
    isGroup: _0xd7a771,
    sender: _0x443c98,
    senderNumber: _0x4f336b,
    botNumber2: _0x20c408,
    botNumber: _0x28b0e1,
    pushname: _0x3c9fdf,
    isMe: _0x17cd43,
    isOwner: _0x53fb5c,
    groupMetadata: _0x4f275b,
    groupName: _0x513416,
    participants: _0x168c4b,
    groupAdmins: _0x597864,
    isBotAdmins: _0x44c0eb,
    isAdmins: _0x4f95d2,
    reply: _0x9a1442
  }) => {
    function _0x14ca2b(_0x15faa8, _0x5dea2f, _0x2cf51d, _0x3f232d, _0x19a802) {
      return _0x18a7(_0x19a802 + 0x1f4 - 0x22f, _0x2cf51d);
    }
    function _0x52e39d(_0x52055b, _0x3ee63c, _0x4ca29d, _0x5572d5, _0x2dd206) {
      return _0x18a7(_0x4ca29d - 0x4e9 + 0x2d2, _0x3ee63c);
    }
    function _0x39ccfd(_0x2f1b63, _0x88d31d, _0x38c17c, _0x275ee8, _0x466171) {
      return _0x18a7(_0x275ee8 - 0x2cb + 0x1a0, _0x466171);
    }
    function _0x350542(_0x25dbaa, _0x4c6e26, _0x325319, _0x4ad447, _0x50ccb7) {
      return _0x18a7(_0x50ccb7 - 0x3da + 0x14a, _0x25dbaa);
    }
    const _0x7d092f = {
      'HfHhW': function (_0x1e1275, _0x226a4d) {
        return _0x1e1275(_0x226a4d);
      },
      'gBnxO': "Enter the Group Link!",
      'bpzXU': function (_0x31c421, _0x3f5907) {
        return _0x31c421(_0x3f5907);
      },
      'iYUIv': "whatsapp.com",
      'KYrJp': "Invalid Link!",
      'CPRNa': function (_0x4858b7) {
        return _0x4858b7();
      },
      'bhADn': "https://chat.whatsapp.com/",
      'yrznN': "*Error !!*"
    };
    function _0x26bd0d(_0x5db9b4, _0x25a63c, _0x43588e, _0x5d6ddf, _0x8e50dd) {
      return _0x18a7(_0x5d6ddf - 0x663 + 0x2d2, _0x5db9b4);
    }
    try {
      if (!_0x17cd43) {
        return await _0x9a1442("*You are not bot's owner or moderator !*");
      }
      if (!_0x2295d8) {
        throw "Enter the Group Link!";
      }
      if (!isUrl(_0x193059[0]) && !_0x193059[0].includes("whatsapp.com")) {
        throw "Invalid Link!";
      }
      _0x9a1442();
      let _0xac4799 = _0x193059[0].split("https://chat.whatsapp.com/")[1];
      await _0x2870ef.groupAcceptInvite(_0xac4799).then(_0x598de2 => _0x9a1442(jsonformat(_0x598de2)))["catch"](_0x4c9f20 => _0x9a1442(jsonformat(_0x4c9f20)));
      const _0x5a2319 = {
        text: '✅',
        key: _0x16124d.key
      };
      const _0x155bb6 = {
        react: _0x5a2319
      };
      await _0x2870ef.sendMessage(_0x222f6b, _0x155bb6);
    } catch (_0x96f5b6) {
      _0x9a1442("*Error !!*");
      _0x5563ad(_0x96f5b6);
    }
  });
  const _0x288336 = {
    pattern: "leave",
    react: '🔖',
    desc: "To leave a group",
    category: "group",
    use: ".leave",
    filename: __filename
  };
  cmd(_0x288336, async (_0x59b9c4, _0x2864e4, _0x2eb5d0, {
    from: _0x41f813,
    prefix: _0xcd10d,
    l: _0x17794b,
    quoted: _0xa8e52f,
    body: _0x4ea68f,
    isCmd: _0x3ab88e,
    command: _0x9341ac,
    args: _0x391db6,
    q: _0x3fa27f,
    isGroup: _0x1b438b,
    sender: _0x20e9a2,
    senderNumber: _0x158e80,
    botNumber2: _0x8d84ed,
    botNumber: _0x31c40e,
    pushname: _0x45abca,
    isMe: _0xfff6ea,
    isOwner: _0x4005cd,
    groupMetadata: _0x1336c7,
    groupName: _0x420514,
    participants: _0x41758e,
    groupAdmins: _0x1a6475,
    isBotAdmins: _0x27fd44,
    isAdmins: _0x5a0769,
    reply: _0x5cb1e4
  }) => {
    function _0x186ba6(_0x550858, _0x4a9c26, _0x5c7aef, _0x14d810, _0x42d9b3) {
      return _0x18a7(_0x4a9c26 + 0x66a - 0x2b5, _0x14d810);
    }
    function _0x53c31d(_0x5eb022, _0x2d4986, _0x58fb48, _0x1aa87d, _0x1e87a5) {
      return _0x18a7(_0x2d4986 - 0x5b1 + 0x2d2, _0x5eb022);
    }
    function _0x9326b0(_0xb11c8f, _0x11672e, _0x210a02, _0x1a6264, _0x2005ec) {
      return _0x18a7(_0xb11c8f + 0x49b - 0x22f, _0x11672e);
    }
    const _0x15d3c0 = {
      'ahmfW': function (_0x3508f0, _0x235192) {
        return _0x3508f0(_0x235192);
      },
      'caMRN': function (_0x37c445, _0x25da33) {
        return _0x37c445(_0x25da33);
      },
      'PCpjW': "*Error !!*",
      'kXAoA': function (_0x257cf6, _0x216ebd) {
        return _0x257cf6(_0x216ebd);
      }
    };
    function _0x155c25(_0x5eb4c8, _0xce1fc4, _0x11c70d, _0xc61ef8, _0x520da2) {
      return _0x18a7(_0xce1fc4 + 0x40 - 0x22f, _0x520da2);
    }
    function _0x1ed960(_0x37bc9e, _0x25276a, _0x59e697, _0x16fcd8, _0x4257ef) {
      return _0x18a7(_0x37bc9e - 0x3e6 + 0x1a0, _0x25276a);
    }
    try {
      if (!_0xfff6ea) {
        return await _0x5cb1e4("*You are not bot's owner or moderator !*");
      }
      await _0x59b9c4.groupLeave(_0x2864e4.chat).then(_0x17e7bd => _0x5cb1e4(jsonformat(_0x17e7bd)))["catch"](_0x408e79 => _0x5cb1e4(jsonformat(_0x408e79)));
      const _0x5e56a3 = {
        text: '✅',
        key: _0x2864e4.key
      };
      const _0xd1303d = {
        react: _0x5e56a3
      };
      await _0x59b9c4.sendMessage(_0x41f813, _0xd1303d);
    } catch (_0x1a6fb3) {
      _0x5cb1e4("*Error !!*");
      _0x17794b(_0x1a6fb3);
    }
  });
  const _0x380e82 = {
    pattern: "joindevgc",
    react: '🔖',
    desc: "To join dev group",
    category: "main",
    use: ".joindevgc",
    filename: __filename
  };
  cmd(_0x380e82, async (_0x23b19d, _0x55a418, _0x4320f6, {
    from: _0x4a4513,
    prefix: _0xf8676b,
    l: _0x295678,
    quoted: _0x5e2c98,
    body: _0x5eead4,
    isCmd: _0x2641cc,
    command: _0x2f9227,
    args: _0xbe0d2b,
    q: _0x31e503,
    isGroup: _0x4ada0b,
    sender: _0x2a450f,
    senderNumber: _0x5f4505,
    botNumber2: _0x30ba29,
    botNumber: _0xce3f0c,
    pushname: _0x535af1,
    isMe: _0x3658d2,
    isOwner: _0x508ba9,
    groupMetadata: _0x5de68d,
    groupName: _0x2f0387,
    participants: _0x36bd8d,
    groupAdmins: _0x248d99,
    isBotAdmins: _0x2811b2,
    isAdmins: _0x4dea0e,
    reply: _0x2f4e09
  }) => {
    function _0x1dbbc9(_0x197afa, _0x187f6f, _0x5d54cb, _0x3cdd6c, _0x2dae11) {
      return _0x18a7(_0x187f6f - 0x3a7 + 0x2d2, _0x197afa);
    }
    const _0x57ccf3 = {
      'XxCHt': function (_0x52af5d, _0x4f7e56) {
        return _0x52af5d(_0x4f7e56);
      },
      'FGsZt': "*You must be a bots owner frist*",
      'txBqw': "120363320416667582",
      'NOJAE': "✅ *You have successfully joined to our support group*",
      'xSwKU': "*You have already joined to our support group*"
    };
    function _0x5e782c(_0x506dd4, _0x1d550a, _0x3dff62, _0x50b189, _0x34094b) {
      return _0x18a7(_0x34094b - 0x7e + 0x14a, _0x50b189);
    }
    function _0x3c7f75(_0x5921fa, _0x3cca98, _0x5f3504, _0x31ccdb, _0x4f2c50) {
      return _0x18a7(_0x31ccdb - 0x317 + 0x2d2, _0x4f2c50);
    }
    function _0x55be56(_0x1c271c, _0x516217, _0x4d1082, _0x53cd37, _0x52ebe7) {
      return _0x18a7(_0x1c271c - 0x4fa + 0x1a0, _0x53cd37);
    }
    function _0x3bcc28(_0xd08243, _0x461886, _0x17cf07, _0x5cde14, _0x9e92fc) {
      return _0x18a7(_0x461886 + 0x58f - 0x22f, _0x17cf07);
    }
    try {
      if (!_0x508ba9) {
        return await _0x2f4e09("*You must be a bots owner frist*");
      }
      await _0x23b19d.groupAcceptInvite("120363320416667582");
      const _0x3b7ced = {
        text: '✅',
        key: _0x55a418.key
      };
      const _0x46261f = {
        react: _0x3b7ced
      };
      await _0x23b19d.sendMessage(_0x4a4513, _0x46261f);
      await _0x2f4e09("✅ *You have successfully joined to our support group*");
    } catch (_0x187f64) {
      _0x2f4e09("*You have already joined to our support group*");
      _0x295678(_0x187f64);
    }
  });

  //Work above
  const _0x14939e = {
    pattern: "npm",
    react: '🔖',
    desc: "To search npm packages",
    category: "main",
    use: ".npm",
    filename: __filename
  };
  cmd(_0x14939e, async (_0x2a105c, _0x42b68c, _0x2d1bdd, {
    from: _0x196065,
    prefix: _0x453813,
    l: _0x45f76f,
    quoted: _0x150ac2,
    body: _0x283c94,
    isCmd: _0x263004,
    command: _0x2a1e11,
    args: _0x5ac6d1,
    q: _0x3fdb05,
    isGroup: _0x2d2d4e,
    sender: _0x43e617,
    senderNumber: _0x581a51,
    botNumber2: _0x51bc72,
    botNumber: _0x3fd205,
    pushname: _0x18e31c,
    isMe: _0x2d8df9,
    isOwner: _0x4004aa,
    groupMetadata: _0x1e8487,
    groupName: _0xe86697,
    participants: _0x5206e5,
    groupAdmins: _0x42ca47,
    isBotAdmins: _0x358381,
    isAdmins: _0x219979,
    reply: _0x3e0757
  }) => {
    function _0x3f160c(_0x4d90bd, _0x303889, _0x299ed9, _0x592c90, _0x2e3555) {
      return _0x18a7(_0x303889 + 0x2b + 0x14a, _0x4d90bd);
    }
    function _0x4b8d95(_0x4801fb, _0x22f186, _0x153872, _0x2ec14e, _0x3b98c5) {
      return _0x18a7(_0x2ec14e - 0x328 + 0x2d2, _0x3b98c5);
    }
    const _0x3aa912 = {
      'WQXba': "Please give me package name.📦",
      'DEKbX': function (_0x3ce016, _0x5cf35f) {
        return _0x3ce016 && _0x5cf35f;
      },
      'RKGkj': "*No Result Found. Sorry!!*",
      'xVkTF': function (_0x1f9295, _0x7c36c5) {
        return _0x1f9295(_0x7c36c5);
      }
    };
    function _0x2f1b3a(_0x149aa1, _0x2ee569, _0x190052, _0x16c21d, _0x487b0a) {
      return _0x18a7(_0x149aa1 - 0x3e4 + 0x14a, _0x190052);
    }
    function _0xe86f45(_0x4cdacd, _0x2107ef, _0x53c6db, _0x28c85d, _0xe6621e) {
      return _0x18a7(_0x53c6db - 0x51d + 0x14a, _0x2107ef);
    }
    function _0x1a99ed(_0x5c003d, _0x51ab50, _0xf9a71c, _0x49ddac, _0x215dfb) {
      return _0x18a7(_0xf9a71c + 0x344 - 0x2b5, _0x5c003d);
    }
    try {
      if (!_0x3fdb05) {
        return _0x42b68c.reply("Please give me package name.📦");
      }
      const {
        data: _0x57b114
      } = await axios.get("https://api.npms.io/v2/search?q=" + _0x3fdb05);
      let _0x5540a3 = _0x57b114.results.map(({
        package: _0x205145
      }) => '*' + _0x205145.name + "* (v" + _0x205145.version + ")\n_" + _0x205145.links.npm + "_\n_" + _0x205145.description + '_').join("\n\n")?.["trim"]();
      if (_0x57b114 && _0x5540a3) {
        await _0x42b68c.reply(_0x5540a3);
      } else {
        await _0x42b68c.reply("*No Result Found. Sorry!!*");
      }
      const _0x14efa5 = {
        text: '✅',
        key: _0x42b68c.key
      };
      const _0x2c57e5 = {
        react: _0x14efa5
      };
      await _0x2a105c.sendMessage(_0x196065, _0x2c57e5);
    } catch (_0x53af40) {
      await console.error(_0x53af40 + "\n\ncommand : npm", _0x53af40);
      _0x45f76f(_0x53af40);
    }
  });
  const _0x21813a = {
    on: "body"
  };
  cmd(_0x21813a, async (_0x3b135b, _0x138539, _0xb0cc94, {
    from: _0x4b883e,
    prefix: _0x4847ac,
    l: _0x283f0d,
    quoted: _0x4c645f,
    body: _0x36efa8,
    isCmd: _0x314eaa,
    command: _0x1e8891,
    args: _0x211d50,
    q: _0x1b4285,
    isGroup: _0x228ba6,
    sender: _0x32a6bd,
    senderNumber: _0x1074cf,
    botNumber2: _0x26cadc,
    botNumber: _0x36c9aa,
    pushname: _0x2acc84,
    isMe: _0x3853e7,
    isOwner: _0x24dcec,
    groupMetadata: _0x26ccc8,
    groupName: _0x28be62,
    participants: _0x4444b1,
    groupAdmins: _0x53a2c9,
    isBotAdmins: _0xcc4ad5,
    isAdmins: _0xc21200,
    reply: _0x42999b
  }) => {
    function _0x408977(_0x56c354, _0x3a10a9, _0x44e883, _0x26ae4c, _0x5b6583) {
      return _0x18a7(_0x3a10a9 + 0x189 - 0x2b5, _0x5b6583);
    }
    const _0x2dbe83 = {
      sYmCX: function (_0x10f6dc, _0x4fc987) {
        return _0x10f6dc === _0x4fc987;
      }
    };
    function _0x2d2321(_0x379300, _0x570004, _0x2b6626, _0x4835e1, _0x18de1b) {
      return _0x18a7(_0x570004 + 0x3d5 - 0x2b5, _0x4835e1);
    }
    function _0x3aaa7d(_0x260336, _0x545e99, _0xb401da, _0x4bb935, _0x4de693) {
      return _0x18a7(_0x4de693 - 0x262 + 0x2d2, _0xb401da);
    }
    _0x2dbe83.OVcLx = "true";
    _0x2dbe83.CySkj = function (_0x4eabc7, _0x5aa64f) {
      return _0x4eabc7 * _0x5aa64f;
    };
    function _0xfea947(_0x10b4ab, _0x573be8, _0x55b0ce, _0x16b8e7, _0x5ecaaf) {
      return _0x18a7(_0x10b4ab - 0x1a4 - 0x22f, _0x573be8);
    }
    function _0x4f671d(_0x2ae890, _0x1bcca3, _0x36d1ff, _0x185fd2, _0x39e50f) {
      return _0x18a7(_0x185fd2 + 0x55d - 0x2b5, _0x1bcca3);
    }
    if (config.AUTO_REACT === _0x2dbe83.OVcLx) {
      const _0x4de85a = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
      const _0x1122ba = _0x4de85a[Math.floor(_0x2dbe83.CySkj(Math.random(), _0x4de85a.length))];
      const _0x159f07 = {
        text: _0x1122ba,
        key: _0x138539.key
      };
      const _0x22f5b8 = {
        react: _0x159f07
      };
      _0x3b135b.sendMessage(_0x4b883e, _0x22f5b8);
    }
  });
  const _0x202275 = {
    pattern: "device",
    react: 'ℹ️',
    alias: ["getdevice"],
    desc: "X-BYTE User Checking Tool",
    category: "main",
    use: ".device",
    filename: __filename
  };
  cmd(_0x202275, async (_0x198ba0, _0x156f5c, _0x209c60, {
    from: _0x15db41,
    l: _0x1bacb7,
    quoted: _0x54d5ec,
    body: _0x4c862f,
    isCmd: _0x1b995d,
    command: _0xf67c25,
    args: _0xc9512,
    q: _0x10dc64,
    isGroup: _0x1f15d9,
    sender: _0x3706db,
    senderNumber: _0x3227a2,
    botNumber2: _0x2c395d,
    botNumber: _0x3cfe01,
    pushname: _0x2ae949,
    isMe: _0x673d32,
    isOwner: _0x5ea324,
    groupMetadata: _0x2b75d5,
    groupName: _0x2e7952,
    participants: _0x2b68a3,
    groupAdmins: _0x57d474,
    isBotAdmins: _0x26d54d,
    isCreator: _0x470a64,
    isDev: _0x4756b9,
    isAdmins: _0x4dc8f6,
    reply: _0x328364
  }) => {
    function _0x2e21fe(_0x4081a6, _0x144021, _0x33f355, _0x515e93, _0x34cfa4) {
      return _0x18a7(_0x144021 + 0x331 - 0x2b5, _0x34cfa4);
    }
    const _0x201457 = {
      'TZflT': function (_0x15b397, _0x4a041b) {
        return _0x15b397(_0x4a041b);
      },
      'HkDwR': "ℹ️ *Sorry ! This is Owner only Command..*",
      'vxbhP': "ℹ️ *Please reply a Message...*",
      'vnodc': "```",
      'FZXMk': "3EB",
      'jeQhg': "BAE",
      'PwNyT': "QUEENAMDI",
      'amdIT': "CYBER2",
      'ZXLmc': "ZEROTWO",
      'VbFsR': "QUEENELISA",
      'WXdNE': function (_0xa184fb, _0x1c8cca) {
        return _0xa184fb + _0x1c8cca;
      },
      'nigov': "⛔ *Error accurated !!*\n\n"
    };
    function _0x1a382a(_0x5ddac5, _0x4166b5, _0x1ce7b5, _0x44150e, _0x1ddd2a) {
      return _0x18a7(_0x5ddac5 - 0x2b0 + 0x14a, _0x1ddd2a);
    }
    function _0x35bf28(_0x582e45, _0x3465d2, _0x56afec, _0x1740dd, _0x558828) {
      return _0x18a7(_0x1740dd + 0x582 - 0x22f, _0x56afec);
    }
    function _0x1929f2(_0x3db45b, _0x4c451d, _0xabf8b2, _0x283e79, _0x25aefd) {
      return _0x18a7(_0xabf8b2 - 0x41a + 0x14a, _0x4c451d);
    }
    function _0x5e4df4(_0x558f93, _0x2b0fec, _0x5ebc12, _0x46f660, _0x34de04) {
      return _0x18a7(_0x46f660 - 0x20 + 0x1a0, _0x34de04);
    }
    try {
      if (!_0x673d32) {
        return _0x328364("ℹ️ *Sorry ! This is Owner only Command..*");
      }
      if (!_0x209c60.quoted) {
        return _0x328364("ℹ️ *Please reply a Message...*");
      }
      if (_0x209c60.quoted.id.startsWith('3A')) {
        var _0x502864 = "```";
        _0x198ba0.sendMessage(_0x15db41, {
          'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Ios WhatsApp(i Phone)" + _0x502864,
          'mentions': [_0x209c60.quoted.sender]
        });
      } else {
        if (_0x209c60.quoted.id.startsWith("3EB")) {
          var _0x502864 = "```";
          _0x198ba0.sendMessage(_0x15db41, {
            'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Web WhatsApp" + _0x502864,
            'mentions': [_0x209c60.quoted.sender]
          });
        } else {
          if (_0x209c60.quoted.id.startsWith("BAE")) {
            var _0x502864 = "```";
            _0x198ba0.sendMessage(_0x15db41, {
              'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Web WhatsApp(Wiskeysockets/Baileys-WA-Web-Api)" + _0x502864,
              'mentions': [_0x209c60.quoted.sender]
            });
          } else {
            if (_0x209c60.quoted.id.startsWith("QUEENAMDI")) {
              var _0x502864 = "```";
              _0x198ba0.sendMessage(_0x15db41, {
                'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Web WhatsApp(QueenAmdi-Wa-Bot)" + _0x502864,
                'mentions': [_0x209c60.quoted.sender]
              });
            } else {
              if (_0x209c60.quoted.id.startsWith("CYBER2")) {
                var _0x502864 = "```";
                _0x198ba0.sendMessage(_0x15db41, {
                  'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Web WhatsApp(Cyber-X-Wa-Bot)" + _0x502864,
                  'mentions': [_0x209c60.quoted.sender]
                });
              } else {
                if (_0x209c60.quoted.id.startsWith("ZEROTWO")) {
                  var _0x502864 = "```";
                  _0x198ba0.sendMessage(_0x15db41, {
                    'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Web WhatsApp(ZeroTwo-Md-Wa-Bot)" + _0x502864,
                    'mentions': [_0x209c60.quoted.sender]
                  });
                } else {
                  if (_0x209c60.quoted.id.startsWith("QUEENELISA")) {
                    var _0x502864 = "```";
                    _0x198ba0.sendMessage(_0x15db41, {
                      'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Web WhatsApp (QueenElisa-Wa-Bot)" + _0x502864,
                      'mentions': [_0x209c60.quoted.sender]
                    });
                  } else {
                    var _0x502864 = "```";
                    _0x198ba0.sendMessage(_0x15db41, {
                      'text': '@' + _0x209c60.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x502864 + "Android WhatsApp " + _0x502864,
                      'mentions': [_0x209c60.quoted.sender]
                    });
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x477554) {
      _0x328364("⛔ *Error accurated !!*\n\n" + _0x477554);
      _0x1bacb7(_0x477554);
    }
  });
  const _0x592d04 = {
    pattern: 'id',
    react: '📚',
    alias: ["getdeviceid"],
    desc: "X-BYTE User Checking Tool",
    category: "main",
    use: ".id",
    filename: __filename
  };
  cmd(_0x592d04, async (_0x11130d, _0x1a3bfe, _0x2acdf4, {
    from: _0x30e0cc,
    l: _0x84d900,
    quoted: _0x593c4c,
    body: _0x152ac7,
    isCmd: _0x4ec9d5,
    command: _0xeba285,
    args: _0xfd592d,
    q: _0x357330,
    isGroup: _0x1fc0aa,
    sender: _0x5626aa,
    senderNumber: _0x33bf9a,
    botNumber2: _0x587171,
    botNumber: _0x301e2b,
    pushname: _0x46b686,
    isMe: _0x154c72,
    isOwner: _0x48ae9e,
    groupMetadata: _0x110b0a,
    groupName: _0x1fa4e1,
    participants: _0x5cb33a,
    groupAdmins: _0x4b067c,
    isBotAdmins: _0x483a0a,
    isCreator: _0x2a7e4a,
    isDev: _0x21d214,
    isAdmins: _0x293d9e,
    reply: _0x4d2fd0
  }) => {
    function _0x37a98c(_0x3fafbf, _0x31f432, _0x105cec, _0x3f0022, _0x5f306e) {
      return _0x18a7(_0x105cec - 0x507 + 0x14a, _0x31f432);
    }
    function _0x3dff37(_0x599f06, _0x2b0c48, _0x121910, _0x4a1a2d, _0x413074) {
      return _0x18a7(_0x4a1a2d + 0x487 - 0x2b5, _0x599f06);
    }
    function _0x1f066e(_0x482a16, _0x334f2b, _0x319c17, _0x53f893, _0x599233) {
      return _0x18a7(_0x599233 - 0x33e + 0x1a0, _0x319c17);
    }
    const _0x531214 = {
      'ygOLo': function (_0x3d5d87, _0x47421a) {
        return _0x3d5d87(_0x47421a);
      },
      'HQmKS': "🚫 *You must be a Moderator frist*",
      'vGlOH': function (_0x4534a9, _0x16bd62) {
        return _0x4534a9(_0x16bd62);
      },
      'TOZbC': "ℹ️ *Please reply a Message...*",
      'CiUJn': "cta_copy",
      'CTUwH': "Copy Id",
      'hJXPq': "copy_email",
      'ViCKO': "https://telegra.ph/file/2bff9cb5c82eccfdeb7af.jpg",
      'GaTmD': "> Click Copy id in the below",
      'jJsRA': function (_0x469f3d, _0x490572) {
        return _0x469f3d + _0x490572;
      },
      'HiqgC': "⛔ *Error accurated !!*\n\n",
      'vXXJe': function (_0x5013f3, _0x1b606f) {
        return _0x5013f3(_0x1b606f);
      }
    };
    function _0x656028(_0x5113e3, _0x175099, _0x2be8b7, _0x453db7, _0x174482) {
      return _0x18a7(_0x5113e3 + 0x199 + 0x14a, _0x174482);
    }
    function _0x1fe1f5(_0x160943, _0x3c85ce, _0x4cd28c, _0x2600aa, _0x12bf87) {
      return _0x18a7(_0x4cd28c + 0x501 - 0x22f, _0x12bf87);
    }
    try {
      if (!_0x154c72) {
        return _0x4d2fd0("🚫 *You must be a Moderator frist*");
      }
      if (!_0x2acdf4.quoted) {
        return _0x4d2fd0("ℹ️ *Please reply a Message...*");
      }
      const _0x20d51f = _0x2acdf4.quoted.id;
      const _0x175cee = [{
        'name': "cta_copy",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Copy Id",
          'id': "copy_email",
          'copy_code': _0x20d51f
        })
      }];
      const _0x554ec8 = {
        image: "https://telegra.ph/file/2bff9cb5c82eccfdeb7af.jpg",
        header: '',
        footer: "> Click Copy id in the below",
        body: _0x20d51f
      };
      return await _0x11130d.sendButtonMessage(_0x30e0cc, _0x175cee, _0x2acdf4, _0x554ec8);
    } catch (_0xac4c) {
      _0x4d2fd0("⛔ *Error accurated !!*\n\n" + _0xac4c);
      _0x84d900(_0xac4c);
    }
  });
  const _0x302557 = {
    pattern: "restart",
    react: '♻️',
    desc: "restart bot",
    category: "main",
    use: ".restart",
    filename: __filename
  };
  cmd(_0x302557, async (_0x705b3b, _0x420fe5, _0x450887, {
    from: _0x261633,
    l: _0x5cd644,
    quoted: _0xb7ed,
    body: _0x30ba52,
    isCmd: _0x3842ab,
    isCreator: _0x2df21c,
    isDev: _0x5ed279,
    command: _0x5a2709,
    args: _0xcee16e,
    q: _0x53ed73,
    isGroup: _0x193b80,
    sender: _0x4f4418,
    senderNumber: _0x5ba0c1,
    botNumber2: _0x358902,
    botNumber: _0x24c9cd,
    pushname: _0x3731d4,
    isMe: _0x2ce8af,
    isOwner: _0x5c64f4,
    groupMetadata: _0x109d70,
    groupName: _0x1b8f99,
    participants: _0x41e83f,
    isItzcp: _0x20f51e,
    groupAdmins: _0x4117a5,
    isBotAdmins: _0x23a911,
    isAdmins: _0x1a236,
    reply: _0x5503f9,
    react: _0xd6adf6
  }) => {
    function _0x27996c(_0x5b602c, _0x1c3f7b, _0x269450, _0x485c8f, _0x2c2068) {
      return _0x18a7(_0x2c2068 + 0x1e5 + 0x14a, _0x5b602c);
    }
    function _0x2e0d63(_0x27a432, _0x1138d6, _0x3c8207, _0x2f0872, _0x3ff92b) {
      return _0x18a7(_0x27a432 - 0x492 + 0x1a0, _0x1138d6);
    }
    function _0x3365b2(_0x2412bb, _0x3d394d, _0x4199b2, _0x1d9c04, _0x52f971) {
      return _0x18a7(_0x4199b2 - 0x40f + 0x1a0, _0x3d394d);
    }
    function _0x532e20(_0x488758, _0x148c6a, _0x1114a6, _0x4e5ba2, _0x1a7928) {
      return _0x18a7(_0x1114a6 - 0x530 + 0x2d2, _0x488758);
    }
    function _0x3be05c(_0x206074, _0x5aec58, _0x24d48c, _0x4ef669, _0x26ecdc) {
      return _0x18a7(_0x206074 + 0x3ca - 0x22f, _0x4ef669);
    }
    const _0x13bd53 = {
      'vCfth': function (_0x39cc1e, _0x4ea321) {
        return _0x39cc1e(_0x4ea321);
      },
      'lCXsB': "🚫 *You must be a Moderator frist*",
      'eTwwA': "*Restarting the Bot....*",
      'JqRKH': function (_0x46abf3, _0x44e9e6) {
        return _0x46abf3 + _0x44e9e6;
      },
      'JyuTB': "/apps/",
      'AMdWl': "/dynos",
      'jtNhH': "*Error !!*",
      'VvifE': function (_0x1fbbf8, _0x10acaa) {
        return _0x1fbbf8(_0x10acaa);
      }
    };
    try {
      if (!_0x2ce8af) {
        return _0x5503f9("🚫 *You must be a Moderator frist*");
      }
      const _0x59d866 = {
        text: "*Restarting the Bot....*"
      };
      const _0x554aaf = {
        quoted: _0x420fe5
      };
      await _0x705b3b.sendMessage(_0x261633, _0x59d866, _0x554aaf);
      let _0x9c90cd = "/apps/" + config.HEROKU_APP_NAME;
      await heroku["delete"](_0x9c90cd + "/dynos");
    } catch (_0x6a2670) {
      _0x5503f9("*Error !!*");
      _0x5cd644(_0x6a2670);
    }
  });
  const _0x50f716 = {
    pattern: "shutdown",
    react: '⚙️',
    desc: "To shutdown the bot",
    category: "main",
    use: ".shutdown",
    filename: __filename
  };
  cmd(_0x50f716, async (_0x5566ce, _0xba0384, _0x4e6004, {
    from: _0x265e0d,
    prefix: _0x5a2ba9,
    l: _0x3c6de9,
    quoted: _0x2647c4,
    body: _0x3a71cd,
    isCmd: _0x2a714e,
    command: _0x18d3ae,
    isCreator: _0x21e355,
    isDev: _0x18b67c,
    args: _0x38b22a,
    q: _0x266a00,
    isGroup: _0x1cc4b2,
    sender: _0x61e80e,
    senderNumber: _0x302df8,
    botNumber2: _0x138806,
    botNumber: _0x35cdfc,
    pushname: _0x1c85b3,
    isMe: _0x25cc30,
    isOwner: _0x2e3fa6,
    groupMetadata: _0x129f23,
    groupName: _0x303bbf,
    participants: _0x39ec17,
    groupAdmins: _0x4949bc,
    isBotAdmins: _0x409c5f,
    isAdmins: _0x53e001,
    reply: _0x5ecfc0
  }) => {
    function _0x5e6eb3(_0x2a96dc, _0x41910f, _0x262507, _0x4ffd8e, _0x231181) {
      return _0x18a7(_0x231181 + 0x254 + 0x14a, _0x41910f);
    }
    function _0x57ff3d(_0x5baecf, _0x448ddb, _0x591c5e, _0x210fc8, _0x29639c) {
      return _0x18a7(_0x29639c + 0x3f0 - 0x22f, _0x210fc8);
    }
    function _0x2bb72a(_0xa569a9, _0x149ac9, _0x6bbeb3, _0x3c0658, _0xbf8106) {
      return _0x18a7(_0x6bbeb3 - 0x652 + 0x2d2, _0x149ac9);
    }
    const _0x4f984f = {
      'ItXRn': function (_0x3dfac1, _0x6b598b) {
        return _0x3dfac1(_0x6b598b);
      },
      'zQISj': "🚫 *You must be a Moderator frist*",
      'cAnAr': "*Shutting Down the Bot....*",
      'bkncG': function (_0x3cc547, _0xcffedd) {
        return _0x3cc547 + _0xcffedd;
      },
      'rNfDb': "/apps/",
      'gExUF': "/formation",
      'yJykJ': function (_0x358fc9, _0xd36f2f) {
        return _0x358fc9 + _0xd36f2f;
      },
      'cNzaT': "/formation/",
      'XLatR': function (_0x4bf81a, _0xe7059d) {
        return _0x4bf81a(_0xe7059d);
      },
      'WxMWK': "*🛑 This is an owner command...*"
    };
    function _0xe20c77(_0xf29d68, _0x4e253f, _0x4ab785, _0x2aaba0, _0x5f3150) {
      return _0x18a7(_0x5f3150 + 0x102 - 0x2b5, _0x4ab785);
    }
    function _0x18a169(_0x5c6eea, _0x3ddb4a, _0x3c823c, _0x49f743, _0x16b2a9) {
      return _0x18a7(_0x3c823c + 0x63 + 0x2d2, _0x49f743);
    }
    try {
      if (!_0x25cc30) {
        return _0x5ecfc0("🚫 *You must be a Moderator frist*");
      }
      const _0x23a7b7 = {
        text: "*Shutting Down the Bot....*"
      };
      const _0x5a6503 = {
        quoted: _0xba0384
      };
      await _0x5566ce.sendMessage(_0x265e0d, _0x23a7b7, _0x5a6503);
      let _0x160b9c = "/apps/" + config.HEROKU_APP_NAME;
      const _0x4a42ac = await heroku.get(_0x160b9c + "/formation");
      forID = _0x4a42ac[0].id;
      const _0x611090 = {
        quantity: 0x0
      };
      const _0x5150cb = {
        body: _0x611090
      };
      await heroku.patch(_0x160b9c + "/formation/" + forID, _0x5150cb);
      const _0x5f08f5 = {
        text: '✅',
        key: _0xba0384.key
      };
      const _0xf0287c = {
        react: _0x5f08f5
      };
      await _0x5566ce.sendMessage(_0x265e0d, _0xf0287c);
    } catch (_0x8381ca) {
      _0x5ecfc0("*🛑 This is an owner command...*");
      _0x3c6de9(_0x8381ca);
    }
  });
  const _0x3d4b2f = {
    pattern: "request",
    react: '🔖',
    desc: "Contact to bot owner",
    category: "main",
    use: ".rsquest2",
    filename: __filename
  };
  cmd(_0x3d4b2f, async (_0x4f12b6, _0x5b1649, _0x247885, {
    from: _0x5bcf77,
    prefix: _0x5c5354,
    l: _0x13a4ce,
    quoted: _0x238e3f,
    body: _0x2a75d3,
    isCmd: _0x4f7a9a,
    command: _0x104a96,
    args: _0x2e8a76,
    q: _0x52dd80,
    isGroup: _0x505343,
    sender: _0x3ec2b7,
    senderNumber: _0x4e87be,
    botNumber2: _0x166059,
    botNumber: _0x587b63,
    pushname: _0x2284c0,
    isMe: _0x32a8d6,
    isOwner: _0x38c4b8,
    groupMetadata: _0x20f4cc,
    groupName: _0x580450,
    participants: _0x3c0876,
    groupAdmins: _0x4244af,
    isBotAdmins: _0x4c6174,
    isAdmins: _0x4738f1,
    reply: _0x7d449b
  }) => {
    function _0x27e497(_0x36b1f3, _0x5430fa, _0x2b8306, _0x188690, _0x3c19a4) {
      return _0x18a7(_0x3c19a4 - 0xe5 + 0x2d2, _0x36b1f3);
    }
    function _0x4ccfee(_0x149902, _0x388e32, _0x5bba56, _0x294d89, _0x37a088) {
      return _0x18a7(_0x37a088 + 0x1eb + 0x14a, _0x149902);
    }
    function _0xe11873(_0x2d47d4, _0x2c7e56, _0x382b9c, _0x290ee2, _0x2d799e) {
      return _0x18a7(_0x382b9c + 0x193 - 0x2b5, _0x2c7e56);
    }
    function _0x284ef1(_0x587967, _0x2fee88, _0x5bd21d, _0x16497a, _0x134a05) {
      return _0x18a7(_0x134a05 + 0x619 - 0x2b5, _0x587967);
    }
    const _0x32f32f = {
      'aWgSR': function (_0x25c5b4, _0x50c983) {
        return _0x25c5b4 + _0x50c983;
      },
      'FTcjG': "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      'EDUKK': "《 ████▒▒▒▒▒▒▒▒》30%",
      'QXueS': "《 ███████▒▒▒▒▒》50%",
      'eWuwJ': "《 ██████████▒▒》80%",
      'TRlgz': "《 ████████████》100%",
      'UtIbG': "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️...",
      'FSpov': "ꜱᴇɴᴅɪɴɢ...",
      'pgwmv': function (_0x472b81, _0x393881) {
        return _0x472b81 < _0x393881;
      },
      'afDaq': "This report has already been forwarded to the owner. Please wait for a response.",
      'OYoqj': function (_0x2f9271, _0x3f98b2) {
        return _0x2f9271 + _0x3f98b2;
      },
      'pBoNL': "@s.whatsapp.net",
      'zBZNI': "Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.",
      'AeHsz': function (_0x50bd30, _0x476aa7) {
        return _0x50bd30(_0x476aa7);
      },
      'qAAtB': "*Error !!*",
      'xWbPT': function (_0x46d5a9, _0x2a454f) {
        return _0x46d5a9(_0x2a454f);
      }
    };
    function _0x4f25cd(_0x2301e3, _0x1d9c94, _0x2b50fd, _0x3e6bdd, _0x3106c3) {
      return _0x18a7(_0x3e6bdd + 0x49e - 0x22f, _0x2301e3);
    }
    try {
      if (!_0x52dd80) {
        return _0x5b1649.reply("Example: " + (_0x5c5354 + _0x104a96) + " hi X-BYTE play command is not working");
      }
      var _0xa6a36e = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
      const _0x3ed4a7 = {
        text: "ꜱᴇɴᴅɪɴɢ..."
      };
      let {
        key: _0x5efeba
      } = await _0x4f12b6.sendMessage(_0x5bcf77, _0x3ed4a7);
      for (let _0x738597 = 0; _0x738597 < _0xa6a36e.length; _0x738597++) {
        const _0x2bdfa3 = {
          text: _0xa6a36e[_0x738597],
          edit: _0x5efeba
        };
        await _0x4f12b6.sendMessage(_0x5bcf77, _0x2bdfa3);
      }
      const _0x47aae4 = _0x5b1649.key.id;
      if (reportedMessages[_0x47aae4]) {
        return _0x5b1649.reply("This report has already been forwarded to the owner. Please wait for a response.");
      }
      reportedMessages[_0x47aae4] = true;
      const _0x3d22cb = "\n\n*User*: @" + _0x247885.sender.split('@')[0] + "\n*Request/Bug*: " + _0x52dd80;
      const _0x44a63c = "\n\n*Hi " + _0x2284c0 + ", your request has been forwarded to my Owners.*\n*Please wait...*";
      _0x4f12b6.sendMessage("923072380380@s.whatsapp.net", {
        'text': "*| REQUEST/BUG |*" + _0x3d22cb,
        'mentions': [_0x5b1649.sender]
      }, {
        'quoted': _0x5b1649
      });
      _0x5b1649.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");
      const _0x3f12b4 = {
        text: '✅',
        key: _0x5b1649.key
      };
      const _0x50ba8c = {
        react: _0x3f12b4
      };
      await _0x4f12b6.sendMessage(_0x5bcf77, _0x50ba8c);
    } catch (_0x399517) {
      _0x7d449b("*Error !!*");
      _0x13a4ce(_0x399517);
    }
  });
  const _0x152b98 = {
    pattern: "request2",
    react: '⚙️',
    desc: "Contact to bot owner",
    category: "main",
    use: ".request",
    filename: __filename
  };
  cmd(_0x152b98, async (_0x53b569, _0x6d4a1e, _0x56cff2, {
    from: _0x325dd6,
    l: _0x5dff14,
    prefix: _0x31f521,
    quoted: _0x4a0279,
    body: _0x4ee614,
    isCmd: _0x9b9c86,
    command: _0x161c74,
    args: _0x1b7a9c,
    q: _0x2c99fc,
    isGroup: _0x29749d,
    sender: _0x2095d9,
    senderNumber: _0x22d5bb,
    botNumber2: _0xfb7dad,
    botNumber: _0x3ff708,
    pushname: _0x1e43a4,
    isMe: _0x3de7e6,
    isOwner: _0x2907c9,
    groupMetadata: _0x534a88,
    groupName: _0x1ae070,
    participants: _0x47251c,
    groupAdmins: _0x4b8fef,
    isBotAdmins: _0x58bd72,
    isAdmins: _0x16378f,
    reply: _0x26ee77
  }) => {
    function _0x5c619d(_0x31d498, _0x5e6076, _0x4a8f02, _0x45c86a, _0x48759a) {
      return _0x18a7(_0x48759a + 0x3fd - 0x22f, _0x45c86a);
    }
    function _0x241f1c(_0x371b86, _0xdde3d, _0x85d6b8, _0x2dc8b1, _0x14a070) {
      return _0x18a7(_0xdde3d + 0xdc + 0x1a0, _0x14a070);
    }
    function _0x328a0f(_0x15e7d9, _0x534082, _0x442f2f, _0xf19dd4, _0x596fe3) {
      return _0x18a7(_0x596fe3 - 0x36b + 0x2d2, _0xf19dd4);
    }
    function _0x202b9f(_0x4d3fed, _0x27151f, _0x4580f6, _0x145434, _0x4fdc0f) {
      return _0x18a7(_0x145434 + 0x3a7 - 0x2b5, _0x4580f6);
    }
    function _0x26a682(_0x7d6331, _0x37e7e1, _0x53089b, _0x13fcca, _0x3e164b) {
      return _0x18a7(_0x37e7e1 - 0x7a + 0x1a0, _0x3e164b);
    }
    const _0xc26e45 = {
      'onanB': "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      'sqtuH': "《 ████▒▒▒▒▒▒▒▒》30%",
      'khmtZ': "《 ███████▒▒▒▒▒》50%",
      'nnMQv': "《 ██████████▒▒》80%",
      'rXpmh': "《 ████████████》100%",
      'tNPgB': "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️...",
      'OZGjv': "ꜱᴇɴᴅɪɴɢ...",
      'QpZWn': function (_0x4045a8, _0x48d238) {
        return _0x4045a8 < _0x48d238;
      },
      'akYFG': "blank",
      'YliMD': function (_0x47a240, _0x3334af) {
        return _0x47a240(_0x3334af);
      },
      'yuTHI': "🛑 This is an owner command...",
      'DZHqa': function (_0x5ce50d, _0xb66bc0) {
        return _0x5ce50d(_0xb66bc0);
      }
    };
    try {
      let _0x1c451f = "Enter The Bug Example\n\n" + _0x161c74 + " < YOUR REPORT MASSAGE > ";
      var _0x535b6e = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
      const _0x43ada4 = {
        text: "ꜱᴇɴᴅɪɴɢ..."
      };
      let {
        key: _0x4f3946
      } = await _0x53b569.sendMessage(_0x325dd6, _0x43ada4);
      for (let _0x22d677 = 0; _0x22d677 < _0x535b6e.length; _0x22d677++) {
        const _0x5a84bd = {
          text: _0x535b6e[_0x22d677],
          edit: _0x4f3946
        };
        await _0x53b569.sendMessage(_0x325dd6, _0x5a84bd);
      }
      await _0x53b569.sendMessage("923072380380@s.whatsapp.net", {
        'text': "*Bug Report From:* wa.me/" + _0x6d4a1e.sender.split('@')[0] + "\n\n*Bug Report*\n" + (_0x2c99fc ? _0x2c99fc : "blank")
      });
      const _0x53ee07 = await _0x53b569.sendMessage("*『 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 』*");
      const _0x22b218 = {
        text: '✅',
        key: _0x6d4a1e.key
      };
      const _0x24bf13 = {
        react: _0x22b218
      };
      await _0x53b569.sendMessage(_0x325dd6, _0x24bf13);
    } catch (_0x31f8aa) {
      _0x26ee77("🛑 This is an owner command...");
      _0x5dff14(_0x31f8aa);
    }
  });
function _0x4de4(_0x554ae2, _0x52dfe8) {
    const _0x296795 = _0x1399();
    _0x4de4 = function (_0xfd9303, _0x47a632) {
      _0xfd9303 = _0xfd9303 - 269;
      let _0x345dc3 = _0x296795[_0xfd9303];
      if (_0x4de4.CayVnk === undefined) {
        var _0xdaabe6 = function (_0x2c0c41) {
          let _0x360635 = '';
          let _0x12bab8 = '';
          let _0x16cee8 = 0;
          let _0x278f70;
          let _0xbd1c58;
          for (let _0x4abeaf = 0; _0xbd1c58 = _0x2c0c41.charAt(_0x4abeaf++); ~_0xbd1c58 && (_0x278f70 = _0x16cee8 % 4 ? _0x278f70 * 64 + _0xbd1c58 : _0xbd1c58, _0x16cee8++ % 4) ? _0x360635 += String.fromCharCode(255 & _0x278f70 >> (-2 * _0x16cee8 & 6)) : 0) {
            _0xbd1c58 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0xbd1c58);
          }
          let _0x4a92ee = 0;
          for (let _0x3dad37 = _0x360635.length; _0x4a92ee < _0x3dad37; _0x4a92ee++) {
            _0x12bab8 += '%' + ('00' + _0x360635.charCodeAt(_0x4a92ee).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x12bab8);
        };
        const _0x54d1ab = function (_0x51c61b, _0x3b499d) {
          let _0x138826 = [];
          let _0x563d05 = 0;
          let _0x34aeae;
          let _0x5d3ef5 = '';
          _0x51c61b = _0xdaabe6(_0x51c61b);
          let _0x5bde9b;
          for (_0x5bde9b = 0; _0x5bde9b < 256; _0x5bde9b++) {
            _0x138826[_0x5bde9b] = _0x5bde9b;
          }
          for (_0x5bde9b = 0; _0x5bde9b < 256; _0x5bde9b++) {
            _0x563d05 = (_0x563d05 + _0x138826[_0x5bde9b] + _0x3b499d.charCodeAt(_0x5bde9b % _0x3b499d.length)) % 256;
            _0x34aeae = _0x138826[_0x5bde9b];
            _0x138826[_0x5bde9b] = _0x138826[_0x563d05];
            _0x138826[_0x563d05] = _0x34aeae;
          }
          _0x5bde9b = 0;
          _0x563d05 = 0;
          for (let _0x3d3bd8 = 0; _0x3d3bd8 < _0x51c61b.length; _0x3d3bd8++) {
            _0x5bde9b = (_0x5bde9b + 1) % 256;
            _0x563d05 = (_0x563d05 + _0x138826[_0x5bde9b]) % 256;
            _0x34aeae = _0x138826[_0x5bde9b];
            _0x138826[_0x5bde9b] = _0x138826[_0x563d05];
            _0x138826[_0x563d05] = _0x34aeae;
            _0x5d3ef5 += String.fromCharCode(_0x51c61b.charCodeAt(_0x3d3bd8) ^ _0x138826[(_0x138826[_0x5bde9b] + _0x138826[_0x563d05]) % 256]);
          }
          return _0x5d3ef5;
        };
        _0x4de4.uYBCrd = _0x54d1ab;
        _0x554ae2 = arguments;
        _0x4de4.CayVnk = true;
      }
      const _0x107a24 = _0x296795[0];
      const _0x35e094 = _0xfd9303 + _0x107a24;
      const _0x26a811 = _0x554ae2[_0x35e094];
      if (!_0x26a811) {
        if (_0x4de4.fyeyJX === undefined) {
          _0x4de4.fyeyJX = true;
        }
        _0x345dc3 = _0x4de4.uYBCrd(_0x345dc3, _0x47a632);
        _0x554ae2[_0x35e094] = _0x345dc3;
      } else {
        _0x345dc3 = _0x26a811;
      }
      return _0x345dc3;
    };
    return _0x4de4(_0x554ae2, _0x52dfe8);
  }
  (function (_0x56e208, _0x9eb5ba) {
    const _0x18c6bf = _0x56e208();
    while (true) {
      try {
        const _0x45e67a = -parseInt(_0x4de4(301, '2c[e')) / 1 + -parseInt(_0x4de4(463, 'UzW5')) / 2 + parseInt(_0x4de4(481, '@geX')) / 3 + -parseInt(_0x4de4(381, 'A8rb')) / 4 + parseInt(_0x4de4(523, '4GtI')) / 5 + parseInt(_0x4de4(529, 'Q6TN')) / 6 + -parseInt(_0x4de4(371, 'wV31')) / 7 * (parseInt(_0x4de4(441, '5X9e')) / 8);
        if (_0x45e67a === _0x9eb5ba) {
          break;
        } else {
          _0x18c6bf.push(_0x18c6bf.shift());
        }
      } catch (_0x2909b5) {
        _0x18c6bf.push(_0x18c6bf.shift());
      }
    }
  })(_0x1399, 299040);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  function _0x232d90(_0x99f6f0, _0x1876f9, _0xdfbe03, _0x239192, _0x189d58) {
    return _0x4de4(_0x99f6f0 - 0x3d2, _0xdfbe03);
  }
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
  var imgmsg = '';
  function _0x433216(_0x50a6a3, _0x398d99, _0x58c9de, _0x1ba8fb, _0x862538) {
    return _0x4de4(_0x398d99 + 0x15, _0x58c9de);
  }
  if (config.LANG === 'URDU') {
    imgmsg = "*Anime a kaam batao..!*";
  } else {
    imgmsg = "*Give me a anime name !*";
  }
  var descgs = '';
  if (config.LANG === 'URDU') {
    descgs = "Iss say ap details mein, Anime ke name say details dhek sakty hain..";
  } else {
    descgs = "It gives details of given anime name.";
  }
  var cants = '';
  if (config.LANG === 'URDU') {
    cants = "Oyeeeeee, Mujhe Ye Anime nahi mila...";
  } else {
    cants = "I cant find this anime.";
  }
  function _0x1399() {
    const _0x583c6f = ['WPCsW4a', 'h0NdGMy', 'WRZdVfXKWOm', 'DhZdHG', 'W4iVW4jJiG', 'W7tcM0zpWQS', 'ifCRWOtdNG', 'DKz4cSk1WQBdG8oODSk7bmk3', 'BxJdMmo8dq', 'W4Xwg8kyhW', 'W4KjWOW', 'WRbToL/cIZVcN0OCFGVdMmkK', 'uc0IthS', 'FMZdHSocnG', 'sYTnW6dcPa', 'WOe0W4a', 'WRBdVvC', 'iI7cIZCpigq9WRb0W4NdHe0', 'aZPYW7m', 'WRhdRe1MWR8', 'W7H/pmkVgG', 'WPddPmow', 'W697jSkQ', 'wbHfW6ZcTq', 'WO8UW5n7ka', '4lsPWPBGT4lGT5hGT5e', 'AqD/W4ZcLa', 'W6xcQvrEWRO', '4lwl4lEi4lAr4lsb4lE6', 'W4vqWODpWPq', 'WQa+oSoMeG', 'h2KpDW', 'FWnQW44', 'o0VdU1z0', 'fguGWRu', 'vCkIivXy', 'fCocWOT0', 'WRNdKmkeWQ3cNq', 'W59bWOHVWQO', 'W5xdJZpdVMa4emkQBbT8wW', 'dCkPW7hdKte', 'vcmKvG', 'WQOSzCkXaG', 'W7bPmCokW5O', 'W6aSW6xdPSoP', 'WRtdLvVcVCor', '4lE04lEy4lEA4lsmW7i', 'ECoDrJddHW', 'W57dT08I', 'WQ8Jsmk3lW', 'WPNdQmkaWP8t', 'WQBdSvbLWRq', 'WPClW5XEWPC', 'WOSgW5Hl', 'rmknkbZcGG', 'W6XudqtdSq', 'ACkaWRpcKCoP', 'WPFcHv8', 'WPBcMCo6WPm', 'r0BcLMVdPG', 'B0j4W4BcJG', 'rCoHW4JdU8oJ', 'pmkTWQjAka', 'W5HwWP5dEa', 'yZ/cKYms', 'WP/cRCkpWPKq', 'wJjkW6RcSG', 'hMSoBSok', 'WOtdSsvmtW', 'n2NdUea', 'b8kcjuKz', 'W6/dNmk7CCoC', 'W4XhWPKAW53cSSk8WQ1cWOddMYK', 'umo8W4xdQSo4', 'WPBdSSosWRlcSq', 'W5/cV0LyWRe', 'W4umCmo4W6a', 'qdDhysq', 'xSkHW43dT8kf', '4lsK4lEd4lEJ4lsb4lEM', 'WQyuW5royG', 'Ax9GESok', 'zsFdOYZdMW', 'WQT7pmkIoG', 'qSoTBqVdSa', 'BtrNWQ8', 'xtTYW7BdOq', 'vSowWRtdTXu', 'WPZdSCkzW6a4', 'EmkzWQ7cJSoJ', 'W6pcPCosW4dcQW', 'smkQoe8', 'eSknicqz', 'W6S+oCoRhG', 'bSkHlvpcQmkrWRVcSIddSufhW74', 'W7JdQSoUz0C', 'kKCOuSoO', '4lAD4lwXW7u', 'uCkQBG', 'WO90W4rGkG', 'W4O6h8kpDW', 'BY5YWRFdUa', 'aSk1W7LCWPS', 'WQi/BbldMa', 'cX45Emo3', 'WORdTmk+WOGc', 'wIP4W6S', 'WRK+i8oRhq', 'WPJdUCktWPuj', 'W7xdR8oqW5hcPa', 'rf0yW5pcOG', '4lwA4ls14lw74ls2rW', 'cComWOj+fG', 'gXJcUa', 'WPNcLeZcVq', 'C8khW6zXba', 'W7ZdS8kgvCo2', 'W45fFmoUWRq', 'W7JdGCkzWPrl', 'DmkeWQBcMSoP', 'AwlcPe9P', 'ebxdUdy', 'WQeqEmkyfa', 'vI8Id3i', 'r8kclWFcHq', 'WRCFrWldOa', 'c1mewa4', 'WRnToLpcIdBcMNO+EIddUmkK', 'hIGvzCoF', 'gvGdusK', 'W6P2o8kQja', 'tSoqWQ8', 'cYbmWPu', 'W4ZcRSohW4tcRW', 'CICbz3u', 'WRWyACkJaW', 'uSk2B1dcSq', 'WQtcRSoaW6b2', 'd1Pn', 'WPizW4vo', 'WPG6o8oNea', 'x1ZdOCow', 'WPb/WOBcMCk5WRlcP8oiAmkzzLnV', 'W7JdGCkzWPng', 'W5tdHJxdS281BCk3qHDzzWu', 'W6LfgGldPa', 'W7BdL3ue', 'W4JdMs3cPJa', 'WPqEWOmxsq', 'zumIW7JdQa', 'a04f', 'W5uZW5VdGmoO', 'dGdcQSkdz8kGW4GBFConWRPu', 'vLZcSSoBpG', 'xw9VW7NcRW', 'W7JcP8ofgmk5', 'WO3dPmknWPKj', 'WOypW6BdNZG', 'ucfCW4RcKG', 'kKdcQ3a', 'WO5LFCkIwq', 'W6tcU1nE', 'W5ZdTmkDxCo3', 'WONcNeZcSmoA', 'bI3dJ2dcLa', 'xK3dS8oCmW', 'jCoLWPRcQmo9', 'FmkeWQi', 'xKRdOCouoa', 'dCkdW7e', 'o+c2P+c0Lsjz', 'W6qvWPlWTlI5', 'W6ldL3urdG', 'W7ldTuePWRa', 'hSoHW6TfWOy', 'BmogrKuv', 'xCkHkvzy', 'Fbb/W4ldJq', 'WRZcQSoEWQu', 'gCkIWOtcTa', 'jG3dQZ3dMW', 'kHOK', 'WONcHxS', 'ESkad294', 'W5NdVmkBwq', 'hM0pEmoI', 'AZbK', 'j8kIqMKZ', '4lAG4lAWtoc0GUc1Pa', 'WOBdRmkpWPG', 'lG7dVGxdIW', 'WOKdWPSwaa', 'WRaPW7XyCa', 'xcPHW7ZdUW', 'etpcUmoMcW', 'W6JcQ8o7BeK', 'mbqKvSoP', 'WPSEW5Xp', 'WO7dSSok', 'W4jdDCoY', 'wCoGnG8s', 'dmoHWP3cUG', 'WOdcT8oDWQhcVW', 'WQONr8k3bG', 'W7/cQ8oUAKK', 'jNWJCG', 'qcmJxxa', 'WRJdS3mxba', 'WOhdVSoaWRdcVG', 'W6v3iSkvnq', 'W7RcKL9sWQG', 'WP4+W4LRcG', 'FSkyjuynWOdcTq', 'WR4buvBcP8kamSkJW6NdRmoUD8ka', 'FmkhWQ7cKmoP', 'WP3dJSkQECob', 'WR0RW57dTqi', 'WOdcT8oaWQxcVG', 'WOhdTSohWQe', 'hIGaCSog', 'WOS9o8oJea', 'smkTWO7cSSk2', 'nuWXW5ZcHq', 'WOtdVZ9z', 'rmodib/cJG', '4lwS4lsG4lsZW5Wg', 'WOSwW5XcWOe', 'W43cUSoCW4tcRW', 'WPZcM1hcSCoA', 'WR/cQSoFWP97', 'W7PUWOy', 'qZKLrW', 'ugrcW5lcVq', 'W4hdT2P7', 'WR4Pymo+zSoddd/dR8k6oSku', 'WRZdL28mbG', 'WOVdUZi', 'WP9wW5TgEG', '4lEO4ls1W6ZGTO/GTPC', 'WOFcLwtcIWG', 'W6HUm8kuiG', 'WOWlW5PhWOO', 'm8k+aa', 'W77dKSkIDCos', 'W7lcPCogWQ1W', 'DCk7yfXu', 'WQ4tyCk8bq', 'j8kLhM0Y', 'AmoXWP7cUvO', 'W65Nk8kHWRq', 'WPTFW5XgWO0', 'WROpza', 'CKr9cSkXWQFcSSoguSk2kCkXfa', 'mmkJWQzslG', 'WQuRqmkQ', 'WPiAW6ldGZG', 'DSkmWR4', 'Dx7dHMm', 'vwSyW54', 'zdHYWRm', 'WOTNWPG', 'vvWOxSo+CLW', 'xszUW7JdOW', 'WQZdPmkxWPLh', 'BdjUWQldUG', 'rsP5', 'ySoIWONdGdG', 'ESkaWRhcMmoI', 'gKxdIqhdUG', 'zSo3WO7dKeO', '4lEHB+c2R+c1JmkV', 'CrGy', 'fSkXWPZcQmk1y8kGBXVcHSkYW5K', 'W6Lrhai', 'Fh7cIxLC', 'WQCWma', 'WPv0WOBcTKa', 'BmogrKSs', 'WOtdUGHxyW', 'WP4wWPOt', 'uSogAGhdSG', 'g1ddV0xdIa', 'W5tdSmkox8o2'];
    _0x1399 = function () {
      return _0x583c6f;
    };
    return _0x1399();
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x47a632 = {
      pattern: "anime",
      alias: ["animesearch", "sanime"],
      react: '⛩️',
      desc: descgs,
      category: "search",
      use: ".anime astro",
      filename: __filename
    };
    cmd(_0x47a632, async (_0x158dd7, _0x1542d3, _0x5b1fe7, {
      from: _0x4c4974,
      l: _0x33a9a9,
      prefix: _0x2f6888,
      quoted: _0xe38bb0,
      body: _0x211620,
      isCmd: _0x1ce9ef,
      command: _0x299b2a,
      args: _0x492e05,
      q: _0x3e8632,
      isGroup: _0x5b4a76,
      sender: _0x4a602d,
      senderNumber: _0x5e5c6c,
      botNumber2: _0x439e54,
      botNumber: _0x266233,
      pushname: _0x26c576,
      isMe: _0xef1d5f,
      isOwner: _0x4143a7,
      groupMetadata: _0x232cf0,
      groupName: _0x58ba40,
      participants: _0x361817,
      groupAdmins: _0x41b504,
      isBotAdmins: _0x1312ee,
      isAdmins: _0x2c19b5,
      reply: _0x2c8cd4
    }) => {
      try {
        if (!_0x3e8632) {
          return _0x2c8cd4("Give a anime name");
        }
        let _0xe4ef3c = await fetchJson("https://api.jikan.moe/v4/anime?q=" + _0x3e8632);
        const _0x20d2d6 = [];
        for (let _0x5a5560 of _0xe4ef3c.data) {
          _0x20d2d6.push({
            'header': _0x5a5560 + 1,
            'title': "Anime number",
            'description': '' + _0x5a5560.title,
            'id': _0x2f6888 + "animeeg " + _0x5a5560.mal_id
          });
        }
        const _0x48d292 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x5ddf68 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x48d292)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x20d2d6
            }]
          })
        }];
        const _0x55060e = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "X-BYTE ANIME SEARCH\n\n\t > ANIME SEARCHER 🚶"
        };
        const _0x2f5944 = {
          quoted: _0x1542d3
        };
        return await _0x158dd7.sendButtonMessage(_0x4c4974, _0x5ddf68, _0x5b1fe7, _0x55060e, _0x2f5944);
      } catch (_0x382106) {
        _0x2c8cd4("*Error !!*");
        console.log(_0x382106);
      }
    });
  }
  const _0x16cee8 = {
    pattern: "animeeg",
    dontAddCommandList: true
  };
  function _0x13b85c(_0x435f23, _0x2d2857, _0x520bd4, _0x2f4b72, _0x1d5325) {
    return _0x4de4(_0x2f4b72 - 0x385, _0x1d5325);
  }
  function _0x452a5c(_0x572004, _0x37c745, _0xe7e1f6, _0x2b84be, _0x19a587) {
    return _0x4de4(_0x37c745 - 0x129, _0xe7e1f6);
  }
  function _0x40e826(_0x4fc257, _0x1198c0, _0x2f85d9, _0x393212, _0x25b3da) {
    return _0x4de4(_0x1198c0 + 0x6a, _0x4fc257);
  }
  _0x16cee8.filename = __filename;
  cmd(_0x16cee8, async (_0x728137, _0x355903, _0x265a7e, {
    from: _0x1cfabe,
    l: _0x141fb6,
    quoted: _0x551e9f,
    body: _0xdd6b92,
    isCmd: _0x406418,
    command: _0x54eec3,
    args: _0x736181,
    q: _0x925ca2,
    isGroup: _0x9cfe4c,
    sender: _0x47328,
    senderNumber: _0x1f539d,
    botNumber2: _0xb8d112,
    botNumber: _0x260064,
    pushname: _0x5e37a4,
    isMe: _0x54c675,
    isOwner: _0x1d8a32,
    groupMetadata: _0x46cb2c,
    groupName: _0x518951,
    participants: _0x1ac1d1,
    groupAdmins: _0x2d08db,
    isBotAdmins: _0x34599b,
    isAdmins: _0x21a095,
    reply: _0x465366
  }) => {
    try {
      const _0x5f7db5 = {
        text: '🔃',
        key: _0x355903.key
      };
      const _0x358d90 = {
        react: _0x5f7db5
      };
      await _0x728137.sendMessage(_0x1cfabe, _0x358d90);
      res = await fetchJson("https://api.jikan.moe/v4/anime/" + _0x925ca2);
      let _0x3bc561 = "*TITLE:* *" + res.data.title + "*\n*ENGLISH:* *" + res.data.title_english + "*\n*JAPANESE:* *" + res.data.title_japanese + "*\n*TYPE ANIME:* *" + res.data.type + "*\n*ADAPTER:* *" + res.data.source + "*\n*TOTAL EPISODE:* *" + res.data.episodes + "*\n*STATUS:* *" + res.data.status + "*\n*ONGOING:* *" + (res.data.airing ? 'Ya' : "DRIS") + "*\n*AIRED:* *" + res.data.aired.string + "*\n*DURATION:* *" + res.data.duration + "*\n*RATING:* *" + res.data.rating + "*\n*SCORE:* *" + res.data.score + "*\n*RANK:* *" + res.data.rank + "*\n*STUDIO:* *" + res.data.studios[0].name + "* ";
      const _0x15835a = {
        url: res.data.images.jpg.image_url
      };
      const _0x540015 = {
        image: _0x15835a,
        caption: _0x3bc561
      };
      const _0x4e5aaa = {
        quoted: _0x355903
      };
      _0x728137.sendMessage(_0x1cfabe, _0x540015, _0x4e5aaa)["catch"](_0xcb2846 => _0x465366(''));
      const _0x56eaa8 = {
        text: '✔',
        key: _0x355903.key
      };
      const _0x586b8d = {
        react: _0x56eaa8
      };
      await _0x728137.sendMessage(_0x1cfabe, _0x586b8d);
    } catch (_0x490897) {
      _0x465366(cants);
      _0x141fb6(_0x490897);
    }
  });
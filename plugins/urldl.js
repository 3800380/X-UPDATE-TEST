(function (_0x1e89c8, _0x2d1521) {
    const _0x5eae4d = _0x1e89c8();
    while (true) {
      try {
        const _0x37976e = parseInt(_0x1a27(505, '2]^s')) / 1 + parseInt(_0x1a27(1172, '2TM2')) / 2 + parseInt(_0x1a27(719, 'Ghev')) / 3 * (-parseInt(_0x1a27(759, '!kKw')) / 4) + -parseInt(_0x1a27(737, 'mgHi')) / 5 + parseInt(_0x1a27(940, '6]Et')) / 6 + parseInt(_0x1a27(1082, 'dgOj')) / 7 * (-parseInt(_0x1a27(884, 'hSVw')) / 8) + -parseInt(_0x1a27(1145, 'D3It')) / 9;
        if (_0x37976e === _0x2d1521) {
          break;
        } else {
          _0x5eae4d.push(_0x5eae4d.shift());
        }
      } catch (_0x3f6696) {
        _0x5eae4d.push(_0x5eae4d.shift());
      }
    }
  })(_0x26bb, 150736);
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
  const {
    Download
  } = require("nima-threads-dl-api");
  const axios = require("axios");
  const fg = require("api-dylux");
  function _0x2f1ec0(_0x3a89ea, _0x17af52, _0x5b9cb3, _0x47f8ca, _0x343bf8) {
    return _0x1a27(_0x17af52 + 0x396, _0x5b9cb3);
  }
  function _0x1a27(_0x2c8b55, _0x494d0f) {
    const _0x7593ed = _0x26bb();
    _0x1a27 = function (_0x447e8e, _0x4be23a) {
      _0x447e8e = _0x447e8e - 441;
      let _0x4d09db = _0x7593ed[_0x447e8e];
      if (_0x1a27.AVlYhV === undefined) {
        var _0x424142 = function (_0x3cc66e) {
          let _0x339679 = '';
          let _0x55a6b7 = '';
          let _0x5566d3 = 0;
          let _0x47599c;
          let _0x4737db;
          for (let _0x418efa = 0; _0x4737db = _0x3cc66e.charAt(_0x418efa++); ~_0x4737db && (_0x47599c = _0x5566d3 % 4 ? _0x47599c * 64 + _0x4737db : _0x4737db, _0x5566d3++ % 4) ? _0x339679 += String.fromCharCode(255 & _0x47599c >> (-2 * _0x5566d3 & 6)) : 0) {
            _0x4737db = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x4737db);
          }
          let _0x3b613e = 0;
          for (let _0x5cd912 = _0x339679.length; _0x3b613e < _0x5cd912; _0x3b613e++) {
            _0x55a6b7 += '%' + ('00' + _0x339679.charCodeAt(_0x3b613e).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x55a6b7);
        };
        const _0x5806c6 = function (_0x5efd62, _0x450474) {
          let _0x208940 = [];
          let _0xac02a3 = 0;
          let _0x5824f1;
          let _0x334b92 = '';
          _0x5efd62 = _0x424142(_0x5efd62);
          let _0x26a5ce;
          for (_0x26a5ce = 0; _0x26a5ce < 256; _0x26a5ce++) {
            _0x208940[_0x26a5ce] = _0x26a5ce;
          }
          for (_0x26a5ce = 0; _0x26a5ce < 256; _0x26a5ce++) {
            _0xac02a3 = (_0xac02a3 + _0x208940[_0x26a5ce] + _0x450474.charCodeAt(_0x26a5ce % _0x450474.length)) % 256;
            _0x5824f1 = _0x208940[_0x26a5ce];
            _0x208940[_0x26a5ce] = _0x208940[_0xac02a3];
            _0x208940[_0xac02a3] = _0x5824f1;
          }
          _0x26a5ce = 0;
          _0xac02a3 = 0;
          for (let _0x5361f2 = 0; _0x5361f2 < _0x5efd62.length; _0x5361f2++) {
            _0x26a5ce = (_0x26a5ce + 1) % 256;
            _0xac02a3 = (_0xac02a3 + _0x208940[_0x26a5ce]) % 256;
            _0x5824f1 = _0x208940[_0x26a5ce];
            _0x208940[_0x26a5ce] = _0x208940[_0xac02a3];
            _0x208940[_0xac02a3] = _0x5824f1;
            _0x334b92 += String.fromCharCode(_0x5efd62.charCodeAt(_0x5361f2) ^ _0x208940[(_0x208940[_0x26a5ce] + _0x208940[_0xac02a3]) % 256]);
          }
          return _0x334b92;
        };
        _0x1a27.wXyHtR = _0x5806c6;
        _0x2c8b55 = arguments;
        _0x1a27.AVlYhV = true;
      }
      const _0x3831b6 = _0x7593ed[0];
      const _0x21f1c9 = _0x447e8e + _0x3831b6;
      const _0xbb4cbc = _0x2c8b55[_0x21f1c9];
      if (!_0xbb4cbc) {
        if (_0x1a27.AtQADt === undefined) {
          _0x1a27.AtQADt = true;
        }
        _0x4d09db = _0x1a27.wXyHtR(_0x4d09db, _0x4be23a);
        _0x2c8b55[_0x21f1c9] = _0x4d09db;
      } else {
        _0x4d09db = _0xbb4cbc;
      }
      return _0x4d09db;
    };
    return _0x1a27(_0x2c8b55, _0x494d0f);
  }
  const {
    mediafireDl
  } = require("mfiredlcore-vihangayt");
  const {
    lyrics,
    lyricsv2
  } = require("@bochilteam/scraper");
  const _twitterapi = _0x4ef732 => "https://info.tweeload.site/status/" + _0x4ef732 + ".json";
  const getAuthorization = async () => {
    const {
      data: _0x5618c6
    } = await axios["default"].get("https://pastebin.com/raw/SnCfd4ru");
    return _0x5618c6;
  };
  function _0x323a37(_0x59b4ce, _0x151305, _0x20e4ca, _0x516363, _0x2afb1c) {
    return _0x1a27(_0x20e4ca - 0xf5, _0x59b4ce);
  }
  const TwitterDL = async _0x29132d => {
    return new Promise(async (_0x3b47cd, _0x5afe7f) => {
      const _0x1db91b = _0x29132d.match(/\/([\d]+)/);
      if (!_0x1db91b) {
        return _0x3b47cd({
          'status': "error",
          'message': tradutor.texto4
        });
      }
      const _0x549727 = await axios["default"]("https://info.tweeload.site/status/" + _0x1db91b[1] + ".json", {
        'method': "GET",
        'headers': {
          'Authorization': await getAuthorization(),
          'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
        }
      });
      if (_0x549727.data.code !== 200) {
        return _0x3b47cd({
          'status': "error",
          'message': tradutor.texto5
        });
      }
      const _0x534926 = {
        id: _0x549727.data.tweet.author.id,
        name: _0x549727.data.tweet.author.name,
        username: _0x549727.data.tweet.author.screen_name,
        avatar_url: _0x549727.data.tweet.author.avatar_url,
        banner_url: _0x549727.data.tweet.author.banner_url
      };
      let _0x5967d5 = [];
      let _0x53cb1d;
      if (_0x549727.data.tweet?.["media"]?.["videos"]) {
        _0x53cb1d = "video";
        _0x549727.data.tweet.media.videos.forEach(_0x1fcc8a => {
          const _0x1abeae = [];
          _0x1fcc8a.video_urls.forEach(_0x447ad7 => {
            _0x1abeae.push({
              'bitrate': _0x447ad7.bitrate,
              'content_type': _0x447ad7.content_type,
              'resolution': _0x447ad7.url.match(/([\d ]{2,5}[x][\d ]{2,5})/)[0],
              'url': _0x447ad7.url
            });
          });
          if (_0x1abeae.length !== 0) {
            _0x5967d5.push({
              'type': _0x1fcc8a.type,
              'duration': _0x1fcc8a.duration,
              'thumbnail_url': _0x1fcc8a.thumbnail_url,
              'result': _0x1fcc8a.type === "video" ? _0x1abeae : _0x1fcc8a.url
            });
          }
        });
      } else {
        _0x53cb1d = "photo";
        _0x549727.data.tweet.media.photos.forEach(_0x1e0f19 => {
          _0x5967d5.push(_0x1e0f19);
        });
      }
      _0x3b47cd({
        'status': "success",
        'result': {
          'id': _0x549727.data.tweet.id,
          'caption': _0x549727.data.tweet.text,
          'created_at': _0x549727.data.tweet.created_at,
          'created_timestamp': _0x549727.data.tweet.created_timestamp,
          'replies': _0x549727.data.tweet.replies,
          'retweets': _0x549727.data.tweet.retweets,
          'likes': _0x549727.data.tweet.likes,
          'url': _0x549727.data.tweet.url,
          'possibly_sensitive': _0x549727.data.tweet.possibly_sensitive,
          'author': _0x534926,
          'type': _0x53cb1d,
          'media': _0x5967d5.length !== 0 ? _0x5967d5 : null
        }
      });
    });
  };
  const _0x4f5392 = {
    pattern: "gdrive",
    alias: ["googledrive'"],
    react: '📑',
    desc: "Download googledrive files.",
    category: "download",
    use: ".gdrive <googledrive link>",
    filename: __filename
  };
  cmd(_0x4f5392, async (_0x321e96, _0x3433d1, _0x102c8c, {
    from: _0x298449,
    l: _0x402516,
    quoted: _0x51f70a,
    body: _0x54b538,
    isCmd: _0x224d63,
    command: _0x3dc2ca,
    args: _0x28239f,
    q: _0x2ba26e,
    isGroup: _0x251ac1,
    sender: _0x320514,
    senderNumber: _0x1dcf58,
    botNumber2: _0x38de8b,
    botNumber: _0x4178f3,
    pushname: _0x4340d1,
    isMe: _0x1de438,
    isOwner: _0x3013ff,
    groupMetadata: _0x1b109a,
    groupName: _0x49a94c,
    participants: _0x3d05e1,
    groupAdmins: _0x4c6319,
    isBotAdmins: _0x15e257,
    isAdmins: _0x5b1ec4,
    reply: _0x309954
  }) => {
    try {
      if (!_0x2ba26e) {
        return await _0x309954("*Please give me googledrive url !!*");
      }
      let _0x13c0d3 = await fg.GDriveDl(_0x2ba26e);
      _0x309954("*📃 File name:*  " + _0x13c0d3.fileName + "\n*💈 File Size:* " + _0x13c0d3.fileSize + "\n*🕹️ File type:* " + _0x13c0d3.mimetype);
      const _0x2c5c1d = {
        url: _0x13c0d3.downloadUrl
      };
      const _0x1f69fa = {
        document: _0x2c5c1d,
        fileName: _0x13c0d3.fileName,
        mimetype: _0x13c0d3.mimetype
      };
      const _0x5e3c85 = {
        quoted: _0x3433d1
      };
      _0x321e96.sendMessage(_0x298449, _0x1f69fa, _0x5e3c85);
    } catch (_0x49eaf8) {
      _0x309954("*Error !!*");
      _0x402516(_0x49eaf8);
    }
  });
  function _0x549ad2(_0x4b7294, _0x3f3fac, _0x171a4d, _0x3603a, _0xae76d9) {
    return _0x1a27(_0x3603a - 0x15a, _0x4b7294);
  }
  const _0x2063e1 = {};
  function _0x18719d(_0x56d7e3, _0x5bfd3f, _0x474507, _0x42d081, _0xf3554a) {
    return _0x1a27(_0x5bfd3f + 0x2dd, _0x56d7e3);
  }
  _0x2063e1.pattern = "twitter";
  _0x2063e1.react = '💫';
  _0x2063e1.desc = "Download fb videos";
  _0x2063e1.category = "download";
  _0x2063e1.use = ".twitter <facebook video link>";
  function _0x1ac2f4(_0x5445a9, _0x514cf6, _0x1717fc, _0x312d61, _0x1b6ed6) {
    return _0x1a27(_0x5445a9 + 0x317, _0x514cf6);
  }
  _0x2063e1.filename = __filename;
  cmd(_0x2063e1, async (_0x33099a, _0xb558f0, _0x2db37, {
    from: _0x445507,
    l: _0x52b179,
    quoted: _0x883ca6,
    body: _0x3a9035,
    isCmd: _0x3887d9,
    command: _0x731724,
    args: _0x202516,
    q: _0x1947e2,
    isGroup: _0x1a1d4a,
    sender: _0x5f3511,
    senderNumber: _0x551f61,
    botNumber2: _0x2743ae,
    botNumber: _0x124125,
    pushname: _0x2530a7,
    isMe: _0x198d1f,
    isOwner: _0x4f1a92,
    groupMetadata: _0x2c64c9,
    groupName: _0x8eed1f,
    participants: _0x22419a,
    groupAdmins: _0x5877e6,
    isBotAdmins: _0x1bdcfb,
    isAdmins: _0xf62d3,
    reply: _0x14a6db
  }) => {
    try {
      if (!_0x1947e2) {
        return await _0x14a6db("*Please give me x url !!");
      }
      const _0x4b1e09 = await TwitterDL(_0x1947e2);
      if (_0x4b1e09.result.type == "video") {
        for (let _0x52bc2f = 0; _0x52bc2f < _0x4b1e09.result.media.length; _0x52bc2f++) {
          const _0x5bf08d = {
            url: _0x4b1e09.result.media[_0x52bc2f].result[0].url
          };
          const _0x42c0a5 = {
            video: _0x5bf08d,
            caption: "POWERED BY TALKDROVE"
          };
          const _0x152e3e = {
            quoted: _0xb558f0
          };
          await _0x33099a.sendMessage(_0x445507, _0x42c0a5, _0x152e3e);
        }
        ;
      } else {
        if (_0x4b1e09.result.type == "photo") {
          for (let _0xee00e6 = 0; _0xee00e6 < _0x4b1e09.result.media.length; _0xee00e6++) {
            const _0x3bc085 = {
              url: _0x4b1e09.result.media[_0xee00e6].url
            };
            const _0x10412e = {
              image: _0x3bc085,
              caption: "POWERED BY TALKDROVE"
            };
            const _0xf4e605 = {
              quoted: _0xb558f0
            };
            await _0x33099a.sendMessage(_0x445507, _0x10412e, _0xf4e605);
          }
        }
      }
    } catch (_0x561043) {
      console.log(_0x561043);
    }
  });
  function _0x26bb() {
    const _0x58b8e5 = ['WOSjuK7dQG', 'C0ueWPGB', 'WRW5DI5E', 'yX14amoZ', 'gIZdJhBcIq', 'WQG1DJnS', 'oSkBWR8', 'W7rgdeNdMG', 'WQXAWONdRrO', 'W58eW7pdLrm', 'WRVdOJK', 'WRrFW4Ch', 'DSoAWO1VAG', 'vgetnCoC', 'tg3dRmkGWOW', 'WQ3dRxC', 'zNKRnmou', 'lNG8W6a', '4BEv4BwjoUg1REg0Ra', 'CSoFW60BnmotlSk/W7jgzc0E', 'WR5JErLg', 'WQzVef/dKW', 'WR138yIvLU+6R8kDjW', 'WORdMXj+W58', 'WRaxffup', 'jmkYfSoyuq', 'WQb3f2hdRa', 'Ex7dQCkoWRy', 'WQ3dSHzDW48', 'xMSpf8oj', 'hGJdL3RcNa', 'WQbffGi', 'umk7g8kwWQVcIbjbhJRcNhBcIa', 'jSoQxa0', 'tmkrW7VcS8on', 'Aq8Qw8kV', 'W50uW7ldHtS', 'WR7dQhCEtW', 'W7jtk8ocpa', 'lXldHmkobW', 'mxFdL8ktW7i', 'WO3dOCkszua', 'W4dcHSkDamko', 'W5lcShhdMfK', 'cmoJr8kfW7G', 'mhFcHmkbW7C', 'W7tcR8ofW4JcVq', '4lwe4lsF4lss4lAk4lEE', 'm8o+sq', 'W7Pzc17dIW', 'iM08W7ez', 'WRPhW7ddSmkp', 'AXm0x8k1', 'FCoju8knlW', 'WQmAl0qj', 'WOqzwCoDWQ4', 'osRdNCoyWP8', 'WRNdOq0Jva', 'Ae0eWPWk', 'W7SEW5BcR0NdNCovmIpcUmkXWQq', 'hG1PcYO', 'kmo9W6X+dG', 'W7vbW7S', 'WR1BW4asWRO', 'D8k5W4u', 'WPVdRqdcIYS', 'W7LaoSkkDW', 'nKdcGmkUW74', 'nMxcKSkrW68', 'qaRdJexcMa', 'WOekxq', 'AY3dIxpcJG', 'W5tcNg0MfG', 'kSkDWR8mBq', 'tK/dJ8kHWQC', 'dCoKtCoo', 'ug8phSoy', 'tCkrW6BcOSoS', 'nSkyWR8', 'WPOgWRRcR8kt', 'WQldIY4IAa', 'WRqElG', 'i8k2pCoXFG', 'pCoYsa', 'gCovW6S', 'WR1BWOLmW7S', 'B8oCxSoVwa', 'WRLsW5zgWQ8', 'cb/cPSksW54', 'W6vocSoulW', 'W4tcMCkvrCkx', 'W4C1WRnBW48', 'W7hdISk6EqK', 'WOm5WR7cVq', 'a8kzC8oxWQ4', 'WRtdVWfBWRS', 'W5G8WRGpW4y', 'r0fHvgq', 'kCopBge', 'cbtdOSkvW5G', 'dCkaWReSWPW', 'yfaaWOK', 'ud3dIhW', 'W4pdMSkqDW4', 'smoADmkabG', 'lCoeW5jmbG', 'mCk6kCoGxW', 'W7P1luaD', 'gH/dVmopWPa', 'WRHaWO/dRXa', 'qc/dNNRcIq', 'W6NcUmkKaCkY', 'WRNcRCooW47cUW', 'xmofDCkjla', 'uSkvW6hcTmoO', 'ESkJW6y', 's1ytfCo5', 'WPFcNmkAmGC', '8jYlK3GqWPjC', 'iSkNW4bQWRm', 'uSoMW4TGWP4', 'lSkcWRDjDa', 'cCo+WOONW4S', 'ymkJW7m', 'W6mSAH8', 'W4ldLhuRoa', 'd8kfWR4MWOa', 'igFcOmkJW7m', 'E1qzimoW', 'DHZdNmolWPC', 'nmoYtW1G', 'W6pcQMOWpq', 'W6NcQ8ovW5xcUq', 'WOvblf3dMW', 'FSkCofnK', 'ESk/W5JdGM8', 'dt3dOSoVWPS', 'BHSOtSkY', 'lq4Wu8kO', 'iCobFW', 'bSkIvmkTW4y', 'WQDjWOtcUXG', 'xcZdJ2/cJG', '4lE/WRpGTP3GTRtGT4y', 'g8oEW7hdPmox', 'WRjzcuJdKq', 'W4lcL3C', 'cCoIv8okW6O', 'kCovW4TXEa', 'WQRdOIXgWPC', 'WQ3cThHFWOe', 'phaSW6qf', 'b8ocW74', 'WQRcThXk', 'emoKnXif', 'W54eW67dHdi', 'cmoRW6LFkW', 'FCkqW5FcMmoZ', 'eCoRsCoiW4m', 'WQBdOGHmW5S', 'WRZcShTEWOq', 'aX/cTSkqW5C', 'Er8GtG', 'WQjFm3xdQW', 'W5VcHSkuamkv', 'lsZdGConWP0', 'W4ddLCkyyIW', 'b8kXWP0QW4O', 'g8kbWRi9WP0', 'WR9keL8', 'WQ8GFW', 'zSkQW51L', 'W4tcMhCNnW', 'A8k0W7NdPG', 'W7hcI8kYvNG', 'W5dcVuhdKG', 'nSoFW6xdPSoo', 'c8kpF8kCW70', 'bmoIua', 'ptFdMSkzWP4', 'y8k7W4aPWRW', 'WQldSZ1bW5K', 'WRZdRd4wyG', 'FX8OvSkY', 'wCoTW45+WPPexLOZhSkjWQm', 'FSkFWObOEa', 'aXhcTCkF', 'rSkyW6H3WOK', 'EXm8x8k0', 'WROslW', 'W5/dGmkzaSof', 'WQ7dPZ1kW54', 'E33dN8kaWQa', 'nWbnWRaN', 'umkoWQTGEa', 'hSkly8kqW6W', '4lAC4lsO4lwd4lE7tW', 'kSkXWO8nWQS', 'imolFgLK', 'WOBdJtzFW70', 'f1jpF3q', 'WRtdPcuF', 'WRxdUqG', 'FCondCooFq', 'WR9FW5DgWRy', 'vmo/C8kkdW', 'kSo3W61y', 'vSoUkHSb', 'W7dcPvqhWQy', 'k8k8WPmTW4C', '8yQrMokbQpcuGiqc4BA54BsC4Bwz', 'WOpcVhLTWR8', 'aMm6W7iV', 'A8kNW4XrWQO', 'v0S7aZa', 'y8kaW59VWPK', 'CCoErSkAjG', 'WQvmW58', 'C8ohsCkAiG', 'W4lcVw8', 'pYlcLSkPW7m', 't2ZdUSkUWP8', 'WRPmW7BdSCkd', 'WQSQDwZdHq', 'yNtcNSkAW78', 'bb/cRmorW5O', 'm8oJASoJW7i', 'zmoFqSklmW', 'lSobDq', 'WQjBW4CrWR4', 'p0iZySkydc3dTq', 'kCobB25P', 'W79oW6ZdTSkC', 'WQZdS8k0tKC', 'WPLbmfZdVa', 'DvCaWP4B', 'd8ozBSoDW7S', 'xmkEWR3dPmol', 'D8kFWPC', 'WQycEfNdHa', 'y8kNW4bLWQS', 'uSkrWRm', 'WPJcIJ5Wya', 'cSkfWRqOWOe', 'xCojx8otyW', 'jSk6i8o9DG', 'WQRdScWjW4m', 'WQ7dKCk1sq', 'W5GyWPn3W6u', 'bhJcK1lcNa', 'l2S6W64y', 'bmkcE8ky', 'D8kvWPnVDq', 'f8oPlHi', 'hwFcHCkyW6G', 'EghdN8kAWQ4', 'z8kLW50', 'DuuDWO8', 'WP9rW4q1WOW', 'W6a2W6ZdGHi', 'icxcImkBW4e', 'W4mQWRLkW5q', 'WPHtWQRcHwW', 'W7ddKmkUu3q', 'W7Oxjfyi', 'sCkDW7hcSSoV', 'WP0jx2/dPq', 'WQJdJCkIrh4', 'W5dcRXxdN3q', 'W4pcM8kVeCkd', 'iCkWjSo6xa', 'WRbCnSoCoa', 'WOePWQZcTSkM', 'WQRcUMTEWOu', 'WOKktvBdRa', 'lCo9W6TxcW', 'oColyhrQ', 'BCkKW45OWR0', 'oeLVfmoO', 'eG9G', 'zCkUW50', 'y0elWPuk', 'yCkFWPD0Dq', 'jMdcNSkcW74', 'iSo3W7bCgW', 'WPJdIG4GCq', 'WO8Et8oqW6K', 'W4q4WRjlW60', 'amoVW6FdUSoo', 'krFdTCkjgq', 'W5/cG8oq4lE04lwG', 'W51UW5pdLSkS', 'W7ldQZ4uwq', 'WPSmxL3dRW', 'WRtdVafmW6e', 'W4tdV/cDKQpdImkp', '4lsg4lw44lwtmK4', 'WQrnW4anWQS', 'W45oW77dNJm', 'WRFdOmklux4', 'WP/dMCoijSkcWQ5Tvda', 'W4DYdmoZhG', 'WRFdISk1vxa', 'rfOMiCoK', 'mtZdISoqWPK', 'B3RdHmkgWR8', 'WOqbx1FcOq', 'W5KtW7e', 'W7pcOKrOW6u', 'W5m4WQ9m', '8jYyLa7dKHhdNW', 'xSkqW6BdT8o1', 'tmksW7NcM8oO', 'lmkSwCkPW4S', 'CYRdH8ocWQ9AmKeHq8oO', 'kdhdM8ouWPO', 'n8koWR1pyG', 'W7qoW7ZdSmkf', 'vSkyW7dcPmkU', 'W5/cSmkff8kw', 'ybm1x8kV', 'r3Wn', 'E8kMW6/dOf4', 'W7WWW5BdTc0', 'w8kvW6hcTG', 'WR7cS2jgWRi', 'gSkRWPm6W4O', 'ACk7WRzjyq', 'WPa4WQtcUSk8', 'WRbreuW', 'WQmjxKddJW', 'ntZdTmknoG', 'btVcQmkkWPq', 'W5xcQLtdH3W', 'W67cI04Acq', 'bbrIrw8', 'bt7dVSk4mW', 'e8ksWPfhrG', 'e8k7zmkyW4O', 'F8kWW77dSu8', 'xxWy', 'WRZcISkUrgm', 'W6JdH8kqFHW', 'x8kDDSk7aa', 'WRhdVGTDW7a', 'y8ojFhjS', 'dCoOr8oxW7a', 'W5xcNha3pa', 'bSovW6RdVmon', 'cCoUkrO+', 'WOC0mMOP', 'WRWOAqnh', 'Ab80vCk6', 'W5NcUvhdMNW', 'W57cJmkcamkF', 'WP8OCqnf', 'WRC9FW', 'ECkSWRzgvG', 'W6lWLAsyWRSXWOW', 'j8koWQK', 'WR5iW5GqWQW', 'W4dcJSkebSks', 'nCkQiSo8', 'ESopCSkNcG', 'eXv5xgi', 'WPKnsf3dOq', 'W7TnW7O', 'jSk0WQ8UjG', 'W4LoW67dHt8', 'i8o0W7DjcG', 'emoKjIiw', 'sMu1pmo1', 'ArSSwW', 'l8kcWRfjCW', 'WRFdVIqBwG', 'E8ktWPCHBW', 'W5VcISoqcmkF', 'bhuSW7KL', 'v2OieCoB', '4lsIaoc1N+c1Joc1Gq', 'WQjFW55gWQ0', 'emoLiHab', 'vh3dJSkhWOq', 'WOqmvCoDW5e', 'n8k6iSoHxa', 'nspdIW', 'mxNcNmkKW5a', 'W4dcQ1ddLMK', 'y8oCsSk7Ea', 'ESkBWOjOAW', 'Ax3dImklWQO', 'mSkEWRvyzq', 'uw8rbmou', 'zfmwWPOi', 'dCoXmXi', 'pCkYW6HscW', 'W5GwW7JdLcO', 'W63cVCoeW4tcQa', 'DCozW61IySkjtCkCW7q', 'WResp0a', 'WRxdO2KvW5e', 'bNFcRSkEW5O', 'cL15q2W', 'yMayaCoS', 'iCk6iSo3', '4lEd4lwGW4ulua', 'W4aoW7O', 'W7fjoSkqoG', 'bbhcTCkBW5W', 'W6vimW', 'd8kiWQKO', 'WRPxW4ehW7y', 'z08xWR4o', 'W4tdMCkjqIq', 'qsRdLW', 'x8kOW5JdS0C', 'bwZcJcJdIxRdU8ofbSkcWR4SW7a', 'e8kyWO9iwG', 'yCoysSoYua', 'qsVdNM3cKW', 'WQTjWPtdVHG', 'vMGjaCof', 'hSkBWRe', 'WQFdOY9iW4m', 'g8kPWRmMW5u', 'v3Os', 'W7SppmoFna', 'AXuQF8k6', 'WPj6W7KeWOi', 'l8o1W6XAaG', 'AbK9w8oO', 'WRpdSZPb', 'WQChj3Kt', 'lSopBgvI', 'WRTcha', 'WOiFwCoqW6O', 'W4upW7NcKsO', 'ACooxCo6vG', 'WQGwWQFdNmkqWRisiZK', 'ymkWW67cPv4', 'WRpdHCk2', '4lspFEc0Noc3Voc0Iq', 'W7NdNSkgAIa', 'WRXoW6KFWPW', 'B8kUW41TWRK', 'hmoefWe9', 'jh3dMCkaW6W', 'WPKgv8oHW4u', 'W53cMSkddq', 'odBdMCoxWPq', 'BSkUW4DJWQW', 'vemci8ox', 'W5xcLsK', 'WPtcV1tdNwK', 'm8kmWO1LFa', 'FghdH8knWPW', 'D8kEWQ1uxW', 'zmkIW4vHWPy', 'W5xcKSo2W4lcVW', 'W5/cUuW', 'WP1rW4KpWRC', 'bSkgEmkAW7O', 'WRBdTsW', 'WQldQYW', 'aSkZWPLKWO8', 'kGTAExy', 'fSoeEaXk', 'WP0ksuVdQq', 'lmoLWOzOWRe', 'WRBdUcuBsq', 'WRfyW5OuWR4', 'zmorv8kl', 'bmkVWQHfDG', 'gCk7WP0TW5S', 'hCocW6S', 'xmkvW6hcSSoN', 'WQnBf3VdPW', 'W5hcVvhdGd0', 'WOtcGWtcHKi', 'eWL8qJO', 'eGlcRq', 'W7LbW6/dQ8kb', 'WQhdPW1iW6y', 'aCovWRldR8ol', 'vY4vgmop', 'WRKwjuys', 'W7uhi1md', 'pZBdGmonWP0', 'WQZcQ0uiWR8', 'W71Fo8ozpa', 'W4lcJSkha8k2', 'ACoWBCkBja', 'WQuMrSoPW5W', 'WR/cVSkCWPlcRW', 'vtZdId/dGq', 'BeubWPio', 'WOy+WQe', 'WRKAhmoylW', 'W5VcVve', '4lA9WOJGTPBGTllGTOm', 'WQ7dRYrm', 'jmkhWPqfW6C', 'WRrlW4ehWQ8', 'pmo3W61oaW', 'cXxcR8kzW48', 'W7T+lvGy', 'huGbW4up', 'pJpdTmkhka', 'WRzxW58dWRu', 'hCkKDmkCW4u', 'WQtdPaDCW7G', 'ndddNCkzWO4', 'i3CSWQeE', 'WQNcUMDmWOq', 'W4JcLgzTAa', 'CSkOWQjRxa', '4lA64lw5n8o3W4C', 'jN3cGmkAW7C', 'WRTnWO7dVZi', 'ACkNW7nDWRe', 'lmkBtSkwW6G', 'WPCJWRRcU8k+', 'c8knCCkCW7C', '4lsr4lwr4lET4lA14lAH', 'fv0TecO', 'E8kWW63dT0S', 'WQdcOvDFWPe', 'CSkBW5RcNmoH', 'DeNdOCkGWRS', 'zmoxW6Xjaa', 'o8oHsuHK', 'DdittCkj', 'WPK3twldPq', 'k3C8WQem', 'BCoiwSoZxG', 'WRXrWPddVG', 'CSkjWOeHFG', 'smk0W6NdRKu', 'cXX1hNm', 'WRFcQCooW4ZdSW', 'bH3cPa', 'eWr8va', 'W5VdUSksyai', 'eWFcPmkBW48', 'ASkIW7NdPe0', 'W5SuWQ9RW6S', 'omoDFq', 'WQJcUNPUWOK', 'p2SK', 'iCk6n8o1rq', 'WOBdRWFcGYJcJmkfrmkCDSkvoq', 'W5WuW67dMq', 'E3ddGSkhWRW', 'WPn1mq', 'wmo+F8ojva', 'W5W+WQZcOSo9', '8jcPNCk/WOFdRh8', 'W5K8WRvdW78', 'WQ/dUmkwW6/cVSk7WOZcP24', 'ySonvmkBkW', '4lE84lsO4lsV4lsy4lsC', 'pCo4wqLY', 'obpdO8kncG', 'WOzLW6WzWPtdNdrYA8kuWQa', 'wd3dLxJcIq', 'WRS/DG', 'bmkSWOu', 'fCoNja', 'nCkoW7Pbzq', 'WQrSWPJdQG8', 'W5tcKtHIgq', 'WQNdPrDDW7q', 'n8oGxWLL', 'W5iYWQ8aW5a', 'W4lcShddH3m', 'YiViJEg0O8kf4BAu', 'arhcS8kxWPq', 'W4hcUmoYW4/cNq', 'F2/dISkqWOe', 'W5FcMhC2nq', '4lE94lA3loc2NUc3Mq', 'iSopFa', 'B8osqmoVva', 'ngxdJSkmWQy', 'pmkhi8oXDa', 'WRVcP2q', 'AmoCwSo6', 'FSkDd8k6gW', 'W4rde8ocW6S', 'FCoiqCoVva', 'umkvW7e', 'uJhdIxRdKW', 'WQalFqrO', 'bCoSv8oe', 'W4/cJxCYiW', 'l8kYW6VdQ14', 'jSo4xmoPxG', 'WRhdOYHkW4i', 'WOZcM2vYWPi', 'W7tcRmoiW5pcUq', 'bmkXWPDUW5K', 'WR/dRdKE', 'W5FcS1VdH3G', '4lsg4lAk4lA44lETWP8', 'WQ5bWOZdVJe', 'jqRdPCkecW', 'qdddIxRcNa', 'pCoNnbKi', 'mxFcMCkqW5y', 'BSk8W68', 'ksNcT8kjW7y', 'WO3dLWzpW58', 'E8kOW7RdOa', 'WRFdSsbDW4i', 'F8ojs8o5wa', 'rComyCkkW7K', 'hSkAzSky', 'ESkmWOe', 'WR3cMpghS5HplG', 'DmoRzCkIamojdCotWQTIq8o0W7i', 'fCo6rSoaW60', 'xv/dRSkxW5u', 'W6ZcUmon', 'W43cRfa', 'WRLrW50', 'aCo0Fvra', 'jSobwZjN', 'WQlcPvjsWQ8', 'WRBdVNOEuq', 'W5NdHSk9zHy', 'WOXhWPFdTrm', 'Bw/cLSkkW4PwWQGAWQhcJY7cOv8', 'YjJiSog2KSkO4BAV', '8kIBSmkeW6NcLaq', 'W4RcNgCRmq', 'W6hcV1e0oa', 'WQ4WB3xdJq', 'h8krEG', 'jmkYna', 'WQaIWO7cS8k2', 'pWhdQmkmmW', 'dHtcPmkrW4G', 'WQmOFH9k', 'W7XBCmkfCW', 'zSkpW5HGWRC', 'WQRdOIXgWPy', 'lmoNW4LSbW', 'WQy4F8o3W6G', '8k6jTNhdNrdcNG', 'WQ0SAGjc', 'h8kNWOWR', 'd2ekW48d', 'y8k4W4WKWR8', 'W6bplmoy', 'WRddRq5eW48', '4BEfWQVlVCQMWRu', 'WRVdHYaaFa', 'WP4TWRNcTSk6', 'WQrhhvJdTW', 'FghdH8knWQe', 'WORdKCktEx4', 'oxaYW6q', 'h8kqCW', 'xSoXuCkzcG', 'ECopqG', 'ia3dQmkdqa', 'W6BcQ1tdV1C', 'nxxcJCkeW5G', 'FX8Rt8k3', 'WOHfqHJdTq', 'C8k+W4zWWR0', 'C0XfW5Po', 'W65xW7RdUSkC', 'W6lWLzcJWRS5WOq', 'dmoKtSoaW60', 'WQZdOG9mWRu', 'WQZcUxf0WPS', 'yCoAW4uGmW', 'lhpcMSkr', 'WQtdQHbi', 'kSk+nCobqG', 'WP0qsva', 'qmkFW7HQWRO', 'mCkOnmoXra', 'W5u0WQHDW4e', 'h8oNmtif', 'bCoIvmolW7u', 'kSo7W5zqla', '4BEQ4BwGhpcZG6BIG6NWMigF', 'W7xdTSkOCdy', 'cCoXWPO7W4e', 'W7ddJCkHas0', 'DmkvqmoCCq', 'iCoZW7O', 'WQzBWPtdUHG', 'W5rvkmoEmq', '4lE94lEgloc2IEc2PW', 'CvuwWPm', 'W7uAm8ozmW', 'WQRdQsC', 'WQ7dOGLiWRG', 'iSo1rGvy', 'f8oKr8oaW7y', 'yCkoWOHzBa', 'aSorW6BdVmoh', 'n1v3tmk6', 'WPvvdv3dIa', 'u3Svgmos', 'BtddTNtcUq', 'WQJdGCoMvgm', '4BA34BwqW7ZWLkoi4OkW8kEcGa', 'WRVdUZjAua', '4lA54lAhrEc1G+c2TG', '8j+bIokbQpgbO5rw4Bsz4BEt4BEa', 'WQFdRXzaW6m', 'W4mPWRvbW4C', 'qgSae8oj', 'W69sW7m', 'g8ocrCo0W7q', 'WPiHWQG', 'jqhdPmomWPS', 'ErSSt8kO', 'B8kBW5RcHCoW', 'gmkmWRmTWRq', 'ksVdGSkzW5K', 'n8o+W6Td', 'eCkNWPiHWPu', 'WPqvxW', 'WOOuWOFcOmkX', 'W4dcMmk4pmkD', 'WQvmW59BWRm', 'W5L6WQGpW4y', 'pJVdS8kAeG', 'dSonzCkuW7O', 'WQusp1ud', 'W4tcUL/dNKC', 'ocZdNmoyWOW', 'vwFdNmk7WPG', '4BEj4BAjD+g1OEg0UG', 'E2KgWRKP', 'W6RcMgbIhW', 'ss0mxSkt', 'x8kBWQG', 'rNRcKCksW54', 'FgFdMCkTWQ4', 'WO3cGfPNWR0', 'z8kFWPyHjq', 'mtddG8oC', 'W5FcRLddKMK', 'WQuBjfuj', 'jZy7W6iy', 'xMFdNmkgWQm', 'W5tcJVgoTzJVUj4EW4a', 'mIddMSorWPe', 'eCoFW7BdRq', 'f8ouW43dQCow', 'WQvtcmoPda', 'kuFcH8kmW58', 'jNXOW68l', 'h8kbWQGKWPa', 'EmojxSoOcW', 'WOxcISkjsIWnW5xcOq', 'pSolDMri', 'ASk1W7JdRfW', 'W7r/W7hdVSkf', 'oSoLW7TEgW', 'EwNdM8kCWQy', 'W4LLW4VdM8k5', 'qJhdN3RcKG', 'DSk8W4XHWQW', 'cmkBWRGOWOy', 'uCoUu8kFiW', 'WP8BDcvQ', 'WQrnWO7dVaS', 'WRrkW6ZdSmkg', 'y8kNgf4YW7/dULhcS8oVW686oG', 'WQvAW5u0WQG', 'W6pdSIfaW4u', 'kSoZW6PA', 'qCkgWQtcVmkuWO/dKLK9W7ZdPwG', 'omkdWQS7WP8', 'nmo2uNvM', 'W5SzWQrEW5a', 'WPtdGdP2zG', '4BwpoCUrYi5k', 'W5KsW7G', 'lmoECs03', 'WQVdLSkQ', 'DSkYW5LH', 'WPOfeMmH', 'zb0RuSkY', 'W4tcG8kvrCkP'];
    _0x26bb = function () {
      return _0x58b8e5;
    };
    return _0x26bb();
  }
  const _0x203c9c = {
    pattern: "threads",
    alias: ["thread"],
    react: '🧵',
    desc: "Download threads videos/photos.",
    category: "download",
    use: ".threads <threads link>",
    filename: __filename
  };
  cmd(_0x203c9c, async (_0x5461f2, _0x488f97, _0x4312d0, {
    from: _0x438eb4,
    l: _0x13200f,
    quoted: _0x19b87,
    body: _0xee97bc,
    isCmd: _0x304352,
    command: _0x5152c2,
    args: _0x46746e,
    q: _0x8aa0c1,
    isGroup: _0x4432d5,
    sender: _0x1e0407,
    senderNumber: _0x2c87a2,
    botNumber2: _0xb93095,
    botNumber: _0x4dd67f,
    pushname: _0x318047,
    isMe: _0x324464,
    isOwner: _0x2ee3ce,
    groupMetadata: _0x1ec952,
    groupName: _0xcedade,
    participants: _0x4dae4c,
    groupAdmins: _0x2ccb48,
    isBotAdmins: _0x133789,
    isAdmins: _0x4984a8,
    reply: _0x3dbd23
  }) => {
    try {
      if (!_0x8aa0c1) {
        return await _0x3dbd23("Please give me threads url !!");
      }
      let _0x141cf2 = await Download(_0x8aa0c1);
      for (let _0x5e5be2 = 0; _0x5e5be2 < _0x141cf2.download.length; _0x5e5be2++) {
        const _0xaf7076 = {
          quoted: _0x488f97
        };
        const _0x25ccfa = {
          quoted: _0x488f97
        };
        if (_0x141cf2.download[_0x5e5be2].type === "image") {
          await _0x5461f2.sendMessage(_0x438eb4, {
            'image': {
              'url': _0x141cf2.download[_0x5e5be2].url
            },
            'caption': config.FOOTER
          }, _0xaf7076);
        } else {
          await _0x5461f2.sendMessage(_0x438eb4, {
            'video': {
              'url': _0x141cf2.download[_0x5e5be2].url
            },
            'caption': config.FOOTER
          }, _0x25ccfa);
        }
      }
    } catch (_0x33a5c7) {
      _0x3dbd23("I can't find this video!");
      _0x13200f(_0x33a5c7);
    }
  });
  const _0x2e7766 = {
    pattern: 'ig',
    alias: ["insta"],
    react: '💫',
    desc: "Download Instagram videos",
    category: "download",
    use: ".ig <insta link>",
    filename: __filename
  };
  cmd(_0x2e7766, async (_0x1cbf41, _0x4a8ce7, _0x2b685e, {
    from: _0x384aec,
    l: _0x10e740,
    quoted: _0x47ca66,
    body: _0x256e1e,
    isCmd: _0x5eddab,
    command: _0x1fb644,
    args: _0x1293b9,
    q: _0x1a1431,
    isGroup: _0x45a6de,
    sender: _0x59ab6d,
    senderNumber: _0x1a23e2,
    botNumber2: _0x52d742,
    botNumber: _0x26f69d,
    pushname: _0x17a831,
    isMe: _0x6a2fc1,
    isOwner: _0x567590,
    groupMetadata: _0x3e4d0f,
    groupName: _0x371b80,
    participants: _0x4ba1a3,
    groupAdmins: _0x93f787,
    isBotAdmins: _0x1ed847,
    isAdmins: _0x1d3261,
    reply: _0xdc7ed7
  }) => {
    try {
      if (!_0x1a1431) {
        return await _0xdc7ed7("*Please give me instagram url !!");
      }
      let _0xc3dcee = await fetchJson("https://widipe.com/download/igdl?url=" + _0x1a1431);
      const _0x15ff64 = {
        quoted: _0x4a8ce7
      };
      if (_0xc3dcee.length < 1) {
        return await _0x1cbf41.sendMessage(_0x384aec, {
          'text': " *I couldn't find anything :(*"
        }, _0x15ff64);
      }
      _0xc3dcee.result.map(_0x1f8388 => {
        _0x1cbf41.sendFileUrl(_0x384aec, _0x1f8388.url, "POWERED BY TALKDROVE", _0x4a8ce7);
      });
    } catch (_0x1f52d4) {
      _0xdc7ed7(" I cant find this video!");
      console.log(_0x1f52d4);
    }
  });
  const _0x14c67b = {
    pattern: "mediafire",
    alias: ["mfire"],
    react: '📁',
    desc: "Download mediafire files.",
    category: "download",
    use: ".mediafire <mediafire link>",
    filename: __filename
  };
  cmd(_0x14c67b, async (_0x290ae0, _0x270ac2, _0x486a86, {
    from: _0x172034,
    l: _0x59bbcc,
    quoted: _0x326db0,
    body: _0x3b926b,
    isCmd: _0x2c5720,
    command: _0x3d297e,
    args: _0x5ea2f8,
    q: _0x5e66d7,
    isGroup: _0x4b85f0,
    sender: _0x434bf4,
    senderNumber: _0x564c9d,
    botNumber2: _0x4c4628,
    botNumber: _0x2fb46b,
    pushname: _0x26cdd2,
    isMe: _0x14a3f9,
    isOwner: _0x383e1f,
    groupMetadata: _0x47a70f,
    groupName: _0x2c1843,
    participants: _0x3c89dd,
    groupAdmins: _0x5cf74a,
    isBotAdmins: _0x213502,
    isAdmins: _0x31f06d,
    reply: _0x2b329a
  }) => {
    try {
      if (!_0x5e66d7) {
        return await _0x2b329a("*Please give me google drive url*");
      }
      if (!_0x5e66d7.includes("mediafire.com")) {
        return await _0x2b329a("*Please give me google drive url*");
      }
      if (!_0x5e66d7.includes("/file")) {
        return await _0x2b329a("*Please give me google drive url*");
      }
      const _0x4d803f = await mediafireDl(_0x5e66d7);
      const _0x1e56dc = {
        url: _0x4d803f.link
      };
      const _0x9e8207 = {
        document: _0x1e56dc,
        fileName: _0x4d803f.name,
        mimetype: _0x4d803f.mime,
        caption: "*🧸 Name* : " + _0x4d803f.name + "\n*📊 Size* : " + _0x4d803f.size + "\n*🕹️ Mime* : " + _0x4d803f.mime
      };
      const _0x178488 = {
        quoted: _0x270ac2
      };
      const _0x123afc = _0x290ae0.sendMessage(_0x172034, _0x9e8207, _0x178488);
      const _0x16e076 = {
        text: '📁',
        key: _0x123afc.key
      };
      const _0x15db28 = {
        react: _0x16e076
      };
      await _0x290ae0.sendMessage(_0x172034, _0x15db28);
    } catch (_0xe79fd5) {
      _0x2b329a("*Error !!*");
      _0x59bbcc(_0xe79fd5);
    }
  });
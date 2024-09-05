(function (_0x310dde, _0x5cc5c1) {
    const _0x33ba83 = _0x310dde();
    while (true) {
      try {
        const _0xd1727f = parseInt(_0x46de(1358, 'Q]nD')) / 1 + parseInt(_0x46de(1277, '&0Uu')) / 2 * (parseInt(_0x46de(1264, '^[nA')) / 3) + -parseInt(_0x46de(664, 'xMKl')) / 4 + -parseInt(_0x46de(1916, 'cwlM')) / 5 + parseInt(_0x46de(1740, 'PdRh')) / 6 * (-parseInt(_0x46de(568, 'ZhXi')) / 7) + parseInt(_0x46de(2098, 'doe$')) / 8 + parseInt(_0x46de(501, 'oufM')) / 9;
        if (_0xd1727f === _0x5cc5c1) {
          break;
        } else {
          _0x33ba83.push(_0x33ba83.shift());
        }
      } catch (_0x330ce4) {
        _0x33ba83.push(_0x33ba83.shift());
      }
    }
  })(_0x2551, 300321);
  const config = require("../settings");
  const puppeteer = require("puppeteer");
  const dl = require("@bochilteam/scraper");
  const yts = require("yt-search");
  const ytdl = require("@distube/ytdl-core");
  const l = console.log;
  const fs = require("fs-extra");
  const fg = require("api-dylux");
  function ytreg(_0x24e62f) {
    return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x24e62f);
  }
  const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
  } = require("../lib/functions");
  const {
    cmd,
    commands
  } = require("../lib/command");
  function formatUploadDate(_0x45cf6d) {
    const _0xd3147 = new Date(_0x45cf6d);
    return _0xd3147.getFullYear() + '-' + (_0xd3147.getMonth() + 1) + '-' + _0xd3147.getDate();
  }
  async function youtube720(_0x4b3d73) {
    try {
      const _0x51a540 = await puppeteer.launch();
      const _0x403b69 = await _0x51a540.newPage();
      await _0x403b69.goto("https://en.y2mate.is/");
      await _0x403b69.waitForSelector("#txtUrl");
      await _0x403b69.type("#txtUrl", _0x4b3d73);
      await _0x403b69.click("#btnSubmit");
      await _0x403b69.waitForSelector("#tabVideo .tableVideo");
      await _0x403b69.click("#tabVideo tr:nth-child(2) td .btn");
      await _0x403b69.waitForSelector("#tabVideo tr:nth-child(2) td .btn a");
      const _0x3a8a27 = await _0x403b69.$eval("#tabVideo tr:nth-child(2) td .btn a", _0xf9789d => _0xf9789d.href);
      await _0x51a540.close();
      return _0x3a8a27;
    } catch (_0x27dc09) {
      console.error("Error occurred:", _0x27dc09);
      return null;
    }
  }
  function _0x46de(_0x19c734, _0xb62f3c) {
    const _0x245079 = _0x2551();
    _0x46de = function (_0x11250a, _0x120c7d) {
      _0x11250a = _0x11250a - 489;
      let _0x3a56a3 = _0x245079[_0x11250a];
      if (_0x46de.ExBHUB === undefined) {
        var _0xf1bab = function (_0xb75139) {
          let _0x389a00 = '';
          let _0xddd771 = '';
          let _0x86e28f = 0;
          let _0x58e81e;
          let _0x2e5f2e;
          for (let _0x1086dc = 0; _0x2e5f2e = _0xb75139.charAt(_0x1086dc++); ~_0x2e5f2e && (_0x58e81e = _0x86e28f % 4 ? _0x58e81e * 64 + _0x2e5f2e : _0x2e5f2e, _0x86e28f++ % 4) ? _0x389a00 += String.fromCharCode(255 & _0x58e81e >> (-2 * _0x86e28f & 6)) : 0) {
            _0x2e5f2e = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2e5f2e);
          }
          let _0x81bc21 = 0;
          for (let _0x74e9e8 = _0x389a00.length; _0x81bc21 < _0x74e9e8; _0x81bc21++) {
            _0xddd771 += '%' + ('00' + _0x389a00.charCodeAt(_0x81bc21).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0xddd771);
        };
        const _0x1726e4 = function (_0x5d3dc9, _0x5dbc77) {
          let _0x671178 = [];
          let _0x13c45d = 0;
          let _0x1372ac;
          let _0x22cc2b = '';
          _0x5d3dc9 = _0xf1bab(_0x5d3dc9);
          let _0x8f5645;
          for (_0x8f5645 = 0; _0x8f5645 < 256; _0x8f5645++) {
            _0x671178[_0x8f5645] = _0x8f5645;
          }
          for (_0x8f5645 = 0; _0x8f5645 < 256; _0x8f5645++) {
            _0x13c45d = (_0x13c45d + _0x671178[_0x8f5645] + _0x5dbc77.charCodeAt(_0x8f5645 % _0x5dbc77.length)) % 256;
            _0x1372ac = _0x671178[_0x8f5645];
            _0x671178[_0x8f5645] = _0x671178[_0x13c45d];
            _0x671178[_0x13c45d] = _0x1372ac;
          }
          _0x8f5645 = 0;
          _0x13c45d = 0;
          for (let _0x1137e1 = 0; _0x1137e1 < _0x5d3dc9.length; _0x1137e1++) {
            _0x8f5645 = (_0x8f5645 + 1) % 256;
            _0x13c45d = (_0x13c45d + _0x671178[_0x8f5645]) % 256;
            _0x1372ac = _0x671178[_0x8f5645];
            _0x671178[_0x8f5645] = _0x671178[_0x13c45d];
            _0x671178[_0x13c45d] = _0x1372ac;
            _0x22cc2b += String.fromCharCode(_0x5d3dc9.charCodeAt(_0x1137e1) ^ _0x671178[(_0x671178[_0x8f5645] + _0x671178[_0x13c45d]) % 256]);
          }
          return _0x22cc2b;
        };
        _0x46de.gFqoll = _0x1726e4;
        _0x19c734 = arguments;
        _0x46de.ExBHUB = true;
      }
      const _0x497ac1 = _0x245079[0];
      const _0x540d5c = _0x11250a + _0x497ac1;
      const _0x545d76 = _0x19c734[_0x540d5c];
      if (!_0x545d76) {
        if (_0x46de.Jsepsq === undefined) {
          _0x46de.Jsepsq = true;
        }
        _0x3a56a3 = _0x46de.gFqoll(_0x3a56a3, _0x120c7d);
        _0x19c734[_0x540d5c] = _0x3a56a3;
      } else {
        _0x3a56a3 = _0x545d76;
      }
      return _0x3a56a3;
    };
    return _0x46de(_0x19c734, _0xb62f3c);
  }
  var descv = '';
  if (config.LANG === 'URDU') {
    descv = "Iss command say ap youtube say videos download ker sakty hain.";
  } else {
    descv = "Download videos from Youtube.";
  }
  var descs = '';
  if (config.LANG === 'URDU') {
    descs = "Iss command say ap youtube say songs download ker sakty hain.";
  } else {
    descs = "Download songs from Youtube.";
  }
  var descyt = '';
  if (config.LANG === 'URDU') {
    descyt = "Iss command say ap youtube say videos aur songs download ker sakty hain..";
  } else {
    descyt = "Download videos and songs from Youtube.";
  }
  var descsh = '';
  if (config.LANG === 'URDU') {
    descsh = "Iss command say ap youtube pe search aur details ley sakty hain";
  } else {
    descsh = "Search and get details from youtube.";
  }
  var N_FOUND = '';
  if (config.LANG === 'URDU') {
    N_FOUND = "*Mujhe kuch nahi mila, dosri quailty select ker ke dhekein :(*";
  } else {
    N_FOUND = "*I couldn't find anything :(*";
  }
  var urlneed = '';
  if (config.LANG === 'URDU') {
    urlneed = "*Please YouTube URL dyein*";
  } else {
    urlneed = "*Please give me youtube url..*";
  }
  var urlneed1 = '';
  if (config.LANG === 'URDU') {
    urlneed1 = "Iss command say ap Soundcloud say songs download ker sakty hain.";
  } else {
    urlneed1 = "It downloads songs from soundcloud.";
  }
  var imgmsg = '';
  if (config.LANG === 'URDU') {
    imgmsg = "```Kuch likhein please!```";
  } else {
    imgmsg = "```Please write a few words!```";
  }
  var sizetoo = '';
  function _0x3c3971(_0x1bf119, _0x34682c, _0x3075ec, _0x26dd63, _0x541b83) {
    return _0x46de(_0x3075ec - 0x127, _0x26dd63);
  }
  if (config.LANG === 'URDU') {
    sizetoo = "_File ka size boht ziyada hai.._ Ya phir jis platform pe main chal raha hun \n usski bandwidth boht kamm hai, iss liye file upload nahi ho saki..*";
  } else {
    sizetoo = "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*";
  }
  const _0x43c8d7 = {
    pattern: "yts",
    alias: ["ytsearch"],
    use: ".yts lelena",
    react: '🔎',
    desc: "Search videos from youtube",
    category: "search",
    filename: __filename
  };
  cmd(_0x43c8d7, async (_0x16307d, _0x1bc0a6, _0x2e83ef, {
    from: _0x5365bf,
    q: _0x8b300f,
    reply: _0x353590
  }) => {
    try {
      if (!_0x8b300f) {
        return await _0x353590("*Please enter a query to search!*");
      }
      var _0x342773 = await yts(_0x8b300f);
      var _0x43c2eb = '';
      _0x342773.videos.map(_0x3abd33 => {
        _0x43c2eb += " *🖲️" + _0x3abd33.title + "*\n🔗 " + _0x3abd33.url + "\n\n";
      });
      const _0x48d37f = {
        text: _0x43c2eb
      };
      const _0x22dea0 = {
        quoted: _0x1bc0a6
      };
      await _0x16307d.sendMessage(_0x5365bf, _0x48d37f, _0x22dea0);
    } catch (_0xb9caeb) {
      _0x353590("*Error !!*");
      l(_0xb9caeb);
    }
  });
  if (config.COMMAND_TYPE === "button") {
    const _0x1c4a95 = {
      pattern: "song",
      category: "download",
      react: '🎧',
      use: ".song2 <song name>",
      desc: "youtube audio downloader",
      filename: __filename
    };
    cmd(_0x1c4a95, async (_0x32c265, _0x23b408, _0x3049f6, {
      reply: _0xa334b1,
      from: _0x2a4ea0,
      q: _0x342ea6,
      prefix: _0x3f83b1
    }) => {
      try {
        if (!_0x342ea6) {
          return await _0xa334b1("plase give me name !");
        }
        const _0x268df3 = await yts(_0x342ea6);
        const _0x4ad3b9 = _0x268df3.videos[0];
        const _0x581a8c = _0x4ad3b9.url;
        let _0x3af797 = await fg.yta(_0x581a8c);
        const _0x193c1e = "`✦ 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n\n> *`➤ Title` :* " + _0x4ad3b9.title + "\n\n> *`➤ Size` :* " + _0x4ad3b9.size + "\n\n> *`➤ Duration` :* " + _0x4ad3b9.timestamps + "\n\n> *`➤ Quality` :* " + _0x3af797.quality + "\t\t\t\t   \n\n> *`➤ URL` :* " + _0x4ad3b9.url + "\n";
        let _0x414e68 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Audio 🎧",
            'id': _0x3f83b1 + "ytaud " + _0x4ad3b9.url
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document 📁",
            'id': _0x3f83b1 + "ytdoc " + _0x4ad3b9.url
          })
        }];
        const _0x48a7d5 = {
          image: _0x4ad3b9.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x193c1e
        };
        return _0x32c265.sendButtonMessage(_0x2a4ea0, _0x414e68, _0x3049f6, _0x48a7d5);
        const _0x2f8c9a = {
          text: '✅',
          key: _0x23b408.key
        };
        const _0x293524 = {
          react: _0x2f8c9a
        };
        await _0x32c265.sendMessage(_0x2a4ea0, _0x293524);
      } catch (_0x1cba86) {
        _0xa334b1("*Error !!*");
        console.log(_0x1cba86);
      }
    });
    const _0xc77745 = {
      pattern: "video",
      alias: ["ytmp4"],
      use: ".video lelena",
      react: '🎥',
      desc: "Download videos from youtube",
      category: "download",
      filename: __filename
    };
    cmd(_0xc77745, async (_0x2bb0e6, _0x5d7881, _0x37dd7d, {
      from: _0xc4e2bb,
      q: _0x307afb,
      prefix: _0x1dd2c6,
      reply: _0x7a44e5
    }) => {
      try {
        if (!_0x307afb) {
          return await _0x7a44e5("*Please enter a query or a url!*");
        }
        const _0x57ef6e = _0x307afb.replace(/\?si=[^&]*/, '');
        var _0x507189 = await yts(_0x57ef6e);
        var _0x1bbbdd = _0x507189.videos[0];
        const _0x1f2224 = "`✦ 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n    \n> *`➤ Title` :* " + _0x1bbbdd.title + "\n    \n> *`➤ Views` :* " + _0x1bbbdd.views + "\n    \n> *`➤ Duration` :* " + _0x1bbbdd.duration + "\n    \n> *`➤ URL` :* " + _0x1bbbdd.url + "\n    ";
        const _0x460402 = [];
        const _0x31badb = new Map();
        for (let _0x90bd37 = 0; _0x90bd37 < 1; _0x90bd37++) {
          const _0x2011e7 = commands[_0x90bd37];
          if (!_0x2011e7.dontAddCommandList && _0x2011e7.pattern !== undefined) {
            const _0x170cf8 = _0x2011e7.category.toUpperCase();
            if (!_0x31badb.has(_0x170cf8)) {
              _0x460402.push(_0x170cf8);
              _0x31badb.set(_0x170cf8, []);
            }
            _0x31badb.get(_0x170cf8).push(_0x2011e7.pattern);
          }
        }
        const _0x185dfa = [];
        for (const _0x2b23d6 of _0x460402) {
          _0x185dfa.push({
            'header': '',
            'title': "360P VIDEO",
            'description': "Download 360 quality video",
            'id': _0x1dd2c6 + "360p " + _0x1bbbdd.url
          });
          _0x185dfa.push({
            'header': '',
            'title': "480P VIDEO",
            'description': "Download 480 quality video",
            'id': _0x1dd2c6 + "480p " + _0x1bbbdd.url
          });
          _0x185dfa.push({
            'header': '',
            'title': "720P VIDEO",
            'description': "Download 720 quality video",
            'id': _0x1dd2c6 + "720p " + _0x1bbbdd.url
          });
          _0x185dfa.push({
            'header': '',
            'title': "1080P VIDEO",
            'description': "Download 1080 quality video",
            'id': _0x1dd2c6 + "1080p " + _0x1bbbdd.url
          });
        }
        const _0x4d4219 = [];
        for (const _0x5b69a2 of _0x460402) {
          _0x4d4219.push({
            'header': "Document type videos",
            'title': "240P VIDEO",
            'description': "Download 240 quality video",
            'id': _0x1dd2c6 + "24p" + _0x1bbbdd.url
          });
          _0x4d4219.push({
            'header': '',
            'title': "360P VIDEO",
            'description': "Download 360 quality video",
            'id': _0x1dd2c6 + "36p " + _0x1bbbdd.url
          });
          _0x4d4219.push({
            'header': '',
            'title': "480P VIDEO",
            'description': "Download 480 quality video",
            'id': _0x1dd2c6 + "48p " + _0x1bbbdd.url
          });
          _0x4d4219.push({
            'header': '',
            'title': "720P VIDEO",
            'description': "Download 720 quality video",
            'id': _0x1dd2c6 + "72p " + _0x1bbbdd.url
          });
          _0x4d4219.push({
            'header': '',
            'title': "1080P VIDEO",
            'description': "Download 1080 quality video",
            'id': _0x1dd2c6 + "108p " + _0x1bbbdd.url
          });
        }
        const _0x423c05 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x4a38d3 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x423c05)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Normal type videos",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x185dfa
            }]
          })
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Document type videos",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x4d4219
            }]
          })
        }];
        const _0xff0bdf = {
          image: _0x1bbbdd.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x1f2224
        };
        return await _0x2bb0e6.sendButtonMessage(_0xc4e2bb, _0x4a38d3, _0x5d7881, _0xff0bdf);
      } catch (_0x15f793) {
        _0x7a44e5("*Error !!*");
        l(_0x15f793);
      }
    });
  }
  const _0x34243c = {
    pattern: "yt360",
    react: '🎥',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x34243c, async (_0x4062d1, _0x2a8df8, _0x5307d3, {
    from: _0x2a8862,
    q: _0x464d97,
    reply: _0x2a34c6
  }) => {
    function _0x3c8eb5(_0x594fc4, _0x4f3b34, _0x255b8d, _0x1cd283, _0x579555) {
      return _0x46de(_0x594fc4 + 0x7c - 0x127, _0x255b8d);
    }
    function _0x1d6b79(_0x58f9a9, _0x452c6f, _0x50fa1d, _0x5a83c6, _0x12868e) {
      return _0x46de(_0x12868e + 0x409 - 0x11f, _0x5a83c6);
    }
    function _0x59ba48(_0x4031da, _0x4747fc, _0x339fb2, _0x4e50c8, _0x1cba52) {
      return _0x46de(_0x339fb2 + 0xa7 + 0x16d, _0x1cba52);
    }
    const _0x373da8 = {
      'wEJin': function (_0x4abd2d, _0x327d5c) {
        return _0x4abd2d(_0x327d5c);
      },
      'GpFhf': "*File size is too big!*",
      'dOUvi': function (_0x447012, _0x3d7ed2) {
        return _0x447012(_0x3d7ed2);
      },
      'YQnQj': "*ERROR !!*",
      'qxfmT': function (_0x1d4f85, _0x5de93a) {
        return _0x1d4f85 !== _0x5de93a;
      },
      'PEEYL': "ihLBJ",
      'CZBqO': "uYSfp",
      'yQDyZ': "error",
      'vRjTs': "finish",
      'jKIXz': "Error occurred:",
      'KgQLZ': " MB",
      'KcsWC': "Document type videos",
      'RCKxY': "240P VIDEO",
      'ObJPA': "Download 240 quality video",
      'JytKs': function (_0x3a9849, _0x4b9ff6) {
        return _0x3a9849 + _0x4b9ff6;
      },
      'zlVMW': "360P VIDEO",
      'fQucA': "Download 360 quality video",
      'ksSol': "480P VIDEO",
      'YLGnH': "Download 480 quality video",
      'DIfpu': function (_0x18210f, _0x194f06) {
        return _0x18210f + _0x194f06;
      },
      'HrfBR': "720P VIDEO",
      'Qnnvg': "Download 720 quality video",
      'TIbTc': function (_0x4a860b, _0x1bb5ec) {
        return _0x4a860b + _0x1bb5ec;
      },
      'Piifi': "1080P VIDEO",
      'zkCGX': "Download 1080 quality video",
      'SpsUo': "Normal types videos",
      'hgRrc': function (_0x53a8bf, _0x421748) {
        return _0x53a8bf + _0x421748;
      },
      'Pkihj': function (_0x192116, _0x5db2c3) {
        return _0x192116 + _0x5db2c3;
      },
      'SbGKd': function (_0x1fc92f, _0x453eb3) {
        return _0x1fc92f(_0x453eb3);
      },
      'DXEWm': function (_0xd09ee5, _0x42301e) {
        return _0xd09ee5 === _0x42301e;
      },
      'ZTxBh': "tFKEG",
      'gzvRa': "ArDJo",
      'CNDqR': "*Need a youtube url!*",
      'EKDnv': function (_0x593ae5, _0x48d6c3) {
        return _0x593ae5(_0x48d6c3);
      },
      'slzDx': ".mp4",
      'Ruids': function (_0x44b941, _0x2363ff, _0x1e4165) {
        return _0x44b941(_0x2363ff, _0x1e4165);
      },
      'nzgAv': "*360p quality not found please try another!*",
      'pnwEy': function (_0x4d20d0, _0xabac8d) {
        return _0x4d20d0 / _0xabac8d;
      },
      'DzOlq': function (_0x2ebef7, _0x6c3005) {
        return _0x2ebef7 * _0x6c3005;
      },
      'MMYxz': function (_0x46e5bc, _0x5b5197) {
        return _0x46e5bc <= _0x5b5197;
      },
      'PPVVt': function (_0x4cefab, _0x233172) {
        return _0x4cefab === _0x233172;
      },
      'Zxuqi': "LxbPH",
      'YXwdX': "JfZPT",
      'lsxib': function (_0x1b3514, _0x320478) {
        return _0x1b3514 === _0x320478;
      },
      'QpBFR': "UTFAs",
      'XOPnd': "eTMBj",
      'NZnPF': function (_0x3ff8a5, _0x205d60) {
        return _0x3ff8a5 === _0x205d60;
      },
      'JachW': "ZOCmA",
      'TkcvI': "video/mp4",
      'sfvCq': function (_0x110e5a, _0x2219a9) {
        return _0x110e5a + _0x2219a9;
      },
      'XvTxj': "TAMxX",
      'Oevwo': "uMFLx",
      'sBIjb': function (_0x486631, _0x476a20) {
        return _0x486631(_0x476a20);
      },
      'TCfMk': "wTeWy",
      'LKQZR': "sPtDa",
      'xSpGy': "*Error !!*",
      'rTDnW': function (_0x44ccc4, _0x39ab2e) {
        return _0x44ccc4(_0x39ab2e);
      }
    };
    function _0x26daac(_0x171ebb, _0x579df7, _0x2933ae, _0x86581, _0x3bb1d5) {
      return _0x46de(_0x3bb1d5 - 0x215 + 0x16d, _0x171ebb);
    }
    function _0x51a859(_0x2b3240, _0x3b3558, _0xb26875, _0x332e91, _0x510df9) {
      return _0x46de(_0xb26875 + 0x31 - 0x3ba, _0x510df9);
    }
    try {
      if (!_0x464d97) {
        return await _0x2a34c6("*Need a youtube url!*");
      }
      let _0x20fb14 = await ytdl.getInfo(_0x464d97);
      let _0x1d6df4 = _0x20fb14.videoDetails.title;
      let _0x1b05c0 = getRandom(".mp4");
      const _0x4a3480 = {
        filter: _0x45fa5d => _0x45fa5d.container == "mp4" && _0x45fa5d.itag == '18'
      };
      const _0x5417b5 = ytdl(_0x464d97, _0x4a3480).pipe(fs.createWriteStream('./' + _0x1b05c0));
      await new Promise((_0x102cde, _0x43d5a2) => {
        function _0x940912(_0x3b8ae1, _0x63eb4b, _0x48acdf, _0x3ee1c9, _0x499a9d) {
          return _0x46de(_0x3ee1c9 + 0x16b + 0x31 - 0x3ba, _0x63eb4b);
        }
        function _0x3fdc20(_0x183d86, _0x8b5fb1, _0x1a1466, _0x5b4f52, _0x510eab) {
          return _0x46de(_0x183d86 + 0x34e - 0x215 + 0x16d, _0x5b4f52);
        }
        function _0x55601b(_0x14053b, _0x3236b2, _0x15651d, _0x35b812, _0xd18790) {
          return _0x46de(_0x15651d - 0x2 - 0x215 + 0x16d, _0x3236b2);
        }
        function _0x2deb50(_0x1af22b, _0x424f1a, _0x1b5d65, _0x45e72c, _0x4ee0b2) {
          return _0x46de(_0x4ee0b2 + 0x59 + 0xa7 + 0x16d, _0x1b5d65);
        }
        const _0x1260cb = {
          'GvJsX': function (_0x38d3aa, _0xce9b77) {
            function _0x420c7a(_0x47a5d3, _0x2c4462, _0x2333ec, _0x29dd74, _0x2012c1) {
              return _0x46de(_0x2012c1 + 0x3c0, _0x2c4462);
            }
            return _0x38d3aa(_0xce9b77);
          },
          'fdjTi': "*ERROR !!*",
          'kMAZV': function (_0x27f139, _0x1f4da7) {
            function _0x3c89e8(_0x446068, _0x139632, _0x1948e2, _0x4d6dcb, _0x492014) {
              return _0x46de(_0x139632 - 0x2a8 + 0x136 + 0xa7 + 0x16d, _0x4d6dcb);
            }
            return _0x27f139(_0x1f4da7);
          }
        };
        function _0x326459(_0x13abe4, _0x3e3d8e, _0x248130, _0x162232, _0x202f12) {
          return _0x46de(_0x13abe4 + 0x136 + 0xa7 + 0x16d, _0x162232);
        }
        _0x5417b5.on("error", _0x43d5a2);
        _0x5417b5.on("finish", _0x102cde);
      });
      if (!_0x5417b5) {
        return _0x2a34c6("*360p quality not found please try another!*");
      }
      let _0x4662e1 = fs.statSync('./' + _0x1b05c0);
      let _0xbebf2b = _0x4662e1.size / 1048576;
      if (_0xbebf2b <= 1024) {
        if (_0xbebf2b <= 100) {
          const _0xf08ad9 = {
            quoted: _0x2a8df8
          };
          const _0x4a5a34 = await _0x4062d1.sendMessage(_0x2a8862, {
            'video': fs.readFileSync('./' + _0x1b05c0)
          }, _0xf08ad9);
          const _0x1c5e17 = {
            text: '🎼',
            key: _0x4a5a34.key
          };
          const _0x188448 = {
            react: _0x1c5e17
          };
          await _0x4062d1.sendMessage(_0x2a8862, _0x188448);
          const _0x15b7f3 = {
            text: '✅',
            key: _0x2a8df8.key
          };
          const _0x4b77dd = {
            react: _0x15b7f3
          };
          await _0x4062d1.sendMessage(_0x2a8862, _0x4b77dd);
          return fs.unlinkSync('./' + _0x1b05c0);
        } else {
          const _0x805a7a = {
            quoted: _0x2a8df8
          };
          const _0x1681d3 = await _0x4062d1.sendMessage(_0x2a8862, {
            'document': fs.readFileSync('./' + _0x1b05c0),
            'mimetype': "video/mp4",
            'fileName': _0x1d6df4 + ".mp4"
          }, _0x805a7a);
          const _0x2607a6 = {
            text: '🎼',
            key: _0x1681d3.key
          };
          const _0x11f7de = {
            react: _0x2607a6
          };
          await _0x4062d1.sendMessage(_0x2a8862, _0x11f7de);
          const _0x1422e4 = {
            text: '✅',
            key: _0x2a8df8.key
          };
          const _0x4acb89 = {
            react: _0x1422e4
          };
          await _0x4062d1.sendMessage(_0x2a8862, _0x4acb89);
          return fs.unlinkSync('./' + _0x1b05c0);
        }
      } else {
        fs.unlinkSync('./' + _0x1b05c0);
        return _0x2a34c6("*File size is too big!*");
      }
    } catch (_0x5135d7) {
      _0x2a34c6("*Error !!*");
      l(_0x5135d7);
    }
  });
  const _0x42a994 = {
    pattern: "yt720",
    react: '🎥',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x42a994, async (_0x2a3dea, _0x1750b5, _0x594c22, {
    from: _0x24c2a3,
    q: _0xd40dd7,
    reply: _0x4f458c
  }) => {
    function _0x2e6f2b(_0x3fabc9, _0xd672a2, _0x1683ca, _0x29b8e9, _0x5c88fb) {
      return _0x46de(_0x29b8e9 + 0x115 - 0x23c, _0x1683ca);
    }
    function _0x89c82d(_0x305c81, _0x460598, _0x31a8de, _0x5b3e15, _0x561698) {
      return _0x46de(_0x5b3e15 + 0x25d - 0x23c, _0x561698);
    }
    const _0x1654cc = {
      'Ulizq': function (_0x3917f2, _0x238e2a) {
        return _0x3917f2 * _0x238e2a;
      },
      'XrEIb': " GB",
      'nSLTi': function (_0x3f4185, _0x38691c) {
        return _0x3f4185(_0x38691c);
      },
      'CRXDX': function (_0x2f73af, _0x44aa7c) {
        return _0x2f73af !== _0x44aa7c;
      },
      'LTkjw': "*Error !!*",
      'lLrOD': function (_0x5a1bbe, _0x88eba) {
        return _0x5a1bbe(_0x88eba);
      },
      'MUyVe': function (_0x345b4d, _0x7e2530) {
        return _0x345b4d(_0x7e2530);
      },
      'hBRvk': function (_0x2527da, _0x4b6582) {
        return _0x2527da + _0x4b6582;
      },
      'ebJLb': function (_0x206c1d, _0x2dd576) {
        return _0x206c1d === _0x2dd576;
      },
      'cXiGD': "MwKQZ",
      'ikGzL': function (_0x106aaf, _0x47598e) {
        return _0x106aaf(_0x47598e);
      },
      'nQolC': "*Need a youtube url!*",
      'ZQJlX': function (_0xc7fe90, _0x2e002d) {
        return _0xc7fe90(_0x2e002d);
      },
      'RbTNL': "aRtfd",
      'cpcMI': "AImjD",
      'mpRxs': " MB",
      'QPDRC': function (_0xd0de96, _0x24cbde) {
        return _0xd0de96 !== _0x24cbde;
      },
      'eXgTi': "dIDTD",
      'ESYdY': function (_0x6d215, _0x735569) {
        return _0x6d215 <= _0x735569;
      },
      'WmDhm': "HIsoq",
      'iILqN': "YSMli",
      'IzLsk': function (_0x2bb1e9, _0x43a4ca) {
        return _0x2bb1e9 !== _0x43a4ca;
      },
      'gPzwC': "xUTvh",
      'wlxsU': "Wdpuu",
      'jTskl': "EwSSK",
      'dpyDP': "video/mp4",
      'HgTTI': ".mp4",
      'zNVmJ': function (_0x432ef3, _0x188ffc) {
        return _0x432ef3 !== _0x188ffc;
      },
      'Uilnb': "GMRXF",
      'pMuyg': "*File size is too big!*",
      'jgaGx': "tjzCG",
      'VDksu': function (_0x2372a6, _0x3a596b) {
        return _0x2372a6(_0x3a596b);
      }
    };
    function _0x42972f(_0x7bb79d, _0x1e5203, _0x2f2bb2, _0x4023db, _0x23f43f) {
      return _0x46de(_0x4023db + 0x48f - 0x11f, _0x2f2bb2);
    }
    function _0x41bbf5(_0x116000, _0x514031, _0x4b6892, _0x4a4aaf, _0x24faad) {
      return _0x46de(_0x116000 - 0x1b5 - 0x11f, _0x514031);
    }
    function _0x1e389f(_0x1d74d2, _0x1e501b, _0x5ced3f, _0x303b20, _0x519719) {
      return _0x46de(_0x1e501b - 0x2b9 - 0x127, _0x1d74d2);
    }
    try {
      if (!_0xd40dd7) {
        return await _0x4f458c("*Need a youtube url!*");
      }
      let _0x1483c4 = await ytdl.getInfo(_0xd40dd7);
      let _0x3c4319 = _0x1483c4.videoDetails.title;
      const _0x2295ea = await youtube720(_0xd40dd7);
      let _0x652f51 = await getsize(_0x2295ea);
      if (_0x652f51.includes('MB')) {
        _0x652f51 = _0x652f51.replace(" MB", '');
      } else if (_0x652f51.includes('GB')) {
        _0x652f51 = _0x652f51.replace(" GB", '') * 1024;
      }
      if (_0x652f51 <= 1024) {
        if (_0x652f51 <= 100) {
          const _0x58f2a9 = {
            url: _0x2295ea
          };
          const _0xacbc47 = {
            video: _0x58f2a9
          };
          const _0x586449 = {
            quoted: _0x1750b5
          };
          const _0x21654 = await _0x2a3dea.sendMessage(_0x24c2a3, _0xacbc47, _0x586449);
          const _0x22efc1 = {
            text: '🎼',
            key: _0x21654.key
          };
          const _0x45fff5 = {
            react: _0x22efc1
          };
          await _0x2a3dea.sendMessage(_0x24c2a3, _0x45fff5);
          const _0x3e71aa = {
            text: '✅',
            key: _0x1750b5.key
          };
          const _0x4434a0 = {
            react: _0x3e71aa
          };
          await _0x2a3dea.sendMessage(_0x24c2a3, _0x4434a0);
        } else {
          const _0x4f6f4b = {
            url: _0x2295ea
          };
          const _0x587ed3 = {
            quoted: _0x1750b5
          };
          const _0x2f5572 = await _0x2a3dea.sendMessage(_0x24c2a3, {
            'document': _0x4f6f4b,
            'mimetype': "video/mp4",
            'fileName': _0x3c4319 + ".mp4"
          }, _0x587ed3);
          const _0x51ccea = {
            text: '🎼',
            key: _0x2f5572.key
          };
          const _0x3c4b5f = {
            react: _0x51ccea
          };
          await _0x2a3dea.sendMessage(_0x24c2a3, _0x3c4b5f);
          const _0x50ee79 = {
            text: '✅',
            key: _0x1750b5.key
          };
          const _0x40ced7 = {
            react: _0x50ee79
          };
          await _0x2a3dea.sendMessage(_0x24c2a3, _0x40ced7);
        }
      } else {
        _0x4f458c("*File size is too big!*");
      }
    } catch (_0x43deb7) {
      _0x4f458c("*Error !!*");
      l(_0x43deb7);
    }
  });
  const _0x4d683a = {
    pattern: "240p",
    react: '🎥',
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x4d683a, async (_0x15331f, _0x3bfa62, _0x1a5e9f, {
    from: _0x99f8a8,
    q: _0x4aebb9,
    reply: _0xb966a
  }) => {
    function _0x13bb0f(_0x2c0d29, _0x4abe55, _0x171cd9, _0x2d9644, _0x3636d5) {
      return _0x46de(_0x2d9644 + 0x70 - 0x11f, _0x171cd9);
    }
    const _0x5e71a2 = {
      'uLxFX': function (_0x19c21a, _0x2610bd) {
        return _0x19c21a + _0x2610bd;
      },
      'CCcPZ': function (_0xb66039, _0x1d594f) {
        return _0xb66039 + _0x1d594f;
      },
      'HMwLe': " *🖲️",
      'FzTQq': "*\n🔗 ",
      'lPflT': function (_0x3fbb0b, _0x3f0edc) {
        return _0x3fbb0b !== _0x3f0edc;
      },
      'VRhgc': "slxBX",
      'PgpzU': function (_0x3d4774, _0x420b97) {
        return _0x3d4774(_0x420b97);
      },
      'AjVxE': function (_0x5e7c89, _0x38f7e6) {
        return _0x5e7c89(_0x38f7e6);
      },
      'jltkq': "240p",
      'NYCrB': function (_0x47d9a9, _0x516897) {
        return _0x47d9a9 !== _0x516897;
      },
      'YVHdF': "cHnzS",
      'aeLad': function (_0x5cb343, _0x31dd78) {
        return _0x5cb343(_0x31dd78);
      }
    };
    function _0x5eb5dd(_0x53ba89, _0xae6a4f, _0x1f1bcf, _0x4d42ea, _0x10348b) {
      return _0x46de(_0xae6a4f - 0x278 - 0x127, _0x4d42ea);
    }
    function _0x4ea150(_0x57edaa, _0x37f5b4, _0x1a8ff4, _0x145575, _0x19e72f) {
      return _0x46de(_0x37f5b4 + 0x107 - 0x127, _0x19e72f);
    }
    function _0x321651(_0x1ac778, _0x3bb7ea, _0x5f4729, _0x1f16ab, _0x352178) {
      return _0x46de(_0x3bb7ea + 0x334 - 0x23c, _0x1ac778);
    }
    function _0x13bda9(_0x4fbdfb, _0x1b4566, _0x4c29e7, _0x45f797, _0x341eca) {
      return _0x46de(_0x4fbdfb - 0x1ab - 0x127, _0x341eca);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x4aebb9)) {
        return await _0xb966a(urlneed);
      }
      const _0x645485 = await dl.youtubedl(_0x4aebb9);
      let _0x4e7730 = await getsize(await _0x645485.video["240p"].download());
      const _0x175916 = {
        quoted: _0x1a5e9f
      };
      let _0x305f42 = await _0x15331f.sendMessage(_0x99f8a8, {
        'video': {
          'url': await _0x645485.video["240p"].download()
        },
        'caption': config.FOOTER
      }, _0x175916);
      const _0x38855a = {
        text: '🎥',
        key: _0x305f42.key
      };
      const _0x459fce = {
        react: _0x38855a
      };
      await _0x15331f.sendMessage(_0x99f8a8, _0x459fce);
    } catch (_0x7d8312) {
      _0xb966a(N_FOUND);
      l(_0x7d8312);
    }
  });
  const _0x20fc8e = {
    pattern: "360p"
  };
  function _0x1bf856(_0x4b2380, _0x540632, _0x299141, _0x1eb075, _0x2a216c) {
    return _0x46de(_0x1eb075 - 0x23c, _0x540632);
  }
  _0x20fc8e.react = "📽️";
  _0x20fc8e.dontAddCommandList = true;
  _0x20fc8e.filename = __filename;
  cmd(_0x20fc8e, async (_0x3d8274, _0x37770a, _0x292811, {
    from: _0x48901b,
    q: _0x286cf4,
    reply: _0x112852
  }) => {
    function _0x71fe2f(_0x48001d, _0x433cf9, _0x512f7b, _0x58f801, _0x32816f) {
      return _0x46de(_0x433cf9 - 0x3d3 + 0x16d, _0x32816f);
    }
    function _0x3f47a3(_0x3663ca, _0x1caee0, _0x2082b3, _0xeb26ed, _0x552d4a) {
      return _0x46de(_0x1caee0 - 0x135 - 0x11f, _0x3663ca);
    }
    function _0x49c7dc(_0x319ae0, _0x2313f2, _0xef65ec, _0x56d65d, _0xc80761) {
      return _0x46de(_0x56d65d + 0x25e - 0x3ba, _0x319ae0);
    }
    function _0x41dc50(_0x103637, _0x24ef40, _0xe670f0, _0x1bbdb2, _0x3f405f) {
      return _0x46de(_0x3f405f + 0x1b3 - 0x23c, _0x24ef40);
    }
    const _0x48cbaf = {
      'LCBbA': function (_0x55925, _0x2a4a83) {
        return _0x55925(_0x2a4a83);
      },
      'acHvK': function (_0x57afce, _0x334415) {
        return _0x57afce(_0x334415);
      },
      'lgfaF': function (_0xfabe98, _0x4f4234) {
        return _0xfabe98(_0x4f4234);
      },
      'AuTVc': "360p"
    };
    function _0x1066a3(_0x203caa, _0x5611dd, _0x429e69, _0x1fbe5a, _0xd5a652) {
      return _0x46de(_0x429e69 + 0x116 - 0x23c, _0x203caa);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x286cf4)) {
        return await _0x112852(urlneed);
      }
      const _0x2a032a = await dl.youtubedl(_0x286cf4);
      let _0x353f36 = await getsize(await _0x2a032a.video["360p"].download());
      const _0x5d7dfa = {
        quoted: _0x292811
      };
      let _0x1cf4d2 = await _0x3d8274.sendMessage(_0x48901b, {
        'video': {
          'url': await _0x2a032a.video["360p"].download()
        },
        'caption': config.FOOTER
      }, _0x5d7dfa);
      const _0x366037 = {
        text: '🎥',
        key: _0x1cf4d2.key
      };
      const _0x1cf23a = {
        react: _0x366037
      };
      await _0x3d8274.sendMessage(_0x48901b, _0x1cf23a);
    } catch (_0x4dabd7) {
      _0x112852(N_FOUND);
      l(_0x4dabd7);
    }
  });
  const _0x35024a = {
    pattern: "480p",
    react: "📽️"
  };
  function _0x46e766(_0x3db3aa, _0x1c4ce, _0x1d2c38, _0x3c09ae, _0x136b9b) {
    return _0x46de(_0x136b9b - 0x11f, _0x1d2c38);
  }
  _0x35024a.dontAddCommandList = true;
  _0x35024a.filename = __filename;
  cmd(_0x35024a, async (_0x24c9ad, _0x4e5618, _0x125067, {
    from: _0x8886c,
    q: _0x5a4382,
    reply: _0x337ea5
  }) => {
    function _0xc08914(_0x217513, _0xd4587b, _0x2921b0, _0x2adad1, _0x117188) {
      return _0x46de(_0x2921b0 + 0x457 - 0x11f, _0xd4587b);
    }
    function _0x49dd91(_0x592801, _0x500e20, _0x1714c9, _0x1b1199, _0x2d0c16) {
      return _0x46de(_0x1b1199 - 0x3e7 + 0x16d, _0x1714c9);
    }
    function _0x300b18(_0x48a9e4, _0x459d3d, _0x7beb01, _0x18e510, _0x1c993a) {
      return _0x46de(_0x1c993a + 0x49e - 0x23c, _0x7beb01);
    }
    function _0x51f0ad(_0x7ad48d, _0x1a7085, _0x253924, _0x5309d8, _0x4e0131) {
      return _0x46de(_0x7ad48d + 0xd1 - 0x127, _0x4e0131);
    }
    const _0x3e466a = {
      'GLhYq': function (_0x2d8e4f, _0x439abc) {
        return _0x2d8e4f(_0x439abc);
      },
      'XFMXF': function (_0xc5f309, _0x204afe) {
        return _0xc5f309(_0x204afe);
      },
      'MLIjt': function (_0x42d91a, _0x46e34e) {
        return _0x42d91a(_0x46e34e);
      },
      'tqATF': "480p",
      'FBGZn': function (_0x301591, _0x23eaf5) {
        return _0x301591(_0x23eaf5);
      },
      'bzZtv': function (_0x360ed5, _0x559242) {
        return _0x360ed5(_0x559242);
      }
    };
    function _0x175eab(_0x305922, _0x42eb38, _0x1c4dae, _0x4caa2f, _0x4d3706) {
      return _0x46de(_0x1c4dae + 0x679 - 0x3ba, _0x305922);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x5a4382)) {
        return await _0x337ea5(urlneed);
      }
      const _0x5b75f3 = await dl.youtubedl(_0x5a4382);
      let _0x1e78d3 = await getsize(await _0x5b75f3.video["480p"].download());
      const _0x240e65 = {
        quoted: _0x125067
      };
      let _0x1ed831 = await _0x24c9ad.sendMessage(_0x8886c, {
        'video': {
          'url': await _0x5b75f3.video["480p"].download()
        },
        'caption': config.FOOTER
      }, _0x240e65);
      const _0xd8571b = {
        text: '🎥',
        key: _0x1ed831.key
      };
      const _0x296108 = {
        react: _0xd8571b
      };
      await _0x24c9ad.sendMessage(_0x8886c, _0x296108);
    } catch (_0x357746) {
      _0x337ea5(N_FOUND);
      l(_0x357746);
    }
  });
  const _0x1d06c3 = {
    pattern: "720p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x1d06c3, async (_0x270514, _0x4a62ce, _0xf2b95d, {
    from: _0x115d61,
    q: _0x4294b6,
    reply: _0x4a0933
  }) => {
    const _0x507439 = {
      'KlQlW': function (_0x559451, _0x39314d) {
        return _0x559451(_0x39314d);
      },
      'qoLfc': "720p",
      'iWUQq': function (_0x381add, _0x1d99d9) {
        return _0x381add(_0x1d99d9);
      },
      'BiAqU': function (_0x57836a, _0x344cf3) {
        return _0x57836a(_0x344cf3);
      }
    };
    function _0x37e7e5(_0x1ab223, _0xd867e, _0x15821e, _0x350a5d, _0x3ce855) {
      return _0x46de(_0x1ab223 + 0x37c - 0x23c, _0x350a5d);
    }
    function _0x1b2313(_0xe7b578, _0x18aa0a, _0x222eaa, _0x4ece22, _0x146124) {
      return _0x46de(_0x146124 + 0x40 - 0x3ba, _0x222eaa);
    }
    function _0x324673(_0x4b8873, _0x21a5bc, _0x440a57, _0x5943e2, _0x32bd5d) {
      return _0x46de(_0x21a5bc + 0x472 - 0x127, _0x4b8873);
    }
    function _0x27126f(_0x18a947, _0x34ae89, _0x4da660, _0x43b954, _0x1d9e80) {
      return _0x46de(_0x1d9e80 - 0xf0 - 0x11f, _0x4da660);
    }
    function _0x5bb930(_0x2e597d, _0x333dd9, _0x1793b0, _0x1fc787, _0x5458bf) {
      return _0x46de(_0x5458bf + 0x3c0 - 0x3ba, _0x333dd9);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x4294b6)) {
        return await _0x4a0933(urlneed);
      }
      const _0x39088a = await dl.youtubedl(_0x4294b6);
      let _0x1a966f = await getsize(await _0x39088a.video["720p"].download());
      const _0x22f438 = {
        quoted: _0xf2b95d
      };
      let _0x175faa = await _0x270514.sendMessage(_0x115d61, {
        'video': {
          'url': await _0x39088a.video["720p"].download()
        },
        'caption': config.FOOTER
      }, _0x22f438);
      const _0x26e58c = {
        text: '🎥',
        key: _0x175faa.key
      };
      const _0xd9ee00 = {
        react: _0x26e58c
      };
      await _0x270514.sendMessage(_0x115d61, _0xd9ee00);
    } catch (_0x3bbc02) {
      _0x4a0933(N_FOUND);
      l(_0x3bbc02);
    }
  });
  const _0x4ed29c = {
    pattern: "1080p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x4ed29c, async (_0xa51147, _0x535de8, _0x4a4d09, {
    from: _0x52d607,
    q: _0x3c2199,
    reply: _0x4ad1a7
  }) => {
    const _0x37b6da = {
      'MIDUB': function (_0x206ff7, _0x5a7048) {
        return _0x206ff7(_0x5a7048);
      },
      'bYoeG': function (_0x30a3b9, _0x303844) {
        return _0x30a3b9(_0x303844);
      },
      'cidao': function (_0x136ee2, _0x171782) {
        return _0x136ee2(_0x171782);
      },
      'agYYU': "1080p",
      'jJQrk': function (_0x542cbe, _0x920c30) {
        return _0x542cbe(_0x920c30);
      },
      'sDjyY': function (_0x128d59, _0x57b635) {
        return _0x128d59(_0x57b635);
      }
    };
    function _0x411ee1(_0x13a10d, _0x2124a2, _0x463be7, _0x14bd71, _0x2b176a) {
      return _0x46de(_0x14bd71 + 0x593 - 0x23c, _0x2b176a);
    }
    function _0xcc94de(_0x268373, _0x1f1b61, _0x69f060, _0x5d17b3, _0x22c35e) {
      return _0x46de(_0x69f060 - 0x39 + 0x16d, _0x1f1b61);
    }
    function _0x12affb(_0x548e36, _0x1778f4, _0x5f0d04, _0x29f135, _0x27d0ed) {
      return _0x46de(_0x1778f4 + 0x4ae - 0x11f, _0x29f135);
    }
    function _0x436e67(_0x4e4a63, _0x5bf30b, _0x4ab273, _0x4ab605, _0xd8e501) {
      return _0x46de(_0x4e4a63 + 0x118 - 0x11f, _0x4ab273);
    }
    function _0x43741e(_0x13ae11, _0x212400, _0x1e2828, _0x24266f, _0x231555) {
      return _0x46de(_0x24266f + 0x17d - 0x3ba, _0x231555);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x3c2199)) {
        return await _0x4ad1a7(urlneed);
      }
      const _0xc73611 = await dl.youtubedl(_0x3c2199);
      let _0xd6266 = await getsize(await _0xc73611.video["1080p"].download());
      const _0x5b8dd0 = {
        quoted: _0x4a4d09
      };
      let _0x1034b4 = await _0xa51147.sendMessage(_0x52d607, {
        'video': {
          'url': await _0xc73611.video["1080p"].download()
        },
        'caption': config.FOOTER
      }, _0x5b8dd0);
      const _0x3a0d5d = {
        text: '🎥',
        key: _0x1034b4.key
      };
      const _0x5a380e = {
        react: _0x3a0d5d
      };
      await _0xa51147.sendMessage(_0x52d607, _0x5a380e);
    } catch (_0x12def2) {
      _0x4ad1a7(N_FOUND);
      l(_0x12def2);
    }
  });
  const _0x287acf = {
    pattern: "24p",
    react: "📽️"
  };
  function _0x629b43(_0x5b282d, _0x1c0b02, _0x30575c, _0x59a18a, _0xbbb078) {
    return _0x46de(_0xbbb078 - 0x3ba, _0x5b282d);
  }
  _0x287acf.dontAddCommandList = true;
  _0x287acf.filename = __filename;
  cmd(_0x287acf, async (_0xee525a, _0xbf9dba, _0x5590a9, {
    from: _0x4311f4,
    q: _0x420e5f,
    reply: _0x39a9d7
  }) => {
    const _0x2d57a6 = {
      'aHqNM': function (_0x2acc7c, _0x302533) {
        return _0x2acc7c(_0x302533);
      },
      'TlbzW': "240p",
      'tXDGE': "video.mp4",
      'qSElb': "video/mp4"
    };
    function _0x2c0dc2(_0x3f9e9b, _0x283466, _0x31bf24, _0x39a389, _0x4cd13c) {
      return _0x46de(_0x3f9e9b + 0x69 - 0x127, _0x39a389);
    }
    function _0x403739(_0x18069b, _0x31491d, _0x539f02, _0x3584b8, _0x2b1caa) {
      return _0x46de(_0x18069b + 0x3e2 - 0x3ba, _0x539f02);
    }
    function _0x4ee70(_0x4e507c, _0x92e081, _0x4848df, _0x32eb61, _0x2b6905) {
      return _0x46de(_0x4848df + 0x51 - 0x127, _0x2b6905);
    }
    function _0x59ab74(_0x2871b7, _0x4e8dcf, _0x1ddf48, _0x51aff6, _0x3d122e) {
      return _0x46de(_0x1ddf48 - 0x3b7 + 0x16d, _0x4e8dcf);
    }
    function _0x24d092(_0x9ccb23, _0x8ccb2d, _0x56791b, _0x4ff39d, _0x34f536) {
      return _0x46de(_0x34f536 - 0x12a - 0x127, _0x56791b);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x420e5f)) {
        return await _0x39a9d7(urlneed);
      }
      const _0x50e0f6 = await dl.youtubedl(_0x420e5f);
      let _0x2f41d1 = await getsize(await _0x50e0f6.video["240p"].download());
      const _0xd921d3 = {
        quoted: _0x5590a9
      };
      let _0xd0ee54 = await _0xee525a.sendMessage(_0x4311f4, {
        'document': {
          'url': await _0x50e0f6.video["240p"].download()
        },
        'fileName': "video.mp4",
        'mimetype': "video/mp4",
        'caption': config.FOOTER
      }, _0xd921d3);
      const _0x4181d3 = {
        text: '🎥',
        key: _0xd0ee54.key
      };
      const _0x5b7337 = {
        react: _0x4181d3
      };
      await _0xee525a.sendMessage(_0x4311f4, _0x5b7337);
    } catch (_0x5d8f60) {
      _0x39a9d7(N_FOUND);
      l(_0x5d8f60);
    }
  });
  function _0xc00bb0(_0x121d4a, _0x242691, _0x2fe9a9, _0x29435f, _0x44f955) {
    return _0x46de(_0x242691 + 0x16d, _0x2fe9a9);
  }
  const _0xa33ead = {
    pattern: "36p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0xa33ead, async (_0x463eca, _0x458225, _0x2b0fdb, {
    from: _0x548db6,
    q: _0x4a67d3,
    reply: _0x53dd10
  }) => {
    function _0x2c734d(_0x10e387, _0x4ae882, _0xac5d5b, _0x5479cb, _0x36ef67) {
      return _0x46de(_0x10e387 - 0x77 - 0x11f, _0x4ae882);
    }
    function _0x7803c0(_0x54d35d, _0x208d99, _0x849e8f, _0x337252, _0x5e3779) {
      return _0x46de(_0x54d35d - 0x25 - 0x3ba, _0x337252);
    }
    const _0x462b9c = {
      'UIcPj': function (_0x1825a1, _0x38b548) {
        return _0x1825a1(_0x38b548);
      },
      'KBFwn': "360p",
      'mARJI': "video.mp4",
      'NKVTq': "video/mp4",
      'HgJly': function (_0x470019, _0x12d63e) {
        return _0x470019(_0x12d63e);
      }
    };
    function _0xcb6d16(_0x1c5e6b, _0x1896c7, _0x5b6f71, _0x5ec312, _0x4ac61b) {
      return _0x46de(_0x5ec312 + 0x14e + 0x16d, _0x5b6f71);
    }
    function _0x32e712(_0x5aed9a, _0x243372, _0xd3fb0d, _0x2d5875, _0x27b2b9) {
      return _0x46de(_0x243372 + 0x18c - 0x23c, _0x5aed9a);
    }
    function _0x190cd5(_0x5376eb, _0x594564, _0x5a5bef, _0x499e38, _0x4b9505) {
      return _0x46de(_0x594564 + 0x169 + 0x16d, _0x4b9505);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x4a67d3)) {
        return await _0x53dd10(urlneed);
      }
      const _0x270d1d = await dl.youtubedl(_0x4a67d3);
      let _0x53a85d = await getsize(await _0x270d1d.video["360p"].download());
      const _0xc4d42 = {
        quoted: _0x2b0fdb
      };
      let _0x2bb22c = await _0x463eca.sendMessage(_0x548db6, {
        'document': {
          'url': await _0x270d1d.video["360p"].download()
        },
        'fileName': "video.mp4",
        'mimetype': "video/mp4",
        'caption': config.FOOTER
      }, _0xc4d42);
      const _0x370b2c = {
        text: '🎥',
        key: _0x2bb22c.key
      };
      const _0x2ec30a = {
        react: _0x370b2c
      };
      await _0x463eca.sendMessage(_0x548db6, _0x2ec30a);
    } catch (_0x5d04b6) {
      _0x53dd10(N_FOUND);
      l(_0x5d04b6);
    }
  });
  const _0x1d1d71 = {
    pattern: "48p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x1d1d71, async (_0x1bab12, _0x2273a4, _0x222640, {
    from: _0x2cb9f9,
    q: _0x290980,
    reply: _0x8ba9d6
  }) => {
    function _0x2e70e4(_0x3950d5, _0x356087, _0x25c8af, _0x100d7c, _0xa1b9c0) {
      return _0x46de(_0x3950d5 - 0xb4 - 0x23c, _0x25c8af);
    }
    function _0x104134(_0x20a2b4, _0xe81bb2, _0x1ed41e, _0x497d89, _0x1e0092) {
      return _0x46de(_0x1e0092 - 0x262 + 0x16d, _0x1ed41e);
    }
    function _0x1124a9(_0x166c23, _0x12f587, _0x14e76c, _0x42540b, _0x308572) {
      return _0x46de(_0x12f587 - 0x122 - 0x11f, _0x42540b);
    }
    function _0x39cffd(_0x1e59fb, _0x3ad88d, _0x4fbc6e, _0x2984ad, _0x437623) {
      return _0x46de(_0x3ad88d - 0x3a3 + 0x16d, _0x4fbc6e);
    }
    const _0xc66101 = {
      'YjFxh': function (_0x1690f9, _0xc64149) {
        return _0x1690f9(_0xc64149);
      },
      'EYKub': "480p",
      'gcsnk': "video.mp4",
      'KgZsn': "video/mp4"
    };
    function _0x515269(_0x3090c5, _0x417ed4, _0x5e54d8, _0xe2944e, _0x59d294) {
      return _0x46de(_0x59d294 + 0x18a - 0x127, _0x5e54d8);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x290980)) {
        return await _0x8ba9d6(urlneed);
      }
      const _0x4cb8b0 = await dl.youtubedl(_0x290980);
      let _0xe6e17 = await getsize(await _0x4cb8b0.video["480p"].download());
      const _0x18d9dc = {
        quoted: _0x222640
      };
      let _0x4c3e14 = await _0x1bab12.sendMessage(_0x2cb9f9, {
        'document': {
          'url': await _0x4cb8b0.video["480p"].download()
        },
        'fileName': "video.mp4",
        'mimetype': "video/mp4",
        'caption': config.FOOTER
      }, _0x18d9dc);
      const _0x39f67e = {
        text: '🎥',
        key: _0x4c3e14.key
      };
      const _0x50318d = {
        react: _0x39f67e
      };
      await _0x1bab12.sendMessage(_0x2cb9f9, _0x50318d);
    } catch (_0x31297f) {
      _0x8ba9d6(N_FOUND);
      l(_0x31297f);
    }
  });
  const _0x11f60e = {
    pattern: "72p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x11f60e, async (_0xe125a3, _0xb064a7, _0x43a999, {
    from: _0x3df6c6,
    q: _0x7056e6,
    reply: _0x272d20
  }) => {
    function _0x4a854d(_0x329234, _0x3239aa, _0x1811f5, _0x3fda76, _0x2f2c7b) {
      return _0x46de(_0x329234 - 0x356 + 0x16d, _0x3fda76);
    }
    function _0x4e1e9d(_0x21164f, _0x84caab, _0x1feecb, _0x724b25, _0x3855e4) {
      return _0x46de(_0x1feecb + 0x52 - 0x3ba, _0x21164f);
    }
    function _0x51ac18(_0x36f4b0, _0x5a8254, _0x5790eb, _0x232e12, _0x50382b) {
      return _0x46de(_0x232e12 + 0x481 - 0x127, _0x5790eb);
    }
    const _0xaff9fd = {
      'MYvLO': function (_0x5d9cc9, _0xa04871) {
        return _0x5d9cc9(_0xa04871);
      },
      'tYBAH': function (_0x1640df, _0x35795a) {
        return _0x1640df(_0x35795a);
      },
      'ZSkWo': "720p",
      'snYzm': "video.mp4",
      'bqTaf': "video/mp4",
      'AwyVW': function (_0xb72b7c, _0x52d87b) {
        return _0xb72b7c(_0x52d87b);
      }
    };
    function _0x523889(_0x4a334d, _0x4b1d4f, _0x23b09d, _0x23cd4e, _0x2611c5) {
      return _0x46de(_0x23cd4e - 0x4db + 0x16d, _0x23b09d);
    }
    function _0x3a7b84(_0x43cf92, _0x1ffd53, _0x4bca2d, _0x65f6f2, _0x17550d) {
      return _0x46de(_0x4bca2d + 0x30b - 0x11f, _0x43cf92);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x7056e6)) {
        return await _0x272d20(urlneed);
      }
      const _0x57df76 = await dl.youtubedl(_0x7056e6);
      let _0x4aca92 = await getsize(await _0x57df76.video["720p"].download());
      const _0x28fc5 = {
        quoted: _0x43a999
      };
      let _0x26137b = await _0xe125a3.sendMessage(_0x3df6c6, {
        'document': {
          'url': await _0x57df76.video["720p"].download()
        },
        'fileName': "video.mp4",
        'mimetype': "video/mp4",
        'caption': config.FOOTER
      }, _0x28fc5);
      const _0xf7c85f = {
        text: '🎥',
        key: _0x26137b.key
      };
      const _0x203cb0 = {
        react: _0xf7c85f
      };
      await _0xe125a3.sendMessage(_0x3df6c6, _0x203cb0);
    } catch (_0x21834f) {
      _0x272d20(N_FOUND);
      l(_0x21834f);
    }
  });
  const _0xc4b17 = {
    pattern: "108p",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0xc4b17, async (_0x10a455, _0x18c049, _0x1dd49c, {
    from: _0x300894,
    q: _0x54d2e3,
    reply: _0x54b933
  }) => {
    function _0x1ca1dc(_0x3cd78c, _0x1f1a51, _0x10eca5, _0x23028e, _0x213fd0) {
      return _0x46de(_0x213fd0 + 0x3f3 - 0x127, _0x1f1a51);
    }
    const _0x3b4330 = {
      'GrQIe': function (_0x13b427, _0x2b8620) {
        return _0x13b427(_0x2b8620);
      },
      'IjyaR': function (_0x565b58, _0x33c4a2) {
        return _0x565b58(_0x33c4a2);
      },
      'twXyz': function (_0x1be20a, _0x4a692d) {
        return _0x1be20a(_0x4a692d);
      },
      'mfILj': "1080p",
      'PJUcM': "video.mp4",
      'mVDvW': "video/mp4",
      'Plnzb': function (_0x3f9128, _0x3331c7) {
        return _0x3f9128(_0x3331c7);
      }
    };
    function _0x21f7fb(_0xbade5d, _0x243085, _0x51dc84, _0x4f3819, _0x2cf2fb) {
      return _0x46de(_0x4f3819 - 0x259 - 0x11f, _0x2cf2fb);
    }
    function _0x130731(_0x901515, _0x356425, _0x2e8265, _0x29ed5b, _0x271219) {
      return _0x46de(_0x2e8265 + 0x730 - 0x3ba, _0x29ed5b);
    }
    function _0xcef990(_0x5cbc12, _0x247c44, _0x37f697, _0x761f7c, _0x223e6a) {
      return _0x46de(_0x223e6a + 0x331 - 0x127, _0x5cbc12);
    }
    function _0x2649b5(_0x3c71e8, _0x393d40, _0xe5145, _0x3d2e7b, _0xffff81) {
      return _0x46de(_0x3d2e7b + 0x567 - 0x3ba, _0x3c71e8);
    }
    try {
      if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x54d2e3)) {
        return await _0x54b933(urlneed);
      }
      const _0x108379 = await dl.youtubedl(_0x54d2e3);
      let _0x16b51d = await getsize(await _0x108379.video["1080p"].download());
      const _0x372021 = {
        quoted: _0x1dd49c
      };
      let _0x558ae8 = await _0x10a455.sendMessage(_0x300894, {
        'document': {
          'url': await _0x108379.video["1080p"].download()
        },
        'fileName': "video.mp4",
        'mimetype': "video/mp4",
        'caption': config.FOOTER
      }, _0x372021);
      const _0x73cbcc = {
        text: '🎥',
        key: _0x558ae8.key
      };
      const _0x29129c = {
        react: _0x73cbcc
      };
      await _0x10a455.sendMessage(_0x300894, _0x29129c);
    } catch (_0x298951) {
      _0x54b933(N_FOUND);
      l(_0x298951);
    }
  });
  const _0x188310 = {
    pattern: "ytaud",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x188310, async (_0x1880fe, _0x212bda, _0x574acc, {
    from: _0x2f50c9,
    q: _0x3ba9c5,
    reply: _0x34233e
  }) => {
    function _0x181841(_0x10ace6, _0x1252a1, _0x308d89, _0x44a584, _0x29bab7) {
      return _0x46de(_0x29bab7 - 0x4aa + 0x16d, _0x10ace6);
    }
    function _0x5e8099(_0x3a793c, _0x564607, _0x2659a8, _0x1b64fe, _0x35a7fd) {
      return _0x46de(_0x564607 + 0x153 + 0x16d, _0x1b64fe);
    }
    function _0x130334(_0xa5d36b, _0x3bc7e4, _0x1a57ef, _0x4f3202, _0x41b5ec) {
      return _0x46de(_0x41b5ec - 0x49e + 0x16d, _0xa5d36b);
    }
    function _0x380111(_0xdd2860, _0x273a85, _0x2a8bf6, _0x1eef69, _0x4b6a48) {
      return _0x46de(_0x2a8bf6 + 0x21 - 0x11f, _0x273a85);
    }
    const _0x36eb0f = {
      'CeAbB': "*Need link...*",
      'LAIzO': "audio/mpeg",
      'Srmjq': function (_0x502d6a, _0x7b76d3) {
        return _0x502d6a + _0x7b76d3;
      },
      'sbBVE': function (_0x44d1ac, _0x16cf72) {
        return _0x44d1ac + _0x16cf72;
      },
      'AxDkX': "mp3",
      'gdNoB': function (_0x1287e0, _0x245cc4) {
        return _0x1287e0(_0x245cc4);
      },
      'tZUCg': "*ERROR !!*"
    };
    function _0x1d2124(_0x122472, _0x558d97, _0x1f0efc, _0x80e70a, _0x38ff0a) {
      return _0x46de(_0x558d97 + 0x5ff - 0x3ba, _0x122472);
    }
    try {
      const _0x40f93c = {
        text: '📥',
        key: _0x212bda.key
      };
      const _0x2d1c84 = {
        react: _0x40f93c
      };
      await _0x1880fe.sendMessage(_0x2f50c9, _0x2d1c84);
      const _0x281e6a = {
        text: "*Need link...*"
      };
      const _0x286428 = {
        quoted: _0x212bda
      };
      if (!_0x3ba9c5) {
        return await _0x1880fe.sendMessage(_0x2f50c9, _0x281e6a, _0x286428);
      }
      let _0x35506e = await fg.yta(_0x3ba9c5);
      const _0x30683f = {
        url: _0x35506e.dl_url
      };
      const _0x4352b4 = {
        quoted: _0x212bda
      };
      let _0x451c3d = await _0x1880fe.sendMessage(_0x2f50c9, {
        'audio': _0x30683f,
        'mimetype': "audio/mpeg",
        'fileName': _0x35506e.title + '.' + "mp3"
      }, _0x4352b4);
      const _0x5b820e = {
        text: '📁',
        key: _0x451c3d.key
      };
      const _0xcac39a = {
        react: _0x5b820e
      };
      await _0x1880fe.sendMessage(_0x2f50c9, _0xcac39a);
      const _0x38a392 = {
        text: '✔',
        key: _0x212bda.key
      };
      const _0x23487a = {
        react: _0x38a392
      };
      await _0x1880fe.sendMessage(_0x2f50c9, _0x23487a);
    } catch (_0x1c330a) {
      _0x34233e("*ERROR !!*");
      l(_0x1c330a);
    }
  });
  const _0x3cad7d = {
    pattern: "ytdoc",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x3cad7d, async (_0x385df5, _0x112d2c, _0x237276, {
    from: _0xcbb89f,
    q: _0x58c6cd,
    reply: _0x5ac78c
  }) => {
    const _0x593d56 = {
      'jmOkY': "*Need link...*",
      'AGsUY': "audio/mpeg",
      'fGLKE': function (_0x30c368, _0x117f36) {
        return _0x30c368 + _0x117f36;
      },
      'GeHtR': "mp3",
      'BZQBL': function (_0x30c06f, _0x184f0e) {
        return _0x30c06f(_0x184f0e);
      },
      'ceghx': "*ERROR !!*"
    };
    function _0x389b3c(_0x5078e8, _0x5ca114, _0x49d5eb, _0x506d22, _0x4cfb73) {
      return _0x46de(_0x506d22 + 0x64d - 0x3ba, _0x5078e8);
    }
    function _0x322222(_0x262d8b, _0x27d3f6, _0x2eab70, _0x521425, _0xcb21cc) {
      return _0x46de(_0x521425 + 0x368 - 0x3ba, _0x27d3f6);
    }
    function _0x3f2aee(_0x232488, _0x4dc910, _0x482266, _0x3743ee, _0x179c02) {
      return _0x46de(_0x179c02 + 0x376 - 0x11f, _0x3743ee);
    }
    function _0x527a98(_0x55ab03, _0x41fe30, _0x674151, _0x2ee51e, _0xbfca89) {
      return _0x46de(_0x55ab03 + 0x4db - 0x3ba, _0x2ee51e);
    }
    function _0x41cf4a(_0x42b602, _0x44d95e, _0x39e1d4, _0x16897f, _0x301683) {
      return _0x46de(_0x42b602 + 0x4c2 - 0x127, _0x301683);
    }
    try {
      const _0xf81b21 = {
        text: '📥',
        key: _0x112d2c.key
      };
      const _0x74da69 = {
        react: _0xf81b21
      };
      await _0x385df5.sendMessage(_0xcbb89f, _0x74da69);
      const _0xac6ce8 = {
        text: "*Need link...*"
      };
      const _0x6e4fda = {
        quoted: _0x112d2c
      };
      if (!_0x58c6cd) {
        return await _0x385df5.sendMessage(_0xcbb89f, _0xac6ce8, _0x6e4fda);
      }
      let _0x4eef71 = await fg.yta(_0x58c6cd);
      const _0x190266 = {
        url: _0x4eef71.dl_url
      };
      const _0x2a4f8b = {
        quoted: _0x112d2c
      };
      let _0x17911f = await _0x385df5.sendMessage(_0xcbb89f, {
        'document': _0x190266,
        'mimetype': "audio/mpeg",
        'fileName': _0x4eef71.title + '.' + "mp3"
      }, _0x2a4f8b);
      const _0x431636 = {
        text: '📁',
        key: _0x17911f.key
      };
      const _0x5b374b = {
        react: _0x431636
      };
      await _0x385df5.sendMessage(_0xcbb89f, _0x5b374b);
      const _0x4831f8 = {
        text: '✔',
        key: _0x112d2c.key
      };
      const _0xd2c450 = {
        react: _0x4831f8
      };
      await _0x385df5.sendMessage(_0xcbb89f, _0xd2c450);
    } catch (_0x58f488) {
      _0x5ac78c("*ERROR !!*");
      l(_0x58f488);
    }
  });
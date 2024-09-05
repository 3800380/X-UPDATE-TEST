
(function (_0x3385fe, _0x4b8d57) {
    const _0x1a0c46 = _0x3385fe();
    while (true) {
      try {
        const _0x5c190d = -parseInt(_0x27ab(866, ']EPe')) / 1 * (parseInt(_0x27ab(1481, '[!F]')) / 2) + -parseInt(_0x27ab(1760, 'yV8z')) / 3 * (parseInt(_0x27ab(738, 'IVTE')) / 4) + parseInt(_0x27ab(377, 'eLs!')) / 5 + -parseInt(_0x27ab(547, 'BEp&')) / 6 * (parseInt(_0x27ab(2481, 'THI2')) / 7) + -parseInt(_0x27ab(1408, 'rpHS')) / 8 * (parseInt(_0x27ab(2857, 'tRJd')) / 9) + -parseInt(_0x27ab(530, 'eLs!')) / 10 + parseInt(_0x27ab(1964, 'uh]s')) / 11;
        if (_0x5c190d === _0x4b8d57) {
          break;
        } else {
          _0x1a0c46.push(_0x1a0c46.shift());
        }
      } catch (_0x798faf) {
        _0x1a0c46.push(_0x1a0c46.shift());
      }
    }
  })(_0x2484, 668528);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const axios = require("axios");
  const fetch = require("node-fetch");
  const fg = require("api-dylux");
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
    fetchJson
  } = require("../lib/functions");
  const {
    igstalker,
    tikstalk
  } = require("../lib/stalker");
  const uptime = process.uptime();
  const hours = Math.floor(uptime % 86400 / 3600);
  const minutes = Math.floor(uptime % 3600 / 60);
  const seconds = Math.floor(uptime % 60);
  var desct = '';
  if (config.LANG === 'URDU') {
    desct = "Iss command say ap TikTok username ki details ley sakty hain.";
  } else {
    desct = "It gives details of given tiktok username.";
  }
  var needus = '';
  if (config.LANG === 'URDU') {
    needus = "*Please TikTok ka username bhi likhyein !*";
  } else {
    needus = "*Please give me a tiktok username !*";
  }
  var cantf = '';
  if (config.LANG === 'URDU') {
    cantf = "*Mujhe ye user TikTok pe nahi mila!*";
  } else {
    cantf = "*I cant find this user on tiktok !*";
  }
  var desct1 = '';
  if (config.LANG === 'URDU') {
    desct1 = "Iss command say ap diye gaye Instagram ke username ki details nikal sakty hain.";
  } else {
    desct1 = "It gives details of given instagram username.";
  }
  var needus1 = '';
  if (config.LANG === 'URDU') {
    needus1 = "*Please Instagram ka username bhi likhyein  !*";
  } else {
    needus1 = "*Please give me a instagram username !*";
  }
  var cantf1 = '';
  if (config.LANG === 'URDU') {
    cantf1 = "*Mujhe ye user Instagram pe nahi mila!*";
  } else {
    cantf1 = "*I cant find this user on instagram !*";
  }
  const _0x3f730d = {
    pattern: "lyrics",
    alias: ["lyric"],
    react: "🎙️",
    desc: "It gives lyrics of given song name.",
    category: "search",
    use: ".lyric <song name>",
    filename: __filename
  };
  cmd(_0x3f730d, async (_0x3e9b09, _0x4769f6, _0x5982ef, {
    from: _0x570870,
    l: _0x2fb3dc,
    quoted: _0x3180ef,
    body: _0x21645f,
    isCmd: _0x34ad24,
    command: _0x93064d,
    args: _0x17cc74,
    q: _0x37f32b,
    isGroup: _0x14cd80,
    sender: _0x11cf91,
    senderNumber: _0x56b695,
    botNumber2: _0x2faf60,
    botNumber: _0x2735c8,
    pushname: _0x2ef0e0,
    isMe: _0x168747,
    isOwner: _0x1c7a09,
    groupMetadata: _0x1de457,
    groupName: _0x3c1124,
    participants: _0x35fe92,
    groupAdmins: _0x17a2b4,
    isBotAdmins: _0x55f5d1,
    isAdmins: _0x44be42,
    reply: _0x28b93c
  }) => {
    try {
      if (!_0x37f32b) {
        return _0x28b93c("*Please give me a song name* !");
      }
      const _0x3ac90d = await fetchJson("https://api.sdbots.tech/lyrics?song=" + _0x37f32b);
      if (_0x3ac90d.lyrics) {
        _0x28b93c("\nX - B Y T E\n\n   *LYRICS SEARCH*\n   \n*" + _0x3ac90d.title + "*\n_" + _0x3ac90d.artist + "_\n\n\n" + _0x3ac90d.lyrics + "\n\n└───────────◉");
      } else {
        _0x28b93c("I cant find lyrics of this song !");
      }
    } catch (_0x53a6b5) {
      _0x28b93c("I cant find lyrics of this song !");
      _0x2fb3dc(_0x53a6b5);
    }
  });
  const _0x5398f3 = {
    pattern: 'ip',
    alias: ["ipstalk", "sip", "searchip", "ip-locator"],
    react: '🌐',
    desc: "It gives details of given ip.",
    category: "search",
    use: ".ipstalk 112.134.193.130",
    filename: __filename
  };
  cmd(_0x5398f3, async (_0x3f0961, _0x3d5811, _0x44988b, {
    from: _0x1552b9,
    l: _0x28aea2,
    quoted: _0x593927,
    body: _0x2a2649,
    isCmd: _0x4e784c,
    command: _0x12e879,
    args: _0xbe1f56,
    q: _0x4aee17,
    isGroup: _0x481012,
    sender: _0x2cc8f4,
    senderNumber: _0x22faa9,
    botNumber2: _0x22c9db,
    botNumber: _0x15f6a7,
    pushname: _0xfc07e1,
    isMe: _0xc86f66,
    isOwner: _0x3e71c9,
    groupMetadata: _0x4a11c4,
    groupName: _0x19e183,
    participants: _0x3253b2,
    groupAdmins: _0x251eb5,
    isBotAdmins: _0x2038b1,
    isAdmins: _0x273f69,
    reply: _0x3e779f
  }) => {
    try {
      if (!_0x4aee17) {
        return _0x3e779f("*\n*Please give me a ip !*");
      }
      if (!_0x4aee17.includes('.')) {
        return _0x3e779f("**Please give me a ip !*");
      }
      const _0x357c04 = await fetchJson("https://api.techniknews.net/ipgeo/" + _0x4aee17);
      const _0xf60473 = "X - B Y T E\n    *IP STALKER*\n    \n*🔴 IP :* ```" + _0x4aee17 + "```\n" + '*✅' + "STATUS :" + "* ```" + _0x357c04.status + "```\n" + "*🌐" + "CONTINENT :" + "* ```" + _0x357c04.continent + "```\n" + "*🗺" + "COUNTRY :" + "* ```" + _0x357c04.country + "```\n" + "*🔢" + "COUNTRYCODE :" + "* ```" + _0x357c04.countryCode + "```\n" + "*🌍" + "REGIONNAME :" + "* ```" + _0x357c04.regionName + "```\n" + "*🚩" + "CITY :" + "* ```" + _0x357c04.city + "```\n" + "*🏛" + "ZIP :" + "* ```" + _0x357c04.zip + "```\n" + "*💸" + "CURRENCY :" + "* ```" + _0x357c04.currency + "```\n" + "*📡" + "ISP :" + "* ```" + _0x357c04.isp + "```\n" + "*🛡" + "PROXY :" + "* ```" + _0x357c04.proxy + "```\n" + "*📱" + "MOBILE :" + "* ```" + _0x357c04.mobile + "```\n\n" + "└───────────◉";
      const _0x56beb4 = {
        text: _0xf60473
      };
      const _0x3be55e = {
        quoted: _0x3d5811
      };
      await _0x3f0961.sendMessage(_0x1552b9, _0x56beb4, _0x3be55e);
    } catch (_0x56faa0) {
      _0x3e779f("I cant find this ip !");
      _0x28aea2(_0x56faa0);
    }
  });
  const _0x9f7f6f = {
    pattern: "igstalk",
    alias: ["instastalk", "instagramstalk", "igstalker"],
    react: '📷',
    desc: desct1,
    category: "search",
    use: ".igstalk <instagram username>",
    filename: __filename
  };
  cmd(_0x9f7f6f, async (_0x1c3873, _0x52a38e, _0x592622, {
    from: _0x408d56,
    l: _0xa80572,
    quoted: _0x1951df,
    body: _0x1b2738,
    isCmd: _0x4dc1ec,
    command: _0x145d8a,
    args: _0x296a90,
    q: _0x7492f6,
    isGroup: _0x261ccd,
    sender: _0x4b5edb,
    senderNumber: _0x1eb2eb,
    botNumber2: _0x327453,
    botNumber: _0x38a830,
    pushname: _0x5d76e2,
    isMe: _0x3b85ec,
    isOwner: _0x1054e1,
    groupMetadata: _0x16c2e9,
    groupName: _0x56ca16,
    participants: _0x254751,
    groupAdmins: _0x4ec2e7,
    isBotAdmins: _0x52496e,
    isAdmins: _0x1b1420,
    reply: _0x5605c6
  }) => {
    try {
      if (!_0x7492f6) {
        return _0x5605c6(needus1);
      }
      const _0x13d448 = await igstalker(_0x7492f6);
      const _0x2f63d6 = "X - B Y T E\n\n    *IG STALKER*\n\n*🆔 Username:* " + _0x13d448.username + "\n\n*👤 Name:* " + _0x13d448.fullname + "\n\n*🐾 Bio:* " + _0x13d448.bio + "\n\n*🚶🏽 Following:* " + _0x13d448.following + "\n\n*👥 Followers:* " + _0x13d448.followers + "\n\n*📬 Post count:* " + _0x13d448.post + "\n\n└───────────◉";
      const _0x35e03a = {
        url: _0x13d448.profile
      };
      const _0x54ad68 = {
        image: _0x35e03a,
        caption: _0x2f63d6
      };
      const _0x25db7f = {
        quoted: _0x52a38e
      };
      await _0x1c3873.sendMessage(_0x408d56, _0x54ad68, _0x25db7f);
    } catch (_0x2139c4) {
      _0x5605c6(cantf1);
      _0xa80572(_0x2139c4);
    }
  });
  function _0x4b859d(_0x5547d5, _0x4c7331, _0x15c8c0, _0x299e59, _0x2f66a4) {
    return _0x27ab(_0x5547d5 - 0x36f, _0x299e59);
  }
  const _0x58cecf = {
    pattern: "stiktok",
    alias: ["tiktokstalk", "stalktiktok", "tikstalk"],
    react: '📱',
    desc: desct,
    category: "search",
    use: ".stiktok <tiktok username>",
    filename: __filename
  };
  cmd(_0x58cecf, async (_0x440ec5, _0x43ef94, _0xa0ec64, {
    from: _0x3bf8be,
    l: _0xc78920,
    quoted: _0x570f6b,
    body: _0x4957d2,
    isCmd: _0x3fe46f,
    command: _0x46bbb7,
    args: _0x28b559,
    q: _0x311ebb,
    isGroup: _0x8a474b,
    sender: _0x1fac34,
    senderNumber: _0x1a2f79,
    botNumber2: _0x1c5e68,
    botNumber: _0x23c941,
    pushname: _0x527df8,
    isMe: _0x498d64,
    isOwner: _0x5e1ece,
    groupMetadata: _0x19d4da,
    groupName: _0xda7b2b,
    participants: _0x5d5bba,
    groupAdmins: _0x5da3aa,
    isBotAdmins: _0x11c804,
    isAdmins: _0x4bb71f,
    reply: _0x345b81
  }) => {
    try {
      if (!_0x311ebb) {
        return _0x345b81(needus);
      }
      const _0x4cab59 = await tikstalk(_0x28b559[0]);
      const _0x4381be = "X - B Y T E\n\n    *TIKTOK STALKER*\n\n*🆔 Username:* " + _0x4cab59.username + "\n\n*👤 Name:* " + _0x4cab59.name + "\n\n*🐾 Bio:* " + _0x4cab59.bio + "\n\n*🚶🏽 Following:* " + _0x4cab59.following + "\n\n*👥 Followers:* " + _0x4cab59.followers + "\n\n*💌 Likes:* " + _0x4cab59.likes + "\n\n└───────────◉";
      const _0x4e06d1 = {
        url: _0x4cab59.img
      };
      const _0xfe2b3a = {
        image: _0x4e06d1,
        caption: _0x4381be
      };
      const _0x3f9e83 = {
        quoted: _0x43ef94
      };
      await _0x440ec5.sendMessage(_0x3bf8be, _0xfe2b3a, _0x3f9e83);
    } catch (_0x3e758c) {
      _0x345b81(cantf);
      _0xc78920(_0x3e758c);
    }
  });
  const _0x447f24 = {
    pattern: "midjourney",
    react: '🧠',
    alias: ["midimage"],
    desc: "Midjourney Image generator",
    category: "search",
    use: ".apk < Target >",
    filename: __filename
  };
  cmd(_0x447f24, async (_0xb737ec, _0x41d9ff, _0x4b787c, {
    from: _0xf633a0,
    l: _0x3f7a74,
    quoted: _0x39cdd8,
    body: _0x20e6e5,
    isCmd: _0x8552a5,
    command: _0x5ab1c1,
    args: _0x50e54e,
    q: _0x249469,
    isGroup: _0xff10db,
    sender: _0x281400,
    senderNumber: _0x28cada,
    botNumber2: _0x346e07,
    botNumber: _0x55b104,
    pushname: _0x5f577c,
    isMe: _0x7485b2,
    isOwner: _0x254352,
    groupMetadata: _0x26fee2,
    groupName: _0x1478bb,
    participants: _0x3acb18,
    groupAdmins: _0xd9c8c2,
    isBotAdmins: _0x2039af,
    isCreator: _0x2c054a,
    isDev: _0x5c2797,
    isAdmins: _0x464750,
    reply: _0x29c509
  }) => {
    try {
      const _0x517090 = await getBuffer("https://vihangayt.me/tools/midjourney?q=" + _0x249469);
      const _0x400688 = {
        image: _0x517090,
        caption: "☘ *Generated by X-BYTE*"
      };
      const _0xd7fee3 = {
        quoted: _0x41d9ff
      };
      await _0xb737ec.sendMessage(_0xf633a0, _0x400688, _0xd7fee3);
    } catch (_0xab3563) {
      _0x29c509("⛔ *Error accurated !!*\n\n" + _0xab3563);
      _0x3f7a74(_0xab3563);
    }
  });
  const _0x3f7f6c = {
    pattern: "npmjs",
    react: '🥏',
    desc: "Developing command.",
    category: "search",
    use: ".checkjson",
    filename: __filename
  };
  cmd(_0x3f7f6c, async (_0x412866, _0x16c028, _0x432f08, {
    from: _0x1dad6f,
    l: _0x2aadd7,
    quoted: _0x30edf3,
    body: _0x45f25a,
    isCmd: _0x525fdd,
    command: _0x3b2148,
    args: _0x15809e,
    q: _0x448b42,
    isGroup: _0x27aa10,
    sender: _0xe2c3,
    senderNumber: _0xf05f64,
    botNumber2: _0x1ecc05,
    botNumber: _0x1b455a,
    pushname: _0x597122,
    isMe: _0x29c74b,
    isOwner: _0x25fb37,
    groupMetadata: _0x306688,
    groupName: _0x3f1fec,
    participants: _0x4c18a8,
    groupAdmins: _0x242eb7,
    isBotAdmins: _0x17e0d8,
    isCreator: _0x9f19b8,
    isDev: _0x34f6ca,
    isAdmins: _0x2db485,
    reply: _0x1809bb
  }) => {
    try {
      if (!_0x448b42) {
        return _0x1809bb("❗ *Please enter Valid npm Name*");
      }
      const _0x58bc4f = await fg.npmSearch(_0x448b42);
      let _0x10c778 = "\nℹ️ *X-BYTE  NPM Informations ( From - npmjs.com )*\n\n Name -:  *" + _0x58bc4f.name + "*\n\n Description  -:  " + _0x58bc4f.description + "\n\n Version   -:  " + _0x58bc4f.version + "\n\n Url  -:  " + _0x58bc4f.packageLink + "\n\n Latest Updated on  -:  " + _0x58bc4f.publishedDate + "\n\n Home Page  -:  " + _0x58bc4f.homepage + "\n \n License  -:  " + _0x58bc4f.license + "\n \n Keywords :-\n";
      for (let _0x41734a of _0x58bc4f.keywords) {
        _0x10c778 += _0x41734a + "  ";
      }
      const _0x40adb3 = _0x10c778 + "\n\n\n*X-BYTE ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ TalkDrove*";
      const _0x13fceb = {
        url: "https://telegra.ph/file/1509c123f9d160fd4a8cb.jpg"
      };
      const _0x4f2886 = {
        image: _0x13fceb,
        caption: _0x40adb3
      };
      const _0x5a55d9 = {
        quoted: _0x16c028
      };
      await _0x412866.sendMessage(_0x1dad6f, _0x4f2886, _0x5a55d9);
    } catch (_0x339aa6) {
      _0x1809bb("⛔ *Error accurated !!*" + _0x339aa6);
      _0x2aadd7(_0x339aa6);
    }
  });
  const _0x105e16 = {
    pattern: "weather",
    react: "🎙️",
    desc: "To see info of weather",
    category: "search",
    use: ".weather",
    filename: __filename
  };
  cmd(_0x105e16, async (_0x415165, _0x2e6718, _0x328722, {
    from: _0x1823e4,
    l: _0x4910c5,
    prefix: _0x4773c8,
    quoted: _0x548cb9,
    body: _0x1ffbe0,
    isCmd: _0x289cae,
    command: _0x153728,
    args: _0x429f1e,
    q: _0x593ba0,
    isGroup: _0x1b4647,
    sender: _0x222a4a,
    senderNumber: _0x39341d,
    botNumber2: _0x9d5cd7,
    botNumber: _0x2ab41a,
    pushname: _0x5b1288,
    isMe: _0x52f3c9,
    isOwner: _0x4d3488,
    groupMetadata: _0x21d743,
    groupName: _0x3526ea,
    participants: _0x352cb6,
    groupAdmins: _0x3977ea,
    isBotAdmins: _0x28559f,
    isAdmins: _0x5535b6,
    reply: _0x44e27a
  }) => {
    try {
      if (!_0x593ba0) {
        return _0x44e27a("What location?");
      }
      let _0x37c179 = _0x593ba0.split(" ")[0];
      let _0x53111e = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x37c179 + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
      let _0x1a1def = '';
      _0x1a1def += "*🗺️Weather of  " + _0x37c179 + "*\n\n";
      _0x1a1def += "*Weather:-* " + _0x53111e.data.weather[0].main + "\n";
      _0x1a1def += "*Description:-* " + _0x53111e.data.weather[0].description + "\n";
      _0x1a1def += "*Avg Temp:-* " + _0x53111e.data.main.temp + "\n";
      _0x1a1def += "*Feels Like:-* " + _0x53111e.data.main.feels_like + "\n";
      _0x1a1def += "*Pressure:-* " + _0x53111e.data.main.pressure + "\n";
      _0x1a1def += "*Humidity:-* " + _0x53111e.data.main.humidity + "\n";
      _0x1a1def += "*Humidity:-* " + _0x53111e.data.wind.speed + "\n";
      _0x1a1def += "*Latitude:-* " + _0x53111e.data.coord.lat + "\n";
      _0x1a1def += "*Longitude:-* " + _0x53111e.data.coord.lon + "\n";
      _0x1a1def += "*Country:-* " + _0x53111e.data.sys.country + "\n";
      const _0x2a79ff = {
        text: _0x1a1def
      };
      const _0x30b582 = {
        quoted: _0x2e6718
      };
      _0x415165.sendMessage(_0x1823e4, _0x2a79ff, _0x30b582);
      const _0x423b6a = {
        text: '✅',
        key: _0x2e6718.key
      };
      const _0x493173 = {
        react: _0x423b6a
      };
      await _0x415165.sendMessage(_0x1823e4, _0x493173);
    } catch (_0x42a4c0) {
      _0x44e27a();
      _0x4910c5(_0x42a4c0);
    }
  });
  const _0x2e8453 = {
    pattern: "gitstalk",
    react: "🎙️",
    desc: "To search github info",
    category: "search",
    use: ".gitstalk <github user name>",
    filename: __filename
  };
  cmd(_0x2e8453, async (_0x1fa57f, _0xb27868, _0x599214, {
    from: _0x3ee36e,
    l: _0x7c572,
    prefix: _0x32b7c9,
    quoted: _0x2a4c0c,
    body: _0x2ed9bf,
    isCmd: _0xf2b899,
    command: _0x44917,
    args: _0x50d895,
    q: _0x64af07,
    isGroup: _0x5599b0,
    sender: _0x92f9ee,
    senderNumber: _0x1b95d9,
    botNumber2: _0x22d3a1,
    botNumber: _0x498d73,
    pushname: _0x36c0c9,
    isMe: _0x353d52,
    isOwner: _0x4fe5c8,
    groupMetadata: _0x5f0dbd,
    groupName: _0x5a355f,
    participants: _0x2519bf,
    groupAdmins: _0x4304b3,
    isBotAdmins: _0x907c81,
    isAdmins: _0x21a567,
    reply: _0x2a6db4
  }) => {
    try {
      if (!_0x50d895[0]) {
        return _0x599214.reply("Mention a GitHub username to stalk.");
      }
      const _0x5e9a00 = _0x50d895[0];
      const _0xa40d35 = await axios.get("https://api.github.com/users/" + _0x5e9a00);
      const _0x166ba8 = _0xa40d35.data;
      if (_0xa40d35.status !== 200) {
        return _0xb27868.reply("❌ GitHub user not found.");
      }
      let _0x45ae81 = "🌟 *GitHub Profile - @" + _0x166ba8.login + "*\n\n";
      _0x45ae81 += "  ◦  *Name*: " + (_0x166ba8.name || "N/A") + "\n";
      _0x45ae81 += "  ◦  *Username*: @" + _0x166ba8.login + "\n";
      _0x45ae81 += "  ◦  *Bio*: " + (_0x166ba8.bio || "N/A") + "\n";
      _0x45ae81 += "  ◦  *ID*: " + _0x166ba8.id + "\n";
      _0x45ae81 += "  ◦  *Node ID*: " + _0x166ba8.node_id + "\n";
      _0x45ae81 += "  ◦  *Profile URL*: " + _0x166ba8.avatar_url + "\n";
      _0x45ae81 += "  ◦  *GitHub URL*: " + _0x166ba8.html_url + "\n";
      _0x45ae81 += "  ◦  *Type*: " + _0x166ba8.type + "\n";
      _0x45ae81 += "  ◦  *Admin*: " + (_0x166ba8.site_admin ? "Yes" : 'No') + "\n";
      _0x45ae81 += "  ◦  *Company*: " + (_0x166ba8.company || "N/A") + "\n";
      _0x45ae81 += "  ◦  *Blog*: " + (_0x166ba8.blog || "N/A") + "\n";
      _0x45ae81 += "  ◦  *Location*: " + (_0x166ba8.location || "N/A") + "\n";
      _0x45ae81 += "  ◦  *Email*: " + (_0x166ba8.email || "N/A") + "\n";
      _0x45ae81 += "  ◦  *Public Repositories*: " + _0x166ba8.public_repos + "\n";
      _0x45ae81 += "  ◦  *Public Gists*: " + _0x166ba8.public_gists + "\n";
      _0x45ae81 += "  ◦  *Followers*: " + _0x166ba8.followers + "\n";
      _0x45ae81 += "  ◦  *Following*: " + _0x166ba8.following + "\n";
      _0x45ae81 += "  ◦  *Created At*: " + _0x166ba8.created_at + "\n";
      _0x45ae81 += "  ◦  *Updated At*: " + _0x166ba8.updated_at + "\n";
      const _0x17784b = await fetch("https://api.github.com/users/" + _0x5e9a00 + "/repos?per_page=5&sort=stargazers_count&direction=desc");
      const _0x4dd8d6 = await _0x17784b.json();
      if (_0x4dd8d6.length > 0) {
        const _0x28713a = _0x4dd8d6.slice(0, 5);
        const _0x2bb2ae = _0x28713a.map(_0x201d10 => {
          return "  ◦  *Repository*: [" + _0x201d10.name + '](' + _0x201d10.html_url + ")\n  ◦  *Description*: " + (_0x201d10.description || "N/A") + "\n  ◦  *Stars*: " + _0x201d10.stargazers_count + "\n  ◦  *Forks*: " + _0x201d10.forks;
        });
        const _0x1dec8a = "📚 *Top Starred Repositories*\n\n" + _0x2bb2ae.join("\n\n");
        _0x45ae81 += "\n\n" + _0x1dec8a;
      } else {
        _0x45ae81 += "\n\nNo public repositories found.";
      }
      const _0x24cbf1 = {
        url: _0x166ba8.avatar_url
      };
      const _0x372dc3 = {
        image: _0x24cbf1,
        caption: _0x45ae81
      };
      await _0x1fa57f.sendMessage(_0xb27868.chat, _0x372dc3, {
        'quoted': _0xb27868
      });
      const _0x3806cc = {
        text: '✔',
        key: _0x599214.key
      };
      const _0x3b147b = {
        react: _0x3806cc
      };
      await _0x1fa57f.sendMessage(_0x599214.chat, _0x3b147b);
    } catch (_0x55b9d5) {
      console.error("Error fetching GitHub data:", _0x55b9d5);
      const _0x5ac30b = {
        quoted: _0xb27868
      };
      await _0x1fa57f.sendMessage(_0x599214.chat, "An error occurred while fetching GitHub data.", _0x5ac30b);
      const _0x5613c8 = {
        text: '✅',
        key: _0xb27868.key
      };
      const _0x2779b3 = {
        react: _0x5613c8
      };
      await _0x1fa57f.sendMessage(_0x3ee36e, _0x2779b3);
      _0x2a6db4();
      _0x7c572(e);
    }
  });
  const _0x4d0d68 = {
    pattern: "infobot",
    react: "🎙️",
    desc: "To see info of bot",
    category: "search",
    use: ".infobot",
    filename: __filename
  };
  cmd(_0x4d0d68, async (_0x596f39, _0x4a05e6, _0x3255cf, {
    from: _0x499f0c,
    l: _0x314e4d,
    prefix: _0x422085,
    quoted: _0x306589,
    body: _0x390f69,
    isCmd: _0x4db28e,
    command: _0x9cd452,
    args: _0x14c145,
    q: _0x41803a,
    isGroup: _0x192cfe,
    sender: _0xbdc701,
    senderNumber: _0x589315,
    botNumber2: _0x22f4f1,
    botNumber: _0x49d3e8,
    pushname: _0x1ad477,
    isMe: _0x342e36,
    isOwner: _0x1e9631,
    groupMetadata: _0x9a56b4,
    groupName: _0x3430c8,
    participants: _0x2179ea,
    groupAdmins: _0x2b8f93,
    isBotAdmins: _0x2aacc4,
    isAdmins: _0x21b0b0,
    reply: _0x4dcd2f
  }) => {
    try {
      const _0x2a5e5b = "\n╭━──━─◈─━─━╮\n│🔖 *Bot Name* : X-BYTE\n│🔖 *Owner Name* : Hamza\n│🔖 \n│🔖 *Prefix* : .\n│🔖 *Runtime* : _*" + hours + "h " + minutes + "m " + seconds + "s*_\n╰━━─━─◈─━─━╯";
      const _0xc8211c = [".menu", ".ping"];
      _0x596f39.sendPoll(_0x4a05e6.chat, _0x2a5e5b, _0xc8211c);
      const _0xf0ffca = {
        text: '✅',
        key: _0x4a05e6.key
      };
      const _0x3c914b = {
        react: _0xf0ffca
      };
      await _0x596f39.sendMessage(_0x499f0c, _0x3c914b);
    } catch (_0x2f7143) {
      _0x4dcd2f();
      _0x314e4d(_0x2f7143);
    }
  });
  const _0x2ae08e = {
    pattern: "nofind",
    react: "🎙️",
    desc: "To see same to the number",
    category: "search",
    use: ".nofind",
    filename: __filename
  };
  cmd(_0x2ae08e, async (_0x29d2e6, _0x10cf39, _0x4cc8c0, {
    from: _0x32da01,
    l: _0x2fe096,
    prefix: _0x4a1edf,
    quoted: _0x69cd66,
    body: _0x1a5896,
    isCmd: _0x841d1,
    command: _0x67e8e3,
    args: _0x22eeef,
    q: _0x26b838,
    isGroup: _0x52f350,
    sender: _0x5ec79c,
    senderNumber: _0x1fdf64,
    botNumber2: _0x42ceb4,
    botNumber: _0x4fbed6,
    pushname: _0x589d48,
    isMe: _0x58156f,
    isOwner: _0x3f95f1,
    groupMetadata: _0x4bae4c,
    groupName: _0x467a84,
    participants: _0x33c2df,
    groupAdmins: _0xfe0dc4,
    isBotAdmins: _0x1827e6,
    isAdmins: _0xdbd537,
    reply: _0x31c27e
  }) => {
    try {
      if (!_0x26b838) {
        throw "Give a number to search";
      }
      if (!_0x26b838.match(/x/g)) {
        throw "*Example: " + (_0x4a1edf + _0x67e8e3) + " 919142294xxx";
      }
      let _0x1ef6d9 = _0x26b838.match(/x/g).length;
      let _0xeed826 = Math.pow(10, _0x1ef6d9);
      let _0x157aa0 = [];
      for (let _0x78c88d = 0; _0x78c88d < _0xeed826; _0x78c88d++) {
        let _0x14cf1f = [..._0x78c88d.toString().padStart(_0x1ef6d9, '0')];
        let _0x66ad84 = _0x26b838.replace(/x/g, () => _0x14cf1f.shift()) + "@s.whatsapp.net";
        if (await _0x29d2e6.onWhatsApp(_0x66ad84).then(_0x40b056 => (_0x40b056[0] || {}).exists)) {
          let _0x3db4a4 = await _0x29d2e6.fetchStatus(_0x66ad84)["catch"](_0x4b08cc => {});
          const _0x181cfa = {
            'exists': true,
            'jid': _0x66ad84,
            ..._0x3db4a4
          };
          _0x157aa0.push(_0x181cfa);
        } else {
          const _0x4a15d5 = {
            exists: false,
            jid: _0x66ad84
          };
          _0x157aa0.push(_0x4a15d5);
        }
      }
      const _0x3d2cb5 = {
        text: '✅',
        key: _0x10cf39.key
      };
      const _0x33bfb4 = {
        react: _0x3d2cb5
      };
      await _0x29d2e6.sendMessage(_0x32da01, _0x33bfb4);
    } catch (_0x544bc9) {
      _0x31c27e();
      _0x2fe096(_0x544bc9);
    }
  });
  const _0x4f3864 = {
    pattern: "google",
    react: "🎙️",
    desc: "To search infomations",
    category: "search",
    use: ".google <search name>",
    filename: __filename
  };
  function _0x44feb9(_0x1810c0, _0x2c158, _0x1b22a8, _0x1da6c1, _0x138903) {
    return _0x27ab(_0x138903 + 0x13e, _0x1da6c1);
  }
  cmd(_0x4f3864, async (_0x177630, _0x102a37, _0x464412, {
    from: _0x2c1d5f,
    l: _0x21a9ab,
    prefix: _0x3659c1,
    quoted: _0x9e653a,
    body: _0x4486db,
    isCmd: _0x57115e,
    command: _0x3dfcd8,
    args: _0xa96d13,
    q: _0x58e3f2,
    isGroup: _0x4123c8,
    sender: _0x291bc6,
    senderNumber: _0x6dcd29,
    botNumber2: _0x515670,
    botNumber: _0x3b344c,
    pushname: _0x38e97e,
    isMe: _0x71fbff,
    isOwner: _0x5c9ac4,
    groupMetadata: _0xfe20c5,
    groupName: _0x2140a4,
    participants: _0x1b528c,
    groupAdmins: _0x3e0ee4,
    isBotAdmins: _0xe3c503,
    isAdmins: _0x29f8fb,
    reply: _0xac18ee
  }) => {
    try {
      if (!_0x58e3f2) {
        throw "Example : " + (_0x3659c1 + _0x3dfcd8) + " what is a bot";
      }
      let _0x4db452 = require("google-it");
      const _0x18ef97 = {
        query: _0x58e3f2
      };
      _0x4db452(_0x18ef97).then(_0x580f23 => {
        let _0x7b646a = "Google Search From : " + _0x58e3f2 + "\n\n";
        for (let _0x586fcf of _0x580f23) {
          _0x7b646a += "⭔ *Title* : " + _0x586fcf.title + "\n";
          _0x7b646a += "⭔ *Description* : " + _0x586fcf.snippet + "\n";
          _0x7b646a += "⭔ *Link* : " + _0x586fcf.link + "\n\n────────────────────────\n\n";
        }
        _0x102a37.reply(_0x7b646a);
      });
      let _0x49cd62 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "see in google",
          'url': _0x58e3f2,
          'merchant_url': _0x58e3f2
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "restart again",
          'id': ".google " + _0x58e3f2
        })
      }];
      const _0x52c715 = {
        image: "https://telegra.ph/file/497a6d76131059588e9e2.jpg",
        header: '',
        footer: config.FOOTER,
        body: "X-BYTE  GOOGLE SEARCH"
      };
      return await _0x177630.sendButtonMessage(_0x2c1d5f, _0x49cd62, _0x464412, _0x52c715);
      const _0x3da27d = {
        text: '✅',
        key: _0x102a37.key
      };
      const _0x30ffad = {
        react: _0x3da27d
      };
      await _0x177630.sendMessage(_0x2c1d5f, _0x30ffad);
    } catch (_0x22c3e1) {
      _0xac18ee();
      _0x21a9ab(_0x22c3e1);
    }
  });
  function _0x27ab(_0x1e7f89, _0x4ba20f) {
    const _0x2c6e33 = _0x2484();
    _0x27ab = function (_0x52222a, _0xeb6e45) {
      _0x52222a = _0x52222a - 253;
      let _0x385382 = _0x2c6e33[_0x52222a];
      if (_0x27ab.QCXRSa === undefined) {
        var _0x352fec = function (_0x2fe97f) {
          let _0xb2bd60 = '';
          let _0x567bce = '';
          let _0x4dfe9f = 0;
          let _0x2b5f03;
          let _0x417c7f;
          for (let _0x14c5ab = 0; _0x417c7f = _0x2fe97f.charAt(_0x14c5ab++); ~_0x417c7f && (_0x2b5f03 = _0x4dfe9f % 4 ? _0x2b5f03 * 64 + _0x417c7f : _0x417c7f, _0x4dfe9f++ % 4) ? _0xb2bd60 += String.fromCharCode(255 & _0x2b5f03 >> (-2 * _0x4dfe9f & 6)) : 0) {
            _0x417c7f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x417c7f);
          }
          let _0x5edb6b = 0;
          for (let _0x8757cf = _0xb2bd60.length; _0x5edb6b < _0x8757cf; _0x5edb6b++) {
            _0x567bce += '%' + ('00' + _0xb2bd60.charCodeAt(_0x5edb6b).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x567bce);
        };
        const _0x119477 = function (_0x4c8388, _0x192386) {
          let _0x257b54 = [];
          let _0x186cf6 = 0;
          let _0x31c785;
          let _0x5c1dc5 = '';
          _0x4c8388 = _0x352fec(_0x4c8388);
          let _0x46e71e;
          for (_0x46e71e = 0; _0x46e71e < 256; _0x46e71e++) {
            _0x257b54[_0x46e71e] = _0x46e71e;
          }
          for (_0x46e71e = 0; _0x46e71e < 256; _0x46e71e++) {
            _0x186cf6 = (_0x186cf6 + _0x257b54[_0x46e71e] + _0x192386.charCodeAt(_0x46e71e % _0x192386.length)) % 256;
            _0x31c785 = _0x257b54[_0x46e71e];
            _0x257b54[_0x46e71e] = _0x257b54[_0x186cf6];
            _0x257b54[_0x186cf6] = _0x31c785;
          }
          _0x46e71e = 0;
          _0x186cf6 = 0;
          for (let _0x38ff27 = 0; _0x38ff27 < _0x4c8388.length; _0x38ff27++) {
            _0x46e71e = (_0x46e71e + 1) % 256;
            _0x186cf6 = (_0x186cf6 + _0x257b54[_0x46e71e]) % 256;
            _0x31c785 = _0x257b54[_0x46e71e];
            _0x257b54[_0x46e71e] = _0x257b54[_0x186cf6];
            _0x257b54[_0x186cf6] = _0x31c785;
            _0x5c1dc5 += String.fromCharCode(_0x4c8388.charCodeAt(_0x38ff27) ^ _0x257b54[(_0x257b54[_0x46e71e] + _0x257b54[_0x186cf6]) % 256]);
          }
          return _0x5c1dc5;
        };
        _0x27ab.VSVFyY = _0x119477;
        _0x1e7f89 = arguments;
        _0x27ab.QCXRSa = true;
      }
      const _0x53f618 = _0x2c6e33[0];
      const _0x527c3 = _0x52222a + _0x53f618;
      const _0x34017b = _0x1e7f89[_0x527c3];
      if (!_0x34017b) {
        if (_0x27ab.raPimh === undefined) {
          _0x27ab.raPimh = true;
        }
        _0x385382 = _0x27ab.VSVFyY(_0x385382, _0xeb6e45);
        _0x1e7f89[_0x527c3] = _0x385382;
      } else {
        _0x385382 = _0x34017b;
      }
      return _0x385382;
    };
    return _0x27ab(_0x1e7f89, _0x4ba20f);
  }
  const _0x298c8b = {
    pattern: "itunes",
    react: "🎙️",
    desc: "To see info of Itunes",
    category: "search",
    use: ".itunes <song name>",
    filename: __filename
  };
  cmd(_0x298c8b, async (_0x398312, _0x4b5c7c, _0x364231, {
    from: _0x14cf36,
    l: _0xe52c9f,
    quoted: _0xbbb5b,
    body: _0xfb7a53,
    isCmd: _0x221fa3,
    command: _0x33dcff,
    args: _0x3f7dd1,
    q: _0x1576f7,
    isGroup: _0x551d5e,
    sender: _0x3044da,
    senderNumber: _0x14b196,
    botNumber2: _0x52d343,
    botNumber: _0x2b4ec4,
    pushname: _0x54cd32,
    isMe: _0x18845a,
    isOwner: _0x1d7d35,
    groupMetadata: _0x14e714,
    groupName: _0x41619b,
    participants: _0x57f4b0,
    groupAdmins: _0x42b27e,
    isBotAdmins: _0x355896,
    isAdmins: _0x7591a3,
    reply: _0x204952
  }) => {
    try {
      if (!_0x1576f7) {
        return _0x204952("Please provide a song name");
      }
      let _0x2523aa = await fetch("https://api.popcat.xyz/itunes?q=" + _0x1576f7);
      if (!_0x2523aa.ok) {
        throw new Error("API request failed with status " + _0x2523aa.status);
      }
      let _0x38d68a = await _0x2523aa.json();
      console.log("JSON response:", _0x38d68a);
      let _0x455a69 = "*Song Information:*\n\n     • *Name:* " + _0x38d68a.name + "\n\n     • *Artist:* " + _0x38d68a.artist + "\n\n     • *Album:* " + _0x38d68a.album + "\n\n     • *Release Date:* " + _0x38d68a.release_date + "\n\n     • *Price:* " + _0x38d68a.price + "\n\n     • *Length:* " + _0x38d68a.length + "\n\n     • *Genre:* " + _0x38d68a.genre + "\n\n     • *URL:* " + _0x38d68a.url;
      if (_0x38d68a.thumbnail) {
        const _0x38bad7 = {
          url: _0x38d68a.thumbnail
        };
        const _0x22dc26 = {
          image: _0x38bad7,
          caption: _0x455a69
        };
        await _0x398312.sendMessage(_0x4b5c7c.chat, _0x22dc26, {
          'quoted': _0x4b5c7c
        });
      }
      const _0x4c2aee = {
        text: '✅',
        key: _0x4b5c7c.key
      };
      const _0x1435c8 = {
        react: _0x4c2aee
      };
      await _0x398312.sendMessage(_0x14cf36, _0x1435c8);
    } catch (_0xf0e35a) {
      _0x204952();
      _0xe52c9f(_0xf0e35a);
    }
  });
  const _0x8d4b85 = {};
  function _0x5da306(_0x15587b, _0x2abca6, _0x1cc077, _0x299e7a, _0x47881c) {
    return _0x27ab(_0x47881c - 0xe7, _0x299e7a);
  }
  _0x8d4b85.pattern = "pemoji";
  _0x8d4b85.react = '🔖';
  _0x8d4b85.desc = "imoji to image convert";
  _0x8d4b85.category = "search";
  _0x8d4b85.use = ".pemoji";
  _0x8d4b85.filename = __filename;
  cmd(_0x8d4b85, async (_0x530136, _0xed2026, _0x5991c8, {
    from: _0x4ea4e5,
    l: _0x308684,
    quoted: _0x4ff373,
    body: _0x4b21fb,
    isCmd: _0x28858a,
    command: _0x971cd2,
    args: _0x5be61c,
    q: _0x267936,
    isGroup: _0x53af37,
    sender: _0x2f905d,
    senderNumber: _0x3c73f1,
    botNumber2: _0x8308a6,
    botNumber: _0x1e3e6d,
    pushname: _0x5e9cb2,
    isMe: _0x2e0801,
    isOwner: _0x4b3cdb,
    groupMetadata: _0x4b7996,
    groupName: _0x2c7a8b,
    participants: _0x3105da,
    groupAdmins: _0x1c6fc1,
    isBotAdmins: _0x2ac2a1,
    isAdmins: _0x36b644,
    reply: _0x35cd35
  }) => {
    try {
      if (!_0x267936) {
        return _0x35cd35("*👸💬 Please Give me a imoji*\nExample - ." + _0x971cd2 + '👸');
      }
      const _0x578d37 = {
        text: '✨',
        key: _0xed2026.key
      };
      const _0x2225e7 = {
        react: _0x578d37
      };
      await _0x530136.sendMessage(_0x4ea4e5, _0x2225e7);
      await _0x530136.sendMessage(_0xed2026.chat, {
        'image': {
          'url': "https://api.vihangayt.me/search/semoji?q=" + encodeURIComponent(_0x267936) + " "
        },
        'caption': '' + global.cap
      }, {
        'quoted': _0xed2026
      });
      const _0xec67aa = {
        text: '✅',
        key: _0xed2026.key
      };
      const _0x1d9868 = {
        react: _0xec67aa
      };
      await _0x530136.sendMessage(_0x4ea4e5, _0x1d9868);
    } catch (_0x2395bf) {
      _0x35cd35();
      _0x308684(_0x2395bf);
    }
  });
  const _0x39a5ec = {
    pattern: "slsubsearch",
    react: '🔎',
    desc: "Search All Subtitles  from Web Site",
    category: "search",
    use: ".slsubsearch",
    filename: __filename
  };
  cmd(_0x39a5ec, async (_0x28deb7, _0x428d02, _0x4750e7, {
    from: _0xf0bc64,
    l: _0x24c426,
    quoted: _0x8cc82f,
    body: _0x4a53eb,
    isCmd: _0x223984,
    command: _0x3e895e,
    args: _0x122169,
    q: _0x2facdc,
    isGroup: _0x640ae,
    sender: _0x3e2afb,
    senderNumber: _0x388c56,
    botNumber2: _0x4309ae,
    botNumber: _0x2d2193,
    pushname: _0x1e74c7,
    isMe: _0x1eab1d,
    isOwner: _0x202167,
    groupMetadata: _0x4aa1bc,
    groupName: _0x10704b,
    participants: _0x440438,
    groupAdmins: _0x5c064f,
    isBotAdmins: _0xbb1577,
    isCreator: _0x10d4ab,
    isDev: _0x59b701,
    isAdmins: _0x238149,
    reply: _0x13208a
  }) => {
    try {
      if (!_0x2facdc) {
        return _0x13208a("❗ *Please enter movie name to Search Subtitles*");
      }
      const _0x20f1f4 = await subsearch(_0x2facdc);
      let _0x480aeb = "\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *X-BYTE ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n";
      for (let _0x18711b of _0x20f1f4.results) {
        _0x480aeb += "📃 *" + _0x18711b.no + " - " + _0x18711b.title + "*\n🔗 _Link : " + _0x18711b.link + "_ \n\n\n";
      }
      const _0x573a2f = {
        url: "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png"
      };
      const _0x5f2eb0 = {
        quoted: _0x428d02
      };
      await _0x28deb7.sendMessage(_0xf0bc64, {
        'image': _0x573a2f,
        'caption': _0x480aeb + "*X-BYTE ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ TalkDrove*"
      }, _0x5f2eb0);
    } catch (_0x374740) {
      _0x13208a("⛔ *Error accurated !!*\n\n" + _0x374740);
      _0x24c426(_0x374740);
    }
  });
  const _0x41a44a = {
    pattern: "imdb",
    react: '🍎',
    desc: "To check imdb",
    category: "search",
    use: ".imdb"
  };
  cmd(_0x41a44a, async (_0x211bf3, _0xa86071, _0x1dc39a, {
    from: _0x62304a,
    l: _0x39bae1,
    quoted: _0x503fed,
    body: _0x563776,
    isCmd: _0x187c81,
    command: _0x34d599,
    args: _0x604ed9,
    q: _0x1e10e2,
    isGroup: _0x22ef9a,
    sender: _0x305419,
    senderNumber: _0x4a8c37,
    botNumber2: _0x398d58,
    botNumber: _0x156400,
    pushname: _0x40645b,
    isMe: _0x3ebeb1,
    isOwner: _0x4b1df4,
    groupMetadata: _0x354a50,
    groupName: _0x13c027,
    participants: _0x44943c,
    groupAdmins: _0x353740,
    isBotAdmins: _0x1461be,
    isAdmins: _0x51023b,
    reply: _0x560d6e
  }) => {
    try {
      if (!_0x1e10e2) {
        return _0x560d6e("_Name a Series or movie");
      }
      let _0x4291e5 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x1e10e2 + "&plot=full");
      let _0x248f27 = '';
      console.log(_0x4291e5.data);
      _0x248f27 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
      _0x248f27 += "🎬Title      : " + _0x4291e5.data.Title + "\n";
      _0x248f27 += "📅Year       : " + _0x4291e5.data.Year + "\n";
      _0x248f27 += "⭐Rated      : " + _0x4291e5.data.Rated + "\n";
      _0x248f27 += "📆Released   : " + _0x4291e5.data.Released + "\n";
      _0x248f27 += "⏳Runtime    : " + _0x4291e5.data.Runtime + "\n";
      _0x248f27 += "🌀Genre      : " + _0x4291e5.data.Genre + "\n";
      _0x248f27 += "👨🏻‍💻Director   : " + _0x4291e5.data.Director + "\n";
      _0x248f27 += "✍Writer     : " + _0x4291e5.data.Writer + "\n";
      _0x248f27 += "👨Actors     : " + _0x4291e5.data.Actors + "\n";
      _0x248f27 += "📃Plot       : " + _0x4291e5.data.Plot + "\n";
      _0x248f27 += "🌐Language   : " + _0x4291e5.data.Language + "\n";
      _0x248f27 += "🌍Country    : " + _0x4291e5.data.Country + "\n";
      _0x248f27 += "🎖️Awards     : " + _0x4291e5.data.Awards + "\n";
      _0x248f27 += "📦BoxOffice  : " + _0x4291e5.data.BoxOffice + "\n";
      _0x248f27 += "🏙️Production : " + _0x4291e5.data.Production + "\n";
      _0x248f27 += "🌟imdbRating : " + _0x4291e5.data.imdbRating + "\n";
      _0x248f27 += "✅imdbVotes  : " + _0x4291e5.data.imdbVotes + '';
      const _0x3d7840 = {
        url: _0x4291e5.data.Poster
      };
      const _0x1ae30a = {
        image: _0x3d7840,
        caption: _0x248f27
      };
      const _0x25b299 = {
        quoted: _0xa86071
      };
      _0x211bf3.sendMessage(_0x1dc39a.chat, _0x1ae30a, _0x25b299);
      const _0x45bbda = {
        text: '✅',
        key: _0xa86071.key
      };
      const _0x37e12f = {
        react: _0x45bbda
      };
      await _0x211bf3.sendMessage(_0x62304a, _0x37e12f);
    } catch (_0x1ceb10) {
      _0x39bae1(_0x1ceb10);
    }
  });
  const _0x3eca3d = {
    pattern: "tempmail",
    react: '👾',
    desc: "to take a tempmail",
    category: "download",
    use: ".tempmail",
    filename: __filename
  };
  cmd(_0x3eca3d, async (_0x368cde, _0x479309, _0x420c5a, {
    from: _0x325cf7,
    l: _0x57331f,
    prefix: _0x4773eb,
    quoted: _0x20f9cb,
    body: _0x142dc9,
    isCmd: _0xfe5ef8,
    command: _0x315ef1,
    args: _0x28a491,
    q: _0x19de8a,
    isGroup: _0x39ec6f,
    sender: _0x3c3637,
    senderNumber: _0x50c8f7,
    botNumber2: _0x371069,
    botNumber: _0x3368fb,
    pushname: _0x12b735,
    isMe: _0x13ae8b,
    isOwner: _0x45c750,
    groupMetadata: _0x3a6ef,
    groupName: _0x3871ae,
    participants: _0x15a7c4,
    groupAdmins: _0x349203,
    isBotAdmins: _0x5c5a41,
    isAdmins: _0x25dd35,
    reply: _0x4d7edd
  }) => {
    try {
      const _0x29680e = await fetch("https://api.maher-zubair.tech/misc/tempmail");
      const _0x5491dc = await _0x29680e.json();
      if (!_0x5491dc || !_0x5491dc.email) {
        return _0x4d7edd("Failed to generate temporary email");
      }
      const _0x338858 = _0x5491dc.email;
      return _0x4d7edd("Generated Temporary Email: " + _0x338858);
    } catch (_0x3e64c9) {
      return _0x4d7edd("Unexpected error occurred during the request.");
      _0x57331f(_0x3e64c9);
    }
  });
  const _0x42689c = {
    pattern: "checkmail",
    react: '👾',
    desc: "to see mail",
    category: "download",
    use: ".checkmail",
    filename: __filename
  };
  cmd(_0x42689c, async (_0x3c48bf, _0x51f5d8, _0x467c5a, {
    from: _0x212777,
    l: _0x792836,
    prefix: _0x340790,
    quoted: _0x2d3461,
    body: _0x510f4d,
    isCmd: _0x37bb38,
    command: _0x5d5b03,
    args: _0x3bb591,
    q: _0x1105cf,
    isGroup: _0x2fbad8,
    sender: _0x57d516,
    senderNumber: _0x271fd2,
    botNumber2: _0x3bf1bd,
    botNumber: _0x204f64,
    pushname: _0x731e6d,
    isMe: _0x2dd638,
    isOwner: _0x44f020,
    groupMetadata: _0x349371,
    groupName: _0x554f38,
    participants: _0x3fcf3c,
    groupAdmins: _0x368122,
    isBotAdmins: _0x283c43,
    isAdmins: _0x1645bc,
    reply: _0x2b2a63
  }) => {
    try {
      if (!_0x1105cf) {
        return _0x2b2a63("*Provide me tempmail for view inbox*");
      }
      const _0x2fe103 = encodeURIComponent(_0x1105cf);
      const _0x18f1f4 = "https://api.maher-zubair.tech/misc/get_inbox_tempmail?q=" + _0x2fe103;
      const _0x1809f3 = await fetch(_0x18f1f4);
      if (!_0x1809f3.ok) {
        return _0x2b2a63("Invalid response from the API. Status code: " + _0x1809f3.status);
      }
      const _0x41b038 = await _0x1809f3.json();
      if (!_0x41b038 || !_0x41b038.messages) {
        return _0x2b2a63("Failed to retrieve email messages");
      }
      const _0x161e11 = _0x41b038.messages;
      for (const _0x1bc5ed of _0x161e11) {
        const _0x5d0d81 = _0x1bc5ed.sender;
        const _0x24c951 = _0x1bc5ed.subject;
        const _0x1bf819 = new Date(JSON.parse(_0x1bc5ed.message).date).toLocaleString();
        const _0x4a2ce0 = JSON.parse(_0x1bc5ed.message).body;
        const _0x18e699 = "Sender: " + _0x5d0d81 + "\nSubject: " + _0x24c951 + "\nDate: " + _0x1bf819 + "\nMessage: " + _0x4a2ce0;
        await _0x2b2a63(_0x18e699);
      }
    } catch (_0xd02de4) {
      console.error("Error during API request:", _0xd02de4);
      return _0x2b2a63("Unexpected error occurred during the request.");
      _0x792836(_0xd02de4);
    }
  });
  const _0x19b2c1 = {
    pattern: "gitclone",
    react: '🔖',
    desc: "download github repos",
    category: "download",
    use: ".gitclone",
    filename: __filename
  };
  cmd(_0x19b2c1, async (_0x3cf4b1, _0x1148f8, _0x471e40, {
    from: _0xd3216b,
    prefix: _0xa4740a,
    l: _0x828c52,
    quoted: _0x43655f,
    body: _0x495a4f,
    isCmd: _0x944b79,
    command: _0x59dd10,
    args: _0x2d2fe1,
    q: _0x2f51c7,
    isGroup: _0x3d743a,
    sender: _0x4bc4c1,
    senderNumber: _0xb791e3,
    botNumber2: _0x5523e7,
    botNumber: _0x2eff15,
    pushname: _0x1d11b9,
    isMe: _0x21fdcd,
    isOwner: _0x15bd36,
    groupMetadata: _0x49c589,
    groupName: _0x4e8682,
    participants: _0x5e8bb0,
    groupAdmins: _0x35ec2d,
    isBotAdmins: _0x3396d2,
    isAdmins: _0x45e3b2,
    reply: _0x2c083c
  }) => {
    try {
      if (!_0x2d2fe1[0]) {
        _0x2c083c("Use " + _0xa4740a + "gitclone repo link\n: https://github.com/HyHamza/X-BYTE");
      }
      if (!/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(_0x2d2fe1[0])) {
        return _0x2c083c("link");
      }
      let [, _0x47a111, _0x3b91b1] = _0x2d2fe1[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
      _0x3b91b1 = _0x3b91b1.replace(/.git$/, '');
      let _0x44975a = "https://api.github.com/repos/" + _0x47a111 + '/' + _0x3b91b1 + "/zipball";
      let _0xbc935c = '' + _0x47a111 + _0x3b91b1;
      const _0x505c4b = {
        url: _0x44975a
      };
      _0x3cf4b1.sendMessage(_0x1148f8.chat, {
        'document': _0x505c4b,
        'fileName': _0xbc935c + ".zip",
        'mimetype': "application/zip",
        'caption': "*X-BYTE*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ TalkDrove*"
      }, {
        'quoted': _0x1148f8
      })["catch"](_0x5cbddf => _0x2c083c(mess.error));
    } catch (_0x443393) {
      _0x2c083c();
      _0x828c52(_0x443393);
    }
  });
  const _0x34b71a = {
    pattern: "ringtone",
    react: '🔖',
    desc: "to download ringtone"
  };
  function _0x58f4b8(_0x2cdece, _0x333e24, _0x17aabd, _0x470324, _0x529b07) {
    return _0x27ab(_0x333e24 + 0x175, _0x529b07);
  }
  _0x34b71a.category = "download";
  _0x34b71a.use = ".ringtone";
  _0x34b71a.filename = __filename;
  cmd(_0x34b71a, async (_0x456649, _0x3fe742, _0x8e504d, {
    from: _0x1feefa,
    l: _0x4cedd2,
    quoted: _0x3d90e9,
    prefix: _0x2e7c66,
    body: _0x15087c,
    isCmd: _0x141a51,
    command: _0x37eaf2,
    args: _0xe5481a,
    q: _0x3ca553,
    isGroup: _0x36bc79,
    sender: _0x50f8d0,
    senderNumber: _0x48d14a,
    botNumber2: _0x4b344a,
    botNumber: _0x98aadd,
    pushname: _0x18019b,
    isMe: _0x172c02,
    isOwner: _0x167007,
    groupMetadata: _0x34ad9d,
    groupName: _0x93503,
    participants: _0x36596e,
    groupAdmins: _0x2241db,
    isBotAdmins: _0x3dd731,
    isAdmins: _0x25007f,
    reply: _0x5717e3
  }) => {
    try {
      if (!_0x3ca553) {
        _0x5717e3`${Lang.EXAMPLE}\n : ${_0x2e7c66 + _0x37eaf2} black rover`;
      }
      let {
        ringtone: _0x73899c
      } = require("../lib/scraper");
      let _0x3414ee = await _0x73899c(_0x3ca553);
      let _0x1ad2c2 = _0x3414ee[Math.floor(Math.random() * _0x3414ee.length)];
      const _0x5ce046 = {
        url: _0x1ad2c2.audio
      };
      _0x456649.sendMessage(_0x3fe742.chat, {
        'audio': _0x5ce046,
        'fileName': _0x1ad2c2.title + ".mp3",
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x3fe742
      });
      const _0x1ad7b1 = {
        text: '✅',
        key: _0x3fe742.key
      };
      const _0x53c5ba = {
        react: _0x1ad7b1
      };
      await _0x456649.sendMessage(_0x1feefa, _0x53c5ba);
    } catch (_0x43b876) {
      _0x5717e3();
      _0x4cedd2(_0x43b876);
    }
  });
  const _0x2c7e00 = {
    pattern: "couplepp",
    react: '🔖',
    desc: "couple pic download",
    category: "download",
    use: ".couplepp",
    filename: __filename
  };
  cmd(_0x2c7e00, async (_0x4ad6c0, _0x14f1f3, _0x3a4520, {
    from: _0x1f3969,
    l: _0x2cb05c,
    quoted: _0x410a90,
    body: _0x22daf7,
    isCmd: _0x475e88,
    command: _0x280ea0,
    args: _0x5baa80,
    q: _0x407723,
    isGroup: _0x5b8819,
    sender: _0xa4aa0f,
    senderNumber: _0x384fb4,
    botNumber2: _0x4f2635,
    botNumber: _0xe12aa6,
    pushname: _0x6ad489,
    isMe: _0x4d2131,
    isOwner: _0x45a9c3,
    groupMetadata: _0x260c84,
    groupName: _0x52a49a,
    participants: _0x280d2c,
    groupAdmins: _0x43e861,
    isBotAdmins: _0x4d362,
    isAdmins: _0x29a585,
    reply: _0x2a0377
  }) => {
    try {
      const _0x1e733c = {
        text: '💏',
        key: _0x14f1f3.key
      };
      const _0x274792 = {
        react: _0x1e733c
      };
      await _0x4ad6c0.sendMessage(_0x1f3969, _0x274792);
      let _0x1cea5c = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
      let _0x5051b4 = _0x1cea5c[Math.floor(Math.random() * _0x1cea5c.length)];
      const _0x1f4180 = {
        url: _0x5051b4.male
      };
      const _0x167808 = {
        image: _0x1f4180,
        caption: "Couple Male"
      };
      _0x4ad6c0.sendMessage(_0x14f1f3.chat, _0x167808, {
        'quoted': _0x14f1f3
      });
      const _0x32b3b0 = {
        url: _0x5051b4.female
      };
      const _0x3744dc = {
        image: _0x32b3b0,
        caption: "Couple Female"
      };
      _0x4ad6c0.sendMessage(_0x14f1f3.chat, _0x3744dc, {
        'quoted': _0x14f1f3
      });
      const _0x1f925f = {
        text: '✅',
        key: _0x14f1f3.key
      };
      const _0x408ef3 = {
        react: _0x1f925f
      };
      await _0x4ad6c0.sendMessage(_0x1f3969, _0x408ef3);
    } catch (_0xbc53b) {
      _0x2a0377();
      _0x2cb05c(_0xbc53b);
    }
  });
  const _0x38ec94 = {
    pattern: "slsub",
    react: '📃',
    alias: ["srisub"],
    desc: "Search Sinhala Subtitles  from Web Site",
    category: "download",
    use: ".slsub"
  };
  function _0x526fb3(_0x171f8e, _0x5a4b46, _0x352ad9, _0x3d6e25, _0x1fa310) {
    return _0x27ab(_0x1fa310 + 0x114, _0x352ad9);
  }
  _0x38ec94.filename = __filename;
  cmd(_0x38ec94, async (_0x140a12, _0x147b07, _0x9520e9, {
    from: _0x3c11af,
    l: _0x363ca0,
    quoted: _0x45d98c,
    body: _0x22b26c,
    isCmd: _0x257f7b,
    command: _0x2d23d6,
    args: _0x4b9964,
    q: _0xe8cd69,
    isGroup: _0xe919fe,
    sender: _0x3d2d6c,
    senderNumber: _0x166f1c,
    botNumber2: _0x10bd6a,
    botNumber: _0x4196b6,
    pushname: _0x133fdd,
    isMe: _0x340cbd,
    isOwner: _0x4be568,
    groupMetadata: _0x211564,
    groupName: _0x16df2f,
    participants: _0x2da2c1,
    groupAdmins: _0x11c54a,
    isBotAdmins: _0x149d64,
    isCreator: _0x31a83c,
    isDev: _0x6fddc6,
    isAdmins: _0x3be37f,
    reply: _0x54ed21
  }) => {
    try {
      if (!_0xe8cd69) {
        return _0x54ed21("❗ *Please enter movie name to download Subtitles*");
      }
      const _0x42a2d5 = await subsearch(_0xe8cd69);
      const _0x5e64af = await subdl(_0x42a2d5.results[0].link);
      const _0x4daf45 = "*X-BYTE SINHALA SUB DOWNLOADER*\n\n📊 *Movie Title - " + _0x5e64af.results.title + "*\n\n🔒 Creator - " + _0x5e64af.results.creater + "\n\n🖇️ _Link_ - " + _0x42a2d5.results[0].link + "\n\n";
      const _0x35adee = {
        url: _0x5e64af.results.img
      };
      const _0x1a5aa9 = {
        quoted: _0x147b07
      };
      await _0x140a12.sendMessage(_0x3c11af, {
        'image': _0x35adee,
        'caption': _0x4daf45 + "*X-BYTE ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ TalkDrove*"
      }, _0x1a5aa9);
      const _0x224724 = {
        url: _0x5e64af.results.dl_link
      };
      const _0x1161b5 = {
        document: _0x224724,
        caption: _0x5e64af.results.title,
        mimetype: "application/zip",
        fileName: _0x5e64af.results.title + ".zip"
      };
      const _0x2caff9 = {
        quoted: _0x147b07
      };
      await _0x140a12.sendMessage(_0x3c11af, _0x1161b5, _0x2caff9);
    } catch (_0x469e98) {
      _0x54ed21("🚫 *Error Accurated !!*\n\n" + _0x469e98);
      _0x363ca0(_0x469e98);
    }
  });
  const _0x26db37 = {
    pattern: "subdlfromlink",
    react: '📃',
    desc: "Download subtitles from Web Sites",
    category: "download",
    use: ".subdlfromlink",
    filename: __filename
  };
  cmd(_0x26db37, async (_0x29d320, _0x5d8887, _0x21a9d1, {
    from: _0x2cfe51,
    l: _0x15e9b3,
    quoted: _0x527349,
    body: _0x1c1396,
    isCmd: _0x202db5,
    command: _0x90aa23,
    args: _0x463c06,
    q: _0x354c5f,
    isGroup: _0x24e361,
    sender: _0x22c607,
    senderNumber: _0x5230a0,
    botNumber2: _0x483dcd,
    botNumber: _0x28afe6,
    pushname: _0x348cde,
    isMe: _0x42fa41,
    isOwner: _0x4a4823,
    groupMetadata: _0x5ab012,
    groupName: _0xe963e8,
    participants: _0x4c92d3,
    groupAdmins: _0x24c119,
    isBotAdmins: _0x52742b,
    isCreator: _0x5eb8cc,
    isDev: _0x1ff09f,
    isAdmins: _0x4d487e,
    reply: _0x17ee45
  }) => {
    try {
      if (!_0x354c5f) {
        return _0x17ee45("❗ Please enter movie Link to download Subtitles*");
      }
      if (!_0x354c5f.includes("baiscope")) {
        return _0x17ee45("🚫 *Please enter Valid Movie url*");
      }
      const _0x9e4bd = await subdl(_0x354c5f);
      const _0x29935e = "*X-BYTE SL SUBTITLES DOWNLOADER*\n\n📊 *Movie title - " + _0x9e4bd.results.title + "*\n\n🔒 Creator - " + _0x9e4bd.results.creater + "\n\n🖇️ _Link_ - " + _0x354c5f + "\n\n*X-BYTEᴠ3*\n*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ᴠᴀᴊɪʀᴀ*";
      const _0x2223d4 = {
        text: _0x29935e
      };
      const _0x4af82b = {
        quoted: _0x5d8887
      };
      await _0x29d320.sendMessage(_0x2cfe51, _0x2223d4, _0x4af82b);
      const _0x2978aa = {
        url: _0x9e4bd.results.dl_link
      };
      const _0x1a12cb = {
        document: _0x2978aa,
        caption: _0x9e4bd.results.title,
        mimetype: "application/zip",
        fileName: _0x9e4bd.results.title + ".zip"
      };
      const _0x59fee8 = {
        quoted: _0x5d8887
      };
      await _0x29d320.sendMessage(_0x2cfe51, _0x1a12cb, _0x59fee8);
    } catch (_0x375594) {
      _0x17ee45("🚫 *Error Accurated !!*\n\n" + _0x375594);
      _0x15e9b3(_0x375594);
    }
  });
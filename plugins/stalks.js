
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
  function _0x2484() {
    const _0x3d439e = ['4PYDW4RcTqhcPa', 'twRcIchcRa', 'hd/dNxu', 'W7T+B1q0', 'W5y3WOJcG8kY', 'd8kOWQKLpq', 'W4e/gCodia', 'nMngWR0w', 'W517WOy', 'ygNdKSowW64', 'fGZcVCkUpW', 'WOWfWPNdOCkx', 'WPL1WPqmWOq', 'f8k6WO7cVSk7', 'WQqpW4VdJCo+', 'W4NcV8k1W5K2', 'W57cUrKXzG', 'WRZcV8kGW5pdGG', 'mxedWQjp', 'WRbDBSofpa', 'kxDjWR1b', 'smonWQ5sCa', 'WRumWRtcUCkk', 'hhS1pCoA', 'WRvRW45Q', '8yspHaGIe8kC', 'WP8UW4edWQu', 'WPuda8kXWPS', 'qKmPz8kF', 'W48VfSkmlW', 'W4/cQCk+W48v', 'vwpdS8owW5W', 'j8kGW40', 'rtNdQCobja', 'W6RdSgK', 'WRLgnCoCWR7cUcNcIgvvoxFdVq', '4BA+4BAfYOxHTBBHT5O', 'BrhdUYFdVG', 'CZGOWPTK', 'W54Pfmk8Da', 'WPu4W5CuW7y', 'WP0NWQddT8kA', 'gedcKvxdJa', 'WPHKWOuuWOG', 'W7Xgf8oYW4W', 'bSkyWPSCWRu', 'nmokWOyhW7a', 'YipHTPKLY7hHT5G', 'FCoir0O', 'hZvJsSo+', 'W4RdVHeZWOu', 'FZudW67WKQYR', 'zCoGWPdcKCkl', 'qW3dQ8k1ya', 'dmoNW6JdPSo7', 'rqbqW50Q', 'W656W6rUWQK', 'W6ZdP2qdWRW', 'W4NcNSoBWQhdRW', 'WO7cUKf6EG', 'WPTtW4ifCa', 'jeqvuCkx', 'ef7dI8olW7K', 'CCk8Amk+Aq', 'mr7cGW', '8j+iQSoeW5RdOhy', 'WPRGTAdGT4ZGT5lGTii', 'W7FcRSoZWPNcLW', 'amk9W6O5Dq', 'WP0Ed8k8W58', 'WPC8W5brW6G', '4lsAW7lGTA7GTAFcHW', 'WP5JWOe', 'WRThWPCjWP8', 'WOPxemoiW60', 'd8kOWQLW', 'W7/cGmkKW4tdIa', 'W5yRWPxcG8kU', 'p1tcTG', 'W6axiSk2cq', 'WP87WPdcUCk4', 'WO86pSkFkW', 'fvFcKq', 'WRZcSCoHW6BdGG', 'dCkYW5tdPSo/', 'WReza8o6W6m', 'sraiWQ5c', 'zSkrnueb', 'ASknjXS', 'WPH1WOusWP4', '4lEB4lsaWQK4oW', 'EanNjSk6', 'FvBdS8odW54', 'vHVdHrdcGq', 'aSkSW7WJjW', 'h8oDWQtcIwW', 'cNy5zmkz', 'fbpcRCkOcG', 'W4/cQh0rha', 'zCkaiK8c', 'bIfCW4G7', 'amorW7/cJ2W', 'W45GqfOH', 'zar5W6Kz', '4P+RW7XocbS', 'lCoAxCojfW', 'C8oUW41/sG', 'ysjgW58u', 'FmoJWOmKsq', 'bLlIL5pcNh4', '4BAo4Bss4BsulFcISkRIGixWMzkP', 'hmo+W6i', 'fEg1OEg2TvxHT70', '4Pw94PAs4PAh4PAs4PAE', '4PUM4PQz4PUE4PQz4PM0', 'nmkskmk5yG', 'h8oeWQVcNwy', 'W5GdWPHbzq', 'eCo3W7tcSSo4', 'W5Xo4PAaWRhcMW', 'q3RdQCo4W6u', 'hSoZW7FdPSo3', 'kG/cL8kaaW', 'BXNcNmkomW', 'WOPO4OgAW7DW', 'iEc0Soc0Uoc0Toc1Tq', 'DCoOWPdcNmoa', 'vbDuW58Q', 'rc7dN2ldVa', 'W7GKWO1vcW', 'WP4FW5xdUCky', 'W5VcVhu', 'FxZcKZRcUW', 'FCknmWix', 'gSoLWPJcSCoN', 'sgVdMmonW74', '8jkfRmkrx8kKgW', 'Ax3dMSoAW44', 'wc/dKHhcOW', '4BwL4BEpYjzX4Bwr', 'dSoGW67dOCoR', 'W7aYfCowBa', 'j2qjea', 'W4qDWP5tmq', 'eCo6WORcS8kL', 'lmoctmkwvq', 'omowW73cOv0', 'W67dI1tdOYi', 'YA95YktiM8Q0', 'W5OPdmkJpW', 'WResW4mFWQi', 'c3qLzCkB', 'CadcG8o6uq', 'hZZdNHNcIG', 'W7xcU8kYWPtdHG', 'W7NdQ2KuWRe', 'WP42WOpdMCk9', 'WOHytSoxvq', 'W6GRxxJdRq', 'W63dRgqCWRO', 'kGNcL8o4vq', 'W5dcVMvKWRW', 'dqNcM8o6wW', 'W5D9W7j3WPe', 'W69+DMie', 'W6HdW5foWQC', 'WPVcOvjGea', 'rGRdNrZcKG', '4lwnuoc1QEc1NUc1La', 'DCoKWOddKmke', 'DSoyrKFcUa', 'ff3cS1pcKW', 'WQnIwwtcUq', 'W4yVgCkdga', 'lmoTWQ/cKCkK', 't8oOWPZcSCoC', 'xwpcPhBcLa', 'WQTJWOHnWP4', 'W4dcOG97W5u', 'a2uGCCkW', 'vH1gWPm', 'xM/dJCop', '4PAV4PwV4Pwn4PE64Pwz', 'W77cImk8W4qv', 'W4ugWPC', 'WQldJYqBWQu', 'avDJW4m', 'W53cJCkIW74t', 'W7xdOMpdNti', 'W5NcTCkUW5mp', 'Y7ZkK+g3JCQq6P+k', 'ewDhWOr1', 'EWfVia', 'WP4qWPtcGmk3', 'WPqBbmoKW4G', 'eCoeW67dM30', 'W6HYWPFcTtq', 'W7ZdOxadWR4', '4lwV4lsiW6hdMmoE', '6P204BwzYBxHT5RHTBW', 'xZXtW4G5', '4BA/W7RjGSIYwW', 'hNTYWP9p', 'WPRcR8kOW5Gj', '4lsw4lso4lw74lw74ls7', 'W5GfWOKsba', '4lws4lAd4lAz4lwGqq', 'dSoKwmolca', 'hf0AW50U', 'W5K8gCkLpq', 'kmolwSokbq', 't1XsW5uQ', 'B8oLWOaRga', 'W6m6WRjbhW', 'W4HurSoCgG', 'gCo3W7q', 'EtVdVZi', 'W4eMj8kIeW', 'xN3cMCkuWQC', 'W70kpCkvkG', 'xmkxhHSe', 'rYxdHaFcIG', 'WRHJWOCuWRK', 'W5NcSga', 'W5KNfSkWEG', '4PA64PEA4PEB4PA94Pw7', 'WQdcOCkK', 'bSoWWPZcR8kQ', 'FCkmmGmq', 'x8okW6lcI2S', 'ACo+vMJcUa', 'W57cU8kVW5W', 'WRVcVCkLW5hcIG', 'fCkhW7WZDq', 'WOedWOhdRmkv', 'BCk0kCkOqq', 'WOL5WOS', 'W51WW452WQC', 'WOuMWOdcHCk9', 'W4BcQmoJWPRdMW', 'W5/cQxLLWQy', 'WRqJqcVdRa', 'W5hcV8kIW4Ou', 'wmoZWQrovq', 'W7S1hSkZkW', 'W4/cONvKWRW', 'W5O6hmkpaW', 'WO4lb8oYW48', 'emoMWO7cVmkU', 'WOpcQef8oW', 'WOuVWPlcGSk8', 'W546W4SeWQy', 'W5XqW51FWOe', 'W4j6eSoqiW', 'W5hcHmozWRRdTq', 'sXhdGbldQW', '4BstYiFkGog1H8oU', 'Emo5tgZcLG', 'W6ZdQ3euWOa', 'fCkJW7SbiW', 'W5epmmoyoa', 'WPVdSmorWPCR', 'rmo4WP7cG8on', 'WOC2WO7cG8k7', 'zH/dOIFdQq', 'WRSX4PwboSoI', 'W5tcSh1Z', 'W5VcVhuSW7G', 'hSoxWQVcVga', 'WQ3dVanbja', 'WQKLWQFdN8k8', 'W6dcRmoNWP7dGG', 'xJdcGsdcPW', 'B8oMxmoudq', 'i8ohrCoCkG', 'W7BcKf5r', 'dMqPE8kY', 'W6BcR8oZWONdNa', 'aSo8WPpcUSoZ', 'W6RcQSoCWPldOq', 'W4r5WPNcUr0', '8kIUTE+7TCoysSkaWRu', 'W5G0WOtcLSkQ', 'W7vHW4PWWRe', 'W4NcTmkYW40l', 'W41lW6zQWOO', 'W5/cOMn3WRu', 'W4rEW5RdOCkq', 'xsxdV8kizG', 'x+c0REc1MSo94lwX', 'W7z4W4P/WRy', 'WOCWW4Ow', 'ESoflX9v', 'jftcNbldOG', 'iZFcMCkFfq', 'WOuMcCoqyW', 'kSkzarVdQcNcQX0xW4VcVCoxuW', 'WQivWRdcK8kn', 'wt/cGsFcPG', 'W5VcVCkPW5Ww', 'WOrXWObaWPO', 'A8ojqmonbW', 'FComqeG', 'WO9XWPab', 'imoVzK/ILPm', 'kCkdkr1v', 'W6VdP8o/WPRcMq', 'lhbnWQP7', 'WP8peSoYW5m', 'WPtcOxG5WRq', 'xd1wW7Gi', 'uJ/dUmktza', 'Dmk1m8kHDG', 'W4RcT8k6W5qx', 'maVdMSo8ua', 'qSkaW6Cb', 'W6dcHKbXWPG', 'uHDrWPX/', 'W7P+ANGu', 'W4pcS34paW', 'D8kHm8kLyW', 'W6ShsCkSWOPYoJHOghNcL8kH', 'xbVdTZa', 'W6BGTOhGT7hGTRhGTzy', '6PYxY60v6P6n4Bwc', 'W4y0dCkiDG', 'W5XTWPa', 'uSoCF0pcKq', 'W4RcTSk+WODB', 'W4RdSG4UWOa', 'nNLgW65J', 'W5XSWPK', 'mmkhWPC', 'WP5TfCkqFq', 'W6TWW75QWRe', 'W5tcSh1ZW7W', 'WP0daW', 'DSoKWP96tq', 'pConWOr9rW', '4BsY4Bw+Yk3iGCQm', 'jCkIWOCkW7a', 'noc1QEc3OmoS4lA0', 'fmoBz8keyW', 'W5RdKutdLre', 'oaxcLSoTDG', 'WO3cQe0Omq', 'W5BcL1LsWQu', 'W60aCmkfW6e', 'W4WCDmkkW6O', 'W6JcQmo0WOpdMW', 'WPywDuRdUa', '4lw74lwM4lEg4lE94lEc', 'fCoTuCo8jG', 'afC6WR1g', 'WONdUWGLBG', 'urVdHrq', '4BA+Yi7QNiFcMG', 'WRWZtNVdRq', 'W714W4T/WQW', 'mmk1W7eAla', 'CspdVqxcJa', 'e8o3W53cMKS', 'vwVcKJVcRa', 'af1tW6K', 'CSoXz8oHnG', 'kqNcImo7aG', 'W7TZA3rw', 'WQG2dw3dSa', 'WOeMWPpcHa', 'WOD64OgwWOjM', 'oCkmhG', '4lsV4lwf4lEk4lEVW48', 'W7rJWOC3W6i', '8j6cVCk2Aa', 'kColr8oEea', 'CCkNWPSmWRO', 'W4zUrSoqtW', 'rbWDWQG', 'fcmSjG', 'W4TDqmo9W5O', 'W6ZdVwBdTI8', 'z8oOWOJcLCol', 'W4SLhq', 'gsTarmkW', 'y8ovWOZcVmob', 'W4ZdSWHojG', 'uWjbW5uZ', 'm8oAWRlcICkm', 'WOZdPX4/WPC', 'imoDwSoyaW', 'WOD3va', 'uxBcLdBdPG', 'WQ8VtgZdVa', 'W4mmmSknpq', 'W7pdSwjZWQm', 'h2xcPhu', '4Pse4Pw/4PAw4Pwd4PAo', 'WRKjWOqIWOi', 'DpcKMjS', 'WOHDa8oEfG', 'z8okpayf', 'W5KTgCkLoq', 'W4OmjSoAma', 'WPNdSHi4WQi', 'zsO5WOHi', 'qram', 'W6XGAIi', 'rtNdOmkrAa', 'gmo0WONcVSkH', 'W40Tda', 'WRmrW70aWRu', 'W4SooCkB', 'WP4vWO3dUq', '8lwdHmovW6Onga', 'omkEWPODWRi', 'W41NW495WQK', 'WP0vWPtdUCkr', 'twddLCobW6S', 'eSoWWPpcUmk7', 'W4GOvmopiW', 'pbFcHSkvma', 'wcZdVSkvza', 'Ct5WcCkc', 'ihpcNmko', 'WQHjiW', 'WOiTWPKcWQi', 'W7zKrSkXWPS', '8jMFU++4JWBcTmkeWPq', 'W5hdPv8IWRi', '4PQ04PQa4PI34PIG4PIe', 'W6Wza+kvLe8', 'WQClWOtcJSkU', '4BwL4BAU4BsJY5plPa', 'WOD64PAsWOjS', 'BqjRz8o/', 'W6eWW4raW50', 'W7ldP3ycWR4', 'W4WHfmkYna', 'jSopxCoqcW', 'mmkgWPSjWQm', 'p3dWS4EY77UPvmky', 'W69WW4bOWQm', 'WPK0W4uwWRm', 'AbhdG8kfxW', 'zCkkka', 'WPSMW4hcP8k/', 'W5BdR1i', 'WQxdOZalWRO', 'tMVdGCoA', 'kmkyaHhdPsxcQWO1W7pcOSokAa', 'W77dRMCeWRi', 'k8oiWQpdKmo2', 'W5BcTCk8W5qv', 'E8kajWWb', 'DxhcKttcPq', 'B/cOT5C', 'WOlcUmkpW7ldHq', 'W487c8k2pq', 'WQNcV2jKbW', '4PIv4PEr4Psq4Psw4PEs', 'W4OuWPRdUSkx', 'eXdcKmkpeW', 'WPeRW5a', 'W47cT30oba', 'D8kYWQFILBtcVG', 'jmodta', 'l1q2k8kQWRxcRCk0aW', 'dYDrqCos', 'hd/ILif1W6K', 'WPdcGwjZWRq', 'zM/cRWlcNa', 'hhHWC8kv', 'W4buWRJcTXq', 'W4WpWP5EnG', 'q1jCW5i4', 'WOmTW4ufWQm', 'WR5wcSo4', 'a8ovW67dM2a', 'WOdcUvFcHGu', 'Y4P+4BEU4BE94Bw/', 'WO5qW5xcRCoz', 'W6b64PE14PAn4PE5', '4ls/4lAY4lEC4lwE4lsN', 'W5lcKCorWPZdOW', 'W7/cNSkUW5RdGa', '8koyM8kRW5fmWOK', 'bmozW7/cL2W', 'WPFdRv7dLqi', 'W57dGeK8WPO', 'DSo8vLpcPq', 'x8k/bX89', 'WPuAdSoKW5K', 'W7xcOSo7WOxdNq', '4PMlWQiVnmkT', 'e3XnWQvP', 'WPClhW', '4Bwa4BAP4BsjY5pHTAa', 'yCkqkWyr', 'W7u4gCkWpW', '4PsG4Pw94PwP4PEj4PEU', 'W6fzW4qdWPW', 'FmkwiW', 'w8oLWPtcS8kU', 'W5xcUwGcgW', 'tsddNSohW74', 'W4SZgSoj', 'W4VcUwCggW', 'WPm6W5edWRC', 'WQxdP+kvSmokWPC', '4BsK4Bw5YjBHTyxHTOS', 'cITgqmo8', '8y6NLG1EW6O7', 'n/c9T5KR', '4BEv4BEFW6hWSPop4OkS8l+GHCkn', 'W43cQ8ogWP/dRW', 'WQhdSSkNW5xdJG', 'yrVdPse', 'umkWkSkPjG', 'WOnxv8oxhq', 'rHBdMbBcGW', 'cxO1', 'W6RdOLNdKZa', 'WO/cH8ksW63dNG', 'fHxdJEg1LCMw', 'BSkWm8k4Aq', 'BImtWQHs', 'Emo4WP4K', 'Bmk0jSkVEa', '8ykTK8kTWPBcSmoy', '8kkCJo+7SG', 'CCo0WPFcMa', 'W7RdO3yuW78', 'WRdcRxigWQG', 'WQGOm8ovW4W', 'WOmzuCoxhG', 'WQZdUmo7WPtdVa', 'xCkZWQ0', 'WQvziW', 'c38XyW', '4PwW4PAW4PAl4PE74Psj', 'WOq8W5Wf', 'x3RdMSogW6m', 'w2ldNmo9W74', 'Bmkxka4y', 'Cmo+pCkLFa', 'WO3cLsKcdG', 'uSo+WQfCDW', 'WRSOWP/dGmkE', '4lsKmoc1I+c2S8oD', 'gXxcGmo7ua', 'mColwSonra', 'nNadWRTe', 'W40Zea', 'W7FdTNebWQW', 'W4RcS8oAWR3dOG', 'WQdcSmkRW7/dIa', 'W4NcTh5YWP8', 'dd5SW64x', 'hH/dLmo/ua', 'vmocqKdcUa', 'YQ7HTyFlP8om4Bsa', 'WPW8W5qb', 'vGJdLbtcKG', '4lwWAbtcRIG', 'u8opWOvsuq', 'u8oXW6JdV8kX', 'qCo2WRHOza', 'W5pcUwOjqa', 'WPPLWOSuWPG', 'W488B8kgW6G', 'wSwB4BAx4BE84Bso', 'b8o7WPRcLSkr', 'dCoBs8kzeq', 'gNq4n8k8', 'qIJdRmkvCa', 'iwNcMx7cOW', 'W5SgiSkuCW', 'W6L8W4zUWQS', 'C3RcMCojW6m', 'WOvyv8oxca', '4PQ3t2FcVtW', 'pmoMW4FcNwq', 'fmoBz8oSla', '4PAfW43cNa', 'E8kcr13cVa', 'eWRdNrRcKG', 'eSo8WQFdS8k+', '4P+Nj8khW6tcJq', 'W44Tc8k0ka', 'qZNdVSkvza', 'WOFdTK8ohq', 'iw/cPNxcMG', 'WPq8W5Cs', 'nCklWOyj', 'WR3cP8kJWPRdHa', 'WO3WQBkv', 'mSoMW6VdN8oM', 'W4JcSMXbhq', 'YBpHTB/HT67cP8oZ', 'zSkeiG', 'WRuSrhVdQq', 'W4W+WPlcPtC', 'W4G0i8oklq', 'bCocW6xcNNa', 'CJdcPG', 'AHpdNdRdMa', 'FWrSiSkT', 'W6L+W5u6WQ0', 'k8oErmotfW', 'W5tcQgGvgG', 'W4O+fG', 'WO8lcmo1W7y', 'WOPk4OozeM8', 'W5ZWR6kz8ykHSSkFmq', 'vfNcRbVcPG', 'WRzHDMmr', '4P22y8kNDmkz', 'mqFdMSkPeG', 't8owWR3cK8oD', 'pCo/A8oraW', 'W5NcTCk2W40A', 'W6JcOSoLWPNdLG', 'jCkpWPziW7e', 'W4lcSxKohq', 'gCo6WPRcTmkN', 'A8k8fSk+EG', 'BSoVWOnVBW', 'CmoIWQlcGSoD', 'W5P7W5xcHdG', 'rXvqWOz+', 'BCoEDvNcRq', 'EqxdQ8kqCa', 'W657WPVcSJW', 'W6SBySkq', 'wUc0Ioc0RmoB4lAX', 'jYTxvCop', 'W5VcQSkRW5es', '6P204BAU4BsX4BAHra', 'WPejcSovW4i', 'aCk1WPVcVmkG', 'WO/cOLLzaW', 'c3OdWQ1E', 'vXGBWRO', 'WPRcLmk6W5aE', 'eSk/W6y/jG', 'aCoWWOxcQq', 'kYRdLCkCeG', 'jY8zemkQ', 'WOmTW4uDWR0', '4PAN4PEC4Psj4PwH4PwV', 'WRNcT8kVW5pdKW', 'amkIW6W', 'W4O7hCooBa', 'lNy5E8kF', 'WR7cSLbzmq', 'W6GdaSoWhG', 'WROZWRpcGCkX', 'W4qJW7m8WRGMia', 'WP0WW5CsW7K', 'zmkemGWD', 't8o0WONcKSoa', 'WPidcCks', 'ESk6WOhdKEg0Qq', '8l2EI++4LG', 'WRuNxYVdTW', 'W657B2Gy', 'W4a2eq', 'WPr2n8opWPG', 'W5tcVCo7W4Kt', 'ACoJWOz/tq', 'W5uyjCkQoW', 'W4BcIu14oW', 'Cr/dUINcRG', 'W5pcVN4', 'WPRcO8koW4xdOG', 'W63dSgavW78', 'vqHUimk3', 'psXwqSkW', 'ehBcH8oR', 'DqzuW4GR', 'WPfFWOCKWQS', 'W7adjmkrpa', 'eCoWWO7cVG', 'WOFdVcLbtW', 'WRdcOmoHW5VdIq', 'wZpdPmkp', 'W4lcTLG7', 'xxxcSX/cKq', 'W5/dOvRdNa4', 'sgldJ8o3W4G', 'WO/dPXn8WOm', 'WRSHkCowW7C', 'ggFcQ3NcLW', 'W513Dh0z', 'WQZdOXyjWPS', 'W5S0W5xdUNK', 'aSoFW6BdM14', 'lmoDcCokcW', 'cbTbW4KW', 'W6WTiCkLfa', 'W5BdOXBcNue', 'WPKvWPVdQCk0', '4lA44lAnCdBdKa', '4BEN4BwfYQ3HTiZHTPW', 'h8o8WPK', 'W4NcUYLa', 'WOuEWPlcRCkx', 'E8kanrOz', 'WPNcQvPTma', 'WPOccCo+W4K', '4lwnWRCinCke', 'WRmwW6OLWP8', 'e8kh4BsS4BsM4BE8', 'zCko4PEpWPLe', 'W4ldTqDKpq', 'uXGhWQ1L', 'FqHZja', 't8otWQ5ezG', 'A8oivuRcQq', '4lEOFUc1Hoc0PUc2VW', 'oSoQW7/cNh4', 'W613AM4e', '4BwBtmMJYiCy', 'e8kNhVcvIAVWMj2MBG', 'W4ZdU+kxJIH0', 'W4pcVx0a', 'B8o4WOHVaG', 'WRzAf8oW', 'Emo6WP0', 'WQPcWQCOW5C', 'pwVcP3xdGq', 'dt8PW4qC', 'W7BdR2qwWRO', '4BAF4BsrYlG64BEg', 'WO0xs2pdQW', 'W5pdIgeYWQu', 'W6i6WQHDaq', 'W75YW5n/WQy', 'W48WeCkKlG', 'FcDMW6uN', 'bHrAW45+', 'W4ShWP4', 'ohnhWRPu', 'W6alWRbafG', 'b8oIW43cRxO', 'ya3dPspdQq', 'W4yUhConiG', 'W5JcSNz3W6m', 'bmoVW6CWoa', 'WOCWW5RcRda', 'W4JcVMi2WPm', 'j8kGW6u9oG', 'W5NdQe47WRS', 'bZNcJCkCW6G', 'W4P/WOhcPt4', 'xZxdNrldIG', 'Doc3TUc1GEc1Noc2KW', 'WOKDaW', '4Pwj4PUR4P2+oSkA', 'uYRILkWWW5S', 'zmkHWPdcLCoi', 'vmoPre3cJa', '4lsd4lwufSoCga', 'W4PDW5u', 'W5SdkmkjEq', 'WPOfWPFdOCkq', 'WOrFWO/dPmkj', 'W5tcPhfrWOO', 'AX4QFCoJ', 'CCoXWO3cLmky', 'W50klmkzlq', 'qSkF4PE/8yIhN0m', 'W6mwEG', 'WRzTE8oMoa', '4lwT4lED4lsNWQ3cKa', 'zrVdQ8k2ya', 'WPibyLVdMW', 'tMVdNCkoW4S', 'a8oWW53cSmkS', 'WPrCv8oabG', 'WQ3dLIK0hq', 'WO/dPveMWPO', 'WRaVkmow', 'z8o0WRBcGSoc', 'W4KcWPPg', 'rmoLWQFcKmkWjmk0', 'cbFdMmk3pW', 'sr8AW4KT', 'W4lcQcyihW', 'YP5DYP/HTQ/HT6u', 'gIdcS+kwRpc9TBa', 'u3ZdQCkaCq', 'YRNHTANjN8kr4BwB', 'ah7cQ3FcIq', 'W6BdUWGOxG', 'FSoRWP1/sW', 'FHvQimkK', 'WPePW5qDWR8', 'W713yxK', 'WOqMWPlcGSkY', 'W7VcOSkKW5NdIa', 'rX/dKbBcKG', 'F8k4k8oZFq', 'e8ofW7NcIwW', 'lJVcJa', 'oCkdWOi', 'WPK2W4Po', 'WQGbrSoIW54', 'bNX6n8oa', 'W4FdH0OcWPW', 'W712W51nWPe', '4BAOY6/HTyRHT795', 'W4OwoSkvkW', 'WRJcK8keW63dGq', 'W4BcU3SaaG', 'dmk/W4FdVCks', 'WPm2W5eFWQi', 'eCoTzSoPjG', 'W5VcRSk+WP0p', 'W73cM2W1ja', 'D8ozfe/cTa', '4PQ1W6/cOXqN', 'WPvaySkioa', 'WPnkrG', 'fmoXz8oSla', 'DCkhdGK', 'WP80WOToWRC', 'WPNcK8kpW7m', 'WRCtdCoZW50', 'aCo8WPlcS8oJ', 'kW3dOIVdPq', 'WPW8WOrnWQu', 'W7VdO3eq', 'W60bCmk7W6u', 'eM3cJJVcRG', 'uvhcJWBcNW', 'W4r3W5ddH8oUWOO4ymo2eu8k', 'W4WlwsVdVG', 'gY1/omkD', 'u8kSfK9p', 'WOFcLwChaa', 'W5pcQgapca', '4Q6+WRDwemkg', 'W5lcRMu', 'W6dcT3z8WQm', 'WPNdPXK5WOS', 'bmoXW7BdMSo3', 'zCoGWPdcKq', 'WQFcQ8kcW5VdGW', 'EafPjSkW', 'lsRcMmkwja', 'W4RcPxL5WRW', 'WOO/emk2lG', 'W50HfSkWya', 'W4jOk8k+na', 'cCk6W6T/nG', '4BAY4BsAW5xHT5VHTz4', 'tNdcLxxcIa', 'W450e8oloa', 'jJ/cHCkoeG', 'pCowW7pcL0a', 'EtOMWRTm', 'W7LJqv48', 'WQGCW6ScWPu', 'W4VcTwOeaq', 'B8owWQZcPCoq', 'WR/dQmk5WOVdHW', 'WQmym+g0LEg1Uq', 'evlcG3xcHW', 'WRdXI4oAnSo4W4G', 'xghdLCocW6u', 'W4ZdM1ldUrC', 'vMhdMmok', 'WPK+W5CfWRC', 'W6X/Awie', 'WQKtt3hdOq', 'hSoxWQVcLwG', 'WOOwW54xWOm', 'YjRiSog2I8oB4Bse', 'W4D1W5/dOgm', 'WOq8W4brW7C', 'W4bWWP3cKdq', 'qXnhW582', 't8k6W5lcQCkS', 'zGCWWR1e', 'rc7dOq', 'WOuRW5yuWRi', 'Fb5JnCkQ', 'WPRHT7dkJog0LUg3Iq', 'lqNcM8o6wW', 'tW8q', 'WOmzdSks', 'WQlcQmkZW4ldQG', 'mmkyWOTiWRu', 'WRetdmoOW50', 'nZVcLmkzdW', 'nmoRzW', 'CSk6iSk+', 'Y5NiQSQF4BE+4Bw7', '4BwWWPdHTOBHT74P', 'cdVcHSkjgG', 'qSkdW6NdGZO', 'DmoZWOG', 'W5OmW5qvWRC', 'WPW8W4OwWQi', 'nqNdMSoPga', 'W4SyWOisia', '4BEA6P2Z4BsQYOVcUq', 'W4NdR0ldHaq', 'W5FcRMyzfG', 'WRpdHXBdKWa', 'BXhdVYW', 'WQL2Bh8F', 'xZ/dMINdUa', '4PAj4Pss4Psz4PQI4PY7', '4PsM4PwY4Ps14PA84PwE', 'ASk0kSk8', 's8omqeZcUq', 'hWVcPSkJaG', 'srHCWOmV', 'wSkkWQS', 'qGKaWR1l', 'vc7dItdcRq', 'zmoYWPFcKCoc', 'B8oVWOXOvG', 'mrRcK8oTga', 'WPO7WPhcGCkP', 'W4TdW6HcWPS', 'W7KgBmkqW6m', 'AGKUWPfR', 'fNNdQIZcIa', 'jCoIWPlcISkO', 'iSohxCoAca', 'WOBdSHi7WPS', 'W7SgoCkwpa', 'Fmk3bSkuyq', 'lG3cO8o4sW', 'wuVcVhFdMW', 'BHrbiCk3', 'W7j1W4i6WQ8', 'umkalX40', 'FKZdMSkOga', 'zCoKWPC', 'yqVdR8k7xq', '4BAi4BEcWRBjS8I4', 'WQGheSo9W54', 'jvtdKc3dVa', 'W51WW4jiWPG', 'WQyyW644WOq', 'W6WsD8kf', 'ucNdQCkiAG', 'W7u5j8omfa', 'nCkoESonbq', 'thdcLdZcVq', 'WOFdSsLp', 'WPrDua', 'tXXwW5aR', '4BETuoQFHog2IUg3Uq', 'k+c0UEc1G8oq4lsD', 'bg/cQ2tcKW', 'WRWeWRpdN8kl', 'WQHwcSoUW5q', 'W4SaoSkunq', 'W486g8k4na', 'aN/cR2lcGG', 'rrK2WQHt', 'dZVcTSoSBa', 'bJ/dHW', 'WPhcGmkMW43dIq', 'o8kbDLzt', 'caZcJCkkeW', '4lE+4lEE4lsJWO7cQW', 'Dr/dOJBdQW', 'W4WdWPDxkW', 'WOlcUKvT', 'vwddNa', 'tH8+WR1E', 'W6pcV8kO', 'BCkemG4', 'lhJILkhILRZILz4', 'tWj0iSkW', 'WOu7WQ53aa', 'WOVcVGGOEq', 'hwnVWPTX', 'qHGBW6Lt', 'awBcVeNcUq', 'WOeSW4SfWRm', 'Ct3cR8onFq', 'WRSXWP06', 'WQeXW6C', 'qHhdUsxdOG', 'W4JcKvmnlq', 'CenNlSk3', 'jcBcNmkvca', 'W47cTgnI', 'W4BXIAEs77Iha8kqW6G', 'WPL5WODgWPW', 'tmkkicq2', 'jZRcMq', 'WQNdNIGfW48', 'ymkliaay', 'W7BcTxGwgq', 'W4bLwgOZ', 'nmkdmWmz', 'WPWGW5yyWRu', 'ArHZlW', 'WOu3WOdcHCk5', 'C3RdJmoaW68', 'eZ8zW64', 'oComWPFcRmkQ', 'hSo9W6JdOmo6', 'WOnAv8oxcW', 'W77dUgadWQW', 'WPL3W5auWRu', 'Bmk0nmk5ya', 'WOnDFmotgW', 'W4OEoCoxbW', 'W5e/W4SwWPq', 't2VcHJlcUW', 'oNHcWQDA', 'W6CJW5z/aq', 'W4uPha', 'WP8dWPa', 'zbpdSW', 'WPddSxb2WRi', 'WR5CgSoUW5u', 'cwvBWQz6', 'nWXWlmoJ', 'W5NcPx9KW7i', 'W53dR0ldKq', 'W6zgu2OU', 'n3q/ySku', 'ddNcLmohBG', 'W6NdQ2agW78', 'W5XoxmkX', 'WQO7x2ldUG', 'W5apW4uDWR8', 'WQ16lSodW4a', 'WP8TWOy', 'W4bpWOZcUrW', 'wg/dKmoCWQq', 'FSoeqehcQa', 'WPiVWR7cM8k3', 'W44ika', '4lwsu+c2N+c0T+c0QW', 'E8kjmdy3', 'kNDxWQDc', 'gNiJySkw', 'WOpcVqGO', 'WPL1WOGfWPW', 'WQ3dLIpWP4kdBq', 'egVcVNNcLa', '4Ps84PsF4PsU', 'tNhcHJJcRa', 'WOaCmCkCdG', 'sc1WqCkB', 'cbhcT8kZnW', '4PEN4Ps54PER4PAY4PwU', 'W5LRWPFcRda', 'W7lcR8k5WP0o', 'W5a0vCkQW7C', 'ySkapW', 'vgddSCoKW7m', 'omoGW7xdVCoS', 'W74NwmkKpW', 'ASk0kSk8yq', 'W5Gnd8kZma', 'rCkKccG', 'fmo4WPJdOW', 'WO3cTK0', 'tSo9WQDKEG', 'W4HZWPa', 'kIvhvCo3', 'dEg1Sog1RmoP4BsQ', 'mwzgWOvY', 'W7hcOfT8WP4', 'W5FdR1/dNa', 'EbLL', 'WP0MWPG', 'W4CoiCkBEq', 'WRutWPRdUmkx', 'nq3cL8k7hG', 'jdpcKmoAwG', 'm+c3LEc2P2FGTBS', 'j8ohW5tdI8oN', 'EbLPkCkK', 'jSoxWRxcSmko', 'fIRcUMlcLa', 'fCoMW6RdVSob', 'EfVcPrFcOq', 'uHDnW4G', 'WP4TWOJcNmkW', 'WOpdOXa5WPW', 'jwVcOhNcIq', 'e8kQW6GYiq', '8jcmGmkoomkTWPK', '4PQt4PIe4PMJ4PQf4PQS', 'WQmjWOxcMCkY', '8j+dQEkdQFgdKj4K4BER4BEI4BwG', 'sM/dJCoAW68', 'W5bUWPa', 'W5WId8o/W5a', 'eCkqW7JcLgC', 'Ykbp4BwT4BE64Bwt', 'W7j/W4v1WRO', 'WQG9imosW4S', 'bNJcRW', 'nmkNW7Kbhq', 'WRXSCmoRfG', 'f2VcVNe', 'W753EhKE', 'WPSQWOZcKSkQ', 'CJBdHahdJq', 'o1BcP/ghGlTd', 'WOtdU2LKoa', 'W4PpBCoAEq', 'B8kmkGOB', 'FCkapHS', 'WPu3W5a', 'W4Xib/cDO71+', '4BE56P2Z4BELW50', 'qb1aW5i6', 'gsHCra', '4BAs4BswoEg0LUg1Sq', 'W5/dMmoHWPtcHW', 'ESooqvVcVa', 'l8otWQRdN8oA', 'yXVdOIhdPG', 'WQvivSoqfW', '4PAN4PEC4Psj4PwH4PAM', 'rX/dGrNcHW', 'WOFcIMGnbG', 'itlcQSkweG', 'eNdcR2lcIa', 'hmo4WPZcUSkS', 'WOXIkSoVW5u', 'l3r6WR5f', 'nHxdH3xdQq', 'Amohw0tcRa', 'WO9pD8oA', 'zSoOWPdcK8oj', 'CHZdSZhcGW', 'W7mYWRfzlq', 'WORcVLXRpa', '4lAeW7fMW6yg', 'WOmEWOBdUCky', 'W4VkICMRqog3PG', 'F8kAWPPhWRy', '4BAc4BENY7ZHT67HTRa', 'W4ClWPjC', 'uwVdGa', 'hCorW7/cMge', 'W4z4W5xcTde', 'W4NcV8o7W5Os', 'amk/W7K9pa', 'lSoFBSoskG', 'oeCktq', 'cmoHWQFdSCoX', 'W440h8kODG', 'BqXSla', 'WPDmtmogcG', 'W4uCiSku', 'vr/ILkpIL47ILly', 'w8kjbSkbxa', '4PIP4PUu4PU64PIS4PUc', 'vb1hWPW/', 'W5/cO2j5WQa', 'xq7dNbNcUq', 'W5/cR1GzhG', 'xmkNeIyH', 'bCkUW70W', '4PAB4Psr4PAN4PsA4PEc', 'WP11WPDaWPK', 'zEc3J+c1R8oA4lA4', 'BqiGnmkM', 'rSkPjsmb', 'W47cThq2WPm', 'EaaG4lEZ4lw4', 'o8kgW4SHhW', 'jJJcT8kOmG', 'W5GpWPPrmq', 'rSkHW4JdR8o8v8oSWRrbk8kdW5lcSG', 'gr7cK8oPsW', 'hSkEWR4/WOu', 'cab2ySk6', 'W5dcQCo3WQ3dSa', 'qCkgW6qWmG', 'WPGSW5VdSwO', 'W4OuWOddV8kq', 'W5m1gSoh', 'WPxcVgbZWRu', '4PwH4PsE4PE04PEa4Pwy', 'iSkpWPmAWRm', 'WQ0Af8oaW7a', 'merbWRro', 'W58nfmkdvG', 'mmkqWPCAWQm', 'W4yOe8odnG', 'WOlcTY8PWO0', 'W7xcN0e', 'Amo+WPLKta', 'W4qZamoB', 'W4RcT1fMW48', 'oX/cICoPxW', 'W5GTcmk7iW', 'CrVdRJy', 'WQ4HWPeQW7qXWOpdG8oyWRW0cw4', 'WO3cT0fPjW', 'EhBcLtdcQG', '8lg5SCo7WPCRW7e', '8lgbI2/dLqag', 'WR4HsKJdVq', 'mCo8W4RdM1O', 'zHBdTZy', 'W4X5W4rSWQO', 'W4W+WPZcRJ8', 'bJ1QnW', 'uhBcIt4', 'FmoEhG', 'WQ3dHW8/WQu', 'ec7cKCkBdW', 'WOP8WO0bWO4', 'DvlcOXFdQq', '6P+34Bwc4Bs14BstWRK', 'h8oMWPlcSW', 'WQZdTHuWWOO', 'lxbqWR5z', 'W43cTxSazq', 'nmoBtq', 'CCMZYB1i4BEl', 'W5pcUxev', 'wcZcOmknAG', 'AsnArSo1', 'WOnKWPaqWO4', 'x8kFW7FdVCkn', 'W5Wkkq', 'wSoLW7JcNNS', 'ASk4lmk4yW', '4lEkxUc0UEc2M+c0VW', 'BmkenqPv', 'fNNcUxhcNa', 'f8kqWRhdMW', 'WRRcVmo7WPNcJq', '4ls24lEGvoc0N+c3UG', 'nCofW5FdQ8ot', 'nthcHSko', '4Pw14PAv4PE94PED4PEj', 'ESoykWOb', 'WOfqrCol', 'W5GHhCkKEG', 'W4SkpSkz', 'lxbqWRTA', 'bLipWPW', 'rfjaW487', 'W5hdUUc0N+c1R1S', 'WR5sdCo6', 'qmorWQ3dKmox', 'jYlcNmo8xW', 'bmoVW7OWoa', 'CCoHWOH5', 'WRTxfmoYW5y', 'fCkqW7VcKMO', 'WPq4pmoDW5q', 'W4NcV08niq', 'm8oLqutcTa', 'oMrAqmkW', 'WQiNxMG', '4lAdtsfTW4K', 'BszRbSkw', 'W4r2F2GN', 'uYRdOftcNG', 'fmo4WPG', 'WP82qvpdOW', '4PEW4Pwz4PAK4PwX4PEw', 'WQPbemo4W50', 'D2RdN8olW5S', 'W64voSkPka', 'sGRdMHxdMW', 'Y5RcG8MdY5no', 'W4SeWP8C', 'cGpdMSo7xq', 'WQnqCgjC', 'vINdMtddUa', 'CCknWPSEWRu', 'tW3dMsxcHa', 'uWKiWR1s', '4Bwv6P214Bs0YRdcSa', 'g0ZdGa', 'W71bW41RWPS', '4lEC4lEt4lw74lEA4lwk', 'WOBcP8kJW4ddJG', 'o8kAW5Oila', 'fmkTW704iq', 'gN7cOMxcMq', 'W4qUhConiG', 'WO8EWOhdQmkl', 'W4W/dq', '4PYsWO4dW6Ki', 'W6KaiCkwnG', '4Q++sSorzIW', 'o3bqWQ0', 'gWddMau', 'W4mZbSohlW', 'yrDBW447', 'yI3dH8k3zG', 'WRlcT8kY', 'W6ZdVvpcKa', 'WR9ecSk1W5y', 'W4elWOXibW', 'Yk/iRUg0QCkz4BwP', 't8kK8jweVU+5Q1m/', '4PMl4PUm4PQJ4PQf4PIx', 'imkoB8oCcq', 'W5RdRupdGGa', 'l3rxWRPt', 'sgm/n8kt', 'FCkWm8kPAW', 'BCoUWOFcKCor', 'ht/dMSoBFq', 'aSovW7VcL3a', 'mcnjrmoY', 'W7n4W4L9W6i', 'W5S9f8kJpW', '8lIJQKqsWQSx', 'W546W4SCW7y', 'emo7WONcUmk7', 'WQBcU8k1W5VdLq', 'mCkcbX4xECkC', 'g37cVMdcIa', 'WR9acSo6W58', 'jY3cK8kI', 'W7Czwq', 'W7lcJ3OYja', 'vq4m', 'dNG8E8kv', 'l8o7W7/dG8o7', 'WRetWPlcLmku', 'WQC5WPNcVmkN', 'W5aXW5afWQy', 'WRzChG', 'CJpdPINdNW', 'ESk0FCoS', '4lw94lAU4lAE4lwh4lEd', 'W4qXWQ0qW4G', 'W597WOBdOd0', 'qYtcG8koW5e', 'DsG+WPHk', 'W43dUK4WWOC', 'WRrRW45QWQa', 'W67cUxz0WRu', 'WPOQWO/cNa', 'nmkzWOejWRC', 'qmoIux3cQa', 'eCo7W6ZdT8oT', 'WP11w8odpa', 'W6qwzmkwW6C', 'DGRdTY7dPq', 'WOOBmCkzeG', 'WPCvxNRdIa', 'seqKDSko', 'W7ldSLCJWQG', 'mSkeWRS/WRC', '8kMjQpgbUjZXIzMI8kIiGpgaMlS', 'uvRdHr3cJW', 'jHvrsSoO', 'W7WlWPfBnW', 'Aqz5W6Sl', 'ymkgnu/GT5O', 'eoc2Loc0GUc1UUc0Oq', 'W48plCoW', 'DmooWQDrrq', 'hmoMW6ldTSk+', 'oI1zASoc', 'fMNcVNxcNW', 'WRauqSkvW6tdOLS', 'E8kInmkTAW', '4lsP4lAJ4lAyWPlGT5C', '8y6YPg9KW6er', 'W6LWW4L+WQ0', 'zHpdHra', 'WRuTq2ZcUq', 'oCouWRpcMG', 'ESoXkCk8yq', 'yHVdUdddQW', 'WPG1WOldQCkt', 'WQZdUbaWWOa', 'wSkdimk1yG', 'WP8EWPhcOW', 'nSolsmolbW', 'W69+W4W6WRC', 'W4lcVxOetW', 'W7pcR34XjG', 'W5pcSgW5nq', 'pCoVWP95tq', 'xq7dHqxcLq', 'WRrsfmo+WPy', 'jCkdWOyeWRu', 'E+c1Soc1IEc2Voc1UW', 'W5Wki8kEfa', 'WOieWOhdVCkk', 'W53dRXG/zSodWRTKWQ3cI8kfvKC', 'sGHHnCkG', 'W5WdWP4', 'FCkoimkLFW', 'o2xcMMJcGW', 'kGNcGSo8', '4lAE4lEa4lEsz8k3', 'zSkvlWes', 'W6ShASklW6G', 'xGNcM0/dHG', 'iCkQWRLQua', 'W78chmk5nG', 'xSkEWQtcIgW', 'W6K7gCohBa', 'm8o5WOf4vW', 'W4P2WPtcTa', 'uHnbW4KT', 'rc/dQa', 'WQK3q3/cVW', 'n8ocx8oGjG', 'W6VcO8k2WP7dNW', 'W6WmqM/dVa', 'WP8pfSoLW5i', 'lmkarmoyda', '4lwxEConh8kL', 'W5hcU2n5WRW', 'vwdcG8keWOa', 'nHJcJSo4sW', 'kmopqmov', 'WP7cUre5W4a', 'WOe/W7u5WP0', '4lEd4lA4a+c1V+c3QG', 'CmkYpG', 'W6VdU1JdHaG', 'udhdQa', 'W5pcSgXltW', 'FWjSk8kS', 'YypkVfNHTOdHTR8', 'W63cLmoMWQtdTG', 'W51ZWOq', 'DcdcM8o8uq', 'oSodW5ldTSo2', 'WOD5WOOl', 'amkAW4GxaW', 'hSoWWOq', 'WRutfSo9WPG', 'W5pcT8k/W58P', 'xY7cMCkoWQO', 'WOhcVCoHW4FdGG', '4Q+QWOnXySk3', 'n8okxv3cRG', 'WO3dLGpWP4w9Bq', 'x8kykSkKza', 'xCo6W7pdPSoU', 'nX5Snmk2', 'xH/dIa', 'WP98h8oTW6e', 'W6iYrCkCW5m', 'rr1aW5iQ', 'ucZdMNJcPa', 'ESofcGyE', 'WOv1WOOu', 'p8kiWP0qWO8', 'W4r7W4S', 'WO8jW4RdVmoe', 'W6dcHenpWQS', 'W6GCkSk+ia', 'fYRcH3/cJq', 'f8kaWRKIWRq', 'BSouWQxcMSo8', 'W41TW5xdOhK', 'WOKlfCoLWOe', 'W7pdUMiyWRS', 'FmknxuFcUW', 'qb0jW4mT', 'W517W4/dQNK', 'pSocWPFcTCkG', 'WRxdLeq7WPy', 'x8oLWPvera', 'Bb9YiSkN', 'n0lcNCoHta', 'trWDWQPp', 'wbVdMbK', 'W6HsWR7cHqS', 'W4e2g8onpG', 'zmk7W4NdMSkf', 'W7RdULVdLam', 'jmkqWOisWOq', 'o3XxWRCm', 'W5BdTaDPja', 'taLdnSk2', 'WRtcV8kK', 'rvijW48X', 'WOrwr8ol', 'WRxWV6Yi', 'WOJdU1XNDa', 'WO5CuCkiqG', 'WR/cOJ9r', 'v2ZdJw/dQq', 'ew1/FSko', 'WPOuWRddRSkZ', 'WOKrWOxdUCkq', 'WPGzWPBdVSoz', '4lEo4lEP4lEHemo5', 'W443fCofkq', 'WOW9bmoqW54', 'W4pcUxOc', 'gSoNWOq', 'WQhdPJC2WQm', 'WPSlcmo0W4K', 'awxcPZddGq', 'Bmkvku8z', 'sNZdNmoDW7K', 'W4S/e8oqlq', 'W7WABmkkWQW', 'WP/dPbKUWOe', 'omofW4/cS0y', 'W5W+WRr4nq', 'qG7dU8k1ya', 'W6VcTwCktW', 'W7OwySkhW7i', 'mmkRlSk8', 'W5b/vfOW', 'tY7dHJFdHG', 'u3RdKCoBW6G', 'WOBcMM5Waq', 'W4aKhSkrhq', 'ymoSW4tGTltGTBC', 'k3rxWRTf', 'WPHJWO5r', 'DrKQWRHs', 'ySoeWPdcKSoR', 'WQVdMZCzWR0', 'WRLCfSoPW5W', '4Ps84PsF4PEN4Pwv4PEj', 'W7T3Eg4c', 'iCkow8oqcG', 'W4eOg8opia', 'WP7cK8kLW4BdRG', 'WPKaeG', 'WPSnWONcPmki', 'WOTaW7e4', 'WQPsdCoVW50', 'gN48qmk7', 'W73dI2tcMMS', 'W7S9B8kCW7C', 'W49ZCget', 'pb/cN8oPsG', 'W7ddO2e', 'W60EamkGma', 'WOFdSLZGT6hGTzK', 'w8oLWQK', 'WQHAhmoOWPG', 'sZ5HbCkc', 'W6pcImoUWQtdTa', 'phrxWQTr', 'kIZdLCoxwW', 'WOhcVLT7nq', 'W7rjW5bFWPG', 'aSkSW7WJna', 'W719W4H1WRa', 'WR1AdCoOW4W', 'W5xcTZbIWRO', '4Bw2kSoNmmMI', 'WOGlfCoL', 'W5tcOx1fWRC', 'BbpdSIa', 'W4iBcmkzgW', 'WQLwf8o/W7u', 'bSoWWPpcUCke', 'W5i4vmo3hG', 'wr/cKq', 'WPmChW', 'W6JdP8oJWPNdKG', 'W5xcPxvL', 'yf7dOIFdOW', 'W75MW55FWRC', 'jSkFW7OYhW', 'zWtdMrFdMa', 'ngpcVLJcJG', 'i8kpWPmlWQq', 'WPvCtCowiG', 'W7VdP3ys', 's8of8l2fHNuy', 'WP0dfmo4W4e', 'uH/dHsRcJW', 'lmodr8ovca', 'WRVkImIOoUg3Mq', 'W4WooCkzmq', 'vcrHW7Gk', 'imowqmokea', 'W40dWO9rkq', 'ttmbWPPX', 'WOLZWPddOdG', 'vqfvkSkq', 'f8o6WPNcPa', 'dSoMW7tcUmkK', 'e+kxGokuTEkuQEkxNq', 'axS1omky', 'maNcImoPta', '8jwBVKpdQqFWNlYq', 'it/cGCkB', '4lAf4lAo4lwi4lsZ4lAZ', 'WQmXxMRdVG', 's3RcHIhcOq', 'WPW2W4m', '4BsN4BsBW4FHTy7HT44', '4BERYzpIGihHTR/HTBm', 'gCkSW507ga', 'mNrkWQi', 'WO0PdCoeW58', 'qLS/DmkB', 'gwi/y8kF', 'lmowa8kzxG', 'vbqDWQvc', 'W4u7jSoTaa', '4PAB4Psq4PEjeokxGa', 'W6RdSgSuWQy', '4lwJ4lwIW7VdLaS', 'W67dVgOaaq', 'fvRIGPnvW4W', 'mCo+WP/cP8kb', 'W44PvmoriW', 'WRyJwx/dVa', 'xCk4W4hdVCoS', 'aSoWWPZcQCkH', 'xCoZWQFdGCo7', 'rYNdHaBcHa', 'w8kgfqeT', 'WQyzC8kd', 'dmo3WQxcK8kH', 'W7LZBxKt', 'jmkeWPCBW68', 'A8olWOXKrq', 'eSkQW7TXoW', 'W5RdR0ldLqy', 'FGhcN8kOwq', 'qrpdNHVdJa', 'W7NdG10EWR4', 'W4i1jCoKpW', 'b2pcPx7dKq', 'DmoYWOe', 'iddcGCkFcq', 'sG4gWQC', 'mxroWQS', 'yZ7dVSk2Fq', 'W4ODWPRdU8kq', 'W4Wz4PQcWRJINki', 'WOLxWRhdQMm', 'fSolr8oDaq', 'WQbc4Pw44PEx4PwA', 'YPNiISU84Bwg4BAo', 'BmkgfSkEAq', 'W4lcRYnRzq', 'emoIW5xdGmoP', 'sY7dHXJdLa', 'WRFdTmoWW5pdKW', 'vJxdU8keAW', 'FY8d4BEU4Bs5', 'wGZdSZldOG', 'W5tcVNz/WRW', 'DXVdPI7dTW', 'W5FdSwr+WRC', 'W5GTdmkLmW', 'nX/cMmkPfa', 'E8kJEmk9mq', 'WOmym/cCGjnI', 'W7Oeo8kgfa', 'yf7cT2G', 'W4GumCoCW5xcLwm', 'rrnfW4G3', 'W54ZW5qw', 'd3tcTMlcRG', 'cCo7W6RdT8k0', '4BA0Y6tIGjtHTR3HTB0', 'W6e3sCk+W6e', 'WQ9dhCo6W4W', 'mZZcN8kjda', 'dCo1W6/dKCo1', 'WQKLWPyQW7i1W6pdNCoyWR4DdW', 'vxVdHYFcRa', 'E8ocqa', 'W50pWOLbFW', 'cqbqW4WX', 'CrFdOI7dQW', 'WQbGpmobW44', 'W4yXcSk+oq', 'kJpdMSkpca', 'WPCxWOtcLmk2', 'WQ82qNNdSa', 'Y7xHTPlHT7JdVCMq', 'W586fa', 'x37cLYhcOa', 'o3bqWQ1e', 'nSolr8oDkq', 'WQ5AdCo3W50', 'WOZdSru/WOO', 'WOJdTcK6WR8', 'W7pdSsuEWRK', 'WODOWQCtWQK', 'oX7cImoNsG', 'WOi8W5qDWRC', 'WPTLWPCi', 'W77dR2a', '4PM7t2FcVYS', 'WPGvWPtdRSkn', 'n2/cVhxcLW', 'DSoVWPq', 'W5PtWQ5B8yQNPW', 'WPiuFg/dIG', 'WP0dfSo9W54', 'smoKWOHZuG', 'oCkhz13cVa', 'W4yTc8o9', 'mMadBCkQ', 'W7JdObBdLrm', '4lwc4lAR4lw1nmoi', 'gItcVhNcKW', '4lErW7hGT6JGTj8S', '4lwB4lA64lweWQpdMq', 'AmomWPtcKSoM', 'v3RcNG', 'CbZdVaNdOq', 'vbXuW5e7', 'W57cV8kOW54j', 'WQvpBCoAEq', 'WOm8W4OvWPS', 'qVcAVOS', 'W49kWOLxna', 'W48RqCkVW4K', 'W6SsD8khW64', 'WO/dOX01WOm', 'WPy2W5yAWQu', 'ounxWOL0', 'bxy5E8oA', 'WPGIWOZcKSo+', 'pCkeFGWx', 'EGj1n8kV', 'WOq8hCk6kG', 'W6CplCkAuW', 'WO/cULH8pq', 'pCozW6/cKwy', 'WRKDWRldQmkD', 'WO8miSkxna', 'FSoIWOX/', 'AGZdRW', 'WRhdQ2GvWR0', '8jMiHHqdWPHV', 'k8kl8yAxP8kfwW', 'uXxdGX7cLq', 'WRxcIa8', 'nmoMWQFdTCo3', 'WPpcHbZHTQJHTA4', 'W63dP2qsWQS', 'WPNdSHi4WOO', '4QYktmoqW5Xr', 'CmoRWOrN', '4BEAYQXz4BAFYlC', 'W44giW', 'W6NdPYuCWRO', 'WP8TWOpcMmkM', 'aw/cUwxcLW', 'pCovW6xcJ2a', '4lwkW6FGTlNGTlNcLW', 'W5ZdVuxdKqy', 'fvRcI1u', 'vCk14PsBW73dQq', 'CH46WQD/', 'ithcGSkufW', 'W4Hjs8kDcq', 'W7VdP3eqWRy', 'k8oGzmoGaq', 'awVcPhtcLa', 'WPNdVXK4WQS', 'WP8BWPVdM8ky', 'mq9bqSou', 'Cmoaw0pcTa', 'WP8peSo4W5q', 'WRpcVCkUW4ddGG', 'xxxcJIFcQa', 'jsTquCoK', 'WQH5nmoAW5e', 'qs3dPCkhBa', 'WQu3W4ejWQy', 'W6ShzSkJW4i', '4lwe4lEE4lE+4lAM4lsJ', 'W4/cJ3KVlG', 'W7BcLem2WPy', '4BED4BstYjpHTP/HTR8', 'x2RcMComW7m', 'WRrCu8oDha', 'W4X6W5xcRZC', 'pY1xvCkW', 'WPjIWO0dWO4', 'x33dISopW60', 'lxbtWQjx', 'sdFIGBi3W5a', 'WRvIg8oHW4a', '8k6dHUkaPpcXG59t4Bwa4Bwa4Bww', 'DbGeWRKD', 'FZ9WWRPx', 'k/c/N7q', 'u3JcR2dcLa', 'WPS8W50', 'v8kOWQC', 'WRKtc8o+W4G', 'WPu9WOqgWR4', 'CmoVW5m', 'W4HZWPddVG', 'WPZcUKTJnq', 'W4/dG3VdMGG', 'W6n/WR7cSGO', 'WO/dPq4ZWP0', 'W5OmoCktnG', 'pNLiW64k', 'd/cGS77IGy/WVlcsjUg2PEg0UW', 'WOjUzCoWca', 'if7cI0tcRG', 'W57dR1WcWRO', 'wHDZfCkG', 'WOWCWPRdOSkl', 'F8kzWOCkWRq', 'W74XW5v/WRm', 'gLjgWQHx', '4lAtxEc2QEc0M+c3Pa', 'W4ZdUWjmmq', 'qCkQW7SJoG', 'th7cKYhcRa', 'WReSshNcUq', '8ywJISoesSkPpq', 'Y6RHTixHT5e6W7e', 'WOiMWPNcGW', 'rmkqc8kNEG', 'W4fan8ktkq', 'e8kMW6OIDq', 'xCk/cd47', 'WQKKaSo/W5C', 'zfNcOJFcRq', 'WQGJrgC', 'WQ9shSo+WPG', 'WRCjf8o4W6i', 'WPiSWPBcMCkY', 'WPvhnComW60', 'W5aZgSof', 'W7FdTMGDWOa', 'W4KKWOLwmW', 'swVdJmoxW7W', 'Ee/dKSoAW4W', 'k3bhW64x', 'WODvsa', 'W44Pdmk2', 'dN48CSku', 'W75JW4L7WQ8', 'lmkRW4q', 'WQ9bfq', '4PMDmJniba', 'zXNdOHVcVG', 'WRNcU8kVW58', 'W7JdP3e', 'YApjPEg1HKu', '4BAUY5tiJmQ94BwE', 'W4NcSMj/WQi', 'CGH5', 'WRu/WOH2WQS', 'W7ianCoRiG', 'eSo6WPlcUSkL', 'W7vWW4P/W6G', 'WQD2W45UWQO', '4ls14lwQ4lEI4lA5Da', 'YQ4EYjpHTRNHTQq', 'WRtdSSkVW4hdIG', 'WOaBf8k5pq', '4PsG4Pw94PwP4PEj4PsN', 'A8kwbSkNFa', 'WOpcUqWZWP8', 'CCkagmkavW', 'ymoOWOG', 'xtNdLX/cOW', 'hSoZW53cS1W', 'WOmzCmoxdG', '4Q2vWQhdJSk8W4W', 'W6eRWP9ada', 'rX/dGGdcIG', 'feiaWOHNWP3cPmoXW6Ses2LrWOu', 'kmopwq', 'AMNcOtZcMG', 'W6RdO2mcWPO', 'imkTW74qiG', 'bCkQW7OYjW', 'C8oTWPlcQCoN', 'xxBcIW', 'saKEWPHI', 'W4/cQh0rvq', 'W4ClWO9rlq', 'WO3XIjkX', 'Bcf6W7j+', 'eY7cJCksnW', 'WRvCqSoada', 'W4WwpmkRdG', 'W4ZdUXiO', 'pmkYW4RdLSk+', 'ymkgzIGC', 'iEc0Koc1VSoq4lwM', 'W5RdShCEWQ0', 'WQLWDNK', 'W5qUfCowoq', 'WO8Ab8oJW5W', 'W47cVKnIWQa', 'CbLVnCkQ', 'W6tcQSoZ', 'WQLBemo9W4W', 'W4XTWOBcOt4', 'W6iMymk3hq', 'WPZcULX8mq', 'W6a1g8ofia', 'FIHaW40i', 'ivW3B8kw', 'jftcNeG', 'E8kgpbu2', 'WOxdO1W6WOa', 'vw/dNCkoW5K', 'WO0tvmoblq', 'WOu/p8kvlW', 'imoCw8owfG', '4Q6syGDpW7W', 'W4mhWP9qeW', 'omkUWRGYWRC', 't3ZcLtZcUq', 'C2SCrmo1', 'BmkgmGOr', '4lAv4lEeW5xdM1e', 'W48tkCk4tW', '4P69WRCSmmkk', 'W4abka', 'osbPvCo4', '4PIr4PIm4PQl4PU/4PMr', 'W4LfW4LIWRC', 'W4eeamkZoG', 'WOBdSLXMW48', 'kSozr8ovcW', 'qH/dGWy', 'Y6C34Bwl4Bsq4BE+', 'jGJcJCkrla', 'BSoZWP0', 'tCoaWPFcUCom', 'WP44W4Ku', 'vXpdTCkVrG', '4Q2ntsOdWQy', 'WOrJWO7cLmk9', 'WOtcVLO', 'W4OopSkFEq', 'W57cTCk4W4Gw', 'W6XJBgGf', 'vZpdOCknAG', 'WPipc8o0', '4PEY8kMgSLhdVdW', 'efZdNmoEW6u', 'WR/cOUkxO1hdVW', '4BAN4BwqYj7iOUg1Ja', 'W4zUWPa', 'YlpHTzpiKUg3JmUf', 'lmoAua', 'YlBHTixkN8oT4BwC', 'ECoRWPLQ', 'W69FW4PVWPi', '4lA84ls34lsRW5dGTiO', '4BsG4BwWsFgnGy/IGilWN5oxrG', 'W4KGhCkYka', '4Bwt4BwPW5FHTQGl', 'WONcQfTPmW', 'WOPYwa', 'W7BcUh59WO0', 'W6XHAMWr', 'WQtcP8kUW4ddGG', 'WRqNtgJdRq', 'ymoZWPdcMCow', 'A01VjmkG', 'yWzFx8o3', 'gMRdJmoCW6m', 'rSkiWRNcNZ4', 'BxFcGrtcQG', 'W7XGDq', 'WRnEhG', 'h3dcM+g1REg3Qq', 'Bmkxnaah', 'W74Nfg7cQW', 'lYNdSYpdUG', 'WP9BE8o8bW', 'W5KpWPvwca', 'WOPOuSktpW', 'W5pcTSk+WP0D', 'WP/dGI0PWRu', 'W6hcQmoHWOtdMW', '4lsY4lAOW4qjWO0', 'CSk3nCkJyq', 'nSoaqmojfa', 'W4JcRNa', 'WPe+W4e', 'wqLhWQrc', 'rWruW4G/', 'W6i3fColia', 'frxdL1xcGq', 'W7FcQmoKW4RdLG', 'tSkmpYKs', 'wmoxq3RcRa', 'ESk+mmkIya', 'W7RdI3WtWRO', 'qmkLW4tcVSo4', 'qqzAW5i7', '8j+bGSk0WPZdINa', 'gfZcM1NcQG', 'n8kdWP4nWR4', 'aeDjWPyn', 'WQ4Nx2BdUa', 'WO0zWPpdTa', 'WQuLWPldUCkG', 'WRiNssVcUa', 't3RcIthcHa', 'fCkQW6CLEW', 'W4ZcL8k2W5a', 'W7ddRgbrWQ0', 'cmkEWP4WWQO', 'n+c0Koc1LUc3N+c2Iq', 'WOiQWO7cMCkT', 'W73cTSoKWQ7dRG', 'W7dcO3HEWQi', 'WOrUrCotbq', 'qJNdO8kfsa', 'gx9OWOrs', 'jmoEtmol', '4QYrWO4dW7un', 'W4/cQCk+', 'Y57jS+g3TCUO6P+H', 'W7pdQ2SA', 'FZhdU8kNuG', 'WP1Wva', 'WP/cVKzSgq', 'nhbA', 'WPGvWOBdUmkv', 'rInHkSkM', 'c3yKCSkD', 'WQ/XJQgN', 'W417WOBcOW', 'DX50jSkK', 'WPSMW4hcLSo+', 'W65IW4i', 'EGX0iSkK', 'WPlcU8k3W5hcHW', 'zFc2UQVWS4UG8kgOKwa', 'oJnyy8oF', 'WP4aW6ivWPi', 'rf0DWQyh', 'WOevWOW', 'gI7IGPVcJSkG', 'CreAWQbS', 'e8kNEKBdVq', 'WQaRW4SxWR8', 'lSoKFSo5na', 'WPNdJ2BdUu8', 'WRKdwCkPW7/dH3e', 'WOxcUe1MjW', 'W4eTaq', 'WPpdNKpdKG0', 'd1dcKq', 'mSkfWPWEWRu', 'iComx8oWiG', '4Psb4PAb4PEK4PEW4PwS', 'FKZILjZcQbG', 'WQmWWOtdLW', 'a8ofzUkwIvu', 'WQxdU1PTjq', 'WOCrWPZdOW', 'WPvZzSoklq', 'W4Pq4OoxWQ3dKW', 'W5pcUwqraG', 'ra/dNGhcGW', 'EEkeS++7HtddKCkS', 'eSoGW74', 'W6NcQ2m1cG', 'ymkhnsWh', 'WOdcO09Hma', 'ztpcRCksya', 'W5XjW6VXGQEmWP8', 'W7GEySknW6O', 'WRWnv23dJa', 'W5SapW', 'WOmyos1w', 'gCoeW6pdM3O', 'e8kGW7TXna', 'uWGBWQWD', 'W5OCka', 'W4uZgW', 'Cmodr13cVa', 'W7T7D2Oc', 'WP7dOqG', 'eCoKW67cMge', 'WQiLqSkUW48', '4lEw4ls34lApcEc1Pq', 'WOjGWPajWPi', 'WP3cKh9Njq', 'jhSfESkP', 'WRv+i8o3W7O', 'W6PRAfWH', 'qNZdOSkhjq', 'bNNcRW', 'zI0tW7Dv', 'W61ZBwW', 'WPm4vupdNa', 'W4iuDmk1W4q', 'mmkdWP4', 'WPuabCo9W44', 'W4vZWOSnW5i', 'B8oGWONcLCkl', 'abmiWQrc', 'xtxdO8kk', 'mNXhWQDB', 'WR5sdCo+', 'W4OABmoEWQW', 'uJ3dUCkeyG', 'W4PRW59rWRS', 'WOiQWO7cMCo0', 'W6KhlCkzdG', '4BsuYiFIGklHTyRHT58', '8kgPVCoQ8jMAGpgdUjhWMQQ9', 'bCovW7JcJYC', 'WPHKWOuhWO8', '4PEg4Pwc4PsT4Psl4PAz', '4lwxEConaCo2', 'asRdGsBcPG', 'W5tcVCkUW5WC', 'W4VHTlhjUog1Oog3PG', 'WRZcTeDMeq', 'WPC3W5aeWO4', 'k8ooub3cUq', 'Bmk1adOA', 'W7rJW54', 'oYfuwCo/', 'sgVdISoBW6y', 'WPhcQmk0W5ddRG', 'ah/cQhtcLW', 'W5q/bSomlq', 'W5hcQCoXWODB', 'iCohxCoaxG', 'WRHvomodW5u', 'WO1DWRmlWP4', 'xCkJiSkTEa', 'W4NdOuxcNW', '4lEj4lsP4lwv4lwt4lwn', 'CmkviW', 'EH3dQCktta', 'rH/dNXhcQW', 'W4uneSodjG', 'WPigWRBcSmkn', 'W4JcTgnJWR4', 'bmoyW77cLMS', 'nCopxConaq', 'ALjWiSkX', 'u8okWO/cTSoD', 'f8obq8oGca', 'Cg/dSSoCW5K', 'cSoLcCoQma', '4PA94PsE4PE14PEa4Pwz', 'FmoavudcSq', 'h8oXWONcSmkZ', 'xSoSrN7cLq', 'c3pcOSkaDq', 'W4iEWO9cnG', 'WPD/n8odW4O', 'W7C1b8owkq', 'WOj+WOipWP8', '4ls24lEFrSkWWPe', 'W4HYWPZcOsO', 'mCkJW6WWjG', 'kColsmokaq', 'Yk/HTAJHTyJdMSUa', 'WPVdOHmOWOO', 'W50HfSkZ', 'n0fTWP9a', 'W48yW5Sszq', 'W4zfr8k/iq', 'W6G+W4PZWQy', 'WQe+WOH7WRi', 'W7xdP+c0H+c1Smkx', 'nSkubSkwaW', 'W6ldVCkQW5VdLW', 'WP8gb8oL', 'k8ofWOhcG8og', 'eSkfWOCgWQq', '8jklKCkrx8kJbG', '4lAr4ls44lsX4lAI4lw9', 'jqVdPsFdVa', 'w8o/WO3cUG', 'DrmmWRfx', 'WRiGj8oCW74', 'cKDj', 'rHqfWQXj', '4Q+rW6FcVmk+W54', 's8kIiSoS', 'W4RdQ1JdLcW', 'WPX7ASokoW', 'WPRcGLW2WOe', 'q0ZdQ8oHW74', 'WPZdVHKRW48', 'W5GHcmkJmW', 'W4Waomkknq', '8jMFTo+4JW', 'tNZcJW', 'fSo0WO3cQCkG', 'mHBcICoDFa', 'W4PMDgKu', '8j6aLVc6RRNIGOpWTyk9W4fsldu', 'sJ1Ynmkz', 'WQxcP8kJW5JdJG', 'WQZcVSk0W4W', 'fmo1W7tdPSo/', 'WO9qWPVdRmku', 'W7/cO8kHW44t', 'WOhdSGu', 'WRdcOmkGW4ddIa', 'umo8dSkwwq', 'WPjlwSkstW', 'fSo9WPZcQq', 'WQStWOhdMSkV', 'x3ZcMCoaW6S', 'W4H6W5xcKYW', '4lEP4lEO4lAoWPZGT6y', 'FbvEW4q6', '4lEa4lsi4ls94lwDWR4', 'W6BcPgevaW', 'WP0CeSo4W4G', 'trddJYBdRW', 'W6neWQ3cLdO', 'zx7ILjpdMLS', 'umoeW6lcKh0', 'WPxcIeSEW78', 'tb1UlCkm', 'Cmo0WOVcHmoa', '4ls74lEYwoc1QUc3Ra', 'W4e1bSoplq', 'W58ztCkIW6q', 'W54Thmo3EW', 'WOCrWPVdQq', 'WQpdO1W7WOy', 'ASoWWRFcPCoN', 'bSovW7JdM2u', '4lE8W4RGTypGTRtGTjq', 'W5xcO2K', 'WPTIWOSgWPq', 'W77dLMasWRC', 'W5a9W5edWR8', 'gKvWWOLB', 'WO4bfmkXW5O', 'WRJdKJSvWQa', 'e8kSW6fXeW', 'fwpcPNxcLq', 'WO9/WPmoWPe', 'kGxcLCoMbq', 'eSkQW6C1ga', 'WO0Cg8ooia', 'WR9FWR4zWOu', 'W7hdO2Gu', 'W6zGya', 'zCoiw8owcq', 'WOHqWPZdO8kF', 'aSkqW6tcMgO', '8l2pQU+4Ja', 'cxDjW6NIL4e', 'jCoaW4Hi', 'WRlcSCkpW43dVW', 'j8kLWRa9WRK', 'jCkpWOOC', 'bCo0WONcQCkS', 'W70wCmkqWRW', 'BSoZWP4', 'WO9p4PARW5P5', 'WOCZDgRdTW', 'aKZcGeBdLW', 'oSocW7tdSCou', 'WQvlrSotgW', 'WOKrWOhdPmkw', 'shBcKZNcRa', 'W48zW5e4tW', 'pLfNWQDx', 'W4ZcUxa', 'wIJdOSkkjq', 'WP/dPq45WOS', 'C8oYW4tdKmkf', 'AmkwiWTv', 'CxXeWR1c', 'AZhcMmkEgq', 'uXxdNrNcIq', 'yq7dGrJdGW', 'W4XUW4VdLW', '4lEr4lsBW4tdKCkp', 'yJFIM7e3W5a', 'hM/cUwpcMG', 'avxcV2lcLW', 'WO4FWOldO8kv', 'jSosWOVcJmkH', 'd8o+W7hdI8oC', 'AGrW', '8l6DNU+6Mq', 'YBBHTypdJog3UUg3MW', 'mgDhWR0z', 'W6tcQ8o9W4RcHG', 'YkpHT5BkKoQCP8oY', 'k8kdWOi', 'WRi7xw4', 'W4NcOx94WQe', 'udhcRCkuDG', 'W5NcU8kVW5GC', 'hCobWRpcJmk/', 'WOTFgSo5W7i', 'YlNHTORkQUg2T8UH', 'W6L3pCo4gq', 'W7pdSxn3WRW', 'fv3cVNxcRW', 'Ch7cItlcVa', 'vc7cOmkBCa', 'WQhcT8k5W4a', 'W6RcVhzYWOi', 'Fu10kmoJ', 'uHeFWPbL', 'B0xdI8okW6m', 'WOuEWPdcRCkl', 'W7JcOMSqWRi', 'WOv3W4quWPu', 'FmkxkG', 'WOLQWPZcQY0', 'DSoAxuFcUG', 'Emoauq', 'WO4vWOBdRG', '4lAu4lEh4lEt4lsBcq', 'WORcSKrToG', 'WRVcK09rhq', 'lsejea', 'W4uzWPjgkG', 'W54dWPbbmq', '4Pwf4PwE4PE14PE64Pw7', 'WRTuha', 'CCkWiW', 'lfiv4PwAFG', 'WQuQth8', 'W5hdR1JdLWa', 'W7THmZDw', 'B8o+rCoCbq', 'W63cKSk4W5aS', 'W4tdRruS', 'Bmk9mCkvtG', 'xxZdMmodWQO', 'xdxdQCklAG', '8ls/TU+5GG', 'fG4hW4bT', 'WObyrSoCgq', '4BAWYRVkKog0LSoY', 'hmo/W6i', 'kZ/cO8o6Aq', 'W6RcTCoV', 'W5/cQCkOW5WC', 'W6NdGXBdUq8', 'W5OkpSkoDW', 'Y6JHTjD94BsA4BE/', '4PQDzbL1W6i', 'BCoRWP94rW', 'WQHtlSoEWQy', 'W4RcT+kwMNZdJW', 'omoIWPJcTSkr', '4lA74lwtW4O', 'mx7cK8ktfq', 'dwC/n8kw', 'BSkWhSk8FW', '4BsbYjxHT7BjOqi', 'WPK3W5CfWRC', 'AZldLmkoDW', 'WPNdULNcKau', 'jYP7ESoP', 'mmkyWPea', 'mSoMW4VdHCol', 'F8kF4PEP4PED4PEj', 'e8kQW7K9la', 'W7TzxmoU4PE2', '4lE64lEi4lE64lsG4lEZ', 'vrDBW5Gt', 'WO5shSonW5K', 'W581B8knW5y', 'fmo5WPtcVmk6', 'e8orW7/cNM4', 'v27cOd7cHW', 'yH168jQINSks', 'ASk0nmk4', 'W5NcUCkiW6Ks', 'WRT8W4HSWQS', 'amoWWO7cQCoN', 'WQhcU8k1W5JdGG', 'WQHwgmo4W4W', 'W64AB8kbW6G', 'W6jHW79nWRy', 'W7BcS8kWW5Gi', 'nJTmWR5t', 'rYBdPSk2yq', 'b0NcGKddLb/cL8otdsRcKa', 'W5GTgCk0lG', 'W57cTgn1', 'qf7cRa', 'E+c1KUc1LuJGTAG', 'WPapWQVcNmk7', 'W48QwmkemW', 'cCocW6lcMhO', 'ag/cPhtcTG', 'WONcPMar', 'WPGeW5xdRmkE', 'WQJGT47GTRxGTkVcPG', 'W5hdO2GuW6u', 'vxZdUCkjBa', '4PEQWP12', '8l2bUUkaLpcCG41I4BsO4Bsy4Bsy', 'wUg2Kog2I+g3SCMJ', 'W5OxW4uCWRm', 'mq3cNG', '4lwC4lAJa+c0G+c3LW', 'ydJcKthcQq', 'oY1DvW', 'WQBcT8kVW5ddQG', 'BCoiuaNdVa', 'm8kwWQLR', 'WPvnuCoBaq', 'W6KEzG', 'WPmGWPxdJCo+', '4BwcYk7QNjJcKW', 'tCk3iryB', '4lso4lsy4lAF4lA7W78', '4Q2UlSktW6RdRW', 'WPxcOIxILPFdVW', 'pdzF', 'da3cJSoHvG', 'WO9prSoCtW', 'obVcOmo+sa', 'WQ1qxVc3SBjG', 'W7xdSSo7WPq', 'WP94WOeo', 'qCkUWQK4oW', 'W7VdO8oYWOq', 'W4SWW47WPzM/8kM6Ka', 'zCoKWPFcKW', 'W7pcOSoKWPNdNG', '8j+EGCkJWPxdI3y', 'sWxdO8kKsq', 'W7BdPMbrWRi', 'W5ddQHBdGGq', 'W78eCSkoW7C', 'E8kRWPyfWRK', 'WRNcS8k1', 'Bb9S', 'nxdcMSkiha', 'W5P7WPVcPbq', '4OYziSkaW6pcJq', 'eSoWWOK', 'W54AiSkopa', 'W44pWOHr', 'WQSjy3VdJW', 'WOX/WOShWPe', 'sdFILRy3W5O', 'WRRcMMjbbG', 'W4i8dmkNkq', 'W5KEWOLBkW', 'WP/cVKL6nW', 'p3dcM/cIGOnu', 'WRr1W4zUWQm', 'WOWhdCo0W4i', 'CHpdHt3cKW', 'uNRdJCoEW7K', 'sq4z', '4lAZ4lwS4lsX4ls04lAv', 'B1tdLCoAwW', 'egVcUMtcKG', 'W7pcV2z3WR4', '4BAJ4BECYPzb4BwR', 'EYpdTmoQWOa', 'WRXAfCo+W5y', 'YihcUmQx4BE/4BEv', 'ASkemGah', 'WOm7v3JdSq', 'W5isWOm', 'WRzwhSoPW5K', 'YALJ4BELYBJjHW', 'WRNcTu1Wja', 'WOjCumor', 'kEkdH2zfoW', 'WQ/dRGyVWOC', 'vt3dUCka', 'WPBdULNdNW0', 'W5ZdT2G5WQC', 'o8kTWRalWOu', 'FSoFvutcRG', 'rG7dUmknDa', 'ccJcSCkUdq', 'W4RdTXW8W48', 'W6VcOKSqWRi', 'W41WW41ZWRa', 'DCk0pG', 'WOm6W5yyWQy', 'zH3dOZddRW', 'vq8f', '4BsA4BAoYBhjV8Mi', 'WOzXWPq', '4lsZ4lEiW5xdUCkq', '4lw74lEkW5xGTldGTy8', 'nX/dMSo9sW', 'WO/cTZe9WOm', 'W5a4WOqfWR8', '4BscxSIp4Bwn4BAv', 'eMFcRW', 'lI97rCoa', 'WR9bwCo0W5y', 'W4RdRutdMre', 'WOxgHog1KEg3VEg1NG', 'WRtcNw1Qma', 'mWpcJmoHxq', 'W4WNdCk5pG', 'aSkUW700mG', 'o1aMrSks', 'fmkHW61/', 'WRi1WRRdVSk6', 'fmk8W6W', 'mSklWOzgWQG', 'WPvCuCoCdG', 'r8kLk8kuDG', 'eMBcPG', 'W55kWP1BkW', 'mCoDWQVcQ8km', 'W6eChmkepq', 'WO3cVmkKW4FdIq', 'kmokC8oVhG', 'WQGABMxdNq', 'W4meWPa', 'pX7cMCoGga', 'WONdU3TTnq', 'W7JdQ3esWRm', 'AComqf3cUa', 'fv/dRmoRW48', 'WPNdOH42WOO', 'W44diq', 'hXBcO8kCnq', 'W5pcRSkZWP0i', 'qXiCWQDt', 'aCo7W5ZcLhG', 'BCk4ASk/Eq', 'xwFdJ8olWQO', 'qqGnWQbi', 'lapcImkOwq', 'bMFcQhxcIq', 'W5T3WPBcS3K', 'm8kfWOy', 'aw/cQ3pcJW', 'WP96sSoNBa', 'W5XvySovpG', 'c1P5WRDo', 'W5/dI0pdHGC', 'wcJdUmkfya', 'CSo4WPq', 'W6X6WR/cRaO', 'osTe', 'W64UimkfaG', 'WQ5AeSoVW5C', 'W6a8AMKu', '4PwZ4Psk4PEk4Psq4PE7', 'CIRdGHBcRa', 'FvRcOb/cGW', 'wc/cRCkuDG', 'WObqt8oxaq', 'CbZcTJFdVq', 'W7ugbCk9dq', 'AwrvqSo/', 'WOddUZa', 'Bmk+nCoSBq', 'WQVcOmo5WOxdKa', 'WO1CwG', 'W7RdR2qyWRm', 'W4T7DJDC', 'W4lcR3Oaca', 'WPRcVSkUW48s', 'BSoLWOhdNCoj', 'WQBcT8kGW4BdHa', 'WOtdPbLM', 'dWCaWRLf', 'BmkyhSkJEa', 'WP8tkSoEW7K', 'W4zFrSogda', 'W7X0W6TZWQW', '4Bwf4BAJcFcXGiZIGB7WP5o7vG', '4lwruoc0TUc0UEc1GW', '4BAC4BsXY43HTj7HT4u', 'W44cka', 'W499Dwez', 'W6BcIf1QpG', 'u37cG3xcUG', 'AwtIL5uqWRa', 'WRBcVCkSWPVdJG', 'CHFdUcu', 'qHDgW58', 'W4RcSgjLWRC', 'oJtcQ8ojvW', 'WOmDWPi', 'nrJcLCoJga', 'Ab/dUIC', 'vc7dNSobW6u', '4PUntsOcWRe', '4Bsg4BAfYBJkHmUp', 'gYxcUxxcLG', 'iIfk', 'WRGWW54', 'dGVcKSkxda', 'egVcVNxcNa', 'lqNcLmoSAa', 'W7dcTCo6', 'W6zI4PElk8k5', 'W5tcRguigW', 'WODWWPRcPJa', 'mYHTjSkQ', 'tCkKWRFdS8kO', 'WPjvrSkytW', 'q04z8joqNhG', 'YlvO4Bw8YzJlGW', 'ghbnWQTe', 'W7ZdVetdNXm', 'ASk0p8k4', 'W63dP3uDWR4', 'f8kaW4FHTkVHTki', 'u23cJJdcUG', 'W4Pq4PstWQ3dMq', 'a8ovW6xcN0q', 'WQLUAmoydq', '4Psj4PEL4Pwg4PwV4Pw1', 'W4ZdUWGOFG', 'W7GCCmol', 'WOHexmkX', 'WPKDfCoWW5W', 'W75YW481WQ4', 'gCoDW6RcNgW', 'imkoxCowra', 'WPvPr8kxFIVcPSkAW4BcP8o8', 'p8oHWRRcHCkf', 'W4ubWOP6ea', 'n8oDqmowcG', 'dwe1n8kF', 'W4WBlmkLla', 'W44FpCkwma', '4PA54PAo4Ps24PAW4PwH', 'qCkMW7LXDa', 'W7JdUmoH', 'WPLoc8oWW5i', 'jcvuvCkW', 'uCkAWOhdSq', 'z8krzGKC', 'W7lcOLiuWR0', 'tG/dNsJdGG', 's+g3R+g2IEg1M8I/', 'WOmXWO0', '4lwe4lwOW6hGTiNGTje', 'uaNdGHtcGq', 'YRdkS+g1UCk74BA1', 'cmoHW4dcLg8', 'vd7dUHtcHq', 'qbhdSGhcJq', 'fmoBz8kaBq', 'WOJcULXP', 'uHGiWQPt', 'm0FcOc7dP8o5tCoTuq', 'W6TWW5nUWQC', 'ktFcM8kr', '4lwymoc0Poc2SUc0VG', 'fmk9W6u', 'W6NcN1bbvq', '8ywVQE+7UG', 'W7WBzSoeW6G', 'W55WWPdcSNK', 'lsVcL8ouga', 'E8kGmSkPFW', 'W7zWW450', 'ESkWm8kT', 'gWZdUmkdAq', 'WQ3cReL6ma', 'jMrCvSkW', 'ra7dI8kIrG', 'uXpdNrdcIa', 'hSo0WORcP8kl', 'kNbqWROy', 'W4m7amod', 'W7SFASkhW6m', 'swVdMmoCW6K', 'WPORp8oLW7y', 'ArDguSoK', 'W6e5m8k9fG', 'D8kyWQFcSSk+', 'W5RWQyIn', 'WR9CBSoObq', '4P+FuYNcTmoQ', 'W4Wgth/dVa', 'WReRW5ayWQu', 'WRhcS8k1W5u', 'W4JcThf1WQy', 'a8oeW6lcKh0', 'W7OPWOn3bW', 'lG3cJSo8xq', 'W7OuW4ecWQu', 'WRekF0JdMG', 'W4/dGx00WP0', 'ww/dJColW60', 'tHPjWOH3', 'WO/dJFc6SkdcLZu', 'W4RcRvW', 'WP7dVHmYW4u', 'W51SWOZdUNq', 'WQCUqq', 'WO/dNaOUWQ4', 'WPKXWPG', 'iJVcMSov', 'wCk6WQVdM+kxRW', 'WOmWWOq', 's8oSgwtcMq', 's+g3L+g2HUg1Sog1KG', 'W7WccSkFpq', 'x8ofWPhcUmkO', 'WQiJCCklW6a', 'W54Hdmk7pW', 'iCosWPdcKCor', 'W4ZcU2rbWOm', 'WOPk4PsDeMu', 'WPpdI07dKqW', 'vbFdLa', 'W5a5wCk7WPG', 'W4jNALWu', 'WO3cVatcIvu', '4lwg4ls6jrJcSq', 'sCoFw03cQa', 'qrDg', 'uXGiWRTe', 'eSoVW6y3Dq', '4lsp4lEE4lErW4tGTyu', '4BE5tSU/Yj7cMW', 'ymolkW4D', 'WQmOoq', 'W7hcR8oZWOq', 'W6TWW4njWRy', '4PAQ4PwQ4PE74PsY4Pwf', 'lmoaqSkZxG', '4lEfn+c3OEc3I+c0VG', '4lEf4lEFa+c1OEc3RW', 'uJH/DSkk', 'WQ9re8oqW5C', 'W5e/W4SbWO0', 'W6bnWQxdOgm', 'tXbgWRTc', 'gSk1WPlcU8oP', 'W5tdTfldMdu', 'W5xdTNxdGZu', 'frpdNWBcKG', 'uNBdKSoNW4a', 'h8Ar4BAT4BwY4BEH', 'W5WaWO7cMSkU', 'WRLsdCoYW5C', '8jkFLSoLhmksga', 'zKRcTaZcSa', 'bSkIWPefWOC', 'W4VdG0K6WPO', 'WP3cSgD7fG', 'WOFcTwCsgW', 'WPOrWOhdUCkC', 'W6S9EMiB', 'tX9BW5aY', 'WRBcJhHVhG', 'ASoorKdcRq', 'W5RdVfpdKru', 'eCo7W6NdUq', 'fvRcKvJdNa', 'W70pj8o7nq', 'WO/dOsyMW6tcTbxcGZ0oWRxdMCkW', 'vXVdUIFdRW', 'W4OCpSkBpG', 'WO3cT0m', 'W7FcQ8oGWRpdTq', 'EwFcHJJcUq', 'W5noWRdcOIa', 'YiRjNUg2KCMQ6P6g', 'W74dqSkOW6i', 'WOKDa8oJW5u', 't8k6W5lcVmk5', 'WO9jv8oBaa', 'wwhdL8oAW6m', 'A8kIiG', 'W5ukjmk8hW', 'W5FdGfFdNqq', 'g0bkWODY', 'p1KCwmk7', '4lEt4lEa4lA7z+c0Ga', 'W75NW4i6WQC', '4PAT8ksLM8oACW4', 'a8ozW7/cLhS', 'W4dcUxO', 'aSkNW6GL', 'ktVcKCoAda', '4PYQWRlcRCocW7i', 'n8olsmoAea', 'hmoIW67cVmo9', 'gI7ILz/cJSkQ', 'WR0GW50JWQu', 'pq3cJSoTxW', '4lA14lwt4lsH4lsI4lst', 'W7nLW5nQWRe', 'W5yNWPtcHCk3', 'kCkrku8g', 'vCk1W4FdVq', 'nWlcKCkcaG', '8k2cHXmA', 'W5SklSksDG', 'W5LrAgGs', 'W4zbkSktlq', 'ag/dQNFcKG', 'oKZcJSoNga', 'W4mzpmoTcG', 'WOpdU1TTnq', 'WRxdGxCuWR4', 'WQ/XJQwS', 'C8kWlSkI', 'WOPIkSkIna', 'tMZdJw/dQq', 'WRDxi8onW4i', 'WQqRqG', '4Psb4PAb4PEK4PEW4PAL', 'fCkMW709ma', 'W7SwySkwW6u', 'WOvrqSog', 'W6qwi8ojWQy', 't33dNa', 'gmovW6RcN2W', 'W5xdIh/dTby', 'mcLkxSo8', '8lwTHtVcUc/dGa', 'exZcT8ob', 'W7iqemomia', 'fSoKWPtcK8kH', 'WQdINkFIMztILllILyu', 'wY/dOSkp', 'WP04WQFdJSk6', 'n8kfWOadWQm', 'WPFdQvNdNWy', 'm8oRuuZcSq', 'k101C8o6W5ddK8oTdqJcHmk9WPCD', 'W7P8W4i', 'cxdcHelcKa', 'W54pWOng', 'W6JcQeu2oG', 'h8ocW7i', 'WOVdOr0OWO4', 'wJFdQXNcPa', 'xrPwcmkN', 'ECoVWP5O', 'W4ikBEc1JUc2IW', 'xHhdL8knrW', 'WPRcM8klW7rv', 'kX1KACo8', 'W5WkeSkEoa', '4lEw4lE34lA7z+c1UW', 'pdvrWQTg', 'uXGhWQ1Q', 'eSknW5aHpq', 'W4RcR8k5W5es', 'iCoSWQRcMCkX', 'bNy9CG', 'W4uJwmkIkq', 'nZlcG8kJoq', 'WOuMWO/cK8kt', 'W7hcQmoAWOxdLa', 'kdbauCoG', 'W6dcNvWkWOO', 'W6XMEgqA', 'WPNdTa41WP8', 'WPbfW5rgia', 'WOpdPWG1WOa', 'm1CG', 'rCkmkarv', 'kX7cLG', 'WO8dWOBdRmkE', '4lEVwUc0REc2PUc1IW', 'WQFdRGuoWPW', 'W4VcUwGscG', 'yH3ILytILjFIL7O', '4PsD4PAk4PET4Psl4PsI', 'W49IwmoTEG', 'W4KPdmk0mG', 'W4ZdTGG', 'W4NcV8k6W48y', 'FGHZ', 'WQWCd8oYW54', 'zYDCxCk/', 'W5pcVxu5W6y', 'ic3cHSkBha', '8jMcQ1iIWQ/cGa', 'W58zW5TrkG', 'WOvKWOesW50', 'w8o1WQ/cUSoZ', 'aYv4qSod', 'WOxdPqu', 'shBcJchcPG', 'hCovW7JcIgG', 'WQlcPCkWW57dLG', 'W7VcSCkPW5hdHa', 'W5PtW7S', 'W5mZamookq', 'fCoCW5tdLgq', 'W4VcPhL1WRK', '4PAj4Pss4Psz4Psn4Pw2', 'WQpcJgzegW', 'kSkYjSkToq', 'WQ7dUZO1WQ4', 'ertcLCoeAa', 'gmoGW7xdVCoS', 'psFcG0RcRG', 'Bmk/jSkHAq', 'fCknW67cLq', 'WPdcISkPW5in', 'W6H0W4L+WO8', 'W5/dP1xdLq', 'W6S/W4L/WRy', '4lwT4lwX4lAYqEc2Ra', 'FmoEr0JcUG', 'hSowW6pcNhG', 'WOjti+kuGSkM', 'ASkKi8kPnG', 'gYtcS8kK'];
    _0x2484 = function () {
      return _0x3d439e;
    };
    return _0x2484();
  }
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

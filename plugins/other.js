(function (_0x4f58cc, _0x438040) {
    const _0x29a93e = _0x4f58cc();
    while (true) {
      try {
        const _0x11a7c3 = parseInt(_0x5b12(2410, '#7$9')) / 1 + -parseInt(_0x5b12(1358, '7oTg')) / 2 + -parseInt(_0x5b12(997, '0[kT')) / 3 * (-parseInt(_0x5b12(808, 'hd@n')) / 4) + parseInt(_0x5b12(1578, 'r3EZ')) / 5 * (-parseInt(_0x5b12(473, '[F$f')) / 6) + parseInt(_0x5b12(1152, 'dqHX')) / 7 * (-parseInt(_0x5b12(2525, '[F$f')) / 8) + parseInt(_0x5b12(1732, '(Id*')) / 9 + parseInt(_0x5b12(1691, '0]Ia')) / 10 * (parseInt(_0x5b12(2136, 'r26#')) / 11);
        if (_0x11a7c3 === _0x438040) {
          break;
        } else {
          _0x29a93e.push(_0x29a93e.shift());
        }
      } catch (_0x2022a0) {
        _0x29a93e.push(_0x29a93e.shift());
      }
    }
  })(_0x5e1b, 562450);
  const config = require("../settings");
  const Hamza_codes = config.OWNER_NAME;
  const {
    cmd,
    commands
  } = require("../lib/command");
  const fonts = require("../lib/font.js");
  const availableStyles = Object.keys(fonts);
  const {
    fetchJson
  } = require("../lib/functions");
  function convertToFontStyle(_0x4025f9, _0x4cfb71) {
    let _0x16a2be = '';
    if (fonts[_0x4cfb71]) {
      for (const _0x484d5c of _0x4025f9) {
        _0x16a2be += fonts[_0x4cfb71][_0x484d5c] || _0x484d5c;
      }
    } else {
      _0x16a2be = _0x4025f9;
    }
    return _0x16a2be;
  }
  _0x469092.pattern = "saveno";
  _0x469092.react = '👾';
  _0x469092.desc = "To save acc number";
  _0x469092.category = "other";
  _0x469092.use = ".saveno";
  _0x469092.filename = __filename;
  cmd(_0x469092, async (_0x5ad9a5, _0x46da1e, _0x2ee1b8, {
    from: _0x42c59e,
    l: _0x389f13,
    prefix: _0x509d73,
    quoted: _0x1b231f,
    body: _0x3258e7,
    isCmd: _0xa098a5,
    command: _0xb4009f,
    args: _0x22a322,
    q: _0x477379,
    isGroup: _0x5e352b,
    sender: _0x1b4a40,
    senderNumber: _0x7c5e08,
    botNumber2: _0x140ead,
    botNumber: _0x2eae0c,
    pushname: _0x45bb6f,
    isMe: _0x4abf12,
    isOwner: _0x3853f5,
    groupMetadata: _0x22d775,
    groupName: _0x3c302b,
    participants: _0x2ddb6f,
    groupAdmins: _0x2bf665,
    isBotAdmins: _0x1e5dc2,
    isAdmins: _0xb1eb97,
    reply: _0x35d74e
  }) => {
    try {
      let _0x4e63a6 = '';
      if (_0x4e63a6 === '') {
        const _0x258e73 = _0x477379.trim();
        _0x4e63a6 = _0x258e73;
        await _0x46da1e.reply("Account number recorded: \"" + _0x258e73 + "\"");
      } else {
        await _0x46da1e.reply("A message is already recorded.");
      }
      const _0x218a91 = {
        text: '✅',
        key: _0x46da1e.key
      };
      const _0xc83066 = {
        react: _0x218a91
      };
      await _0x5ad9a5.sendMessage(_0x42c59e, _0xc83066);
    } catch (_0x1153d2) {
      _0x389f13(_0x1153d2);
    }
  });
  const _0x5cbaf1 = {
    pattern: "delno",
    react: '👾',
    desc: "To delete acc number",
    category: "other",
    use: ".delno",
    filename: __filename
  };
  cmd(_0x5cbaf1, async (_0x1e7e6d, _0x5f14cf, _0x5d73d0, {
    from: _0x1c7816,
    l: _0x600bf4,
    prefix: _0x15a0e7,
    quoted: _0x11eb10,
    body: _0x56a3f1,
    isCmd: _0x70b118,
    command: _0x4d8c52,
    args: _0x2c152e,
    q: _0x3f7162,
    isGroup: _0x9a528d,
    sender: _0x39c5f4,
    senderNumber: _0x5eb492,
    botNumber2: _0x38c7a8,
    botNumber: _0x2dca2d,
    pushname: _0xc6176e,
    isMe: _0x399728,
    isOwner: _0x4e0fdb,
    groupMetadata: _0x50f771,
    groupName: _0x9537f6,
    participants: _0x19e36d,
    groupAdmins: _0x56ab0c,
    isBotAdmins: _0xa35dd5,
    isAdmins: _0x540c4b,
    reply: _0x7c99e9
  }) => {
    try {
      recordedMessage = '';
      await _0x5f14cf.reply("Account number deleted.");
      const _0x274ed1 = {
        text: '✅',
        key: _0x5f14cf.key
      };
      const _0x4d8a2e = {
        react: _0x274ed1
      };
      await _0x1e7e6d.sendMessage(_0x1c7816, _0x4d8a2e);
    } catch (_0x4a29fe) {
      _0x600bf4(_0x4a29fe);
    }
  });
  const _0x4da0ee = {
    on: "text"
  };
  cmd(_0x4da0ee, async (_0x7ec6a2, _0x28270b, _0x530b57, {
    from: _0xba8d59,
    l: _0x56fe52,
    prefix: _0x3917b6,
    quoted: _0x1d3e8e,
    body: _0x325f34,
    isCmd: _0x5a8ffa,
    command: _0x11070e,
    args: _0x640b7d,
    q: _0x16d492,
    isGroup: _0x427132,
    sender: _0xb418ca,
    senderNumber: _0x4b9c9e,
    botNumber2: _0x4e8470,
    botNumber: _0x3847e8,
    pushname: _0x3dcab6,
    isMe: _0x32ac47,
    isOwner: _0x10113a,
    groupMetadata: _0x4f3038,
    groupName: _0x17927d,
    participants: _0x3ec785,
    groupAdmins: _0x20de67,
    isBotAdmins: _0x2831bc,
    isAdmins: _0x131b80,
    reply: _0x1d1097
  }) => {
    if (/(\baza\b|\bsend aza\b|\baccount number\b)/i.test(_0x16d492) && recordedMessage) {
      await _0x28270b.reply(recordedMessage);
    }
  });
  const _0x316a9c = {
    pattern: "hack",
    react: '☠️',
    desc: "To hack",
    category: "other",
    use: ".hack",
    filename: __filename
  };
  cmd(_0x316a9c, async (_0x3a32fd, _0x58ab55, _0x31bbfc, {
    from: _0x1190a2,
    l: _0x6fb0c4,
    prefix: _0x20ed0e,
    quoted: _0x48d4fe,
    body: _0x2f02e8,
    isCmd: _0x286f46,
    command: _0x5ecb4a,
    args: _0x296072,
    q: _0x5634d2,
    isGroup: _0x1c1cd5,
    sender: _0xa53b9a,
    senderNumber: _0x5aad20,
    botNumber2: _0x37a44d,
    botNumber: _0x814d42,
    pushname: _0x745cfd,
    isMe: _0x5a3787,
    isOwner: _0x22ab4e,
    groupMetadata: _0x5aad9a,
    groupName: _0x41f09a,
    participants: _0x2d3529,
    groupAdmins: _0x10b126,
    isBotAdmins: _0x1f4999,
    isAdmins: _0x35b1b9,
    reply: _0xf445f1
  }) => {
    try {
      _0x58ab55.reply(` Injecting malware`);
      await sleep(1000);
      _0x58ab55.reply(`transfer into device \n 0%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer photos \n █ 10%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer successful \n █ █ 20%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer videos \n █ █ █ 30%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer successful \n █ █ █ █ 40%`);
      await sleep(1000);
      _0x58ab55.reply(`transfering audio \n █ █ █ █ █ 50%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer successful \n █ █ █ █ █ █ 60%`);
      await sleep(1000);
      _0x58ab55.reply(`transfering hidden files \n █ █ █ █ █ █ █ 70%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer successful \n █ █ █ █ █ █ █ █ 80%`);
      await sleep(1000);
      _0x58ab55.reply(`transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%`);
      await sleep(1000);
      _0x58ab55.reply(`transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%`);
      await sleep(1000);
      _0x58ab55.reply(`System hyjacking on process.. \n Conecting to Server `);
      await sleep(1000);
      _0x58ab55.reply(`Divice successfully connected... \n Receving data...`);
      await sleep(1000);
      _0x58ab55.reply(`Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...`);
      await sleep(1000);
      _0x58ab55.reply(` HACKING COMPLETED BY ${Hamza_codes} `);
      await sleep(1000);
      _0x58ab55.reply(` SENDING PHONE DOCUMENTS FOR ${Hamza_codes}...`);
      await sleep(1000);
      _0x58ab55.reply(` SUCCESSFULLY SENT DATA AND Connection disconnected by ${Hamza_codes}`);
      await sleep(1000);
      return _0xf445f1(`*ALL FILES TRANSFERRED TO ${Hamza_codes}*`);
    } catch (_0x4d9331) {
      _0x6fb0c4(_0x4d9331);
    }
  });
  function _0x1439e0(_0xf4ad75, _0x2e227a, _0x4b89cf, _0x181ec3, _0x431fbb) {
    return _0x5b12(_0x181ec3 + 0x1c, _0xf4ad75);
  }
  const _0x257e06 = {
    pattern: "fontchange",
    react: '👾',
    desc: "To change font of text",
    category: "other",
    use: ".fontchange",
    filename: __filename
  };
  cmd(_0x257e06, async (_0x1e69d4, _0x43f384, _0x290ec2, {
    from: _0x3bb3fe,
    l: _0x3f59cc,
    prefix: _0x3fac33,
    quoted: _0x1a7f17,
    body: _0x397758,
    isCmd: _0x48475a,
    command: _0x1cf1b4,
    args: _0x3f90ff,
    q: _0x4a3373,
    isGroup: _0x3bea26,
    sender: _0x3b17fa,
    senderNumber: _0x196a40,
    botNumber2: _0x538f50,
    botNumber: _0x2cb9b6,
    pushname: _0x3bf735,
    isMe: _0x59efc5,
    isOwner: _0x5d96b4,
    groupMetadata: _0x11a6f8,
    groupName: _0x12ab3a,
    participants: _0x469ca2,
    groupAdmins: _0xe22e9b,
    isBotAdmins: _0xcccaf7,
    isAdmins: _0x3f560f,
    reply: _0x305c44
  }) => {
    try {
      if (_0x3f90ff.length === 0) {
        const _0x5c39b8 = availableStyles.map(_0xb27300 => {
          const _0x39cbb8 = convertToFontStyle("X-BYTE", _0xb27300);
          return _0xb27300 + ": " + _0x39cbb8;
        }).join("\n");
        _0x305c44("Usage:\n" + _0x3fac33 + "fontchange <style> <text>\nAvailable font styles with previews:\n" + _0x5c39b8);
      } else {
        const _0x58f7f1 = parseInt(_0x3f90ff[0]);
        if (isNaN(_0x58f7f1) || _0x58f7f1 < 0 || _0x58f7f1 > 34) {
          _0x305c44("Style number should be between 0 and 34. Please choose a valid style.");
        } else {
          const _0x4bb559 = _0x3f90ff.slice(1).join(" ");
          const _0x37f39b = convertToFontStyle(_0x4bb559, _0x58f7f1);
          _0x305c44('' + _0x37f39b);
        }
      }
      const _0x3f7702 = {
        text: '✅',
        key: _0x43f384.key
      };
      const _0x1dea32 = {
        react: _0x3f7702
      };
      await _0x1e69d4.sendMessage(_0x3bb3fe, _0x1dea32);
    } catch (_0x223f72) {
      _0x3f59cc(_0x223f72);
    }
  });
  const _0x492769 = {
    pattern: "nowa",
    react: '👾',
    desc: "To see same type whatsapp numbers",
    category: "other",
    use: ".nowa"
  };
  function _0x5565e0(_0x4ff32e, _0x5ba073, _0x8660e0, _0x65fb3d, _0x405537) {
    return _0x5b12(_0x8660e0 - 0x1ba, _0x5ba073);
  }
  _0x492769.filename = __filename;
  cmd(_0x492769, async (_0x45bc16, _0x5a7eab, _0xa611c, {
    from: _0x402466,
    l: _0x2b5462,
    prefix: _0x588f41,
    quoted: _0x302f94,
    body: _0x9dd46,
    isCmd: _0x56175d,
    command: _0x4b3e30,
    args: _0x54847f,
    q: _0x2a705d,
    isGroup: _0x4cec9d,
    sender: _0x5d4b0b,
    senderNumber: _0xa5de0e,
    botNumber2: _0x23a84e,
    botNumber: _0x1849db,
    pushname: _0x2d0bce,
    isMe: _0x1f0648,
    isOwner: _0x5a71a9,
    groupMetadata: _0x3b5692,
    groupName: _0x198020,
    participants: _0xf04d6a,
    groupAdmins: _0x5b1459,
    isBotAdmins: _0x3af1da,
    isAdmins: _0x1bd1c6,
    reply: _0x10feeb
  }) => {
    try {
      if (!_0x2a705d) {
        throw "Give a number to search";
      }
      if (!_0x2a705d.match(/x/g)) {
        throw "*Example: " + (_0x588f41 + _0x4b3e30) + " 923072380xxx";
      }
      let _0x36a690 = _0x2a705d.match(/x/g).length;
      let _0x26452a = Math.pow(10, _0x36a690);
      let _0xc6c8c = [];
      for (let _0x4e616c = 0; _0x4e616c < _0x26452a; _0x4e616c++) {
        let _0x586b8a = [..._0x4e616c.toString().padStart(_0x36a690, '0')];
        let _0xa50ea2 = _0x2a705d.replace(/x/g, () => _0x586b8a.shift()) + "@s.whatsapp.net";
        if (await _0x45bc16.onWhatsApp(_0xa50ea2).then(_0x27edf7 => (_0x27edf7[0] || {}).exists)) {
          let _0x64aeef = await _0x45bc16.fetchStatus(_0xa50ea2)["catch"](_0x4cec2e => {});
          const _0x461185 = {
            'exists': true,
            'jid': _0xa50ea2,
            ..._0x64aeef
          };
          _0xc6c8c.push(_0x461185);
        } else {
          const _0x3c7e96 = {
            exists: false,
            jid: _0xa50ea2
          };
          _0xc6c8c.push(_0x3c7e96);
        }
      }
      let _0x1716bd = "Registered\n\n" + _0xc6c8c.filter(_0xb4b500 => _0xb4b500.exists).map(_0x20e171 => "• Link: wa.me/" + _0x20e171.jid.split('@')[0] + "\n*• Bio:* " + (_0x20e171.status || "description") + "\n*• set on:* " + formatDate(_0x20e171.setAt)).join("\n\n") + "\n\n*Not registered*\n\n" + _0xc6c8c.filter(_0x623ae8 => !_0x623ae8.exists).map(_0x238e16 => _0x238e16.jid.split('@')[0]).join("\n");
      _0x10feeb(_0x1716bd);
      const _0x12182f = {
        text: '✅',
        key: _0x5a7eab.key
      };
      const _0x413f69 = {
        react: _0x12182f
      };
      await _0x45bc16.sendMessage(_0x402466, _0x413f69);
    } catch (_0x3849de) {
      _0x2b5462(_0x3849de);
    }
  });
  const _0x200da4 = {
    pattern: "obfus",
    react: '👾',
    desc: "To encrypt js code",
    category: "other",
    use: ".obfus",
    filename: __filename
  };
  cmd(_0x200da4, async (_0x3fdbf8, _0x25d76f, _0x137ff9, {
    from: _0x1ba3ee,
    l: _0x54423b,
    prefix: _0x40a715,
    quoted: _0x3fff80,
    body: _0x3ad000,
    isCmd: _0x1274f2,
    command: _0x4449f1,
    args: _0x214c8d,
    q: _0x44012f,
    isGroup: _0x331d4b,
    sender: _0x59362e,
    senderNumber: _0xb1d984,
    botNumber2: _0x259be9,
    botNumber: _0xf23baa,
    pushname: _0x956d69,
    isMe: _0x11a2de,
    isOwner: _0x8158cb,
    groupMetadata: _0x3c1511,
    groupName: _0x21c253,
    participants: _0x4f5a1a,
    groupAdmins: _0x244413,
    isBotAdmins: _0x45f957,
    isAdmins: _0x3c3821,
    reply: _0x56d81e
  }) => {
    try {
      if (!_0x44012f) {
        return _0x56d81e("Example " + (_0x40a715 + _0x4449f1) + " const Hamza = require('baileys')");
      }
      let _0x26f365 = await obfus(_0x44012f);
      _0x56d81e("Success\n" + _0x26f365.result);
      const _0x5b7cc5 = {
        text: '✅',
        key: _0x25d76f.key
      };
      const _0x2fd7ee = {
        react: _0x5b7cc5
      };
      await _0x3fdbf8.sendMessage(_0x1ba3ee, _0x2fd7ee);
    } catch (_0x3f23b1) {
      _0x54423b(_0x3f23b1);
    }
  });
  const _0x509302 = {
    pattern: "leaderboard",
    react: '👾',
    desc: "To see info of leaderboard",
    category: "other",
    use: ".leaderboard",
    filename: __filename
  };
  cmd(_0x509302, async (_0x3174ca, _0x4ab9c7, _0x5cd3d2, {
    from: _0x5364f2,
    l: _0x5bd0c1,
    prefix: _0x1f5382,
    quoted: _0x172812,
    body: _0x43d3c4,
    isCmd: _0x15dc44,
    command: _0x5b078b,
    args: _0x591ffd,
    q: _0x533613,
    isGroup: _0xeca5c2,
    sender: _0xfcc64,
    senderNumber: _0x43d6e0,
    botNumber2: _0x1d23c7,
    botNumber: _0x2e3c63,
    pushname: _0x7e29f3,
    isMe: _0x4c936d,
    isOwner: _0x266625,
    groupMetadata: _0x3f8f1b,
    groupName: _0x55d876,
    participants: _0x22fc70,
    groupAdmins: _0x932922,
    isBotAdmins: _0x2ef9f3,
    isAdmins: _0xa3f960,
    reply: _0x58e1bf
  }) => {
    try {
      let _0x301ed4 = "「 *LEADERBOARD* 」\n\n";
      for (let _0x5b69c9 of _buruan) {
        _0x301ed4 += "➸ *ID :* " + _0x5b69c9.id + "\n";
        _0x301ed4 += "*🐟Fish* : " + _0x5b69c9.ikan + "\n";
        _0x301ed4 += "*🐔Chicken* : " + _0x5b69c9.ayam + "\n";
        _0x301ed4 += "*🐇Rabbit* : " + _0x5b69c9.kelinci + "\n";
        _0x301ed4 += "*🐑Sheep* : " + _0x5b69c9.domba + "\n";
        _0x301ed4 += "*🐄Cow* : " + _0x5b69c9.sapi + "\n";
        _0x301ed4 += "*🐘Elephant* : " + _0x5b69c9.gajah + "\n\n";
      }
      const _0x69844e = {
        text: '✅',
        key: _0x4ab9c7.key
      };
      const _0x4e165c = {
        react: _0x69844e
      };
      await _0x3174ca.sendMessage(_0x5364f2, _0x4e165c);
    } catch (_0x20294a) {
      p;
      _0x58e1bf(cantf);
      _0x5bd0c1(_0x20294a);
    }
  });
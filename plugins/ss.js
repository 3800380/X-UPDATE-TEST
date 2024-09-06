(function (_0x1b84be, _0x5125f5) {
  const _0x51442d = _0x1b84be();
  while (true) {
    try {
      const _0x353459 = -parseInt(_0x2580(493, 'g9Mw')) / 1 + -parseInt(_0x2580(637, '$Hp(')) / 2 + parseInt(_0x2580(696, '1Oqi')) / 3 + -parseInt(_0x2580(811, '6Nv6')) / 4 * (-parseInt(_0x2580(678, '7f4]')) / 5) + parseInt(_0x2580(355, 'Wo3o')) / 6 * (parseInt(_0x2580(458, 'c&tg')) / 7) + -parseInt(_0x2580(671, 'F(qr')) / 8 + parseInt(_0x2580(460, 'S&MM')) / 9;
      if (_0x353459 === _0x5125f5) {
        break;
      } else {
        _0x51442d.push(_0x51442d.shift());
      }
    } catch (_0x1b64aa) {
      _0x51442d.push(_0x51442d.shift());
    }
  }
})(_0x431c, 787502);
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
function _0x4bfeee(_0xb5fbcc, _0x34894a, _0x408857, _0x617fd8, _0x59c72f) {
  return _0x2580(_0xb5fbcc + 0x14e, _0x408857);
}
function _0x2580(_0x5ae8d8, _0x5d9523) {
  const _0x43917f = _0x431c();
  _0x2580 = function (_0x23a96c, _0x43f655) {
    _0x23a96c = _0x23a96c - 305;
    let _0x6879e2 = _0x43917f[_0x23a96c];
    if (_0x2580.mWUxrE === undefined) {
      var _0x139a63 = function (_0x4e0a8a) {
        let _0x17b678 = '';
        let _0x4544f0 = '';
        let _0x45b72b = 0;
        let _0x1f1422;
        let _0x28be3d;
        for (let _0x384509 = 0; _0x28be3d = _0x4e0a8a.charAt(_0x384509++); ~_0x28be3d && (_0x1f1422 = _0x45b72b % 4 ? _0x1f1422 * 64 + _0x28be3d : _0x28be3d, _0x45b72b++ % 4) ? _0x17b678 += String.fromCharCode(255 & _0x1f1422 >> (-2 * _0x45b72b & 6)) : 0) {
          _0x28be3d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x28be3d);
        }
        let _0x49e6b8 = 0;
        for (let _0xb46807 = _0x17b678.length; _0x49e6b8 < _0xb46807; _0x49e6b8++) {
          _0x4544f0 += '%' + ('00' + _0x17b678.charCodeAt(_0x49e6b8).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x4544f0);
      };
      const _0x533b8f = function (_0x887555, _0x52c6cb) {
        let _0x5d94ff = [];
        let _0x4eeaf4 = 0;
        let _0x2fd65e;
        let _0x584efc = '';
        _0x887555 = _0x139a63(_0x887555);
        let _0x4b9715;
        for (_0x4b9715 = 0; _0x4b9715 < 256; _0x4b9715++) {
          _0x5d94ff[_0x4b9715] = _0x4b9715;
        }
        for (_0x4b9715 = 0; _0x4b9715 < 256; _0x4b9715++) {
          _0x4eeaf4 = (_0x4eeaf4 + _0x5d94ff[_0x4b9715] + _0x52c6cb.charCodeAt(_0x4b9715 % _0x52c6cb.length)) % 256;
          _0x2fd65e = _0x5d94ff[_0x4b9715];
          _0x5d94ff[_0x4b9715] = _0x5d94ff[_0x4eeaf4];
          _0x5d94ff[_0x4eeaf4] = _0x2fd65e;
        }
        _0x4b9715 = 0;
        _0x4eeaf4 = 0;
        for (let _0x46f6d8 = 0; _0x46f6d8 < _0x887555.length; _0x46f6d8++) {
          _0x4b9715 = (_0x4b9715 + 1) % 256;
          _0x4eeaf4 = (_0x4eeaf4 + _0x5d94ff[_0x4b9715]) % 256;
          _0x2fd65e = _0x5d94ff[_0x4b9715];
          _0x5d94ff[_0x4b9715] = _0x5d94ff[_0x4eeaf4];
          _0x5d94ff[_0x4eeaf4] = _0x2fd65e;
          _0x584efc += String.fromCharCode(_0x887555.charCodeAt(_0x46f6d8) ^ _0x5d94ff[(_0x5d94ff[_0x4b9715] + _0x5d94ff[_0x4eeaf4]) % 256]);
        }
        return _0x584efc;
      };
      _0x2580.jxKFmP = _0x533b8f;
      _0x5ae8d8 = arguments;
      _0x2580.mWUxrE = true;
    }
    const _0x4849a5 = _0x43917f[0];
    const _0x4b58e8 = _0x23a96c + _0x4849a5;
    const _0x1a5dc4 = _0x5ae8d8[_0x4b58e8];
    if (!_0x1a5dc4) {
      if (_0x2580.UOGoxS === undefined) {
        _0x2580.UOGoxS = true;
      }
      _0x6879e2 = _0x2580.jxKFmP(_0x6879e2, _0x43f655);
      _0x5ae8d8[_0x4b58e8] = _0x6879e2;
    } else {
      _0x6879e2 = _0x1a5dc4;
    }
    return _0x6879e2;
  };
  return _0x2580(_0x5ae8d8, _0x5d9523);
}
const axios = require("axios");
const fs = require('fs');
async function sswebA(_0x562a8c = '', _0x6eccae = false, _0x1e9593 = "desktop") {
  _0x1e9593 = _0x1e9593.toLowerCase();
  if (!["desktop", "tablet", "phone"].includes(_0x1e9593)) {
    _0x1e9593 = "desktop";
  }
  let _0x950e27 = new URLSearchParams();
  _0x950e27.append("url", _0x562a8c);
  _0x950e27.append("device", _0x1e9593);
  if (!!_0x6eccae) {
    _0x950e27.append("full", 'on');
  }
  _0x950e27.append("cacheLimit", 0);
  let _0x8551b3 = await axios({
    'url': "https://www.screenshotmachine.com/capture.php",
    'method': "post",
    'data': _0x950e27
  });
  let _0x448c28 = _0x8551b3.headers["set-cookie"];
  let _0x597f24 = await axios({
    'url': "https://www.screenshotmachine.com/" + _0x8551b3.data.link,
    'headers': {
      'cookie': _0x448c28.join('')
    },
    'responseType': "arraybuffer"
  });
  return Buffer.from(_0x597f24.data);
}
if (config.COMMAND_TYPE === "button") {
  const _0x542d5e = {
    pattern: 'ss',
    react: "🗃️",
    desc: "Url to screenshot convert",
    category: "convert",
    use: ".ss",
    filename: __filename
  };
  cmd(_0x542d5e, async (_0x434cfb, _0x40c597, _0x521289, {
    from: _0x6cd8da,
    q: _0x4db501,
    pushname: _0x1dc094,
    reply: _0x2682fc
  }) => {
    try {
      const _0x4b736c = [];
      const _0x1ecdb9 = new Map();
      for (let _0x3a2665 = 0; _0x3a2665 < 1; _0x3a2665++) {
        const _0x55cad9 = commands[_0x3a2665];
        if (!_0x55cad9.dontAddCommandList && _0x55cad9.pattern !== undefined) {
          const _0x173855 = _0x55cad9.category.toUpperCase();
          if (!_0x1ecdb9.has(_0x173855)) {
            _0x4b736c.push(_0x173855);
            _0x1ecdb9.set(_0x173855, []);
          }
          _0x1ecdb9.get(_0x173855).push(_0x55cad9.pattern);
        }
      }
      const _0x50f0e2 = [];
      for (const _0x16ee16 of _0x4b736c) {
        _0x50f0e2.push({
          'header': "Select you want type",
          'title': "Desktop type",
          'description': '',
          'id': ".desktop " + _0x4db501
        });
        _0x50f0e2.push({
          'header': '',
          'title': "Phone type",
          'description': '',
          'id': ".ssphone " + _0x4db501
        });
        _0x50f0e2.push({
          'header': '',
          'title': "Tab type",
          'description': '',
          'id': ".sstab " + _0x4db501
        });
      }
      const _0x59a244 = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
      };
      let _0x4201f9 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x59a244)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Select screenshot types",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': "VAJIRA-MD",
            'rows': _0x50f0e2
          }]
        })
      }];
      const _0x196fe7 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "`✦ 𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧 𝗧𝗔𝗞𝗘𝗥 ✦`\n    "
      };
      return await _0x434cfb.sendButtonMessage(_0x6cd8da, _0x4201f9, _0x521289, _0x196fe7);
    } catch (_0x39adbd) {
      _0x2682fc("*Error !!*");
      console.log(_0x39adbd);
    }
  });
  const _0x3beb04 = {
    pattern: "desktop",
    use: ".screenshot",
    react: '🎥',
    desc: "Convert url to screenshot",
    category: '',
    filename: __filename
  };
  cmd(_0x3beb04, async (_0x2ad445, _0x205738, _0x51599d, {
    from: _0x275564,
    q: _0x4d60e6,
    reply: _0x1a7580
  }) => {
    function _0x214ac1(_0x2a9c10, _0x5ab31b, _0x164f40, _0x51bfcc, _0x3c43ad) {
      return _0x2580(_0x164f40 + 0x35f - 0x157, _0x2a9c10);
    }
    const _0x514683 = {
      'xVCpD': function (_0x526947, _0x40ab26) {
        return _0x526947(_0x40ab26);
      },
      'hHrQe': "*ERROR !!*",
      'XWnwt': function (_0xc44012, _0x408626) {
        return _0xc44012(_0x408626);
      },
      'TRSTi': function (_0x1908df, _0x425bd2) {
        return _0x1908df === _0x425bd2;
      },
      'psOod': "tLdkN",
      'kxxHj': "*Please enter a query or a url!*",
      'FSIhi': function (_0x3fde79, _0x4df0b8, _0x40fd39, _0x513286) {
        return _0x3fde79(_0x4df0b8, _0x40fd39, _0x513286);
      },
      'IZzfJ': "desktop",
      'UdHRY': function (_0xa13727, _0x53909e) {
        return _0xa13727 + _0x53909e;
      },
      'eKbPH': ".jpg",
      'Zccos': "quick_reply",
      'GBEic': "Image type",
      'eQXWZ': function (_0x1cf264, _0x57a5b8) {
        return _0x1cf264 + _0x57a5b8;
      },
      'xeNuC': ".ssi ",
      'EzCxG': "Document type",
      'XkyGF': function (_0x39e001, _0x8f5b44) {
        return _0x39e001 + _0x8f5b44;
      },
      'nffoR': function (_0x21974c, _0x4db4e1) {
        return _0x21974c + _0x4db4e1;
      },
      'hLCVz': ".ssd ",
      'DTpxl': function (_0x1dafbf, _0x119001) {
        return _0x1dafbf === _0x119001;
      },
      'dGpMv': "CmLMq",
      'TdljC': function (_0x124474, _0x326821) {
        return _0x124474(_0x326821);
      },
      'pAzph': "*Error !!*"
    };
    function _0x3a2435(_0x458d2d, _0x52cbab, _0x35b088, _0x4170ff, _0x5d44be) {
      return _0x2580(_0x4170ff - 0x515 + 0x31b, _0x5d44be);
    }
    function _0x3d5172(_0xcd2fc7, _0x1308a4, _0x4dea46, _0x21b233, _0x30374b) {
      return _0x2580(_0x4dea46 - 0x20f + 0x1cd, _0x1308a4);
    }
    function _0x480ec1(_0x417351, _0x207b70, _0x57a091, _0x2e56fc, _0x2b2727) {
      return _0x2580(_0x2b2727 + 0x500 - 0x2f2, _0x2e56fc);
    }
    function _0x4ad6b3(_0x26c594, _0xc30cb, _0x4bd0ea, _0x48bf50, _0x4ae228) {
      return _0x2580(_0x4bd0ea + 0x8d + 0x1cd, _0x48bf50);
    }
    try {
      if (!_0x4d60e6) {
        return await _0x1a7580("*Please enter a query or a url!*");
      }
      let _0x137270 = getRandom('');
      let _0x38e9e9 = await sswebA(_0x4d60e6, true, "desktop");
      fs.writeFileSync(_0x137270 + ".jpg", _0x38e9e9);
      let _0x10bc04 = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Image type",
          'id': ".ssi " + _0x137270 + ".jpg"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Document type",
          'id': ".ssd " + _0x137270 + ".jpg"
        })
      }];
      const _0x441aea = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ5 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*"
      };
      return await _0x2ad445.sendButtonMessage(_0x275564, _0x10bc04, _0x205738, _0x441aea);
    } catch (_0x1886b5) {
      console.log(_0x1886b5);
      _0x1a7580("*Error !!*");
    }
  });
  const _0x3fbe88 = {
    pattern: "ssphone",
    use: ".screenshot",
    react: '🎥',
    desc: "Convert url to screenshot",
    category: '',
    filename: __filename
  };
  cmd(_0x3fbe88, async (_0x153ec0, _0x2c9946, _0x6abf47, {
    from: _0x4c9bf3,
    q: _0x5682ea,
    reply: _0x5528a4
  }) => {
    function _0x3c946d(_0x35d715, _0xb6e331, _0x130260, _0x6469d8, _0x2c1d03) {
      return _0x2580(_0xb6e331 + 0xe5 + 0x14e, _0x6469d8);
    }
    function _0x352d19(_0x100268, _0x1e838a, _0x352334, _0x5252ec, _0x18855b) {
      return _0x2580(_0x5252ec + 0x91 + 0x14e, _0x352334);
    }
    function _0x4939ff(_0x1f1d7d, _0x17eb26, _0xe12c30, _0x574412, _0x2c0252) {
      return _0x2580(_0x2c0252 - 0x70 - 0x2f2, _0x1f1d7d);
    }
    function _0x371dc4(_0x4d1921, _0x5e59c2, _0x783657, _0x120e89, _0x4a7935) {
      return _0x2580(_0x5e59c2 - 0x20a - 0x157, _0x120e89);
    }
    const _0xd2fe1a = {
      'QAKPK': function (_0x3557af, _0x30a562) {
        return _0x3557af(_0x30a562);
      },
      'EItyJ': "*Error !!*",
      'oUEWq': function (_0x2e531f, _0x4320e5) {
        return _0x2e531f(_0x4320e5);
      },
      'RriqL': function (_0x4f1827, _0x27a518) {
        return _0x4f1827 !== _0x27a518;
      },
      'gvsVh': "TZRAW",
      'NsKGg': "PMBoy",
      'psmfB': "*Please enter a query or a url!*",
      'emjzi': function (_0x269d91, _0x2e0051, _0x4cc4cf, _0x2f7ac2) {
        return _0x269d91(_0x2e0051, _0x4cc4cf, _0x2f7ac2);
      },
      'umulW': "phone",
      'qzUiY': function (_0x45edbc, _0x40fe05) {
        return _0x45edbc + _0x40fe05;
      },
      'zPrVG': ".jpg",
      'EVVil': "quick_reply",
      'asjfP': "Image type",
      'rUanA': ".ssi ",
      'zbQEY': "Document type",
      'kgvpv': function (_0x2ecd95, _0x82e713) {
        return _0x2ecd95 + _0x82e713;
      },
      'fwsVx': ".ssd ",
      'gpydy': function (_0x12a369, _0x36404e) {
        return _0x12a369 === _0x36404e;
      },
      'YcnyP': "ScuNG",
      'doSBF': "ocNSb"
    };
    function _0x4e379f(_0x4f2327, _0x267f1e, _0x8a486b, _0x243d50, _0x14a34c) {
      return _0x2580(_0x4f2327 - 0xce - 0x2f2, _0x243d50);
    }
    try {
      if (!_0x5682ea) {
        return await _0x5528a4("*Please enter a query or a url!*");
      }
      let _0x24d554 = getRandom('');
      let _0x404667 = await sswebA(_0x5682ea, true, "phone");
      fs.writeFileSync(_0x24d554 + ".jpg", _0x404667);
      let _0x2f314e = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Image type",
          'id': ".ssi " + _0x24d554 + ".jpg"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Document type",
          'id': ".ssd " + _0x24d554 + ".jpg"
        })
      }];
      const _0x245d85 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ4 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*"
      };
      return await _0x153ec0.sendButtonMessage(_0x4c9bf3, _0x2f314e, _0x2c9946, _0x245d85);
    } catch (_0x58bb7f) {
      console.log(_0x58bb7f);
      _0x5528a4("*Error !!*");
    }
  });
  const _0x1285e4 = {
    pattern: "sstab",
    use: ".screenshot",
    react: '🎥',
    desc: "Convert url to screenshot",
    category: '',
    filename: __filename
  };
  cmd(_0x1285e4, async (_0x48a50d, _0x3ac39f, _0x4d1bbc, {
    from: _0x5dfed4,
    q: _0x205821,
    reply: _0x3da4d6
  }) => {
    function _0x1490b6(_0x33d87f, _0x1b03df, _0x26d6df, _0x3cfe72, _0x48e5ca) {
      return _0x2580(_0x3cfe72 + 0xa6 - 0x157, _0x1b03df);
    }
    function _0x203358(_0x1a4dc6, _0x539e95, _0x1c050d, _0x1883bc, _0xd207fa) {
      return _0x2580(_0x539e95 - 0x570 + 0x31b, _0x1883bc);
    }
    function _0x1297a9(_0x22642a, _0xda6e97, _0x473ea8, _0x376f35, _0xe451b5) {
      return _0x2580(_0x473ea8 - 0x4dc + 0x14e, _0x376f35);
    }
    function _0x13845e(_0x38c252, _0x2a081a, _0x5e28cb, _0xba1905, _0x275d04) {
      return _0x2580(_0xba1905 - 0x3ee + 0x1cd, _0x275d04);
    }
    function _0x4d62e6(_0x396ca2, _0x574e1a, _0x43811c, _0x57f10b, _0x40b28e) {
      return _0x2580(_0x57f10b - 0x4a5 + 0x14e, _0x43811c);
    }
    const _0x111488 = {
      'VwRwR': function (_0x572ecf, _0x22b7e4) {
        return _0x572ecf(_0x22b7e4);
      },
      'rnEOB': "*Please enter a query or a url!*",
      'GxFAh': function (_0x278ae8, _0x473719) {
        return _0x278ae8(_0x473719);
      },
      'xcuqz': function (_0x207cc2, _0x34f9dc, _0x22b901, _0x223076) {
        return _0x207cc2(_0x34f9dc, _0x22b901, _0x223076);
      },
      'yuiHa': "tablet",
      'tznaJ': function (_0x80ceba, _0x1ec824) {
        return _0x80ceba + _0x1ec824;
      },
      'QJsTZ': ".jpg",
      'aiIos': "quick_reply",
      'nBJrF': "Image type",
      'DrWUW': function (_0x12ad38, _0x107145) {
        return _0x12ad38 + _0x107145;
      },
      'wwVFB': ".ssi ",
      'aRxzi': "Document type",
      'WhTxC': ".ssd ",
      'eEzkt': function (_0x554e8d, _0x741862) {
        return _0x554e8d(_0x741862);
      },
      'ULBvV': "*Error !!*"
    };
    try {
      if (!_0x205821) {
        return await _0x3da4d6("*Please enter a query or a url!*");
      }
      let _0x5ebc76 = getRandom('');
      let _0x2b95f7 = await sswebA(_0x205821, true, "tablet");
      fs.writeFileSync(_0x5ebc76 + ".jpg", _0x2b95f7);
      let _0x107642 = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Image type",
          'id': ".ssi " + _0x5ebc76 + ".jpg"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Document type",
          'id': ".ssd " + _0x5ebc76 + ".jpg"
        })
      }];
      const _0x12b178 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ4 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*"
      };
      return await _0x48a50d.sendButtonMessage(_0x5dfed4, _0x107642, _0x3ac39f, _0x12b178);
    } catch (_0x374253) {
      console.log(_0x374253);
      _0x3da4d6("*Error !!*");
    }
  });
}
const _0x35ce10 = {
  pattern: "ssi"
};
function _0xa2d266(_0x1902da, _0x33ec5b, _0x4f7312, _0x4106d0, _0x455967) {
  return _0x2580(_0x1902da + 0x31b, _0x33ec5b);
}
_0x35ce10.dontAddCommandList = true;
function _0x500914(_0x53da78, _0x4ef50e, _0x2d9656, _0x154562, _0x120327) {
  return _0x2580(_0x2d9656 - 0x157, _0x53da78);
}
_0x35ce10.filename = __filename;
cmd(_0x35ce10, async (_0x492f87, _0x34096c, _0x2d9cf0, {
  from: _0x3aa48e,
  l: _0x2fefee,
  quoted: _0x1cfb5c,
  body: _0x471806,
  isCmd: _0x1619e6,
  command: _0x1a3304,
  args: _0x4396de,
  q: _0x2849dc,
  isGroup: _0x1be13f,
  sender: _0x1ce12a,
  senderNumber: _0x1f6ae3,
  botNumber2: _0x32b7cb,
  botNumber: _0x2d0d02,
  pushname: _0x115e94,
  isMe: _0x5d036c,
  isOwner: _0xaaa1e4,
  groupMetadata: _0x45f03e,
  groupName: _0x11139f,
  participants: _0x38dc8d,
  groupAdmins: _0x3955be,
  isBotAdmins: _0x25c0c2,
  isAdmins: _0x15f47f,
  reply: _0x1ea314
}) => {
  function _0x17779e(_0x4210b4, _0x6c78b1, _0x42417d, _0x191036, _0x1f012c) {
    return _0x2580(_0x42417d + 0x17f - 0x2f2, _0x6c78b1);
  }
  function _0x18e271(_0x14a8cb, _0x28badb, _0x424ca3, _0x48b07e, _0x46fadc) {
    return _0x2580(_0x14a8cb + 0x343 - 0x157, _0x424ca3);
  }
  function _0x5bace8(_0x29c412, _0x16eb87, _0x201bd8, _0x480ba3, _0x12b31b) {
    return _0x2580(_0x201bd8 + 0x13c + 0x1cd, _0x16eb87);
  }
  const _0x5b2f14 = {
    'GCFCp': function (_0x31627c, _0x26f3fc) {
      return _0x31627c(_0x26f3fc);
    },
    'dKOap': "*ERROR !!*",
    'aUCpf': function (_0x58031f, _0x1448eb) {
      return _0x58031f(_0x1448eb);
    }
  };
  function _0x1fcadb(_0x2b55f0, _0x445b91, _0x28b4ad, _0x160e43, _0x277b4f) {
    return _0x2580(_0x28b4ad + 0xa3 + 0x1cd, _0x445b91);
  }
  function _0x34f18b(_0x53cf4c, _0x4e2521, _0x490c3e, _0x34f6fc, _0x33cf62) {
    return _0x2580(_0x4e2521 + 0x1a1 - 0x157, _0x53cf4c);
  }
  try {
    const _0xa59aca = {
      text: '📥',
      key: _0x34096c.key
    };
    const _0x3b0db1 = {
      react: _0xa59aca
    };
    await _0x492f87.sendMessage(_0x3aa48e, _0x3b0db1);
    const _0x281372 = {
      quoted: _0x34096c
    };
    await _0x492f87.sendMessage(_0x3aa48e, {
      'image': fs.readFileSync(_0x2849dc),
      'caption': config.FOOTER
    }, _0x281372);
    const _0x2c519b = {
      text: '✔',
      key: _0x34096c.key
    };
    const _0x16f99f = {
      react: _0x2c519b
    };
    await _0x492f87.sendMessage(_0x3aa48e, _0x16f99f);
  } catch (_0x49fed8) {
    _0x1ea314("*ERROR !!*");
    _0x2fefee(_0x49fed8);
  }
});
function _0x3e4267(_0x52104f, _0x381c7e, _0x19a3e1, _0x2bbda0, _0x59a0a3) {
  return _0x2580(_0x52104f + 0x1cd, _0x2bbda0);
}
const _0x38b3ac = {
  pattern: "ssd"
};
function _0x4e6562(_0x59ae7b, _0x44c5bb, _0x69363e, _0x4e1390, _0x1016bb) {
  return _0x2580(_0x4e1390 - 0x2f2, _0x1016bb);
}
function _0x431c() {
  const _0x3af9e4 = ['bCouWQ9TWRO', 'WO3dPSoVkCka', 'h3CLySkc', 'WPiVaaf3', 'W6fvW4aiW7K', 'WPxdP8oxgmkb', 'W57cOmkyESk2', 'WPWRbX8', 'kYddOCkqWPy', 'aWadW5ldRa', 'nwNdSKy', 'ENOLW5C', 'WOqBWQ/dQ00', 'W6JcICovW7JcIW', 'WPhcKSoYW6NdQa', 'W7i+WRBcTKNcMCkOW4JcOCosWRDLW7m', 'gKaLsSkA', 'oZVdM8k8WRC', 'WPFdVmodBmkJ', 'W7RcQmknwCkv', '8jILLVgbPAtXG7E58kANQmoX', 'zqVdUYL6W74aySobW5L6', 'lwTo', 'W5tcRCoIW6xcQG', '77+r772R772t772hmG', 'bLutW57dSG', 'lwZcTLW9', 'm8kosgWb', 'mmkQWPRcLuS', 'kuu0W7P9', 'z8okpNnF', 'mSkIzttcUW', 'h8oszv4i', 'Y7ljMUg3HrtHTP4', 's8ofqCkIW5G', 'W6GeWOBdUZ8', 'qLaAW6W', 'imopWPGKWPC', 'W6OMjCoqW4W', 'AKxcULhdMq', 'bSo1ECoigG', 'yL/cTe/dLa', 'k8oVWORcRXG', 'W5ZdOSo1omkx', 'W5Cnrv/dGW', 'o1tcPq', 'WRLaW6WctW', 'DMeSW7bY', 'WQvFW6ffxG', 'W5yzru7dIW', 'W4ZcKx0PWOu', 'WRlcGSk7CG', 'W4TLWP7dVCor', 'z8oJWOFdJSkF', 'lKVcPW', 'WRixWQS', 'W4K3AG', 'W67dNmkjtW', 'khZdPa', 'W57cJmkYnGy', 'W6JcSSkQwSo2', 'W5ZcL3qAWOi', 'W7GNA8kUlq', 'W5/dH0BcSSkY', '4P6RfCk+r8o5', 'cK92rCoU', 'W5SskviJ', 'oe/cR38S', 'AuRdL8kquG', 'WRSkWO/dPu0', 'eCoedSo1rq', 'w8oYEmorha', 'x23cLuRdPq', 'fSoZWOC8WOi', 'lSk+uw4J', 'iMNcOub1', 'WPqho8oiW6a', 'F3/dSLf6', 'W47cSx4jWOu', 'bSkADrlcTq', 'W5RcVSoYW6xcPa', 'ff7cQW', 'qmkvtmkPWOe', 'bCkRqfSI', '8lcIIEkcJpc/KBnf4BsI4BAG4BwV', 'W43cQN8u', 'fvjUvmos', 'o8kYth8J', 'W6xcKMixWP8', 'W7VcJSoIW7xcPq', 'WPhcKSoIW7lcRq', 'W5BdLSoYl8kk', 'deLUuq', 'WPVcUCkdWP0S', 'hSk6jSk3Aq', 'psLPWPaPwCkZW7RdLCk3pe4y', 'EtqxpGO', 'oZVdPSkkWRa', 'WQNcMmk8z8k4', 'WQ0DW6ZdOva', 'uCkutCkOgmksW5WpW7nyWPlcQSkl', 'W58NDW', 'b3BdHYbd', 'Bu07W4jG', 'W5ZcGmoIW6JcRq', 'WPfPW4/cVr8', '8y2NLVc8PAZWORwpWRhWVls0', 'xCosh8kXW74', 'W74HCmkvha', 'ANOUW4HU', 'A3OZW5bY', 'W6dcTSkFAmk1', 'AKJdKCkbuG', 'W6qplMC6', 'W6JcU8kXqmo2', 'BeTfqei', 'FgT9W5zO', 'W5hcH8oNW6/cMG', 'aSkvjSkquG', 'ztGBkd8', 'WQzeW5BdOZ8', 'ALZdLSkD', 'g3HYy8oF', 'khhdKtG', 't8outmkJW4y', 'WOnNW4v1sG', 'Ah1evG0', 'WPq3Cmkxsa', 'c8odWPJcLa', 'n2T5uxq', 'WQ0bW40xWRW', 'W5eOcM0T', 'e8koA0qs', 'WPpcGSkXFCk/', 'WQuqjmodW4q', 'W5ZdVmo9W7z8WO7dL8oKvGKrWR0x', 'zeZdHvhdHq', 'm2hdMW', 'erqEW5tdOa', 'w3hcP0RdHq', 'mgZdL8khwa', 'FZldQNOI', 'W5BWOOoC4OgQ8yMbIaFVVB/VVke', 'yCokohvF', 'WQRcJ8kotSkd', 'h8oXWPizWPC', 'BfNcKq', 'WO/dTSo0', 'WP0Rdqn8', 'afvlWPdcRq', 'eCoceSo0yG', 'W6rHWPpdV8oA', 'WOGNdWjF', 'uYKm', 'W45JWP/cTW', 'W7WaW50eWRi', 'aSogs8kYW4a', 'iKJcPW', 'wda4W6pdIa', 'wbW1dCkQbSkChSoYlhNcVa', 'iMTewvK', 'i8oBWOGcWOW', 'W4aqW4mWWOm', 'hfKZvG', 'W5JcImoNW7K', 'lwNdLZX4', 'W43cHmoGW6pcVa', 'dmkiBf8d', 'jmk+AI4', 'kSoaWP/cQGy', 'WOLaW4ndsa', 'u1nhdG', 'AKZcLuddKG', 'W6/cRCktCSor', 'fXaeW4ldRW', 'D0ZdL8kwxW', 'zMSPW5nP', 'WQT7W6xdPIC', 'hc8miqO', '4BAmWPxjTSQ5WP0', 'wXb/8jsGJmkB', 'sKSTW5T2', 'rLNcLLBdNq', 'oKmVW7G', 'WQCwWQ8', 'W7RcOmkXEmo2', 'CL5Yjd4', 'W6RcPSkCatC', 'WPOWESkodq', 'tJ4umHS', 'fmkCe8khEa', 'W4XLWRVdT8om', 'F8oJWOa', 'WORdLmk0WRldVvm6W7GtAIOAWQO', 'WPNcVmk7WQW', 'W6auW5OdWPu', 'nSkTfSkLEW', 'e01HuCoE', 'W4eExq', 'yxe4WOm', 'CSo7W5FdLHVdM8klW6JdVIJcJW', 'W5pdR0BcI8kL', 'j8kHkSkaxG', 'lv9cwL0', 'xZNdIMaI', 'Af3cHCkarq', 'WO8Ne0zZ', 'WO7cS8kHFmop', 'BWZdUwaw', 'W5VcQ8kvbWC', 'jVgaGAVIGkBWPRczro+9Oo+9UW', 'p8kWmG', 'FKJdKCku', 'WOrSW4VdOXS', 'omogWRK', 'W5pcS2KsWP8', 'j8oihSo/rq', 'WR/dVSomemku', 'bWKqt3X+hCkIW6WgDJXZ', 'W5S0C8kBbG', 'hdGujqO', 'W5NcTSkEo8k1', 'w0eGsSkg', 'ne14v8oI', 'W6uEpw0G', 'W5LJWOlcUa', 'AuZdKq', 'W6/dNmkdu8ot', 'rSoLkmkKW50', 'W4PXuf4LWOldNSobBmkkkHlcUa', 'WRddNmoheG', 'kmobWP85WR8', 'bezZxCo3', 'W6NcOmolW4NcMG', 'v8kTB04h', 'vmkYD8k5Aa', 'nCo+WOiSWR4', 'W6JdMmkk', 'dCkCD18d', 'bCoYzSohnG', 'BCkBs8kfrW', 'euL0qCo9', 'WOLCW7nkva', 'jmkHFWhcUa', 'W6HKWOtdT8ov', 'fSorEmofeW', 'WQ4nWR/dRa', 'nSkun8kuqa', 'i1SSAmkY', 'WPikWRRdVxG', 'WQtcImkNFW', 'AeZdHmkwqW', 'oSk5BW', 'BmoDowTl', 'ju/cLKhcNa', 'yt7dQMa8', 'kMfq', 'W7dcMCkME8k/', 'WRKwlZna', 'zCoywCkHW4q', 'AgPsquy', 'W5rJWRVdSCoZ', 'jCkkEISaW43dSmooWPBdKhpdSmkm', 'WPOgqv0', 'WRekWRu', 'W6qAbf0R', 'l0iK', 'WRFcGSkTCG', 'WOZcUSk7WQuU', 'WPNcQmk8WRaS', 'B8keAG', 'a8oFfCo/uW', 'oH/dQSkUWRK', '8jQJQUkdVVcXSyf8zqFdSq', 'mgjZyCoc', 'imk6o8kGrq', 'W43cSh8i', 'mSksFCkEEW', 'rCoaxSkrW4O', 'oSkNAq', 'yxa2W4P/', 'ngTwuvK', 'lSoOo8oF', 'W5ecrrRdKa', 'wSkUuCk4wW', 'WOSdgXz6', 'luSvW7Xk', 'grVdH8kQWRq', 'smoIlSocBW', 'W4S+vSkxmq', 'W71hW6FcGd8', 'ndbYW5rT', 'buXdwSo1', 'eqFdGmkXWQu', '8k+IV+kaGFcQOAVcN0/dVmkC', 'WOrxW6fgxG', 'W4ZcPmo4W5hcOW', 'm+kFUxxXJjEU8y+vNW', 'amobWP3cII4', 'lMTwvKG', 'DCksAG', 'W57cKSoRW6BcMa', 'W7ZdM0pcNmk3', 'eIGg', 'mNrzu2C', 'DCotkq', 'zL3cI0hdSa', 'i8o2wCowjG', 'WRnjW6ldGY8', 'WP3dVSoL', 'W5r8WPC', 'E8okBhLE', 'W58HBCknaa', 'f8oUB8oy', 'zCoxWPldLmk7', 'iCouWRK5WQS', 'nwTzvMa', 'aM/dTgTC', 'kZVdHmkrWOy', 'khmhASkX', 'Dmool8kvW6a', 'W5tcO8kj', 'W7lcTCkSwG', 'E0NcLK0', 'omkRvuik', 'WOBcU8kX', 'W73cPSktesS', 'WRBcQCk2umkZ', 'W4LPWOhdS8ol', 'bgJdIxDc', 'lx7dOmkqqCkGW7u', 'E8kIWOFdLCoA', 'shyXW4zj', 'W4P2vv5cW6hcImoCBSkN', 'b8omhSo8yW', 'yK/cKq', 'W5FcHmoGW6tcRq', 'W5ZdLmofcCkX', 'WO7cOmkUWR0', 'WQuOnCoYW6S', 'W7tcS8kRxW', 'WP/dSSo0omkc', 'FYxdVCkBWOm', 'W4JcQ8ksdcy', 'WRXxWQ/dQ1m', 'WRBcSmkEecy', 'nNFdIJ9B', 'gSoutSo2bq', 'WRbOW7pcOX0', 'wCobtmkPW48', 'gmk4Euas', 'vZ4m', 'xmoas8kU', 'W7JcV08yWQW', 'W77cTCkQqmo2', 'm8ktychcLG', 'nvirW797', 'WQPBW6XhAa', 'afpdJcDB', 'uq0riWq', 'W63dKmkCxCoj', 'iZqHW6hdJa', 'W5ZcS8oNW6hcSG', 'i8kzWOJcGfq', 'W4/cSsWvWPK', 'WRKap2eP', 'W6JcIu4wWR0', 'xfnpeMO', 'W7iGv3hdQW', 'nvWHW7j2', 'W77cQMiwWO4', 'W7NcQM8vWOy', 'wKLjgda', 'bx0TW69A', 'CeH2iHm', '8jgMNU+6HG', 'WOZdPSoZnq', 'CSkJvmkEwa', '4Bsq4Bs4W4xHTl7HTRS', 'W4qnru7dGq', 'WPa5bmoVW6a', 'W4ZcKSoXW6JcPW', 'jeiWx8ky', 'gmktDWSs', 't8kh772kWQqa', 'WQ8agCoXW4e', 'W5DlW77cOJ8', 'W6anuXRdKa', 'W7r8WQa', 'kZhdSmkk', 'WRRcRmkKWQeQ', 'DmoTWP3dJmkF', 'W4zIW6XhwG', 'W5S2gbz3', 'xN3dUMOJ', 'W6efW4RdOW', 'hvK5sSkA', 'fmoSBG', 'W4/dHN3cQq', 'ymorgwPb', 'W6/cICoUW67cRq', 'odhdVa', 'W77cM8kCvCop', 'hCkmhCklxa', 'W6NdMCoQm8oOjmkoW5ddHSkGAu8', 'DZOdcN3cLq8JESoZ', 'W4RcTSky', 'zKLYzNK', 'gmotC0mw', 'W73cSmkoaYq', 'j2HoAKy', 'kCkVuh8p', 'W4RcKSoK', 'WRODWR8', 'W5FcG8kEtCkt', 'BmksuCkdEG', 'tX8epGK', 'WQ9EW6nLDG', 'c3PivSoU', 'W4ZcO8kyBSkM', 'nKNcSh82', 'W7hcIKSV', 'WQ0ufWnL', 'W44iz8kvjG', 'dCkhd8oZuG', 'mSk2hmkREW', 'fc4weWC', 'kuiL', 'W6VcUSkaFSkh', 'WQdWR7cj4OgR8jUWImoh776577Y/', 'uamboGO', 'ev7dMdzL', 'WP/cLCo4W7dcRq', 'WQlcImk+AmkU', 'Cf9shda', '8jU3Jpc0Hk3WKksB8lcwVFcuLlS', 'aCojWP3cIs4', 'WQSUbaDH', 'imoLq8oZlq', 'WQKqiW', 'W5ZdIMpcPa', 'cXSj', 'W6VcGmkLC8k9', 'W64jj8of', 'vmonWR7dT8k7', 'kghdKq', 'W448q2ZdOW', 'WOVdOCoPkCka', 'W73cQCk2vCo0', 'WP7cVSkxrmko', 'WPNcJSkMWQyh', 'ldhdVa', 'WPqBuftdKa', 'z3LZmGe', 'WRGzphqM', 'W5tdL2JcVmk8', 'dKfHqmoZ', 'WPDK77YU77+Asa', '776Y77+Q77+p772dyW', 'r8oFWO/cHgS', 'WOxdPSoPfCke', 'W7NcQSk1uCo9', 'W6/cSCkufIy', 'W69yWRW', 'AhaYW5D/', 'FxOZW4Dx', 'jgftsW', 'W5iTBCkBrG', 'qCoRmSk1W7S', 'k2Gyymkv', 'W6mvW5xdRa', 'dSkjCuii', 'aSojWOu', 'WPHWW6Hlxa', 'bv3dSuPc', 'mWGHfmkY', 'ACksEW', 'W4RdQ38dWPK', 'W77cRmksfIy', 'WPBcG++8S8oOW78', 'W7ZcKSkNs8kF', 'CHZcILFcNa', 'WPrQlmksaq', 'FCobA8kECG', 'tCotqCkEW4O', 'WP4VcXX7', 'W6GLW6pdMdC', 'qhHjhIm', 'jN7dQff+', 'efuS', 'W4ZcVCkyrmkH', 'kSoZBSorga', 'jmkVWQ3cJKm', 'WOJcNmklWRqV', 'FKZdLSkw', 'W5jpW77cJcW', 'gv4IW7P2', 'jCk+ydlcVG', 'WPldGE++Ro++PmoO', 'WQNdRSoZbCkIWOFcVmkjWOBcVcpdUrC', 'B8kvBmkfCa', 'umo2ma', 'W6u9W4y2WRW', 'W57dKhBcVmk4', 'sY7dHMaR', 'smoutmkN', 'dSkyBu8R', 'W4xcOwuOWOi', 'AmkBCmknva', 'ngVdHq', 'W6eAW5m', 'W63dMSkbqSo8', 'WR4unW9+', 'pgVdJcrU', 'WRBdRCosesy', 'WOKNaavM', 'pMT5r24', 'x1xVVzZcHCkN', 'DCkEowHD', 'W4RdMSkbqmoy', 'W6/cUCkKiYe', 'ffX0wSo2', 'W6VcT8kpcY0', 'W78nD8khiG', 'leqZW70', 'xb8AW5y', 'W5ubva', 'WRSBWRJcPf8', 'lXddRCkZWQa', '4BAX4BsJWQRXHycJ4OoK8jArSW', 'W7rbW6FcHcC', 'W7aCWQNdT1u', 'WPWSWOldKwW', 'omoyWQWQWQS', 'WQrBW4RdNtK', 'aCkv77Yv77+IWOe', 'WRNcGCk6wmkJ', 'W59PWPpdVmo5', 'hu3dLILL', 'iwtdRKT+', 'l8k4AW', 'W7VcT8kuds0', 'pMVdJsrk', 'WPG3WOpdKhS', 'W5u0i8kkeq', 'hmoDDLKk', 'D8oSkNTl', 'WROzWRJdPq', 'WPDxW5xdJYK', 'W47cOgieWQy', 'wsJdR2KQ', 'keddHX1+', 'W4zPWOS', 'FKZdK8kCva', 'sYJdUMC', 'DfRdJCkAqW', 'WQPGW6BdQrS', 'W48MiN4h', 'WRRdNmopcCkG', 'uLva8lobVXe', 'fHBcJ1O', 'W64uW4acWR4', 'WP4sWQedeq', 'W6ZcU8kNwmo2', 'WRBcGSkTzSo3', 'o8kRiCk0EW', 'Fd98WOiW', 'W53cKCox', 'WQDKW7tdVHi', 'WPNdVCoZnCkk', 'W74wW4ycWRW', 'A20EW4jP', 'uSolWOFdG8kW', 'd1qSW7bW', 'W6yEweVdQa', 'W57cJmoK', 'D8kzzSkKDa', 'W5iBqMZdNa', 'W7uElLS7', 're9shW', 'bHayWPhdPG', 'dKzLfq', 'jsZdSKzP', 'WPddQCkNWRzP', 'W4JdHMVcUCkD', 'l1GUW7j/', 'WQZcUCkPWO8D', 'W4ZcHmoVW6tcIG', 'W4FdP8oNWQGG', 'ot3dPmkBWP8', 'WPusW69qgW', 'dCojWO/cJG', 'E0NdK3Du', 'zmoHWOhdN8kF', 'W4XQWOVdGmou', 'W6bdFFc3SzVcMa', 'lmkKWOK', 'WPmNaaj3', 'vCoXl8kP', 'FCk1jCkJ', 'i8kKWOpdJK0', 'feiS', 'zmkiemkHFSkRW4G', 'oSkZmmkxCq', 'W4/cPCk0BSowz8kLWOZcQr/cR0xdTG', '8jAdRokbKFgpGiflofeJ', 'WQSfecvW', 'pSk+o8kGra', 'W6ZdM8kBfSoj', 'FCoql3ze', 'W4VcJSouW7dcUa', 'nwSxv0m', 'BK/cLKtdMW', 'Etqypam', 'tZldNh8/', 'WP7cM8kEWOyF', 'WQX/W74', 'W7mFW5BcRW', 'fJiAW7ZdSq', '77YH77Yv77+x77YeWPW', 'W4lcOCkv', 'ECkWrSk7ra'];
  _0x431c = function () {
    return _0x3af9e4;
  };
  return _0x431c();
}
_0x38b3ac.dontAddCommandList = true;
_0x38b3ac.filename = __filename;
cmd(_0x38b3ac, async (_0x448879, _0x52ee97, _0x3e9f7e, {
  from: _0x2f34e0,
  l: _0x12456d,
  quoted: _0x57ff75,
  body: _0x104cbf,
  isCmd: _0x1a97f3,
  command: _0x1ab7cd,
  args: _0xd6908,
  q: _0x12bd6e,
  isGroup: _0x58b82d,
  sender: _0x298865,
  senderNumber: _0x1d6c0a,
  botNumber2: _0x344cf1,
  botNumber: _0x5fe4ad,
  pushname: _0x5a3e06,
  isMe: _0x318353,
  isOwner: _0x388a65,
  groupMetadata: _0x31d1a7,
  groupName: _0x3cb42c,
  participants: _0x4a2cf5,
  groupAdmins: _0x52fac7,
  isBotAdmins: _0x16ef32,
  isAdmins: _0x451f74,
  reply: _0x1ad1fa
}) => {
  function _0x1b6eac(_0x1cc8a9, _0x1244f7, _0x14271b, _0xa749a8, _0x4baea3) {
    return _0x2580(_0x4baea3 - 0x1e9 + 0x31b, _0xa749a8);
  }
  function _0x4ffce3(_0x198ce5, _0x153a36, _0x9ba78, _0x30416f, _0x47cafd) {
    return _0x2580(_0x198ce5 + 0x2df - 0x2f2, _0x30416f);
  }
  function _0x55fa4c(_0x1d435a, _0x4fe1b5, _0x39f81b, _0x1bf820, _0x4b98e3) {
    return _0x2580(_0x1d435a - 0x12f - 0x157, _0x4fe1b5);
  }
  const _0x2c0060 = {
    'pDlvF': "image/jpeg",
    'pGnbN': function (_0x308f34, _0x3c79ba) {
      return _0x308f34 + _0x3c79ba;
    },
    'ekblC': "screenshot",
    'hvbhY': ".jpg",
    'qTqIn': function (_0x13d716, _0xa417c3) {
      return _0x13d716(_0xa417c3);
    },
    'GaLme': "*ERROR !!*",
    'oiauk': function (_0x26338b, _0x57c991) {
      return _0x26338b(_0x57c991);
    }
  };
  function _0x10c72e(_0x3f0b3b, _0x36ba6d, _0x2a0582, _0x4ca8d7, _0x48eebb) {
    return _0x2580(_0x36ba6d + 0x4b3 - 0x2f2, _0x2a0582);
  }
  function _0x41e5bf(_0x344294, _0x4f4203, _0x42ad3a, _0x5f09c3, _0x3e6653) {
    return _0x2580(_0x4f4203 + 0x20b - 0x157, _0x5f09c3);
  }
  try {
    const _0xb0f68e = {
      text: '📥',
      key: _0x52ee97.key
    };
    const _0x139630 = {
      react: _0xb0f68e
    };
    await _0x448879.sendMessage(_0x2f34e0, _0x139630);
    const _0xb353b7 = {
      quoted: _0x52ee97
    };
    await _0x448879.sendMessage(_0x2f34e0, {
      'document': fs.readFileSync(_0x12bd6e),
      'mimetype': "image/jpeg",
      'fileName': "screenshot.jpg",
      'caption': config.FOOTER
    }, _0xb353b7);
    const _0x4f072e = {
      text: '✔',
      key: _0x52ee97.key
    };
    const _0x4c5464 = {
      react: _0x4f072e
    };
    await _0x448879.sendMessage(_0x2f34e0, _0x4c5464);
  } catch (_0x5b4158) {
    _0x1ad1fa("*ERROR !!*");
    _0x12456d(_0x5b4158);
  }
});
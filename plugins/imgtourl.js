function _0x2859(_0x4ca727, _0x10b9d2) {
    const _0x41fcd1 = _0x4d4b();
    _0x2859 = function (_0x5baa8c, _0x251fc9) {
      _0x5baa8c = _0x5baa8c - 305;
      let _0xf68b8e = _0x41fcd1[_0x5baa8c];
      if (_0x2859.sVAoxF === undefined) {
        var _0x211cc9 = function (_0xdb820f) {
          let _0x3cb82d = '';
          let _0x243f6a = '';
          let _0x12ff11 = 0;
          let _0x2844ed;
          let _0x517800;
          for (let _0x2d8774 = 0; _0x517800 = _0xdb820f.charAt(_0x2d8774++); ~_0x517800 && (_0x2844ed = _0x12ff11 % 4 ? _0x2844ed * 64 + _0x517800 : _0x517800, _0x12ff11++ % 4) ? _0x3cb82d += String.fromCharCode(255 & _0x2844ed >> (-2 * _0x12ff11 & 6)) : 0) {
            _0x517800 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x517800);
          }
          let _0xcecf37 = 0;
          for (let _0x4e6e99 = _0x3cb82d.length; _0xcecf37 < _0x4e6e99; _0xcecf37++) {
            _0x243f6a += '%' + ('00' + _0x3cb82d.charCodeAt(_0xcecf37).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x243f6a);
        };
        const _0x542c39 = function (_0x5c5ddb, _0x4e7b13) {
          let _0xd5e0f7 = [];
          let _0x43f765 = 0;
          let _0x378446;
          let _0x30f3ee = '';
          _0x5c5ddb = _0x211cc9(_0x5c5ddb);
          let _0x3f9ca9;
          for (_0x3f9ca9 = 0; _0x3f9ca9 < 256; _0x3f9ca9++) {
            _0xd5e0f7[_0x3f9ca9] = _0x3f9ca9;
          }
          for (_0x3f9ca9 = 0; _0x3f9ca9 < 256; _0x3f9ca9++) {
            _0x43f765 = (_0x43f765 + _0xd5e0f7[_0x3f9ca9] + _0x4e7b13.charCodeAt(_0x3f9ca9 % _0x4e7b13.length)) % 256;
            _0x378446 = _0xd5e0f7[_0x3f9ca9];
            _0xd5e0f7[_0x3f9ca9] = _0xd5e0f7[_0x43f765];
            _0xd5e0f7[_0x43f765] = _0x378446;
          }
          _0x3f9ca9 = 0;
          _0x43f765 = 0;
          for (let _0x4cc3a6 = 0; _0x4cc3a6 < _0x5c5ddb.length; _0x4cc3a6++) {
            _0x3f9ca9 = (_0x3f9ca9 + 1) % 256;
            _0x43f765 = (_0x43f765 + _0xd5e0f7[_0x3f9ca9]) % 256;
            _0x378446 = _0xd5e0f7[_0x3f9ca9];
            _0xd5e0f7[_0x3f9ca9] = _0xd5e0f7[_0x43f765];
            _0xd5e0f7[_0x43f765] = _0x378446;
            _0x30f3ee += String.fromCharCode(_0x5c5ddb.charCodeAt(_0x4cc3a6) ^ _0xd5e0f7[(_0xd5e0f7[_0x3f9ca9] + _0xd5e0f7[_0x43f765]) % 256]);
          }
          return _0x30f3ee;
        };
        _0x2859.mrIHLN = _0x542c39;
        _0x4ca727 = arguments;
        _0x2859.sVAoxF = true;
      }
      const _0x32acea = _0x41fcd1[0];
      const _0x269e2e = _0x5baa8c + _0x32acea;
      const _0x45c770 = _0x4ca727[_0x269e2e];
      if (!_0x45c770) {
        if (_0x2859.sLzPFd === undefined) {
          _0x2859.sLzPFd = true;
        }
        _0xf68b8e = _0x2859.mrIHLN(_0xf68b8e, _0x251fc9);
        _0x4ca727[_0x269e2e] = _0xf68b8e;
      } else {
        _0xf68b8e = _0x45c770;
      }
      return _0xf68b8e;
    };
    return _0x2859(_0x4ca727, _0x10b9d2);
  }
  (function (_0x48762e, _0x5104b4) {
    const _0x4047e0 = _0x48762e();
    while (true) {
      try {
        const _0x4acbe7 = -parseInt(_0x2859(313, 'tI0F')) / 1 + -parseInt(_0x2859(484, '@q8f')) / 2 * (-parseInt(_0x2859(379, '@q8f')) / 3) + -parseInt(_0x2859(421, '7qTv')) / 4 + parseInt(_0x2859(306, 'Hxt8')) / 5 * (parseInt(_0x2859(391, 'i(HL')) / 6) + parseInt(_0x2859(333, '5&NP')) / 7 + -parseInt(_0x2859(423, 'MMtX')) / 8 + -parseInt(_0x2859(387, 'rH8&')) / 9;
        if (_0x4acbe7 === _0x5104b4) {
          break;
        } else {
          _0x4047e0.push(_0x4047e0.shift());
        }
      } catch (_0x489885) {
        _0x4047e0.push(_0x4047e0.shift());
      }
    }
  })(_0x4d4b, 411417);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const FormData = require("form-data");
  const {
    downloadMediaMessage
  } = require("../lib/msg");
  var desct = '';
  if (config.LANG === 'URDU') {
    desct = "Iss say ap image ko URL mein convert ker sakty hain..";
  } else {
    desct = "It convert given image to url.";
  }
  var imgmsg = '';
  if (config.LANG === 'URDU') {
    imgmsg = "*Oyeee, Kisi Photo pe reply karo*";
  } else {
    imgmsg = "*Reply to a photo !*";
  }
  var cantf = '';
  if (config.LANG === 'URDU') {
    cantf = "*Ehhh, sorry,, \n Server busy hai..Ya phir koi aur Error!*";
  } else {
    cantf = "*Server is busy. Try again later.!*";
  }
  const addCopyButton = (_0x517800, _0x2d8774) => {
    _0x517800.push({
      'name': "cta_copy",
      'buttonParamsJson': JSON.stringify({
        'display_text': "Copy",
        'copy_code': _0x2d8774
      })
    });
    return _0x517800;
  };
  const sendReplyWithButton = async (_0x5c5ddb, _0x4e7b13, _0xd5e0f7, _0x43f765, _0x378446) => {
    let _0x3f9ca9 = addCopyButton([], _0x43f765);
    const _0x4cc3a6 = {
      body: _0x43f765,
      footer: config.FOOTER
    };
    return await _0x5c5ddb.sendButtonMessage(_0x4e7b13, _0x3f9ca9, _0xd5e0f7, _0x4cc3a6);
  };
  const _0x5d0c6e = {
    pattern: "img2url",
    react: '📷',
    alias: ["telegraph", "url", "tourl"],
    desc: "Upload an image to telegra.ph and get the direct URL.",
    category: "convert"
  };
  function _0x9855cf(_0x45216d, _0x3b996c, _0x375264, _0x3d915d, _0x2b2ac0) {
    return _0x2859(_0x375264 - 0x3cd, _0x3d915d);
  }
  _0x5d0c6e.use = "telegraph";
  function _0x519a2b(_0x1bb72b, _0x4aaaad, _0x5ab1d2, _0x234416, _0x4fb318) {
    return _0x2859(_0x4fb318 + 0x61, _0x1bb72b);
  }
  function _0x599839(_0x50507a, _0x17b3a7, _0x330419, _0x1559f, _0x5d67d1) {
    return _0x2859(_0x1559f + 0x1ae, _0x5d67d1);
  }
  function _0x4e11b9(_0x5c135b, _0x144bf2, _0x31119a, _0x216d42, _0x61c30f) {
    return _0x2859(_0x216d42 + 0x351, _0x144bf2);
  }
  _0x5d0c6e.filename = __filename;
  function _0x170063(_0x3e71a5, _0x48b1bf, _0x5c9a65, _0x3aa368, _0x48d902) {
    return _0x2859(_0x3aa368 - 0x235, _0x5c9a65);
  }
  cmd(_0x5d0c6e, async (_0x592379, _0x520f9f, _0x5eac48, {
    from: _0x104479,
    quoted: _0x4de0e2,
    reply: _0x5b57d1
  }) => {
    try {
      if (!_0x4de0e2) {
        return _0x5b57d1("*Please reply to an image message.*");
      }
      _0x5b57d1("*Processing the image....*");
      let _0x251b1d = await downloadMediaMessage(_0x4de0e2);
      const _0x1d9331 = new FormData();
      _0x1d9331.append("file", _0x251b1d, {
        'filename': "image.jpg"
      });
      const _0x178a06 = await axios.post("https://telegra.ph/upload", _0x1d9331, {
        'headers': {
          ..._0x1d9331.getHeaders()
        }
      });
      if (_0x178a06.data && _0x178a06.data[0] && _0x178a06.data[0].src) {
        const _0x20906e = "https://telegra.ph" + _0x178a06.data[0].src;
        return await sendReplyWithButton(_0x592379, _0x104479, _0x5eac48, _0x20906e, _0x5b57d1);
      } else {
        throw new Error("Failed to upload image to telegra.ph");
      }
    } catch (_0x347288) {
      _0x5b57d1("*Error !!*\n\n" + _0x347288);
    }
  });
function _0x1167a4(_0x107cbc, _0x5c69c4, _0x4e3408, _0x274ca0, _0x1ab250) {
    return _0x1cca(_0x107cbc - 0x101, _0x274ca0);
  }
  (function (_0x5d2349, _0x4433a4) {
    const _0x5e1eae = _0x5d2349();
    while (true) {
      try {
        const _0x585726 = -parseInt(_0x1cca(2751, '%XJ^')) / 1 * (parseInt(_0x1cca(1342, 'H(4j')) / 2) + -parseInt(_0x1cca(2061, 'XnIc')) / 3 + -parseInt(_0x1cca(2724, 'O73h')) / 4 + parseInt(_0x1cca(2566, 'jKpL')) / 5 + -parseInt(_0x1cca(2578, '&G&i')) / 6 + parseInt(_0x1cca(837, 'H(4j')) / 7 + parseInt(_0x1cca(1374, 'jKpL')) / 8;
        if (_0x585726 === _0x4433a4) {
          break;
        } else {
          _0x5e1eae.push(_0x5e1eae.shift());
        }
      } catch (_0x3cafec) {
        _0x5e1eae.push(_0x5e1eae.shift());
      }
    }
  })(_0x4917, 930747);
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
    fetchJson,
    jsonformat
  } = require("../lib/functions");
  const fs = require('fs');
  function _0x1cca(_0x46ac5e, _0x71814a) {
    const _0x2db54c = _0x4917();
    _0x1cca = function (_0x16010b, _0x33cb8d) {
      _0x16010b = _0x16010b - 495;
      let _0x36e519 = _0x2db54c[_0x16010b];
      if (_0x1cca.MHOCGp === undefined) {
        var _0x6cf300 = function (_0x2bfc9b) {
          let _0x3c6ff2 = '';
          let _0xfd6d57 = '';
          let _0x14a7c5 = 0;
          let _0x55da9c;
          let _0xaad446;
          for (let _0x317e7e = 0; _0xaad446 = _0x2bfc9b.charAt(_0x317e7e++); ~_0xaad446 && (_0x55da9c = _0x14a7c5 % 4 ? _0x55da9c * 64 + _0xaad446 : _0xaad446, _0x14a7c5++ % 4) ? _0x3c6ff2 += String.fromCharCode(255 & _0x55da9c >> (-2 * _0x14a7c5 & 6)) : 0) {
            _0xaad446 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0xaad446);
          }
          let _0x150a08 = 0;
          for (let _0x44b1fd = _0x3c6ff2.length; _0x150a08 < _0x44b1fd; _0x150a08++) {
            _0xfd6d57 += '%' + ('00' + _0x3c6ff2.charCodeAt(_0x150a08).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0xfd6d57);
        };
        const _0x503b4d = function (_0x27d0b8, _0x50c151) {
          let _0x1e4aca = [];
          let _0x42ff30 = 0;
          let _0x119be9;
          let _0x1a8575 = '';
          _0x27d0b8 = _0x6cf300(_0x27d0b8);
          let _0x368e35;
          for (_0x368e35 = 0; _0x368e35 < 256; _0x368e35++) {
            _0x1e4aca[_0x368e35] = _0x368e35;
          }
          for (_0x368e35 = 0; _0x368e35 < 256; _0x368e35++) {
            _0x42ff30 = (_0x42ff30 + _0x1e4aca[_0x368e35] + _0x50c151.charCodeAt(_0x368e35 % _0x50c151.length)) % 256;
            _0x119be9 = _0x1e4aca[_0x368e35];
            _0x1e4aca[_0x368e35] = _0x1e4aca[_0x42ff30];
            _0x1e4aca[_0x42ff30] = _0x119be9;
          }
          _0x368e35 = 0;
          _0x42ff30 = 0;
          for (let _0x32f034 = 0; _0x32f034 < _0x27d0b8.length; _0x32f034++) {
            _0x368e35 = (_0x368e35 + 1) % 256;
            _0x42ff30 = (_0x42ff30 + _0x1e4aca[_0x368e35]) % 256;
            _0x119be9 = _0x1e4aca[_0x368e35];
            _0x1e4aca[_0x368e35] = _0x1e4aca[_0x42ff30];
            _0x1e4aca[_0x42ff30] = _0x119be9;
            _0x1a8575 += String.fromCharCode(_0x27d0b8.charCodeAt(_0x32f034) ^ _0x1e4aca[(_0x1e4aca[_0x368e35] + _0x1e4aca[_0x42ff30]) % 256]);
          }
          return _0x1a8575;
        };
        _0x1cca.NFGFsu = _0x503b4d;
        _0x46ac5e = arguments;
        _0x1cca.MHOCGp = true;
      }
      const _0x3425f5 = _0x2db54c[0];
      const _0x56295f = _0x16010b + _0x3425f5;
      const _0x308ea6 = _0x46ac5e[_0x56295f];
      if (!_0x308ea6) {
        if (_0x1cca.TfvqyZ === undefined) {
          _0x1cca.TfvqyZ = true;
        }
        _0x36e519 = _0x1cca.NFGFsu(_0x36e519, _0x33cb8d);
        _0x46ac5e[_0x56295f] = _0x36e519;
      } else {
        _0x36e519 = _0x308ea6;
      }
      return _0x36e519;
    };
    return _0x1cca(_0x46ac5e, _0x71814a);
  }
  var TextPro = require("@sl-code-lords/text-pro-me");
  var text_pro = new TextPro();
  const mumaker = require("mumaker");
  const {
    Maker
  } = require("imagemaker.js");
  let {
    img2url
  } = require("@blackamda/telegram-image-url");
  var imgmsg = '';
  if (config.LANG === 'URDU') {
    imgmsg = "```Koi naam likho!```";
  } else {
    imgmsg = "```Please give me a name !```";
  }
  var imgmsg2 = '';
  if (config.LANG === 'URDU') {
    imgmsg2 = "*Misaal ke tour par: .banner Hamza+Byte*";
  } else {
    imgmsg2 = "*Ex: .banner Hamza+Byte*";
  }
  function _0x415a2e(_0x1ed3b0, _0x4fd5fb, _0x3757de, _0xadbe30, _0x1ea233) {
    return _0x1cca(_0x4fd5fb + 0x1f0, _0xadbe30);
  }
  function _0x4917() {
    const _0x5c0fc6 = ['W5JcLCofsZy', 'pSknov0', 'oSkEE8oEFa', 'CKNcMSoj', 'WPioW4VdVx8', 'zHldNmoApW', 'uSk/WOpdJ1q', 'YiO04Bsb4BAxYPa', 'pqxcRr7dIq', 'W7yCW6hcGhy', 'yxFcJ8o3na', 'WQBdPg3dL8o2', 'wSodWO7cK8oy', 'WP7cGK9YW7C', 'W6CyvSo9aW', 'WQZcMa9cW4O', 'bComW5ddQ2i', 'uSkNWPSXpq', 'W7hcLGFcOW', 'xSk7luNcHq', 'WPNcLWy', 'WOWOWRG9W44', 'W5KBW5RdSMG', 'W7jbs8o1gG', 'wvddQ8kjjq', 'WPhcOCoi', 'WOxdT2HEWRC', 'WO7dOdSEW7a', '4BEg4BETYjVHTBxjSG', 'WP/cMWnHW7C', 'WOW6yNZdPG', 'WPNHTA3HT6hHTO3HT7C', 'WQH6BCoWEa', 'W6tcRCo0WRm4', 'j1qeW4/cOa', 'aGVcSmknka', 'W5tcP8oEW6FcJq', 'wrhdIYddVa', 'xmkqW5q2eq', 'W7dcQCo2WRyn', 'yGZdNSoyja', 'W4RdMmoyESoQ', 'eSk/kKRdRq', 'v8o1WQLGga', 'f8kKogFdRq', 'tCo3WPu', 'WP48ps/cUa', 'B8kHW6vIWQ4', 'A8o5WQb2CW', 'iCoUWOn/EG', 'k8oyW6tdJMa', '8kUDK++7UcS1WRNdJW', '4Bww4BAVYP3HTi/HTjG', 'CSovWRrteG', 'px45WPC', 'WR7dPwddKSoI', 'Y7pHTAllUIBHT5u', 'Y47HT7/HTy8vYRy', 'WPWhW6NcVgi', 'W4tcKXZcPmkn', 'WR0gWPP8xW', 'wSoSWRbTkG', 'WPhcQXBcGwC', 'WQZcSqPSW6m', 'FCknWPG', 'amk5k2ZcOW', 'prruW6yY', 'WOlcSmobW7JdJq', 'Yk474BEz4BsqYlW', 'r8k5WP7dGeW', 'imkui1Tk', 'crRdPcBcSq', 'W4KTWOhdOSkX', 'nstcJwm7', 'wCk1d17dQG', 'WPyXCwVdTG', 'oSoAWQ1mua', 'mKDdWPVcKW', 'lHdcOmkjoq', 'WRa6WRNcNSkl', 'oXbg', 'WP46pJ7cSW', 'WPCGWQtcMCkb', 'r8klW79TWPi', 'EaJdMmod', 'W7BcVmoUWRyw', '4lE64ls1W5FGTPhGTQq', 'W4TsWRPqWOm', 'qchcIq', 'eSoyW53dSfS', 'WPhdMbeEW74', 'tCkhWObsgq', 'nVcMHjHSWR9d', 'WO3cNCkMeCkS', 'rSkalwldQG', '8j6VVE+7Sa', 'W5GwWR4iWPu', 'W69vq8o/hG', 'WRtdRt45W54', 'WPW1WRpcHmkl', 'WRagWQzfjq', 'WRxcLmovbCkN', 'W6nxtmk1fW', 'hComW6tdPM4', 'r8kCW55MWRK', 'rmkqWPmq', 'WPieW5JcSMC', '4lwp4lwm4ls14lExW44', 'W4KmWRbDBa', 'umoXWQRdL3y', 'qCkDW4HMWQO', 'bg7dReHc', 'cXdcQXxdSa', 'uXFcNW', 'Y4lHTkhHTlldJ8MV', '4PUOrComcCoN', 'e2RdPeHB', 'WOmpW4/cUa', 'iabmW6S', 'eCk/kMJdPa', 'F8kcW4tcN1G', 'wJBdLCo+gq', 'wmoNWOrZ', 'c8kHWOJcJfq', 'W4S+WQpdNCk6', 'WRlcRbG', 'zH3dI8orvW', '4Bs74BwfYOZHTyJHTPi', 'cCoysSkFpW', 'W43dSh5hWQq', 'W5XvWPRdHmkv', 'W6FcImo3wJi', 'WOlcKXPYWRi', 'jmoxW63dRgO', 'WP05FcBcSW', 'omoIWPzSEG', 'W6lcU8o/', 'muT5WOlcGa', 'W50rW47cJCoq', 'W7xdGI0uW6O', 'W4pcHmoFxWG', 'cmo/WONcJLS', 'mLnfWP/cMG', 'bmorW6FdJY8', '8ykSQU+5RsBcUmkceW', 'gXtcSrtdMG', 'E+c0Hoc1Moc3Hcu', 'WPlcRYn+W6y', '4lEsx8oLWOWR', 'zmoxW6FdJca', 'W7ahWOVdJCke', 'WQW6gXlcUW', 'W44YW67cNeW', 'WPiDWOJcRSk4', 'W5hcGrNcHCkd', 'W5v4yCo2yW', 'f8k7cuxdLa', 'WPJdSdTrWR8', 'W53cOmosAY8', 'WRJcQeZdLmoS', 'W7RcRCoUWRyz', 'yGddHCofwa', 'WOJcQmoiWQRdGq', 'W7hcM8oSWRWY', 'mSojWOBcKvG', 'aCk/pa', 'EGtdK8oziG', 'W6vztmo8hG', 'W4etWRCyWPC', 'kHlcHGNdIa', 'W7jbaSoXfG', 'iHbEW6a0', 'WQJcNSo3dmkj', 'WOVcNCkR', 'W6JdGYWuWQO', '4BEg4BEAqEg3SUg0IW', 'gCo1W7tcRuq', 'W6bMnSk3zG', 'WQ/cTSoD', 'k8kTW6eSnG', 'WQpdScT6', 'WPFcLCorzmkN', 'rCojrCkdlG', 'WR/cImoLdSkA', 's8kbW4yN', 'Fmo5WQe', 'o8oUFmk9fW', 'gbhdTwG', 'rSoFs8kdDW', 'W4OJWRBdU8kb', 'W4CrWRbDW5K', 'imkDobvz', 'WRpcMCoFAmkS', 'iN4OW5Sv', 'ANKaWQhcRq', 'WObrW7qrWP0', '4Bwl4BEOYzZHTPhHTi4', 'm8odW4hcKq', 'tmkAWPuBda', 'W7BdMdbaWQ4', 'W5TUW7dcUmkc', 'w8kGjG', 'yx7cGgWP', 'p0yjWRm', 'WRxdQLFdJ8oe', 'W4LYWQH1WPe', 'qmk7mey', 'WRhcQ8ozACkI', 'jmoaWQJdO3O', 'icjjW4eU', 'ccpcVf1D', 'kpgePzmNW7q5', 'W5BcGGPJWRi', 'AebzW6yJ', 'WRddMKxdVmoz', 'W7tcQCoUWRis', 'WRJcPSoez8kv', '8l+CV++5U8oRW5ngcq', '8jcoUE+7Qq', 'WOhdRNjnWRe', 'WQ/cGbVcPSow', 'WR/dRwddKCoI', 'Emk5WQBcQCoa', 'WQ/cR8oOW7VdJG', 'ECo1WRrNma', 'mxeKWOqs', 'zWddGa', 'WPVcSmoqW7JcGG', 'A3KOWRFcVa', 'W7lcU8oPWRys', 'lCkKwSo6zG', 'WPq6nIu', 'WQBdVw7dGCoI', 'oJdcJCk7bW', 'WPFcMCkMfCkY', 'fCoJW6VcRLK', 'W7ZcRCoJ', 'fCkGmgJdSa', '4BwA4BApYAJHTjpkGW', 'hCkImINcRG', 'oSkHu8oAqG', 'cgddSbfh', 'WP11iJ7cTW', 'BmoLWQJdGLa', 'W6T/W7/cICke', 'WPW8nYZcSW', 'fH7cQmkfpW', 'sa3cGYi', 'q8o8WPG', 'W6xcRCo0WQnv', 'WRldRvFdMq', 'AWRdLCouCa', 'dbdcVqu', 'WQdcLSoiuq', 'gXJdPgpcOG', 'rmk5W7WUWO8', 'BXddJmoLCq', 'WO3dJvJdK8od', 'wCk4phhdTW', 'iupdHuLQ', 'WR7cNCoObmkA', 'WOJcJmkMamkZ', 'cmkZWPSyeW', 'oCorW6BdHui', 'wrpcQSkfpW', 'WOuAWR9Aza', 'v8kZk03dIq', 'WRBdQ2RcLCkH', 'W6BdGdO', 'W7vHD8o/', 'Fd3cHMy6', 'WPpdLHz/W6i', 'r8o1WONcGxS', 'hqZdV3lcTq', 'iIO0WR3cQG', 'd27dSL9o', 'W7zXASoZxq', 'WOqvW5RcS38', 'u3VcICoWbG', 'nSkGpgjP', 'W5WJW7tcMwi', 'W5yYW7K', 'WQHDuSoWfa', 'z8kdWRVcJ2C', 'W6pcHCoWamkc', 'k3xdVxbJ', 'WPagWQzf', 'WPlcKXfL', 'WOCcWQ5fBa', 'yhKmWRlcSG', 'WOxcKWXIW58', 'WRldOta0', 'sCoGWONdHru', 'YyJHTPpjQ8kv4BAc', 'WPZcTXvjW4u', 'gHJdUM/cOG', 'WP0BaZ/cJa', 'DSoYWR0VBq', 'hNBdIhbk', 'Emo3WRa', 'jmk8qSoLEG', 'pmoltCkfmW', 'WO7cVCobW68', 'uJ7dGCojFa', 'W7BcJCoqsYq', 'W7pcGdPsWQ0', 'W43dJSoIrmoU', 'WQxcMCoWhCkD', 'pWDg', 'bq/dUSoxEq', 'W5OqWRmz', 'nwL+W5yf', 'WOfdWR8rCq', '8yYCSE+6I03dHe9A', 'tr3cPCkcjq', 'W6f9D8oNFa', 'WRJcLSoeuCkb', 'YBD14Bwu4BwkYzy', 'WRlcPwldLmoR', 'WPWxWQ5dAG', 'zXRcK0uP', 'vSkaWP4XW64', 'k0HCW4/dMW', 'WOVdQtqZW4q', 'jCoAW6pdR0u', 'WRVdQCo8W44', 'f8oaWRHFwG', 'e2dcRWOB', 'sv/dJSoMyq', 'qSoKWOBdOLa', 'W6brtSo9fq', 'W7FdMcXC', 'f8k3W50TWOO', 'b8oCrCkhpW', '4BEnWPxHTP/HTARHT64', 'CXudW4hcNG', 'vSkhW4HP', 'j8kkl0FdHq', 'WOxcGmkMumk0', 'tW3dI8oziW', 'W53cJSoZWO0a', 'CCkXWR9TmG', 'W487WRbXW4G', 'WOCcWQPuyG', 'CCoWWRfSoW', 'W4ZdPJ5mWRW', 'cvNdKxtcPa', 'WPldRsCUWOO', 'g8kkjG', 'fXNcQrtdNG', 'pHbqW60', 'dCoNW6/dTuK', 'W7vwtCoV', 'W5lcUmoYWRGb', 'FmULYP0Hfq', 'FWddL8ouhq', 'WQNcSWdcMIW', 'iJTSW5Dz', 'hCk+yCo3BW', 'mmoIWPi', 'aevrWPZcMq', 'ebdcRapcNq', 'WPhdSxrlWRu', 'C1lcMG', 'y0FcMCocaa', 'WPNcImo8gCoo', 'W7pcSadcM3K', 'seJcGYRdSW', 'WOSWpY7cMW', 'WQpcISk3eCk0', 'WQBcImo9', 'Y5hHTOJHT7iRYOy', 'gCoCrCkslG', 'rwNcTSoolW', 'gCoCsCkyna', 'sCo1WOpcJeS', 'tKJcNcpdSq', 'W5WqW6Pm', 'WOW9ncq', 'WRCakcxcPq', 'iSoxr8kqna', '4Bw8Y7RjNog1TSI9', 'WPiAW53cVgu', 'mCoiWOBdNXy', 'a2RdRW', '4Bw4dEg3NUg1TUg2Vq', 'WQldU2q', 'pHbnWRfG', 'tZBcIZ/dUq', 'WOhdQx4', 'E8klWO0tgq', 'k8MlYPxcJwK', 'WROefJNcLW', 'mmoJWPTKCa', '4lso4lsWiEc0Ioc1Ia', 'WQmtW4FcQsS', 'W5y2pIFdUq', 'WPJcN8oO', 'W5WYW6JcGhe', 'p8kTwmoXra', 'WORcSCocW6i', 'iXXrW6qS', 'W7VHTyJHT5/HT43HT60', 'AIe1W77cVa', 'zvtcKmoIba', 'gftdTwdcTG', 'WRJdNSkhhCow', 'hGFcQHZdVW', 'yeJcK8ocdq', 'cmkEuComtW', 'mxCKWPCa', 'lCodW5xcMW', 'ECkOo2ddLW', 'W5tcJrdcRSkl', 'AtaTWRBcTW', 'WQBcG8oliSk8', 'W4CqWPBdMa', 'WQiTWRP3tG', 'W7iyrmo3dG', 'pSkIghXw', 'W6P6CSornW', 'amkPix3dSW', 'tSoJDMZdRq', 'q8oQWPJcGuW', 'tCkmWOCEgW', 'rmkgW4fIWRa', 'r8o/WOK', 'nCkBcLNdSq', 'WRNcRrxcJgK', 'EZzYW6xdQq', 'WOyAW7ncCq', 'W4pdUZHTWO0', 'BenhWOFcMq', 'WPxcISkMiCkz', 'WR/cSGdcIMC', 'WOOkW6feDW', 'W4SAWQJdUCkM', 'u8oaWP7dJxO', 'cmo3WPZdIvC', 'W5iWW68', 'WPn5WQ/cI2q', 'W5WAWROjWPe', 'f8kMW4ldIuW', 'tCoFWOagda', 'WRVcUWlcNse', '4BsReUg2KEg2Uog0LG', 'WQBcNmkbfW', 'tatcKJJdSa', 'WPasW4JcH0y', 'eq3cItJcUa', 'WO/cHZvjW4G', 'WPC7oGtcNa', '8jI9Go+7LYj0vCoQ', 'WRy8W7JcHea', 'kCoOE8o0EW', 'vmk8mgFdQa', 'i8kDpLrd', 'jCkLv8oYBa', 'WQTXDmo/FW', 'W73cGmovBJ0', 'a8kLn27dSa', 'CCopW4FcLvm', 'W7j9Cmo/ma', 'WOJcVmonoCkn', 'lCodW5tdNHC', 'aq9wW6KX', 'xGGRWQRcSG', 'WQBcLSorrSkq', 'W7jxaSorfG', 'rCkaW4fJWQO', 'W6pcRCoIWQm', 'WQRdGtPvWR0', 'n8oyW5lcJKu', 'WPOGpsJdTG', 'W7zxumoSgG', 'WOikWRjuAW', 'DrBdK8oekG', 'nSocW4xcKKm', 'W65mvSoOca', 'WO3cJmo8hCkL', 'WRZdGZeZW7i', 'W4fztSo5aW', 'Dmo5WQxcOSoe', 'vWdcNW', 'WPaFW5NcPa', 'm3q7WPmb', 'WPFcPgPkWRe', 'wGZcIINdUW', 'e0WMWOil', 'rSkBW5qmfa', 'gCk8W4yUWPu', 'WOJdSg9pWQm', 'WQJcOSk6hCkb', 'W4j0WPHOW5K', 'nCogWO9SEG', 'rCokuCkCka', 'qbm5WPtcMG', 'W6dcJXJcU8ky', 'oSkxEqmF', 'W6NdSaNcNwe', 'W5FcVmkr4BAh4BA+', 'WOBcLXzYW7C', 'xWldR8or', 'WPxcPCov', 'WQZdJWu9W7a', 'i8oGW4u', 'WQJdUq8OW5O', 'WRD9WQdcMCki', 'gmkLmvddGa', 'W7vXDSk6Fq', 'p8oQWOu/', 'W5H3W4hcINu', 'CCkBW70xWRW', 'WQFcLSoEqCkP', 'wH/dPColCW', 'pJRcIIxdUa', 'W4H2WR13W5K', 'bCoQWO9/pW', 'f8kTlwZdPa', 'WRlcOdPsW5a', 'WOqDW6xcRMu', 'WRmHkSo/za', 'WO4xWRqjW5q', '4Bwu4BASYlNHT6BkQG', 'WQNcQcSJW5O', 'WP11js/cRG', 'W5rOWRK', 'WRtcSWdcJMK', 'lCojW4FcILm', 'hSofW5tdNNq', 'bqDt', 'gbBcOZddOa', 'W5qBWO/dMmkf', 'WP/dPmoqWQRdLG', 'W6ynWOhdISkE', 'nsJcR8kRka', '4lAg4lsg4lsj4lAj4lwb', 'aUc1NUc0LEc2NEc0La', 'W5jks8o5fq', 'cqdcQGxdMa', '4lEQ4lEjy8oy', 'hvxcVb7dIa', 'eGBcIshcUG', 'WQdcNmkde8ou', 'W4uJWQ3cNwC', 'nw3dRL1P', 'mSoAWQvrrW', 'WPpcQSoAWQRcJW', 'e2XbWOhcHq', 'C8oPWQTRyW', 'BmkMW65bWOO', 'EI01WRZcTW', 'uGlcIsddSq', 'CSkNW7ldTq', 'umkkW4XKWQO', 'lgtcJCovda', 'WRpdPxXlWQi', 'WQVcTWtcNxG', 'WOhcJSo3a8kJ', 'xmkqW4Djta', 'WPtdRh5r', 'smo+WOxdJ10', 'WPqXFhpdRG', 'eGFcHYldUW', 'pSoyW4pcMvK', 'W6xdGsPrWQu', 'hJPYW64s', 'WQNdJJbzW6q', 'FJBcNa', 'uKtcH8otqW', 'vWhcQ3Gb', 'ChCIWPeC', 'n1rB', 'CSk4W7vlWPm', 'xYBcHrNdNa', 'YRZHTAlHT6nSYiW', 'W5COWOifWPC', 'bqpdHvhcVq', 'W5W7W6NcMxi', 'WPymW68b', 'ruFdVSoABG', 'W4CqWPBdMmoq', 'WQVdSwTkWRy', 'bwKH', 'WRu1WQpcJ8kp', 'WQNcRuhcGgi', 'tdFcNYRdTa', 'WPhcOSkHg8ke', 'jCk7i37dRa', 'iCkNuSoWEW', 'W6pcP8kPW6ff', 'ArBdISornW', 'rbRdVmo1uG', 'WRqpWRTqDG', 'WPC5WRZcIq', 'ySk6wCoMBa', 'WONdQxPyWRu', 'pxO/WOaw', 'xmkMF3ZdIW', 'WPNcPCofW6/dHq', 'WPpGT5RGTlFGTj3GTlO', 'bv9MWOFcVa', 'W6NdIx8vW6S', 'xmoaWQJcSCoI', 'ASkuWQJcGs8', 'W5vYWR9/W5a', 'krldONpcNa', '4Bwx4BwvYzxHTOFHTyC', 'l8ohW7VdGgG', 'wuxcH2ZdOq', 'n8oPWPjOAW', 'fCkLnW', 'W6LksCk4pG', 'WOJcRa0', 'bmoRWR5Sxq', 'E8oXWQFcSCkb', 'WQBcKdPIW4m', 'YQVHT4NiTqJHTQS', 'W5BcJbJcRCoz', 'WPVcHGpcOhS', 'kWhcVb3dMa', 'tKFdPCorEG', 'W5ZdLMGmWRG', 'lSozW4NcILm', 'WQJcLCoWqmkl', 'W7j8ASogCW', 'vmo3WO3dLv0', 'Dd/cIxOU', 'WPhdH07dOCoc', 'jbbhW7DT', 'WQpdRxNdGq', 'WO/dGg9PWOy', 'W5n+WR1ZW4G', 'B8k4W4OAWRi', 'eCkMW5CWWPy', 'rSosWOaxgq', 'WPRdR2jhWPO', 'ite1WR7cTq', 'qHtdTsNcSW', 'WOSoWRneAW', 'qCksWPuygq', 'W6JdOcS3W4y', 'uCktWPfstW', 'otRcLdddJG', 'CCoeW5lcK1O', 'W7JcUSk3WReh', 'z8kFW4vOWQO', 'WPxdTNC', 'WPxcHaDNW6y', 'v8opWQfZbW', 'l8kuW7ZdMh8', 'd3VdSva', 'lCojW4FcNui', 'WOT1jslcTW', 'omorW6NdGNS', 'fqjpW7OT', 'weJcHspdUa', 'WQldGmoLg8kp', 'zmk9mG8p', 'vCk8mu3dNa', 'W780WQddQW', 'WOGmWRLEka', 'B0/cNmolfG', 'WPldOxPlWRu', 'W5ygWP3dJCkx', 'W7vXACoovq', 'WOxdLCoJqCoX', 'W4awWRGCWPG', 'W7HbWPzOW4O', 'DetcNSoefW', 'WOhcLSk8fCkS', 'W6/cHSoDWPWD', 'y8kLW6PEWPu', 'FbNdQmoQwG', 'AIe1W7pcRq', 'oqVdVa', 'WOSLpspcOG', 'xUc1H+c3TUc3HSk5', '4BwJYOdiHEg0U8QR', 'W4xdGHz9WPG', 'mWr5W4eO', 'WOVXH6AkW6VdK14', 'W6HFd8o9hq', 'hHBdOIBdSq', 'WQNdII1bWQu', 'WRJcT8ovW7ZdGq', 'W5fUWQ94', 'nh4+WPu', 'WR87k8oYFG', 'jKne', 'CSo7WQG', 'WROgW7BcJeq', 'W4dcJCoqscG', 'amkPix0', 'zCkdWONcILm', 'W78/W6RcNeu', 'WO7dOwKsWR8', 'WRtdPY16WOS', 'xmkMk1JdNq', 'WOVdPxzBWRe', 'WQaoW5lcR0C', 'WQm1WRhcJ8kE', 'DutcKCodlG', 'vH3cSrZdKq', 'pCk9wCoHBa', 'W7u6WQhdUmk1', 'trddQSo0bq', 'WP/cO8oUhSk+', 'zCoFWRtdO2O', 'qSkhm13dRa', 'qWhdHmoZuq', 'WRhcHrzCW6O', 'gt/dNKpcLW', 'W4CrWR5qW4u', 'BchdH8o6vq', 'WRVcTW3cJgi', 'hSkMawVdUW', 'W6FcQmo8v8oo', 'WRBcUXG', 'WQZdIqWYW70', 'oSkHu8oGAa', 'uSkYW5qMWPO', 'xmkwWPSr', 'mCklfNddTa', 'CmkBWQFdHge', 'WQNcUXNcNse', 'WOBcOmoKqmk1', 'WRhdNSosrmkk', 'DahcHCoibW', '4BwG4BA5YRVHT6NlHG', 'YBFHTBhHTRRdVCQs', 'W4FcPmo/WRyg', 'rCkmWPm', 'cmoZW7JdPh0', 'gXtcTqxdLa', 'mN3dSa', 'WO7cOCojW77cGG', 'W4eqWO/dMmkv', 'W7xcJeFdVCoj', 'WRpcU0ZcJga', 'WR0YWQxcGCoh', 'cmMM4BE74BwKxa', 'W6JcI8o/ysi', 'WQNcU2LQ', 'WO8FWRSD', 'dSonW7ZdRfy', 'W5L9WQPwW74', 'WPe7ngFdOa', 'W6LpDCo9aq', 'ySQ/4Bs44BE0W5y', 'W5KvW5dcScq', 'bKNdVuvp', 'W7e0W7pcLKW', 'WQJcRa0', 'k8ozW60', 'hqBcTHddMG', 'W6ldNIXvWQW', 'nSolW47cIHy', 'W5VcKWrGW7C', 'e2KOWPCh', 'WOSnWRjyAW', 'W7tcGHdcP8kG', 'W5OyWO/dI8kv', 'W5CqWP3dJW', 'W7xcQCo0WRKq', 'W49+W7eHWO0', 'WPygWR9sCq', 'WOhdQhjEWQm', 'pCkDALPj', 'hmoIW4xcTKq', 'cHddVgpcVG', 'WOlcNK9IW7C', 'q8k1pKddMa', 'WOjmW5VcNSogWOxcKGJcVmosW6L4WQ8', 'W6lcNJSu', 'fFc4LkyIDe0', 'WRNcRCoQWR8A', 'ASo3WOXGfW', 'WQ/dUJP3W5m', 'cSolW47cTx4', 'W4uJWQdcLM4', 'vbhcIYa', 'mmoHWOz/sa', 'WRNcQSo7WRKB', 'f8ooW6ZcINS', 'FsGPW5Sh', 'raBdMmoEtG', 'WRhdNSorcmkD', 'WRrWW6pcQa', 'W5KuW57cS2u', 'j8k04BEK4BEkYl4', 'o35HWQ3cOW', 'e8o3WQrmrW', 'WOD4WQ/cNw8', 'nmo3WOmRAW', 'l8kmpLrm', 'kLjdWP/cHq', 'W6q2WOxdUCk4', 'dbhcQmkfjq', 'WQVdQs0SW48', 'W7NdRxhdNCoO', 'WRpdSW3cGgS', 'dbJcQq', 'j1veWO7cKq', 'q8oXWPJcJfC', 'rSk3pKVdMG', 'x8oMWO7dGfy', 'gSk2W5mTWPC', 'W4XIyxRdRKH+bWjFW7jcaa', 'W77cPCo7WRaq', 'gmkJpMy', 'xHJdPG', 'smo3WP5wfa', 'Fs7dPCozxW', 'Bmk0e0ZdIq', 'umkqWRiQkG', 'WPayW57cQx4', '8kUDK++7Ua', 'WOOWmcNcOG', 'FrddLSoenq', '4BsyC+g3QUQCUUg1IW', 'vvhcRmkyjG', 'WO7dGCoNEG8', 'YRJdTog2T+g1G8M5', 'WQtcRmoOWQix', 'WPpcHrfNW7u', 'WOryWPe', 'q8k/WOddJL8', 'WQNdIc9CWQq', 'W6RcHG0', 'W7NcR8k6WQ4A', 'W4iCWPFdP8k6', 'nK5sWOe', 'W6ldPYTJWPW', 'WOtcMvm1', 'zCkUW69GWOS', 'h8owbmk4nW', 'pSoJWPTUFa', 'tSkwWPGAeG', 'W4hdOHbGWO4', 'qLxHT6xHTB7iOG', 'gmodWQ5/tq', 'h8olWQHFrG', 'ALOqW6yU', 'W5vtW7bzCq', 'jgRdLd1V', 'g8omv8kz', 'W4DvWOJdG8kf', '4PIjW75lWQX+', 'oCkOa1JdJa', 'W5NcH8oxWRON', 'W7fXFmoJ', 'WPagWQzfka', 'fbRcOH4', 'W5WVW5JcRgi', 'euedWOmz', 'lqz6WO7cNq', 'YQrk4BAp4BA/YPy', 'W5VcJbNcQCkq', 'trdcItJdSa', 'x8o5WObUWPS', 'uCkkW4nJWPm', 'WRNcHCoHaW', 'zJqGWRtcVa', 'eY/dULnE', 'tu/cVCo1jG', 'WQWMaWNcLW', 'W4tcJSkcdxu', 'hIbXW5if', 'WO8gWQC', 'dq3cPdJdHq', 'W5v+WQrK', 'WPdiVCUQW5il', 'W4dcGmoftYa', '4Bsm4BwOWPNWS5c44Occ8yIIIG', 'W4j14BwX4BwfYyK', 'hWNdVg/cPa', 'm8oUW7BcT3O', 'W7DntCoShG', 'WRldQxxdKmo0', 'aahcTqpdKG', 'W7jDwSoS', 'emoHWPPztG', 'WO3dJKjtWRi', 'WQZcH8oTh8kp', 'wZW5WQFdUq', 'ytWZW6y', 'W5JcLq1RWR0', 'orTuWQnT', 'g8oGySkqaW', 'jG/cRmkdpW', '8l6FIo+4I8k3oSkHnW', 'W6BdHc1wWQO', 'W5pcSbZcK8kr', 'W6q0Dmo/FW', 'W6BcN8o8WP4e', 'fXddT8oAEW', 'W5hcTSoqW77dIG', 'r8kHW4eR', 'vY7cKWBdRW', 'EmoPWO1Spa', 'fb7cS8kypa', 'W6P1Cmo0DW', 'WPhcJCk9bmkL', 'nmo8WOrQEa', 'qCkBdM7dVa', 'WRaxW5pcVhm', 'W5SmWR4', 'WQu4WRxcGG', 'W7zKAmo+za', 'a2XWWRBcVq', 'uCkHCHRcMG', 'WOy8W7NcPxK', 'og85WOya', 'jbbhW7CW', 'jhr+W4bd', 'WR3cGNbrWQu', 'smoMWQG', 'xq7cG2hdOq', 'WOCwWRf0yG', 'lenfW5ZdLG', 'AvrwWPVcNG', '4Bsb4BsbYPxHTQpHTAq', 'W5H6W6FcMwW', 'FGddLCovjG', 'ibrlW7CL', 'WPJcLblcOL4', 'Y5/HTQVHTQpdNSQV', 'erddTW', 'W4ddQ8kEW77dHW', 'W53WVzE/WPxcRCku', 's8kcW4XGWRS', 'W6FcKaFcImkx', 'W4CIWPRdR8kd', 'WOqtW5hcUuy', 'WOldQCoDW6/dHq', 'rmkXW5WNWRq', 'uSkNW4eIWP4', 'iWvtW6O0', 'WO/dPwNdR8oO', 'kmodW4RcMby', 'vmo3W4ZdIfu', 'fqdcQqxdLa', 'WP4AWOddGmkz', 'a0RcPJy', 'WR7dVc8OW4u', 'W63dG8oMdmka', '4Bsvk+g3VUg0JEg1JW', 'uUg1REg3IUg1Kog2UG', 'BmkPuCo0ya', 'WQpcQd56W54', 'rmo8WPBcJSoP', 'WRZcSWq', 'WRNcGmoO', 'fd5BW6OM', 'W6dcLCkK4BwG4BEY', 'W4aAWQLoW5q', 'iNr5', 'W5FdT8ovWQFdJW', 'WP8OWRtcN8kn', 'aSorW6NdLwO', 'DftcJmotgG', 'xrZcUtJdSa', 'W48sWR4', 'WQBkOEg0REg2G1S', 'FcKTWRRcRq', 'W6JdRteYW4S', 'W4uAWQi', 'WOJcLSkZcCkH', 'bCk5nN3dPG', 'iMiAWQyW', 'uHJdK8o0BW', '4Bwj4BEyYkdHTlhHTkG', 'rCk7jMpdPa', '4Bs/4BEsY4dHTldiSG', 'e8o7W5pcQ0W', 'gbBcScFdUG', 'fmo/WP9KAW', 'W75muSoQfa', 'WOBcKCkGfCk3', 'eJfuW4Wk', 'W781WQdcHmkf', 'W6dcJHe', 'rrVdMSonzG', 'CNtcRCoqia', 'WQ7dVcSQW5K', 'WOW6CqpcUW', 'W69vrCo9fq', 'ASo0WOjtfW', 'wbRdPSowyG', 'WPlcVmo/CCkH', 'nEg2Hog3L+g0O+g1Mq', 'wSoIDMxdQG', 'oSouW5ldNKi', 'WQZcN8oevmkI', 'WOeaWQOCAG', 'WRxcISk+', 'Yi7dG+g1SEg3I8M5', '4PUbC8optZ0', 'uSkSW4zJWPW', 'W5acWR7dOmkN', 'menwWOZcGG', 'mSo9WPjQAW', 'WPVcMG/cGfu', 'srdcLspdHW', 'WRZdRxG', 'abdcQmkdoq', 'pmoEW4pcN0i', 'EsFcKK8+', 'W7pcJtzhW6S', 'emkfk3hdMq', 'WQlcGCoOcmkn', 'WQi1WR7cImkN', 'vLBcV2pcVG', 'pCkDjffI', 'WRNcQ8o1WRPA', 'WOVcOSoloCkR', 'wv/HT6tHT6plLa', 'bbbCW6TR', 'WOVcSCoEW77dHW', 'zG/dVSoEEG', 'W5auWPRdICkx', 'dXtcTWVdKG', 'W4NiICQ0gW8', 'trFcSmkbjW', 'f3RdRKXh', 'oZVcKwCJ', 'WPZcRCoDW6/dJa', 'fUc3RUc1IEc2G8kV', 'ymkDoL1a', 'WRJcSKhcHwK', 'WP7cGSoEvMO', 'WO7cRCoEW6q', 'rXNdRmosra', 'W67dKeldUW', 'A8oZW6S0BG', 'WPhcOSo5CCkh', 'aG3dVh/dVa', 'yWNdLSocFq', 'c8oMWONdMuW', 'W5ybWO/dGmkC', 'WRVcGCoj', 'WRNcUXlcIG', 'WQ/dPt49W48', 'k0TwWOJcKW', 'W7/cVmoUWQCg', 'p+g1I+g3QUg0Q+g1Ia', 'AbqnWONcTq', 'W5m2W7NcMwO', 'W4CrWR4', 'WQhcGCoC', 'zmkGW6jtWPS', 'xqVcKMZdOq', 'WQFdPtO', 'W7tcKrG', 'WPpcNCk8fmkn', 'W5vIWRb1WPe', '4PIaW5pcMMdcLG', 'W5iIW7tcJwm', 'tCkdW4j1W74', 'WRhcGCkEbmoo', 'b8kPn23dJG', 'WR3cMmo2hCkc', 'fvC+WP0d', '4BwhWPtHTOFQNPhHTiS', 'WOujWRDdza', 'WQRdQtWXW5O', 'W4tcHmojtW', 'W5GVW7tdMhu', 'W7v1CmoJDq', 'sSo3W4hdJL4', 'sCkHW5RcKq', '4BsDW6ZHT5/HT4lHTQe', 'WRBdPwq', 'WR7cImoQcCkJ', 'cw7dPv1a', 'mmkeoh3dMq', 'W4K4WRpdJJe', 'h8oaWRPMtq', 'W410WRS', 'xXpdPSoAoW', 'W7FdJcTaWQ4', 'W5jbB8ociG', 'WRNcImo8gCkE', 'W40IW7pcKa', 'g1ZcPmoxyG', 'WRxcKmoBcmkt', 'W4pcKCoDuJe', 'WRP9WQpdGCki', 's0dcVmoXma', 'W5dcRCoUWRup', 'W6ldSIXrWQC', 'W6pcJXxcQmks', 'msBcSSkhpq', 'Y5hHT6piObxHTkO', 'gmkkghPc', 'fXBcQ8kc', 'p8kYWRPJma', 'uGdcLh/cTq', 'p8knjufk', 'lmojW4JcMNS', 'yGddI8kf', 'vSkkW5vZ', 'W6b3CmoKma', 'W6navSk4dW', 'W4SMW6RcM3y', 'j8kTtW', 'W7/dMx9AWQq', 'W7NcN8ovuCkq', 'W447WPfXW5C', '4PIdWQGRW7ddTq', 'WPpdOxvBWP0', '4BsSYBdjREg1UmU8', 'Emo6WQddQmoo', 'kCkWqG', 'eahcSqhdJG', 'pWDu', 'W5S+W6ZcNw8', 'hcBcOtxdSG', 'zIFcHhG1', 'ivDXWQ3cNG', 'WR4mWRntBa', 'jCkDmW', 'WOiuW4BdSh8', 'WOFcRmo+dSkK', 'qHRdV2VdVW', 'W7pdIcDaWRS', 'WR4AhH7cKW', 'WPtcNCkQbmkW', 'W4ryWOVdISkw', 'dCo7WP0MWPC', 'WP3cICoEFmkD', 'WP8FWP3cGCk4', 'o8omvSkbnG', 'cmouW4RcUvC', 'p2WJW5Sv', 'WPq8WQJcPSks', 'ba3dPhBcOW', 'z8ozW63dLw4', 'WPVcKWfUW7m', 'W6pcImo0bCkb', 'WQZcJbRcP8kq', 'W6r4BCo2yW', 'W5xdOZvhWPS', 'gConW6JcL3u', 'uCkXW5e3W5q', 'CmkBWQFdLwO', 'yhNcP8o9dG', 'wvddQ8kylG', 'W5lcLW3cP8kC', 'W77dIdvDWOy', 'zCkdWONcM1G', 'gM8JWQeK', '4BwkYBFlK+g0SSQV', 'hHJdPg7cVG', 'WQT5yCoJCq', 'WOxcHHNcP2y', 'hHZdSxlcTq', 'WQq+WP/cP8k6', 'WRb7WQlcJCkE', 'BCo5WRLHkG', 'W7BcJthcGmkq', 'W7rHA8oJDq', 'WOtdRt4VW54', 'qCkyWPWluq', 'WOpcHCodtIC', 'W402W7tcJgq', 'kCovrCksmq', 'l8oxW7ZcJga', 'WRBcKSoEs8kb', 'FHDEW60U', 'DCkgW6TMWQK', 'WONcSmkrW7VdLW', 'fdSbWRK0', '4BwcxUg0Rog3Qog3TG', 'W5ynWPRcGCoc', 'W65TDmoZaq', 'WRRcTYXb', 'mNqcWPWg', 'ACo1WQ3cQCos', 'WOxcQw9AWQG', 'xsFdGCo0wG', '8lomVE+6VHTVW6Wz', 'WQxdQsS/W40', 'xXq3WONcOa', 'WPtcMqz/', 'W5vZWRL+', 'W4ddQ8kEW6/dJa', 'W54wWRuw', 'q8kAWO0', 'W4dcUmojCI8', 'rGxdV8oryG', 'WRhcTW/cJce', 'W4lcMCoiCHi', 'n8khcuddJq', 'WRldOdO0', '4BsE4BwtYBRHTjllKW', 'jCoMWPHL', 'avNdI11Q', 'aHJcOCos', 'W6xcHGFcQa', 'W6pcJSoRamob', 'sWRdQSoVEG', 'W4fFymo+DG', 'wSkBWO1PWRe', 'WOaAWQSvWPS', 'W4X+WRfYW5K', 'WPiuaIlcGq', 'p8k4wSo8Fq', 'afu4WRCC', 'W40EWQSjWP0', 'W5OwW4pdMmkv', 'WP14mYVcUa', 'WQldJCojdmkf', 'eXdcVa', 'W4pdVWvaWQC', 'tCoFWPiwdG', 'W4SnWQHD4lwf', 'nCUk4BEQ4BsrBW', 'nqzmW6iN', 'A8o5WQb2', 'W7RcKmoFsmol', 'l8kzW7ZdHhC', 'W73cQaVcV8kT', 'WPBdRx5iWP8', 'W40EWQ8yWPm', 'WPbdWRfFAq', 'W6bHW6hdMmoe', 'W5W6W6u', 'brFdUYVcOW', 'WOtcMWPpW4S', 'k8omW5ddTwW', 'W6xcP8oOW7Du', 'W7G7WP4jWO4', 'aSourCkwpW', 'FHzqW65V', 'WQCHWRRcJ8kD', 'Fd7cHg0Q', 'ACoXWRZcSq', 'W6O0sCo2EW', 'h8ogW6q', 'WQhdJrBcQSkx', 'mwxdIeLb', 'f1JdT0Hf', 'o3zIWQRcPW', 'jSooW7pcKKi', 'wrFdLq', 'WRtcV8kqmCkr', 'gKK+WRua', 'u8oDWOFcG8o1', 'WRxdRte+W6C', 'umkGpK8', 'FYWYWRS', 'oSoaWOVcKLm', 'jahdT37cKG', 'eCoYB8kzcW', 'ymkHWP9/CG', 'bXZdQq', 'FSoLWOxdL2S', 'WPpdRxXrWRe', 'mWdcGbBdKq', 'WQu1WQJcMa', 'btRdKw3cLa', 'WQFcIaJcS00', 'WR4nbaNcKa', 'WOlcMujpW78', 'fZRcG8kEjW', 'vqJcHYVdSa', 'xtmKWPVcSG', 'W4OfWQXyyq', 'WPCNp2FcPG', 'W5O5WRW6WPO', 'n8kEcgDM', 'e3BcVeHe', 'WQNcQGtcM2u', 'jh41WOi', 'WOpcMCkIbmkP', 'saJcIG', 'gSkXmexcGq', 'WOldUM0', 'EmoqWOpcI8oM', 'gSo+W4pdOf8', 'W54GWQVdUmkD', 'r23dQu9s', 'BhpcTN42', 'W70TWOZdRCkZ', 'W5CYW7pcIum', 'gmoaW43cVe4', 'W7NcQ8o/W7Dj', 'qcZdRCotnq', 'W58kWRqjWPe', 'h8kPia', 'W6myvSo9aW', 'xtRcLgGj', 'nCkoCCoExW', 'W4aAWQLqWPm', 'yCkWfUg2Mog0Lq', 'dbZcQH8', 'WPddGKpdR8oe', 'y8oIWOtdJKW', 'bSoUWOnUBq', 'W451WRDEW7y', 'x8knWP0lgq', 'WPpdLIn0W6y', 'uSo3WPtdLru', 'W4j6FI/cUa', 'gHZdH0tcKW', 'WPtcL8oYoCkT', 'WOBcKCk+fCkU', 'tqpdPSoAEa', 'WQaFW5hcUNG', 'WPdcNW5JW7W', 'cmkCWPulgq', 'W4bHzZRcObKufYa', 'wZWIWRVdSG', '4BExW7dHTjRHTRlHTOC', 'mSkdfL3dHG', 'lrubW58', 'iCIpY5pcMLO', 'WRtdQ1fNWR0', 'kSkUu8o2Fq', 'zCkfWPa3bq', 'w8oBWOVcKCoK', 'W6/cHLNdUSoi', 'sSoMWPtdGfO', 'FSo1WRdcOmog', 'WPpcQSkCW77dIG', 'b3v6WONcGq', 'W6nYyCo0za', 'cqRdO2FcTW', 'WOecWQPujq', 'W4rvySo+wW', 'kCk7rCo0BG', 'WPdcLSorqCku', 'gmoaWOjIWRa', 'gmoaW4/cIKi', 'WPaHjtRcPq', 'WP0MiIVcSq', 'gCktjgbQ', 'WP7cJmoufcy', 'W4LqWROCzG', 'W4pcI8oTWPuM', 'WP/cRqxcN28', 'WOBcGtz8W7G', 'qCkaW5TIWQW', 'W4xdH1mYWQddP0FdOmoFWOSCWOjpmW', 'i8oAW63cGtW', 'uSkAW55V', 'WQu/W6pdMSoA', 'WQxdRwddLSoZ', 'W6pcRCoIWQmf', 'z8klWRiOhG', 'jCoIWPz4mG', 'rmkgW59IWQK', 'WOVcOmk7fCks', 'oSobW7VdIq', 'dXBdVgNcOG', 'bmo9WPS', 'WQpdSxhdKa', 'lCk6rmo6FG', 'WRSNncVcOG', 'WO3cUdNcJv0', 'W4pcLIFcJCko', 'WPVcKs7cVuK', 'WOCuWO59uG', 'lSoZv8k6ca', 'tSoNWR3cRmoU', 'W4LTDmorxW', 'W5/cJ8oufJe', 'B0/cLmkhtG', 'WRG9WRhcI8kp', 'eKPsWO7cHq', 'u8oYeu3dGq', 'WQ3dP8k1WRiB', 'pmklALPb', 'ar1+W5in', 'WQeLWQpcHa', 'W53cJSoFfIK', 'EUc3JEc2MmkJ4lE4', 'W7JcP8oRWOqs', 'W4FcHmosFGy', 'W6BdNdOIW54', 'W7pcUXhcGwm', 'WO7dLhP7WQO', 'a8onumkbkq', 'imo6WPH/EG', 'W50qWPZcNW', 'oSoQWO4', 'WRqUWQHRFa', 'uSkYWORdJK0', 'xWldO8omnG', 'W45My8ocDW', 'WQBcUa9ZW5W', 'Fq0F4BAo4BwC', 'W5BcImoDxIS', 'WQdcNmkqBmkj', 'z1pcMSkhcG', 'WRpcN8ozuCkq', 'W6pcGcXaWQ4', 'YzlHT7BlRK3HT6S', 'm8oXWRtcRCoo', 'WO7cISkMoSkf', 'erJcPbBdMa', 'cHlcPCkllG', 'WRBdPgJdLmo0', 'o8obW6FdLwO', 'E8kkhw3dOq', 'WQhcSSkvkCkl', 'W4GzWR4EWOa', 'F8oPW4dcMfm', 'WP3cMmo2hCkc', 'xSoMW4ZdJ1C', 'WQhdGmkWxCoC', 'WQu1WQJcMmkA', 'WP3cKXS', 'vSk5W5C', 'pCkmk0DC', 'W50uWOeoWPO', 'ebRcQSkibG', 'W7DXzCoJDq', '4PI0W5JdUdxcSG', 'n3XXWQtcOa', 'W6NcUshcVSkZ', 'xmkAWOWlda', 'WQvWWRBcG8kF', 'wadcLs8', 'oSovEWeC', 'W6BdMtOA', 'W5BdLSk6bmkT', 'WPHwW7lcVga', 'bMpdTv1y', 'fGFcLJVdPq', 'uSk7m03dGa', 'tfBcLmoVlq', 'W7NcJdlcNSkV', 'jmoqWQJcGc8', 'tKRdVSogzG', 'FIWUWQFcVa', 'WQzur8oSdW', 'o340', 'WRpdP3BdM8oR', 'WOO6i2RdTW', 'W4L2WRL+W4G', 'ySkQWQi1ka', 'WPNcKq0', 'WO3cLJhcU2O', 'fSkTn2FdPG', 'W5S+W6ZcNsW', 'WRVdJfVcV8kC', 'nwK+W5yC', 'WOpcKmkZhSkU', 'hCo0WRHjW5m', 'W5G7W6lcMw8', 'WOZdQ3Xq', 'WPWhWOBcO8k5', 'aJBcSaBdSG', '4lsH4lwBWPfylq', 'WQlcKWfUWRK', 'eX7cSmkylG', 'WOaCWRqqW5S', 'W4OAWQGE', 'D1tcKmotbG', 'pCIn4BEl4BEEWOe', 'WOJcOCoqW6NdLG', 'omkTtSoHEq', 'q8kYWQ3dK0W', 'WQemW6NcLM0', 'uXdcKJNdTW', 'gw9TWPuC', 'A8kiW4zIWQW', 'WQ3dQog2UUg3MmUQ', 'WPOtW4VcVgC', 'ArFcMCo3pW', 'Fd3dHwyG', 'k8obW4FcJry', 'W689W4FcLeG', 'W7vDtmo8nG', 'z0ZcMG', 'sexdMSoFpq', 'WQNdPdm/W4K', 'W6tcKaFcQSkE', 'frRcOrtdJW', 'cwpdTvjo', 'c8kdu8o5tG', 'keNcI8okdW', 'W7K4WQWeWQa', 'imkrl0yp', '4BE3dUg2Pog3MUg0IW', 'WOuoWRS', 'WOhdRxuF', 'W6tcVmo1WRKq', 'W6z1CmoYDW', 'WPhcVrlcH0e', 'oSkTwSoMkq', 'FatdJCoenq', 'sSMLY7ywiq', 'CSkdW4X0WRm', 'bmkMpuJdLa', 'WQxcQKZcNMu', 'WP3cNmodW43dKa', 'WRtdOgddM8oP', 'WOhcL8oqk8kf', 'wq/dQ8oCyG', 'W4qKWR9Dza', 'W4P6W7y', 'tHldVSkFyG', 'uSo9W4ZdQfu', '4BAQY7djGUg1USM0', 'dCoqsmkuna', 'W7pcK8ouwJe', 'yKxdJCoynq', 'd8kpv8ohBG', 'WQZcGmoHqmkb', 'W43cOJRcJa', 'WRldP2XSWPO', 'WQVjKSMiWRjX', 'W5SAWO3dG8kC', 'W4KYW7JcJa', '4BASo+g3K+QCOog2Ua', 'kCoLaCkIma', 'W5SbWPRdNmkd', 'ftVdT0dcLG', 'WRtcHqzWW7e', 'W4jZsmoosG', 'z8omWQJHTQZHTjm', 'FNKSWPGD', 'iCkkmW', 'WQRcQGBcHwC', 'WQhdGmoWcmkw', 'bmkTlx3dPG', 'W5urWPVdNCkZ', 'W6BiKEg1Kog1GCkk', 'BCkyWOJcLKi', 'W7RlOSMRWP/cJq', 'qmklWPKt', 'nmojW58', 'saRdHGxdUa', 'WRpdRxi', 'bXXTW4qP', 'cSolvSkElq', 'b8oKW6FdPfG', 'W6FdJt/GTQ7GTBa', 'W6ZcJcBcGCkn', 'f3RdR1q', 'hXldINxcVG', 'W59atSo6oa', 'uSk3pfW', 'W7ldGsTDWQG', 'WRtcIaZcHLu', 'd8oCrCkvkG', 'aCoJWPjQBa', 'nrasWRjX', 'j2bYWRJcRW', 'omoHWPWRmG', 'ACk5WRpcRmov', 'WRVdP2BdMG', 'W4NdTt11WOG', 'iw4IWOiw', 'fmkbFCoHzG', 'WOFcTXvLW4m', 'e2RdPeG', 'wSk2FWNcJG', 'W457ot7cUW', 'iGJdNmkFmW', 'W7y0y8o+zG', 'Y53HTl3jNCop4BEZ', 'vqVcG2hcOW', 'W4uqWOlcGCkd', 'WRFcQ8o2WRiu', 'i8kIwCoGBa', 'WQpdPtaUW4m', 'c2ZdHvDZ', 'WOCIWOlcO8kh', 'WOpdPmofW6xcGG', '8y6TLo+5KhRcGmoyCa', 'q8kXW4O3', 'W4Pfs8o/DW', 'l8kzW6xdGh0', 's8kbW4yNW7m', 'aNZdR11m', 'tWdcIcJdMa', 'W7rDq8o7dW', 'o8kmW5xcILm', 'zYddHwmH', 'pXLtW6yJ', 'hCkzxmoSyG', 'kCoOD8oNFq', 'jSoMWPLSBa', 'W78ZWR/cGCof', 'pSozW6q', 'W4botCo9gq', 'uCkwc8kuna', 'q8oHWP/dGf8', 'gWFcObddIq', 'W6ZdGx85W4S', 'FbddISoy', 'ACkCWO1fWPe', 'ASktWOeAxa', 'CmUS4BsW4BAyya', 'W4TesmoJzG', 'ASo7WQVcOCoe', 'wcBcTd7dMG', 'W5iyWOS', 'WRlcMSoCqmkk', 'W4SlWR4fWOa', 'W5zZWRjbW58', 'tCoFWRunca', 'xmkAWOWluq', 'WPdcN8oaqmkY', 'rCo6WP7dIeS', 'e8o8WPn9Fa', 'srxdKCoFja', 'W4iaWOhdMmkv', 'W4rOWQ9XW5S', 'WOSjWOhcR8kD', 'W4b3BCompG', 'W7NcI8kq4BsO4BE4', 'WOhcMq5G', 'oxySWPew', 'W5WqWQLDW5u', 'WPFdLG9JW7e', 'cmoyumkupq', 'uSk+eexdNq', 'WOKcWRvyAW', 'W4P+WQu', 'W7XZESoYha', 'Y6FHTiJHTPKCYRi', 'W6fXASk3', 'YPdcVog3NEg0GSUE', 'W6mvtCoUhG', 'WRtdOwnlW7a', 'e8kAlhNdGG', 'jNvtWQVcUq', 'WR4/WRZdJa', 'WRZcSGJcIh8', 'W7BcOCoOW7Ox', 'uCkFW4fUWQO', 'WRJcMSoexmoe', 'CKtcH8oteW', 'fXRcVmkyoW', 'W5G0W7tcIYW', 'AuxdMmkqja', 'nSkba13dLW', 'sSoUWRq', 'ebJcOb/dIq', 'CCkbW6HcWOW', 'uCo/lfZdJW', 'WPRcRSk7kSkb', 'nu9zWOJcHq', '4PUYWRldHSoKsG', 'z8k4W5CIWOO', 'zSk8WRTTmW', 'W5hcJmou', 'W6dkH8UUr8oK', 'grJcOa', 'hueAWQmc', 'W7jqr8o2', '4PMPD8kQWR1Z', 'W5NcR8oFWPKY', 'W78jWO8vWRi', 'nKKeW5NdHG', 'W5tcTmoqW6pdJa', 'WOpdUdC1W54', 'CmoUWQe', 'tCkAW4nZWR8', 'kSkHwSoWzW', 'wrhcLwZdOq', 'cvNdUwJdSa', 'auLAWOBcLq', 'WPqbW6/cKvW', 'WRyXWRZcJCks', 'WPlcNCkZbmkL', 'W6JcJvtcV8kr', 'W6xcRCo7WRqb', 'W65XFq', 'ytBcNx4', 'l8kzW6NdKwO', 'lCoBWQxdKNS', 'W6RdJdrrW6y', 'vmo9W53cLq', 'oqrkW6OK', 'WPpcM8k3hSk0', 'AeejW7m2nmoKzmkI', 'WOlcTmoajmkI', 'rCk7W4bJW5G', 'eGdcLItdUG', 'W5BcGG0MW6m', 'p3CRW5Su', 'WQpcPIhdUmoO', 'b3iNWOCa', 'W6myq8k4dW', 'W7tdMszyWQ4', 'WR7cRatcIhG', 'WO/cT8ou', 'WPC5ps/cTq', 'WOKXaqJcHq', 'W7j1WPLvW64', 'WRaqWQ9CzG', '8kYmLo+4Uq', 'WR8yiGBcPW', 'WPjwW4ZcUgC', 'yCkQq8o5AW', 'uCodWQ7cT8oB', 'bCoDbmoqEG', 'W6PMFq', '4BEn4BAiY4dHTyliTG', 'WOJcQ8kg', 'WRldShu', 'WRxcSSoDW4pdIq', 'WPtdLCk9hSkS', 'W4yhWOi', 'pCoHW6xcMgy', 'WPJcSSo+yG', 'awBdSfKg', 'WOpcHrz/WR8', 'W73cT8o0FWy', 'b3GzWQy4', 'zZ8GWR7cGq', 'W77dNSkWvmkl', 'p8ohW60', 'leDfWPRcGG', 'ACo9WQFcQSon', 'W75YC8oQhG', 'iGddICoypW', 'WRddQh5EWQm', 'cWxcQrJdIq', 'WOVcMCo4', 'nCk8W5iiDa', 'WQpdUYW7W40', 'W5XgW5JcNa', 'WRldU3ldLmoG', 'ESkKW7SsWRy', 'WQieW5m', 'BerwWOhcMa', 'drpdUxtcSq', 'WPiAWPldRd4', 'WO/cJ8oYcCkV', 'W5lcJCoexMG', 'bGFcSmompW', 'fSoaWPLLwW', '4PQZl8k2EvK', 'WP0pWRSCCq', 'W64JW6hcINi', 'u8oMWPNdG10', 'ymoMW63dKwm', 'De7cJCkhqG', 'WPdcNCkGumkT', 'WP3cMCkr4Bs24Bwz', 'W5lHTy3HTz7HTAVHT5e', 'EIST', 'ALVcR8oHjq', 'imocWOfCAW', '4PI0WQqXESkI', 'W4TmzSowuW', 'W7fuvCo9hW', 'gSoiWQzyDG', 'fCo2W4hdLv0', 'sLlcJCoXjW', 'WRWxdCo9fq', '4BwRW4hHTl/HT7BHTzO', 'W6GaW5NcI3m', 'FXZdUSokhW', 'W6DvrW', 'W5j5zCobdW', 'nWfVW4Kl', 'qa/dSW', 'oCoRyCk5mG', 'umkwWR4ymW', 'WQ3dRsy', 'WPNcHbS', 'nvvlW7OW', 'WQ7dG11xWRW', 'W7hcGGdcV8kC', 'WQNcTGtcHW', 'EmoNWRFcPmog', 'W7zuq8oRfG', 'W4qcW75tDW', 'FNm5WPSF', 'f8kTkx3dQG', 'FHHAWQWN', 'W6ZcHGBcQmkr', 'l8kPqSoWBG', 'W6LbWRr9W70', 'WOBcN8ofvSkt', 'W6xdJKxdVSoo', 'vKVdVmociW', 'Bmk8xSoWCa', 'jWTdWORcJG', 'qCk9W5C2WPG', 'W5WrWOFdJCkt', 'W6ZdIcy', 'FWddL8oueG', 'WOxcLCk3xCoX', 'WOTiWRLIW4O', 'W7qKWQJdUCk9', 'kmkTrCo2', 'WOtcMraMWRm', 'W4P+z8owzW', 'vqVcJwZcUa', '4BwFW5tHTR3HT7NHTly', 'Fd3cJIPI', 'W7ZdUMddGCoV', 'W5qzW6BcNgy', 'AGZdLCovpG', 'k8kbW4pcIfm', 'WO/cItxcHga', 'A8oOWR1WnW', 'sCoGWPu', 'o8o8W6ddT1S', 'oXpcKCk9hW', 'xmk1WPG', 'W6HCaSk5wW', 'W7WDW4FcOuO', 'iuDzWOVcKW', 'WQZdL0tdVCox', 'C8k3muNdNa', 'WPeUW6FcH2y', 'WRrWWQtcLCkA', 'WRZcJ8ogW4FdPG', 'BGBdSSo1BG', 'n1vs', 'ibXrW6HG', 'dmkYW6BcQXi', 'bSkPogRdTW', 'uCoHWQhcHmoZ', 'YATd4BEB4BsXYOu', 'W5JcR8o5WQCz', 'pa7dKmocdq', 'WRlcVXxcIMS', 'W44NW6ZcKxu', 'ySktfwhdVa', 'wCkHnuZdJW', 'WP8tW57cQw4', 'W7xdId5xWR8', 'WQzCr8oReG', 'h8oasmkuDW', 'W7tcKCofsCkg', 'Y7JHTjtlTHZHTk4', 'wmkMW4S', 'BevyWOldMq', 'iSkHvCo0zq', 'W7FdIdjTWO4', 'wCkkWPSlgq', 'pCkIlfhdTa', 'iN4SWPuh', 'WQtcKSocuq', '4BEt4BEtY5RHTkhHT6m', 'DSobWP7cGSoU', 'W6mBWPe4WRe', 'WRhcGmodrmkd', 'mrHA', 'FSk5WR0hgq', 'fmkIoLRdNq', 'BmknWQehmW', 'pSorW7ddLq', 'BCkpWPWqca', 'E8o5WQTH', 'W4z0WRb0W4G', 'AITHWOxcUa', 'W5v0W7XzW5e', 'kuno', 'YO/HTz7HTytdS8Ma', 'vCk+nKNdNq', 'AhvsWP3cGa', 'C8oXWQVcQ8on', 'WQ3HTRxHTzdHTjxHT4W', 'WPmYW7dcKg4', 'm1nyWPVcKW', 'W6W+WRmmWQW', 'k8ojW57cIG', 'W43lRSMXfCoA', 'nrtdKCopfW', 'iSkyv8orCW', 'W6tcUmo2WR4b', 'WPtcNCkQba', 'z0VcLSovaG', 'W6tdJcTrWQW', 's8oxtCkwmG', 'igxdKYqN', 'WPpcQSou', 'l8kui1rC', 'WRpcHSoLs8kg', 'ChpdLK5V', 'er7cO8kdjq', 'W6TXA8o5pq', 'W6hcG8oaxWe', 'tGdcHY/dOq', 'iColFau', 'zX3cHhiE', 'i8oOE8o0yG', 'gmoCsSkvfW', '4BEKYBFjI+g1T8Ma', 'W4TsWQGjWO0', 'yYtdVSotuW', 'vWFcQW', 'WQBcT8kDjmkf', 'AtRdJSoPDW', 'u0xcQY3dVG', 'wCk4W5STWPW', 'WPyBW5O', 'pSolW4pdNNu', 'oSkql1S', 'k8oypKXF', 'WRq6WOXtCa', 'fhVdVu5r', '8k21T++6HW', 'B8oaWPRdP1W', 'orTAWQ54', 'uKZdT8ociW', 'nSoQW5KL', 'FmkvWPOUoq', 'xSoMWQhcPmov', 'nHXtW6yU', 'FmkZWPWfpq', 'fs/cVr0b', 'sSkRW4jEWRW', 'CmkUW5PDWRS', 'ySkMW54', 'W4xcHHxcR8kj', 'WOSrWQC', 'kCo5W4RcI3q', 'DYBcIwG', 'W47cNCkIgmkV', 'fmkpECoYtW', '4Bw5W6ZHTzBQNlNHTOC', 'W5u5W6hcGwa', 'WOO6zW', 'WQ3cPmoPxCkh', 'WPa4W67cLgG', 'WQ7cUW/cJue', 'rSkjWPenca', 'WONcLCkZf8kL', 'rGxdMmo1yG', 'WQVGTAJGT5VGTitdGW', 'WP4ZncNcOG', 'WOxdMmk+h8kN', 'b8owq8kE', 'cSovrCkjiW', 'W45xvSoBAa', 'pSk2g1RdPq', 'WPD1hcVcVq', 'W41oWQHsW40', 'W73XIlED77UMbJZcGa', 'W5u6pYBcVW', 'tCkDW4HJW74', 'mHhcPSkhja', 'ButcHG', 'xWldR8ksEq', 'WRWy4Bsc4BAxY6q', 'WPpcMaPNW7W', 'WRNcQXxcKce', 'WQddOxxdNCkQ', 'pHbtWQmI', 'WPJdPhhdOCoe', 'qZZcQ8kaja', 'pKddV2PB', 'i28SWOqa', 'WOxcI8kHeCkN', 'jwLTWPqb', 'f27dQeHo', 'W4ayW7yyWPi', 'WRBdVgtdH8oK', 'pSkzpKfk', 'gCo0W7nJWOK', '4PU2W4/cH0lcRa', 'qXZcRmknjq', 'W7VcOSoJDZ0', 'W7ZcUComWRyC', 'r8omW4jp', 'gfNdTMNcPq', 'bSkAWOqxeW', 'g8o/BZK', 't1/cS8keiG', 'dSkMrmoTzW', 'DCoWWQVdRf4', 'q8kBW4H1WR0', 'iW1fWO7cGG', 'W7BcRadcNwq', 'dSokv8kqpq', 'jCogWQDavq', 'ESoVWQTJoq', 'W6tdHx9xWQO', 'W6bzqmo+ra', 'W7RdVgNdKmkQ', 'DtySWRhcSa', 'q8kfW4r1WR8', 'WPJdJ1zoWPO', 'EJ3dOCo5tG', 'zmkuW5ZdK3y', 'FNGIWPTC', 'WO/cISkR', 'aEg1SUg2HEg2NUg0Kq', 'mxFdIxve', 'W6r4kCoKza', 'WOdcLmohsCkl', 'gmkvc2pdTW', 'iCkNq8o7Fq', 'tmohWOxdReW', 'w8kAWPOBmq', 'ab7cTmkyiG', 'qmo/oK7dIa', 'WO7cOCojW77dKG', 'WRJcRrlcIgS', 'ztm0WRdcVG', 'W7KbW7JcRKW', 'mmoSW6FdR04', 'W5hcLCoufIy', 'uXZcQL4k', 'WQpdQYSPWOO', 'ymk3j1ZcJG', 'W6nLW77cHmkE', 'W4uqWRNdRSkZ', 'BCk2WQasdq', 'WPlcNCkZe8k0', 'AaddIG', 'deldI1zO', 'WQKyWR3cMSkV', 'WOFdPZe2W4y', 'iN/dTfnF', 'WQecWQNcISkl', 'wSkOk2JdPa', 'WP4BW57cUM4', 'zrZcVJtdLG', '4BAAW6JHTPxQN6FHTBe', 'WRudW6ZcM3W', 'dSoxbmkDnq', 'W6z1DSoJ', 'WPxdT8khWRO', 'W6BdVJ4WW4m', 'W50hWPRdPSk1', 'CCoXWQxcS8oe', 'WR4KW77dVuy', 'W6ZdP1tdMZOQWPruWPbhuCkrzq', '4Bsu4BACYyFHTjRlGG', 'qtBcNx5V', 'WOCBW43cP3O', 'W5GqWPC', 'W6fus8oSdW', 'W5KtW4/cTwq', 'W5RcTmouW7JdKq', '4BsBYjpjGEg0HCUE', 'irZdO3xcSq', 'pWvjW4Ke', 'Et3dVCowtG', 'tCkHk0FdGa', 'A8o5WQb2lG', 'WO0nWR1DCa', 'WRRcH8kDuCkm', 'emoBWPT/xa', 'FCk8AKDA', 'W7SnWRC', 'W6a0W7SCWPG', 'W67dK+g2Kog0QSM7', 'lvro', 'jhmOWPG', 'ChpcHcO7', 'WQBcNmki', 'WPm0W6/cLs4', 'tKRdH8oEza', 'gSk4EwRdSq', 'lmoCW4RcL0i', 'WOGGiIi', 'W4u4W4BcRvC', 'WQdcLSoiuCku', 'WPqDW5RcLfW', 'kCoGWRfEsq', 'W7tdIdfqWOy', 'gCk5W5DSWPO', 'WRVdJfVcRSkx', 'hXRcTWG', 'm8ojW4hcJfC', 'x8kGW4yZWOO', 'W5vwwSo8nW', 'oSovW7ZdLwO', 'CctcQaS', 'aUg3P+g3U+g1NUg1UW', 'cM7dSLG', 'W5WqW64', 'haddKKFcLG', 'W4yxWOVcGCkt', 'pmonW43cMW', 'kZldNupcKW', 'CGhcMSobbq', 'WRtcN3fCWR8', 'WOJcQ8ka', 'ErBdNa', 'WRNcPCosW6NdGW', 'WQTvr8oSgG', 'W7pdGMWcW7S', 'WONdKrStW6y', 'WOmtW4FcQq', 'W5n0WQ4WWP0', 'be4fWRig', 'YBHw4BA64BEDYOS', 'WOVcGCoLhCkp', 'BqJdNa', 'WP/cLqnYW7C', 'mmoMWOuRFq', 'aKOMWP4k', 'W5j1w0ddVa', 'l8kvlW', 'WR3cMmo3bq', 'gHpcOCobpW', 'yGhcJmotbG', 'r8kMluhdGa', 'W5ylW7StWPS', 'n3CKWOih', 'oI7dT37cIq', 'w8osW4zorq', 'CczlW7OS', 'WO7dOZzgWR8', 'W7pcJtnBWQW', 'W6dcNSoNdmkc', 'WRRXH4wpg2/dTa', 'W5e4W6FcLW', 'WOxcGmkMxCkL', 'WO0oWR9wya', 'WOxcMa1XWR8', 'WOfdWR8rCG', 'W5nYWRfXW44', 'WRlcQW/cNw0', 'WPVcMGHGW6O', 'W7NdPwtcMSoK', 'Emo5bSkSmbHFqCkpWRXGga', 'ycZdImoCcG', 'W6fUuSoila', 'h8ousa', 'W5uHndlcOG', 'r8opW5L+WQ4', 'nCoQWOrO', 'bJ7dQutcOG', 'lCozW4JcMvm', 'WPxcI8k3', 'WPCgWRbvsa', 'FJhcTYddHG', 'W47cKmkMhCkS', 'WQqJWRu', 'W7tcKSoxrmkn', 'trRcTmkeja', 'W6zMyCo2za', 'WONcTmoDW6pdLG', 'abBdT2K', 'nmk8g8oWBW', 'W5pcLCoyvcS', 'W49uWQKCWOa', 'W7xcIXhcPq', 'A8kGW5HUCq', 'W7dcHmo0WPi8', 'WPtcPh1qWQu', 'omofW4dcHW', 'W7FdGSkRcmka', 'nmk8rSoNzG', 'k1NdN+g2QUg1VW', 'WP1oWQ1fFa', 'WPqCnbJcRa', 'kmkTrq', 'W4LKyhNdPeT/ErLhW4XClSkU', 'cHdcPbldIq', 'WO/cTSoD', 'WPldRtWYWOe', 'ESkXW68ZCa', 'WQWwnsZcHG', 'WPmuWPZdNSkF', 'lCkpcKZdRW', 'xdCYWPZcKa', 'W6rRWRr/W4G', 'sCkJW7XbWP8', 'cSouqq', 'CCojW5BcLLK', 'ygP3W6m', 'i0Ts', 'W4eAWPZcJmor', 'xZuKWRlcQG', 'zmowW6NdJ2e', 'A8oZWQ/dT2S', 'BZZdKSoRva', 'W5RcQZrlWRu', 'gSkREwZdPq', 'wZ4sWQRcKW', 'i34+', 'hXZdVMlcNq', 'pmkDk0fk', 'mmo7W5FcNf8', 'W5OxWR4t', 'WRtdR3zMWRy', 'WOVdUbylW6u', 'W6FcL8ohsSkl', 'qXxcRhiQ', 'W5u2WQBdLSku', 'm8o1W6hdGMe', 'WQxcPCougSkV', 'DHGOWRdcTW', 'pbPyW6XT', 'auRcGmk1pa', '4BALYPtjHEg0L8I8', 'W4ruq8o7ea', 'W6DuWPneW7K', 'pmkwcNVdPW', 'fSkQW4ldIuW', 'hmkHpf5z', 'WOBdRxDAWR4', 'uCk9W54MWPC', 'WPNcUCk7e8kU', 'W5qaWPZdH8kg', 'WOVdSg15WOy', 'yeFcMSoefW', 'WQZcQWdcHwu', 'v8k6luhdNq', 'W6ZcQY7cUmkW', 'WOT4pItcUG', 'WPuwWRffya', 'WPalWRTF', 'WRD1eHJcKW', 'imkNuCo6', 'C8oGWOa', 'oCkMuSoWEW', 'WRNcTSouW6VdLG', 'W61DwW', 'WP0qWP7dHmkF', 'WP05WRFcHmkE', 'W7f3WRLXW48', 'FSk1WP8xcq', 'srBcGW', 'W7xcHGZcVW', 'W6vxtmoUhG', '8ykSQU+5Rq', 'amkJAJ/cSW', 'C8opWPzfbW', 'WOWWkt4', '4PM1o8o2vCoo', 'fwRdVv9F', 'BmoKWP7dPuO', 'W7tdNtnDWR8', 'FmovWQldJNW', 'pSofW5tcNfC', 'd8QfY4CTW5q', 'WRJdVHxcKhW', 'WQFcIrhcK2G', 'mM4GW5yF', 'q8k5W54', 'WPtcLCkZa8oG', 'DSo1W64', 'YztHT7tHTRufYB0', 'b1zFWOdcGG', 'gIvOW7aY', 'W7dcPKhHT6tHTja', 'WPVcQCou', 'WPWtW4y', 'W6tdNZPvWR8', 'W61GCmoNyW', 'Dd/cJgS8', 'qmoYpGJdRq', 'kmolqCkqlG', 'oSoxWP5Utq', 'W7pcLbxcV8kA', 'zuRcJ8oodq', 'c8o1WO3dJvK', 'WRC5WRZcICke', 'WOlcKXPYW6i', 'awDXWQBcOq', 'ESk5WQRcOmoo', '4BAa4BAnYlxHTldHT4W', 'jCobCmk7oW', 'WRu1WRhcImkA', 'ArFcIG', 'W6tcKuFdQ8kp', 'YyBHTO/HTzP6Ylm', 'nbRdGfBcPa', 'cmoBWQrrsq', 'W5VdH1m0WQu', 'CKtcH8ottG', '4lEp4lsV4lso4lw94lwU', 's8oqWRb4hW', 'YyJjR+g2RsFHT5m', 'W4aqWOddImk9', 'WQu7WRnxzG', 'amoHpg/dPq', 'DKdcLSoj', 'WRqBWP3cVmkG', 'vmo3WO3dGKW', 'W5xdGCofqJu', 'drRcQ8kcAW', 'WOBdK3b8WQq', 'pmkDk1zB', 'o8oIWRLbtq', 'W4xcKSou', 'WOu0WRrHuq', 'W5HtWO5IW48', 'WOtcN8ovrmkx', 'WQ7dKvFdPCo3', 'W5fYWRj7', 'nKnpWPS', '4lE/4lEb4lwf4lsL4lAT', 'mmoEW43dK1m', 'Y5pHT5pjNmk14Bsm', 'W5hcJXhcQSkk', 'WQBdK8oErmkj', 'kqNdUgNcPa', 'AITHWQxcUa', 'ALOqW7CL', 'uSo9W5/cLWG', 'W7KwWRemWOC', 'cmoncCkEna', 'AJRdVColDa', 'kfhcKmomdq', 'FVgmLQCPWQNcTG', 'fGhcRaxdHa', 'BmkgWOaYjq', '4BsgwEg3Pog2Oog1OW', 'W7lcHHRcR8k0', 'W4ekWRujWPu', 'YB/HT6pkUfdHT4u', 'kSkYWRb2mW', 'hSk1oghdQW', 'WRBdPZe/W4q', 'WR3cNSorqSkb', 'aMZdQa', 'W5yjWQSAWPG', '8kE+O++7IW', 'WOygWR9eCq', 'hCkrW4P5W5K', 'WP4ncrdcUW', 'px4UWP4s', 'g8k+pxRcRa', 'ytXSW6ldQq', 'W6LCr8k1fW', 'o8kElfbD', 'qctdT8o3', 'WQFdPISfW58', 'm2KOWPCh', 'W5xdGCoqgZe', 'pSkTv8o2Fq', 'W77dUWDJWRO', 'f0BdS0e', 'WRZcI8o+W57dPW', 'W7zzvSoShG', 'W4FcGJRcOSk6', 'c8oRWOpdLeW', 'W73cRCo7WO4+', 'WRdcPColW7ldGq', 'kKDzWOhcKW', 'dqVdPgNcVW', 'saldQ8orEa', 'WOCdW4ZcTq', 'WPe4mc3cSW', 'WRldRsCU', 'BSoXWQRcOCoS', 'WQFdPh8PW54', 'vHBcQHZcKG', 'WOTeW4ddHmke', 'WO95WR1+W5i', 'W6JdNYy', 'WQCQWQlcM8kB', 'aSoxt8orDW', 'q8kbW4KGWQ0', 'iSoQWPLVuG', 'FLvRW7e5', 'erRcPCkppW', 'WQT5yCk4FW', 'l3ZdIN4Q', 'W5VcJKlHTiVHTO4', 'W6O4W6ZcNIe', 'Cmo4WR1S', 'FGddMmotja', 'FdRdHmo7qG', 'W5OgWQSy', 'wSk3CLhdGq', 'W5uJW7tcIhi', 'y8QsYkaFjq', 'WPldOxPCWQq', 'Y4xcLog2JEg2OCQp', 'i0PEWO7cHq', 'WQeXWQtcMmkp', 'ewRdSa', '8jESS++6OIFdTchdOa', 'pmodW5dcM0q', 'jWzwW4/cGG', 'F8oSWPHMma', 'Du/cKmoqqW', 'W7e0Amo4DW', 'W48YW6hcM3u', 'hvxcSqJdJq', 'W6pcJaBcPCkj', 'm28SWQKg', 'W6JcJr/dQ8ou', 'WQpcQb4OW54', 'W4TKyh7dPeL3FZLqW6zOamk4', 'W6dcJdNcNCki', 'zu7cKSooaa', 'W5abW4pdGCkr', 'FCk3dfNdOa', 'W5/dKSkhcW', 'DSoXWR0', 'W77dK8k6l8oo', 'B8kDW7LmWPC', 'f1rB', 'iMOLW77cUG', 'wcBcSqJdKq', 'F8oQWODJCa', 'WOhcLXzJW6a', 'WRNcImo8gq', 'jCksE8o5yW', 'xmkgW5qEeG', 'je9BWORcMa', 'ESoZWRy', 'wqpcGcNdTG', 'WRq8WRlcJCke', 'qmksWPerca', 'EtZdV8obgW', 'WRObW77cS0O', 'W5XvWQpdJCkB', 'WRW9pWJcPa', 'WONdPxGsWQC', 'jgHGWP8D', 'xqlcG2ZdLG', '8kUoQE+4Sa', 'bHDrW6yA', 'kCo2W5O5lW', 'W4q7WP1IW4G', 'ng7dPKHA', 'aMZdQbeA', 'n3xdINDC', 'y0BcNSojfW', 'amkXcxn7', 'xKNcQCoxmW', 'W4lcHmobvZW', 'WOJdShzt', 'WQpdQZDXW5m', 'nSkmALTa', 'WPqcWQPfya', 'W6SaW6VcV2i', 'EeJcImkbzW', 'W4VcISkZbmkO', 'WOeqWQ1qyG', 'iSoaW7ZdKxW', 'sIKPWRZcRq', 'CCoNWPdcTCo1', 'dSolcSoqCa', 'WRxcMCkKa8kb', 'bSoNAHhdGbZdMSorWPRcRW', 'WQJcI8oIcmkn', 'dmkhW5LQWRi', 'WQldNSkYxq', 'uCkGCKFdGa', 'ECo5WRT2CW', '8jY+HE+5JG', 'laz7WOBcKq', 'phiJWPnE', 'iSoaW6xdJq', 'W7dcRGJcH2C', 'g8oZz8kxpq', 'W6e7W47dVmk5', 'o8oFFmkvcW', 'iqbqW7CL', 'W6X+WQHXW5a', 'vmoRWRVdSxS', 'neWeWOmE', 'W7NcL1tcPCkw', 'vmk1W4yMWP4', 'ycS4', 'hbJdPhlcTq', 'bSoLWObTWPe', 'WOlcSmkrW6tdJq', 'fbBcQr7dMq', 'dSolv8oCnq', 'W5j+WRj0W7e', 'WPJcM8kLnmkQ', 'YPxHTztHT6aQY5y', 'hmk9W4pdLv0', 'jSkmpKvC', 'pSoDBCkwga', 'WPCqWR9wya', 'WR/cLSoj', 'q8k8W5CT', 'W67dGd5tWQ4', 'W4SmWQGCWPm', 'WQFdRZP6W6K', 'W4ddP3rtWR8', 'pSkbW4VcM1u', 'rUg1OEg2N+g0P+g3LW', 'qCkGCKBdJW', '4BsNW4/iTmQiW74', 'rpgbLRqvbCo4', 'rmoLWORcJmoY', 'WQ3cNmofv8oj', 'W6bSCmk3za', 'WQFdUM7dMmoU', 'uSkPWP0Lpq', 'fSknxmo9zW', 'W6KPWQe6WQa', 'cog3T+g2OUg0PUg3Mq', 'W6Dvu8o6iq', 'W4OgWQ5zAG', 'Dmo5WQe', 'WRdcO8oQA8ku', 'CdZcIYO', 'WO8cW4/cR2q', 'ErxcJIpdOq', 'WP4uWPZdNSkF', 'tmkMF23dIa', 'W5y9jsFcUG', 'WQ3dOJ0/W6i', 'WPtdOwnl', 'WRrWW6pcQmok', 'eSoqW5SAeG', 'qmk3j1W', 'oSoFW5xcN1e', 'bbJcOCkEAW', 'WOfdWOPuFq', 'DdtcGcOm', '8yEnMo+4Lb/dUSknW6y', 'WQpcQb0wW6S', 'WPpcHfyMW4q', 'A8kNW50', 'lCk6qSoSja', 'WRlcSG7cMYe', 'gSkSWPlHTy7HT6u', 'x8k3jG', 'W4vyWO5IW7m', 'rbhcLJ7dUG', 'W6/cJqdcKCkw', 'fgRdSLHM', 'vmk7W4qMWOS', 'CKtcH8ot', 'fXRcQvhdKq', 'k8ohWR1Lxa', 'nwG+WPCu', 'WQ/cHGtcO8kw', '4BwS4BAzYy7HT7xHTz0', 'mZlcIttdUa', 'WPifW4ZcVgW', 'WR0WW5BcH34', 'jCkZW7D2oW', 'WPpdLGmMW6y', 'BSoPWRLUnW', 'CmoVW7HXnG', 'WO4OWRzxyW', 'W4tdJLSWWQtdPH/cKmoEWOWiWRa', 'h8ontCkFpq', 'WRVdG+g1Log3HmMM', 'YiJHT5plSmo34BwW', 'W4T7ot7cUW', 'W75maSo2fa', 'W6TWjmk2ma', 'WQldPvf3WRy', 'W7hcOCo2WRiB', 'WQVcKColW6BdKa', 'W5GKW7pcMwy', 'ihO5WOiw', 'WRCje8kRsCkVw8kucCksWRunWQpcHq', 'mSU2YRiOva', 'WOmFW5dcSW', 'gSkPkW', 'W7BcPmoZWRyg', 'xudcOthdSa', 'WRxdTNC', 'WPK4na', 'uCkYW4GRWRe', 'WPD3WORdSIS', 'WRu0eHZcHq', '8lEFH++7KW', 'W6RdMdjvWQa', 'bHZcSa', 'W6n9AmoYFG', 'k8klovri', 'WOLv4BEo4BAJYA8', 'W7pcPSoqAsi', 'W6FdSu7cJgi', 'E8k4W4i2WQ4', 'h8orqCkF', 'sbZcLIK', 'CSozW5tcKG', 'W5u2W67cKwi', 'WPpdHqy', 'W7eYWQxcN8kt', 'WOVdPKHnWPC', 'W5VcImocAZ0', 'WPtdGHOIW5K', 'W6DcWO5dW44', 'bh41WOjt', 'zSoOpmkFiW', 'WP/dG1VdVCoS', 'W5GLWRxdMfC', 'zs5JWP4h', 'W4OaWRfCkG', 'W4erWROrWP0', 'ESk8WQX7lG', 'W71GDmoLFW', 'xSk3WP8WWO0', 'pmkxobuo', 'WQldUM0', 'W6T/W7/cJCkp', '4lEp4lsgW7yIza', 'W4uSWQOeWRu', 'W6pdQmo/WRet', 'W4zYWQP1WPW', 'oSkDmKe', 'j8kwiruc', 'phqQWPK', 'WQNcSuhcOge', 'sSoFWPjVeG', 'W6FcQCoUWQmq', 'jSoHW7ZdO34', 'uJdcTWpdKG', 'WRldO1HhWQu', 'W4SCWQ9qWPS', 'WOG0jt7cSW', 'W5bkw8ouoa', 'wmkye17dGG', 'W5RcKmouW7ldLG', 'FHbpW6SV', 'W7dcSG7cJMm', 'WOZdQsuIW4K', 'WRS9iYpcPq', 'W5WhWOxcJa', 'pSobW4m', 'xGRcQsBdOa', 'uCkHleNdIq', 'FYlcHX7dSG', '4PIUW6tcM8opW5a', 'sXhdQapdIa', 'W5xcGmocxMu', 'WRNdQxJdLmoS', 'mLPzW7yU', 'WOmEW5RcSW', 'WQhcGSoJaG', 'WOZcQxrzW70', 'j0PvWO7cMa', 'FdWVWRFcLa', 'W4SXjIxcUq', 'WPe7oMFcTW', 'WOpcISk3eCk0', 'WRNcNCkwpCkA', 'EaRcLmoCpW', 'omkGu8o7', 'gCkJpwZdSq', 'CCkIn0FdMG', 'WPFcKqCMW5e', 'WR/cJmodbSkD', 'rmkZk1ZdIW', 'WR87k8oJDq', 'iHPnWQnH', 'qmk9Bb7cNG', 'u8k+oGJdGW', 'sSkBW5L3WQ0', 'bSoEW47dRwC', 'q8oWWORdH14', 'orSsW68V', 'gSoms8kfpW', 'q8k7WOf1W4K', 'W5v0W68MWOW', 'WOpcL8k/gCkJ', 'AITYW7pcRW', 'rCojtmoEpa', '8jATJU+7OW', 'W50wWRWtWPu', 'amkKpgC', 'WQVcHmoOcmka', 'cbRcVq', 'YlhHTAtkSv3HT7e', 'WPaeWRZcMmkP', 'WRqJWQpcJCkn', 'WO3dV2ddOmoZ', 'WPm6W6xdL3e', 'W5RjNEg2VUg2KCkc', 'r8opW4bYWRi', 'WQJdRs1U', 'WPtcL8oHrSoW', 'zJBcI24c', 'BsxdHCoRuW', '4BEYYBNlU+g0GCIs', 'WPpcJHy', 'W43cNCk0fSkL', 'W4JcLCobssO', 'W6VcUZT3W5G', 'WRpcPYTsW7e', 'W5OAWQmj', 'WO3cSSklhmkI', 'WOxcOmk7pmkg', 'WQu9WRW', 'W6FcMsdcVCks', 'W6S0CmoLEq', 'W43dJCoKqSoU', '4PMsgaJdNqK', 'B8o9WQX2oW', 'cdZcQGW', 'W7lcRSoJDwu', 'W6pdNITrWQ4', 'D8oOWQXYlq', 'W6H3Fmo5xq', 'W4OoWRSEzG', '4BwK4BwFYQ7HT6JHTyW', 'W6NcLWdcU8kk', 'fXj7W6Ke', 'W4L3W7tcKgq', 'WPPoW6TeW40MW5xdG8oBW7JcMLK', 'shVdUvbo', 'WOdcLCoNW6NdLa', 'BSoPWRD2oW', 'W5lcVcijW6BdQCoQWP8wWRNcQNS', 'b8k5nhS', 'WOpdPwTlWRK', 'h8kuqCkxpa', 'WOtcN8kbo8k6', 'qpcYLBBcGsxdUa', 'i34JWPi+', 'W7xdNNjhWQi', 'srFcIG', '8jIDIo+7IW', 'sadcNJJdPq', 'yaRdNSoF', 'omkTtSoH', 'q8kYWOpdJ1q', 'iCo6WOrJ', 'W5tcHmocwa', 'AJ8NWRBcUG', 'W4tcICouvq', 'nHbCW7DT', 'w8k+m03dJq', 'qYhcT0uI', 'e8orW4ZdRfu', 'WRyjWRT5BG', 'W6xcVttcJmoPWQJdTaddGcO', 'cX7cQSkfka', 'CKJcKmoj', 'YAdHT7/HT5DqYzK', 'tMZcKCoKdq', 'cCk4xSo6Fq', 'jSkLkKJdQq', 'j8kvk1jk', 'uCkz4Bse4BE+Y4u', 'WQtdPcO/W4q', 'YRVdSUg1MUg0QmIU', 'hSkxjXlcJG', 'AWRcMCospa', 'BcFcH2SH', 'WPS74BE84BsFYkm', 'dmkup1ap', 'eZPYW44b', 'h1JcPH7dKG', 'yfpcLSod', 'EmoYWQlcOmoc', 'WRFcKSoauCkn', 'eCoStmkhia', '8jw+TU+6HCkFpmoCmq', 'q8kcW4G', 'xmooWORcSmol', 'yWZcHSoifG', 'e8kJnw3cRG', 'BZNdRSoqrq', 'W6nluCo5ha', 'lG/cJCk9ba', 'W48yWR5DWRC', 'W7W2WQlcICkp', 'WQNdUtO7W6a', 'WOWWkt7cPG', 'smo2W4ZcGbG', 'W4j1qmoRlq', '4lwRx+c1QUc2OEc0Sa', '4BETWQtHTjtQNi/HT5q', 'EaddGCoe', 'tmotWPVdP38', 'WQBcNmocbCof', 'zWZcI8ocgW', 'b0TTWQxcSW', 'WRZcMbbVW4m', 'mrLwW7C5', 'wSkAWPuCca', 'oh4SWOiw', 'WRBcQ8owW6xcGG', 'ctLtW5Kz', 'WOhkGUg3K+g0I8kC', 'W5H3WRKWW4G', 'F8obEWi', 'WPxcHYreW7O', 'WPCGjt/cTa', 'WPqKWOBcNmkK', 'kCofW4pcI1C', 'W6pcPtZcJmko', 'W7tdLmoHwmki', '8jAZUUkdOFc3GOmM4Bwh4BE/4Bs2', 'i0fsW4/cTq', 'B8oXWQxcPSov', 'W5q0WQ3cI3u', 'vZ3cJYNdHW', 'Aog0VUg0Uog3JUg3Sq', 'sexcGcpdOa', 'W50AWRuzWRK', 'WOpcKCk4fCkO', 'j23dSf1i', 'W7fzvSo9cq', 'WQldNXyVW4C', 'WOX1ncZcSa', '4BwrW7FHT6ZHTiZHTj8', 'F8oEWOddU2e', 'W4RcPbe1W7O', 'WOlcMveWWQi', 'B8o7WPpcOCoq', 'rmoRW4ZIGQRIGlm', 'bSo/WO3dK1m', 'WOCeW5ddSgy', '4BEw4BEEY77HT7hkKa', 'r8knWO0', '4PQGW6XZtmoX', 'WPldOwGsW6G', 'AWldLCoriW', 'WQzAq8o2fq', 'WQNdHY9t', 'W7pcJtLBWR4', 'WPtcISkaa8kq', 'kXhcRr7dRW', 'yY7dH8oQCW', 'jCo0W4NcShC', 'WRhdK8oexmku', 'WRhcUJjnW58', 'W7tcP8o2WRGh', '4BslaEg3SoQEL+g1PW', 'aN3dU1nh', 'bmkqWPi0WPy', 'pSkNrmk1ka', 'W5xcKSocwIi', 'zu7cICoceq', 'uCo/BeZcGW', 'W4LqWROCyq', 'WOhcLmk7eCkZ', 'W6VdGtzxW6y', 'gmonvSkyna', 'WOZcL8k1hW', 'AexdN8kgqW', 'nKjEWOlcPa', 'BdGXWQFcSa', 'WOW8pIq', 'avdcP8kdjG', 'WRxdVd4OWOO', 'WQldUIhdM8oM', 'W5ytWOJdICkt', 'WRdcGmoeqmkb', 'w8k8m0hdGa', 'mCojW5tdJa', 'eCkQp2ZdOa', 'WPrqW7qyWPO', 'E8kVW70bnq', 'gw0VWQy1', 'a34HWPmq', 'BSkwWOyAkW', 'WQu6zSo2FG', 'w8oxWRXRoa', 'FHJdPG', 'CCoLWQBdLe8', 'l8ogWRRcGvK', 'W73cSG7cJMm', 'pSkTfSo0Fq', 'ivBdJM9z', 'hrhdPqldLa', 'C1pcKW', 'W5bdxCoKyG', 'wH7cQ00T', 'Y6VHT5FiSYNHTOy', 'amkToMhdRG', 'BCkrW6SLWR0', 'eHFcKZ/dOq', 'mSo9W4VcTN0', 'iSkSfSk0kq', 'smkYWOddJL8', 'xmkAWOWl', 'W5y3mctcUa', 'hvJcPXddKW', 'W6nErmo9ga', 'W4emWRNdVmkZ', 'FCkDW4uUWQW', 'nmkUqmotsW', 'zCkEWRCPlW', 'oKXMWQZcLq', 'AJZdNSoNCa', 'W7lWQOAVASo8na', 'W7RcL8odFZC', 'WOOeWRfDyq', 'BmoOWQfUoW', 'w8kXWPiSWP8', 'W6JcJrFcP8km', 'z8k4fetdNW', 'jxuPWPmb', 'uK/dSCociW', 'dmk4EwFdRa', '4BE6vUg2SoQFREg0JW', 'W7nlrW', 'q8kWWQ0CjG', 'WRJcHc1kW4u', 'sryoWOFcNa', 'WRpcHGPPW6y', '4BA5Y5JiMEg3V8Qb', 'gSobW4vZWRm', 'WRiXWQtcICkn', 'uLpcLSogdq', 'WOhcHaTYW7C', 'W5RcRCoPWQqu', 'WONdQNa', 'gSk/oGFdJq', 'W5bSA8oXFG', 'WQ7dIMBdS8ob', 'wrBcLs3dSG', 'W43dICoIqmoU', 'WQC0WPFcPSkh', 'iHOoWRy', 'WO7dIhXEWPe', 'hXRcQrxcNq', '8l6FIo+4IW', 'qCkHoG', 'WP3cGSoetYa', 'r8k3muZdOW', 'BmoHWQVcSCoe', 'WOBcMc5SW5u', 'crBcTSknhW', 'tSkhn17dLa', 'i8oGW44', 'W5q6W6hcN2q', 'g2KQWQmu', 'W4ylWQ8nWOC', 'r8kDWObGWRe', 'C8owWPr0mG', 'WQu1WQJcMmok', 'WRtdGfblWP0', 'WP3cJSoFvYW', 'WRhcI8oebCkq', 'aa3cOCknpW', 'qmkRl00', 'W43cGmoY4Bw94BEC', 'rSoxrCkdlW', 'cbdcQcJdUa', 'W4H1WRCWWPe', 'xCk/pK/dIW', 'xXapWPG', 'WPtcJmk3aSkP', 'W6rxumo2cW', 'uCoZWPJdHeO', 'jCoQWO9/', 'xCknWPG', 'y1lcJmogba', 'xmkXW4S', 'EblcTqtdPq', 'WQZcI8oHW5/dRW', 'CSkKW5OSWO0', 'tZddKSoJiW', 'EeJdLSoEpa', 'WO/dI8oKqa', 'W4P3W6xcNMC', 'WQSSWQTHza', '4Bwf4BE4Y5xHTk3kSW', 'WRpcPCoiW4JdGq', 'W7T5WQ1gW64', 'WRxcGCoesSkl', 'abLEW7aT', 'WRRcLCoOkSk2', 'W6xdMcTaWQq', '4lE74lw54lELcoc0Ta', 'c8kHW5NcLXy', 'W4b2WRK', 'W5SnWRC', 'ySk4x8o7yG', 'mh3dTuHo', 'W43dICoJq8oX', 'zIpcIwm7', '8lEFH++7KZdcLSoUW7K', 'CmoYWRrRma', 'A8o9WQPLoW', 'wa/dPmoBwW', 'W79hySovxq', 'WRNcGSkKjmkd', 'lKmAW5RdHa', 'hHZdSwxcPa', 'WORcTWVcMh8', 'h8oCxmkf', 'p8oCxmkfEG', 'FCklpexdJq', 'rCkNmfZdIW', 'bLlcSmkjmW', 'jCkmphn5', 'W7tcNCoiWO0T', 'AaddISot', 'vJBcRqSg', 'WOZcPCoBW6pdKa', 'W5jRWRb5W4G', 'qCkyWPWl', 'omkHwCo7', 'WRpcVSo8F8ki', 'W7e8WRxcJCkC', 'W7JcQSoZWRSq', 'qCk5o0ZdVq', 'WPrF4BE74BwYYAS', 'W7BcIXRcMSkA', 'jHrvW6OY', 'dgRdPq', 'WPJdMXzJW6O', 'dvldSCoCFq', 'gSkPDdJcSG', '4BA9l+g2M+g3V+g0Gq', 'cWVcSmkCoa', 'gCocW7ZdIfG', 'W404W6VcLG', 'WR3cNCoBbCoj', 'gweJWQ8k', 'W4L6W6/cLM0', 'WQxdUJO7W54', 'WPJdSgTnWR8', 'oSkzobHy', 'xSk4W5DSWPW', 'db3cOb8', 'W4lcPbxcMCkE', 'WR7dRNtdMCkN', '4Bwb4BA0YjFHTRNkKW', 'fa3dOhtcVW', 'tuRdPayl', 'WQRdGZztWQm', 'wSk+nKBdIW', 'WQxcMCoPaq', 'ESkyW5HeWRO', 'W6NdJdjrW6S', 'tb7dOMpcSq', 'pxVdVwvQ', 'WQ3cHcpcI3y', 'iCk+nq', 'W4SxWPFdPSkM', 'vZxcNWFdPW', 'AJO1W77dRG', 'WPqEW57cS2u', 'W7ldNZm', 'W6KyB8o5ea', 'dXdcOW', 'WP8cW4VcRxG', 'r8opW6X1WQO', 'W6vxt8oOgG', 'zqJdMmoxnq', 'WP/cT8ocW6VdHq', 'W6TDd8o3fq', 'saRdLxRcPq', 'cadcTHK', 'amkJEuddRG', 'W7ZcP3aUW48', 'vGdcTWxdLG', 'rrhcMCotiG', 'W5WhWPC', 'sCkkW58QW68', 'fYDpW7u2', 'y8kXW4O3W5K', 'g8k+ia', 'W5bUWRnKW5K', 'cr/dTMpcSW', 'CcdcLMSO', 'W51sW6nmW4m', 'W4nBs8odvq', 'WRGMpwFcTq', 'FLxdN8ojda', 'FrbzW6uL', 'abpcSZFdVW', 'dfxcOX7dIa', 'zdW4', 'WOiyW5VcUhK', 'WPRdUeJdPmoi', 'W79mqmo5fq', 'nxzUWRBcTW', '4BwCWQ/HT7JQNlVHTjS', 'WQ7cRG3cGhG', 'D8oXWR1SkG', 'W4KBW77HTlZHTjK', 'WROsW6VcMKW', 'qmo7WOddHfy', 'W7SyW4/cReq', 'ymk3W5LJAW', 'lahdTCkTsq', 'cLddIctdOq', 'W6KEWRCCWOW', 'WP0wWOhdGCoF', 'W4djOEg3NEg1Q8oG', 'WP0JW6JcNse', 'W4WvW43cI24', 'hrNcPXddKW', 'WO4RWR4fWOa', 'WRRcMSoxtCkq', 'W5ynWPRcGCkv', 'zmozW63cJMW', 'w8k2W4e', 'lmoDW6tdHge', 'qrxdSmoHhW', 'qCoFWQddU1q', 'iSkxlvO', 'l8k+qSoNtG', 'DCo/WRbJdG', 'rulcLcNcTq', 'd8oCsG', 'W6pcUSoZWRyB', 'WQlcVmofC8k1', 'WQm/WQldJmol', '4BAinog0I+QEP+g0La', 'WRldVs0/WOC', 'YORHTyJkJYRHTyO', 'W6JdGtnrWQG', '8yQ9Lo+4JSkvWQ3cJmoO', 'fHddQelcIW', 'kmonW5lcM0q', 'oCkIWOnJEG', 'CSkdW4HMWQ0', 'W5jKWRBdIa', 'WR/cImoLgCkl', 'uCkGF0hdNq', 'dmorumoClG', 'WRiXWQdcMmkd', 'W6X2WOXQW5C', 'Y7VdRog1Nog0ICId', 'kmoEW4/cIL8', 'C0ZcMSovea', 'WR/dVhxdHCo0', 'WOtdQ3xdHCo0', 'mmkFWPddJG', 'wIST', 'WPpcQCoqW63dHW', 'tSo3WO3dLv0', 't2dcKCogfG', 'uSkrf1ldIG', 'CbPrW68P', 'fsnLW6O1', 'WP3cQ8kCW6JdJG', 'WQa5bbVcGG', 'W6OnWO4fWRS', 'jfvzW6W1', 'WRO1WQK', 'WP11edJcOG', 'w/c8PiKRnCkH', 'WQ7cSHPKW6O', 'EHxcTdxdHW', 'W6T9z8o2Fa', 'gSkPkZO', 'uCoYk1hdNG', 'W45/WRvXW58', 'hbdcTHi', '4BAWD+g2J+QFIog0Hq', 'W40lW7ziW4y', 'B8oPWQTQ', 'ASkRWROQlG', 'WPymWQWrja', 'vZaoWOtcRq', 'd8oCv8ks', 'i0ldVK99', 'WPqwWQ1z', 'k3xdIhPa', 'qX7dVSopzq', 'p3WIW5Tl', 'WPqGWRJcG8kE', 'fNRdS0Ho', 'ACo8WQhcQW', 'WQtdUg3dNmoZ', 'xW/dSSol', 'ACoXWRZcSCkm', 'bGZcT8knla', 'W7f8yCo5', 'W4OgWPRdG8kE', 'W7pdJHRcQSku', 'WQZcGmoH', 'yWZcLSojtG', 'u8kXW4eG', 'j8k7W6VcOmop', 'W4jPWRLXW4G', 'WRNcOSoP', 'WPVdIu/dSG', 'jKneWOW', 'W4ZdMu1YW7C', 'W7ewW47cVW', 'xWtcKINdSG', 'iXbrW6Cn', 'lmkzjfTk', 'WQJdRta0W4y', 'w8kBW49MWRa', 'W4r9smojfq', 'WONcOCoFW67dRW', 'BSoKWQJcRmov', 'WPStW57cQ24', 'WOu1WQJcMmok', 'W7/cRCo7WQmq', 'WRhcVSkXb8k4', 'u1BdKhW', 'W7DPWQvCW78', 'W6G4W4/cK0m', '4Bwj4BsMYQJHT7FjQG', 'b1W6WO8N', 'hHpcObldIq', 'pSorW7ddLx8', 'h8oBW4FdIK0', 'W6X5zCoWDq', 'l8oCW7ldIMK', 'A8oEWOBdS0G', 'WOpdRxNdGCkN', 'WPm7W6NcJwu', 'BSkujuip', 'mCo0WQXVmG', 'x0RdPCorEG', 'dCkIdhhdHq', 'hmkrzmo3Fa', 'WR81W73dNCoB', 'tCkaW4e', 'W7hlIEg3N+g3T8ok', 'bMldUq', 'xmk5WPe5oG', 'w8kpWPGwca', 'W616zCoUCq', 'oaflW7mZ', 'WQdcSG1GW5S', 'ogdcGsCI', 'CCo7WQpcQSkb', 'l8kPrSoHya', 'mWDAW6i0', '4BsZYzViQ+g1HmM5', 'WPRcMG1PW7W', 'WRRcVW3cIhq', 'omoBW7RcGs4', 'WRpcUXpdHhu', 'pmk8DCofwG', 'WQhcGSoJaSod', 'W5lcHHJcRSkA', 'tCknW4rRWRS', 'WRJcN8oO', 'dSoAW7hcNfa', '8l6VPo+4RCk4uCoibW', '8lQ8Lo+6Lq', 'zCoGWRtcT8oo', 'WPSMWQlcQmky', 'k8oyW6hdGhW', 'Y6pHTBJHT4hdJmUs', 'xmkxWPfFcq', 'u1pcKW', 'vSoZWPJdLv0', 'W6hdHdnrWQu', 'm8oCW4VdLfW', 'W4L3W6BcL3q', '8yQ9Lo+4JG', 'WPyyW5hcUhK', 'W63cJbpcPmou', 'W6S0Amo2za', 'DSoXWRLLoW', 'ACkWWQu+dW', 'ECkSW6yjWPG', 'CSkEW4eiWQS', 'WQRlH8I1hSob', 'W7pdHtPA', 'orHEW6qL', 'Bmo5WRzMeW', 'W43dI8k2xCkJ', '4BA9W4hHTR7QNiVHTye', '4BE+YyViQog2JCII', 'WPz1fIxcUG', 'WPpcSSo7DCkS', 'cLVdLevK', 'WRVcN8oCqmkh', 'dCkcCComqG', 'eWRcT8ke', 'WOFdPJiiW7S', 'vHNcQHBdKG', 'ebdcPaxdMa', 'd3VdQeXy', 'WRxcN8ozrmkx', 'munaWOVcLq', 'uSo9WRXxjG', 'uGtcNY3dVG', 'tHNdUCoECq', 'uSo0W5nJWO0', 'cbZdO2u', 'BXtdV8oYoa', 'uSo3WPtdLq', 'wuJcH2hdTW', 'AFcGPlRdJgfm', 'WRpcGCorsmoj', 'rqVdS8oEFq', 'zZBcHgK7', 'rfNcVmkp', 'W7NcLWtcUCkw', 'YRnf4BEJ4BwmYju', '4BwR4BwzY7RHTilHT5C', 'WO0fWQTDka', 'xGhdNSoDxW', 'W5VcHmoi', 'wSkVnMtcRa', 'FaNdMmodpq', 'WQNcMaBcRMi', 'mtxcGCkuoa', 'Y47HTPtkNsVHTjO', 'fNi/WPmK', 'WPNcMG5JW7e', 'WRZcMmoRgCkl', 'WR0ZnY/cTq', 'Fse4WPRcJG', 'W5ZGTB3GT43GT4NcQa', 'W4eqWO/dJ8ke', 'W5zvWQ/dNSke', 'WOFcLmk3xCkT', 'W5tcSYSpW6JdQCk7WPCSWRhcQMmj', '4Bsh4BwLYkBHTQJlJa', 'hmkjbgDe', 'qCknWQ0Pba', 'l8ksi0Do', 'cmo/WONcJLy', 'd8oHW5dcPe8', 'brtdSwhcTq', '4PQeo2FcSWe', 'WOOhW74qjq', 'WORcPCoyW6tdLG', 'WPxdT34', 'WR3cJmoWgCkl', 'EmoMW6tcRmos', 'WQ3dI0H4WOi', 'nGSgW53dHa', 'WQ3dP2xdNmoM', 'WQtcGmoLcSkl', 'W7JcHmoqtYa', 'WOddHXaoW68', 'wtVdICo9BG', 'fIZdUhdcQG', 'WQzbtCoTcq', 'lCovyCkRcq', 'cbtcSqxdMa', 'kYxcL8kElW', 'W69zqCk4da', 'z0BcMSkhia', 'sCkkW5q', 'WOTqW6Gb', 'uCkQkWJdMG', 'W4lcHmoqwde', 'WOnwW5NcSN4', 'xmo6WRLdhq', 'uqxdP8oDFW', 'nKRcLSovpG', 'WOxcPgHlWQK', 'aweKWPWc', 'mmoEW58', 'pCk9fx/dJq', 'WO3cOSo7W7ddHa', 'wSkPkwhdRa', 'tbdcLsq', 'CCkVW5CRpW', 'W7NcRCoOW6u', 'zCoGW6tcQ8oo', 'E8o9WRBcOmow', 'W5j3W43cMwO', '4PIWq8o0DhC', '4BAQ4BsBYypHTiJiOa', 'W6hdIZPxWR8', 'W6Lksq', 'WP5eW5/cN8oh', 'Yl/dGEg2Tog0U8Uf', 'qg7cSmoZjG', 'WOlcNGDO', 'DKdcI8otbG', 'g8oSfgJdQa', 'mrLwW6iZ', 'W6Prv8o8', 'CcVcKsCQ', 'W5CMWORdQmk/', 'W4CsWROAWPe', 'uYldGCoCrq', 'W4OzWOS', 'bbbhW7DG', 'W7NcRCoO', 'k8oAW6ZcHNW', 'qmklWOapdW', 'z8kfWRNcKZ8', 'WQtcPq5GW7G', 'r8kIm0hdMG', 'iIVcJCkJbq', 'W6JdRs8YW4u', 'abLAW6iZ', 'zbhdJCoaiW', 'aqhcPXddKW', 'y8kaAUg0Uog0SW', 'pwmUWQW5', '4BwG4BsVY7BHTlJHTkW', 'WRm8W5xcTuy', 'W5JcQNnlWR0', 'WQNcUXNcNq', 'q8kXW4O3WOK', 'WPFcVXVcKw8', 'WOWxWQPbDG', 'brFdTsVcTG', 'rCkAW5qExa', 'W5CNncFcVW', 'ESk8WQ9Jma', 'WR/cTCoLW53dOq', 'waRcKsldUq', 'WOutW57cVN8', 'WOmtW4FcQxS', 'mmoaW7xcQ2q', 'amoCxq', 'WRJcLCoLjmkw', 't8owWOLwcq', 'WP0NW6NcLMO', '4BAZdEg3TEg2Q+g3Sa', 'WP3cTSoeW6q', 'W47dP3PnWQq', 'taBdR8kFEW', 'jvVdKML5', 'uSo5W582WPu', 'WP3cKCoEuca', 'WQtdVGJcHg0', 'WQNdVGFcHNK', 'nG/cICkJmG', 'Ae3cLSojbG', 'bKRdIsNdUW', 'W4xdH0XUW6y', 'W7xcHGZcV8kj', 'rmkKW54QWO0', 'wmoKWQZcQSov', 'qSkNW5C', 'pSoHWPzNDG', 'WPmWka', 'WPdjUog2VUg0Ogu', 'tXhcHZ7dPG', 'W4muWPRdMmkv', 'vCo3WOldHxu', 'q8kiW4GNWP0', 'WROdWQhcLCkR', 'WQ3dP2ZdL8oU'];
    _0x4917 = function () {
      return _0x5c0fc6;
    };
    return _0x4917();
  }
  var imgmsg3 = '';
  if (config.LANG === 'URDU') {
    imgmsg3 = "*Misaal ke tour par: .banner2 Hamza+Byte*";
  } else {
    imgmsg3 = "*Ex: .banner2 Hamza+Byte*";
  }
  var imgmsg4 = '';
  function _0x420ef7(_0x553aab, _0x4c9785, _0x4e7bab, _0x48c604, _0x39f361) {
    return _0x1cca(_0x39f361 + 0x1e2, _0x553aab);
  }
  if (config.LANG === 'URDU') {
    imgmsg4 = "*Misaal ke tour par: .banner3 Hamza+Byte*";
  } else {
    imgmsg4 = "*Ex: .banner3 Hamza+Byte*";
  }
  var imgmsg5 = '';
  if (config.LANG === 'URDU') {
    imgmsg5 = "*Misaal ke tour par: .banner3 Hamza+Byte*";
  } else {
    imgmsg5 = "*Ex: .banner3 Hamza+Byte*";
  }
  function _0xb7e46f(_0x244b61, _0x557614, _0xa91f4c, _0x3c76e8, _0x3e225d) {
    return _0x1cca(_0x244b61 + 0x2bb, _0xa91f4c);
  }
  var imgmsg6 = '';
  if (config.LANG === 'URDU') {
    imgmsg6 = "*Misaal ke tour par: .banner3 Hamza+Byte*";
  } else {
    imgmsg6 = "*Ex: .banner3 Hamza+Byte*";
  }
  var errt = '';
  if (config.LANG === 'URDU') {
    errt = "*Ehh, sorry main ye logo nahi bana sakta :(*";
  } else {
    errt = "*I cant create this logo :(*";
  }
  var desc2 = '';
  if (config.LANG === 'URDU') {
    desc2 = "Iss command say ap channel ka banner bana sakty hain..";
  } else {
    desc2 = "It creates channel banners..";
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x2e839b = {
      pattern: "logo",
      react: "🗃️",
      desc: "Logo Genarate.",
      category: "logo",
      use: ".logo X-BYTE",
      filename: __filename
    };
    cmd(_0x2e839b, async (_0x553b44, _0x2e8854, _0x5d5252, {
      from: _0x144f6f,
      l: _0x136c03,
      prefix: _0x5e6abc,
      quoted: _0x175dc0,
      body: _0x39f32e,
      isCmd: _0x59fe4c,
      command: _0xb9a0e0,
      args: _0x47b33f,
      q: _0x543254,
      isGroup: _0x1c809e,
      sender: _0x12b241,
      senderNumber: _0x2628c8,
      botNumber2: _0x49a308,
      botNumber: _0x3b7b19,
      pushname: _0x5dab7c,
      isMe: _0x50563,
      isOwner: _0x4f1fea,
      groupMetadata: _0x5d5fb4,
      groupName: _0x5ad901,
      participants: _0x1c805d,
      groupAdmins: _0x5ce9cf,
      isBotAdmins: _0x5ad0ea,
      isAdmins: _0x4b4974,
      reply: _0x5705b8
    }) => {
      try {
        if (!_0x543254) {
          return await _0x5705b8(imgmsg);
        }
        const _0x277118 = [];
        _0x277118.push({
          'header': "Select logo type want",
          'title': "Black pink",
          'description': "Black pink logo design",
          'id': _0x5e6abc + "blackpink " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Deadpool",
          'description': "Create text effects in the style of the Deadpool logo",
          'id': _0x5e6abc + "deadpool " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Wolf Galaxy",
          'description': "Create logo, avatar Wolf Galaxy",
          'id': _0x5e6abc + "wolf " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "3D wooden",
          'description': "Create 3D wooden logo",
          'id': _0x5e6abc + "3dwooden " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Zombie 3D",
          'description': "Zombie 3D Text Effect",
          'id': _0x5e6abc + "zombie3d " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Comic Style",
          'description': "Create online 3D comic-style text effects",
          'id': _0x5e6abc + "comic " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Air Balloon",
          'description': "Writing your name on hot air balloon",
          'id': _0x5e6abc + "airballoon " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Glitter Gold",
          'description': "Glitter Gold",
          'id': _0x5e6abc + "glittergold " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Incandescent Bulbs",
          'description': "Text effects incandescent bulbs",
          'id': _0x5e6abc + "bulb " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "BORN PINK",
          'description': "Create BLACKPINKs BORN PINK album logo",
          'id': _0x5e6abc + "bornpink " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "gold text",
          'description': "Beautiful gold text effect",
          'id': _0x5e6abc + "goldtext " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Neon Light",
          'description': "Making Neon Light Text Effect with Galaxy Style",
          'id': _0x5e6abc + "neonlight " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Water Color",
          'description': "Create a watercolor text effect online",
          'id': _0x5e6abc + "watercolor " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Purple Text",
          'description': "Purple text effect",
          'id': _0x5e6abc + "purple-text " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "3D ruby ​​stone",
          'description': "3D ruby ​​stone",
          'id': _0x5e6abc + "3drubystone " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Triangle mountain",
          'description': "Triangle mountain logo black & white",
          'id': _0x5e6abc + "mountain " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Create Marvel",
          'description': "Create Marvels Style Logo",
          'id': _0x5e6abc + "marvel " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "letters on the leaves",
          'description': "Write letters on the leaves",
          'id': _0x5e6abc + "leaves " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Metal",
          'description': "Metal logo online",
          'id': _0x5e6abc + "metal " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Modern Gold",
          'description': "Modern Gold",
          'id': _0x5e6abc + "moderngold " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "1917 Style Text",
          'description': "1917 Style Text Effect",
          'id': _0x5e6abc + "1917 " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Plasma",
          'description': "Plasma text effects online",
          'id': _0x5e6abc + "plasma " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Blue neon",
          'description': "Blue neon text effect",
          'id': _0x5e6abc + "blueneon " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Christmas snow",
          'description': "Christmas snow text effect online",
          'id': _0x5e6abc + "christmas " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Stars night",
          'description': "Stars night",
          'id': _0x5e6abc + "starsnight " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Mechanical Style",
          'description': "Create your name in a mechanical style",
          'id': _0x5e6abc + "mechanical " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "multicolored signature attachment",
          'description': "Create multicolored signature attachment arrow effect",
          'id': _0x5e6abc + "attachmentarrow " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Underwater Text",
          'description': "Underwater Text",
          'id': _0x5e6abc + "underwater " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Wings Galaxy",
          'description': "Wings Galaxy",
          'id': _0x5e6abc + "wingsgalaxy " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "star zodiac",
          'description': "Create star zodiac wallpaper mobile",
          'id': _0x5e6abc + "starzodiac " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "Heated steel",
          'description': "Heated steel lettering effect",
          'id': _0x5e6abc + "heatedsteel " + _0x543254
        });
        _0x277118.push({
          'header': '',
          'title': "FireWork",
          'description': "Text FireWork Effect",
          'id': _0x5e6abc + "firework " + _0x543254
        });
        const _0x1bc0a5 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x396fad = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x1bc0a5)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select a Category :)",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x277118
            }]
          })
        }];
        const _0x2dc0b2 = {
          image: "https://telegra.ph/file/e99e5f3349e85fecebfff.jpg",
          header: '',
          footer: config.FOOTER,
          body: "> X-BYTE LOGO CREATION 🖼️\n            \n> The first quality great logos share is that they're relevant to the markets their companies target. More importantly, they clearly communicate a brand's personality and identity. A primary component is the use of colors in your logo, which can trigger different emotions and show your brand's personality to consumers."
        };
        const _0x40e12f = {
          quoted: _0x2e8854
        };
        return await _0x553b44.sendButtonMessage(_0x144f6f, _0x396fad, _0x5d5252, _0x2dc0b2, _0x40e12f);
      } catch (_0x268013) {
        _0x5705b8("*Error !!*");
        console.log(_0x268013);
      }
    });
    const _0x10c11f = {
      pattern: "firework",
      filename: __filename
    };
    cmd(_0x10c11f, async (_0x4d8c8f, _0x925aba, _0x1acfbf, {
      from: _0x19c75b,
      l: _0x4ccdcc,
      quoted: _0x26755c,
      body: _0x3bc21a,
      isCmd: _0x500d62,
      command: _0x4dbd64,
      args: _0x2e4ec3,
      q: _0xe4aee1,
      isGroup: _0x533198,
      sender: _0x4b05ca,
      senderNumber: _0x39bc5c,
      botNumber2: _0x1628a7,
      botNumber: _0x45d50e,
      pushname: _0x42957b,
      isMe: _0xfc83bc,
      isOwner: _0x30921b,
      groupMetadata: _0x1396df,
      groupName: _0x481836,
      participants: _0x35dab5,
      groupAdmins: _0x350e16,
      isBotAdmins: _0x3aedf8,
      isAdmins: _0x3c7a93,
      reply: _0x2c3074
    }) => {
      try {
        const _0x212d65 = {
          text: '🎆',
          key: _0x925aba.key
        };
        const _0x3e8dd2 = {
          react: _0x212d65
        };
        await _0x4d8c8f.sendMessage(_0x19c75b, _0x3e8dd2);
        let _0x6a2000 = _0xe4aee1.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/text-firework-effect-356.html", ['' + _0x6a2000]).then(async _0x57f3d2 => {
          const _0x4e70b5 = {
            quoted: _0x925aba
          };
          await _0x4d8c8f.sendMessage(_0x19c75b, {
            'image': await getBuffer(_0x57f3d2.imageUrl),
            'caption': config.FOOTER
          }, _0x4e70b5);
          const _0x380def = {
            text: '✔',
            key: _0x925aba.key
          };
          const _0xafdde5 = {
            react: _0x380def
          };
          await _0x4d8c8f.sendMessage(_0x19c75b, _0xafdde5);
        });
      } catch (_0x403759) {
        _0x2c3074(errt);
        _0x4ccdcc(_0x403759);
      }
    });
    const _0x94abc9 = {
      pattern: "heatedsteel",
      filename: __filename
    };
    cmd(_0x94abc9, async (_0x32f7c8, _0x3cb315, _0xe5854b, {
      from: _0x5c8b58,
      l: _0x5aa16f,
      quoted: _0x22e904,
      body: _0x246828,
      isCmd: _0x16d767,
      command: _0x436e14,
      args: _0x18c62e,
      q: _0x521d97,
      isGroup: _0x170ffc,
      sender: _0x4b4ed8,
      senderNumber: _0x57c70f,
      botNumber2: _0x3fa06e,
      botNumber: _0x127b5e,
      pushname: _0x514cd8,
      isMe: _0x538528,
      isOwner: _0xdffe14,
      groupMetadata: _0xfec36f,
      groupName: _0x3af835,
      participants: _0x198119,
      groupAdmins: _0x330930,
      isBotAdmins: _0xa6888d,
      isAdmins: _0x52ee8b,
      reply: _0x88d1c6
    }) => {
      try {
        const _0xf01adf = {
          text: '🎆',
          key: _0x3cb315.key
        };
        const _0x5e5fc0 = {
          react: _0xf01adf
        };
        await _0x32f7c8.sendMessage(_0x5c8b58, _0x5e5fc0);
        let _0x556193 = _0x521d97.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/heated-steel-lettering-effect-65.html", ['' + _0x556193]).then(async _0x454f38 => {
          const _0x3282ba = {
            quoted: _0x3cb315
          };
          await _0x32f7c8.sendMessage(_0x5c8b58, {
            'image': await getBuffer(_0x454f38.imageUrl),
            'caption': config.FOOTER
          }, _0x3282ba);
          const _0x5e20a2 = {
            text: '✔',
            key: _0x3cb315.key
          };
          const _0x128834 = {
            react: _0x5e20a2
          };
          await _0x32f7c8.sendMessage(_0x5c8b58, _0x128834);
        });
      } catch (_0x2e38e5) {
        _0x88d1c6(errt);
        _0x5aa16f(_0x2e38e5);
      }
    });
    const _0x3b813b = {
      pattern: "starzodiac",
      filename: __filename
    };
    cmd(_0x3b813b, async (_0x4e45af, _0x1772c1, _0x28ed3f, {
      from: _0x2c07c0,
      l: _0x366512,
      quoted: _0x4a19d3,
      body: _0x27e511,
      isCmd: _0x53aa5c,
      command: _0x422955,
      args: _0x3db174,
      q: _0x255e07,
      isGroup: _0x1f2c87,
      sender: _0x58625a,
      senderNumber: _0x436723,
      botNumber2: _0x501665,
      botNumber: _0x3be000,
      pushname: _0x1d9c6e,
      isMe: _0x211ed9,
      isOwner: _0x44b345,
      groupMetadata: _0x610d59,
      groupName: _0x2e0637,
      participants: _0x170ed2,
      groupAdmins: _0x4ea2d0,
      isBotAdmins: _0x1c803a,
      isAdmins: _0x55f819,
      reply: _0x2c893b
    }) => {
      try {
        const _0x1e11be = {
          text: '🎆',
          key: _0x1772c1.key
        };
        const _0x5bad5e = {
          react: _0x1e11be
        };
        await _0x4e45af.sendMessage(_0x2c07c0, _0x5bad5e);
        let _0x2ce019 = _0x255e07.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-star-zodiac-wallpaper-mobile-604.html", ['' + _0x2ce019]).then(async _0x181e0e => {
          const _0x3d9523 = {
            quoted: _0x1772c1
          };
          await _0x4e45af.sendMessage(_0x2c07c0, {
            'image': await getBuffer(_0x181e0e.imageUrl),
            'caption': config.FOOTER
          }, _0x3d9523);
          const _0x1bbc2f = {
            text: '✔',
            key: _0x1772c1.key
          };
          const _0x4e0730 = {
            react: _0x1bbc2f
          };
          await _0x4e45af.sendMessage(_0x2c07c0, _0x4e0730);
        });
      } catch (_0x2486ea) {
        _0x2c893b(errt);
        _0x366512(_0x2486ea);
      }
    });
    const _0x5de84b = {
      pattern: "heatedsteel",
      filename: __filename
    };
    cmd(_0x5de84b, async (_0x3b0fa0, _0x53759b, _0x19b602, {
      from: _0x2a32ef,
      l: _0x4545df,
      quoted: _0x29b7a4,
      body: _0x368f00,
      isCmd: _0x18ca5a,
      command: _0x2e262d,
      args: _0x45a026,
      q: _0xd78949,
      isGroup: _0x33614f,
      sender: _0x470c27,
      senderNumber: _0x1088c0,
      botNumber2: _0x3757eb,
      botNumber: _0x243de0,
      pushname: _0x4ea3b1,
      isMe: _0x481361,
      isOwner: _0x319d1f,
      groupMetadata: _0x28dcf7,
      groupName: _0x1832d3,
      participants: _0x56dbd5,
      groupAdmins: _0x1d577e,
      isBotAdmins: _0x193261,
      isAdmins: _0x189795,
      reply: _0x22b022
    }) => {
      try {
        const _0x1d5ed3 = {
          text: '🎆',
          key: _0x53759b.key
        };
        const _0x1ce4ed = {
          react: _0x1d5ed3
        };
        await _0x3b0fa0.sendMessage(_0x2a32ef, _0x1ce4ed);
        let _0x1a08cf = _0xd78949.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/heated-steel-lettering-effect-65.html", ['' + _0x1a08cf]).then(async _0x3e0034 => {
          const _0x53c1d0 = {
            quoted: _0x53759b
          };
          await _0x3b0fa0.sendMessage(_0x2a32ef, {
            'image': await getBuffer(_0x3e0034.imageUrl),
            'caption': config.FOOTER
          }, _0x53c1d0);
          const _0x54c7d0 = {
            text: '✔',
            key: _0x53759b.key
          };
          const _0x42acec = {
            react: _0x54c7d0
          };
          await _0x3b0fa0.sendMessage(_0x2a32ef, _0x42acec);
        });
      } catch (_0x8009cc) {
        _0x22b022(errt);
        _0x4545df(_0x8009cc);
      }
    });
    const _0x18e9e2 = {
      pattern: "wingsgalaxy",
      filename: __filename
    };
    cmd(_0x18e9e2, async (_0x588e12, _0x34dab0, _0x167eca, {
      from: _0x451493,
      l: _0x3ce0f6,
      quoted: _0x25609b,
      body: _0x3dab85,
      isCmd: _0x774324,
      command: _0x53188a,
      args: _0x5f2214,
      q: _0xf6f0b7,
      isGroup: _0x1f6f06,
      sender: _0x4c3b4f,
      senderNumber: _0x3c23a9,
      botNumber2: _0x4309e9,
      botNumber: _0x3f0b0f,
      pushname: _0x56ec49,
      isMe: _0x59ecf8,
      isOwner: _0x13bbca,
      groupMetadata: _0x4dd128,
      groupName: _0x54367e,
      participants: _0xc038ff,
      groupAdmins: _0x306368,
      isBotAdmins: _0x2108f2,
      isAdmins: _0x3487c3,
      reply: _0x456222
    }) => {
      try {
        const _0x5bade3 = {
          text: '🎆',
          key: _0x34dab0.key
        };
        const _0x482663 = {
          react: _0x5bade3
        };
        await _0x588e12.sendMessage(_0x451493, _0x482663);
        let _0x57e01c = _0xf6f0b7.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", ['' + _0x57e01c]).then(async _0x5ab578 => {
          const _0x2b5d5f = {
            quoted: _0x34dab0
          };
          await _0x588e12.sendMessage(_0x451493, {
            'image': await getBuffer(_0x5ab578.imageUrl),
            'caption': config.FOOTER
          }, _0x2b5d5f);
          const _0x5e4de1 = {
            text: '✔',
            key: _0x34dab0.key
          };
          const _0x2d3ab4 = {
            react: _0x5e4de1
          };
          await _0x588e12.sendMessage(_0x451493, _0x2d3ab4);
        });
      } catch (_0x2c6dd6) {
        _0x456222(errt);
        _0x3ce0f6(_0x2c6dd6);
      }
    });
    const _0x5a475f = {
      pattern: "underwater",
      filename: __filename
    };
    cmd(_0x5a475f, async (_0x27c6bc, _0x255172, _0x4b5463, {
      from: _0x547948,
      l: _0x396ec0,
      quoted: _0x28a4d2,
      body: _0x5b834a,
      isCmd: _0x1dff52,
      command: _0x9ac60d,
      args: _0x4653a0,
      q: _0x29b4ee,
      isGroup: _0xd8b29b,
      sender: _0x36e111,
      senderNumber: _0x52c494,
      botNumber2: _0x19e0dc,
      botNumber: _0x37b070,
      pushname: _0x318c2b,
      isMe: _0x4a9e68,
      isOwner: _0xe21f3a,
      groupMetadata: _0x9a7dd8,
      groupName: _0xdaf88e,
      participants: _0x4bb7b9,
      groupAdmins: _0x8e8348,
      isBotAdmins: _0x497ed7,
      isAdmins: _0x4bfc1e,
      reply: _0x579d29
    }) => {
      try {
        const _0x2ddd92 = {
          text: '🎆',
          key: _0x255172.key
        };
        const _0x5287e1 = {
          react: _0x2ddd92
        };
        await _0x27c6bc.sendMessage(_0x547948, _0x5287e1);
        let _0xc6d4cb = _0x29b4ee.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/underwater-text-73.html", ['' + _0xc6d4cb]).then(async _0x53878f => {
          const _0x5d361c = {
            quoted: _0x255172
          };
          await _0x27c6bc.sendMessage(_0x547948, {
            'image': await getBuffer(_0x53878f.imageUrl),
            'caption': config.FOOTER
          }, _0x5d361c);
          const _0x505196 = {
            text: '✔',
            key: _0x255172.key
          };
          const _0x5ef5b6 = {
            react: _0x505196
          };
          await _0x27c6bc.sendMessage(_0x547948, _0x5ef5b6);
        });
      } catch (_0x36111e) {
        _0x579d29(errt);
        _0x396ec0(_0x36111e);
      }
    });
    const _0x30d554 = {
      pattern: "attachmentarrow",
      filename: __filename
    };
    cmd(_0x30d554, async (_0x5c8ff4, _0x4e3a48, _0x9a1801, {
      from: _0x4d1810,
      l: _0x337e0f,
      quoted: _0x171919,
      body: _0x2cca82,
      isCmd: _0x77a105,
      command: _0x153e32,
      args: _0x50e9a4,
      q: _0x714278,
      isGroup: _0x371a81,
      sender: _0x1adc6a,
      senderNumber: _0x47189f,
      botNumber2: _0x38a24f,
      botNumber: _0x477414,
      pushname: _0x128169,
      isMe: _0x59995b,
      isOwner: _0x4f699d,
      groupMetadata: _0x5bb839,
      groupName: _0x467b67,
      participants: _0x2f7121,
      groupAdmins: _0x173563,
      isBotAdmins: _0x42e177,
      isAdmins: _0x5c76f8,
      reply: _0x58dd9e
    }) => {
      try {
        const _0x5f4b4e = {
          text: '🎆',
          key: _0x4e3a48.key
        };
        const _0x264874 = {
          react: _0x5f4b4e
        };
        await _0x5c8ff4.sendMessage(_0x4d1810, _0x264874);
        let _0x4ea601 = _0x714278.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html", ['' + _0x4ea601]).then(async _0x497b32 => {
          const _0x3c1786 = {
            quoted: _0x4e3a48
          };
          await _0x5c8ff4.sendMessage(_0x4d1810, {
            'image': await getBuffer(_0x497b32.imageUrl),
            'caption': config.FOOTER
          }, _0x3c1786);
          const _0x5af4c7 = {
            text: '✔',
            key: _0x4e3a48.key
          };
          const _0x521da9 = {
            react: _0x5af4c7
          };
          await _0x5c8ff4.sendMessage(_0x4d1810, _0x521da9);
        });
      } catch (_0x3c4131) {
        _0x58dd9e(errt);
        _0x337e0f(_0x3c4131);
      }
    });
    const _0x145de0 = {
      pattern: "mechanical",
      filename: __filename
    };
    cmd(_0x145de0, async (_0x205940, _0x44db6a, _0x46d0fa, {
      from: _0x26e546,
      l: _0x5cb3a1,
      quoted: _0x37d149,
      body: _0x25e2b5,
      isCmd: _0x23a5de,
      command: _0x53eac7,
      args: _0x4ad4d6,
      q: _0x205dcb,
      isGroup: _0xfac8e,
      sender: _0x40cc9d,
      senderNumber: _0x105ce2,
      botNumber2: _0x5f3911,
      botNumber: _0x430678,
      pushname: _0x5673a0,
      isMe: _0xc21193,
      isOwner: _0x1be0a1,
      groupMetadata: _0x61a853,
      groupName: _0x9d3538,
      participants: _0x4633fc,
      groupAdmins: _0x5c8e1a,
      isBotAdmins: _0x4df8a3,
      isAdmins: _0x3464cc,
      reply: _0xfb6288
    }) => {
      try {
        const _0x530102 = {
          text: '🎆',
          key: _0x44db6a.key
        };
        const _0x4ab224 = {
          react: _0x530102
        };
        await _0x205940.sendMessage(_0x26e546, _0x4ab224);
        let _0x43f03c = _0x205dcb.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html", ['' + _0x43f03c]).then(async _0x1610d2 => {
          const _0x5640ef = {
            quoted: _0x44db6a
          };
          await _0x205940.sendMessage(_0x26e546, {
            'image': await getBuffer(_0x1610d2.imageUrl),
            'caption': config.FOOTER
          }, _0x5640ef);
          const _0x44dd19 = {
            text: '✔',
            key: _0x44db6a.key
          };
          const _0x708bce = {
            react: _0x44dd19
          };
          await _0x205940.sendMessage(_0x26e546, _0x708bce);
        });
      } catch (_0xe808b0) {
        _0xfb6288(errt);
        _0x5cb3a1(_0xe808b0);
      }
    });
    const _0x4c3092 = {
      pattern: "starsnight",
      filename: __filename
    };
    cmd(_0x4c3092, async (_0x3b9e57, _0x2f28dd, _0x117e37, {
      from: _0x453616,
      l: _0x1400ce,
      quoted: _0x26501b,
      body: _0x56f9ee,
      isCmd: _0x405340,
      command: _0x48c3b3,
      args: _0x17f077,
      q: _0x4bc6be,
      isGroup: _0x517a87,
      sender: _0xd16597,
      senderNumber: _0x505cbb,
      botNumber2: _0x3bf753,
      botNumber: _0x287352,
      pushname: _0x43c7af,
      isMe: _0x1cd748,
      isOwner: _0x414f98,
      groupMetadata: _0x2dbcd5,
      groupName: _0x1a319a,
      participants: _0x1ee4e8,
      groupAdmins: _0x3a73ef,
      isBotAdmins: _0x366246,
      isAdmins: _0x230f9a,
      reply: _0x67320
    }) => {
      try {
        const _0x4b1f80 = {
          text: '🎆',
          key: _0x2f28dd.key
        };
        const _0x15dd2d = {
          react: _0x4b1f80
        };
        await _0x3b9e57.sendMessage(_0x453616, _0x15dd2d);
        let _0x2a132f = _0x4bc6be.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/stars-night-online-84.html", ['' + _0x2a132f]).then(async _0x176d75 => {
          const _0x21d0ad = {
            quoted: _0x2f28dd
          };
          await _0x3b9e57.sendMessage(_0x453616, {
            'image': await getBuffer(_0x176d75.imageUrl),
            'caption': config.FOOTER
          }, _0x21d0ad);
          const _0x51116a = {
            text: '✔',
            key: _0x2f28dd.key
          };
          const _0x1e1525 = {
            react: _0x51116a
          };
          await _0x3b9e57.sendMessage(_0x453616, _0x1e1525);
        });
      } catch (_0x3e0d0c) {
        _0x67320(errt);
        _0x1400ce(_0x3e0d0c);
      }
    });
    const _0x53e8fc = {
      pattern: "christmas",
      filename: __filename
    };
    cmd(_0x53e8fc, async (_0x34f790, _0x141783, _0x3a7221, {
      from: _0xd85229,
      l: _0x413361,
      quoted: _0x56e72e,
      body: _0x45abb5,
      isCmd: _0xea71f1,
      command: _0x396ee1,
      args: _0x26ede6,
      q: _0x352866,
      isGroup: _0x5c2045,
      sender: _0x2a370b,
      senderNumber: _0x1aa819,
      botNumber2: _0x5c24a6,
      botNumber: _0x31826e,
      pushname: _0xdcbe77,
      isMe: _0x2c3b7d,
      isOwner: _0x304ef5,
      groupMetadata: _0x317b90,
      groupName: _0x4f2b19,
      participants: _0x5a9c5b,
      groupAdmins: _0x4a6e3b,
      isBotAdmins: _0x48b07f,
      isAdmins: _0x26ce9f,
      reply: _0x6aa5fb
    }) => {
      try {
        const _0x2c42c8 = {
          text: '🎆',
          key: _0x141783.key
        };
        const _0x456b47 = {
          react: _0x2c42c8
        };
        await _0x34f790.sendMessage(_0xd85229, _0x456b47);
        let _0x4af54a = _0x352866.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/christmas-snow-text-effect-online-631.html", ['' + _0x4af54a]).then(async _0x1eaedb => {
          const _0x38f0fe = {
            quoted: _0x141783
          };
          await _0x34f790.sendMessage(_0xd85229, {
            'image': await getBuffer(_0x1eaedb.imageUrl),
            'caption': config.FOOTER
          }, _0x38f0fe);
          const _0x324f72 = {
            text: '✔',
            key: _0x141783.key
          };
          const _0x2ff1ec = {
            react: _0x324f72
          };
          await _0x34f790.sendMessage(_0xd85229, _0x2ff1ec);
        });
      } catch (_0x270eff) {
        _0x6aa5fb(errt);
        _0x413361(_0x270eff);
      }
    });
    const _0x9e6f97 = {
      pattern: "blueneon",
      filename: __filename
    };
    cmd(_0x9e6f97, async (_0x25f379, _0x98e244, _0x59f640, {
      from: _0x5e3e3b,
      l: _0x2af934,
      quoted: _0x47d228,
      body: _0x4d0bce,
      isCmd: _0x555f77,
      command: _0x2add9c,
      args: _0x46f771,
      q: _0x327c08,
      isGroup: _0x14f88a,
      sender: _0x36e6e5,
      senderNumber: _0x292f70,
      botNumber2: _0x54dfce,
      botNumber: _0x96a600,
      pushname: _0x289d0b,
      isMe: _0x599b9e,
      isOwner: _0x4799f0,
      groupMetadata: _0x288177,
      groupName: _0x4a929e,
      participants: _0x26893d,
      groupAdmins: _0x5aceb8,
      isBotAdmins: _0x5c29c6,
      isAdmins: _0x4cd97b,
      reply: _0x1be5d6
    }) => {
      try {
        const _0x119f17 = {
          text: '🎆',
          key: _0x98e244.key
        };
        const _0x7cd5d = {
          react: _0x119f17
        };
        await _0x25f379.sendMessage(_0x5e3e3b, _0x7cd5d);
        let _0x4765d2 = _0x327c08.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/blue-neon-text-effect-117.html", ['' + _0x4765d2]).then(async _0x1ddc91 => {
          const _0x5deea0 = {
            quoted: _0x98e244
          };
          await _0x25f379.sendMessage(_0x5e3e3b, {
            'image': await getBuffer(_0x1ddc91.imageUrl),
            'caption': config.FOOTER
          }, _0x5deea0);
          const _0x544868 = {
            text: '✔',
            key: _0x98e244.key
          };
          const _0x19b24d = {
            react: _0x544868
          };
          await _0x25f379.sendMessage(_0x5e3e3b, _0x19b24d);
        });
      } catch (_0x4e37b4) {
        _0x1be5d6(errt);
        _0x2af934(_0x4e37b4);
      }
    });
    const _0x4d5b7a = {
      pattern: "plasma",
      filename: __filename
    };
    cmd(_0x4d5b7a, async (_0x14ae18, _0x1d0be0, _0x4f0bdc, {
      from: _0x1e75bf,
      l: _0xd019b7,
      quoted: _0x1364b6,
      body: _0x22a95a,
      isCmd: _0x148a7e,
      command: _0x3f36e0,
      args: _0x3fdf78,
      q: _0x2ce552,
      isGroup: _0x25aa96,
      sender: _0x177ae8,
      senderNumber: _0xf4e753,
      botNumber2: _0xb15c3f,
      botNumber: _0x4b44c0,
      pushname: _0x56ef8f,
      isMe: _0x142bb0,
      isOwner: _0x28cda8,
      groupMetadata: _0x141497,
      groupName: _0x49674c,
      participants: _0x2d260e,
      groupAdmins: _0x1f0945,
      isBotAdmins: _0x2b4c4c,
      isAdmins: _0x51ad64,
      reply: _0x24b55d
    }) => {
      try {
        const _0x5c74a6 = {
          text: '🎆',
          key: _0x1d0be0.key
        };
        const _0x15a0e6 = {
          react: _0x5c74a6
        };
        await _0x14ae18.sendMessage(_0x1e75bf, _0x15a0e6);
        let _0xeec000 = _0x2ce552.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/plasma-text-effects-online-71.html", ['' + _0xeec000]).then(async _0x14c1a5 => {
          const _0x425ecc = {
            quoted: _0x1d0be0
          };
          await _0x14ae18.sendMessage(_0x1e75bf, {
            'image': await getBuffer(_0x14c1a5.imageUrl),
            'caption': config.FOOTER
          }, _0x425ecc);
          const _0x7a9d19 = {
            text: '✔',
            key: _0x1d0be0.key
          };
          const _0x5d675c = {
            react: _0x7a9d19
          };
          await _0x14ae18.sendMessage(_0x1e75bf, _0x5d675c);
        });
      } catch (_0x418ad6) {
        _0x24b55d(errt);
        _0xd019b7(_0x418ad6);
      }
    });
    const _0x5466b7 = {
      pattern: "1917",
      filename: __filename
    };
    cmd(_0x5466b7, async (_0x33e338, _0x5803c1, _0x1bb476, {
      from: _0x5ea3ad,
      l: _0x28afa4,
      quoted: _0x1e3b9b,
      body: _0x499836,
      isCmd: _0x4c8075,
      command: _0x39d137,
      args: _0x31f231,
      q: _0x273683,
      isGroup: _0x59674a,
      sender: _0x5a8e76,
      senderNumber: _0x5742c8,
      botNumber2: _0x511266,
      botNumber: _0x78feba,
      pushname: _0xf341f4,
      isMe: _0x2af24b,
      isOwner: _0x5588ed,
      groupMetadata: _0xa981e6,
      groupName: _0x15e0b5,
      participants: _0x35259c,
      groupAdmins: _0x466f87,
      isBotAdmins: _0x24da27,
      isAdmins: _0x3af375,
      reply: _0x527d44
    }) => {
      try {
        const _0xdd7eee = {
          text: '🎆',
          key: _0x5803c1.key
        };
        const _0x55bffc = {
          react: _0xdd7eee
        };
        await _0x33e338.sendMessage(_0x5ea3ad, _0x55bffc);
        let _0x406a88 = _0x273683.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/1917-style-text-effect-523.html", ['' + _0x406a88]).then(async _0x58e436 => {
          const _0x40542d = {
            quoted: _0x5803c1
          };
          await _0x33e338.sendMessage(_0x5ea3ad, {
            'image': await getBuffer(_0x58e436.imageUrl),
            'caption': config.FOOTER
          }, _0x40542d);
          const _0x30dcc1 = {
            text: '✔',
            key: _0x5803c1.key
          };
          const _0x3ace0f = {
            react: _0x30dcc1
          };
          await _0x33e338.sendMessage(_0x5ea3ad, _0x3ace0f);
        });
      } catch (_0x1ca117) {
        _0x527d44(errt);
        _0x28afa4(_0x1ca117);
      }
    });
    const _0x306163 = {
      pattern: "moderngold",
      filename: __filename
    };
    cmd(_0x306163, async (_0x469b43, _0x1f46e9, _0x1c1d74, {
      from: _0x570e3d,
      l: _0x2f9df9,
      quoted: _0x4848d0,
      body: _0x517d14,
      isCmd: _0x2e924c,
      command: _0x21eb8c,
      args: _0x56d1c0,
      q: _0x3ca5a9,
      isGroup: _0x567bd1,
      sender: _0x2e10fa,
      senderNumber: _0x7e3c64,
      botNumber2: _0x245167,
      botNumber: _0x87c1d,
      pushname: _0x5f53d7,
      isMe: _0x3c2beb,
      isOwner: _0x118c7f,
      groupMetadata: _0x39fdcf,
      groupName: _0x22ef7b,
      participants: _0x4d193a,
      groupAdmins: _0x3d08ee,
      isBotAdmins: _0x4b4129,
      isAdmins: _0x25cd95,
      reply: _0x254b63
    }) => {
      try {
        const _0x540d51 = {
          text: '🎆',
          key: _0x1f46e9.key
        };
        const _0x3a388e = {
          react: _0x540d51
        };
        await _0x469b43.sendMessage(_0x570e3d, _0x3a388e);
        let _0x156e51 = _0x3ca5a9.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/modern-gold-157.html", ['' + _0x156e51]).then(async _0x4008fe => {
          const _0x3037f4 = {
            quoted: _0x1f46e9
          };
          await _0x469b43.sendMessage(_0x570e3d, {
            'image': await getBuffer(_0x4008fe.imageUrl),
            'caption': config.FOOTER
          }, _0x3037f4);
          const _0x7aaebb = {
            text: '✔',
            key: _0x1f46e9.key
          };
          const _0x484e73 = {
            react: _0x7aaebb
          };
          await _0x469b43.sendMessage(_0x570e3d, _0x484e73);
        });
      } catch (_0x603db1) {
        _0x254b63(errt);
        _0x2f9df9(_0x603db1);
      }
    });
    const _0x4a3d3b = {
      pattern: "metal",
      filename: __filename
    };
    cmd(_0x4a3d3b, async (_0x2f0df4, _0x5e3da0, _0x477524, {
      from: _0x3f0808,
      l: _0x5c3628,
      quoted: _0x5d4653,
      body: _0x388a19,
      isCmd: _0x3dc4aa,
      command: _0x2195d8,
      args: _0x5083a8,
      q: _0xba0926,
      isGroup: _0x110c53,
      sender: _0x47dd58,
      senderNumber: _0x37445b,
      botNumber2: _0x21a527,
      botNumber: _0x10c55b,
      pushname: _0x104a13,
      isMe: _0x5b4f80,
      isOwner: _0x81aa1a,
      groupMetadata: _0xe8a137,
      groupName: _0x4336d6,
      participants: _0x4d9da3,
      groupAdmins: _0x37bc31,
      isBotAdmins: _0x5ac364,
      isAdmins: _0x585461,
      reply: _0x3fc0b5
    }) => {
      try {
        const _0x2d8d00 = {
          text: '🎆',
          key: _0x5e3da0.key
        };
        const _0x31680c = {
          react: _0x2d8d00
        };
        await _0x2f0df4.sendMessage(_0x3f0808, _0x31680c);
        let _0x364fad = _0xba0926.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/metal-logo-online-108.html", ['' + _0x364fad]).then(async _0x3e5ed7 => {
          const _0x56cd04 = {
            quoted: _0x5e3da0
          };
          await _0x2f0df4.sendMessage(_0x3f0808, {
            'image': await getBuffer(_0x3e5ed7.imageUrl),
            'caption': config.FOOTER
          }, _0x56cd04);
          const _0x4b0e79 = {
            text: '✔',
            key: _0x5e3da0.key
          };
          const _0x33b248 = {
            react: _0x4b0e79
          };
          await _0x2f0df4.sendMessage(_0x3f0808, _0x33b248);
        });
      } catch (_0x3eec7b) {
        _0x3fc0b5(errt);
        _0x5c3628(_0x3eec7b);
      }
    });
    const _0x2ce2d8 = {
      pattern: "leaves",
      filename: __filename
    };
    cmd(_0x2ce2d8, async (_0x2a274d, _0x970217, _0x19ab72, {
      from: _0x26df99,
      l: _0x4351f2,
      quoted: _0x230a93,
      body: _0x4533bb,
      isCmd: _0x4da7fb,
      command: _0x95a042,
      args: _0x1da05f,
      q: _0x2af647,
      isGroup: _0x4fb05d,
      sender: _0x862fe7,
      senderNumber: _0x1fc577,
      botNumber2: _0x310e6a,
      botNumber: _0x223780,
      pushname: _0x566490,
      isMe: _0x5eda0e,
      isOwner: _0x48e7d0,
      groupMetadata: _0x36a3ba,
      groupName: _0x27f013,
      participants: _0x2dde47,
      groupAdmins: _0x3d0465,
      isBotAdmins: _0x66e270,
      isAdmins: _0x670275,
      reply: _0x44b094
    }) => {
      try {
        const _0x1b3a87 = {
          text: '🎆',
          key: _0x970217.key
        };
        const _0x3e9c13 = {
          react: _0x1b3a87
        };
        await _0x2a274d.sendMessage(_0x26df99, _0x3e9c13);
        let _0x3a986e = _0x2af647.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/write-letters-on-the-leaves-248.html", ['' + _0x3a986e]).then(async _0x572a88 => {
          const _0x5f3049 = {
            quoted: _0x970217
          };
          await _0x2a274d.sendMessage(_0x26df99, {
            'image': await getBuffer(_0x572a88.imageUrl),
            'caption': config.FOOTER
          }, _0x5f3049);
          const _0x587eda = {
            text: '✔',
            key: _0x970217.key
          };
          const _0x3c9564 = {
            react: _0x587eda
          };
          await _0x2a274d.sendMessage(_0x26df99, _0x3c9564);
        });
      } catch (_0x543904) {
        _0x44b094(errt);
        _0x4351f2(_0x543904);
      }
    });
    const _0x2717df = {
      pattern: "marvel",
      filename: __filename
    };
    cmd(_0x2717df, async (_0x5d4366, _0x3fb769, _0x4f7335, {
      from: _0x1297fd,
      l: _0x43ba3e,
      quoted: _0x3c86d9,
      body: _0xaf2f56,
      isCmd: _0x36ab43,
      command: _0x25a14d,
      args: _0x579443,
      q: _0x1f126b,
      isGroup: _0x11c40f,
      sender: _0x2eca9d,
      senderNumber: _0x10cf2e,
      botNumber2: _0xd8687f,
      botNumber: _0x281298,
      pushname: _0x3cb456,
      isMe: _0x4c1121,
      isOwner: _0x425bbc,
      groupMetadata: _0x57b9f7,
      groupName: _0x30c483,
      participants: _0x583aae,
      groupAdmins: _0x28266b,
      isBotAdmins: _0x76fda5,
      isAdmins: _0x1753ec,
      reply: _0x4f5d4b
    }) => {
      try {
        const _0x721d0d = {
          text: '🎆',
          key: _0x3fb769.key
        };
        const _0xb1186 = {
          react: _0x721d0d
        };
        await _0x5d4366.sendMessage(_0x1297fd, _0xb1186);
        let _0x49718f = _0x1f126b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-marvel-style-logo-419.html", ['' + _0x49718f]).then(async _0x435504 => {
          const _0x244900 = {
            quoted: _0x3fb769
          };
          await _0x5d4366.sendMessage(_0x1297fd, {
            'image': await getBuffer(_0x435504.imageUrl),
            'caption': config.FOOTER
          }, _0x244900);
          const _0x491e80 = {
            text: '✔',
            key: _0x3fb769.key
          };
          const _0x1b4c0e = {
            react: _0x491e80
          };
          await _0x5d4366.sendMessage(_0x1297fd, _0x1b4c0e);
        });
      } catch (_0xd226a4) {
        _0x4f5d4b(errt);
        _0x43ba3e(_0xd226a4);
      }
    });
    const _0x4eda97 = {
      pattern: "mountain",
      filename: __filename
    };
    cmd(_0x4eda97, async (_0xf21b4e, _0x151c69, _0x1fd117, {
      from: _0x5c0896,
      l: _0x20c1f5,
      quoted: _0x13252f,
      body: _0x380692,
      isCmd: _0x558663,
      command: _0x3a9600,
      args: _0x28826f,
      q: _0x127c01,
      isGroup: _0x4e1330,
      sender: _0x173caf,
      senderNumber: _0x38eafb,
      botNumber2: _0x232d00,
      botNumber: _0x274128,
      pushname: _0x341c64,
      isMe: _0x303678,
      isOwner: _0x40377b,
      groupMetadata: _0x1c872e,
      groupName: _0x21eb58,
      participants: _0x495755,
      groupAdmins: _0x212bbb,
      isBotAdmins: _0x14852f,
      isAdmins: _0x40368d,
      reply: _0x14f815
    }) => {
      try {
        const _0x3faa14 = {
          text: '🎆',
          key: _0x151c69.key
        };
        const _0x3eb0bf = {
          react: _0x3faa14
        };
        await _0xf21b4e.sendMessage(_0x5c0896, _0x3eb0bf);
        let _0x232686 = _0x127c01.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/triangle-mountain-logo-black-white-566.html", ['' + _0x232686]).then(async _0x25b493 => {
          const _0x820ea5 = {
            quoted: _0x151c69
          };
          await _0xf21b4e.sendMessage(_0x5c0896, {
            'image': await getBuffer(_0x25b493.imageUrl),
            'caption': config.FOOTER
          }, _0x820ea5);
          const _0x404dc6 = {
            text: '✔',
            key: _0x151c69.key
          };
          const _0x27e48d = {
            react: _0x404dc6
          };
          await _0xf21b4e.sendMessage(_0x5c0896, _0x27e48d);
        });
      } catch (_0x58e68e) {
        _0x14f815(errt);
        _0x20c1f5(_0x58e68e);
      }
    });
    const _0x42a5e3 = {
      pattern: "3drubystone",
      filename: __filename
    };
    cmd(_0x42a5e3, async (_0x12dded, _0xfcd2db, _0x3a8782, {
      from: _0x3fff69,
      l: _0x2cdac7,
      quoted: _0x42144f,
      body: _0x2da0cc,
      isCmd: _0x5a7c7a,
      command: _0x5c1581,
      args: _0x5ef55f,
      q: _0x279311,
      isGroup: _0x1f43c2,
      sender: _0x5683c3,
      senderNumber: _0x381a95,
      botNumber2: _0x260254,
      botNumber: _0x8b4ef6,
      pushname: _0x18ecbc,
      isMe: _0x1e08ac,
      isOwner: _0xd106d7,
      groupMetadata: _0x12e49e,
      groupName: _0x7c9810,
      participants: _0x4942ba,
      groupAdmins: _0x573b79,
      isBotAdmins: _0x501520,
      isAdmins: _0x515ab6,
      reply: _0x2c1a7e
    }) => {
      try {
        const _0x5211e9 = {
          text: '🎆',
          key: _0xfcd2db.key
        };
        const _0x32c8d5 = {
          react: _0x5211e9
        };
        await _0x12dded.sendMessage(_0x3fff69, _0x32c8d5);
        let _0x59d51e = _0x279311.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/3d-ruby-stone-text-281.html", ['' + _0x59d51e]).then(async _0x2e9e57 => {
          const _0x5b96d1 = {
            quoted: _0xfcd2db
          };
          await _0x12dded.sendMessage(_0x3fff69, {
            'image': await getBuffer(_0x2e9e57.imageUrl),
            'caption': config.FOOTER
          }, _0x5b96d1);
          const _0xe75948 = {
            text: '✔',
            key: _0xfcd2db.key
          };
          const _0x2dcbc2 = {
            react: _0xe75948
          };
          await _0x12dded.sendMessage(_0x3fff69, _0x2dcbc2);
        });
      } catch (_0x36be1a) {
        _0x2c1a7e(errt);
        _0x2cdac7(_0x36be1a);
      }
    });
    const _0x4c5613 = {
      pattern: "purpletext",
      filename: __filename
    };
    cmd(_0x4c5613, async (_0x3e6d10, _0x6600ad, _0x21f955, {
      from: _0x3b25fa,
      l: _0x482f65,
      quoted: _0x42ddcb,
      body: _0x525bb2,
      isCmd: _0x5cbcd7,
      command: _0x549189,
      args: _0x241690,
      q: _0x52de8b,
      isGroup: _0x49ff03,
      sender: _0x2ced72,
      senderNumber: _0x350ec3,
      botNumber2: _0x433b5d,
      botNumber: _0x35a2c4,
      pushname: _0x5c6848,
      isMe: _0xe0441,
      isOwner: _0x530101,
      groupMetadata: _0x35ba16,
      groupName: _0xd9c81,
      participants: _0x5319d7,
      groupAdmins: _0x1cd036,
      isBotAdmins: _0x5eb2a6,
      isAdmins: _0xaa94c7,
      reply: _0x73d336
    }) => {
      try {
        const _0x49904 = {
          text: '🎆',
          key: _0x6600ad.key
        };
        const _0x49888c = {
          react: _0x49904
        };
        await _0x3e6d10.sendMessage(_0x3b25fa, _0x49888c);
        let _0x4de4e1 = _0x52de8b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/purple-text-effect-online-100.html", ['' + _0x4de4e1]).then(async _0x5a61e0 => {
          const _0x35a84f = {
            quoted: _0x6600ad
          };
          await _0x3e6d10.sendMessage(_0x3b25fa, {
            'image': await getBuffer(_0x5a61e0.imageUrl),
            'caption': config.FOOTER
          }, _0x35a84f);
          const _0x5918d1 = {
            text: '✔',
            key: _0x6600ad.key
          };
          const _0x221a70 = {
            react: _0x5918d1
          };
          await _0x3e6d10.sendMessage(_0x3b25fa, _0x221a70);
        });
      } catch (_0xac5a28) {
        _0x73d336(errt);
        _0x482f65(_0xac5a28);
      }
    });
    const _0x40881e = {
      pattern: "watercolor",
      filename: __filename
    };
    cmd(_0x40881e, async (_0x352e20, _0xa19ab1, _0x4e51d0, {
      from: _0x1bac2e,
      l: _0x54889f,
      quoted: _0xb9d8df,
      body: _0x1d0f74,
      isCmd: _0x1aac36,
      command: _0x4e6977,
      args: _0x20385b,
      q: _0x58de3d,
      isGroup: _0x1f7de1,
      sender: _0x40b6a1,
      senderNumber: _0x55c0d5,
      botNumber2: _0x5962b2,
      botNumber: _0x4d2846,
      pushname: _0x25251e,
      isMe: _0x42678b,
      isOwner: _0x2a2e76,
      groupMetadata: _0x1110c4,
      groupName: _0x2dc04,
      participants: _0x41d86d,
      groupAdmins: _0xd03bd4,
      isBotAdmins: _0x2abf59,
      isAdmins: _0x251582,
      reply: _0x4c6d7b
    }) => {
      try {
        const _0x29690d = {
          text: '🎆',
          key: _0xa19ab1.key
        };
        const _0x1a85d1 = {
          react: _0x29690d
        };
        await _0x352e20.sendMessage(_0x1bac2e, _0x1a85d1);
        let _0x125bbe = _0x58de3d.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html", ['' + _0x125bbe]).then(async _0x5a13e2 => {
          const _0x1a8eac = {
            quoted: _0xa19ab1
          };
          await _0x352e20.sendMessage(_0x1bac2e, {
            'image': await getBuffer(_0x5a13e2.imageUrl),
            'caption': config.FOOTER
          }, _0x1a8eac);
          const _0x448d5f = {
            text: '✔',
            key: _0xa19ab1.key
          };
          const _0x2f1b46 = {
            react: _0x448d5f
          };
          await _0x352e20.sendMessage(_0x1bac2e, _0x2f1b46);
        });
      } catch (_0x3cba21) {
        _0x4c6d7b(errt);
        _0x54889f(_0x3cba21);
      }
    });
    const _0x1ab3aa = {
      pattern: "neonlight",
      filename: __filename
    };
    cmd(_0x1ab3aa, async (_0x293724, _0x7d92ec, _0x11cec4, {
      from: _0x1e79fa,
      l: _0x9a81fd,
      quoted: _0x500eb3,
      body: _0x4f3aa9,
      isCmd: _0x4dc858,
      command: _0x35a94b,
      args: _0x2ddc7a,
      q: _0x1776d2,
      isGroup: _0x3d72c6,
      sender: _0x1204ac,
      senderNumber: _0x310011,
      botNumber2: _0x101cf0,
      botNumber: _0x2c1bd5,
      pushname: _0x5ae5d0,
      isMe: _0x3be886,
      isOwner: _0x42c314,
      groupMetadata: _0x173021,
      groupName: _0x37ef51,
      participants: _0x4ba7b9,
      groupAdmins: _0x15dbdc,
      isBotAdmins: _0x1c4cb3,
      isAdmins: _0x1f7cf0,
      reply: _0x4c0099
    }) => {
      try {
        const _0x4f892f = {
          text: '🎆',
          key: _0x7d92ec.key
        };
        const _0x5aee87 = {
          react: _0x4f892f
        };
        await _0x293724.sendMessage(_0x1e79fa, _0x5aee87);
        let _0x4734ac = _0x1776d2.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html", ['' + _0x4734ac]).then(async _0x11b8cb => {
          const _0x1c7aaa = {
            quoted: _0x7d92ec
          };
          await _0x293724.sendMessage(_0x1e79fa, {
            'image': await getBuffer(_0x11b8cb.imageUrl),
            'caption': config.FOOTER
          }, _0x1c7aaa);
          const _0xd83258 = {
            text: '✔',
            key: _0x7d92ec.key
          };
          const _0x1b330f = {
            react: _0xd83258
          };
          await _0x293724.sendMessage(_0x1e79fa, _0x1b330f);
        });
      } catch (_0x37de4b) {
        _0x4c0099(errt);
        _0x9a81fd(_0x37de4b);
      }
    });
    const _0x2ac2c4 = {
      pattern: "goldtext",
      filename: __filename
    };
    cmd(_0x2ac2c4, async (_0xd3323a, _0x4a4bff, _0x543a64, {
      from: _0x2b457c,
      l: _0xe6eb26,
      quoted: _0x33e7af,
      body: _0x4e3537,
      isCmd: _0x2c39d8,
      command: _0x275db7,
      args: _0x440cec,
      q: _0x5c8f51,
      isGroup: _0x5e356f,
      sender: _0x37dd7a,
      senderNumber: _0x251bc4,
      botNumber2: _0x52816f,
      botNumber: _0x2cef81,
      pushname: _0x224fcd,
      isMe: _0x3e87c5,
      isOwner: _0x212ffd,
      groupMetadata: _0x487361,
      groupName: _0x54fe18,
      participants: _0x238ba1,
      groupAdmins: _0x4336d2,
      isBotAdmins: _0x485f03,
      isAdmins: _0xda9bed,
      reply: _0x4449dc
    }) => {
      try {
        const _0x30e9fc = {
          text: '🎆',
          key: _0x4a4bff.key
        };
        const _0x26509c = {
          react: _0x30e9fc
        };
        await _0xd3323a.sendMessage(_0x2b457c, _0x26509c);
        let _0x2575e6 = _0x5c8f51.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/beautiful-gold-text-effect-122.html", ['' + _0x2575e6]).then(async _0x10e33c => {
          const _0x40d24b = {
            quoted: _0x4a4bff
          };
          await _0xd3323a.sendMessage(_0x2b457c, {
            'image': await getBuffer(_0x10e33c.imageUrl),
            'caption': config.FOOTER
          }, _0x40d24b);
          const _0x4ed423 = {
            text: '✔',
            key: _0x4a4bff.key
          };
          const _0x274318 = {
            react: _0x4ed423
          };
          await _0xd3323a.sendMessage(_0x2b457c, _0x274318);
        });
      } catch (_0x252ca8) {
        _0x4449dc(errt);
        _0xe6eb26(_0x252ca8);
      }
    });
    const _0x5e9dff = {
      pattern: "bornpink",
      filename: __filename
    };
    cmd(_0x5e9dff, async (_0x485789, _0x2fdbfc, _0x2dcb3a, {
      from: _0xcd6866,
      l: _0x481e61,
      quoted: _0x309383,
      body: _0x4d33be,
      isCmd: _0x32299e,
      command: _0x12f35d,
      args: _0x1898de,
      q: _0xb33924,
      isGroup: _0x21b7b9,
      sender: _0x4fc4f0,
      senderNumber: _0x18d8d9,
      botNumber2: _0x536498,
      botNumber: _0x12dfcc,
      pushname: _0x37ebb3,
      isMe: _0x2a5fa2,
      isOwner: _0x3bde21,
      groupMetadata: _0x1481bd,
      groupName: _0x1dc475,
      participants: _0x387c58,
      groupAdmins: _0x4cc432,
      isBotAdmins: _0x178b40,
      isAdmins: _0x19f6ca,
      reply: _0x5c100e
    }) => {
      try {
        const _0x12628a = {
          text: '🎆',
          key: _0x2fdbfc.key
        };
        const _0x49169a = {
          react: _0x12628a
        };
        await _0x485789.sendMessage(_0xcd6866, _0x49169a);
        let _0x3a5d43 = _0xb33924.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-blackpink-s-born-pink-album-logo-online-779.html", ['' + _0x3a5d43]).then(async _0x4ae328 => {
          const _0x53aca2 = {
            quoted: _0x2fdbfc
          };
          await _0x485789.sendMessage(_0xcd6866, {
            'image': await getBuffer(_0x4ae328.imageUrl),
            'caption': config.FOOTER
          }, _0x53aca2);
          const _0x4e979d = {
            text: '✔'
          };
          _0x4e979d.key = _0x2fdbfc.key;
          const _0x38f070 = {
            react: _0x4e979d
          };
          await _0x485789.sendMessage(_0xcd6866, _0x38f070);
        });
      } catch (_0x1a998b) {
        _0x5c100e(errt);
        _0x481e61(_0x1a998b);
      }
    });
    const _0x21ad52 = {
      pattern: "bulb",
      filename: __filename
    };
    cmd(_0x21ad52, async (_0x257a28, _0x413062, _0x2a15f6, {
      from: _0x22545e,
      l: _0xe1d63,
      quoted: _0x5574a4,
      body: _0xc43e4e,
      isCmd: _0x97584e,
      command: _0x266598,
      args: _0xf71209,
      q: _0x255502,
      isGroup: _0x136769,
      sender: _0x3c08c4,
      senderNumber: _0x1e85f5,
      botNumber2: _0x1dc72f,
      botNumber: _0x16802b,
      pushname: _0x5deaaf,
      isMe: _0x55143d,
      isOwner: _0x513278,
      groupMetadata: _0x273c9a,
      groupName: _0x2c8d84,
      participants: _0x497d4b,
      groupAdmins: _0x3b6250,
      isBotAdmins: _0x33a65f,
      isAdmins: _0xac478c,
      reply: _0x3cdc02
    }) => {
      try {
        const _0x2b0878 = {
          text: '🎆',
          key: _0x413062.key
        };
        const _0x55e162 = {
          react: _0x2b0878
        };
        await _0x257a28.sendMessage(_0x22545e, _0x55e162);
        let _0x173da0 = _0x255502.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html", ['' + _0x173da0]).then(async _0x3740e8 => {
          const _0x56b7b9 = {
            quoted: _0x413062
          };
          await _0x257a28.sendMessage(_0x22545e, {
            'image': await getBuffer(_0x3740e8.imageUrl),
            'caption': config.FOOTER
          }, _0x56b7b9);
          const _0xa01070 = {
            text: '✔',
            key: _0x413062.key
          };
          const _0x3530d9 = {
            react: _0xa01070
          };
          await _0x257a28.sendMessage(_0x22545e, _0x3530d9);
        });
      } catch (_0x3f2448) {
        _0x3cdc02(errt);
        _0xe1d63(_0x3f2448);
      }
    });
    const _0x476f00 = {
      pattern: "glittergold",
      filename: __filename
    };
    cmd(_0x476f00, async (_0x3b106c, _0x3d390b, _0x22f66f, {
      from: _0x58e0c1,
      l: _0x312cfe,
      quoted: _0x113769,
      body: _0x8dcc58,
      isCmd: _0x4cac77,
      command: _0x8170cc,
      args: _0x54ffb7,
      q: _0x2df02d,
      isGroup: _0x2f2b26,
      sender: _0x1aaba8,
      senderNumber: _0x4b19e1,
      botNumber2: _0x12a34a,
      botNumber: _0xc04036,
      pushname: _0x541309,
      isMe: _0x51b76f,
      isOwner: _0x1697c3,
      groupMetadata: _0x6e2989,
      groupName: _0x34ff1c,
      participants: _0x59eadf,
      groupAdmins: _0x3ebac2,
      isBotAdmins: _0x5f4be9,
      isAdmins: _0x27e1bc,
      reply: _0x59b705
    }) => {
      try {
        const _0x3cfa9f = {
          text: '🎆',
          key: _0x3d390b.key
        };
        const _0x554575 = {
          react: _0x3cfa9f
        };
        await _0x3b106c.sendMessage(_0x58e0c1, _0x554575);
        let _0x4bc729 = _0x2df02d.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/glitter-gold-98.html", ['' + _0x4bc729]).then(async _0x36efcd => {
          const _0xa5dcc6 = {
            quoted: _0x3d390b
          };
          await _0x3b106c.sendMessage(_0x58e0c1, {
            'image': await getBuffer(_0x36efcd.imageUrl),
            'caption': config.FOOTER
          }, _0xa5dcc6);
          const _0x212868 = {
            text: '✔',
            key: _0x3d390b.key
          };
          const _0x28822c = {
            react: _0x212868
          };
          await _0x3b106c.sendMessage(_0x58e0c1, _0x28822c);
        });
      } catch (_0x3d0422) {
        _0x59b705(errt);
        _0x312cfe(_0x3d0422);
      }
    });
    const _0x1ab9db = {
      pattern: "airballoon",
      filename: __filename
    };
    cmd(_0x1ab9db, async (_0x3acee7, _0x52ffe2, _0x58ef1, {
      from: _0x3dd8be,
      l: _0x2646e6,
      quoted: _0x4f2acd,
      body: _0x3ce8be,
      isCmd: _0xb82cff,
      command: _0x4ff27a,
      args: _0x129eb0,
      q: _0x3a76ae,
      isGroup: _0x18546f,
      sender: _0x11df3f,
      senderNumber: _0x14e041,
      botNumber2: _0x567c93,
      botNumber: _0x5d1743,
      pushname: _0x898447,
      isMe: _0x5e1b89,
      isOwner: _0x56cdbd,
      groupMetadata: _0x47579d,
      groupName: _0x164101,
      participants: _0x5a907e,
      groupAdmins: _0x57d34d,
      isBotAdmins: _0x362290,
      isAdmins: _0x45fdee,
      reply: _0x3bf439
    }) => {
      try {
        const _0x35d31c = {
          text: '🎆',
          key: _0x52ffe2.key
        };
        const _0xa2bc87 = {
          react: _0x35d31c
        };
        await _0x3acee7.sendMessage(_0x3dd8be, _0xa2bc87);
        let _0x45d0ae = _0x3a76ae.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html", ['' + _0x45d0ae]).then(async _0x793007 => {
          const _0x53d487 = {
            quoted: _0x52ffe2
          };
          await _0x3acee7.sendMessage(_0x3dd8be, {
            'image': await getBuffer(_0x793007.imageUrl),
            'caption': config.FOOTER
          }, _0x53d487);
          const _0x9e2785 = {
            text: '✔',
            key: _0x52ffe2.key
          };
          const _0x31e0bd = {
            react: _0x9e2785
          };
          await _0x3acee7.sendMessage(_0x3dd8be, _0x31e0bd);
        });
      } catch (_0x5c65d2) {
        _0x3bf439(errt);
        _0x2646e6(_0x5c65d2);
      }
    });
    const _0x573d81 = {
      pattern: "comic",
      filename: __filename
    };
    cmd(_0x573d81, async (_0x329273, _0x202e28, _0x31999a, {
      from: _0x2e05fe,
      l: _0x18b841,
      quoted: _0x1f9207,
      body: _0x214819,
      isCmd: _0x19d071,
      command: _0x4e173b,
      args: _0x5c271e,
      q: _0x51507d,
      isGroup: _0x571adf,
      sender: _0x17506b,
      senderNumber: _0x122785,
      botNumber2: _0x40ab10,
      botNumber: _0xcd6837,
      pushname: _0x55a7e9,
      isMe: _0x314c90,
      isOwner: _0x35ea05,
      groupMetadata: _0x22eb8a,
      groupName: _0xa2caca,
      participants: _0x2f81cf,
      groupAdmins: _0x1a38d3,
      isBotAdmins: _0x5af42b,
      isAdmins: _0x50f1b3,
      reply: _0x1b09e8
    }) => {
      try {
        const _0x1638dc = {
          text: '🎆',
          key: _0x202e28.key
        };
        const _0x35ac57 = {
          react: _0x1638dc
        };
        await _0x329273.sendMessage(_0x2e05fe, _0x35ac57);
        let _0x26d970 = _0x51507d.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html", ['' + _0x26d970]).then(async _0x202659 => {
          const _0x5a7772 = {
            quoted: _0x202e28
          };
          await _0x329273.sendMessage(_0x2e05fe, {
            'image': await getBuffer(_0x202659.imageUrl),
            'caption': config.FOOTER
          }, _0x5a7772);
          const _0x11795f = {
            text: '✔',
            key: _0x202e28.key
          };
          const _0x1370b9 = {
            react: _0x11795f
          };
          await _0x329273.sendMessage(_0x2e05fe, _0x1370b9);
        });
      } catch (_0xbc9863) {
        _0x1b09e8(errt);
        _0x18b841(_0xbc9863);
      }
    });
    const _0x34ab85 = {
      pattern: "zombie3d",
      filename: __filename
    };
    cmd(_0x34ab85, async (_0x4b6330, _0x4c1c9d, _0x4bacc9, {
      from: _0x2cc713,
      l: _0x12ed6d,
      quoted: _0x2963be,
      body: _0x3889d9,
      isCmd: _0x288a56,
      command: _0x36b7c1,
      args: _0x5a1fe1,
      q: _0x208e49,
      isGroup: _0x18a688,
      sender: _0x4aa2b0,
      senderNumber: _0x9fde9a,
      botNumber2: _0x552c58,
      botNumber: _0x5ff5a8,
      pushname: _0x5422c0,
      isMe: _0x2e205e,
      isOwner: _0xaa0be9,
      groupMetadata: _0x5c668e,
      groupName: _0x1f3c45,
      participants: _0x358cd0,
      groupAdmins: _0x690727,
      isBotAdmins: _0x3b6ad4,
      isAdmins: _0x5e4c45,
      reply: _0xb49643
    }) => {
      try {
        const _0x20ad30 = {
          text: '🎆',
          key: _0x4c1c9d.key
        };
        const _0xccfb3a = {
          react: _0x20ad30
        };
        await _0x4b6330.sendMessage(_0x2cc713, _0xccfb3a);
        let _0x1e9a4c = _0x208e49.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/zombie-3d-text-effect-143.html", ['' + _0x1e9a4c]).then(async _0x22f9c5 => {
          const _0x2ad60d = {
            quoted: _0x4c1c9d
          };
          await _0x4b6330.sendMessage(_0x2cc713, {
            'image': await getBuffer(_0x22f9c5.imageUrl),
            'caption': config.FOOTER
          }, _0x2ad60d);
          const _0x7bfb37 = {
            text: '✔'
          };
          _0x7bfb37.key = _0x4c1c9d.key;
          const _0x583fc5 = {
            react: _0x7bfb37
          };
          await _0x4b6330.sendMessage(_0x2cc713, _0x583fc5);
        });
      } catch (_0x35e6e3) {
        _0xb49643(errt);
        _0x12ed6d(_0x35e6e3);
      }
    });
    const _0xa5b0f9 = {
      pattern: "blackpink",
      filename: __filename
    };
    cmd(_0xa5b0f9, async (_0x538dbb, _0x8db701, _0x2ed88b, {
      from: _0xabc43,
      l: _0x3f3e0d,
      quoted: _0x5ee3a5,
      body: _0x29d3d5,
      isCmd: _0x108c8f,
      command: _0x11cd3b,
      args: _0x5a6351,
      q: _0x37fec3,
      isGroup: _0x39c159,
      sender: _0x1ca566,
      senderNumber: _0x123919,
      botNumber2: _0x16b998,
      botNumber: _0x26c02d,
      pushname: _0x5345d6,
      isMe: _0x7fb662,
      isOwner: _0x2e2044,
      groupMetadata: _0x4e2d2d,
      groupName: _0x1f8003,
      participants: _0x51fc5b,
      groupAdmins: _0x1408b,
      isBotAdmins: _0x1628bd,
      isAdmins: _0x45a4f3,
      reply: _0xa785a
    }) => {
      try {
        const _0x103cc8 = {
          text: '🎆',
          key: _0x8db701.key
        };
        const _0x230c48 = {
          react: _0x103cc8
        };
        await _0x538dbb.sendMessage(_0xabc43, _0x230c48);
        let _0xa568d3 = _0x37fec3.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html", ['' + _0xa568d3]).then(async _0x23f87d => {
          const _0x3f394d = {
            quoted: _0x8db701
          };
          await _0x538dbb.sendMessage(_0xabc43, {
            'image': await getBuffer(_0x23f87d.imageUrl),
            'caption': config.FOOTER
          }, _0x3f394d);
          const _0x49f962 = {
            text: '✔',
            key: _0x8db701.key
          };
          const _0x16e08b = {
            react: _0x49f962
          };
          await _0x538dbb.sendMessage(_0xabc43, _0x16e08b);
        });
      } catch (_0x29ea14) {
        _0xa785a(errt);
        _0x3f3e0d(_0x29ea14);
      }
    });
    const _0xaeca5c = {
      pattern: "deadpool",
      filename: __filename
    };
    cmd(_0xaeca5c, async (_0x3e83a7, _0x20983e, _0x4a7447, {
      from: _0x3c0a52,
      l: _0x1384ab,
      quoted: _0x1e0097,
      body: _0x243890,
      isCmd: _0x28bf49,
      command: _0x210750,
      args: _0x843d4e,
      q: _0xa8e47b,
      isGroup: _0x74f160,
      sender: _0x13ac05,
      senderNumber: _0x2c3dde,
      botNumber2: _0x37d1d2,
      botNumber: _0x5d77d4,
      pushname: _0x4ddeb0,
      isMe: _0x4f053f,
      isOwner: _0x3e2637,
      groupMetadata: _0x37d750,
      groupName: _0x262f04,
      participants: _0x4120f3,
      groupAdmins: _0x526946,
      isBotAdmins: _0x55c014,
      isAdmins: _0x1b475f,
      reply: _0x307858
    }) => {
      try {
        const _0x89e2c6 = {
          text: '🎆',
          key: _0x20983e.key
        };
        const _0x4091fe = {
          react: _0x89e2c6
        };
        await _0x3e83a7.sendMessage(_0x3c0a52, _0x4091fe);
        let _0x1d0fa1 = _0xa8e47b.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html", ['' + _0x1d0fa1]).then(async _0x9f1e97 => {
          const _0x58c899 = {
            quoted: _0x20983e
          };
          await _0x3e83a7.sendMessage(_0x3c0a52, {
            'image': await getBuffer(_0x9f1e97.imageUrl),
            'caption': config.FOOTER
          }, _0x58c899);
          const _0x4f3ea4 = {
            text: '✔'
          };
          _0x4f3ea4.key = _0x20983e.key;
          const _0x4cd83a = {
            react: _0x4f3ea4
          };
          await _0x3e83a7.sendMessage(_0x3c0a52, _0x4cd83a);
        });
      } catch (_0x50630b) {
        _0x307858(errt);
        _0x1384ab(_0x50630b);
      }
    });
    const _0x42f419 = {
      pattern: "wolf",
      filename: __filename
    };
    cmd(_0x42f419, async (_0xfa579e, _0xf0de62, _0x451d85, {
      from: _0x1396b1,
      l: _0x41a1a4,
      quoted: _0x19a657,
      body: _0xd5daa5,
      isCmd: _0x597095,
      command: _0x300c1f,
      args: _0x58938c,
      q: _0x144a2f,
      isGroup: _0x38f91c,
      sender: _0x320bf5,
      senderNumber: _0x366233,
      botNumber2: _0xd9c440,
      botNumber: _0x3886e8,
      pushname: _0x1ab871,
      isMe: _0x3bc99b,
      isOwner: _0x4037a7,
      groupMetadata: _0xde1bc4,
      groupName: _0x4a0eea,
      participants: _0x287056,
      groupAdmins: _0x4aed7a,
      isBotAdmins: _0x3357ea,
      isAdmins: _0x404c2f,
      reply: _0x4bf097
    }) => {
      try {
        const _0x3643fc = {
          text: '🎆',
          key: _0xf0de62.key
        };
        const _0x24816c = {
          react: _0x3643fc
        };
        await _0xfa579e.sendMessage(_0x1396b1, _0x24816c);
        let _0x2fad24 = _0x144a2f.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-wolf-galaxy-online-366.html", ['' + _0x2fad24]).then(async _0x32eca6 => {
          const _0x1e8faa = {
            quoted: _0xf0de62
          };
          await _0xfa579e.sendMessage(_0x1396b1, {
            'image': await getBuffer(_0x32eca6.imageUrl),
            'caption': config.FOOTER
          }, _0x1e8faa);
          const _0x5617b8 = {
            text: '✔',
            key: _0xf0de62.key
          };
          const _0x3c5d37 = {
            react: _0x5617b8
          };
          await _0xfa579e.sendMessage(_0x1396b1, _0x3c5d37);
        });
      } catch (_0x5216b2) {
        _0x4bf097(errt);
        _0x41a1a4(_0x5216b2);
      }
    });
    const _0x283692 = {
      pattern: "3dwooden",
      filename: __filename
    };
    cmd(_0x283692, async (_0x552eae, _0xadfd45, _0x2a1ace, {
      from: _0x4a1d17,
      l: _0x4d918e,
      quoted: _0x29ef4c,
      body: _0x2d9bc9,
      isCmd: _0x525718,
      command: _0x5779e8,
      args: _0x3e8191,
      q: _0x47a5cc,
      isGroup: _0x13078a,
      sender: _0x4f0acb,
      senderNumber: _0x25ed86,
      botNumber2: _0xf515b8,
      botNumber: _0x612de9,
      pushname: _0x5b2c11,
      isMe: _0x1e5615,
      isOwner: _0x1e08c1,
      groupMetadata: _0x81a80a,
      groupName: _0x518f6f,
      participants: _0x5467ab,
      groupAdmins: _0x487e5d,
      isBotAdmins: _0x13f07e,
      isAdmins: _0x23d574,
      reply: _0x58541b
    }) => {
      try {
        const _0x350d5e = {
          text: '🎆',
          key: _0xadfd45.key
        };
        const _0x4754d6 = {
          react: _0x350d5e
        };
        await _0x552eae.sendMessage(_0x4a1d17, _0x4754d6);
        let _0x2b9f90 = _0x47a5cc.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/logo-viettel-156.html", ['' + _0x2b9f90]).then(async _0x330c90 => {
          const _0x409e69 = {
            quoted: _0xadfd45
          };
          await _0x552eae.sendMessage(_0x4a1d17, {
            'image': await getBuffer(_0x330c90.imageUrl),
            'caption': config.FOOTER
          }, _0x409e69);
          const _0x2a2ce7 = {
            text: '✔',
            key: _0xadfd45.key
          };
          const _0x3ebb73 = {
            react: _0x2a2ce7
          };
          await _0x552eae.sendMessage(_0x4a1d17, _0x3ebb73);
        });
      } catch (_0x184c91) {
        _0x58541b(errt);
        _0x4d918e(_0x184c91);
      }
    });
    const _0x55c9c5 = {
      pattern: "banner",
      alias: ["ytbanner", "cover", "channelbanner"],
      desc: desc2,
      category: "logo",
      use: ".banner X-BYTE+Hamza",
      filename: __filename
    };
    cmd(_0x55c9c5, async (_0x5153d2, _0x544649, _0x430fd2, {
      from: _0xa981de,
      l: _0x418ac4,
      quoted: _0x1a87d2,
      body: _0x50c1a0,
      isCmd: _0x3b3f1d,
      command: _0x7e2f58,
      args: _0x1d1c3b,
      q: _0x416efb,
      isGroup: _0x2d406d,
      sender: _0x266ea7,
      senderNumber: _0x4877fe,
      botNumber2: _0x774759,
      botNumber: _0x8d0735,
      pushname: _0x1d35eb,
      isMe: _0x2b220b,
      isOwner: _0x1177de,
      groupMetadata: _0x93871f,
      groupName: _0x340e16,
      participants: _0x2c9ca5,
      groupAdmins: _0x239ea2,
      isBotAdmins: _0x43af4d,
      isAdmins: _0x2c7946,
      reply: _0x25e104
    }) => {
      try {
        const _0x134d1b = {
          text: '🎆',
          key: _0x544649.key
        };
        const _0x145f7e = {
          react: _0x134d1b
        };
        await _0x5153d2.sendMessage(_0xa981de, _0x145f7e);
        if (!_0x416efb.includes('+')) {
          return await _0x25e104(imgmsg2);
        }
        let [_0x45516e, _0x411b88] = _0x416efb.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", ['' + _0x45516e, '' + _0x411b88]).then(async _0x567123 => {
          const _0x4031a3 = {
            quoted: _0x544649
          };
          await _0x5153d2.sendMessage(_0xa981de, {
            'image': await getBuffer(_0x567123.imageUrl),
            'caption': config.FOOTER
          }, _0x4031a3);
          const _0x2bfe9b = {
            text: '✔'
          };
          _0x2bfe9b.key = _0x544649.key;
          const _0x204294 = {
            react: _0x2bfe9b
          };
          await _0x5153d2.sendMessage(_0xa981de, _0x204294);
        });
      } catch (_0x217179) {
        _0x25e104(errt);
        _0x418ac4(_0x217179);
      }
    });
    const _0x33ca0 = {
      pattern: "banner2",
      alias: ["ytbanner2", "cover2", "channelbanner2"],
      desc: desc2,
      category: "logo",
      use: ".banner2 X-BYTE+Hamza",
      filename: __filename
    };
    cmd(_0x33ca0, async (_0x2a32c0, _0x36986d, _0xcd744f, {
      from: _0x5519ee,
      l: _0x4c101d,
      quoted: _0x28cf9c,
      body: _0x1eee38,
      isCmd: _0x471ba3,
      command: _0x3eaea8,
      args: _0x146de3,
      q: _0x3835bc,
      isGroup: _0x1d5438,
      sender: _0xd05296,
      senderNumber: _0x2f87cb,
      botNumber2: _0x1e7427,
      botNumber: _0x63d0f6,
      pushname: _0x1cbebf,
      isMe: _0x124b3f,
      isOwner: _0x424b10,
      groupMetadata: _0x3d5585,
      groupName: _0x4571f5,
      participants: _0x23979d,
      groupAdmins: _0x4bd453,
      isBotAdmins: _0x213569,
      isAdmins: _0x1593b1,
      reply: _0x437bd0
    }) => {
      try {
        const _0x332991 = {
          text: '🎆',
          key: _0x36986d.key
        };
        const _0x2b32ff = {
          react: _0x332991
        };
        await _0x2a32c0.sendMessage(_0x5519ee, _0x2b32ff);
        if (!_0x3835bc.includes('+')) {
          return await _0x437bd0(imgmsg3);
        }
        let [_0x2fe01a, _0x34f139] = _0x3835bc.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", ['' + _0x2fe01a, '' + _0x34f139]).then(async _0x1481b4 => {
          const _0x30c147 = {
            quoted: _0x36986d
          };
          await _0x2a32c0.sendMessage(_0x5519ee, {
            'image': await getBuffer(_0x1481b4.imageUrl),
            'caption': config.FOOTER
          }, _0x30c147);
          const _0x3b0643 = {
            text: '✔'
          };
          _0x3b0643.key = _0x36986d.key;
          const _0x3ec060 = {
            react: _0x3b0643
          };
          await _0x2a32c0.sendMessage(_0x5519ee, _0x3ec060);
        });
      } catch (_0x233ffd) {
        _0x437bd0(errt);
        _0x4c101d(_0x233ffd);
      }
    });
    const _0x1b30e0 = {
      pattern: "banner3",
      alias: ["ytbanner3", "cover3", "channelbanner3"],
      desc: desc2,
      category: "logo",
      use: ".banner3 X-BYTE+Hamza",
      filename: __filename
    };
    cmd(_0x1b30e0, async (_0x2d31d1, _0x27fe5e, _0x2895cd, {
      from: _0x2b2e46,
      l: _0x514748,
      quoted: _0x593c49,
      body: _0x51fdab,
      isCmd: _0x265d42,
      command: _0x15f2d3,
      args: _0x318643,
      q: _0x5b86cc,
      isGroup: _0x42ba6a,
      sender: _0x3522fb,
      senderNumber: _0x3ba767,
      botNumber2: _0x2d6989,
      botNumber: _0x96afb1,
      pushname: _0x32434a,
      isMe: _0x43f599,
      isOwner: _0x4cc040,
      groupMetadata: _0x102962,
      groupName: _0x61c686,
      participants: _0x22759d,
      groupAdmins: _0x13eb3d,
      isBotAdmins: _0xe117be,
      isAdmins: _0x136841,
      reply: _0xf61b0d
    }) => {
      try {
        const _0x30b399 = {
          text: '🎆',
          key: _0x27fe5e.key
        };
        const _0x31b7bf = {
          react: _0x30b399
        };
        await _0x2d31d1.sendMessage(_0x2b2e46, _0x31b7bf);
        if (!_0x5b86cc.includes('+')) {
          return await _0xf61b0d(imgmsg4);
        }
        let [_0x2fefaf, _0x531212] = _0x5b86cc.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html", ['' + _0x2fefaf, '' + _0x531212]).then(async _0x3d0a9f => {
          const _0x131c14 = {
            quoted: _0x27fe5e
          };
          await _0x2d31d1.sendMessage(_0x2b2e46, {
            'image': await getBuffer(_0x3d0a9f.imageUrl),
            'caption': config.FOOTER
          }, _0x131c14);
          const _0x44b397 = {
            text: '✔'
          };
          _0x44b397.key = _0x27fe5e.key;
          const _0x1e014c = {
            react: _0x44b397
          };
          await _0x2d31d1.sendMessage(_0x2b2e46, _0x1e014c);
        });
      } catch (_0x513392) {
        _0xf61b0d(errt);
        _0x514748(_0x513392);
      }
    });
    const _0x1a031d = {
      pattern: "banner4",
      alias: ["ytbanner4", "cover4", "channelbanner4"],
      desc: desc2,
      category: "logo",
      use: ".banner4 X-BYTE+Hamza",
      filename: __filename
    };
    cmd(_0x1a031d, async (_0x52c1f6, _0x58c388, _0x2d0a9e, {
      from: _0x10747e,
      l: _0x45b069,
      quoted: _0x267650,
      body: _0x5cf04e,
      isCmd: _0x44e741,
      command: _0x2ce7b8,
      args: _0x137a5d,
      q: _0x2499e1,
      isGroup: _0x1e2101,
      sender: _0x34e262,
      senderNumber: _0x1d9546,
      botNumber2: _0x439273,
      botNumber: _0x187a3b,
      pushname: _0x1d2608,
      isMe: _0x457b1c,
      isOwner: _0x699f7b,
      groupMetadata: _0x7fe6c4,
      groupName: _0x58cd02,
      participants: _0x39ec00,
      groupAdmins: _0x482955,
      isBotAdmins: _0x3d3ca3,
      isAdmins: _0xf83c73,
      reply: _0x582f77
    }) => {
      try {
        const _0x3c38db = {
          text: '🎆',
          key: _0x58c388.key
        };
        const _0x70dfc3 = {
          react: _0x3c38db
        };
        await _0x52c1f6.sendMessage(_0x10747e, _0x70dfc3);
        if (!_0x2499e1.includes('+')) {
          return await _0x582f77(imgmsg5);
        }
        let [_0xb1ac56, _0x618e45] = _0x2499e1.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html", ['' + _0xb1ac56, '' + _0x618e45]).then(async _0xb7f303 => {
          const _0x1724a6 = {
            quoted: _0x58c388
          };
          await _0x52c1f6.sendMessage(_0x10747e, {
            'image': await getBuffer(_0xb7f303.imageUrl),
            'caption': config.FOOTER
          }, _0x1724a6);
          const _0x6727ef = {
            text: '✔',
            key: _0x58c388.key
          };
          const _0x265f44 = {
            react: _0x6727ef
          };
          await _0x52c1f6.sendMessage(_0x10747e, _0x265f44);
        });
      } catch (_0x56ec45) {
        _0x582f77(errt);
        _0x45b069(_0x56ec45);
      }
    });
    const _0x648606 = {
      pattern: "banner5",
      alias: ["ytbanner5", "cover5", "channelbanner5"],
      desc: desc2,
      category: "logo",
      use: ".banner5 X-BYTE+Hamza",
      filename: __filename
    };
    cmd(_0x648606, async (_0x405bd3, _0x156e6f, _0x1a55e0, {
      from: _0x1240fe,
      l: _0xb86421,
      quoted: _0x2fb136,
      body: _0x151f16,
      isCmd: _0x4c912b,
      command: _0x36cac7,
      args: _0x202a83,
      q: _0x1fc165,
      isGroup: _0x2c4ae0,
      sender: _0x4d0a20,
      senderNumber: _0x3b09d6,
      botNumber2: _0x5cbbca,
      botNumber: _0x3d08a3,
      pushname: _0x5729e7,
      isMe: _0x99fe2c,
      isOwner: _0xf5337e,
      groupMetadata: _0x29a397,
      groupName: _0x1d4ca7,
      participants: _0x5afcd4,
      groupAdmins: _0x29df18,
      isBotAdmins: _0x5de58a,
      isAdmins: _0x18f797,
      reply: _0x2b9874
    }) => {
      try {
        const _0x3a3fb3 = {
          text: '🎆',
          key: _0x156e6f.key
        };
        const _0x21473d = {
          react: _0x3a3fb3
        };
        await _0x405bd3.sendMessage(_0x1240fe, _0x21473d);
        if (!_0x1fc165.includes('+')) {
          return await _0x2b9874(imgmsg6);
        }
        let [_0x580ebb, _0x3367d4] = _0x1fc165.split('+');
        new Maker().Ephoto360("https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html", ['' + _0x580ebb, '' + _0x3367d4]).then(async _0x4ebd13 => {
          const _0x4ff23b = {
            quoted: _0x156e6f
          };
          await _0x405bd3.sendMessage(_0x1240fe, {
            'image': await getBuffer(_0x4ebd13.imageUrl),
            'caption': config.FOOTER
          }, _0x4ff23b);
          const _0x5c9b51 = {
            text: '✔',
            key: _0x156e6f.key
          };
          const _0x4c380d = {
            react: _0x5c9b51
          };
          await _0x405bd3.sendMessage(_0x1240fe, _0x4c380d);
        });
      } catch (_0x3cf2db) {
        _0x2b9874(errt);
        _0xb86421(_0x3cf2db);
      }
    });
    const _0x3b433e = {
      pattern: "naruto",
      react: "🏜️",
      alias: ["textpro1"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".naruto",
      filename: __filename
    };
    cmd(_0x3b433e, async (_0xbd72b2, _0x584ca0, _0x67832f, {
      from: _0x1e1d31,
      l: _0xf9ccd9,
      quoted: _0x5dd17d,
      body: _0x4169de,
      isCmd: _0x4466ca,
      command: _0x194003,
      args: _0x145ee0,
      q: _0x234da7,
      isGroup: _0x148dee,
      sender: _0x1862ea,
      senderNumber: _0x110f54,
      botNumber2: _0x3d4526,
      botNumber: _0x4926d9,
      pushname: _0x81b88e,
      isMe: _0xef3b12,
      isOwner: _0x215fc7,
      groupMetadata: _0x3b7275,
      groupName: _0x4adbb5,
      participants: _0x5d2868,
      groupAdmins: _0x2b6b3c,
      isBotAdmins: _0x26c0ae,
      isCreator: _0xfc9b7f,
      isDev: _0x443cee,
      isAdmins: _0x463993,
      reply: _0x55d2d5
    }) => {
      try {
        if (!_0x234da7) {
          return _0x55d2d5("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x21b58b = await mumaker.textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", _0x234da7);
        const _0x44f9cf = {
          url: _0x21b58b.image
        };
        const _0x437e0d = {
          image: _0x44f9cf,
          caption: "\n🗾 *Link - https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0xe34a38 = {
          quoted: _0x584ca0
        };
        await _0xbd72b2.sendMessage(_0x1e1d31, _0x437e0d, _0xe34a38);
      } catch (_0x272e09) {
        _0x55d2d5("⛔ *Error !!*" + _0x272e09);
        _0xf9ccd9(_0x272e09);
      }
    });
    const _0x5089c8 = {
      pattern: "rose",
      react: "🏜️",
      alias: ["textpro2"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".rose",
      filename: __filename
    };
    cmd(_0x5089c8, async (_0x44f13e, _0x44c8fb, _0x2ac08e, {
      from: _0x20937b,
      l: _0x5a3e49,
      quoted: _0x2baa67,
      body: _0x5eb5ae,
      isCmd: _0x3f801d,
      command: _0x4eeae3,
      args: _0x29e142,
      q: _0x481d78,
      isGroup: _0x529a2a,
      sender: _0x36a712,
      senderNumber: _0x56c190,
      botNumber2: _0x16e2df,
      botNumber: _0x2d226c,
      pushname: _0x3dbc47,
      isMe: _0x4945d0,
      isOwner: _0x3fec16,
      groupMetadata: _0x4d8aa8,
      groupName: _0x3836a7,
      participants: _0x595d91,
      groupAdmins: _0x12130f,
      isBotAdmins: _0x3b5ab4,
      isCreator: _0x374e22,
      isDev: _0x483d77,
      isAdmins: _0x2313c5,
      reply: _0x550037
    }) => {
      try {
        if (!_0x481d78) {
          return _0x550037("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x248c68 = await mumaker.textpro("https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html", _0x481d78);
        const _0x332a5e = {
          url: _0x248c68.image
        };
        const _0x2740f1 = {
          image: _0x332a5e,
          caption: "\n🗾 *Link - https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x432e1a = {
          quoted: _0x44c8fb
        };
        await _0x44f13e.sendMessage(_0x20937b, _0x2740f1, _0x432e1a);
      } catch (_0x4fc054) {
        _0x550037("⛔ *Error !!*" + _0x4fc054);
        _0x5a3e49(_0x4fc054);
      }
    });
    const _0x3ce34b = {
      pattern: "cake",
      react: "🏜️",
      alias: ["textpro3"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".cake",
      filename: __filename
    };
    cmd(_0x3ce34b, async (_0x118ee3, _0x5d4af6, _0x203caf, {
      from: _0x5d6e81,
      l: _0x7e6c9b,
      quoted: _0x257526,
      body: _0x40549c,
      isCmd: _0x51b981,
      command: _0x59e14b,
      args: _0x50fe1f,
      q: _0xc5e526,
      isGroup: _0x1bcfa2,
      sender: _0x442ced,
      senderNumber: _0x30204a,
      botNumber2: _0x3c53a5,
      botNumber: _0x41be11,
      pushname: _0x484058,
      isMe: _0x48fe5b,
      isOwner: _0x3e3959,
      groupMetadata: _0x3dbd95,
      groupName: _0x303650,
      participants: _0x423274,
      groupAdmins: _0x446a2b,
      isBotAdmins: _0x21c526,
      isCreator: _0x2ba6d3,
      isDev: _0x45e44f,
      isAdmins: _0xfaa4dc,
      reply: _0x5161b9
    }) => {
      try {
        if (!_0xc5e526) {
          return _0x5161b9("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x3b7a6d = await mumaker.textpro("https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html", _0xc5e526);
        const _0x304434 = {
          url: _0x3b7a6d.image
        };
        const _0x35aadf = {
          image: _0x304434,
          caption: "\n🗾 *Link - https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x2f7e1c = {
          quoted: _0x5d4af6
        };
        await _0x118ee3.sendMessage(_0x5d6e81, _0x35aadf, _0x2f7e1c);
      } catch (_0x12f048) {
        _0x5161b9("⛔ *Error !!*" + _0x12f048);
        _0x7e6c9b(_0x12f048);
      }
    });
    const _0x1c2e88 = {
      pattern: "pokn",
      react: "🏜️",
      alias: ["textpro4"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".pokn",
      filename: __filename
    };
    cmd(_0x1c2e88, async (_0x443295, _0x5c1d9d, _0x38d6ce, {
      from: _0x5028c0,
      l: _0x150dc6,
      quoted: _0x225423,
      body: _0x5c918e,
      isCmd: _0x101130,
      command: _0x29b487,
      args: _0x45471d,
      q: _0x2543cb,
      isGroup: _0x29bc2e,
      sender: _0x2a67dd,
      senderNumber: _0xaba748,
      botNumber2: _0x289c26,
      botNumber: _0x57d3ea,
      pushname: _0x34ce5b,
      isMe: _0x460907,
      isOwner: _0x16d912,
      groupMetadata: _0x38bb63,
      groupName: _0x3073c6,
      participants: _0x536b2,
      groupAdmins: _0x5ba48a,
      isBotAdmins: _0x1a464f,
      isCreator: _0x29c721,
      isDev: _0x10d657,
      isAdmins: _0x12871d,
      reply: _0x249094
    }) => {
      try {
        if (!_0x2543cb) {
          return _0x249094("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0xa38aa8 = await mumaker.textpro("https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html", _0x2543cb);
        const _0x3b159a = {
          url: _0xa38aa8.image
        };
        const _0x616730 = {
          image: _0x3b159a,
          caption: "\n🗾 *Link - https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x23bdfa = {
          quoted: _0x5c1d9d
        };
        await _0x443295.sendMessage(_0x5028c0, _0x616730, _0x23bdfa);
      } catch (_0x5cf24a) {
        _0x249094("⛔ *Error !!*" + _0x5cf24a);
        _0x150dc6(_0x5cf24a);
      }
    });
    const _0x28e856 = {
      pattern: "liud",
      react: "🏜️",
      alias: ["textpro5"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".liud",
      filename: __filename
    };
    cmd(_0x28e856, async (_0x55503d, _0x3be27d, _0xd20c82, {
      from: _0x20b7ee,
      l: _0xe1db7b,
      quoted: _0x59dd05,
      body: _0x57b5ca,
      isCmd: _0x460f34,
      command: _0x42893c,
      args: _0xb4acab,
      q: _0x1f4ea9,
      isGroup: _0x57c105,
      sender: _0x460925,
      senderNumber: _0xf013dc,
      botNumber2: _0xbdf002,
      botNumber: _0x16fd4b,
      pushname: _0x2364d3,
      isMe: _0x6b0b62,
      isOwner: _0x273900,
      groupMetadata: _0x165a6b,
      groupName: _0x14609b,
      participants: _0x26111c,
      groupAdmins: _0x537438,
      isBotAdmins: _0x2e392a,
      isCreator: _0xb96b1f,
      isDev: _0x49628f,
      isAdmins: _0xd04d4f,
      reply: _0x46c7d3
    }) => {
      try {
        if (!_0x1f4ea9) {
          return _0x46c7d3("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x564cf6 = await mumaker.textpro("https://textpro.me/create-3d-liquid-metal-text-effect-1112.html", _0x1f4ea9);
        const _0x10e227 = {
          url: _0x564cf6.image
        };
        const _0x42368d = {
          image: _0x10e227,
          caption: "\n🗾 *Link - https://textpro.me/create-3d-liquid-metal-text-effect-1112.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x5eed63 = {
          quoted: _0x3be27d
        };
        await _0x55503d.sendMessage(_0x20b7ee, _0x42368d, _0x5eed63);
      } catch (_0x5ea250) {
        _0x46c7d3("⛔ *Error !!*" + _0x5ea250);
        _0xe1db7b(_0x5ea250);
      }
    });
    const _0x3f1ceb = {
      pattern: "rusty",
      react: "🏜️",
      alias: ["textpro6"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".rusty",
      filename: __filename
    };
    cmd(_0x3f1ceb, async (_0xaf2116, _0x28fa57, _0xcf0e5f, {
      from: _0x513f6b,
      l: _0x5d40ee,
      quoted: _0x5c9cae,
      body: _0xc2bd29,
      isCmd: _0x2b81f7,
      command: _0x300457,
      args: _0x193a15,
      q: _0x315bfe,
      isGroup: _0x53fcdd,
      sender: _0x439886,
      senderNumber: _0x5a91af,
      botNumber2: _0x48bae6,
      botNumber: _0x2f3016,
      pushname: _0x8567c2,
      isMe: _0x238a8c,
      isOwner: _0x47f27d,
      groupMetadata: _0xa609f8,
      groupName: _0x1c3199,
      participants: _0x45ef8f,
      groupAdmins: _0x163da1,
      isBotAdmins: _0x9f2899,
      isCreator: _0x11f804,
      isDev: _0x333ac2,
      isAdmins: _0x1071fc,
      reply: _0x1d3c83
    }) => {
      try {
        if (!_0x315bfe) {
          return _0x1d3c83("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x176334 = await mumaker.textpro("https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html", _0x315bfe);
        const _0x45d098 = {
          url: _0x176334.image
        };
        const _0xbf6743 = {
          image: _0x45d098,
          caption: "\n🗾 *Link - https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x59a67d = {
          quoted: _0x28fa57
        };
        await _0xaf2116.sendMessage(_0x513f6b, _0xbf6743, _0x59a67d);
      } catch (_0xd97376) {
        _0x1d3c83("⛔ *Error !!*" + _0xd97376);
        _0x5d40ee(_0xd97376);
      }
    });
    const _0xec598 = {
      pattern: "frid",
      react: "🏜️",
      alias: ["textpro7"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".frid",
      filename: __filename
    };
    cmd(_0xec598, async (_0x3a04f1, _0x3a56a3, _0x2d3cb4, {
      from: _0x534b8e,
      l: _0x49800d,
      quoted: _0x206445,
      body: _0x5591b2,
      isCmd: _0x562507,
      command: _0x3431d4,
      args: _0x4ad3f9,
      q: _0x44a339,
      isGroup: _0xaacc14,
      sender: _0x1859eb,
      senderNumber: _0x4c9b14,
      botNumber2: _0x35ee95,
      botNumber: _0x200a7a,
      pushname: _0x26c20b,
      isMe: _0x41c353,
      isOwner: _0x1ac52d,
      groupMetadata: _0xfb64fd,
      groupName: _0x2d9671,
      participants: _0x1d0152,
      groupAdmins: _0x37c85e,
      isBotAdmins: _0x599785,
      isCreator: _0x5b93ad,
      isDev: _0x41cb05,
      isAdmins: _0x321c6a,
      reply: _0x59dcff
    }) => {
      try {
        if (!_0x44a339) {
          return _0x59dcff("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x49258c = await mumaker.textpro("https://textpro.me/neon-light-style-3d-text-effect-online-1132.html", _0x44a339);
        const _0x35231b = {
          url: _0x49258c.image
        };
        const _0x1ed19c = {
          image: _0x35231b,
          caption: "\n🗾 *Link - https://textpro.me/neon-light-style-3d-text-effect-online-1132.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x1069a8 = {
          quoted: _0x3a56a3
        };
        await _0x3a04f1.sendMessage(_0x534b8e, _0x1ed19c, _0x1069a8);
      } catch (_0x417b95) {
        _0x59dcff("⛔ *Error !!*" + _0x417b95);
        _0x49800d(_0x417b95);
      }
    });
    const _0x413cea = {
      pattern: "pink",
      react: "🏜️",
      alias: ["textpro8"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".pink",
      filename: __filename
    };
    cmd(_0x413cea, async (_0x4700b2, _0x12b27f, _0x4086ae, {
      from: _0x4adb5c,
      l: _0x3f9e60,
      quoted: _0x521218,
      body: _0x2b9bc0,
      isCmd: _0x2f3afa,
      command: _0x18a3c3,
      args: _0x5a8618,
      q: _0x47cd47,
      isGroup: _0x33da78,
      sender: _0x3c9e82,
      senderNumber: _0x212477,
      botNumber2: _0x37a732,
      botNumber: _0x4445b6,
      pushname: _0x119eae,
      isMe: _0xaee26c,
      isOwner: _0x5794d9,
      groupMetadata: _0x558644,
      groupName: _0x3d2831,
      participants: _0x11dc0f,
      groupAdmins: _0x10cc9b,
      isBotAdmins: _0x574f04,
      isCreator: _0x620f66,
      isDev: _0x7607cd,
      isAdmins: _0xeb698f,
      reply: _0x15ebce
    }) => {
      try {
        if (!_0x47cd47) {
          return _0x15ebce("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x4cf40c = await mumaker.textpro("https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html", _0x47cd47);
        const _0x2295d7 = {
          url: _0x4cf40c.image
        };
        const _0x3672e4 = {
          image: _0x2295d7,
          caption: "\n🗾 *Link - https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x43077b = {
          quoted: _0x12b27f
        };
        await _0x4700b2.sendMessage(_0x4adb5c, _0x3672e4, _0x43077b);
      } catch (_0xea3f04) {
        _0x15ebce("⛔ *Error !!*" + _0xea3f04);
        _0x3f9e60(_0xea3f04);
      }
    });
    const _0x3c5841 = {
      pattern: "drag",
      react: "🏜️",
      alias: ["textpro9"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".drag",
      filename: __filename
    };
    cmd(_0x3c5841, async (_0x3b0513, _0x3e44af, _0x2fbf45, {
      from: _0x1c5036,
      l: _0x1aa2ba,
      quoted: _0x3844d9,
      body: _0x3e5d71,
      isCmd: _0x2a4e4a,
      command: _0x51b551,
      args: _0x10cbd3,
      q: _0x4e0366,
      isGroup: _0x58dea8,
      sender: _0xe3cf33,
      senderNumber: _0x5ee7b2,
      botNumber2: _0x524c82,
      botNumber: _0x4fc4d3,
      pushname: _0x3109e6,
      isMe: _0x991e48,
      isOwner: _0x3578ff,
      groupMetadata: _0x137f41,
      groupName: _0x2252be,
      participants: _0x4ee7e8,
      groupAdmins: _0x2883c5,
      isBotAdmins: _0xed3f09,
      isCreator: _0x3ac409,
      isDev: _0x561ef,
      isAdmins: _0x2a90d2,
      reply: _0x3e2b01
    }) => {
      try {
        if (!_0x4e0366) {
          return _0x3e2b01("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x20f6ad = await mumaker.textpro("https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html", _0x4e0366);
        const _0x47402c = {
          url: _0x20f6ad.image
        };
        const _0x4302ca = {
          image: _0x47402c,
          caption: "\n🗾 *Link - https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x2c1ac9 = {
          quoted: _0x3e44af
        };
        await _0x3b0513.sendMessage(_0x1c5036, _0x4302ca, _0x2c1ac9);
      } catch (_0x317ef1) {
        _0x3e2b01("⛔ *Error !!*" + _0x317ef1);
        _0x1aa2ba(_0x317ef1);
      }
    });
    const _0x4a09b4 = {
      pattern: "sumr",
      react: "🏜️",
      alias: ["textpro10"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".sumr",
      filename: __filename
    };
    cmd(_0x4a09b4, async (_0x36f884, _0x4bb668, _0x4c8b11, {
      from: _0x24e467,
      l: _0x407724,
      quoted: _0x4b6629,
      body: _0x3ae435,
      isCmd: _0x152892,
      command: _0x137566,
      args: _0x5494db,
      q: _0x484097,
      isGroup: _0x5ead0f,
      sender: _0x40c830,
      senderNumber: _0x1561d0,
      botNumber2: _0x179e0a,
      botNumber: _0x389be6,
      pushname: _0x5f2ffb,
      isMe: _0x4b61e5,
      isOwner: _0x376ef2,
      groupMetadata: _0x318498,
      groupName: _0x48deea,
      participants: _0x5b385b,
      groupAdmins: _0x5994af,
      isBotAdmins: _0x40e608,
      isCreator: _0x2959d2,
      isDev: _0x3967bc,
      isAdmins: _0x4a8368,
      reply: _0x3e0953
    }) => {
      try {
        if (!_0x484097) {
          return _0x3e0953("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x1f923b = await mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", _0x484097);
        const _0x567d8b = {
          url: _0x1f923b.image
        };
        const _0x2cc11c = {
          image: _0x567d8b,
          caption: "\n🗾 *Link - https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x3e3ec7 = {
          quoted: _0x4bb668
        };
        await _0x36f884.sendMessage(_0x24e467, _0x2cc11c, _0x3e3ec7);
      } catch (_0xc91611) {
        _0x3e0953("⛔ *Error !!*" + _0xc91611);
        _0x407724(_0xc91611);
      }
    });
    const _0x1a28d3 = {
      pattern: "cart",
      react: "🏜️",
      alias: ["textpro11"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".cart",
      filename: __filename
    };
    cmd(_0x1a28d3, async (_0x1eeb8d, _0x43997a, _0xd88548, {
      from: _0x5d165b,
      l: _0x3441df,
      quoted: _0x9917e8,
      body: _0x5ef999,
      isCmd: _0x2395f3,
      command: _0x2edc7c,
      args: _0x283dec,
      q: _0x2ec45a,
      isGroup: _0x590aac,
      sender: _0x342af4,
      senderNumber: _0x3137d3,
      botNumber2: _0x534765,
      botNumber: _0x401662,
      pushname: _0x4125e1,
      isMe: _0x3d51c1,
      isOwner: _0x338fda,
      groupMetadata: _0x1a5696,
      groupName: _0x29a014,
      participants: _0x530fb0,
      groupAdmins: _0x1f4e63,
      isBotAdmins: _0x53b250,
      isCreator: _0xe32add,
      isDev: _0x293c27,
      isAdmins: _0x112e3e,
      reply: _0x2d5f10
    }) => {
      try {
        if (!_0x2ec45a) {
          return _0x2d5f10("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x39929f = await mumaker.textpro("https://textpro.me/create-3d-cartoon-text-effect-online-1120.html", _0x2ec45a);
        const _0x12d468 = {
          url: _0x39929f.image
        };
        const _0x5ce209 = {
          image: _0x12d468,
          caption: "\n🗾 *Link - https://textpro.me/create-3d-cartoon-text-effect-online-1120.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0xce5a1b = {
          quoted: _0x43997a
        };
        await _0x1eeb8d.sendMessage(_0x5d165b, _0x5ce209, _0xce5a1b);
      } catch (_0x16ceb6) {
        _0x2d5f10("⛔ *Error !!*" + _0x16ceb6);
        _0x3441df(_0x16ceb6);
      }
    });
    const _0x3e15a3 = {
      pattern: "grun",
      react: "🏜️",
      alias: ["textpro12"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".grun",
      filename: __filename
    };
    cmd(_0x3e15a3, async (_0x478158, _0x1bf11b, _0x5423b2, {
      from: _0x2b13d3,
      l: _0x292018,
      quoted: _0x36f5ef,
      body: _0x396756,
      isCmd: _0x40b7b7,
      command: _0x4569cd,
      args: _0x17d3a9,
      q: _0x4914f1,
      isGroup: _0xf12de9,
      sender: _0x17cc29,
      senderNumber: _0x25dbc7,
      botNumber2: _0x487e73,
      botNumber: _0x2d69b0,
      pushname: _0x5ea977,
      isMe: _0x244fd1,
      isOwner: _0x51c2bb,
      groupMetadata: _0x208d7b,
      groupName: _0x891ff,
      participants: _0x4404d5,
      groupAdmins: _0x3d50f0,
      isBotAdmins: _0x12526d,
      isCreator: _0x1b9525,
      isDev: _0x1c0079,
      isAdmins: _0x2a1259,
      reply: _0x561207
    }) => {
      try {
        if (!_0x4914f1) {
          return _0x561207("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x2e02a0 = await mumaker.textpro("https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html", _0x4914f1);
        const _0x5996ea = {
          url: _0x2e02a0.image
        };
        const _0x247884 = {
          image: _0x5996ea,
          caption: "\n🗾 *Link - https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x5a598a = {
          quoted: _0x1bf11b
        };
        await _0x478158.sendMessage(_0x2b13d3, _0x247884, _0x5a598a);
      } catch (_0x5e0f53) {
        _0x561207("⛔ *Error !!*" + _0x5e0f53);
        _0x292018(_0x5e0f53);
      }
    });
    const _0x1bef61 = {
      pattern: "pain",
      react: "🏜️",
      alias: ["textpro13"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".pain",
      filename: __filename
    };
    cmd(_0x1bef61, async (_0x19f112, _0x1c76ec, _0x1646b1, {
      from: _0xe96c25,
      l: _0x24d250,
      quoted: _0x52c454,
      body: _0x106ec2,
      isCmd: _0x3484ab,
      command: _0x2df822,
      args: _0x19e9b4,
      q: _0x1f301b,
      isGroup: _0x52cbab,
      sender: _0x2373e9,
      senderNumber: _0x302e34,
      botNumber2: _0x558f72,
      botNumber: _0x59cad5,
      pushname: _0x8c8d12,
      isMe: _0x174b05,
      isOwner: _0x4682b5,
      groupMetadata: _0x53c447,
      groupName: _0x3f9f49,
      participants: _0x19af3a,
      groupAdmins: _0x2395e6,
      isBotAdmins: _0x543c84,
      isCreator: _0x4ddcd0,
      isDev: _0x2f614a,
      isAdmins: _0x4d754a,
      reply: _0x3030b7
    }) => {
      try {
        if (!_0x1f301b) {
          return _0x3030b7("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x4ed007 = await mumaker.textpro("https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html", _0x1f301b);
        const _0x286f96 = {
          url: _0x4ed007.image
        };
        const _0x545d65 = {
          image: _0x286f96,
          caption: "\n🗾 *Link - https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x2a135b = {
          quoted: _0x1c76ec
        };
        await _0x19f112.sendMessage(_0xe96c25, _0x545d65, _0x2a135b);
      } catch (_0x3ca81e) {
        _0x3030b7("⛔ *Error !!*" + _0x3ca81e);
        _0x24d250(_0x3ca81e);
      }
    });
    const _0x4fd59f = {
      pattern: "meta",
      react: "🏜️",
      alias: ["textpro14"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".meta",
      filename: __filename
    };
    cmd(_0x4fd59f, async (_0x4f97bc, _0x215f4c, _0x12f656, {
      from: _0x1fc640,
      l: _0x1b8af7,
      quoted: _0x270577,
      body: _0x1688a4,
      isCmd: _0x2f42f3,
      command: _0x56ce1,
      args: _0x1871f6,
      q: _0x3304b3,
      isGroup: _0x474315,
      sender: _0xf73ce2,
      senderNumber: _0x46bc7c,
      botNumber2: _0x509859,
      botNumber: _0x4410ea,
      pushname: _0x118618,
      isMe: _0x31d36b,
      isOwner: _0x26afff,
      groupMetadata: _0x42d72b,
      groupName: _0x1d95d7,
      participants: _0x461ec4,
      groupAdmins: _0x3c153f,
      isBotAdmins: _0x322a3d,
      isCreator: _0x298d3c,
      isDev: _0x1296db,
      isAdmins: _0x145652,
      reply: _0x29c0d1
    }) => {
      try {
        if (!_0x3304b3) {
          return _0x29c0d1("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x3f357a = await mumaker.textpro("https://textpro.me/create-3d-metallic-text-with-details-online-1108.html", _0x3304b3);
        const _0x259277 = {
          url: _0x3f357a.image
        };
        const _0xa4cfdf = {
          image: _0x259277,
          caption: "\n🗾 *Link - https://textpro.me/create-3d-metallic-text-with-details-online-1108.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x370ed7 = {
          quoted: _0x215f4c
        };
        await _0x4f97bc.sendMessage(_0x1fc640, _0xa4cfdf, _0x370ed7);
      } catch (_0x11dee2) {
        _0x29c0d1("⛔ *Error !!*" + _0x11dee2);
        _0x1b8af7(_0x11dee2);
      }
    });
    const _0x76ae0a = {
      pattern: "part",
      react: "🏜️",
      alias: ["textpro15"],
      desc: "Text to Image Collection",
      category: "logo",
      use: ".part",
      filename: __filename
    };
    cmd(_0x76ae0a, async (_0x12097f, _0x195c62, _0x33cf42, {
      from: _0x2b440b,
      l: _0x319b59,
      quoted: _0x5e0791,
      body: _0x2780e8,
      isCmd: _0x23d911,
      command: _0x48e1d7,
      args: _0x55ab95,
      q: _0x2491eb,
      isGroup: _0xeda39a,
      sender: _0x66f866,
      senderNumber: _0x5c86cb,
      botNumber2: _0x2826ef,
      botNumber: _0x1ca02c,
      pushname: _0xed0e2a,
      isMe: _0x2b9cec,
      isOwner: _0x4ac1ab,
      groupMetadata: _0x5b9e57,
      groupName: _0x3b665b,
      participants: _0x1c0e8d,
      groupAdmins: _0x94e980,
      isBotAdmins: _0x421c61,
      isCreator: _0x2086ee,
      isDev: _0x45d7ef,
      isAdmins: _0x50e5e3,
      reply: _0x29da63
    }) => {
      try {
        if (!_0x2491eb) {
          return _0x29da63("🏜️ *Text not found ! Please type a text to Make Art*");
        }
        const _0x1267dd = await mumaker.textpro("https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html", _0x2491eb);
        const _0x1de8ce = {
          url: _0x1267dd.image
        };
        const _0x1437f3 = {
          image: _0x1de8ce,
          caption: "\n🗾 *Link - https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html* \n\n*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
        };
        const _0x14df58 = {
          quoted: _0x195c62
        };
        await _0x12097f.sendMessage(_0x2b440b, _0x1437f3, _0x14df58);
      } catch (_0x34cec2) {
        _0x29da63("⛔ *Error !!*" + _0x34cec2);
        _0x319b59(_0x34cec2);
      }
    });
  }
  const _0x201f49 = {};
  function _0x5caba2(_0x35dcc2, _0x3dd448, _0x153144, _0x210c5e, _0x3b724a) {
    return _0x1cca(_0x153144 + 0x16b, _0x3b724a);
  }
  _0x201f49.pattern = "enhance";
  _0x201f49.react = '↗️';
  _0x201f49.alias = ["imgenhance", "remini", "qualityimage", "tohd"];
  _0x201f49.desc = "It converts given low quality image to quality image..";
  _0x201f49.category = "convert";
  _0x201f49.use = ".enhance <reply low quality image>";
  _0x201f49.filename = __filename;
  cmd(_0x201f49, async (_0x5bc26c, _0xfb68b5, _0x5d914f, {
    from: _0x1373a2,
    l: _0x54ffcf,
    prefix: _0x2a798a,
    quoted: _0x3d27e6,
    body: _0x298e1f,
    isCmd: _0x3cfcaf,
    command: _0x4c82d1,
    args: _0x48b1fe,
    q: _0x515100,
    isGroup: _0x3082c3,
    sender: _0x1c3cf9,
    senderNumber: _0x1fc72a,
    botNumber2: _0x5d0909,
    botNumber: _0x2b9b7e,
    pushname: _0x341550,
    isMe: _0x4ac83a,
    isOwner: _0xb8e93b,
    groupMetadata: _0x2b2cb8,
    groupName: _0x1b80ec,
    participants: _0x5ac4f8,
    groupAdmins: _0x5b3684,
    isBotAdmins: _0x5cd1b0,
    isAdmins: _0x222a63,
    reply: _0x10318e
  }) => {
    try {
      const _0x59b6ba = _0x5d914f.quoted ? _0x5d914f.quoted.type === "viewOnceMessage" : false;
      const _0x44adbe = _0x5d914f.quoted ? _0x5d914f.quoted.type === "imageMessage" || (_0x59b6ba ? _0x5d914f.quoted.msg.type === "imageMessage" : false) : false;
      if (_0x5d914f.type === "imageMessage" || _0x44adbe) {
        const _0x385a70 = require("file-type");
        var _0x20e667 = getRandom('');
        let _0x3709db = _0x44adbe ? await _0x5d914f.quoted.download(_0x20e667) : await _0x5d914f.download(_0x20e667);
        let _0x191f02 = await _0x385a70.fromBuffer(_0x3709db);
        await fs.promises.writeFile('./' + _0x191f02.ext, _0x3709db);
        img2url('./' + _0x191f02.ext).then(async _0xaf04f8 => {
          let _0x97e866 = await fetchJson("https://aemt.me/remini?url=" + _0xaf04f8 + "&resolusi=4");
          const _0x30c22e = {
            image: _0x97e866.url,
            caption: "Powered by Hamza"
          };
          const _0x3e0069 = {
            quoted: _0xfb68b5
          };
          await _0x5bc26c.sendMessage(_0x1373a2, _0x30c22e, _0x3e0069);
        });
      } else {
        return _0x10318e("*Reply to a photo !*");
      }
    } catch (_0x421484) {
      _0x10318e("*Server is busy. Try again later.!*");
      _0x54ffcf(_0x421484);
    }
  });
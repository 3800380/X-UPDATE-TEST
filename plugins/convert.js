(function (_0x545a02, _0x1b9713) {
    const _0x4718eb = _0x545a02();
    while (true) {
      try {
        const _0x45288b = parseInt(_0x52bd(1329, 'SM)t')) / 1 + parseInt(_0x52bd(489, '!%q!')) / 2 + parseInt(_0x52bd(685, 'uJY1')) / 3 + parseInt(_0x52bd(494, 'snSO')) / 4 + parseInt(_0x52bd(1113, '3BCF')) / 5 + -parseInt(_0x52bd(1428, '7M)H')) / 6 * (-parseInt(_0x52bd(1408, 'zKJW')) / 7) + parseInt(_0x52bd(721, 'YknU')) / 8 * (-parseInt(_0x52bd(849, 'ybU@')) / 9);
        if (_0x45288b === _0x1b9713) {
          break;
        } else {
          _0x4718eb.push(_0x4718eb.shift());
        }
      } catch (_0x2c347c) {
        _0x4718eb.push(_0x4718eb.shift());
      }
    }
  })(_0x2e3c, 491328);
  const config = require("../settings");
  function _0x188cb3(_0x7e4908, _0x299766, _0x90191d, _0x1402df, _0x199ad6) {
    return _0x52bd(_0x299766 + 0x3b, _0x199ad6);
  }
  const {
    cmd,
    commands
  } = require("../lib/command");
  const fs = require('fs');
  const fileType = require("file-type");
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
  const path = require("path");
  function _0x2528c4(_0x4d4a3a, _0x32f5bd, _0x4138dc, _0x5eecd4, _0x2b2a15) {
    return _0x52bd(_0x4d4a3a + 0x14e, _0x5eecd4);
  }
  const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
  const ffmpeg = require("fluent-ffmpeg");
  const {
    Sticker,
    createSticker,
    StickerTypes
  } = require("wa-sticker-formatter");
  const translate = require("translate-google-api");
  const {
    tmpdir
  } = require('os');
  const Crypto = require("crypto");
  async function videoToWebp(_0x37b48b) {
    const _0x20484a = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
    const _0x1d8dde = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".mp4");
    fs.writeFileSync(_0x1d8dde, _0x37b48b);
    await new Promise((_0x5c86d4, _0x5455e1) => {
      ffmpeg(_0x1d8dde).on("error", _0x5455e1).on("end", () => _0x5c86d4(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0x20484a);
    });
    const _0x568031 = fs.readFileSync(_0x20484a);
    fs.unlinkSync(_0x20484a);
    fs.unlinkSync(_0x1d8dde);
    return _0x568031;
  }
  function _0x2e3c() {
    const _0x353e26 = ['sCoAx3RcLG', 'WRy2ymkqW4m', 'ACkUlWVcOq', 'WQXIWQbJha', 'vSkmWRFdPLq', 'C3RdN1u', 'W5nDyrJdQq', 'pIhdPYfd', 'l8o/EfJcTCk1z8k5WPyODG', 'BSkQkqRdLa', 'W4pcPXCmaa', 'W5tcP8kLp8kp', 'WQpcTdu', 'W6i4cvBdMa', 'WRldN8kB', 'FCoJWRNdPSoN', 'qmoaWOrr', 'D8odWPhdNNy', 'WPVGT5VGTPlGTPpGTyu', 'W65VkCohW78', 'WOtcPx48hG', 'BmkxWOBcIgq', 'W7ubbcfG', 'qtJcICo4yq', 'WO/dSe5bW6u', 'WQLhrYv+', 'W6ChWOj1', '4lEy4lsS4lsh4lsU4lsX', 'WQ7cM8oWkCkX', 'CN7dNb5w', 'y2RcGmkm', 'WPddLW8gqq', 'gmoqW5io', 'zNVdN8oSaa', 'WPDmqsFdOq', 'WOFcTCoXWO7cRW', 'FCkrWOtdMgi', 'WO/dKmoTW4tcUG', 'krFdNX/cJa', 'W6RdVXm6DG', 'W5fcoCoBW7C', 'c8kGmSkWDq', 'WQpdGmo6W57cTa', 'm0nPWRu', 'WRxdR8k0BmoMl0KhqCkpttXG', 'WOxdS8kIpmkn', 'zX9qACkm', 'W70sWOu+W6e', 'BSk7gmocpa', 'qmkqfmoCxG', 'W5BdOu3dJYi', 'rSk2hsddRa', 'WRnpWOTKbW', 'A8k3WQZcO8o0', 'BHXtuSkz', 'DJdcMmkbea', 'lCo6W6a', 'fHORqCkk', 'W7TDWOW', 'WP7dRmo5W5RcJW', 'WRjyW40OW7C', 'ECk8oW/dPG', 'nSoGWQJdOCoW', 'WOzUWPhcOwK', 'DuD1', 'aSkhd8oFhW', 'W7ZdJYGUrW', '4lAN4lsfAoc3Moc1Gq', 'F2dcT8kgWQO', 'W5RcRCkZwJe', 'dXe9WRmV', 'xJxdU8k2ya', 'c3/cIG', 'W5vJp8odW5e', 'c1GRWRmW', 'ymkHjmoXfG', 'WOtdQSoZW5/dUW', 'hrJdM8oNAW', 'W67cRSoOp8oG', 'WOfvF8kdBW', 'WORdKCo+W6dcOq', 'WORdGmo6', 'WO/dUCk6lY4', 'WOxcUxqXdW', 'WO7cVmoMwHS', 'A8oNWQZdSCoL', 'WPZcKKaXdW', 'WOvSWQPtdW', 'tSo7DhJcKq', 'W5VdRvmzWR8', 's2VdHq', 'zbDw', 'WR7dKSkKdsq', 'W7VdJHKcCW', 'zJxcNSkgwW', 'zh7dJX5c', 'imk8gmk3zq', 'WQRcLamzlG', 'qmkfba', 'W6JdUmk4v8oC', 'FeFdJ8oEEq', 'DItcLCk9sW', 'WRDgWOC', 'sSkpcCkAga', 'WRf7sSk6yG', 'Cc7dUIDi', 'WRDCW4K0W78', 'WRHFiGaf', 'rLdcMmo4yq', 'WPT3u8kbzG', 'W6DoW542W7i', 'rCo8W6PxrW', 'u1a7WQiV', 'uw3dMrL3', 'W7anb1pdHG', 'A8kzcs3dSa', 'A8oOW6jEtW', 'wMZdVCkD', 'W7xdRhZdVG', '4lAw4lECW7hcJSk9', 'iXpcOCoVxa', 'W5uvkN3dRG', 'WQb4CCkcsa', 'W7tdUNZdVcW', 'Ab1xDmos', 'W7FcRSoUmSkQ', 'WO5av3q', 'W6LZi8oeW5u', 'CmkMkHBcSW', 'wxNdVq', 'vSkvfCoana', 'W4FcPSo5B8oj', 'uvC/WQvI', 'AZFdGmkxua', 'yCoHW6S', 'WR8gWOrSia', 'EMhdLSofDW', 'qmkwgq', 'WRv7FCkSCq', 'W6PlW4GT', 'qCktgmoiqG', 'DvVdGZ5I', 'wSo2BW', 'uKVcQCkwWQ0', 'W53cT8oSFmoo', 'W506W456jW', 'oahdNKpcGW', 'W6eMomoFWPa', 'W4FcUN8GhG', 'WRddLmkbeJ0', 'DIVcLmkaeq', 'cConW4LEW6m', 'WQ1EmqG/', 'A3NdQ8kufq', 'WP7dJCoMW5NcUG', 'W6Kmjbjh', 'WPhcICoWWPRcQG', 'WPrrrM/cPW', 'W5RcS8oSzCos', 'W6pdKSoOB8kh', 'W5VcPXaxsq', 'W6dcSGfsW7m', 'swBdLSoj', 'xuhcI8kmWOK', 'gwVdQa', 'WQNcV8oW', 'duamWPOx', 'WOVdS8kW', 'B8kQjGRdJa', 'W4OvbvRdIG', 'WQdcVXG7uG', 'WQhdQv5k', 'i3tdGmocdG', 'WPtcKSo+W7/cUq', 'W5xdOvmrW7S', 'zhldSCkaWRC', 'qtJcO8kzwG', 'Ct9Wymk4', 'W4NcNCoOWRlcVq', 'W4Syl1BcRW', 'W5tdSw7dSdS', 'W6BdQmo5CCkR', 'BHeFB8ks', 'WOKfvM/cVa', 'WR1nley', 'F2JcVCkkWRy', 'w8ksbCoota', 'zYahE8oJ', 'WQ3dPvqxW6m', 'W4Dnxv5d', 'dG7cImoRAq', 'EbngqmkA', 'WOXUcJeq', 'W5/dTuWfrG', 'W5NdQa5mqq', 'WRhcPriQdW', 'WRBcTdu7aG', 'WRz9ySoNyG', 'W77dTKfzbW', 'Amo7WQtdT8kG', 'pCkeamoDFW', 'ow7dNSkEvW', 'BCkuWOhdSNC', 'W7ddPgO', 'hGRcJmopAq', 'fColAx7cMW', 'W4ddJmkWW4ZdUa', 'WRtdRSk4A8oU', 'W6RcSCoXnmk8', 'W7KCjIfQ', 'WP50cZmq', 'egfwW5q3', 'WQFdKmkHW7hdUa', 'WQdcVtVcQxK/WRK8WOldMCkAwW', 'xX5Lq8k9', 'WOTqqhtcRa', 'fCo3W7nyW6G', 'amolW5axWQC', 'WOPmag3cQa', 'vgVdU8kakq', 'W6VdV2G+aG', 'WQBcVIK7aG', 'W4aEWQ/cRSoH', 'W4mMWO9OyG', 'W6ldPwddQG', 'r8kxWOtdLN4', 'WPFcJ8o9WPZcLq', 'W4BcUge3ha', 'W5Dsk8oPW7m', 'C8kGlWldPa', 'W40VWQe', 'nGBdIa/cGW', 'qSkwcq', 'WP3cVv0qfW', 'WPLUWRFcPmkG', 'WPWWWP0', 'WOZcPbaNfW', 'WQPPW4SvW6y', 'W6alcsHR', 'jazCyCoh', '4lsW4lwK4lEB4lEJwW', 'zmoPW70', 'WPvesW', 'kmk/WRWGlG', 'Bmo4WO/dTSoM', 'W4hdLK1bjq', 'DMRdLa9a', 'Fmo4WRRdRCoS', 'bqRdQHdcUa', 'zmoJW7L+BG', 'W4FdVCoVW50', 'WRldN8kqxIe', 'WOVcN8oJ', 'W5iSWObTyG', 'W6BdI8oOE8k8', 'Fc3cV8oAhW', 'iSkydmko', 'b8oVW7jfW5S', 'WO/dQ20kW6m', 'laxcMSo6xG', 'aColW5XhW6O', 'kNxcPCkkWRS', 'zXmijG', 'WOtcGxayda', 'DfddJYje', 'W607i03dLW', 'W4vOWOxcQ1e', 'yqFdGXpcMW', 'WQdcV8oCwd0', 'W6JcSdu', 'b0JdVCkeka', 'Ce/cK8kfWPW', 'W54VWOfPoG', 'W4hcRmoXyCoA', 'iSkjhq', 'W7T/WPhcQuG', 'W4/dOWOmaa', 'kJtdR8op', 'W7hdNSoRECk9', 'hxhdLCkAlq', 'WR/dP8kmW7ddLq', 'W5pdPaGguG', 'hfWQ', 'WQZcVYa', 'WPq6WQRcPCoN', 'W4hdPeFdUb8', 'W7zSWRxcP0O', 'W6hcPSo2zG', 'oKqkBq', 'ehVdRSkpCW', 'g8oOW6HXW6q', 'w8kodCoF', 'mfpdTbHutCog', 'uCkLWPddRui', 'W7iaCfj+', 'W7VdUL5i', '4lwF4lsO4lsZ4lwL4lwx', 'p0BdUJbg', 'WOFcONuOpG', 'jc5dASkM', 'kYHcA8kM', 'DmoNs0JcLq', 'pGhdJr3cNW', 'W6pdJbO0sG', 'W7XJp8ot', 'W5nkvw9Z', 'W5/cH8o5BSoN', 'W47dTqinuW', 'WPZWMBUMW6VWNPsm', 'EwpdSCkeWRe', 'cbxcKSoMAG', 'W5n8W7pdP8oP', 'WRldPSkXBmoQkGu1BmkQCaC', 'W4tGTitGTyBGTjFGTjO', 'ErncASkD', 'W4pdICoMW4lcPq', 'WPZcHCkOWOZdVW', 'efzmW7i2', 'FcxcG8oDxW', 'gwJdQSkogG', 'W5JcQaamtq', 'WPxdSCk4zCoq', 'W6fAEvn1', 'WPfSWOdcR2m', 'A8kqWPFdKhu', 'aqJdLqFcJG', 'WQBcVIPIeq', 'EbnCySkX', 'zCoIWRnIzW', 'W6S0WQHQxW', 'B8o6WQ7dOSo6', 'dJLEACkQ', 'WQNdM8kwfG', 'feuQWPzV', 'EGnDCSkz', 'mX/cQdzi', 'WQ/dR09dbq', 'chydWOq2', 'CdBdNCkouW', 'jJjIsSoQ', 'WO5+cYe8', 'bmkgdCkXvW', 'W6D7WR7cM2u', 'vu3dGSoGva', 'W5nXfsi', 'W53dNSo/FCoO', 'W4tdR1ShWQW', 'W7NcSHiwWOK', 'xSoyWOldL8of', 'WOZdSSkGW5NdUG', 'WOhcKCkNW77dPW', 'u14HWQq6', 'W5pdPmolqmkE', 'W7WAasnN', 'dd7dHHTf', 'gZJdQmkala', 'kLX0W5eW', 'mcrfFW', 'WP1rW44sW4q', 'W7tdMCoyhW', 'W51Tdceq', 'jmkniCkAwq', 'gConW59fW6S', 'DINcMmk4Eq', 'WPBdHKCkW7q', 'lSkjdCkyDq', 'oXrfqmk0', 'bYDbySo2', 'W6GsWQrPyq', 'WPboqehcRW', 'AGzckCkD', 'hmoxW5feW6O', 'WPRdSeOoWQm', 'W70ldanK', 'WO7cUmogstW', 'WR1Cz3hcRG', 'WP/dKmoMW5NcSa', 'uCo4FN7cGa', 'Amo2WRNdT8oL', 's8oRy3G', 'eSoTixO', 'WORdHmo9W4ZdRW', 'W7HkWPzXka', 'W7fByLC', 'WRzMlCkMAW', 'WOxdRmkS', 'rSoeW4vDzq', 'WP96fIbd', 'WPj6bJeC', 'W7JdPMhcOc4', 'W4FcPMu7ga', 'WRvkWPzGpW', 'ysRdRmkAuG', 'EbDvyW', 'gw7cIbHP', 'W7FdOHaqqq', 'W4KDke3cOG', 'WOj+Dmkeua', 'W6ldUwRdVJ8', 'WPP0cIiz', 'ECkHla', 'BgddL8kdhW', 'WOxdNSovWR7cUq', 'EHtcKmk4sq', 'AbDgy8kB', 'W7hdLmo6DSkK', 'C2RdIr5b', 'FCkPW63cV8o0', 'W5K3WPPRDa', 'W57dOKT1bG', 'W5RcSCoXA8ou', 'xmkse8oEiq', 'zNJcK8klcG', 'FN/cOCkg', 'tWXEvmkQ', 'CJZcV8kwua', 'WQZcVsiEhG', 'haldHsjf', 'awVdQG', 'W6ipnWy6', 'yJ/dMbrb', 'p13dLSkzca', 'W5xdNuldUsq', 'W4uXWO91Da', 'W6NcISoytNG', 'AbiRWRux', 'W7/dOxi', 'W7RdICo0', 'W6HiWOJcMha', 'zCk/lq', 'WP/dQ0KqW70', 'W4zvwLfa', 'Fs/cMmkC', 'WQVcMSkqgZG', 'W5xdOaOf', 'WOKGWQdcP8o1', 'y3RdIbG', 'WRNdNCo9A8o1', 'euuSWRmD', 'W5NcMYS1WRK', 'fqDU', 'W7zFWO0Loq', 'W6BdHufvda', 'nY3cLmkCsG', 'WRu4WO3cHSob', 'W5OCscDH', 'W4xdPI/dVIq', 'WOT8W6qy', 'cvqRW7G', 'W49UWORcO2W', 'hf7dP8k5iW', 'iSkGp8knCq', 'W7LPa8oCW7u', 'lHdcV8kyva', 'lCo1kWhdRq', 'qmorW40', 'W70NpK7dJG', 'hCodW4Py', 'DIZcMmkttq', 'WRxcRafzbW', 'WQRcQSoTk8kQ', 'W7RcOHWgWQO', '4lAXvUc2Qoc2VEc1HG', 'c8k6kJZdHa', 'W7OCscDH', 'WP9saZa/', 'W7CLkxhdIG', 'hNpdOmkOla', 'CCk/lqK', 'W7benCoMW6O', '4lwT4lE94lww4lA/Ea', 'WQFdT8kZDtu', 'Dg/dMGLa', 'W77cPby', 'W7ldGNNdJcK', 'W5jzjfddUG', 'kanEs8kW', 'hX5ZE8kY', 'W5HzWRRcKse', 'zarl', 'WPJcOh4MhG', 'ysNcLCkxuq', 'WP7dP8kLW5K', 'WOfOW6yt', 'W6hcRCoXoSk5', 'WRNcUX0AvSoNj13dMSkSeSo+', 'WR1vW4iTW6S', 'W6RcSCo2E8kT', 'WO16fYaB', 'W7xcQ8oqp8kP', 'DSkaWO/dQhm', 'W7NdLCkqxJW', 'pKtcJv/dGq', 'CJJcHCop', 'WQKGWRFcH8of', 'WRhdSMGzW5W', 'W7pcHSokxmop', 'v3q9WQqW', 'W7HMEmkGDG', 'cum7', 'B8o8W7TJ', 'n+c3OEc0VUc1Ioc3Sq', 'FXL0ACko', 'W6flC357', 'WQVcQtCjda', 'W4Gal0e', 'laldRdbi', 'EsBcQmkmWQ0', 'W5arpW', 'rHZdU8kDqW', 'bHZcNmoVma', 'WQ3dT8ogW73cHq', 'lSkecCk8xq', 'WPf2WOZcR3C', 'WP7cT8ofWRNcIq', 'ywpcQa', 'W67dTKPedq', 'dSodW4PvW6G', 'W5tdONn2aa', 'W55tamo8', 'jIHorCob', 'W4hcUSoOAq', 'EwFcTSkg', 'ncrjA8ol', 'W6tdQHCxWQW', 'WO0RW5xdTZ8VzHzqetCzW4m', 'W5pcOmo9ASow', 'qxBdLX52', 'qCkbgmoiga', 'W4tcPwm3ca', 'W5RdRcnMqY1Waa8el8kQWRu', 'W6ZdRebBbW', 'z3VdImoHra', 'WPFcV8o0', 'F0VdNmoyva', 'WR/cPYddSsi', 'lH/dNtjp', 'WPT+fW', 'pJrXvSoP', 'W4SydGjh', 'yZNcGCkx', 'WPdcKCoQWQ/dVG', 'W4tdOmo7W5/cUG', 'W6pdRg7dUq0', 'ibe/WRCZ', 'WRJdLSklhZS', 'wIJcO8ojoq', 'W6CbW7G6W6e', 'WQmCWOZcM8oq', 'W6utWRXtyW', 'WO0OW5VcQW', 'gWf4wSkb', 'WR1GxCkSDG', 'WO0mWRRcV8oL', 'W7G7esPT', 'WRFdKmoMW4ZcKW', 'pG/dPbfW', 'WRhcTd85eW', 'ECkcWPu', 'CmknWPFdJNe', 'tmoRo2VcNq', 'lqJdIqRcNW', 'wLBcGSkkWP4', 't2/dRbjV', 'WRjoWPfM', 'W4NdPHug', 'd8k+itZdHa', 'BSo4WRnGCa', 'W7pdNCoRFSkU', 'Frf/sSkn', 'omkxWPNcL2m', 'W4hdVw7dIai', 'EgRdMmoC', 'WQVcPYi/eW', 'W5CDje3dVW', 'cIruFmoN', 'WOFcO3qGdW', 'xIpdIHmLW6JdUsxcHMNcIGKl', 'W5qni0dcOq', 'W7esorD2', 'W4NdQWOarq', 'svS6dSku', 'WPjUW6ldQSkQ', 'W611kq', 'WOdcHCorsba', 'WOVdPuOkW7q', 'W4lcO1mrWQa', 'WRBdJ3OmW5S', 'W58dj2ddTW', 'CCoQBexcJG', 'W4RcSq9gWQrezSkbocddMSkNha', '4lw+WPRGTzBGT4xGTPO', 'W7fRlCoxW5u', 'W45/WOlcPfi', '4lwi4lsD4lEu4lAG4lwv', 'WOHxrmketW', 'WP7dQGmmW7q', 'kLmCWQ8M', 'tW7dVCkvCa', 'W7JcSH0wWOi', 'W6boyLn1', 'W4hcRmoRy8ot', 'WR1eW5O8W7G', 'WOqyWQ/cGSoU', 'W7JdVIBcUNe', 'WPFcVmkN', 'fXX1s8k7', 'A8oJWQZdR8oS', 'fxhdPSkJdq', 'Ch7cVmkpWRq', 'WPJdQeSAW7q', 'WQfGAmkVCq', 'WPxdQ0PEW6i', 'WOZdT8k5W5NdUG', 'W6ldQhNdUa', 'W446W4ldOs0', 'WOddHSoSW6dcSa', 'WO3dHmo9W4JcSG', 'zSoLW6j1Ba', 'W6JcPZq0cq', 'y3RdIa', 'qgZcI15Z', 'WQjAw3a7', 'EspcLmk/wW', 'W6raz1u', 'rSkAhmoDcq', 'pCkjdCkjDW', 'W4ddM8kNW47dUW', 'W47dHmkPW5NcSa', 'CcddR8kE', 'yh3dGW', 'WOJcPf9EW6u', 'ACk8lq', 'WPGKWQlcGmon', 'W4NcMmoOWQ3cOa', 'WPqRWRVcVW', 'WPODW5O+W70', 'ECkxWOldKMi', 'muP+W4Gf', 'W4VdPwVdKb4', 'kahdNX0', 'A8oNWOVdRSoe', 'W77dSu1cbG', 'WPVdQ8k6W4JdSq', 'WO/dPSkHWPZdOa', 'W7ZdS09FbW', 'WOxcK8oI', 'W7VcSHq', 'xSkJvMG', 'WQjqW4u1W7G', 'A2ddJCocxa', 'W6uvWOLWCq', 'WPpcOCoYste', 'r8k/fu7dSq', 'WQJdHvWwW5W', 'W73dOKbjdq', 'B8kJiq3dPa', 'u8kSdJRdMW', 'W40TWRhcRq', 'q2NcJe5+', 'WRn3ySoPoq', 'tCoREM/cGa', 'kN3cGrO', 'W7FdVSoJE8kQ', 'WR1oWPaR', 'W7fBFG', 'zKRdQtC', 'BmodW4RdPxu', 'ux7dKrjx', 'W4GSWPS7ya', 'FCoKWR7dOSoN', 'WPlcQCopWPJcGW', 'W7OpagjJ', 'oWBdRq', 'zW1gyCoH', 'WPWGW5r6', 'vJZdR8kxta', 'W6iFW5m1Aa', 'nSkuWPpdLwa', 'WQFcVwSQmq', 'W7pdQ3VdKcC', 'W6iDbZbR', 'C3RdGW8', 'W5pdUJ4ZcW', 'W7epye50', 'WP3dOuKsW6m', 'W4CMWOi', 'uee9WRmS', 'WQVcKSoqWOxcGW', 'FtTZFSki', 'W4fAEwLj', 'ESoVeX7dNa', 'W5/dJ33dTs8', 'xSkkWPRdKKm', 'ka7dUYzo', '4lwjWOxdPmoiWRS', 'n1rI', 'kJet', 'CSk7iqhdRW', 'WOpdGSkP4lsB4lsv', 'WR3dRmkonYy', 'WPZdNCkOcYO', 'tmkzjZ7dQq', 'aSkcWO8', 'mfjVW6Sp', 'u8oNFMJdLa', 'nJriE8oJ', 'W6pdRg7dVJ8', 'WPDewW', 'WPJcOem2da', 'WQihWQZcRSot', 'W4dWRlUgW6dWV6wO', 'BZZdPG', 'kIbaASoh', 'WPpcPhGkmG', 'WR7dTSkpfbi', 'lmkJW7ZcS8kW', 'ymkbe8oEhW', 'WPf7WOa', 'WPZcV8ojWQBcQa', 'ebPIxSkx', 'W5VcQ8oKWOtcOrJdLCoAuhtdLmkbW6q', 'rH7cICoS', 'WQpdJmkHhZW', 'WOhcHCo/W4tcSq', 'cmocvg/cHs5p', 'zZBdSCknua', 'i8kpdmkCDq', 'WO/cT8oQBCot', 'W6OMBCkrWPO', 'D8o+W6DKzW', 'iaxdMbVdHG', 'FM/cVSknW7G', 'WPzYE2RcUW', 'W6tcTHC', 'BmoUWR3dPG', 'WOtdUCo7y8or', 'W79DnLv1', 'WOGfdIhdOW', '4lA1l+c0Ooc0L+c2IG', 'BSkQkq3dTq', 'ECo9W6LMua', 'W7/cSGSg', 'W7NcSHirWRS', 'BCkgjmodja', 'omorW59xW6O', 'l2dcR1j+', 'WQTHCCkUya', 'W4NdOG0hBq', 'W5FdT1a', 'WRxdQuOUW5i', 'A1NdLSoLxG', 'kG3dGbVcHq', 'W6RcQmoNkCkQ', 'W5q2WP1+', 'dbDMsW', 'pmkAgSksDG', 'WRZcSX4BvSkafgZdHSkihq', 'WQ9ZpCk6Cq', 'B8ohWQZdLmor', 'W4pdHSkZW4W', 'WQD3aqGG', 'WO5kW5mOW5C', 'isHlASkR', 'DxRdMHHr', 'WR/dQ8oHFCkP', 'W6CzW5PU', 'W7D0nq', 'WOHtfs00', '4lsp4lsa4ls34lAc4lwV', 'WRpcTgeUca', 'W5BcSCoHFmoj', 'W6vCWQxcOua', 'dhFcNq', 'ALhcU2Cx', 'hf0QWQiR', 'C2BdIX4', 'wSkzeCotaG', 'dhldRSkIbW', 'W79Dk1b4', 'WRzFCSkpBq', 'lqdcKu3dMq', 'AmocW6L+AW', 'o0L1W60z', 'DKNcNutdHG', 'WQnsw3y+', 'W6TZlSodW4q', 'ghhdRCkElW', 'WQHMECkMAW', 'W4iVWOfS', 'WPFdRmoVW7RcKq', 'iKldU8kgjG', 'oIhcGW', 'FrnE', 'CSoPW69ZDG', 'C8kSW7D/DW', 'awdcQ3fm', 'bw3dOmkDlW', 'WPpcMcWbmG', 'WRFdGSksoIm', 'gbJcLCoUqW', 'WR4luJi', 'WRVdJ8o5AmoO', 'hr1Lt8kd', 'WQjoW5K+W7y', 'W71YomovW5C', 'W7ajhcfP', 'WPRdNmo5W4G', 'bdlcNmoqwW', 'W5xcPSoAomkC', 'DCkHlW', 'W7TkBW', 'WPaAWPFcHSo4', 'WPX3dcqg', '4lwg4lsm4lAG4lAy4lEk', 'WRRdOL9sWR8', 'WP7dK8k2ccO', 'W6pdVLriWQK', 'W6DjW4v/W7G', 'W7PBwej0', 'qHBcICk9va', 'W4uZWPTVsa', 'Bmo4W63cOSkQ', 'gqj/t8kx', 'agRdJa', 'dNxcLLf4', 'oSoaW7vjW5W', 'W63cSruuWQK', 'hSohWP5xW6y', 'aqb1', 'W583WOHYAW', 'W4eIWPPVyG', 'hg/cL1n4', 'ECoRW7LXuG', 'W6hcRmk4B8os', 'nmo8EL7cRq', 'WRDCW5G6W78', 'WRnHWRnTpa', 'WO7dT1S', 'WR/cTmoYqYq', 'W6WgW5m/Dq', 'tmkdfmovaG', 'WOBdKCkNW6ZdKW', 'WP1Nz2NcHW', 'WO/cVmoJqsy', 'WPqHWOxcPmoY', 'hSowW5DtW6q', 'WOJdPmo1zCot', 'ha/cKSo+AW', 'ysZdRmkE', 'WRjwimovW5e', 'cGT3sSkI', 'fLq9', 'W61VW48VW70', 'WP9DwZ7dQq', 'WPmTWQZcNSo2', 'WOdcUha1hG', 'W73dReLLmW', 'W6xdMSo5BmkT', 'W4pcHXOMWOS', 'm3vIW7uF', 'W7WDW7e9W4W', 'yZ3dK8kDrW', 'D0tdTXZcTG', 'WQLqD2xcNG', 'W7pcO1ntW6u', 'CNhdLXjl', 'WPNdPKOZW70', 'W7RdMNBdSYG', 'W49FzeHZ', 'WO09WQq', 'aSkbeW', 'W591WOFcPsC', 'gtRdHeT8', 'zWnvtmkp', 'WOHeF8kzBq', 'W47dVHmg', 'W7pdQsunCW', 'fabfz8ol', 'WPhcQCoQ', 'vrH4', 'uhVdImonxG', 'WRLfWR1Ppq', 'WPdcH8o3WRO', 'fSkyjmoDyG', 'W5z4W7VdVmoid8oZW5JcRWO', 'W4xcSCo3yCou', 'W5tcUmo8xYy', 'WRrjWPzina', 'W6PJp8ofW5W', 'BmorWOy', 'WPhdMmk0maW', 'DSkvWPpdHwq', 'hSofrCor', 'WRNGTQVGTQlGT6pGT5W', 'W47dPGqq', 'kN7dLq', 'WQHZzmk9ya', 'oqtdPInc', 'W5iazKhdOa', 'W45ffmoHW5y', 'wCoND2NcMG', 'ArqJW7a', 'pSknc8klDW', 'crxdMs/cRa', 'sSoYWR3dR8o5', 'W7tcV8o2l8k7', 'AJ3dUSkjgW', 'A8oMteNcTq', 'pbpcV8oisq', 'WRJdUmk9W7JdSW', 'oCkhkSkjya', 'WR5mW5awW4S', 'W6xcNsyJaa', 'W7/cRGmx', 'WPHPrteA', 'muyc', '4lsj4lA8Boc0Poc0HG', 'FCooWPFdH3K', 'W6NdIehdPc4', 'vaVcNSketq', 'WOOHWQRcPq', 'WOxcHSoFWPRcRW', 'DMtdR8kvuG', 'fgdcVK1Z', 'gei8WRC4', 'W7uAbYK', 'WQfuW4y6W78', 'dg/cJe9Y', 'WR4Ys8k5wa', 'FCkIlq', 'lfrYW7y', 'Fr9wy8kt', 'W7vNiSou', 'W5tcHmo+rCos', 'oe3cQNjp', 'W7mkWPXMWQe2WRpdQHuXW57dVfu', 'hCoxnCoZ', 'WO7cKxWJiG', 'CCo5W6fKzW', 'sSkGiX/dIq', 'W43cGJ8+', 'W58vh03dJG', 'j8k5e8kEAW', 'WQWpWO3cJa', 'WOVcJmkNWR7dRq', 'WPBdKCkPWOZdVW', 'dszAwSkS', 'nsrgBmoY', 'WP3cVhi5hG', 'yg7dNG', 'WOtcUNS7ja', 'WQVcHmolWQRcJW', 'W7vxyHO', 'WPRcOxGXea', 'WPnltgZcVa', 'gGJcLmo+AW', 'WQpcPMNdUcO', 'cmorW41rW6G', 'p8kngmkEzG', 'uJRdH8kHuq', 'W70Edtz6', 'fXWRwCkm', 'W5BcOSoSACoA', 'u3BcTmkqWRu', 'WRJdV8o9W4lcUq', 'dr5MqCkw', 'bM/cOxze', 'WPlcM8kNWRlcQa', 'xmkdfmozbW', 'D8k4lqRdJq', 'WOLVfq', 'W6nNy1vz', 'eX/cQdzi', 'WQeBiHmIASkQWQ3dJtFdNSkt', 'WQtcMW0lja', 'W67dQKDNjq', 'WQ5qW4mN', 'W54PWOC7CW', 'WQdcP8odwJe', 'mY5LESoG', 'WR7dRSkY', 'W7xcQ8oTl8k7', 'f0K8WRKk', 'W7/dT0Dcda', 'yc/dICoywq', 'W6P2WRVcPfy', 'WOZcRwu', 'WRtcPcG5aG', 'mZngyCo1', 'W5xdHaSTwa', 'W4JcTG5sW7G', 'd8kBfmoubW', 'iXBdJXVcTa', 'W5jSWOBcSNm', '4lw44lwVmEc3HUc3Jq', 'dqb6r8kk', 'W47dKCoMWO3cVa', 'WOZcPMiZha', 'puH/', 'W7TDWOb3', 'FtFdVa', 'WQ7dISkyW5JdUW', 'yb9gzCku', 'W51QWORdR2O', 'dX/cOSoPAG', 'lfjoW7Wu', 'W5tcTSo8zCos', 'A1NcSd4', 'AJDeymoI', 'z8k6hmknFG', 'h3VcLKnY', 'WPTeta', 'W4eolIjK', 'WQldQCoWW7ZcSG', 'W5PUW63cV8oY', 'pmkDfSkjDW', 'bXtcMCoYpa', 'W6ddImoO', 'WRnyW5iRW6u', 'WQ7dPvihW5C', 'WOddUhC7aW', 'cCohW4W', 'WRryW4q7W5W', 'qSkwgSoFuG', 'W6bgouPX', 'WRJdMSoU', '4lwDW6ZGTkFGTPxGTOy', 'WOJdP18sW7q', 'gJVcTmo/xW', 'W6/cTmoEFCoL', 'WP3dRviBW78', 'WRldQmk6BmkwAYOvDSkq', 'r8oJWR/dOSoU', 'WPpcOmo2Fs0', 'WO/cHCo5W4xcUG', 'W7ayebDD', 'zcxcN8kwCW', 'CJpdM8k3CG', 'W7BdKmoOASoO', 'WQXoaGKC', 'd8odW41vWRK', 'WQTICCk7ya', 'W4BdIgFdRr8', 'W5f8W7ddV8k1', 'kxtdVmkjwG', 'W53dIehdMG', 'W512WORcOxq', 'yxBdLW9a', 'iSkAaa', 'W4hdK8oAxCkj', 'l8oHW6XrW6K', 'grJcMSoPEG', 'WO9lq2NcPW', 'WP7dGSkddHG', 'WQviWOnPpq', 'zMddLmkm4lAF', 'hN/dMe5Z', 'WPL0eISz', 'r8krWPFdG3K', 'WPFdPmoWW4tcUa', 'W6xdPKVdVd8', 'WO7dOCo1sdK', 'W4tcTSo3Emoy', 'FmoJWOFdISod', 'kq9ZDSka', 'W7tcJ8ogcSkR', 'W7JcOXOrWQq', 'amorW5K', 'W4/cISoAASo5', 'aJTdv8kE', 'W71uWPdcKgq', 'WPJdT8k7W5S', 'W77cTHqxW68', 'g8kMlCkXvG', 'dXJcNCoREW', 'W77cNWmAWO4', 'aqhdNW3cIG', 'lXJdRq', 'WR/dImkneWO', 'WOtdV8k5W6pdTq', 'w8ofWOldK8oq', 'ltXazCk+', '4lAy4lAD4lEr4ls24lEn', 'WRNcVCo3Bay', 'a2RdPSkDlW', 'WO/cRSoUWOFcNq', 'nmkCp8kFFG', 'hLa/WQi2', 'WPtdTmkwmYq', 'jGbu', 'DuD5', 'W7FcU8oSp8kt', 'W7bYpSo9W4q', 'vmoRyG', 'evldLSkJla', 'W7FcQSoRomk1', 'BCkrWPO', 'CJJcHCossG', 'h0VdTSkhkq', 'W5PTzG', 'W4RcOsq8WRS', 'mWv/EmoG', 'A2RdICop', 'W7nJpSkFW5e', 'WRpcMMe2pq', 'kc1iFCk7', 'WRZdICkrhY8', 'FSkpWO7dP38', 'W5uxp33dRa', 'WQP3CCk6ya', '4lEq4lA+WOWtWO4', 'W6hcPSo2EG', 'bN3dVmkAiW', 'WQnyWOC', 'WOLVfsez', 'BCk6jXRdPa', 'W5BdTvzCoG', 'FCkmW4G', 'WQRdRcmOba', 'cgNcIW', 'W5H/WPdcOW', 'tdbhDmks', 'w8o6uuxcTW', 'yM3dIrrx', 'W6JdGKHKoW', 'fsJdOWRcVa', 'WQFcIComWRhcRa', 'W5hcPSoRBW', 'ESoHthVcHa', 'ncru', 'hZRcIKjT', 'W5hdOHO', 'imoLW6LgW64', 'pSkygmkpDW', 'WPzmsMtdQq', 'W5NdRWix', 'W4pdH8kZW4W', 'WPrSfbCA', 'xupdOSoRrG', 'WQ0iE05+', 'v2ldM8okya', 'BCkqWPm', 'WRvWkG', 'WPuLWRlcMmoY', 'WOTZW5S', 'gM3cN2XX', 'W7tdU0ldUdG', 'tmo6CM/cNW', 'BbeTWQjmn8oUvmoEr2WHBq', 'WRBcP3aMeG', 'WObXWPzQna'];
    _0x2e3c = function () {
      return _0x353e26;
    };
    return _0x2e3c();
  }
  ffmpeg.setFfmpegPath(ffmpegPath);
  function toAudio(_0x1650d4, _0x1dea5c) {
    return ffmpeg(_0x1650d4, ["-vn", "-ac", '2', "-b:a", "128k", "-ar", "44100", '-f', "mp3"], _0x1dea5c, "mp3");
  }
  function toPTT(_0x1abe40, _0x84811c) {
    return ffmpeg(_0x1abe40, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0x84811c, "opus");
  }
  function toVideo(_0x260119, _0x14b705) {
    return ffmpeg(_0x260119, ["-c:v", "libx264", "-c:a", "aac", "-ab", "128k", "-ar", "44100", "-crf", '32', "-preset", "slow"], _0x14b705, "mp4");
  }
  var imgmsg1 = '';
  if (config.LANG === 'URDU') {
    imgmsg1 = "*Sticker pe reply karein !*";
  } else {
    imgmsg1 = "*Reply to a sticker !*";
  }
  var descg1 = '';
  if (config.LANG === 'URDU') {
    descg1 = "Iss command say ap replied sticker ko image mein convert ker sakty hain..";
  } else {
    descg1 = "It converts your replied sticker to img.";
  }
  var imgmsg2 = '';
  if (config.LANG === 'URDU') {
    imgmsg2 = "*Kisi tasveer par reply karo..*";
  } else {
    imgmsg2 = "*Reply to a photo !*";
  }
  var descg2 = '';
  if (config.LANG === 'URDU') {
    descg2 = "Iss command say ap reply ki gayi Tasveer ko sticker mein convert ker sakty hain..";
  } else {
    descg2 = "It converts your replied photo to sticker.";
  }
  const _0x3fae0d = {
    pattern: "attp",
    react: '✨',
    alias: ["texttogif"],
    desc: "it converts a text to gif sticker.",
    category: "convert",
    use: ".attp HI",
    filename: __filename
  };
  cmd(_0x3fae0d, async (_0x139486, _0x2f9f66, _0x353345, {
    from: _0x243d00,
    l: _0x339be6,
    quoted: _0x3e08b9,
    body: _0x2fe334,
    isCmd: _0x53b376,
    command: _0x2ba16c,
    args: _0x4dbc26,
    q: _0x3683e3,
    isGroup: _0x4daf41,
    sender: _0x1bc980,
    senderNumber: _0x4717c8,
    botNumber2: _0x30ee8e,
    botNumber: _0xc65b51,
    pushname: _0x2dfbd3,
    isMe: _0x2e45f2,
    isOwner: _0x5eaf35,
    groupMetadata: _0x1285b4,
    groupName: _0x4abb83,
    participants: _0xd9ec54,
    groupAdmins: _0x16661c,
    isBotAdmins: _0x4a9ec1,
    isAdmins: _0x39b370,
    reply: _0x56e19d
  }) => {
    try {
      if (!_0x3683e3) {
        return await _0x56e19d("*Please give me a text !*");
      }
      let _0x4e5dc5 = await getBuffer("https://api-fix.onrender.com/api/maker/attp?text=" + _0x3683e3);
      const _0x36bcb0 = {
        quoted: _0x2f9f66
      };
      await _0x139486.sendMessage(_0x243d00, {
        'sticker': await videoToWebp(_0x4e5dc5)
      }, _0x36bcb0);
    } catch (_0x534725) {
      _0x339be6(_0x534725);
    }
  });
  const _0x452dd8 = {};
  function _0x52bd(_0x548fd9, _0x57341b) {
    const _0x2bbf17 = _0x2e3c();
    _0x52bd = function (_0x49de28, _0x109eff) {
      _0x49de28 = _0x49de28 - 406;
      let _0x5e5336 = _0x2bbf17[_0x49de28];
      if (_0x52bd.ksnVVw === undefined) {
        var _0x2245e7 = function (_0x1b8f8b) {
          let _0x2c7b9d = '';
          let _0xd6b9cd = '';
          let _0x1e14b3 = 0;
          let _0xbe9e2;
          let _0x34e8e8;
          for (let _0x2a8186 = 0; _0x34e8e8 = _0x1b8f8b.charAt(_0x2a8186++); ~_0x34e8e8 && (_0xbe9e2 = _0x1e14b3 % 4 ? _0xbe9e2 * 64 + _0x34e8e8 : _0x34e8e8, _0x1e14b3++ % 4) ? _0x2c7b9d += String.fromCharCode(255 & _0xbe9e2 >> (-2 * _0x1e14b3 & 6)) : 0) {
            _0x34e8e8 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x34e8e8);
          }
          let _0x38c230 = 0;
          for (let _0x15480a = _0x2c7b9d.length; _0x38c230 < _0x15480a; _0x38c230++) {
            _0xd6b9cd += '%' + ('00' + _0x2c7b9d.charCodeAt(_0x38c230).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0xd6b9cd);
        };
        const _0x1c1911 = function (_0x1a23f3, _0x4aa0d5) {
          let _0x15c0a5 = [];
          let _0x3752ef = 0;
          let _0x10f553;
          let _0x3ffdfb = '';
          _0x1a23f3 = _0x2245e7(_0x1a23f3);
          let _0x3f5bda;
          for (_0x3f5bda = 0; _0x3f5bda < 256; _0x3f5bda++) {
            _0x15c0a5[_0x3f5bda] = _0x3f5bda;
          }
          for (_0x3f5bda = 0; _0x3f5bda < 256; _0x3f5bda++) {
            _0x3752ef = (_0x3752ef + _0x15c0a5[_0x3f5bda] + _0x4aa0d5.charCodeAt(_0x3f5bda % _0x4aa0d5.length)) % 256;
            _0x10f553 = _0x15c0a5[_0x3f5bda];
            _0x15c0a5[_0x3f5bda] = _0x15c0a5[_0x3752ef];
            _0x15c0a5[_0x3752ef] = _0x10f553;
          }
          _0x3f5bda = 0;
          _0x3752ef = 0;
          for (let _0x2d592a = 0; _0x2d592a < _0x1a23f3.length; _0x2d592a++) {
            _0x3f5bda = (_0x3f5bda + 1) % 256;
            _0x3752ef = (_0x3752ef + _0x15c0a5[_0x3f5bda]) % 256;
            _0x10f553 = _0x15c0a5[_0x3f5bda];
            _0x15c0a5[_0x3f5bda] = _0x15c0a5[_0x3752ef];
            _0x15c0a5[_0x3752ef] = _0x10f553;
            _0x3ffdfb += String.fromCharCode(_0x1a23f3.charCodeAt(_0x2d592a) ^ _0x15c0a5[(_0x15c0a5[_0x3f5bda] + _0x15c0a5[_0x3752ef]) % 256]);
          }
          return _0x3ffdfb;
        };
        _0x52bd.dQxTLP = _0x1c1911;
        _0x548fd9 = arguments;
        _0x52bd.ksnVVw = true;
      }
      const _0x495ee7 = _0x2bbf17[0];
      const _0x271d92 = _0x49de28 + _0x495ee7;
      const _0xfd10c5 = _0x548fd9[_0x271d92];
      if (!_0xfd10c5) {
        if (_0x52bd.pdQZYO === undefined) {
          _0x52bd.pdQZYO = true;
        }
        _0x5e5336 = _0x52bd.dQxTLP(_0x5e5336, _0x109eff);
        _0x548fd9[_0x271d92] = _0x5e5336;
      } else {
        _0x5e5336 = _0xfd10c5;
      }
      return _0x5e5336;
    };
    return _0x52bd(_0x548fd9, _0x57341b);
  }
  _0x452dd8.pattern = "attp2";
  _0x452dd8.react = '✨';
  _0x452dd8.alias = ["texttogif2"];
  _0x452dd8.desc = "it converts a text to gif sticker.";
  _0x452dd8.category = "convert";
  _0x452dd8.use = ".attp2 HI";
  _0x452dd8.filename = __filename;
  cmd(_0x452dd8, async (_0x214ffb, _0x3e0ec7, _0x5d083f, {
    from: _0x7dd782,
    l: _0x490bc6,
    quoted: _0x570a0d,
    body: _0xd72dd1,
    isCmd: _0xa28f8f,
    command: _0x97751,
    args: _0x5ae891,
    q: _0xeec49a,
    isGroup: _0x2d9c16,
    sender: _0x42a03d,
    senderNumber: _0xb28777,
    botNumber2: _0x149d98,
    botNumber: _0x3e4047,
    pushname: _0x30a490,
    isMe: _0x44d4c8,
    isOwner: _0xc3fbda,
    groupMetadata: _0x5b8f53,
    groupName: _0x19406e,
    participants: _0x2a2106,
    groupAdmins: _0x55a1c2,
    isBotAdmins: _0x57d6ca,
    isAdmins: _0x4bb51b,
    reply: _0x4c7ff6
  }) => {
    try {
      if (!_0xeec49a) {
        return await _0x4c7ff6("*Please give me a text !*");
      }
      let _0x2d6c01 = await getBuffer("https://api-brunosobrino-dcaf9040.koyeb.app/api/maker/attp?text=" + _0xeec49a);
      const _0x69a857 = {
        quoted: _0x3e0ec7
      };
      await _0x214ffb.sendMessage(_0x7dd782, {
        'sticker': await videoToWebp(_0x2d6c01)
      }, _0x69a857);
    } catch (_0x2399e0) {
      _0x490bc6(_0x2399e0);
    }
  });
  const _0x310dfa = {
    pattern: "ttp",
    react: '✨',
    alias: ["t2p", "ttpdl"],
    desc: "it converts a text to sticker.",
    category: "convert",
    use: ".ttp HI",
    filename: __filename
  };
  cmd(_0x310dfa, async (_0x33fa4f, _0x3838d5, _0x4b5672, {
    from: _0x36c222,
    l: _0x82eaa1,
    quoted: _0x8e0df9,
    body: _0x2514b7,
    isCmd: _0x48993b,
    command: _0x2c5cde,
    args: _0x100348,
    q: _0x14f281,
    isGroup: _0x114085,
    sender: _0x30d2d1,
    senderNumber: _0xcbdbaa,
    botNumber2: _0x59cd18,
    botNumber: _0x1c8dd2,
    pushname: _0x1a3282,
    isMe: _0x11de28,
    isOwner: _0x34c3eb,
    groupMetadata: _0x16fb10,
    groupName: _0x3c8189,
    participants: _0x9a0763,
    groupAdmins: _0x3d0040,
    isBotAdmins: _0x22357e,
    isAdmins: _0xfb33e2,
    reply: _0x4de8c7
  }) => {
    try {
      if (!_0x14f281) {
        return await _0x4de8c7("*Please give me a text !*");
      }
      let _0x5b6406 = await getBuffer("https://api-fix.onrender.com//api/maker/ttp?text=" + _0x14f281);
      let _0xd22d10 = new Sticker(_0x5b6406, {
        'pack': "X-BYTE",
        'author': "Hamza",
        'type': _0x14f281.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x57b5dd = await _0xd22d10.toBuffer();
      const _0x238bc2 = {
        sticker: _0x57b5dd
      };
      const _0x3901bf = {
        quoted: _0x3838d5
      };
      return _0x33fa4f.sendMessage(_0x36c222, _0x238bc2, _0x3901bf);
    } catch (_0x5e4439) {
      _0x82eaa1(_0x5e4439);
    }
  });
  const _0x386a0c = {
    pattern: "sticker",
    react: '🔮',
    alias: ['s', "stic"],
    desc: descg2
  };
  function _0x19d345(_0x72a9cb, _0x89c90a, _0xfaa974, _0x3b9bc6, _0x1a56fe) {
    return _0x52bd(_0xfaa974 + 0x92, _0x3b9bc6);
  }
  _0x386a0c.category = "convert";
  _0x386a0c.use = ".sticker <Reply to image>";
  _0x386a0c.filename = __filename;
  cmd(_0x386a0c, async (_0x198831, _0x219f2a, _0x1e4054, {
    from: _0x4918c4,
    l: _0x300a7d,
    quoted: _0x35b52f,
    body: _0x84153e,
    isCmd: _0x5a27ee,
    command: _0x5906ba,
    args: _0x10e8ed,
    q: _0x498a2b,
    isGroup: _0x408ce8,
    sender: _0x170a53,
    senderNumber: _0x4ccaf1,
    botNumber2: _0x49515a,
    botNumber: _0x37054e,
    pushname: _0x29c664,
    isMe: _0x2f41a0,
    isOwner: _0x52cf20,
    groupMetadata: _0x4d4870,
    groupName: _0x895a12,
    participants: _0x5bccca,
    groupAdmins: _0x864960,
    isBotAdmins: _0x256a6e,
    isAdmins: _0x7ee87f,
    reply: _0x1cee53
  }) => {
    try {
      const _0x5f04aa = _0x1e4054.quoted ? _0x1e4054.quoted.type === "viewOnceMessage" : false;
      const _0x1d6cd7 = _0x1e4054.quoted ? _0x1e4054.quoted.type === "imageMessage" || (_0x5f04aa ? _0x1e4054.quoted.msg.type === "imageMessage" : false) : false;
      const _0x440e93 = _0x1e4054.quoted ? _0x1e4054.quoted.type === "stickerMessage" : false;
      if (_0x1e4054.type === "imageMessage" || _0x1d6cd7) {
        var _0x183de4 = getRandom('');
        if (_0x1d6cd7) {
          await _0x1e4054.quoted.download(_0x183de4);
        } else {
          await _0x1e4054.download(_0x183de4);
        }
        let _0x49c39e = new Sticker(_0x183de4 + ".jpg", {
          'pack': _0x29c664,
          'author': '',
          'type': _0x498a2b.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x810c8c = await _0x49c39e.toBuffer();
        const _0x553638 = {
          sticker: _0x810c8c
        };
        const _0x459943 = {
          quoted: _0x219f2a
        };
        return _0x198831.sendMessage(_0x4918c4, _0x553638, _0x459943);
      } else {
        if (_0x440e93) {
          var _0xbca998 = getRandom('');
          await _0x1e4054.quoted.download(_0xbca998);
          let _0x197cc1 = new Sticker(_0xbca998 + ".webp", {
            'pack': _0x29c664,
            'author': '',
            'type': _0x498a2b.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x4b,
            'background': "transparent"
          });
          const _0x726b33 = await _0x197cc1.toBuffer();
          const _0x21ec97 = {
            sticker: _0x726b33
          };
          const _0xdb4027 = {
            quoted: _0x219f2a
          };
          return _0x198831.sendMessage(_0x4918c4, _0x21ec97, _0xdb4027);
        } else {
          return await _0x1cee53(imgmsg2);
        }
      }
    } catch (_0x350372) {
      _0x1cee53("*Error !!*");
      _0x300a7d(_0x350372);
    }
  });
  const _0x2d0e49 = {
    pattern: "emojimix",
    react: '😁',
    desc: "To convert 2 imoji to 1",
    category: "convert",
    use: ".emojimix"
  };
  function _0x490b92(_0x36a586, _0x385fc3, _0x26fbcf, _0x399b0f, _0x21b25a) {
    return _0x52bd(_0x385fc3 - 0x304, _0x26fbcf);
  }
  _0x2d0e49.filename = __filename;
  cmd(_0x2d0e49, async (_0x5a3999, _0x1a30de, _0x2b03f4, {
    from: _0x22a372,
    prefix: _0x59efe3,
    l: _0x4eb308,
    quoted: _0x42667c,
    body: _0x457281,
    isCmd: _0x55fc81,
    command: _0x2c6f86,
    args: _0xbf381a,
    q: _0x1fd7d6,
    isGroup: _0x1828a3,
    sender: _0x130cd2,
    senderNumber: _0x467bb6,
    botNumber2: _0x1cac60,
    botNumber: _0x4567c1,
    pushname: _0x5e4911,
    isMe: _0x5a7bc4,
    isOwner: _0x9b8bf7,
    groupMetadata: _0x3278dc,
    groupName: _0x4403dc,
    participants: _0x20c6b9,
    groupAdmins: _0x1fbc9c,
    isBotAdmins: _0x396b55,
    isAdmins: _0x114cdc,
    reply: _0x29a6e7
  }) => {
    try {
      let [_0x2ad1cf, _0x507002] = _0x1fd7d6.split`+`;
      if (!_0x2ad1cf) {
        throw "Example: " + (_0x59efe3 + _0x2c6f86) + " 😅+🤔";
      }
      if (!_0x507002) {
        throw "Example: " + (_0x59efe3 + _0x2c6f86) + " 😅+🤔";
      }
      let _0x3abcd5 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x2ad1cf) + '_' + encodeURIComponent(_0x507002));
      for (let _0x5a0b84 of _0x3abcd5.results) {
        let _0x4fdfbb = await _0x5a3999.sendImageAsSticker(_0x22a372, _0x5a0b84.url, _0x1a30de, {
          'packname': global.packname,
          'author': global.author,
          'categories': _0x5a0b84.tags
        });
        await fs.unlinkSync(_0x4fdfbb);
      }
      const _0x5533e6 = {
        text: '✅',
        key: _0x1a30de.key
      };
      const _0x38fedb = {
        react: _0x5533e6
      };
      await _0x5a3999.sendMessage(_0x22a372, _0x38fedb);
    } catch (_0x20b019) {
      _0x29a6e7("*Error !!*");
      _0x4eb308(_0x20b019);
    }
  });
  const _0x524f3c = {
    pattern: "trt",
    react: '🔖',
    desc: "To convert languages"
  };
  function _0x4ad0f3(_0x35c3e6, _0x54632b, _0x4ca2a5, _0x57eac1, _0x7e65af) {
    return _0x52bd(_0x57eac1 + 0x1e0, _0x54632b);
  }
  _0x524f3c.category = "convert";
  _0x524f3c.use = ".trt";
  _0x524f3c.filename = __filename;
  cmd(_0x524f3c, async (_0x48e596, _0x280d02, _0x4f50ad, {
    from: _0x2ca15d,
    prefix: _0x48b6da,
    l: _0xfa6d72,
    quoted: _0x41534a,
    body: _0x16d17f,
    isCmd: _0x242f98,
    command: _0x3058a7,
    args: _0x27c40b,
    q: _0x32277d,
    isGroup: _0x21cfa7,
    sender: _0x571b89,
    senderNumber: _0x4dd63f,
    botNumber2: _0x468b2d,
    botNumber: _0xd99255,
    pushname: _0x5b2dfb,
    isMe: _0x1baf09,
    isOwner: _0x335f00,
    groupMetadata: _0x178b2d,
    groupName: _0x3504f2,
    participants: _0x452ea8,
    groupAdmins: _0x38cbfb,
    isBotAdmins: _0x2e3422,
    isAdmins: _0x5a38c1,
    reply: _0x20fc28
  }) => {
    try {
      if (!_0x32277d) {
        return mreply("Usage: .trt <language code> <text> or reply message");
      }
      if (_0x32277d && _0x280d02.quoted && _0x280d02.quoted.text) {
        let _0x4f1a17 = _0x32277d.slice(0, 2);
        try {
          let _0x1b0513 = _0x280d02.quoted.q;
          const _0x46b233 = {
            'to': _0x4f1a17
          };
          let _0x36ad6f = await translate('' + _0x1b0513, _0x46b233);
          _0x20fc28(_0x36ad6f[0]);
        } catch {
          return _0x20fc28(" Language code not supported.");
        }
      } else {
        if (_0x32277d) {
          let _0x21e1f3 = _0x32277d.slice(0, 2);
          let _0x4a419c = _0x32277d.substring(2).trim();
          const _0x5efb37 = {
            'to': _0x21e1f3
          };
          let _0x1f33b0 = await translate('' + _0x4a419c, _0x5efb37);
          _0x20fc28(_0x1f33b0[0]);
        }
      }
      const _0x5a6920 = {
        text: '✅',
        key: _0x280d02.key
      };
      const _0x47110d = {
        react: _0x5a6920
      };
      await _0x48e596.sendMessage(_0x2ca15d, _0x47110d);
    } catch (_0x1eaf54) {
      _0x20fc28("*Error !!*");
      _0xfa6d72(_0x1eaf54);
    }
  });
  const _0x3e71e4 = {
    pattern: "toimg",
    react: '🔮',
    desc: descg1,
    category: "convert",
    use: ".sticker <Reply to image>",
    filename: __filename
  };
  cmd(_0x3e71e4, async (_0x55a317, _0x58d341, _0x596c82, {
    from: _0x33d13d,
    l: _0x30cd26,
    quoted: _0x324eb6,
    body: _0x8c15a9,
    isCmd: _0xc3fe36,
    command: _0x1ffeff,
    args: _0x44e9f8,
    q: _0x5589ed,
    isGroup: _0x5c6e81,
    sender: _0x4988a6,
    senderNumber: _0x30a9c1,
    botNumber2: _0x3c4aea,
    botNumber: _0x210d65,
    pushname: _0x4c70ee,
    isMe: _0x323d52,
    isOwner: _0x2b6203,
    groupMetadata: _0x554c7d,
    groupName: _0x2af1b2,
    participants: _0x43cd39,
    groupAdmins: _0x5bf7c1,
    isBotAdmins: _0x47ce54,
    isAdmins: _0x3847d9,
    reply: _0x1e0d5c
  }) => {
    try {
      const _0x1435cb = _0x596c82.quoted ? _0x596c82.quoted.type === "stickerMessage" : false;
      if (_0x1435cb) {
        var _0x56c622 = getRandom('');
        let _0x15e3b9 = _0x1435cb ? await _0x596c82.quoted.download(_0x56c622) : await _0x596c82.download(_0x56c622);
        let _0xfec4b9 = await fileType.fromBuffer(_0x15e3b9);
        await fs.promises.writeFile('./' + _0xfec4b9.ext, _0x15e3b9);
        const _0x511ba9 = {
          quoted: _0x58d341
        };
        await _0x55a317.sendMessage(_0x33d13d, {
          'image': fs.readFileSync('./' + _0xfec4b9.ext),
          'caption': config.FOOTER
        }, _0x511ba9);
      } else {
        return await _0x1e0d5c(imgmsg1);
      }
    } catch (_0x4de4a0) {
      _0x1e0d5c("*Error !!*");
      _0x30cd26(_0x4de4a0);
    }
  });
  const _0x7e4619 = {
    pattern: "tomp3",
    react: '🔊',
    alias: ["toaudio", "tosong"],
    desc: "It converts your replied video to audio [mp3].",
    category: "convert",
    use: ".toptt <Reply to video>",
    filename: __filename
  };
  cmd(_0x7e4619, async (_0x2499da, _0x5829a9, _0x170fe4, {
    from: _0x559325,
    l: _0x111e29,
    quoted: _0x4c00f9,
    body: _0x42629d,
    isCmd: _0x20ce37,
    command: _0x4d58dc,
    args: _0xbcf01a,
    q: _0x3e6039,
    isGroup: _0x52b115,
    sender: _0x32011e,
    senderNumber: _0x1db6fb,
    botNumber2: _0x23ee35,
    botNumber: _0x533534,
    pushname: _0x478eef,
    isMe: _0x39ec46,
    isOwner: _0xc82d86,
    groupMetadata: _0x1cb5af,
    groupName: _0x2c84ff,
    participants: _0x37d377,
    groupAdmins: _0x5dedae,
    isBotAdmins: _0x3b29d8,
    isAdmins: _0x7d29d4,
    reply: _0x54bf7e
  }) => {
    try {
      let _0x55f7de = _0x170fe4.quoted ? _0x170fe4.quoted.type === "videoMessage" : _0x170fe4 ? _0x170fe4.type === "videoMessage" : false;
      if (!_0x55f7de) {
        return await _0x54bf7e("*Reply to a video !*");
      }
      let _0x2f421c = _0x170fe4.quoted ? await _0x170fe4.quoted.download() : await _0x170fe4.download();
      let _0x4dc71a = await ffmpeg(_0x2f421c, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
      const _0x16da1c = {
        audio: _0x4dc71a.options,
        mimetype: "audio/mpeg"
      };
      let _0x1483cb = await _0x2499da.sendMessage(_0x170fe4.chat, _0x16da1c, {
        'quoted': _0x170fe4
      });
      const _0x2a9d25 = {
        text: '🎼',
        key: _0x1483cb.key
      };
      const _0x442454 = {
        react: _0x2a9d25
      };
      await _0x2499da.sendMessage(_0x559325, _0x442454);
    } catch (_0x4983d9) {
      _0x54bf7e("*Error !!*");
      _0x111e29(_0x4983d9);
    }
  });
  const _0x307812 = {
    pattern: "toqr",
    react: '🔊',
    desc: "It converts your replied video to audio [mp3].",
    category: "convert",
    use: ".toqr <Reply a text or a url>",
    filename: __filename
  };
  cmd(_0x307812, async (_0x1a50e7, _0x3bef70, _0x4f6bff, {
    from: _0x596993,
    l: _0x5e793d,
    quoted: _0x456aca,
    body: _0x219e07,
    prefix: _0x1134cd,
    isCmd: _0x5403e1,
    command: _0xb93d37,
    args: _0x107a3f,
    q: _0x1d8ab8,
    isGroup: _0x55a1cc,
    sender: _0x3f8c53,
    senderNumber: _0x579e06,
    botNumber2: _0x1c4074,
    botNumber: _0x252f33,
    pushname: _0x160215,
    isMe: _0x1741b2,
    isOwner: _0xa49070,
    groupMetadata: _0x10da6e,
    groupName: _0x17973a,
    participants: _0x19ec45,
    groupAdmins: _0xfba9cf,
    isBotAdmins: _0x1cd293,
    isAdmins: _0x36e996,
    reply: _0x595308
  }) => {
    try {
      if (!_0x1d8ab8) {
        return _0x595308(" Please include link or text!");
      }
      const _0x191ab0 = require("qrcode");
      const _0x382bf0 = {
        scale: 0x23
      };
      let _0x26f376 = await _0x191ab0.toDataURL(_0x1d8ab8, _0x382bf0);
      let _0x1ecad1 = new Buffer.from(_0x26f376.replace("data:image/png;base64,", ''), "base64");
      let _0x14e5f9 = getRandom(".jpg");
      await fs.writeFileSync('./' + _0x14e5f9, _0x1ecad1);
      let _0x3747e2 = fs.readFileSync('./' + _0x14e5f9);
      const _0xb2e354 = {
        image: _0x3747e2,
        caption: "Here you go!"
      };
      const _0xc0707c = {
        quoted: _0x4f6bff
      };
      await _0x1a50e7.sendMessage(_0x596993, _0xb2e354, _0xc0707c);
      setTimeout(() => {
        fs.unlinkSync(_0x14e5f9);
      }, 10000);
      const _0x44636b = {
        text: '🎼',
        key: _0x3bef70.key
      };
      const _0x11eab7 = {
        react: _0x44636b
      };
      await _0x1a50e7.sendMessage(_0x596993, _0x11eab7);
    } catch (_0x1ad72d) {
      _0x595308("*Error !!*");
      _0x5e793d(_0x1ad72d);
    }
  });
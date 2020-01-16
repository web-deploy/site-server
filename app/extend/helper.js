'use strict';

module.exports = {
  uuid(len, rx) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
    const uuid = [];
    const radix = rx || chars.length;
    let i;

    if (len) {
      // eslint-disable-next-line no-bitwise
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 || Math.random() * 16;
          // eslint-disable-next-line no-bitwise
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  },

  toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  },
};

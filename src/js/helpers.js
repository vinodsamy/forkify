import { TIMEOUT_SEC } from './config.js';
export const getJSON = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    if (!res.ok) {
      throw new Error('Invalid id');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

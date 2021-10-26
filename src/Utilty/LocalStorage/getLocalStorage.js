import { AES, enc, } from "crypto-js/";

import { keyBase } from '../config'

export const getLocalStorage = (keychainName, pw) => {
    if (!keychainName) return console.log('no chain name selected');

    const existingData = localStorage.getItem(`${keyBase}-${keychainName}`);
    if (!existingData) return console.log('missing chain data, please load from backup');

    try {

        const bytes = AES.decrypt(existingData, pw);
        const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
        return decryptedData;

    } catch (error) { alert('unauthorized') };
};
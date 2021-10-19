import { AES, enc, } from "crypto-js/";
const keyBase = 'cryptoKC';

export const getUserPassword = () => prompt('keychain access password');

export const setLocalStorage = (keychainName, pw, arr) => {
    if (!keychainName || !pw) return
    localStorage.setItem(`${keyBase}-${keychainName}`, AES.encrypt(JSON.stringify(arr), pw).toString())
};

export const getLocalStorage = (keychainName, pw) => {
    if (!keychainName) return console.log('no chain name selected');

    const existingData = localStorage.getItem(`${keyBase}-${keychainName}`);
    console.log('here', existingData)
    if (pw === null || !existingData) return console.log('pw is null or existing data undefined');

    try {

        const bytes = AES.decrypt(existingData, pw);
        const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
        return decryptedData;

    } catch (error) { alert('unauthorized') };
};
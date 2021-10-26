import { AES } from "crypto-js/";
import { keyBase } from '../config'

export const setLocalStorage = (keychainName, pw, arr) => {
    if (!keychainName || !pw) return
    localStorage.setItem(`${keyBase}-${keychainName}`, AES.encrypt(JSON.stringify(arr), pw).toString())
};
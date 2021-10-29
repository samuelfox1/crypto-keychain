import { keyBase } from '../config'

export const getLocalStorageEncrypted = (keychainName) => localStorage.getItem(`${keyBase}-${keychainName}`);
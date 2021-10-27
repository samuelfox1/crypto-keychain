import { keyBase } from "../config"

export const deleteKeychain = (keychainName) => localStorage.removeItem(`${keyBase}-${keychainName}`)
import { createPassword } from "./createPassword";
import { getUserPassword } from './getUserPassword'
import { copyToClipboard, focusOnElement } from "./copyToClipboard";
import { getExistingChains } from "./getExistingChains";
import { getNewChainName } from "./renameKeychain";
import { getLocalStorageDecrypted, getLocalStorageEncrypted, setLocalStorage, deleteKeychain } from "./LocalStorage";

export {
    createPassword,
    getUserPassword,
    copyToClipboard,
    focusOnElement,
    getExistingChains,
    getLocalStorageDecrypted,
    getLocalStorageEncrypted,
    setLocalStorage,
    getNewChainName,
    deleteKeychain
}
import { keyBase } from './config'

export const getExistingChains = () => {
    const keychainNames = [];
    for (const [key] of Object.entries(localStorage)) {
        // format each name by removing the 'keyBase-' text
        const k = key.split('-');
        if (k[0] !== keyBase) continue;
        k.shift();
        keychainNames.push(k.join('-'));
    };
    return keychainNames;
};
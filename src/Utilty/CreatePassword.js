const options = {
    number: '0123456789',
    special: `!#$%&*+-/;<=>?@^_'|~\\`,
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
};


const generatePasswordString = ({ values, length }) => {
    let str = '';
    let includedTypes = [];

    const randomNum = (len) => Math.floor(Math.random() * len);

    for (let i = 0; i < length; i++) {
        const randomKey = values[randomNum(values.length)];
        str += options[randomKey][randomNum(options[randomKey].length)];
        if (includedTypes.indexOf(randomKey) === -1) includedTypes.push(randomKey);
    };

    if (includedTypes.length === values.length) return str;

    return generatePasswordString({ values, length });
}

const defaultConfig = {
    values: [
        "number",
        "special",
        "lowercase",
        "uppercase"
    ],
    length: 128
}

export const createPassword = (config = defaultConfig) => (
    // validate there are selected values & a password length before calling
    config.values.length
    && config.length
    && generatePasswordString(config)
);
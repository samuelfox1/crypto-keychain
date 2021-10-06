const passwordText = $(`#password`);
const generateBtn = $(`#generate`);
const inputOptions = $(`form`);
const options = {
    lowerCaseLetter: 'abcdefghijklmnopqrstuvwxyz',
    upperCaseLetter: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
    number: '0123456789',
    specialCharacter: '!#$%&*+-/;<=>?@\^_`|~'
};

passwordText.attr('placeholder', '\ngenerate a password\n---\nsave it in a private keychain');

const updateRangeLabel = (num) => $('label[for=length]').text(`length: ${num}`);
const handleInput = ({ target }) => target.type === 'range' && updateRangeLabel(target.value);

const collectInputValues = () => {
    const config = { values: [], length: null };
    for (const [_, val] of Object.entries(inputOptions[0])) {
        const { name, value, checked } = val;
        if (!name) continue;
        checked && name !== 'length' ? config.values.push(name) : config.length = value;
    };
    return config;
}

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

const generatePassword = (e) => {
    passwordText.text(generatePasswordString(collectInputValues()));
    $('#save-pw').removeAttr('hidden');
};

const focusAndCopyToCb = (el) => {
    const textVal = el.text().trim()
    if (!textVal) return
    el.select() && el.focus();
    navigator.clipboard.writeText(textVal)
        .then(() => {
            $('#alert').text('coppied to clipboard');
            setTimeout(() => $('#alert').text(''), 3000);
        });
};

inputOptions.on(`input`, handleInput);
generateBtn.click(generatePassword);
// passwordText.click(() => focusAndCopyToCb(passwordText));
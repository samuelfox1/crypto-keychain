const passwordText = $(`#password`);
const generateBtn = $(`#generate`);
const inputOptions = $(`form`);
const options = {
    lowerCaseLetter: 'abcdefghijklmnopqrstuvwxyz',
    upperCaseLetter: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
    number: '0123456789',
    specialCharacter: '!#$%&*+-/;<=>?@\^_`|~ '
};

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
    const pw = generatePasswordString(collectInputValues())
    passwordText.text(pw)

    // navigator.clipboard.writeText(pw).then(() => $('#alert').text('coppied to clipboard!'));
    $('#save-pw').removeAttr('hidden')

}

const focusAndHighlight = (el) => {
    console.log(el)
    el.select();
    el.focus();
}

inputOptions.on(`input`, handleInput)
passwordText.click(() => focusAndHighlight(passwordText))
generateBtn.click(generatePassword)
const passwordText = $(`#password`);
const generateBtn = $(`#generate`);
const inputOptions = $(`form`)
const options = {
    lowerCaseLetter: 'abcdefghijklmnopqrstuvwxyz',
    upperCaseLetter: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
    number: '0123456789',
    specialCharacter: '!"#$%&*+-/;<=>?@\^_`|~'
}

const updateRangeLabel = (num) => $('label[for=length]').text(`length: ${num}`)
const handleInput = ({ target }) => target.type === 'range' && updateRangeLabel(target.value)

const collectInputValues = () => {
    const config = { values: [], length: null }
    for (const [_, val] of Object.entries(inputOptions[0])) {
        const { name, value, checked } = val
        if (!name) continue
        checked && name !== 'length' ? config.values.push(name) : config.length = value
    }

    return config
}

const generatePasswordString = ({ values, length }) => {
    let str = ''

    const randomNum = (len) => Math.floor(Math.random() * len)
    for (let i = 0; i < length; i++) {
        const randomOption = values[randomNum(values.length)]
        str += options[randomOption][randomNum(options[randomOption].length)]
    }

    const validateString = (str) => {
        // regex to verify the password containes atleast one of each selected option

        // if not, run again
        generatePasswordString({ values, length })
    }

    return str
}

const generatePassword = () => {
    const configObj = collectInputValues()
    const pw = generatePasswordString(configObj)
    $('#password').text(pw)
    navigator.clipboard.writeText(pw).then(() => {
        $('#alert').text('coppied to clipboard!')
    }, () => {
        /* clipboard write failed */
    });
}

inputOptions.on(`input`, handleInput)
generateBtn.click(generatePassword)
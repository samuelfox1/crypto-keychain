const keychainBtn = $('#my-keychain')
const savePwForm = $('#save-pw')
const displayedKeys = $('#keychain')
const lsKey = 'cryptoPw'

const getLS = (pw) => {
    const existingData = localStorage.getItem(lsKey)
    if (!existingData) return ''
    // Decrypt
    try {
        const bytes = CryptoJS.AES.decrypt(existingData, pw);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData; // [{ name: 'test1', value: 'abc' }, { name: 'test2', value: '123' }]        
    } catch (error) {
        console.error(error)
        alert('unauthorized')
    }
}
const setLs = (arr, pw) => {
    // Encrypt
    localStorage.setItem(lsKey, CryptoJS.AES.encrypt(JSON.stringify(arr), pw).toString())
}
const promptForPw = () => prompt('enter keychain password')

const addPwToKeychain = (e) => {
    e.preventDefault()
    const pwName = $('input[name=save]').val()
    if (!pwName) return alert('must enter a name')
    const pw = promptForPw()
    const arr = getLS(pw) || []
    arr.unshift({ name: pwName, value: passwordText.val() })
    setLs(arr, pw)

    if (!parseInt(keychainBtn.data('view'))) displayKeychain(arr)
}

const displayKeychain = (arr) => {
    displayedKeys.empty()
    arr.map(({ name, value }, i) => displayedKeys.append(`
    <div class="pw" data-name=${name} data-pw="${value}" data-i="${i}">
    <textarea readonly class="pw-text">${name}</textarea>
    <i class="fas fa-backspace"></i>
    <i class="far fa-eye"></i>
    </div>
    `))
}

const handleViewKeychain = ({ target }) => {
    const view = parseInt(target.dataset.view)
    if (!view) {
        keychainBtn.text('view keychain')
        target.dataset.view = 1
        displayedKeys.empty()
        return
    }

    const pw = promptForPw()
    const arr = getLS(pw)
    if (!arr) {
        displayedKeys.append('<h2>keychain is empty</h2>')
        setTimeout(() => displayedKeys.empty(), 3000)
        return
    }
    keychainBtn.text('hide keychain')
    displayKeychain(arr)
    target.dataset.view = 0

}

const togglePwView = (el) => {
    const { name, pw } = el[0].dataset
    const icon = el.find('i.far')
    const p = el.find('textarea')

    icon.toggleClass('fa-eye',)
    icon.toggleClass('fa-eye-slash',)

    if (icon.hasClass('fa-eye-slash')) p.text(`${pw}`)
    else p.text(`${name} `)
}

const deletePw = (el) => {
    const { i, name } = el[0].dataset
    if (!confirm(`delete password for ${name}?`)) return
    const pw = promptForPw()
    const arr = getLS(pw)
    const filtered = arr.filter((_, idx) => idx !== parseInt(i))
    setLs(filtered, pw)
    displayKeychain(filtered)
}

savePwForm.on('submit', addPwToKeychain)
keychainBtn.click(handleViewKeychain)
displayedKeys.on('click', 'i.far', function (e) { togglePwView($(this).parent()) })
displayedKeys.on('click', 'i.fas', function (e) { deletePw($(this).parent()) })
displayedKeys.on('click', 'textarea', function (e) {
    console.log($(this))
    const el = $(this)
    focusAndHighlight(el)
})
const viewKeychainBtn = $('#my-keychain')
const savePwForm = $('#save-pw')
const displayedKeys = $('#keychain')
const lsKey = 'cryptoPw'

const promptForPw = () => prompt('enter keychain access password')
const setLocalStore = (arr, pw) => localStorage.setItem(lsKey, CryptoJS.AES.encrypt(JSON.stringify(arr), pw).toString())
const getLocalStore = (pw) => {
    const existingData = localStorage.getItem(lsKey)
    if (pw === null || !existingData) return
    try {

        const bytes = CryptoJS.AES.decrypt(existingData, pw);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;

    } catch (error) { alert('unauthorized') }
}

const addPwToKeychain = (e) => {
    e.preventDefault()
    const pwName = $('input[name=save]')
    if (!pwName.val()) return alert('must enter a name')
    const pw = promptForPw()
    const arr = getLocalStore(pw) || []
    arr.unshift({ name: pwName.val(), value: passwordText.val() })
    setLocalStore(arr, pw)
    pwName.val('')
    passwordText.text('')
    $('#save-pw').attr('hidden', '_')
    if (!parseInt(viewKeychainBtn.data('view'))) displayKeychain(arr)
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

const setViewKeychainBtnDefaults = () => {
    viewKeychainBtn.text('view keychain')
    viewKeychainBtn.data('view', 1)
    displayedKeys.empty()
}

const handleViewKeychain = () => {
    if (!viewKeychainBtn.data('view')) return setViewKeychainBtnDefaults()

    const pw = promptForPw()
    const arr = getLocalStore(pw)
    if (!arr) return
    if (!arr.length) return displayedKeys.append('<h2>keychain is empty</h2>') && setTimeout(() => displayedKeys.empty(), 3000)

    viewKeychainBtn.text('hide keychain')
    displayKeychain(arr)
    viewKeychainBtn.data('view', 0)
}

const togglePwView = (parentEl) => {
    const { name, pw } = parentEl.data()
    const icon = parentEl.find('i.far')

    icon.toggleClass('fa-eye',)
    icon.toggleClass('fa-eye-slash',)
    parentEl.find('textarea').text(`${icon.hasClass('fa-eye-slash') ? pw : name} `)
}

const deletePw = (el) => {
    const { name, i } = el.data()
    if (!confirm(`delete password: ${name}?`)) return
    const pw = promptForPw()
    const arr = getLocalStore(pw)
    const filtered = arr.filter((_, idx) => idx !== parseInt(i))
    setLocalStore(filtered, pw)
    !filtered.length ? setViewKeychainBtnDefaults() : displayKeychain(filtered)
}


/* ------event handlers------*/
savePwForm.on('submit', addPwToKeychain)
viewKeychainBtn.click(handleViewKeychain)
displayedKeys.on('click', 'i.far', function () { togglePwView($(this).parent()) })
displayedKeys.on('click', 'i.fas', function () { deletePw($(this).parent()) })
displayedKeys.on('click', 'textarea', function () {
    const parentEl = $(this).parent()
    const displayedPw = parentEl.find('.fa-eye-slash').length
    if (displayedPw) {
        focusAndCopyToCb($(this))
        togglePwView(parentEl)
    }
})
const dashboard = $('.card-body');
const dashboardDefault = $('#dashboard-default')
const addChainIcon = $('.new-chain');
const viewKeychainBtn = $('#my-keychain');
const savePwForm = $('#save-pw');
const displayedKeys = $('#keychain-container');
const selectedChain = $('#selected-chain');
const chainOption = $('option');
const keyBase = 'cryptoKC';

dashboardDefault.append(`
<h1>--select-- or <i class="new-chain far fa-plus-square"></i> to get started</h1>
<h2>1. choose a keychain</h2>
<h2>2. generate a password</h2>
<h2>3. save the password to your chain</h2>
<h2>4. view saved paswords</h2>
`)
const getUserPw = () => prompt('enter keychain access password');
const getSelectedChainName = () => selectedChain.val()
const selectedChainLSKey = () => `${keyBase}-${getSelectedChainName()}`
const setLocalStore = (arr, pw) => {
    if (!getSelectedChainName()) return
    localStorage.setItem(selectedChainLSKey(), CryptoJS.AES.encrypt(JSON.stringify(arr), pw).toString())
};
const getLocalStore = (pw) => {
    if (!getSelectedChainName()) return console.log('no chain name selected');

    const existingData = localStorage.getItem(selectedChainLSKey());
    if (pw === null || !existingData) return console.log('pw is null or existing data undefined');
    try {

        const bytes = CryptoJS.AES.decrypt(existingData, pw);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;

    } catch (error) { alert('unauthorized') };
};

const addPwToKeychain = (e) => {
    e.preventDefault();
    const pwName = $('input[name=save]');
    if (!pwName.val()) return alert('must enter a name');
    const pw = getUserPw();
    const arr = getLocalStore(pw) || [];
    arr.unshift({ name: pwName.val(), value: passwordText.val() });
    setLocalStore(arr, pw);
    pwName.val('');
    passwordText.val('');
    $('#save-pw').attr('hidden', '_');
    if (!parseInt(viewKeychainBtn.data('view'))) displayKeychain(arr);
};

const displayKeychain = (arr) => {
    displayedKeys.empty();
    arr.map(({ name, value }, i) => displayedKeys.append(`
    <div class="pw" data-name=${name} data-pw="${value}" data-i="${i}">
    <textarea readonly class="pw-text">${name}</textarea>
    <i class="fas fa-backspace"></i>
    <i class="far fa-eye"></i>
    </div>
    `));
};

const setViewKeychainBtnDefaults = () => {
    viewKeychainBtn.text('view keychain');
    viewKeychainBtn.data('view', 1);
    displayedKeys.addClass('hidden');
    displayedKeys.empty();
};

const handleViewKeychain = () => {
    if (!viewKeychainBtn.data('view')) return setViewKeychainBtnDefaults();

    const pw = getUserPw();
    const arr = getLocalStore(pw);
    if (!arr) return console.log('!arr');
    displayedKeys.toggleClass('hidden');
    if (!arr.length) return displayedKeys.append('<h2>keychain is empty</h2>') && setTimeout(() => setViewKeychainBtnDefaults(), 3000);

    viewKeychainBtn.text('hide keychain');
    displayKeychain(arr);
    viewKeychainBtn.data('view', 0);
};

const togglePwView = (parentEl) => {
    const { name, pw } = parentEl.data();
    const icon = parentEl.find('i.far');

    icon.toggleClass('fa-eye');
    icon.toggleClass('fa-eye-slash');
    parentEl.find('textarea').text(`${icon.hasClass('fa-eye-slash') ? pw : name} `);
};

const deletePw = (el) => {
    const { name, i } = el.data();
    if (!confirm(`delete password: ${name}?`)) return;
    const pw = getUserPw();
    const arr = getLocalStore(pw);
    const filtered = arr.filter((_, idx) => idx !== parseInt(i));
    setLocalStore(filtered, pw);
    !filtered.length ? setViewKeychainBtnDefaults() : displayKeychain(filtered);
};

const loopThroughChains = (cb) => {
    for (const [key] of Object.entries(localStorage)) {
        const k = key.split('-');
        if (k[0] === keyBase) {
            k.shift();
            cb(k, key,);
        };
    };
};

const toggleDisplayDashboard = () => dashboard.toggleClass('hidden') && dashboardDefault.toggleClass('hidden');
const dashboardIsHidden = () => dashboard.hasClass('hidden')

const validateNewChainName = (newChainName) => {
    let valid = true;
    loopThroughChains((k, key) => { if (k.join('') === newChainName) valid = false });
    return valid;
};
const addNewChain = () => {
    if (!confirm('add a new chain?')) return;
    let newChainName = prompt('new chain name:').toLowerCase();
    if (!validateNewChainName(newChainName)) return alert('name already exists');

    localStorage.setItem(`${keyBase}-${newChainName}`, '');
    loadExistingChains()
    setTimeout(() => {
        selectedChain.val(newChainName)
        setLocalStore([], getUserPw())
        if (dashboardIsHidden()) toggleDisplayDashboard();
    }, 400);
};
const updateKeychainName = () => { };
const deleteKeychain = () => { };

const loadExistingChains = () => {
    selectedChain.empty();
    selectedChain.append(`
    <option value="">--select--</option>
    `);
    loopThroughChains((k, key) => {
        const chainName = k.join('')
        selectedChain.append(`<option value="${chainName}">${chainName}</option>`);
    });
};
loadExistingChains();

const handleSelectedChainName = () => {
    setViewKeychainBtnDefaults()
    if (selectedChain.val() && dashboardIsHidden()) toggleDisplayDashboard()
    if (!selectedChain.val() && !dashboardIsHidden()) toggleDisplayDashboard()
}

const handleRestoreChain = () => {
    const kc = getSelectedChainName()
    if (!kc) return alert('no chain selected')
    console.log('restore')
}
const handleBackupChain = () => {
    const kc = getSelectedChainName()
    if (!kc) return alert('no chain selected')
    // confirm(`backup keychain: ${kc}`)
    const hash = localStorage.getItem(`${keyBase}-${kc}`)
    copyToCb(hash)
}

/* ------event handlers------*/
savePwForm.on('submit', addPwToKeychain);
viewKeychainBtn.click(handleViewKeychain);
displayedKeys.on('click', 'i.far', function () { togglePwView($(this).parent()) });
displayedKeys.on('click', 'i.fas', function () { deletePw($(this).parent()) });
displayedKeys.on('click', 'textarea', function () {
    const parentEl = $(this).parent();
    const displayedPw = parentEl.find('.fa-eye-slash').length;
    if (displayedPw) {
        focusAndCopyToCb($(this));
        togglePwView(parentEl);
    };
});
selectedChain.on('input', handleSelectedChainName)
$('body').on('click', '.new-chain', addNewChain);
$('.fa-upload').click(handleRestoreChain)
$('.fa-download').click(handleBackupChain)
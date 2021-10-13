const navTabButtons = $('#nav-tab')
const navTabContents = $('#nav-tabContent')
const keyBase = 'cryptoKC';


const addNavTabItem = (name) => {
    navTabButtons.append(`
    <button class="nav-link" id="nav-${name}-tab" data-bs-toggle="tab" data-bs-target="#nav-${name}" type="button"
    role="tab" aria-controls="nav-${name}" aria-selected="false">${name}</button>`)
    navTabContents.append(`
    <div class="tab-pane fade show text-center" id="nav-${name}" role="tabpanel" aria-labelledby="nav-${name}-tab">
    ${`${name} content body`}
    </div>`)
}

const loopThroughChains = (cb) => {
    for (const [key] of Object.entries(localStorage)) {
        const k = key.split('-');
        if (k[0] === keyBase) {
            k.shift();
            cb(k, key,);
        };
    };
};

const loadExistingChains = () => {
    const cb = (k, key) => addNavTabItem(k[0])
    loopThroughChains(cb);
};

loadExistingChains();
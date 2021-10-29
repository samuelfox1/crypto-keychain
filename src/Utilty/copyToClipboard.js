export const copyToClipboard = (value) => {

    navigator.clipboard.writeText(value)
        .then(() => console.log(value));
}


export const focusOnElement = (el) => {
    el.select();
};
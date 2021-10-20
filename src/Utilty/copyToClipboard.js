export const copyToClipboard = (value) => {

    navigator.clipboard.writeText(value)
        .then(() => console.log(value));
}


// export const focusAndCopyToCb = (el) => {
//     const textVal = el.text().trim()
//     if (!textVal) return
//     el.select() && el.focus();
//     copyToCb(textVal)
// };
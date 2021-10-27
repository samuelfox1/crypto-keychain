import { getExistingChains } from ".."

export const getNewChainName = () => {
    const existingChains = getExistingChains()

    const collectName = () => {
        const newName = prompt('please enter a new name')

        // if user clicks cancel
        if (newName === null) return null

        // if no name is entered
        if (!newName) return getNewChainName()

        // if name already exists
        if (existingChains.indexOf(newName) !== -1) {
            alert(`${newName} already exists, enter a different name.`)
            return collectName()
        }
        return newName
    }

    return collectName()
}